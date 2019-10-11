import express from 'express';
import { AppRouter } from './AppRouter';
import cookieSession from 'cookie-session';
import './controllers/RootController';
import './controllers/LoginController';

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(cookieSession({ keys: ['stayHungry'] }));
app.use(AppRouter.getInstance());

app.listen(3000, () => {
  console.log('Listening on port 3000');
});
