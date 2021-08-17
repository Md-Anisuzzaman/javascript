function countingAnimals(miles){
    const animalDensityFirst10Miles = 10;
    const animalDensitySeceond10Miles = 50;
    const animalDensityRestMiles = 10;
    if (miles <= 10){
        const count = miles * animalDensityFirst10Miles;
        return count;
    }
    else if (miles <= 20){
        const firstDenseAnimals = 10 * animalDensityFirst10Miles;
        const restMiles = miles - 10;
        const SeceondDenseAnimal = restMiles * animalDensitySeceond10Miles;
        const totalAnimals = firstDenseAnimals + SeceondDenseAnimal
        return totalAnimals
    }
    else{
        const firstDenseAnimals = 10 * animalDensityFirst10Miles;
        const SeceondDenseAnimal = 10 * animalDensitySeceond10Miles;
        const restMiles = miles - 20;
        const restDenseAnimals = restMiles * animalDensityRestMiles;
        const totalAnimals = firstDenseAnimals + SeceondDenseAnimal + animalDensityRestMiles
        return totalAnimals;

    }
}

const animals = countingAnimals(35);
console.log(animals);