import Head from "next/head";
export default function Layout({ children }) {
	return (
		<>
			<Head>
				<title>Jeel Rajodiya's Portfolio</title>
				<meta
					name="description"
					content="Jeel Rajodiya is a software developer focused in developing softwares on web technologies such as JavaScript and NextJS. He is open for Internship and Job opportunities in Ahmedabad, India and Surat, India."
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			{children}
		</>
	);
}
