import Header from '../components/Header';
import Main from '../components/Main';
import Footer from '../components/Footer';

export default function Home() {
	return (
		<div className="h-screen bg-blue-900 font-['Josefin_Sans'] ">
			{/* Header */}
			<Header />
			{/* Main */}
			<Main />
			{/* Footer */}
			<Footer />
		</div>
	);
}
