class AjaxWeather {
  url = 'http://api.openweathermap.org/data/2.5/weather?';
  params = new URLSearchParams({
    APPID: '5d066958a60d315387d9492393935c19',
    units: 'metric',
  });
  element = document.body;

  constructor(element) {
    this.element = element;
  }

  show(city) {
    if (city) {
      this.setCity(city);
      this.getData().then(result => this.showResult(result)).catch(error => this.showError(error))
    }
  }

  setCity(name) {
    this.params.set('q', name);
  }

  getData() {
    return fetch(this.url + this.params).then(result => result.json()).then(result => {
      if (result.cod === 200) {
        return result;
      } else {
        throw result.message
      }
    });
  }

  getIcon(code) {
    return `<img src="http://openweathermap.org/img/w/${code}.png" alt="Icon">`
  }

  showResult(data) {
    this.element.innerHTML = this.getTemplate(data);
  }

  showError(error) {
    alert(error)
  }

  getTemplate(data) {
    const { weather, main, wind } = data;
    const [weatherItem] = weather;
    return `
    <div><strong>Іконка: </strong>${this.getIcon(weatherItem.icon)}</div> 
    <div><strong>Місто: </strong>${data.name}</div> 
    <div><strong>Температура: </strong>${main.temp}</div> 
    <div><strong>Тиск: </strong>${main.pressure}</div> 
    <div><strong>Вологість: </strong>${main.humidity}</div> 
    <div><strong>Опис: </strong>${weatherItem.description}</div> 
    <div><strong>Швідкість вітру: </strong>${wind.speed}</div> 
    <div><strong>Направлення вітру: </strong>${wind.deg}</div> 
    `;
  }
}

const weather = new AjaxWeather(document.getElementById('weather'));
const form = document.getElementById('form');
const search = document.getElementById('search');

form.onsubmit = (event => {
  event.preventDefault();
  weather.show(search.value.trim())
});

