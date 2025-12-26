function FruitListWithoutKeys() {
  const fruits = ["Apple", "Banana", "Mango"];
  return (
    <ul>
      {fruits.map(fruit => (
        <li>{fruit}</li> // ⚠️ warning in console
      ))}
    </ul>
  );
}
export default FruitListWithoutKeys;
