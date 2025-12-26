import FragmentIntro from "./components/FragmentIntro";
import BasicFragment from "./components/BasicFragment";
import ShorthandFragment from "./components/ShorthandFragment";
import FragmentList from "./components/FragmentList";
import StyledFragment from "./components/StyledFragment";
import KeysNote from "./components/KeysNote";
import FruitListWithKeys from "./components/FruitListWithKeys";
import FruitListWithoutKeys from "./components/FruitListWithoutKeys";
import UserListIndexKey from "./components/UserListIndexKey";
import ProductListUniqueKey from "./components/ProductListUniqueKey";
import TableFragment from "./components/TableFragment";
import EvenNumberList from "./components/EvenNumberList";
import NestedList from "./components/NestedList";


function App() {
  return (
    <>
      <h1>Day 9 – React Fragment & Keys</h1>

      <FragmentIntro />
      <BasicFragment />
      <ShorthandFragment />
      <FragmentList />
      <StyledFragment />
      <KeysNote />
      <FruitListWithKeys />
      <FruitListWithoutKeys />
      <UserListIndexKey />
      <ProductListUniqueKey />
      <TableFragment />
      <EvenNumberList />
      <NestedList />
    </>
  );
}

export default App;
