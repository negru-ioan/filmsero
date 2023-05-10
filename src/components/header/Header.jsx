import React, { useRef, useEffect } from 'react';

import { Link, useLocation } from 'react-router-dom';

import './header.scss';

import logo from '../../assets/tmovie.png';

const headerNav = [
  {
    display: "Home",
    path: "/filmsero/",
  },
  {
    display: "Movies",
    path: "/filmsero/movie",
  },
  {
    display: "TV Series",
    path: "/filmsero/tv",
  },
];

const Header = () => {

    const { pathname } = useLocation();
    const headerRef = useRef(null);

    const active = headerNav.findIndex(e => e.path === pathname);

    useEffect(() => {
        const shrinkHeader = () => {
            if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
                headerRef.current.classList.add('shrink');
                if(window.innerWidth < 700){
                    headerRef.current.classList.add("hide");
                }
            } else {
                headerRef.current.classList.remove('shrink');
                if (window.innerWidth < 700) {
                  headerRef.current.classList.remove("hide");
                }
            }
        }
        window.addEventListener('scroll', shrinkHeader);
        return () => {
            window.removeEventListener('scroll', shrinkHeader);
        };
    }, []);

    return (
      <div ref={headerRef} className="header">
        <div className="header__wrap container">
          <div className="logo">
            <img src={logo} alt="" />
            <Link to="/filmsero">Filmsero</Link>
          </div>
          <ul className="header__nav">
            {headerNav.map((e, i) => (
              <li key={i} className={`${i === active ? "active" : ""}`}>
                <Link to={e.path}>{e.display}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
}

export default Header;
