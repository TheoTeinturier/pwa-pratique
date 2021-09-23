const technosDiv = document.querySelector('#technos');
 
function loadTechnologies(technos) {
    fetch('http://localhost:3001/technos')
        .then(response => {
            response.json()
                .then(technos => {
                    const allTechnos = technos.map(t => `
                    <div class="card">
                        <div class="card-body">
                        <h5 class="card-title">${t.name}</h5>
                        <p class="card-text">${t.description}</p>
                        <a href="${t.url}" class="card-link">site de ${t.name}</a>
                        </div>
                    </div>`)
                            .join('');
            
                    technosDiv.innerHTML = allTechnos; 
                });
        })
        .catch(console.error);
}
 
loadTechnologies(technos);
	
if(navigator.serviceWorker) {
    navigator.serviceWorker
        .register('sw.js')
        .catch(err => console.error('service worker NON enregistré', err));
}

	
if(window.Notification && window.Notification !== "denied"){
    // demande une permission
    Notification.requestPermission(perm => {
        // vérifie si la permission est acceptée par l'utilisateur
        // 3 valeurs possibles : default | granted | denied
        if(perm === "granted"){
          	console.log("Notification acceptée");
            // On crée une nouvelle notification
            const notif = new Notification("Hello notification");
        }
        else{
            // Notification refusée
            console.log("Notification refusée");
        }
    })
}
	
/*if(window.Notification && window.Notification !== "denied"){
    // demande une permission
    Notification.requestPermission(perm => {
        // vérifie si la permission est acceptée par l'utilisateur
        // 3 valeurs possibles : default | granted | denied
        if(perm === "granted"){
            
            // 7.2 Option de la notification
            const options = {
                body : "Body de la notification",
                icon : "images/icons/icon-72x72.png"
            }
 
            // On crée une nouvelle notification
            // 7.2 On passe les options en deuxième argument
            const notif = new Notification("Hello notification", options);
          
        }
        else{
            // Notification refusée
            console.log("Notification refusée");
        }
    })
}
*/

// if(window.caches) {
//     caches.open('veille-techno-1.0');
//     caches.open('other-1.0');
//     caches.keys().then(console.log);
// }
//..

// if(window.caches) {
//     caches.open('veille-techno-1.0').then(cache => {
//         cache.addAll([
//             'index.html',
//             'main.js',
//             'vendors/bootstrap4.min.css'
//         ]);
//     });
// } 