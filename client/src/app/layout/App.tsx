import Catalog from "../../features/catalog/Catalog";
import { CssBaseline, Container } from '@material-ui/core';
import Header from "./Header";

function App() {

  return (
    <div>
      <CssBaseline />
      <Header />
      <Container>
        <Catalog />
      </Container>
    </div>
  );
}

export default App;

