programa
{
	
	funcao inicio()
	{
		escreva("Menu de opções:\n" +
			"1- Abrir NetFlix\n" +
			"2- Abrir Amazon Prime Video\n" +
			"3- Abrir Hbo Go\n" +
			"4- Sair\n\n")
		escreva("Sua opção: ")
		inteiro opcao = 0
		leia(opcao)

		escolha (opcao)
		{
			caso 1:
			escreva("Ok, abrindo NetFlix.\n")
			pare
			caso 2:
			escreva("Ok, abrindo Amazom Prime Video.\n")
			pare
			caso 3:
			escreva("Ok, abrindo Hbo Go.\n")
			pare
			caso 4:
			escreva("Saindo do menu ...\n")
			pare
			caso contrario:
			escreva("Opção inválida !!!\n")
		}
		
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 542; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz;
 */