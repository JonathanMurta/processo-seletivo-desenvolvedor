import React from 'react';
import Menu from './components/Menu';
import Footer from './components/Footer'

import UsersList from './pages/UsersList';

function App() {
    return (
        <>
            <Menu />
            <UsersList />
            <Footer />
        </>
    );
}

export default App;
