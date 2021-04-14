import axios from "axios";

export const get = (query) =>
  axios.get(
    `https://www.googleapis.com/books/v1/volumes?q=${query}&key=AIzaSyDwWO-0zgA694AOEr9YBYE1BFuA3tkjYN0`
  );

export const saveBook = (book) => axios.post("/api/books", book);
