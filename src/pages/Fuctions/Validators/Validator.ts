function emailvalidator(email: string, setstate: (isValid: boolean) => void) {
    const pattern =
      /[a-zA-Z0-9]+[\\.]?([a-zA-Z0-9]+)?[\\@][a-z]{3,15}[\\.][a-z]{2,5}/g;
    const result = pattern.test(email);
    //console.log(result)
    if (result === true) {
      setstate(true);
    } else {
      setstate(false);
    }
  }

function urlValidator(url: string) {
  const regex = /^(https?:\/\/)?(www\.)?[-a-zA-Z0-9@:%._\\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\\+.~#?&//=]*)?$/gm;
  const res = regex.test(url);
  return res;
}


export {emailvalidator, urlValidator}