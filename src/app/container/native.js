import React, { Component, PropTypes } from 'react'
import { View } from 'react-native'
import { addNavigationHelpers } from 'react-navigation'
import { graphql, compose } from 'react-apollo'
import { connect } from 'react-redux'
import Routes from '../routes/native'
import { RewritesList } from '../../../server/graphql/queries/rewrite'


class UniversalApp extends Component {
    static propTypes = {
        data: PropTypes.shape({
            loading: PropTypes.bool,
            categories: PropTypes.array
        }).isRequired
    }

    constructor() {
        super()
        this.state = { logged: null }
    }

    render() {
        const { dispatch, routing, data: { loading, categories } } = this.props

        if (loading) {
            return (
                <View style={{ flex: 1 }} />
            )
        }


        return (
            <View style={{ flex: 1 }}>
                <Routes
                  categories={categories}
                  // https://reactnavigation.org/docs/guides/redux
                  navigation={addNavigationHelpers({
                      dispatch,
                      state: routing
                  })}
                />
            </View>
        )
    }

}

const mapStateToProps = ({ routing }) => ({ routing })

export default compose(
  graphql(RewritesList, { /* name: 'getRewrites' fix this */ }),
  connect(mapStateToProps)
)(UniversalApp)