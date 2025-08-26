# CRUD Node.js với Express, Sequelize, MySQL (TypeScript)

## 1. Yêu cầu hệ thống

- Node.js >= 16
- MySQL server (có thể dùng Docker)
- NPM

## 2. Cài đặt

```bash
npm install
```

## 3. Cấu hình kết nối database

Sửa file `.env` với thông tin MySQL của bạn:

```env
DB_HOST=localhost
DB_PORT=3306
DB_USERNAME=root
DB_PASSWORD=123456
DB_DATABASE=user
DB_DIALECT=mysql
DB_LOGGING=false
```

## 4. Khởi tạo MySQL bằng Docker (tùy chọn)

```bash
docker run --name mysql-cnpmm -e MYSQL_ROOT_PASSWORD=123456 -e MYSQL_DATABASE=user -p 3306:3306 -d mysql:latest
```

## 5. Build và chạy ứng dụng

```bash
npm run build
npm start
```
Hoặc chạy trực tiếp bằng TypeScript:
```bash
npm run dev
```

## 6. Truy cập ứng dụng

Mở trình duyệt tại [http://localhost:3000](http://localhost:3000)

## 7. Chức năng

- Tạo, xem, sửa, xóa user
- Giao diện EJS
- Quản lý user với các trường: firstName, lastName, email, address, gender

## 8. Cấu trúc thư mục

```
src/
  controllers/      // Xử lý logic CRUD
  models/           // Định nghĩa Sequelize model
  route/            // Định nghĩa route Express
  services/         // Dịch vụ thao tác DB
  views/            // Giao diện EJS
.env                // Biến môi trường kết nối DB
server.ts           // Khởi động server
```

## 9. Ghi chú

- Bảng `Users` sẽ tự động tạo khi chạy lần đầu (nếu chưa có).
- Nếu muốn dùng migration, chạy lệnh với `sequelize-cli`.
- Đảm bảo MySQL đã chạy và đúng thông tin kết nối.

---

**Liên hệ:** Nếu gặp lỗi, kiểm tra lại cấu hình `.env` và trạng thái MySQL.