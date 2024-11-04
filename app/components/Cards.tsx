import fetchBallance from "../services/fetchBallance";
import GetSomeMoney from "./GetSomeMoney";
import fetchTransactions from "../services/fetchTransactions";
import BuyNow from "./BuyNow";
import isPurchased from "../utils/isPurchased";
import EnterPriseCard from "./EnterpriseCard";
import BallanceCard from "./BallanceCard";

const Cards = async ({
  address,
  privateKey,
}: {
  address: string;
  privateKey: string;
}) => {
  const ballance = await fetchBallance(address);
  const transactions = await fetchTransactions(address);
  const purchased = isPurchased(transactions, address);
  return (
    <div className="flex flex-col space-y-4">
      <div className="flex w-full">
        <h1 className="text-xl font-bold">Payment</h1>
      </div>
      <div className="flex sm:space-x-4 space-y-4 sm:space-y-0 w-full flex-col sm:flex-row">
        <div className="flex space-y-4 flex-col">
          <EnterPriseCard purchased={purchased}>
            <BuyNow
              address={address}
              privateKey={privateKey}
              disabled={transactions.length === 0}
            />
          </EnterPriseCard>
        </div>
        <div className="flex flex-col">
          <BallanceCard address={address} ballance={ballance}>
            <GetSomeMoney
              address={address}
              disabled={transactions.length > 0}
            />
          </BallanceCard>
        </div>
      </div>
    </div>
  );
};

export default Cards;
