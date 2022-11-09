interface Meeting {
  // YYYY-MM-DD or YYYYMMDD
  date: string;

  slidesLink: string | null;
  gymLink: string | null;
}

const meetings: Meeting[] = [
  {
    date: "20221008",
    slidesLink: null,
    gymLink:
      "https://codeforces.com/contestInvitation/48f075950994084e022b4a2eb69b9be1d118dba8",
  },
  {
    date: "20221014",
    slidesLink:
      "https://docs.google.com/presentation/d/18lyzxA8Vk_yZUFLdrHtj-h_IdQmxWms-kgt19qTWD9I/edit?usp=sharing",
    gymLink:
      "https://codeforces.com/contestInvitation/48f075950994084e022b4a2eb69b9be1d118dba8",
  },
  {
    date: "20221021",
    slidesLink:
      "https://docs.google.com/presentation/d/1TiBphwP4SWQFurJkFruVEnCJJ42K_aOAlUGYcRReIUY/edit?usp=sharing",
    gymLink:
      "https://codeforces.com/contestInvitation/48f075950994084e022b4a2eb69b9be1d118dba8",
  },
  {
    date: "20221104",
    slidesLink:
      "https://docs.google.com/presentation/d/1QO0ir7D04oZEwlt5zd3F2-fmS4EPPMA8JYFM3NLCoEE/edit?usp=sharing",
    gymLink:
      "https://codeforces.com/contestInvitation/83fe6f7119413126cf367cc3f2767979c3cbbc85",
  },
  {
    date: "20221118",
    slidesLink: null,
    gymLink: null,
  },
  {
    date: "20221202",
    slidesLink: null,
    gymLink: null,
  },
  {
    date: "20221209",
    slidesLink: null,
    gymLink: null,
  },
  {
    date: "20221216",
    slidesLink: null,
    gymLink: null,
  },
  {
    date: "20230210",
    slidesLink: null,
    gymLink: null,
  },
  {
    date: "20230224",
    slidesLink: null,
    gymLink: null,
  },
  {
    date: "20230303",
    slidesLink: null,
    gymLink: null,
  },
  {
    date: "20230317",
    slidesLink: null,
    gymLink: null,
  },
  {
    date: "20230414",
    slidesLink: null,
    gymLink: null,
  },
  {
    date: "20230421",
    slidesLink: null,
    gymLink: null,
  },
  {
    date: "20230428",
    slidesLink: null,
    gymLink: null,
  },
  {
    date: "20230512",
    slidesLink: null,
    gymLink: null,
  },
  {
    date: "20230519",
    slidesLink: null,
    gymLink: null,
  },
  {
    date: "20230525",
    slidesLink: null,
    gymLink: null,
  },
  {
    date: "20230602",
    slidesLink: null,
    gymLink: null,
  },
];

export { meetings, Meeting };
