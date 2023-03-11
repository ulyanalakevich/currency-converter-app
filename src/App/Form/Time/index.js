import { Content } from "./styled";
import { useCurrentDate } from "./useCurrentDate";

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

export const Time = () => {
const time = useCurrentDate();

    return (
        <Content>
            Dzisiaj jest
            {" "}
            {timeString(time)}
        </Content>
    )
}
