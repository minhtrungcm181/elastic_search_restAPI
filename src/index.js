import cors from "cors";
import express from "express";
import rootRouter from "./route/rootRouter.js";
const app = express();


app.use(express.json());
app.use(
  cors({
    origin: "*", // tất cả domain truy cập
  })
);

// khởi tạo server BE chạy bằng framework Express
app.listen(8080);

app.get("/", (request, response) => {
  response.status(202).send("hello world");
});

app.use(rootRouter);