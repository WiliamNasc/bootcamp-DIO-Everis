for (let i = 0; i < 3; i++){
    let numeroTartarugasGrupo = gets();
    let velocidadeTartarugas = gets().split(' ');
    
    let maiorVelocidadeTartarugaGrupo = velocidadeTartarugas.reduce((velocidadeMaxima, velocidade) => {
      return Math.max(velocidadeMaxima, velocidade);
    }, 0);
    
    let nivelTartaruga = (velocidade) => {
      if (velocidade < 10)
        return 1;
      else if (velocidade >= 10 && velocidade < 20)
        return 2;
      else
        return 3;
    };
    
    console.log(nivelTartaruga(maiorVelocidadeTartarugaGrupo));
  }