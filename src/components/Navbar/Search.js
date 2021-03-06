import React from 'react'
import {connect} from 'react-redux'
import * as searchActions from "../../actions/SearchActions";
import {Link} from 'react-router-dom'

const dispatchToPropsMapper = dispatch => {
    return {
        changeSearchText: (text) => (searchActions.changeSearchText(text, dispatch)),
        searchTrials: (searchText) => (searchActions.searchTrials(searchText, dispatch))
    }
};

const stateToPropsMapper = ({trialsReducer}) => {
    console.log({trialsReducer});
    return {
        searchText: trialsReducer.searchText
    }
};

const SearchInLine = ({changeSearchText, searchTrials, searchText}) => {
    let inputElem;
    if(searchText == '')
            {
                searchText="cancer"
            }
    return (
        <div className="form-inline">
            <input className="form-control" type="search" placeholder="Search Trials" aria-label="Search"
                   ref={node => inputElem = node} onChange={() => {
                changeSearchText(inputElem.value)
            }}/>
            
            
            <Link to={`/search/${searchText}/results`}>
                <button className="btn" style={{"backgroundColor":"#149dcc"}} onClick={() => {
                    searchTrials(searchText)
                }}><span><i class="fas fa-2x fa-search" style={{"color":"white"}}></i></span>
                </button>
            </Link>

        </div>


    )
};

const SearchNavBar = connect(stateToPropsMapper, dispatchToPropsMapper)(SearchInLine);

export default SearchNavBar