import Footer from "@/app/components/footer";
import Header from "@/app/components/header";
import React from "react";

const Contact = () => {
  return (
    <div className="container grid grid-cols-12 md:gap-x-5 m-auto">
      <Header />
      <main className="col-span-full px-1 md:px-10 lg:px-40">Contact</main>
      <Footer />
    </div>
  );
};

export default Contact;
