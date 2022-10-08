import React, { useState } from "react";

export function GiveAttempts(): JSX.Element {
    const [attempts, setAttempts] = useState<number>(3);
    const [request, setRequest] = useState<number>(0);

    return (
        <div>
            <div>Give Attempts</div>
            {attempts}
        </div>
    );
}
