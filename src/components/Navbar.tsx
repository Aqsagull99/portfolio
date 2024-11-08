"use client";

import React, { useState } from "react";
import styles from "../styles/navbar.module.css";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-black text-blue-800 p-4 shadow-lg">
      <div className=" container mx-auto flex items-center justify-between">
        <div className="flex items-center text-lg font-semibold font-serif">
          {/* <Image
            src="/blue-white_-logo.png"
            alt="Logo"
            className="w-26 h-20 mr-0.5"
          /> */}
          

           <Image
            src="/blue-white_-logo.png"
              alt="Logo"
              width={104}  // width of 26px
              height={80}  // height of 20px
            className="mr-0.5"
                 />
          <span>
            Future<span className="text-white">Scape</span>
          </span>
        </div>

        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-blue-600 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        <nav className="hidden md:flex md:items-center md:space-x-6">
          <ul className="flex gap-6 text-sm md:text-base font-serif">
            <li>
              <Link
                href="/"
                className={`${styles.navLink} nav-link hover:text-white transition-colors duration-200`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/#about"
                className={`${styles.navLink} nav-link hover:text-white transition-colors duration-200`}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/#skills"
                onClick={closeMenu}
                className={`${styles.navLink} nav-link hover:text-white transition-colors duration-200`}
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                href="/cards"
                className={`${styles.navLink} nav-link hover:text-white transition-colors duration-200`}
              >
                My Journey
              </Link>
            </li>
            <li>
              <Link
                href="/#projects"
                onClick={closeMenu}
                className={`${styles.navLink} nav-link hover:text-white transition-colors duration-200`}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                href="/#experience"
                onClick={closeMenu}
                className={`${styles.navLink} nav-link hover:text-white transition-colors duration-200`}
              >
                Experience
              </Link>
            </li>

            <li>
              <Link
                href="/#contact"
                onClick={closeMenu}
                className={`${styles.navLink} nav-link hover:text-white transition-colors duration-200`}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      {isMenuOpen && (
        <nav className="fixed inset-0 bg-black bg-opacity-90 z-50 flex justify-center items-center md:hidden">
          <ul className="flex flex-col items-center gap-4 text-lg font-serif">
            <li>
              <Link
                href="/"
                onClick={closeMenu}
                className={`${styles.navLink} nav-link hover:text-white transition-colors duration-200`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/#about"
                onClick={closeMenu}
                className={`${styles.navLink} nav-link hover:text-white transition-colors duration-200`}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/#skills"
                onClick={closeMenu}
                className={`${styles.navLink} nav-link hover:text-white transition-colors duration-200`}
              >
                Skills
              </Link>
            </li>

            <li>
              <Link
                href="/cards"
                onClick={closeMenu}
                className={`${styles.navLink} nav-link hover:text-white transition-colors duration-200`}
              >
                My Journey
              </Link>
            </li>

            <li>
              <Link
                href="/#projects"
                onClick={closeMenu}
                className={`${styles.navLink} nav-link hover:text-white transition-colors duration-200`}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                href="/#experience"
                onClick={closeMenu}
                className={`${styles.navLink} nav-link hover:text-white transition-colors duration-200`}
              >
                Experience
              </Link>
            </li>
            <li>
              <Link
                href="/#contact"
                onClick={closeMenu}
                className={`${styles.navLink} nav-link hover:text-white transition-colors duration-200`}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
