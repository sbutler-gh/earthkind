<script>
import variables from "$lib/variables";


    // import LinkedIn from 'passport-linkedin-oauth2';
    // var LinkedInStategy = LinkedIn.Strategy;


async function sendrequest() {

    const response = await fetch(`https://serene-journey-42564.herokuapp.com/https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=${variables.linkedInClientID}&redirect_uri=http://localhost:3000/auth/linkedin&state=foobar&scope=r_liteprofile%20r_emailaddress%20w_member_social`, {
            method: 'GET',
            // headers: myHeaders
            })

            console.log(response);

            // let result = await response.json();
            // console.log(result);
}
</script>

<h1>Earthkind — Graphme</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<button on:click={sendrequest}>click</button>

<a href="https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id={variables.linkedInClientID}&redirect_uri=https://127.0.0.1:3000/auth/linkedin/callback&state=true&scope=r_liteprofile%20r_emailaddress%20w_member_social">linkedin</a>