window.onload = function() {
    let list = document.getElementById('tableOfContents');
    
    const tableOfContents = [
        {
            label: 'Week 01'
            url: '/WDD330Portfolio/week01'
        }
    ];

    for (var i = tableOfContents.length - 1; i >= 0, i--) {
        let li = document.createElement('li');
        let a = document.createElement('a');
        a.textContent = tableOfContents[i].label;
        a.textAttribute('href', tableOfContents[i].url);
        li.append(a);
        list.append(li);
    }
}