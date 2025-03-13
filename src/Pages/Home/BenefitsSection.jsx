import React from "react";
import "./BenefitsSection.css";
import { FaPrayingHands, FaMoon, FaHandHoldingHeart, FaKaaba, FaHeart, FaBook } from "react-icons/fa";

const benefits = [
  { title: "الصلاة", description: "الصلاة تنهى عن الفحشاء والمنكر، وتقرب العبد من الله.", icon: <FaPrayingHands /> },
  { title: "الصيام", description: "الصيام جُنة، وسبب لمغفرة الذنوب وقرب العبد من الله.", icon: <FaMoon /> },
  { title: "الزكاة", description: "الزكاة تطهر المال، وتزيد البركة فيه، وتساعد المحتاجين.", icon: <FaHandHoldingHeart /> },
  { title: "الحج", description: "الحج يمحو الذنوب، ويجعل الإنسان يعود كيوم ولدته أمه.", icon: <FaKaaba /> },
  { title: "الصلاة على الرسول", description: "من صلى على النبي صلاة، صلى الله عليه بها عشرًا.", icon: <FaHeart /> },
  { title: "التوحيد", description: "التوحيد هو أساس الدين، ومن مات عليه دخل الجنة.", icon: <FaBook /> },
];

const BenefitsSection = () => {
  return (
    <section className="benefits-section">
      <h2 className="section-title">فضائل الأعمال</h2>
      <div className="benefits-container">
        {benefits.map((benefit, index) => (
          <div key={index} className="benefit-item">
            <div className="decorative-line"></div>
            <div className="circle">{benefit.title}</div>
            <div className="benefit-card">
              <div className="benefit-icon">{benefit.icon}</div>
              <p>{benefit.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BenefitsSection;

