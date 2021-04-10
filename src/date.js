export default function myDate() {
  const [a, month, day, year, b] = Date().split([":"])[0].split(" ");
  const date = `${month} ${day} ${year}`;
  return date;
}
