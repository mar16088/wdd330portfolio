window.onload = function () {
    let list = document.getElementById('tableOfContents');

    const tableOfContents = [
        {
            label: 'Week 12',
            url: '/week12/index.html'
        },
        {
            label: 'Week 11',
            url: '/week11/index.html'
        },
        {
            label: 'Week 10',
            url: '/week10/index.html'
        },
        {
            label: 'Week 09',
            url: '/week09challenge/index.html'
        },
        {
            label: 'Week 09',
            url: '/week09/index.html'
        },
        {
            label: 'Week 08',
            url: '/week08/index.html'
        },
        {
            label: 'Week 07',
            url: '/week07/index.html'
        },
        {
            label: 'To Do',
            url: '/week06todo/index.html'
        },
        {
            label: 'Week 05',
            url: '/week05/index.html'
        },
        {
            label: 'Week 04',
            url: '/week04/index.html'
        },
        {
            label: 'Week 03',
            url: '/week03/index.html'
        },
        {
            label: 'Week 02',
            url: '/week02/index.html'
        },
        {
            label: 'Week 01',
            url: '/week01/index.html'
        }
    ];

    for (var i = tableOfContents.length - 1; i >= 0; i--) {
        let li = document.createElement('li');
        let a = document.createElement('a');
        a.textContent = tableOfContents[i].label;
        a.setAttribute('href', tableOfContents[i].url);
        li.append(a);
        list.append(li);
    }

}