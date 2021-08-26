import User from "./User";

const FeaturedUser = ({ user }) => {
    if(user) 
        return (
            <div>
                <h3>Hello</h3>
                <User user={user}></User>
            </div>
    
            
        );

    return <div>No featured house at this time</div>;
    
};

export default FeaturedUser;