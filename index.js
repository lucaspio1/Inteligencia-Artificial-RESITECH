import readlineSync from 'readline-sync'
import clear from 'console-clear'
import chalk from 'chalk'

 
console.log('Olá! Eu sou a ' + chalk.blue.bgGray('RESITECH.') + 'Sou uma Inteligencia Artificial e irei te Ajudar.')
console.log('')
console.log('Mas antes de tudo preciso saber quem é voce.')
console.log('')
const NomeUsuario = readlineSync.question('Escreva ao lado como voce Gostaria de ser Chamado? ');clear();
console.log('Olá, ' + chalk.green(NomeUsuario) + '! ' + 'Como voce esta se sentindo hoje? Espero que bem!');
console.log('')
const desejo = readlineSync.question (chalk.green(NomeUsuario) + ', Escreva ao lado o que voce deseja: ');
clear();
console.log('Legal '+ chalk.green(NomeUsuario) + ',você precisa ' + desejo );
console.log('')
console.log('Irei te ajudar nesse processo.')
console.log('')
readlineSync.question(chalk.white.bgBlueBright('Pressione enter para continuarmos.'))
clear();
console.log(chalk.green(NomeUsuario)+ ', eu já entendi o seu desejo e quero criar algo especial para voce,')
console.log('Para isso digite aqui embaixo o porque voce deseja  ' + desejo + '.')
const paraQue = readlineSync.question()
clear();
console.log(chalk.green.bgWhiteBright('Uau!! Otimas Resposta!!'))
console.log('')
console.log('Fiquei Empolgada com esse processo.')

console.log('Então '+ chalk.green(NomeUsuario) + ', voce deseja ' + desejo + ' porque quer ' + paraQue) 
console.log('')
readlineSync.question (chalk.white.bgBlueBright('Se as informacoes tiverem corretas aperte enter'))
 clear();
 console.log('Ja tenho todas as informações necessárias.')
 console.log('')
 console.log('O nosso time Criativo irá desenvolver algo especial para voce')
 console.log('')
 console.log('Em até 3 dias iremos retornar com nossa proposta.')
 console.log('')
 console.log('')
 console.log('')
 readlineSync.question (chalk.white.bgBlueBright('Por favor pressione enter para encaminharmos todas as informacoes.'))
 clear();
 console.log('Obrigado pela preferencia! Até logo.')
