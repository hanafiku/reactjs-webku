import React, { Component } from 'react'
import './LifeCycleComp.css'

class LifeCycleComp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 1
        }
        console.log('constructor');
    }

    static getDerivedStatedFromProps(props, state){
        console.log('getDerivedStatedFromProps');
        return null;
    }

    componentDidMount () {
        console.log('componentDidMount');
    }

    shouldComponentUpdate (nextProps, nextState) {
        console.log('shouldComponentUpdate');
    }

    getSnapshotBeforeUpdate (prevProps, prevState) {
        console.log('getSnapshotBeforeUpdate');
    }

    componentDidUpdate (prevProps, prevState, snapshot) {
        console.log('componentDidUpdate');
    }

    componentWillMount () {
        console.log('componentWillMount');
    }

    render() {
        return (
            
            <button className="btn">Component button</button>
        )
    }
}
export default LifeCycleComp;