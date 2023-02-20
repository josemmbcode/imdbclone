"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function SearchBox() {
  const [search, setSearch] = useState("");
  const router = useRouter();
  function submitHandler(e) {
    e.preventDefault();
    if (!search) {
      return;
    }
    router.push(`/search/${search}`);
    setSearch("");
  }
  return (
    <form
      className="flex max-w-6xl mx-auto justify-between items-center px-5"
      onSubmit={submitHandler}
    >
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        type="text"
        placeholder="Search movie or TV show..."
        className="w-full h-14 rounded-sm placeholder-gray-500 outline-none bg-transparent flex-1"
      />
      <button
        disabled={!search}
        className="text-amber-600 disabled:text-gray-400"
        type="submit"
      >
        Search
      </button>
    </form>
  );
}
