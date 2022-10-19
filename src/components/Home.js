import React, { useContext } from 'react';
import { AuthContext } from '../contexts/UserContext';

const Home = () => {
    const {user} = useContext (AuthContext);
    return (
        <div className='grid grid-cols-3 gap-3	'>
          
        </div>
    );
};

export default Home;