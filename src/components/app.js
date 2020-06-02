import React from 'react';
import NavBar from './navBar';
import Invoice from './invoice';
import InputContainer from './newItemForm';

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

const App = () => (
  <div style={styles.mainContainer}>
    <NavBar />
    <div style={styles.invoiceContainer}>
      <Invoice />
      
    </div>
  </div>
);

export default App;
