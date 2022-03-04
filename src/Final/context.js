import axios from "axios";
import React, { useState, useContext, useEffect } from "react";
import * as dataQ from "./question.json";

const table = {
  books: 10,
  geography: 22,
  mythology: 20,
  sports: 21,
  computers: 18,
  entertainment: "manga",
  animal: "animal",
};

const API_ENDPOINT = "https://opentdb.com/api.php?";
const MANGA_API_ENDPOINT = "https://0228-final-project.can.canonic.dev/api/";

const tempUrl =
  "https://opentdb.com/api.php?amount=10&category=10&difficulty=easy&type=multiple";
const AppContext = React.createContext();

const AppProvider = (props) => {
  const [initialQuiz, setInitialQuiz] = useState("");
  const [waiting, setWaiting] = useState(true);
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [index, setIndex] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [error, setError] = useState(false);
  const [quiz, setQuiz] = useState({
    amount: 5,
    category: initialQuiz,
    difficulty: "easy",
  });
  const [isModalOpen, setIsModalOpen] = useState(false);

  const fetchQuestions = async (url) => {
    setLoading(true);
    setWaiting(false);
    let response,
      manga = "";
    if (url.indexOf("manga") != -1) {
      manga = url.split("&");
      response = await axios(manga[0]).catch((err) => console.log(err));
    } else if (url.indexOf("animal") != -1) {
      response = true;
    } else {
      manga = "";
      response = await axios(url).catch((err) => console.log(err));
    }
    if (response) {
      let data;
      if (manga != "") {
        data = response.data.data[0][manga[2]];
        data = data.slice(0, manga[1]);
      } else if (url.indexOf("animal") != -1) {
        data = dataQ.default.results;
      } else data = response.data.results;
      if (data.length > 0) {
        setQuestions(data);
        setLoading(false);
        setWaiting(false);
        setError(false);
      } else {
        setWaiting(true);
        setError(true);
      }
    } else {
      setWaiting(true);
    }
  };

  const nextQuestion = () => {
    setIndex((oldIndex) => {
      const index = oldIndex + 1;
      if (index > questions.length - 1) {
        openModal();
        return 0;
      } else {
        return index;
      }
    });
  };
  const checkAnswer = (value) => {
    if (value) {
      setCorrect((oldState) => oldState + 1);
    }
    nextQuestion();
  };

  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setWaiting(true);
    setCorrect(0);
    setIsModalOpen(false);
  };
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setQuiz({ ...quiz, [name]: value });
  };
  const categoryHandler = (e) => {
    const value = e.target.value;
    setInitialQuiz(value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const { amount, difficulty } = quiz;
    let url = `${API_ENDPOINT}amount=${amount}&difficulty=${difficulty}&category=${table[initialQuiz]}&type=multiple`;
    if (initialQuiz === "entertainment")
      url = `${MANGA_API_ENDPOINT}${table[initialQuiz]}&${amount}&${difficulty}`;
    else if (initialQuiz === "animal") url = `${table[initialQuiz]}`;
    fetchQuestions(url);
  };

  return (
    <AppContext.Provider
      value={{
        categoryHandler,
        setInitialQuiz,
        initialQuiz,
        waiting,
        loading,
        questions,
        index,
        correct,
        error,
        isModalOpen,
        nextQuestion,
        checkAnswer,
        closeModal,
        quiz,
        handleChange,
        handleSubmit,
        setQuiz,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
