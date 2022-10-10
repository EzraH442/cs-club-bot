import { makeCodeforcesApiCall } from "./auth";
import { Contest, Problem, RanklistRow } from "./types";

const EXEC_USERNAME = "haochenkang";

const getGymContests = () =>
  makeCodeforcesApiCall("/contest.list", { gym: true })
    .then((data) => data.data.result as Contest[])
    .then((results) =>
      results.filter((e: any) => e.preparedBy === EXEC_USERNAME)
    );

const getContestInfo = (contestId: number) =>
  makeCodeforcesApiCall("/contest.standings", {
    contestId,
    from: 1,
    count: 10,
  }).then(
    (data) =>
      data.data.result as {
        contest: Contest;
        problems: Problem[];
        rows: RanklistRow[];
      }
  );

const getTopTenParticipants = (contestId: number) =>
  getContestInfo(contestId).then((results) => {
    console.log(results);
    return results.rows.map((row) => {
      const handle = row.party.members[0].handle; // assume one part
      const points = row.points;
      const penalty = row.penalty;
      return {
        handle,
        points,
        penalty,
      };
    });
  });

export { getGymContests, getContestInfo, getTopTenParticipants };
