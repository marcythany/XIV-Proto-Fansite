import Head from "next/head";
import Breadcumbs from "./breadcumbs";
import Content from "./content";
import Footer from "./footer";
import Hero from "./hero";
import Navbar from "./navbar";
import Sidebar from "./sidebar";

export default function Home() {
	return (
		<div>
			<Head>
				<title>Final Fantasy XIV - Proto Fansite</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Navbar />
			<Hero />
			<main className="bg-neutral">
				<Breadcumbs />
				<section className="flex flex-row gap-4">
					<Sidebar />
					<Content />
				</section>
			</main>
			<footer className="grid place-items-center">
				<Footer />
			</footer>
		</div>
	);
}