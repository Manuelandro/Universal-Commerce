import React from 'react'
import { Actions, Scene, Router } from 'react-native-router-flux'
import * as comps from '../scenes/'
import * as icons from '../scenes/icons'


const scenes = Actions.create(
    <Scene key="root">
        <Scene key="auth">
            <Scene
                key="login"
                component={comps.Login}
                title="Login"
                style={{ paddingTop: 60 }}
            />
            <Scene
                key="register"
                component={comps.Register}
                title="Register"
                style={{ paddingTop: 60 }}
            />
        </Scene>
        <Scene key="main" tabs tabBarStyle={{ backgroundColor: '#f3f3f3' }}>
            <Scene
                key="productlist"
                component={comps.ProductList}
                title="Product List"
                style={{ paddingTop: 60 }}
                icon={icons.productListIcon}
            />
            <Scene
                key="about"
                component={comps.About}
                title="About"
                style={{ paddingTop: 60 }}
                icon={icons.aboutIcon}
            />
        </Scene>
    </Scene>
)

const RouterComponent = () => <Router scenes={scenes} />


export default RouterComponent