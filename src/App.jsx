import React, { lazy, Suspense } from 'react';
import './App.css';

const Quiz = lazy(() => import('./Quiz'));
const Test = lazy(() => import('./test'));


function App() {
    return (
        <>
            <Quiz />
        </>
    );
}

export default App;
