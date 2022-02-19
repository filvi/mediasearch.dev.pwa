import React from 'react'
import {useEffect, useRef } from "react"

import { gsap } from "gsap"
const Main = () => {
    
    // const [page, setPage] = useState("homepage")
    
    const tl = useRef();


    useEffect(() => {            
        
        tl.current = gsap.timeline({ ease: "Power4.easeOut"})
        .to(".title", {duration:2, transform: "translateY(0)", "clip-path": "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)", stagger: 0.4} )
        .from(".logo-item", {duration: 1, opacity:0., y:100, stagger: 0.2} ,  "-=1")
        .from(".nav-link", { duration: 1,  y:100, opacity:0, stagger: .1}, "-=1.5")
        .to(".subtitle-description", { duration: 3, "clip-path": "polygon(100% 100%, 0% 100%, 0% 0%, 100% 0%)", stagger: 0.20}, "-=1.7")
        .from("#call-to-action-btn", { duration: 1,transform:"translateY(100px)", opacity:0,  }, "-=2.7")
        .from("#call-to-action-input", { duration: 1,  transform:"translateY(100px)", opacity:0, }, "-=2.7")

        }, []);

    function submit_search(){
        console.log("ciao");
    }    
  
    return ( 
        <div className="home-container">
        <div className="title">
            <h1 className="text-white osw mb-0 title">Find free <i className="text-glass-3">hi-res</i> assets online </h1><h1  className="text-white osw mb-0 title">should be easier </h1>
        </div>
        <div className="subtitle">

            <h4 className="recursive subtitle-description text-glass-3">Tired to type the same query over and over again? </h4>
            <h4 className="recursive subtitle-description text-glass-3">Wish to type once and search in many websites? </h4>
            <h4 className="recursive subtitle-description text-glass-3">This may be what you are looking for </h4>
            <svg className="dash  subtitle-description" width="82" height="15" viewBox="0 0 69 2" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M0.5 1H69" stroke="white" />
            </svg>

        </div>
        <div className="d-flex text-white" >
            <input style={{maxHeight: "59px"}} type="text" id="call-to-action-input" name="q" placeholder="eg. technology"
            className="src "/>
            <div class="d-flex center-center" id="call-to-action-btn">

            <svg onClick={submit_search} className="cursor-pointer" width="auto" height="59" viewBox="0 0 63 59" fill="none" xmlns="http://www.w3.org/2000/svg">
            
                <rect x="2" y="2" width="58" height="55" fill="black"/>
                <g filter="url(#filter0_b_136_130)">
                    <path d="M29.5008 17.0865C24.4257 17.0865 20.33 21.1172 20.33 26.1117C20.33 31.1063 24.4257 35.137 29.5008 35.137C34.5759 35.137 38.6716 31.1063 38.6716 26.1117C38.6716 21.1172 34.5463 17.0865 29.5008 17.0865Z" fill="#F6C828"/>
                    <path d="M0 0V59H62.6227V0H31.3114H0ZM50.7511 45.0386L48.733 47.0248C48.08 47.6965 46.9819 47.6965 46.2993 47.0248L39.1169 40.0149C38.7905 39.6936 38.5827 39.2554 38.5827 38.8173V37.6782C35.9116 39.6351 32.914 40.7743 29.4713 40.7743C21.2502 40.7743 14.6021 34.2025 14.6021 26.1119C14.6021 18.0213 21.2799 11.4495 29.5009 11.4495C37.722 11.4495 44.3998 17.9629 44.3998 26.0535C44.3998 29.4708 43.2423 32.6837 41.2538 35.0203H42.4113C42.8565 35.0203 43.3017 35.2248 43.6282 35.546L50.7511 42.5851C51.4337 43.2861 51.4337 44.396 50.7511 45.0386Z" fill="#F6C828"/>
                </g>
                <defs>
                    <filter id="filter0_b_136_130" x="-3" y="-3" width="68.6226" height="65" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feGaussianBlur in="BackgroundImage" stdDeviation="1.5"/>
                    <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_136_130"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_136_130" result="shape"/>
                    </filter>
                </defs>
            </svg>

            </div>

            {/* <button className="src focused" id="call-to-action-btn" onClick={submit_search}>
            <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.87324 4.63363C6.51878 4.63363 5.42571 5.7267 5.42571 7.08115C5.42571 8.43561 6.51878 9.52868 7.87324 9.52868C9.22769 9.52868 10.3208 8.43561 10.3208 7.08115C10.3208 5.7267 9.21977 4.63363 7.87324 4.63363Z" fill="#F6C828"/>
                <path d="M0 0V16H16.7129V0H0ZM13.5446 12.2139L13.0059 12.7525C12.8317 12.9347 12.5386 12.9347 12.3564 12.7525L10.4396 10.8515C10.3525 10.7644 10.297 10.6455 10.297 10.5267V10.2178C9.58416 10.7485 8.78416 11.0574 7.86534 11.0574C5.67128 11.0574 3.89703 9.27525 3.89703 7.08119C3.89703 4.88713 5.67921 3.10495 7.87327 3.10495C10.0673 3.10495 11.8495 4.87129 11.8495 7.06535C11.8495 7.99208 11.5406 8.86337 11.0099 9.49703H11.3188C11.4376 9.49703 11.5564 9.55248 11.6436 9.6396L13.5446 11.5485C13.7267 11.7386 13.7267 12.0396 13.5446 12.2139Z" fill="#F6C828"/>
            </svg>

            </button> */}
        </div>
            
        
    </div>
     );
}
 
export default Main;