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
		<div className="grid grid-cols-5 gap-4">
		<section className='col-span-3'>
				  <CourseInfo />
			  </section>
  
			  {/* Additional section */}
			  <section className="col-span-2 border w-full h-[558px]">
				<div>
					<p>Lessons</p>
					<div>
						<p>38 modules</p>
						<p>586 lectures</p>
						<p>43h, 48 min total length</p>
					</div>
					<Accordion
						type="single"
						collapsible
						value="item-1"
					>
						<AccordionItem value='item-1'>
							<AccordionTrigger>
								Module 1 -Getting started
							</AccordionTrigger>
							<AccordionContent>
								<div>
									<div>
										<p>1</p>
										<div>
											<p>Welcome to the Course</p>
											<p>Video - 1:31</p>
										</div>
										
									</div>
								</div>
							</AccordionContent>
						</AccordionItem>
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
