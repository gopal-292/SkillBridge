function Register() {
    return (
        <div className="container py-5">

            <div className="auth-container">

                <h2 className="text-center mb-2">
                    Create Account
                </h2>

                <p className="text-center text-muted mb-4">
                    Join the SkillBridge community
                </p>

                <form>

                    <div className="mb-3">
                        <label className="form-label">
                            Full Name
                        </label>

                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter your full name"
                            required
                        />
                    </div>

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
                            placeholder="Create a password"
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">
                            Confirm Password
                        </label>

                        <input
                            type="password"
                            className="form-control"
                            placeholder="Confirm your password"
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">
                            I want to join as
                        </label>

                        <select className="form-select" required>

                            <option value="">
                                Select Role
                            </option>

                            <option value="LEARNER">
                                Learner
                            </option>

                            <option value="MENTOR">
                                Mentor
                            </option>

                        </select>

                    </div>

                    <button
                        type="submit"
                        className="btn btn-primary w-100"
                    >
                        Create Account
                    </button>

                </form>

                <p className="text-center mt-4">
                    Already have an account?{" "}
                    <a href="/login">
                        Login
                    </a>
                </p>

            </div>

        </div>
    );
}

export default Register;