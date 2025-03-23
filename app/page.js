"use client";

import { useState } from 'react';
import Image from 'next/image';
import { ArrowRight, Calendar, Code, Users, ChevronLeft, ChevronRight } from 'lucide-react';

export default function CodeChefChapter() {
  const [activeEventIndex, setActiveEventIndex] = useState(0);

  const events = [
    {
      title: "Technotic 2.0",
      date: "March 18, 2025",
      description: "CodeChef&apos;s flagship event - compete in aptitutde and DSA to take home the prize!",
      image: "technotic.jpg"
    },
    {
      title: "Escape Room",
      date: "April 30, 2024",
      description: "Follow the clues and be the first one to escape!",
      image: "escape-room.jpg"
    },
    {
      title: "Roadmap to DSA",
      date: "January 31, 2025",
      description: "A guest lecture from industry professionals discussing how to crack coding interviews.",
      image: "roadmap.jpg"
    }
  ];

  const teamMembers = [
    {
      name: "Dr. Preeti Nagrath",
      role: "Faculty Coordinator",
      image: "preeti-nagrath.png"
    },
    {
      name: "Ayush Mittal",
      role: "President",
      image: "ayush.png"
    },
    {
      name: "Tanzil Jain",
      role: "Vice President",
      image: "tanzil.png"
    },
    {
      name: "Aditya Singh",
      role: "Event Management Lead",
      image: "aditya.png"
    },
    {
      name: "Lakshay",
      role: "Outreach Lead",
      image: "lakshay.png"
    },
    {
      name: "Jashith",
      role: "Tech Lead",
      image: "jashith.png"
    },
    {
      name: "Samyak Patil",
      role: "Creative Lead",
      image: "samyak.png"
    }
  ];

  const nextEvent = () => {
    setActiveEventIndex((prev) => (prev === events.length - 1 ? 0 : prev + 1));
  };

  const prevEvent = () => {
    setActiveEventIndex((prev) => (prev === 0 ? events.length - 1 : prev - 1));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-md">
        <div className="container mx-auto px-6 py-3 flex justify-between items-center">
          <Image 
            src="/Codechef(new)_logo.svg.png" 
            alt="CodeChef Logo" 
            width={120} 
            height={40} 
            className="h-10 w-auto" 
          />
          <div className="hidden md:flex space-x-8">
            <a href="#about" className="text-gray-700 hover:text-blue-600 transition">About</a>
            <a href="#events" className="text-gray-700 hover:text-blue-600 transition">Events</a>
            <a href="#team" className="text-gray-700 hover:text-blue-600 transition">Our Team</a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600 transition">Contact</a>
          </div>
          <button className="md:hidden text-gray-700">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </nav>

      <section className="bg-blue-50 py-16">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-16 md:mb-0 md:pr-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight mb-6">
              Start your coding journey today
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Join the CodeChef Student Chapter to enhance your programming skills, participate in competitions, and connect with like-minded coding enthusiasts.
            </p>
          </div>
          <div className="md:w-1/2">
            <Image 
              src="/student-coding.png" 
              alt="Student coding" 
              width={600} 
              height={400} 
              className="w-full h-auto" 
            />
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">About Our Chapter</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              The CodeChef Student Chapter is dedicated to fostering coding culture on campus and helping students excel in competitive programming. Inspired by CodeChef, one of the world&apos;s premier competitive programming platforms, we organize workshops, contests, and learning sessions to enhance coding skills.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="bg-gray-50 p-8 rounded-lg shadow-md hover:shadow-lg transition">
              <div className="bg-blue-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <Code className="text-blue-600" size={28} />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Skill Development</h3>
              <p className="text-gray-600">
                Regular coding sessions, practice problems, and mentorship to help you improve your programming abilities.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg shadow-md hover:shadow-lg transition">
              <div className="bg-blue-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <Calendar className="text-blue-600" size={28} />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Contests & Events</h3>
              <p className="text-gray-600">
                Participate in coding competitions, hackathons, and workshops to apply your skills and learn from peers.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg shadow-md hover:shadow-lg transition">
              <div className="bg-blue-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <Users className="text-blue-600" size={28} />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Community</h3>
              <p className="text-gray-600">
                Connect with fellow coding enthusiasts, form teams for projects, and build your professional network.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h2 className="text-3xl font-bold mb-6">Society&apos;s Aim</h2>
              <h3 className="text-4xl font-bold mb-6">Providing real world experience</h3>
              <p className="text-xl mb-8">
                Our chapter aims to bridge the gap between theoretical knowledge and practical application - whether it be aptitude, DSA or full-stack development.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="events" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Past Events</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Take a look at some of our recent events that have helped students enhance their coding skills and build a strong community.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="relative">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/2 relative w-full h-64 md:h-96">
                  <Image 
                    src={`/${events[activeEventIndex].image}`} 
                    alt={events[activeEventIndex].title} 
                    fill 
                    className="object-contain object-center" 
                  />
                </div>
                <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                  <div className="text-blue-600 font-semibold mb-2">{events[activeEventIndex].date}</div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">{events[activeEventIndex].title}</h3>
                  <p className="text-gray-600 mb-8">{events[activeEventIndex].description}</p>
                </div>
              </div>
              <div className="absolute bottom-4 right-4 flex space-x-2">
                <button 
                  onClick={prevEvent} 
                  className="bg-white p-2 rounded-full shadow hover:bg-gray-100 transition"
                >
                  <ChevronLeft size={20} className="text-gray-700" />
                </button>
                <button 
                  onClick={nextEvent} 
                  className="bg-white p-2 rounded-full shadow hover:bg-gray-100 transition"
                >
                  <ChevronRight size={20} className="text-gray-700" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="team" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Meet Our Team</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our dedicated team of students and faculty work together to create valuable learning experiences and foster a vibrant coding community.
            </p>
          </div>

          <div className="mb-10">
            <h3 className="text-xl font-semibold text-center text-gray-700 mb-6">Faculty Coordinator</h3>
            <div className="flex flex-col items-center">
              <div className="w-40 h-40 mb-6 relative overflow-hidden rounded-full">
                <Image 
                  src={`/${teamMembers[0].image}`} 
                  alt={teamMembers[0].name} 
                  fill 
                  className="object-cover" 
                />
              </div>
              <h4 className="text-xl font-bold text-gray-800">{teamMembers[0].name}</h4>
              <p className="text-blue-600 font-medium mb-3">{teamMembers[0].role}</p>
            </div>
          </div>

          <h3 className="text-xl font-semibold text-center text-gray-700 mb-10">Student Leaders</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {teamMembers.slice(1).map((member, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8 text-center shadow-md hover:shadow-lg transition">
                <div className="w-32 h-32 mx-auto mb-6 relative overflow-hidden rounded-full">
                  <Image 
                    src={`/${member.image}`} 
                    alt={member.name} 
                    fill 
                    className="object-cover" 
                  />
                </div>
                <h4 className="text-xl font-bold text-gray-800">{member.name}</h4>
                <p className="text-blue-600 font-medium mb-3">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-2">
            <h2 className="text-3xl font-bold mb-4">Join Our Community</h2>
            <p className="text-lg max-w-2xl mx-auto">
              Interested in competitive programming or improving your coding skills? Join our chapter to connect, learn, and grow together.
            </p>

            <p className="text-md mt-6 text-gray-100">
              We are not recruiting right now, keep an eye out on our socials to know when the forms open!
            </p>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-10">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <div className="flex items-center">
                <span className="text-blue-400 font-bold text-xl">CodeChef Student Chapter</span>
              </div>
              <p className="text-gray-400 mt-2">Fostering coding excellence on campus</p>
            </div>
            <div className="flex space-x-6">
              <a href="https://www.instagram.com/codechef_bvcoe/" className="text-gray-400 hover:text-white transition">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
              <a href="https://www.linkedin.com/company/codechef-bvcoe-chapter/" className="text-gray-400 hover:text-white transition">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 3a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14m-.5 15.5v-5.3a3.26 3.26 0 00-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 011.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 001.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 00-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                </svg>
              </a>
              <a href="mailto:codechefbvcoe@gmail.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
