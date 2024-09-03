

const Suggestions = ({ filterUser, handleOnClick }) => {
    return (
        <>
            <div>Suggestions</div>
            <ul className="list-group">
                {
                    filterUser && filterUser.length ?
                        filterUser.map((user, index) => <li className="list-group-item pointer" style={{ "cursor": "pointer" }} onClick={handleOnClick} key={index}>{user}</li>)
                        : null
                }
            </ul>
        </>
    )
}

export default Suggestions