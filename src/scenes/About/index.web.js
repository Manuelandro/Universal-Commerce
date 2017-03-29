import React, { Component } from 'react'
import { connect } from 'react-redux'

class About extends Component {

    render() {
        return (
            <div>
            about
            </div>
        )
    }
}

const mapStateToProps = state => ({ about: state.about })

export default connect(mapStateToProps)(About)