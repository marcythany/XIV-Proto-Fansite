import Document, {Head, Html, Main, NextScript} from "next/document";

class MyDocument extends Document {
	render() {
		return (
			<Html>
				<Head>
					<meta name="description" content="FFXIV Proto Fansite" />
					<link rel="icon" href="/favicon.ico" />
					<link rel="preconnect" href="https://fonts.googleapis.com" />
					<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
					<link
						href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700;800&family=Saira:wght@700&display=swap"
						rel="stylesheet"
					></link>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
