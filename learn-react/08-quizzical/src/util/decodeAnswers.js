export default function decodeAnswers(arr) {
  const answersArray = [];
  for (let i = 0; i < arr.length; i++) {
    answersArray.push(atob(arr[i]));
  }

  return answersArray;
}
