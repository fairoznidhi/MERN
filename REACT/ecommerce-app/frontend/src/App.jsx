import { SearchProvider } from "./contexts";
import { AppRouter } from "./router";

function App() {
  return (
    <SearchProvider>
      <AppRouter />
    </SearchProvider>
  );
}

export default App;
