import { useEffect, useState } from "react";

export const TodoDate = () => {
  const [dateTime, setDateTime] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const formateDate = now.toLocaleDateString();
      const formateTime = now.toLocaleTimeString();

      setDateTime(`${formateDate} - ${formateTime}`);
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  return <h2 className="date-time">{dateTime}</h2>;
};
