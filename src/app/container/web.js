// import firebase from 'firebase'
import React, { Component } from 'react'
import { graphql, compose } from 'react-apollo'
import { RewritesList } from '../../../server/graphql/queries/rewrite'
import Routes from '../routes/web'
import { Header } from '../../components/web'
// import { firebaseInit } from '../../logic/Firebase/init'

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
        const { data: { loading, rewrites } } = this.props

        if (loading) {
            return <div>...</div>
        }

        return (
            <div style={{ flex: 1 }}>
                <Header />
                <div style={{ padding: '60px 5% 0' }}>
                    <Routes rewrites={rewrites} />
                </div>
            </div>
        )
    }

}

const RewritesListOptions = {
    options: {
        ssr: true
    }
}

export default compose(
    graphql(RewritesList, RewritesListOptions)
)(UniversalApp)