import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';


const Home = () => {
    const [scrollPositionHome, setScrollPositionHome] = useState(0);
    const handleScrollHome = () => {
        setScrollPositionHome(
            window.scrollY || document.documentElement.scrollTop
        );
    }
    useEffect(()=> {
        window.addEventListener('scroll', handleScrollHome);
        if(scrollPositionHome > 500) {
            apearDiv();
        }
    })
    const apearDiv = () => {
        const apear = document.getElementsByClassName('apear');
        apear[0].style.visibility = 'visible';
        apear[0].classList.add('apear_ani');
    }
    const onLinkOver = () => {
        const linkSpan = document.getElementsByClassName('gradiunt_text');
        linkSpan[0].style.color = "white";
    }
    return (
        <div className="home_container">
            <div className="hom_box">
                <h2>안녕하세요, 저는 <span className="gradiunt_text">고관호</span> 입니다.</h2>
                <div>
                    <Link className="link" to="/Profile">
                        <span onMouseOver={onLinkOver} className="gradiunt_text">자세히 보기</span>
                    </Link>
                </div>
                
            </div>
            <div className="hom_box">
                <div className="apear">
                    <h2>저는 테스트 중입니다.</h2>
                </div>
            </div>
        </div>
    )
}

export default Home;