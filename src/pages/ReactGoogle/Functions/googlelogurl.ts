
const GOOGLE_CLIENT_ID = "1059276361617-0g2m1qhi1rc2bgrml30om7e0npsr086t.apps.googleusercontent.com"
//const GOOGLE_CLIENT_SECRET = "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"
const GOOGLE_REDIRECT_URI = "https://genwebbuilder.com/gauth"
const url = "https://accounts.google.com/o/oauth2/v2/auth?scope=https%3A//www.googleapis.com/auth/drive.metadata.readonly&include_granted_scopes=true&response_type=token&redirect_uri="+GOOGLE_REDIRECT_URI+"&client_id="+GOOGLE_CLIENT_ID

export default function getGOOGLEURL() {
    return url;
}