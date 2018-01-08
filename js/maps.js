$(document).ready(function() {
    var geocoder = new google.maps.Geocoder();
    var directionsService = new google.maps.DirectionsService();
    var tempo_trajeto = document.querySelectorAll(".info-trajeto");
    var endereco_escola = document.querySelectorAll(".info-endesc");
    
    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
           var local = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
           geocoder.geocode({'latLng': local}, function(results, status) {
               if(status == google.maps.GeocoderStatus.OK) {
                    if(results[0]) {
                        $("#partida").val(results[0].formatted_address);
                    }
               }
           });
        });
    }
    
    $("#partida").blur(function() {
        var endereco = $(this).val();
        geocoder.geocode({'address': endereco + endereco + ', Brasil', 'region': 'BR'}, function(results, status) {
            if(status == google.maps.GeocoderStatus.OK) {
                if(results[0]) {
                    $("#partida").val(results[0].formatted_address);
                }
            }
        });
    });
    
    $("#tracar-rota").click(function() {
        var endereco_escola = document.querySelectorAll(".info-endesc");
        for(var i = 0; i < endereco_escola.length; i++) {
            calcularRota($("#partida").val(), endereco_escola[i].textContent, i);
        }
    });
    
    function calcularRota(origem, destino, i) {
        var directionsService = new google.maps.DirectionsService();
        var endereco_escola = document.querySelectorAll(".info-endesc");
        var tempo_trajeto = document.querySelectorAll(".info-trajeto");
          var modo = document.getElementById('modo').value;
          if(modo == "selecionar") {
              alert("Favor selecione o meio de transporte");
          } else {
              var directionsRequest = {
                    origin: origem,
                    destination: destino,
                    //modo de viagem
                    travelMode: google.maps.DirectionsTravelMode[modo],
                    //sistema de matreicas em KM
                    unitSystem: google.maps.UnitSystem.METRIC  
              };
               
              directionsService.route(directionsRequest, function(results, status) {
                  if(status == google.maps.DirectionsStatus.OK) {
                      tempo_trajeto[i].textContent = results.routes[0].legs[0].duration.text;
                  } else {
                      //alert("erro de status");
                      tempo_trajeto[i].textContent = "erro de status";
                  }
              });
          }
         // tempo_trajeto[i].textContent = "teste";
    }
});