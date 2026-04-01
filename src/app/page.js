import Image from "next/image";
import Navbar from "@/component/navbar";
import Hero from "@/component/hero";
import About from "@/component/about";
import CourseSlider from "@/component/courseSlider";
import Testimony from "@/component/testimony";
import ContactSection from "@/component/ContactSection";
import Footer from "@/component/Footer";
export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About/>
      <CourseSlider/>
      <Testimony/>
      <ContactSection/>
      <Footer/>
    </>
  );
}
