import Image from "next/image";
import React from "react";
import Melon from "@/assets/images/melon.png";
import Pink from "@/assets/images/pink.png";
import Kecil from "@/assets/images/kecil.png";
import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";

function CardType() {
	return (
		<div className="flex  justify-center gap-4 flex-wrap mt-28  ">
			<div className=" px-3 py-2 rounded-md border border-black/30 md:max-w-sm w-[90%]  ">
				<div className="px-3 py-3">
					<Image className="object-scale-down h-48 w-96" src={Melon} alt="gas" />
					<h1 className="uppercase font-bold mt-2">Gas 3 KG</h1>
					<p className="line-clamp-3 mt-3 mb-4">
						Gas 3 kg adalah tabung gas elpiji berukuran kecil yang biasa digunakan untuk keperluan rumah tangga,
						terutama memasak. Tabung ini berwarna hijau dan memiliki kapasitas 3 kilogram gas LPG (liquefied petroleum
						gas), campuran propana dan butana yang digunakan sebagai bahan bakar. Tabung gas 3 kg ini menjadi pilihan
						banyak rumah tangga di Indonesia karena ukurannya yang praktis, mudah dibawa, dan harganya yang terjangkau,
						serta sering kali disubsidi oleh pemerintah untuk mendukung keluarga dengan penghasilan rendah.
					</p>
					<div>
						<AlertDialog>
							<AlertDialogTrigger asChild>
								<Button className="w-full bg-[#323232] text-white hover:bg-[#323232]">Show Dialog</Button>
							</AlertDialogTrigger>
							<AlertDialogContent className="w-[90%]">
								<AlertDialogHeader>
									<AlertDialogTitle>GAS 3KG</AlertDialogTitle>
									<AlertDialogDescription className="text-black text-justify">
										Gas 3 kg adalah tabung gas elpiji berukuran kecil yang biasa digunakan untuk keperluan rumah tangga,
										terutama memasak. Tabung ini berwarna hijau dan memiliki kapasitas 3 kilogram gas LPG (liquefied
										petroleum gas), campuran propana dan butana yang digunakan sebagai bahan bakar. Tabung gas 3 kg ini
										menjadi pilihan banyak rumah tangga di Indonesia karena ukurannya yang praktis, mudah dibawa, dan
										harganya yang terjangkau, serta sering kali disubsidi oleh pemerintah untuk mendukung keluarga
										dengan penghasilan rendah.
									</AlertDialogDescription>
								</AlertDialogHeader>
								<AlertDialogFooter>
									<AlertDialogAction className="text-white font-bold">X</AlertDialogAction>
								</AlertDialogFooter>
							</AlertDialogContent>
						</AlertDialog>
					</div>
				</div>
			</div>
			<div className=" px-3 py-2 rounded-md border border-black/30 md:max-w-sm w-[90%] ">
				<div className="px-3 py-3">
					<Image className="object-scale-down h-48 w-96" src={Pink} alt="kontol" />
					<h1 className="uppercase font-bold mt-2">Gas 12 KG</h1>
					<p className="line-clamp-3 mt-3 mb-4">
						Gas 12 kg adalah tabung gas elpiji yang lebih besar dibandingkan dengan tabung 3 kg, dirancang untuk
						keperluan rumah tangga atau usaha kecil yang membutuhkan lebih banyak bahan bakar untuk memasak atau
						memanaskan. Tabung ini biasanya berwarna biru dan berisi 12 kilogram LPG (liquefied petroleum gas), campuran
						propana dan butana. Karena kapasitasnya yang lebih besar, gas 12 kg cocok untuk penggunaan dengan frekuensi
						tinggi atau untuk durasi yang lebih lama. Tabung ini umumnya tidak disubsidi, sehingga harganya lebih tinggi
						dibandingkan dengan tabung gas 3 kg.
					</p>
					<div>
						<AlertDialog>
							<AlertDialogTrigger asChild>
								<Button className="w-full bg-[#323232] text-white hover:bg-[#323232]">Show Dialog</Button>
							</AlertDialogTrigger>
							<AlertDialogContent className="w-[90%]">
								<AlertDialogHeader>
									<AlertDialogTitle>GAS 12KG</AlertDialogTitle>
									<AlertDialogDescription className="text-black text-justify">
										Gas 12 kg adalah tabung gas elpiji yang lebih besar dibandingkan dengan tabung 3 kg, dirancang untuk
										keperluan rumah tangga atau usaha kecil yang membutuhkan lebih banyak bahan bakar untuk memasak atau
										memanaskan. Tabung ini biasanya berwarna biru dan berisi 12 kilogram LPG (liquefied petroleum gas),
										campuran propana dan butana. Karena kapasitasnya yang lebih besar, gas 12 kg cocok untuk penggunaan
										dengan frekuensi tinggi atau untuk durasi yang lebih lama. Tabung ini umumnya tidak disubsidi,
										sehingga harganya lebih tinggi dibandingkan dengan tabung gas 3 kg.
									</AlertDialogDescription>
								</AlertDialogHeader>
								<AlertDialogFooter>
									<AlertDialogAction className="text-white font-bold">X</AlertDialogAction>
								</AlertDialogFooter>
							</AlertDialogContent>
						</AlertDialog>
					</div>
				</div>
			</div>
			<div className=" px-3 py-2 rounded-md border border-black/30 md:max-w-sm w-[90%] ">
				<div className="px-3 py-3">
					<Image className="object-scale-down h-48 w-96" src={Kecil} alt="kontol" />
					<h1 className="uppercase font-bold mt-2">Gas 5.5 KG</h1>
					<p className="line-clamp-3 mt-3 mb-4">
						Gas 5,5 kg adalah tabung gas elpiji berukuran sedang yang dirancang untuk memenuhi kebutuhan rumah tangga
						yang memerlukan kapasitas lebih besar daripada tabung 3 kg tetapi lebih ringan dan mudah dibawa dibandingkan
						tabung 12 kg. Tabung ini biasanya berwarna merah atau hijau dan berisi 5,5 kilogram LPG (liquefied petroleum
						gas), campuran propana dan butana. Gas 5,5 kg cocok untuk penggunaan harian di rumah atau aktivitas memasak
						yang lebih intensif, menawarkan keseimbangan antara ukuran, kemudahan penggunaan, dan durasi pemakaian yang
						lebih lama dibandingkan tabung yang lebih kecil.
					</p>
					<div>
						<AlertDialog>
							<AlertDialogTrigger asChild>
								<Button className="w-full bg-[#323232] text-white hover:bg-[#323232]">Show Dialog</Button>
							</AlertDialogTrigger>
							<AlertDialogContent className="w-[90%]">
								<AlertDialogHeader>
									<AlertDialogTitle>GAS 5.5KG</AlertDialogTitle>
									<AlertDialogDescription className="text-black text-justify">
										Gas 5,5 kg adalah tabung gas elpiji berukuran sedang yang dirancang untuk memenuhi kebutuhan rumah
										tangga yang memerlukan kapasitas lebih besar daripada tabung 3 kg tetapi lebih ringan dan mudah
										dibawa dibandingkan tabung 12 kg. Tabung ini biasanya berwarna merah atau hijau dan berisi 5,5
										kilogram LPG (liquefied petroleum gas), campuran propana dan butana. Gas 5,5 kg cocok untuk
										penggunaan harian di rumah atau aktivitas memasak yang lebih intensif, menawarkan keseimbangan
										antara ukuran, kemudahan penggunaan, dan durasi pemakaian yang lebih lama dibandingkan tabung yang
										lebih kecil.
									</AlertDialogDescription>
								</AlertDialogHeader>
								<AlertDialogFooter>
									<AlertDialogAction className="text-white font-bold">X</AlertDialogAction>
								</AlertDialogFooter>
							</AlertDialogContent>
						</AlertDialog>
					</div>
				</div>
			</div>
		</div>
	);
}

export default CardType;
