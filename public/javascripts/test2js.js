/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

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
   var newValue = results.name;
    document.getElementById('results').innerHTML  = newValue;
     };
   
  
   