import {create} from 'zustand';
import axios from 'axios';

const instant = axios.create({
  baseURL: '/api', 
});

// 스토어
const BookStore = create((set) => ({
  mainItems:[],      // 메인 데이터
  items: [],         // 데이터
  searchResults: [], // 검색 결과
  loading: false,    // 로딩 상태
  error:'',

  // List Api 요청
  itemApi: async (type) => {
    set({ loading: true, error: null });
    try {
      const response = await instant.get('/aladin', {
        params: { type }
      });
      if(type==='main'){
        set({ mainItems: response.data, loading: false });
      }else{
        set({ items: response.data.item, loading: false });
      }
    } catch (error) {
      set({ error: error, loading: false });
    }
  },

  // 검색 API 요청
  searchItems: async (keyword) => {
    set({ loading: true, error: null });
    try {
      const response = await instant.get('/aladin', {
        params: { Query: keyword }
      });
      set({ searchResults: response.data, loading: false });
    } catch (error) {
      set({ error: '에러', loading: false });
    }
  },
}));

export default BookStore;