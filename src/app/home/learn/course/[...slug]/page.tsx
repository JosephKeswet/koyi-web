"use client";

import React from "react";
import LearnCourseCard from "../../_components/LearnCourseCard";
import { StarFilledIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import { Check, ChevronLeft } from "lucide-react";
import CourseInfo from "../_components/CourseInfo";
import Link from "next/link";
import { routes } from "@/lib/constants";
import Image from "next/image";
import { Accordion, AccordionTrigger } from "@/components/ui/accordion";
import { AccordionContent, AccordionItem } from "@radix-ui/react-accordion";

type Props = {
	params: { slug: string };
};

export default function page({ params }: Props) {
	const { slug } = params;
	const title = `${slug[0]}${slug[1] || ""}`; // Concatenate both for title if second part exists

	const modules = [
		{ id: 'item-1', title: 'Module 1 - Getting Started', description: 'Welcome to the Course', videoDuration: 'Video - 1:31' },
		{ id: 'item-2', title: 'Module 2 - Introduction', description: 'Basic concepts covered', videoDuration: 'Video - 2:05' },
		{ id: 'item-3', title: 'Module 3 - Advanced Topics', description: 'Deep dive into advanced topics', videoDuration: 'Video - 3:15' },
		{ id: 'item-4', title: 'Module 4 - Conclusion', description: 'Wrap-up and final thoughts', videoDuration: 'Video - 1:45' },
	  ];
	
	return (
		<div className="">
		<div className="col-span-2 relative flex flex-col gap-4 md:gap-[32px] py-3 lg:py-[20px]">
		  <div className="col-span-1 lg:col-span-2 h-[290px] bg-primary-light rounded-lg">
		  <Image
			src=''
			alt=''
			height={400}
			width={1000}
		  />
		  </div>
		  <Link
			href={routes.home}
			className="absolute top-6 lg:top-10 left-[17px] flex items-center justify-center w-[32px] h-[32px] md:w-[42px] md:h-[42px] bg-primary-grey rounded-full"
		  >
			<ChevronLeft />
		  </Link>
		</div>
		<div className="grid grid-cols-1 lg:grid-cols-7 gap-4">
		<section className='lg:col-span-4'>
				  <CourseInfo />
			  </section>
  
			  {/* Additional section */}
			  <section className="lg:col-span-3 border w-full h-[558px] px-6 py-8">
				<div>
					<p>Lessons</p>
					<div className="flex gap-1 text-xs text-gray-400 text-wrap">
						<p>38 modules</p>
						<p>586 lectures</p>
						<p>43h, 48 min total length</p>
					</div>
					<Accordion
						type="single"
						collapsible
					>
						{modules.map(module => (
						<AccordionItem key={module.id} value={`item-${module.id}`}>
							<AccordionTrigger className='text-sm text-gray-400'>{module.title}</AccordionTrigger>
							<AccordionContent>
								<div>
									<div className='flex items-center justify-between'>
										<div className="flex gap-4">
										<p>1</p>
										<div className='flex flex-col'>
											<p className='text-lg'>{module.description}</p>
											<p className="text-xs text-gray-400">{module.videoDuration}</p>
										</div>
										</div>
										<div></div>
									</div>
								</div>
							</AccordionContent>
						</AccordionItem>
						))}
					</Accordion>
				</div>
			  </section>
		</div>
			  {/* Students also viewed section */}
			  <section className="col-span-1 lg:col-span-2 mt-8">
				  <div className="flex items-center justify-between">
					  <p className="text-lg font-medium text-primary-black">
						  Students also viewed
					  </p>
				  </div>
				  <div className="grid grid-cols-1 md:grid-cols-2  gap-4 pt-2">
					  <LearnCourseCard />
					  <LearnCourseCard />
					  <LearnCourseCard />
					  <LearnCourseCard />
					  <LearnCourseCard />
					  <LearnCourseCard />
				  </div>
			  </section>
		</div>
	);
}
