import React, { Component } from 'react'
import { ScrollView, Text } from 'react-native'
import { connect } from 'react-redux'
import { Actions } from 'react-native-router-flux'
import { Card, CardSection, Input, Button, ErrorMsg, Spinner } from '../../components/native'
import * as actions from './actions'

class Login extends Component {

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
                        onPress={() => Actions.register()}
                    >
                        Non hai un account? Registrati
                    </Text>
                </Card>
            </ScrollView>
        )
    }
}

const { saveField, loginStart } = actions
const mapStateToProps = ({ login }) => ({ login })
const mapDispatchToProps = { saveField, loginStart }


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login)