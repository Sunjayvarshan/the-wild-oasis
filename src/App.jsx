import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import Button from "./ui/Button";
import Input from "./ui/Input";
import Heading from "./ui/Heading";

const StyledApp = styled.main`
  background-color: lightgrey;
  padding: 20px;
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <Heading as="h1">The Wild Oasis</Heading>
        <Heading as="h2">Check IN and Check OUT</Heading>
        <Button>Check in</Button>
        <Button>check out</Button>
        <Heading as="h3">Form</Heading>
        <Input type="number" placeholder="number of guests" />
      </StyledApp>
    </>
  );
}

export default App;
