import {Link} from "react-router";

const Navbar = () => {
    return (
        <nav className="navbar">
            <Link to="/">
                <div className="flex flex-row items-center gap-1 mr-5 h-12">
                    <img 
                        src="/images/logo.png" 
                        alt="AI-Resumind Logo" 
                        className="logo h-12 w-12 object-contain" 
                        width={48} 
                        height={48} 
                    />
                    <p className="text-2xl font-bold text-gradient h-12 flex items-center">
                        AI-Analyzer
                    </p>
                </div>
            </Link>
            <Link to="/upload" className="primary-button w-fit">
                Upload Resume
            </Link>
        </nav>
    )
}
export default Navbar
