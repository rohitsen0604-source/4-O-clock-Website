import "./App.css";
import { RouterProvider, useRouter } from "./router";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SocialIcons from "./components/SocialIcons";
import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import { ServicesPage } from "./pages/ServicesPage";
import { WorksPage } from "./pages/WorksPage";
import { WorkDetailPage } from "./pages/WorkDetailPage";
import { ContactPage } from "./pages/ContactPage";
import { useEffect } from "react";
import setSplitText from "./components/utils/splitText";

function AppContent() {
  const { path } = useRouter();

  useEffect(() => {
    setSplitText();
  }, [path]);

  const renderPage = () => {
    if (path === "/" || path === "") {
      return <HomePage />;
    }
    if (path === "/about") {
      return <AboutPage />;
    }
    if (path === "/services") {
      return <ServicesPage />;
    }
    if (path === "/works") {
      return <WorksPage />;
    }
    if (path.startsWith("/works/")) {
      const slug = path.replace("/works/", "");
      return <WorkDetailPage slug={slug} />;
    }
    if (path === "/contact") {
      return <ContactPage />;
    }
    return <HomePage />;
  };

  return (
    <div className="container-main">
      <Navbar />
      <SocialIcons />

      <main className="main-body" id="smooth-wrapper">
        <div id="smooth-content">
          {renderPage()}
          <Footer />
        </div>
      </main>
    </div>
  );
}

function App() {
  return (
    <RouterProvider>
      <AppContent />
    </RouterProvider>
  );
}

export default App;
