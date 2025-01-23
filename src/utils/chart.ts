export const LineAxis = (data: any) => {
  if (!Array.isArray(data) || data.length < 1) {
    return [];
  }
  const transformData = data.map((point) => ({
    x: new Date(point.date),
    y: point.close,
  }));

  return transformData;
};

export const intervalDurations = {
  "1mo": 1 * 30 * 24 * 60 * 60 * 1000,
  "3mo": 3 * 30 * 24 * 60 * 60 * 1000,
  "6mo": 6 * 30 * 24 * 60 * 60 * 1000,
  "1yr": 1 * 12 * 30 * 24 * 60 * 60 * 1000,
  "5yr": 5 * 12 * 30 * 24 * 60 * 60 * 1000,
  "10yr": 10 * 12 * 30 * 24 * 60 * 60 * 1000,
  "11yr": 111, //All years
} as const;

export type Interval = keyof typeof intervalDurations;

export function getDataForInterval(
  data: any,
  interval: string,
  lastEntry: any
) {
  const now = new Date(lastEntry);
  const duration = intervalDurations[interval];

  if (!duration) {
    throw new Error(`Unsupported interval: ${interval}`);
  }

  if (intervalDurations[interval] === 111) {
    return data;
  }

  const startTime = new Date(now - duration);

  // Filter data based on the start time
  return data.filter((entry: any) => {
    const entryDate = new Date(entry.date);
    return entryDate > startTime;
  });
}
