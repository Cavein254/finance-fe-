import { Interval, intervalDurations } from "../../utils/chart";
import { Button } from "../ui/button";

interface DurationBtnProps {
  selectedInterval: undefined | string;
  setSelectedInterval: (arg0: string) => void;
}

const DurationBtn = ({
  selectedInterval,
  setSelectedInterval,
}: DurationBtnProps) => {
  console.log(selectedInterval);
  return (
    <div className="flex gap-2">
      <Button className="font-bold" onClick={() => setSelectedInterval("1mo")}>
        1 Mon
      </Button>
      <Button className="font-bold">3 Mon</Button>
      <Button className="font-bold">6 Mon</Button>
      <Button className="font-bold">1 Year</Button>
      <Button className="font-bold">5 Years</Button>
      <Button className="font-bold">All</Button>
    </div>
  );
};

export default DurationBtn;
