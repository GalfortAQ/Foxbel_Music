import axios from 'axios';

const request = axios.create({
  baseURL:'http://api.deezer.com/',
  timeout: 30000
});


export function getElements(search){
  const elements = request.get(`search?q=${search}`)
  .then(response => response.data.data)
  .catch(error => console.log(error));
  return elements;
};

export function getTrack(id){
  const track = request.get(`track/${id}`)
  .then(response => response.data)
  .catch(error => console.log(error));
  return track;
};