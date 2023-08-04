import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import { setupTagApp } from './App';

document.addEventListener("DOMContentLoaded", () => {
  setupTagApp();
});

const root = document.getElementById('root');
ReactDOM.render(
  <React.StrictMode>
    {/* 여기서 App 컴포넌트를 렌더링하도록 수정 */}
  </React.StrictMode>,
  root
);
