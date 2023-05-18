export const treatmentsType = [
  { nombre: "Exploración + aletas mordidas", precio: 30 },
  { nombre: "L.B", precio: 40 },
  { nombre: "Estudio periodontal", precio: 80 },
  { nombre: "R.A.R", precio: 85 },
  { nombre: "R.A.R selectivo", precio: 180 },
  { nombre: "Cirugía periodontal", precio: 275 },
  { nombre: "Injerto periodontal", precio: null },
  { nombre: "Regeneración con hueso y membrana", precio: 480 },
  { nombre: "Obturaciones simples y compuestas", precio: 50 },
  { nombre: "Con RPI", precio: 60 },
  { nombre: "Dos obturaciones", precio: 90 },
  { nombre: "Endodoncia uni-birradicular", precio: 150 },
  { nombre: "Endodoncia multirradicular", precio: 180 },
  { nombre: "Reconstrucción+ post", precio: 70 },
  { nombre: "Reendodoncia incisivos", precio: 150 },
  { nombre: "Reendodoncia premolares", precio: 180 },
  { nombre: "Reendodoncia molares", precio: 220 },
  { nombre: "Extracción simple", precio: 50 },
  { nombre: "Extracción + legrado", precio: 60 },
  { nombre: "Extracción + osteotomía", precio: 90 },
  { nombre: "Extracción quirúrgica", precio: null },
  { nombre: "Cordal simple", precio: 90 },
  { nombre: "Cordal semiincluido", precio: 180 },
  { nombre: "Cordal incluido", precio: 250 },
  { nombre: "Apicectomía", precio: 350 },
  { nombre: "Quistectomía", precio: 350 },
  { nombre: "Elevación seno indirecta", precio: 400 },
  { nombre: "Elevación seno bilateral", precio: 1800 },
  { nombre: "Elevación seno directa", precio: 4000 },
  { nombre: "Injertos particulados", precio: "590 a 10000" },
  { nombre: "Regeneraciones", precio: null },
  { nombre: "Prótesis removible parciales hasta 5 piezas", precio: 420 },
  { nombre: "Prótesis removible parciales más de 5 piezas", precio: 470 },
  { nombre: "Prótesis removible completa superior/inferior", precio: 550 },
  { nombre: "Rebase completa", precio: 180 },
  { nombre: "Férula descarga", precio: 260 },
  { nombre: "Base", precio: 400 },
  { nombre: "Esquelético", precio: 55 },
  { nombre: "Provisionales", precio: 60 },
  { nombre: "Funda metal-porcelana", precio: 260 },
  { nombre: "Funda Veeners", precio: 190 },
  { nombre: "Corona sobre implante", precio: 540 },
  { nombre: "Corona de Zirconio", precio: 400 },
  { nombre: "Encerado", precio: 16 },
  { nombre: "Carillas porcelana", precio: 400 },
  { nombre: "Carillas composite", precio: 250 },
  { nombre: "Corona sobre implante (ceramo-metálica)", precio: 540 },
  { nombre: "Implante", precio: 540 },
  { nombre: "Pilar Intermedio", precio: 120 },
  { nombre: "Pónticos", precio: 260 },
  { nombre: "Hibridas sobre implantes en resina", precio: 3200 },
  { nombre: "Hibridas sobre implantes en porcelana", precio: 3800 },
  { nombre: "Suplemento por implante", precio: 250 },
  { nombre: "Sobredentaduras atache", precio: 260 },
  { nombre: "Sobredentaduras cazoleta+teflones", precio: 220 },
  { nombre: "Estructura metálica", precio: 290 },
  { nombre: "Completa", precio: 790 },
  { nombre: "Barra", precio: 1920 },
  { nombre: "Ortodoncia convencional (Ceosa)", precio: 2500 },
  { nombre: "Damon/Camaleón metálicos", precio: 2800 },
  { nombre: "Damon/Camaleón estéticos", precio: 3200 },
  { nombre: "Ortodoncia invisible", precio: "3800 a 4500" },
  { nombre: "Retención fija sup/inf (nueva)", precio: 150 },
  { nombre: "Retención removibles sup/inf (nuevo)", precio: 200 },
  { nombre: "Orthotropics sup e inf", precio: 1200 },
  { nombre: "Orthotropics sup + máscara", precio: 1200 },
  { nombre: "Orthotropics una arcada", precio: 900 },
  { nombre: "Myobrace", precio: 950 },
  { nombre: "Pistas de composite en anteriores", precio: 300 },
  { nombre: "Pistas de composite en posteriores", precio: null },
  { nombre: "Lip-Bumper", precio: null },
  { nombre: "Obturación odontopediatría", precio: 50 },
  { nombre: "Pulpotomía", precio: 50 },
  { nombre: "Pulpectomía", precio: null },
  { nombre: "Extracción diente leche", precio: 20 },
  { nombre: "Extracción diente definitivo", precio: 40 },
  { nombre: "Corona odontopediatría", precio: 95 },
  { nombre: "Mantenedores de espacio", precio: 150 },
  { nombre: "Estética blanqueamiento en clínica", precio: 300 },
  { nombre: "Blanqueamiento domiciliario jeringa", precio: 35 },
  { nombre: "Blanqueamiento domiciliario férula", precio: 60 },
  { nombre: "Carillas porcelana estética", precio: 400 },
  { nombre: "Carillas composite estética", precio: 250 },
  { nombre: "1ª Visita", precio: 0 },
];

