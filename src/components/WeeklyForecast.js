import App from "../App";
import { DayForecast } from "./DayForecast";

export function WeeklyForecast() {
  const forecast = [
    {
      weekday: "Mon",
      weather: "cloudy",
      tempDay: 18,
      tempNight: 11,
    },
    {
      weekday: "Tue",
      weather: "partly-cloudy",
      tempDay: 21,
      tempNight: 15,
    },
    {
      weekday: "Wed",
      weather: "rainy",
      tempDay: 8,
      tempNight: 1,
    },
    {
      weekday: "Thu",
      weather: "snowy",
      tempDay: -2,
      tempNight: -7,
    },
    {
      weekday: "Fri",
      weather: "stormy-rain",
      tempDay: 28,
      tempNight: 21,
    },
    {
      weekday: "Sat",
      weather: "stormy",
      tempDay: 35,
      tempNight: 27,
    },
    {
      weekday: "Sun",
      weather: "sunny",
      tempDay: 28,
      tempNight: 22,
    },
  ];
  return (
    <div className="week-forecast">
      <DayForecast
        weekday={forecast[0].weekday}
        weather={forecast[0].weather}
        tempDay={forecast[0].tempDay}
        tempNight={forecast[0].tempNight}
      ></DayForecast>
      <DayForecast
        weekday={forecast[1].weekday}
        weather={forecast[1].weather}
        tempDay={forecast[1].tempDay}
        tempNight={forecast[1].tempNight}
      ></DayForecast>
      <DayForecast
        weekday={forecast[2].weekday}
        weather={forecast[2].weather}
        tempDay={forecast[2].tempDay}
        tempNight={forecast[2].tempNight}
      ></DayForecast>
      <DayForecast
        weekday={forecast[3].weekday}
        weather={forecast[3].weather}
        tempDay={forecast[3].tempDay}
        tempNight={forecast[3].tempNight}
      ></DayForecast>
      <DayForecast
        weekday={forecast[4].weekday}
        weather={forecast[4].weather}
        tempDay={forecast[4].tempDay}
        tempNight={forecast[4].tempNight}
      ></DayForecast>
      <DayForecast
        weekday={forecast[5].weekday}
        weather={forecast[5].weather}
        tempDay={forecast[5].tempDay}
        tempNight={forecast[5].tempNight}
      ></DayForecast>
      <DayForecast
        weekday={forecast[6].weekday}
        weather={forecast[6].weather}
        tempDay={forecast[6].tempDay}
        tempNight={forecast[6].tempNight}
      ></DayForecast>
    </div>
  );
}
