var baseUrl = "https://YOUR-DOMAIN.org/iii/sierra-api/v5/";

const apiGet = (token, url) => {

  let headers = {
    "Authorization": "Bearer " + token,
    "Content-Type": "application/x-www-form-urlencoded"
  };

  const params = {
    "method": "GET",
    "headers": headers,
  };

  //const request = UrlFetchApp.getRequest(url, params);
  const response = UrlFetchApp.fetch(url, params);
  //headers = response.getAllHeaders();
  const body = JSON.parse(response.getContentText());

  return body;
}

const apiPost = (token, url, query) => {

  let headers = {
    "Authorization": "Bearer " + token,
    "Content-Type": "application/json"
  };

  const params = {
    "method": "POST",
    "headers": headers,
    "payload": JSON.stringify(query),
  };

  //const request = UrlFetchApp.getRequest(url, params);  
  const response = UrlFetchApp.fetch(url, params);
  //headers = response.getAllHeaders();
  const text = response.getContentText();
  const body = JSON.parse(response.getContentText());
  Logger.log(body);
  var links = [];
  for (var i = 0; i < body.total; i++) {
    links.push(body.entries[i].link);
  }
  return links;

}