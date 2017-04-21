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
    renderTile(i) {
        return <Tile/>;
    }

    render() {
        return (
            <div className="panel">
                {this.renderTile(0)}
                {this.renderTile(1)}
                {this.renderTile(2)}
            </div>
        );
    }
}

class Page extends React.Component {


    render() {
        const data = [
            {'name': 'First item', 'text': 'This is the text of the first item'},
            {'name': 'Second item', 'text': 'This is the text of the second item'},
            {'name': 'Third item', 'text': 'This is the text of the third item'}
        ];
        return (
            <div className="container page">
                <div className="page-content">
                    <Panel data={data}/>
                </div>
            </div>
        );
    }
}


export default Page;
