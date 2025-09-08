//Get del cookie XSRF-TOKEN tra i cookoies del browser (application-cookies-url sito)
//(questo cookie contiene il CSRF token usato per proteggere l'applicazione dagli attacchi CSRF)
//(gli attacchi CSRF cross site request forgery sfruttano la sessione attiva dell'utente loggato per inviare richieste una volta visitate pagine malevole)

// (CSRF token è un token univoco generato dal backend all'avvio dell'applicazione e salvato e criptato nella tabella sessions dentro il campo payload,
//una volta incluso nell'header http (attributo X-XSRF-TOKEN, value getCsrfToken()) per ogni richiesta http, questo viene confrontato con quello salvato dal backend e accettata o meno la richiesta se c'è corrispondenza )
export const getCsrfToken = () => {
    const cookies = document.cookie.split(';');
    for (let cookie of cookies) {
        const [name, value] = cookie.trim().split('=');
        if (name === 'XSRF-TOKEN') {
            return decodeURIComponent(value);
        }
    }
    return null;
};
// laravel_session è un valore univoco generato dal backend all'avvio dell'applicazione e salvato e criptato nella tabella sessions dentro il campo id,
//una volta incluso nell'header http (attributo credentials, value -> 'include') per ogni richiesta http (DELETE, POST, PUT, PATCH), questo viene confrontato con quello salvato dal backend e accettata o meno la richiesta se c'è corrispondenza )

//UTENTE GUEST verifica la corrispondenza XSRF-TOKEN e laravel_session
//UTENTE LOGGATO verifica la corrispondenza XSRF-TOKEN e laravel_session e id_user nella tabella sessions
//Questi cookies (XSRF-TOKEN e laravel_session) non possono essere rubati accedendo ad un sito esterno perchè hanno l'impostazione l’attributo SameSite=Lax o Strict (accessibili solo dal dominio che li ha impostati)
//(sono vulnerabili agli XSS cross site scripting che tramite js inietta codice malevolo dagli input html per rubare questi cookies)
