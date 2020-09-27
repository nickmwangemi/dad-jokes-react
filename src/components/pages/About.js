import React from 'react'

const About = () => {
    return (
        <div className="mt-4 mx-auto">
            <h3> About Dad Jokes</h3>
            <p>This is a React application consuming the <strong><i>icanhazdadjoke API</i></strong> found at:

             <a
                    href="https://icanhazdadjoke.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    https://icanhazdadjoke.com/
                </a>
            </p>
        </div>
    )
}

export default About
