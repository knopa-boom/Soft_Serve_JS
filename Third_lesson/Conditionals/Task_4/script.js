var k = prompt('Введите число от 1 до 5', '');

switch (Number(k)) {
    case 1:
        console.log('плохо');
        break;
    case 2:
        console.log('неудволетворительно');
        break;
    case 3:
        console.log('удволетворительно');
        break;
    case 4:
        console.log('хорошо');
        break;
    case 5:
        console.log('отлично');
        break;
    default:
        console.log('ошибка');
        break;
}