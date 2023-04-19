const faturamento = {
    'SP': 67836.43,
    'RJ': 36678.66,
    'MG': 29229.88,
    'ES': 27165.48,
    'Outros': 19849.53,
  };
  
  const totalFaturamento = Object.values(faturamento).reduce((total, valor) => total + valor);
  
  for (let estado in faturamento) {
    const percentual = ((faturamento[estado] / totalFaturamento) * 100).toFixed(2);
    console.log(`${estado}: ${percentual}%`);
  }
  