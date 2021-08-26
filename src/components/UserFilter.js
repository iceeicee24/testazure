import { useHistory } from "react-router-dom";

const UserFilter = ({allUsers}) => {

    const history = useHistory();

    const users = allUsers
    ? Array.from(new Set(allUsers.map((h) => 
        h.name
    ))): [];
    users.unshift(null);

    const onSearchChange = (e) => {
        const selUser = e.target.value;
        console.log(selUser);
        history.push(`/searchresults/${selUser}`);
    }

    return(
        <div className="row mt-3">
            <div className="offset-md-2 col-md-4">
                Look for a user:
            </div>
            <div className="col-md-4 mb-3">
                <select className="form-select" onChange={onSearchChange}>
                {users.map((c) => (
                    <option key={c} value={c}>
                    {c}
                    </option>
                ))}
                </select>
            </div>
        </div>
    );

}

export default UserFilter;