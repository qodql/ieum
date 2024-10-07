export const aladin = async () => {
    const response = await fetch('/api/books?type=bestseller');
    
    if (!response.ok) {
      throw new Error('Failed to fetch');
    }
  
    const data = await response.json();
    return data;
  };
  