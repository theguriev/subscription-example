"use server";
import { revalidateTag } from "next/cache";
import signTransaction from "./signTransaction";

const getSomeMoney = async ({
  to,
  message,
}: {
  to: string;
  message: string;
}) => {
  const request = await fetch(`${process.env.BASE_URL}billing/transactions`, {
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      from: process.env.BLLS_ADDRESS,
      to,
      value: 1,
      symbol: "bls",
      signature: await signTransaction(
        process.env.BLLS_PRIVATE_KEY,
        process.env.BLLS_ADDRESS,
        to,
        1,
        "bls"
      ),
      message,
    }),
    method: "POST",
  });
  const response = await request.json();
  revalidateTag("ballance");
  return response;
};

export default getSomeMoney;
