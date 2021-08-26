const User = ({ user }) => {
    return (
        <div>
            <div>Username:</div><div>{user.name}</div>
            <div>Games Played:</div><div>{user.noOfGamesPlayed}</div>
            <div>Unpaid Balance:</div><div>{user.balance}</div>
        </div>
        
    );
};

export default User;