import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Holiday } from "../interfaces/holidays";

export function CycleHoliday(): JSX.Element {
    const [value, setValue] = useState<Holiday>("New Years");

    const nextDate = (day: Holiday): Holiday => {
        if (day === "New Years") {
            return "Valentines Day";
        } else if (day === "Valentines Day") {
            return "Halloween";
        } else if (day === "Halloween") {
            return "Thanksgiving";
        } else if (day === "Thanksgiving") {
            return "Christmas";
        } else {
            return "New Years";
        }
    };

    const nextAlpha = (day: Holiday): Holiday => {
        if (day === "Christmas") {
            return "Halloween";
        } else if (day === "Halloween") {
            return "New Years";
        } else if (day === "New Years") {
            return "Thanksgiving";
        } else if (day === "Thanksgiving") {
            return "Valentines Day";
        } else {
            return "Christmas";
        }
    };

    const convert = (day: Holiday): string => {
        if (day === "Christmas") {
            return "🎁";
        } else if (day === "Halloween") {
            return "🎃";
        } else if (day === "New Years") {
            return "❄️️";
        } else if (day === "Thanksgiving") {
            return "🦃";
        } else {
            return "💖";
        }
    };
    return (
        <span>
            <Button onClick={() => setValue(nextAlpha(value))}>
                Advance by Alphabet
            </Button>
            <Button onClick={() => setValue(nextDate(value))}>
                Advance by Year
            </Button>
            Holiday: {convert(value)}
        </span>
    );
}
