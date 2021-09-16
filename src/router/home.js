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
        apearDiv(1,0)
        if(scrollPositionHome > 465) {
            apearDiv(2, 1);
            if( scrollPositionHome > 1200) {
                apearDiv(2, 3);
                if(scrollPositionHome > 1900) {
                    apearDiv(1,5);
                }
            }
        }
        
    })
    const apearDiv = (ev, num) => {
        const apear = document.getElementsByClassName('apear');
        for(let i = 0; i < ev; i++) {
            apear[i + num].style.visibility = 'visible';
            apear[i + num].classList.add('apear_ani');
            // setInterval(() => {
            //     apear[i + num].classList.remove('apear_ani');
            // }, 1000);
        }
        console.log(window.scrollY)
        console.log(document.documentElement.scrollTop)
    }
    const onLinkOver = () => {
        const linkSpan = document.getElementsByClassName('gradiunt_text');
        linkSpan[0].style.color = "white";
    }
    return (
        <div className="home_container">
            <div className="hom_box">
                <div className="apear">
                    <h2>안녕하세요, 저는 <span className="gradiunt_text">고관호</span> 입니다.</h2>
                    <div>
                        <Link className="link" to="/Profile">
                            <span onMouseOver={onLinkOver} className="gradiunt_text">자세히 보기</span>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="hom_box">
                <div className="apear" id="pulse">
                    <img src={require("./../img/main.jpg").default} />
                </div>
                <div className="apear">
                    <h2>저는 테스트 중입니다.</h2>
                    <p>저는 양고기를 좋아해요 양은 저를 위해 먹히니까는 말이죠호호 희생양인가요호호??저는 양고기를 좋아해요 양은 저를 위해 먹히니까는 말이죠호호 희생양인가요호호??</p>
                </div>               
            </div>
            <div className="hom_box">                
                <div className="apear">     
                    <h2>테스트</h2>
                    <p>테스트는 즐거워테스트는 즐거워테스트는 즐거워테스트는 즐거워테스트는 즐거워테스트는 즐거워</p>
                </div>
                <div className="apear">
                    <img src={require("./../img/sojin.jpg").default} />
                </div>
            </div>
            <div className="hom_box">
                <div className="apear">
                    <h2>딴딴딴</h2>
                    <p>따라라랄 랄 랄라라라 랄 랄 라라라라라라 랄</p>
                </div>
            </div>
        </div>
    )
}

export default Home;