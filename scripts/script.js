// Make an event listener - triggers when the DOM is fully loaded
addEventListener('DOMContentLoaded', async function() {
    const response = await fetch('http://localhost:3000/api/songs');
    const songs = await response.json();

    let html = "";
    for (let song of songs) {
        let songID = song._id;
        html += `<li>${song.title} - ${song.artist} - ${song.username}<a href="details.html?id=${songID}"> Details</a> - <a href="edit.html?id=${songID}">Edit Song</a </li>`;
    }

    document.querySelector("#list_of_songs").innerHTML = html;
});

window.addEventListener("load", () => {
    document.querySelector("#statusBtn").addEventListener("click", async () => {
        const token = localStorage.getItem("token");

        const response = await fetch("http://localhost:3000/api/status", {
            method: "GET",
            headers: {
                "x-auth": token
            }
        });

        const data = await response.json();

        if (response.ok) {
            document.querySelector("#statusOutput").innerText =
                JSON.stringify(data, null, 2);
        } else {
            document.querySelector("#statusOutput").innerText = data.error;
        }
    });
});

   