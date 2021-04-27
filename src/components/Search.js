import React from 'react'

class Search extends React.Component {
    state = {
        searchString: "",
    };

    handleInputChange = event => {
        let value = event.target.value;
        const name = event.target.name;

        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = (event) => {
        event.preventDefault();
    };

    render() {
        return (
            <div>
                <form 
                    onSubmit={this.handleFormSubmit}
                    onChange={this.handleInputChange}
                    className="form-inline justify-content-center">
                        <input 
                            type="text"
                            name="searchString"
                            value={this.state.searchString} 
                            placeholder="Search" 
                            className="form-control"
                            onChange={this.handleInputChange}
                            onSubmit={this.handleFormSubmit}
                        />
                </form>
                <br></br>
            </div>
        )
    }
};

export default Search;