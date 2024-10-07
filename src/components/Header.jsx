import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import ChurchLogo from "../assets/images/Christian Church Logo (1) 1.svg";
import SearchIcon from "../assets/images/search icon.svg";
import TriangleImage from "../assets/images/Triangle.svg";
import "./scroll.css"

const Header = () => {
  const [searchValue, setSearchValue] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [page, setPage] = useState(1);
  const [activeLink, setActiveLink] = useState("/"); // Track the current active link
  const [prevActiveLink, setPrevActiveLink] = useState("/"); // Track the previous active link
  const dropdownRef = useRef(null);
  const location = useLocation();
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

  // Update active link and previous active link on route change
  useEffect(() => {
    const handleRouteChange = () => {
      const path = location.pathname;
      setPrevActiveLink(activeLink);
      setActiveLink(path);
    };

    handleRouteChange(); // Initialize on mount

    window.addEventListener("popstate", handleRouteChange);
    return () => window.removeEventListener("popstate", handleRouteChange);
  }, [location.pathname, activeLink]);

  const isRouteValid = (path) => {
    return ["/", "/categories", "/aboutUs", "/songs"].includes(path);
  };

  return (
    <header className="w-full h-[78.43px] bg-[#2a2b2e] shadow flex items-center px-8">
      <div className="flex items-center gap-6">
        <Link to="/">
          <img src={ChurchLogo} alt="Church Logo" className="h-[60px] pl-32 cursor-pointer" />
        </Link>
        <nav className="relative flex items-center gap-16">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `text-lg font-['Roboto'] leading-[14.59px] ${
                isActive ? "text-[#ffbb02]" : "text-[#a6a9b8]"
              } cursor-pointer`
            }
            end
            onClick={() => setActiveLink("/")}
          >
            Home
          </NavLink>
          <NavLink
            to="/categories"
            className={({ isActive }) =>
              `text-lg font-['Roboto'] leading-[14.59px] ${
                isActive ? "text-[#ffbb02]" : "text-[#a6a9b8]"
              } cursor-pointer`
            }
            onClick={() => setActiveLink("/categories")}
          >
            Categories
          </NavLink>
          <NavLink
            to="/aboutUs"
            className={({ isActive }) =>
              `text-lg font-['Roboto'] leading-[14.59px] ${
                isActive ? "text-[#ffbb02]" : "text-[#a6a9b8]"
              } cursor-pointer`
            }
            onClick={() => setActiveLink("/aboutUs")}
          >
            About Us
          </NavLink>
          <NavLink
            to="/songs"
            className={({ isActive }) =>
              `text-lg font-['Roboto'] leading-[14.59px] ${
                isActive ? "text-[#ffbb02]" : "text-[#a6a9b8]"
              } cursor-pointer`
            }
            onClick={() => setActiveLink("/songs")}
          >
            Songs
          </NavLink>
          {isRouteValid(location.pathname) && (
            <div
              className="absolute bottom-[-30px] left-0 transform transition-transform duration-300"
              style={{
                transform: `translateX(${getTrianglePosition()})`,
              }}
            >
              <img src={TriangleImage} alt="Triangle Indicator" />
            </div>
          )}
        </nav>
      </div>

      <div className="flex-1 flex justify-end items-center mr-10">
        <div className="relative w-[600px]">
          <input
            type="text"
            placeholder="Search about any Arabic or English worship song..."
            value={searchValue}
            onChange={handleSearch}
            onFocus={() => setShowDropdown(true)}
            className="w-full text-[#ffffff] text-lg font-normal font-['Roboto'] leading-3 bg-[#3a3b3f] p-4 pl-12 rounded-full"
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
                      <span className="text-[#b0b0b0] text-xs">{result.artist}</span>
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
    </header>
  );
};

// Get triangle position based on the active link
const getTrianglePosition = () => {
  switch (window.location.pathname) {
    case "/":
      return "18px";
    case "/categories":
      return "150px";
    case "/aboutUs":
      return "290px";
    case "/songs":
      return "420px";
    default:
      return "18px"; // Default position or none if not valid
  }
};

export default Header;
