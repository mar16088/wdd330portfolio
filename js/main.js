window.onload = function () {
    let list = document.getElementById('tableOfContents');

    const tableOfContents = [
        {
            label: 'Week 01',
            url: '/WDD330Portfolio/week01/'
        },
        {
            label: 'Week 02',
            url: '/WDD330Portfolio/week02/'
        },
        {
            label: 'Week 03',
            url: '/WDD330Portfolio/week03/'
        },
        {
            label: 'Week 04',
            url: '/WDD330Portfolio/week04/'
        },
        {
            label: 'Week 05',
            url: '/WDD330Portfolio/week05/'
        },
        {
            label: 'Week 07',
            url: '/WDD330Portfolio/week07/'
        },
        {
            label: 'Week 08',
            url: '/WDD330Portfolio/week08/'
        },
        {
            label: 'Week 09',
            url: '/WDD330Portfolio/week09/'
        },
        {
            label: 'Week 10',
            url: '/WDD330Portfolio/week10/'
        },
        {
            label: 'Week 11',
            url: '/WDD330Portfolio/week11/'
        },
        {
            label: 'Week 12',
            url: '/WDD330Portfolio/week12/'
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