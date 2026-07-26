import Hero from "./sections/Hero/Hero";
import profile from "./data/profile";
import Navbar from "./components/Navbar/Navbar";
import About from "./sections/About/About";
import Skills from "./sections/Skills/Skills";
import Experience from "./sections/Experience/Experience";
import Certifications from "./sections/Certifications/certifications";
import Contact from "./sections/Contact/Contact";
import Footer from "./sections/Footer/Footer";


function App() {
  return (
    <>

    <Navbar />

    <main id="top">
   <Hero 
   name={profile.name}
   title={profile.title}
   introduction={profile.introduction}
   /> 

   <About />

   <Experience />

   <Skills />

    <Certifications />

    <Contact />

    <Footer />

   </main>
   </>
  );
}

export default App;