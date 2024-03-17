import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSquarePlus, faSquareMinus } from "@fortawesome/free-solid-svg-icons"

const ShowQuestions = ({ question }) => {
    const [answer, setAnswer] = useState(false)

    const showAnswer = () => {
        setAnswer(true)
    }

    const hideAnswer = () => {
        setAnswer(false)
    }
    return <div className="question">
        <header>
            <h5>{question.title}</h5>
            {answer ? <button className="question-btn" onClick={hideAnswer}><FontAwesomeIcon icon={faSquareMinus} /></button>
                : <button className="question-btn" onClick={showAnswer}><FontAwesomeIcon icon={faSquarePlus} /></button>
            }
        </header>
        {answer && <p>{question.info}</p>}
    </div>
}

export default ShowQuestions