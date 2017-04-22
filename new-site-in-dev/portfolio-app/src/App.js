import React from 'react';

class Tile extends React.Component {
    render() {
        return (
            <div className="tile">
                <p>Hi, I'm a {this.props.tilesData['name']} </p>
                <p>{this.props.tilesData['text']}</p>
            </div>
        );
    }
}


class Panel extends React.Component {
    render() {
        const tiles = this.props.tilesData.map((tilesData, i) => {
            return (
                <Tile key={i} tilesData={tilesData}/>
            )
        });

        return (
            <div className="panel">
                {tiles}
            </div>
        );
    }
}

class Info extends React.Component {
    render() {
        return (
            <div>
            <h3>{this.props.infoData['name']}</h3>
            <h4>{this.props.infoData['title']}</h4>
            <h5>{this.props.infoData['description']}</h5>
            </div>
        );
    }
}

class Page extends React.Component {
    render() {
        const tilesData = [
            {'name': 'First item', 'text': 'This is the text of the first item'},
            {'name': 'Second item', 'text': 'This is the text of the second item'},
            {'name': 'Third item', 'text': 'This is the text of the third item'},
            {'name': 'First item', 'text': 'This is the text of the first item'},
            {'name': 'Second item', 'text': 'This is the text of the second item'},
            {'name': 'Third item', 'text': 'This is the text of the third item'},
        ];

        const infoData  = {
            'name': 'Kay Bennu',
            'title': 'Web Developer',
            'description': 'Junior web developer with business background. Currently open for new projects, job and internship opportunities',
            'links': [
                {'name': 'Github', 'link': 'https://github.com/katebennu'},
                {'name': 'Linkedin', 'link': 'https://www.linkedin.com/in/ekaterinadorrer/'},
                {'name': 'Codewars', 'link': 'https://www.codewars.com/users/katebennu'},
                {'name': 'Codepen', 'link': 'http://codepen.io/KateBennu/'}
            ]
        };

        return (
            <div className="container page">

                <div className="page-content">
                    <Info infoData={infoData}/>
                    <Panel tilesData={tilesData}/>
                </div>
            </div>
        );
    }
}


export default Page;
