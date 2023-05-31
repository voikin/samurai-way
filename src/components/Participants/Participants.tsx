import React from 'react';
import userFoto from '../../assets/images/blackMan.jpg'
import st from './Participant.module.css'
import {NavLink} from 'react-router-dom';
import {ParticipanType} from "../../api/api";
import {Paginator} from "./Paginator";


type ParticipantsType = {
    totalCount: number
    count: number
    activePage: number
    participants: Array<ParticipanType>
    showPaticipants: (activePage: number, count: number) => void
    disabled: Array<number>
    deleteFriend: (idPartisipant: number) => void
    setFriend: (idPartisipant: number) => void
    getPaticipants: (activePage: number, count: number) => void
}

export const Participants = (props: ParticipantsType) => {


    const showPaticipantsHandler = (activePage: number) => {
        props.showPaticipants(activePage, props.count)
    }


    return (
        <div>
            <Paginator
                count={props.count}
                totalCount={props.totalCount}
                showPaticipants={showPaticipantsHandler}
                activePage={props.activePage}
            />

            {
                props.participants.map(el => {
                    return (
                        <div key={el.id}>
                          <span>
                              <div>
                                  <NavLink to={'/profile/' + el.id}>
                           <img src={el.photos.small !== null
                               ? el.photos.small
                               : userFoto}
                                className={st.photo}
                                alt={'user photo'}
                           />
                                      </NavLink>
                              </div>
                              {
                                  el.followed
                                      ? <button disabled={props.disabled.some(
                                          elem => elem === el.id)}
                                                onClick={() => {
                                                    props.deleteFriend(el.id)
                                                }
                                                }>FRIEND</button>

                                      : <button disabled={props.disabled.some(
                                          elem => elem === el.id)}
                                                onClick={() => {
                                                    props.setFriend(el.id)
                                                }
                                                }>PERSON</button>
                              }

                          </span>
                            <span>

                                <span>{el.name}</span>
                                <span>. - </span>
                                <span>{el.status}</span>

                            </span>
                        </div>
                    )
                })
            }
        </div>
    )
}
