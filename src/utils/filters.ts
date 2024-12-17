export const filterProducts = (products: any[], filters: {
  brands: string[];
  priceRanges: string[];
}) => {
  return products.filter(product => {
    const brandMatch = filters.brands.length === 0 || filters.brands.includes(product.brand);
    
    const priceMatch = filters.priceRanges.length === 0 || filters.priceRanges.some(range => {
      switch (range) {
        case 'Under $1000':
          return product.price < 1000;
        case '$1000-$2000':
          return product.price >= 1000 && product.price <= 2000;
        case '$2000-$3000':
          return product.price > 2000 && product.price <= 3000;
        case 'Over $3000':
          return product.price > 3000;
        default:
          return false;
      }
    });

    return brandMatch && priceMatch;
  });
};