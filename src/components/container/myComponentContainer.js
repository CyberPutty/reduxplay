import React from 'react';
import {connect} from 'react-redux';
import {dispatchUpdate} from '../../actions/actions';
import MyComponent from '../presentational/myComponent';

const mapStateToProps= state =>({
    connected: state.connected
   });
   
const mapsDispatchToProps= dispatch =>({
     dispatchUpdate:()=>{ dispatch(dispatchUpdate())}
   });

const connectedComponent= connect(mapStateToProps,mapsDispatchToProps)(MyComponent);

export default connectedComponent;