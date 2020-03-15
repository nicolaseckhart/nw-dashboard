import * as React from 'react';
import ReactAnimatedWeather from 'react-animated-weather';
import { apiRequestOptions, DailyWeather } from '../../shared';
import { Col, Row } from 'react-bootstrap';
import { Loading } from '../Loading/Loading';
import WeatherData from '../../models/WeatherData';

const weatherDefaults = {
  icon: 'CLEAR_DAY',
  color: 'whitesmoke',
  size: 24,
  animate: true,
};

interface State {
  weatherData: WeatherData | null;
}

export class WeatherSummary extends React.Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = { weatherData: null };
  }

  async componentDidMount() {
    const response = await this.fetchWeatherData();
    this.setState({ weatherData: new WeatherData(JSON.parse(response)) });
  }

  fetchWeatherData = async () => {
    const response = await fetch(`${process.env.REACT_APP_API_HOST}/weather`, apiRequestOptions);
    return response.json();
  };

  renderAnimatedWeather = (icon: string, lgOffset: number) => (
    <Col className="my-3 content-v-middle" lg={{ span: 1, offset: lgOffset }} xs={{ span: 2, offset: 0 }}>
      <div className="weather-img">
        <ReactAnimatedWeather
          icon={icon}
          color={weatherDefaults.color}
          size={weatherDefaults.size}
          animate={weatherDefaults.animate}
        />
      </div>
    </Col>
  );

  render = () => {
    const weatherData = this.state.weatherData;
    const weatherTextColumnProps = { className: 'my-3 content-middle', lg: { span: 4 }, xs: { span: 10 } };

    return (
      <Row className="weather-summary mt-3">
        {weatherData !== null ? (
          <>
            {this.renderAnimatedWeather(weatherData.weather.current.icon, 1)}
            <Col {...weatherTextColumnProps}>
              <span>
                Currently, it&apos;s <u>{weatherData.weather.current.temperature} °C</u> and{' '}
                <u>{weatherData.weather.current.summary}</u> in Andelfingen.
              </span>
            </Col>
            {this.renderAnimatedWeather(weatherData.weather.day.icon, 0)}
            <Col {...weatherTextColumnProps}>
              <span>
                It&apos;s <u>{weatherData.weather.day.summary}</u> ranging from{' '}
                <u>
                  {weatherData.weather.day.temperatureMin} °C to {weatherData.weather.day.temperatureMax} °C
                </u>
                .
              </span>
            </Col>
          </>
        ) : (
          <Loading />
        )}
      </Row>
    );
  };
}

export default WeatherSummary;
