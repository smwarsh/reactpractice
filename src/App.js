import React from 'react';
import MyNavbar from './components/MyNavbar.js';
import MyJumbotron from './components/MyJumbotron.js';
import MyCard from './components/MyCard.js';

const App = () => {
    return(
        <div>
            <MyNavbar />
            <MyJumbotron />
            <MyCard />
        </div>
    );
}

export default App;