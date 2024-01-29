// server/routes/resetPasswordRoute.js
import Express from 'express';
import jwt from 'jsonwebtoken';
import { UserModel } from '../mongodb/models/Users.js';

const router = Express.Router();

router.post('/forgot-password', async (req, res) => {
  const { email } = req.body;
  try {
    const user = await UserModel.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const token = jwt.sign({ userId: user._id }, 'reset-password-secret', {
      expiresIn: '1h', // Token de expiração de 1 hora
    });

    // Aqui você enviará o token por e-mail para o usuário, pode usar um serviço de e-mail como Nodemailer

    res.json({ message: 'Token sent to your email' });
  } catch (error) {
    console.error('Error sending reset password token:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

router.post('/reset-password', async (req, res) => {
  const { token, newPassword } = req.body;
  try {
    const decoded = jwt.verify(token, 'reset-password-secret');
    const user = await UserModel.findById(decoded.userId);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Atualizar a senha do usuário
    user.password = newPassword;
    await user.save();

    res.json({ message: 'Password reset successful' });
  } catch (error) {
    console.error('Error resetting password:', error);
    res.status(400).json({ message: 'Invalid or expired token' });
  }
});

export { router as resetPasswordRouter };
