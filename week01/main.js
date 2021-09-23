window.onload = function () {
    let list = document.getElementById('footerLinks');

    const footerLinks = [
        {
            label: 'Next Week',
            url: '/week02'
        },
        {
            label: 'Back to Main',
            url: '/'
        }
    ];

    for (var i = footerLinks.length - 1; i >= 0; i--) {
        let li = document.createElement('li');
        let a = document.createElement('a');
        a.textContent = footerLinks[i].label;
        a.setAttribute('href', footerLinks[i].url);
        li.append(a);
        list.append(li);
    }

}