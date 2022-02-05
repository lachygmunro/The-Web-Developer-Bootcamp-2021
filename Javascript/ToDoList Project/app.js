let command = prompt('What would you like to do?').toLowerCase();
const list = ['Iron pants'];

while (command !== 'quit') {
    if (command === 'list') {
        console.log('******')
        for (i = 0; i < list.length; i++) {
            console.log(`${i}: ${list[i]}`)
        }
        console.log('******')
    } else if (command === 'new') {
        const newItem = prompt('Please enter new item:')
        list.push(newItem);
        console.log(`${newItem} added to list!`)
    } else if (command === 'delete') {
        const itemIndex = parseInt(prompt('Enter the index of the item you want to delete:'))
        if (!Number.isNaN(itemIndex)) {
            list.splice(itemIndex, 1);
            console.log('Item deleted.');
        } else {
            console.log('Unknown index.')
        }
    }
    command = prompt('What would you like to do?').toLowerCase();
} console.log('Quitting. Have a nice day!')

