import { React, useEffect, useState } from 'react';
import axios from 'axios';

import './index.scss';
import Loading from '../loading/MailLoading.jsx';

function Quiz() {
    const [start, setStart] = useState(false);
    const [quit1Val, setQuit1Val] = useState('');
    const [quit2Val, setQuit2Val] = useState('');
    const [moneyVal, setMoneyVal] = useState('');
    const [emailVal, setEmailVal] = useState('');
    const [nextPage, setNextPage] = useState(false);
    const [toEndPage, setToEndPage] = useState(false);
    const [getQuiz1, setGetQuiz1] = useState([]);
    const [getQuiz2, setGetQuiz2] = useState([]);
    const [checkMail, setCheckMail] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [disabled, setDisabled] = useState(false);

    // getdata
    useEffect(() => {
        async function getData() {
            try {
                let res = await axios.get(`http://127.0.0.1:8000/api/financial`);
                // console.log('object', res.data);
                setGetQuiz1(res.data.quiz1);
                setGetQuiz2(res.data.quiz2);
            } catch (err) {
                console.log(err);
            }
        }
        getData();
    }, []);

    // post result
    let handler = async () => {
        try {
            setIsLoading(true);
            let res = await axios.post(`http://127.0.0.1:8000/api/financial`, {
                result: {
                    quit1Val: quit1Val,
                    quit2Val: quit2Val,
                    moneyVal: moneyVal,
                    emailVal: emailVal,
                },
            });
            setTimeout(() => {
                setIsLoading(false);
            }, 500);
            console.log('object', res.data);
            setToEndPage(true);
        } catch (err) {
            console.log(err);
        }
    };

    let quiz1Name = () => {
        let name = quit1Val;
        if (name === '') return '';
        if (name === '1') return getQuiz1[0].name;
        if (name === '2') return getQuiz1[1].name;
        if (name === '3') return getQuiz1[2].name;
        if (name === '4') return getQuiz1[3].name;
        if (name === '5') return getQuiz1[4].name;
        if (name === '6') return getQuiz1[5].name;
    };

    let quiz2Name = () => {
        let name = quit2Val;
        if (name === '') return '';
        if (name === '1') return getQuiz2[0].name;
        if (name === '2') return getQuiz2[1].name;
        if (name === '3') return getQuiz2[2].name;
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
                        <p>{quiz1Name()}</p>
                        <p>{quiz2Name()}</p>
                        <p>{moneyVal}</p>
                        <p>{emailVal}</p>
                    </div>
                ) : (
                    ''
                )}

                <div className={`one  ${start ? 'scrollPage' : ''}`}>
                    {getQuiz1.map((v, i) => {
                        return (
                            <div key={i}>
                                <input
                                    type="radio"
                                    name="quit1One"
                                    value={v.id}
                                    onChange={(e) => {
                                        setQuit1Val(e.target.value);
                                    }}
                                />
                                {v.name}
                            </div>
                        );
                    })}
                </div>

                <div className={`two  ${quit1Val ? 'scrollPage' : ''}`}>
                    {getQuiz2.map((v, i) => {
                        return (
                            <div key={i}>
                                <input
                                    type="radio"
                                    name="quit1One"
                                    value={v.id}
                                    onChange={(e) => {
                                        setQuit2Val(e.target.value);
                                    }}
                                />
                                {v.name}
                            </div>
                        );
                    })}
                </div>

                <div className={`money  ${quit2Val !== '' ? 'scrollPage' : ''}`}>
                    <div>
                        輸入投資金額
                        <input
                            type="number"
                            className="hide-arrows"
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

                <div className={`email  ${nextPage !== false ? 'scrollPage' : ''}`}>
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
                            disabled={`${disabled !== false ? 'disabled' : ''}`}
                            onClick={() => {
                                const regEmail = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/;
                                // /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
                                const result = regEmail.test(emailVal);

                                if (result) {
                                    setCheckMail('email合法');
                                    handler();
                                } else {
                                    setCheckMail('email不合法');
                                }
                                setDisabled(true);
                            }}
                        >
                            送出
                        </button>
                        {isLoading ? <Loading /> : ''}
                    </div>
                    {checkMail === 'email不合法' ? <div>請輸入正確email</div> : ''}
                </div>
                <div className={`end ${toEndPage !== false && checkMail === 'email合法' ? 'scrollPage' : ''}`}>end</div>
            </div>
        </>
    );
}

export default Quiz;
