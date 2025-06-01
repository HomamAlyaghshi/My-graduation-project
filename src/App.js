import { lazy, Suspense, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

import MouseTrail from "./MouseTrail";

const SignUp = lazy(() => import("./Authentication/SignUp"));
const SignIn = lazy(() => import("./Authentication/SignIn"));
const HomePage = lazy(() => import("./pages/HomePage/index"));
const AiPage = lazy(() => import("./pages/AiPage/index"));
const ContactUsPage = lazy(() => import("./pages/ContactUsPage/index"));
const AboutUsPage = lazy(() => import("./pages/AboutUsPage/index"));
const Profile = lazy(() => import("./pages/profile/index"));
const BlogDetails = lazy(() => import("./pages/BlogPage/BlogDetails"));

function App() {
  useEffect(() => {
    AOS.init({
      duration: 3000,
      once: false,
    });
  }, []);

  return (
    <Router>
      <MouseTrail />
      <Suspense
        fallback={
          <div className="text-white text-center mt-10">Loading...</div>
        }
      >
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/homepage" element={<HomePage />} />
          <Route path="/ai" element={<AiPage />} />
          <Route path="/contactuspage" element={<ContactUsPage />} />
          <Route path="/aboutuspage" element={<AboutUsPage />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/blog/:id" element={<BlogDetails />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
