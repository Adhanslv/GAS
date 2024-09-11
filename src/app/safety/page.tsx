import React from "react";
import { Metadata } from "next";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import safety from "@/assets/images/safety.jpg";
import Image from "next/image";
import Link from "next/link";
import { IoIosArrowBack } from "react-icons/io";
export const metadata: Metadata = {
	title: "Safety Tips",
	description: "The official Next.js Course Dashboard, built with App Router.",
	metadataBase: new URL("https://next-learn-dashboard.vercel.sh"),
};

function Safety() {
	return (
		<div className="m-auto sm:w-[76%] w-[90%] py-4 ">
			<div className="mb-3">
				<Link href={"/"} className="font-semibold flex items-center  text-xl">
					<IoIosArrowBack />
					<span className="hover:translate-x-2 duration-300 ease-in ">Back</span>
				</Link>
			</div>
			<Image
				className="w-full md:aspect-[5/2] rounded-t-xl mb-3 border border-black/40 object-center"
				src={safety}
				alt="fotonya"
			/>
			<h1 className="font-bold text-2xl mb-3">Safety Tips : Cara Aman Menangani Gas LPG di Rumah</h1>
			<p className="text-justify">
				Gas LPG (Liquefied Petroleum Gas) adalah sumber energi yang umum digunakan untuk keperluan rumah tangga, seperti
				memasak dan memanaskan air. Meskipun sangat berguna dan efisien, LPG juga bisa berbahaya jika tidak ditangani
				dengan benar. Untuk menghindari kecelakaan seperti kebocoran gas atau kebakaran, penting untuk mengetahui cara
				yang aman dalam menangani dan menggunakan gas LPG di rumah. Berikut adalah beberapa tips keselamatan yang perlu
				diperhatikan :
			</p>
			<Accordion type="single" collapsible className="w-full mb-3">
				<AccordionItem value="item-1">
					<AccordionTrigger className="font-semibold text-left">
						1. Periksa Kondisi Tabung Gas Secara Rutin
					</AccordionTrigger>
					<AccordionContent className="text-justify">
						Pastikan tabung gas LPG dalam kondisi baik dan tidak mengalami kerusakan. Sebelum membeli atau memasang
						tabung gas, periksa apakah ada karat, retakan, atau tanda-tanda kerusakan lainnya. Jika ada, segera laporkan
						kepada penjual atau distributor resmi dan jangan gunakan tabung tersebut.
					</AccordionContent>
				</AccordionItem>
				<AccordionItem value="item-2">
					<AccordionTrigger className="font-semibold text-left">
						2. Gunakan Regulator dan Selang yang Bersertifikat
					</AccordionTrigger>
					<AccordionContent className="text-justify">
						Selalu gunakan regulator dan selang gas yang telah bersertifikat SNI (Standar Nasional Indonesia). Pastikan
						regulator terpasang dengan benar dan terkunci rapat pada tabung gas. Ganti selang gas secara berkala,
						idealnya setiap dua tahun sekali, atau lebih sering jika ditemukan tanda-tanda kerusakan seperti retak atau
						bocor.
					</AccordionContent>
				</AccordionItem>
				<AccordionItem value="item-3">
					<AccordionTrigger className="font-semibold text-left">
						3. Periksa Kebocoran Gas Secara Berkala
					</AccordionTrigger>
					<AccordionContent className="text-justify">
						Periksa kebocoran gas secara berkala dengan menggunakan air sabun. Caranya, oleskan air sabun pada sambungan
						regulator dan selang. Jika muncul gelembung udara, itu menandakan adanya kebocoran. Segera tutup katup
						tabung gas dan ganti komponen yang bermasalah.
					</AccordionContent>
				</AccordionItem>
				<AccordionItem value="item-4">
					<AccordionTrigger className="font-semibold text-left">
						4. Pastikan Ruangan Memiliki Ventilasi yang Baik
					</AccordionTrigger>
					<AccordionContent className="text-justify">
						Pastikan dapur atau ruangan tempat tabung gas LPG digunakan memiliki ventilasi yang baik untuk mencegah
						penumpukan gas jika terjadi kebocoran. Ventilasi yang baik akan memungkinkan gas yang bocor untuk keluar
						dari ruangan dengan cepat, sehingga mengurangi risiko kebakaran atau ledakan.
					</AccordionContent>
				</AccordionItem>
				<AccordionItem value="item-5">
					<AccordionTrigger className="font-semibold text-left">5. Jauhkan dari Sumber Panas dan Api</AccordionTrigger>
					<AccordionContent className="text-justify">
						Selalu letakkan tabung gas LPG jauh dari sumber panas, seperti kompor, oven, atau peralatan listrik yang
						dapat memicu percikan api. Hindari merokok atau menyalakan api di dekat tabung gas.
					</AccordionContent>
				</AccordionItem>
				<AccordionItem value="item-6">
					<AccordionTrigger className="font-semibold text-left">
						6. Matikan Kompor dan Regulator Setelah Menggunakan
					</AccordionTrigger>
					<AccordionContent className="text-justify">
						Setelah selesai menggunakan kompor, pastikan untuk mematikan kompor dan menutup katup regulator pada tabung
						gas. Kebiasaan ini penting untuk mengurangi risiko kebocoran gas saat kompor tidak digunakan.
					</AccordionContent>
				</AccordionItem>
				<AccordionItem value="item-7">
					<AccordionTrigger className="font-semibold text-left">
						7. Jangan Gunakan Peralatan Gas yang Rusak
					</AccordionTrigger>
					<AccordionContent className="text-justify">
						Jika kompor gas atau peralatan lain yang menggunakan LPG mengalami kerusakan, segera perbaiki atau ganti
						dengan yang baru. Menggunakan peralatan yang rusak dapat menyebabkan kebocoran gas atau bahkan kebakaran.
					</AccordionContent>
				</AccordionItem>
				<AccordionItem value="item-8">
					<AccordionTrigger className="font-semibold text-left">
						8. Hindari Mengguncang atau Menjatuhkan Tabung Gas
					</AccordionTrigger>
					<AccordionContent className="text-justify">
						Tabung gas LPG bertekanan tinggi dan rentan terhadap kerusakan jika jatuh atau terguncang keras. Selalu
						pegang tabung dengan hati-hati saat memindahkan, dan pastikan diletakkan di tempat yang stabil.
					</AccordionContent>
				</AccordionItem>
				<AccordionItem value="item-9">
					<AccordionTrigger className="font-semibold text-left">9. Ketahui Tanda-Tanda Kebocoran Gas</AccordionTrigger>
					<AccordionContent className="text-justify">
						Kenali tanda-tanda kebocoran gas seperti bau menyengat khas LPG (bau telur busuk), bunyi mendesis, atau
						munculnya bunga api. Jika Anda mencurigai ada kebocoran, segera buka jendela dan pintu, matikan sumber api,
						dan jangan menyalakan peralatan listrik apa pun.
					</AccordionContent>
				</AccordionItem>
				<AccordionItem value="item-10">
					<AccordionTrigger className="font-semibold text-left">
						10. Simpan Alat Pemadam Kebakaran di Dapur
					</AccordionTrigger>
					<AccordionContent className="text-justify">
						Pastikan Anda memiliki alat pemadam kebakaran di dapur, dan tahu cara menggunakannya. Ini akan sangat
						membantu jika terjadi kebakaran kecil yang disebabkan oleh gas LPG.
					</AccordionContent>
				</AccordionItem>
				<AccordionItem value="item-11">
					<AccordionTrigger className="font-semibold text-left">
						11. Hubungi Petugas atau Profesional Jika Terjadi Kebocoran
					</AccordionTrigger>
					<AccordionContent className="text-justify">
						Jika Anda mendeteksi kebocoran gas yang tidak bisa ditangani sendiri, segera hubungi petugas penyedia gas
						atau profesional yang berpengalaman. Jangan mencoba memperbaiki kebocoran sendiri jika Anda tidak yakin atau
						tidak memiliki pengalaman.
					</AccordionContent>
				</AccordionItem>
				<AccordionItem value="item-12">
					<AccordionTrigger className="font-semibold text-left">
						12. Simpan Tabung Gas di Tempat yang Aman
					</AccordionTrigger>
					<AccordionContent className="text-justify">
						Pastikan tabung gas disimpan di tempat yang aman, kering, dan jauh dari jangkauan anak-anak. Letakkan tabung
						dalam posisi tegak dan tidak terpapar sinar matahari langsung atau kelembapan tinggi.
					</AccordionContent>
				</AccordionItem>
			</Accordion>
			<p className="mt-3 mb-3 text-justify">
				<span className="font-semibold text-xl block mt-3 mb-3">Kesimpulan</span>
				Menangani gas LPG dengan aman memerlukan kesadaran dan kebiasaan yang baik. Dengan mengikuti tips keselamatan di
				atas, Anda dapat meminimalkan risiko kebakaran atau ledakan yang mungkin terjadi akibat penggunaan gas LPG yang
				tidak tepat. Ingat, keselamatan Anda dan keluarga adalah prioritas utama, jadi selalu berhati-hati dalam
				menggunakan gas LPG di rumah.
			</p>
		</div>
	);
}

export default Safety;
