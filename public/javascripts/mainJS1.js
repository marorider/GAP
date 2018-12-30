$(document).ready(function(){
   $('#mainsearch').submit(function(e){
       e.preventDefault();
       $.ajax({
           url: 'https://maps.googleapis.com/maps/api/place/autocomplete/json',
           dataType: 'jsonp',
           data: {
               input: 'Andrychow',
               key: 'AIzaSyB9VrrXToUdCVd7O9iHiEeGcERKnjoQWaA'
           },
           jsonpCallback: processResponse,
           success: processResponse()
       });
    //   $.getScript('https://maps.googleapis.com/maps/api/place/autocomplete/json?input=Andrychow&key=AIzaSyB9VrrXToUdCVd7O9iHiEeGcERKnjoQWaA', processResponse);
       function processResponse(data) {
       var newHTML = '<p>' + data + ' Dupa</p></br>';
       $('#searchResult').html(newHTML);
       
        };
   });
 
    
    
});