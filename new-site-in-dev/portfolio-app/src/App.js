import React, {Component} from 'react';

class Tile extends React.Component {
    render() {
        return (
            <div className="tile">
                <p>Hi, I'm a Tile</p>
            </div>
        );
    }
}


class Panel extends React.Component {
    render() {
        const data = [
            {'name': 'First item', 'text': 'This is the text of the first item'},
            {'name': 'Second item', 'text': 'This is the text of the second item'},
            {'name': 'Third item', 'text': 'This is the text of the third item'},
        ];

        const tiles = data.map((i) => {
            return (
                <Tile/>
            )
        });

        return (
            <div className="panel">
                {tiles}
            </div>
        );
    }
}

class Page extends React.Component {


    render() {
        return (
            <div className="container page">
                <div className="page-content">
                    <Panel/>
                </div>
            </div>
        );
    }
}


export default Page;
