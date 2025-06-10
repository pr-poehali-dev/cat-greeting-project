import React from "react";
import Icon from "@/components/ui/icon";

const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b border-pink-100">
      <div className="max-w-7xl mx-auto px-4">
        {/* Top bar */}
        <div className="flex justify-between items-center py-2 text-sm text-gray-600">
          <div className="flex space-x-4">
            <span>Понедельник, 10 июня 2025</span>
            <span>Москва +3°C</span>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-pink-500">
              Войти
            </a>
            <a href="#" className="hover:text-pink-500">
              Регистрация
            </a>
          </div>
        </div>

        {/* Main header */}
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center space-x-8">
            <h1 className="text-3xl font-bold text-pink-600 font-montserrat">
              Beauty Life
            </h1>
            <nav className="hidden md:flex space-x-6">
              <a
                href="#"
                className="text-gray-700 hover:text-pink-500 font-medium"
              >
                Красота
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-pink-500 font-medium"
              >
                Мода
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-pink-500 font-medium"
              >
                Здоровье
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-pink-500 font-medium"
              >
                Стиль жизни
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-pink-500 font-medium"
              >
                Психология
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-pink-500 font-medium"
              >
                Звёзды
              </a>
            </nav>
          </div>

          <div className="flex items-center space-x-4">
            <button className="p-2 text-gray-500 hover:text-pink-500">
              <Icon name="Search" size={20} />
            </button>
            <button className="p-2 text-gray-500 hover:text-pink-500">
              <Icon name="Heart" size={20} />
            </button>
            <button className="p-2 text-gray-500 hover:text-pink-500">
              <Icon name="User" size={20} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
