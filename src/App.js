import CardValidator from "containers/CardValidator";
import { ThemeProvider } from "styled-components";
import { theme } from "styles/theme";
import { GlobalStyle } from "./styles/GlobalStyle";
function App() {
	return (
		<>
			<GlobalStyle />
			<ThemeProvider theme={theme}>
				<CardValidator />
			</ThemeProvider>
		</>
	);
}

export default App;
