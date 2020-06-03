import React from 'react';
import NavBar from './navBar';
import Invoice from './invoice';

const styles = {
  mainContainer: {
    display: 'flex-inline',
    flexDirection: 'row',
    backgroundColor: 'white',
    height: '98vh',
  },
  invoiceContainer: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
};

/**
 * Renders the main parent component for the React Invoice Editor application.
 */
const App = () => (
  <div style={styles.mainContainer}>
    <NavBar />
    <div style={{ fontSize: '20px', fontFamily: 'Arial', padding: '20px' }}>
      <p>Type in your item, quantity and price. Add or delete using the buttons on the right.</p>
      <p>The quantity and price properties of existing line items shown in black can be edited.</p>
      <p>Item names should consist of letters only (spaces are acceptable).</p>
    </div>
    <div style={styles.invoiceContainer}>
      <Invoice />
    </div>
  </div>
);

export default App;
