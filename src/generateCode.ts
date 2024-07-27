//import toast from "react-hot-toast";
import { WS_BACKEND_URL } from "./config";
import { USER_CLOSE_WEB_SOCKET_CODE } from "./constants";

//const ERROR_MESSAGE =
  ///"Error generating code. Check the Developer Console AND the backend logs for details. Feel free to open a Github issue.";

//const STOP_MESSAGE = "Code generation stopped";

export interface CodeGenerationParams {
  generationType: "create" | "update" | "continue";
  image: string;
  resultImage?: string;
  history?: string[];
  // isImageGenerationEnabled: boolean; // TODO: Merge with Settings type in types.ts
}

export function generateCode(
  wsRef: React.MutableRefObject<WebSocket | null>,
  params: CodeGenerationParams,
  onChange: (chunk: string) => void,
  onSetCode: (code: string) => void,
  onStatusUpdate: (status: string) => void,
  onComplete: () => void,
  accessToken: string,
  seterror: (data: boolean) => void,
  promt: string | null,
  historyid: number | null,
  sethisid: (id: number) => void
) {
  console.log(historyid)
  const wsUrl = `${WS_BACKEND_URL}/v2/generatecode?token=`+accessToken;
  //console.log("Connecting to backend @ ", wsUrl);

  const ws = new WebSocket(wsUrl);
  wsRef.current = ws;

  ws.addEventListener("open", () => {
    console.log('connected')
    ws.send(JSON.stringify({"historyid": historyid}))
    ws.send(JSON.stringify({"updatepromt": promt}))
    ws.send(JSON.stringify(params));
  });

  ws.addEventListener("message", async (event: MessageEvent) => {
    const response = JSON.parse(event.data);
    //console.log(response)
    if (response.type === "chunk") {
      onChange(response.value);
    } else if (response.type === "status") {
      onStatusUpdate(response.value);
    } else if (response.type === "setCode") {
      onSetCode(response.value);
    } else if (response.type === "error") {
      seterror(true)
      console.error("Error generating code", response.value);
      // toast.error(response.value);
    } else if (response.type === "historyid") {
      sethisid(response.value)
    }
  });
  ws.addEventListener("close", (event) => {
    //console.log("Connection closed", event.code, event.reason);
    if (event.code === USER_CLOSE_WEB_SOCKET_CODE) {
      //console.log(STOP_MESSAGE)
      // toast.success(STOP_MESSAGE);
    } else if (event.code !== 1000) {
      console.error("WebSocket error code", event);
      // toast.error(ERROR_MESSAGE);
    }
    onComplete();
  });

  ws.addEventListener("error", (error) => {
    console.error("WebSocket error", error);
    //toast.error(ERROR_MESSAGE);
  });
}

export function generateCodev1(
  wsRef: React.MutableRefObject<WebSocket | null>,
  params: CodeGenerationParams,
  onChange: (chunk: string) => void,
  onSetCode: (code: string) => void,
  onStatusUpdate: (status: string) => void,
  onComplete: () => void,
  accessToken: string,
  seterror: (data: boolean) => void,
) {
  const wsUrl = `${WS_BACKEND_URL}/generatecode?token=`+accessToken;
  //console.log("Connecting to backend @ ", wsUrl);

  const ws = new WebSocket(wsUrl);
  wsRef.current = ws;

  ws.addEventListener("open", () => {
    console.log('connected')
    ws.send(JSON.stringify(params));
  });

  ws.addEventListener("message", async (event: MessageEvent) => {
    const response = JSON.parse(event.data);
    //console.log(response)
    if (response.type === "chunk") {
      onChange(response.value);
    } else if (response.type === "status") {
      onStatusUpdate(response.value);
    } else if (response.type === "setCode") {
      onSetCode(response.value);
    } else if (response.type === "error") {
      seterror(true)
      console.error("Error generating code", response.value);
      // toast.error(response.value);
    }
  });
  ws.addEventListener("close", (event) => {
    //console.log("Connection closed", event.code, event.reason);
    if (event.code === USER_CLOSE_WEB_SOCKET_CODE) {
      //console.log(STOP_MESSAGE)
      // toast.success(STOP_MESSAGE);
    } else if (event.code !== 1000) {
      console.error("WebSocket error code", event);
      // toast.error(ERROR_MESSAGE);
    }
    onComplete();
  });

  ws.addEventListener("error", (error) => {
    console.error("WebSocket error", error);
    //toast.error(ERROR_MESSAGE);
  });
}

