import React, { useState } from "react";
import Card from "./Card";
import styles from "./User.module.css";
import Button from "./Button";

function User(props) {
  const [nameInput, setNameInput] = useState("");
  const [ageInput, setAgeInput] = useState("");

  const addUserHandler = (event) => {
    event.preventDefault();
    if (nameInput.trim().length === 0 || ageInput.trim().length === 0) {
      return;
    }
    if (+ageInput < 1) {
      return;
    }
    console.log(nameInput, ageInput);

    setNameInput("");
    setAgeInput("");
  };

  const nameHandler = (event) => {
    setNameInput(event.target.value);
  };
  const ageHandler = (event) => {
    setAgeInput(event.target.value);
  };

  return (
    <Card className={styles.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input id="username" type="text" onChange={nameHandler}
        value={nameInput} />

        <label htmlFor="age">User Age</label>
        <input id="age" type="number" onChange={ageHandler} value={ageInput} />

        <Button type="submit">Add-User</Button>
      </form>
    </Card>
  );
}

export default User;
