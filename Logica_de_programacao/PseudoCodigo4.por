programa
{
	
	funcao inicio()
	{
		inteiro contador = 0, limiteTabuada, numeroTabuada, resultado

		escreva("Qual tabuadam, você deseja calcular ? ")
		leia(numeroTabuada)
		escreva("\nAté qual número deseja calcular, a tabuada ? ")
		leia(limiteTabuada)
		
		faca {
			resultado = numeroTabuada * contador
			escreva(numeroTabuada + " x " + contador + " = " + resultado + "\n")
			contador++
		} enquanto (contador <= limiteTabuada)
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 437; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */