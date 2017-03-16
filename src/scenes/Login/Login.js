import React, { Component } from 'react'
import { ScrollView } from 'react-native'
import firebase from 'firebase'
import { Card, CardSection, PageTitle, Input, Button, ErrorMsg, Spinner } from '../../components/common'

class Login extends Component {
    constructor() {
        super()
        this.state = { email: '', password: '', error: '', loading: false }
    }

    onButtonPress() {
        const { email, password } = this.state

        this.setState({ error: '', loading: true })
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(this.onLoginSuccess.bind(this))
            .catch(this.onLoginFailed.bind(this))
    }

    onLoginSuccess() {
        this.setState({
            email: '',
            password: '',
            loading: false,
            error: ''
        })
    }

    onLoginFailed(err) {
        this.setState({
            loading: false,
            error: err.message
        })

        /*firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((result) => {

            })
            .catch((error) => {
                this.setState({ error: error.message })
            })*/
    }


    renderButton() {
        if (this.state.loading) {
            return (
                <Spinner />
            )
        }

        return (
            <Button onPress={this.onButtonPress.bind(this)}>
                Login!
            </Button>
        )
    }

    render() {
        return (
            <ScrollView>
                <PageTitle>Login</PageTitle>
                <Card>
                    <CardSection>
                        <Input
                            label="Email"
                            placeholder="example@email.com"
                            autoCapitalize="none"
                            value={this.state.email}
                            onChangeText={email => this.setState({ email })}
                        />
                    </CardSection>
                    <CardSection>
                        <Input
                            label="Password"
                            placeholder="password"
                            autoCapitalize="none"
                            secureTextEntry
                            value={this.state.password}
                            onChangeText={password => this.setState({ password })}
                        />
                    </CardSection>

                    <CardSection>
                        {this.renderButton()}
                    </CardSection>

                    <ErrorMsg>{this.state.error}</ErrorMsg>

                </Card>
            </ScrollView>
        )
    }
}

export default Login