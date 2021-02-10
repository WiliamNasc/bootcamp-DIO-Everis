let mensagemEtTraduzida = (mensagemEt) => {
    return mensagemEt
            .split('')
            .reverse()
            .join('');
  };
  
  console.log(mensagemEtTraduzida(gets()));