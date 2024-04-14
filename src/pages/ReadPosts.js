import React from 'react';
import './ReadPosts.css';
import Card from '../components/Card';
import EmptyPosts from '../pages/EmptyPosts';

const ReadPosts = () => {

    const posts = [
        {
            id: 1,
            title: 'Post 1',
            content: 'This is the content of post 1',
            imageURL: 'https://via.placeholder.com/150',
            upVotes: 0
        },
        {
            id: 2,
            title: 'Post 2',
            content: 'This is the content of post 2',
            imageURL: 'https://via.placeholder.com/150',
            upVotes: 0
        },
        {
            id: 3,
            title: 'Post 3',
            content: 'This is the content of post 3',
            imageURL: 'https://via.placeholder.com/150',
            upVotes: 0
        },
        {
            id: 4,
            title: 'Post 4',
            content: 'This is the content of post 4',
            imageURL: 'https://via.placeholder.com/150',
            upVotes: 0
        },
        {
            id: 5,
            title: 'Post 5',
            content: 'This is the content of post 5',
            imageURL: 'https://via.placeholder.com/150',
            upVotes: 0
        }
    ];

    const handleNewest = () => {
    }

    const handleMostPopular = () => {
    }
    
    return (
        <div className="main">
            <div className='order-by'>
                <h3>Order by: </h3>
                <button className='order-by-btn' onClick={handleNewest}>Newest</button>
                <button className='order-by-btn' onClick={handleMostPopular}>Most Popular</button>
            </div>
            <div className='posts'>
            {
                posts && posts.length > 0 ?
                posts.map((post,index) => 
                   <Card id={post.id} title={post.title} content={post.content} imageURL={post.imageURL} upVotes={post.upVotes}/>
                ) : <EmptyPosts />
            }
            </div>
        </div>  
    )
}

export default ReadPosts;