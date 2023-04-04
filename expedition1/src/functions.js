const fs = require("fs");

const crewFile = './src/crew.txt';
const equipmentFile = './src/equipment.txt';
const rocketsFile = './src/rockets.txt';

const crew = fs.readFileSync(crewFile, 'utf-8').split('\n').map(line => line.trim())
const equipment = fs.readFileSync(equipmentFile, 'utf-8').split('\n').map(line => line.trim());
const rockets = fs.readFileSync(rocketsFile, 'utf-8').split('\n').map(line => line.trim());

console.log(rockets)




// позволяет выбрать самого опытного капитана


function getRightCaptain() {

  const result = crew
    .slice(1)
    .map(person => person.split(','))
    .filter(([fullName, sex, job, experience]) => job === ' Капитан')
    .sort((a, b) => b[3] - a[3])
  return result[0].toString()

}



// позволяет выбрать самого опытного врача среди женщин
function getRightDoc() {

  const result = crew
    .slice(1)
    .map(person => person.split(','))
    .filter(([fullName, sex, job, experience]) => sex === ' ж' && job === ' Врач')
    .sort((a, b) => b[3] - a[3])

  return result[0].toString()

}


// позволяет выбрать всех бортмехаников
function getAllEngineer() {
  const result = crew
    .slice(1)
    .map(person => person.split(','))
    .filter(([fullName, sex, job, experience]) => job === ' Бортмеханик')
  return result.map(person => person.toString())
}

// Позволяет отобрать все марсоходы
function getAllRover() {
  const result = equipment
    .slice(1)
    .map(el => el.split(','))
    .filter(([roverName, type, lifeTime]) => type === ' марсоход')
  return result.map(el => el.toString())
}

// позволяет выбрать только те марсоходы, которые смогут прослужить больше 3 лет
function getRightRovers() {
  const result = equipment
    .slice(1)
    .map(el => el.split(','))
    .filter(([roverName, type, lifeTime]) => type === ' марсоход' && lifeTime > 3)
  return result.map(el => el.toString())
}

// позволяет выбрать ракету с максимальной дальностью полёта
function getRightRocket() {
  const result = rockets
    .slice(1)
    .map(el => el.split(','))
    .sort(([rocketNameA, typeA, rangeA], [rocketNameB, typeB, rangeB]) => Number(rangeB) - parseInt(rangeA));
  return result[0].toString()
}


module.exports = {
  getRightCaptain,
  getAllEngineer,
  getRightDoc,
  getAllRover,
  getRightRovers,
  getRightRocket,
};