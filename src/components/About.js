// import React, { useContext, useEffect } from 'react'

const About = () => { 
    return (
        <div className="conatiner mx-5 py-4">
            <div className="row justify-content-center">
                <div className="col-md-10 col-12">
                    <h4>Purpose</h4>
                    <p>Welcome to the documentation for the Note Taking App! This document will guide you through the features and functionalities of our app, helping you make the most of your note-taking experience.</p>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-md-10 col-12">
                    <h4>Features</h4>
                    <ul>
                        <li>Login/Signup for sequrity purpose</li>
                        <li>Create notes efficiently.</li>
                        <li>Edit existing notes</li>
                        <li>Delele existing notes</li>
                    </ul>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-md-10 col-12">
                    <h4>Audience</h4>
                    <p>This documentation is intended for users of the Note Taking App, regardless of their familiarity with note-taking applications. Whether you're a student, professional, or anyone who needs to keep track of information, this guide will help you navigate the app's features effectively.</p>
                </div>
            </div>
        </div>
    )
}

export default About