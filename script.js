
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&appid=372ff38be7b6ea10589cbacb87014a8a&q="

async function checkWeather(city) {
    const response = await fetch(apiUrl + city)

    if (response.status == 404) {

        $('.error').css('display', 'block')
        $('.weather').css('display', 'none')

    } else {

        var data = await response.json()

        $('.city').html(data.name)
        $('.temp').html(Math.round(data.main.temp) + '°C')
        $('.humidity').html(data.main.humidity + `%`)
        $('.wind').html(data.wind.speed + `km/h`)

        if(data.weather[0].main == "Clouds") {
            $('.weather-icon').attr('src', 'img/clouds.png')
        } else if (data.weather[0].main == "Clear") {
            $('.weather-icon').attr('src', 'img/clear.png')
        } else if (data.weather[0].main == "Rain") {
            $('.weather-icon').attr('src', 'img/rain.png')
        } else if (data.weather[0].main == "Drizzle") {
            $('.weather-icon').attr('src', 'img/drizzle.png')
        }  else if (data.weather[0].main == "Mist") {
            $('.weather-icon').attr('src', 'img/mist.png')
        }

        $('.weather').css('display','block')
        $('.error').css('display', 'none')

    }

}

$('.search button').on('click', function() {
    checkWeather($(".search input") .val())
})

