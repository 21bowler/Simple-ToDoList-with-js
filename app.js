const input = document.getElementById('inputArea');
const btn = document.getElementById('btn');
const list = document.getElementById('todoList');

// styling the Input
input.style.padding = '5px ';

// styling the add button
// btn.style.textTransform = 'uppercase';

btn.addEventListener('click', (e) => {
    e.preventDefault();
    let val = input.value;
    // creating a new paragraph
    let paragraph = document.createElement('p');
    list.appendChild(paragraph);
    paragraph.innerText = val;
    paragraph.addEventListener('dblclick', () => {
        paragraph.style.textDecoration = 'line-through';
        paragraph.style.cursor = 'pointer';
    })
    

    // removes the value inside the iput when added
    input.value = '';
    
})



