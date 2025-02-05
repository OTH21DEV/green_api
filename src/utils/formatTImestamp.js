export default function convertTimestamp(timestamp) {
  let date;
  const options = {
    hour: "2-digit",
    minute: "2-digit",
  };
  if (timestamp.toString().length <= 10) {
    // if timestamp is in seconds
    date = new Date(timestamp * 1000);
  } else {
    // if in milliseconds
    date = new Date(timestamp);
  }

  return date.toLocaleTimeString([], options);
}
