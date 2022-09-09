![image](https://user-images.githubusercontent.com/107448818/189393525-aa5e5d90-f1fa-47e6-9259-70536ec3a02e.png)
![image](https://user-images.githubusercontent.com/107448818/189393584-5a4f10a2-997c-405b-9599-5e2bcf389e68.png)
![image](https://user-images.githubusercontent.com/107448818/189393794-2ebd4e32-f0b6-4a51-a2e2-72dc216f2012.png)

<h1> Urna Eletrônica </h1>
<hr />
O intuito desse projeto, foi por em prática alguns conhecimentos adquiridos até aqui, durante o curso de JavaScritp lecionado pela plataforma B7Web e o professor Bonieky.
O projeto utiliza tecnologias básicas de HTML5, CSS3 e JavaScript;
Basta cloná-lo e testar.

<h3>Detalhes</h3>

O projeto consiste em uma simulação de urna eletrônica, das utilizadas nas eleiões brasileiras, com 3 etapas;

1 - seleção de um vereador;
2 - seleção de um prefeito;
3 - tela de fim/voto salvo;

Utilizando manipulação de DOM, Events e Functions específicas do JS, a interface é atualizada cada vez que os números digitados são conferidos com os do canditados(simulei um banco de dados via uma variável direto no código JavaScript).
Caso os números não coincidam com os dos candidatos, a urna entende como voto nulo.
Os botões CONFIRMA, BRANCO e CORRIGE, simulam perfeitamente o real, em sua ordem, confirmando o voto(recebe um alert de voto confirmado), seleciona o voto em branco(display atualiza para essa funcionalidade) e limpa a tela de preenchimento(atulizando a interface de número, imagens e nomes).

<h3>Detalhes dos candidatos</h3><br/>
Os dados dos candidatos são puramente ficticios, e são facilmente ajustados, considerando ser possível adicionar mais objects na array dos candidatos, ou até mesmo via um banco de dados.<br>
VEREADOR - Felizarda - número 12345; <br />
PREFEITO - Feltrano Souza / Peter - número 17; <br/>
PREFEITO - Ciclano Silvano / Joana - número 13 <br />
