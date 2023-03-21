import React, {  lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

const Start = lazy(() => import('./Start'));
const QuizOne = lazy(() => import('./QuizOne'));
const QuizTwo = lazy(() => import('./QuizTwo'));
const Money = lazy(() => import('./Money'));
const Email = lazy(() => import('./Email'));

function App() {
    return (
        <Suspense>
            <BrowserRouter>
                <Routes>
                    <Route path="/start" element={<Start />} />
                    <Route path="/quizOne" element={<QuizOne />} />
                    <Route path="/quizTwo" element={<QuizTwo />} />
                    <Route path="/money" element={<Money />} />
                    <Route path="/email" element={<Email />} />
                </Routes>
            </BrowserRouter>
        </Suspense>
    );
}

export default App;
