import React from "react";
import { MehIcon } from "lucide-react";
import { Timeline } from "../ui/timeline";
import CardTimeline from "../fragment/CardTimeline";
import TaskFilterTitle from "../common/TaskFilterTitle";

const CardScroollTimeline = ({ task, className, filter, filterDate }) => {
  return (
    <div>
      <div className={` flex gap-4 ${className} `}>
        {task.length === 0 ? (
          <div className="text-white mt-36 rounded-lg flex justify-center w-full gap-2 flex-col items-center">
            <MehIcon className="w-24 h-24 text-primary" />
            <span className="font-bold text-2xl text-primary">No Task</span>
          </div>
        ) : (
          <Timeline
            data={task
              .slice()
              .sort((a, b) => a.startTime.localeCompare(b.startTime))
              .map((item) => ({
                title: `${item.startTime} - ${item.endTime}`,
                content: <CardTimeline item={item} />,
              }))}
          >
            <TaskFilterTitle filter={filter} filterDate={filterDate} />
          </Timeline>
        )}
      </div>
    </div>
  );
};

export default CardScroollTimeline;
