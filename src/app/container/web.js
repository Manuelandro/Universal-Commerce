import React, { Component } from 'react'
import { graphql, compose } from 'react-apollo'
import { RewritesList } from '../../../server/graphql/queries/rewrite'
import Routes from '../routes/web'
import { Header } from '../../components/web'

class UniversalApp extends Component {
    componentWillMount() {

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