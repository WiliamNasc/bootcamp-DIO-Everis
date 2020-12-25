// Função do algoritmo: calcular a média aritmética, e definir aprovação ou reprovação, de um aluno.
// Autor: Wiliam Nascimento da Silva.

programa
{
	
	funcao inicio()
	{
		real nota = 0.0, totalNotas = 0.0, mediaFinal = 0.0
		real notas[4]
		cadeia nomeAluno
		inteiro contador = 0, contaNotas = 1

		escreva("Digite o nome do aluno: ")
		leia(nomeAluno)
		escreva("\n")

		//preenche o  vetor de notas
		enquanto(contador < 4){
			escreva("Insira a nota" + contaNotas + ": ")
			leia(nota)
			escreva("\n")
			notas[contador] = nota
			contaNotas++
			contador++
		}

		contador = 0

		//faz a soma das notas, contidas no vetor de notas
		enquanto(contador < 4){
			totalNotas += notas[contador]
			contador++
		}

		// calcula a média das notas, e exibe para o usuário
		mediaFinal = totalNotas / 4
		escreva("Aluno: " + nomeAluno + "\n" + "Média: " + mediaFinal + "\n")

		// valida se o aluno foi reprovado, ou aprovado
		se (mediaFinal >= 7){	
			escreva("Parabéns, você foi aprovado !!!")
		} senao {
		  	escreva("Infelizmente, você foi reprovado.")			
		  }

	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 931; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */