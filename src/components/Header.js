import React, { useEffect, useState } from 'react';

const Header = () => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const handdleScroll = () => {
        setScrollPosition(window.scrollY || document.documentElement.scrollTop);
    }
    useEffect(()=>{
        window.addEventListener('scroll', handdleScroll);
        if(scrollPosition >= 200) {
            hideHeader();
        } else {
            showHeader();
        }
    });
    const showHeader = () => {
        const header = document.getElementsByClassName('header');
        header[0].style.width = "92%";
        header[0].style.fontSize = "30px";
    }
    const hideHeader = () => {
        const header = document.getElementsByClassName('header');
        header[0].style.width = "10%";
        header[0].style.fontSize = "25px";

    }
    console.log(window.scrollY)
    return (
        <div className="header common-container">
            <h1>kanovii</h1>
        </div>
    )
}

export default Header;