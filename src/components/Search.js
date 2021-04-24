import React from 'react'

class Search extends React.Component {
    render() {
        return (
            <div>
                <form className="form-inline justify-content-center">
                <input type="text" placeholder="Search" className="form-control">
                </input>
                </form>
            </div>
        )
    }
}

export default Search;