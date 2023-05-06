import React from "react";

const Button = ({ btnText, ...rest }) => {
  return (
    <div className="text-right">
      <button
        type="submit"
        id="lws-submit"
        className="cursor-pointer btn btn-primary w-fit"
        {...rest}
      >
        {btnText}
      </button>
    </div>
  );
};

export default Button;
