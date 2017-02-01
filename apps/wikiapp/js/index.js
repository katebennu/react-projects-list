/*
/!*
 XMLHttpRequest cannot load https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=keyword&prop=info&inprop=url&utf8=&format=json.
 No 'Access-Control-Allow-Origin' header is present on the requested resource. Origin 'http://localhost:63342' is therefore not allowed access.

 same on kbennu.com
 *!/


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
    xhttp.open('GET', 'https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=keyword&prop=info&inprop=url&utf8=&format=json', true);
    //xhttp.setRequestHeader('Api-User-Agent', 'wikiapp/0.1 (http://kbennu.com/apps/wikiapp/)'); //setRequestHeader(header, value)
    xhttp.send();
}

document.getElementById('searchBtn').addEventListener('click', searchQuery);

//https://en.wikipedia.org/w/api.php?action=query&origin=https://en.wikipedia.org&meta=tokens&type=csrf&format=json&formatversion=2&prop=pageimages%7Cpageterms&titles=Albert%20Einstein
// ?action=query&meta=tokens&type=csrf&format=json&formatversion=2&prop=pageimages%7Cpageterms&titles=Albert%20Einstein
//&meta=tokens&type=csrf

//https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=" + keyword + "&prop=info&inprop=url&utf8=&format=json


*/


function ajax (keyword) { //AJAX request
    $.ajax({
        url: "https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=" + keyword + "&prop=info&inprop=url&utf8=&format=json",
        dataType: "jsonp",
        success: function(response) {
            console.log(response.query);
            if (response.query.searchinfo.totalhits === 0) {
                showError(keyword);
            }

            else {
                showResults(response);
            }
        },
        error: function () {
            alert("Error retrieving search results, please refresh the page");
        }
    });
}