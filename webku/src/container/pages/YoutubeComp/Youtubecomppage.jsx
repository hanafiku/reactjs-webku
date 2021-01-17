import React, { Component,Fragment } from 'react'
import YoutubeComp from '../../../component/YoutubeComp/YoutubeComp'

class YoutubeComp extends Component {
    render() {
        return (
            <Fragment>
                 <h1>Youtube Component</h1>
                <hr/>
                <YoutubeComp time="5.12" title="Latihan react-web bagian 2" desc="what the fuck"/>
                <YoutubeComp time="4.12" title="Latihan react-web bagian 1" desc="what the fuck"/>
                <YoutubeComp time="8.12" title="Latihan react-web bagian 3" desc="what the fuck"/>
                <YoutubeComp time="3.12" title="Latihan react-web bagian 4" desc="what the fuck"/>
                <YoutubeComp />
            </Fragment>
        )
    }
}
export default YoutubeComp;