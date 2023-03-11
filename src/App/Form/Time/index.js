import { Content } from "./styled";
import { useState, useEffect } from "react";

export const Time = () => {
    const [time, setTime] = useState(new Date());

    const timeString = (time) =>
        time.toLocaleString("PL", {
            weekday: "long",
            day: "numeric",
            month: "long",
            year: "numeric",
            hour: "numeric",
            minute: "numeric",
            second: "numeric"
        });

    useEffect(() => {
        const intervalID = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => {
            clearInterval(intervalID);
        };
    }, []);

    return (
        <Content>
            Dzisiaj jest
            {" "}
            {timeString(time)}
        </Content>
    )
}
