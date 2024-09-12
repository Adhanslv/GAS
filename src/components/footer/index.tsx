import React from "react";
import { FaInstagram } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";

function Footer() {
	return (
		<div className="bg-[#323232] text-white">
			<div className="grid grid-cols-2 px-[4vw] py-4   ">
				<div className="px-3 py-1.5 col-span-2 md:col-span-1">
					<h1 className="font-semibold text-xl mb-3">Home</h1>
					<p>
						Pilih Elpiji, Pilih Kualitas Terbaik untuk Keluarga Anda. Elpiji Andalan, Solusi Masak Tanpa Repot. Elpiji
						Hemat, Nyaman untuk Setiap Rumah. Gas Elpiji Energi Aman untuk Setiap Momen Memasak
					</p>
				</div>
				<div className="px-3 py-1.5 flex flex-col gap-1 ">
					<h1 className="font-semibold text-xl mb-3">Contact</h1>
					<p className="flex items-center gap-1">
						<FaInstagram />
						asharr
					</p>
					<p className="flex items-center gap-1">
						<IoLogoWhatsapp />
						081345220865
					</p>
				</div>
			</div>
		</div>
	);
}

export default Footer;
