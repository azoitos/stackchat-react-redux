import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import store from '../store';
import {connect} from 'react-redux';

// These values are all hardcoded...for now!
// Soon, we'll fetch them from the server!
// const RANDOM_CHANNEL = '/channels/1';
// const GENERAL_CHANNEL = '/channels/2';
// const DOGS_CHANNEL = '/channels/3';
// const LUNCH_CHANNEL = '/channels/4';

function ChannelList (props) {
  console.log('----props---',props)
  const channels = props.channelList;
  const messages = props.messages;
  // console.log(messages);
    return (
      <ul>
      {channels.length && channels.map(channel => {
        return (<li key={channel.id}>
          <NavLink to={`/channels/${channel.id}`} activeClassName="active">
            <span># {channel.name}</span>
            <span className="badge">{messages.length && messages.filter(message => {
             return  message.channelId === channel.id 
            }).length }</span>
          </NavLink>
        </li>
        )
      })}
        <li>
          <NavLink to="/new-channel">Create a channel...</NavLink>
        </li>
      </ul>
    );
}

/** Write your `connect` component below! **/

function mapStateToProps (state) {
  return {
    channelList: state.channelList,
    messages: state.messages
  };
};

const ChannelListContainer = connect(mapStateToProps)(ChannelList);

export default ChannelListContainer;
