# TDD
Vamos implementar uma função que faça um personagem "bater" no outro. Antes disso, precisamos  fazer uma função que vai validar as informações de cada personagem. Ele deve possuir 4 parâmetros: nome, vida, defesa e força.
A força representa o quanto o personagem pode tirar de vida do outro. A defesa é um valor que representa o quanto o outro personagem consegue se defender, a conta é simples: quando um personagem ataca  o outro, ele perde o valor (força - defesa) da sua vida. Todos os personagens começam com a vida 1500 e, ao chegar no 0, eles morrem.<br>

a. Crie uma interface para representar os personagens.<br>
b. Crie uma função validateCharacter que valide as informações de um personagem (devolvendo true se for válida ou false caso contrário). Nenhuma das propriedades pode ser vazia. Em relação a vida, defesa e força, elas só podem possuir valores maiores que 0.


depois realize o teste unitário da função:<br>
a. Crie um teste que verifique o comportamento da função com um personagem com o nome vazio, isto é, "".<br>
b. Crie um teste que verifique o comportamento da função com um personagem com a vida igual a zero.<br>
c. Crie um teste que verifique o comportamento da função com um personagem com a força igual a zero.<br>
d. Crie um teste que verifique o comportamento da função com um personagem com a defesa igual a zero.<br>
e. Crie um teste que verifique o comportamento da função com um personagem com a vida ou a força ou a defesa com um valor negativo.<br>
f. Crie um teste que verifique o comportamento da função com um personagem com as informações validas.<br>

<br> Depois implemente uma função que represente o ataque de um personagem a outro. Ela deve receber dois parâmetros: attacker (atancante) e defender (defensor) que são do tipo Character.<br>
<br>
O comportamento dela deve ser:<br>
<br> Caso algum dos personagens esteja inválido, a função deve indicar um erro: Invalid Character. <br>
Ela deve retirar do defender o valor final do ataque ((força do attacker) - (defesa do defender)) <br>
Caso a defesa do defender seja maior do que a força do attacker, nenhuma vida do defender deve ser retirada. <br>

<br>
Agora você deve criar um Mock dessa função que represente a saída de sucesso do seu comportamento. <br>
Crie um Mock dessa função que representa a saída de erro/falha do seu comportamento.<br>

a. Faça um teste com dois personagens com valores válidos, em que o defensor perca 200 pontos de vida. Verifique o estado final das personagens. Sobre a função mockada, verifique se ela foi chamada, o número de vezes em que ela foi chamada, quantas vezes ela retornou.<br>
b. Faça um teste com um dos personagens com alguma informação inválida. Verifique a mensagem de erro. Sobre a função mockada, verifique se ela foi chamada, o número de vezes em que ela foi chamada, o que ela retornou e quantas vezes ela retornou.
