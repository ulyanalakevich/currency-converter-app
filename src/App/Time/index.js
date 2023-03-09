import "./style.css";
import React, { useState, useEffect } from "react";

export const Time = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const intervalID = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => {
            clearInterval(intervalID);
        };
    }, []);

    return (
        <div className="time">
            Dzisiaj jest
            {" "}
            {time.toLocaleString("PL", { weekday: "long", day: "numeric", month: "long", year: "numeric" })}
        </div>
    )
}
