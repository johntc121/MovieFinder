import React from 'react';

const Search = (props) => {
    return (
        <div className="container">
            <div className="row">
                <section className="col s8 offset-s2">
                    <form action="" onSubmit={props.handleSubmit}>
                        <div className="input-field">
                            <input placeholder="Search Game" type="text" onChange={props.handleChange}/>
                            <button>Search</button>
                        </div>
                    </form>
                </section>
            </div>
        </div>
    )
}

export default Search;