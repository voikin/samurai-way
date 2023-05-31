import React from 'react';
import {ParticipantsPropsType} from "./ParticipantsContainer";
import {Participants} from './Participants';
import {Loading} from "../../common/components/Loading";


class ParticipantsAxiosQueryComponents extends React.Component<ParticipantsPropsType> {

    componentDidMount() {

        this.props.getPaticipants(this.props.activePage, this.props.count)
    }

    render() {

        return <>
            {this.props.isLoading && <Loading/>}

            <Participants
                getPaticipants={this.props.getPaticipants}
                setFriend={this.props.setFriend}
                deleteFriend={this.props.deleteFriend}
                disabled={this.props.disabled}
                totalCount={this.props.totalCount}
                count={this.props.count}
                activePage={this.props.activePage}
                participants={this.props.participants}
                showPaticipants={this.props.showPaticipants}
            />
        </>

    }
}

export default ParticipantsAxiosQueryComponents



