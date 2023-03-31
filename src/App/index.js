import { ThemeProvider } from "styled-components";
import { Form } from "./Form";
import { Content } from "./styled";
import { theme } from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
    <Content>
      <Form/>
    </Content>
    </ThemeProvider>
  );
}

export default App;
