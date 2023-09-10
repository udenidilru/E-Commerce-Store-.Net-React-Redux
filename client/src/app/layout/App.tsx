import Catalog from "../../features/catalog/Catalog";
import { CssBaseline, Container } from '@material-ui/core';
import Header from "./Header";
import { Outlet } from 'react-router-dom';

function App() {

  return (
    <div>
      <CssBaseline />
      <Header />
      <Container>
        <Outlet />
      </Container>
    </div>
  );
}

export default App;

