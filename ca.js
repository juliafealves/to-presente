const $camposFrequencias = document.querySelectorAll(
  '#tabelaFrequencia input[type="text"][id^="f"]'
);

const frequenciasLinhas = [
  "f p p p p p p p p p p p p p p p p",
  "p p p p p p p p p p p p p p p f p",
  "p p p p p f p p p p f p p f p p p",
  "p p p f p p p p p p p p p p p p p",
  "p p f p p p p f p p p p p p p p p",
  "f p p p p p p p f p f p p p p p f",
  "p p f p p f p p p p p p p p p f p",
  "f f p p p p p p f p f p p f p f p",
  "p f p p f p p p p p p p p p p p p",
  "f p p p f p p p p p p f p p f p p",
  "p p p p p p p p p p p p p p p p p",
  "p p p p p p p p p p f f p p p p f",
  "f p p p p f p p p p p p p p p f p",
  "p p p p f f p p f p p f p f p p f",
  "p p p p f p p p f p p p p p p p p",
  "p p p p p p p p p p p p p p p p p",
  "f p p p p p p p p p p p p p p f p",
  "p p p p p p p p p p p p p p p p p",
  "p p p p p p p p f p p p p p p p p",
  "p p p p f p p p p p p p f p f f p",
  "p p p p p p p p p p f p f f f p p",
  "f p p p f p p p p p p f p p p f p",
  "p p p p p p p f p p p p p p p p p",
  "p p p p p p p p p p p p p p p p p",
  "p p f p f p p p f p p p f f p p p",
  "p p p p p p p p p p p p p p p p p",
  "p p p p p f p p f p p f p f p f p",
  "p p p p p p p p p p p f p p f p p"
];

frequenciasLinhas.forEach((linha, i) => {
  let frequencias = linha.trim().split(" ", 10);
  frequencias.forEach((frequencia, j) => {
    console.log(frequencia);
    let index = 10 * i + j;
    $camposFrequencias[index].value = frequencia === "f" ? "F" : "";
  });
});

console.log($camposFrequencias, $camposFrequencias.length);
