import { useContext, useState, useEffect } from "react";

import CartIcon from "../Cart/CartIcon";
import CartContext from "../../store/cart-context";
import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  const [isButtonAnimate, setButtonIsAnimate] = useState(false);

  const cartCtx = useContext(CartContext);

  const { items } = cartCtx;

  const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  const btnClass = `${classes.button} ${isButtonAnimate && classes.bump}`;

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setButtonIsAnimate(true);

    const timer = setTimeout(() => {
      setButtonIsAnimate(false);
    }, 300);

    // clean up function
    // when we return in useEfeect it act as an clean up function
    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <button className={btnClass} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
