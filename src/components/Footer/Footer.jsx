import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaEnvelope, FaPhone } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>روابط هامة</h3>
          <ul>
            <li><a href="/">الرئيسية</a></li>
            <li><a href="/quran">القرآن الكريم</a></li>
            <li><a href="/prayer-items">مواقيت الصلاة</a></li>
            <li><a href="/zakat">حساب الزكاة</a></li>
            <li><a href="/sunan">سنن منسية</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>تواصل معنا</h3>
          <p><FaEnvelope /> info@example.com</p>
          <p><FaPhone /> +123 456 7890</p>
          <div className="social-icons">
            <a href="#"><FaFacebook /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaInstagram /></a>
          </div>
        </div>
        <div className="footer-section">
          <h3>حديث نبوي</h3>
          <p>قال رسول الله ﷺ: "بلغوا عني ولو آية"</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>جميع الحقوق محفوظة &copy; {new Date().getFullYear()} أسماء قنديل</p>
      </div>
    </footer>
  );
};

export default Footer;
