import { Op } from 'sequelize';
import User from './../../model/user.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

class userAuthentication {

  static async login(req, res) {
    const { username, password } = req.body;
    const user = User.findOne({
      where: { [Op.or]: [{ username: username }, { password: password }] },
    });

    if (user == null) {
      return res.json({ eror: 'User not found' });
    }

    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) {
      return res.json({ eror: 'Password Salah' });
    }

    const token = jwt.sign({ userId: user.id }, 'secret', { expiresIn: '1h' });
    return res.json({ accesToken: token });
  }
}

export default userAuthentication;
