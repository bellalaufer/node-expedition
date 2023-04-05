const {
    getRightRovers,
    getAllRover,
    getRightDoc,
    getRightPilot,
    getAllEngineer,
    getRightRocket,
    getSpaceRockets,
} = require('../src/functions2');

describe('Экспедиция на Луну', () => {
    describe('Отбор кандидатов', () => {
        let crew;
        beforeEach(() => {
            crew = [
                'Джон Смит, м, Командир, 10',
                'Саманта Джонсон, ж, Пилот, 8',
                'Джеймс Браун, м, Инженер, 12',
                'Эмили Дэвис, ж, Ученый, 6',
                'Майкл Уилсон, м, Врач, 9',
                'Сара Томпсон, ж, Инженер, 5',
                'Дэвид Тейлор, м, Врач, 11',
                'Дженнифер Ли, ж, Пилот, 7',
            ];
        });
        it('позволяет выбрать самого опытного пилота', () => {
            const bestPilot = getRightPilot();
            expect(bestPilot).toBe(crew[1]);
        });
        it('позволяет выбрать самого опытного врача среди мужчин', () => {
            const bestDoctor = getRightDoc();
            expect(bestDoctor).toEqual(crew[6]);
        });
        it('позволяет выбрать всех инженеров', () => {
            const allEngineer = getAllEngineer();
            expect(allEngineer).toEqual([crew[2], crew[5]]);
        });
    });
    describe('Отбор оборудования', () => {
        let equipment;
        beforeEach(() => {
            equipment = [
                'Красный путник, марсоход, 5',
                'Полярная звезда, марсоход, 4',
                'Лунный ковчег, луноход, 6',
                'Солнечный луч, луноход, 7',
                'Путешественник-3, марсоход, 6',
                'Лунный крейсер, луноход, 5',
                'Исследователь-4, марсоход, 7',
                'Лунный маяк, луноход, 8',
            ];
        });
        it('Позволяет отобрать все луноходы', () => {
            const allRover = getAllRover();
            expect(allRover).toEqual([equipment[2], equipment[3], equipment[5], equipment[7]]);
        });
        it('позволяет выбрать только те луноходы, которые смогут прослужить больше 6 лет', () => {
            const rightRovers = getRightRovers();
            expect(rightRovers).toEqual([equipment[3], equipment[7]]);
        });
    });
    describe('Выбор ракеты', () => {
        let rockets;
        beforeEach(() => {
            rockets = [
                'Аполлон, межконтинентальная, 15',
                'Сатурн, орбитальная, 30',
                'Юпитер, межконтинентальная, 20',
                'Ариэль, космическая, 50',
                'Гелиос, межпланетная, 100',
                'Нептун, космическая, 70',
            ];
        });
        it('позволяет выбрать ракету с максимальной дальностью полёта', () => {
            const rocket = getRightRocket();
            expect(rocket).toBe(rockets[4]);
        });
        it('позволяет выбрать все космические ракеты', () => {
            const spaceRockets = getSpaceRockets();
            expect(spaceRockets).toEqual([rockets[3], rockets[5]]);
        });
    });
});

