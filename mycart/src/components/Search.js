import React from 'react'

class Search extends React.Component {

    onChange = (e) => {
      console.log(e.target.value, "searchbar triggering");
      this.props.search(e.target.value);
    };

    render(props) {
      return (
        <form className="search">
             <input
                placeholder="search"
                value={this.props.value}
                onChange={this.onChange}
             ></input>
        </form>
      );
    }
}

export default Search