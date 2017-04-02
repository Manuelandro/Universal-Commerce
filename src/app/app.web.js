import firebase from 'firebase'
import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import { CategoriesListQuery } from '../../web/server/graphql/queries/category'
import Routes from './routes/web'

class UniversalApp extends Component {
  constructor() {
    super()
    this.state = { logged: null }
  }

  componentWillMount() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ logged: true })
      } else {
        this.setState({ logged: false })
      }
    })
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
        name: 'getCategories',
        options: {
            ssr: true
        },
    }
)(UniversalApp)