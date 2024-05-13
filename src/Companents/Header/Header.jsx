import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faCartShopping, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styles from "./Header.module.css";
import { CiHeart } from "react-icons/ci";


const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <img
            src="https://preview.colorlib.com/theme/cozastore/images/icons/logo-01.png"
            alt=""
          />
        </div>
        <nav>
          <ul>
            <li>
              <a style={{color:"rgb(108, 122, 224)"}} href="">Home</a>
            </li>
            <li>
              <a href="">Shop</a>
            </li>
            <li>
              <a href="">Features</a>
            </li>
            <li>
              <a href="">Blog</a>
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
          </ul>
        </nav>
        <div className={styles.icons}>
              <FontAwesomeIcon className={styles.icon} icon={faSearch} />
          <FontAwesomeIcon className={styles.icon} icon={faCartShopping} />
          <FontAwesomeIcon className={styles.icon} icon={faHeart} />
        </div>
      </div>
    </div>
  );
};

export default Header;
