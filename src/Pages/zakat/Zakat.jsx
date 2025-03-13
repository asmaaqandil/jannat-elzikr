import React from "react";
import ZakatCalculator from "../zakat/ZakatCalculator"; // استيراد الكومبوننت
import "./Zakat.css"; // ملف التنسيقات
import ZakatHadith from "./ZakatHadith";

const Zakat = () => {
  return (
    <div className="zakat-content">
    <div className="zakat-page">
      <h1>💰 حساب الزكاة</h1>
      <p>احسب مقدار الزكاة الواجبة عليك بسهولة.</p>
      <ZakatCalculator /> 
      <ZakatHadith/>
    </div>
    </div>
  );
};

export default Zakat;
