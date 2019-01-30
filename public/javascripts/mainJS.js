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
    $('#mainsearch').submit(function(event){
       var parameters = { search: $('#autocomplete').val() };
        $.get('/results', parameters, function(data) {
            var newHtml = '<p>';
            newHtml += data + '</p>'
            $('#results').html(newHtml);
        });
        event.preventDefault();
    });
});

// $(this).val()