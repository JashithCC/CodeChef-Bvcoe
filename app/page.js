"use client";

import { useState } from 'react';
import { ArrowRight, Calendar, Code, Users, ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

export default function CodeChefChapter() {
  const [activeEventIndex, setActiveEventIndex] = useState(0);

  const events = [
    {
      title: "Technotic 2.0",
      date: "March 18, 2025",
      description: "CodeChef&apos;s flagship event - compete in aptitude and DSA to take home the prize!",
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
          <Image src="Codechef(new)_logo.svg.png" alt="CodeChef Logo" className="h-10 w-auto" width={100} height={30} />
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
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight mb-6">Start your coding journey today</h1>
            <p className="text-lg text-gray-600 mb-8">Join the CodeChef Student Chapter to enhance your programming skills, participate in competitions, and connect with like-minded coding enthusiasts.</p>
          </div>
          <div className="md:w-1/2">
            <Image src="student-coding.png" alt="Student coding" width={500} height={300} />
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
              <p className="text-gray-600">Regular coding sessions, practice problems, and mentorship to help you improve your programming abilities.</p>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg shadow-md hover:shadow-lg transition">
              <div className="bg-blue-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <Calendar className="text-blue-600" size={28} />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Contests & Events</h3>
              <p className="text-gray-600">Participate in coding competitions, hackathons, and workshops to apply your skills and learn from peers.</p>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg shadow-md hover:shadow-lg transition">
              <div className="bg-blue-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <Users className="text-blue-600" size={28} />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Community</h3>
              <p className="text-gray-600">Connect with fellow coding enthusiasts, form teams for projects, and build your professional network.</p>
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
                <div className="md:w-1/2">
                  <Image 
                    src={events[activeEventIndex].image} 
                    alt={events[activeEventIndex].title} 
                    className="w-full h-64 md:h-96 object-cover"
                    width={500} height={300}
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

      <section id="team" className="py-20 bg-gray-100">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Team</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Meet the passionate and dedicated members who are working hard to make CodeChef Student Chapter a success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center">
                <Image
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4"
                  width={128} height={128}
                />
                <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Get in Touch</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Have questions or want to collaborate? Reach out to us, and we&apos;ll be happy to help.
          </p>
        </div>
      </section>
    </div>
  );
}
