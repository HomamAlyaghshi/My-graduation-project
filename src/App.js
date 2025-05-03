import { React, lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const SignUp = lazy(() => import("./Authentication/SignUp"));
const SignIn = lazy(() => import("./Authentication/SignIn"));
const HomePage = lazy(() => import("./pages/HomePage/index"));
const AiPage = lazy(() => import("./pages/AiPage/index"));
const ContactUsPage = lazy(() => import("./pages/ContactUsPage/index"));
const AboutUsPage = lazy(() => import("./pages/AboutUsPage/index"));

function App() {
  return (
    <Router>
      <Suspense>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/homepage" element={<HomePage />} />
          <Route path="/ai" element={<AiPage />} />
          <Route path="/contactuspage" element={<ContactUsPage />} />
          <Route path="/aboutuspage" element={<AboutUsPage />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
