import axios from "axios";
import { createHash } from "crypto";

const BASE_URL = "https://codeforces.com/api";
const SECRET = process.env.CF_SECRET!;
const ID = process.env.CF_ID!;

const computeSignature = (text: string) => {
  return createHash("sha512").update(text).digest("hex");
};

const getUNIXTime = () => Math.floor(Date.now() / 1000).toString();

const randomSixDigits = () =>
  Math.floor(100000 + Math.random() * 900000).toString();

type Params = Record<string, string | number | boolean>;

const sortParams = (params: Params) => {
  const sorted: Record<string, string> = {};

  [...Object.keys(params)].sort().forEach((k) => {
    sorted[k] = params[k].toString();
  });

  return sorted;
};

const makeCodeforcesApiCall = (path: string, params: Params) => {
  const random = randomSixDigits();

  const codeforcesParams: Params = {
    apiKey: ID,
    time: getUNIXTime(),
    ...params,
  };

  const sorted = sortParams(codeforcesParams);

  const hashParams = new URLSearchParams(sorted).toString();
  const signatureHashText = `${random}${path}?${hashParams}#${SECRET}`;
  const sig = computeSignature(signatureHashText);

  codeforcesParams.apiSig = `${random}${sig}`;

  const finalParams = sortParams(codeforcesParams);

  return axios.get(`${BASE_URL}${path}`, { params: finalParams });
};

export { makeCodeforcesApiCall };
