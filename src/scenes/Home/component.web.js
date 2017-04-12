import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup'
import { CardSection } from '../../components/web/'

class Home extends Component {

    render() {
        return (
            <CardSection>
                <div>home</div>
                <Link to="/la-macelleria">La Macelleria</Link>
            </CardSection>
        )
    }
}

export default Home