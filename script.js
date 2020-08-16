function myFunction(value, index, array) {
  console.log(value['no'] + ' is arriving in ' + Math.round(value['next']['duration_ms']/60000) + ' min and '+ Math.round(value['subsequent']['duration_ms']/60000) + ' min.')
}

var xhttp = new XMLHttpRequest();
xhttp.responseType = 'json';
xhttp.onreadystatechange = function() {
  let response = (xhttp.response)
  try{
    response.services.forEach(myFunction)}
  catch{
    console.log('Invalid, next one :)')}

};
xhttp.open("GET", "https://arrivelah2.busrouter.sg/?id=41111", true);
xhttp.send();

