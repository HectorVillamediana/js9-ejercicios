import { countries } from "./arrays/countries.js"

const names = ["Alfred", "Mathias", "Elias", "Brook"];
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const products = [
    { product: "banana", price: 3 },
    { product: "mango", price: 6 },
    { product: "potato", price: " " },
    { product: "avocado", price: 8 },
    { product: "coffee", price: 10 },
    { product: "tea", price: "" },
];

//========================NIVEL 1====================================

//==========================1========================================

//ForEach se usa para iterar entre los elementos y modificar un array
//Map se usa para crear un nuevo array con los elementos modificados
//Filter se usa para crear un nuevo array con elementos que cumplanuna codicion
//reduce retorna el primer valor en el array que consiga que cumpla la condicion que pedimos

//==========================2=========================================

function callback() {
    console.log()
}

//=============================3=======================================

countries.forEach((country) => console.log(country));

//==============================4======================================

names.forEach((name) => console.log(name));

//==============================5=====================================y
numbers.forEach((num) => console.log(num));

//=============================6=======================================

const countriesToUpperCase = countries.map((country) => {
    return country.toUpperCase();
})

console.log(countriesToUpperCase);

//==============================7=======================================

const countriesLenght = countries.map((country) => {
    return country.length;
})

console.log(countriesLenght);

//=========================8=============================================

const numbersTo2 = numbers.map((num) => {
    return num ** 2;
})

console.log(numbersTo2);

//=========================9=============================================

const nameToUpperCase = names.map((name) => {
    return name.toUpperCase()
})

console.log(nameToUpperCase);

//=========================10=============================================

const productPrices = products.map((element) => {
    return `${element.product} cuesta ${element.price}`
})

console.log(productPrices);

//=========================11=============================================

const countriesWithLand = countries.filter((country) => {
    return country.includes("land")
});
console.log(countriesWithLand);


//=========================12=============================================

const countriesWith6Charts = countries.filter((country) => {
    return country.length == 6
});
console.log(countriesWith6Charts);

//=========================13=============================================

const countriesWith6OrMoreCharts = countries.filter((country) => {
    return country.length >= 6
});
console.log(countriesWith6OrMoreCharts);

//=========================14=============================================

const countriesStartsWithE = countries.filter((country) => {
    return country.startsWith("E")
});
console.log(countriesStartsWithE);

//=========================15=============================================

const filterProductPrices = products.filter((product) => {
    return product.price
});
console.log(filterProductPrices);

//=========================16=============================================

const getStringList = function (array) {
    const Newarr = array.map((element) => {
        return element + "";
    })
    return Newarr;
}
console.log(getStringList(["hola", 8, 5, "Adios"]));

//=========================17=============================================

const sum = numbers.reduce((acc, cur) => {
    return acc + cur
}, 0)

console.log(sum);

//=========================18=============================================

const concatCountries = countries.reduce((acc, cur) => {
    return acc + ", " + cur
},)

console.log(concatCountries);

//=========================19=============================================

//Itera todos los elementos para buscar similitudes
//Compruenba la similitud de algunos elementos y retorna un booleano

//=========================20=============================================

const namesMost7Charts = names.some((name) => {
    return name.length > 7
})
console.log(namesMost7Charts);

//=========================21=============================================

const everyCountriesContansLand = countries.every((country) => {
    return countries.includes("land")
})
console.log(everyCountriesContansLand);

//=========================22=============================================

// Retorna el elemento que cumple la condicion
// Retorna la posicion del elemento que cumple la condicion

//=========================23=============================================

const firstCountryMore6Charts = countries.find((country) => {
    return country.length == 6
})
console.log(firstCountryMore6Charts);
//=========================24=============================================

const indexCountryMore6Charts = countries.findIndex((country) => {
    return country.length == 6
})
console.log(indexCountryMore6Charts);

//=========================24=============================================

const indexNorway = countries.findIndex((country) => {
    return country.includes("Norway")
})
console.log(indexNorway);

//=========================24=============================================

const indexRussia = countries.findIndex((country) => {
    return country.includes("Russia")
})
console.log(indexRussia);

//==========================NIVEL 2=============================================


//============================1=============================================

const totalProducts = products.filter((element) => {
    return typeof element.price == "number"

});
const totalPrices = totalProducts.map((e) => {
    return e.price
})
const total = totalPrices.reduce((acc, cur) => {
    return acc + cur
}, 0)

console.log(total);

//============================2=============================================


const totalSum = totalPrices.reduce((acc, cur) => {
    return acc + cur
}, 0)

console.log(totalSum);

//============================3=============================================

const categorizeCountries = function (patron) {
    const totalCountriesMatch = countries.filter((country) => {
        return country.includes(patron)
    });
    return totalCountriesMatch
}
console.log(categorizeCountries("a"));

//============================4=============================================

const countriesStarst = function (letter) {
    let a = 0;
    const totalStarts = countries.filter((country) => {
        if (country.startsWith(letter)) {
            a++
        }
        return country.startsWith(letter)
    });
    return `${a} paises empiezan con ${letter} y son ${totalStarts}`
}
console.log(countriesStarst("F"));

//============================5=============================================

/*const getFirsrtTenCountries = function () {
    let firstTen = countries.splice(0, 10);
    return firstTen
}
console.log(getFirsrtTenCountries());*/

//============================6=============================================

/*const getLastTenCountries = function () {
    let lastTen = countries.splice(-10);
    return lastTen
}
console.log(getLastTenCountries());*/

//============================6=============================================

const getMostUsedLetter = function () {
    let letters = 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ'.split('')
    let count = 0;
    let mostUsed = "";
    let quantyArr = [];
    let lastCounter = 0;

    for (let letter of letters) {
        for (let country of countries) {
            if (country.startsWith(letter)) {
                count += 1
            }
        }
        if (letter === "A") {
            lastCounter = count
        }

        if (lastCounter < count) {
            mostUsed = letter
        }

        if (count !== 1) {
            console.log(count + ' paises inician con ' + letter);
        } else {
            console.log(count + ' país inicia con ' + letter);
        }
        count = 0
    }
    return `la letra mas usada es ${mostUsed}`
}
console.log(getMostUsedLetter());

//==========================NIVEL 3=============================================


//=================================1============================================

  