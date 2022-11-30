import { useState } from "react";
import AddUser from "./Components/Users/AddUser"
import UsersList from "./Components/Users/UsersList"

const App = (props) => {
  const [userList, setUserList] = useState([])

  const addUserHandler = (uName, uAge) => {
    setUserList((prevUserList) => {
      return [...prevUserList, {name: uName, age: uAge, id: (Date.now() + '').slice(-10)}]
    })
  }

  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={userList} />
    </div>
  );
}
export default App
