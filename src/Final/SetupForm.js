import React, { Fragment, useEffect } from "react";
import { useGlobalContext } from "./context";
import { useLocation } from "react-router-dom";

const SetupForm = () => {
  const { quiz, handleChange, handleSubmit, error, setInitialQuiz } =
    useGlobalContext();
  const path = useLocation().pathname;

  const pathOptions = () => {
    if (path === "/kyoko") {
      return <option value="animal">Animal</option>;
    } else if (path === "/kaori") {
      return <option value="entertainment">Entertainment</option>;
    } else if (path === "/yoshino") {
      return (
        <>
          <option value="books">Books</option>
          <option value="mythology">Mythology</option>
        </>
      );
    } else if (path === "/guilherm") {
      return (
        <>
          <option value="sports">Sports</option>
          <option value="computers">Computers</option>
        </>
      );
    } else {
      return (
        <>
          <option value="books">Books</option>
          <option value="geography">Geography</option>
          <option value="mythology">Mythology</option>
          <option value="sports">Sports</option>
          <option value="computers">Computers</option>
          <option value="entertainment">Entertainment</option>
          <option value="animal">Animal</option>
        </>
      );
    }
  };

  useEffect(() => {
    if (path === "/kyoko") {
      setInitialQuiz("animal");
    } else if (path === "/kaori") {
      setInitialQuiz("entertainment");
    } else if (path === "/yoshino") {
      setInitialQuiz("books");
    } else if (path === "/guilherm") {
      setInitialQuiz("sports");
    } else {
      setInitialQuiz("books");
    }
  });

  return (
    <main>
      <section className="quiz quiz-small">
        <form className="setup-form">
          <h2>Quiz</h2>
          {/* amount */}
          <div className="form-control">
            <label htmlFor="amount">Number of questions</label>
            <input
              type="number"
              name="amount"
              id="amount"
              value={quiz.amount}
              onChange={handleChange}
              className="form-input"
              min={1}
              max={10}
            />
          </div>
          {/* category */}

          <div className="form-control">
            <label htmlFor="category">Category</label>
            <select
              name="category"
              id="category"
              className="form-input"
              value={quiz.category}
              onChange={handleChange}
            >
              {/* <option value="books">Books</option>
              <option value="geography">Geography</option>
              <option value="mythology">Mythology</option>
              <option value="sports">Sports</option>
              <option value="computers">Computers</option>
              <option value="entertainment">Entertainment</option>
              <option value="animal">Animal</option> */}
              {pathOptions()}
            </select>
          </div>
          {/* difficulty */}

          <div className="form-control">
            <label htmlFor="difficulty">Select Difficulty</label>
            <select
              name="difficulty"
              id="difficulty"
              className="form-input"
              value={quiz.difficulty}
              onChange={handleChange}
            >
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </select>
          </div>
          {error && (
            <p className="error">
              Sorry, We couldn't generate your request! Try it again.
            </p>
          )}
          <button type="submit" onClick={handleSubmit} className="submit-btn">
            start
          </button>
        </form>
      </section>
    </main>
  );
};

export default SetupForm;
