document.querySelector('#btn-add-contact')
.addEventListener('click',function () {
     const nameInput = document.querySelector('#name-input');
     addcontact(nameInput.value);
     nameInput.value='';
});

function addcontact(fullName) {
    if(!fullName || !fullName.trim()) return;

    const contactDiv =document.createElement('div');
    contactDiv.className = 'contact-entry';

    contactDiv.addEventListener('dblclick', function(){
        contactDiv.remove();
    });

    const nameInitialDiv = document.createElement('div');
    nameInitialDiv.className = 'name-initial';
    nameInitialDiv.textContent= fullName.charAt(0);
    nameInitialDiv.style.backgroundColor = randomColor();

    const fullNameDiv = document.createElement('div');
    fullNameDiv.className = 'full-name';
    fullNameDiv.textcontent = fullName;

    //appendin order
    contactDiv.append(nameInitialDiv);
    contactDiv.append(fullNameDiv);
    document.querySelector('#contact-list').append(contactDiv);
}
function randomColor(){
    const colors = [
        '#75026e',
        '#059c16',
        '#000770',
        '#7a3e02',
        '#036b64',
        '#505e2d',
        '#e30909',
        '#b0ge0c',
    ];

    return colors[Math.floor(math.random() * colors.length)];
}