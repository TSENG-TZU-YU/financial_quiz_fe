import React, { lazy, Suspense } from 'react';
import './App.css';

const Quiz = lazy(() => import('./Quiz'));

function App() {
    return (
        <>
            <Quiz />
        </>
    );
}

export default App;
