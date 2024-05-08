import { RootState } from '../store';

export const selectFilter = (state: RootState) => state.filter;

export const selectSort = (state: RootState) => state.filter.sort;

// export const selectCartItemById = (id: number) => (state) =>
//   state.cart.items.find((obj) => obj.id === id);
