import { useEffect, useState } from "react";

export const useCurrentDate = () => {
    const [date, setTime] = useState(new Date());

    useEffect(() => {
        const intervalID = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => {
            clearInterval(intervalID);
        };
    }, []);

    return date
};