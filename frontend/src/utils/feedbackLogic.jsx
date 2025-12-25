export function getFeedback(score) {
  if (score >= 8) {
    return "Excellent performance with strong control.";
  } else if (score >= 6) {
    return "Good performance with minor inaccuracies.";
  } else {
    return "Needs improvement.";
  }
}
