const usuarios = [
    {nome:"Pietro", estado: "MG"},
    {nome:"Gabriel", estado: "BH"},
    {nome:"Munhoz", estado: "ST"},
    {nome:"Alex", estado: "MG"},
];

const resultado = usuarios.filter(u => u.estado.includes("MG"));
console.log(resultado);
