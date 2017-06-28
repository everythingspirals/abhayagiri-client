import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: ''
        };
    }

    componentWillMount() {
        this.getTitle(this.props.routes);
    }

    componentWillReceiveProps(nextProps) {
        this.getTitle(nextProps.routes);
    }

    getTitle(routes) {
        let route = routes[routes.length - 1];

        this.setState({
            title: route.name
        });
    }

    render() {
        return (
            <div className="main">
                Hello, world.
                {/*<div className="page">
                    {React.cloneElement(this.props.children, { params: this.props.params })}
                </div>*/}
            </div>
        );
    }
}

Main.propTypes = {
    children: PropTypes.node,
    routes: PropTypes.array,
    params: PropTypes.object
};

export default Main;