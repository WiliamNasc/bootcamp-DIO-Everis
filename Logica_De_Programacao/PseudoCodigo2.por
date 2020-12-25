programa
{
	
	funcao inicio()
	{
		real janeiro, fevereiro, marco, abril, totalVendas, mediaVendas

		escreva("Vendas de Janeiro: ")
		leia(janeiro)
		escreva("Vendas de Fevereiro: ")
		leia(fevereiro)
		escreva("Vendas de Março: ")
		leia(marco)
		escreva("Vendas de Abril: ")
		leia(abril)

		totalVendas = janeiro + fevereiro + marco + abril
		mediaVendas = totalVendas / 4

		escreva("Total de vendas: " + totalVendas + "\n" + "Média de vendas: " + mediaVendas)
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 474; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */