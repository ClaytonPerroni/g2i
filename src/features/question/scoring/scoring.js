const scoreQuiz = questionList =>
  questionList.reduce((previousValue, currentValue) => {
    const answerScore =
      currentValue.correct_answer.toLowerCase() ===
      String(currentValue.user_answer).toLowerCase()
        ? 1
        : 0;
    return previousValue + answerScore;
  }, 0);
export default scoreQuiz;
