import type { Metadata } from 'next';
import { Anton } from 'next/font/google';
import './globals.css';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import { Toaster } from 'react-hot-toast';
import { SpeedInsights } from '@vercel/speed-insights/next';

const anton = Anton({
	subsets: ['latin'],
	weight: '400',
	style: 'normal',
});

export const metadata: Metadata = {
	title: "Keshopan's Portfolio",
	description: 'Photographer and IT Developer',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<body className={anton.className}>
				<SpeedInsights />
				<Toaster />
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	);
}
