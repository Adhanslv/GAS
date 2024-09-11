import Link from "next/link";
import React from "react";

function Navbar() {
	return (
		<nav className="flex gap-3 px-[4vw] py-6 mb-14">
			<ul className="flex gap-3">
				<Link href={"/"} className="cursor-pointer font-semibold text-[18px]">
					Home
				</Link>
				<Link href={"/about"} className="cursor-pointer font-semibold text-[18px]">
					About
				</Link>
				<Link href={"/safety"} className="cursor-pointer font-semibold text-[18px]">
					SafetyTips
				</Link>
			</ul>
		</nav>
	);
}

export default Navbar;
