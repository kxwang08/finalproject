/*!
 * Isotope PACKAGED v3.0.6
 *
 * Licensed GPLv3 for open source use
 * or Isotope Commercial License for commercial use
 *
 * https://isotope.metafizzy.co
 * Copyright 2010-2018 Metafizzy
 */


// the filters and making the active page effect for the button
// script.js
document.addEventListener('DOMContentLoaded', function () {
    var elem = document.querySelector('.grid');
    var iso = new Isotope(elem, {
        itemSelector: '.grid-item',
        layoutMode: 'fitRows'
    });

    // binding filter button click
    var filters = document.querySelector('.filter-buttons');
    filters.addEventListener('click', function(event) {
        if (!event.target.matches('button')) {
            return;
        }

        // Remove 'active' class from all buttons
        var buttons = document.querySelectorAll('.filter-buttons button');
        buttons.forEach(btn => {
            btn.classList.remove('active');
        });

        // Add 'active' class to the clicked button
        event.target.classList.add('active');

        var filterValue = event.target.getAttribute('data-filter');
        iso.arrange({ filter: filterValue });
    });
});
