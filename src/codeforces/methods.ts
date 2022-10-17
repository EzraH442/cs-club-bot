import { textChangeRangeNewSpan } from "typescript";
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
    count: 50,
  }).then(
    (data) =>
      data.data.result as {
        contest: Contest;
        problems: Problem[];
        rows: RanklistRow[];
      }
  );

const getParticipants = (contestId: number) =>
  getContestInfo(contestId).then((results) => {
    return results.rows.map((row) => {
      return {
        handle: row.party.members[0].handle,
        points: row.points,
      };
    });
  });

const getStandings = () => {
  return getGymContests()
    .then((contests) =>
      contests.filter((c) => !!c.startTimeSeconds && c.name.includes("WCHS"))
    )
    .then(async (contests) => {
      let standings: Record<string, number> = {};
      await Promise.all(
        contests.map((contest) => getContestInfo(contest.id))
      ).then((results) => {
        results.map((result) => {
          result.rows.forEach((row) => {
            const handle = row.party.members[0].handle;
            const score = row.points;
            standings[handle] = !!standings[handle]
              ? standings[handle] + score
              : score;
          });
        });
      });
      return standings;
    });
};

export { getGymContests, getContestInfo, getParticipants, getStandings };
