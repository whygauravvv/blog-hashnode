import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
	return (
		<Html lang="en">
			<Head />
			<body>
				<a href="#main-content" className="skip-to-content">
					Skip to content
				</a>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
