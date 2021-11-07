import type { VFC } from "react";
import CalendarHeatmap from "react-calendar-heatmap";
import ReactTooltip from "react-tooltip";

import "react-calendar-heatmap/dist/styles.css";
import styles from "./index.module.css";

const today = new Date();

interface DateAndCount {
  date: Date;
  count: number;
}

const Calendar: VFC = () => {
  const randomValues = getRange(365).map((index) => {
    return {
      date: shiftDate(today, -index),
      count: getRandomInt(0, 5),
    };
  });

  return (
    <>
      <div className={styles.calendar}>
        <CalendarHeatmap
          startDate={shiftDate(today, -364)}
          endDate={today}
          values={
            randomValues
            //   [
            //   { date: "2021-07-03", count: 1 },
            //   { date: "2021-08-22", count: 2 },
            //   { date: "2021-07-29", count: 4 },
            //   { date: "2021-10-01", count: 1 },
            //   { date: "2021-10-03", count: 2 },
            //   { date: "2021-10-06", count: 3 },
            //   { date: "2021-10-10", count: 4 },
            //   { date: "2021-10-07", count: 5 },
            //   { date: "2021-09-15", count: 4 },
            //   { date: "2021-11-06", count: 0 },
            //   // ...and so on
            // ]
          }
          classForValue={
            (value: DateAndCount) => {
              switch(value.count) {
                case 0 :
                  return styles.colorGrass0
                case 1 : 
                  return styles.colorGrass1
                case 2 : 
                  return styles.colorGrass2
                case 3 : 
                  return styles.colorGrass3
                case 4 : 
                  return styles.colorGrass4
                case 5 : 
                  return styles.colorGrass5
              }
            }
          }
          tooltipDataAttrs={(value: DateAndCount) => {
            return {
              "data-tip": `${value.date
                .toISOString()
                .slice(0, 10)} has count: ${value.count}`,
            };
          }}
          showWeekdayLabels={true}
          onClick={(value:DateAndCount) =>
            alert(`Clicked on value with count: ${value.count}`)
          }
        />
        <ReactTooltip />
      </div>
    </>
  );
};

export { Calendar };

const shiftDate = (date: Date, numDays: number): Date => {
  const newDate = new Date(date);
  newDate.setDate(newDate.getDate() + numDays);
  return newDate;
};

const getRange = (count: number): number[] => {
  return Array.from({ length: count }, (_, i) => i);
};

const getRandomInt = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
