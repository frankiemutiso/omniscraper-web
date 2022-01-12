export const calculateTimeSinceSave = (video) => {
  const dateNow = Date.parse(new Date());
  const dateSaved = Date.parse(video.date_saved_utc);
  const timeLapse = dateNow - dateSaved;

  if (timeLapse > 0 && timeLapse < 60000) {
    const lapseInSeconds = Math.floor(timeLapse / 1000);

    const lapseInSecondsStr = `${lapseInSeconds} ${
      lapseInSeconds === 1 ? "second" : "seconds"
    } ago`;

    return lapseInSecondsStr;
  } else if (timeLapse >= 60000 && timeLapse < 3600000) {
    const lapseInMinutes = Math.floor(timeLapse / 60000);

    const lapseInMinutesStr = `${lapseInMinutes} ${
      lapseInMinutes === 1 ? "minute" : "minutes"
    } ago`;

    return lapseInMinutesStr;
  } else if (timeLapse >= 3600000 && timeLapse < 86400000) {
    const lapseInHours = Math.floor(timeLapse / 3600000);

    const lapseInHoursStr = `${lapseInHours} ${
      lapseInHours === 1 ? "hour" : "hours"
    } ago`;

    return lapseInHoursStr;
  } else if (timeLapse >= 86400000 && timeLapse < 604800000) {
    const lapseInDays = Math.floor(timeLapse / 86400000);

    const lapseInDaysStr = `${lapseInDays} ${
      lapseInDays === 1 ? "day" : "days"
    } ago`;

    return lapseInDaysStr;
  } else if (timeLapse >= 604800000 && timeLapse < 2629746000) {
    const lapseInWeeks = Math.floor(timeLapse / 604800000);

    const lapseInWeeksStr = `${lapseInWeeks} ${
      lapseInWeeks === 1 ? "week" : "weeks"
    } ago`;

    return lapseInWeeksStr;
  } else if (timeLapse >= 2629746000 && timeLapse < 31556952000) {
    const lapseInMonths = Math.floor(timeLapse / 2629746000);

    const lapseInMonthsStr = `${lapseInMonths} ${
      lapseInMonths === 1 ? "month" : "months"
    } ago`;

    return lapseInMonthsStr;
  } else if (timeLapse >= 31556952000) {
    const lapseInYears = Math.floor(timeLapse / 31556952000);

    const lapseInYearsStr = `${lapseInYears} ${
      lapseInYears === 1 ? "year" : "years"
    } ago`;

    return lapseInYearsStr;
  }
};
