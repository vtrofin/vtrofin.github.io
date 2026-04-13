import { differenceInYears, formatDuration } from "date-fns";

export const getExperienceDuration = () => {
  const today = new Date();
  const init = new Date(2018, 1, 1);
  const years = differenceInYears(today, init);

  return formatDuration({ years });
};
