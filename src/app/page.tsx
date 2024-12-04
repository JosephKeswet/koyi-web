"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { routes } from "@/lib/constants";
import {
	IllustrationOne,
	IllustrationThree,
	IllustrationTwo,
} from "@/lib/constants/icons";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

type Props = {};

export default function Home({}: Props) {
	const router = useRouter();
	return (
		<div>
			<div className="flex items-center justify-center">
				<div className="flex flex-col gap-6 h-auto w-full lg:w-[528px] py-4 px-4">
					<div className="grid w-full gap-4 py-4">
						<div className="grid  items-center justify-center gap-2 bg-primary-light rounded-[6px] h-[411px]">
							<IllustrationOne />
							{/* <IllustrationTwo />

							<IllustrationThree /> */}
						</div>
						<div>
							<h1 className="text-[26px] text-black text-center font-bold">
								Learn your favourite courses on the go
							</h1>
							<p className="text-[#95989E] text-sm text-center">
								Easily available 9000+ courses accessible from any part of the
								world.
							</p>
						</div>
						<Link href={routes.signup}>
							<Button className="w-full h-[55px]">Next</Button>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}
