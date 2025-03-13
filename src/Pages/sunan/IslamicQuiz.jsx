/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./IslamicQuiz.css";

// قائمة كبيرة من الأسئلة
const allQuestions = [
  { question: "ما هي أول صلاة فُرضت على المسلمين؟", options: ["الفجر", "الظهر", "العشاء"], answer: "الظهر" },
  { question: "كم عدد أركان الإسلام؟", options: ["3", "5", "7"], answer: "5" },
  { question: "ما هو الشهر الذي يصوم فيه المسلمون؟", options: ["رمضان", "محرم", "ربيع الأول"], answer: "رمضان" },
  { question: "من هو آخر الأنبياء؟", options: ["موسى", "عيسى", "محمد"], answer: "محمد" },
  { question: "كم عدد الصلوات المفروضة يوميًا؟", options: ["2", "3", "5"], answer: "5" },
  { question: "ما هي السورة التي تعادل ثلث القرآن؟", options: ["الفاتحة", "الإخلاص", "الكافرون"], answer: "الإخلاص" },
  { question: "ما هو عدد أيام الحج؟", options: ["3", "5", "10"], answer: "5" },
  { question: "كم سنة استمرت دعوة النبي سرًا؟", options: ["3", "5", "7"], answer: "3" },
  { question: "ما هو الركن الأول من أركان الإسلام؟", options: ["الصلاة", "الشهادتان", "الحج"], answer: "الشهادتان" },
  { question: "ما هو أول مسجد بناه النبي؟", options: ["المسجد الحرام", "المسجد النبوي", "مسجد قباء"], answer: "مسجد قباء" },
  { question: "ما اسم أول معركة في الإسلام؟", options: ["بدر", "أحد", "الخندق"], answer: "بدر" },
  { question: "من هو أول خليفة للمسلمين؟", options: ["عمر بن الخطاب", "عثمان بن عفان", "أبو بكر الصديق"], answer: "أبو بكر الصديق" },
  { question: "في أي شهر هاجر النبي إلى المدينة؟", options: ["محرم", "ربيع الأول", "رمضان"], answer: "ربيع الأول" },
  { question: "ما هي ليلة القدر؟", options: ["أول ليلة في رمضان", "الليلة 17", "ليلة في العشر الأواخر"], answer: "ليلة في العشر الأواخر" },
  { question: "كم كان عمر النبي عندما بُعث؟", options: ["30", "40", "50"], answer: "40" },
  { question: "ما هو اسم والدة النبي؟", options: ["خديجة", "آمنة", "فاطمة"], answer: "آمنة" },
  { question: "من الذي كتب الوحي للنبي؟", options: ["علي بن أبي طالب", "زيد بن ثابت", "عمر بن الخطاب"], answer: "زيد بن ثابت" },
  { question: "كم عدد سور القرآن؟", options: ["100", "114", "120"], answer: "114" },
  { question: "ما هي أطول سورة في القرآن؟", options: ["النساء", "البقرة", "المائدة"], answer: "البقرة" },
];

// دالة لاختيار عدد معين من الأسئلة عشوائيًا
const getRandomQuestions = (num) => {
  return [...allQuestions].sort(() => Math.random() - 0.5).slice(0, num);
};

const IslamicQuiz = () => {
  const [shuffledQuestions, setShuffledQuestions] = useState(getRandomQuestions(10)); // تحديد عدد الأسئلة المعروضة
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(10);
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      nextQuestion();
    }
  }, [timeLeft]);

  const handleAnswer = (option) => {
    setSelectedOption(option);
    setIsCorrect(option === shuffledQuestions[currentQuestion].answer);
    if (option === shuffledQuestions[currentQuestion].answer) {
      setScore(score + 1);
    }
  };

  const nextQuestion = () => {
    if (currentQuestion < shuffledQuestions.length - 1) {
      setSelectedOption(null);
      setIsCorrect(null);
      setCurrentQuestion(currentQuestion + 1);
      setTimeLeft(10);
    } else {
      setGameOver(true);
    }
  };

  return (
    <div className="quize-cont">
      <div className="quiz-container">
        {gameOver ? (
          <div className="game-over">
            <h2>انتهت اللعبة! 🎉</h2>
            <p>نتيجتك: {score} / {shuffledQuestions.length}</p>
            <button onClick={() => window.location.reload()}>إعادة المحاولة 🔄</button>
          </div>
        ) : (
          <motion.div className="question-card">
            <h2 className="question">{shuffledQuestions[currentQuestion].question}</h2>
            <p className="timer">⏳ الوقت المتبقي: {timeLeft} ثانية</p>
            <div className="options">
              {shuffledQuestions[currentQuestion].options.map((option, index) => (
                <motion.button
                  key={index}
                  className={`option-btn ${selectedOption ? (option === shuffledQuestions[currentQuestion].answer ? "correct" : "wrong") : ""}`}
                  onClick={() => handleAnswer(option)}
                  disabled={selectedOption !== null}
                >
                  {option}
                </motion.button>
              ))}
            </div>

            {selectedOption && (
              <motion.div className={`feedback ${isCorrect ? "success" : "error"}`}>
                {isCorrect ? "✅ إجابة صحيحة!" : "❌ إجابة خاطئة!"}
              </motion.div>
            )}

            {selectedOption && (
              <button className="next-btn" onClick={nextQuestion}>
                {currentQuestion < shuffledQuestions.length - 1 ? "السؤال التالي ⏭️" : "عرض النتيجة 🏆"}
              </button>
            )}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default IslamicQuiz;

