import Modal from "../UI/Modal";
import styles from "./Cart.module.css";

const Cart = (props) => {
  const cartItems = (
    <ul className={styles['cart-items']}>
      {[{ id: "c1", name: "sushi", amount: 2, price: 12.99 }].map((item) => {
        return <li>{item.name}</li>;
      })}
    </ul>
  );

  return (
    <Modal>
      {cartItems}
          <div className={styles.total}>
              <span>Total Amount</span>
              <span>39.62</span>
      </div>
          <div className={styles.actions}>
              <button className={styles['button--alt']}>Close</button>
              <button className={styles.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
