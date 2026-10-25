/* =====================================================================
   PORTAL DE SUPERVISIÓN DE ENFERMERÍA · SUH HOSPITAL DE ANTEQUERA
   Datos compartidos por index.html y presentacion.html
   ===================================================================== */
window.SUH = (function () {

  const PROYECTO = {
    supervisor: 'Manuel Isaías Medina Pérez',
    cargo: 'Supervisor de Enfermería · Servicio de Urgencias',
    centro: 'Hospital de Antequera · Área de Gestión Sanitaria Norte de Málaga',
    anio: '2026',
    acsa: 'Certificación ACSA · Nivel Óptimo',
    manual: 'Manual de Estándares de Unidades de Gestión Sanitaria ME 5 1_08 (ACSA, 2022)',
    redes: {
      instagram: 'https://www.instagram.com/suh_antequera_/',
      facebook: 'https://www.facebook.com/p/Suh-Antequera-61568582212569/',
      x: 'https://x.com/saludnortemalag'
    }
  };

  /* ---------- Fotografías (img/fotos/full y img/fotos/thumb) ---------- */
  const AREAS = [
    { slug: 'entrada-urgencias', nombre: 'Entrada de Urgencias', n: 11, texto: 'Acceso peatonal y de transporte sanitario, con circuito diferenciado para ambulancias.' },
    { slug: 'triaje', nombre: 'Triaje', n: 2, texto: 'Clasificación por enfermería con el Sistema Español de Triaje (SET) y web_e-PAT.' },
    { slug: 'sala-de-espera', nombre: 'Sala de espera', n: 4, texto: 'Espera tras triaje con información visible y puesto de admisión.' },
    { slug: 'consultas-de-enfermeria', nombre: 'Consultas de Enfermería', n: 7, texto: 'Puestos de técnicas, tratamientos y cuidados con material normalizado.' },
    { slug: 'consultas-medicas', nombre: 'Consultas médicas', n: 4, texto: 'Consultas de policlínica y circuito polivalente.' },
    { slug: 'sala-de-tratamiento', nombre: 'Sala de tratamiento', n: 3, texto: 'Observación leve en sillones y administración de tratamientos.' },
    { slug: 'pasillo-criticos', nombre: 'Pasillo de Críticos', n: 12, texto: 'Circulación interna protegida que conecta críticos y observación.' },
    { slug: 'criticos', nombre: 'Sala de Críticos', n: 17, texto: 'Tres puestos de críticos con monitorización y dotación según el PNT-URG-CRIT-001.' },
    { slug: 'observacion-grave', nombre: 'Observación grave', n: 12, texto: 'Camas monitorizadas con control de enfermería centralizado.' }
  ];
  const FOTOS = [];
  AREAS.forEach(a => { for (let i = 1; i <= a.n; i++) { const f = `${a.slug}-${String(i).padStart(2, '0')}.jpg`; FOTOS.push({ area: a.slug, nombre: a.nombre, full: 'img/fotos/full/' + f, thumb: 'img/fotos/thumb/' + f }); } });

  /* ---------- Herramientas digitales del servicio ---------- */
  const CATS = {
    personas:   { label: 'Personas y calidad', color: '#7b3fb4' },
    triaje:     { label: 'Triaje y circuitos', color: '#1e5b9c' },
    codigos:    { label: 'Códigos tiempo-dependientes', color: '#c62828' },
    pnt:        { label: 'Protocolos clínicos (PNT)', color: '#0b6f7a' },
    cuidados:   { label: 'Cuidados de enfermería', color: '#007a33' },
    educacion:  { label: 'Educación sanitaria', color: '#e07b24' },
    archivo:    { label: 'Versiones anteriores', color: '#5c6f82' }
  };
  const TOOLS = [
    { id: 'recomendaciones-alta', cat: 'educacion', icon: 'sparkles', t: 'Recomendaciones de Salud y al Alta', v: 'v2 · octubre 2026', d: '21 guías de cuidados al alta y 15 consejos de promoción de la salud con fuentes de evidencia; hoja A4 para el paciente y registro NANDA-NIC-NOC para Diraya.', acsa: ['ES 5 04.01_03', 'ES 5 04.04_00', 'ES 5 03.12_02'], nuevo: true },
    { id: 'educacion-salud', cat: 'educacion', icon: 'book', t: 'Educación para la Salud', v: 'v3', d: 'Generador de hojas de educación sanitaria por motivo de consulta, con origen del contenido (unidad / complemento / borrador), validación y versiones.', acsa: ['ES 5 04.05_00', 'ES 5 03.03_03'] },
    { id: 'acogida', cat: 'personas', icon: 'users', t: 'Acogida a nuevos profesionales', v: 'PG-UAP-01 · v6 · oct 2025', d: 'Guía de estudio del Manual de Acogida del Área, funciones y responsabilidades del Hospital de Antequera y plano de evacuación de Urgencias.', acsa: ['ES 5 01.10_02', 'ES 5 01.12_04', 'ES 5 06.08_03'] },
    { id: 'juego-acreditacion', cat: 'personas', icon: 'trophy', t: 'El Juego de la Acreditación', v: 'ACSA ME 5 1_08', d: 'Gamificación para preparar la visita: 102 puntos del checklist de Calidad, requisitos del Excel de 50 estándares y Manual ME 5 1_08, con casos «¿cumple o no cumple?» y ranking.', acsa: ['ES 5 01.12_04', 'ES 5 01.07_00'] },
    { id: 'triaje', cat: 'triaje', icon: 'triage', t: 'Triaje y asignación de pacientes', v: 'PNT de triaje · v6 · jun 2026', d: 'SET de 5 niveles con web_e-PAT, recorrido del paciente, circuitos asistenciales, códigos, fragilidad (EPADI), violencia de género y criterios de observación.', acsa: ['ES 5 02.01_04', 'ES 5 03.09_03', 'ES 5 03.01_00'] },
    { id: 'codigo-ictus', cat: 'codigos', icon: 'brain', t: 'Código Ictus', v: 'Teleictus (CATI)', d: 'Panel de guardia con cálculo de la ventana terapéutica, fibrinólisis IV y trombectomía, escalas y contraindicaciones.', acsa: ['ES 5 02.01_04', 'ES 5 04.01_03'] },
    { id: 'codigo-sepsis', cat: 'codigos', icon: 'virus', t: 'Código Sepsis', v: 'Actualización 04-may-2026', d: 'Basado en «Actualización Sepsis. Código Sepsis» (Dra. M. Rizo Hoyos). NEWS2 automático, foco, antibioterapia empírica y repaso.', acsa: ['ES 5 02.01_04', 'ES 5 05.06_01'] },
    { id: 'codigo-trauma', cat: 'codigos', icon: 'bandage', t: 'Código Trauma', v: 'PNT 5.1', d: 'Ficha del caso con criterios de activación, TSR, Glasgow, prioridad, ventana del ácido tranexámico y siguiente acción (XABCDE).', acsa: ['ES 5 02.01_04'] },
    { id: 'dolor-toracico', cat: 'codigos', icon: 'heartPulse', t: 'Dolor torácico agudo', v: 'SCACEST v5 · mar 2025 · SCASEST sep 2024', d: 'Criterios ECG, reperfusión y antitrombóticos según los PNT del área; cálculos automáticos y exportación.', acsa: ['ES 5 02.01_04', 'ES 5 04.01_03'] },
    { id: 'sala-criticos', cat: 'pnt', icon: 'monitor', t: 'Sala de Críticos', v: 'PNT-URG-CRIT-001 · v1.0', d: 'Seis fases de actuación, puestos y dotación mínima, evaluación ABCDE, ficha de paciente, revisión de sala y tarjetas de repaso.', acsa: ['ES 5 02.01_04', 'ES 5 06.02_03'] },
    { id: 'gineco-obstetrico', cat: 'pnt', icon: 'baby', t: 'Circuito gineco-obstétrico', v: 'PNT v2 · sep 2026', d: 'Qué hacer según el motivo de consulta, ficha con destino según protocolo y estudio guiado.', acsa: ['ES 5 02.01_04', 'ES 5 03.16_00'] },
    { id: 'fluidoterapia', cat: 'pnt', icon: 'droplet', t: 'Fluidoterapia en Urgencias', v: 'PNT v1.0 · 3 dic 2025', d: 'Herramienta de apoyo al PNT «Uso de la fluidoterapia en Urgencias» (autora: Carmen Gómez Pérez).', acsa: ['ES 5 05.10_00', 'ES 5 05.09_03'] },
    { id: 'contencion', cat: 'pnt', icon: 'shield', t: 'Paciente agitado y contención', v: 'PNT 2024 · PG-CAL-11', d: 'Escalera de actuación de la desescalada verbal a la sujeción mecánica como último recurso; tiempos de revisión y registro.', acsa: ['ES 5 05.06_01', 'ES 5 03.02_03', 'ES 5 06.06_02'] },
    { id: 'dolor-urgencias', cat: 'cuidados', icon: 'gauge', t: 'Dolor en Urgencias', v: 'PNT v1 · 15/12/2025', d: 'Valoración del dolor, fármacos con dosis y precauciones, opioides, dolor oncológico y medidas no farmacológicas.', acsa: ['ES 5 04.06_01'] },
    { id: 'heridas', cat: 'cuidados', icon: 'bandage', t: 'Manejo de Heridas', v: 'Comisión de Heridas AGSNM 2025-2026', d: 'Evaluación de la herida, manejo local TIMERS, catálogo del área, informe de cura y formación.', acsa: ['ES 5 04.01_03', 'ES 5 03.12_02'] },
    { id: 'epadi', cat: 'cuidados', icon: 'person', t: 'Calculadora EPADI', v: 'Fragilidad 0-10', d: 'Índice de fragilidad con edad, Pfeiffer, Barthel, Charlson, Gijón y pluripatología. EPADI ≥ 6 activa el circuito de paciente frágil.', acsa: ['ES 5 03.14_02', 'ES 5 05.09_03'] },
    { id: 'cie9', cat: 'triaje', icon: 'code', t: 'Codificación CIE-9', v: '196 diagnósticos', d: 'Buscador bidireccional diagnóstico ↔ código por aparatos, con favoritos y modos de estudio.', acsa: ['ES 5 03.10_03'] },
    { id: 'educacion-salud-v2', cat: 'archivo', icon: 'archive', t: 'Educación para la Salud (v2)', v: 'versión anterior', d: 'Versión previa del generador de hojas de educación sanitaria.', acsa: [] },
    { id: 'educacion-salud-v1', cat: 'archivo', icon: 'archive', t: 'Educación para la Salud (v1)', v: 'versión inicial', d: 'Primera versión del generador de hojas de educación sanitaria.', acsa: [] },
    { id: 'recomendaciones-alta-v1', cat: 'archivo', icon: 'archive', t: 'Recomendaciones al Alta (v1)', v: 'versión inicial', d: 'Versión inicial del portal de recomendaciones al alta, sustituida por la v2 con evidencia.', acsa: [] }
  ];
  const DOCS = [
    { href: 'docs/memoria-supervision-urgencias-antequera-2026.pdf', t: 'Memoria de Supervisión de Enfermería 2026 (PDF)', d: 'Manuel Isaías Medina Pérez · 21 páginas: resumen ejecutivo, capítulos, DAFO, ACSA, plan 2027 y guion de la presentación.' },
    { href: 'docs/manual-acsa-unidades-gestion-sanitaria-ME5-1_08.pdf', t: 'Manual de Estándares de Unidades de Gestión Sanitaria ME 5 1_08', d: 'Agencia de Calidad Sanitaria de Andalucía · 3 bloques, 6 criterios, 76 estándares.' },
    { href: 'docs/educacion-sanitaria-apps-urgencias.pdf', t: 'Educación sanitaria y apps para pacientes de Urgencias', d: 'Selección práctica de recursos: educación al alta, promoción y prevención, e información del circuito hospitalario.' }
  ];

  /* ---------- Triaje (PNT de triaje v6) ---------- */
  const SET = [
    { p: 1, nombre: 'Prioridad 1', color: '#c62828', min: 0, txt: 'Atención inmediata · sala de Críticos · timbre' },
    { p: 2, nombre: 'Prioridad 2', color: '#e07b24', min: 15, txt: 'Muy urgente · críticos si precisa monitorización' },
    { p: 3, nombre: 'Prioridad 3', color: '#d4a106', min: 60, txt: 'Urgente · circuito polivalente' },
    { p: 4, nombre: 'Prioridad 4', color: '#2e8b57', min: 120, txt: 'Menos urgente · atención básica' },
    { p: 5, nombre: 'Prioridad 5', color: '#1e5b9c', min: 240, txt: 'No urgente · acto único' }
  ];
  const CIRCUITOS = ['Críticos', 'Polivalente', 'Atención básica', 'Traumatológico', 'Pediátrico (< 14 años)', 'Obstétrico-ginecológico'];

  /* ---------- ACSA ME 5 1_08: estructura y evidencias del servicio ---------- */
  const ACSA_NIVELES = [
    { n: 'Avanzado', g1: '> 70 %', g2: '—', g3: '—', txt: 'Más del 70 % del grupo I, incluidos todos los obligatorios.' },
    { n: 'Óptimo', g1: '100 %', g2: '> 40 %', g3: '—', txt: '100 % del grupo I y más del 40 % del grupo II.', actual: true },
    { n: 'Excelente', g1: '100 %', g2: '100 %', g3: '> 40 %', txt: '100 % de los grupos I y II y más del 40 % del grupo III.' }
  ];
  const ACSA = [
    { bloque: 'Bloque 1 · Gestión de la unidad', criterios: [
      { c: 'Criterio 1 · Liderazgo y organización de la unidad', est: [
        ['ES 5 01.01_01', 'I', 'Modelo de gobierno clínico definido', 'Reuniones de gobernanza periódicas, reforzadas tras la auditoría de prevención de riesgos laborales.'],
        ['ES 5 01.05_00', 'I', 'Sistema de gestión documental', 'PNT digitalizados con código, versión y fecha; control de versiones de las herramientas.'],
        ['ES 5 01.07_00', 'II', 'Auditorías internas del plan de calidad', 'Auditorías de dolor y del registro de continuidad de cuidados; Juego de la Acreditación como autoevaluación.'],
        ['ES 5 01.08_02', 'II', 'Memoria anual de actividades', 'Esta memoria de supervisión, publicada en el portal.'],
        ['ES 5 01.10_02', 'I · obligatorio', 'Funciones y responsabilidades de cada puesto', 'Documento «Funciones y responsabilidades» integrado en la herramienta de Acogida.'],
        ['ES 5 01.12_04', 'I', 'Plan de formación según necesidades', 'Acogida PG-UAP-01 v6, tarjetas de repaso en cada PNT y gamificación ACSA.'],
        ['ES 5 01.16_02', 'II', 'Clima laboral como elemento de desarrollo organizativo', 'Plan de mejora del clima laboral derivado de las reuniones de gobernanza post-auditoría PRL.']
      ]},
      { c: 'Criterio 2 · Gestión por procesos asistenciales', est: [
        ['ES 5 02.01_04', 'I · obligatorio', 'Procesos asistenciales implantados', 'Triaje SET, Sala de Críticos, Códigos Ictus, Sepsis, Trauma e Infarto, circuito gineco-obstétrico.'],
        ['ES 5 02.02_03', 'I', 'Cumplimiento de indicadores de procesos', 'Cuadro de indicadores de la memoria con metas propuestas.'],
        ['ES 5 02.03_03', 'II', 'Evaluación de la adhesión a los procesos', 'Fichas de registro de apoyo y revisión de sala de críticos.']
      ]}
    ]},
    { bloque: 'Bloque 2 · Atención centrada en el paciente', criterios: [
      { c: 'Criterio 3 · Derechos del paciente y continuidad asistencial', est: [
        ['ES 5 03.01_00', 'I', 'Humanización de la asistencia', 'Circuito de paciente frágil (EPADI ≥ 6), acompañamiento del cuidador y colores de dependencia en Diraya.'],
        ['ES 5 03.02_03', 'I · obligatorio', 'Intimidad y confidencialidad', 'Consulta 12 para sospecha de violencia de género; herramientas que no almacenan datos de pacientes.'],
        ['ES 5 03.08_02', 'I · obligatorio', 'Accesibilidad e información sobre la unidad', 'Instagram @suh_antequera_ con destacados de Guía de usuario, Derechos, Deberes y Teléfonos.'],
        ['ES 5 03.09_03', 'I', 'Tiempos de respuesta', 'Tiempos máximos del SET (0-15-60-120-240 min); área de mejora en TECLA (espera hasta la clasificación) y TICLA (duración de la clasificación).'],
        ['ES 5 03.11_02', 'I · obligatorio', 'Auditoría de la calidad de los registros de la historia de salud', 'Auditoría del registro de continuidad de cuidados.'],
        ['ES 5 03.12_02', 'I · obligatorio', 'Profesionales de referencia y plan de cuidados', 'Enfermera y médico responsables asignados; informe de continuidad de cuidados al alta.']
      ]},
      { c: 'Criterio 4 · Calidad científico-técnica', est: [
        ['ES 5 04.01_03', 'I', 'Prácticas basadas en la evidencia', 'Recomendaciones al alta con fuentes (GPC, revisiones sistemáticas, organismos oficiales).'],
        ['ES 5 04.04_00', 'II', 'Prevención primaria y secundaria', '15 consejos de promoción de la salud: RCP, ictus, tabaco, actividad física…'],
        ['ES 5 04.05_00', 'I', 'Prevención terciaria', 'Hojas de educación sanitaria por proceso y signos de alarma.'],
        ['ES 5 04.06_01', 'I · obligatorio', 'Abordaje específico del dolor', 'PNT Dolor v1, escalas validadas, información escrita del tratamiento y auditorías de dolor.']
      ]}
    ]},
    { bloque: 'Bloque 3 · Seguridad', criterios: [
      { c: 'Criterio 5 · Seguridad del paciente', est: [
        ['ES 5 05.01_03', 'I · obligatorio', 'Gestión de riesgos', 'Revisión de sala de críticos y detección de incoherencias documentales.'],
        ['ES 5 05.02_03', 'I · obligatorio', 'Notificación de incidentes', 'Cultura de notificación en las reuniones de gobernanza.'],
        ['ES 5 05.05_03', 'I · obligatorio', 'Identificación inequívoca de pacientes', 'Uso de NHC / NUHSA en todas las fichas de apoyo.'],
        ['ES 5 05.06_01', 'I · obligatorio', 'Prácticas seguras', 'Contención mecánica como último recurso, Código Sepsis, prevención de errores.'],
        ['ES 5 05.10_00', 'I · obligatorio', 'Preparación y administración de medicamentos', 'Herramienta de Fluidoterapia según PNT v1.0.']
      ]},
      { c: 'Criterio 6 · Soporte', est: [
        ['ES 5 06.06_02', 'I · obligatorio', 'Riesgos laborales, incluidos los psicosociales', 'Auditoría de prevención de riesgos laborales y plan de acción en gobernanza.'],
        ['ES 5 06.08_03', 'I · obligatorio', 'Actuación ante emergencias', 'Plano de evacuación de Urgencias incluido en la Acogida.'],
        ['ES 5 06.13_02', 'I', 'Caída de sistemas de información', 'Herramientas locales que funcionan sin servidor como respaldo de consulta.'],
        ['ES 5 06.14_03', 'I · obligatorio', 'Protección de datos', 'Las herramientas no guardan ni envían datos de pacientes.']
      ]}
    ]}
  ];

  /* ---------- DAFO ---------- */
  const DAFO = {
    F: { titulo: 'Fortalezas', sub: 'Internas · positivas', color: '#007a33', items: [
      { t: 'Certificación ACSA nivel Óptimo', d: 'Cumplimiento del 100 % de los estándares del grupo I (incluidos los obligatorios) y más del 40 % del grupo II del Manual ME 5 1_08. Reciente visita de evaluación con muy buena experiencia del equipo evaluador.', acsa: 'ME 5 1_08' },
      { t: 'Reuniones de gobernanza tras la auditoría de PRL', d: 'Tras la auditoría de prevención de riesgos laborales, la supervisión impulsa reuniones de gobernanza con los profesionales para analizar riesgos, incluidos los psicosociales, y acordar medidas que mejoran el clima laboral.', acsa: 'ES 5 06.06_02 · ES 5 01.16_02 · ES 5 01.01_01', tool: 'contencion' },
      { t: 'Auditorías de dolor', d: 'Evaluación periódica del registro del dolor con escalas validadas, aplicación del PNT de Dolor (v1, 15/12/2025), información escrita del tratamiento y formación del equipo.', acsa: 'ES 5 04.06_01 (obligatorio)', tool: 'dolor-urgencias' },
      { t: 'Auditoría del registro de continuidad de cuidados', d: 'Revisión de la cumplimentación del informe de continuidad de cuidados al alta y de la asignación de profesionales de referencia.', acsa: 'ES 5 03.12_02 · ES 5 03.11_02', tool: 'recomendaciones-alta' },
      { t: 'Ecosistema digital propio', d: '20 herramientas interactivas construidas a partir de los PNT del área: triaje, códigos tiempo-dependientes, críticos, cuidados y educación sanitaria.', acsa: 'ES 5 01.05_00 · ES 5 02.01_04' },
      { t: 'Triaje estructurado y circuitos definidos', d: 'SET de 5 niveles con web_e-PAT, seis circuitos asistenciales, detección de fragilidad (EPADI ≥ 6) y de violencia de género.', acsa: 'ES 5 02.01_04 · ES 5 03.01_00', tool: 'triaje' },
      { t: 'Plan de acogida y funciones definidas', d: 'Plan PG-UAP-01 v6 (octubre 2025), funciones y responsabilidades por puesto y plano de evacuación.', acsa: 'ES 5 01.10_02', tool: 'acogida' },
      { t: 'Instalaciones renovadas', d: 'Sala de Críticos con tres puestos, observación grave monitorizada y circulación interna protegida.', acsa: 'ES 5 06.01_02' }
    ]},
    D: { titulo: 'Debilidades', sub: 'Internas · a mejorar', color: '#c62828', items: [
      { t: 'Tiempo de TECLA y TICLA', d: 'Área de mejora prioritaria. TECLA es el tiempo de espera hasta la clasificación: lo que espera el paciente desde su llegada hasta que lo clasifican. TICLA es el tiempo de clasificación: lo que dura el triaje. Ambos retrasan la asignación de prioridad y, con ella, la atención de los pacientes más graves. El PNT ya prevé una segunda consulta de triaje en horas de máxima afluencia para acortarlos.', acsa: 'ES 5 03.09_03 · ES 5 02.04_00', mejora: true, tool: 'triaje' },
      { t: 'Cumplimiento variable de tiempos en P3-P5', d: 'El PNT de triaje reconoce que las prioridades 3, 4 y 5 se cumplen en un porcentaje muy alto, pero no siempre, por la demanda asistencial.', acsa: 'ES 5 03.09_03', tool: 'triaje' },
      { t: 'Coherencia documental', d: 'Al digitalizar el PNT de Críticos se detectaron una fecha de aprobación anterior a la de elaboración, una dotación sin destino y erratas, pendientes de aclarar.', acsa: 'ES 5 01.05_00', tool: 'sala-criticos' },
      { t: 'Herramientas sin integración con Diraya', d: 'Las herramientas digitales no se integran con la historia clínica: los datos no se guardan y el registro oficial sigue haciéndose en Diraya Urgencias.', acsa: 'ES 5 03.10_03' },
      { t: 'Varias versiones de un mismo recurso', d: 'Coexisten versiones de Educación para la Salud (v1-v3) y de Recomendaciones al Alta; se necesita un circuito de validación y retirada de versiones.', acsa: 'ES 5 01.05_00', tool: 'educacion-salud' }
    ]},
    O: { titulo: 'Oportunidades', sub: 'Externas · positivas', color: '#1e5b9c', items: [
      { t: 'Camino hacia el nivel Excelente', d: 'El certificado tiene 5 años de vigencia con seguimiento. Avanzar en el grupo III: comparación con otras unidades (ES 5 01.09_03), satisfacción de clientes internos (ES 5 01.17_00), experiencia del paciente (ES 5 02.05_00) e investigación financiada (ES 5 04.08_02).', acsa: 'Grupo III' },
      { t: 'Plan de Humanización del SSPA', d: 'Marco para reforzar el acompañamiento, la intimidad y la atención al paciente frágil y a su cuidador.', acsa: 'ES 5 03.01_00' },
      { t: 'Salud digital ciudadana', d: 'App Salud Andalucía y ClicSalud+ permiten reforzar la información al alta y la continuidad.', acsa: 'ES 5 03.08_02' },
      { t: 'Coordinación con Atención Primaria', d: 'Continuidad de cuidados con las UGC del área (Antequera-Centro, Antequera-Estación, Archidona, Campillos, Mollina) y la Unidad de Residencias.', acsa: 'ES 5 03.16_00 · ES 5 03.17_00', tool: 'heridas' },
      { t: 'Formación innovadora', d: 'Gamificación, tarjetas de repaso y simulación como palancas de aprendizaje del equipo.', acsa: 'ES 5 01.12_04', tool: 'juego-acreditacion' },
      { t: 'Redes sociales del servicio', d: 'Instagram @suh_antequera_ para promoción de la salud, información a la ciudadanía y visibilidad del equipo.', acsa: 'ES 5 03.08_02' }
    ]},
    A: { titulo: 'Amenazas', sub: 'Externas · riesgos', color: '#e07b24', items: [
      { t: 'Presión asistencial y picos estacionales', d: 'Epidemias respiratorias invernales y olas de calor aumentan la demanda y tensionan los tiempos de respuesta.', acsa: 'ES 5 03.09_03' },
      { t: 'Riesgos psicosociales y agresiones', d: 'El entorno de urgencias concentra situaciones de agitación y conflicto que afectan a la seguridad y al bienestar de los profesionales.', acsa: 'ES 5 06.06_02', tool: 'contencion' },
      { t: 'Rotación de profesionales', d: 'Las incorporaciones frecuentes exigen una acogida eficaz para mantener la calidad y la seguridad.', acsa: 'ES 5 01.12_04', tool: 'acogida' },
      { t: 'Caída de sistemas de información', d: 'La dependencia de Diraya y web_e-PAT requiere procedimientos alternativos definidos.', acsa: 'ES 5 06.13_02' },
      { t: 'Envejecimiento y fragilidad', d: 'Aumenta la proporción de pacientes mayores, pluripatológicos y frágiles, con estancias más largas y mayor necesidad de cuidados.', acsa: 'ES 5 03.14_02', tool: 'epadi' }
    ]}
  };
  const CAME = [
    { tipo: 'Mantener', clave: 'F', color: '#007a33', t: 'Consolidar la certificación Óptima', d: 'Seguimiento anual de estándares, autoevaluación con el Juego de la Acreditación y auditorías internas.' },
    { tipo: 'Explotar', clave: 'F+O', color: '#1e5b9c', t: 'De Óptimo a Excelente', d: 'Usar el ecosistema digital y las auditorías como base de proyectos de investigación, benchmarking y experiencia del paciente.' },
    { tipo: 'Afrontar', clave: 'F+A', color: '#e07b24', t: 'Gobernanza frente a riesgos psicosociales', d: 'Las reuniones de gobernanza post-PRL como espacio estable para prevenir agresiones y proteger el clima laboral.' },
    { tipo: 'Corregir', clave: 'D+O', color: '#c62828', t: 'Reducir TECLA y TICLA', d: 'Medición basal desde web_e-PAT, segunda consulta de triaje activada por demanda, formación en SET y auditoría trimestral de los tiempos de triaje.' }
  ];

  /* ---------- Plan de acción e indicadores ---------- */
  const OBJETIVOS = [
    { n: 1, t: 'Reducir TECLA y TICLA en triaje', acc: ['Medir TECLA y TICLA basales por franja horaria desde web_e-PAT', 'Activar la segunda consulta de triaje según la demanda', 'Formación y entrenamiento del equipo de triaje en el SET', 'Auditoría trimestral de tiempos y retorno al equipo'], acsa: 'ES 5 03.09_03' },
    { n: 2, t: 'Consolidar la gobernanza y el clima laboral', acc: ['Reunión de gobernanza mensual con acta y seguimiento', 'Plan de acción derivado de la auditoría PRL', 'Medición del clima laboral bienal', 'Difusión de resultados al equipo'], acsa: 'ES 5 01.16_02 · ES 5 06.06_02' },
    { n: 3, t: 'Auditorías de dolor y continuidad de cuidados', acc: ['Auditoría trimestral de registro del dolor', 'Auditoría del informe de continuidad de cuidados', 'Retroalimentación individual y grupal', 'Sesiones formativas en manejo del dolor'], acsa: 'ES 5 04.06_01 · ES 5 03.12_02' },
    { n: 4, t: 'Gobierno de las herramientas digitales', acc: ['Responsable y fecha de revisión por herramienta', 'Validación clínica antes de uso asistencial', 'Retirada de versiones anteriores', 'Corrección de incoherencias documentales detectadas'], acsa: 'ES 5 01.05_00' },
    { n: 5, t: 'Humanización y educación sanitaria', acc: ['Hoja de recomendaciones al alta con evidencia', 'Circuito de paciente frágil y cuidador', 'Calendario de publicaciones en Instagram', 'Encuesta de experiencia del paciente'], acsa: 'ES 5 03.01_00 · ES 5 02.05_00' },
    { n: 6, t: 'Hacia la certificación Excelente', acc: ['Mapa de estándares del grupo III', 'Comparación de resultados con otras unidades', 'Satisfacción de clientes internos (AP, servicios)', 'Comunicación científica de las innovaciones'], acsa: 'Grupo III' }
  ];
  const INDICADORES = [
    { id: 'i1', t: 'Pacientes con dolor valorado con escala validada', f: 'Pacientes con registro de escala / pacientes auditados × 100', meta: '≥ 90 %', acsa: 'ES 5 04.06_01' },
    { id: 'i2', t: 'Altas con informe de continuidad de cuidados (cuando procede)', f: 'Informes cumplimentados / altas que lo requieren × 100', meta: '≥ 85 %', acsa: 'ES 5 03.12_02' },
    { id: 'i3', t: 'TECLA · tiempo de espera hasta la clasificación', f: 'Minutos desde la llegada (admisión) hasta el inicio del triaje (mediana)', meta: '≤ 10 min', acsa: 'ES 5 03.09_03' },
    { id: 'i4', t: 'TICLA · tiempo de clasificación', f: 'Minutos de duración del triaje, del inicio al fin (mediana)', meta: '≤ 5 min', acsa: 'ES 5 03.09_03' },
    { id: 'i5', t: 'Pacientes P1 atendidos de forma inmediata', f: 'P1 con atención inmediata / total P1 × 100', meta: '100 %', acsa: 'ES 5 03.09_03' },
    { id: 'i6', t: 'Pacientes P2 atendidos en ≤ 15 min', f: 'P2 atendidos en tiempo / total P2 × 100', meta: '100 %', acsa: 'ES 5 03.09_03' },
    { id: 'i7', t: 'Reuniones de gobernanza realizadas', f: 'Reuniones con acta / reuniones programadas', meta: '12 / año', acsa: 'ES 5 01.01_01' },
    { id: 'i8', t: 'Profesionales de nueva incorporación con acogida', f: 'Acogidas completadas / incorporaciones × 100', meta: '100 %', acsa: 'ES 5 01.12_04' },
    { id: 'i9', t: 'Notificaciones de seguridad del paciente', f: 'Número de notificaciones analizadas', meta: 'Tendencia creciente', acsa: 'ES 5 05.02_03' },
    { id: 'i10', t: 'Participación en la encuesta de clima laboral', f: 'Respuestas / profesionales × 100', meta: '≥ 60 %', acsa: 'ES 5 01.16_02' }
  ];

  return { PROYECTO, AREAS, FOTOS, CATS, TOOLS, DOCS, SET, CIRCUITOS, ACSA_NIVELES, ACSA, DAFO, CAME, OBJETIVOS, INDICADORES };
})();
