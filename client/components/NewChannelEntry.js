import React, { Component } from 'react';
import {connect} from 'react-redux';
import { writeChannel, postChannel } from '../store';

function NewChannelEntry (props) {
  return (
    <form  onSubmit={props.handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Create a Channel</label>
        <input 
        onChange={props.handleChange} 
        className="form-control" 
        type="text" name="channelName" 
        placeholder="Enter channel name" 
        value={props.newChannelEntry}/>
      </div>
      <div className="form-group">
        <button type="submit" className="btn btn-default">Create Channel</button>
      </div>
    </form>
  );
}

/** Write your `connect` component below! **/

function mapDispatchToProps(dispatch) {
  return {
     handleChange(event) {
      dispatch(writeChannel(event.target.value));
    },
    handleSubmit(event) {
      event.preventDefault();
      console.log("target here...", event.target);
      const name = event.target.channelName.value;
      dispatch(postChannel({name: name }))
    }
  };
}


function mapStateToProps (state) {
  return {
    newChannelEntry: state.newChannelEntry
  };
};

const NewChannelEntryContainer = connect(mapStateToProps, mapDispatchToProps)(NewChannelEntry);

export default NewChannelEntryContainer;
