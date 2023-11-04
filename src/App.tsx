import { Home } from "./_root/pages";
import SigninForm from "./_auth/forms/SigninForm";
import "./globals.css";
import SignupForm from "./_auth/forms/SignupForm";
import {  Routes,Route } from "react-router-dom";
import AuthLayout from "./_auth/AuthLayout";
import RootLayout from "./_root/RootLayout";
const App = () => {
  return (
    <main className="flex h-screen">
      <Routes>
        {/* public Routes */}
        <Route element={<AuthLayout />}>
          <Route path="/sign-in" element={<SigninForm />} />
          <Route path="/sign-up" element={<SignupForm />} />
        </Route>
        {/* private Routes */}
        <Route element={<RootLayout />} />
        <Route index element={<Home />} />
      </Routes>
    </main>
  );
};

export default App;
