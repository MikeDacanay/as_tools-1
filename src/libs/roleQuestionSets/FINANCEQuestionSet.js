import QuestionObj from '../Models/QuestionObj';

const FINQuestionSet = [
        new QuestionObj({
        questionSet: {
            English: 'How do you manage your financial close process?',
            German: 'Wie läuft der Finanzabschluss ab?',
            French: "Comment gérez-vous votre clôture financière ?",
            Russian: "Как организован процесс управления финансовым закрытием в вашей компании?",
            Turkish: "Finansal kapanış sürecinizi nasıl yönetiyorsunuz?",
            Italian: "Come viene gestito il processo di closing contabile?",
            Spanish: "¿Cómo es la gestión del cierre financiero?",
            PortugueseBR: "Como você gerencia o processo de fechamento financeiro?",
            SpanishLAD: "¿Cómo gestionas el proceso de cierre financiero?",
        },
        answerSet: {
            English: [
                'Inefficient, manually intensive, lots of time spent on adjustments and reconciliations.',
                'Defined process but needs manual reconciliations and "data hand-off" interventions.',
                'Fully automated, clearly defined, relies on automated controls and exception reporting.',
                'Software-driven, touchless process via AI/ML. More time spent analyzing than closing.',
            ],
            German: [
                'Ineffizient, viel manuelle Arbeit, hoher Zeitaufwand für Anpassungen und Abgleiche. ',
                'Festgelegter Prozess, aber mit manuellem Abgleich und manueller Datenübergabe. ',
                'Vollständig automatisiert, klar definiert, basiert auf automatischen Kontrollen und Ausnahmen-Reporting. ',
                'Softwarebasiert, berührungsloser Prozess über KI/ML. Höherer Zeitaufwand für Analyse als für Abschluss.',
            ],
            French: [
                'Manque d’efficacité, trop de tâches manuelles, beaucoup de temps perdu à gérer les ajustements et réconciliations.',
                'Processus bien défini mais comportant encore des tâches manuelles de réconciliation et de transfert des données.',
                'Processus entièrement automatisé et clairement défini, basé sur des contrôles automatiques et un signalement des exceptions. ',
                'Processus sans contact géré par logiciel via l’IA et le ML. Plus de temps passé à l’analyse qu’à la clôture.',
            ],
            Russian: [
                'Неэффективно, многое делается вручную, много времени тратится на корректировки и согласования.  ',
                'Процесс регламентирован, но не автоматизирован, требуются действия по согласованию и передаче данных "из рук в руки".',
                'Процесс автоматизирован и регламентирован, внедрено автоматизированное управление и оперативная отчетность о несоответствиях.',
                'Программно-управляемый процесс с применением искусственного интеллекта и машинного обучения. Необходимо проводить анализ. ',
            ],
            Turkish: [
                'Etkisiz, manuel olarak yoğun, düzeltme ve mutabakatlara çok zaman harcanıyor.',
                'Süreç tanımlı, ancak manuel mutabakatlara ve "veri aktarma" müdahalelerine ihtiyaç duyuyor.',
                'Tamamen otomatik, net bir şekilde tanımlı, otomatik kontrollere ve istisna durum raporlamaya dayalı.',
                'Yazılımla yürütülen, AI/ML üzerinden el değmeden yürüyen bir süreç. Kapatmadan çok analiz etmeye daha fazla zaman ayrılıyor.',
            ],
            Italian: [
                'In modo inefficiente, con molto lavoro manuale e tempo speso per rettifiche e riconciliazioni. ',
                'È un processo definito, ma necessita di riconciliazioni e interventi manuali in fase di chiusura. ',
                'In modo completamente automatizzato, chiaramente definito, con controlli automatizzati e report sulle eccezioni.',
                'È un processo touchless gestito da software tramite IA/ML. Dedichiamo più tempo all\'analisi che alla chiusura. ',
            ],
            Spanish: [
                'Ineficaz, requiere muchos procedimientos manuales, se dedica mucho tiempo a los ajustes y las reconciliaciones.',
                'Un proceso definido, pero que requiere reconciliaciones manuales e intervenciones de transferencia de datos. ',
                'Totalmente automatizada, claramente definida, se desarrolla a partir de controles automatizados e informes de excepciones. ',
                'Basada en software, proceso automatizado a través de IA/AA. Se dedica más tiempo a analizar que a cerrar. ',
            ],
            PortugueseBR: [
                'Ineficiente, dependente de trabalho manual, muito tempo gasto em ajustes e reconciliações. ',
                'Processo definido, mas requer reconciliações manuais e intervenções de "transferência de dados".  ',
                'Totalmente automatizado, claramente definido, conta com controles automatizados e relatórios de exceções.  ',
                'Processo orientado por software, sem contato, via IA/ML. Mais tempo gasto em análise do que no fechamento. ',
            ],
            SpanishLAD: [
                'Ineficiente, manualmente intensivo, requiere mucho tiempo de ajustes y conciliaciones.',
                'Proceso definido, pero necesita conciliaciones manuales e intervenciones de "transferencia de datos".',
                'Totalmente automatizado, claramente definido, se basa en controles automatizados e informes de excepciones. ',
                'Proceso controlado por software a través de tecnologías de IA/ML. Más tiempo dedicado a analizar que a realizar el cierre. ',
            ]
        },
        negCopy: {
            English: 'Q1 FIN COPY english',
            Spanish: 'Q1 FIN COPY spanish',
            Albania: 'Q1 FIN COPY albania',
            Filipino: 'Q1 FIN COPY filipino',
        },
        negLink: {
            English: 'Q1 FIN LINK english',
            Spanish: 'Q1 FIN LINK spanish',
            Albania: 'Q1 FIN LINK albania',
            Filipino: 'Q1 FIN LINK filipino',
        }
    }),
   new QuestionObj({
        questionSet: {
            English: 'How efficient is your current procure-to-pay (P2P) process?',
            German: 'Wie effizient ist der derzeitige Procure-to-Pay-Prozess (P2P)?',
            French: "Quelle est l’efficacité du processus d’achats actuel ?",
            Russian: "Как организованы P2P-процессы, начиная от размещения заказа поставщику и до оплаты?",
            Turkish: "Mevcut alımdan ödemeye (P2P) süreciniz ne kadar verimli?",
            Italian: "Quanto è efficiente il vostro attuale processo di Procure-to-Pay (P2P)?",
            Spanish: "¿Dispone actualmente de un proceso del aprovisionamiento al pago (P2P) eficaz ?",
            PortugueseBR: "Qual o grau de eficiência do seu atual processo procure-to-pay (P2P)?",
            SpanishLAD: "¿Qué tan eficiente es el actual proceso de adquisición a pago (P2P)?",
        },
        answerSet: {
            English: [
                'Manual, mostly informal. P2P process isn’t standard across LOBs and regions.',
                'Higher degree of standardization in LOBs or regions, but not yet enterprise-wide.',
                'Highly automated, effective end-to-end integration across PTP process enterprise-wide.',
                'Fully automated. Automatic matching via AI/ML. Automatic payment if no exceptions found.'
            ],
            German: [
                'Manuell, überwiegend informell. P2P-Prozess ist nicht standardisiert für Bereichsleitungen und Regionen. ',
                'Höheres Maß an Standardisierung für Bereichsleitungen oder Regionen, aber noch nicht unternehmensweit.',
                'Hoch automatisierte, effektive durchgängige Integration unternehmensweit im gesamten PTP-Prozess.',
                'Vollständig automatisiert. Automatischer Abgleich mit KI/ML. Automatische Zahlung, falls keine Ausnahmen vorliegen. ',
            ],
            French: [
                'Le processus d’achat est manuel et en grande partie informel. Il varie en fonction des départements et régions. ',
                'Il est relativement normalisé au niveau des départements ou des régions, mais pas encore appliqué dans toute l’entreprise.',
                'Largement automatisé, efficace et intégré de bout en bout dans toute l’entreprise.',
                'Entièrement automatisé. Rapprochements automatiques gérés par l’IA ou du ML. Le paiement est automatique, sauf exception. ',
            ],
            Russian: [
                'Процессы не формализованы и выполняются вручную. Нет общих стандартов реализации P2P-процессов. ',
                'В подразделениях компании и регионах процессы более стандартизированы, но в масштабах всего предприятия требуются доработки.',
                'Высокоавтоматизированная и эффективная сквозная интеграция P2P-процессов в масштабе предприятия.',
                'Автоматизированы, используется искусственный интеллект и машинное обучение. Автоматический платеж при отсутствии исключений. ',
            ],
            Turkish: [
                'Manuel, çoğunlukla gayriresmî. P2P süreci iş kollarında ve bölgelerde standart değil. ',
                'İş kollarında veya bölgelerde yüksek düzeyde standartlaşma, ancak işletme genelinde değil. ',
                'İşletme genelinde PTP sürecinde son derece otomatik, etkili uçtan uca entegrasyon süreci. ',
                'Tam otomatik. AI/ML üzerinden otomatik eşleme. İstisna olmaması hâlinde otomatik ödeme.',
            ],
            Italian: [
                'Il processo è manuale, per lo più informale. Non è standardizzato nelle LOB e nelle regioni.',
                'Il processo presenta un grado più elevato di standardizzazione nelle LOB o nelle regioni, ma non ancora a livello aziendale.',
                'Possiamo contare su un\'integrazione end-to-end altamente automatizzata ed efficace tramite processo PTP a livello aziendale.',
                'Il processo è interamente automatizzato. Abbinamento automatico tramite IA/ML e pagamenti automatici se non ci sono eccezioni.',
            ],
            Spanish: [
                'Manual, básicamente informal. El proceso PTP no es estándar entre las distintas líneas de negocio y las regiones. ',
                'Alto nivel de estandarización en líneas de negocio o regiones, pero no en toda la empresa por el momento.',
                'Integración completa altamente automatizada y eficaz en todo el proceso PTP para el conjunto de la empresa. ',
                'Completamente automatizado. Asignación automática vía IA/AA. Pago automático si no se detectan excepciones. ',
            ],
            PortugueseBR: [
                'Manual, principalmente informal. O processo P2P não é padrão em LOBs e regiões. ',
                'Maior grau de padronização em LOBs ou regiões, mas ainda não em toda a organização. ',
                'Integração de ponta a ponta altamente automatizada e eficaz no processo P2P em toda a organização. ',
                'Totalmente automatizado. Correspondência automática via IA/ML. Pagamento automático se nenhuma exceção for encontrada. ',
            ],
            SpanishLAD: [
                'Manual, mayormente informal. El proceso P2P no es estándar en todos los LOB y regiones. ',
                'Mayor grado de estandarización en LOB o regiones, pero aún no en toda la empresa. ',
                'Altamente automatizado, integración efectiva en todo el proceso de P2P en toda la empresa. ',
                'Totalmente automatizado. Adaptación automática a través de IA/ML. Pago automático si no se encuentran excepciones. ',
            ]
        },
        negCopy: {
            English: 'Q2 FIN COPY english',
            Spanish: 'Q2 FIN COPY spanish',
            Albania: 'Q2 FIN COPY albania',
            Filipino: 'Q2 FIN COPY filipino',
        },
        negLink: {
            English: 'Q2 FIN LINK english',
            Spanish: 'Q2 FIN LINK spanish',
            Albania: 'Q2 FIN LINK albania',
            Filipino: 'Q2 FIN LINK filipino',
        }
    }),
       new QuestionObj({
        questionSet: {
            English: 'Describe financial processing in the quote to cash (QTC) cycle.',
            German: 'Beschreiben Sie die Finanzabwicklung im Quote-to-Cash-Zyklus (QTC).',
            French: "Décrivez vos opérations financières du cycle QTC (du devis à l’encaissement).",
            Russian: "Как в вашей компании организован процесс Quote-to-Cash (QTC)?",
            Turkish: "Tekliften Nakde (QTC) döngüsündeki mali işlemi tanımlayın.",
            Italian: "Descrivi il Ciclo attivo, in particolare il processo contabile \"Quote-to-Cash\"(QTC).",
            Spanish: "Describa el proceso financiero en el ciclo de cotización en efectivo (QTC).",
            PortugueseBR: "Descreva o processamento financeiro no ciclo quote-to-cash (QTC).",
            SpanishLAD: "Describe el procesamiento financiero en el ciclo de cotización en efectivo (QTC).",
        },
        answerSet: {
            English: [
                'Disconnected QTC, extensive billing issues, manual customer payments resolution.',
                'Semi-integrated, numerous billing issues, semi-automated customer payments resolution.',
                'Fully integrated QTC, some billing issues, automated customer payments resolution.',
                'Fully connected QTC, minimal billing issues, intelligent customer payments resolution.',
            ],
            German: [
                'Unzusammenhängendes QTC, beträchtliche Probleme bei der Rechnungsstellung, manuelle Lösung für Kundenzahlungen.',
                'Halbintegriert, beträchtliche Probleme bei der Rechnungsstellung, halbautomatische Lösung für Kundenzahlungen.',
                'Vollständig integriertes QTC, einige Probleme bei der Rechnungsstellung, automatische Lösung für Kundenzahlungen.',
                'Vollständig zusammenhängendes QTC, minimale Probleme bei der Rechnungsstellung, intelligente Lösung für Kundenzahlungen.',
            ],
            French: [
                'Cycle QTC déconnecté, problèmes de facturation importants, résolution manuelle des paiements clients.',
                'Opérations semi-intégrées, nombreux problèmes de facturation, résolution semi-automatisée des paiements clients.',
                'Cycle QTC entièrement intégré, quelques problèmes de facturation, résolution automatisée des paiements clients.',
                'Cycle QTC entièrement connecté, peu de problèmes de facturation, solution intelligente de résolution des paiements clients.',
            ],
            Russian: [
                'Разрозненные процессы, значительные сложности с выставлением счетов, вопросы с платежами клиентов решаются вручную.',
                'Частично интегрированные процессы, проблемы с выставлением счетов, вопросы с платежами решаются в полуавтоматическом режиме.',
                'Полностью интегрированные процессы, некоторые проблемы с выставлением счетов, вопросы с платежами решаются автоматически.',
                'Все процессы взаимосвязаны, незначительные проблемы с выставлением счетов, интеллектуальное решение вопросов с платежами.',
            ],
            Turkish: [
                'Bağlantısız QTC, kapsamlı faturalama sorunları, manuel müşteri ödemeleri çözümü.',
                'Yarı entegre, çok sayıda faturalama sorunları, yarı otomatik müşteri ödemeleri çözümü',
                'Tam entegre QTC, bazı faturalama sorunları, otomatik müşteri ödemeleri çözümü.',
                'Tam bağlantılı QTC, minimal faturalama sorunları, akıllı müşteri ödemeleri çözümü.',
            ],
            Italian: [
                'Il QTC è scollegato, con grossi problemi di fatturazione e risoluzione manuale dei pagamenti dei clienti.',
                'Il QTC è semi-integrato, con numerosi problemi di fatturazione e risoluzione semi-automatizzata dei pagamenti dei clienti.',
                'Il QTC è completamente integrato, con alcuni problemi di fatturazione e risoluzione automatizzata dei pagamenti dei clienti.',
                'Il QTC è completamente connesso, con problemi minimi di fatturazione e risoluzione intelligente dei pagamenti dei clienti.',
            ],
            Spanish: [
                'QTC inconexo, problemas exhaustivos en la facturación, resolución manual de los pagos de clientes.',
                'Parcialmente integrado, numerosos problemas en la facturación, resolución semiautomatizada de los pagos de clientes.',
                'QTC totalmente integrado, algunos problemas en la facturación, resolución automatizada de los pagos de clientes.',
                'QTC totalmente conectado, problemas mínimos en la facturación, resolución inteligente de los pagos de clientes.',
            ],
            PortugueseBR: [
                'QTC desconectado, extensos problemas de faturamento, resolução manual de pagamentos de clientes.',
                'Semi-integrado, muitos problemas de faturamento, resolução semi-automatizada de pagamentos de clientes.',
                'QTC totalmente integrado, alguns problemas de faturamento, resolução automatizada de pagamentos de clientes.',
                'QTC totalmente conectado, problemas mínimos de faturamento, resolução inteligente de pagamentos de clientes.',
            ],
            SpanishLAD: [
                'QTC no conectado, extensos problemas de facturación, resolución manual de pagos de clientes.',
                'Semi-integrado, numerosos problemas de facturación, resolución de pagos semi-automatizada de clientes.',
                'QTC totalmente integrado, algunos problemas de facturación, resolución automatizada de pagos de clientes.',
                'QTC totalmente conectado, problemas de facturación mínimos, resolución inteligente de pagos de clientes.',
            ]
        },
        negCopy: {
            English: 'Q3 FIN COPY english',
            Spanish: 'Q3 FIN COPY spanish',
            Albania: 'Q3 FIN COPY albania',
            Filipino: 'Q3 FIN COPY filipino',
        },
        negLink: {
            English: 'Q3 FIN LINK english',
            Spanish: 'Q3 FIN LINK spanish',
            Albania: 'Q3 FIN LINK albania',
            Filipino: 'Q3 FIN LINK filipino',
        }
    }),
    new QuestionObj({
        questionSet: {
            English: 'How do you achieve reliable enterprise-wide accounting?',
            German: 'Wie führen Sie eine zuverlässige unternehmensweite Buchhaltung durch?',
            French: "Comment assurez-vous la fiabilité de votre comptabilité dans toute l’entreprise ?",
            Russian: "Как вы обеспечиваете надежность ведения бухгалтерского учета на предприятии?",
            Turkish: "Kurum genelinde güvenilir muhasebeyi nasıl gerçekleştiriyorsunuz?",
            Italian: "Come ottenete una contabilità affidabile a livello aziendale?",
            Spanish: "¿Cómo consigue una contabilidad fiable en toda la empresa?",
            PortugueseBR: "Como é assegurada uma contabilidade confiável em toda a sua organização?",
            SpanishLAD: "¿Cómo alcanzarías una contabilidad empresarial confiable?",
        },
        answerSet: {
            English: [
                'We use Excel or other manual solutions to aggregate enterprise-wide accounting.',
                'We use custom integrations to import accounting into a central repository.',
                'We use integration and mapping tools to accumulate enterprise-wide accounting. ',
                'We use software that automatically harmonizes enterprise-wide accounting into common GL.',
            ],
            German: [
                'Wir verwenden Excel oder andere manuelle Lösungen, um die unternehmensweite Buchhaltung zu aggregieren. ',
                'Wir verwenden benutzerdefinierte Integrationen, um die Buchhaltung in einen zentralen Speicher zu importieren. ',
                'Wir verwenden Integrations- und Abbildungstools, um die unternehmensweite Buchhaltung zu akkumulieren. ',
                'Wir verwenden Software, die die unternehmensweite Buchhaltung automatisch mit dem gemeinsamen Hauptbuch abgleicht. ',
            ],
            French: [
                'Nous utilisons Excel ou d‘autres outils manuels pour agréger les données comptables à l’échelle de l‘entreprise.',
                'Nous utilisons des solutions personnalisées et intégrées pour importer les données comptables sur un référentiel central. ',
                'Nous utilisons des outils d’intégration et de cartographie pour rassembler les données comptables de toute l’entreprise. ',
                'Nous utilisons un logiciel qui harmonise automatiquement l’ensemble des données comptables dans le grand livre commun. ',
            ],
            Russian: [
                'Ручное ведение бухгалтерского учета с использованием таблиц Excel или других подручных средств в масштабе всего предприятия. ',
                'Мы используем настраиваемые интеграции для импорта данных бухгалтерского учета в центральный репозиторий.',
                'Мы используем инструменты интеграции и сопоставления данных для накопления отчетности по всему предприятию.',
                'Используем программное обеспечение, которое автоматически гармонизирует бухгалтерский учет всего предприятия в Главной книге. ',
            ],
            Turkish: [
                'İşletme genelinde muhasebeyi birleştirmek için Excel veya diğer manuel çözümleri kullanıyoruz.',
                'Muhasebeyi merkezi bir havuza aktarmak için özel entegrasyonlar kullanıyoruz.',
                'İşletme genelinde muhasebeyi toplamak için entegrasyonu ve eşleme araçlarını kullanıyoruz.',
                'İşletme geneli muhasebeyi ortak ana defterle otomatik olarak bağdaştıran yazılım kullanıyoruz.',
            ],
            Italian: [
                'Utilizziamo Excel o altre soluzioni manuali per aggregare i dati della contabilità a livello aziendale. ',
                'Utilizziamo integrazioni personalizzate per importare i dati della contabilità in un archivio centrale. ',
                'Utilizziamo strumenti di integrazione e mappatura per raccogliere i dati della contabilità a livello aziendale.',
                'Usiamo un software che armonizza automaticamente i dati della contabilità a livello aziendale in un registro generale comune.',
            ],
            Spanish: [
                'Utilizamos Excel u otras soluciones manuales para combinar la contabilidad de toda la empresa.',
                'Utilizamos integraciones personalizadas para importar la contabilidad en un recurso centralizado. ',
                'Utilizamos herramientas de integración y asignación para recopilar la contabilidad de toda la empresa. ',
                'Utilizamos programas que concilian automáticamente la contabilidad de toda la empresa con el libro mayor común. ',
            ],
            PortugueseBR: [
                'Usamos o Excel ou outras soluções manuais para agregar a contabilidade de toda a organização. ',
                'Usamos integrações personalizadas para importar a contabilidade para um repositório central. ',
                'Usamos ferramentas de integração e mapeamento para acumular a contabilidade de toda a organização. ',
                'Usamos um software que harmoniza automaticamente a contabilidade de toda a organização em um registro geral comum. ',
            ],
            SpanishLAD: [
                'Utilizamos Excel u otras soluciones manuales para llevar a cabo la contabilidad de toda la empresa. ',
                'Utilizamos integraciones personalizadas para importar la contabilidad a un repositorio central. ',
                'Utilizamos herramientas de integración y mapeo para acumular la contabilidad en toda la empresa. ',
                'Utilizamos un software que armoniza automáticamente la contabilidad de toda la empresa con un libro mayor común. ',
            ]
        },
        negCopy: {
            English: 'Q4 FIN COPY english',
            Spanish: 'Q4 FIN COPY spanish',
            Albania: 'Q4 FIN COPY albania',
            Filipino: 'Q4 FIN COPY filipino',
        },
        negLink: {
            English: 'Q4 FIN LINK english',
            Spanish: 'Q4 FIN LINK spanish',
            Albania: 'Q4 FIN LINK albania',
            Filipino: 'Q4 FIN LINK filipino',
        }
    }),
        new QuestionObj({
        questionSet: {
            English: 'Which describes your separation of duties & access controls?',
            German: 'Wie würden Sie die Trennung Ihrer Pflichten und Zugangskontrollen beschreiben?',
            French: "Comment décririez-vous la séparation des fonctions et le contrôle des accès ?",
            Russian: "Как в компании организованы процессы разделения обязанностей и контроля доступа?",
            Turkish: "Görev ve erişim kontrolleri ayrımınızı en iyi hangisi tanımlar?",
            Italian: "Cosa descrive meglio la segregazione delle attività e il controllo degli accessi nella tua azienda?",
            Spanish: "¿Cómo describiría los controles de separación de responsabilidades y accesos?",
            PortugueseBR: "Como você descreve a separação de funções e controles de acesso na sua empresa?",
            SpanishLAD: "¿Qué aspectos describen la separación de funciones y controles de acceso?",
        },
        answerSet: {
            English: [
                "Manual analysis, internally-defined controls, annual external assessment.",
                "3rd party tool analysis, best-practice controls, periodic external assessment.",
                "3rd party tool analysis, best-practice controls, periodic internal assessment.",
                "Embedded continuous analysis and internal assessment, best-practice controls.",
            ],
            German: [
                'Manuelle Analyse, intern festgelegte Kontrollen, jährliche externe Beurteilung.',
                'Analyse mit Drittanbietertool, Kontrollen nach bewährten Methoden, regelmäßige externe Beurteilung.',
                'Analyse mit Drittanbietertool, Kontrollen nach bewährten Methoden, regelmäßige interne Beurteilung.',
                'Integrierte kontinuierliche Analyse und interne Beurteilung, Kontrollen nach bewährten Methoden.',
            ],
            French: [
                'Analyse manuelle, contrôles définis en interne, évaluation externe annuelle.',
                'Outils d’analyse tiers, contrôle des bonnes pratiques, évaluation externe périodique.',
                'Outils d’analyse tiers, contrôle des bonnes pratiques, évaluation interne périodique.',
                'Analyse intégrée en continu et évaluation interne, contrôle des bonnes pratiques.',
            ],
            Russian: [
                'Ручной анализ, контроль в соответствии с внутренними правилами компании, ежегодная внешняя оценка.',
                'Сторонние инструменты анализа, передовые методы контроля, периодическая внешняя оценка.',
                'Сторонние инструменты анализа, передовые методы контроля, периодическая внутренняя оценка.',
                'Встроенная система непрерывного анализа и внутренняя оценка, передовые методы контроля.',
            ],
            Turkish: [
                'Manuel analiz, kurum içinde tanımlı kontroller, yıllık kurum dışı değerlendirme.',
                '3. taraf araç analizi, en iyi uygulama kontrolleri, periyodik kurum dışı değerlendirme.',
                '3. taraf araç analizi, en iyi uygulama kontrolleri, periyodik kurum içi değerlendirme.',
                'Entegre kesintisiz analiz ve kurum içi değerlendirme, en iyi uygulama kontrolleri.',
            ],
            Italian: [
                'Effettuiamo analisi manuali, controlli definiti internamente e una valutazione esterna annuale.',
                'Utilizziamo analisi con strumenti di terzi, controlli basati sulle migliori pratiche e una valutazione esterna periodica.',
                'Utilizziamo analisi con degli strumenti di terzi, controlli delle migliori pratiche e una valutazione interna periodica.',
                'Effettuiamo un\'analisi continua integrata e una valutazione interna, con controlli basati sulle migliori pratiche.',
            ],
            Spanish: [
                'Análisis manual, controles definidos internamente, evaluación externa anual.',
                'Análisis con herramientas externas, controles de mejores prácticas, evaluación externa periódica.',
                'Análisis con herramientas externas, controles de mejores prácticas, evaluación interna periódica.',
                'Análisis y evaluaciones internas integrados y continuos, controles de mejores prácticas.',
            ],
            PortugueseBR: [
                'Análise manual, controles definidos internamente, avaliação externa anual.',
                'Análise de ferramentas de terceiros, controles de melhores práticas, avaliação externa periódica.',
                'Análise de ferramentas de terceiros, controles de melhores práticas, avaliação interna periódica.',
                'Análise contínua e avaliação interna incorporadas, controles de melhores práticas.',
            ],
            SpanishLAD: [
                'Análisis manual, controles definidos internamente, evaluación externa anual.',
                'Análisis de herramientas independientes, controles de mejores prácticas, evaluación externa periódica.',
                'Análisis de herramientas independientes, controles de mejores prácticas, evaluación interna periódica.',
                'Análisis continúo integrado y evaluación interna, controles de mejores prácticas.',
            ],
        },
        negCopy: {
            English: 'Q5 FIN COPY english',
            Spanish: 'Q5 FIN COPY spanish',
            Albania: 'Q5 FIN COPY albania',
            Filipino: 'Q5 FIN COPY filipino',
        },
        negLink: {
            English: 'Q5 FIN LINK english',
            Spanish: 'Q5 FIN LINK spanish',
            Albania: 'Q5 FIN LINK albania',
            Filipino: 'Q5 FIN LINK filipino',
        }
    }),
       new QuestionObj({
        questionSet: {
            English: 'Which describes your internal controls for fraud monitoring?',
            German: 'Wie würden Sie Ihre internen Kontrollen zur Betrugsüberwachung beschreiben?',
            French: "Quels contrôles internes sont en place pour surveiller les fraudes ?",
            Russian: "Как в вашей компании организован внутренний контроль за отслеживанием мошенничества?",
            Turkish: "Dolandırıcılık takibine yönelik kurum içi kontrolleri en iyi hangisi tanımlıyor?",
            Italian: "Come descrivi i vostri controlli interni per il monitoraggio delle frodi?",
            Spanish: "¿Cómo describiría los procedimientos internos de control del fraude?",
            PortugueseBR: "Como você descreve os seus controles internos da para monitoramento de fraudes?",
            SpanishLAD: "¿Qué aspectos describen los controles internos para el monitoreo de fraudes?",
        },
        answerSet: {
            English: [
                "Manual controls & notifications, sampling-based.",
                "Limited control automation, manual notifications, sampling-based.",
                "Good control automation, detection-based, timely notifications, limited data review.",
                "Highly automated controls & notifications, preventative, continuous full-data review.",
            ],
            German: [
                'Manuelle Kontrollen und Benachrichtigungen, auf Stichproben basierend.',
                'Eingeschränkte Kontrollautomatisierung, manuelle Benachrichtigungen, auf Stichproben basierend.',
                'Gute Kontrollautomatisierung, erkennungsbasierte, zeitnahe Benachrichtigungen, eingeschränkte Datenüberprüfung.',
                'Hoch automatisierte Kontrollen und Benachrichtigungen, präventive, kontinuierliche Überprüfung aller Daten.',
            ],
            French: [
                'Contrôles et notifications manuels, basés sur des échantillons. ',
                'Contrôle automatique limité, notifications manuelles basées sur des échantillons.',
                'Contrôle automatique efficace, basé sur la détection, notifications envoyées en temps utile, examen des données limitée.',
                'Notifications et contrôles fortement automatisés, examen préventif et continu de l’ensemble des données.',
            ],
            Russian: [
                'На основе выборочных проверок, проводимых вручную, и уведомлений.',
                'Используется система автоматизированного контроля с ограниченными возможностями, выборочные уведомления, создаваемые вручную.',
                'Используется система автоматизированного контроля для обнаружения и уведомления, но ограничены возможности проверки данных.',
                'Высокоавтоматизированный контроль и уведомление, превентивная непрерывная проверка всех данных.',
            ],
            Turkish: [
                'Manuel kontroller ve bildirimler, numuneye dayalı. ',
                'Sınırlı kontrol otomasyonu, manuel bildirimler, numuneye dayalı.',
                'İyi bir kontrol otomasyonu, tespite (algılamaya) dayalı, zamanında bildirim, sınırlı veri incelemesi. ',
                'Son derece otomatik kontroller ve bildirimler, önleyici, kesintisiz tam veri değerlendirme.',
            ],
            Italian: [
                'Utilizziamo controlli e notifiche manuali, basati sul campionamento.',
                'Siamo dotati di un\'automazione del controllo limitata, con notifiche manuali, basate sul campionamento.',
                'Abbiamo una buona automazione del controllo, con notifiche tempestive basate sul rilevamento e una revisione dei dati limitata.',
                'Siamo dotati di controlli e notifiche altamente automatizzati, con una revisione preventiva e continua di tutti i dati. ',
            ],
            Spanish: [
                'Controles y notificaciones manuales, basados en muestreos.',
                'Control automático limitado, notificaciones manuales, basados en muestreos.',
                'Control automático apropiado, notificaciones oportunas basadas en la detección, revisiones de datos limitadas.',
                'Controles y notificaciones altamente automatizados, revisión de datos completos continua y preventiva. ',
            ],
            PortugueseBR: [
                'Controles e notificações manuais, com base em amostragem. ',
                'Automação de controles limitada, notificações manuais, com base em amostragem. ',
                'Boa automação de controles baseada em detecção, notificações oportunas, revisão de dados limitada. ',
                'Controles e notificações altamente automatizados, revisão preventiva e contínua de todos os dados.',
            ],
            SpanishLAD: [
                'Controles y notificaciones manuales, basados en muestreo. ',
                'Automatización de control limitada, notificaciones manuales, basadas en muestreo. ',
                'Buena automatización del control, notificaciones oportunas basadas en detección, revisión limitada de datos. ',
                'Controles y notificaciones altamente automatizados, revisión preventiva y continua de datos completos. ',
            ],
        },
        negCopy: {
            English: 'Q6 FIN COPY english',
            Spanish: 'Q6 FIN COPY spanish',
            Albania: 'Q6 FIN COPY albania',
            Filipino: 'Q6 FIN COPY filipino',
        },
        negLink: {
            English: 'Q6 FIN LINK english',
            Spanish: 'Q6 FIN LINK spanish',
            Albania: 'Q6 FIN LINK albania',
            Filipino: 'Q6 FIN LINK filipino',
        }
    }),
];

export default FINQuestionSet;