## Project Euler
O objetivo desse repositório é ir colocando as minhas respostas (e os resumos) dos desafios do site [Project Euler](https://projecteuler.net/archives).

## Problems

### 1. Multiples of 3 and 5
Se listarmos todos os números naturais abaixo de 10 que são múltiplos de 3 ou 5, obteremos 3, 5, 6 e 9. A soma desses múltiplos é 23.<br>
_**Encontre a soma de todos os múltiplos de 3 ou 5 abaixo de 1000.**_

### 2.	Even Fibonacci numbers
Cada novo termo na sequência de Fibonacci é gerado adicionando os dois termos anteriores. Começando com 1 e 2, os primeiros 10 termos serão: 1, 2, 3, 5, 8, 13, 21, 34, 55, 89,...<br>
_**Ao considerar os termos na sequência de Fibonacci cujos valores não excedem quatro milhões, encontre a soma dos termos de valor par**_.

### 3.	Largest prime factor
Os fator primo de 13195 são 5, 7, 13 e 29.<br>
_**Qual é o maior fator primo do número 600851475143?**_

### 4.	Largest palindrome product
Um número palíndromo tem a mesma leitura nos dois sentidos. O maior palíndromo feito do produto de dois números de 2 dígitos é 9009 = 91 × 99. <br>
_**Encontre o maior palíndromo feito do produto de dois números de 3 dígitos.**_

### 5.	Smallest multiple
2520 é o menor número que pode ser dividido por cada um dos números de 1 a 10 sem nenhum resto.<br>
_**Qual é o menor número positivo que é igualmente divisível por todos os números de 1 a 20?**_

### 6. Sum square difference
A soma dos quadrados dos primeiros dez números naturais é 1² + 2² + ... + 10² = 385<br>
O quadrado da soma dos dez primeiros números naturais é (1 + 2 + ... + 10) 2 = 552 = 3025<br>
Portanto, a diferença entre a soma dos quadrados dos primeiros dez números naturais e o quadrado da soma é 3025−385 = 2640.<br>
_**Encontre a diferença entre a soma dos quadrados dos primeiros cem números naturais e o quadrado da soma.**_

### 7.	10001st prime
Listando os primeiros seis números primos: 2, 3, 5, 7, 11 e 13, podemos ver que o 6º primo é 13.<br>
_**Qual é o 10.001º número primo?**_

### 8.	Largest product in a series
Os quatro dígitos adjacentes no número de 1000 dígitos que têm o maior produto são 9 × 9 × 8 × 9 = 5832. <br>
<br> 73167176531330624919225119674426574742355349194934 <br> 96983520312774506326239578318016984801869478851843 <br> 85861560789112949495459501737958331952853208805511 
<br> 12540698747158523863050715693290963295227443043557 <br> 66896648950445244523161731856403098711121722383113 <br> 62229893423380308135336276614282806444486645238749 
<br> 30358907296290491560440772390713810515859307960866 <br> 70172427121883998797908792274921901699720888093776 <br> 65727333001053367881220235421809751254540594752243 
<br> 52584907711670556013604839586446706324415722155397 <br> 53697817977846174064955149290862569321978468622482 <br> 83972241375657056057490261407972968652414535100474 
<br> 821663704844031**9989**0008895243450658541227588666881 <br> 16427171479924442928230863465674813919123162824586 <br> 17866458359124566529476545682848912883142607690042 
<br> 24219022671055626321111109370544217506941658960408 <br> 07198403850962455444362981230987879927244284909188 <br> 84580156166097919133875499200524063689912560717606 
<br> 05886116467109405077541002256983155200055935729725 <br> 71636269561882670428252483600823257530420752963450 <br>

_**Encontre os treze dígitos adjacentes no número de 1000 dígitos que tem o maior produto. Qual é o valor deste produto?**_

### 9.	Special Pythagorean triplet
Um tripleto pitagórico é um conjunto de três números naturais, a < b < c, para os quais a² + b² = c².<br>
Por exemplo, 32 + 42 = 9 + 16 = 25 = 52. Existe exatamente um trio pitagórico para o qual a + b + c = 1000. <br>
_**Encontre o produto abc.**_

### 10.	Summation of primes
A soma dos números primos abaixo de 10 é 2 + 3 + 5 + 7 = 17. <br>
_**Encontre a soma de todos os primos abaixo de dois milhões.**_

### 11.	Largest product in a grid
Na grade 20 × 20 abaixo, quatro números ao longo de uma linha diagonal foram marcados em bold.<br>

08 02 22 97 38 15 00 40 00 75 04 05 07 78 52 12 50 77 91 08 <br> 
49 49 99 40 17 81 18 57 60 87 17 40 98 43 69 48 04 56 62 00 <br>
81 49 31 73 55 79 14 29 93 71 40 67 53 88 30 03 49 13 36 65 <br>
52 70 95 23 04 60 11 42 69 24 68 56 01 32 56 71 37 02 36 91 <br>
22 31 16 71 51 67 63 89 41 92 36 54 22 40 40 28 66 33 13 80 <br>
24 47 32 60 99 03 45 02 44 75 33 53 78 36 84 20 35 17 12 50 <br>
32 98 81 28 64 23 67 10 **26** 38 40 67 59 54 70 66 18 38 64 70 <br>
67 26 20 68 02 62 12 20 95 **63** 94 39 63 08 40 91 66 49 94 21 <br>
24 55 58 05 66 73 99 26 97 17 **78** 78 96 83 14 88 34 89 63 72 <br>
21 36 23 09 75 00 76 44 20 45 35 **14** 00 61 33 97 34 31 33 95 <br>
78 17 53 28 22 75 31 67 15 94 03 80 04 62 16 14 09 53 56 92 <br>
16 39 05 42 96 35 31 47 55 58 88 24 00 17 54 24 36 29 85 57 <br>
86 56 00 48 35 71 89 07 05 44 44 37 44 60 21 58 51 54 17 58 <br>
19 80 81 68 05 94 47 69 28 73 92 13 86 52 17 77 04 89 55 40 <br>
04 52 08 83 97 35 99 16 07 97 57 32 16 26 26 79 33 27 98 66 <br>
88 36 68 87 57 62 20 72 03 46 33 67 46 55 12 32 63 93 53 69 <br>
04 42 16 73 38 25 39 11 24 94 72 18 08 46 29 32 40 62 76 36 <br>
20 69 36 41 72 30 23 88 34 62 99 69 82 67 59 85 74 04 36 16 <br>
20 73 35 29 78 31 90 01 74 31 49 71 48 86 81 16 23 57 05 54 <br>
01 70 54 71 83 51 54 69 16 92 33 48 61 43 52 01 89 19 67 48 <br>

O produto desses números é 26 × 63 × 78 × 14 = 1788696.<br>
_**Qual é o maior produto de quatro números adjacentes na mesma direção (para cima, para baixo, para a esquerda, para a direita ou diagonal) na grade 20 × 20?**_

### 12.	Highly divisible triangular number
A sequência de números de triângulos é gerada adicionando os números naturais. <br>
Portanto, o sétimo número do triângulo seria 1 + 2 + 3 + 4 + 5 + 6 + 7 = 28. <br>
Os primeiros dez termos seriam: 1, 3, 6, 10, 15, 21, 28, 36, 45, 55, ... <br>
Vamos listar os fatores dos primeiros sete números de triângulo: <br>

**1:** 1 <br>
**3:** 1,3 <br>
**6:** 1,2,3,6 <br>
**10:** 1,2,5,10 <br>
**15:** 1,3,5,15 <br>
**21:** 1,3,7,21 <br>
**28:** 1,2,4,7,14,28 <br>

Podemos ver que 28 é o primeiro número do triângulo a ter mais de cinco divisores. <br>
_**Qual é o valor do primeiro número do triângulo com mais de quinhentos divisores?**_

### 13	Large sum
_**Calcule os primeiros dez dígitos da soma dos cem números de 50 dígitos a seguir.**_ <br>
[Link com os 100 números](https://projecteuler.net/problem=13)

### 14	Longest Collatz sequence
A seguinte sequência iterativa é definida para o conjunto de inteiros positivos: <br>
_n → n / 2 (se n for par)_ <br>
_n → 3n + 1 (se n for ímpar)_ <br>

Usando a regra acima e começando com 13, geramos a seguinte sequência: <br>
13 → 40 → 20 → 10 → 5 → 16 → 8 → 4 → 2 → 1 <br>

Percebe-se que esta sequência (começando em 13 e terminando em 1) contém 10 termos. <br>
_**Qual número inicial, abaixo de um milhão, produz a cadeia mais longa?**_

### 16 Power digit sum
2<sup>15</sup> = 32768 e a soma de seus dígitos é 3 + 2 + 7 + 6 + 8 = 26. <br>
_**Qual é a soma dos dígitos do número 2<sup>1000</sup>?**_

### 17 Number letter counts

Se os números de 1 a 5 forem escritos em palavras: one, two, three, four, five.<br>
Então há 3 + 3 + 5 + 4 + 4 = 19 letras usadas no total.

_**Se todos os números de 1 a 1000 (inclusive) fossem escritos em palavras, quantas letras seriam usadas?**_<br>
_NOTA: Não conte espaços ou hifens. Por exemplo, 342 (three hundred and forty-two) contém 23 letras e 115  (one hundred and fifteen) contém 20 letras._
