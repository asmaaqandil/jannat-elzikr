import React from "react";
import ImageGallery from "../../Pages/Prayer/ImageGallery";
import '../Prayer/ImageGallery.css'
import prayer1 from "../../assets/prayer1.jpg";
import prayer2 from "../../assets/prayer2.jpg";
import prayer3 from "../../assets/prayer3.jpg";

import prayer5 from "../../assets/prayer5.jpg";
import prayer6 from "../../assets/prayer6.jpg";
import prayer7 from "../../assets/prayer7.jpg";
import prayer8 from "../../assets/prayer8.jpg";
import prayer9 from "../../assets/prayer9.jpg";

// مصفوفة صور الصلاة
const prayerSteps = [
  
  { src: prayer1, alt: "تكبيرة الإحرام" },
  { src: prayer2, alt: "الركوع" },
  { src: prayer3, alt:"القيام من الركوع"},
 
  { src: prayer5, alt: "السجود" },
  { src: prayer6, alt: "الجلوس للتشهد"},
  { src: prayer7, alt: "التشهد" },
  { src: prayer8, alt:"السلام على الجهه اليمنى "},
  { src: prayer9, alt: "السلام على الجهه اليسرى"},
];

const PrayerSteps = () => {
  return <ImageGallery title="🕌 طريقة الصلاة الصحيحة" images={prayerSteps}  />;
};

export default PrayerSteps;
