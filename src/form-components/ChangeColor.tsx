import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function ChangeColor(): JSX.Element {
    const [color, setColor] = useState<number>(0);

    const COLOR_LIST = [
        "red",
        "blue",
        "green",
        "cyan",
        "magenta",
        "yellow",
        "white",
        "black"
    ];
    function updateColor(event: React.ChangeEvent<HTMLInputElement>) {
        setColor(COLOR_LIST.indexOf(event.target.value));
    }
    function onUpdate()
        style.background = COLOR_LIST[color
    }

    return (
        <div>
            <div>Change Color</div>
            <Form.Group controlId="Colors">
                <Form.Label>Colors:</Form.Label>
                {COLOR_LIST.map((color: string) => (
                    <Form.Check
                        inline
                        key={color}
                        type="radio"
                        name="color"
                        id={color}
                        value={color}
                        label={color}
                        background-color={color}
                        onChange={updateColor}
                        color={color}
                    ></Form.Check>
                ))}
            </Form.Group>

            <div id="colored-box" data-testid="colored-box">
                {COLOR_LIST[color]}
            </div>
        </div>
    );
}
