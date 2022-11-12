import Head from "next/head";
export default function Layout({ children }) {
	return (
		<>
			<Head>
				<title>Jeel Rajodiya</title>
				<meta
					name="description"
					content="Jeel Rajodiya's Portfolio site made with nextjs "
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			{children}
		</>
	);
}
