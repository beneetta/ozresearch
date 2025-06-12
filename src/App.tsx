// src/App.tsximport React from 'react';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
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
    <Layout>
      <Routes>
        {/* Public Pages */}
        <Route index element={<Home />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />

        {/* Author Pages */}
        <Route path="author/dashboard" element={<AuthorDashboard />} />
        <Route path="author/submit" element={<SubmitManuscript />} />
        <Route path="author/payment" element={<PaymentPage />} />
        <Route path="author/track" element={<TrackSubmission />} />
        <Route path="author/edit-profile" element={<EditProfile />} />
        <Route path="author/notifications" element={<NotificationCenter />} />
        <Route path="author/submissions" element={<SubmissionHistory />} />

        {/* Reviewer Pages */}
        <Route path="reviewer/dashboard" element={<ReviewerDashboard />} />
        <Route path="reviewer/invitations" element={<Invitations />} />
        <Route path="reviewer/assigned" element={<AssignedManuscripts />} />
        <Route path="reviewer/review-history" element={<ReviewHistory />} />
        <Route path="reviewer/edit-profile" element={<ReviewerEditProfile />} />
        <Route path="reviewer/notifications" element={<ReviewerNotifications />} />

        {/* Editor Pages */}
        <Route path="editor/dashboard" element={<EditorDashboard />} />
        <Route path="editor/assigned" element={<EditorAssignedManuscripts />} />
        <Route path="editor/assign-reviewers" element={<AssignReviewers />} />
        <Route path="editor/ai-report" element={<AIReport />} />
        <Route path="editor/create-conference" element={<CreateConference />} />
        <Route path="editor/track-peer-review" element={<TrackPeerReview />} />
        <Route path="editor/notifications" element={<EditorNotificationCenter />} />
        <Route path="editor/edit-profile" element={<EditorEditProfile />} />
      </Routes>
    </Layout>
  );
}

export default App;