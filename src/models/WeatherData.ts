import { DailyWeather } from '../shared';

export default class WeatherData {
  weather: DailyWeather;

  constructor(json: any) {
    this.weather = WeatherData.deserialize(json);
  }

  static deserialize(json: any): DailyWeather {
    const convertIcon = (icon: string) => icon.replace(/-/g, '_').toUpperCase();
    const transformSummary = (summary: string) => summary.toLowerCase().replace('.', '');

    return {
      current: {
        temperature: Math.round(json['currently'].temperature),
        summary: transformSummary(json['currently'].summary),
        icon: convertIcon(json['currently'].icon),
      },
      day: {
        temperatureMax: Math.round(json['daily'].data[0].temperatureHigh),
        temperatureMin: Math.round(json['daily'].data[0].temperatureLow),
        summary: transformSummary(json['daily'].data[0].summary),
        icon: convertIcon(json['daily'].data[0].icon),
      },
    };
  }
}
