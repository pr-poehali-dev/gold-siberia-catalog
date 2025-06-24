import { useState } from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white/95 backdrop-blur-sm border-b border-gold/20 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 gold-gradient rounded-full flex items-center justify-center">
              <Icon name="Crown" size={20} className="text-white" />
            </div>
            <h1 className="text-2xl font-cormorant font-bold text-dark-elegant">
              Золото Сибири
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="/"
              className="text-dark-elegant hover:text-gold transition-colors font-medium"
            >
              Главная
            </a>
            <a
              href="/catalog"
              className="text-dark-elegant hover:text-gold transition-colors font-medium"
            >
              Каталог
            </a>
            <a
              href="/about"
              className="text-dark-elegant hover:text-gold transition-colors font-medium"
            >
              О нас
            </a>
            <a
              href="/contacts"
              className="text-dark-elegant hover:text-gold transition-colors font-medium"
            >
              Контакты
            </a>
          </nav>

          {/* Cart & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="hover:bg-gold/10">
              <Icon
                name="ShoppingBag"
                size={20}
                className="text-dark-elegant"
              />
            </Button>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Icon name={isMenuOpen ? "X" : "Menu"} size={20} />
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-gold/20 pt-4">
            <div className="flex flex-col space-y-3">
              <a
                href="/"
                className="text-dark-elegant hover:text-gold transition-colors font-medium py-2"
              >
                Главная
              </a>
              <a
                href="/catalog"
                className="text-dark-elegant hover:text-gold transition-colors font-medium py-2"
              >
                Каталог
              </a>
              <a
                href="/about"
                className="text-dark-elegant hover:text-gold transition-colors font-medium py-2"
              >
                О нас
              </a>
              <a
                href="/contacts"
                className="text-dark-elegant hover:text-gold transition-colors font-medium py-2"
              >
                Контакты
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
