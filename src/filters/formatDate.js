export default function formatHour(value) {
  if (!value) return '';
  const slices = value.split('-');
  return `${slices[2]}-${slices[1]}-${slices[0]}`;
}
