import React from 'react'
import { Link } from 'react-router-dom'
import {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker,
} from "react-google-maps";
const MapWithAMarker = withScriptjs(withGoogleMap(props =>
    <GoogleMap
        defaultZoom={1}
        defaultCenter={{ lat: Number(props.lat), lng: Number(props.lng) }}

    >
        <Marker
            position={{ lat: Number(props.lat), lng: Number(props.lng) }}
        />
    </GoogleMap>
));
export default class Draw extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            click : props.click,
            number : props.number,
            close : props.close,
            user : props.user
        }
    }
    render(){
        if(Number(this.state.number) !== -1){
            return <div className={this.state.close ? 'modalWindow' : 'noe'} >
                <div>
                    <Link to='/' className='close'>X</Link>
                    <p>Login : <span>{this.state.user[this.state.number]['login']}</span></p>
                    <p>Website : <span>{this.state.user[this.state.number]['bio']}</span></p>
                    <p>Email : <span>{this.state.user[this.state.number]['email']}</span></p>
                    <p onClick={this.state.click}>Phone : <span>{this.state.user[this.state.number]['phone']}</span></p>
                    <div  className='map'>
                    <MapWithAMarker
                        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyANkyLK-kIz5HS56RyfJ9A6lleXQ3Lixdk&v=3.exp&libraries=geometry,drawing,places"
                        loadingElement={<div style={{ height: `100%`,width : '100%' }} />}
                        containerElement={<div style={{ height: `400px`,width : '400px' }} />}
                        mapElement={<div style={{ height: `100%`,width : '100%' }} />}
                        lat={this.state.user[this.state.number].lat}
                        lng={this.state.user[this.state.number].lng}

                    />
                    </div>
                </div>
            </div>
        }
        else return <div>Lox</div>
    }
}