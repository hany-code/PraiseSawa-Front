import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Intro from "./Intro";
import PopularSongs from "./PopularSongs";
import SearchIcon from "../assets/images/search icon.svg"; // Assuming you have the search icon
import "./scroll.css"; // Assuming you have custom scroll styles

const Home = () => {
  const [searchValue, setSearchValue] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [page, setPage] = useState(1);
  const dropdownRef = useRef(null);
  const navigate = useNavigate(); // Hook to navigate programmatically

  const handleSearch = async (e) => {
    setSearchValue(e.target.value);

    if (e.target.value.trim() !== "") {
      try {
        const response = await axios.get("/api/ArbSongs/searchForArbSong", {
          params: { query: e.target.value },
        });
        setSearchResults(response.data);
        setShowDropdown(true);
      } catch (error) {
        console.error("Error fetching search results:", error);
      }
    } else {
      setSearchResults([]);
      setShowDropdown(false);
    }
  };

  const clickSearchResult = (result) => {
    setShowDropdown(false);
    navigate(`/songs/${result.songID}`); // Navigate to the song page
  };

  const loadMoreSongs = async () => {
    try {
      const response = await axios.get("/api/ArbSongs/searchForArbSong", {
        params: { query: searchValue, page: page + 1 },
      });
      setSearchResults([...searchResults, ...response.data]);
      setPage(page + 1);
    } catch (error) {
      console.error("Error fetching more songs:", error);
    }
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setShowDropdown(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="z-2 px-[140px]">
      <h1 className="head_text text-center pt-[50px]">
        Prise SAWA
        <br className="max-md:hidden" />
        <span className="bg-gradient-to-r from-amber-500 via-orange-600 to-yellow-500 bg-clip-text text-transparent text-center">
          Translated & Transliterated Arabic Songs
        </span>
      </h1>

      {/* Search area */}
      <div className="flex justify-center items-center mt-8">
        <div className="relative w-[900px]">
          <input
            type="text"
            placeholder="Search about any Arabic or English worship song..."
            value={searchValue}
            onChange={handleSearch}
            onFocus={() => setShowDropdown(true)}
            className="w-full text-[#ffffff] text-lg font-normal font-['Roboto'] leading-3 bg-[#3a3b3f] p-4 pl-12 rounded-xl"
            style={{ direction: "auto" }}
          />
          <button className="absolute left-3 top-1/2 transform -translate-y-1/2 w-[28px] h-[28px] flex items-center justify-center">
            <img src={SearchIcon} alt="Search Icon" />
          </button>
          {showDropdown && searchResults.length > 0 && (
            <ul
              ref={dropdownRef}
              className="absolute left-0 right-0 mt-2 bg-[#1d1d1d] border border-[#444545] rounded-lg shadow-lg max-h-60 overflow-y-auto z-10 custom-scrollbar"
            >
              {searchResults.map((result) => (
                <li
                  key={result._id}
                  className="cursor-pointer px-4 py-2 hover:bg-[#3a3b3f] transition-all duration-200 ease-in-out text-[#ffffff]"
                  onClick={() => clickSearchResult(result)}
                >
                  <div className="flex justify-between items-center">
                    <span className="text-[#ffffff] text-sm font-medium">
                      {result.title}
                    </span>
                    {result.artist && (
                      <span className="text-[#b0b0b0] text-xs">
                        {result.artist}
                      </span>
                    )}
                  </div>
                </li>
              ))}
              <li
                className="text-center cursor-pointer text-[#FFBB02] hover:text-[#FFD700] py-2 border-t border-[#444545]"
                onClick={loadMoreSongs}
              >
                Load more
              </li>
            </ul>
          )}
        </div>
      </div>
      {/* End of search area */}

      <Intro />
    </div>
  );
};

export default Home;
