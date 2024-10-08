import React from "react";

export default function Card() {
  return (
    <div className="bg-white py-8 w-[90%] m-auto">
      <h1 className="text-2xl font-bold mb-6 ">Хиты продаж</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-6">
        <div className="border rounded-lg p-4 shadow hover:shadow-lg transition">
          <div className="flex justify-between">
            <button className="bg-green-200 text-green-800 text-xs px-2 py-1 rounded">Новинка</button>
            <span className="bg-red-500 text-white text-xs px-2 py-1 rounded">Хит продаж</span>
          </div>
          <img
            src="https://s3-alpha-sig.figma.com/img/a018/9a0f/6872ed2beb43253323300168610c310f?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XSOwBM~RUGWFetvcibgU6K966sTbfitfi6ryrNrGxjN~taXUf2g9QN8QQNBVc8aY8IPKFI81zW4r2ZpCFVbFukBWpXWqP5ayI-lbv2RlsQRK7DiF4TMNq1NrB2YuKG4SY6K-eev6RayndCKWBhXo-7QRLF3vcJy3l~3VJ3lQtZvRcG04bIRKP6Tynhh-N6Dc2sGCJzjhLJfnrldZPNi7OQRThfwm6oJnXHaJg5sU9Ejhk9Qw2TRYPNOUHbehU1t2xfW74m-eYlf2GMOH2BWHotJwhu4ul-zuaeXv3QigT-~HRnqQpYP1VrW3lrcPjuXCw7D2bMZAT0MycVveLakuyw__"
            alt="Гироскутер"
            className="w-full h-40 object-cover rounded-lg my-4"
          />
          <h5 className="text-sm text-gray-600">Сигвеи</h5>
          <p className="text-md font-semibold mb-4">
            Гироскутер Smart Balance Well 6.5 Хип-Хоп (АКВАЗАЩИТА)
          </p>
          <div className="flex justify-between items-center">
            <span className="text-xl font-bold text-blue-600">4 990 ₽</span>
            <button className="bg-blue-500 text-white text-sm px-4 py-2 rounded hover:bg-blue-600 transition">
              Купить в 1 клик
            </button>
          </div>
        </div>
        <div className="border rounded-lg p-4 shadow hover:shadow-lg transition">
          <div className="flex justify-between">
            <button className="bg-green-200 text-green-800 text-xs px-2 py-1 rounded">Новинка</button>
            <span className="bg-red-500 text-white text-xs px-2 py-1 rounded">Хит продаж</span>
          </div>
          <img
            src="https://s3-alpha-sig.figma.com/img/a018/9a0f/6872ed2beb43253323300168610c310f?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XSOwBM~RUGWFetvcibgU6K966sTbfitfi6ryrNrGxjN~taXUf2g9QN8QQNBVc8aY8IPKFI81zW4r2ZpCFVbFukBWpXWqP5ayI-lbv2RlsQRK7DiF4TMNq1NrB2YuKG4SY6K-eev6RayndCKWBhXo-7QRLF3vcJy3l~3VJ3lQtZvRcG04bIRKP6Tynhh-N6Dc2sGCJzjhLJfnrldZPNi7OQRThfwm6oJnXHaJg5sU9Ejhk9Qw2TRYPNOUHbehU1t2xfW74m-eYlf2GMOH2BWHotJwhu4ul-zuaeXv3QigT-~HRnqQpYP1VrW3lrcPjuXCw7D2bMZAT0MycVveLakuyw__"
            alt="Гироскутер"
            className="w-full h-40 object-cover rounded-lg my-4"
          />
          <h5 className="text-sm text-gray-600">Сигвеи</h5>
          <p className="text-md font-semibold mb-4">
            Гироскутер Smart Balance Well 6.5 Хип-Хоп (АКВАЗАЩИТА)
          </p>
          <div className="flex justify-between items-center">
            <span className="text-xl font-bold text-blue-600">4 990 ₽</span>
            <button className="bg-blue-500 text-white text-sm px-4 py-2 rounded hover:bg-blue-600 transition">
              Купить в 1 клик
            </button>
          </div>
        </div>
        <div className="border rounded-lg p-4 shadow hover:shadow-lg transition">
          <div className="flex justify-between">
            <button className="bg-green-200 text-green-800 text-xs px-2 py-1 rounded">Новинка</button>
            <span className="bg-red-500 text-white text-xs px-2 py-1 rounded">Хит продаж</span>
          </div>
          <img
            src="https://s3-alpha-sig.figma.com/img/a018/9a0f/6872ed2beb43253323300168610c310f?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XSOwBM~RUGWFetvcibgU6K966sTbfitfi6ryrNrGxjN~taXUf2g9QN8QQNBVc8aY8IPKFI81zW4r2ZpCFVbFukBWpXWqP5ayI-lbv2RlsQRK7DiF4TMNq1NrB2YuKG4SY6K-eev6RayndCKWBhXo-7QRLF3vcJy3l~3VJ3lQtZvRcG04bIRKP6Tynhh-N6Dc2sGCJzjhLJfnrldZPNi7OQRThfwm6oJnXHaJg5sU9Ejhk9Qw2TRYPNOUHbehU1t2xfW74m-eYlf2GMOH2BWHotJwhu4ul-zuaeXv3QigT-~HRnqQpYP1VrW3lrcPjuXCw7D2bMZAT0MycVveLakuyw__"
            alt="Гироскутер"
            className="w-full h-40 object-cover rounded-lg my-4"
          />
          <h5 className="text-sm text-gray-600">Сигвеи</h5>
          <p className="text-md font-semibold mb-4">
            Гироскутер Smart Balance Well 6.5 Хип-Хоп (АКВАЗАЩИТА)
          </p>
          <div className="flex justify-between items-center">
            <span className="text-xl font-bold text-blue-600">4 990 ₽</span>
            <button className="bg-blue-500 text-white text-sm px-4 py-2 rounded hover:bg-blue-600 transition">
              Купить в 1 клик
            </button>
          </div>
        </div>
        <div className="border rounded-lg p-4 shadow hover:shadow-lg transition">
          <div className="flex justify-between">
            <button className="bg-green-200 text-green-800 text-xs px-2 py-1 rounded">Новинка</button>
            <span className="bg-red-500 text-white text-xs px-2 py-1 rounded">Хит продаж</span>
          </div>
          <img
            src="https://s3-alpha-sig.figma.com/img/a018/9a0f/6872ed2beb43253323300168610c310f?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XSOwBM~RUGWFetvcibgU6K966sTbfitfi6ryrNrGxjN~taXUf2g9QN8QQNBVc8aY8IPKFI81zW4r2ZpCFVbFukBWpXWqP5ayI-lbv2RlsQRK7DiF4TMNq1NrB2YuKG4SY6K-eev6RayndCKWBhXo-7QRLF3vcJy3l~3VJ3lQtZvRcG04bIRKP6Tynhh-N6Dc2sGCJzjhLJfnrldZPNi7OQRThfwm6oJnXHaJg5sU9Ejhk9Qw2TRYPNOUHbehU1t2xfW74m-eYlf2GMOH2BWHotJwhu4ul-zuaeXv3QigT-~HRnqQpYP1VrW3lrcPjuXCw7D2bMZAT0MycVveLakuyw__"
            alt="Гироскутер"
            className="w-full h-40 object-cover rounded-lg my-4"
          />
          <h5 className="text-sm text-gray-600">Сигвеи</h5>
          <p className="text-md font-semibold mb-4">
            Гироскутер Smart Balance Well 6.5 Хип-Хоп (АКВАЗАЩИТА)
          </p>
          <div className="flex justify-between items-center">
            <span className="text-xl font-bold text-blue-600">4 990 ₽</span>
            <button className="bg-blue-500 text-white text-sm px-4 py-2 rounded hover:bg-blue-600 transition">
              Купить в 1 клик
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
