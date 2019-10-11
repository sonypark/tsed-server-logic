import { Request, Response, NextFunction } from 'express';
import { get, controller, use, post } from '../decorators';

const logger = (req: Request, res: Response, next: NextFunction) => {
  console.log('Request was made!');
  next();
};

@controller('/auth')
class LoginController {
  @get('/login')
  @use(logger)
  getLogin(req: Request, res: Response): void {
    res.send(`
    <form method="POST">
      <div>
        <label>Email</label>
        <input name="email" />
      </div>
      <div>
        <label>Password</label>
        <input name="password" type="password"/>
      </div>
      <button>Submit</button>
    </form>
    `);
  }

  @post('/login')
  postLogin(req: Request, res: Response) {
    const { email, password } = req.body;

    if (email === 'sony@sony.com' && password === 'password') {
      req.session = { loggedIn: true };
      res.redirect('/');
    } else {
      res.send('Invalid email or password');
    }
    res.send(`${email} + ${password}`);
  }

  @get('/logout')
  getLogout(req: Request, res: Response) {
    req.session = undefined;
    res.redirect('/');
  }
}
