const alunos = [

    { nome: "Pietro", nota: 6},
    { nome: "Ana", nota: 10 },
    { nome: "Marya", nota: 7},
    { nome: "Alex", nota: 4 },
];

const resultado = alunos.filter(a => a.nota >= 6);
console.log(resultado);
