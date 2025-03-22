import { Link } from 'react-router-dom';

function SideBar () {
    return(
    <aside className="side-navigation">
    <ul>
        <li><Link to="/">Home</Link></li> {/* new link to Dashboard */}
        <li><Link to="/tasks">To-Do list</Link></li> {/*  new link to Task List */}
        <li><Link to="/about">About</Link></li> {/* new link to About page */}
    </ul>
    </aside>
    
    );
    }
    
    export default SideBar