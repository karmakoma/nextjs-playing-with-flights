fetch("https://test.api.amadeus.com/v1/security/oauth2/token", {
  method: "POST",
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
    "Authorization": "Basic " + btoa(`${WMv95JAj9RpyUhV0s9EXW1mS0TRqZfw9}:${SIIxyf1kTpI1udDU}`)
  },
  body: `grant_type=client_credentials`
})
  .then(response => response.json())
  .then(data => {
    console.log(data.access_token);
  })
  .catch(error => {
    console.error(error);
  });