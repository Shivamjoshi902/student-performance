import { getFeedback } from "../utils/feedbackLogic";

const Feedback = ({ score }) => (
  <div>
    <h3>Descriptive Feedback</h3>
    <p>{getFeedback(score)}</p>
  </div>
);

export default Feedback;
