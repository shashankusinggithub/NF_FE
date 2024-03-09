import React, {useDebugValue, useState} from 'react';
import './App.css'; // Import CSS file
import Card from './components/Card';

function App() {
    const [searchQuery, setSearchQuery] = useState('');
    const [postContent, setPostContent] = useState('');
    const [isSearchVisible, setSearchVisible] = useState(false);
    const [queryReply, setQueryReply] = useState('');
    const [logedin, setLogedIn] = useState('');
    const [queryFilters, setQueryFilters] = useState([]);

    const users = ['Ayush', 'Hemanth', 'Deblin', 'Sridatt', 'Shivam', 'Shashank', 'Amarthya', 'Prathyusha SrivastaVA'];
    const handleSearchInputChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const handlePostInputChange = (e) => {
        setPostContent(e.target.value);
    };

    const handleSearchClick = () => {
        setSearchVisible(true);
    };

    const handlePostClick = () => {
        setSearchVisible(false);
    };
    const handleSearchUsers = (e) => {
        if (queryFilters.includes(e.target.id)) {
            setQueryFilters((us) => us.filter((fuser, i) => fuser != e.target.id));
        } else {
            setQueryFilters((us) => [...us, e.target.id]);
        }
    };

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        // Handle search query submission, e.g., make an API request
        setQueryReply('Querry Res for ' + searchQuery);
        console.log('Search query:', searchQuery);
    };

    const handlePostSubmit = (e) => {
        e.preventDefault();
        // Handle post submission, e.g., send post content to backend
        console.log('Post content:', postContent);
    };
    const updateLogin = (e) => {
        // Handle post submission, e.g., send post content to backend
        console.log(e.target.id, ' update user', queryFilters);
        setLogedIn(e.target.id);
    };

    return (
        <div className="container">
            <h1 className="mb-4">Social Media Application</h1>
            {isSearchVisible ? (
                <div>
                    <form onSubmit={handleSearchSubmit} className="search-form">
                        <div className="row mb-3">
                            <div className="col">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter your search query"
                                    style={{width: '100%'}}
                                    value={searchQuery}
                                    onChange={handleSearchInputChange}
                                />
                            </div>
                            <div className=" d-flex justify-content-end">
                                <button type="submit" className="btn btn-primary ">
                                    Search
                                </button>
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div className="col">
                                <h3>Filters:</h3>
                                {users.map((user, i) => (
                                    <label className="d-block" key={i}>
                                        <input
                                            type="checkbox"
                                            checked={queryFilters.includes(user)}
                                            id={user}
                                            onChange={(e) => handleSearchUsers(e)}
                                        />{' '}
                                        {user}
                                    </label>
                                ))}
                            </div>
                            <div className="col">
                                <h3>Login:</h3>
                                {users.map((user, i) => (
                                    <label className="d-block" key={i}>
                                        <input
                                            type="radio"
                                            checked={logedin === user}
                                            id={user}
                                            onChange={(e) => updateLogin(e)}
                                        />{' '}
                                        {user}
                                    </label>
                                ))}
                            </div>
                        </div>
                    </form>
                    <div>{queryReply}</div>
                </div>
            ) : (
                <div>
                    <form onSubmit={handlePostSubmit} className="post-form">
                        <div className="mb-3">
                            <textarea
                                className="form-control"
                                placeholder="Write your post here..."
                                value={postContent}
                                onChange={handlePostInputChange}
                            ></textarea>
                            <div className=" d-flex justify-content-end">
                                <button type="submit" className="btn btn-primary">
                                    Post
                                </button>
                            </div>
                        </div>
                        <div className="mb-3">
                            <h3>Login:</h3>
                            {users.map((user, i) => (
                                <label className="d-block" key={i}>
                                    <input
                                        type="radio"
                                        checked={logedin === user}
                                        id={user}
                                        onChange={(e) => updateLogin(e)}
                                    />{' '}
                                    {user}
                                </label>
                            ))}
                        </div>
                    </form>
                </div>
            )}
            <div className="button-group d-flex justify-content-center">
                <button
                    className={`btn ${isSearchVisible ? 'btn-primary' : 'btn-secondary'}`}
                    onClick={handleSearchClick}
                >
                    Search
                </button>
                <button
                    className={`btn ${isSearchVisible ? 'btn-secondary' : 'btn-primary'}`}
                    onClick={handlePostClick}
                >
                    Post
                </button>
            </div>
            {!isSearchVisible && (
                <div>
                    <Card title="Hello" topic="topic" numComments={45} numLikes={56} />
                </div>
            )}
        </div>
    );
}

export default App;
