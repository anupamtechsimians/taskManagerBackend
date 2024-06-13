require("dotenv").config();

module.exports={
    jwt_secret:process.env.JWT_SECRET,
    s3:{
        bucket:process.env.BUCKET,
        access_key:process.env.ACCESS_KEY,
        secret_key:process.env.SECRET_KEY,
    },
    db:{string:"postgres://postgres.vcvwcxkkiqjezmzqznck:AnupamsuperbasePassword@aws-0-ap-south-1.pooler.supabase.com:6543/postgres",
      conf:{
      pool: {
        max: 10, 
        min: 0,
        acquire: 30000,
        idle: 10000
      },
      logging: true,
    }}
}