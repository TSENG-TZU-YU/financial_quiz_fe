import { React, useEffect, useState } from 'react';
import axios from 'axios';

import './index.scss';

function Quiz() {
    const [start, setStart] = useState(false);
    const [quit1Val, setQuit1Val] = useState('');
    const [quit2Val, setQuit2Val] = useState('');
    const [moneyVal, setMoneyVal] = useState('');
    const [emailVal, setEmailVal] = useState('');
    const [nextPage, setNextPage] = useState(false);
    const [toEndPage, setToEndPage] = useState(false);
    const [getData, setGetData] = useState('');

    // console.log('object', quit1Val);

    let handler = async () => {
        try {
            let res = await axios.post(`http://127.0.0.1:8000/api/financial`, {
                result: { quit1Val: quit1Val, quit2Val: quit2Val, moneyVal: moneyVal, emailVal: emailVal },
            });
            console.log('object', res.data);
        } catch (err) {
            console.log(err);
        }
    };

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
                        <div className="h1">理財小測驗</div>
                        <div className="h2">理財小測驗</div>
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
                {start ? (
                    <div className="totalContainer">
                        <button
                            onClick={() => {
                                setStart(false);
                                setQuit1Val('');
                                setQuit2Val('');
                                setMoneyVal('');
                                setEmailVal('');
                                setNextPage(false);
                                setToEndPage(false);
                            }}
                        >
                            重新規劃
                        </button>
                        <p>{quit1Val}</p>
                        <p>{quit2Val}</p>
                        <p>{moneyVal}</p>
                        <p>{emailVal}</p>
                    </div>
                ) : (
                    ''
                )}

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

                <div className={`money  ${quit2Val !== '' ? 'scrollPage' : ''}`}>
                    <div>
                        輸入投資金額
                        <input
                            type="number"
                            value={moneyVal}
                            onChange={(e) => {
                                setMoneyVal(e.target.value);
                            }}
                        />
                        <button
                            onClick={() => {
                                setNextPage(true);
                            }}
                        >
                            輸入完成
                        </button>
                    </div>
                </div>

                <div className={`email ${nextPage !== false ? 'scrollPage' : ''}`}>
                    <div>
                        輸入email
                        <input
                            type="text"
                            value={emailVal}
                            onChange={(e) => {
                                setEmailVal(e.target.value);
                            }}
                        />
                        <button
                            onClick={() => {
                                setToEndPage(true);
                            }}
                        >
                            輸入完成
                        </button>
                        <button onClick={handler}>送出</button>
                    </div>
                </div>
                <div className={`end ${toEndPage !== false ? 'scrollPage' : ''}`}>end</div>
            </div>
        </>
    );
}

export default Quiz;
