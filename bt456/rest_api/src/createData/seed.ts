import Product from "../models/Product";
import { connectDB } from "../config/db";
import elasticsearchService from "../service/elasticSearch.service";
import removeAccents from "remove-accents";
import 'dotenv/config';

// Danh sách tên sản phẩm ý nghĩa
const productNames = [
  "Áo thun nam cao cấp",
  "Giày thể thao nữ thời trang",
  "Balo laptop chống nước",
  "Tai nghe bluetooth không dây",
  "Đồng hồ thông minh đa chức năng",
  "Bình giữ nhiệt inox 500ml",
  "Sách kỹ năng sống",
  "Chuột gaming LED RGB",
  "Bàn phím cơ mini",
  "Kem chống nắng SPF50",
  "Son môi dưỡng ẩm",
  "Sữa rửa mặt thiên nhiên",
  "Nước hoa nam quyến rũ",
  "Nước hoa nữ dịu nhẹ",
  "Áo khoác gió unisex",
  "Quần jeans rách cá tính",
  "Túi xách nữ công sở",
  "Mũ bảo hiểm 3/4",
  "Bộ dụng cụ sửa chữa đa năng",
  "Ổ cắm điện thông minh",
  "Đèn bàn học chống cận",
  "Bộ đồ chơi xếp hình cho bé",
  "Sữa tắm hương hoa",
  "Bộ chăn ga gối cotton",
  "Bình đun siêu tốc",
  "Máy xay sinh tố mini",
  "Bộ nồi inox 5 món",
  "Bộ dao kéo nhà bếp",
  "Bộ ly thủy tinh cao cấp",
  "Bộ dụng cụ trang điểm",
  "Bàn học sinh thông minh",
  "Ghế gaming chuyên nghiệp",
  "Bộ phát wifi di động",
  "Pin sạc dự phòng 10000mAh",
  "Cáp sạc nhanh USB-C",
  "Ốp lưng điện thoại chống sốc",
  "Giá đỡ điện thoại đa năng",
  "Loa bluetooth mini",
  "Máy lọc không khí gia đình",
  "Quạt tích điện mini",
  "Bộ dụng cụ vẽ màu nước",
  "Sách luyện thi đại học",
  "Bộ đồ thể thao nam",
  "Bộ đồ thể thao nữ",
  "Áo sơ mi nam công sở",
  "Áo sơ mi nữ thanh lịch",
  "Giày lười nam da thật",
  "Giày cao gót nữ sang trọng",
  "Balo du lịch chống thấm",
  "Bộ đồ ngủ cotton",
  "Bộ đồ ngủ lụa cao cấp",
  "Bộ đồ bơi nữ",
  "Bộ đồ bơi nam",
  "Bộ đồ tập gym nữ",
  "Bộ đồ tập gym nam",
  "Bộ đồ yoga nữ",
  "Bộ đồ yoga nam",
  "Bộ đồ trẻ em mùa hè",
  "Bộ đồ trẻ em mùa đông",
  "Bộ đồ chơi giáo dục",
  "Bộ đồ chơi sáng tạo",
  "Bộ đồ chơi vận động",
  "Bộ đồ chơi trí tuệ",
  "Bộ đồ chơi nghệ thuật",
  "Bộ đồ chơi khoa học",
  "Bộ đồ chơi xây dựng",
  "Bộ đồ chơi lắp ráp",
  "Bộ đồ chơi mô hình",
  "Bộ đồ chơi xe hơi",
  "Bộ đồ chơi máy bay",
  "Bộ đồ chơi tàu hỏa",
  "Bộ đồ chơi robot",
  "Bộ đồ chơi búp bê",
  "Bộ đồ chơi siêu nhân",
  "Bộ đồ chơi động vật",
  "Bộ đồ chơi nấu ăn",
  "Bộ đồ chơi bác sĩ",
  "Bộ đồ chơi kỹ sư",
  "Bộ đồ chơi lính cứu hỏa",
  "Bộ đồ chơi cảnh sát",
  "Bộ đồ chơi thám tử",
  "Bộ đồ chơi nhà khoa học",
  "Bộ đồ chơi phi hành gia",
  "Bộ đồ chơi thợ xây",
  "Bộ đồ chơi thợ mộc",
  "Bộ đồ chơi thợ điện",
  "Bộ đồ chơi thợ máy",
  "Bộ đồ chơi thợ sửa xe",
  "Bộ đồ chơi thợ làm vườn",
  "Bộ đồ chơi thợ nấu ăn",
  "Bộ đồ chơi thợ làm bánh",
  "Bộ đồ chơi thợ trang điểm",
  "Bộ đồ chơi thợ làm tóc",
  "Bộ đồ chơi thợ may",
  "Bộ đồ chơi thợ kim hoàn",
  "Bộ đồ chơi thợ xây dựng",
  "Bộ đồ chơi thợ lắp ráp",
  "Bộ đồ chơi thợ chế tạo"
];

async function seed() {
  await connectDB();

  // Tạo 100 sản phẩm với tên ý nghĩa, lặp lại nếu thiếu tên
  const sampleProducts = Array.from({ length: 100 }).map((_, i) => {
    const name = removeAccents(productNames[i % productNames.length]).toLowerCase();
    const basePrice = Math.floor(Math.random() * 2000000) + 100000;
    const discount = Math.random() > 0.5 ? Math.floor(Math.random() * 40) + 10 : undefined;
    const originalPrice = discount ? basePrice + (basePrice * discount) / 100 : undefined;

    return {
      name,
      price: basePrice,
      originalPrice,
      image: `https://picsum.photos/300/300?random=${i + 100}`,
      rating: Number((Math.random() * 2 + 3).toFixed(1)),
      sold: Math.floor(Math.random() * 1000),
      discount
    };
  });

  // Lưu và index song song bằng Promise.all
  await Promise.all(
    sampleProducts.map(async (product) => {
      const prodDoc = new Product(product);
      await prodDoc.save();
      await elasticsearchService.index('products', prodDoc.id.toString(), product);
      console.log(`✅ Seeded & indexed: ${product.name}`);
    })
  );

  console.log("🌱 Seeded 100 sample products (Mongo + ES)");
  process.exit();
}

seed().catch((err) => {
  console.error("❌ Error seeding:", err);
  process.exit(1);
});