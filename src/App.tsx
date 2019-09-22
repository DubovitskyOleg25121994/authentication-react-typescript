import * as React from 'react';
import Auth from './components/Auth/index';
import styled from 'styled-components';

const Container = styled.div`
  overflow: hidden;
  position: relative;
  width: 90rem;
  height: 550px;
  margin: 8rem auto 100px;
  background: #fff;
  box-shadow: 0 2rem 6rem rgba(0, 0, 0, 0.3);
`;

class App extends React.Component {
  render() {
    return (
      <Container>
        <Auth />
      </Container>
    );
  }
}
export default App;
