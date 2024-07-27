import { useEffect, useRef } from "react";
import useThrottle from "../hooks/useThrottle";
import React from "react";
import { FiDownload } from "react-icons/fi";

interface Props {
  code: string;
  download: () => void;
}

function AllDivPreview({ code, download }: Props) {
	const throttledCode = useThrottle(code, 200);
	const iframeRef = useRef<HTMLIFrameElement | null>(null);

	useEffect(() => {
		const iframe = iframeRef.current;
		if (iframe && iframe.contentDocument) {
			iframe.contentDocument.open();
			iframe.contentDocument.write(throttledCode);
			iframe.contentDocument.close();
		}
	}, [throttledCode]);

	return (
		<div className="flex flex-col w-full justify-center mx-2">
			<div className="flex w-full justify-end mb-10"><button onClick={download} className="bg-white p-2 mr-[10%] text-xl rounded-lg"><FiDownload /></button></div>
			<iframe
				id={`preview-div`}
				ref={iframeRef}
				title="Preview"
				className={"rounded-xl w-[85%] h-screen mx-auto"}
			></iframe>
		</div>
	);
}

export default AllDivPreview;