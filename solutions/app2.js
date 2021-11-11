/* Fájl: `solutions/app2.js`
- Objektum neve: `cookieHandler`
- Export: `export { cookieHandler };`
- Az alábbi cookie-k legyenek a böngésződben tárolva 
(az első feladatban szereplő setCookie függvénnyel hozd őket létre, egyszerűen
másold át a függvényt ebbe a feladatba is, és futtasd háromszor):
  - viewed: 5
  - uid: 354774631237
  - ssid: Bx55OWbHJ0Vt_IGIF
  
- A cookieHandler objektum az alábbi három metódust tartalmazza:
  - `getAll`: kiolvassa a sütik nevét és értékét, majd visszaadja őket egy 
objektumban, ahol a sütik neve a key és az értéke a value (pl. {viewed: 5}).
  - `toSessionStorage`: minden sütit egyenként elment a sessionStorage-ba az 
adott süti nevével és értékével.
  - `flush`: törli az összes sütit. */

const setCookie = (cookieName, cookieValue) => {
    const now = new Date();
    now.setTime(now.getTime() + (15 * 60 * 1000));
    const expirationTime = now.toUTCString();
    document.cookie = `${cookieName}=${cookieValue};expires=${expirationTime};path=/`;
}

setCookie('viewed', '5');
setCookie('uid', '354774631237');
setCookie('ssid', 'Bx55OWbHJ0Vt_IGIF');

const cookieHandler = {
    getAll() {
        const cookieNameValuePairs = document.cookie.split('; ');
        const cookieObject = {};
        for (let value of cookieNameValuePairs) {
            const nameAndValueArray = value.split('=');
            cookieObject[nameAndValueArray[0]] = nameAndValueArray[1];
        }
    },
}

export {
    cookieHandler
};