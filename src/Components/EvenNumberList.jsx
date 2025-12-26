function EvenNumberList() {
  const numbers = [1, 2, 3, 4, 5, 6];
  return (
    <ul>
      {numbers.map((num, index) =>
        num % 2 === 0 ? <li key={index}>{num}</li> : null
      )}
    </ul>
  );
}
export default EvenNumberList;
