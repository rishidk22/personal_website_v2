import React from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


import data from '../../data/contact';

const Nav = () => (
  <section id="sidebar">
    <section id="intro">
    <img src={`${BASE_PATH}/images/me_icon.jpeg`} alt="" />
      <Link to="/" className="logo">
      </Link>
      <header>
        <h2>Rishi Kalluri</h2>
        <p><a href="mailto:rkallu4@illinois.edu">rkallu4@illinois.edu</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hi, I&apos;m Rishi. I like building things.
            I am an undergraduate student at <a href="https://illinois.edu/">UIUC</a> and a passionate engineer.
            I am currently the Web Director for <a href="https://pulse.ece.illinois.edu/">ECE Pulse</a> as well as a TA for Computer
            Systems Engineering. I have previously worked at <a href="https://www.capitalone.com/">Capital One</a> and <a href="https://www.physiq.com/">PhysIQ</a>.
      </p>
      <ul className="actions">
        <li>
          {window.location.pathname !== `${BASE_PATH}/about` ? <Link to="/about" className="button">Learn More</Link> : <a href="https://drive.google.com/file/d/1mmwNJlB2c3Og9kj39Hks9RWSiX5TW8aZ/view?usp=sharing" className="button">More About Me</a>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ul className="icons">
        {data.map((s) => (
          <li key={s.label}>
            <a href={s.link}>
              <FontAwesomeIcon icon={s.icon} />
            </a>
          </li>
        ))}
      </ul>
    </section>
  </section>
);

export default Nav;
