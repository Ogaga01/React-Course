import styles from "./AddUser.module.css";
import { useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  const addUserHandler = (e) => {
      e.preventDefault();
      if (enteredUsername.trim() === '' || enteredAge === '') {
          return;
      }
      if (+enteredAge < 1) {
          return;
      }
    props.onAddUser(enteredUsername, enteredAge);
        
    setEnteredUsername("");
    setEnteredAge("");
  };

  const usernameChangeHandler = (e) => {
    setEnteredUsername(e.target.value);
  };

  const ageChangeHandler = (e) => {
    setEnteredAge(e.target.value);
  };

    return (
      <div>
        <ErrorModal title="An Error Occured" message="Something went wrong!" />
        <Card className={styles.input}>
          <form onSubmit={addUserHandler}>
            <label htmlFor="username">Username</label>
            <input
              id="username"
              type="text"
              value={enteredUsername}
              onChange={usernameChangeHandler}
            />
            <label htmlFor="age">Age (Years)</label>
            <input
              id="age"
              type="number"
              value={enteredAge}
              onChange={ageChangeHandler}
            />
            <Button type="submit">Add User</Button>
          </form>
        </Card>
      </div>
    );
};
export default AddUser;
