type priceType = {
  price: number;
};

export default function Price({ price }: priceType) {
  return <h4>N{price}</h4>;
}
