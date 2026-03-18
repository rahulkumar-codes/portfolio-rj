import React from 'react'

const Search = () => {
    return (
        <div>
            <input type="text" className='bg-gray-600 px-2 py-1 rounded-l-[5px] outline-0' />
            <button className='px-2 bg-blue-600 py-1 cursor-pointer rounded-r-[5px] hover:bg-blue-700'>Search</button>
        </div>
    )
}

export default Search
