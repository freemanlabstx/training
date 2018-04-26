import React from 'react';
import {connect} from 'react-redux';

const Header = ({warehouse: {error}}) => (
  <div>
    <img className="logo" src="/logo.png" />
    <div style={{margin: '2em'}}>
      {error && (
        <span style={{background: 'red', color: 'white', padding: '1em'}}>
          {error}
        </span>
      )}
    </div>
  </div>
);

export default connect(state => state)(Header);
