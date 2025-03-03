export const calcTotalText = (n: number): string => {
  if (n < 2) {
    return 'товар';
  } else if (n >= 2 && n < 5) {
    return 'товари';
  } else if (n >= 5) {
    return 'товарів';
  } else {
    return 'товар';
  }
};
