const User = require('../../models/User');

const me= async (req, res, next) => {
  
    try {
      const user = await User.findByPk(req.user.id);
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
      res.json(user);
    } catch (err) {
      next(err);
    }
  };

  module.exports = me;