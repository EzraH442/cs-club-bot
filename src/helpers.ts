import dayjs from "dayjs";
import { meetings } from "./data";

const getNextMeetingIndex = () => {
  const currentDate = dayjs();
  return meetings.findIndex((meeting) =>
    currentDate.isBefore(dayjs(meeting.date))
  );
};

export const getLastMeeting = () => {
  const currentDate = dayjs();

  // the person used the command before the first CS club meeting
  if (currentDate.isBefore(dayjs(meetings[0].date))) {
    return null;
  }

  // the person used the command after the last
  if (currentDate.isAfter(dayjs(meetings[meetings.length - 1].date))) {
    return meetings[meetings.length - 1];
  }

  return meetings[getNextMeetingIndex() - 1];
};

export const getNextMeeting = () => {
  const currentDate = dayjs();

  // the person used the command after the last
  if (currentDate.isAfter(dayjs(meetings[meetings.length - 1].date))) {
    return null;
  }

  return meetings[getNextMeetingIndex()];
};
