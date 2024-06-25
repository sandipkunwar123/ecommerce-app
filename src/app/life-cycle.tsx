import { useEffect, useState } from "react";
export default function LifeCycle() {
  const [search, setSearch] = useState("");
  const [keyword, setKeyword] = useState("");
  useEffect(() => {
    console.log("hello");

    return () => {
      console.log("component ended");
      setSearch("");
      setKeyword("");
    };
  }, [search, keyword]);
  return (
    <div>
      <input
        type="text"
        name="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <input
        type="text"
        name="search"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
      />
      <h1>Life Cycle</h1>
    </div>
  );
}
