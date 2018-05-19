import React from 'react'
import { Link } from 'react-router-dom'
import store from '../store/Store'
import avatar from '../avatar.png'

export default class Menu extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            click : props.click
        }
    }
    render(){

        return(
            <section className='linkToProfile'>
                {store.getState().bioInfo[0] ? store.getState().bioInfo.map((a,i) =>(
                        <Link className={`${i} link`} key={i} to={`user${i}`} onClick={this.state.click}>
                            <div className='bioInfo'>
                                <figure><img src={avatar} alt='avatar'/></figure>
                                <figcaption>{a['name']}</figcaption>
                            </div>
                            <br/>
                        </Link>
                )) : null
                }
            </section>)
    }
}