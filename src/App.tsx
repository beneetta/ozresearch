// Description: Main application file that sets up routing for the React application.
// src/App.tsx

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import About from './pages/About';
import Contact from './pages/Contact';
import AuthorDashboard from './pages/author/Dashboard';
import SubmitManuscript from './pages/author/SubmitManuscript';
import PaymentPage from './pages/author/PaymentPage';
import TrackSubmission from './pages/author/TrackSubmission';
import EditProfile from './pages/author/EditProfile';
import NotificationCenter from './pages/author/NotificationCenter';
import SubmissionHistory from './pages/author/SubmissionHistory';
import ReviewerDashboard from './pages/reviewer/ReviewerDashboard';
import Invitations from './pages/reviewer/Invitations';
import AssignedManuscripts from './pages/reviewer/Assigned';
import ReviewHistory from './pages/reviewer/ReviewHistory';
import ReviewerEditProfile from './pages/reviewer/EditProfile';
import ReviewerNotifications from './pages/reviewer/Notifications';
import EditorDashboard from './pages/editor/EditorDashboard';
import EditorAssignedManuscripts from './pages/editor/AssignedManuscripts';
import AssignReviewers from './pages/editor/AssignReviewers';
import AIReport from './pages/editor/AIReport';
import CreateConference from './pages/editor/CreateConferenceCall';
import TrackPeerReview from './pages/editor/TrackPeerReview';
import EditorNotificationCenter from './pages/editor/Notifications';
import EditorEditProfile from './pages/editor/EditProfile';



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/" element={<Home />} />
        <Route path="/register" element={
          <Layout>
            <Register />
          </Layout>
        } />
        <Route path="/login" element={
          
          <Layout>
            <Login />
          </Layout>
        } />
        <Route path="/about" element={
          <Layout>
            <About />
          </Layout>
        } />
        <Route path="/contact" element={
          <Layout>
            <Contact />
          </Layout>
        } />
        <Route path="/author/submit" element={<Layout><SubmitManuscript /></Layout>} />
        
        <Route path="/author/dashboard" element={
            <Layout>
    <AuthorDashboard />
  </Layout>
} />
  <Route path="/author/track" element={
  <Layout>
    <TrackSubmission />
  </Layout>
} />
<Route path="/author/payment" element={
  <Layout>
    <PaymentPage />
  </Layout>
} />

  <Route
  path="/author/edit-profile"
  element={
    <Layout>
      <EditProfile />
    </Layout>
  }
/>
<Route
  path="/author/notifications"
  element={
    <Layout>
      <EditorNotificationCenter />
    </Layout>
  }
/>
<Route
  path="/author/submissions"
  element={
    <Layout>
      <SubmissionHistory />
    </Layout>
  }
/>

<Route
  path="/reviewer/dashboard"
  element={
    <Layout>
      <ReviewerDashboard />
    </Layout>
  }
/>
<Route path="/reviewer/invitations" element={<Invitations />} />
<Route path="/reviewer/assigned" element={<AssignedManuscripts />} />
<Route path="/reviewer/review-history" element={
  <Layout>
    <ReviewHistory />
  </Layout>
} />
<Route path="/reviewer/edit-profile" element={
  <Layout>
    <ReviewerEditProfile />
  </Layout>
} />
<Route path="/reviewer/notifications" element={<ReviewerNotifications />} />
<Route path="/editor/dashboard" element={
  <Layout>
    <EditorDashboard />
  </Layout>
} />

<Route path="/editor/assigned" element={
  <Layout>
    <EditorAssignedManuscripts />
  </Layout>
} />

<Route
  path="/editor/assign-reviewers"
  element={
    <Layout>
      <AssignReviewers />
    </Layout>
  }
/>


<Route
  path="/editor/ai-report"
  element={
    <Layout>
      <AIReport />
    </Layout>
  }
/>
<Route
  path="/editor/create-conference"
  element={
    <Layout>
      <CreateConference />
    </Layout>
  }
/>
<Route
  path="/editor/track-peer-review"
  element={
    <Layout>
      <TrackPeerReview />
    </Layout>
  }
/>

<Route
  path="/editor/notifications"
  element={
    <Layout>
      <NotificationCenter />
    </Layout>
  }
/>
<Route path="/editor/edit-profile" element={
  <Layout>
    <EditorEditProfile />
  </Layout>
} />



      </Routes>
    </Router>
  );
}

export default App;