// TODO: add code here
window.addEventListener("load", function(){
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response){
        response.json().then(function(json){
            const container = document.getElementById("container");

            function activeAstronaut(status){
                if (status === true){
                    return `<li style="color:green;">Active: true</li>`
                } else {
                    return `<li>Active: false</li>`
                }
            }
           
            json.sort((astronautA, astronautB) => {
                return astronautB.hoursInSpace - astronautA.hoursInSpace;
            });
            // another way to sort:
            // json.sort((astronautA, astronautB) => (astronautA.hoursInSpace > astronautB.hoursInSpace) ? -1 : 1);

            const astronautCount = json.length
           
            container.innerHTML = `
            <div class="count">
            <p>Total astronauts: ${astronautCount}</p>
            </div>
            `;
            
            for (let astronaut of json) {

                container.innerHTML += `
                <div class="astronaut">
                <div class="bio">
                    <h3>${astronaut.firstName} ${astronaut.lastName}</h3>
                    <ul>
                        <li>Hours in space: ${astronaut.hoursInSpace}</li>
                        ${activeAstronaut(astronaut.active)}
                        <li>Skills: ${astronaut.skills.join(", ")}</li>
                    </ul>
                </div>
                <img class="avatar" src=${astronaut.picture}
                </div>
                `;               
            }
        });
    });
});


// function activeAstronaut(status){
//     if (status === true){
//         return `<li style="color:green;">Active: true</li>`
//     } else {
//         return `<li>Active: false</li>`
//     }
// }