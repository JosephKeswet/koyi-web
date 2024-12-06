"use client";
import Image from "next/image";
import Link from "next/link";
import { routes } from "@/lib/constants";
import { ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import React from "react";
import SectionTab from "../../../_components/SectionTab";
import { HomeHireAProffessionalAboutTab } from "@/lib/constants/enums";
import { useParams, usePathname, useRouter } from "next/navigation";

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
  const params = useParams();
  const pathname = usePathname();
  const field = params?.slug ? params.slug[0] : "";
  const pathSegments = pathname.split("/");
  const category = pathSegments[4];

  const tab = [
    { routeKey: "bio", value: HomeHireAProffessionalAboutTab.Bio },
    { routeKey: "portfolio", value: HomeHireAProffessionalAboutTab.Portfolio },
    {
      routeKey: "certificate",
      value: HomeHireAProffessionalAboutTab.Certificate,
    },
    { routeKey: "reviews", value: HomeHireAProffessionalAboutTab.Reviews },
  ];

  return (
    <div className="flex flex-col gap-8 w-full">
      <div className="flex items-center gap-4 md:gap-[32px]">
        <Link
          href={routes.hire}
          className="flex items-center justify-center w-[32px] h-[32px] md:w-[42px] md:h-[42px] bg-gray-200 rounded-full"
        >
          <ChevronLeft />
        </Link>
      </div>

      <div className="w-full h-36">
        <Image
          src={cardData.imageUrl}
          alt="Profile Image"
          width={1000}
          height={1000}
        />
      </div>
      <div className="w-full pt-8">
  <div className="flex justify-between items-center">
    <div className="flex gap-2">
      <div className="w-14 h-14 rounded-full bg-gray-50">
        <Image src="" alt="Profile Picture" width={2000} height={4000} className="rounded-full" />
      </div>
      <div className="flex flex-col">
        <div className="flex items-center gap-2">
        <h1 className="text-xl font-semibold">Cyril John</h1>
        <p className="text-sm text-gray-600">3 years</p>
        </div>
        <div className="flex gap-2 mt-2">
          <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">Swift</span>
          <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">React Native</span>
        </div>
      </div>
    </div>
    <div className="flex gap-4 items-center">
      <div className=''>
      <div className="text-xs">From</div>
      <p className="text-lg font-bold">₦100,000</p>
      </div>
      <Button className="px-4 py-2 bg-blue-600 text-white rounded-md">Contact professional</Button>
    </div>
  </div>
</div>


      <SectionTab
        field={field}
        category={category}
        tabs={tab}
        defaultTab={tab[0].routeKey}
      />


      <div className="mt-8">
        <h2 className="max-w-[350px] text-xl font-bold">
          Build yoyur custom mobile application and upload to all mobile stores.
           </h2>
        <p className="text-gray-600 mt-4">{cardData.description}</p>
        <div className="pt-4">
        <p>Frameworks:</p>
        <ul className="text-gray-700 mt-4 space-y-2 list-disc pl-5">
          <li>MERN, MEAN</li>
        </ul>
        </div>
        <div className='pt-4'>
        <p>Why choose me?</p>
        <ul className="text-gray-700 mt-4 space-y-2 list-disc pl-5">
          <li>Extensive Experience</li>
          <li>Extensive Experience</li>
          <li>Extensive Experience</li>
          <li>Extensive Experience</li>
        </ul>
        </div>
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
              <div className="absolute bottom-4 right-3">
                <p className="p-1 text-sm text-gray-600 rounded-full bg-gray-300 ">
                  website.com
                </p>
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
              <div className="absolute bottom-4 right-3">
                <p className="p-1 text-sm text-gray-600 rounded-full bg-gray-300 ">
                  website.com
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-xl font-bold mb-4">Reviews</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cardData.reviews.map((review, index) => (
            <div key={index} className="flex flex-col items-start border p-2 rounded-lg">
              <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full">
                <img
                  src={review.avatar}
                  alt={review.author}
                  className
                />
              </div>
              <h3 className="font-semibold">{review.author}</h3>
              </div>
              <div>
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
