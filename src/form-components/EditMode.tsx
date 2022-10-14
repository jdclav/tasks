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

    const studentFunction = (name: string, state: boolean): string => {
        if (state) {
            return name + " is a student";
        } else {
            return name + " is not a student";
        }
    };

    return (
        <div>
            <div>Edit Mode</div>
            <Form.Group controlId="formEditMode1">
                <Form.Label>Edit Mode:</Form.Label>
                <Form.Check
                    type="switch"
                    onChange={updateEdit}
                    checked={mode}
                />
                {mode && <Form.Control type="text" onChange={updateName} />}
            </Form.Group>
            <Form.Group controlId="formEditMode2">
                {mode && (
                    <Form.Check
                        label="student"
                        type="checkbox"
                        onChange={updateStatus}
                        checked={person.status}
                    />
                )}
            </Form.Group>
            {<span>{studentFunction(person.name, person.status)}</span>}
        </div>
    );
}
