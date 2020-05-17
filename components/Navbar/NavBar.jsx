/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css';


const NavBar = () => (
  <div className={styles.container}>
      <ul className={styles.bar}>
        <li>
          <h1>Awelon Beach House</h1>
        </li>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/inside">
            <a>Inside</a>
          </Link>
        </li>
        <li>
          <Link href="/local_area">
            <a>Local Area</a>
          </Link>
        </li>
      </ul>
  </div>
);

export default NavBar;
