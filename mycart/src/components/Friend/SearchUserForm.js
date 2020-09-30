import React from 'react'

class SearchUserForm extends React.Component {

    state = {
        searchTerm: ""
    }

    changeHandler = (e) => {
        e.persist()
        this.setState(() => ({
            searchTerm: e.target.value
        }))
    }

    submitHandler = (e) => {
        e.preventDefault()
        this.props.submitHandler(this.state)
    }


    render(){

        return (
            <div>
                <form className="search-user-form" onSubmit={this.submitHandler}>
                    <input 
                        className="search-input" 
                        type="text" 
                        placeholder="Search by username"
                        value={this.state.searchTerm} 
                        onChange={this.changeHandler} />
                    <button className="search-button">Submit</button>
                </form>
                
            </div>
        )
    }
}

export default SearchUserForm