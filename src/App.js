import React from 'react';

class Tile extends React.Component {
    render() {
        return (
            <div className="tile">
                <h4>{this.props.tilesData['name']} </h4>
                <p><i>{this.props.tilesData['dates']}</i></p>
                <p>{this.props.tilesData['text']}</p>
                <p><b>{this.props.tilesData['stack']}</b></p>
                {this.props.tilesData['url'] ? (<a href={this.props.tilesData['url']}>Link</a>) : (<p>(in development)</p>)}

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
            return <div key={links['name']}><a href={links['link']}>{links['name']}</a></div>
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
