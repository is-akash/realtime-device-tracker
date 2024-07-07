import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";

dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

// get method
app.get("/", (req, res) => {
    res.send({ welcome: "Akash Debnath" });
});

// server listen
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server Port: ${PORT}`));
