import axios from "axios";

const instant = axios.create({
  baseURL: 'http://www.aladin.co.kr/ttb/api', 
  params: {
    ttbkey: 'ttbhongyeong5751628001',
    MaxResults: 20,
    start: 1,
    SearchTarget: 'Book',
    output: 'js',
    Version: '20131101',
  }
});

async function mainItems(res, categoryId, Cover) {
  try {
    let [ItemNewAll,Bestseller,BlogBest,ItemEditorChoice] = await Promise.all([
      instant(`/ItemList.aspx?QueryType=ItemNewAll&categoryId=${categoryId}&Cover=${Cover}`),
      instant(`/ItemList.aspx?QueryType=Bestseller&categoryId=${categoryId}&Cover=${Cover}`),
      instant(`/ItemList.aspx?QueryType=BlogBest&categoryId=${categoryId}&Cover=${Cover}`),
      instant(`/ItemList.aspx?QueryType=ItemEditorChoice&categoryId=${categoryId}&Cover=${Cover}`)
    ]);
    
    ItemNewAll = ItemNewAll.data;
    Bestseller = Bestseller.data;
    BlogBest = BlogBest.data;
    ItemEditorChoice = ItemEditorChoice.data;
    
    res.status(200).json({ItemNewAll, Bestseller, BlogBest, ItemEditorChoice});
  } catch(error) {
    throw new Error(`Error. Status: ${error}`);
  }
}

async function listItems(res, type, categoryId, Cover) {
  try {
    const response = await instant(`/ItemList.aspx?QueryType=${type}&categoryId=${categoryId}&Cover=${Cover}`);
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
    const { type, categoryId, Cover  } = req.query; 
    
    switch (type) {
        case 'main':
            return await mainItems(res, categoryId, Cover);
        case 'cate':
            return await mainItems(res, categoryId, Cover);
        case 'search':
            return await searchItems(res);
        case 'test':
            res.status(200).json({item:100}); return;
        default: 
            return await listItems(res,type,categoryId, Cover);
    }

}
  

  
  