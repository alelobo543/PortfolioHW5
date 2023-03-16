document.getElementById("date").value = new Date();
window.addEventListener('DOMContentLoaded',function() {
    document.getElementById("postBtn").addEventListener("click", function () { sendRequest("POST") });
    document.getElementById("deleteBtn").addEventListener("click", function () { sendRequest("DELETE") });
    document.getElementById("getBtn").addEventListener("click", function () { sendRequest("GET") });
    document.getElementById("putBtn").addEventListener("click", function () { sendRequest("PUT") });
});
function sendRequest(method) {
    let xhr = new XMLHttpRequest();

let data = {
    "id": document.getElementById("id").value,
    "article_name": document.getElementById("article_name").value,
    "article_body": document.getElementById("article_body").value,
    "date": document.getElementById("date").value
};

let url = "https://httpbin.org/" + method.toLowerCase();
if (method === "DELETE" || method === "GET") {
    url += "?" + encodeFormData(data);
}


    xhr.open(method, url, true);


    xhr.onreadystatechange = function() {
    handleResponse(xhr);
};
if (method === "DELETE" || method === "GET") {
    xhr.send("");
}
else {
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"); 
    xhr.send(encodeFormData(data));
}
}
function encodeFormData(data) {
    return Object.keys(data).map(function(key) {
      if (key === 'date') {
        return encodeURIComponent(key) + '=' + encodeURIComponent(new Date(data[key]).toISOString());
      }
      return encodeURIComponent(key) + '=' + encodeURIComponent(data[key]);
    }).join('&');
  }

function handleResponse(xhr) {
    if (xhr.readyState == 4 && xhr.status == 200) {
    var parsedResponse = JSON.parse(xhr.responseText);
    const keys = Object.keys(parsedResponse);
    const values = Object.values(parsedResponse);

    let html = `
        <table style="border-collapse: collapse; width: 100%;">
        <thead>
            <tr style="border-bottom: 1px solid black;">
            <th style="text-align: left; padding: 8px;">Key</th>
            <th style="text-align: left; padding: 8px;">Value</th>
            </tr>
        </thead>
        <tbody>
    `;
    for (const [key, value] of Object.entries(parsedResponse)) {
    html += `
        <tr style="border-bottom: 1px solid black;">
            <td style="text-align: left; padding: 8px;">${key}</td>
            <td style="text-align: left; padding: 8px;">${JSON.stringify(value)}</td>
        </tr>
    `;
    }
    html += `
        </tbody>
        </table>
        `;
    document.getElementById("response").innerHTML = html;
    }
}
    