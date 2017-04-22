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
                <Tile key={tilesData['name']} tilesData={tilesData}/>
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


        return (
            <div className="container page">

                <div className="page-content">
                    <Info infoData={this.props.data['infoData']}/>
                    <Panel tilesData={this.props.data['tilesData']}/>
                </div>
            </div>
        );
    }
}


export default Page;
