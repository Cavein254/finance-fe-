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

  const startTime = new Date(now - duration);
  console.log(`Now: ${now}`);
  console.log(`Start: ${startTime}`);

  // Filter data based on the start time
  return data.filter((entry) => {
    const entryDate = new Date(entry.date);
    return entryDate > startTime;
  });
}
