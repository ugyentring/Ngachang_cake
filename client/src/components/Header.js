import React from "react";
import "../css/Header.css";
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import { useSelector, useDispatch } from "react-redux";

function Header(props) {
    const isMenuOpened = props.isMenuOpened;
    const setMenuOpened = props.setMenuOpened;
    const dispatch = useDispatch();
    const { auth } = useSelector((state) => ({ ...state }));
    //logout function
    const logout = () => {
        dispatch({
            type: "LOGOUT",
            payload: null,
        });
        window.localStorage.removeItem("auth");
    };

    return (
        <header className={"header" + (isMenuOpened ? " mobile" : "")}>
            <div className={"header__container" + (isMenuOpened ? " mobile" : "")}>
                <div className={"logo" + (isMenuOpened ? " mobile" : "")}>
                    <a className="nav__link" href="/">
                        Ngachang <span className="logo__color-part">Cake</span>
                    </a>
                </div>
                <ul className={"nav" + (isMenuOpened ? " mobile" : "")}>
                    <li className="nav__item" onClick={() => { setMenuOpened(false) }}>
                        <HashLink className="nav__link" smooth to="/">Home</HashLink>
                    </li>
                    {/* <li className="nav__item" onClick={() => {setMenuOpened(false)}}>
                        <HashLink className="nav__link" smooth to="/#pastry">Cakes</HashLink>
                    </li> */}
                    {auth != null && (
                        <li className="nav__item" onClick={() => { setMenuOpened(false) }}>
                            <HashLink className="nav__link" smooth to="/Order">Order</HashLink>
                        </li>
                    )}
                    {auth != null && (
                        <li className="nav__item" onClick={() => { setMenuOpened(false) }}>
                            <Link className="nav__link" to="/about">About Us</Link>
                        </li>
                    )}
                    {auth != null && (
                        <li className="nav__item" onClick={() => { setMenuOpened(false) }}>
                            <Link className="nav__link" to="/contacts">Contacts</Link>
                        </li>
                    )}

                    {auth != null && (
                        <li className="nav__item" onClick={() => { setMenuOpened(false) }}>
                            <HashLink className="nav__link" smooth to="/login" onClick={logout}>LogOut</HashLink>
                        </li>
                    )}
                    {auth === null && (
                        <li className="nav__item" onClick={() => { setMenuOpened(false) }}>
                            <Link className="nav__link" to="/about">About Us</Link>
                        </li>
                    )}
                    {auth === null && (
                        <li className="nav__item" onClick={() => { setMenuOpened(false) }}>
                            <Link className="nav__link" to="/contacts">Contacts</Link>
                        </li>
                    )}
                    {auth === null && (
                        <li className="nav__item" onClick={() => { setMenuOpened(false) }}>
                            <HashLink className="nav__link" smooth to="/register">SignUp</HashLink>
                        </li>
                    )}
                    {auth === null && (
                        <li className="nav__item" onClick={() => { setMenuOpened(false) }}>
                            <HashLink className="nav__link" smooth to="/login">LogIn</HashLink>
                        </li>
                    )}
                </ul>
                {/* <div className={"cart" + (isMenuOpened ? " mobile" : "")} onClick={() => {setMenuOpened(false)}}>
                    <span className={"cart__count" + (areItemsInCart() ? "" : " hidden")}>{cartItemsCount + " "}</span>
                    <Link className="nav__link cart__icon" to="/cart" title="To the catalog">
                        <span className="material-symbols-outlined cart-icon">
                        shopping_cart
                        </span>
                    </Link>
                </div> */}
                <button type="button" className={"burger-menu-btn" + (isMenuOpened ? " hidden" : "")} onClick={() => { setMenuOpened(true) }}>
                    <span className="material-symbols-outlined">
                        menu
                    </span>
                </button>
                <button type="button" className={"close-menu-btn" + (isMenuOpened ? "" : " hidden")} onClick={() => { setMenuOpened(false) }}>
                    <span className="material-symbols-outlined">
                        close
                    </span>
                </button>
            </div>
        </header>
    );
}

export default Header;