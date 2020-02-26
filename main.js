const processForm = data => {
  let { firstname, middlename, lastname, address, pobox, city, state, zipcode, alt, address2, pobox2, city2, state2, zipcode2, phone, email, username, homelib } = data;
  let name = [lastname, ", ", firstname, middlename].filter(Boolean).join("");
  let addresses = [{
    "lines": [address, pobox, [city, ", ", state, " ", zipcode, " USA"].join("")].filter(Boolean),
    "type": "h"
  }];
  if (alt) {
    addresses.push({
      "lines": [address2, pobox2, [city2, ", ", state2, " ", zipcode2, " USA"].join("")].filter(Boolean),
      "type": "a"
    });
  }

  const newPatron = {
    "emails": [email],
    "names": [name],
    //"barcodes": [""],
    "expirationDate": getExpirationDate(),
    "patronType": 240,
    "patronCodes": {
      "pcode1": "-",
      "pcode2": "-",
      "pcode3": 40,
    },
    "homeLibraryCode": homelib,
    "pMessage": "s",
    "blockInfo": {
      "code": "-"
    },
    "addresses": addresses,
    "phones": [
      {
        "number": phone,
        "type": "t"
      }
    ],
    "varFields": [
      {
        "fieldTag": "x",
        "content": "API test cl/bl"
      }
    ]
  };
  //Logger.log(JSON.stringify(newPatron));
  const url = baseUrl + "patrons/";
  apiPost(getToken_(), url, newPatron);  //Uncomment to create a patron in sierra db
  //TODO implement email confirmation
  /*
  var subject = "Thanks for Registering for a CLAMS Library Card";
  var body = getPlainBody(name, homelib);
  var options = { "noReply": true, "htmlBody": getHtmlBody(name, homelib) }
  GmailApp.sendEmail(email, subject, body, options);
  */

}

const getExpirationDate = () => {
  let date = new Date(); // Now
  date.setDate(date.getDate() + 30); // Set now + 30 days as the new date
  date = date.toISOString().split('T')[0]; //format as yyyy-mm-dd
  return date;
}