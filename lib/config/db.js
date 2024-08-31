import mongoose from "mongoose";

export const ConnectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://black:Johnlaxtrivia8+@cluster0.snfqs.mongodb.net/blog-app"
  );
  console.log("DB Connected");
};
