import { Outlet } from "react-router-dom";
import { HelmetProvider, Helmet } from "react-helmet-async";
import Footer from "../components/Footer";
import Navbar from "@/components/Navbar";

export default function Root() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Muhammad Shahid Imtiaz · Portfolio</title>
        <meta
          name="description"
          content="GovTech programmer building ERP/e-Office systems and modern web apps."
        />
        <link rel="canonical" href="/" />
        <meta
          property="og:title"
          content="Muhammad Shahid Imtiaz · Portfolio"
        />
        <meta
          property="og:description"
          content="GovTech programmer building ERP/e-Office systems and modern web apps."
        />
        <meta property="og:image" content="https://image.pollinations.ai/prompt/Professional%20portrait%20style%20banner%20for%20software%20engineer%2C%20navy%20and%20gold%20government%20theme%2C%20subtle%20geometric%20background%2C%201200x630?width=1200&height=630&nologo=true" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Muhammad Shahid Imtiaz · Portfolio" />
        <meta name="twitter:description" content="GovTech programmer building ERP/e-Office systems and modern web apps." />
        <meta name="twitter:image" content="https://image.pollinations.ai/prompt/Professional%20portrait%20style%20banner%20for%20software%20engineer%2C%20navy%20and%20gold%20government%20theme%2C%20subtle%20geometric%20background%2C%201200x630?width=1200&height=630&nologo=true" />
      </Helmet>
      <Navbar />
      <main id="main" className="mx-auto max-w-6xl px-4 py-10">
        <Outlet />
      </main>
      <Footer />
    </HelmetProvider>
  );
}
