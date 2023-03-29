// Use Radio Browser API to search for radio stations
axios.get('https://de1.api.radio-browser.info/json/stations/search', {
  params: {
    limit: 20,
    order: 'clickcount',
    reverse: true
  }
})
.then(function (response) {
  var select = document.getElementById('radio-browser-select');
  var stations = response.data;
  for (var i = 0; i < stations.length; i++) {
    var option = document.createElement('option');
    option.value = stations[i].url;
    option.text = stations[i].name + ' (' + stations[i].country + ')';
    select.appendChild(option);
  }
})
.catch(function (error) {
  console.log(error);
});

// Play the user-entered stream URL
function playStream() {
  var input = document.getElementById('url-input');
  var audio = document.createElement('audio');
  audio.controls = true;
  audio.autoplay = true;
  var source = document.createElement('source');
  source.src = input.value;
  source.type = 'audio/mpeg';
  audio.appendChild(source);
  document.body.appendChild(audio);
}

// Play the selected Radio Browser stream URL
function playRadioBrowserStream() {
  var select = document.getElementById('radio-browser-select');
  var audio = document.createElement('audio');
  audio.controls = true;
  audio.autoplay = true;
  var source = document.createElement('source');
  source.src = select.value;
  source.type = 'audio/mpeg';
  audio.appendChild(source);
  document.body.appendChild(audio);
}
