programa
{
	
	funcao inicio()
	{
		inteiro contador = 0
		cadeia agendaTelefonica[][] =
		{
			{"João", "São Paulo", "(11) 9999-5241"},
			{"Maria", "Ribeirão Preto", "(16) 9999-8596"},
			{"Ana", "Manaus", "(92) 9999-8574"}
		}

		faca {
			escreva("\nNome: " + agendaTelefonica[contador][0]
				+ "\nCidade: " + agendaTelefonica[contador][1]
				+ "\nNúmero: " + agendaTelefonica[contador][2]
				+ "\n")
			contador++
		}enquanto (contador < 3)
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 258; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */