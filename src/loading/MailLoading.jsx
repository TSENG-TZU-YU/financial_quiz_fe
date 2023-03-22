import React from 'react';

import './mailLoading.scss'

function MailLoading() {
    return (
        <div className="loading">
            <div className="shape shape-4">
                <div className="shape-4-top"></div>
                <div className="shape-4-bottom"></div>
                <div className="shape-4-eye"></div>
            </div>
            <div className="shape shape-1"></div>
            <div className="shape shape-2"></div>
            <div className="shape shape-3"></div>
        </div>
    );
}

export default MailLoading;
