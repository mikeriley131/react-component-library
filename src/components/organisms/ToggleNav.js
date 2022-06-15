import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

import "./ToggleNav.css";

export const ToggleNav = () => {
  const [navIsOpen, setNavIsOpen] = useState(false);

  const menuRef = useRef();
  const menuNavIconRef = useRef();

  useEffect(() => {
    if (navIsOpen) {
      // fix body so it doesn't scroll when menu is open
      document.body.style.position = "fixed";
      document.body.style.top = `-${window.scrollY}px`;

      // trap focus in menu while it is open
      menuNavIconRef.current.focus();
      const focusableEls = menuRef.current.querySelectorAll(
        "a[href]:not([disabled]), button:not([disabled])"
      );
      const firstFocusableEl = focusableEls[0];
      const lastFocusableEl = focusableEls[focusableEls.length - 1];
      const KEYCODE_TAB = 9;

      menuRef.current.addEventListener("keydown", (e) => {
        const isTabPressed = e.key === "Tab" || e.keyCode === KEYCODE_TAB;

        if (!isTabPressed) {
          return;
        }

        if (e.shiftKey) {
          /* shift + tab */ if (document.activeElement === firstFocusableEl) {
            lastFocusableEl.focus();
            e.preventDefault();
          }
        } /* tab */ else {
          if (document.activeElement === lastFocusableEl) {
            firstFocusableEl.focus();
            e.preventDefault();
          }
        }
      });
    } else {
      const scrollY = document.body.style.top;
      document.body.style.position = "";
      document.body.style.top = "";
      window.scrollTo(0, parseInt(scrollY || "0") * -1);
    }
  }, [navIsOpen]);

  const toggleNav = () => setNavIsOpen(!navIsOpen);

  return (
    <nav class="nav" role="navigation" ref={menuRef}>
      <button
        type="button"
        className="nav__toggle"
        aria-label="toggle navigation"
        onClick={toggleNav}
        ref={menuNavIconRef}
        tabIndex={navIsOpen ? 0 : -1}
      >
        close
      </button>
      <ul class="nav__list">
        <li className="nav__item">
          <Link className="nav__link">Link 1</Link>
        </li>
        <li className="nav__item">
          <Link className="nav__link">Link 2</Link>
        </li>
        <li className="nav__item">
          <Link className="nav__link">Link 3</Link>
        </li>
        <li className="nav__item">
          <Link className="nav__link">Link 4</Link>
        </li>
      </ul>
    </nav>
  );
};
