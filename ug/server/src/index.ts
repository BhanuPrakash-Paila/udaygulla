import mongoose from "mongoose";
import { app } from "./app.js";
import { env } from "./config/env.js";
mongoose
  .connect(env.MONGODB_URI)
  .then(() => app.listen(env.PORT, () => console.log(`API listening on ${env.PORT}`)))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
