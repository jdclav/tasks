import React, { useState } from "react";
import { Form } from "react-bootstrap";

interface student {
    name: string;
    status: boolean;
}

export function EditMode(): JSX.Element {
    const [mode, setMode] = useState<boolean>(false);
    const [person, setPerson] = useState<student>({
        name: "Your Name",
        status: true
    });
    function updateEdit(event: React.ChangeEvent<HTMLInputElement>) {
        setMode(event.target.checked);
    }

    function updateName(event: React.ChangeEvent<HTMLInputElement>) {
        setPerson({ status: person.status, name: event.target.value });
    }

    function updateStatus(event: React.ChangeEvent<HTMLInputElement>) {
        setPerson({ status: event.target.checked, name: person.name });
    }

    const notFunction = (state: boolean): string => (state ? " " : " not");

    return (
        <div>
            <div>Edit Mode</div>
            <Form.Group controlId="formEditMode">
                <Form.Label>Edit Mode:</Form.Label>
                <Form.Check
                    type="switch"
                    onChange={updateEdit}
                    checked={mode}
                />
                {mode && (
                    <Form.Control
                        name="student"
                        type="text"
                        onChange={updateName}
                    />
                )}
                {mode && (
                    <Form.Check
                        label="student"
                        type="checkbox"
                        onChange={updateStatus}
                        checked={person.status}
                    />
                )}
            </Form.Group>
            {!mode && (
                <div>
                    {person.name +
                        " is" +
                        notFunction(person.status) +
                        " a student"}
                </div>
            )}
        </div>
    );
}
