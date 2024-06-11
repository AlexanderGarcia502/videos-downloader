import React from "react";

const SuccessTextWithLogo = () => {
  return (
    <div
      className="flex my-16 items-center justify-center text-green-700 rounded relative sm:mr-3"
      role="alert"
    >
      <svg
        className="w-11 h-11 text-green-500 mr-2"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="3"
          d="M5 13l4 4L19 7"
        ></path>
      </svg>
      <span className="block text-3xl sm:inline font-semibold">
        Successfully
      </span>
    </div>
  );
};

export default SuccessTextWithLogo;
