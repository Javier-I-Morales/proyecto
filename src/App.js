import { Fragment } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Container from "./components/Container";



function App() {

  return (
    <Fragment >
      <Header/>
      <br></br><br></br>
      <Container />
      <br></br><br></br>
      <Footer/>
    </Fragment>
  );
}

export default App;
