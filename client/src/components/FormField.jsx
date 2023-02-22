import React from "react";

const FormField = ({
  labelName,
  name,
  value,
  type,
  placeholder,
  isSurpriseMe,
  handleChange,
  handleSurpriseMe,
}) => {
  return (
    <>
      <div className="flex item-center gap-2 mb2">
        <label
          htmlFor={name}
          className="block text-sm font-medium text-gray-900"
        >
          {labelName}
        </label>
        {isSurpriseMe && (
          <button
            type="button"
            onClick={handleSurpriseMe}
            className=" font-semibold text-xs py-1 bg-[#ececf1] px-2 rounded-[5px] text-black"
          >
            Surprise me
          </button>
        )}
      </div>
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={handleChange}
        required
        className="bg-gray-50 border border-gray-300 text-gray-900 card
        text-sm rounded-lg focus:ring-[#4649ff] focus:border-#4649ff]
        outline-none block w-full p-3"
      />
    </>
  );
};

export default FormField;
