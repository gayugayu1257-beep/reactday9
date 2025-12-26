function NestedList() {
  const data = [
    { id: 1, items: ["HTML", "CSS"] },
    { id: 2, items: ["React", "Node"] }
  ];

  return (
    <ul>
      {data.map(section => (
        <li key={section.id}>
          <ul>
            {section.items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
}
export default NestedList;

