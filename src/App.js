import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Weather App</h1>
        <Weather />
        <footer>
          <a
            href="https://github.com/realRJ10/react-weather-app2"
            target="_blank"
            rel="noreferrer"
          >
            This project
          </a>{" "}
          is coded by Mojdeh Khorsand Moghadam
        </footer>
      </div>
    </div>
  );
}
