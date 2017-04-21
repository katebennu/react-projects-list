import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class Panel extends React.Component {
    render() {
        return (
            < div className="panel">
                <p>Hello React</p>
            </div>
        );
    }
}

class Page extends React.Component {
    render() {
        return ( < div className="container page">
                < div className="page-content">
                    < Panel/>
                </div>
            </div>
        );
    }
}


export default Page;
