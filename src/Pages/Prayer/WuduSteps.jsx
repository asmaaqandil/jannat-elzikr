import React from "react";
import ImageGallery from "./ImageGallery";
import '../Prayer/ImageGallery.css'

import wudu1 from '../../assets/wudu1.jpg'
import wudu2 from '../../assets/wudu2.jpg'
import wudu3 from '../../assets/wudu3.jpg'
import wudu4 from '../../assets/wudu4.jpg'
import wudu5 from '../../assets/wudu5.jpg'
import wudu6 from '../../assets/wudu6.jpg'
import wudu7 from '../../assets/wudu7.jpg'
import wudu8 from '../../assets/wudu8.jpg'
import wudu9 from '../../assets/wudu9.jpg'


const Wudustep =[

    {src: wudu1, alt:"نية الوضوء"},

    {src: wudu2, alt:"غسل اليدين"},

    {src: wudu3, alt:"المضمضة"},

    {src: wudu4, alt:"الاستنشاق"},

    {src: wudu5, alt:"غسل الوجه"},

    {src: wudu6, alt:"غسل اليدين الى المرفقين"},

    {src: wudu7, alt:"مسح الرأس"},

    {src: wudu8, alt:"مسح الاذن"},

    {src: wudu9, alt:"غسل الرجلين"},
    
];

const WuduSteps = () =>{

    return<ImageGallery title="💦 طريقة الوضوء الصحيحة" images={Wudustep}   />
}

export default WuduSteps;