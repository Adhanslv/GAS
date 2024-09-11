"use client";
import Image from "next/image";
import peperoni from "@/assets/images/peperoni.jpg";
import Navbar from "../components/navbar";
import CardType from "../components/card";
import Footer from "@/components/footer";
import Link from "next/link";
import { CartesianGrid, Line, LineChart, XAxis } from "recharts";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
export const description = "A line chart with dots";
const chartData = [
	{ month: "January", lots: 1680, mobile: 80 },
	{ month: "February", lots: 1330, mobile: 200 },
	{ month: "March", lots: 1600, mobile: 120 },
	{ month: "April", lots: 1590, mobile: 190 },
	{ month: "May", lots: 1240, mobile: 130 },
	{ month: "June", lots: 810, mobile: 140 },
	{ month: "July", lots: 1320, mobile: 140 },
	{ month: "August", lots: 1760, mobile: 140 },
];
const chartConfig = {
	lots: {
		label: "Lots",
		color: "hsl(var(--chart-1))",
	},
	mobile: {
		label: "Mobile",
		color: "hsl(var(--chart-2))",
	},
} satisfies ChartConfig;

export default function Home() {
	return (
		<>
			<Navbar />
			<div className="px-[4vw] grid grid-cols-2 gap-5">
				<div className="xl:col-span-1 col-span-2">
					<h1 className="text-[#139115] font-bold uppercase text-xl ">LPG BERKUALITAS UNTUK ANDA</h1>
					<h2 className="mb-3 md:text-5xl font-bold uppercase leading-tight text-3xl">
						Gas 3kg. Pilihan tepat untuk kebutuhan rumah tangga!
					</h2>
					<p className="md:w-[89%]">
						"Gas 3kg, solusi praktis dan hemat untuk kebutuhan memasak sehari-hari. Didesain khusus untuk rumah tangga,
						gas ini memberikan performa maksimal dengan harga terjangkau. Aman, mudah digunakan, dan siap menemani
						setiap momen memasak Anda. Pilihan cerdas untuk keluarga!"
					</p>
					<div className="flex  gap-3 mt-4">
						<button className="px-3 py-2.5 text-white  bg-[#323232] rounded-md border-none  ">Get Started</button>
						<button className="px-3 py-2.5 text-black/55  bg-[#0000008c]/10 rounded-md border-none ">
							Our Service
						</button>
					</div>
				</div>
				<div className="xl:col-span-1 col-span-2">
					<div className="flex gap-3">
						<Image className="rounded-md  aspect-video" src={peperoni} alt="gambar" />
					</div>
				</div>
			</div>
			<CardType />
			<Card className=" mt-20 mb-20 border-none px-[4vw]">
				<CardHeader>
					<CardTitle>Statistic Periode</CardTitle>
					<CardDescription>January - Agustus 2024</CardDescription>
				</CardHeader>
				<div className="flex  justify-center">
					<CardContent className="md:w-[60%] w-full">
						<ChartContainer config={chartConfig}>
							<LineChart
								accessibilityLayer
								data={chartData}
								margin={{
									left: 12,
									right: 12,
								}}
							>
								<CartesianGrid vertical={false} />
								<XAxis
									dataKey="month"
									tickLine={false}
									axisLine={false}
									tickMargin={8}
									tickFormatter={(value) => value.slice(0, 3)}
								/>
								<ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
								<Line
									dataKey="lots"
									type="natural"
									stroke="var(--color-lots)"
									strokeWidth={3}
									dot={{
										fill: "var(--color-lots)",
									}}
									activeDot={{
										r: 6,
									}}
								/>
							</LineChart>
						</ChartContainer>
					</CardContent>
				</div>
				<CardFooter className="flex-col items-start gap-2 text-sm">
					<div className="leading-none text-muted-foreground">Showing total sales for the last 8 months</div>
				</CardFooter>
			</Card>
			<div className="about mb-20 mt-20 px-[4vw]">
				<div className="grid grid-cols-2  ">
					<div className="md:col-span-1 col-span-2">
						<iframe
							src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d681.3604852844355!2d117.23125136094502!3d-0.8143955875548835!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sid!4v1725631277743!5m2!1sen!2sid"
							width={840}
							height={406}
							style={{ border: 0 }}
							allowFullScreen
							loading="lazy"
							referrerPolicy="no-referrer-when-downgrade"
							className="content-center w-full "
						/>
					</div>
					<div className="md:col-span-1 col-span-2">
						<div className="flex-col bg-[#323232] text-white w-full h-[407px] flex justify-center items-center px-12">
							<div>
								<p className="mb-6  ">
									Datang ke alamat ini untuk membeli tabung gas 3kg. Kami menyediakan tabung gas dengan kualitas terbaik
									dan harga terjangkau. Staf kami yang ramah dan profesional selalu siap melayani Anda dengan cepat dan
									efisien. Dapatkan kebutuhan gas Anda di sini, dengan pelayanan yang nyaman dan terpercaya.
								</p>
								<Link href={"/about"} className=" rounded-sm border border-white/45  px-3 py-2.5">
									More detail
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
}
