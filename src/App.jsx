import React from 'react';
import { AppProvider } from './context/AppContext';
import CartValue from './components/CartValue';
import ExpenseList from './components/ExpenseList';
import ItemSelected from './components/ItemSelected';
import Location from './components/Location';

const App = () => {
    return (
        <AppProvider>
            <div style={styles.container}>
                <h1 style={styles.header}>Shopping App</h1>
                
                <div style={styles.row}>
                    <div style={styles.col}>
                        <CartValue />
                    </div>
                    <div style={styles.col}>
                        <Location />
                    </div>
                </div>

                <h3 style={styles.subheader}>Shopping Cart</h3>
                <div style={styles.row}>
                    <div style={styles.col}>
                        <ExpenseList />
                    </div>
                </div>

                <h3 style={styles.subheader}>Add Items</h3>
                <div style={styles.row}>
                    <div style={styles.col}>
                        <ItemSelected />
                    </div>
                </div>
            </div>
        </AppProvider>
    );
};

const styles = {
    container: {
        maxWidth: '800px',
        margin: '0 auto',
        padding: '20px',
    },
    header: {
        marginTop: '20px',
        fontSize: '2rem',
        textAlign: 'center',
    },
    subheader: {
        marginTop: '20px',
        fontSize: '1.5rem',
    },
    row: {
        display: 'flex',
        flexWrap: 'wrap',
        marginTop: '20px',
    },
    col: {
        flex: 1,
        padding: '10px',
    },
    '@media (max-width: 600px)': {
        row: {
            flexDirection: 'column',
        },
    },
};

export default App;
