addEventListener("DOMContentLoaded", function(){
    document.querySelector("#addBtn").addEventListener("click", addSong)
})

//add song to the db. has to be async function b/c it is calling data from outside server

async function addSong(){
    //create a song object based on the form the user fills out
    const song = {
        _id: document.querySelector("#songId").value,
        title: document.querySelector("#title").value,
        artist: document.querySelector("#artist").value,
        releaseDate: document.querySelector("#released").value,
        popularity: document.querySelector("#popularity").value,
        genre: document.querySelector("#genre").value ? document.querySelector("#genre").value.split(",") : []
    }

    const response = await fetch("https://calm-pumped-mayflower.glitch.me/api/songs", {
        method: "POST",
        headers:{
            "Content-Type" : "application/json"
        },
        body: JSON.stringify(song)
    })

    if (response.ok){
        const results = await response.json()
        alert("Added song with ID of" + results._id)

        //reset form 
        document.querySelector("form").reset()
    }

    else{
        document.querySelector("#error").innerHTML = "Cannot add song"
    }
}