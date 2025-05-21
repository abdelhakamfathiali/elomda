import React from "react";
type Props = {
  date: string;
  total: number;
  icon?: React.ReactNode;
  button?: React.ReactNode;
};

const DashboardCard = ({ date, total }: Props) => {
  return (
    <div className="bg-blue-500 h-[150px] min-w-[230px]  odd:bg-purple-500  even:bg-green-400 rounded-lg p-5 flex flex-col">
      <div className="flex justify-between items-center">
        <span className="flex justify-between items-center text-xl">
          {date}
        </span>{" "}
        <span>
          {total}
          {` $`}
        </span>
      </div>
      <div> </div>
    </div>
  );
};

export default DashboardCard;
