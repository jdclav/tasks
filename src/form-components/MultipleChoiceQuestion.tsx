import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer
}: {
    options: string[];
    expectedAnswer: string;
}): JSX.Element {
    const [answer, setAnswer] = useState<string>("");
    function updateAnswer(event: React.ChangeEvent<HTMLSelectElement>) {
        setAnswer(event.target.value);
    }
    return (
        <div>
            <div>Multiple Choice Question</div>
            <Form.Group controlId="userEmotions">
                <Form.Label>Select Answer</Form.Label>
                <Form.Select value={answer} onChange={updateAnswer}>
                    {options.map((choice: string) => (
                        <option key={choice} value={choice}>
                            {choice}
                        </option>
                    ))}
                </Form.Select>
            </Form.Group>
            {answer === expectedAnswer && <div>✔️</div>}
            {answer !== expectedAnswer && <div>❌</div>}
        </div>
    );
}
