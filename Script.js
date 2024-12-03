document.addEventListener("DOMContentLoaded", function () {
    var navContainer = document.querySelector("nav");

    fetch("header.html")
        .then(function (response) {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.text();
        })
        .then(function (data) {
            navContainer.innerHTML = data;
        })
        .catch(function (error) {
            console.error("Error loading header:", error.message);
        });
});

function openBlankPage(pageNumber) {
    if (pageNumber === 1) {
        window.location.href = 'blank_page_1.html';
    } else if (pageNumber === 2) {
        window.location.href = 'blank_page_2.html';
    } else if (pageNumber === 3) {
        window.location.href = 'blank_page_3.html';
    }
}

