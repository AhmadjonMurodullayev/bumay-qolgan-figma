import React from "react";
import Bars from "../../assets/icons/bars";

export default function Navbar() {
  return (
    <nav className="w-full bg-[#0E1821] h-[70px] flex items-center">
      <div className="w-[90%] mx-auto flex items-center justify-between gap-12">
        <div className="flex items-center gap-3 bg-[#243C53] p-4 rounded-md cursor-pointer">
          <Bars />
          <h4 className="text-white text-sm lg:text-base">Каталог товаров</h4>
        </div>

        <div className="hidden md:flex items-center gap-5">
          <p className="text-white text-sm lg:text-base cursor-pointer">О компании</p>
          <p className="text-white text-sm lg:text-base cursor-pointer">Акции</p>
          <p className="text-white text-sm lg:text-base cursor-pointer">Рассрочка 0|0|18</p>
          <p className="text-white text-sm lg:text-base cursor-pointer">Сервис и гарантия</p>
          <p className="text-white text-sm lg:text-base cursor-pointer">Опт/дропшиппинг</p>
          <p className="text-white text-sm lg:text-base cursor-pointer">Контакты</p>
        </div>

        <div className="flex md:hidden items-center text-white cursor-pointer">
          <Bars />
        </div>
      </div>
    </nav>
  );
}
