import { React, useEffect, useState } from 'react';

import './index.scss';

function Quiz() {
    const [start, setStart] = useState(false);
    const [quit1Val, setQuit1Val] = useState('');
    const [quit2Val, setQuit2Val] = useState('');

    console.log('object', quit1Val);
    useEffect(() => {
        const hero = document.querySelector('.main');
        const text = hero.querySelector('.h1');
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
        <>
            <div className="oneContainer">
                <div className="start">
                    <div className="main">
                        <div className="h1">Follow me around.</div>
                        <div className="h2">Follow me around.</div>
                        <button
                            className="startBtn btn"
                            onClick={() => {
                                setStart(true);
                            }}
                        >
                            START
                        </button>
                    </div>
                </div>
                <div className={`one  ${start ? 'scrollPage' : ''}`}>
                    <div>
                        <input
                            type="radio"
                            name="quit1One"
                            value="1"
                            onChange={(e) => {
                                setQuit1Val(e.target.value);
                            }}
                        />
                        創業基金
                    </div>
                    <div>
                        <input
                            type="radio"
                            name="quitOne"
                            value="2"
                            onChange={(e) => {
                                setQuit1Val(e.target.value);
                            }}
                        />
                        小孩教育基金
                    </div>
                    <div>
                        <input
                            type="radio"
                            name="quitOne"
                            value="3"
                            onChange={(e) => {
                                setQuit1Val(e.target.value);
                            }}
                        />
                        提早退休
                    </div>
                    <div>
                        <input
                            type="radio"
                            name="quitOne"
                            value="4"
                            onChange={(e) => {
                                setQuit1Val(e.target.value);
                            }}
                        />
                        就想存點錢
                    </div>
                    <div>
                        <input
                            type="radio"
                            name="quitOne"
                            value="5"
                            onChange={(e) => {
                                setQuit1Val(e.target.value);
                            }}
                        />
                        旅遊購物
                    </div>
                    <div>
                        <input
                            type="radio"
                            name="quitOne"
                            value="6"
                            onChange={(e) => {
                                setQuit1Val(e.target.value);
                            }}
                        />
                        就想賺大錢
                    </div>
                </div>
                <div className={`two  ${quit1Val !== '' ? 'scrollPage' : ''}`}>
                    <div>
                        <input
                            type="radio"
                            name="quitTwo"
                            value="1"
                            onChange={(e) => {
                                setQuit2Val(e.target.value);
                            }}
                        />
                        只想穩穩獲利
                    </div>
                    <div>
                        <input
                            type="radio"
                            name="quitTwo"
                            value="2"
                            onChange={(e) => {
                                setQuit2Val(e.target.value);
                            }}
                        />
                        可以承擔一點風險
                    </div>
                    <div>
                        <input
                            type="radio"
                            name="quitTwo"
                            value="3"
                            onChange={(e) => {
                                setQuit2Val(e.target.value);
                            }}
                        />
                        想賺多一點，可以承擔高風險
                    </div>
                </div>
            </div>
        </>
    );
}

export default Quiz;
