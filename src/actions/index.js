export const increment = (nr) => {
  return {
    type: 'INCREMENT',
    payload: nr,
  };
};

export const switchButton = (vl) => {
  return {
    type: 'DARK',
    payload: vl,
  };
};
