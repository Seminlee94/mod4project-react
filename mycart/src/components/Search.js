import React, { Fragment } from 'react'

const Search = (props) => {
return (
        <form className="search">
            <input
                placeholder="Search item"
                // value={props.searchValue}
                // onChange={props.search}
            />
        </form>
    );
}

export default Search