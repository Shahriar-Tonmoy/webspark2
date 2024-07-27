import { useEffect, useRef, useState } from "react";
import classNames from "classnames";
import useThrottle from "../hooks/useThrottle";
import React from "react";

interface Props {
  code: string;
  device: "mobile" | "desktop" | 'tab' | 'code';
}

function PreviewCus({ code, device }: Props) {
	const throttledCode = useThrottle(code, 200);
	const iframeRef = useRef<HTMLIFrameElement>(null);
	const scrollRef = useRef<HTMLIFrameElement>(null);

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
            iframe.style.scrollbarWidth = 'none';
		}
	}, [throttledCode]);
	const [scheight, setscheight] = useState(832);

	// if(scrollRef.current) {
	// 	setscheight(scrollRef.current.scrollHeight);
	// }

	return (
		<div className={"flex justify-center mx-2 w-full mb-0 overflow-hidden h-["+scheight.toString()+"px]"} ref={scrollRef} style={{scrollbarWidth: 'none'}}>
			<iframe
				id={`preview-${device}`}
				ref={iframeRef}
				title="Preview"
				className={classNames(
					"border-[4px] border-black rounded-[20px] shadow-lg overflow-hidden",
					"mt-2 overflow-hidden",
					"mt-2 overflow-hidden",
					{
						"w-full h-full": device === "desktop",
						"w-[400px] h-full": device === "mobile",
						"w-[600px] h-full": device === "tab",
					}
				)}
                style={{scrollbarWidth: 'none'}}
			></iframe>
		</div>
	);
}

export default PreviewCus;