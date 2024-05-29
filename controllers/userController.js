import bcrypt from 'bcrypt';
import User from '../model/user.js';
import { where } from 'sequelize';

class UserController {
  static async store(req, res) {
    let { username, password, email } = req.body;
    password = bcrypt.hashSync(password, 10);

    const user = await User.create({ username, password, email });
    res.json(user);
  }

  static async get(req, res) {
    const users = await User.findAll();
    res.json(users);
  }

  static async detail(req, res) {
    const user = await User.findOne({ where: { id: req.params.id } });
    res.json(user);
  }

  static async update(req, res) {
    let { username, email, password } = req.body;
    password = bcrypt.hashSync(password, 10);

    const user = await User.update(
      { username, email, password },
      { where: { id: req.params.id } }
    );
    res.json(user);
  }

  static async delete(req, res) {
    const user = await User.destroy({ where: { id: req.params.id } });
    res.send(user)
  }
}

export default UserController;
