import Animal from './Animal';
import prompt from "prompt-sync";

let lion: Animal = new Animal('Leão', 100, 80, 60, 20)

let teclado = prompt()
let option: number = 0;
while (option != 9 || lion.isDead()) {
    console.log("+===========Animal==============+");
    console.log("|1. Treinar ataque                  |");
    console.log("|2. treinar Defesa                  |");
    console.log("|3. Descansar                       |");
    console.log("|4. Entrar em Batalha               |");
    console.log("|8. Imprimir atributos              |");
    console.log("|9. Sair                            |");
    console.log("+====================================");

    option = +teclado('Escolha uma ação: ')

    switch (option) {
        case 1:
            lion.treinarAtaque();
            console.log(lion.status());
            break;
        case 2:
            lion.treinarDefesa();
            console.log(lion.status());
            break;
        case 3:
            let horas: number = +teclado("digite o número de horas")
            lion.descansar(horas);
            console.log(lion.status());
            break;

        case 8:
            console.log(lion.status());
        default:
            break
    }

}