import { React, useState } from 'react';

import './index.scss';

function QuizOne() {
    const [quit1Val, setQuit1Val] = useState('');
    const [quit2Val, setQuit2Val] = useState('');

    console.log('object', quit1Val);
    return (
        <>
            <div className="oneContainer">
            {/* <div className="start">
                <button>start</button>
            </div> */}
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
            </div>
        </>
    );
}

export default QuizOne;
