import React from 'react';
import classname from 'classname';

function TextInputGroup({ lable, name, value, placeholder, type, onChange, error }) {
  return (
    <div className="form-group">
      <label htmlFor={name}>{lable}</label>
      <input
        type={type}
        name={name}
        className={classname('form-control form-control-lg', { 'is-invalid': error })}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
      {error && <div className="invalid-feedback">{error}</div>}
    </div>
  );
}

export default TextInputGroup;
