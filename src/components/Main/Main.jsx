import React from 'react';
import { Routes, Route } from 'react-router-dom';
import styles from "./Main.module.css"
import Home from '../../views/Home/Home';
import BlogMain from '../../views/BlogMain/BlogView';
import Portfolio from '../../views/Portfolio/Portfolio';
import Life from '../../views/Life/Life';

const MainComponent = () => {
  return <main className={styles.main__wrapper}>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="blog" element={<BlogMain />} />
        <Route path="life" element={<Life />} />
        <Route path="portfolio" element={<Portfolio />} />
      </Routes>
  </main>;
};

export default MainComponent;
