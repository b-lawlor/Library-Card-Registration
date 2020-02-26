const doGet = (e) => {
  const template = HtmlService.createTemplateFromFile('index');
  const html = template.evaluate().setTitle('Library Card Registration')
    .addMetaTag('viewport', 'width=device-width, initial-scale=1');
  return html;
}

const include = filename => {
  var html = HtmlService.createHtmlOutputFromFile(filename).getContent();
  return html;
}