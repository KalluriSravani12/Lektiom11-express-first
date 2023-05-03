async function getAllBands(){
    //Fetch all data from the rest API
    const response = await fetch('http://localhost:3000/bands');
    //convert data to Json
    const data = await response.json();
    //Display the data
    showBands(data);


}
function showBands(bands){
    //Create html for each band
    let html = '';
    for (let {name, genre} of bands){
        html += `<p>${name} - ${genre}</p>`;
    }


//Show html in browser
document.querySelector('#bands').innerHTML = html;
//console.log(html);
}
getAllBands();