import React from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import InputForm from "../card/InputForm";
const Search = () => {
  return (
    <div className="drawer drawer-end z-50 ">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* Page content here */}
        <label
          htmlFor="my-drawer-4"
          className="drawer-button  w-6 h-6 text-blackButton hover:text-blue"
        >
          <MagnifyingGlassIcon />
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-4"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu bg-base-200 text-base-content min-h-full w-80 ">
          {/* Sidebar content here */}
          <InputForm
            labelText={"Search"}
            placeholder={"Search for the product you want"}
          />
        </ul>
      </div>
    </div>
  );
};

export default Search;
