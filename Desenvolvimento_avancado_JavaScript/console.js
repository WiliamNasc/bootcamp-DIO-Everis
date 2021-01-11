/*
    - O google chrome oferece uma ferramenta de debug muito interessante;
    - Abas como "Source" (contém os arquivos do software),
      "Network" (informações de requiciçã0), e "Console", são muito utilizadas,
      para encontrar erros nos códigos de aplicações web;
    - Para adicionar um breakpoint (ponto de parada), no chrome, basta ir na aba 
      "Sources", escolher um arquivo e clicar em sua linha, e depois reiniciar a página,
      assim a página irá parar examente na linha selecionada, possibilitando uma análise mais
      detahada, do que pode estar acontecendo, é possível visualizar as informações do objeto da
      linha seleionada no console, basta digitar "console.log(this)";
    - É possível definir um ponto de parada no próprio código, para que o chrome interprete, usando
      a palavra reservada "debugger" acima da linha desejada;
    - A aba "Element", do chrome, permite a visualização dos componentes e estilos, na tela da página,
      é possível editar os valores desses componentes, e verificar o que acontece em tempo real, o navegador,
      também permite salvar as alterações realizadas.
*/
console.log('Console log normal');
console.warn('Console de alerta');
console.error('Console de erro');
console.trace(); // mostra informações de onde o nosso código foi executado
console.group('Inicio do console group');
console.log('Meu grupo de mensagem');
console.log('Dentro de um console');
console.groupEnd('Fim do console group');
console.time('Console time'); // permite analizar o tempo de execução de determinado trecho de código
setTimeout(() => {
  console.timeEnd('Console time');
}, 2000);
const infoAluno = {
  nome: 'Wiliam',
  instituição: 'Digital Innovation One'
}
console.assert(1 === 0, 'Ops'); // mostra a mensagem "Ops", se a condição for falsa
console.table(infoAluno); // mostra o array em forma de infoAluno
console.log('%c styled log', 'color: blue; font-size: 40px;'); // estiliza a mensgem a ser exibida