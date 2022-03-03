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

export async function createBooking(basePrice, isResident, promocode, slotIds, customerName, customerTelephoneNumber, extras) {
  const data = {
    'base_price': basePrice,
    'is_resident': isResident,
    'promocode': promocode,
    'slot_ids': String(slotIds),
    'customer_name': customerName,
    'customer_telephone_number': customerTelephoneNumber,
    'extras': extras
  };
  const baseUrl = process.env.VUE_APP_API_URL;
  const response = await axios.post(`${baseUrl}bookings/create/booking/`, JSON.stringify(data), { headers: { 'Content-type': 'application/json' } });
  return response.data.data;
}

export async function getBooking(sessionId) {
  const baseUrl = process.env.VUE_APP_API_URL;
  const response = await axios.get(`${baseUrl}bookings/get/booking/by/session/?session_id=${sessionId}`);
  return response.data.data;
}

export async function validatePromocode(promocode, booking_day) {
  const baseUrl = process.env.VUE_APP_API_URL;
  const response = await axios.get(`${baseUrl}bookings/validate/promocode/?promocode=${promocode}&booking_day=${booking_day}`);
  return response.data;
}
