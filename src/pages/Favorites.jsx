import React from 'react';

const Favorites = () => {
  return (
    <div class="favorites">
      <div class="container">
        <div class="favorites__top">
          <h1 class="favorites__title">Favorites</h1>
          <div class="favorites__clear">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M14 10L14 17"
                stroke="#16ACC9"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M10 10L10 17"
                stroke="#16ACC9"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M18 6H6V20C6 20.5523 6.44772 21 7 21H17C17.5523 21 18 20.5523 18 20V6Z"
                stroke="#16ACC9"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M4 6H20"
                stroke="#16ACC9"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M15 3H9C8.44772 3 8 3.44772 8 4V6H16V4C16 3.44772 15.5523 3 15 3Z"
                stroke="#16ACC9"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <span>Clear list</span>
          </div>
        </div>
        <div class="favorites__content">
          <div class="character character--horizontal-favorites ">
            <div class="character__illustration-info">
              <img src="img/Rick.jpeg" alt="" class="character__image" />
              <div class="character__badges">
                <span class="character__status character__status--alive">Alive</span>
                <button class="character__add-favorites">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M12 21.9911C11.2905 21.3559 10.4886 20.6951 9.64051 19.9921H9.62951C6.64301 17.5267 3.25832 14.737 1.76342 11.3943C1.27229 10.3301 1.01202 9.1722 1.00001 7.99821C0.996733 6.38734 1.63667 4.84313 2.77521 3.71457C3.91375 2.58601 5.45478 1.96837 7.05001 2.00125C8.3487 2.00332 9.61942 2.38226 10.7108 3.09292C11.1904 3.40717 11.6243 3.78729 12 4.22235C12.3778 3.789 12.8118 3.4091 13.2903 3.09292C14.3812 2.38212 15.6516 2.00316 16.95 2.00125C18.5452 1.96837 20.0863 2.58601 21.2248 3.71457C22.3633 4.84313 23.0033 6.38734 23 7.99821C22.9888 9.17408 22.7285 10.3339 22.2366 11.3998C20.7417 14.7426 17.3581 17.5312 14.3716 19.9921L14.3606 20.001C13.5114 20.6995 12.7106 21.3603 12.0011 22L12 21.9911ZM7.05001 4.22235C6.02538 4.2094 5.0371 4.60531 4.30002 5.32401C3.58984 6.02828 3.19293 6.99321 3.19993 7.99821C3.21248 8.85389 3.40443 9.69718 3.76322 10.4725C4.46888 11.9148 5.42104 13.2201 6.57591 14.3283C7.66601 15.4389 8.92001 16.5139 10.0046 17.4179C10.3049 17.6678 10.6107 17.9198 10.9165 18.1719L11.109 18.3308C11.4027 18.5729 11.7063 18.8238 12 19.0704L12.0143 19.057L12.0209 19.0515H12.0275L12.0374 19.0437H12.0429H12.0484L12.0682 19.0271L12.1133 18.9904L12.121 18.9838L12.1331 18.9749H12.1397L12.1496 18.966L12.88 18.3607L13.0714 18.2019C13.3805 17.9476 13.6863 17.6955 13.9866 17.4456C15.0712 16.5417 16.3263 15.4678 17.4164 14.3517C18.5714 13.2439 19.5236 11.939 20.2291 10.4969C20.5944 9.7149 20.7891 8.86278 20.8 7.99821C20.8046 6.99632 20.4079 6.03508 19.7 5.33289C18.9643 4.61095 17.9759 4.21178 16.95 4.22235C15.6981 4.2116 14.5013 4.74138 13.661 5.67827L12 7.61063L10.339 5.67827C9.49868 4.74138 8.30189 4.2116 7.05001 4.22235Z"
                      fill="#242424"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div class="character__info">
              <h4 class="character__name">Rick Sanchez</h4>
              <ul class="character__list">
                <li class="character__item">
                  <span class="character__subtitle">Species:</span>
                  <span class="character__body">Alien</span>
                </li>
                <li class="character__item">
                  <span class="character__subtitle">First seen in:</span>
                  <span class="character__body">Get Schwifty</span>
                </li>
                <li class="character__item">
                  <span class="character__subtitle">Location:</span>
                  <span class="character__body">Earth (Replacement Dimension)</span>
                </li>
                <li class="character__item">
                  <span class="character__subtitle">Gender:</span>
                  <span class="character__body">Male</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Favorites;
