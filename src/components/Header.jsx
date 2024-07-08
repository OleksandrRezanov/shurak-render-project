import React from 'react';
import classNames from 'classnames';
import { navbarTitles } from '../variables/navbarTitles';
import '../styles/Header.scss';

export const Header = ({ currentNavItem, setCurrentNavItem }) => {
  return (
    <div className='header'>
      <p>
      +380672139200
      </p>

      <nav className='header__nav'>
        <ul className='header__nav-list'>
          <li
            className={classNames(
              'header__nav-list-item', {
              'header__nav-list-item--selected': currentNavItem === navbarTitles.works,
            }
            )}
            onClick={() => setCurrentNavItem(navbarTitles.works)}
          >
            Мої роботи
          </li>

          <li
            className={classNames(
              'header__nav-list-item', {
              'header__nav-list-item--selected': currentNavItem === navbarTitles.about,
            }
            )}
            onClick={() => setCurrentNavItem(navbarTitles.about)}
          >
            Про мене
          </li>
        </ul>
      </nav>

      <div>
        icons
      </div>
    </div>
  );
};
