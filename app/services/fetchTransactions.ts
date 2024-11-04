const fetchTransactions = async (address: string) => {
  const response = await fetch(
    `${process.env.BASE_URL}billing/transactions?symbol=bls&address=${address}`,
    { next: { tags: ["inventory"] } }
  );
  const data: Array<{
    _id: string;
    from: string;
    to: string;
    symbol: string;
    timestamp: number;
    message: string;
    value: number;
  }> = await response.json();
  return data;
};

export default fetchTransactions;
