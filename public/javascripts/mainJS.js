 var autocomplete;
 var countryRestrict = {'country' : 'pl' };
        
    
    
     function initAutocomplete() {
    autocomplete = new google.maps.places.Autocomplete(
            (document.getElementById('autocomplete')),
    {types:['(regions)'], componentRestrictions: countryRestrict}
            );
    
    autocomplete.addListener('place_changed', fillInAddress); 
     };
     
     function fillInAddress() {
          var results = autocomplete.getPlace();
   // var newValue = '<p>' + results.formatted_address + 'adafdfasf' + '</p>';
   var newValue = '<h3>' + results.name + ', ID: ' + results.place_id + ',formatted_address: ' +                        results.formatted_address + '</h3>';
    document.getElementById('results').innerHTML  = newValue;
     };
  
/* --------------------------------------------------------------------------------- */

$(document).ready(function(){
    $('#mainsearch').submit(function(){
       var formData = $(this).serialize();
        $.get('/results', formData, searchResults);
        function searchResults(data) {
            var newHtml = '<p>Powinna wyświetlić się wprowadzona nazwa: </br>';
            newHtml += data + '</p>'
            $('#results').html(newHtml);
        }
        return false;
    })
});


/*
var autocomplete; 
        
    
    
    function initAutocomplete() {
    autocomplete = new google.maps.places.Autocomplete(
            (document.getElementById('autocomplete')),
    {types:['geocode']}
            );
     };
*/        
        
        
        
        
      