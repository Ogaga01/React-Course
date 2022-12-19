import { useDispatch, useSelector } from 'react-redux';
import { interfaceActions } from '../../store/ui-slice';
import classes from './CartButton.module.css';

const CartButton = (props) => {
  const cartItems = useSelector((state)=>{return state.cartSlice.totalQuantity})

  const dispatch = useDispatch()

  const showCartHandler = () => {
    dispatch(interfaceActions.toggleCart())
  }

  return (
    <button onClick={showCartHandler} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartItems}</span>
    </button>
  );
};

export default CartButton;
