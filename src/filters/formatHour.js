  export default function formatHour(value) {
    const slices = value.split(':');
    return `${slices[0]}:${slices[1]}`;
  }
