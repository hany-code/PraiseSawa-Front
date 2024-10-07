import React, { useState, useEffect } from "react";
import axios from "axios";

const Overview = ({ song }) => {
  const [arSong, setArSong] = useState(null);
  const [transliteration, setTransliteration] = useState(null);
  const [translation, setTranslation] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeVerseIndex, setActiveVerseIndex] = useState(-1);
  const [activeLineIndex, setActiveLineIndex] = useState(-1);

  const { songID } = song;

  useEffect(() => {
    const fetchSongs = async () => {
      try {
        const [arSongResponse, transliterationResponse, translationResponse] = await Promise.all([
          axios.get(`/api/ArbSongs/getArbSongBySongID/${songID}`),
          axios.get(`/api/FrankSongs/getFrankSongBySongID/${songID}`),
          axios.get(`/api/ArbSongs/translateToEnglish/${songID}`)
        ]);

        setArSong(arSongResponse.data);
        setTransliteration(transliterationResponse.data);
        setTranslation(translationResponse.data);
      } catch (error) {
        console.error("Error fetching song data:", error);
        setError("Error fetching song data. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchSongs();
  }, [songID]);

  const handleClick = (verseIndex, lineIndex) => {
    if (verseIndex === activeVerseIndex && lineIndex === activeLineIndex) {
      setActiveVerseIndex(-1);
      setActiveLineIndex(-1);
    } else {
      setActiveVerseIndex(verseIndex);
      setActiveLineIndex(lineIndex);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  if (!arSong || !transliteration || !translation) {
    return <div>No song data available</div>;
  }

  return (
    <div className="text-white p-6 bg-[#2a2b2e] mt-10">
      <table className="w-full text-left table-auto border-collapse">
        <thead>
          <tr>
            <th className="border px-4 py-2">Arabic</th>
            <th className="border px-4 py-2">Transliteration</th>
            <th className="border px-4 py-2">Translation</th>
          </tr>
        </thead>
        <tbody>
          {arSong.verses.map((verse, verseIndex) => (
            <React.Fragment key={verseIndex}>
              <tr key={verseIndex}>
                <td className="border px-4 py-2">
                  {verse.map((line, lineIndex) => (
                    <div
                      key={`${verseIndex}-${lineIndex}`}
                      className={`cursor-pointer p-4 rounded-lg transition-colors text-lg leading-loose shadow-md font-semibold ${
                        activeVerseIndex === verseIndex && activeLineIndex === lineIndex
                          ? "bg-[#FFBB02] text-black"
                          : "hover:bg-[#404448]"
                      }`}
                      onClick={() => handleClick(verseIndex, lineIndex)}
                      style={{ marginBottom: "10px" }}
                    >
                      {line}
                    </div>
                  ))}
                </td>
                <td className="border px-4 py-2">
                  {transliteration.verses[verseIndex]?.map((line, lineIndex) => (
                    <div
                      key={`${verseIndex}-${lineIndex}`}
                      className={`cursor-pointer p-4 rounded-lg transition-colors text-lg leading-loose shadow-md font-semibold ${
                        activeVerseIndex === verseIndex && activeLineIndex === lineIndex
                          ? "bg-[#FFBB02] text-black"
                          : "hover:bg-[#404448]"
                      }`}
                      onClick={() => handleClick(verseIndex, lineIndex)}
                      style={{ marginBottom: "10px" }}
                    >
                      {line}
                    </div>
                  )) || "N/A"}
                </td>
                <td className="border px-4 py-2">
                  {translation.verses[verseIndex]?.map((line, lineIndex) => (
                    <div
                      key={`${verseIndex}-${lineIndex}`}
                      className={`cursor-pointer p-4 rounded-lg transition-colors text-lg leading-loose shadow-md font-semibold ${
                        activeVerseIndex === verseIndex && activeLineIndex === lineIndex
                          ? "bg-[#FFBB02] text-black"
                          : "hover:bg-[#404448]"
                      }`}
                      onClick={() => handleClick(verseIndex, lineIndex)}
                      style={{ marginBottom: "10px" }}
                    >
                      {line}
                    </div>
                  )) || "N/A"}
                </td>
              </tr>
              {/* Separator line between verses */}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Overview;