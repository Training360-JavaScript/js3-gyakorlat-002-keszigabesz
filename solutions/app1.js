const setCookie = cookieValue => {
    const now = new Date();
    now.setTime(now.getTime() + (15 * 60 * 1000));
    const expirationTime = now.toUTCString();
    document.cookie = `token=${cookieValue};expires=${expirationTime};path=/`;
}




export default setCookie;