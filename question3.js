const faturamentoMensal = {
    "01": 1500,
    "02": 2300,
    "03": 1800,
    "04": 0,
    "05": 3100,
    "06": 2800,
    "07": 2000,
    "08": 0,
    "09": 2200,
    "10": 1900,
    "11": 2500,
    "12": 2900,
    "13": 1800,
    "14": 2200,
    "15": 0,
    "16": 2700,
    "17": 3000,
    "18": 1500,
    "19": 2400,
    "20": 2800,
    "21": 0,
    "22": 2100,
    "23": 2000,
    "24": 2600,
    "25": 3000,
    "26": 1900,
    "27": 2200,
    "28": 2400,
    "29": 2800,
    "30": 2600
  };
  
  const valoresDiarios = Object.values(faturamentoMensal);
  
  const menorValor = Math.min(...valoresDiarios.filter(valor => valor !== 0));
  console.log(`Menor valor de faturamento diário: ${menorValor}`);
  
  const maiorValor = Math.max(...valoresDiarios);
  console.log(`Maior valor de faturamento diário: ${maiorValor}`);

  const valoresDiariosSemZeros = valoresDiarios.filter(valor => valor !== 0);
  const mediaMensal = valoresDiariosSemZeros.reduce((acc, valor) => acc + valor, 0) / valoresDiariosSemZeros.length;
  console.log(mediaMensal);
  

  const diasAcimaDaMedia = valoresDiarios.filter(valor => valor > mediaMensal).length;
  console.log(`Número de dias em que o faturamento diário foi superior à média mensal: ${diasAcimaDaMedia}`);
  