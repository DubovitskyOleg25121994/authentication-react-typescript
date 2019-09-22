import React from 'react';
import styled from 'styled-components';
import Register from '../Register/index';
import Login from '../Login/index';

const Container = styled.div`
  max-width: 900rem;
  background-color: #fff;
  height: 100%;
  padding: 50px 30px 0;
`;

interface ContentProps {
  check: boolean;
}

const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: ${(props: ContentProps) =>
    props.check ? 'flex-end' : 'flex-start'};
`;

const ContentRight = styled.div`
  justify-content: flex-start;
`;

const ContentLeft = styled.div`
  justify-content: flex-end;
`;

class Auth extends React.PureComponent {
  state = {
    check: true
  };

  onClickLogin = () => {
    this.setState({ check: true });
  };

  onClickRegister = () => {
    this.setState({ check: false });
  };

  render() {
    return (
      <Container>
        <Content check={this.state.check}>
          {this.state.check ? (
            <ContentRight>
              <Login />
              <button onClick={this.onClickRegister}>1</button>
            </ContentRight>
          ) : (
            <ContentLeft>
              <Register />
              <button onClick={this.onClickLogin}>2</button>
            </ContentLeft>
          )}
        </Content>
      </Container>
    );
  }
}

export default Auth;
