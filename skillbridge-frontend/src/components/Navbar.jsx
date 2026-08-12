function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg bg-white border-bottom">
            <div className="container">

                <a className="navbar-brand fw-bold" href="/">
                    SkillBridge
                </a>

                <div className="navbar-nav ms-auto">
                    <a className="nav-link" href="/">
                        Home
                    </a>

                    <a className="nav-link" href="/login">
                        Login
                    </a>

                    <a className="nav-link" href="/register">
                        Register
                    </a>
                </div>

            </div>
        </nav>
    );
}

export default Navbar;