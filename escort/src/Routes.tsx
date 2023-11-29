import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const DesktopThirtyFive = React.lazy(() => import("pages/DesktopThirtyFive"));
const DesktopThirtyFour = React.lazy(() => import("pages/DesktopThirtyFour"));
const DesktopTwentySix = React.lazy(() => import("pages/DesktopTwentySix"));
const DesktopTwentyFive = React.lazy(() => import("pages/DesktopTwentyFive"));
const Becomeamember = React.lazy(() => import("pages/Becomeamember"));
const Divdtindexfoot = React.lazy(() => import("pages/Divdtindexfoot"));
const DesktopThirtySeven = React.lazy(() => import("pages/DesktopThirtySeven"));
const DesktopTwentyThree = React.lazy(() => import("pages/DesktopTwentyThree"));
const DesktopThirtySix = React.lazy(() => import("pages/DesktopThirtySix"));
const ProfileEdit = React.lazy(() => import("pages/ProfileEdit"));
const BecomeamemberOne = React.lazy(() => import("pages/BecomeamemberOne"));
const A = React.lazy(() => import("pages/A"));
const DesktopTwentyNine = React.lazy(() => import("pages/DesktopTwentyNine"));
const DesktopThirtyOne = React.lazy(() => import("pages/DesktopThirtyOne"));
const DesktopThirty = React.lazy(() => import("pages/DesktopThirty"));
const Meesages = React.lazy(() => import("pages/Meesages"));
const DesktopThirtyThree = React.lazy(() => import("pages/DesktopThirtyThree"));
const ChangePassword = React.lazy(() => import("pages/ChangePassword"));
const ForgotPassword = React.lazy(() => import("pages/ForgotPassword"));
const ForgotPasswordOne = React.lazy(() => import("pages/ForgotPasswordOne"));
const DesktopFifteen = React.lazy(() => import("pages/DesktopFifteen"));
const DesktopTwo = React.lazy(() => import("pages/DesktopTwo"));
const Signup = React.lazy(() => import("pages/Signup"));
const Login = React.lazy(() => import("pages/Login"));
const DesktopThirtyTwo = React.lazy(() => import("pages/DesktopThirtyTwo"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/desktopthirtytwo" element={<DesktopThirtyTwo />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/desktoptwo" element={<DesktopTwo />} />
          <Route path="/desktopfifteen" element={<DesktopFifteen />} />
          <Route path="/forgotpasswordone" element={<ForgotPasswordOne />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/changepassword" element={<ChangePassword />} />
          <Route path="/desktopthirtythree" element={<DesktopThirtyThree />} />
          <Route path="/meesages" element={<Meesages />} />
          <Route path="/desktopthirty" element={<DesktopThirty />} />
          <Route path="/desktopthirtyone" element={<DesktopThirtyOne />} />
          <Route path="/desktoptwentynine" element={<DesktopTwentyNine />} />
          <Route path="/a" element={<A />} />
          <Route path="/becomeamemberone" element={<BecomeamemberOne />} />
          <Route path="/profileedit" element={<ProfileEdit />} />
          <Route path="/desktopthirtysix" element={<DesktopThirtySix />} />
          <Route path="/desktoptwentythree" element={<DesktopTwentyThree />} />
          <Route path="/desktopthirtyseven" element={<DesktopThirtySeven />} />
          <Route path="/divdtindexfoot" element={<Divdtindexfoot />} />
          <Route path="/becomeamember" element={<Becomeamember />} />
          <Route path="/desktoptwentyfive" element={<DesktopTwentyFive />} />
          <Route path="/desktoptwentysix" element={<DesktopTwentySix />} />
          <Route path="/desktopthirtyfour" element={<DesktopThirtyFour />} />
          <Route path="/desktopthirtyfive" element={<DesktopThirtyFive />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
