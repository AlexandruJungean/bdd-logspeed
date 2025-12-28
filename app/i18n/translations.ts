export const languages = {
  en: { name: 'English', flag: '🇬🇧' },
  ro: { name: 'Română', flag: '🇷🇴' },
  hu: { name: 'Magyar', flag: '🇭🇺' },
  de: { name: 'Deutsch', flag: '🇩🇪' },
  fr: { name: 'Français', flag: '🇫🇷' },
  it: { name: 'Italiano', flag: '🇮🇹' },
  es: { name: 'Español', flag: '🇪🇸' },
  pl: { name: 'Polski', flag: '🇵🇱' },
  cs: { name: 'Čeština', flag: '🇨🇿' },
} as const;

export type Language = keyof typeof languages;

export const translations: Record<Language, {
  nav: {
    home: string;
    about: string;
    contact: string;
  };
  hero: {
    subtitle: string;
    title: string;
    description: string;
    cta: string;
  };
  about: {
    title: string;
    description: string;
    readMore: string;
  };
  services: {
    title: string;
    description: string;
    stats: {
      shipments: string;
      shipmentsLabel: string;
      trucks: string;
      trucksLabel: string;
      countries: string;
      countriesLabel: string;
    };
  };
  whyUs: {
    title: string;
    items: {
      customerService: { title: string; description: string };
      onTimeDelivery: { title: string; description: string };
      serviceConsultation: { title: string; description: string };
      excellentEmployee: { title: string; description: string };
    };
  };
  howWeWork: {
    title: string;
    intro: string;
    questions: {
      a: string;
      b: string;
      c: string;
      d: string;
      d1: string;
      d2: string;
      e: string;
      f: string;
    };
    outro: string;
    cta: string;
  };
  mission: {
    title: string;
    description: string;
  };
  values: {
    title: string;
    items: {
      professionalism: { title: string; description: string };
      safety: { title: string; description: string };
      innovation: { title: string; description: string };
      sustainability: { title: string; description: string };
    };
  };
  contact: {
    title: string;
    subtitle: string;
    sendMessage: string;
    messageDescription: string;
    phone: string;
    email: string;
    address: string;
    form: {
      name: string;
      phone: string;
      email: string;
      company: string;
      message: string;
      submit: string;
      success: string;
      error: string;
    };
  };
  footer: {
    tagline: string;
    followUs: string;
    quickLinks: string;
    contactInfo: string;
    fiscalInfo: string;
    companyName: string;
    cui: string;
    regNumber: string;
    copyright: string;
  };
  aboutPage: {
    heroTitle: string;
    heroSubtitle: string;
  };
  contactPage: {
    heroTitle: string;
    heroSubtitle: string;
  };
}> = {
  en: {
    nav: {
      home: 'Home',
      about: 'About Us',
      contact: 'Contact',
    },
    hero: {
      subtitle: 'International Transport Company',
      title: 'We deliver supplies everywhere in Europe!',
      description: 'Deliver your supplies quickly and safely - Get a special offer NOW!',
      cta: 'Contact Us',
    },
    about: {
      title: 'About Our Company',
      description: 'BDD Logspeed is a road transport company with a rich experience in providing efficient and reliable logistics solutions. Founded in 2016, we take pride in being a trusted partner for our clients, offering tailored transportation services to the specific needs of each project.',
      readMore: 'Read More',
    },
    services: {
      title: 'Services',
      description: 'Our dedication to providing top-quality services and treating each client with respect and accountability will make you feel pleased with every delivery made by us. We offer road transport services, both nationally and internationally.',
      stats: {
        shipments: '110+',
        shipmentsLabel: 'Shipments per month',
        trucks: '10',
        trucksLabel: 'Trucks',
        countries: '12',
        countriesLabel: 'Countries in contact with',
      },
    },
    whyUs: {
      title: 'Why Work With Us?',
      items: {
        customerService: {
          title: 'Customer Service',
          description: 'We are available to you by telephone and provide clarity in case of questions.',
        },
        onTimeDelivery: {
          title: 'On Time Delivery',
          description: 'Clients are satisfied with our clean delivery in the desired time window.',
        },
        serviceConsultation: {
          title: 'Service Consultation',
          description: 'We give you feedback to your transport inquiries as quick as possible.',
        },
        excellentEmployee: {
          title: 'Excellent Employees',
          description: "Our representatives and drivers are very kind and 'easy to work with' type of individuals.",
        },
      },
    },
    howWeWork: {
      title: 'How Do We Work?',
      intro: 'In order to get the best quotation, please provide us with additional information about the transport:',
      questions: {
        a: 'What do you have to transport?',
        b: 'What are the loading and delivery locations?',
        c: 'When will the goods be ready for pickup?',
        d: 'Is the load palletized or bulk?',
        d1: 'If palletized, how many pallets are there?',
        d2: 'If bulk, how many meters of floor does it occupy and how many cubic meters does the goods have?',
        e: 'What is the weight of the goods?',
        f: 'Other relevant information?',
      },
      outro: 'Afterward, our colleagues will return with a quotation along with the possibility of uploading. If you agree to the price and terms, we will send a vehicle to the loading.',
      cta: 'Request a Quotation',
    },
    mission: {
      title: 'Our Mission',
      description: 'Our mission is to lead the road transport industry through operational excellence, maximum safety, and customer satisfaction. We are committed to delivering goods promptly and with integrity, ensuring that each transport is a seamless experience for our clients.',
    },
    values: {
      title: 'Our Values',
      items: {
        professionalism: {
          title: 'Professionalism',
          description: 'We are dedicated to providing top-quality services, treating each client with respect and accountability.',
        },
        safety: {
          title: 'Safety',
          description: 'We prioritize the safety of goods and all participants in the transportation process, implementing the highest security standards.',
        },
        innovation: {
          title: 'Innovation',
          description: 'We continually seek innovative solutions to enhance the efficiency and performance of our operations.',
        },
        sustainability: {
          title: 'Sustainability',
          description: 'We are committed to reducing our environmental impact, adopting sustainable and energy-efficient practices.',
        },
      },
    },
    contact: {
      title: 'Contact Us',
      subtitle: 'Send us a message!',
      sendMessage: 'Send Us a Message',
      messageDescription: 'You can request us a quotation or send us your CV, using the following contact methods:',
      phone: 'Phone',
      email: 'Email',
      address: 'Address',
      form: {
        name: 'Full Name',
        phone: 'Phone Number',
        email: 'Email Address',
        company: 'Company Name (optional)',
        message: 'Your Message',
        submit: 'Send Message',
        success: 'Message sent successfully! We will get back to you soon.',
        error: 'Failed to send message. Please try again.',
      },
    },
    footer: {
      tagline: 'The Performance-Dedicated Road Transport Company. Services tailored to your needs, delivered with success.',
      followUs: 'Follow Us',
      quickLinks: 'Quick Links',
      contactInfo: 'Contact Info',
      fiscalInfo: 'Fiscal Information',
      companyName: 'S.C. BE DOUBLE D LOGSPEED S.R.L.',
      cui: 'CUI',
      regNumber: 'Reg. No.',
      copyright: '© 2025 BDD Logspeed. All rights reserved.',
    },
    aboutPage: {
      heroTitle: 'About Us',
      heroSubtitle: 'Who we are and what we are about!',
    },
    contactPage: {
      heroTitle: 'Contact Us',
      heroSubtitle: 'Send us a message!',
    },
  },
  ro: {
    nav: {
      home: 'Acasă',
      about: 'Despre Noi',
      contact: 'Contact',
    },
    hero: {
      subtitle: 'Companie de Transport Internațional',
      title: 'Livrăm mărfuri oriunde în Europa!',
      description: 'Livrați mărfurile rapid și în siguranță - Obțineți o ofertă specială ACUM!',
      cta: 'Contactați-ne',
    },
    about: {
      title: 'Despre Compania Noastră',
      description: 'BDD Logspeed este o companie de transport rutier cu o experiență bogată în furnizarea de soluții logistice eficiente și fiabile. Înființată în 2016, suntem mândri să fim un partener de încredere pentru clienții noștri, oferind servicii de transport adaptate nevoilor specifice ale fiecărui proiect.',
      readMore: 'Citește Mai Mult',
    },
    services: {
      title: 'Servicii',
      description: 'Dedicarea noastră pentru furnizarea de servicii de calitate superioară și tratarea fiecărui client cu respect și responsabilitate vă va face să fiți mulțumit de fiecare livrare făcută de noi. Oferim servicii de transport rutier, atât național cât și internațional.',
      stats: {
        shipments: '110+',
        shipmentsLabel: 'Livrări pe lună',
        trucks: '10',
        trucksLabel: 'Camioane',
        countries: '12',
        countriesLabel: 'Țări în contact',
      },
    },
    whyUs: {
      title: 'De Ce Să Lucrați Cu Noi?',
      items: {
        customerService: {
          title: 'Serviciu Clienți',
          description: 'Suntem disponibili telefonic și oferim claritate în cazul întrebărilor.',
        },
        onTimeDelivery: {
          title: 'Livrare La Timp',
          description: 'Clienții sunt mulțumiți de livrarea noastră în fereastra de timp dorită.',
        },
        serviceConsultation: {
          title: 'Consultanță',
          description: 'Vă oferim feedback la solicitările de transport cât mai rapid posibil.',
        },
        excellentEmployee: {
          title: 'Angajați Excelenți',
          description: 'Reprezentanții și șoferii noștri sunt foarte amabili și ușor de lucrat cu ei.',
        },
      },
    },
    howWeWork: {
      title: 'Cum Lucrăm?',
      intro: 'Pentru a obține cea mai bună cotație, vă rugăm să ne furnizați informații suplimentare despre transport:',
      questions: {
        a: 'Ce aveți de transportat?',
        b: 'Care sunt locațiile de încărcare și livrare?',
        c: 'Când vor fi mărfurile gata pentru ridicare?',
        d: 'Încărcătura este paletizată sau vrac?',
        d1: 'Dacă este paletizată, câți paleți sunt?',
        d2: 'Dacă este vrac, câți metri de podea ocupă și câți metri cubi are marfa?',
        e: 'Care este greutatea mărfurilor?',
        f: 'Alte informații relevante?',
      },
      outro: 'Ulterior, colegii noștri vor reveni cu o cotație împreună cu posibilitatea de încărcare. Dacă sunteți de acord cu prețul și termenii, vom trimite un vehicul la încărcare.',
      cta: 'Solicită o Cotație',
    },
    mission: {
      title: 'Misiunea Noastră',
      description: 'Misiunea noastră este de a conduce industria transportului rutier prin excelență operațională, siguranță maximă și satisfacția clienților. Ne angajăm să livrăm mărfuri prompt și cu integritate, asigurându-ne că fiecare transport este o experiență perfectă pentru clienții noștri.',
    },
    values: {
      title: 'Valorile Noastre',
      items: {
        professionalism: {
          title: 'Profesionalism',
          description: 'Suntem dedicați furnizării de servicii de calitate superioară, tratând fiecare client cu respect și responsabilitate.',
        },
        safety: {
          title: 'Siguranță',
          description: 'Prioritizăm siguranța mărfurilor și a tuturor participanților la procesul de transport, implementând cele mai înalte standarde de securitate.',
        },
        innovation: {
          title: 'Inovație',
          description: 'Căutăm continuu soluții inovatoare pentru a îmbunătăți eficiența și performanța operațiunilor noastre.',
        },
        sustainability: {
          title: 'Sustenabilitate',
          description: 'Ne angajăm să reducem impactul asupra mediului, adoptând practici sustenabile și eficiente energetic.',
        },
      },
    },
    contact: {
      title: 'Contactați-ne',
      subtitle: 'Trimite-ne un mesaj!',
      sendMessage: 'Trimite-ne un Mesaj',
      messageDescription: 'Puteți să ne solicitați o cotație sau să ne trimiteți CV-ul, folosind următoarele metode de contact:',
      phone: 'Telefon',
      email: 'Email',
      address: 'Adresă',
      form: {
        name: 'Nume Complet',
        phone: 'Număr de Telefon',
        email: 'Adresă Email',
        company: 'Numele Companiei (opțional)',
        message: 'Mesajul Dvs.',
        submit: 'Trimite Mesaj',
        success: 'Mesaj trimis cu succes! Vă vom contacta în curând.',
        error: 'Eroare la trimiterea mesajului. Vă rugăm încercați din nou.',
      },
    },
    footer: {
      tagline: 'Compania de Transport Rutier Dedicată Performanței. Servicii adaptate nevoilor dumneavoastră, livrate cu succes.',
      followUs: 'Urmărește-ne',
      quickLinks: 'Linkuri Rapide',
      contactInfo: 'Informații Contact',
      fiscalInfo: 'Informații Fiscale',
      companyName: 'S.C. BE DOUBLE D LOGSPEED S.R.L.',
      cui: 'CUI',
      regNumber: 'Nr. Înreg.',
      copyright: '© 2025 BDD Logspeed. Toate drepturile rezervate.',
    },
    aboutPage: {
      heroTitle: 'Despre Noi',
      heroSubtitle: 'Cine suntem și despre ce suntem!',
    },
    contactPage: {
      heroTitle: 'Contact',
      heroSubtitle: 'Trimite-ne un mesaj!',
    },
  },
  hu: {
    nav: {
      home: 'Főoldal',
      about: 'Rólunk',
      contact: 'Kapcsolat',
    },
    hero: {
      subtitle: 'Nemzetközi Szállítmányozási Cég',
      title: 'Szállítunk Európa minden pontjára!',
      description: 'Szállítsa áruit gyorsan és biztonságosan - Kérjen speciális ajánlatot MOST!',
      cta: 'Kapcsolat',
    },
    about: {
      title: 'Cégünkről',
      description: 'A BDD Logspeed közúti szállítmányozási vállalat gazdag tapasztalattal rendelkezik a hatékony és megbízható logisztikai megoldások nyújtásában. 2016-ban alapítottuk, és büszkék vagyunk arra, hogy megbízható partnerei lehetünk ügyfeleinknek, egyedi szállítási szolgáltatásokat kínálva minden projekt specifikus igényeire.',
      readMore: 'Tovább',
    },
    services: {
      title: 'Szolgáltatások',
      description: 'A minőségi szolgáltatások iránti elkötelezettségünk és minden ügyfél tiszteletteljes és felelősségteljes kezelése elégedetté teszi Önt minden szállításunkkal. Közúti szállítási szolgáltatásokat kínálunk, belföldi és nemzetközi szinten egyaránt.',
      stats: {
        shipments: '110+',
        shipmentsLabel: 'Szállítás havonta',
        trucks: '10',
        trucksLabel: 'Teherautó',
        countries: '12',
        countriesLabel: 'Ország',
      },
    },
    whyUs: {
      title: 'Miért Válasszon Minket?',
      items: {
        customerService: {
          title: 'Ügyfélszolgálat',
          description: 'Telefonon elérhetők vagyunk és kérdések esetén világos válaszokat adunk.',
        },
        onTimeDelivery: {
          title: 'Időben Szállítás',
          description: 'Ügyfeleink elégedettek a kívánt időablakban történő szállítással.',
        },
        serviceConsultation: {
          title: 'Tanácsadás',
          description: 'A lehető leggyorsabban visszajelzést adunk szállítási kérdéseire.',
        },
        excellentEmployee: {
          title: 'Kiváló Munkatársak',
          description: 'Képviselőink és sofőrjeink nagyon kedvesek és könnyen együttműködők.',
        },
      },
    },
    howWeWork: {
      title: 'Hogyan Dolgozunk?',
      intro: 'A legjobb árajánlat érdekében kérjük, adjon meg további információkat a szállításról:',
      questions: {
        a: 'Mit kell szállítani?',
        b: 'Mik a rakodási és szállítási helyszínek?',
        c: 'Mikor lesz készen az áru felvételre?',
        d: 'Az áru raklapos vagy ömlesztett?',
        d1: 'Ha raklapos, hány raklap van?',
        d2: 'Ha ömlesztett, hány méter padlóterületet foglal el és hány köbméter az áru?',
        e: 'Mennyi az áru súlya?',
        f: 'Egyéb releváns információ?',
      },
      outro: 'Ezt követően kollégáink visszatérnek egy árajánlattal a feltöltés lehetőségével együtt. Ha egyetért az árral és a feltételekkel, járművet küldünk a rakodáshoz.',
      cta: 'Árajánlat Kérése',
    },
    mission: {
      title: 'Küldetésünk',
      description: 'Küldetésünk, hogy a közúti szállítási iparágat operatív kiválósággal, maximális biztonsággal és ügyfél-elégedettséggel vezessük. Elkötelezettek vagyunk az áruk gyors és tisztességes szállítása mellett, biztosítva, hogy minden szállítás zökkenőmentes élmény legyen ügyfeleink számára.',
    },
    values: {
      title: 'Értékeink',
      items: {
        professionalism: {
          title: 'Professzionalizmus',
          description: 'Elkötelezettek vagyunk a kiváló minőségű szolgáltatások nyújtása mellett, minden ügyfelet tisztelettel és felelősséggel kezelve.',
        },
        safety: {
          title: 'Biztonság',
          description: 'Prioritásként kezeljük az áruk és a szállítási folyamat összes résztvevőjének biztonságát, a legmagasabb biztonsági szabványokat alkalmazva.',
        },
        innovation: {
          title: 'Innováció',
          description: 'Folyamatosan innovatív megoldásokat keresünk működésünk hatékonyságának és teljesítményének növelésére.',
        },
        sustainability: {
          title: 'Fenntarthatóság',
          description: 'Elkötelezettek vagyunk környezeti hatásunk csökkentése mellett, fenntartható és energiahatékony gyakorlatokat alkalmazva.',
        },
      },
    },
    contact: {
      title: 'Kapcsolat',
      subtitle: 'Küldjön üzenetet!',
      sendMessage: 'Küldjön Üzenetet',
      messageDescription: 'Kérhet tőlünk árajánlatot vagy elküldheti önéletrajzát az alábbi kapcsolatfelvételi módokon:',
      phone: 'Telefon',
      email: 'Email',
      address: 'Cím',
      form: {
        name: 'Teljes Név',
        phone: 'Telefonszám',
        email: 'Email Cím',
        company: 'Cégnév (opcionális)',
        message: 'Üzenete',
        submit: 'Üzenet Küldése',
        success: 'Üzenet sikeresen elküldve! Hamarosan felvesszük Önnel a kapcsolatot.',
        error: 'Hiba az üzenet küldésekor. Kérjük, próbálja újra.',
      },
    },
    footer: {
      tagline: 'A Teljesítmény-Elkötelezett Közúti Szállítmányozási Cég. Az Ön igényeire szabott szolgáltatások, sikerrel szállítva.',
      followUs: 'Kövessen Minket',
      quickLinks: 'Gyors Linkek',
      contactInfo: 'Elérhetőség',
      fiscalInfo: 'Cégadatok',
      companyName: 'S.C. BE DOUBLE D LOGSPEED S.R.L.',
      cui: 'Adószám',
      regNumber: 'Cégj. sz.',
      copyright: '© 2025 BDD Logspeed. Minden jog fenntartva.',
    },
    aboutPage: {
      heroTitle: 'Rólunk',
      heroSubtitle: 'Kik vagyunk és mi a célunk!',
    },
    contactPage: {
      heroTitle: 'Kapcsolat',
      heroSubtitle: 'Küldjön üzenetet!',
    },
  },
  de: {
    nav: {
      home: 'Startseite',
      about: 'Über Uns',
      contact: 'Kontakt',
    },
    hero: {
      subtitle: 'Internationales Transportunternehmen',
      title: 'Wir liefern überall in Europa!',
      description: 'Liefern Sie Ihre Waren schnell und sicher - Holen Sie sich JETZT ein Sonderangebot!',
      cta: 'Kontaktieren Sie Uns',
    },
    about: {
      title: 'Über Unser Unternehmen',
      description: 'BDD Logspeed ist ein Straßentransportunternehmen mit umfangreicher Erfahrung in der Bereitstellung effizienter und zuverlässiger Logistiklösungen. Gegründet im Jahr 2016, sind wir stolz darauf, ein vertrauenswürdiger Partner für unsere Kunden zu sein und maßgeschneiderte Transportdienstleistungen für die spezifischen Bedürfnisse jedes Projekts anzubieten.',
      readMore: 'Mehr Lesen',
    },
    services: {
      title: 'Dienstleistungen',
      description: 'Unser Engagement für erstklassige Dienstleistungen und die respektvolle und verantwortungsvolle Behandlung jedes Kunden wird Sie mit jeder von uns durchgeführten Lieferung zufriedenstellen. Wir bieten Straßentransportdienstleistungen sowohl national als auch international an.',
      stats: {
        shipments: '110+',
        shipmentsLabel: 'Sendungen pro Monat',
        trucks: '10',
        trucksLabel: 'LKWs',
        countries: '12',
        countriesLabel: 'Länder',
      },
    },
    whyUs: {
      title: 'Warum Mit Uns Arbeiten?',
      items: {
        customerService: {
          title: 'Kundenservice',
          description: 'Wir sind telefonisch erreichbar und sorgen bei Fragen für Klarheit.',
        },
        onTimeDelivery: {
          title: 'Pünktliche Lieferung',
          description: 'Kunden sind zufrieden mit unserer sauberen Lieferung im gewünschten Zeitfenster.',
        },
        serviceConsultation: {
          title: 'Beratung',
          description: 'Wir geben Ihnen so schnell wie möglich Feedback zu Ihren Transportanfragen.',
        },
        excellentEmployee: {
          title: 'Exzellente Mitarbeiter',
          description: 'Unsere Vertreter und Fahrer sind sehr freundlich und einfach in der Zusammenarbeit.',
        },
      },
    },
    howWeWork: {
      title: 'Wie Arbeiten Wir?',
      intro: 'Um das beste Angebot zu erhalten, geben Sie uns bitte zusätzliche Informationen zum Transport:',
      questions: {
        a: 'Was müssen Sie transportieren?',
        b: 'Wo sind die Lade- und Lieferorte?',
        c: 'Wann sind die Waren zur Abholung bereit?',
        d: 'Ist die Ladung palettiert oder Schüttgut?',
        d1: 'Wenn palettiert, wie viele Paletten sind es?',
        d2: 'Wenn Schüttgut, wie viele Meter Bodenfläche nimmt es ein und wie viele Kubikmeter hat die Ware?',
        e: 'Was ist das Gewicht der Waren?',
        f: 'Andere relevante Informationen?',
      },
      outro: 'Danach werden unsere Kollegen mit einem Angebot zusammen mit der Möglichkeit zum Hochladen zurückkehren. Wenn Sie mit dem Preis und den Bedingungen einverstanden sind, senden wir ein Fahrzeug zur Beladung.',
      cta: 'Angebot Anfordern',
    },
    mission: {
      title: 'Unsere Mission',
      description: 'Unsere Mission ist es, die Straßentransportbranche durch operative Exzellenz, maximale Sicherheit und Kundenzufriedenheit zu führen. Wir sind verpflichtet, Waren prompt und integer zu liefern und sicherzustellen, dass jeder Transport ein nahtloses Erlebnis für unsere Kunden ist.',
    },
    values: {
      title: 'Unsere Werte',
      items: {
        professionalism: {
          title: 'Professionalität',
          description: 'Wir sind der Bereitstellung von Dienstleistungen höchster Qualität gewidmet und behandeln jeden Kunden mit Respekt und Verantwortung.',
        },
        safety: {
          title: 'Sicherheit',
          description: 'Wir priorisieren die Sicherheit der Waren und aller Teilnehmer am Transportprozess und implementieren die höchsten Sicherheitsstandards.',
        },
        innovation: {
          title: 'Innovation',
          description: 'Wir suchen kontinuierlich nach innovativen Lösungen, um die Effizienz und Leistung unserer Abläufe zu verbessern.',
        },
        sustainability: {
          title: 'Nachhaltigkeit',
          description: 'Wir sind bestrebt, unsere Umweltauswirkungen zu reduzieren und nachhaltige und energieeffiziente Praktiken anzuwenden.',
        },
      },
    },
    contact: {
      title: 'Kontakt',
      subtitle: 'Senden Sie uns eine Nachricht!',
      sendMessage: 'Senden Sie Uns Eine Nachricht',
      messageDescription: 'Sie können uns ein Angebot anfordern oder uns Ihren Lebenslauf senden, über folgende Kontaktmethoden:',
      phone: 'Telefon',
      email: 'E-Mail',
      address: 'Adresse',
      form: {
        name: 'Vollständiger Name',
        phone: 'Telefonnummer',
        email: 'E-Mail-Adresse',
        company: 'Firmenname (optional)',
        message: 'Ihre Nachricht',
        submit: 'Nachricht Senden',
        success: 'Nachricht erfolgreich gesendet! Wir werden uns bald bei Ihnen melden.',
        error: 'Fehler beim Senden der Nachricht. Bitte versuchen Sie es erneut.',
      },
    },
    footer: {
      tagline: 'Das leistungsorientierte Straßentransportunternehmen. Dienstleistungen, die auf Ihre Bedürfnisse zugeschnitten sind, erfolgreich geliefert.',
      followUs: 'Folgen Sie Uns',
      quickLinks: 'Schnelllinks',
      contactInfo: 'Kontaktinfo',
      fiscalInfo: 'Unternehmensdaten',
      companyName: 'S.C. BE DOUBLE D LOGSPEED S.R.L.',
      cui: 'Steuernr.',
      regNumber: 'Reg.-Nr.',
      copyright: '© 2025 BDD Logspeed. Alle Rechte vorbehalten.',
    },
    aboutPage: {
      heroTitle: 'Über Uns',
      heroSubtitle: 'Wer wir sind und wofür wir stehen!',
    },
    contactPage: {
      heroTitle: 'Kontakt',
      heroSubtitle: 'Senden Sie uns eine Nachricht!',
    },
  },
  fr: {
    nav: {
      home: 'Accueil',
      about: 'À Propos',
      contact: 'Contact',
    },
    hero: {
      subtitle: 'Entreprise de Transport International',
      title: 'Nous livrons partout en Europe!',
      description: 'Livrez vos marchandises rapidement et en toute sécurité - Obtenez une offre spéciale MAINTENANT!',
      cta: 'Contactez-Nous',
    },
    about: {
      title: 'À Propos de Notre Entreprise',
      description: 'BDD Logspeed est une entreprise de transport routier avec une riche expérience dans la fourniture de solutions logistiques efficaces et fiables. Fondée en 2016, nous sommes fiers d\'être un partenaire de confiance pour nos clients, offrant des services de transport adaptés aux besoins spécifiques de chaque projet.',
      readMore: 'En Savoir Plus',
    },
    services: {
      title: 'Services',
      description: 'Notre dévouement à fournir des services de qualité supérieure et à traiter chaque client avec respect et responsabilité vous satisfera à chaque livraison effectuée par nous. Nous offrons des services de transport routier, tant nationaux qu\'internationaux.',
      stats: {
        shipments: '110+',
        shipmentsLabel: 'Expéditions par mois',
        trucks: '10',
        trucksLabel: 'Camions',
        countries: '12',
        countriesLabel: 'Pays',
      },
    },
    whyUs: {
      title: 'Pourquoi Travailler Avec Nous?',
      items: {
        customerService: {
          title: 'Service Client',
          description: 'Nous sommes disponibles par téléphone et apportons de la clarté en cas de questions.',
        },
        onTimeDelivery: {
          title: 'Livraison à Temps',
          description: 'Les clients sont satisfaits de notre livraison propre dans la fenêtre de temps souhaitée.',
        },
        serviceConsultation: {
          title: 'Consultation',
          description: 'Nous vous donnons un retour à vos demandes de transport aussi rapidement que possible.',
        },
        excellentEmployee: {
          title: 'Excellents Employés',
          description: 'Nos représentants et chauffeurs sont très aimables et faciles à travailler avec.',
        },
      },
    },
    howWeWork: {
      title: 'Comment Travaillons-Nous?',
      intro: 'Pour obtenir le meilleur devis, veuillez nous fournir des informations supplémentaires sur le transport:',
      questions: {
        a: 'Qu\'avez-vous à transporter?',
        b: 'Quels sont les lieux de chargement et de livraison?',
        c: 'Quand les marchandises seront-elles prêtes pour le ramassage?',
        d: 'La charge est-elle palettisée ou en vrac?',
        d1: 'Si palettisée, combien de palettes y a-t-il?',
        d2: 'Si en vrac, combien de mètres de sol occupe-t-elle et combien de mètres cubes la marchandise a-t-elle?',
        e: 'Quel est le poids des marchandises?',
        f: 'Autres informations pertinentes?',
      },
      outro: 'Par la suite, nos collègues reviendront avec un devis ainsi que la possibilité de téléchargement. Si vous acceptez le prix et les conditions, nous enverrons un véhicule au chargement.',
      cta: 'Demander un Devis',
    },
    mission: {
      title: 'Notre Mission',
      description: 'Notre mission est de diriger l\'industrie du transport routier par l\'excellence opérationnelle, la sécurité maximale et la satisfaction du client. Nous nous engageons à livrer les marchandises rapidement et avec intégrité, en veillant à ce que chaque transport soit une expérience sans faille pour nos clients.',
    },
    values: {
      title: 'Nos Valeurs',
      items: {
        professionalism: {
          title: 'Professionnalisme',
          description: 'Nous sommes dédiés à fournir des services de qualité supérieure, traitant chaque client avec respect et responsabilité.',
        },
        safety: {
          title: 'Sécurité',
          description: 'Nous priorisons la sécurité des marchandises et de tous les participants au processus de transport, en mettant en œuvre les normes de sécurité les plus élevées.',
        },
        innovation: {
          title: 'Innovation',
          description: 'Nous recherchons continuellement des solutions innovantes pour améliorer l\'efficacité et la performance de nos opérations.',
        },
        sustainability: {
          title: 'Durabilité',
          description: 'Nous nous engageons à réduire notre impact environnemental, en adoptant des pratiques durables et écoénergétiques.',
        },
      },
    },
    contact: {
      title: 'Contact',
      subtitle: 'Envoyez-nous un message!',
      sendMessage: 'Envoyez-Nous un Message',
      messageDescription: 'Vous pouvez nous demander un devis ou nous envoyer votre CV, en utilisant les méthodes de contact suivantes:',
      phone: 'Téléphone',
      email: 'Email',
      address: 'Adresse',
      form: {
        name: 'Nom Complet',
        phone: 'Numéro de Téléphone',
        email: 'Adresse Email',
        company: 'Nom de l\'Entreprise (optionnel)',
        message: 'Votre Message',
        submit: 'Envoyer le Message',
        success: 'Message envoyé avec succès! Nous vous recontacterons bientôt.',
        error: 'Échec de l\'envoi du message. Veuillez réessayer.',
      },
    },
    footer: {
      tagline: 'L\'Entreprise de Transport Routier Dédiée à la Performance. Services adaptés à vos besoins, livrés avec succès.',
      followUs: 'Suivez-Nous',
      quickLinks: 'Liens Rapides',
      contactInfo: 'Coordonnées',
      fiscalInfo: 'Informations Fiscales',
      companyName: 'S.C. BE DOUBLE D LOGSPEED S.R.L.',
      cui: 'NIF',
      regNumber: 'N° Reg.',
      copyright: '© 2025 BDD Logspeed. Tous droits réservés.',
    },
    aboutPage: {
      heroTitle: 'À Propos de Nous',
      heroSubtitle: 'Qui nous sommes et ce que nous faisons!',
    },
    contactPage: {
      heroTitle: 'Contact',
      heroSubtitle: 'Envoyez-nous un message!',
    },
  },
  it: {
    nav: {
      home: 'Home',
      about: 'Chi Siamo',
      contact: 'Contatti',
    },
    hero: {
      subtitle: 'Azienda di Trasporto Internazionale',
      title: 'Consegniamo in tutta Europa!',
      description: 'Consegna le tue merci in modo rapido e sicuro - Ottieni un\'offerta speciale ORA!',
      cta: 'Contattaci',
    },
    about: {
      title: 'Chi Siamo',
      description: 'BDD Logspeed è un\'azienda di trasporto su strada con una ricca esperienza nella fornitura di soluzioni logistiche efficienti e affidabili. Fondata nel 2016, siamo orgogliosi di essere un partner di fiducia per i nostri clienti, offrendo servizi di trasporto personalizzati per le esigenze specifiche di ogni progetto.',
      readMore: 'Leggi di Più',
    },
    services: {
      title: 'Servizi',
      description: 'La nostra dedizione nel fornire servizi di alta qualità e trattare ogni cliente con rispetto e responsabilità vi renderà soddisfatti di ogni consegna effettuata da noi. Offriamo servizi di trasporto su strada, sia nazionali che internazionali.',
      stats: {
        shipments: '110+',
        shipmentsLabel: 'Spedizioni al mese',
        trucks: '10',
        trucksLabel: 'Camion',
        countries: '12',
        countriesLabel: 'Paesi',
      },
    },
    whyUs: {
      title: 'Perché Lavorare Con Noi?',
      items: {
        customerService: {
          title: 'Servizio Clienti',
          description: 'Siamo disponibili telefonicamente e forniamo chiarezza in caso di domande.',
        },
        onTimeDelivery: {
          title: 'Consegna Puntuale',
          description: 'I clienti sono soddisfatti della nostra consegna pulita nella finestra temporale desiderata.',
        },
        serviceConsultation: {
          title: 'Consulenza',
          description: 'Vi diamo feedback alle vostre richieste di trasporto il più rapidamente possibile.',
        },
        excellentEmployee: {
          title: 'Dipendenti Eccellenti',
          description: 'I nostri rappresentanti e autisti sono molto gentili e facili da lavorare.',
        },
      },
    },
    howWeWork: {
      title: 'Come Lavoriamo?',
      intro: 'Per ottenere il miglior preventivo, vi preghiamo di fornirci informazioni aggiuntive sul trasporto:',
      questions: {
        a: 'Cosa dovete trasportare?',
        b: 'Quali sono i luoghi di carico e consegna?',
        c: 'Quando saranno le merci pronte per il ritiro?',
        d: 'Il carico è pallettizzato o sfuso?',
        d1: 'Se pallettizzato, quanti pallet ci sono?',
        d2: 'Se sfuso, quanti metri di pavimento occupa e quanti metri cubi ha la merce?',
        e: 'Qual è il peso delle merci?',
        f: 'Altre informazioni rilevanti?',
      },
      outro: 'Successivamente, i nostri colleghi torneranno con un preventivo insieme alla possibilità di caricamento. Se accettate il prezzo e i termini, invieremo un veicolo al caricamento.',
      cta: 'Richiedi un Preventivo',
    },
    mission: {
      title: 'La Nostra Missione',
      description: 'La nostra missione è guidare l\'industria del trasporto su strada attraverso l\'eccellenza operativa, la massima sicurezza e la soddisfazione del cliente. Ci impegniamo a consegnare le merci prontamente e con integrità, assicurando che ogni trasporto sia un\'esperienza senza problemi per i nostri clienti.',
    },
    values: {
      title: 'I Nostri Valori',
      items: {
        professionalism: {
          title: 'Professionalità',
          description: 'Siamo dedicati a fornire servizi di alta qualità, trattando ogni cliente con rispetto e responsabilità.',
        },
        safety: {
          title: 'Sicurezza',
          description: 'Diamo priorità alla sicurezza delle merci e di tutti i partecipanti al processo di trasporto, implementando i più alti standard di sicurezza.',
        },
        innovation: {
          title: 'Innovazione',
          description: 'Cerchiamo continuamente soluzioni innovative per migliorare l\'efficienza e le prestazioni delle nostre operazioni.',
        },
        sustainability: {
          title: 'Sostenibilità',
          description: 'Ci impegniamo a ridurre il nostro impatto ambientale, adottando pratiche sostenibili ed efficienti dal punto di vista energetico.',
        },
      },
    },
    contact: {
      title: 'Contatti',
      subtitle: 'Inviaci un messaggio!',
      sendMessage: 'Inviaci un Messaggio',
      messageDescription: 'Potete richiederci un preventivo o inviarci il vostro CV, utilizzando i seguenti metodi di contatto:',
      phone: 'Telefono',
      email: 'Email',
      address: 'Indirizzo',
      form: {
        name: 'Nome Completo',
        phone: 'Numero di Telefono',
        email: 'Indirizzo Email',
        company: 'Nome Azienda (opzionale)',
        message: 'Il Tuo Messaggio',
        submit: 'Invia Messaggio',
        success: 'Messaggio inviato con successo! Vi contatteremo presto.',
        error: 'Invio del messaggio fallito. Riprova.',
      },
    },
    footer: {
      tagline: 'L\'Azienda di Trasporto su Strada Dedicata alle Prestazioni. Servizi su misura per le vostre esigenze, consegnati con successo.',
      followUs: 'Seguici',
      quickLinks: 'Link Rapidi',
      contactInfo: 'Info Contatti',
      fiscalInfo: 'Dati Fiscali',
      companyName: 'S.C. BE DOUBLE D LOGSPEED S.R.L.',
      cui: 'P.IVA',
      regNumber: 'N. Reg.',
      copyright: '© 2025 BDD Logspeed. Tutti i diritti riservati.',
    },
    aboutPage: {
      heroTitle: 'Chi Siamo',
      heroSubtitle: 'Chi siamo e cosa facciamo!',
    },
    contactPage: {
      heroTitle: 'Contatti',
      heroSubtitle: 'Inviaci un messaggio!',
    },
  },
  es: {
    nav: {
      home: 'Inicio',
      about: 'Nosotros',
      contact: 'Contacto',
    },
    hero: {
      subtitle: 'Empresa de Transporte Internacional',
      title: '¡Entregamos en toda Europa!',
      description: 'Entrega tus suministros de forma rápida y segura - ¡Obtén una oferta especial AHORA!',
      cta: 'Contáctanos',
    },
    about: {
      title: 'Sobre Nuestra Empresa',
      description: 'BDD Logspeed es una empresa de transporte por carretera con una rica experiencia en proporcionar soluciones logísticas eficientes y confiables. Fundada en 2016, nos enorgullece ser un socio de confianza para nuestros clientes, ofreciendo servicios de transporte personalizados a las necesidades específicas de cada proyecto.',
      readMore: 'Leer Más',
    },
    services: {
      title: 'Servicios',
      description: 'Nuestra dedicación a proporcionar servicios de alta calidad y tratar a cada cliente con respeto y responsabilidad te hará sentir satisfecho con cada entrega realizada por nosotros. Ofrecemos servicios de transporte por carretera, tanto nacionales como internacionales.',
      stats: {
        shipments: '110+',
        shipmentsLabel: 'Envíos por mes',
        trucks: '10',
        trucksLabel: 'Camiones',
        countries: '12',
        countriesLabel: 'Países',
      },
    },
    whyUs: {
      title: '¿Por Qué Trabajar Con Nosotros?',
      items: {
        customerService: {
          title: 'Servicio al Cliente',
          description: 'Estamos disponibles por teléfono y proporcionamos claridad en caso de preguntas.',
        },
        onTimeDelivery: {
          title: 'Entrega a Tiempo',
          description: 'Los clientes están satisfechos con nuestra entrega limpia en la ventana de tiempo deseada.',
        },
        serviceConsultation: {
          title: 'Consultoría',
          description: 'Te damos retroalimentación a tus consultas de transporte lo más rápido posible.',
        },
        excellentEmployee: {
          title: 'Excelentes Empleados',
          description: 'Nuestros representantes y conductores son muy amables y fáciles de trabajar.',
        },
      },
    },
    howWeWork: {
      title: '¿Cómo Trabajamos?',
      intro: 'Para obtener la mejor cotización, por favor proporciónanos información adicional sobre el transporte:',
      questions: {
        a: '¿Qué tienes que transportar?',
        b: '¿Cuáles son los lugares de carga y entrega?',
        c: '¿Cuándo estarán las mercancías listas para recoger?',
        d: '¿La carga está paletizada o a granel?',
        d1: 'Si está paletizada, ¿cuántos palets hay?',
        d2: 'Si es a granel, ¿cuántos metros de suelo ocupa y cuántos metros cúbicos tiene la mercancía?',
        e: '¿Cuál es el peso de las mercancías?',
        f: '¿Otra información relevante?',
      },
      outro: 'Posteriormente, nuestros colegas regresarán con una cotización junto con la posibilidad de carga. Si está de acuerdo con el precio y los términos, enviaremos un vehículo a la carga.',
      cta: 'Solicitar Cotización',
    },
    mission: {
      title: 'Nuestra Misión',
      description: 'Nuestra misión es liderar la industria del transporte por carretera a través de la excelencia operativa, la máxima seguridad y la satisfacción del cliente. Estamos comprometidos a entregar mercancías de manera rápida y con integridad, asegurando que cada transporte sea una experiencia perfecta para nuestros clientes.',
    },
    values: {
      title: 'Nuestros Valores',
      items: {
        professionalism: {
          title: 'Profesionalismo',
          description: 'Estamos dedicados a proporcionar servicios de alta calidad, tratando a cada cliente con respeto y responsabilidad.',
        },
        safety: {
          title: 'Seguridad',
          description: 'Priorizamos la seguridad de las mercancías y todos los participantes en el proceso de transporte, implementando los más altos estándares de seguridad.',
        },
        innovation: {
          title: 'Innovación',
          description: 'Buscamos continuamente soluciones innovadoras para mejorar la eficiencia y el rendimiento de nuestras operaciones.',
        },
        sustainability: {
          title: 'Sostenibilidad',
          description: 'Estamos comprometidos a reducir nuestro impacto ambiental, adoptando prácticas sostenibles y eficientes en energía.',
        },
      },
    },
    contact: {
      title: 'Contacto',
      subtitle: '¡Envíanos un mensaje!',
      sendMessage: 'Envíanos un Mensaje',
      messageDescription: 'Puedes solicitarnos una cotización o enviarnos tu CV, utilizando los siguientes métodos de contacto:',
      phone: 'Teléfono',
      email: 'Email',
      address: 'Dirección',
      form: {
        name: 'Nombre Completo',
        phone: 'Número de Teléfono',
        email: 'Correo Electrónico',
        company: 'Nombre de la Empresa (opcional)',
        message: 'Tu Mensaje',
        submit: 'Enviar Mensaje',
        success: '¡Mensaje enviado con éxito! Nos pondremos en contacto pronto.',
        error: 'Error al enviar el mensaje. Por favor, inténtalo de nuevo.',
      },
    },
    footer: {
      tagline: 'La Empresa de Transporte por Carretera Dedicada al Rendimiento. Servicios adaptados a tus necesidades, entregados con éxito.',
      followUs: 'Síguenos',
      quickLinks: 'Enlaces Rápidos',
      contactInfo: 'Info de Contacto',
      fiscalInfo: 'Datos Fiscales',
      companyName: 'S.C. BE DOUBLE D LOGSPEED S.R.L.',
      cui: 'CIF',
      regNumber: 'N° Reg.',
      copyright: '© 2025 BDD Logspeed. Todos los derechos reservados.',
    },
    aboutPage: {
      heroTitle: 'Sobre Nosotros',
      heroSubtitle: '¡Quiénes somos y de qué se trata!',
    },
    contactPage: {
      heroTitle: 'Contacto',
      heroSubtitle: '¡Envíanos un mensaje!',
    },
  },
  pl: {
    nav: {
      home: 'Strona Główna',
      about: 'O Nas',
      contact: 'Kontakt',
    },
    hero: {
      subtitle: 'Międzynarodowa Firma Transportowa',
      title: 'Dostarczamy w całej Europie!',
      description: 'Dostarcz swoje towary szybko i bezpiecznie - Uzyskaj specjalną ofertę TERAZ!',
      cta: 'Skontaktuj się',
    },
    about: {
      title: 'O Naszej Firmie',
      description: 'BDD Logspeed to firma transportu drogowego z bogatym doświadczeniem w dostarczaniu wydajnych i niezawodnych rozwiązań logistycznych. Założona w 2016 roku, jesteśmy dumni z bycia zaufanym partnerem dla naszych klientów, oferując dostosowane usługi transportowe do konkretnych potrzeb każdego projektu.',
      readMore: 'Czytaj Więcej',
    },
    services: {
      title: 'Usługi',
      description: 'Nasze zaangażowanie w świadczenie usług najwyższej jakości i traktowanie każdego klienta z szacunkiem i odpowiedzialnością sprawi, że będziesz zadowolony z każdej dostawy wykonanej przez nas. Oferujemy usługi transportu drogowego, zarówno krajowe, jak i międzynarodowe.',
      stats: {
        shipments: '110+',
        shipmentsLabel: 'Przesyłek miesięcznie',
        trucks: '10',
        trucksLabel: 'Ciężarówek',
        countries: '12',
        countriesLabel: 'Krajów',
      },
    },
    whyUs: {
      title: 'Dlaczego Warto Z Nami Pracować?',
      items: {
        customerService: {
          title: 'Obsługa Klienta',
          description: 'Jesteśmy dostępni telefonicznie i zapewniamy jasność w przypadku pytań.',
        },
        onTimeDelivery: {
          title: 'Dostawa Na Czas',
          description: 'Klienci są zadowoleni z naszej czystej dostawy w żądanym oknie czasowym.',
        },
        serviceConsultation: {
          title: 'Konsultacja',
          description: 'Dajemy Ci informację zwrotną na Twoje zapytania transportowe tak szybko, jak to możliwe.',
        },
        excellentEmployee: {
          title: 'Doskonali Pracownicy',
          description: 'Nasi przedstawiciele i kierowcy są bardzo mili i łatwi we współpracy.',
        },
      },
    },
    howWeWork: {
      title: 'Jak Pracujemy?',
      intro: 'Aby uzyskać najlepszą wycenę, prosimy o podanie dodatkowych informacji o transporcie:',
      questions: {
        a: 'Co musisz przetransportować?',
        b: 'Jakie są miejsca załadunku i dostawy?',
        c: 'Kiedy towar będzie gotowy do odbioru?',
        d: 'Czy ładunek jest paletyzowany czy luzem?',
        d1: 'Jeśli paletyzowany, ile jest palet?',
        d2: 'Jeśli luzem, ile metrów podłogi zajmuje i ile metrów sześciennych ma towar?',
        e: 'Jaka jest waga towaru?',
        f: 'Inne istotne informacje?',
      },
      outro: 'Następnie nasi koledzy wrócą z wyceną wraz z możliwością załadunku. Jeśli zgadzasz się na cenę i warunki, wyślemy pojazd do załadunku.',
      cta: 'Poproś o Wycenę',
    },
    mission: {
      title: 'Nasza Misja',
      description: 'Naszą misją jest prowadzenie branży transportu drogowego poprzez doskonałość operacyjną, maksymalne bezpieczeństwo i satysfakcję klienta. Zobowiązujemy się dostarczać towary szybko i uczciwie, zapewniając, że każdy transport jest bezproblemowym doświadczeniem dla naszych klientów.',
    },
    values: {
      title: 'Nasze Wartości',
      items: {
        professionalism: {
          title: 'Profesjonalizm',
          description: 'Jesteśmy oddani świadczeniu usług najwyższej jakości, traktując każdego klienta z szacunkiem i odpowiedzialnością.',
        },
        safety: {
          title: 'Bezpieczeństwo',
          description: 'Priorytetowo traktujemy bezpieczeństwo towarów i wszystkich uczestników procesu transportowego, wdrażając najwyższe standardy bezpieczeństwa.',
        },
        innovation: {
          title: 'Innowacja',
          description: 'Nieustannie poszukujemy innowacyjnych rozwiązań w celu zwiększenia wydajności i efektywności naszych operacji.',
        },
        sustainability: {
          title: 'Zrównoważony Rozwój',
          description: 'Zobowiązujemy się do zmniejszania naszego wpływu na środowisko, stosując zrównoważone i energooszczędne praktyki.',
        },
      },
    },
    contact: {
      title: 'Kontakt',
      subtitle: 'Wyślij nam wiadomość!',
      sendMessage: 'Wyślij Nam Wiadomość',
      messageDescription: 'Możesz poprosić nas o wycenę lub wysłać nam swoje CV, korzystając z następujących metod kontaktu:',
      phone: 'Telefon',
      email: 'Email',
      address: 'Adres',
      form: {
        name: 'Pełne Imię',
        phone: 'Numer Telefonu',
        email: 'Adres Email',
        company: 'Nazwa Firmy (opcjonalnie)',
        message: 'Twoja Wiadomość',
        submit: 'Wyślij Wiadomość',
        success: 'Wiadomość wysłana pomyślnie! Skontaktujemy się wkrótce.',
        error: 'Nie udało się wysłać wiadomości. Spróbuj ponownie.',
      },
    },
    footer: {
      tagline: 'Firma Transportu Drogowego Dedykowana Wydajności. Usługi dostosowane do Twoich potrzeb, dostarczane z sukcesem.',
      followUs: 'Obserwuj Nas',
      quickLinks: 'Szybkie Linki',
      contactInfo: 'Dane Kontaktowe',
      fiscalInfo: 'Dane Firmowe',
      companyName: 'S.C. BE DOUBLE D LOGSPEED S.R.L.',
      cui: 'NIP',
      regNumber: 'Nr Rej.',
      copyright: '© 2025 BDD Logspeed. Wszelkie prawa zastrzeżone.',
    },
    aboutPage: {
      heroTitle: 'O Nas',
      heroSubtitle: 'Kim jesteśmy i o co nam chodzi!',
    },
    contactPage: {
      heroTitle: 'Kontakt',
      heroSubtitle: 'Wyślij nam wiadomość!',
    },
  },
  cs: {
    nav: {
      home: 'Domů',
      about: 'O Nás',
      contact: 'Kontakt',
    },
    hero: {
      subtitle: 'Mezinárodní Přepravní Společnost',
      title: 'Doručujeme po celé Evropě!',
      description: 'Doručte své zásilky rychle a bezpečně - Získejte speciální nabídku NYNÍ!',
      cta: 'Kontaktujte Nás',
    },
    about: {
      title: 'O Naší Společnosti',
      description: 'BDD Logspeed je společnost silniční dopravy s bohatými zkušenostmi v poskytování efektivních a spolehlivých logistických řešení. Založena v roce 2016, jsme hrdí na to, že jsme důvěryhodným partnerem pro naše klienty, nabízejíce přizpůsobené přepravní služby specifickým potřebám každého projektu.',
      readMore: 'Číst Více',
    },
    services: {
      title: 'Služby',
      description: 'Naše oddanost poskytování špičkových služeb a zacházení s každým klientem s respektem a zodpovědností vás potěší při každé dodávce provedené námi. Nabízíme služby silniční dopravy, jak vnitrostátní, tak mezinárodní.',
      stats: {
        shipments: '110+',
        shipmentsLabel: 'Zásilek měsíčně',
        trucks: '10',
        trucksLabel: 'Nákladních vozidel',
        countries: '12',
        countriesLabel: 'Zemí',
      },
    },
    whyUs: {
      title: 'Proč Pracovat S Námi?',
      items: {
        customerService: {
          title: 'Zákaznický Servis',
          description: 'Jsme vám k dispozici telefonicky a poskytujeme jasnost v případě dotazů.',
        },
        onTimeDelivery: {
          title: 'Dodání Včas',
          description: 'Klienti jsou spokojeni s naší čistou dodávkou v požadovaném časovém okně.',
        },
        serviceConsultation: {
          title: 'Konzultace',
          description: 'Dáváme vám zpětnou vazbu k vašim přepravním dotazům co nejrychleji.',
        },
        excellentEmployee: {
          title: 'Vynikající Zaměstnanci',
          description: 'Naši zástupci a řidiči jsou velmi milí a snadno se s nimi spolupracuje.',
        },
      },
    },
    howWeWork: {
      title: 'Jak Pracujeme?',
      intro: 'Pro získání nejlepší nabídky nám prosím poskytněte další informace o přepravě:',
      questions: {
        a: 'Co potřebujete přepravit?',
        b: 'Jaká jsou místa nakládky a dodání?',
        c: 'Kdy bude zboží připraveno k vyzvednutí?',
        d: 'Je náklad paletizovaný nebo volně ložený?',
        d1: 'Pokud je paletizovaný, kolik je palet?',
        d2: 'Pokud je volně ložený, kolik metrů podlahy zabírá a kolik kubických metrů má zboží?',
        e: 'Jaká je hmotnost zboží?',
        f: 'Jiné relevantní informace?',
      },
      outro: 'Poté se naši kolegové vrátí s nabídkou spolu s možností nakládky. Pokud souhlasíte s cenou a podmínkami, pošleme vozidlo k nakládce.',
      cta: 'Žádost o Nabídku',
    },
    mission: {
      title: 'Naše Mise',
      description: 'Naší misí je vést odvětví silniční dopravy prostřednictvím provozní excelence, maximální bezpečnosti a spokojenosti zákazníků. Zavazujeme se doručovat zboží rychle a s integritou, zajišťujíce, že každá přeprava je bezproblémovým zážitkem pro naše klienty.',
    },
    values: {
      title: 'Naše Hodnoty',
      items: {
        professionalism: {
          title: 'Profesionalita',
          description: 'Jsme oddáni poskytování služeb nejvyšší kvality, zacházejíce s každým klientem s respektem a zodpovědností.',
        },
        safety: {
          title: 'Bezpečnost',
          description: 'Upřednostňujeme bezpečnost zboží a všech účastníků přepravního procesu, implementujíce nejvyšší bezpečnostní standardy.',
        },
        innovation: {
          title: 'Inovace',
          description: 'Neustále hledáme inovativní řešení pro zvýšení efektivity a výkonu našich operací.',
        },
        sustainability: {
          title: 'Udržitelnost',
          description: 'Zavazujeme se snižovat náš dopad na životní prostředí, přijímajíce udržitelné a energeticky účinné postupy.',
        },
      },
    },
    contact: {
      title: 'Kontakt',
      subtitle: 'Pošlete nám zprávu!',
      sendMessage: 'Pošlete Nám Zprávu',
      messageDescription: 'Můžete si od nás vyžádat nabídku nebo nám poslat svůj životopis pomocí následujících kontaktních metod:',
      phone: 'Telefon',
      email: 'Email',
      address: 'Adresa',
      form: {
        name: 'Celé Jméno',
        phone: 'Telefonní Číslo',
        email: 'Emailová Adresa',
        company: 'Název Společnosti (volitelné)',
        message: 'Vaše Zpráva',
        submit: 'Odeslat Zprávu',
        success: 'Zpráva úspěšně odeslána! Brzy vás budeme kontaktovat.',
        error: 'Odeslání zprávy se nezdařilo. Zkuste to prosím znovu.',
      },
    },
    footer: {
      tagline: 'Přepravní Společnost Zaměřená na Výkon. Služby přizpůsobené vašim potřebám, doručené s úspěchem.',
      followUs: 'Sledujte Nás',
      quickLinks: 'Rychlé Odkazy',
      contactInfo: 'Kontaktní Údaje',
      fiscalInfo: 'Firemní Údaje',
      companyName: 'S.C. BE DOUBLE D LOGSPEED S.R.L.',
      cui: 'IČO',
      regNumber: 'Reg. č.',
      copyright: '© 2025 BDD Logspeed. Všechna práva vyhrazena.',
    },
    aboutPage: {
      heroTitle: 'O Nás',
      heroSubtitle: 'Kdo jsme a o čem jsme!',
    },
    contactPage: {
      heroTitle: 'Kontakt',
      heroSubtitle: 'Pošlete nám zprávu!',
    },
  },
};

