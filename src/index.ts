import express from 'express';
import { AppRouter } from './AppRouter';
import './controllers/RootController';

const app = express();
app.use(AppRouter.getInstance());

app.listen(3000, () => {
  console.log('Listening on port 3000');
});
