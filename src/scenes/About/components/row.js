import React, { Component } from 'react'
import { Text, LayoutAnimation } from 'react-native'
import { connect } from 'react-redux'
import { Card, CardSection } from '../../../components/native/'
import * as actions from '../actions'

class AboutRow extends Component {

    componentWillUpdate() {
        LayoutAnimation.spring()
    }

    renderDescription() {
        if (!this.props.row.selected) {
            return
        }

        return (
            <CardSection>
                <Text style={styles.descStyle}>
                    {this.props.row.description}
                </Text>
            </CardSection>
        )
    }

    render() {
        const { id, title } = this.props.row

        return (
            <Card>
                <CardSection>
                    <Text
                        style={styles.titleStyle}
                        onPress={() => this.props.selectSection(id)}
                    >
                        {title}
                    </Text>
                </CardSection>
                {this.renderDescription()}
            </Card>
        )
    }
}

const styles = {
    titleStyle: {
        flex: 1,
        fontSize: 18,
        paddingLeft: 15,
        backgroundColor: '#f2f2f2'
    },
    descStyle: {
        flex: 1,
        paddingLeft: 15,
        paddingRight: 15,
        paddingTop: 5,
        paddingBottom: 5
    }
}

const mapStateToProps = state => ({ about: state.about })

const mapDispatchToProps = dispatch =>
    ({
        selectSection: payload => dispatch(actions.selectSection(payload))
    })


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AboutRow)