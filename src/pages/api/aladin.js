import axios from "axios";

const instant = axios.create({
  baseURL: 'http://www.aladin.co.kr/ttb/api', 
  params: {
    ttbkey: 'ttbbengby1506001',
    MaxResults: 20,
    start: 1,
    SearchTarget: 'Book',
    output: 'js',
    Version: '20131101',
  }
});

async function mainItems(res) {
  try {
    let [ItemNewAll,Bestseller,BlogBest] = await Promise.all([
      instant(`/ItemList.aspx?QueryType=ItemNewAll`),
      instant(`/ItemList.aspx?QueryType=Bestseller`),
      instant(`/ItemList.aspx?QueryType=BlogBest`)
    ]);
    
    ItemNewAll=ItemNewAll.data;
    Bestseller=Bestseller.data;
    BlogBest=BlogBest.data;
    
    res.status(200).json({ItemNewAll,Bestseller,BlogBest});
  } catch(error) {
    throw new Error(`Error. Status: ${error}`);
  }
}

async function listItems(res,type) {
    try {
      const response = await instant(`/ItemList.aspx?QueryType=${type}`);
      const data = response.data;
      res.status(200).json(data);
    } catch(error) {
      throw new Error(`Error. Status: ${error}`);
    }
  }


async function searchItems(req, res) {
   
    try {
      const response = await instant(`/ItemSearch.aspx?&Query=${query}`);
    
    const data = await response.json();
    res.status(200).json(data);
    } catch(error){
        throw new Error(`Error. Status: ${response.status}`);

    }
  }


export default async function handler(req, res) {
    const { type } = req.query; 
    
    switch (type) {
        case 'main':
            return await mainItems(res);
        case 'search':
            return await searchItems(res);
        default: 
            return await listItems(res,type);
    }

}
  

  
  