import Header from "./components/header/Header";
import WeatherBoard from "./components/weather/WeatherBoard";
import { FavoriteProvider, WeatherProvider } from "./provider";

function App() {
  return (
    <FavoriteProvider>
      <WeatherProvider>
        <div className="grid place-items-center h-screen">
          <Header />
          <WeatherBoard />
        </div>
      </WeatherProvider>
    </FavoriteProvider>
  );
}

export default App;
