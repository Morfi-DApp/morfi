import { useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import { Helmet } from "react-helmet";

import { Card, FormField, Loader } from "../components/index";

const RenderCard = ({ data, title }) => {
  if (data?.length > 0) {
    return data.map((post) => <Card key={post._id} {...post} />);
  }
  return (
    <h2 className="mt-5  w-full font-bold  text-[#6449ff] text-xl uppercase">
      {title}
    </h2>
  );
};

const Main = () => {
  const [loading, setLoading] = useState(false);
  const [allPosts, setAllPosts] = useState(null);
  const [searchText, setSearchText] = useState("");
  const [searchResult, setSearchResults] = useState("");
  const [searchTimeout, setSearchTimeout] = useState(null);
  const [error, setError] = useState("");

  const notifyError = () => toast("Error, try again.");
  const notifySuccess = () => toast.success("Success!");

  const fetchPosts = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        "https://dall-e-twsg.onrender.com/api/v1/post",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.ok) {
        const result = await response.json();
        setAllPosts(result.data.reverse());
        notifySuccess();
      }
    } catch (err) {
      setError(err);
      notifyError();
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const handleSearch = (e) => {
    clearTimeout(searchTimeout);
    setSearchText(e.target.value);

    setSearchTimeout(
      setTimeout(() => {
        const result = allPosts.filter(
          (item) =>
            item.name.toLowerCase().includes(searchText.toLocaleLowerCase()) ||
            item.prompt.toLowerCase().includes(searchText.toLocaleLowerCase())
        );
        setSearchResults(result);
      }, 500)
    );
  };

  return (
    <section className="max-w-7xl mx-auto ">
      <Helmet>
        <title> Morfi </title>
      </Helmet>
      <div>
        <h1 className="font-semibold text-[#222328] text-[32px]">
          The Morfi Showcase
        </h1>
        <p className="mt-2 text-[#666e75] text-[14px] max-w-[500px]">
          Browse through a collection of imaginative and visually stunning
          Morfis of other users!
        </p>
      </div>
      <div className="mt-16">
        <FormField
          labelName="Search posts"
          type="text"
          name="text"
          placeholder="Search posts"
          value={searchText}
          handleChange={handleSearch}
        />
      </div>
      <div className="mt-10">
        {loading ? (
          <Loader />
        ) : (
          <>
            {searchText && (
              <h2 className="font-medium text-[#666e75] text-xl mb-3">
                Showing result for
                <span className="text-[#222328] ml-[5px]">{searchText}</span>
              </h2>
            )}

            <div className="grid lg:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 grid-cols-1 gap-3">
              {searchText ? (
                <RenderCard
                  data={searchResult}
                  title="No search results found"
                />
              ) : (
                <>
                  {error ? (
                    <Toaster position="top-left" reverseOrder={false} />
                  ) : (
                    <Toaster position="bottom-left" reverseOrder={false} />
                  )}
                  <RenderCard data={allPosts} title="No posts found" />
                </>
              )}
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Main;
