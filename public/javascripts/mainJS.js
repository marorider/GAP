 let autocomplete;
 let countryRestrict = {'country' : 'pl' };
        
    
    
     function initAutocomplete() {
    autocomplete = new google.maps.places.Autocomplete(
            (document.getElementById('autocomplete')),
    {types:['(regions)'], componentRestrictions: countryRestrict}
            );
    
    autocomplete.addListener('place_changed', fillInAddress); 
     };
  
 function fillInAddress() {
        let results = autocomplete.getPlace();
        let parameters = { search: results.place_id };
        console.log(parameters);
        $.ajax({
            url: '/results',
            data: parameters,
            error: function() {
                document.getElementById('results').innerHTML = 'Server error, we are sorry.';
                },
            success: function(data) {
            let newValue = '<p>';
            newValue += data + '</p>';
            document.getElementById('results').innerHTML= newValue;
            
        }});
        
    };

/* --------------------------------------------------------------------------------- */

$(document).ready(function(){
    $('#mainsearch').submit(function(event){
       let parameters = { search: $('#autocomplete').val() };
        $.get('/results', parameters, function(data) {
            let newHtml = '<p>';
            newHtml += data + '</p>'
            $('#results').html(newHtml);
        });
        event.preventDefault();
    });
});

// $(this).val()