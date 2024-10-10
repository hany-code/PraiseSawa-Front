import React, { useState } from "react";

const ArSong = ({ song }) => {
  const [activeVerseIndex, setActiveVerseIndex] = useState(-1);
  const [activeLineIndex, setActiveLineIndex] = useState(-1);

  const handleClick = (verseIndex, lineIndex) => {
    if (verseIndex === activeVerseIndex && lineIndex === activeLineIndex) {
      setActiveVerseIndex(-1);
      setActiveLineIndex(-1);
    } else {
      setActiveVerseIndex(verseIndex);
      setActiveLineIndex(lineIndex);
    }
  };

  if (!song) {
    return <div>No song selected</div>;
  }

  return (
    <div className="text-black p-10 mt-16 rounded-lg shadow-lg w-full transition-transform duration-300 hover:translate-y-[-0.3125rem] hover:shadow-2xl bg-[#fff]">
      <div className="px-4">
        {/* Chorus */}
        {Array.isArray(song.chorus) && (
          <div className="text-right font-bold">
            {song.chorus.map((line, index) => (
              <div
                key={index}
                className={`text-[#000] p-4 my-2 rounded-lg cursor-pointer transition-transform duration-300 ease-in-out transform relative ${
                  activeVerseIndex === -1 && activeLineIndex === index
                    ? "active-item"
                    : "hover:bg-[#cdcdcd]"
                }`}
                onClick={() => handleClick(-1, index)}
              >
                {line.split("\n").map((subLine, subIndex) => (
                  <p key={`${line}-${subIndex}`} className="font-bold font-2xl">
                    {subLine.trim() !== "" ? subLine : <br />}
                  </p>
                ))}
                {activeVerseIndex === -1 && activeLineIndex === index && (
                  <div className="absolute z-10 left-[-3px] bottom-[-15px] transform -translate-y-1/2 bg-[#333] text-white text-xs px-2 py-1 rounded-full">
                    Showing Now
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Verses */}
        {Array.isArray(song.verses) &&
          song.verses.map((verse, verseIndex) =>
            verse.map((line, lineIndex) => (
              <div
                key={`${verseIndex}-${lineIndex}`}
                className={`text-[#000] text-right my-2 rounded-lg cursor-pointer transition-transform duration-300 ease-in-out transform relative ${
                  activeVerseIndex === verseIndex && activeLineIndex === lineIndex
                    ? "active-item"
                    : "hover:bg-[#cdcdcd]"
                }`}
                onClick={() => handleClick(verseIndex, lineIndex)}
              >
                <div className="mt-2 p-4 font-bold text-xl">
                  {lineIndex === 0 && (
                    <span className="text-[#333] text-2xl float-right ml-2">
                      ({verseIndex + 1})
                    </span>
                  )}
                  {line.split("\n").map((subLine, subIndex) => (
                    <p key={`${lineIndex}-${subIndex}`}>
                      {subLine.trim() !== "" ? subLine : <br />}
                    </p>
                  ))}
                  {activeVerseIndex === verseIndex && activeLineIndex === lineIndex && (
                    <div className="absolute z-10 left-[-3px] bottom-[-15px] transform -translate-y-1/2 bg-[#333] text-white text-xs px-2 py-1 rounded-full">
                      Showing Now
                    </div>
                  )}
                </div>
              </div>
            ))
          )}
      </div>
    </div>
  );
};

export default ArSong;
