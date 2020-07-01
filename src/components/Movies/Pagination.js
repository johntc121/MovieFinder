import React from 'react';

const Pagination = (props) => {
    const linksToPages = [];

    for (let i = 1; i <= props.numPages + 1; i++){
        let current = props.currentPage === i ? 'active' : '';

        linksToPages.push(<li className={`waves-effect ${current}`} key={i} onClick={() => props.nextPage(i)}>
            <a href="#">{i}</a>
        </li>)
    }

    if (props.numPages > 1){
        return(
            <div className="container">
                <div className="row">
                    <ul className="pagination">
                        {linksToPages}
                    </ul>
                </div>
            </div>
        )
    }
    else { 
        return null
    }
}

export default Pagination;