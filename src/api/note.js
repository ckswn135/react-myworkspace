import axios from "axios";

const noteApi = {
  add: (data) => axios.post(`${process.env.REACT_APP_API_BASE}/note`, data),
  fetch: () => axios.get(`${process.env.REACT_APP_API_BASE}/note`),
  fetchPaging: (page, size) =>
    axios.get(
      `${process.env.REACT_APP_API_BASE}/note/paging?page=${page}&size=${size}`
    ),
  remove: (id) => axios.delete(`${process.env.REACT_APP_API_BASE}/note/${id}`),
  modify: (data) =>
    axios.put(`${process.env.REACT_APP_API_BASE}/note/${data.id}`, data),
};

export default noteApi;
