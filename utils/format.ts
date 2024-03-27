/* eslint-disable prettier/prettier */
export const formatPrice = (price: unknown, sale: unknown) => {
  return (Number(price) - (Number(price) * Number(sale)) / 100).toLocaleString('de-DE');
};

export const price = (price: unknown) => {
  return Number(price).toLocaleString('de-DE');
};
