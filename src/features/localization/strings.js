import LocalizedStrings from 'react-localization';

const strings = new LocalizedStrings({
  en: {
    intro_title: 'Welcome to the Trivia Challenge!',
    intro_numberOfQuestions:
      'You will be presented with 10 multiple choice questions',
    intro_callToAction: 'Can you score 100%?',
    intro_beginButton: 'begin',
    intro_fetchError: "sorry, can't connect to the server right now.",
    // quiz text
    quiz_exitButton: 'exit',
    quiz_currentQuestionCounter: 'Question {0} of {1}',
    // questions text
    question_booleanTrue: 'true',
    question_booleanFalse: 'false',
    //  results page
    results_title: 'You scored',
    results_playAgain: 'play again?',
  },
});

export default strings;
