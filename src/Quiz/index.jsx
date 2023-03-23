import { React, useEffect, useState } from 'react';
import axios from 'axios';
import './index.scss';
import Loading from '../loading/MailLoading.jsx';

import { API_URL } from '../utils/config';

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
    const [checkMail, setCheckMail] = useState(false);
    const [checkMoney, setCheckMoney] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [disabled, setDisabled] = useState(false);
    const [quiz, setQuiz] = useState('0');
    const [invest, setInvest] = useState('');

    // total number
    let totalMoney = Number(quit1Val) + Number(quit1Val);

    // getdata
    useEffect(() => {
        async function getData() {
            try {
                let res = await axios.get(`${API_URL}/financial`);
                // console.log('object', res.data);
                setGetQuiz1(res.data.quiz1);
                setGetQuiz2(res.data.quiz2);
            } catch (err) {
                console.log(err);
            }
        }

        getData();
    }, []);

    function total() {
        if (totalMoney === 2) {
            setInvest('投資組1');
        }
        if (totalMoney === 3) {
            setInvest('投資組2');
        }
        if (totalMoney === 4) {
            setInvest('投資組3');
        }
        if (totalMoney === 5) {
            setInvest('投資組4');
        }
    }

    // post result
    let handler = async () => {
        try {
            setIsLoading(true);
            let res = await axios.post(`${API_URL}/financial`, {
                result: {
                    quit1Val: quit1Val,
                    quit2Val: quit2Val,
                    moneyVal: moneyVal,
                    emailVal: emailVal,
                    total: totalMoney,
                },
            });
            setTimeout(() => {
                setIsLoading(false);
            }, 500);
            console.log('object', res.data);
            total();
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
                            className="startBtn btn cursor"
                            onClick={() => {
                                setStart(true);
                                setQuiz('1');
                            }}
                        >
                            START
                        </button>
                    </div>
                </div>
                {start ? (
                    <div className="totalContainer">
                        <button
                            className="cursor"
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
                        <p>{quiz}/4</p>
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
                                        setQuiz('2');
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
                                        setQuiz('3');
                                    }}
                                />
                                {v.name}
                            </div>
                        );
                    })}
                </div>

                <div className={`money  ${quit2Val !== '' ? 'scrollPage' : ''}`}>
                    <div>請輸入正確35 ~ 5000,000的整數數字</div>
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
                                if (moneyVal > 35 && moneyVal < 5000000) {
                                    setNextPage(true);
                                    setQuiz('4');
                                } else {
                                    setCheckMoney(true);
                                }
                            }}
                        >
                            輸入完成
                        </button>
                    </div>
                    <div>
                        <select
                            value={moneyVal}
                            onChange={(e) => {
                                setMoneyVal(e.target.value);
                            }}
                        >
                            <option value="0">請選擇金額</option>
                            <option>100~2000</option>
                            <option>2000~4000</option>
                            <option>4000~6000</option>
                            <option>1000以上</option>
                        </select>
                        <button
                            onClick={() => {
                                if (moneyVal === '' || moneyVal === '0') {
                                    setCheckMoney(true);
                                } else {
                                    setNextPage(true);
                                    setQuiz('4');
                                }
                            }}
                        >
                            輸入完成
                        </button>
                    </div>
                    {checkMoney ? <div>請輸入正確35 ~ 5000,000的整數數字</div> : ''}
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
                                    setCheckMail(false);
                                    handler();
                                } else {
                                    setCheckMail(true);
                                }
                                setDisabled(true);
                            }}
                        >
                            送出
                        </button>
                        {isLoading ? <Loading /> : ''}
                    </div>
                    {checkMail ? <div>請輸入正確email</div> : ''}
                </div>
                <div className={`end ${toEndPage !== false && checkMail === false ? 'scrollPage' : ''}`}>
                    <div>end</div>
                    <div>投資建議 : {invest}</div>
                </div>
            </div>
        </>
    );
}

export default Quiz;
