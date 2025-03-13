

import React, { useEffect, useState } from "react";
import "../Pages/Quran.css"; 

const Quran = () => {
  const [surahs, setSurahs] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [currentAudio, setCurrentAudio] = useState(null);
  const [audioPlayer] = useState(new Audio());
  const [selectedTafsir, setSelectedTafsir] = useState(null);
  const [loadingTafsir, setLoadingTafsir] = useState(false);

  useEffect(() => {
    fetch("https://api.alquran.cloud/v1/surah")
      .then((res) => res.json())
      .then((data) => setSurahs(data.data))
      .catch((error) => console.error("Error fetching surahs:", error));
  }, []);

  
  const playAudio = (surahNumber) => {
    const audioUrl = `https://server8.mp3quran.net/afs/${String(surahNumber).padStart(3, "0")}.mp3`;

   
    if (audioPlayer.src !== audioUrl) {
      audioPlayer.pause();
      audioPlayer.src = audioUrl;
      audioPlayer.play();
      setCurrentAudio(audioUrl);
    } else {
    
      if (!audioPlayer.paused) {
        audioPlayer.pause();
        setCurrentAudio(null);
      } else {
        audioPlayer.play();
        setCurrentAudio(audioUrl);
      }
    }
  };

  // جلب التفسير من API
  const fetchTafsir = (surahNumber, surahName) => {
    setLoadingTafsir(true);
    fetch(`https://api.quran.com/api/v4/chapters/${surahNumber}/info`)
      .then((res) => res.json())
      .then((data) => {
        setSelectedTafsir({
          name: surahName,
          text: data.chapter_info.short_text || "لم يتم العثور على تفسير لهذه السورة.",
        });
        setLoadingTafsir(false);
      })
      .catch((error) => {
        console.error("Error fetching tafsir:", error);
        setSelectedTafsir({ name: surahName, text: "حدث خطأ أثناء جلب التفسير." });
        setLoadingTafsir(false);
      });
  };

  const closeTafsir = () => {
    setSelectedTafsir(null);
  };

  return (
    <div className="quran-container">
      <h1 className="quran-title">📖 قائمة سور القرآن الكريم</h1>
      <div className="surah-list">
        {surahs.map((surah) => (
          <div key={surah.number} className="surah-card">
            <h3>{surah.englishName}</h3>
            <p>{surah.name}</p>
            <button className="play-button" onClick={() => playAudio(surah.number)}>
              🎧 استماع
            </button>
            <button className="tafsir-button" onClick={() => fetchTafsir(surah.number, surah.englishName)}>
              📜 سبب النزول
            </button>
          </div>
        ))}
      </div>

      
      {selectedTafsir && (
        <div className="popup">
          <div className="popup-content">
            <span className="close-btn" onClick={closeTafsir}>&times;</span>
            <h2>{selectedTafsir.name}</h2>
            {loadingTafsir ? <p>⏳جاري تحميل سبب النزول..</p> : <p>{selectedTafsir.text}</p>}
          </div>
        </div>
      )}
    </div>
  );
};

export default Quran;







