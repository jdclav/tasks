import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): JSX.Element {
    const [value, setValue] = useState<boolean>(false);

    return (
        <span>
            <Button onClick={() => setValue(!value)}>Reveal answer</Button>
            {value && <div>42</div>}
        </span>
    );
}
