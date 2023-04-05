const fs = require("fs");

const crewFile = './src/crew.txt';
const equipmentFile = './src/equipment.txt';
const rocketsFile = './src/rockets.txt';


const crew = fs.readFileSync(crewFile, 'utf-8').split('\n').map(line => line.trim())
const equipment = fs.readFileSync(equipmentFile, 'utf-8').split('\n').map(line => line.trim());
const rockets = fs.readFileSync(rocketsFile, 'utf-8').split('\n').map(line => line.trim());

console.log(equipment)


// позволяет выбрать самого опытного пилота


function getRightPilot() {

    const result = crew
        .slice(1)
        .map(person => person.split(','))
        .filter(([fullName, sex, job, experience]) => job === ' Пилот')
        .sort((a, b) => b[3] - a[3])
    return result[0].toString()

}



// позволяет выбрать самого опытного врача среди мужчин
function getRightDoc() {

    const result = crew
        .slice(1)
        .map(person => person.split(','))
        .filter(([fullName, sex, job, experience]) => sex === ' м' && job === ' Врач')
        .sort((a, b) => b[3] - a[3])

    return result[0].toString()

}


// позволяет выбрать всех инженеров
function getAllEngineer() {
    const result = crew
        .slice(1)
        .map(person => person.split(','))
        .filter(([fullName, sex, job, experience]) => job === ' Инженер')
    return result.map(person => person.toString())
}

// Позволяет отобрать все луноходы
function getAllRover() {
    const result = equipment
        .slice(1)
        .map(el => el.split(','))
        .filter(([roverName, type, lifeTime]) => type === ' луноход')
    return result.map(el => el.toString())
}

// позволяет выбрать только те луноходы, которые смогут прослужить больше 6 лет
function getRightRovers() {
    const result = equipment
        .slice(1)
        .map(el => el.split(','))
        .filter(([roverName, type, lifeTime]) => type === ' луноход' && lifeTime > 6)
    return result.map(el => el.toString())
}

// позволяет выбрать ракету с максимальной дальностью полёта
function getRightRocket() {
    const result = rockets
        .slice(1)
        .map(el => el.split(','))
        .sort(([rocketNameA, typeA, rangeA], [rocketNameB, typeB, rangeB]) => parseInt(rangeB) - parseInt(rangeA));
    return result[0].toString()
}

// позволяет выбрать все космические ракеты

function getSpaceRockets() {
    const result = rockets
        .slice(1)
        .map(el => el.split(','))
        .filter(([rocketName, type, range]) => type === ' космическая');
    return result.map(el => el.toString())
}




module.exports = {
    getRightPilot,
    getAllEngineer,
    getRightDoc,
    getAllRover,
    getRightRovers,
    getRightRocket,
    getSpaceRockets,
};