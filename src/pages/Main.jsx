import React from 'react';
import { Header, Search } from '../components';
import CharacterItem from '../components/CharacterItem';

const Main = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="main">
          <Search />
          <div className="status">
            <ul className="status__list">
              <li className="status__item active">Alive</li>
              <li className="status__item">Dead</li>
              <li className="status__item">Unknown</li>
              <li className="status__item status__item--filters-mobile">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M14 15L21 15"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M3 15H5"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M7.5 17.5C8.88071 17.5 10 16.3807 10 15C10 13.6193 8.88071 12.5 7.5 12.5C6.11929 12.5 5 13.6193 5 15C5 16.3807 6.11929 17.5 7.5 17.5Z"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M20 9H21"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M3 9H10"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M16.5 11.5C17.8807 11.5 19 10.3807 19 9C19 7.61929 17.8807 6.5 16.5 6.5C15.1193 6.5 14 7.61929 14 9C14 10.3807 15.1193 11.5 16.5 11.5Z"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>Filters</span>
              </li>
            </ul>
          </div>
          <div className="characters">
            <CharacterItem />
            <CharacterItem />
            <CharacterItem />
            <CharacterItem />
            <CharacterItem />
            <CharacterItem />
            <CharacterItem />
            <CharacterItem />
            <CharacterItem />
            <CharacterItem />
            <CharacterItem />
          </div>

          <div className="pager">
            <a href="#" className="pager__item pager__item--arrow">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M14.2929 19.7071C14.6834 20.0976 15.3166 20.0976 15.7071 19.7071C16.0976 19.3166 16.0976 18.6834 15.7071 18.2929L14.2929 19.7071ZM8 12L7.29289 11.2929C6.90237 11.6834 6.90237 12.3166 7.29289 12.7071L8 12ZM15.7071 5.70711C16.0976 5.31658 16.0976 4.68342 15.7071 4.29289C15.3166 3.90237 14.6834 3.90237 14.2929 4.29289L15.7071 5.70711ZM15.7071 18.2929L8.70711 11.2929L7.29289 12.7071L14.2929 19.7071L15.7071 18.2929ZM8.70711 12.7071L15.7071 5.70711L14.2929 4.29289L7.29289 11.2929L8.70711 12.7071Z"
                  fill="#242424"
                />
              </svg>
            </a>
            <a href="#" className="pager__item pager__item--active">
              <span>1</span>
            </a>
            <a href="#" className="pager__item">
              <span>2</span>
            </a>
            <a href="#" className="pager__item">
              <span>3</span>
            </a>
            <a href="#" className="pager__item">
              <span>4</span>
            </a>
            <a href="#" className="pager__item pager__item--arrow">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M9.70711 4.29289C9.31658 3.90237 8.68342 3.90237 8.29289 4.29289C7.90237 4.68342 7.90237 5.31658 8.29289 5.70711L9.70711 4.29289ZM16 12L16.7071 12.7071C17.0976 12.3166 17.0976 11.6834 16.7071 11.2929L16 12ZM8.29289 18.2929C7.90237 18.6834 7.90237 19.3166 8.29289 19.7071C8.68342 20.0976 9.31658 20.0976 9.70711 19.7071L8.29289 18.2929ZM8.29289 5.70711L15.2929 12.7071L16.7071 11.2929L9.70711 4.29289L8.29289 5.70711ZM15.2929 11.2929L8.29289 18.2929L9.70711 19.7071L16.7071 12.7071L15.2929 11.2929Z"
                  fill="#14181F"
                />
              </svg>
            </a>
          </div>
        </div>

        <aside className="sidebar">
          <form>
            <div className="widget">
              <div className="widget__title">Species</div>
              <div className="widget__body">
                <label className="checkbox">
                  <input type="checkbox" className="checkbox__real" name="value-01" checked />
                  <span className="checkbox__fake"></span>
                  <span className="checkbox__title">Human</span>
                </label>
                <label className="checkbox">
                  <input type="checkbox" className="checkbox__real" name="value-02" />
                  <span className="checkbox__fake"></span>
                  <span className="checkbox__title">Alien</span>
                </label>
                <label className="checkbox">
                  <input type="checkbox" className="checkbox__real" name="value-03" />
                  <span className="checkbox__fake"></span>
                  <span className="checkbox__title">Humanoid</span>
                </label>
                <label className="checkbox">
                  <input type="checkbox" className="checkbox__real" name="value-04" />
                  <span className="checkbox__fake"></span>
                  <span className="checkbox__title">Unknown</span>
                </label>
                <label className="checkbox">
                  <input type="checkbox" className="checkbox__real" name="value-05" />
                  <span className="checkbox__fake"></span>
                  <span className="checkbox__title">Poopybutthole</span>
                </label>
                <label className="checkbox">
                  <input type="checkbox" className="checkbox__real" name="value-06" />
                  <span className="checkbox__fake"></span>
                  <span className="checkbox__title">Mythological Creature</span>
                </label>
                <label className="checkbox checkbox--hidden">
                  <input type="checkbox" className="checkbox__real" name="value-06" />
                  <span className="checkbox__fake"></span>
                  <span className="checkbox__title">Robot</span>
                </label>
                <label className="checkbox checkbox--hidden">
                  <input type="checkbox" className="checkbox__real" name="value-06" />
                  <span className="checkbox__fake"></span>
                  <span className="checkbox__title">Animal</span>
                </label>
                <label className="checkbox checkbox--hidden">
                  <input type="checkbox" className="checkbox__real" name="value-06" />
                  <span className="checkbox__fake"></span>
                  <span className="checkbox__title">Cronenberg</span>
                </label>
                <label className="checkbox checkbox--hidden">
                  <input type="checkbox" className="checkbox__real" name="value-06" />
                  <span className="checkbox__fake"></span>
                  <span className="checkbox__title">Disease</span>
                </label>
                <label className="checkbox checkbox--hidden">
                  <input type="checkbox" className="checkbox__real" name="value-06" />
                  <span className="checkbox__fake"></span>
                  <span className="checkbox__title">Planet</span>
                </label>
                <button className="widget__show-hidden">Show more</button>
              </div>
            </div>
            <div className="widget">
              <div className="widget__title">Location</div>
              <div className="widget__body">
                <label className="checkbox">
                  <input type="checkbox" className="checkbox__real" name="value-01" checked />
                  <span className="checkbox__fake"></span>
                  <span className="checkbox__title">Earth</span>
                </label>
                <label className="checkbox">
                  <input type="checkbox" className="checkbox__real" name="value-02" />
                  <span className="checkbox__fake"></span>
                  <span className="checkbox__title">Abadango</span>
                </label>
                <label className="checkbox">
                  <input type="checkbox" className="checkbox__real" name="value-03" />
                  <span className="checkbox__fake"></span>
                  <span className="checkbox__title">Citadel of Ricks</span>
                </label>
                <label className="checkbox">
                  <input type="checkbox" className="checkbox__real" name="value-04" />
                  <span className="checkbox__fake"></span>
                  <span className="checkbox__title">Worldender's lair</span>
                </label>
                <label className="checkbox">
                  <input type="checkbox" className="checkbox__real" name="value-05" />
                  <span className="checkbox__fake"></span>
                  <span className="checkbox__title">Anatomy Park</span>
                </label>
                <label className="checkbox">
                  <input type="checkbox" className="checkbox__real" name="value-06" />
                  <span className="checkbox__fake"></span>
                  <span className="checkbox__title">Interdimensional Cable</span>
                </label>
                <label className="checkbox checkbox--hidden">
                  <input type="checkbox" className="checkbox__real" name="value-07" />
                  <span className="checkbox__fake"></span>
                  <span className="checkbox__title">Immortality Field Resort</span>
                </label>
                <label className="checkbox checkbox--hidden">
                  <input type="checkbox" className="checkbox__real" name="value-08" />
                  <span className="checkbox__fake"></span>
                  <span className="checkbox__title">Post-Apocalyptic Earth</span>
                </label>
                <label className="checkbox checkbox--hidden">
                  <input type="checkbox" className="checkbox__real" name="value-09" />
                  <span className="checkbox__fake"></span>
                  <span className="checkbox__title">Purge Planet</span>
                </label>
                <label className="checkbox checkbox--hidden">
                  <input type="checkbox" className="checkbox__real" name="value-10" />
                  <span className="checkbox__fake"></span>
                  <span className="checkbox__title">Venzenulon 7</span>
                </label>
                <label className="checkbox checkbox--hidden">
                  <input type="checkbox" className="checkbox__real" name="value-11" />
                  <span className="checkbox__fake"></span>
                  <span className="checkbox__title">Bepis 9</span>
                </label>
                <label className="checkbox checkbox--hidden">
                  <input type="checkbox" className="checkbox__real" name="value-12" />
                  <span className="checkbox__fake"></span>
                  <span className="checkbox__title">Bepis 9</span>
                </label>
                <label className="checkbox checkbox--hidden">
                  <input type="checkbox" className="checkbox__real" name="value-13" />
                  <span className="checkbox__fake"></span>
                  <span className="checkbox__title">Cronenberg Earth</span>
                </label>
                <label className="checkbox checkbox--hidden">
                  <input type="checkbox" className="checkbox__real" name="value-14" />
                  <span className="checkbox__fake"></span>
                  <span className="checkbox__title">Nuptia 4</span>
                </label>
                <label className="checkbox checkbox--hidden">
                  <input type="checkbox" className="checkbox__real" name="value-15" />
                  <span className="checkbox__fake"></span>
                  <span className="checkbox__title">Giant's Town</span>
                </label>
                <label className="checkbox checkbox--hidden">
                  <input type="checkbox" className="checkbox__real" name="value-16" />
                  <span className="checkbox__fake"></span>
                  <span className="checkbox__title">Bird World</span>
                </label>
                <label className="checkbox checkbox--hidden">
                  <input type="checkbox" className="checkbox__real" name="value-17" />
                  <span className="checkbox__fake"></span>
                  <span className="checkbox__title">St. Gloopy Noops Hospital</span>
                </label>
                <label className="checkbox checkbox--hidden">
                  <input type="checkbox" className="checkbox__real" name="value-18" />
                  <span className="checkbox__fake"></span>
                  <span className="checkbox__title">Earth (5-126)</span>
                </label>
                <label className="checkbox checkbox--hidden">
                  <input type="checkbox" className="checkbox__real" name="value-19" />
                  <span className="checkbox__fake"></span>
                  <span className="checkbox__title">Gromflom Prime</span>
                </label>
                <label className="checkbox checkbox--hidden">
                  <input type="checkbox" className="checkbox__real" name="value-20" />
                  <span className="checkbox__fake"></span>
                  <span className="checkbox__title">Earth (Replacement Dimension)</span>
                </label>
                <button className="widget__show-hidden">Show more</button>
              </div>
            </div>
            <div className="widget">
              <div className="widget__body">
                <button type="reset" className="button button--outline">
                  <span>Reset filters</span>
                </button>
              </div>
            </div>
          </form>
        </aside>
      </div>
    </div>
  );
};

export default Main;
