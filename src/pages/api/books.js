import axios from 'axios';

const instant = axios.create({
  baseURL: 'http://www.aladin.co.kr/ttb/api', 
  params: {
    ttbkey: 'ttbbengby1506001',
    MaxResults: 20,
    start: 1,
    SearchTarget: 'Book',
    output: 'xml',
    Version: '20131101'
  }
});

//search
export async function search(keyword) {
    const response = await instant.get('/ItemSearch.aspx', {
      params: {
        Query: keyword,
      }
    });
    return response.data;  
}

//main
export async function main() {
    const response = await instant.get('/ItemList.aspx', {
      params: {
        QueryType: 'ItemNewAll'
      }
    });
    const items = response.data; 
    return items;
}
