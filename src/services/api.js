import axios from 'axios';

import { str2Date, date2Str } from '../utils/dates';

/**
 * @type date: date
 * @return {Promise<*>}
 */
export async function getNoAvailDates(date) {
  const baseUrl = process.env.VUE_APP_API_URL;
  const response = await axios.get(`${baseUrl}availability/month/${date2Str(date)}/`);
  const results = response.data.data;
  return results.filter(result => !result.availability).map(result => str2Date(result.date));
}

/**
 * @type date: date
 * @type applyResidentDiscount: bool
 * @return {Promise<*>}
 */
export async function getDateAvail(date, applyResidentDiscount) {
  const baseUrl = process.env.VUE_APP_API_URL;
  const response = await axios.get(`${baseUrl}availability/day/${date2Str(date)}/?apply_resident_discount=${applyResidentDiscount ? 1 : 0}`);
  return response.data.data;
}
