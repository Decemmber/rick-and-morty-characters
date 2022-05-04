import React from 'react';

const RandomSeriesModal = () => {
  return (
    <div className="modal">
      <div className="random-modal">
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
        <div className="random-modal__episode">
          <h4 className="random-modal__title">Get Schwifty</h4>
          <span className="random-modal__subtitle">S02EP08</span>
        </div>
        <button className="button button--full-width">Another one</button>
      </div>
    </div>
  );
};

export default RandomSeriesModal;
