import { useState } from "react";
import { HTTP_BACKEND_URL } from "../config";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { toast } from "react-hot-toast";
import React from "react";

interface Props {
  screenshotOneApiKey: string | null;
  doCreate: (urls: string[]) => void;
}

export function UrlInputSection({ doCreate, screenshotOneApiKey }: Props) {
	const [isLoading, setIsLoading] = useState(false);
	const [referenceUrl, setReferenceUrl] = useState("");

	async function takeScreenshot() {
		if (!screenshotOneApiKey) {
			toast.error(
				"Please add a ScreenshotOne API key in the Settings dialog. This is optional - you can also drag/drop and upload images directly.",
				{ duration: 8000 }
			);
			return;
		}

		if (!referenceUrl) {
			toast.error("Please enter a URL");
			return;
		}

		if (referenceUrl) {
			try {
				setIsLoading(true);
				const response = await fetch(`${HTTP_BACKEND_URL}/api/screenshot`, {
					method: "POST",
					body: JSON.stringify({
						url: referenceUrl,
						apiKey: screenshotOneApiKey,
					}),
					headers: {
						"Content-Type": "application/json",
					},
				});

				if (!response.ok) {
					throw new Error("Failed to capture screenshot");
				}

				const res = await response.json();
				doCreate([res.url]);
			} catch (error) {
				console.error(error);
				toast.error(
					"Failed to capture screenshot. Look at the console and your backend logs for more details."
				);
			} finally {
				setIsLoading(false);
			}
		}
	}

	return (
		<div className="w-3/2 gap-y-2 flex flex-col">
			<div className="text-black dark:text-white text-sm">Or screenshot a URL...</div>
			<Input
				placeholder="Enter URL"
				onChange={(e) => setReferenceUrl(e.target.value)}
				value={referenceUrl}
				className="bg-white dark:placeholder-gray-800"
			/>
			<Button
				onClick={takeScreenshot}
				disabled={isLoading}
				className="bg-[#1F1F1D] dark:text-white hover:bg-[#1f3c50] dark:hover:bg-blue-700"
			>
				{isLoading ? "Capturing..." : "Capture"}
			</Button>
		</div>
	);
}
