import { Fragment } from "react/jsx-runtime";
import { Interval, intervalDurations } from "../../utils/chart";
import { Button } from "../ui/button";

interface DurationBtnProps {
  selectedInterval: undefined | string;
  setSelectedInterval: (arg0: string) => void;
}

const timeToInterval = [
  {
    id: 1,
    name: "1 Mon",
    inter: "1mo",
    fullName: "1 Month",
  },
  {
    id: 2,
    name: "3 Mons",
    inter: "3mo",
    fullName: "3 Months",
  },
  {
    id: 3,
    name: "6 Mons",
    inter: "6mo",
    fullName: "6 Months",
  },
  {
    id: 4,
    name: "1 Yr",
    inter: "1yr",
    fullName: "1 Year",
  },
  {
    id: 5,
    name: "5 yrs",
    inter: "5yr",
    fullName: "5 Years",
  },
  {
    id: 6,
    name: "10 yrs",
    inter: "10yr",
    fullName: "10 Years",
  },
  {
    id: 7,
    name: "All",
    inter: "11yr",
  },
];

const DurationBtn = ({
  selectedInterval,
  setSelectedInterval,
}: DurationBtnProps) => {
  const IntervalBtn = ({ uInterval }) => (
    <Fragment key={uInterval.id}>
      <Button
        className={`${
          selectedInterval === uInterval.inter ? "bg-blue-500 " : ""
        } font-bold`}
        onClick={() => setSelectedInterval(uInterval.inter)}
      >
        {uInterval.name}
      </Button>
    </Fragment>
  );
  const allBtns = timeToInterval.map((uInterval) => (
    <IntervalBtn uInterval={uInterval} />
  ));
  return <div className="flex gap-2">{allBtns}</div>;
};

export default DurationBtn;
