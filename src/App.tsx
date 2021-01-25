import React from 'react';
import './App.css';
import {Header} from "./components/Header";


const App = () => {
    return (
        <div className='app-wraper'>
            <Header/>
            <nav className='nav'>
                <div>
                    <a href="#">Profile</a>
                </div>
                <div>
                    <a href="#">Messages</a>
                </div>
                <div>
                    <a href="#">News</a>
                </div>
                <div>
                    <a href="#">Music</a>
                </div>
                <div>
                    <a href="#">Settings</a>
                </div>
            </nav>
            <div className='content'>
                <div>
                    <img src="https://www.53construction.com/wp-content/uploads/2018/11/footer-bg.jpg" alt=""/>
                </div>
                <div>
                    ava+description
                </div>
                <div>
                    My posts
                    <div>New post</div>
                    <div>
                        <div>post1</div>
                        <div>post2</div>
                    </div>
                </div>
            </div>
        </div>

    );
}


export default App;
