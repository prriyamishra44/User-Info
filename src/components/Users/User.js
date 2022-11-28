import React, { useState } from "react";
import Card from "../UI/Card";
import classes from "./User.module.css";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "../Helper/Wrapper";
function User(props) {
  const [nameInput, setNameInput] = useState("");
  const [ageInput, setAgeInput] = useState("");
  const [error, setError] = useState("");

  const addUserHandler = (event) => {
    event.preventDefault();
    if (nameInput.trim().length === 0 || ageInput.trim().length === 0) {
      setError({
        title: "Invalid Input",
        message: "Please enter a valid name & age(nom-empty)",
      });
      return;
    }
    if (+ageInput < 1) {
      setError({
        title: "Invalid age",
        message: "please enter valid age(>0)",
      });
      return;
    }
    props.onAddUser(nameInput, ageInput);

    setNameInput("");
    setAgeInput("");
  };

  const nameHandler = (event) => {
    setNameInput(event.target.value);
  };
  const ageHandler = (event) => {
    setAgeInput(event.target.value);
  };
  const errorHandler = () => {
    setError(null);
  };

  return (
    <Wrapper>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            value={nameInput}
            onChange={nameHandler}
          />

          <label htmlFor="age">User Age</label>
          <input
            id="age"
            type="number"
            value={ageInput}
            onChange={ageHandler}
          />

          <Button type="submit">Add-User</Button>
        </form>
      </Card>
    </Wrapper>
  );
}

export default User;
