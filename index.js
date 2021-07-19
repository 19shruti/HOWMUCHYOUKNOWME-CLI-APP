var readlineSync=require('readline-sync');
var chalk=require('chalk');
var userName=readlineSync.question('may i have your name ?');
console.log(chalk.yellow('hii ! '+ userName + ' Welcome , Lets see how much you know SHRUTI 😍' ));

var score=0;
function Play(input,output)
{
var userAnswer= readlineSync.question(input);
if(userAnswer.toUpperCase()===output.toUpperCase())
{
	score=score+1;
	console.log('right ' +' your score is :' + score);
}
else
{
score=score-1;
console.log('wrong ' +' your score is :' + score);
}
if(score===3)
console.log(chalk.red('CONGRATS ! YOU ARE IN LEVEL 1'));
else if (score===6)
console.log(chalk.redBright('CONGRATS !  YOU KNOW SHRUTI VERY WELL '));
}
Play('Where shruti is from (country ) ?', 'india');
Play("Where Shruti's  birthplace is (city) ",'ranchi');
Play("Where Shruti's study (colledge )", "sikkim");
Play("Shruti's birthday (date month) ?","9 april");
Play("Shruti's favourite food", 'chicken biryani');
Play("Shruti's favourite hobby ?",'painting');
