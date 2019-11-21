const $entrada = document.getElementById("entrada");
const $saida = document.getElementById("saida");
const limite = 10;

/**
 * Gera um script para ser utilizado no console do javascript da janela do Controle Acadêmico.
 */
function geraCodigo() {
  const entrada = $entrada.value;
  const falta = document.getElementById("falta").value;
  const separador = document.getElementById("separador").value;
  const frequenciasLinhas = entrada.trim().split("\n");
  $saida.value = "";
  $saida.value = `
    const $camposFrequencias = document.querySelectorAll(
      '#tabelaFrequencia input[type="text"][id^="f"]'
    );
    const frequenciasLinhas = ${JSON.stringify(frequenciasLinhas)};
    frequenciasLinhas.forEach((linha, i) => {
      let frequencias = linha.trim().split("${separador}", ${limite});
      frequencias.forEach((frequencia, j) => {
        let index = 10 * i + j;
        $camposFrequencias[index].value = frequencia === "${falta}" ? "F" : "";
      });
    });
  `.trim();
}
