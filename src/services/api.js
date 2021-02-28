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

export async function createBooking(price, slotIds, customerName, customerTelephoneNumber, extras) {
  const data = {
    'price': price,
    'slot_ids': String(slotIds),
    'customer_name': customerName,
    'customer_telephone_number': customerTelephoneNumber,
    'extras': extras
  };
  const baseUrl = process.env.VUE_APP_API_URL;
  const response = await axios.post(`${baseUrl}bookings/create/booking/`, JSON.stringify(data), { headers: { 'Content-type': 'application/json' } });
  return response.data.data;
}
