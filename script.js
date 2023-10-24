let start = prompt("Введите calc что-бы проверить калькулятор, что угодно другое чтобы проверить циклы, функции, объекты и DOM", "calc");
if (start == "calc") {
    let name = prompt("Введите свое имя:", "Гость");
    alert(`Здравствуйте, ${name}!`);
    let frstNmb = prompt("Введите первое число");
    let scndNmb = prompt("Введите второе число:");
    const operator = prompt("Введите оператор (+, -, *, /) :");
    frstNmb = +frstNmb;
    scndNmb = +scndNmb;
    typeof (operator) - Symbol;
    const sum = frstNmb + scndNmb;
    const dif = frstNmb - scndNmb;
    const product = frstNmb * scndNmb;
    const quotient = frstNmb / scndNmb;

    let result;

    switch (operator) {
        case "+":
            result = frstNmb + scndNmb;
            alert(`Результат это ${result}`);
            break;
        case "-":
            result = frstNmb - scndNmb;
            alert(`Результат это ${result}`);
            break;
        case "*":
            result = frstNmb * scndNmb;
            alert(`Результат это ${result}`);
            break;
        case "/":
            result = frstNmb / scndNmb;
            alert(`Результат это ${result}`);
            break;
        default:
            alert('Введен неверный оператор');
    }
}
else {
    start = prompt("Выберите цикл для проверки (for - 1, while - 2, do while - 3), остальное - для отмены", "0");
    let repeat;
    switch (start) {
        case "1":
            repeat = prompt("Введите количество повторений", "0");
            repeat = +repeat;
            for (repeat; repeat > 0; repeat--) {
                document.write("RjakaScript <br>");
            };
            break;
        case "2":
            alert('Цикл While очень хорошо подходит для защиты ввода информации от непредвиденных данных, попробуйте нарушить условия в следующем сообщении');
            frstNmb = prompt("Введите число больше 0 и меньше 30", "0");
            frstNmb = +frstNmb;
            while (frstNmb <= 0 || frstNmb > 30) {
                frstNmb = prompt("Условия нарушены, введите число соответствующее условиям!", "0");
            };
            break;
        case "3":
            frstNmb = prompt("Вводите числа, каждое из них будет добавлятся к предыдущему, это будет продолжаться пока значение не достигнет 150 или больше", "0");
            frstNmb = +frstNmb;
            scndNmb = +frstNmb;
            console.log(scndNmb);
            do {
                frstNmb = prompt("Вводите числа, каждое из них будет добавлятся к предыдущему, это будет продолжжаться пока значение не достигнет 150", `${scndNmb}`);
                scndNmb = Number(+scndNmb + +frstNmb);
            } while (scndNmb <= 150);
            alert = ("Цикл завершен!");
            break;
        default:
            alert('Произошла отмена, идет проверка создания объектов');
            const person = {
                name: 'John',
                age: 30,
                gender: 'male'
            };
            document.writeln(`${person['name']} ${person.age} ${person['gender']} <br>`);
            person['name'] = prompt('Введите желаемое имя для объекта', 'John');
            person.age = prompt('Введите желаемый возраст для объекта', '30');
            document.writeln(`${person['name']} ${person.age} ${person['gender']}`);
            break;
    }
}