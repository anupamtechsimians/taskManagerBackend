const bcrypt = require("bcrypt");
const UserOtp = require("../../models/UserOtp");
const User = require("../../models/User");

const findAccount = async (req, res, next) => {
  try {
    const { email } = req.body;
    const emailExist = await User.findOne({ where: { email: email } });
    if (!emailExist) {
      return res.status(400).json({ message: "user not exist" });
    }
    const randomNumber = Math.floor(Math.random() * 1000000);

    const otp = randomNumber.toString().padStart(6, "0");
    const otpRecord = await UserOtp.findOne({
      where: { user_id: emailExist.id },
    });
    if (otpRecord) {
      await UserOtp.update({ otp,isVerified:false }, { where: { user_id: emailExist.id } });
    } else {
      await UserOtp.create({ user_id: emailExist.id, otp });
    }
    // sendMail({
    //   to: email,
    //   subject: "One-Time Password (OTP) for Password Reset",
    //   html: `Dear ${emailExist.name},<br><br>We have received a request to reset your account password. To proceed,
    //   please use the following One-Time Password (OTP) to verify your identity<br><br>
    //   OTP :${otp}<br><br>
    //   This OTP is valid for a single use and will expire in 5 min. Please enter it on our platform to reset your password.
    //   <br><br>Thank you for using our services.<br><br> Your-dms`,
    // });
    return res.status(200).json({ message: "otp sent on email" });
  } catch (err) {
      next(err);
  }
};
const validateOtp = async (req, res,next) => {
  try {
    const { otp, email, password } = req.body;
    const emailExist = await User.findOne({ where: { email: email } });
    if (!emailExist) {
      return res.status(400).json({ message: "User not exist" });
    }

    const otpRecord = await UserOtp.findOne({
      where: { user_id: emailExist.id },
    });
    if (otpRecord && otpRecord.otp === otp) {
        await UserOtp.update({isVerified:true},{
            where: { user_id: emailExist.id },
          });
        return res.status(200).json({ message: "Otp matched" });
    } else {
      return res.status(400).json({ message: "Invalid OTP. Please try again" });
    }
  } catch (err) {
    next(err);
  }
};


const resetPassword2 = async (req, res,next) => {
  try {
    const { email, password } = req.body;
    const emailExist = await User.findOne({ where: { email: email } });
    if (!emailExist) {
      return res.status(400).json({ message: "User not exist" });
    }

    const otpRecord = await UserOtp.findOne({
      where: { user_id: emailExist.id,isVerified:true },
    });
    if (otpRecord ) {
      const hashedPassword = await bcrypt.hash(password, 10);
      await User.update(
        { password: hashedPassword },
        { where: { id: emailExist.id } }
      );
    } else {
      return res.status(400).json({ message: "Otp not verified" });
    }
    // sendMail({
    //   to: email,
    //   subject: "password reset",
    //   html: `Dear ${
    //     emailExist.name
    //   },<br> Password reset for your Dms was succesfull. on ${new Date()}`,
    // });
    return res.status(200).json({ message: "password reset successfully" });
  } catch (err) {
   next(err);
  }
};
const resetPasswordWithPassword = async (req, res,next) => {
  try {
    const {id} = req.user
    const { oldPassword, newPassword } = req.body;
    const user = await User.findOne({ where: { id: id } });
    if (!user) {
      return res.status(400).json({ message: "User not exist" });
    }
    else {
        const isPasswordValid = await bcrypt.compare(oldPassword, user.password);
        if(!isPasswordValid){
            return res.status(400).json({message:"incorrect old password"})
        }
      const hashedPassword = await bcrypt.hash(newPassword, 10);
      await User.update(
        { password: hashedPassword },
        { where: { id: id } }
      );
    } 
    // sendMail({
    //   to: user.email,
    //   subject: "password reset",
    //   html: `Dear ${
    //     user.name
    //   },<br> Password reset for your Dms was succesfull. on ${new Date()}`,
    // });
    return res.status(200).json({ message: "password reset successfully" });
  } catch (err) {
    next(err)
  }
};

module.exports = { findAccount, validateOtp, resetPassword2,resetPasswordWithPassword };
