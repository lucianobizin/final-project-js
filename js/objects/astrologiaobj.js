// const astrologia = new Astrologia (
//     {id: 1.1, nombre: 'Carta natal', precio: 25, entregable: 'Carta + Documento PDF con especificaciones técnicas', diasParaEntrega: 7},
//     {id: 1.2, nombre: 'Revolucón solar', precio: 20, entregable: 'Diagrama y Documento PDF con especificaciones técnicas', diasParaEntrega: 7},
//     {id: 1.3, nombre: 'Tránsitos', precio: 18, entregable: 'Documento PDF con análisis de influencias', diasParaEntrega: 7},
//     {id: 1.4, nombre: 'Progresiones', precio: 18, entregable: 'Documento PDF con riesgos y oportunidades', diasParaEntrega: 7},
//     {id: 1.5, nombre: 'Sinestrías', precio: 0, entregable: 'Documento PDF explicativo y videos', diasParaEntrega: 7},
//     {id: 1.6, nombre: 'Análisis Completo MBTI', precio: 50, entregable: 'Documento PDF explicativo y videos', diasParaEntrega: 14}
// )

// console.log (cartaNatal, revolucionSolar, transitos, progresiones, sinestrias, analisisCompletoMBTI)
// const resultado = astrologia.filter((elementos) => elementos.nombre==="Sinestrías");
// console.log (resultado)  

const cartaNatal = new Astrologia(1.1, 'Carta natal', 25, 'Carta + Documento PDF con especificaciones técnicas', 14, "cartanatal.jpg");
const revolucionSolar = new Astrologia(1.2, 'Revolucón solar', 20, 'Diagrama y Documento PDF con especificaciones técnicas', 7, "revolucionsolar.jpg");
const transitos = new Astrologia(1.3, 'Tránsitos', 18, 'Documento PDF con análisis de influencias', 7, "transitos.jpg");
const progresiones = new Astrologia(1.4, 'Progresiones', 18, 'Documento PDF con riesgos y oportunidades', 7, "progresiones.jpg");
const sinestrias = new Astrologia(1.5, 'Sinestrías', 20, 'Documento PDF explicativo y videos', 7, "sinestria.jpg");
const analisisCompletoMBTI = new Astrologia (1.6, 'Análisis Completo + MBTI', 50, 'Documento PDF explicativo y videos', 60, "mbti.jpg")

const astrologia = [cartaNatal, revolucionSolar, transitos, progresiones, sinestrias, analisisCompletoMBTI];

