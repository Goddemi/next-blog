import React from "react";

interface Props {
  label: string;
  id: "email" | "password";
}

const InputForm = ({ label, id }: any) => {
  return (
    <div className="mb-6 flex justify-end">
      <label htmlFor={id} className="mr-3">
        <span>{label}</span>
      </label>
      <div>
        <input
          id={id}
          type={id}
          className="border-b border-indigo-300 outline-0"
        />
      </div>
    </div>
  );
};

export default InputForm;
