import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): JSX.Element {
    const [value, setValue] = useState<QuestionType>("short_answer_question");

    const swapType = (quest: QuestionType): QuestionType =>
        quest === "short_answer_question"
            ? "multiple_choice_question"
            : "short_answer_question";

    return (
        <span>
            <Button onClick={() => setValue(swapType(value))}>
                Change Type
            </Button>
            {value === "short_answer_question" && <div>Short Answer</div>}
            {value === "multiple_choice_question" && <div>Multiple Choice</div>}
        </span>
    );
}
