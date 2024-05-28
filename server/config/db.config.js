import mongoose from "mongoose";

export const connectionDB = async () => {
  try {
    await mongoose
      .connect(process.env.openUri)
      .then(() => console.log("DB CONNECTED"));
  } catch (error) {
    console.log(error);
  }
};
