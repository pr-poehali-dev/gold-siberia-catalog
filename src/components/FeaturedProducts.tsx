import ProductCard from "./ProductCard";

const FeaturedProducts = () => {
  const featuredProducts = [
    {
      id: "1",
      name: 'Кольцо с бриллиантом "Императрица"',
      price: "85 000 ₽",
      image:
        "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?w=400&h=400&fit=crop",
      metal: "Белое золото 585°",
      description:
        'Элегантное кольцо с бриллиантом огранки "принцесса" 0.5 карат',
      inStock: true,
    },
    {
      id: "2",
      name: 'Серьги с изумрудами "Весна"',
      price: "120 000 ₽",
      image:
        "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&h=400&fit=crop",
      metal: "Желтое золото 750°",
      description: "Изысканные серьги с натуральными изумрудами и бриллиантами",
      inStock: false,
    },
    {
      id: "3",
      name: 'Колье "Царская особа"',
      price: "350 000 ₽",
      image:
        "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=400&h=400&fit=crop",
      metal: "Платина 950°",
      description: "Роскошное колье с сапфирами и бриллиантами ручной работы",
      inStock: true,
    },
    {
      id: "4",
      name: 'Браслет "Венецианский"',
      price: "65 000 ₽",
      image:
        "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&h=400&fit=crop",
      metal: "Розовое золото 585°",
      description: "Утонченный браслет с филигранным плетением",
      inStock: true,
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl lg:text-5xl font-cormorant font-bold text-dark-elegant">
            Популярные изделия
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Откройте для себя нашу коллекцию эксклюзивных ювелирных изделий,
            созданных мастерами с многолетним опытом
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="gold-gradient text-white px-8 py-4 rounded-lg font-semibold hover:scale-105 transition-transform">
            Смотреть весь каталог
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
