import * as React from 'react';
import styled from 'styled-components';
import { reduxForm, InjectedFormProps } from 'redux-form';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import FieldInput from '../../ShareComponents/FieldInput/index';
import { onLogin } from '../../Store/actions/index';

// const Form = styled.form`
//   max-width: 900rem;
//   background-color: #fff;
//   height: 100%;
//   padding: 50px 30px 0;
// `;

const SignUp = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  flex-direction: column;
`;

interface State {
  name: string;
  password: string;
  email: string;
  onLogin: (data: object) => void;
}

interface Props {
  onLogin: (data: object) => void;
}

class Login extends React.PureComponent<
  InjectedFormProps<State, Props> & Props
> {
  handleSubmit = event => {
    const { onLogin } = this.props;
    onLogin(event);
  };

  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit(this.handleSubmit)}>
        <SignUp>
          <div>
            <FieldInput
              name="email"
              component="input"
              type="email"
              placeholder="Email"
            />
            <FieldInput
              name="password"
              component="input"
              type="password"
              placeholder="Password"
            />
            <div>
              <button type="submit">sign in</button>
            </div>
          </div>
          {/* <div>
              <button>sign up</button>
            </div> */}
        </SignUp>
      </form>
    );
  }
}

const LoginForm = reduxForm<State, Props>({
  form: 'login'
})(Login);

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ onLogin }, dispatch);
}

export default connect(
  null,
  mapDispatchToProps
)(LoginForm);
