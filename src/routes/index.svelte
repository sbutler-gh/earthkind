<script>
import variables from "$lib/variables";
import { connections_store } from "$lib/stores"
import { page } from "$app/stores";


    // The passport-linkedin-oauth2 library aws supposed to be helpful for this, but I couldn't get it to work.
    // import LinkedIn from 'passport-linkedin-oauth2';
    // var LinkedInStategy = LinkedIn.Strategy;


    // This function results in CORS errors
async function sendrequest() {

    const response = await fetch(`https://serene-journey-42564.herokuapp.com/https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=${variables.linkedInClientID}&redirect_uri=https://${$page.host}/auth/linkedin&state=foobar&scope=r_liteprofile%20r_emailaddress%20w_member_social`, {
            method: 'GET',
            })

            if (response) {
                // let connections = await response.json()

                // The returned data should look something like this:

                //             "elements": [
                //     {
                //         "to~": {
                //             "lastName": {
                //                 "localized": {
                //                     "en_US": "Belcher"
                //                 },
                //                 "preferredLocale": {
                //                     "country": "US",
                //                     "language": "en"
                //                 }
                //             },
                //             "firstName": {
                //                 "localized": {
                //                     "en_US": "Louise"
                //                 },
                //                 "preferredLocale": {
                //                     "country": "US",
                //                     "language": "en"
                //                 }
                //             },
                //             "id": "9HfhE6QlBz"
                //         },
                //         "to": "urn:li:person:9HfhE6QlBz"
                //     },
                //     .
                //     .
                //     .
                //     }
                // ],

                // We can then store the returned data in a Svelte store like this:

                // $connections_store = connections.elements

                // And we can log like this ($connections_store)
            }
}
</script>

<h1>Earthkind — Graphme</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<button on:click={sendrequest}>click</button>

<!-- By clicking this link, we can hit the API endpoint directly (instead of using fetch), which bypasses CORS errors — but returns different errors instead. -->
<a href="https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id={variables.linkedInClientID}&redirect_uri=https://{$page.host}/auth/linkedin/callback&state=true&scope=r_liteprofile%20r_emailaddress%20w_member_social">linkedin</a>