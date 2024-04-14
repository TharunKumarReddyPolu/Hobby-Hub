import React from 'react';
import { Link } from 'react-router-dom';
import './EmptyPosts.css';

const EmptyPosts = () => {
    return (
        <div className='main' style={{margin: 'auto', marginTop: '15%', color: 'white'}}>
            <h4>Looks like you don't have any posts!</h4>
            <button className='create-link-btn'><Link to="/new">Create one here!</Link></button>
        </div>
    );
};

export default EmptyPosts;