# Setup
run `docker-compose up` then visit http://localhost:3000  

# Developer Notes
I wrote some tests to demonstrate that I know how to write them but the test coverage is not high.  
In `src/components/question/BooleanQuestion/BooleanQuestion.test.js` I wrote tests that show I can test functions and clicking on screen.  
In `src/features/question/redux/QuestionSlice.test.js` I wrote tests to show I can test reducers.  
In `src/features/question/redux/QuestionThunks.test.js` I wrote tests to show I can structure an API call to ensure the functions are testable.  

The requirements didn't specify that I needed to have the quiz return different questions every time, so I didn't use a session token in order to reduce the amount code needed to complete the exercise. Though I  designed the app so that new question types could be added easily.

ES Lint is installed and works with prettier to enforce and autocorrect to good style.  
Docker is used to ensure the same development environment for everyone.  