import { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import styles from "./AddUser.module.css";

const AddUser = (props) => {
    const [enteredUser, setEnteredUser] = useState('')
    const [enteredAge, setEnteredAge] = useState('')
    const [isvalid, setIsValid] = useState(true)

    const usernameHandler = (e) => {
        setEnteredUser(e.target.value)
    }

    const ageHandler = (e) => {
      setEnteredAge(e.target.value);
    };

    const addUserHandler = (e) => {
        e.preventDefault()
        if (enteredUser.trim() === '' || enteredAge.trim() === '') {
            setIsValid(false)
            return;
        }
        if (enteredAge < 1) {
            setIsValid(false)
            return;
        }
        props.onAddUser(enteredUser, enteredAge)

        setEnteredUser('')
        setEnteredAge('')
    }

    const closeModal = () => {
        setIsValid(true)
    }

    return (
      <div>
        {!isvalid ? (
          <ErrorModal
            title={"An Error Occured"}
            message={"Something went wrong"}
            onConfirm={closeModal}
          />
        ) : (
          <Card className={styles.input}>
            <form onSubmit={addUserHandler}>
              <label htmlFor="username">Usernamne</label>
              <input
                id="username"
                type="text"
                value={enteredUser}
                onChange={usernameHandler}
              />
              <label htmlFor="age">Age</label>
              <input
                id="age"
                type="number"
                value={enteredAge}
                onChange={ageHandler}
              />
              <Button type="submit">Add User</Button>
            </form>
          </Card>
        )}
      </div>
    );
};

export default AddUser;
