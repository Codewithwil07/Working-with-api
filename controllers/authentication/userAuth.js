import { Op } from 'sequelize';
import User from './../../model/user.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

class userAuthentication {
  static async login(req, res) {
    const { username, password } = req.body;
    const user = await User.findOne({
      where: { [Op.or]: [{ username: username }, { email: username }] },
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

  static async me(req, res) {
    const userId = req.userId;
    const user = await User.findOne({ where: { id: userId } });
    res.json(user);
  }
}

export default userAuthentication;
