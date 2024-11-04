const shortenAddress = (address: string) =>
  `${address.slice(0, 18)}...${address.slice(-16)}`;

export default shortenAddress;
