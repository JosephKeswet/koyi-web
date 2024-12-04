"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { routes } from "@/lib/constants";
import {
	BackIcon,
	CheckMark,
	EmailIcon,
	PasswordIcon,
	PhoneIcon,
	ProfileIcon,
	SMSIcon,
	UserIcon,
} from "@/lib/constants/icons";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

type Props = {};

export default function Page({}: Props) {
	const router = useRouter();
	const [channel, setChannel] = useState("sms");
	function toggleChannel(channel: string) {
		setChannel(channel);
	}
	return (
		<div>
			<div className="flex items-center justify-center">
				<div className="flex flex-col gap-6 h-auto w-auto lg:w-[528px] py-4 px-4">
					<div className="flex items-center justify-left">
						<BackIcon handlerFunc={() => router.back()} />
					</div>
					<div className="flex flex-col gap-2 md:gap-6">
						<h1 className="text-left md:text-left text-xl  md:text-[48px] text-black font-semibold">
							Verification type
						</h1>
						<p className="text-[#95989E] text-sm text-left">
							Please select your preferred option to receive your OTP.
						</p>
						<div
							onClick={() => toggleChannel("sms")}
							className={`flex items-center justify-between px-4 py-6 w-full h-[85px] rounded-[6px] ${
								channel === "sms"
									? "border-[1.5px] border-primary "
									: "border-[1.5px] border-slate-300"
							}}`}
						>
							<div className="flex items-center gap-3">
								<SMSIcon />
								<div>
									<p className="text-[#95989E] text-sm text-left">Via SMS</p>
									<p className="text-black text-base text-left">
										+2348166856468
									</p>
								</div>
							</div>
							{channel === "sms" && <CheckMark />}
						</div>
						<div
							onClick={() => toggleChannel("email")}
							className={`flex items-center justify-between px-4 py-6 w-full h-[85px] rounded-[6px] ${
								channel === "email"
									? "border-[1.5px] border-primary  "
									: "border-[1.5px] "
							}}`}
						>
							<div className="flex items-center gap-3">
								<EmailIcon />
								<div>
									<p className="text-[#95989E] text-sm text-left">Via email</p>
									<p className="text-black text-base text-left">
										hellodavidokoro@gmail.com
									</p>
								</div>
							</div>
							{channel === "email" && <CheckMark />}
						</div>
					</div>
					<Link
						href={channel === "email" ? routes.via_email : routes.via_sms}
						className="grid gap-4 py-4"
					>
						<Button>Proceed</Button>
					</Link>
				</div>
			</div>
		</div>
	);
}
