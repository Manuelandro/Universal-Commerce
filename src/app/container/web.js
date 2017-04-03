import firebase from 'firebase'
import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import { CategoriesListQuery } from '../../../server/graphql/queries/category'
import Routes from '../routes/web'
import { firebaseInit } from '../../logic/Firebase/init'

class UniversalApp extends Component {
  constructor() {
    super()
    this.state = { logged: null }
  }

  componentWillMount() {
    // init firebase where the server can't read
    /*firebaseInit()

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ logged: true })
      } else {
        this.setState({ logged: false })
      }
    })*/
  }

  render() {
    const { data: { loading, categories } } = this.props

    if (loading) {
        return <div>...</div>
    }

    return (
        <div style={{ flex: 1 }}>
            <Routes categories={categories} />
        </div>
    )
  }

}

export default graphql(
    CategoriesListQuery, {
        // name: 'getCategories', fix this
        options: {
            ssr: true
        },
    }
)(UniversalApp)