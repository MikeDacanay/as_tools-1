import React from 'react';

import Background from './hoc/Layout/Background/Background';
import Header from './hoc/Layout/Header/Header';
import Main from './hoc/Layout/Main/Main';

import Section from './containers/Section/Section';
import Panels from './containers/Panels/Panels';


import Nav2 from './components/Navigation/Nav2/Nav2';
import Preloader from './components/Preloader/Preloader';
import Footer from './components/Footer/Footer';
import Gate from './components/Gate/Gate';
import Gate1 from './components/Gate/Gate1';

import QuestionSets from './libs/QuestionSets';

import './App.scss';
import SpiderClass from './components/Spider/SpiderClass';

function App(props) {

  return (
    <React.Fragment>
      <Preloader />
      {/* <Gate/>
      <Gate1/>       */}
      <Header />
      <Main>
        <Section
          side={'left'}
        >
          <Panels
            panels={QuestionSets}
          />
        </Section>
        <Section
          side={'right'}
        >
          <SpiderClass
          // levels={3}
          />
          {/* <Spider
            panels={QuestionSets}
          /> */}
          {/* <Radar
            width={500}
            height={500}
            padding={70}
            domainMax={10}
            highlighted={null}
            onHover={(point) => {
              if (point) {
                console.log('hovered over a data point');
              } else {
                console.log('not over anything');
              }
            }}
            data={{
              variables: [
                { key: 'resilience', label: 'Resilience' },
                { key: 'strength', label: 'Strength' },
                { key: 'adaptability', label: 'Adaptability' },
                { key: 'creativity', label: 'Creativity' },
                { key: 'openness', label: 'Open to Change' },
                { key: 'confidence', label: 'Confidence' },
              ],
              sets: [
                {
                  key: 'me',
                  label: 'My Scores',
                  values: {
                    resilience: 4,
                    strength: 6,
                    adaptability: 7,
                    creativity: 2,
                    openness: 8,
                    confidence: 1,
                  },
                },
                {
                  key: 'everyone',
                  label: 'Everyone',
                  values: {
                    resilience: 10,
                    strength: 8,
                    adaptability: 6,
                    creativity: 4,
                    openness: 2,
                    confidence: 0,
                  },
                },
              ],
            }}
          /> */}
        </Section>
      </Main>
      <Background />
      <Nav2
        questions={[...QuestionSets['C-level']]}
      />
      <Footer />
    </React.Fragment>
  );
}

// function App() {

//   console.log(window.location.origin);

//   return (
//     <Switch>
//       <Route
//         exact path='/#/:id'
//         component={ModernFinance}
//       />
//       <Route
//         path='/'
//         component={ModernFinance}
//       />
//     </Switch>
//   )
// }

export default App;


