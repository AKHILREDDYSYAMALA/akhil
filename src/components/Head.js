import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { cacheResults } from "../utils/searchSlice";
import { assignsearchword } from "../utils/searchwordSlice";
const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchCache = useSelector((store) => store.search);
  const dispatch = useDispatch();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    //console.log(searchQuery);
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    setSuggestions(json[1]);
    dispatch(
      cacheResults({
        [searchQuery]: json[1],
      })
    );
  };

  const handleSearch = () => {
    dispatch(assignsearchword(searchQuery));
    setShowSuggestions(false);
  };

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  const handleItemClick = (e) => {
    const innerHTML = e.target.innerHTML;
    //console.log(innerHTML);
    dispatch(assignsearchword(innerHTML));
  };

  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-lg">
      <div className="flex col-span-1 ">
        <img
          onClick={() => toggleMenuHandler()}
          className="h-8 cursor-pointer"
          alt="menu"
          src="https://icons.veryicon.com/png/o/miscellaneous/linear-icon-45/hamburger-menu-4.png"
        ></img>
        <img
          className="h-8 mx-2"
          alt="Youtube-logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/2560px-Logo_of_YouTube_%282015-2017%29.svg.png"
        ></img>
      </div>
      <div className="col-span-10 px-12">
        <div className="flex">
          <input
            className="w-[37rem] border border-gray-400 p-2 rounded-l-full"
            type="text"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setShowSuggestions(true);
            }}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSearch();
              }
            }}
          ></input>
          <button className="border border-gray-400 p-2 px-5 rounded-r-full z-10">
            🔍
          </button>
          {showSuggestions && (
            <div
              className="absolute bg-white py-0 mt-11  w-[37rem] shadow-lg-rounded border-gray-100"
              onMouseDown={handleItemClick}
            >
              <ul>
                {suggestions.map((s, i) => (
                  <li key={i} className="py-2 px-3 shadow-sm hover:bg-gray-100">
                    🔍 {s}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
      <div>
        <img
          className="h-8 col-span-1"
          alt="User-Icon"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQdztTDcpZ2pFqwWDYwSXbvZq5nzJYg5cn8w&usqp=CAUttps://t3.ftcdn.https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQdztTDcpZ2pFqwWDYwSXbvZq5nzJYg5cn8w&usqp=CAU/jpg/05/53/79/60/360_F_553796090_XHrE6R9jwmBJUMo9HKl41hyHJ5gqt9oz.jpg://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/2560px-Logo_of_YouTube_%282015-2017%29.svg.png"
        ></img>
      </div>
    </div>
  );
};
export default Head;
