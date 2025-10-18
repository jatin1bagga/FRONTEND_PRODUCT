import { Heart, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { FurnitureProduct } from '@/utils/furnitureData';
import { useState } from 'react';

interface ProductCardProps {
  product: FurnitureProduct;
  aiDescription?: string;
}

const ProductCard = ({ product, aiDescription }: ProductCardProps) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [imageError, setImageError] = useState(false);

  const displayImage = !imageError && product.images[0] 
    ? product.images[0] 
    : 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800';

  return (
    <Card className="group overflow-hidden backdrop-blur-sm bg-card/50 border-border/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fade-in">
      <div className="relative aspect-square overflow-hidden bg-muted">
        <img
          src={displayImage}
          alt={product.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          onError={() => setImageError(true)}
        />
        <Button
          size="icon"
          variant="ghost"
          className={`absolute top-3 right-3 rounded-full backdrop-blur-sm transition-colors ${
            isFavorite 
              ? 'bg-primary text-primary-foreground hover:bg-primary/90' 
              : 'bg-background/80 hover:bg-background'
          }`}
          onClick={() => setIsFavorite(!isFavorite)}
        >
          <Heart className={`h-4 w-4 ${isFavorite ? 'fill-current' : ''}`} />
        </Button>
      </div>

      <CardContent className="p-4 space-y-2">
        <div className="flex items-start justify-between gap-2">
          <div className="flex-1">
            <h3 className="font-semibold text-foreground line-clamp-2 group-hover:text-primary transition-colors">
              {product.title}
            </h3>
            <p className="text-sm text-muted-foreground">{product.brand}</p>
          </div>
          <div className="text-right shrink-0">
            <p className="text-lg font-bold text-primary">₹{product.priceINR.toLocaleString()}</p>
          </div>
        </div>

        {aiDescription && (
          <div className="pt-2 border-t border-border">
            <p className="text-xs text-muted-foreground italic line-clamp-3">{aiDescription}</p>
          </div>
        )}
        
        {!aiDescription && product.description && (
          <p className="text-sm text-muted-foreground line-clamp-2">{product.description}</p>
        )}
      </CardContent>

      <CardFooter className="p-4 pt-0 gap-2">
        <Button variant="outline" className="flex-1" size="sm">
          <ExternalLink className="h-4 w-4 mr-2" />
          Details
        </Button>
        <Button className="flex-1" size="sm">
          Add to Favorites
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
