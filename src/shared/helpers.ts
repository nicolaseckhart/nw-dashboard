export const apiRequestOptions = {
  headers: new Headers({
    Authorization: process.env.REACT_APP_API_KEY as string,
  }),
};

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
