export const apiRequestOptions = {
  headers: new Headers({
    Authorization: process.env.REACT_APP_API_KEY as string,
  }),
};

export const apiPostRequestOptions = (body: any) => {
  return {
    method: 'POST',
    headers: new Headers({
      Authorization: process.env.REACT_APP_API_KEY as string,
      'Content-Type': 'application/x-www-form-urlencoded',
    }),
    body
  }
};

/**
 * Takes an array of key value parts that are uri encoded.
 * @param parts - [{id: 0}, {name: 'foobar}, {text: 'lorem'}, ...]
 */
export const uriEncode = (parts: {}[]) => {
  return parts.map((part: {}) => (
    `${encodeURIComponent(Object.keys(part)[0])}=${encodeURIComponent(Object.values(part)[0] as any)}`
  )).join('&');
};

/**
 * Reduces a measurement series to a limited amount of points by splitting the series into intervals and averaging them.
 * @param series
 * @param maxPoints
 * @param key
 */
export function reduceSeries(series: any[], maxPoints: number, key: string) {
  const intervalLength = Math.ceil(series.length / maxPoints);
  const remainingSeries = series.filter((point, index) => index % intervalLength === 0);

  remainingSeries.forEach((point, i) => {
    if (i > 0 && i < remainingSeries.length - 1) {
      const intervalToMediate = series.slice(
        i * intervalLength - intervalLength / 2,
        i * intervalLength + intervalLength / 2,
      );
      point[key] = Math.round((intervalToMediate.reduce((sum, p) => sum + p[key], 0) / intervalLength) * 100) / 100;
    }
  });
  return remainingSeries;
}
