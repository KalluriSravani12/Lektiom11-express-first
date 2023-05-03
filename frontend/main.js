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
//console.log(html);// will print in the console
}
async function addBand(){
    //Attach event listeners to form

    document.getElementById('bandform').addEventListener('submit' ,async(event)=>{
        //Prevent default behavior of form 
        event.preventDefault();

        //Get name and genre from input fields
        const name = document.getElementById('bandName').value;
        const genre = document.getElementById('bandGenre').value;

        //Create object to send through POST request
        const band = {
            name: name,
            genre: genre

        };
        // The POST request
        const response = await fetch('http://localhost:3000/bands',{
            method: 'POST',
            header: {
               ' Content-Type': 'applicationjson'

            },
            body: JSON.stringify(band)
        });
        //Convert response
        const result = await response.json();
        //Log result
        console.log(result);
        //Show bands again
        getAllBands();
    });
}
getAllBands();
addBand();

