function onlyPositives(arr) {
    let results = arr.filter( (a) => {
        return a > 0;
    });
    
    document.getElementById("results").innerHTML = "\nChallenge1: \n" + results;
}

function conc(arr1, arr2) {
    document.getElementById("results").innerHTML = "\nChallenge2: \n" + [].concat(arr1, arr2);
}

function isInIt(keyValue) {
    obj = {
        "key1": "value1",
        "key2": "value2"
    }

    for (const [key, value] of Object.entries(obj)) {
        if(key === keyValue) {
            document.getElementById("results").innerHTML = "\nChallenge3: \n" + true;
            break;
        }
    }
}

function isItArray(argument) {
    document.getElementById("results").innerHTML = "\nChallenge4: \n" + Array.isArray(argument);
}

function toUpper(line) {
    document.getElementById("results").innerHTML = "\nChallenge5: \n"
    + line.toLowerCase().split(' ').map( (word) => {
            return word[0].toUpperCase() + word.substr(1);
        }).join(' ');
}

function bubbleSort(array) {
	for (let i = 0; i < array.length; i++) {
		for (let j = 0; j < array.length; j++) {
			if (array[j] > array[j + 1]) {
				let temp = array[j];
				array[j] = array[j + 1];
				array[j + 1] = temp;
			}
		}
	}
	document.getElementById("results").innerHTML = "\nChallenge6: \n" + array;
} 
