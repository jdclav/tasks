import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): JSX.Element {
    const [dieOne, setDieOne] = useState<number>(1);
    const [dieTwo, setDieTwo] = useState<number>(2);
    return (
        <span>
            <Button onClick={() => setDieOne(d6())}>Roll Left</Button>
            <Button onClick={() => setDieTwo(d6())}>Roll Right</Button>
            <span data-testid="left-die">{dieOne}</span>
            <span data-testid="right-die">{dieTwo}</span>
            <div>{dieOne === 1 && dieTwo === 1 && <div>Lose</div>}</div>
            <div>{dieOne !== 1 && dieTwo === dieOne && <div>Win</div>}</div>
        </span>
    );
}
