import Image from "next/image";
import Buried from "./images/BuriedMemories.jpg";
import {useSpring, animated} from "@react-spring/web";
import {useDrag} from "@use-gesture/react";

type Props = {};

const Hero = (props: Props) => {
	function PullRelease() {
		const [props, api] = useSpring(() => ({x: 0, y: 0, scale: 1}));
		const bind = useDrag(({event, active, movement: [x, y]}) => {
			event.preventDefault();
			api.start({
				x: active ? x : 0,
				y: active ? y : 0,
				scale: active ? 1.1 : 1,
				immediate: (k) => k !== "scale" && active,
			});
		});
		// Bind it to a component
		return (
			<animated.div
				className="w-full bg-primary border border-gray-100 rounded-md h-[24rem] bg-clip-padding backdrop-filter backdrop-blur-[0.2rem] bg-opacity-40 overflow-hidden"
				{...bind()}
				style={props}
			></animated.div>
		);
	}

	return (
		<div className="pan hero min-h-fit">
			<PullRelease />
			<img className="flex bg-hero-bg w-full h-[24rem] object-cover  overflow-hidden" src="/BuriedMemoriesBg.jpg"></img>
			<div className="flex-col hero-content lg:flex-row">
				<Image src={Buried} className="max-w-sm rounded-lg shadow-2xl" alt="Buried Memories" layout="responsive" />
				<div>
					<h1 className="text-5xl font-bold">6.2 - Official News!</h1>
					<p className="py-6">
						Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In
						deleniti eaque aut repudiandae et a id nisi.
					</p>
					<button className="btn">Get Started</button>
				</div>
			</div>
		</div>
	);
};
export default Hero;
