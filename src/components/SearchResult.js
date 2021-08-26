import { useParams } from "react-router-dom";
import SearchResultsRow from "./SearchResultRow";

const SearchResult = ({allUsers}) => {
    console.log(allUsers);
    const { user } = useParams();
    const filteredUsers = allUsers.filter(a => a.name === user);

    return (
        <div className="mt-2">
      <h4>Results for {user}:</h4>
      <table className="table table-hover">
        <tbody>
            <tr>
                <th>Name</th>
                <th>Balance</th>
                <th>Games Played</th>
            </tr>
          {filteredUsers.map((h) => (
            <SearchResultsRow key={h.id} user={h} />
          ))}
        </tbody>
      </table>
    </div>
    );

}

export default SearchResult;