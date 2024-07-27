import React from "react";
import ItemLayout from "./ItemLayout";
import Link from "next/link";

const AboutDetails = () => {
  return (
    <section className="py-20 w-full">
      <div className="grid grid-cols-12 gap-4 xs:gap-6  md:gap-8 w-full">
        <ItemLayout
          className={
            " col-span-full lg:col-span-8 row-span-2 flex-col items-start"
          }
        >
          <h2 className="  text-xl md:text-2xl text-left w-full capitalize">
            FULL STACK WEB DEVELOPER
          </h2>
          <div className="flex items-start space-x-4">
  <div className="text-left space-y-2">
    <p>• Web developer</p>
    <p>• Tech enthusiast</p>
    <p>• BTECH CSE Student at NSEC</p>
    <p>• 4 Star C++ coder at HackerRank</p>
    <p>• 50+ skill batches completed in Google Cloud</p>
    <p>• Technical Head of NSEC Sports Community during 3rd year (2023-2024)</p>
  </div>
  <img src="/image.jpeg" alt="Profile Image" className="w-1/4 h-auto object-cover rounded-full shadow-md border-4 border-gray-300" />

</div>


        </ItemLayout>

        <ItemLayout
          className={" col-span-full xs:col-span-6 lg:col-span-4 text-accent"}
        >
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            5+ <sub className="font-semibold text-base">Projects completed</sub>
          </p>
        </ItemLayout>

        <ItemLayout
          className={"col-span-full xs:col-span-6 lg:col-span-4 text-accent"}
        >
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            300+{" "}
            <sub className="font-semibold text-base">Questions Solved</sub>
          </p>
        </ItemLayout>

        <ItemLayout className="col-span-full flex flex-col items-center space-y-6 bg-gray-100 p-8 rounded-lg shadow-lg">
      <h2 className="text-4xl font-bold text-yellow-500 mb-6 border-b-4 border-yellow-500 pb-2">
        SKILLS
      </h2>
      <img
        className="w-full h-auto"
        src={`https://skillicons.dev/icons?i=bootstrap,css,git,github,html,js,jquery,mongodb,mysql,netlify,nextjs,nodejs,npm,postgres,react,tailwind,vercel,vscode,c,cpp,gmail,java,linkedin,nextjs,nodejs,postman,powershell,react,express,codepen`}
        alt="CodeBucks"
        loading="lazy"
      />
    </ItemLayout>

    <ItemLayout className="col-span-full p-0">
  <div className="flex flex-col items-center">
    {/* Heading */}
    <h1 className="text-4xl font-bold  text-yellow-500 mb-6">
      Education
    </h1>

    <div className="flex flex-col md:flex-row gap-6">
      {/* NSEC Container */}
      <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-lg shadow-lg flex flex-col items-center space-y-4">
        <h2 className="text-2xl font-bold text-yellow-400 mb-2">BTech in Computer Science and Engineering</h2>
        <img
          className="w-full h-48 object-cover rounded-lg shadow-md"
          src="/image1.jpeg"
          alt="Netaji Subhash Engineering College"
        />
        <p>
          Netaji Subhash Engineering College • Mauza Ranabhutia, Techno City, Garia, Ranabhutia, West Bengal 700152 • 2021-2025 • 8.9 GPA 
        </p>
      </div>

      {/* Class 12 & 10 Boards */}
      <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-lg shadow-lg flex flex-col items-center space-y-4">
        <h2 className="text-2xl font-bold text-yellow-400 mb-2">Class 12 & 10 Boards</h2>
        <img
          className="w-full h-48 object-cover rounded-lg shadow-md"
          src="/image2.jpeg"
          alt="B.D.M. International School"
        />
        <p>
          B.D.M. International School • Post, Pratapgarh, Narendrapur, Kolkata, West Bengal 700103 • Paasout - 2021 
        </p>
      </div>
    </div>
  </div>
</ItemLayout>


<ItemLayout className="col-span-full p-0">
  <div className="bg-transparent p-6 rounded-lg shadow-lg">
    <h2 className="text-2xl font-bold text-yellow-500 mb-4 text-center">Coding Platforms</h2>
    <div className="flex flex-wrap justify-center gap-4">
      <a
        href="https://leetcode.com/u/tridibrup17/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 hover:underline"
      >
        Leetcode
      </a>
      <a
        href="https://www.naukri.com/code360/profile/1b4e3f80-93a3-4168-b007-6c9c0819792f"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 hover:underline"
      >
        CodingNinjas
      </a>
      <a
        href="https://www.codechef.com/users/trdibpaul1234"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 hover:underline"
      >
        CodeChef
      </a>
      <a
        href="https://www.hackerrank.com/profile/ruptumpa1234"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 hover:underline"
      >
        HackerRank
      </a>
      <a
        href="https://www.geeksforgeeks.org/user/tridibdf6d/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 hover:underline"
      >
        Gfg
      </a>
    </div>
  </div>
</ItemLayout>

      </div>
    </section>
  );
};

export default AboutDetails;