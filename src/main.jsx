import React from 'react';
import ReactDOM from 'react-dom/client';
import Navbar from './components/navbar';
import Content from './components/content';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Navbar />
        <Content />
    </React.StrictMode>
);
