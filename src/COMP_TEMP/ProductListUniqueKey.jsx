function ProductListUniqueKey() {
  const products = [
    { id: 1, name: "Bag" },
    { id: 2, name: "Shoes" }
  ];

  return (
    <ul>
      {products.map(product => (
        <li key={product.id}>{product.name}</li>
      ))}
    </ul>
  );
}
export default ProductListUniqueKey;
