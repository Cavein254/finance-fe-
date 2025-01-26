export const dailyReturns = (prices: any) => {
  const dailyReturns = [];
  const filteredPrices = prices?.map((price) => {
    if (price?.close) {
      return price?.close;
    } else {
      return price?.x;
    }
  });
  for (let i = 1; i < filteredPrices.length; i++) {
    dailyReturns.push(
      (filteredPrices[i] - filteredPrices[i - 1]) / filteredPrices[i - 1]
    );
  }
  return dailyReturns;
};

export const averageDailyReturns = (prices: any) => {
  const dReturns = dailyReturns(prices);
  let total = 0;
  for (let i = 0; i < dailyReturns.length; i++) {
    total += dReturns[i];
  }
  return total / dailyReturns.length;
};

export const standardDeviation = (prices: any) => {
  const dReturns = dailyReturns(prices);
  const aDRet = averageDailyReturns(prices);
  let total = 0;
  for (let i = 0; i < dReturns.length; i++) {
    total += Math.pow(dReturns[i] - aDRet, 2);
  }
  return Math.sqrt(total / dReturns.length);
};

export const volatility = (prices: any) => {
  const sd = standardDeviation(prices);
  return sd * Math.sqrt(prices.length - 1);
};
