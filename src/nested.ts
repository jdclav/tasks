import { Answer } from "./interfaces/answer";
import { Question, QuestionType } from "./interfaces/question";
import { duplicateQuestion, makeBlankQuestion } from "./objects";

/**
 * Consumes an array of questions and returns a new array with only the questions
 * that are `published`.
 */
export function getPublishedQuestions(questions: Question[]): Question[] {
    const temp = questions.filter(
        (value: Question): boolean => value.published
    );

    return temp;
}

/**
 * Consumes an array of questions and returns a new array of only the questions that are
 * considered "non-empty". An empty question has an empty string for its `body` and
 * `expected`, and an empty array for its `options`.
 */
export function getNonEmptyQuestions(questions: Question[]): Question[] {
    const temp = questions.filter(
        (value: Question): boolean =>
            value.body.length !== 0 ||
            value.expected.length !== 0 ||
            value.options.length !== 0
    );

    return temp;
}

/***
 * Consumes an array of questions and returns the question with the given `id`. If the
 * question is not found, return `null` instead.
 */
export function findQuestion(
    questions: Question[],
    id: number
): Question | null {
    const temp = questions.filter(
        (value: Question): boolean => value.id === id
    );

    if (temp.length > 0) {
        const give = temp[0];
        return give;
    }

    return null;
}

/**
 * Consumes an array of questions and returns a new array that does not contain the question
 * with the given `id`.
 */
export function removeQuestion(questions: Question[], id: number): Question[] {
    const temp = questions.filter(
        (value: Question): boolean => value.id !== id
    );

    return temp;
}

/***
 * Consumes an array of questions and returns a new array containing just the names of the
 * questions, as an array.
 */
export function getNames(questions: Question[]): string[] {
    const temp = questions.map((value: Question): string => value.name);

    return temp;
}

/***
 * Consumes an array of questions and returns the sum total of all their points added together.
 */
export function sumPoints(questions: Question[]): number {
    const temp = questions.map((value: Question): number => value.points);

    const total = temp.reduce(
        (sum: number, value: number) => (sum = sum + value),
        0
    );

    return total;
}

/***
 * Consumes an array of questions and returns the sum total of the PUBLISHED questions.
 */
export function sumPublishedPoints(questions: Question[]): number {
    const pub = getPublishedQuestions(questions);

    const temp = pub.map((value: Question): number => value.points);

    const total = temp.reduce(
        (sum: number, value: number) => (sum = sum + value),
        0
    );

    return total;
    return 0;
}

/***
 * Consumes an array of questions, and produces a Comma-Separated Value (CSV) string representation.
 * A CSV is a type of file frequently used to share tabular data; we will use a single string
 * to represent the entire file. The first line of the file is the headers "id", "name", "options",
 * "points", and "published". The following line contains the value for each question, separated by
 * commas. For the `options` field, use the NUMBER of options.
 *
 * Here is an example of what this will look like (do not include the border).
 *`
id,name,options,points,published
1,Addition,0,1,true
2,Letters,0,1,false
5,Colors,3,1,true
9,Shapes,3,2,false
` *
 * Check the unit tests for more examples!
 */
export function toCSV(questions: Question[]): string {
    const temp = "id,name,options,points,published";

    const values = questions.map(
        (value: Question): string =>
            value.id.toString() +
            "," +
            value.name +
            "," +
            value.options.length.toString() +
            "," +
            value.points.toString() +
            "," +
            value.published.toString()
    );

    const final =
        temp +
        "\n" +
        values.reduce(
            (total: string, input: string) => (total = total + "\n" + input)
        );

    return final;
}

/**
 * Consumes an array of Questions and produces a corresponding array of
 * Answers. Each Question gets its own Answer, copying over the `id` as the `questionId`,
 * making the `text` an empty string, and using false for both `submitted` and `correct`.
 */
export function makeAnswers(questions: Question[]): Answer[] {
    const temp: Answer[] = questions.map((value: Question): Answer => {
        return {
            questionId: value.id,
            text: "",
            submitted: false,
            correct: false
        };
    });
    return temp;
}

