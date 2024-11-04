import fetchTransactions from "../services/fetchTransactions";

const isPurchased = (
  transactions: Awaited<ReturnType<typeof fetchTransactions>>,
  address: string
) =>
  transactions.some(
    (transactions) => transactions.from === address && transactions.value === 1
  );

export default isPurchased;
