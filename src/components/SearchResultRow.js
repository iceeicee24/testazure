import { useHistory } from "react-router-dom";

const SearchResultsRow = ({ user }) => {
  const history = useHistory();

  const setActive = () => {
    history.push(`/house/${user.id}`);
  };

  return (
    <tr onClick={setActive}>
      <td>{user.name}</td>
      <td>{user.balance}</td>
      <td>{user.noOfGamesPlayed}</td>
    </tr>
  );
};

export default SearchResultsRow;
