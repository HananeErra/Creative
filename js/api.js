// URL de l'API qui fournit des informations sur les chats
const apiUrl = 'https://api.thecatapi.com/v1/breeds';

async function fetchCatImage() {
    try {
      const response = await fetch('https://api.thecatapi.com/v1/images/search');
      if (!response.ok) {
        throw new Error('Failed to fetch cat image');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching cat image:', error);
      return null;
    }
  }
  
  // Exemple d'utilisation
  fetchCatImage()
    .then(data => {
      if (data && data.length > 0) {
        console.log('Cat image URL:', data[0].url);
      } else {
        console.log('No cat image found.');
      }
    })
    .catch(error => {
      console.error('Error:', error);
    });
  





// Fonction pour récupérer les informations sur les chats depuis l'API
async function getCatInfo() {
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Erreur lors de la récupération des données sur les chats');
        }
        const catData = await response.json();
        console.log(catData)
        return catData;
    } catch (error) {
        console.error('Une erreur est survenue :', error);
    }
}

// Fonction pour afficher les informations sur les chats
// Fonction pour afficher les informations sur les chats
async function displayCatInfo() {
    const catData = await getCatInfo();
    const referenceImageId = catData[0].id;
    console.log(referenceImageId);
    const catInfoContainer = document.getElementById('catInfo');
    if (catData && catInfoContainer) {
        catData.forEach(cat => {
            const catItem = document.createElement('div');
            catItem.classList.add('grid-item');
            const imageUrl = `https://api.thecatapi.com/v1/images/search`;
            catItem.style.backgroundColor = 'rgba(255, 255, 255, 0.8)';
            console.log(imageUrl);
            catItem.innerHTML = `
                <h2>${cat.name}</h2>
                <p><strong>Description :</strong> ${cat.description}</p>
                <p><strong>Origine :</strong> ${cat.origin}</p>
                
            `;
            catInfoContainer.appendChild(catItem);
        });
    }
}


// Appel de la fonction pour afficher les informations sur les chats
document.addEventListener('DOMContentLoaded', displayCatInfo);


