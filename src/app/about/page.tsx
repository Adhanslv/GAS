import React from "react";
import { Metadata } from "next";
import Image from "next/image";
import peperoni from "@/assets/images/peperoni.jpg";
import Link from "next/link";
import { IoIosArrowBack } from "react-icons/io";

export const metadata: Metadata = {
	title: "About Us",
	description: "The official Next.js Course Dashboard, built with App Router.",
	metadataBase: new URL("https://next-learn-dashboard.vercel.sh"),
};

function About() {
	return (
		<div className="m-auto sm:w-[76%] w-[90%] py-4 ">
			<div className="mb-3">
				<Link href={"/"} className="font-semibold flex items-center  text-xl">
					<IoIosArrowBack />
					<span className="hover:translate-x-2 duration-300 ease-in ">Back</span>
				</Link>
			</div>
			<Image className="w-full md:aspect-[5/2] rounded-t-xl mb-3  object-center" src={peperoni} alt="fotonya" />
			<h1 className="mb-3 text-2xl font-bold">Pangkalan Jafar Husain : Melanjutkan Warisan dengan Semangat Baru</h1>
			<p className="text-justify mb-4">
				Pangkalan gas Jafar Husain yang berlokasi di Gang Darma Bakti, Kecamatan Muara Jawa Ulu, sudah lama dikenal
				sebagai salah satu penyedia gas elpiji terpercaya bagi masyarakat sekitar. Selama bertahun-tahun, pangkalan ini
				menjadi sumber utama kebutuhan energi rumah tangga bagi warga setempat, berkat pelayanan yang ramah dan cepat
				dari pemiliknya, Jafar Husain. Namun, setelah beliau wafat, kini pengelolaan pangkalan ini diteruskan oleh
				anaknya, yang bertekad melanjutkan usaha keluarga dengan semangat dan visi yang baru.
				<span className="font-bold block text-xl mt-3 mb-3">Sejarah Pangkalan Gas Jafar Husain</span> Pangkalan gas ini
				didirikan oleh Jafar Husain dengan niat untuk menyediakan kebutuhan gas elpiji yang aman dan terjangkau bagi
				warga di Kecamatan Muara Jawa Ulu, terutama di sekitar Gang Darma Bakti. Sejak awal berdirinya, pangkalan ini
				telah mendapatkan kepercayaan masyarakat karena pelayanan yang jujur, harga yang terjangkau, serta pasokan gas
				yang selalu tersedia. Jafar Husain dikenal sebagai sosok yang pekerja keras dan sangat peduli dengan
				kesejahteraan masyarakat sekitarnya. Ia selalu memastikan bahwa pangkalannya memiliki stok yang cukup bahkan di
				masa-masa sulit seperti saat terjadi kelangkaan gas elpiji. Kebaikan hatinya dan komitmennya untuk melayani
				dengan tulus membuat pangkalan gasnya menjadi pilihan utama banyak pelanggan.
				<span className="font-bold block text-xl mt-3 mb-3">Pengelolaan oleh Generasi Kedua</span>
				Setelah Jafar Husain wafat, pangkalan gas ini kemudian dikelola oleh anaknya. Meski kehilangan sosok ayah yang
				menjadi inspirasi, anak Jafar Husain mengambil alih usaha ini dengan penuh tanggung jawab dan semangat untuk
				meneruskan apa yang telah dibangun ayahnya. Ia memahami betul bahwa pangkalan gas ini bukan hanya sekadar usaha,
				tetapi juga bagian dari warisan keluarga dan kontribusi sosial bagi komunitas di Muara Jawa Ulu. Anak Jafar
				Husain berusaha mempertahankan reputasi baik pangkalan dengan tetap menyediakan layanan yang cepat, harga yang
				kompetitif, dan pasokan yang cukup. Selain itu, ia juga memperkenalkan beberapa inovasi baru, seperti sistem
				pemesanan gas melalui telepon atau aplikasi pesan singkat untuk memudahkan pelanggan dalam memesan gas elpiji,
				serta layanan antar gas yang lebih cepat dan tepat waktu.
				<span className="font-bold block text-xl mb-3 mt-3">Tantangan dalam Pengelolaan Pangkalan</span>
				Melanjutkan usaha keluarga tentu bukanlah hal yang mudah. Anak Jafar Husain menghadapi berbagai tantangan, mulai
				dari menjaga stabilitas pasokan gas, memastikan harga tetap terjangkau bagi masyarakat, hingga mempertahankan
				kepercayaan pelanggan yang telah lama terbina. Namun, dengan semangat dan tekad yang kuat, ia mampu menghadapi
				berbagai tantangan tersebut. Ia juga berusaha untuk menjalin hubungan baik dengan para pemasok dan distributor
				gas elpiji, serta memperluas jaringan pelanggan di sekitar Kecamatan Muara Jawa Ulu. Ia percaya bahwa dengan
				melanjutkan nilai-nilai kerja keras dan kejujuran yang diwariskan oleh ayahnya, pangkalan ini akan terus menjadi
				pilihan utama masyarakat.
				<span className="font-bold block text-xl mb-3 mt-3">Harapan dan Masa Depan Pangkalan Gas Jafar Husain</span> Ke
				depan, anak Jafar Husain berharap dapat melanjutkan dan mengembangkan usaha ini dengan lebih baik lagi. Ia ingin
				memastikan bahwa pangkalan gas ini tidak hanya menjadi usaha yang menguntungkan bagi keluarga, tetapi juga
				memberikan manfaat nyata bagi masyarakat di Gang Darma Bakti dan sekitarnya. Dengan inovasi yang terus
				diperbarui dan komitmen terhadap pelayanan terbaik, ia berharap pangkalan ini dapat terus bertahan dan
				berkembang di tengah persaingan pasar. Pangkalan gas Jafar Husain di Gang Darma Bakti, Kecamatan Muara Jawa Ulu,
				adalah contoh nyata bagaimana warisan keluarga dapat diteruskan dengan baik oleh generasi berikutnya. Meskipun
				sang pendiri telah tiada, semangat dan nilai-nilai yang ditanamkan oleh Jafar Husain tetap hidup melalui anaknya
				yang kini mengambil alih tongkat estafet. Dengan upaya yang gigih dan tekad yang kuat, pangkalan ini diharapkan
				akan terus menjadi bagian penting dari kehidupan masyarakat sekitar untuk tahun-tahun mendatang.
			</p>
		</div>
	);
}

export default About;
