import { APPCOOKIE, TEMPCOOKIE, deleteAppCookie } from "@/pages/Fuctions/appcookie/appcookie";

type CallbackType = () => void;
export default function logout(logouthandle: CallbackType) {
    deleteAppCookie(APPCOOKIE);
    deleteAppCookie(TEMPCOOKIE);
    logouthandle();
}