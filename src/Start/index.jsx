import React from 'react';
import { useEffect, useState } from 'react';
import '../styles/pageStyles/start.scss';

function Start() {
    useEffect(() => {
        const hero = document.querySelector('.main');
        const text = hero.querySelector('h1');
        function shadow(e) {
            const width = hero.offsetWidth;
            const height = hero.offsetHeight;
            const walk = 50;

            let { offsetX: x, offsetY: y } = e;

            if (this !== e.target) {
                x = x + e.target.offsetLeft;
                y = y + e.target.offsetTop;
            }

            //how far should the text-shadow go
            const xWalk = Math.round((x / width) * walk - walk / 2);
            const yWalk = Math.round((y / height) * walk - walk / 2);

            text.style.textShadow = `
            ${xWalk}px ${yWalk}px 0 #33cccc
            `;
        }

        hero.addEventListener('mousemove', shadow);
    }, []);

    return (
        <div className="main">
            <h1>Follow me around.</h1>
        </div>
    );
}

export default Start;
