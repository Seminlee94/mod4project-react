import React from 'react'

class Search extends React.Component {

    onChange = (e) => {
      this.props.search(e.target.value);
    };
    
    render(props) {
    
      return (
        <form className="search">
             <input
                placeholder="search"
                value={this.props.searchValue}
                onChange={this.onChange}
             ></input>
        </form>
      );
    }
}

export default Search