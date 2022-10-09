import { makeCodeforcesApiCall } from "./auth";

const EXEC_USERNAME = "haochenkang";

const getGymContests = () => {
  return makeCodeforcesApiCall("/contest.list", { gym: true })
    .then((data) => data.data.result)
    .then((results: any[]) =>
      results.filter((e: any) => e.preparedBy === EXEC_USERNAME)
    )
    .catch((e) => {
      console.log(e);
    });
};

const getContestInfo = (contestId: number) => {
  return makeCodeforcesApiCall("/contest.standings", {
    contestId,
    from: 1,
    count: 10,
  })
    .then((data) => data.data.result)
    .catch((e) => {
      console.log(e);
    });
};

export { getGymContests, getContestInfo };
