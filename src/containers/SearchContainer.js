import React from 'react';
import Search from './../components/Search.js';
import { connect } from 'react-redux';
import handleVideoSearch from '../actions/search.js';


const mapStateToProps = (state, ownProps) => ({})

const mapDispatchToProps = (dispatch, ownProps) => (
    { handleSearchInputChange: (q) => dispatch(handleVideoSearch(q)) }
)

const SearchContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Search)


export default SearchContainer;
