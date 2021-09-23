window.onload = function () {
    let list = document.getElementById('footerLinks');

    const footerLinks = [
        {
            label: 'Next Week',
            url: '/week03'
        },
        {
            label: 'Back to Main',
            url: '/'
        },
        {
            label: 'Previous Week',
            url: '/week01'
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