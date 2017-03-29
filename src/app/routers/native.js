import React from 'react'
import { Actions, Scene, Router } from 'react-native-router-flux'
import Login from '../../scenes/Login/index.native'
import Register from '../../scenes/Register/index.native'
import ProductList from '../../scenes/ProductList/index.native'
import About from '../../scenes/About/index.native'
import * as icons from '../../scenes/icons'


const scenes = Actions.create(
    <Scene key="root">
        <Scene key="auth">
            <Scene
                key="login"
                component={Login}
                title="Login"
                style={{ paddingTop: 60 }}
            />
            <Scene
                key="register"
                component={Register}
                title="Register"
                style={{ paddingTop: 60 }}
            />
        </Scene>
        <Scene key="main" tabs tabBarStyle={{ backgroundColor: '#f3f3f3' }}>
            <Scene
                key="productlist"
                component={ProductList}
                title="Product List"
                style={{ paddingTop: 60 }}
                icon={icons.productListIcon}
            />
            <Scene
                key="about"
                component={About}
                title="About"
                style={{ paddingTop: 60 }}
                icon={icons.aboutIcon}
            />
        </Scene>
    </Scene>
)

const RouterComponent = () => <Router scenes={scenes} />


export default RouterComponent