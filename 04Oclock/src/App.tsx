import "./App.css";
import { RouterProvider, useRouter } from "./router";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import { ServicesPage } from "./pages/ServicesPage";
import { WorksPage } from "./pages/WorksPage";
import { WorkDetailPage } from "./pages/WorkDetailPage";
import { ContactPage } from "./pages/ContactPage";
import { useEffect } from "react";
import setSplitText from "./components/utils/splitText";

function NotFoundPage() {
  const { navigate } = useRouter();

  return (
    <section
      style={{
        minHeight: "80vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "120px 24px 80px",
        textAlign: "center",
        background: "#000",
        color: "#fff",
      }}
    >
      <div style={{ maxWidth: "700px" }}>
        <div
          style={{
            fontSize: "clamp(100px, 18vw, 220px)",
            fontWeight: 800,
            lineHeight: 0.85,
            letterSpacing: "-0.08em",
            opacity: 0.12,
            marginBottom: "-20px",
          }}
        >
          404
        </div>

        <h1
          style={{
            fontSize: "clamp(36px, 6vw, 72px)",
            fontWeight: 700,
            lineHeight: 1,
            margin: "0 0 24px",
            letterSpacing: "-0.04em",
          }}
        >
          PAGE NOT FOUND
        </h1>

        <p
          style={{
            fontSize: "18px",
            lineHeight: 1.6,
            opacity: 0.65,
            margin: "0 auto 36px",
            maxWidth: "520px",
          }}
        >
          The page you're looking for doesn't exist or may have been moved.
        </p>

        <button
          onClick={() => navigate("/")}
          style={{
            padding: "14px 28px",
            borderRadius: "999px",
            border: "1px solid rgba(255,255,255,0.35)",
            background: "#fff",
            color: "#000",
            fontSize: "14px",
            fontWeight: 700,
            letterSpacing: "0.08em",
            cursor: "pointer",
          }}
        >
          BACK TO HOME
        </button>
      </div>
    </section>
  );
}

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

    // Unknown route → 404 page
    return <NotFoundPage />;
  };

  return (
    <div className="container-main">
      <Navbar />

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