// Image URLs from external sources
const imageUrls = [
    'https://via.placeholder.com/600',
    'https://via.placeholder.com/601',
    'https://via.placeholder.com/602',
    'https://via.placeholder.com/603',
    // Add more image URLs here
];

// Generate thumbnail images dynamically
const thumbnailsContainer = document.querySelector('.thumbnails');
imageUrls.forEach((url, index) => {
    const img = document.createElement('img');
    img.src = url;
    img.alt = `Thumbnail ${index + 1}`;
    thumbnailsContainer.appendChild(img);
});

// Get the modal
var modal = document.querySelector('.modal');

// Get the <span> element that closes the modal
var span = document.querySelector('.close');

// When the user clicks on a thumbnail, open the modal
document.querySelectorAll('.thumbnails img').forEach(thumbnail => {
    thumbnail.onclick = function() {
        modal.style.display = "block";
        document.getElementById("fullImage").src = this.src;
        document.getElementById("caption").innerHTML = this.alt;
    }
});

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
