

import React, { useState, useEffect } from "react";
import "./PrayerTimes.css";
import ProphetPrayers from "./ProphetPrayers";
import WuduSteps from "./WuduSteps";
import PrayerSteps from "./PrayerSteps";

const countries = [
  { name: "مصر", code: "EG" },
  { name: "السعودية", code: "SA" },
  { name: "الإمارات", code: "AE" },
  { name: "الكويت", code: "KW" },
  { name: "الجزائر", code: "DZ" },
  { name: "المغرب", code: "MA" },
  { name: "تونس", code: "TN" },
  { name: "الأردن", code: "JO" },
  { name: "فلسطين", code: "PS" },
];

const cities = {
  EG: "Cairo",
  SA: "Riyadh",
  AE: "Dubai",
  KW: "Kuwait",
  DZ: "Algiers",
  MA: "Casablanca",
  TN: "Tunis",
  JO: "Amman",
  PS: "Gaza",
};

const prayerNamesArabic = {
  Fajr: "الفجر",
  Sunrise: "الشروق",
  Dhuhr: "الظهر",
  Asr: "العصر",
  Maghrib: "المغرب",
  Isha: "العشاء",
};

const PrayerTimes = () => {
  const [selectedCountry, setSelectedCountry] = useState("EG");
  const [prayerTimes, setPrayerTimes] = useState(null);

  useEffect(() => {
    fetchPrayerTimes(selectedCountry);
  }, [selectedCountry]);

  const fetchPrayerTimes = async (countryCode) => {
    try {
      const city = cities[countryCode] || "Cairo";
      const response = await fetch(
        `https://api.aladhan.com/v1/timingsByCity?city=${city}&country=${countryCode}&method=2`
      );
      const data = await response.json();
      setPrayerTimes(data.data.timings);
    } catch (error) {
      console.error("Error fetching prayer times:", error);
    }
  };

  return (
    <div>
      <div className="prayer-page">
        <div className="prayer-container">
          <h1>🕌 مواقيت الصلاة <br /> في جميع الدول العربية</h1>

          <select 
            className="country-select"
            onChange={(e) => setSelectedCountry(e.target.value)}
          >
            {countries.map((country) => (
              <option key={country.code} value={country.code}>
                {country.name}
              </option>
            ))}
          </select>

          {prayerTimes && (
            <div className="prayer-times">
              {Object.entries(prayerTimes)
                .filter(([name]) => prayerNamesArabic[name])
                .map(([name, time]) => (
                  <div key={name} className="prayer-time">
                    <span>{prayerNamesArabic[name]}</span>
                    <span>{time}</span>
                  </div>
                ))}
            </div>
          )}
        </div>
      </div>

      <ProphetPrayers/>
      <WuduSteps/>
      <PrayerSteps/>
    </div>
  );
};

export default PrayerTimes;














