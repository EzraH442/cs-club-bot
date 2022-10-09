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

const sortParams = (params: Record<string, string | number | boolean>) => {
  const sorted: Record<string, string> = {};

  [...Object.entries(params)]
    .sort((a, b) => {
      if (a[0] > b[0]) return 1;
      else if (a[0] > b[0]) return -1;
      return 0;
    })
    .forEach(([k, v]) => {
      sorted[k] = v.toString();
    });

  return sorted;
};

const makeCodeforcesApiCall = (
  path: string,
  params: Record<string, string | boolean | number>
) => {
  const random = randomSixDigits();

  const codeforcesParams: Record<string, any> = {
    apiKey: ID,
    time: getUNIXTime(),
    ...params,
  };

  const sorted = sortParams(codeforcesParams);

  const hashParams = new URLSearchParams(sorted).toString();

  const sig = computeSignature(
    `${random}/${BASE_URL}${path}?${hashParams}#${SECRET}`
  );

  codeforcesParams.apiSig = `${random}${sig}`;

  const finalParams = sortParams(codeforcesParams);

  console.log(new URLSearchParams(finalParams).toString());

  return axios.get(`${BASE_URL}${path}`, { params: finalParams });
};

export { makeCodeforcesApiCall };
