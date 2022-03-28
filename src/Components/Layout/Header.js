import { Fragment } from 'react';
import asset from "../../asset/meals.jpg";
import classes from "./Header.module.css";
const Header = () => {
    return (
        <Fragment>
            <header className={classes.header}>
                <h1>React Meals</h1>
                <button className={`${classes.button}`}>Cart</button>
            </header>
            <div className={classes['main-image']}>
                <img src={asset} alt="" />
            </div>
        </Fragment>
    );
};

export default Header;