// src/pages/index.tsx
import React from "react";
import MainLayout from "../layouts/MainLayout";

const HomePage = () => {
  return (
    <MainLayout>
      <section className="px-10 md:px-20 py-10">
        <p>Hello, I'm a</p>
        <h1 className="text-4xl font-bold">Frontend Developer</h1>
        <p>and this is my portfolio</p>

        {/* Your other content */}
      </section>
    </MainLayout>
  );
};

export default HomePage;
