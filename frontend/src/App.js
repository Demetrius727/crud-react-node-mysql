import GlobalStyle from "./styles/global";
import styled from "styled-components";
import FormPart from './components/FormPart.js';
import Grid from "./components/Grid";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Container = styled.div`
  width: 100%;
  max-width: 800px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const Title = styled.h2``;

function App() {
  return (
  <>
    <Container>
      <Title>USUÁRIOS</Title>
      <FormPart />
      <Grid />
    </Container>
    <ToastContainer autoClose={3000}/>
    <GlobalStyle />
  </>
  );
}

export default App;
