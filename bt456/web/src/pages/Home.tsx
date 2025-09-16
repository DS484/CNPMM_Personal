import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar";
import ProductGrid from "@/components/product/ProductGrid";
import { useState } from "react";

const Index = () => {
  // filter 
  const [minPrice, setMinPrice] = useState<number>(0);
  const [minStart, setMinStart] = useState<number>(0);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Banner */}
      <div className="relative bg-gradient-to-r from-violet-600 via-indigo-500 to-blue-500 border-b shadow-lg">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>

        <div className="container mx-auto px-4 py-16 relative z-10">
          <div className="text-center space-y-6">
            <h1 className="mb-4 text-3xl md:text-5xl font-extrabold bg-gradient-to-r from-white via-violet-100 to-indigo-200 bg-clip-text text-transparent drop-shadow-lg">
              Săn deal mỗi ngày, giá cực tốt
            </h1>
            <p className="mt-3 text-lg md:text-xl text-indigo-100 max-w-2xl mx-auto">
              Giảm giá <span className="font-semibold text-yellow-300">lên đến 50%</span> · Miễn phí vận chuyển 🚚
            </p>
          </div>
        </div>
      </div>


      {/* Main Content */}
      <div className="container mx-auto px-4 py-6">
        <div className="flex gap-6">
          {/* Sidebar */}
          <div className="hidden lg:block w-64 flex-shrink-0">
            <Sidebar
              minPrice={minPrice}
              setMinPrice={setMinPrice}
              minStart={minStart}
              setMinStart={setMinStart}
            />
          </div>

          {/* Products */}
          <div className="flex-1">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold">Sản phẩm nổi bật</h2>
            </div>
            <ProductGrid
              minPrice={minPrice}
              minStart={minStart}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
