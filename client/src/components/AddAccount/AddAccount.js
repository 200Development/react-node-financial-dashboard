import React from 'react';
import './AddAccount.css';

function addAccount () {
  alert('Account Button Hit');
}

const AddAccount = () => (
  <div className="AddAccount">
    <button onClick={addAccount}>Add Account</button>
  </div>
);

AddAccount.propTypes = {};

AddAccount.defaultProps = {};

export default AddAccount;
