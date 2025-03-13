/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "./ZakatCalculator.css"; 

const ZakatCalculator = () => {
  const [amount, setAmount] = useState(""); // قيمة المال المدخل
  const [zakat, setZakat] = useState(null); // قيمة الزكاة
  const [message, setMessage] = useState(""); // رسالة النصاب
  const [type, setType] = useState("money"); // نوع المال
  const [irrigation, setIrrigation] = useState("rain"); // نوع الري للمحاصيل الزراعية

  const goldPrice = 3000; // سعر الجرام بالجنيه المصري
  const nisabMoney = 85 * goldPrice; // النصاب بناءً على الذهب

  const nisabInfo = {
    money: `💵 الزكاة على الأموال تبدأ إذا كان لديك ${nisabMoney.toLocaleString()} جنيه مصري أو أكثر، لمدة عام كامل.`,
    gold: "🟡 زكاة الذهب تُخرج إذا كنت تمتلك 85 جرامًا فأكثر، لمدة عام كامل.",
    silver: "⚪ زكاة الفضة تُخرج إذا كنت تمتلك 595 جرامًا فأكثر، لمدة عام كامل.",
    crops: "🌾 زكاة الزراعة تُخرج إذا تجاوز المحصول 653 كجم.",
    livestock: "🐄 زكاة المواشي تبدأ إذا كان لديك 30 رأسًا فأكثر.",
  };

  const formatNumber = (num) => {
    return Number.isInteger(num) ? num.toLocaleString() : num.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  };

  const calculateZakat = () => {
    if (!amount || isNaN(amount) || amount <= 0) {
      alert("من فضلك أدخل رقمًا صالحًا لحساب الزكاة.");
      return;
    }

    let zakatAmount = 0;
    let messageText = "";

    switch (type) {
      case "money":
        if (amount >= nisabMoney) {
          zakatAmount = amount * 0.025;
          messageText = `✅ مقدار الزكاة الواجبة: ${formatNumber(zakatAmount)} جنيه مصري في السنة.`;
        } else {
          messageText = `❌ مبلغك أقل من النصاب (${formatNumber(nisabMoney)} جنيه مصري)، لذا لا زكاة عليك في هذه الحالة.`;
        }
        break;
      case "gold":
        zakatAmount = amount >= 85 ? amount * 0.025 : 0;
        messageText = amount >= 85
          ? `✅ مقدار الزكاة الواجبة: ${formatNumber(zakatAmount)} جرام ذهب في السنة.`
          : `❌ لا تجب الزكاة لأن الذهب أقل من النصاب (85 جرام).`;
        break;
      case "silver":
        zakatAmount = amount >= 595 ? amount * 0.025 : 0;
        messageText = amount >= 595
          ? `✅ مقدار الزكاة الواجبة: ${formatNumber(zakatAmount)} جرام فضة في السنة.`
          : `❌ لا تجب الزكاة لأن الفضة أقل من النصاب (595 جرام).`;
        break;
      case "crops":
        zakatAmount = amount >= 653 ? amount * (irrigation === "rain" ? 0.1 : 0.05) : 0;
        messageText = amount >= 653
          ? `✅ مقدار الزكاة الواجبة: ${formatNumber(zakatAmount)} كجم من المحصول.`
          : `❌ لا تجب الزكاة لأن المحصول أقل من النصاب (653 كجم).`;
        break;
      case "livestock":
        zakatAmount = amount >= 30 ? Math.floor(amount / 30) : 0;
        messageText = amount >= 30
          ? `✅ مقدار الزكاة الواجبة: ${formatNumber(zakatAmount)} رأس من الماشية.`
          : `❌ لا تجب الزكاة لأن عدد المواشي أقل من النصاب (30 رأس).`;
        break;
      default:
        zakatAmount = 0;
    }

    setZakat(zakatAmount);
    setMessage(messageText);
  };

  const resetZakat = () => {
    setZakat(null);
    setMessage("");
  };

  return (
    <div className="zakat-page">
      <h1>💰 حساب الزكاة</h1>
      <p>احسب مقدار الزكاة الواجبة عليك بسهولة.</p>

      <label>اختر نوع الزكاة:</label>
      <select value={type} onChange={(e) => { setType(e.target.value); resetZakat(); }}>
        <option value="money">💵 أموال</option>
        <option value="gold">🟡 ذهب</option>
        <option value="silver">⚪ فضة</option>
        <option value="crops">🌾 محاصيل زراعية</option>
        <option value="livestock">🐄 مواشي</option>
      </select>

      {type === "crops" && (
        <>
          <label>طريقة الري:</label>
          <select value={irrigation} onChange={(e) => { setIrrigation(e.target.value); resetZakat(); }}>
            <option value="rain">☔ ري طبيعي (10%)</option>
            <option value="manual">🚜 ري صناعي (5%)</option>
          </select>
        </>
      )}

      <label>أدخل الكمية أو المبلغ:</label>
      <input
        type="number"
        value={amount}
        onChange={(e) => { setAmount(e.target.value); resetZakat(); }}
        placeholder="أدخل القيمة هنا"
      />

      <button onClick={calculateZakat}>حساب نسبة الزكاة</button>

      {message && (
        <div className="zakat-result">
          <h3>{message}</h3>
          <p>{nisabInfo[type]}</p>
        </div>
      )}
    </div>
  );
};

export default ZakatCalculator;




