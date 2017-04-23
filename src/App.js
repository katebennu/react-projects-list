import React from 'react';

class Tile extends React.Component {
    render() {
        return (
            <div className="tile">
                <div className="tile-name"><h4>{this.props.tilesData['name']} </h4></div>
                <div className="tile-content">
                    <p><i>{this.props.tilesData['dates']}</i></p>
                    <p>{this.props.tilesData['text']}</p>
                    <p><b>{this.props.tilesData['stack']}</b></p>
                    {this.props.tilesData['url'] ? (<a href={this.props.tilesData['url']}>Link</a>) : (
                        <p>(in development)</p>)}
                </div>
            </div>
        );
    }
}


class Panel extends React.Component {
    render() {
        const tiles = this.props.tilesData.map((tilesData) => {
            return <Tile key={tilesData['name']} tilesData={tilesData}/>
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
        const links = this.props.infoData['links'].map((links) => {
            return <a href={links['link']}><div key={links['name']}>{links['name']}</div></a>
        });
        return (
            <div>
                <h3>{this.props.infoData['name']}</h3>
                <h4>{this.props.infoData['title']}</h4>
                <h5>{this.props.infoData['description']}</h5>
                <div className="contact-links">{links}</div>
            </div>
        );
    }
}

class Page extends React.Component {
    render() {
        return (
            <div className="parallax page">
                <div className="container page-content">
                    <Info infoData={this.props.data['infoData']}/>
                    <Panel tilesData={this.props.data['tilesData']}/>
                </div>
            </div>
        );
    }
}


export default Page;
