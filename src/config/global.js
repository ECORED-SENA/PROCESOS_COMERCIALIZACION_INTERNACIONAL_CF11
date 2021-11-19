export default {
  global: {
    componenteFormativo: 'Planeación y presentación de la propuesta comercial',
    descripcionCurso:
      'Una de las actividades cruciales en la comercialización internacional es la presentación de los productos, pues conocer los clientes, su cultura y forma de negociación garantizará una negociación exitosa y permanente en el tiempo. Mediante el estudio del presente material, se lograrán identificar aspectos relevantes en la presentación de la oferta y la caracterización de los clientes.',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Preparación de la oferta',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Planeación de las campañas promocionales',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Estrategias de promoción',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Desarrollo de la negociación',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Técnicas de negociación',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Modelos de negociación',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'La negociación y comunicación',
            hash: 't_2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo: 'Clientes',
            hash: 't_2_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.5',
            titulo: 'El proceso de decisión de compra de los clientes',
            hash: 't_2_5',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.6',
            titulo: 'Ética en los negocios',
            hash: 't_2_6',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.7',
            titulo: 'Cultura de negociación',
            hash: 't_2_7',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.8',
            titulo: 'Plan y objetivos de la negociación',
            hash: 't_2_8',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.9',
            titulo: 'Contrato',
            hash: 't_2_9',
          },
        ],
      },
    ],
    subMenu: [
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia: 'Acosta, P. (2009). Modelos de negocios',
      link: 'https://issuu.com/acostanp/docs/modelos_de_negocios/2',
    },
    {
      referencia: 'Berlo, D. (1984). El proceso de comunicación. Ateneo.',
      link: '',
    },
    {
      referencia:
        'Czinkota, M. R., y Ronkainen, I. A. (2019). Marketing internacional. Cengage Learning. ',
      link: 'https://www-ebooks7-24-com.bdigital.sena.edu.co/?il=9467',
    },
    {
      referencia: 'Ealde. (2017). Elementos básicos de e-commerce.',
      link: 'https://www.ealde.es/elementos-basicos-ecommerce/',
    },
    {
      referencia:
        'Emocreativos . (2012). Descubriendo nuevas claves sobre el aprendizaje.',
      link:
        'https://emocreativos.com/2012/06/04/diferencia-entre-temperamento-caracter-y-personalidad/',
    },
    {
      referencia:
        'Ferrell, O. (2017). Ética en los negocios: casos y toma de decisiones. Cengage Learning.',
      link: 'https://www-ebooks7-24-com.bdigital.sena.edu.co/?il=3729',
    },
    {
      referencia:
        'Gobierno de Chile. (2014). Gobierno de Chile. www.guiaweb.gob.cl',
      link: '',
    },
    {
      referencia:
        'Kotler, P., y Armstrong, G. (2003). Fundamentos de marketing. Pearson Educación',
      link: '',
    },
    {
      referencia: 'Legiscomex. (2021). Técnicas de negociación. Legiscomex.',
      link: 'https://www-legiscomex-com',
    },
    {
      referencia:
        'Peiró, R. (2017). Merchandising. https://economipedia.com/definiciones/merchandising.html',
      link: '',
    },
    {
      referencia:
        'Ramírez, A. (2016). Comunicación y atención al cliente. McGraw-Hill.',
      link: '',
    },
    {
      referencia:
        'RD Station. (2021). Guía de redes sociales. https://materiales.rdstation.com/guia-redes-sociales',
      link: '',
    },
    {
      referencia:
        'Zapata P., G. A. (2010). Negociación: arte empresarial, los errores que no se deben cometer en una negociación. Ecoe Ediciones',
      link: 'https://www-ebooks7-24-com.bdigital.sena.edu.co/?il=147',
    },
  ],
  glosario: [
    {
      termino: 'MoodBoard',
      significado:
        'conjunto de acciones o actividades para estimular la compra por parte de los clientes en el punto de venta. A veces se conoce en español simplemente como comercialización (Peiró, 2017).',
    },
    {
      termino: 'Panregional',
      significado:
        '“pan” proviene del griego “todo” por lo tanto, panregional hace referencia a todas las regiones en su totalidad.',
    },
    {
      termino: 'Publicidad',
      significado:
        'tipo de comunicación audio y/o visual del marketing que emplea mensajes patrocinados e impersonales para promocionar o vender un producto marca o servicio (Peiró, 2017).',
    },
  ],
  complementario: [
    {
      texto: 'Wix. (2014). Consejos de diseño.',
      tipo: 'Artículo',
      descarga: '/downloads/Anexo_2_consejos_diseno_web.pdf',
    },
    {
      texto: 'Gobierno de Chile. (2014). Gobierno de Chile.',
      tipo: 'Guía',
      descarga: '/downloads/Anexo_3 Definicion_del_sitio_web.pdf',
    },
    {
      texto: 'RD Station. (2021). Guía de redes sociales.',
      tipo: 'Guía',
      descarga: '/downloads/Anexo_5 La_Guia_definitiva_de_Redes_Sociales.pdf',
    },
    {
      texto:
        'Morales, O. (2010). La importancia de la cultura al momento de hacer negocios internacionales.',
      tipo: 'Artículo',
      descarga:
        '/downloads/Anexo_6_La_importancia_de_la_cultura_en_los_negocios_mundiales.pdf',
    },
    {
      texto: 'Acosta, P. (2009). Modelos de negocios.',
      tipo: 'Guía',
      descarga: '/downloads/Anexo_7_Modelos_de_negocios.pdf',
    },
    {
      texto:
        'Pascal, C., A. . (2003).Técnicas de negociación. Sistemas Humanos en Desarrollo S.A. de C.V.',
      tipo: 'Guía',
      descarga: '/downloads/Anexo_8_Tecnicas_de_negociacion.pdf',
    },
    {
      texto:
        'Valdés, P., y Zachariou, D. (2014). El ciclo de venta vs. el ciclo de compra. Inboudcycle.',
      tipo: 'Libro',
      descarga:
        '/downloads/Anexo_4_El_ciclo_de_venta_vs_el_ciclo_de_compra.pdf',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: ['Nombre 1', 'Nombre 2'],
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo Front-End',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
