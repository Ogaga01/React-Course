import mealImage from '../../Assets/meals.jpg'
import styles from './Header.module.css'
import HeaderCartButton from './HeaderCartButton'

const Header = (props) => {
    return (
        <>
            <header className={styles.header}>
                <h1>ReactMaeals</h1>
                <HeaderCartButton/>
            </header>
            <div className={styles['main-image']}>
                <img src={mealImage} alt='A table full of delicious food' />
            </div>
        </>
    )
}

export default Header