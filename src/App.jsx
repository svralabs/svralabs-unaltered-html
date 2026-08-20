import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DuolingoStyleGuidePage from './pages/DuolingoStyleGuidePage';
import DuolingoLandingFeatureFirstNarrativeV2 from './pages/DuolingoLandingFeatureFirstNarrativeV2';
import DuolingoLearningTable from './pages/DuolingoLearningTable';
import DuolingoProfilePage from './pages/DuolingoProfilePage';
import DuolingoLearningDashboard from './pages/DuolingoLearningDashboard';
import DuolingoLandingPage from './pages/DuolingoLandingPage';
import DuolingoLandingFocusedHeroSocialProofV1 from './pages/DuolingoLandingFocusedHeroSocialProofV1';
import DuolingoLandingCommunitySocialLearningV3 from './pages/DuolingoLandingCommunitySocialLearningV3';
import DuolingoCardComponentsShowcase from './pages/DuolingoCardComponentsShowcase';
import DuolingoPricingPage from './pages/DuolingoPricingPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<DuolingoStyleGuidePage />} />
<Route path='/duolingo-style-guide-page' element={<DuolingoStyleGuidePage />} />
<Route path='/duolingo-landing-feature-first-narrative-v2' element={<DuolingoLandingFeatureFirstNarrativeV2 />} />
<Route path='/duolingo-learning-table' element={<DuolingoLearningTable />} />
<Route path='/duolingo-profile-page' element={<DuolingoProfilePage />} />
<Route path='/duolingo-learning-dashboard' element={<DuolingoLearningDashboard />} />
<Route path='/duolingo-landing-page' element={<DuolingoLandingPage />} />
<Route path='/duolingo-landing-focused-hero-social-proof-v1' element={<DuolingoLandingFocusedHeroSocialProofV1 />} />
<Route path='/duolingo-landing-community-social-learning-v3' element={<DuolingoLandingCommunitySocialLearningV3 />} />
<Route path='/duolingo-card-components-showcase' element={<DuolingoCardComponentsShowcase />} />
<Route path='/duolingo-pricing-page' element={<DuolingoPricingPage />} />
        <Route path="*" element={<DuolingoStyleGuidePage />} />
      </Routes>
    </BrowserRouter>
  );
}
