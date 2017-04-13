import React from 'react'
import { Route } from 'react-router'

class SuperRoute extends Route {

    render() {
        const { match } = this.state
        const { children, component, render } = this.props
        const { history, route, staticContext } = this.context.router
        const location = this.props.location || route.location
        const props = { ...this.props, history, staticContext, location }

        return (
            component
                ? (match
                    ? React.createElement(component, props)
                    : null
                )
                : render
                    ? (match ? render(props) : null)
                    : children
                        ? (typeof children === 'function'
                            ? (children(props))
                            : !Array.isArray(children) || children.length
                                ? (React.Children.only(children))
                                : (null)
                            ) : (null)
        )
    }
}

export default SuperRoute