export const treatmentsTreeType = [
 
  {
    nombre: "PERIODONCIA",
    value: "PERIODONCIA",
    key: "PERIODONCIA",
    hijos: [
      {
        nombre: "Estudio periodontal: 80 €",
        value: "Estudio periodontal",
        key: "Estudio periodontal",
        precio: 80,
      },
      {
        nombre: "R.A.R: 85 €/cuadrante",
        value: "R.A.R",
        key: "R.A.R",
        precio: 85,
      },
      {
        nombre: "R.A.R selectivo",
        value: "R.A.R selectivo",
        key: "R.A.R selectivo",
        precio: 180,
      },
      {
        nombre: "Cirugía periodontal: 275 €/cuadrante",
        value: "Cirugía periodontal",
        key: "Cirugía periodontal",
        precio: 275,
      },
      {
        nombre: "Regeneración con hueso y membrana: 480 €",
        value: "Regeneración con hueso y membrana",
        key: "Regeneración con hueso y membrana",
        precio: 480,
      },
      {
        nombre: "Injerto periodontal: Variable",
        value: "Injerto periodontal",
        key: "Injerto periodontal",
        precio: null,
      },
    ],
  },
  {
    nombre: "OBTURACIONES [simples y compuestas]",
    value: "OBTURACIONES [simples y compuestas]",
    key: "OBTURACIONES [simples y compuestas]",
    hijos: [
      {
        nombre: "Obturaciones simples y compuestas: 50 €",
        value: "Obturaciones [simples y compuestas]",
        key: "Obturaciones [simples y compuestas]",
        precio: 50,
      },
      { nombre: "Con RPI: 60 €", value: "Con RPI", key: "Con RPI", precio: 60 },
      {
        nombre: "Dos obturaciones: 90 €",
        value: "Dos obturaciones",
        key: "Dos obturaciones",
        precio: 90,
      },
    ],
  },
  {
    nombre: "ENDODONCIA",
    value: "ENDODONCIA",
    key: "ENDODONCIA",
    hijos: [
      {
        nombre: "Uni-birradicular: 150 €",
        value: "Uni-birradicular",
        key: "Uni-birradicular",
        precio: 150,
      },
      {
        nombre: "Multirradicular: 180 €",
        value: "Multirradicular",
        key: "Multirradicular",
        precio: 180,
      },
      {
        nombre: "Reconstrucción + post.: 70 €",
        value: "Reconstrucción + post.",
        key: "Reconstrucción + post.",
        precio: 70,
      },
      {
        nombre: "Reendodoncia - Incisivos: 150 €",
        value: "Reendodoncia - Incisivos",
        key: "Reendodoncia - Incisivos",
        precio: 150,
      },
      {
        nombre: "Reendodoncia - Premolares: 180 €",
        value: "Reendodoncia - Premolares",
        key: "Reendodoncia - Premolares",
        precio: 180,
      },
      {
        nombre: "Reendodoncia - Molares: 220 €",
        value: "Reendodoncia - Molares",
        key: "Reendodoncia - Molares",
        precio: 220,
      },
    ],
  },
  {
    nombre: "EXTRACCIONES",
    value: "EXTRACCIONES",
    key: "EXTRACCIONES",
    hijos: [
      {
        nombre: "Extracción Simple: 50 €",
        value: "Extracción Simple",
        key: "Extracción Simple",
        precio: 50,
      },
      {
        nombre: "Extracción + legrado: 60 €",
        value: "Extracción + legrado",
        key: "Extracción + legrado",
        precio: 60,
      },
      {
        nombre: "Extracción + osteotomía: 90 €",
        value: "Extracción + osteotomía",
        key: "Extracción + osteotomía",
        precio: 90,
      },
     
      {
        nombre: "Cordal simple: 90 €",
        value: "Cordal simple",
        key: "Cordal simple",
        precio: 90,
      },
      {
        nombre: "Cordal semiincluido: 180 €",
        value: "Cordal semiincluido",
        key: "Cordal semiincluido",
        precio: 180,
      },
      {
        nombre: "Cordal incluido: 250 €",
        value: "Cordal incluido",
        key: "Cordal incluido",
        precio: 250,
      },
      {
        nombre: "Extracción Quirúrgica: 90 € o más (variable)",
        value: "Extracción Quirúrgica",
        key: "Extracción Quirúrgica",
        precio: null,
      },
    ],
  },
  {
    nombre: "CIRUGIAS",
    value: "CIRUGIAS",
    key: "CIRUGIAS",
    hijos: [
      {
        nombre: "Apicectomia: 350 €",
        value: "Apicectomia",
        key: "Apicectomia",
        precio: 350,
      },
      {
        nombre: "Quistectomía: 350 €",
        value: "Quistectomía",
        key: "Quistectomía",
        precio: 350,
      },
      {
        nombre: "Elevación seno Indirecta: 400 €",
        value: "Elevación seno Indirecta",
        key: "Elevación seno Indirecta",
        precio: 400,
      },
      {
        nombre: "Elevación seno bilateral: 1800 €",
        value: "Elevación seno bilateral",
        key: "Elevación seno bilateral",
        precio: 1800,
      },
      {
        nombre: "Elevación seno directa: 4000 €",
        value: "Elevación seno directa",
        key: "Elevación seno directa",
        precio: 4000,
      },
      {
        nombre: "Injertos particulados: Variable",
        value: "Injertos particulados",
        key: "Injertos particulados",
        precio: null,
      },
      {
        nombre: "Regeneraciones: Variable",
        value: "Regeneraciones",
        key: "Regeneraciones",
        precio: null,
      },
    ],
  },
  {
    nombre: "PROTESIS REMOVIBLE",
    value: "PROTESIS REMOVIBLE",
    key: "PROTESIS REMOVIBLE",
    hijos: [
      {
        nombre: "Parciales de hasta 5 piezas: 420 €",
        value: "Parciales de hasta 5 piezas",
        key: "Parciales de hasta 5 piezas",
        precio: 420,
      },
      {
        nombre: "Parciales de más de 5 piezas: 470 €",
        value: "Parciales de más de 5 piezas",
        key: "Parciales de más de 5 piezas",
        precio: 470,
      },
      {
        nombre: "Completa superior: 550 €",
        value: "Completa superior",
        key: "Completa superior",
        precio: 550,
      },
      {
        nombre: "Completa inferior: 550 €",
        value: "Completa inferior",
        key: "Completa inferior",
        precio: 550,
      },
      {
        nombre: "Rebase completa: 180 €",
        value: "Rebase completa",
        key: "Rebase completa",
        precio: 180,
      },
      {
        nombre: "Férula descarga: 260 €",
        value: "Férula descarga",
        key: "Férula descarga",
        precio: 260,
      },
      { nombre: "Base: 400 €", value: "Base", key: "Base", precio: 400 },
      {
        nombre: "Esquelético - Pieza: 55 €",
        value: "Esquelético - Pieza",
        key: "Esquelético - Pieza",
        precio: 55,
      },
    ],
  },
  {
    nombre: "PROTESIS FIJA",
    value: "PROTESIS FIJA",
    key: "PROTESIS FIJA",
    hijos: [
      {
        nombre: "Provisionales: 60 €",
        value: "Provisionales",
        key: "Provisionales",
        precio: 60,
      },
      {
        nombre: "Funda metal-porcelana: 260 €",
        value: "Funda metal-porcelana",
        key: "Funda metal-porcelana",
        precio: 260,
      },
      {
        nombre: "Funda Veeners: 190 €",
        value: "Funda Veeners",
        key: "Funda Veeners",
        precio: 190,
      },
      {
        nombre: "Corona sobre implante: 540 €",
        value: "Corona sobre implante",
        key: "Corona sobre implante",
        precio: 540,
      },
      {
        nombre: "Corona de Zirconio: 400 €",
        value: "Corona de Zirconio",
        key: "Corona de Zirconio",
        precio: 400,
      },
      {
        nombre: "Encerado: 16 €/pieza",
        value: "Encerado",
        key: "Encerado",
        precio:16,
      },
      {
        nombre: "Carillas porcelana: 400 €/diente",
        value: "Carillas porcelana",
        key: "Carillas porcelana",
        precio: 400,
      },
      {
        nombre: "Carillas composite: 250 €/diente",
        value: "Carillas composite",
        key: "Carillas composite",
        precio: 250,
      },
    ],
  },
  {
    nombre: "PROTESIS SOBRE IMPLANTES",
    value: "PROTESIS SOBRE IMPLANTES",
    key: "PROTESIS SOBRE IMPLANTES",
    hijos: [
      {
        nombre: "Corona sobre implante (ceramo-metálica): 540 €",
        value: "Corona sobre implante (ceramo-metálica)",
        key: "Corona sobre implante (ceramo-metálica)",
        precio: 540,
      },
      {
        nombre: "Implante: 540 €",
        value: "Implante",
        key: "Implante",
        precio: 540,
      },
      {
        nombre: "Pilar Intermedio: 120 €",
        value: "Pilar Intermedio",
        key: "Pilar Intermedio",
        precio: 120,
      },
      {
        nombre: "Pónticos: 260 €",
        value: "Pónticos",
        key: "Pónticos",
        precio: 260,
      },
      {
        nombre: "Hibridas sobre implantes",
        value: "Hibridas sobre implantes",
        key: "Hibridas sobre implantes",
        hijos: [
          {
            nombre: "En resina: 3.200 € (sobre 4 implantes)",
            value: "En resina",
            key: "En resina",
            precio: 3200,
          },
          {
            nombre: "Porcelana: 3.800 € (sobre 4 implantes)",
            value: "Porcelana",
            key: "Porcelana",
            precio: 3800,
          },
          {
            nombre: "Suplemento por implante: 250 €",
            value: "Suplemento por implante",
            key: "Suplemento por implante",
            precio: 250,
          },
        ],
      },
      {
        nombre: "Sobredentaduras",
        value: "Sobredentaduras",
        key: "Sobredentaduras",
        hijos: [
          {
            nombre: "Cada atache: 260 €",
            value: "Cada atache",
            key: "Cada atache",
            precio: 260,
          },
          {
            nombre: "Cada cazoleta + teflones: 220 €",
            value: "Cada cazoleta + teflones",
            key: "Cada cazoleta + teflones",
            precio: 220,
          },
          {
            nombre: "Estructura metálica: 290 €",
            value: "Estructura metálica",
            key: "Estructura metálica",
            precio: 290,
          },
          {
            nombre: "Completa: 790 €",
            value: "Completa",
            key: "Completa",
            precio: 790,
          },
        ],
      },
      { nombre: "Barra: 19.20 €", value: "Barra", key: "Barra", precio: 20 },
    ],
  },
  {
    nombre: "ORTODONCIA",
    value: "ORTODONCIA",
    key: "ORTODONCIA",
    hijos: [
      {
        nombre: "Convencional (Ceosa): 2500 €",
        value: "Convencional (Ceosa)",
        key: "Convencional (Ceosa)",
        precio: 2500,
      },
      {
        nombre: "Damon / Camaleón metálicos: 2800 €",
        value: "Damon / Camaleónmetálicos",
        key: "Damon / Camaleón metálicos",
        precio: 2800,
      },
      {
        nombre: "Damon / Camaleón estéticos: 3200 €",
        value: "Damon / Camaleón estéticos",
        key: "Damon / Camaleón estéticos",
        precio: 3200,
      },
    
      {
        nombre: "Retención fija sup/inf (nueva): 150 €",
        value: "Retención fija sup/inf (nueva)",
        key: "Retención fija sup/inf (nueva)",
        precio: 150,
      },
      {
        nombre: "Removibles sup/inf (nuevo): 200 €",
        value: "Removibles sup/inf (nuevo)",
        key: "Removibles sup/inf (nuevo)",
        precio: 200,
      },
      {
        nombre: "Orthotropics sup e inf: 1200 €",
        value: "Orthotropics sup e inf",
        key: "Orthotropics sup e inf",
        precio: 1200,
      },
      {
        nombre: "Orthotropics sup + máscara: 1200 €",
        value: "Orthotropics sup + máscara",
        key: "Orthotropics sup + máscara",
        precio: 1200,
      },
      {
        nombre: "Orthotropics una arcada: 900 €",
        value: "Orthotropics una arcada",
        key: "Orthotropics una arcada",
        precio: 900,
      },
      {
        nombre: "Myobrace: 950 €",
        value: "Myobrace",
        key: "Myobrace",
        precio: 950,
      },
      {
        nombre: "Pistas de composite en anteriores: 300 €",
        value: "Pistas de composite en anteriores",
        key: "Pistas de composite en anteriores",
        precio: 300,
      },
      {
        nombre: "Pistas de composite en posteriores:",
        value: "Pistas de composite en posteriores",
        key: "Pistas de composite en posteriores",
        precio: null,
      },
      {
        nombre: "Lip-Bumper:",
        value: "Lip-Bumper",
        key: "Lip-Bumper",
        precio: null,
      },
      {
        nombre: "Ortodoncia invisible: 3800 a 4500 €",
        value: "Ortodoncia invisible",
        key: "Ortodoncia invisible",
        precio: null,
      },
    ],
  },
  {
    nombre: "ODONTOPEDIATRIA",
    value: "ODONTOPEDIATRIA",
    key: "ODONTOPEDIATRIA",
    hijos: [
      {
        nombre: "Obturación: 50 €",
        value: "Obturación",
        key: "Obturación",
        precio: 50,
      },
      {
        nombre: "Pulpotomía: 50 €",
        value: "Pulpotomía",
        key: "Pulpotomía",
        precio: 50,
      },
   
      {
        nombre: "Extracción diente leche: 20 €",
        value: "Extracción diente leche",
        key: "Extracción diente leche",
        precio: 20,
      },
      {
        nombre: "Extracción diente definitivo: 40 €",
        value: "Extracción diente definitivo",
        key: "Extracción diente definitivo",
        precio: 40,
      },
      {
        nombre: "Corona: 95 €",
        value: "Corona",
        key: "Corona95 €",
        precio: 95,
      },
      {
        nombre: "Mantenedores de espacio: 150 €",
        value: "Mantenedores de espacio",
        key: "Mantenedores de espacio",
        precio: 150,
      },
      {
        nombre: "Pulpectomía:",
        value: "Pulpectomía",
        key: "Pulpectomía",
        precio: null,
      },
    ],
  },
  {
    nombre: "ESTÉTICA",
    value: "ESTÉTICA",
    key: "ESTÉTICA",
    hijos: [
      {
        nombre: "Blanqueamiento en clínica: 300 € (4 sesiones)",
        value: "Blanqueamiento en clínica",
        key: "Blanqueamiento en clínica",
        precio: 300,
      },
      {
        nombre: "Blanqueamiento domiciliario:",
        value: "Blanqueamiento domiciliario",
        key: "Blanqueamiento domiciliario",
        hijos: [
          {
            nombre: "35 € cada jeringa",
            value: "35 € cada jeringa",
            key: "35 € cada jeringa",
            precio: 35,
          },
          {
            nombre: "60 € cada férula",
            value: "60 € cada férula",
            key: "60 € cada férula",
            precio: 60,
          },
        ],
      },
      {
        nombre: "Carillas porcelana: 400 €/diente",
        value: "Carillas porcelana",
        key: "Carillas porcelana",
        precio: 400,
      },
      {
        nombre: "Carillas composite: 250 €/diente",
        value: "Carillas composite",
        key: "Carillas composite",
        precio: 250,
      },
    ],
  },
  {
    nombre: "1ª Visita",
    value: "1ª Visita",
    key: "1ª Visita",
    hijos: [
      {
        nombre: "Exploración + aletas mordidas: 30 €",
        value: "Exploración + aletas mordidas",
        key: "Exploración + aletas mordidas",
        precio: 30,
      },
      { nombre: "L.B: 40 €", value: "L.B", key: "L.B", precio: 40 },
    ],
  }
];