import { differenceInYears, formatDuration } from "date-fns";

export const getExperienceDuration = () => {
  const today = new Date();
  const init = new Date(2018, 1, 1);
  const years = differenceInYears(today, init);

  return formatDuration({ years });
};

export const getAge = () => {
  const birthdate = new Date("1984-09-05T06:00:00+0200");
  const today = new Date();
  const age = differenceInYears(today, birthdate);

  if (Number.isNaN(age)) {
    // date fns seems to fail in safari
    const month = today.getMonth() + 1;
    const day = today.getDay();
    const safariAge = today.getFullYear() - 1984;

    return month >= 9 && day >= 5 ? safariAge : safariAge - 1;
  }

  return age;
};
