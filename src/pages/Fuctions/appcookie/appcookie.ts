function setAppCookie(cname: string, cvalue: string, exdays: number) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    const expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }
  
  function getAppCookie(cname: string) {
    const name = cname + "=";
    const ca = document.cookie.split(';');
    for(let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }
  function cookieAvailale(cname: string) {
    return getAppCookie(cname) == "" ? false : true;
  }

function deleteAppCookie(cname: string) {
  document.cookie = cname + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}

const APPCOOKIE = 'access_token';
const VALIDATIONCOOKIE = 'validity';
const TEMPCOOKIE = 'temp';
const PRODUCTCOOKIE = 'product';
const CONGRATESSHOWN = 'showncg';
const USERCONFIG = 'userconfig';

export {setAppCookie, getAppCookie, APPCOOKIE, cookieAvailale, deleteAppCookie, VALIDATIONCOOKIE, TEMPCOOKIE, PRODUCTCOOKIE, CONGRATESSHOWN, USERCONFIG}