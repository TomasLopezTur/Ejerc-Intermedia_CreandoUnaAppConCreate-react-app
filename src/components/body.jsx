import React, { Component } from "react";

class Body extends Component {

    constructor(props){
        super(props)
        this.state = {
            gif:[]
        }
    };
    apiCall(url, handler){
        fetch(url)
            .then(response => response.json())
            .then(data => handler(data))
            .catch(e => console.log(e))
    }

    viewGif = (data) => {
        console.log(data);
        this.setState({
            gif: data.data
        })
    };

    componentDidMount() {
        console.log('montado');
        this.apiCall( 'https://api.giphy.com/v1/gifs/trending?api_key=YznnebUmiHReNXxkL0iYtER8UgZUMlht', this.viewGif)
    };

    componentDidUpdate() {
        console.log('carg....');
    };

    render() {
        return (
            
                <div className="container" >
                    <div className="row text-center">
                        {this.state.gif.map(function (gif, i) {
                            return <div className="col-lg-3 col-md-6 mb-4">
                                <div className="card h-100 ">
                                    <img key={i + gif} className="card-img-top" src={gif.images.downsized.url} alt="" />
                                    <div className="card-body">
                                        <h4 key={i + gif} className="card-title">{gif.title}</h4>
                                    </div>
                                </div>
                            </div>
                            }
                        )}
                    </div>
                </div>
            
        );
    };
    
}
export default Body;