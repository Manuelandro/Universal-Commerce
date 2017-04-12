import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { ScrollView, Card, CardSection, Input, Button, ErrorMsg, Spinner } from '../../components/web'
import * as actions from './actions'
import { navigateTo } from '../../logic/Navigation'

class Login extends Component {
    static propTypes = {
        login: PropTypes.object.isRequired,
        loginStart: PropTypes.func.isRequired,
        saveField: PropTypes.func.isRequired,
        resetScene: PropTypes.func.isRequired,
        history: PropTypes.object.isRequired
    }

    componentWillReceiveProps() {
        const { login, resetScene, history } = this.props

        if (login.changeScene) {
            resetScene()
            navigateTo(history, 'productlist')
        }
    }

    renderButton() {
        const { login, loginStart } = this.props

        if (login.loading) {
            return <Spinner />
        }

        return (
            <Button onPress={() => loginStart(login)}>
                Login!
            </Button>
        )
    }

    render() {
        const { login, saveField } = this.props

        return (
            <ScrollView>
                <Card>
                    <CardSection>
                        <Input
                            label="Email"
                            placeholder="example@email.com"
                            value={login.email}
                            onChange={(value) => saveField({ prop: 'email', value })}
                        />
                    </CardSection>
                    <CardSection>
                        <Input
                            label="Password"
                            placeholder="password"
                            secureTextEntry
                            value={login.password}
                            onChange={value => saveField({ prop: 'password', value })}
                        />
                    </CardSection>

                    <CardSection>
                        {this.renderButton()}
                    </CardSection>

                    <ErrorMsg>{login.error}</ErrorMsg>

                    <p>
                        Non hai un account? Registrati
                    </p>
                </Card>
            </ScrollView>
        )
    }
}

const { saveField, loginStart, resetScene } = actions
const mapStateToProps = ({ login }) => ({ login })
const mapDispatchToProps = { saveField, loginStart, resetScene }


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login)