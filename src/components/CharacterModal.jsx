import React from 'react';
import characterImage from '../assets/img/Rick.jpeg';

const CharacterModal = () => {
  return (
    <div className="modal">
      <div className="modal__container">
        <div className="character character--horizontal">
          <div className="character__illustration-info">
            <img src={characterImage} alt="" className="character__image" />
            <div className="character__badges">
              <span className="character__status character__status--alive">Alive</span>
              <button className="character__add-favorites">
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
          <div className="character__info">
            <button className="modal__close">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M17.4343 18.5657C17.7467 18.8781 18.2532 18.8781 18.5657 18.5657C18.8781 18.2532 18.8781 17.7467 18.5657 17.4343L17.4343 18.5657ZM6.56569 5.43431C6.25327 5.1219 5.74673 5.1219 5.43431 5.43431C5.1219 5.74673 5.1219 6.25327 5.43431 6.56569L6.56569 5.43431ZM18.5657 17.4343L6.56569 5.43431L5.43431 6.56569L17.4343 18.5657L18.5657 17.4343Z"
                  fill="#6C6C6C"
                />
                <path
                  d="M18.5657 6.56569C18.8781 6.25327 18.8781 5.74673 18.5657 5.43431C18.2533 5.1219 17.7468 5.1219 17.4343 5.43431L18.5657 6.56569ZM5.43431 17.4343C5.1219 17.7468 5.1219 18.2533 5.43431 18.5657C5.74673 18.8781 6.25327 18.8781 6.56569 18.5657L5.43431 17.4343ZM17.4343 5.43431L5.43431 17.4343L6.56569 18.5657L18.5657 6.56569L17.4343 5.43431Z"
                  fill="#6C6C6C"
                />
              </svg>
            </button>
            <h4 className="character__name">Rick Sanchez</h4>
            <ul className="character__list">
              <li className="character__item">
                <span className="character__subtitle">Species:</span>
                <span className="character__body">Alien</span>
              </li>
              <li className="character__item">
                <span className="character__subtitle">First seen in:</span>
                <span className="character__body">Get Schwifty</span>
              </li>
              <li className="character__item">
                <span className="character__subtitle">Location:</span>
                <span className="character__body">Earth (Replacement Dimension)</span>
              </li>
              <li className="character__item">
                <span className="character__subtitle">Gender:</span>
                <span className="character__body">Male</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharacterModal;
