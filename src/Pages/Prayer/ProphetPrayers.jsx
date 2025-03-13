
import React from 'react';
import ImageGallery from '../Prayer/ImageGallery'; 
import '../Prayer/ImageGallery.css'


import dua1 from '../../assets/dua1.jpg';
import dua2 from '../../assets/dua2.jpg';
import dua3 from '../../assets/dua3.jpg';
import dua4 from '../../assets/dua4.jpg';
import dua5 from '../../assets/dua5.jpg';
import dua6 from '../../assets/dua6.jpg';
import dua7 from '../../assets/dua7.jpg';
import dua8 from '../../assets/dua8.jpg';
import dua9 from '../../assets/dua9.jpg';
import dua10 from '../../assets/dua10.jpg';
import dua11 from '../../assets/dua11.jpg';

const ProphetPrayers = [
    { src: dua1, alt: "دعاء سيدنا إبراهيم" },
    { src: dua2, alt: "دعاء سيدنا موسى" },
    { src: dua3, alt: "دعاء سيدنا أيوب" },
    { src: dua4, alt: "دعاء سيدنا يونس" },
    { src: dua5, alt: "دعاء سيدنا نوح" },
    { src: dua6, alt: "دعاء سيدنا سليمان" },
    { src: dua7, alt: "دعاء سيدنا يوسف" },
    { src: dua8, alt: "دعاء سيدنا هود" },
    { src: dua9, alt: "دعاء سيدنا زكريا" },
    { src: dua10, alt: "دعاء سيدنا آدم" },
    { src: dua11, alt: "دعاء سيدنا محمد ﷺ" }
];

const ProphetPrayer = () => {
    return (
        <ImageGallery title="📖 من أدعية الأنبياء" images={ProphetPrayers}    /> 
      
    );
};

export default ProphetPrayer;
