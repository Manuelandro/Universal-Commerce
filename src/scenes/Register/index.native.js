import React, { Component } from 'react'
import { ScrollView } from 'react-native'
import { connect } from 'react-redux'
import { Actions } from 'react-native-router-flux'
import { Card, CardSection, Button, Input, Spinner } from '../../components/native'
import * as actions from './actions'

class Register extends Component {

    componentWillReceiveProps() {
        const { register, resetScene } = this.props

        if (register.changeScene) {
            Actions.main()
            resetScene()
        }
    }

    renderButton() {
        const { register, registerStart } = this.props

        if (register.loading) {
            return <Spinner />
        }

        return (
            <Button onPress={() => registerStart(register)}>
                Register!
            </Button>
        )
    }


    render() {
        const { firstname, lastname, email, password, saveField } = this.props

        return (
            <ScrollView>
                <Card>
                    <CardSection>
                        <Input
                            label="Nome"
                            placeholder="Mario"
                            value={firstname}
                            onChangeText={value => saveField({ prop: 'firstname', value })}
                        />
                    </CardSection>
                    <CardSection>
                        <Input
                            label="Cognome"
                            placeholder="Rossi"
                            value={lastname}
                            onChangeText={value => saveField({ prop: 'lastname', value })}
                        />
                    </CardSection>
                    <CardSection>
                        <Input
                            label="Email"
                            placeholder="example@email.com"
                            autoCapitalize="none"
                            value={email}
                            onChangeText={value => saveField({ prop: 'email', value })}
                        />
                    </CardSection>
                    <CardSection>
                        <Input
                            label="Password"
                            placeholder="password"
                            autoCapitalize="none"
                            secureTextEntry
                            value={password}
                            onChangeText={value => saveField({ prop: 'password', value })}
                        />
                    </CardSection>

                    <CardSection>
                        {this.renderButton()}
                    </CardSection>
                </Card>
            </ScrollView>
        )
    }
}


const { saveField, registerStart, resetScene } = actions

const mapStateToProps = ({ register }) => ({ register })
const mapDispatchToProps = { saveField, registerStart, resetScene }


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Register)