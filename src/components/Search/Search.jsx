import React, {useEffect, useState} from "react";

const Search = ( props ) => {

    const [searchText, setSearchText]   = useState("");


    const handleChangeName = (e) => {
        setSearchText(e.target.value);
    }

    useEffect(() => {
        props.onSearch( searchText )
    }, [searchText])


    return (
        <div className='search-section'>
            <div className="container d-flex gap-4">
                <div className='flex-grow-1'>
                    <input className="form-control" type="text" placeholder="Search By Name or Tags" value={searchText}
                           onChange={handleChangeName}/>
                </div>
            </div>
        </div>
    );
}

export default Search;