  export default function formatHour(value) {
    if (!value) return '';
    const slices = value.split(':');
    return `${slices[0]}:${slices[1]}`;
  }
