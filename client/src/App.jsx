import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";

import { Main, CreatePost, Blog, Login, Register } from "./pages";
import { AppBar } from "./components/index";
import { RestrictedRoute } from "./RestrictedRoute";
import { PrivateRoute } from "./PrivateRoute";

import { refreshUser } from "./redux/auth/operations";
import { useAuth } from "./hooks";

function App() {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, []);
  return (
    !isRefreshing && (
      <>
        <header
          className="w-full flex justify-between
    items-center bg-white sm:px-8 px-4 py-4 border-b
    border-b-[#e6ebf4]"
        >
          <AppBar />
        </header>

        <main className="sm:p-8 px-4 py-8 w-full bg-[#f9fafe]  min-h-[calc(100vh-73px)]">
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/create-post" element={<CreatePost />} />
            <Route
              path="/blog"
              element={
                <PrivateRoute redirectTo="/login" component={<Blog />} />
              }
            />
            <Route
              path="/login"
              element={
                <RestrictedRoute redirectTo="/blogs" component={<Login />} />
              }
            />
            <Route
              path="/register"
              element={
                <RestrictedRoute redirectTo="/blogs" component={<Register />} />
              }
            />
          </Routes>
        </main>
      </>
    )
  );
}

export default App;
