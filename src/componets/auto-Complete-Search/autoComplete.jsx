import { useState } from "react"
import { useEffect } from "react"
import Suggestions from "./suggestions"
import { Helmet } from 'react-helmet';
const AutoCompleteSearch = () => {
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(false)
    const [searchValue, setSearchValue] = useState('')
    const [error, setError] = useState(null)
    const [showDropdown, setShowDropDown] = useState(false)
    const [filterUser, setFilterUser] = useState([])

    const fetchUser = async () => {
        try {
            setLoading(true)
            const response = await fetch('https://dummyjson.com/users')
            const data = await response.json()
            setUsers(data.users.map(user => user.firstName))
            setLoading(false)
            setError(null)
        } catch (error) {
            console.log(error);
            setError(error)
            setLoading(false)
        }
    }
    useEffect(() => {
        fetchUser()
    }, [])

    const handleSearch = (e) => {
        const qurey = e.target.value.toLowerCase()
        setSearchValue(qurey)
        if (qurey.length > 1) {
            const filterData = users && users.length
                ? users.filter(user => user.toLowerCase().indexOf(qurey) > -1)
                : []
            setFilterUser(filterData)
            setShowDropDown(true)
        } else {
            setShowDropDown(false)
        }
    }
    console.log(users);
    console.log(filterUser);
    const handleOnClick = (event) => {
        const data = event.target.innerText
        console.log(event.target.innerText);
        setSearchValue(data)
        setShowDropDown(false)
        setFilterUser([])
    }
    return (
        <>
            <Helmet>
                <title>Auto completion</title>
                <meta name="description" content="This is a description of my page" />
            </Helmet>
            <div className="container d-flex justify-content-center align-content-center">
                <div className="m-5 w-50">
                    <div className="text-center mb-3"><h1>AutoCompleteSearch</h1></div>
                    <input type="text" value={searchValue} className="form-control" onChange={handleSearch} />
                    {
                        showDropdown && <Suggestions handleOnClick={handleOnClick} filterUser={filterUser} />
                    }
                </div>
            </div>
        </>
    )
}

export default AutoCompleteSearch