import type { VercelRequest, VercelResponse } from "@vercel/node";
import { ResponseListType } from "../src/Types/MovieTypes";
import axios from "axios";

const { API_KEY } = process.env;

export default async function (req: VercelRequest, res: VercelResponse) {
  const { title, page } = req.query;
  const resValue: ResponseListType = await axios
    .get(`https://omdbapi.com/?apikey=${API_KEY}&s=${title}&page=${page}`)
    .then((res) => res.data);

  res.status(200).json(resValue);
}
