import { useEffect, useRef } from "react";
import classNames from "classnames";
import useThrottle from "../hooks/useThrottle";
import React from "react";

interface Props {
  code: string;
  device: "mobile" | "desktop";
}

function Preview({ code, device }: Props) {
	const throttledCode = useThrottle(code, 200);
	const iframeRef = useRef<HTMLIFrameElement | null>(null);
	const scrollRef = useRef<HTMLIFrameElement | null>(null);

	useEffect(() => {
		if (scrollRef.current) {
			const { scrollHeight, clientHeight } = scrollRef.current;
			scrollRef.current.scrollTop = scrollHeight - clientHeight;
		}
	}, [code]);

	useEffect(() => {
		const iframe = iframeRef.current;
		if (iframe && iframe.contentDocument) {
			iframe.contentDocument.open();
			iframe.contentDocument.write(throttledCode);
			iframe.contentDocument.close();
		}
	}, [throttledCode]);

	return (
		<div className="flex justify-center mx-2 mb-0" ref={scrollRef}>
			<iframe
				id={`preview-${device}`}
				ref={iframeRef}
				title="Preview"
				className={classNames(
					"border-[4px] border-black rounded-[20px] shadow-lg",
					"transform scale-[0.9] mt-2",
					{
						"w-3/4 h-[832px]": device === "desktop",
						"w-[400px] h-[832px]": device === "mobile",
					}
				)}
			></iframe>
		</div>
	);
}

export default Preview;