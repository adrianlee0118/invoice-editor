import React from 'react';
import AppBar from 'material-ui/AppBar';

/*
 * Renders the navigation bar at the top of the screen.
*/
const NavBar = () => (
  <AppBar
    style={{ background: '#000000', padding: '30px' }}
    title="React-Redux Invoice Editor"
    showMenuIconButton={false}
  />
);

export default NavBar;
