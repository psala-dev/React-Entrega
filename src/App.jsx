import { ItemDetailContainer } from "./components/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer";
import Navbar from "./components/navbar";

function App() {
  
  return (
    <>
      <div>
        <Navbar />
       {/* <ItemListContainer /> */}
        <ItemDetailContainer itemId={2} />
      </div>

    </>
  );
}

export default App;
