import React, { Suspense, lazy } from "react";
import styles from "./App.module.css";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";
import { Loading } from "./components/Loading/Loading";

// Lazy load components for better performance
const About = lazy(() => import("./components/About/About").then(module => ({ default: module.About })));
const Contact = lazy(() => import("./components/Contact/Contact"));
const EducationAndAchievements = lazy(() => import("./components/Education/Education"));
const Experience = lazy(() => import("./components/Experience/Experience").then(module => ({ default: module.Experience })));
const Hero = lazy(() => import("./components/Hero/Hero").then(module => ({ default: module.Hero })));
const Navbar = lazy(() => import("./components/Navbar/Navbar").then(module => ({ default: module.Navbar })));
const Projects = lazy(() => import("./components/Projects/Projects").then(module => ({ default: module.Projects })));
const SkillsAndCertifications = lazy(() => import("./components/Skills/Skills").then(module => ({ default: module.SkillsAndCertifications })));

function App() {
  return (
    <ErrorBoundary>
      <div className={styles.App}>
        <Suspense fallback={<Loading message="Loading navigation..." />}>
          <Navbar />
        </Suspense>
        
        <main role="main">
          <Suspense fallback={<Loading message="Loading hero section..." />}>
            <Hero />
          </Suspense>
          
          <Suspense fallback={<Loading message="Loading about section..." />}>
            <About />
          </Suspense>
          
          <Suspense fallback={<Loading message="Loading education section..." />}>
            <EducationAndAchievements />
          </Suspense>
          
          <Suspense fallback={<Loading message="Loading skills section..." />}>
            <SkillsAndCertifications />
          </Suspense>
          
          <Suspense fallback={<Loading message="Loading experience section..." />}>
            <Experience />
          </Suspense>
          
          <Suspense fallback={<Loading message="Loading projects section..." />}>
            <Projects />
          </Suspense>
          
          <Suspense fallback={<Loading message="Loading contact section..." />}>
            <Contact />
          </Suspense>
        </main>
      </div>
    </ErrorBoundary>
  );
}

export default App;
