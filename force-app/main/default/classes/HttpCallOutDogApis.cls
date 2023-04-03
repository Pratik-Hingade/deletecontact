public class HttpCallOutDogApis {
public String getDogImage(String url) {
     
    // Instantiate a new Http object
    Http h = new Http();

     // Instantiate a new HTTP request, specify the method (GET) as well as the endpoint
    HttpRequest req = new HttpRequest();
    req.setEndpoint('https://dog.ceo/api/breeds/image/random');
    req.setMethod('GET');

    // Send the request, and return a response
    HttpResponse result = h.send(req);
    return result.getBody();
  }
}