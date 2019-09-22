import React from 'react';
import styled from 'styled-components';
import { reduxForm, InjectedFormProps } from 'redux-form';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { onRegister } from '../../Store/actions/index';
import FieldInput from '../../ShareComponents/FieldInput/index';
// import { Interface } from 'readline';

// const Form = styled.form`
//   max-width: 90rem;
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
  onRegister: (data: object) => void;
}

interface Props {
  onRegister: (data: object) => void;
}

class Register extends React.PureComponent<
  InjectedFormProps<State, Props> & Props
> {
  handleSubmit = event => {
    const { onRegister } = this.props;
    onRegister(event);
  };
  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit(this.handleSubmit)}>
        <SignUp>
          <div>
            <FieldInput
              name="firstName"
              component="input"
              type="text"
              placeholder="First Name"
            />
            <FieldInput
              name="email"
              component="input"
              type="email"
              placeholder="Email"
            />
            <FieldInput
              name="lastName"
              component="input"
              type="text"
              placeholder="Last Name"
            />
            <button type="submit">sign in</button>
          </div>
          {/* <div>
              <button>sig up</button>
            </div> */}
        </SignUp>
      </form>
    );
  }
}

const RegisterForm = reduxForm<State, Props>({
  form: 'login'
})(Register);

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ onRegister }, dispatch);
}

export default connect(
  null,
  mapDispatchToProps
)(RegisterForm);
