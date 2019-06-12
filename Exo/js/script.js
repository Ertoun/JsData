document.addEventListener('DOMContentLoaded',() => {

    // Déclaration

    const apiUrl = './api/titanic.json';


    // Fonctions

    const asyncFetch = (path) => {
        
        // Lancer la requete
        fetch(path)
        // Succès requête
        .then(fetchResponse => {
            // Extraire données JSON
            return fetchResponse.json();
        })

        // Get JSON data
        .then(jsonData => {
            setData(jsonData)
        })

        // Erreur requête
        .catch(fetchError => {
            console.error(fetchError);
        })

    }

    const setData = (data) => {
        // Déclaration

        let totalAge = 0;
        let totalAgeWomen = 0;
        let totalAgeMen = 0;
        let totalWomen = 0;
        let totalMen = 0;

        let women = {
            total: 0,
            average: 0,
            survivors: 0,
            deads: 0
        }

        let men = {
            total: 0,
            average: 0,
            survivors: 0,
            deads: 0
        }

        // Boucle sur une collection de données
        for (let item of data) {
            // Convertir l'age (string) en int // ES6
            item.Age = +item.Age;

            // Add age
            totalAge += item.Age;

            // Check Sex
            if (item.Sex === "female") {
                ++women.total;
                women.average += item.Age;

                // Survivors/Deads
                item.Survived == 1 ? ++women.survivors: ++women.deads
            }
            else if (item.Sex === "male"){
                ++men.total;
                men.average += item.Age;       
                
                // Survivors/Deads
                item.Survived == 1 ? ++men.survivors: ++men.deads
            }
        }

        // Moyenne

        women.average = women.average / women.total;
        men.average = men.average / men.total;

        console.log({women, men})
        console.log(data);
        console.log('Total', totalAge / data.length);
        console.log('Women', totalAgeWomen / totalWomen)
        console.log('Men', totalAgeMen / totalMen)
    }
    
    // Start interface

    asyncFetch(apiUrl);
})