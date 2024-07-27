import { useRef, useEffect } from "react";
import Groot from '../assets/images/groot.gif';
import Spinner from "./Spinner";
import React from "react";

interface Props {
  code: string;
}

function CodePreview({ code }: Props) {
	const scrollRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (scrollRef.current) {
			const { scrollHeight, clientHeight } = scrollRef.current;
			scrollRef.current.scrollTop = scrollHeight - clientHeight;
		}
	}, [code]);

	return (
		<div>
			<div>
				<img src={Groot} className="mx-auto"/>
			</div>
			<div className="text-center text-white">
				<p>Hi! I am GenAI.</p>
				<p>Generating your site ...</p>
			</div>
			<div className="flex w-full">
			<div className="mx-auto"><Spinner /></div>
			</div>
		<div
			ref={scrollRef}
			className="w-full px-2 bg-black text-green-400 flex font-mono text-[10px] my-4 max-h-18 overflow-y-auto"
			style={{ maxHeight: '4.5rem' }} // Adjusted height for max-h-18 (4.5rem)
		>
			{code}
			{/*{"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mi in nulla posuere sollicitudin aliquam ultrices sagittis. Faucibus turpis in eu mi bibendum neque egestas congue quisque. Sit amet tellus cras adipiscing enim eu. In ante metus dictum at tempor commodo ullamcorper a lacus. Sit amet massa vitae tortor condimentum lacinia quis vel. Donec adipiscing tristique risus nec feugiat in fermentum. Dictum varius duis at consectetur lorem donec. Integer feugiat scelerisque varius morbi enim nunc. Eros in cursus turpis massa.Egestas erat imperdiet sed euismod nisi porta lorem mollis aliquam. Dictum varius duis at consectetur lorem donec massa. Metus dictum at tempor commodo. Erat velit scelerisque in dictum. Augue lacus viverra vitae congue. Porttitor rhoncus dolor purus non enim. Adipiscing elit duis tristique sollicitudin nibh sit amet. Morbi tincidunt augue interdum velit euismod in pellentesque massa placerat. Nec nam aliquam sem et. Lorem mollis aliquam ut porttitor leo a diam. Quis vel eros donec ac odio tempor orci. Lectus arcu bibendum at varius. Sapien nec sagittis aliquam malesuada. Facilisi morbi tempus iaculis urna id. Quis varius quam quisque id diam vel quam. Bibendum enim facilisis gravida neque convallis a. Magna ac placerat vestibulum lectus mauris. In tellus integer feugiat scelerisque varius morbi. Ac feugiat sed lectus vestibulum mattis ullamcorper velit sed ullamcorper. Quam adipiscing vitae proin sagittis.Eget arcu dictum varius duis at consectetur lorem. Nunc aliquet bibendum enim facilisis gravida. Et leo duis ut diam quam. Commodo ullamcorper a lacus vestibulum sed arcu non. Platea dictumst quisque sagittis purus sit. Nisl condimentum id venenatis a condimentum vitae sapien. Pretium nibh ipsum consequat nisl vel. Pharetra massa massa ultricies mi quis hendrerit dolor magna eget. Aenean vel elit scelerisque mauris pellentesque pulvinar. In aliquam sem fringilla ut morbi tincidunt augue. Ac feugiat sed lectus vestibulum. Vitae et leo duis ut diam quam nulla porttitor. Lectus nulla at volutpat diam ut. Porttitor eget dolor morbi non arcu. Diam vel quam elementum pulvinar etiam non. Orci phasellus egestas tellus rutrum tellus. Sed turpis tincidunt id aliquet. Praesent tristique magna sit amet. Sed turpis tincidunt id aliquet risus feugiat. Pharetra massa massa ultricies mi quis.Orci a scelerisque purus semper eget duis at tellus at. Euismod in pellentesque massa placerat duis ultricies lacus. Nibh venenatis cras sed felis eget velit aliquet sagittis id. Est ante in nibh mauris cursus mattis molestie. Tincidunt tortor aliquam nulla facilisi. Fermentum posuere urna nec tincidunt praesent semper feugiat nibh. Pharetra diam sit amet nisl suscipit. Praesent elementum facilisis leo vel. Bibendum est ultricies integer quis auctor. Mattis enim ut tellus elementum sagittis vitae et leo duis.Eu ultrices vitae auctor eu augue ut lectus arcu bibendum. Donec adipiscing tristique risus nec feugiat in fermentum posuere urna. Arcu cursus vitae congue mauris rhoncus aenean vel elit. Nisi quis eleifend quam adipiscing vitae proin sagittis nisl rhoncus. Quis hendrerit dolor magna eget. Est velit egestas dui id ornare arcu odio ut. Sed euismod nisi porta lorem mollis. Risus ultricies tristique nulla aliquet enim tortor. Pellentesque sit amet porttitor eget dolor morbi non arcu. Diam vel quam elementum pulvinar etiam non. Amet nisl suscipit adipiscing bibendum est ultricies integer. Blandit turpis cursus in hac habitasse platea. Dui vivamus arcu felis bibendum ut. Egestas diam in arcu cursus euismod quis viverra nibh. Id leo in vitae turpis massa sed elementum tempus egestas. Egestas egestas fringilla phasellus faucibus scelerisque eleifend donec pretium."}*/}
		</div>
		</div>
	);
}

export default CodePreview;
