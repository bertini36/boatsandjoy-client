export function date2Str(date) {
  let d = new Date(date),
    month = '' + (d.getMonth() + 1),
    day = '' + d.getDate(),
    year = d.getFullYear();
  if (month.length < 2)
    month = '0' + month;
  if (day.length < 2)
    day = '0' + day;
  return [year, month, day].join('-');
}

export function str2Date(dateStr) {
  return new Date(Date.parse(dateStr));
}

export function formatDate(value) {
  if (!value) return '';
  const slices = value.split('-');
  return `${slices[2]}-${slices[1]}-${slices[0]}`;
}

export function formatHour(value) {
  if (!value) return '';
  const slices = value.split(':');
  return `${slices[0]}:${slices[1]}`;
}
