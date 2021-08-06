import { Request, Response } from "express";

export const Root = (_: Request, res: Response) => {
  res.json({ msg: "This is coming from root" });
};
