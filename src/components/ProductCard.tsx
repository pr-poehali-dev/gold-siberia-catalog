import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

interface ProductCardProps {
  id: string;
  name: string;
  price: string;
  image: string;
  metal: string;
  description: string;
  inStock: boolean;
  gemstone: string;
  certificate: string;
  sizes: string[];
}

const ProductCard = ({
  id,
  name,
  price,
  image,
  metal,
  description,
  inStock,
  gemstone,
  certificate,
  sizes,
}: ProductCardProps) => {
  return (
    <Link to={`/product/${id}`} className="block">
      <Card className="group hover:shadow-xl transition-all duration-300 border border-gold/20 hover:border-gold/40">
        <CardContent className="p-0">
          {/* Image */}
          <div className="relative overflow-hidden">
            <img
              src={image}
              alt={name}
              className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

            {/* Quick view button */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <Button
                size="sm"
                className="gold-gradient text-white hover:scale-105 transition-transform"
                onClick={(e) => e.preventDefault()}
              >
                <Icon name="Eye" size={16} className="mr-2" />
                Подробнее
              </Button>
            </div>

            {/* Stock indicator */}
            {!inStock && (
              <div className="absolute top-4 right-4 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                Под заказ
              </div>
            )}
          </div>

          {/* Content */}
          <div className="p-6 space-y-4">
            <div className="space-y-2">
              <h3 className="font-cormorant text-xl font-semibold text-dark-elegant line-clamp-2">
                {name}
              </h3>
              <p className="text-sm text-gray-600 line-clamp-2">
                {description}
              </p>
            </div>

            {/* Gemstone info */}
            <div className="flex items-center space-x-2">
              <Icon name="Gem" size={16} className="text-gold" />
              <span className="text-sm text-gray-600">{gemstone}</span>
            </div>

            {/* Metal info */}
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 gold-gradient rounded-full"></div>
              <span className="text-sm font-medium text-dark-elegant">
                {metal}
              </span>
            </div>

            {/* Certificate */}
            <div className="flex items-center space-x-2">
              <Icon name="Award" size={16} className="text-gold" />
              <span className="text-xs text-gray-500">{certificate}</span>
            </div>

            {/* Sizes */}
            <div className="space-y-1">
              <span className="text-xs text-gray-500">Доступные размеры:</span>
              <div className="flex flex-wrap gap-1">
                {sizes.slice(0, 3).map((size, index) => (
                  <span
                    key={index}
                    className="text-xs bg-gold/10 text-gold px-2 py-1 rounded"
                  >
                    {size}
                  </span>
                ))}
                {sizes.length > 3 && (
                  <span className="text-xs text-gray-400">
                    +{sizes.length - 3}
                  </span>
                )}
              </div>
            </div>

            {/* Price and actions */}
            <div className="flex items-center justify-between pt-4 border-t border-gold/20">
              <div className="space-y-1">
                <p className="text-2xl font-cormorant font-bold text-gold">
                  {price}
                </p>
                <p className="text-xs text-gray-500">от цены</p>
              </div>

              <div className="flex space-x-2">
                <Button
                  size="sm"
                  variant="outline"
                  className="border-gold text-gold hover:bg-gold hover:text-white"
                  onClick={(e) => e.preventDefault()}
                >
                  <Icon name="Heart" size={16} />
                </Button>
                <Button
                  size="sm"
                  className="gold-gradient text-white hover:scale-105 transition-transform"
                  onClick={(e) => e.preventDefault()}
                >
                  <Icon name="ShoppingCart" size={16} className="mr-2" />
                  Заказать
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default ProductCard;
