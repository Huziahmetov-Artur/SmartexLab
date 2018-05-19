import React from 'react'
import {connect} from 'react-redux';
import {getBioInfo} from '../actions/actionForBio'
import { Switch, Route } from 'react-router-dom'
import Menu from '../components/menu.js'
import Draw from '../components/mapAndRouter.js'

class SmartexTask extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            fol :  false,
            curretntinfo: -1,
            bookmark : 1
        };
        this.changeState = this.changeState.bind(this);
        this.changeClose = this.changeClose.bind(this);
    }
    componentDidMount(){
        this.props.setBio();
    }
    changeState(e){
        this.setState({
            fol : true,
            curretntinfo : e.target.className,
            bookmark : 1
        })
    }
    changeClose(){
        this.setState({
            bookmark : 0
        });
    }
    render(){

        return (
                <div className='mainPart'>
                    <Menu  click={this.changeState}/>
                    <Switch>
                        {this.props.store.bioInfo[0] ? this.props.store.bioInfo.map((a,i) =>
                            <Route key={i} path={`/user${i}`} render={() =>
                                <Draw user={this.props.store.bioInfo} click={this.changeClose} close={this.state.bookmark} number={i}/>
                            }/>
                        ) : null}
                    </Switch>
                </div>

            )
        }

}

export default connect(
    state => ({
        store: state
    }),
    dispatch => ({
        setBio : () => {dispatch(getBioInfo())}
    })
)(SmartexTask)

