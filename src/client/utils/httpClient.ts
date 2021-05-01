// const escapeCors = url => `https://cors-anywhere.herokuapp.com/${url}`;

const  _fetch = (url: URL, config = {}) => 
    fetch(url.toString(), config);

export default {
    get: (url = new URL('')) => 
        _fetch(url)
        .then(response => response.json()),
    post: (url  = new URL(''), data = {}) => 
        _fetch(url, {
            method: 'POST',
            body: data, 
        })
        .then(response => response.json()),
}