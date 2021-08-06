import { Router } from "express";
const router = Router();

//Componetns
import { Root } from "./root";

router.get("/", Root);

export { router };
