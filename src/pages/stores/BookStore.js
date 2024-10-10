import { create } from 'zustand';
import { aladin } from '../api/aladin';

const BookStore = create((set) => ({
  books: [],
  loading: false,

  Bestsellers: async () => {
    set({ loading: true });
    
    try {
      const data = await aladin();
      set({ books: data.item, loading: false });
    } catch {}
  }

}));

export default BookStore;
