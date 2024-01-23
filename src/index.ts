import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { Portfolio } from './Portfolio';

ReactDOM.render(
    <React.StrictMode>
        <Suspense fallback={<div>Loading...</div>}>
            <Portfolio />
        </Suspense>
    </React.StrictMode>,
    document.getElementById('root')
);
