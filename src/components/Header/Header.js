import React, {Component} from 'react';
import style from './Header.module.css'

class Header extends React.Component {
    render() {
        return (
            <header className={style.header}>
                <img src='https://banner2.kisspng.com/20180314/bjq/kisspng-arrow-carnation-chlorophytum-comosum-beautifully-arrow-5aa8b345bfdc83.5004936515210053817859.jpg'></img>
            </header>
        );
    }
}

export default Header;