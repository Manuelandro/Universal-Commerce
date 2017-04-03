import firebase from 'firebase'
import React, { Component } from 'react'
import { View } from 'react-native'
import { graphql } from 'react-apollo'
import Routes from '../routes/native'
import { Button, Spinner } from '../../components/native'
import { CategoriesListQuery } from '../../../server/graphql/queries/category'

class UniversalApp extends Component {
  constructor() {
    super()
    this.state = { logged: null }
  }

  componentWillMount() {
    /* if the auth state changes */
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ logged: true })
      } else {
        this.setState({ logged: false })
      }
    })
  }

  renderContent() {
    switch (this.state.logged) {
      case true:
        return (
          <Button onPress={() => firebase.auth().signOut()}>Logout</Button>
        )
      case false:
        return
      default:
        return (
          <Spinner />
        )
    }
  }

  render() {
    const { data: { loading, categories } } = this.props

    if (loading) {
        return <div>...</div>
    }

    return (
        <View style={{ flex: 1 }}>
          <Routes categories={categories} />
        </View>
    )
  }

}

export default graphql(
    CategoriesListQuery, {
        // name: 'getCategories' fix this
    }
)(UniversalApp)