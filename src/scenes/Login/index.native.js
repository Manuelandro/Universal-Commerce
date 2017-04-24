import React, { Component, PropTypes } from 'react'
import { Text } from 'react-native'
import { connect } from 'react-redux'
import { ScrollView, Card, CardSection, Input, Button, ErrorMsg, Spinner } from '../../components/native'
import * as actions from './actions'
import { navigateTo } from '../../logic/Navigation'

class Login extends Component {
    static propTypes = {
        login: PropTypes.object.isRequired,
        loginStart: PropTypes.func.isRequired,
        saveField: PropTypes.func.isRequired,
        resetScene: PropTypes.func.isRequired,
        navigation: PropTypes.object.isRequired,
        history: PropTypes.object.isRequired
    }
    static navigationOptions = {
        title: 'Login'
    }

    componentWillMount() {
        /* here the logic of login action */
    }

    componentWillReceiveProps() {
        const { login, resetScene, navigation } = this.props

        if (login.changeScene) {
            resetScene()
            navigateTo(navigation, 'ProductList')
        }
    }

    renderContent() {
        switch (this.state.logged) {
            case true:
                return (
                    <Button onPress={() => console.log('develop logout')}>Logout</Button>
                )
            case false:
                return
            default:
                return (
                    <Spinner />
                )
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
        const { login, saveField, navigation } = this.props

        return (
            <ScrollView>
                <Card>
                    <CardSection>
                        <Input
                            label="Email"
                            placeholder="example@email.com"
                            autoCapitalize="none"
                            value={login.email}
                            onChangeText={value => saveField({ prop: 'email', value })}
                        />
                    </CardSection>
                    <CardSection>
                        <Input
                            label="Password"
                            placeholder="password"
                            autoCapitalize="none"
                            secureTextEntry
                            value={login.password}
                            onChangeText={value => saveField({ prop: 'password', value })}
                        />
                    </CardSection>

                    <CardSection>
                        {this.renderButton()}
                    </CardSection>

                    <ErrorMsg>{login.error}</ErrorMsg>

                    <Text
                        onPress={() => navigation.navigate('Register')}
                    >
                        Non hai un account? Registrati
                    </Text>

                    <Text
                        onPress={() => navigation.navigate('ProductList')}
                    >
                        Product List
                    </Text>
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