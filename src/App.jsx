import ShowQuestions from "./ShowQuestions"
import data from "./data"
import { useState } from "react"

const App = () => {
  const [questions, setQuestions] = useState(data)
  return <main>
    <div className="container">
      <h1>Questions</h1>
      {questions.map((question) => {
        return <ShowQuestions question={question} key={question.id} />
      })}
    </div>
  </main>
}
export default App;
