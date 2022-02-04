// case_1
/*let a = +prompt("Введите число от 1 до 7")
switch (a) {
    case 1:
        alert("Понедельник")
        break;
    case 2:
        alert("Вторник")
        break;
    case 3:
        alert("Среда")
        break;
    case 4:
        alert("Четверг")
        break;
    case 5:
        alert("Пятница")
        break;
    case 6:
        alert("Суббота")
        break;
    case 7:
        alert("Воскресенье")
        break;  
    default:
        alert("ТЫ ИДИОТ!?!?!?!??!")
        break;
}*/

// case_2
/*let a = +prompt("Введите число которое символизирует оценке где 1 - плохо, а 5 - отлично")
switch (a) {
    case 1:
        alert("Плохо")
        break;
    case 2:
        alert("Неудовлитворительно")
        break;
    case 3:
        alert("Удовлитворительно")
        break;
    case 4:
        alert("Хорошо")
        break;
    case 5:
        alert("Отлично")
        break;
    default:
        alert("Ошибка")
        break;
}*/

// case_3
/*let a = +prompt("Введите номер месяца")
switch (a) {
    case 1:
    case 2:
    case 12:
        alert("Зима")
        break;
    case 3:
    case 4:
    case 5:
        alert("Весна")
        break;
    case 6:
    case 7:
    case 8:
        alert("Лето")
        break; 
    case 9:
    case 10:
    case 11:
        alert("Осень")
        break;   
    default:
        break;
}*/

// case_4
/*let a = +prompt("Введите номер месяца")
switch (a) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        alert("В этом месяце 31 день")
        break;
    case 2:
        alert("В этом месяце 28 дней")
        break;
    case 4:
    case 6:
    case 9:
    case 11:
        alert("В этом месяце 30 дней")
        break;
    default:
        alert("Месяца закончились")
        break;
}*/

// case_5
/*let a = +prompt("Введите первое число")
let b = +prompt("Введите второе число")
let n = +prompt("Введите номер действия: 1-сложение 2-вычетание 3-умножение 4-деление")
switch (n) {
    case 1:
        alert(a+b)
        break;
    case 2:
        alert(a-b)
        break;
    case 3:
        alert(a*b)
        break;
    case 4:
        alert(a/b)
        break;
    default:
        alert("Укажите другое действие")
        break;
}*/

// case_6
/*let a = +prompt("Введите единицу длинны где: 1-дециметр 2-километр 3-метр 4-миллиметр 5-сантиметр")
let b = +prompt("Введите длинну отрезка")
switch (a) {
    case 1:
        alert(b*0.1 + "m")
        break;
    case 2:
        alert(b*1000 + "m")
        break;
    case 3:
        alert(b + "m")
        break; 
    case 4:
        alert(b*0.001 + "m")
        break;
    case 5:
        alert(b*0.01 + "m")
        break;
    default:
        alert("Вы ввели неправильное число")
        break;
}*/

// case_7
/*let a = +prompt("Введите единицу массы где: 1-килограмм 2-миллиграм 3-грамм 4-тонна 5-центнер")
let b = +prompt("Введите массу отрезка")
switch (a) {
    case 1:
        alert(b + "кг")
        break;
    case 2:
        alert(b*0.000001 + "кг")
        break;
    case 3:
        alert(b*0.0001 + "кг")
        break; 
    case 4:
        alert(b*1000 + "кг")
        break;
    case 5:
        alert(b*100 + "кг")
        break;
    default:
        alert("Вы ввели неправильное число")
        break;
}*/

//case_8
/*let d = +prompt("Введите день месяца")
let m = +prompt("Введите месяц(1-12)")
switch (m) {
    case 5:
        switch (d) {
            case 1:
                alert("30 апреля")
                break;
            default:
                alert(d-1 + "мая")
                break;
        }
        break;
    case 7:
        switch (d) {
            case 1:
                alert("30 июня")
                break;
            default:
                alert(d-1 + "июля")
                break;
        }
        break;
    case 10:
        switch (d) {
            case 1:
                alert("30 сентября")
                break;
            default:
                alert(d-1 + "октября")
                break;
        }
        break;
    case 12:
        switch (d) {
            case 1:
                alert("30 ноября")
                break;
            default:
                alert(d-1 + "декабря")
                break;
        }
        break;
    case 1:
        switch (d) {
            case 1:
                alert("31 декабря")
                break;
            default:
                alert(d-1 + "января")
                break;
        }
        break;
    case 2:
        switch (d) {
            case 1:
                alert("31 января")
                break;
            default:
                alert(d-1 + "февраля")
                break;
        }
        break;
    case 4:
        switch (d) {
            case 1:
                alert("31 марта")
                break;
            default:
                alert(d-1 + "апреля")
                break;
        }
        break;
    case 6:
        switch (d) {
            case 1:
                alert("31 мая")
                break;
            default:
                alert(d-1 + "июня")
                break;
        }
        break;
    case 8:
        switch (d) {
            case 1:
                alert("31 июля")
                break;
            default:
                alert(d-1 + "августа")
                break;
        }
        break;
    case 9:
        switch (d) {
            case 1:
                alert("31 августа")
                break;
            default:
                alert(d-1 + "сентября")
                break;
        }
        break;
    case 11:
        switch (d) {
            case 1:
                alert("31 октября")
                break;
            default:
                alert(d-1 + "ноября")
                break;
        }
        break;
    case 3:
        switch (d) {
            case 1:
                alert("28")
                break;
            default:
                alert(d-1 + "марта")
                break;
        }
        break;
    default:
        alert("Try again")
        break;
}*/

