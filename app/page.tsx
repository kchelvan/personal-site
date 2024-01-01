import HeroCard from './features/heroCard';

export default function Home() {
	return (
		<div id='hero' className={`w-full`}>
			<HeroCard />
			<div className='w-full h-[1pt] bg-black mt-16' />
		</div>
	);
}
