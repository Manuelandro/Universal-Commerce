import React, { Component } from 'react'
import { ListView } from 'react-native'
import { connect } from 'react-redux'
import AboutRow from './components/row'

class About extends Component {

    componentWillMount() {
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        })

        this.dataSource = ds.cloneWithRows(this.props.about)
    }

    renderRow(row) {
        return <AboutRow row={row} />
    }

    render() {
        return (
            <ListView
                dataSource={this.dataSource}
                renderRow={this.renderRow}
            />
        )
    }
}

const mapStateToProps = state => ({ about: state.about })

export default connect(mapStateToProps)(About)