import axios from "axios";

const openDataApi = {
  fetchDustHourly: () =>
    axios.get(`${process.env.REACT_APP_API_BASE}/opendata/dust/hourly`),

  fetchSunDaily: () =>
    axios.get(`${process.env.REACT_APP_API_BASE}/opendata/sun/daily`),
};

export default openDataApi;
