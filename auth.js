const getToken_ = () => {
  try {
    let props = PropertiesService.getScriptProperties();
    var key = props.getProperty('key');
    var secret = props.getProperty('secret');
  }
  catch (e) {
    throw new Error("Couldn't find Sierra Api credentials in Script Properties. " + e);
  }

  const headers = {
    "Authorization": "Basic " + Utilities.base64Encode(key + ":" + secret),
    "Content-Type": "application/x-www-form-urlencoded"
  };

  const payload = {
    "grant_type": "client_credentials"
  };

  const params = {
    "method": "POST",
    "headers": headers,
    "payload": "grant_type=client_credentials",
    "muteHttpExceptions": true
  };

  const response = UrlFetchApp.fetch(baseUrl + "token", params);
  const token = JSON.parse(response.getContentText())["access_token"];
  return token;
}