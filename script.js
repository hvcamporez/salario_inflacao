const salarioMinimo = [
  {ano: 2010, salario: 510.00},
  {ano: 2011, salario: 545.00},
  {ano: 2012, salario: 622.00},
  {ano: 2013, salario: 678.00},
  {ano: 2014, salario: 724.00},
  {ano: 2015, salario: 788.00},
  {ano: 2016, salario: 880.00},
  {ano: 2017, salario: 937.00},
  {ano: 2018, salario: 954.00},
  {ano: 2019, salario: 998.00},
  {ano: 2020, salario: 1045.00}
];

const inflacao = [
  {ano: 2010, ipca: 5.91},
  {ano: 2011, ipca: 6.50},
  {ano: 2012, ipca: 5.84},
  {ano: 2013, ipca: 5.91},
  {ano: 2014, ipca: 6.41},
  {ano: 2015, ipca: 10.67},
  {ano: 2016, ipca: 6.29},
  {ano: 2017, ipca: 2.95},
  {ano: 2018, ipca: 3.75},
  {ano: 2019, ipca: 4.31},
  {ano: 2020, ipca: 4.52}
];

function executar() {
  const escolha = Number(document.getElementById("opcao").value);
  const cabecalho = document.getElementById("cabecalho");
  const corpo = document.getElementById("corpo");

  cabecalho.innerHTML = "";
  corpo.innerHTML = "";

  if (escolha === 1) {
    cabecalho.innerHTML = `
      <th>Ano</th>
      <th>Salário Mínimo (R$)</th>
    `;

    salarioMinimo.forEach(item => {
      corpo.innerHTML += `
        <tr>
          <td>${item.ano}</td>
          <td>R$ ${item.salario.toFixed(2).replace(".", ",")}</td>
        </tr>
      `;
    });

  } else if (escolha === 2) {
    cabecalho.innerHTML = `
      <th>Ano</th>
      <th>IPCA (%)</th>
    `;

    inflacao.forEach(item => {
      corpo.innerHTML += `
        <tr>
          <td>${item.ano}</td>
          <td>${item.ipca.toFixed(2).replace(".", ",")}%</td>
        </tr>
      `;
    });

  } else if (escolha === 3) {
    cabecalho.innerHTML = `
      <th>Ano</th>
      <th>Salário (R$)</th>
      <th>Crescimento (%)</th>
      <th>IPCA (%)</th>
    `;

    for (let i = 0; i < salarioMinimo.length; i++) {
      let crescimento = "-";

      if (i > 0) {
        const atual = salarioMinimo[i].salario;
        const anterior = salarioMinimo[i - 1].salario;
        const percentual = ((atual - anterior) / anterior) * 100;
        crescimento = percentual.toFixed(2).replace(".", ",") + "%";
      }

      corpo.innerHTML += `
        <tr>
          <td>${salarioMinimo[i].ano}</td>
          <td>R$ ${salarioMinimo[i].salario.toFixed(2).replace(".", ",")}</td>
          <td>${crescimento}</td>
          <td>${inflacao[i].ipca.toFixed(2).replace(".", ",")}%</td>
        </tr>
      `;
    };

  } else {
    alert("Selecione uma opção válida!");
  }
}
