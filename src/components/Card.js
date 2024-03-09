import React from 'react';

function Card({title, topic, numComments, numLikes}) {
    return (
        <div className="card mt-3">
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{topic}</h6>
                <div className="d-flex">
                    <p className="card-text">Comments: {numComments}</p>
                    <p className="card-text ms-2">Likes: {numLikes}</p>
                </div>
            </div>
        </div>
    );
}

export default Card;
