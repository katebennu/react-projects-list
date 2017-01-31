
var responseData = [];

function searchQuery() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            console.log(this.responseText);
            document.getElementById('output').innerHTML = this.responseText;
        } else {
            console.log(this.status);
        }
    };
    xhttp.open('GET', 'https://en.wikipedia.org/w/api.php?action=query&format=json&formatversion=2&prop=pageimages%7Cpageterms&titles=Albert%20Einstein', true);
    xhttp.setRequestHeader('User-Agent', 'wikiapp/0.1 (http://kbennu.com/apps/wikiapp/)'); //setRequestHeader(header, value)
    xhttp.send();
}

document.getElementById('searchBtn').addEventListener('click', searchQuery);