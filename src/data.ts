const meetingDates = [
    "20221014", 
    "20221021", 
    "20221104", 
    "20221118", 
    "20221202", 
    "20221209", 
    "20221216", 
    "20230210",
    "20230224",
    "20230303",
    "20230317",
    "20230414",
    "20230421",
    "20230428",
    "20230512",
    "20230519",
    "20230525",
    "20230602",
]

interface Meeting {
    date: string;
    slidesLink: string;
}

const meetings: Meeting[] = [
    {
        date : "20221008",
        slidesLink: "There has not been a meeting yet.",
    },
    {
        date : "20221014",
        slidesLink: "https://docs.google.com/presentation/d/18lyzxA8Vk_yZUFLdrHtj-h_IdQmxWms-kgt19qTWD9I/edit?usp=sharing",
    },
    {
        date : "20221021",
        slidesLink: "Slides unavailable",
    },
    {
        date : "20221104",
        slidesLink: "Slides unavailable",
    },
    {
        date : "20221118",
        slidesLink: "Slides unavailable",
    },
    {
        date : "20221202",
        slidesLink: "Slides unavailable",
    },
    {
        date : "20221209",
        slidesLink: "Slides unavailable",
    },
    {
        date : "20221216",
        slidesLink: "Slides unavailable",
    },
    {
        date : "20230210",
        slidesLink: "Slides unavailable",
    },
    {
        date : "20230224",
        slidesLink: "Slides unavailable",
    },
    {
        date : "20230303",
        slidesLink: "Slides unavailable",
    },
    {
        date : "20230317",
        slidesLink: "Slides unavailable",
    },
    {
        date : "20230414",
        slidesLink: "Slides unavailable",
    },
    {
        date : "20230421",
        slidesLink: "Slides unavailable",
    },
    {
        date : "20230428",
        slidesLink: "Slides unavailable",
    },
    {
        date : "20230512",
        slidesLink: "Slides unavailable",
    },
    {
        date : "20230519",
        slidesLink: "Slides unavailable",
    },
    {
        date : "20230525",
        slidesLink: "Slides unavailable",
    },
    {
        date : "20230602",
        slidesLink: "Slides unavailable",
    },
]

const months = ["", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

export { meetingDates, months, meetings };
