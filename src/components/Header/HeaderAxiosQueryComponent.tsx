import React from "react";
import {HeaderType} from "./HeaderContainer";
import {Header} from "./Header";


class HeaderAxiosQueryComponent extends React.Component<HeaderType> {
    componentDidMount() {
        this.props.getAuthMe()
    }

    render() {
        return <Header
            getAuthMe={this.props.getAuthMe}
            logout={this.props.logout}
            isLogin={this.props.isLogin}
            id={this.props.id}
            login={this.props.login}
            email={this.props.email}/>
    }
}

export default HeaderAxiosQueryComponent