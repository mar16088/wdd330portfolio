window.onload = function() {
    let list = document.getElementById('tableOfContents') = [
        {
            label: 'Week 01',
            url: '/wdd330portfolio/W01/'
        }
    ];

    for(var i = tableOfContents.length - 1; i >= 0, i--) {
        let li = document.createElement('li');
        let a = document.createElement('a');
        a.textAttribute('href', tableOfContents[i].url);
        li.append(a);
        list.append(li);
    }
}