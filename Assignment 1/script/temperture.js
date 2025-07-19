//function to convert between Celsius and Fahrenheit and return a string
function TempertureConverter(TemperatureType, TemperatureValue) {
    if(TemperatureType == "Fahrenheit"){
        Celsius = (TemperatureValue - 32) * 5/9; 
        kelvin = Celsius + 273.15;
        value = Celsius.toFixed(2) + '°c and ' + kelvin.toFixed(2) + 'K';
        
    } else if (TemperatureType == "Celsius") {
        Fahrenheit = (TemperatureValue * 9/5) + 32; 
        kelvin = parseFloat(TemperatureValue) + 273.15;
        value = Fahrenheit + '°f and ' + kelvin + 'K'

    } else if (TemperatureType == "Kelvin") {
        Celsius = TemperatureValue - 273.15
        Fahrenheit = (Celsius * 9/5) + 32 
        value = Celsius.toFixed(2) + '°c and ' + Fahrenheit.toFixed(2) + '°f'
    }
    return value
}

//jquery
$(document).ready(() => {

    //add listener to form on the submit button
    $('#temperatureConverterForm').on('submit', function(event) {
        //to prevent page reset
        event.preventDefault()

        //get the value from the form
        let Temperaturetype = $("input[name='TemperatureType']:checked").val()
        let TemperatureValue = $('#GivenTempToConvert').val()

        //Check for empty value
        if (TemperatureValue == ""){
            $('#ConvertedValue').text("Input a value")

        } else {
            //get the converted temperature and apply to the main 
            let text = TempertureConverter(Temperaturetype, TemperatureValue)
            $('#ConvertedValue').text(text)
        }
    })
})