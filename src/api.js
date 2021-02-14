import axios from 'axios';
import utils from './utils';

const api = {
  getNoAvailDates: async (date) => {
    const response = await axios.get(`${process.env.VUE_APP_API_URL}availability/month/${utils.date2Str(date)}/`);
    const results = response.data.data;
    return results.filter(result => !result.availability).map(result => utils.str2Date(result.date));
  },

  getDateAvail: async (date) => {
    const response = await axios.get(`${process.env.VUE_APP_API_URL}availability/day/${utils.date2Str(date)}/`);
    console.log(response);
    return response.data.data;
  }
};

export default api;
