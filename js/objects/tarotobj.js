// Se crean los servicios ofrecidos de Tarot
const tiradaCasasAstrologicas = new Tarot(4.1, 'Tirada de casas astrológicas', 20, 'Videos, fotos y audios', 7, 0)
const tiradaTarot2Preg = new Tarot(4.2, 'Tirada de tarot 2 preguntas', 10, 'Videos, fotos y audios', 1, 2);
const tiradaTarot3Preg = new Tarot(4.3, 'Tirada de tarot 3 preguntas', 13, 'Videos, fotos y audios', 1, 3);
const tiradaTarot4Preg = new Tarot(4.4, 'Tirada de tarot 4 preguntas', 15, 'Videos, fotos y audios', 1, 4);
const tiradaTarot1hora = new Tarot(4.5, 'Tirada de tarot 1 hora', 15, 'Zoom (reunión virtual)', 1, 4);
const tallerVirtualIntroTarot = new Tarot(4.6, 'Taller virtual de introducción al tarot', 50, 'Videos, fotos y audios', 0, 0);

const tarot = [tiradaCasasAstrologicas, tiradaTarot2Preg, tiradaTarot3Preg, tiradaTarot4Preg, tiradaTarot1hora, tallerVirtualIntroTarot];