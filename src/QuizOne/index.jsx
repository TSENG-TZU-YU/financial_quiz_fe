import { React, useState } from 'react';

import './index.scss';

function QuizOne() {
    const [quit1Val, setQuit1Val] = useState('');
    const [quit2Val, setQuit2Val] = useState('');
    const [moneyVal, setMoneyVal] = useState('');
    const [emailVal, setEmailVal] = useState('');
    const [nextPage, setNextPage] = useState(false);
    const [toEndPage, setToEndPage] = useState(false);

    // console.log('object', quit1Val);
    return (
        <>
            <div className="oneContainer">
                <div className="totalContainer">
                    <button
                        onClick={() => {
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

                <div className="one">
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
                    </div>
                </div>
                <div className={`end ${toEndPage !== false ? 'scrollPage' : ''}`}>end</div>
            </div>
        </>
    );
}

export default QuizOne;
