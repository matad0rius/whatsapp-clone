import Head from "next/head";
import Sidebar from '../components/Sidebar';

export default function Home() {
	return (
		<div>
			<Head>
				<title>Whatsapp Clone</title>
				<link rel="icon" href="/favicons.ico" />
			</Head>

	     	 <Sidebar />
		</div>
	);
}
