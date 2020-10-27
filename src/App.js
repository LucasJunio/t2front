import React from 'react';
import Routes from './routes';
import styled from 'styled-components';

const Container = styled.div`
  .container {
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}

// @media (min-width: 576px) {
//   .container {
//     max-width: 540px;
//   }
// }

// @media (min-width: 768px) {
//   .container {
//     max-width: 720px;
//   }
// }

// @media (min-width: 992px) {
//   .container {
//     max-width: 960px;
//   }
// }

// @media (min-width: 1200px) {
//   .container {
//     max-width: 1140px;
//   }
// }

.container-fluid {
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}

`;




function App() {
    return (
        <div className="App">
            <Container>
                <Routes />
            </Container>
        </div>
    );
}

export default App;
