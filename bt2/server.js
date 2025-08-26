require('dotenv').config();
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const { sequelize } = require('./src/models');
const webRoutes = require('./src/route/web');

const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'src', 'views'));

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use('/', webRoutes);

// Kết nối DB và chạy server
async function start() {
  try {
    await sequelize.authenticate();
    console.log('✅ Kết nối MySQL thành công!');
    app.listen(PORT, () => {
      console.log(`🚀 Server đang chạy tại http://localhost:${PORT}`);
    });
  } catch (err) {
    console.error('❌ Lỗi kết nối DB:', err);
    process.exit(1);
  }
}

start();
