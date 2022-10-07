import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [value, setValue] = useState<number>(4);
    const [attempt, setAttempt] = useState<boolean>(false);
    return (
        <span>
            <Button
                onClick={() => {
                    setValue(value - 1);
                    setAttempt(true);
                }}
                disabled={value < 1 || attempt}
            >
                Start Quiz
            </Button>
            <Button
                onClick={() => setAttempt(false)}
                disabled={attempt === false}
            >
                Stop Quiz
            </Button>
            <Button onClick={() => setValue(value + 1)} disabled={attempt}>
                Mulligan
            </Button>
            {value}
        </span>
    );
}
