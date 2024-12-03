"use client";
import Image from "next/image";
import Link from "next/link";
import { routes } from "@/lib/constants";
import { ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import React from "react";

const hireCardsData = [
  {
    slug: "swift-developer",
    title: "Cyril John",
    role: "Mobile Developer",
    technologies: ["Swift", "React Native"],
    price: "₦100,000",
    description:
      "I am a mobile developer who has built a range of mobile applications for fintech, social media communication, image management apps, and e-commerce. I focus on creating easy-to-use and visually attractive apps for users across multiple devices.",
    imageUrl: "",
    portfolioImages: ["", ""],
    certificates: ["", ""],
    reviews: [
      {
        author: "Toby James",
        text: "Cyril made what seemed like a complex process easy. The app works perfectly, and I'm very happy with the service.",
        date: "2 months ago",
        avatar: "",
      },
      {
        author: "Rebecca Mbanefo",
        text: "Great experience working with Cyril. He delivered before the deadline and exceeded expectations!",
        date: "2 months ago",
        avatar: "",
      },
    ],
  },
];

export default function Page() {
  const cardData = hireCardsData[0];

  return (
    <div className="flex flex-col gap-8 p-3 md:px-[50px] w-full">

      <div className="flex items-center gap-4 md:gap-[32px]">
        <Link
          href={routes.hire}
          className="flex items-center justify-center w-[32px] h-[32px] md:w-[42px] md:h-[42px] bg-gray-200 rounded-full"
        >
          <ChevronLeft />
        </Link>
        <div className="ml-auto">
          <Button className="px-4 py-2 bg-blue-600 text-white rounded-md">Contact professional</Button>
        </div>
      </div>

      <div className="w-full h-36">
          <Image
            src={cardData.imageUrl}
            alt="Profile Image"
            width={1000}
            height={1000}
          />
        </div>
        <div className="flex flex-col">
          <h1 className="text-2xl font-bold">{cardData.title}</h1>
          <div className="flex space-x-2 mt-1">
            {cardData.technologies.map((tech, index) => (
              <span key={index} className="bg-gray-800 text-xs text-white px-3 py-1 rounded-full">
                {tech}
              </span>
            ))}
          </div>
        </div>

      <div className="flex justify-start mt-8 space-x-8 border-b border-gray-300 pb-4">
        <button className="font-bold border-b-2 border-blue-500 pb-2">Bio</button>
        <button className="font-semibold text-gray-500">Portfolio</button>
        <button className="font-semibold text-gray-500">Certificate</button>
        <button className="font-semibold text-gray-500">Reviews</button>
      </div>

      <div className="mt-8">
        <h2 className="text-xl font-bold">About {cardData.title}</h2>
        <p className="text-gray-600 mt-4">
          {cardData.description}
        </p>
        <ul className="text-gray-700 mt-4 space-y-2">
          <li>🚀 Extensive experience in mobile app development</li>
          <li>📱 Expertise in Swift, React Native, and cross-platform development</li>
          <li>💡 Focus on UI/UX design for enhanced user experience</li>
          <li>🔒 Secure and scalable code</li>
        </ul>
      </div>

      <div className="">
            <h3 className="text-lg font-semibold mb-4">My Portfolio</h3>
            <div className="flex overflow-x-scroll space-x-4">
              {[1, 2, 3, 4].map((_, i) => (
                <div key={i} className="min-w-[300px] flex relative">
                  <Image
                    src=""
                    alt="Portfolio"
                    width={1000}
                    height={1000}
                    className="object-cover"
                  />
                  <div className='absolute bottom-4 right-3'>
                  <p className="p-1 text-sm text-gray-600 rounded-full bg-gray-300 ">website.com</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="">
            <h3 className="text-lg font-semibold mb-4">My Certificate</h3>
            <div className="flex overflow-x-scroll space-x-4">
              {[1, 2, 3, 4].map((_, i) => (
                <div key={i} className="min-w-[300px] flex relative">
                  <Image
                    src=""
                    alt="Portfolio"
                    width={1000}
                    height={1000}
                    className="object-cover"
                  />
                  <div className='absolute bottom-4 right-3'>
                  <p className="p-1 text-sm text-gray-600 rounded-full bg-gray-300 ">website.com</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

      <div className="mt-8">
        <h2 className="text-xl font-bold mb-4">Reviews</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cardData.reviews.map((review, index) => (
            <div key={index} className="flex items-start border p-4 rounded-lg">
              <div className="w-12 h-12 mr-4">
                <Image
                  src={review.avatar}
                  alt={review.author}
                  width={48}
                  height={48}
                />
              </div>
              <div>
                <h3 className="font-semibold">{review.author}</h3>
                <p className="text-gray-600">{review.text}</p>
                <span className="text-gray-400 text-sm">{review.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
