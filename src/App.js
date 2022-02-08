/* eslint-disable react/jsx-no-useless-fragment */
import React, { lazy, Suspense, useEffect } from 'react';
import { useSelector } from 'react-redux';
import './App.css';
import './BootstrapGrid.css';
import './CustomClassNames.css';
import { Route, Routes, useNavigate } from 'react-router';
import { Intro, PAGES } from 'pages';
import { selectQuestionsLoaded } from 'features/question';
import { Container, MainCard } from 'styledComponents';
import { CatchAll } from 'features/errorBoundary';

// lazy import to reduce first bundle size
const Quiz = lazy(() => import('./pages/Quiz/Quiz'));
const Results = lazy(() => import('./pages/Results/Results'));

function App() {
  const questionsLoaded = useSelector(selectQuestionsLoaded);
  const navigate = useNavigate();

  useEffect(() => {
    // if no questions are loaded navigate to the intro page (to load questions)
    if (!questionsLoaded) {
      navigate(PAGES.INTRO, {});
    }
  }, [navigate, questionsLoaded]);

  return (
    <Container>
      <MainCard>
        <CatchAll>
          <Routes>
            {questionsLoaded && (
              <Route
                path="/quiz"
                element={
                  <Suspense fallback={<></>}>
                    <Quiz />
                  </Suspense>
                }
              />
            )}
            {questionsLoaded && (
              <Route
                path="/results"
                element={
                  <Suspense fallback={<></>}>
                    <Results />
                  </Suspense>
                }
              />
            )}
            <Route path="*" element={<Intro />} />
          </Routes>
        </CatchAll>
      </MainCard>
    </Container>
  );
}

export default App;
