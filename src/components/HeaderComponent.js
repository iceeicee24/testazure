
const HeaderComponent = ({ userName }) => (
    <header>
        Welcome to RBL, { userName }
    </header>
);

/*
class HeaderComponent extends Component {

    render() {
        return <div>Welcome to RBL</div>;
    }

}
*/
export default HeaderComponent;