import "./App.css";
import { DayForecast } from "./components/DayForecast";
import { WeeklyForecast } from "./components/WeeklyForecast";

function App() {
  return (
    <div className="container">
      <h1>Weekly Weather Forecast</h1>

      <div>
        <WeeklyForecast></WeeklyForecast>
      </div>
    </div>
  );
}

export default App;
