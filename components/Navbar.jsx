import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center bg-green-400 text-slate-100 px-6 py-10 text-4xl font-semibold rounded">
      <Link href={"/"} className="text-xl">
        To-Do App
      </Link>
      <Link
        href={"/addTopic"}
        className="bg-white px-6 py-2 text-xl text-black rounded-md"
      >
        Add Your Topic
      </Link>
    </nav>
  );
};

export default Navbar;
