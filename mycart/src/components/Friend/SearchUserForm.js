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
            <form onSubmit={this.submitHandler}>
                <input type="text" value={this.state.searchTerm} onChange={this.changeHandler} />
                <button>Submit</button>
            </form>
        )
    }
}

export default SearchUserForm