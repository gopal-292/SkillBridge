function Login() {
    return (
        <div className="container py-5">

            <div className="auth-container">

                <h2 className="text-center mb-2">
                    Welcome Back
                </h2>

                <p className="text-center text-muted mb-4">
                    Login to your SkillBridge account
                </p>

                <form>

                    <div className="mb-3">
                        <label className="form-label">
                            Email
                        </label>

                        <input
                            type="email"
                            className="form-control"
                            placeholder="Enter your email"
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">
                            Password
                        </label>

                        <input
                            type="password"
                            className="form-control"
                            placeholder="Enter your password"
                            required
                        />
                    </div>

                    <div className="d-flex justify-content-between mb-3">

                        <div>
                            <input
                                type="checkbox"
                                className="form-check-input me-2"
                            />

                            <label>
                                Remember me
                            </label>
                        </div>

                        <a href="/forgot-password">
                            Forgot Password?
                        </a>

                    </div>

                    <button
                        type="submit"
                        className="btn btn-primary w-100"
                    >
                        Login
                    </button>

                </form>

                <p className="text-center mt-4">
                    Don't have an account?{" "}
                    <a href="/register">
                        Register
                    </a>
                </p>

            </div>

        </div>
    );
}

export default Login;