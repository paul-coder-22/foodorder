import { Fragment } from 'react';
import asset from "../../asset/meals.jpg";
import classes from "./Header.module.css";
import HeaderCartButton from './HeaderCartButton';
const Header = (props) => {
    return (
        <Fragment>
            <header className={classes.header}>
                <h1>React Meals</h1>
                <HeaderCartButton onClick={props.isOpen} />
            </header>
            <div className={classes['main-image']}>
                <img src={asset} alt="" />
            </div>
        </Fragment>
    );
};

export default Header;