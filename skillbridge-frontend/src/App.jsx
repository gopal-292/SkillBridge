import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Courses from "./pages/Courses";
import SkillExchange from "./pages/SkillExchange";
import CourseDetails from "./pages/CourseDetails";
import Mentors from "./pages/Mentors";
import MentorDetails from "./pages/MentorDetails";
import ExchangeRequest from "./pages/ExchangeRequest";

function App() {
    return (
        <BrowserRouter>

            <Navbar />

            <Routes>

                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/courses" element={<Courses />} />
                <Route path="/skill-exchange"element={<SkillExchange />}/>
                <Route path="/courses/:id"element={<CourseDetails />}/>
                <Route path="/mentors"element={<Mentors />}/>
                <Route path="/mentors/:id"element={<MentorDetails />}/>
                

            </Routes>

            <Footer />

        </BrowserRouter>
    );
}

export default App;