// case_9
/*let d = +prompt("Введите день месяца")
let m = +prompt("Введите месяц(1-12)")
switch (m) {
    case 5:
        switch (d) {
            case 31:
                alert("1 июня")
                break;
            default:
                alert(d+1 + "мая")
                break;
        }
        break;
    case 7:
        switch (d) {
            case 31:
                alert("1 августа")
                break;
            default:
                alert(d+1 + "июля")
                break;
        }
        break;
    case 10:
        switch (d) {
            case 31:
                alert("1 ноября")
                break;
            default:
                alert(d+1 + "октября")
                break;
        }
        break;
    case 12:
        switch (d) {
            case 31:
                alert("1 января")
                break;
            default:
                alert(d+1 + "декабря")
                break;
        }
        break;
    case 1:
        switch (d) {
            case 31:
                alert("1 февраля")
                break;
            default:
                alert(d+1 + "января")
                break;
        }
        break;
    case 2:
        switch (d) {
            case 28:
                alert("1 марта")
                break;
            default:
                alert(d+1 + "февраля")
                break;
        }
        break;
    case 4:
        switch (d) {
            case 30:
                alert("1 мая")
                break;
            default:
                alert(d+1 + "апреля")
                break;
        }
        break;
    case 6:
        switch (d) {
            case 30:
                alert("1 июля")
                break;
            default:
                alert(d+1 + "июня")
                break;
        }
        break;
    case 8:
        switch (d) {
            case 31:
                alert("1 сентября")
                break;
            default:
                alert(d+1 + "августа")
                break;
        }
        break;
    case 9:
        switch (d) {
            case 30:
                alert("1 октября")
                break;
            default:
                alert(d+1 + "сентября")
                break;
        }
        break;
    case 11:
        switch (d) {
            case 30:
                alert("1 декабря")
                break;
            default:
                alert(d+1 + "ноября")
                break;
        }
        break;
    case 3:
        switch (d) {
            case 31:
                alert("1 апреля")
                break;
            default:
                alert(d+1 + "марта")
                break;
        }
        break;
    default:
        alert("Try again")
        break;
}*/

// case_10
/*alert("Робот направлен на север")
let n = +prompt("Введите команду для робота(0-продолжить движение; 1-поворот налево; -1-поворот направо.)")
switch (n) {
    case 0:
        alert("робот направлен на север")
        break;
    case 1:
        alert("робот направлен на запад")
        break;
    case -1:
        alert("робот направлен на восток")
        break
    default:
        alert("Нет такого значения")
    break;
}*/

// сase_11
/*alert("локатор направлен на север")
let n1 = +prompt("Введите команду для локатора( 1-поворот налево; -1-поворот направо; 2-повернуться на 180.)")
let n2 = +prompt("Введите команду для локатора( 1-поворот налево; -1-поворот направо; 2-повернуться на 180.)")
switch (n1) {
    case 1:
        switch (n2) {
            case 1:
                alert("локатор направлен на юг")
                break;
            case -1:
                alert("локатор направлен на север")
                break
            case 2:
                alert("локатор направлен на восток")
                break;
            default:
                alert("Нет такого значения")
            break;
        }
        break;
    case -1:
        switch (n2) {
            case 1:
                alert("локатор направлен на север")
                break;
            case -1:
                alert("локатор направлен на юг")
                break
            case 2:
                alert("локатор направлен на запад")
                break;
            default:
                alert("Нет такого значения")
            break;
        }
        break
    case 2:
        switch (n2) {
            case 1:
                alert("локатор направлен на восток")
                break;
            case -1:
                alert("локатор направлен на запад")
                break
            case 2:
                alert("локатор направлен на север")
                break;
            default:
                alert("Нет такого значения")
            break;
        }
        break;
    default:
        alert("Нет такого значения")
    break;
}*/

// case_12
/*let a = +prompt("Введите номер элемента(1-радиус; 2-диаметр; 3-длинна; 4-площадь)")
let b = +prompt("Введите его значение")
switch (a) {
    case 1:
        r=b
        d=2*r
        l=2*3.14*r
        s=3.14*(r**2)
        alert("R=" + r + ";" + " D=" + d + ";" + " L=" + l +";" + " S=" + s + ".")
        break;
    case 2:
        r=b/2
        d=b
        l=2*3.14*r
        s=3.14*(r**2)
        alert("R=" + r + ";" + " D=" + d + ";" + " L=" + l +";" + " S=" + s + ".")
        break;
    case 3:
        r=b/(2+3.14)
        d=2*r
        l=b
        s=3.14*(r**2)
        alert("R=" + r + ";" + " D=" + d + ";" + " L=" + l +";" + " S=" + s + ".")
        break;
    case 4:
        r=(b/3.14)**0.5
        d=2*r
        l=2*3.14*r
        s=b
        alert("R=" + r + ";" + " D=" + d + ";" + " L=" + l +";" + " S=" + s + ".")
        break;
    default:
        alert("Ошибка при вводе")
        break;
}*/