/***
 * Consumes an array of Questions and produces a new array of questions, where
 * each question is now published, regardless of its previous published status.
 */
export function publishAll(questions: Question[]): Question[] {
    const temp = questions.map((value: Question): Question => {
        return { ...value, published: true };
    });
    return temp;
}

/***
 * Consumes an array of Questions and produces whether or not all the questions
 * are the same type. They can be any type, as long as they are all the SAME type.
 */
export function sameType(questions: Question[]): boolean {
    if (questions.length === 0) {
        return true;
    }
    const exp = questions[0].type;
    const temp = questions.filter(
        (value: Question): boolean => value.type === exp
    );
    if (questions.length === temp.length) {
        return true;
    } else {
        return false;
    }
}

/***
 * Consumes an array of Questions and produces a new array of the same Questions,
 * except that a blank question has been added onto the end. Reuse the `makeBlankQuestion`
 * you defined in the `objects.ts` file.
 */
export function addNewQuestion(
    questions: Question[],
    id: number,
    name: string,
    type: QuestionType
): Question[] {
    const hold = [...questions];
    hold.push(makeBlankQuestion(id, name, type));
    return hold;
}

/***
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its name should now be `newName`.
 */
export function renameQuestionById(
    questions: Question[],
    targetId: number,
    newName: string
): Question[] {
    const temp = questions.map((value: Question): Question => {
        if (value.id === targetId) {
            return { ...value, name: newName };
        } else {
            return value;
        }
    });
    return temp;
}

/***
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its `type` should now be the `newQuestionType`
 * AND if the `newQuestionType` is no longer "multiple_choice_question" than the `options`
 * must be set to an empty list.
 */
export function changeQuestionTypeById(
    questions: Question[],
    targetId: number,
    newQuestionType: QuestionType
): Question[] {
    const temp = questions.map((value: Question): Question => {
        if (value.id === targetId) {
            if (newQuestionType !== "multiple_choice_question") {
                return { ...value, type: newQuestionType, options: [] };
            } else {
                return { ...value, type: newQuestionType };
            }
        } else {
            return value;
        }
    });
    return temp;
}

/**
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its `option` array should have a new element.
 * If the `targetOptionIndex` is -1, the `newOption` should be added to the end of the list.
 * Otherwise, it should *replace* the existing element at the `targetOptionIndex`.
 *
 * Remember, if a function starts getting too complicated, think about how a helper function
 * can make it simpler! Break down complicated tasks into little pieces.
 */
export function editOption(
    questions: Question[],
    targetId: number,
    targetOptionIndex: number,
    newOption: string
): Question[] {
    const temp = questions.map((value: Question): Question => {
        if (value.id === targetId) {
            if (targetOptionIndex === -1) {
                return {
                    ...value,
                    options: endList(value.options, newOption)
                };
            } else {
                return {
                    ...value,
                    options: changeList(
                        value.options,
                        newOption,
                        targetOptionIndex
                    )
                };
            }
        } else {
            return value;
        }
    });
    return temp;
}

/***
 * Consumes an array of questions, and produces a new array based on the original array.
 * The only difference is that the question with id `targetId` should now be duplicated, with
 * the duplicate inserted directly after the original question. Use the `duplicateQuestion`
 * function you defined previously; the `newId` is the parameter to use for the duplicate's ID.
 */
export function duplicateQuestionInArray(
    questions: Question[],
    targetId: number,
    newId: number
): Question[] {
    const hold = questions.filter(
        (value: Question): boolean => value.id === targetId
    );
    const duplicate = duplicateQuestion(newId, hold[0]);
    const location = questions.findIndex(
        (value: Question) => value.id === targetId
    );

    const temp = [...questions];
    temp.splice(location + 1, 0, duplicate);
    return temp;
}

function endList(oldList: string[], addon: string) {
    const temp = [...oldList];
    temp.push(addon);
    return temp;
}

function changeList(oldList: string[], newitem: string, id: number) {
    const temp = [...oldList];
    temp[id] = newitem;
    return temp;
}
