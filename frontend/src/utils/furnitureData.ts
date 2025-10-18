// Utility to parse and handle furniture data from CSV

export interface FurnitureProduct {
  id: string;
  title: string;
  brand: string;
  description: string;
  price: number;
  priceINR: number;
  categories: string[];
  images: string[];
  manufacturer: string;
  packageDimensions: string;
  countryOfOrigin: string;
  material: string;
  color: string;
}

const USD_TO_INR = 83; // Approximate conversion rate

export const parseFurnitureCSV = (csvText: string): FurnitureProduct[] => {
  const lines = csvText.split('\n');
  const headers = lines[0].split(',');
  
  return lines.slice(1).filter(line => line.trim()).map(line => {
    // Simple CSV parsing (in production, use a proper CSV parser library)
    const values = line.match(/(".*?"|[^,]+)(?=\s*,|\s*$)/g) || [];
    
    const cleanValue = (val: string) => val.replace(/^"|"$/g, '').trim();
    
    const title = cleanValue(values[0] || '');
    const brand = cleanValue(values[1] || '');
    const description = cleanValue(values[2] || '');
    const priceStr = cleanValue(values[3] || '0');
    const price = parseFloat(priceStr.replace('$', ''));
    const priceINR = Math.round(price * USD_TO_INR);
    
    const categoriesStr = cleanValue(values[4] || '[]');
    const categories = categoriesStr
      .replace(/[\[\]']/g, '')
      .split(',')
      .map(c => c.trim())
      .filter(c => c);
    
    const imagesStr = cleanValue(values[5] || '[]');
    const images = imagesStr
      .replace(/[\[\]']/g, '')
      .split(',')
      .map(img => img.trim())
      .filter(img => img);
    
    return {
      id: cleanValue(values[11] || Math.random().toString()),
      title,
      brand,
      description,
      price,
      priceINR,
      categories,
      images,
      manufacturer: cleanValue(values[6] || ''),
      packageDimensions: cleanValue(values[7] || ''),
      countryOfOrigin: cleanValue(values[8] || ''),
      material: cleanValue(values[9] || ''),
      color: cleanValue(values[10] || ''),
    };
  });
};

// Mock data for initial display (first few products)
export const mockFurnitureData: FurnitureProduct[] = [
  {
    id: '1',
    title: 'Modern Velvet Sofa',
    brand: 'LuxeLiving',
    description: 'Elegant 3-seater velvet sofa with gold metal legs, perfect for contemporary living spaces.',
    price: 899,
    priceINR: 74617,
    categories: ['Living Room', 'Sofas', 'Modern Furniture'],
    images: ['https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800'],
    manufacturer: 'LuxeLiving Co.',
    packageDimensions: '84"W x 36"D x 32"H',
    countryOfOrigin: 'USA',
    material: 'Velvet, Wood',
    color: 'Navy Blue',
  },
  {
    id: '2',
    title: 'Scandinavian Dining Table',
    brand: 'NordicHome',
    description: 'Minimalist oak dining table with clean lines, seats 6 people comfortably.',
    price: 649,
    priceINR: 53867,
    categories: ['Dining Room', 'Tables', 'Scandinavian'],
    images: ['https://images.unsplash.com/photo-1617806118233-18e1de247200?w=800'],
    manufacturer: 'NordicHome',
    packageDimensions: '72"L x 36"W x 30"H',
    countryOfOrigin: 'Sweden',
    material: 'Oak Wood',
    color: 'Natural',
  },
  {
    id: '3',
    title: 'Ergonomic Office Chair',
    brand: 'WorkSpace Pro',
    description: 'Premium mesh office chair with lumbar support and adjustable armrests.',
    price: 399,
    priceINR: 33117,
    categories: ['Office', 'Chairs', 'Ergonomic'],
    images: ['https://images.unsplash.com/photo-1580480055273-228ff5388ef8?w=800'],
    manufacturer: 'WorkSpace Pro',
    packageDimensions: '26"W x 26"D x 42"H',
    countryOfOrigin: 'USA',
    material: 'Mesh, Metal',
    color: 'Black',
  },
  {
    id: '4',
    title: 'Industrial Bookshelf',
    brand: 'UrbanLoft',
    description: '5-tier metal and wood bookshelf with rustic industrial design.',
    price: 299,
    priceINR: 24817,
    categories: ['Storage', 'Shelving', 'Industrial'],
    images: ['https://images.unsplash.com/photo-1594620302200-9a762244a156?w=800'],
    manufacturer: 'UrbanLoft',
    packageDimensions: '48"H x 32"W x 12"D',
    countryOfOrigin: 'USA',
    material: 'Metal, Reclaimed Wood',
    color: 'Rustic Brown',
  },
];
