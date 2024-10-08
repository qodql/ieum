import axios from "axios";


async function Bestsellers(req, res) {
    try {
      const response = await fetch(`http://www.aladin.co.kr/ttb/api/ItemList.aspx?ttbkey=ttbbengby1506001&QueryType=ItemNewAll&MaxResults=20&start=1&SearchTarget=Book&output=JS&Version=20131101`);
  
      if (!response.ok) {
        throw new Error(`Failed to fetch. Status: ${response.status}`);
      }
      const data = await response.json();
      res.status(200).json(data);
    } catch {}
  }


async function searchItems(req, res) {
    const { query, maxResults = 20, start = 1, searchTarget = "Book" } = req.query;
  
    if (!query) {
      return res.status(400).json({ error: "Query parameter is required" });
    }
  
    try {
      const response = await fetch(
        `http://www.aladin.co.kr/ttb/api/ItemSearch.aspx?ttbkey=ttbbengby1506001&Query=${query}&MaxResults=${maxResults}&start=${start}&SearchTarget=${searchTarget}&output=JS&Version=20131101`
      );
  
      if (!response.ok) {
        throw new Error(`Failed to fetch. Status: ${response.status}`);
      }
      const data = await response.json();
      res.status(200).json(data);
    } catch {}
  }


export default async function handler(req, res) {
    const { type } = req.query; 
  
    switch (type) {
        case 'bestseller':
            return Bestsellers(req, res); // 베스트셀러 API 호출
        case 'search':
            return searchItems(req, res); // 상품 검색 API 호출
        default: 
            return;
    }
}
  

  
  