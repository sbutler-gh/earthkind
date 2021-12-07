// import.meta.env.VITE_LINKEDIN_CLIENT_ID pulls the data from an .env file with the following content:

// VITE_LINKEDIN_CLIENT_ID=XXXXXXXXXXX

  let variables = {
    linkedInClientID: import.meta.env.VITE_LINKEDIN_CLIENT_ID
  };

export default variables;