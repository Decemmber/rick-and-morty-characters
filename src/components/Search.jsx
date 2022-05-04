import React from 'react';

const Search = () => {
  return (
    <div className="search">
      <div className="search__container">
        <div className="search__bar">
          <div className="search__input">
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M17.8901 16.8296L12.6613 11.6007C13.653 10.3764 14.25 8.81977 14.25 7.12503C14.25 3.19631 11.0537 0 7.12499 0C3.19627 0 0 3.19631 0 7.12503C0 11.0537 3.19631 14.2501 7.12503 14.2501C8.81977 14.2501 10.3764 13.653 11.6007 12.6613L16.8296 17.8902C16.9761 18.0366 17.2135 18.0366 17.36 17.8902L17.8902 17.3599C18.0366 17.2135 18.0366 16.976 17.8901 16.8296ZM7.12503 12.75C4.02322 12.75 1.50001 10.2268 1.50001 7.12503C1.50001 4.02322 4.02322 1.50001 7.12503 1.50001C10.2268 1.50001 12.75 4.02322 12.75 7.12503C12.75 10.2268 10.2268 12.75 7.12503 12.75Z"
                fill="#6C6C6C"
              />
            </svg>
            <input placeholder="Search character" type="text" />
          </div>
          {/* <div className="search__suggestions">
                <ul className="dropdown-list">
                    <li className="dropdown-list__item">da</li>
                    <li className="dropdown-list__item">net</li>
                </ul>
            </div>  */}
        </div>

        <div className="search__filter-episode">
          <div className="search__filter-label">
            <span>All episodes</span>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M6.23944 10.4323L11.4607 15.7743C11.7545 16.0752 12.2448 16.0752 12.5397 15.7743L17.7598 10.4323C18.0801 10.1047 18.0801 9.58754 17.7598 9.25993C17.4208 8.91336 16.8563 8.91336 16.5168 9.25993L12.1441 13.734C12.0651 13.8151 11.9342 13.8151 11.8552 13.734L7.48249 9.25993C7.14353 8.91336 6.579 8.91336 6.23944 9.25993C6.08022 9.42403 6 9.63494 6 9.84584C6 10.0573 6.08022 10.2682 6.23944 10.4323Z"
                fill="#DEDEDE"
              />
            </svg>
          </div>
          {/* <div className="search__filter-popup">
          <ul className="dropdown-list">
            <li className="dropdown-list__item">Episode 1</li>
            <li className="dropdown-list__item">Episode 2</li>
            <li className="dropdown-list__item">Episode 3</li>
            <li className="dropdown-list__item">Episode 4</li>
            <li className="dropdown-list__item">Episode 4</li>
            <li className="dropdown-list__item">Episode 4</li>
            <li className="dropdown-list__item">Episode 4</li>
          </ul>
        </div>  */}
        </div>
      </div>
      <span className="search__result-count">Found 316 characters</span>
    </div>
  );
};

export default Search;
