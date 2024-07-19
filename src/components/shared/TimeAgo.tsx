import { useEffect, useState } from "react";

function getTimeAgo(data: Date): string {
  const now = new Date();
  const timeDefrence = now.getTime() - data.getTime();
  const seconds = Math.floor(timeDefrence / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  if (days > 7) {
    return data.toLocaleDateString();
  } else if (days > 1) {
    return `${days} days ago`;
  } else if (hours >= 1) {
    return `${hours} hours ago`;
  } else if (minutes > 1) {
    return `${minutes} minutes ago`;
  } else {
    return `${seconds} seconds ago`;
  }
}

export const TimeAgo = ({ dateString }: { dateString: string }) => {
  const [timeAgo, setTimeAgo] = useState("");
  useEffect(() => {
    const updateTimeAgo = () => {
      setTimeAgo(getTimeAgo(new Date(dateString)));
    };

    updateTimeAgo();

    const intervalId = setInterval(updateTimeAgo, 60000);

    return () => clearInterval(intervalId);
  }, [dateString]);

  return <>{timeAgo}</>;
};

export default getTimeAgo;
