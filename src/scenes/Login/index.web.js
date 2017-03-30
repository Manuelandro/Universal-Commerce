import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { ScrollView, Card, CardSection, Input, Button, ErrorMsg, Spinner } from '../../components/web'
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
                    <Link to="/productlist">Product List</Link>
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