function Login() {
    return (
        <div className="container py-5">

            <h2 className="text-center">
                Login to SkillBridge
            </h2>

            <form className="mt-4">

                <input
                    type="email"
                    className="form-control mb-3"
                    placeholder="Enter Email"
                />

                <input
                    type="password"
                    className="form-control mb-3"
                    placeholder="Enter Password"
                />

                <button className="btn btn-primary w-100">
                    Login
                </button>

            </form>

        </div>
    );
}

export default Login;