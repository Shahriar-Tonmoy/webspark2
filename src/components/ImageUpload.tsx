import React from "react";
import { useState, useEffect, useMemo, useCallback } from "react";
import { useDropzone } from "react-dropzone";
// import { PromptImage } from "../../../types";
import { toast } from "react-hot-toast";
import { FaRegImages } from "react-icons/fa";

const baseStyle = {
	flex: 1,
	width: "80%",
	margin: "0 auto",
	minHeight: "400px",
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	justifyContent: "center",
	padding: "20px",
	borderWidth: 2,
	borderRadius: 2,
	borderColor: "#eeeeee",
	borderStyle: "dashed",
	backgroundColor: "#fafafa",
	color: "#bdbdbd",
	outline: "none",
	transition: "border .24s ease-in-out",
};

const focusedStyle = {
	borderColor: "#2196f3",
};

const acceptStyle = {
	borderColor: "#00e676",
};

const rejectStyle = {
	borderColor: "#ff1744",
};

// TODO: Move to a separate file
function fileToDataURL(file: File) {
	return new Promise((resolve, reject) => {
		const reader = new FileReader();
		reader.onload = () => resolve(reader.result);
		reader.onerror = (error) => reject(error);
		reader.readAsDataURL(file);
	});
}

type FileWithPreview = {
  preview: string;
} & File;

interface Props {
  setReferenceImages: (referenceImages: string[]) => void;
}

function ImageUpload({ setReferenceImages }: Props) {
	const [files, setFiles] = useState<FileWithPreview[]>([]);
	const { getRootProps, getInputProps, isFocused, isDragAccept, isDragReject } =
    useDropzone({ maxFiles: 1, maxSize: 1024 * 1024 * 10, /** 5mb */ accept: { "image/png": [".png"], "image/jpeg": [".jpeg"], "image/jpg": [".jpg"],
    },
    // Set up the preview thumbnail images
    onDrop: (acceptedFiles) => { setFiles(
      acceptedFiles.map((file: File) => Object.assign(file, { preview: URL.createObjectURL(file),
      })
      ) as FileWithPreview[]
    );

    // Convert images to data URLs and set the prompt images state
    Promise.all(acceptedFiles.map((file) => fileToDataURL(file))) .then((dataUrls) => { setReferenceImages(dataUrls.map((dataUrl) => dataUrl as string));
    }) .catch((error) => { toast.error("Error reading files" + error); console.error("Error reading files:", error);
    });
    },
    onDropRejected: (rejectedFiles) => { toast.error(rejectedFiles[0].errors[0].message);
    },
    });

	const pasteEvent = useCallback(
		(event: ClipboardEvent) => {
			const clipboardData = event.clipboardData;
			if (!clipboardData) return;

			const items = clipboardData.items;
			const files = [];
			for (let i = 0; i < items.length; i++) {
				const file = items[i].getAsFile();
				if (file && file.type.startsWith("image/")) {
					files.push(file);
				}
			}

			// Convert images to data URLs and set the prompt images state
			Promise.all(files.map((file) => fileToDataURL(file)))
				.then((dataUrls) => {
					if (dataUrls.length > 0) {
						setReferenceImages(dataUrls.map((dataUrl) => dataUrl as string));
					}
				})
				.catch((error) => {
					// TODO: Display error to user
					console.error("Error reading files:", error);
				});
		},
		[setReferenceImages]
	);

	// TODO: Make sure we don't listen to paste events in text input components
	useEffect(() => {
		window.addEventListener("paste", pasteEvent);
	}, [pasteEvent]);

	useEffect(() => {
		return () => files.forEach((file) => URL.revokeObjectURL(file.preview));
	}, [files]); // Added files as a dependency

	const style = useMemo(
		() => ({
			...baseStyle,
			...(isFocused ? focusedStyle : {}),
			...(isDragAccept ? acceptStyle : {}),
			...(isDragReject ? rejectStyle : {}),
		}),
		[isFocused, isDragAccept, isDragReject]
	);

	return (
		<section className="w-full sm:w-[99%] lg:w-3/4 md:w-[90%] lg:w-[50%] h-1/2 sm:mb-32 lg:mb-1">
			{/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
			<div {...getRootProps({ style: {...style, backgroundColor: '#17212A', borderColor: '12px dashed black' } as any })}>
				<input {...getInputProps()} />
				<div className="text-5xl">
					<FaRegImages />
				</div>
				<div className="text-3xl mt-1 lg:mt-4">
					<p>Drag & Drop</p>
				</div>
				<div className="text-xl mt-1 lg:mt-4 text-slate-600">
					<p>or select file from device</p>
				</div>
				<div>
					<button className="bg-[#141D25] border-2 border-slate-500 rounded-xl h-10 w-48 mt-1 lg:mt-4">Upload Image</button>
				</div>
				<div className="text-slate-500 mt-1 lg:mt-4">
					<p>file should be in png, jpeg or jpg format</p>
				</div>
				<div className="text-lg mt-10 lg:mt-24 text-slate-500">
					<p>max 10MB</p>
				</div>
			</div>
		</section>
	);
}

export default ImageUpload;
