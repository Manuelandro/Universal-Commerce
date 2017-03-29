import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from './actions'

class Login extends Component {

    renderButton() {
        const { login, loginStart } = this.props

        return (
            <a onClick={() => loginStart(login)}>
                Login!
            </a>
        )
    }

    render() {
        const { login, saveField } = this.props

        return (
            <div>
                <div>
                    <div>
                        <input
                            label="Email"
                            placeholder="example@email.com"
                            value={login.email}
                            onChangeText={value => saveField({ prop: 'email', value })}
                        />
                    </div>
                    <div>
                        <input
                            label="Password"
                            placeholder="password"
                            secureTextEntry
                            value={login.password}
                            onChangeText={value => saveField({ prop: 'password', value })}
                        />
                    </div>

                    <div>
                        {this.renderButton()}
                    </div>

                    <p>{login.error}</p>

                    <p>
                        Non hai un account? Registrati
                    </p>
                </div>
            </div>
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