const fetchBallance = async (address: string) => {
  const response = await fetch(
    `${process.env.BASE_URL}billing/ballance/${address}`,
    { next: { tags: ["ballance"] } }
  );
  const data: Record<string, number> = await response.json();
  return data["bls"] || 0;
};

export default fetchBallance;
