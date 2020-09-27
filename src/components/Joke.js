import React, { useState, useEffect } from 'react';
import axios from 'axios';


const Joke = () => {
    const [joke, setJoke] = useState('');

    useEffect(() => {
        fetchJoke();
    }, []);

    const fetchJoke = () => {
        axios
            .get('https://icanhazdadjoke.com/', {
                headers: { Accept: 'application/json' },
            })
            .then(res => setJoke(res.data))
            .catch(err => console.log(err));
    };

    return (
        <div className="mt-4">
            <div className="card">
                <h5 className="card-header">Dad Joke</h5>
                <div className="card-body">
                    <p className="card-text">{joke.joke}</p>
                    <a className="btn btn-primary text-white" onClick={fetchJoke}>
                        Another One..
					</a>
                </div>
            </div>
        </div>
    );
}

export default Joke
