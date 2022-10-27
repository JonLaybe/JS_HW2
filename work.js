function One() {
    let age = prompt("Age");

    if (age != "" && Number(age)) {
        if (age >= 0 && age <= 2)
            alert("Ребенок");
        else if (age >= 12 && age < 18)
            alert("Подросток");
        else if (age >= 18 && age < 60)
            alert("Взрослый");
        else if (age >= 60)
            alert("Пенсионер");
    }
}
function Two() {
    let num = prompt("Введите число от 0 до 9");

    switch(num) {
        case "0": alert(")"); break;
        case "1": alert("!"); break;
        case "2": alert("@"); break;
        case "3": alert("#"); break;
        case "4": alert("$"); break;
        case "5": alert("%"); break;
        case "6": alert("^"); break;
        case "7": alert("&"); break;
        case "8": alert("*"); break;
        case "9": alert("("); break;
    }
}
function Three() {
    let num = prompt("Number");

    if (num.length === 3 && Number(num)){
        if (num[0] === num[1])
            alert("Yes");
        else if (num[0] === num[2])
            alert("Yes");
        else if (num[1] === num[2])
            alert("Yes");
        else
            alert("No");
    }
}
function Four() {
    let year = prompt("Year");

    if (year !== "" && Number(year)) {
        if (year%100 !== 0 && (year%400===0 || year%4===0))
            alert("Високосный год");
        else
            alert("Невисокосный год");
    }
}
function Five() {
    let str = prompt("Введите строку");
    let isCheked = true;

    if (str%2 === 0)
        str -= 1;
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== str[str.length-i-1]) {
            isCheked = false;
            break;
        }
    }
    alert(isCheked ? "Палиндром" : "Непалиндром");
}
function Six() {
    const eur = 1.01;
    const uan = 36.52;
    const azn = 1.70;

    let usd = prompt("USD");
    let choice = prompt("Choice EUR, UAN or AZN");

    if (Number(usd)) {
        switch(choice) {
            case "EUR": alert(+usd*eur); break;
            case "UAN": alert(+usd*uan); break;
            case "AZN": alert(+usd*azn); break;
        }
    }
}
function Seven() {
    let sum = prompt("Sum");

    if (Number(sum)) {
        console.log("Yes");
        if (+sum >= 200 && +sum <= 300)
            alert(`Summa: ${(+sum/100)*3}`);
        else if (+sum >= 300 && +sum < 500)
            alert(`Summa: ${(+sum/100)*5}`);
        else if (+sum >= 500)
            alert(`Summa: ${(+sum/100)*7}`);
        else
            alert(`Summa: ${sum}`);
    }else {
        alert(`Summa: ${sum}`);
    }
}
function Eight() {
    let line_circle = prompt("Длина окружности");
    let perimeter = prompt("Периметр");

    if (Number(line_circle) && Number(perimeter)) {
        let d = Math.round(line_circle/Math.PI);//диаметр
        
        alert(perimeter/4 === d ? "Yes" : "No");
    }
}
function Nine() {
    let count = 0;
    let question;
    question = prompt("1)Чем является млечный путь?\n1.Галактика\n2.Скопление звёзд\n3.Парад планет\n4.Огромный экран сделанный NASA в целях скрытия истенного происхождения человека");
    if (question === "4") {
        alert("✔ Ну конечно, любой знает это!");
        count++;
    }
    else if (question === "1"){
        alert("Ну ДА ДА, ты прав!");
        count--;
    }
    question = prompt("2)Какой формы Земля?\n1.Круглая\n2.Плоская\n3.Треугольная\n4.Квадратная");
    if (question === "2") {
        alert("✔ Ну конечно!");
        count++;
    }
    else if (question === "1"){
        alert("Ну ДА ДА, ты прав!");
        count--;
    }
    question = prompt("3)Что такое Солнце?\n1.Звезда\n2.Прожекто\nр3.Планета\n4.Черная дыра");
    if (question === "2") {
        alert("✔ Ну конечно!");
        count++;
    }
    else if (question === "1"){
        alert("Ну ДА ДА, ты прав!");
        count--;
    }
    alert(count);
}
function Ten() {
    let day = prompt("Day");
    let month = prompt("Month");
    let year = prompt("Year");
    if ((day !== "" && Number(day)) && (month !== "" && Number(month) && (year !== "" && Number(year)))) {
        let date = new Date(year, month - 1, day);
        date.setDate(date.getDate() + 1);
        alert(date);
    }
}
Ten();