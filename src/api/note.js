import axios from "axios";

const noteApi = {
  add: (data) => axios.post(`${process.env.REACT_APP_API_BASE}/notes`, data),
  fetch: () => axios.get(`${process.env.REACT_APP_API_BASE}/notes`),
  fetchPaging: (page, size) =>
    axios.get(
      `${process.env.REACT_APP_API_BASE}/notes/paging?page=${page}&size=${size}`
    ),
  remove: (id) => axios.delete(`${process.env.REACT_APP_API_BASE}/notes/${id}`),
  modify: (data) =>
    axios.put(`${process.env.REACT_APP_API_BASE}/notes/${data.id}`, data),
};

export default noteApi;
