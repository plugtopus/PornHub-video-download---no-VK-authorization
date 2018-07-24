(function () {

    var au = document.getElementById('age-verification-container');
    if (au) {
        au.style.display = 'none';
    }
    var dn = document.getElementById('age-verification-wrapper');
    if (dn) {
        dn.style.display = 'none';
    }

    var dl = document.querySelector('div[data-title="Download this video"]');

    if (dl) {
        dl.onclick = function () {
            var PS = document.getElementsByTagName('source');
            window.open(PS[(PS.length - 1)].src);
        };

        dl.style.cursor = 'pointer';
    }
})();