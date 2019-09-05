import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main>
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2><Link to="/">Hi There!</Link></h2>
          <p>My name is Rishi Kalluri, thanks for stopping by!</p>
        </div>
      </header>
      <p>It's nice to meet you! Please feel free to read more <Link to="/about">about me</Link>,
        or you can check out my {' '}
        <a href="https://drive.google.com/file/d/1mmwNJlB2c3Og9kj39Hks9RWSiX5TW8aZ/view?usp=sharing">resume</a>, {' '}
        <Link to="/projects">projects</Link>, {' '}
        or <Link to="/contact">contact</Link> me.
      </p>
    </article>
  </Main>
);

export default Index;
