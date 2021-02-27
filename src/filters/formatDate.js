export default function formatHour(value) {
  const slices = value.split('-');
  return `${slices[2]}-${slices[1]}-${slices[0]}`;
}
