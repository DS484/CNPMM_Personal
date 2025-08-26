import dotenv from 'dotenv';
dotenv.config();
import path from 'path';
import express, { Express } from 'express';
import bodyParser from 'body-parser';
import { sequelize } from './src/models';
import webRoutes from './src/route/web';

const app: Express = express();
const PORT = process.env.PORT ? Number(process.env.PORT) : 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'src', 'views'));

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', webRoutes);

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
