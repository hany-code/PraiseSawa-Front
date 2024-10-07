// import React, { useState } from "react";

// const ArSong = ({ song }) => {
//   const [activeVerseIndex, setActiveVerseIndex] = useState(-1);
//   const [activeLineIndex, setActiveLineIndex] = useState(-1);

//   const handleClick = (verseIndex, lineIndex) => {
//     if (verseIndex === activeVerseIndex && lineIndex === activeLineIndex) {
//       setActiveVerseIndex(-1);
//       setActiveLineIndex(-1);
//     } else {
//       setActiveVerseIndex(verseIndex);
//       setActiveLineIndex(lineIndex);
//     }
//   };

//   if (!song) {
//     return <div>No song selected</div>;
//   }

//   return (
//     <div className="p-6 m-5 rounded-lg shadow-lg w-full transition-transform duration-300 hover:translate-y-[-0.3125rem] hover:shadow-2xl bg-[#2a2b2e]">
//       <div className="px-4">
//         {/* Chorus */}
//         {Array.isArray(song.chorus) && (
//           <div className="text-right">
//             {song.chorus.map((line, index) => (
//               <div
//                 key={index}
//                 className={`text-[#E0E0E0] p-4 my-2 rounded-lg cursor-pointer transition-transform duration-300 ease-in-out transform relative ${
//                   activeVerseIndex === -1 && activeLineIndex === index
//                     ? "active-item"
//                     : "hover:bg-[#404448]"
//                 }`}
//                 onClick={() => handleClick(-1, index)}
//               >
//                 {line.split("\n").map((subLine, subIndex) => (
//                   <p key={`${line}-${subIndex}`} className="font-bold">
//                     {subLine.trim() !== "" ? subLine : <br />}
//                   </p>
//                 ))}
//                 {activeVerseIndex === -1 && activeLineIndex === index && (
//                   <div className="absolute z-10 left-[-3px] bottom-[-15px] transform -translate-y-1/2 bg-[#FFBB02] text-white text-xs px-2 py-1 rounded-full">
//                     Showing Now
//                   </div>
//                 )}
//               </div>
//             ))}
//           </div>
//         )}

//         {/* Verses */}
//         {Array.isArray(song.verses) &&
//           song.verses.map((verse, verseIndex) =>
//             verse.map((line, lineIndex) => (
//               <div
//                 key={`${verseIndex}-${lineIndex}`}
//                 className={`text-[#E0E0E0] text-left my-2 rounded-lg cursor-pointer transition-transform duration-300 ease-in-out transform relative ${
//                   activeVerseIndex === verseIndex &&
//                   activeLineIndex === lineIndex
//                     ? "active-item"
//                     : "hover:bg-[#404448]"
//                 }`}
//                 onClick={() => handleClick(verseIndex, lineIndex)}
//               >
//                 <div className="mt-2 p-4 font-bold text-xl">
//                   {lineIndex === 0 && (
//                     <span className="text-[#6E00FF] text-2xl float-left mr-2">
//                       ({verseIndex + 1})
//                     </span>
//                   )}
//                   {line.split("\n").map((subLine, subIndex) => (
//                     <p key={`${lineIndex}-${subIndex}`} className="font-bold">
//                       {subLine.trim() !== "" ? subLine : <br />}
//                     </p>
//                   ))}
//                   {activeVerseIndex === verseIndex &&
//                     activeLineIndex === lineIndex && (
//                       <div className="absolute z-10 left-[-3px] bottom-[-15px] transform -translate-y-1/2 bg-[#FFBB02] text-white text-xs px-2 py-1 rounded-full">
//                         Showing Now
//                       </div>
//                     )}
//                 </div>
//               </div>
//             ))
//           )}
//       </div>
//     </div>
//   );
// };

// export default ArSong;
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
    <div className="p-10 mt-16 rounded-lg shadow-lg w-full transition-transform duration-300 hover:translate-y-[-0.3125rem] hover:shadow-2xl bg-[#2a2b2e]">
      <div className="px-4">
        {/* Chorus */}
        {Array.isArray(song.chorus) && (
          <div className="text-right font-bold">
            {song.chorus.map((line, index) => (
              <div
                key={index}
                className={`text-[#E0E0E0] p-4 my-2 rounded-lg cursor-pointer transition-transform duration-300 ease-in-out transform relative ${
                  activeVerseIndex === -1 && activeLineIndex === index
                    ? "active-item"
                    : "hover:bg-[#404448]"
                }`}
                onClick={() => handleClick(-1, index)}
              >
                {line.split("\n").map((subLine, subIndex) => (
                  <p key={`${line}-${subIndex}`}>
                    {subLine.trim() !== "" ? subLine : <br />}
                  </p>
                ))}
                {activeVerseIndex === -1 && activeLineIndex === index && (
                  <div className="absolute z-10 left-[-3px] bottom-[-15px] transform -translate-y-1/2 bg-[#FFBB02] text-white text-xs px-2 py-1 rounded-full">
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
                className={`text-[#E0E0E0] text-right my-2 rounded-lg cursor-pointer transition-transform duration-300 ease-in-out transform relative ${
                  activeVerseIndex === verseIndex && activeLineIndex === lineIndex
                    ? "active-item"
                    : "hover:bg-[#404448]"
                }`}
                onClick={() => handleClick(verseIndex, lineIndex)}
              >
                <div className="mt-2 p-4 font-bold text-xl">
                  {lineIndex === 0 && (
                    <span className="text-[#FFBB02] text-2xl float-right ml-2">
                      ({verseIndex + 1})
                    </span>
                  )}
                  {line.split("\n").map((subLine, subIndex) => (
                    <p key={`${lineIndex}-${subIndex}`}>
                      {subLine.trim() !== "" ? subLine : <br />}
                    </p>
                  ))}
                  {activeVerseIndex === verseIndex && activeLineIndex === lineIndex && (
                    <div className="absolute z-10 left-[-3px] bottom-[-15px] transform -translate-y-1/2 bg-[#FFBB02] text-white text-xs px-2 py-1 rounded-full">
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