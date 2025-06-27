import { Link } from "react-router-dom";

const Navbar = () => {
    return ( 
        <nav className="Navbar">
            <div className="page-links">
                <Link to="/">Home</Link>
                <Link to="/aboutme">About Me</Link>
            </div>
            <div className="Resources">
                <ul className="horizontal-list">
                    <li><a href="https://www.linkedin.com/in/sean-benoit-773106306/">LinkedIn</a></li>
                    <li><a href="https://github.com/seanbenoit06">GitHub</a></li>
                    <li><a href="mailto:seanbenoit06@gmail.com">Email</a></li>
                    <li><a href="/Resume.pdf">Resume</a></li>
                </ul>
            </div>
        </nav>
     );
}
 
export default Navbar;