import { Content } from "./styled";
import { useCurrentDate } from "./useCurrentDate";

const formatDate = (time) =>
time.toLocaleString("PL", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric"
});

export const Date = () => {
const date = useCurrentDate();

    return (
        <Content>
            Dzisiaj jest
            {" "}
            {formatDate(date)}
        </Content>
    )
}
