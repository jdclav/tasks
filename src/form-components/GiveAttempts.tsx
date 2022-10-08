import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";

export function GiveAttempts(): JSX.Element {
    const [attempts, setAttempts] = useState<number>(3);
    const [request, setRequest] = useState<string>("0");
    const requestValue = parseInt(request) || 0;

    function updateRequest(event: React.ChangeEvent<HTMLInputElement>) {
        setRequest(event.target.value);
    }

    return (
        <div>
            <div>Give Attempts</div>
            {attempts}
            <Form.Group controlId="formGiveAttempt">
                <Form.Label>Request:</Form.Label>
                <Form.Control
                    type="number"
                    value={request}
                    onChange={updateRequest}
                />
            </Form.Group>
            <Button
                onClick={() => setAttempts(attempts - 1)}
                disabled={attempts < 1}
            >
                use
            </Button>
            <Button onClick={() => setAttempts(attempts + requestValue)}>
                gain
            </Button>
        </div>
    );
}
