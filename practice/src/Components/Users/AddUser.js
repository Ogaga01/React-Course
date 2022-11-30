import { useRef, useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import styles from "./AddUser.module.css";

const AddUser = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const [isvalid, setIsValid] = useState(true);

  const addUserHandler = (e) => {
    e.preventDefault();

    const enteredUser = nameInputRef.current.value;
    const enteredAge = ageInputRef.current.value;

    if (enteredUser.trim() === "" || enteredAge.trim() === "") {
      setIsValid(false);
      return;
    }
    if (enteredAge < 1) {
      setIsValid(false);
      return;
    }
    props.onAddUser(enteredUser, enteredAge);

    nameInputRef.current.value = "";
    ageInputRef.current.value = "";
  };

  const closeModal = () => {
    setIsValid(true);
  };

  return (
    <>
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
            <input id="username" type="text" ref={nameInputRef} />
            <label htmlFor="age">Age</label>
            <input id="age" type="number" ref={ageInputRef} />
            <Button type="submit">Add User</Button>
          </form>
        </Card>
      )}
    </>
  );
};

export default AddUser;
