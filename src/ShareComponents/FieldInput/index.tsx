import React from 'react';
import { Field } from 'redux-form';

interface Props {
  name: string;
  type: string;
  placeholder: string;
  component: string;
}

const FieldInput = (props: Props) => {
  const { placeholder, name, component, type } = props;
  return (
    <div>
      <label>{placeholder}</label>
      <div>
        <Field
          name={name}
          component={component}
          type={type}
          placeholder={placeholder}
        />
      </div>
    </div>
  );
};

export default FieldInput;
