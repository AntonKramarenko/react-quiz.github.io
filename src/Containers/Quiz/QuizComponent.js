import React from "react";
import { useMatch } from "react-router-dom";
import Quiz from "./Quiz";

function QuizComponent() {
    const match = useMatch();

    return (
        <div>
            <Quiz />
        </div>

    )
}

export default QuizComponent