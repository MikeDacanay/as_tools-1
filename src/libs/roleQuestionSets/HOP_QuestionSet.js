import QuestionObj from '../Models/QuestionObj';

const HOPQuestionSet = [
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
                English: 'Q1 CFO COPY english',
                Spanish: 'Q1 CFO COPY spanish',
                Albania: 'Q1 CFO COPY albania',
                Filipino: 'Q1 CFO COPY filipino',
            },
            negLink: {
                English: 'Q1 CFO LINK english',
                Spanish: 'Q1 CFO LINK spanish',
                Albania: 'Q1 CFO LINK albania',
                Filipino: 'Q1 CFO LINK filipino',
            }
        }),
    new QuestionObj({
            questionSet: {
                English: 'How do you perform supplier relationship management?',
                German: 'Wie organisieren Sie die Lieferantenbeziehungen?',
                French: "Comment gérez-vous vos relations avec les fournisseurs ?",
                Russian: "Как организован процесс управления отношениями с поставщиками в вашей компании?",
                Turkish: "Tedarikçi ilişkisi yönetimini nasıl yürütüyorsunuz?",
                Italian: "Come gestisci i rapporti con i fornitori?",
                Spanish: "¿Cómo gestiona las relaciones con proveedores?",
                PortugueseBR: "Como sua organização gerencia o relacionamento com os fornecedores?",
                SpanishLAD: "¿Cómo se lleva a cabo la gestión de relaciones con los proveedores?",
            },
            answerSet: {
                English: [
                'Informal process and ad hoc.',
                'Informal process with periodic evaluation.',
                'Formal process, highly automated with periodic evaluation.',
                'Fully automated process with continuous evaluation and active reporting.',
            ],
                German: [
                'Informeller Ad-hoc-Prozess.',
                'Informeller Prozess mit regelmäßigen Evaluierungen.',
                'Formeller Prozess, hoch automatisiert, mit regelmäßigen Evaluierungen.',
                'Vollständig automatisierter Prozess mit kontinuierlichen Evaluierungen und aktivem Reporting.',
            ],
                French: [
                'Processus informel et gestion ponctuelle. ',
                'Processus informel et évaluation périodique.',
                'Processus formel et largement automatisé, avec une évaluation périodique.',
                'Processus entièrement automatisé, avec une évaluation en continu et un reporting actif.',
            ],
                Russian: [
                'Процесс неформализованный и нерегламентированный. ',
                'Процесс неформализованный, но периодически проводится оценка качества взаимоотношений.',
                'Процесс формализованный, высокоавтоматизированный, периодически проводится оценка качества взаимоотношений.',
                'Полностью автоматизированный процесс с непрерывной оценкой качества и активной отчетностью.',
            ],
                Turkish: [
                'Gayriresmî süreç ve duruma bağlı.',
                'Gayriresmî süreç, periyodik değerlendirme.',
                'Formel (resmî) süreç, periyodik değerlendirme ile oldukça otomatik.',
                'Sürekli değerlendirme ve aktif raporlamayla tam otomatik süreç.',
            ],
                Italian: [
                'Con un processo informale ad hoc.',
                'Con un processo informale che prevede una valutazione periodica.',
                'Con un processo formale, altamente automatizzato con una valutazione periodica.',
                'Con un processo completamente automatizzato con valutazione continua e reporting.',
            ],
                Spanish: [
                'Proceso informal y provisional.',
                'Proceso informal con evaluación periódica.',
                'Proceso formal, altamente automatizado con evaluaciones periódicas.',
                'Proceso completamente automatizado con evaluación continua y realización activa de informes.',
            ],
                PortugueseBR: [
                'Processo informal e ad hoc.',
                'Processo informal com avaliação periódica.',
                'Processo formal, altamente automatizado e com avaliação periódica.',
                'Processo totalmente automatizado com avaliação contínua e relatórios ativos.',
            ],
                SpanishLAD: [
                'Proceso informal y ad hoc.',
                'Mayor grado de estandarización en LOB o regiones, pero aún no en toda la empresa. ',
                'Processo formal, altamente automatizado e com avaliação periódica.',
                'Totalmente automatizado. Adaptación automática a través de IA/ML. Pago automático si no se encuentran excepciones. ',
            ]
            },
            negCopy: {
                English: 'Q2 CFO COPY english',
                Spanish: 'Q2 CFO COPY spanish',
                Albania: 'Q2 CFO COPY albania',
                Filipino: 'Q2 CFO COPY filipino',
            },
            negLink: {
                English: 'Q2 CFO LINK english',
                Spanish: 'Q2 CFO LINK spanish',
                Albania: 'Q2 CFO LINK albania',
                Filipino: 'Q2 CFO LINK filipino',
            }
        }),
    new QuestionObj({
            questionSet: {
                English: 'How do you manage supplier contracting and sourcing?',
                German: 'Wie organisieren Sie die Auftragsvergabe und die Lieferantenbeschaffung?',
                French: "Comment gérez-vous la sélection et les contrats des fournisseurs ?",
                Russian: "Как в компании организован процесс выбора поставщиков и управления контрактами?",
                Turkish: "Tedarikçi sözleşme ve kaynak bulma yönetimini nasıl yürütüyorsunuz?",
                Italian: "Come vengono gestiti i contratti con i fornitori e l'approvvigionamento?",
                Spanish: "¿Cómo gestiona la contratación y captación de proveedores?",
                PortugueseBR: "Como sua empresa gerencia a contratação e aquisição de serviços de fornecedores?",
                SpanishLAD: "¿Cómo se gestiona la contratación y el abastecimiento de proveedores?",
            },
            answerSet: {
                English: [
                'No standardized process. Each business unit manages its own negotiations and contracts.',
                'Standardized document types, but bids and contracts are authored and analyzed manually.',
                'Enterprise standards. Central procurement team manually reviews negotiations, bids & contracts.',
                'Integrated processes & systems. Standardized contracts & clauses. Software automatically flags exceptions for review.',
            ],
                German: [
                'Kein standardisierter Prozess. Jede Geschäftseinheit verwaltet eigene Verhandlungen und Verträge. ',
                'Standardisierte Dokumentenarten, aber Angebote und Verträge werden manuell verfasst und analysiert.',
                'Unternehmensstandards. Das zentrale Beschaffungsteam sieht manuell Verhandlungen, Angebote und Verträge durch. ',
                'Integrierte Prozesse und Systeme. Standardisierte Verträge und Klauseln. Software markiert automatisch Ausnahmen zur Ansicht. ',
            ],
                French: [
                'Nous n’avons pas de processus standard. Chaque département gère ses négociations et ses contrats.',
                'Nous avons des documents types, mais les offres et les contrats sont rédigés et analysés manuellement.',
                'Processus normalisé pour toute l’entreprise. L’équipe achats gère manuellement les négociations, offres et contrats.',
                'Processus et systèmes intégrés. Contrats et clauses standards. Logiciel signalant automatiquement les exceptions pour analyse.',
            ],
                Russian: [
                'Нет стандартизированных процессов. Каждое подразделение компании самостоятельно ведет переговоры и контракты. ',
                'Типы документов стандартизованы, но заявки и контракты составляются и анализируются вручную.',
                'Процессы установлены стандартом предприятия. Централизованный ручной анализ предложений и контрактов по конкурентным закупкам.',
                'Процессы и системы интегрированы. Стандартизованные контракты и условия. Автоматизированный поиск случаев, требующих проверки. ',
            ],
                Turkish: [
                'Standartlaştırılmış süreç yok. Her iş birimi kendi görüşmelerini ve sözleşmelerini yürütüyor.',
                'Standart belge türleri, ancak teklifler ve sözleşmeler manuel olarak yetkilendirilip analiz ediliyor. ',
                'Kurumsal standartlar. Merkezi alım ekibi görüşmeleri, teklifleri ve sözleşmeleri manuel olarak değerlendiriyor.',
                'Entegre süreçler ve sistemler. Standart sözleşmeler ve hükümler. Yazılım, istisnaların incelemesi için otomatik uyarı verir.',
            ],
                Italian: [
                'Non c\'è nessun processo standardizzato. Ogni unità aziendale gestisce le proprie trattative e contratti. ',
                'Abbiamo documenti standardizzati, ma richieste, offerte e contratti vengono creati e analizzati manualmente.',
                'Seguiamo gli standard aziendali. Il Procurement centrale esamina manualmente le negoziazioni, le offerte e i contratti.',
                'Processi e sistemi integrati. Contratti e clausole standard. Il software trova automaticamente le eccezioni per la revisione. ',
            ],
                Spanish: [
                'Proceso no estándar. Cada unidad de negocio gestiona sus propias negociaciones y contratos. ',
                'Tipos de documentos estándar, pero las ofertas y los contratos se crean y analizan manualmente.',
                'Estándar para la empresa. El equipo de aprovisionamiento central revisa las negociaciones ofertas y los contratos.',
                'Procesos y sistemas integrados. Contratos y cláusulas estándar. Programa de detección automática de excepciones para revisión.',
            ],
                PortugueseBR: [
                'Não há nenhum processo padronizado. Cada unidade de negócios gerencia suas próprias negociações e contratos. ',
                'Alguns tipos de documento são padronizados, mas as propostas e os contratos são criados e analisados manualmente.',
                'Padrões empresariais. A equipe central de compras revisa manualmente negociações, propostas e contratos. ',
                'Processos e sistemas integrados. Contratos e cláusulas padronizadas. Software sinaliza exceções automaticamente para revisão.',
            ],
                SpanishLAD: [
                'No disponemos de un proceso estandarizado. Cada unidad de negocio gestiona sus propias negociaciones y contratos. ',
                'Tipos de documentos estandarizados, pero las ofertas y los contratos son autorizadas y analizadas manualmente. ',
                'Normas empresariales. El equipo central de adquisiciones revisa manualmente las negociaciones, ofertas y contratos. ',
                'Procesos y sistemas integrados. Contratos y cláusulas estandarizados. Software marca automáticamente las excepciones para su revisión. ',
            ]
            },
            negCopy: {
                English: 'Q3 CFO COPY english',
                Spanish: 'Q3 CFO COPY spanish',
                Albania: 'Q3 CFO COPY albania',
                Filipino: 'Q3 CFO COPY filipino',
            },
            negLink: {
                English: 'Q3 CFO LINK english',
                Spanish: 'Q3 CFO LINK spanish',
                Albania: 'Q3 CFO LINK albania',
                Filipino: 'Q3 CFO LINK filipino',
            }
        }),
    new QuestionObj({
            questionSet: {
                English: 'How fast can you change your delivery systems and processes?',
                German: 'Wie schnell können Sie Ihre Liefersysteme und -prozesse ändern?',
                French: "Pouvez-vous adapter rapidement vos systèmes et processus de livraison ?",
                Russian: "Насколько быстро вы можете внести изменения в системы и процессы поставки?",
                Turkish: "Teslimat sistemlerinizi ve süreçlerinizi ne kadar hızlı değiştirebilirsiniz?",
                Italian: "Quanto velocemente possono cambiare i vostri sistemi e processi di consegna?",
                Spanish: "¿Puede cambiar de forma rápida sus sistemas y procesos de entrega?",
                PortugueseBR: "Com que rapidez sua organização consegue alterar sistemas e processos de entrega?",
                SpanishLAD: "¿Qué tan rápido se pueden cambiar los sistemas y procesos de entrega?",
            },
            answerSet: {
                English: [
                "We don't have systems in place or a defined process to adjust to changing conditions.",
                "Defined process, but systems don’t quickly support changes across global operations.",
                "Process partly standardized. Supply chain and finance systems somewhat integrated.",
                "Processes standardized company-wide. Supply chain and finance systems fully integrated.",
            ],
                German: [
                'Wir haben keine Systeme oder festgelegten Prozesse, die an sich ändernden Bedingungen angepasst werden müssten.',
                'Festgelegter Prozess, aber die Systeme unterstützen keine schnellen Änderungen im globalen Betriebsablauf. ',
                'Der Prozess ist teilweise standardisiert. Die Lieferketten- und Finanzsysteme sind zum Teil integriert. ',
                'Die Prozesse sind unternehmensweit standardisiert. Die Lieferketten- und Finanzsysteme sind vollständig integriert. ',
            ],
                French: [
                'Aucun système ou processus défini pour suivre l’évolution du contexte économique et commercial. ',
                'Processus défini, mais les systèmes ne s’adaptent pas rapidement aux changements de niveau mondial. ',
                'Nous avons normalisé une partie du processus. La chaîne logistique et les systèmes financiers sont relativement intégrés. ',
                'Processus normalisés dans toute l’entreprise. La chaîne logistique et les systèmes financiers sont pleinement intégrés. ',
            ],
                Russian: [
                'У нас нет систем или регламентированного процесса адаптации к меняющимся условиям. ',
                'Процесс регламентирован, но в системах невозможно быстро произвести изменения по глобальным операциям.',
                'Процесс частично стандартизирован. Цепь поставок и финансовые системы частично интегрированы между собой.',
                'Все процессы стандартизированы на уровне компании. Цепь поставок и финансовые системы полностью интегрированы.',
            ],
                Turkish: [
                'Değişen şartlara uyum sağlamak için uygulanan sistemlerimiz veya tanımlı bir sürecimiz yok. ',
                'Tanımlı süreçler, ancak sistemler küresel operasyonlarda değişiklikleri hızlıca desteklemiyor. ',
                'Süreç kısmen standartlaştırıldı. Tedarik zinciri ve finans sistemleri bir ölçüde entegre. ',
                'Süreçler şirket genelinde standartlaştırılmıştır. Tedarik zinciri ve finans sistemleri tamamen entegre.',
            ],
                Italian: [
                'Non abbiamo sistemi in atto o un processo definito per adattarci agli scenari in evoluzione.',
                'Abbiamo un processo definito, ma i nostri sistemi non supportano rapidamente i cambiamenti nelle operazioni globali. ',
                'Processo semi-standardizzato. La nostra catena di approvvigionamento e i sistemi contabili sono in qualche modo integrati. ',
                'Processi standardizzati a livello aziendale. La nostra catena di fornitura e i sistemi contabili sono completamente integrati.',
            ],
                Spanish: [
                'No hay sistemas establecidos ni un proceso definido para adaptarse a condiciones cambiantes. ',
                'Tenemos un proceso definido, pero los sistemas no respaldan los cambios con rapidez en las operaciones globales. ',
                'Proceso parcialmente estandarizado. La cadena de suministro y los sistemas financieros están relativamente integrados. ',
                'Procesos estandarizados en toda la empresa. La cadena de suministro y los sistemas financieros están plenamente integrados.',
            ],
                PortugueseBR: [
                'Não temos sistemas implementados ou um processo definido para nos ajustar às mudanças de condições. ',
                'Processo definido, mas os sistemas não suportam rapidamente mudanças em todas as operações globais. ',
                'Processo parcialmente padronizado. Os sistemas financeiros e da cadeia de suprimentos são um pouco integrados.',
                'Processos padronizados em toda a organização. Os sistemas financeiros e da cadeia de suprimentos são totalmente integrados. ',
            ],
                SpanishLAD: [
                'Análisis ad hoc que requieren la recopilación de datos a través de múltiples sistemas.',
                'Análisis periódicos de gastos utilizando extractos de datos del sistema de adquisiciones y finanzas.',
                'Análisis periódicos de gastos utilizando una aplicación integrada en todas las adquisiciones y finanzas. ',
                'Visibilidad en tiempo real de información sobre gastos y oportunidades de ahorro.',
            ]
            },
            negCopy: {
                English: 'Q4 CFO COPY english',
                Spanish: 'Q4 CFO COPY spanish',
                Albania: 'Q4 CFO COPY albania',
                Filipino: 'Q4 CFO COPY filipino',
            },
            negLink: {
                English: 'Q4 CFO LINK english',
                Spanish: 'Q4 CFO LINK spanish',
                Albania: 'Q4 CFO LINK albania',
                Filipino: 'Q4 CFO LINK filipino',
            }
        }),
    new QuestionObj({
                questionSet: {
                    English: 'How do you manage your spend?',
                    German: 'Wie verwalten Sie Ihre Ausgaben?',
                    French: "Comment gérez-vous les dépenses ?",
                    Russian: "Как организован процесс управления расходами в вашей компании?",
                    Turkish: "Harcamalarınızı nasıl yönetiyorsunuz?",
                    Italian: "Come vengono gestite le spese?",
                    Spanish: "¿Cómo gestiona los gastos?",
                    PortugueseBR: "Como sua organização gerencia os gastos?",
                    SpanishLAD: "¿Cómo se gestionan los gastos?",
                },
                answerSet: {
                    English: [
                "Ad hoc analysis requiring data gathering across multiple systems.",
                "Periodic spend analysis using data extracts from procurement and finance system.",
                "Periodic spend analysis using integrated application across procurement and finance.",
                "Real time visibility of spend information and savings opportunities."
            ],
                    German: [
                'Ad-hoc-Analyse, für die Daten aus mehreren Systemen erfasst werden müssen.',
                'Regelmäßige Ausgabenanalyse mit Datenextraktion vom Beschaffungs- und Finanzsystem.',
                'Regelmäßige Ausgabenanalyse mit integrierter Anwendung in der gesamten Beschaffungs- und Finanzabteilung.',
                'Echtzeittransparenz der Ausgabeninformationen und der Einsparpotenziale.',
            ],
                    French: [
                'Nous effectuons des analyses ponctuelles qui nécessitent de collecter des données sur différents systèmes. ',
                'Analyse périodique des dépenses à l’aide d‘échantillons de données transmis par le système d’achat et financier. ',
                'Analyse périodique des dépenses avec une application intégrée aux achats et à la finance.',
                'Nous avons une visibilité en temps réel des informations concernant les dépenses et des économies possibles. ',
            ],
                    Russian: [
                'Проводится специальный анализ, для которого требуется собирать данные из нескольких систем.',
                'Периодический анализ расходов с использованием выборки данных из систем закупок и финансовых расчетов.',
                'Периодический анализ расходов с использованием приложения, в которое интегрированы процессы закупок и финансовые расчеты.',
                'Отображается информация о расходах и возможностях экономии в режиме реального времени.',
            ],
                    Turkish: [
                'Çoklu sistemlerden veri toplamayı gerektiren duruma bağlı (özel) analiz.',
                'Satın alma ve finans sisteminden alınan verileri kullanarak periyodik harcama analizi.',
                'Satın alma ve finans üzerinden entegre uygulamayı kullanarak periyodik harcama analizi. ',
                'Harcama bilgileri ve tasarruf fırsatlarının gerçek zamanlı görünürlüğü.',
            ],
                    Italian: [
                'Ad hoc con analisi che richiedono una raccolta di dati su più sistemi.',
                'Con un\'analisi periodica della spesa tramite estratti di dati dal sistema di approvvigionamento e di contabilità.',
                'Con un\'analisi periodica della spesa tramite l\'utilizzo di un\'applicazione integrata per acquisti e finance. ',
                'Grazie alla visibilità in tempo reale delle informazioni sulla spesa e sulle opportunità di risparmio.',
            ],
                    Spanish: [
                'Análisis provisional que requiere recopilar datos de múltiples sistemas.',
                'Análisis periódico de los gastos mediante extractos de datos del sistema de aprovisionamiento y finanzas.',
                'Análisis periódico de los gastos mediante una aplicación integrada entre aprovisionamiento y finanzas.',
                'Visibilidad en tiempo real de la información de los gastos y las oportunidades de ahorro.',
            ],
                    PortugueseBR: [
                'Análise ad hoc que requer coleta de dados em vários sistemas.',
                'Análise periódica de gastos com uso de extratos de dados do sistema de compras e finanças. ',
                'Análise periódica de gastos com uso de aplicativo integrado em compras e finanças.',
                'Visibilidade em tempo real de informações sobre gastos e oportunidades de economia.',
            ],
                    SpanishLAD: [
                'No disponemos de sistemas ni de un proceso definido para adaptarnos a las condiciones cambiantes.',
                'Proceso definido, pero los sistemas no admiten rápidamente cambios en todas las operaciones globales.',
                'Proceso parcialmente estandarizado. Cadena de suministro y sistemas financieros parcialmente integrados. ',
                'Procesos estandarizados en toda la empresa. Cadena de suministro y sistemas financieros totalmente integrados. ',
            ]
            },
            negCopy: {
                English: 'Q5 CFO COPY english',
                Spanish: 'Q5 CFO COPY spanish',
                Albania: 'Q5 CFO COPY albania',
                Filipino: 'Q5 CFO COPY filipino',
            },
            negLink: {
                English: 'Q5 CFO LINK english',
                Spanish: 'Q5 CFO LINK spanish',
                Albania: 'Q5 CFO LINK albania',
                Filipino: 'Q5 CFO LINK filipino',
            }
    }),
    new QuestionObj({
        questionSet: {
            English: 'Which describes your audit, risk and compliance processes?',
            German: 'Wie würden Sie Ihre Prüf-, Risiko- und Compliance-Prozesse beschreiben?',
            French: "Décrivez vos processus d’audit, de gestion des risques et de conformité.",
            Russian: "Охарактеризуйте процессы аудита компании, управления рисками и соответствием?",
            Turkish: "Denetim, risk ve uygunluk süreçlerinizi en iyi hangisi tanımlıyor?",
            Italian: "Quale risposta descrive meglio i vostri processi di audit, rischio e conformità?",
            Spanish: "¿Cómo describiría los procesos de auditoría, riesgo y cumplimiento?",
            PortugueseBR: "Qual descreve os processos de auditoria, risco e conformidade?",
            SpanishLAD: "¿Qué describe tus procesos de auditoría, riesgo y cumplimiento?",
        },
        answerSet: {
            English: [
                'Siloed processes, outdated tools, manual controls and processes, limited collaboration.',
                'Semi-connected processes, bolt-on solutions with data extracts, offline analytics.',
                'Integrated risk processes & tools, limited control automation, efficient collaboration.',
                'ERP-embedded risk processes & tools, highly automated controls, advanced data science.',
            ],
            German: [
                'Isolierte Prozesse, veraltete Tools, manuelle Kontrollen und Prozesse, eingeschränkte Zusammenarbeit.',
                'Halbzusammenhängende Prozesse, nachträglich hinzugefügte Lösungen mit Datenextraktion, Offline-Analysen.',
                'Integrierte Risikoprozesse und -tools, eingeschränkte Kontrollautomatisierung, effiziente Zusammenarbeit.',
                'In ERP integrierte Risikoprozesse und -tools, hochautomatisierte Kontrollen, moderne Datenwissenschaft.',
            ],
            French: [
                'Processus cloisonnés, outils obsolètes, contrôles et processus manuels, collaboration limitée.',
                'Processus semi-connectés, solutions complémentaires avec extraction de données, analyses hors connexion.',
                'Outils et processus de gestion des risques intégrés, contrôles automatisés limités, collaboration efficace.',
                'Outils et processus de gestion des risques intégrés à l’ERP, contrôles ultra-automatisés, data science avancée.',
            ],
            Russian: [
                'Обособленные процессы, устаревшие инструменты, ручное управление и процессы, ограниченное сотрудничество.',
                'Процессы частично связаны между собой, готовые решения по извлечению данных, офлайн-аналитика.',
                'Интегрированные процессы и инструменты управления рисками, ограниченная автоматизация контроля, эффективное сотрудничество.',
                ' Встроенные в ERP-системы процессы управления рисками, автоматизированный контроль, глубинный анализ и обработка данных.',
            ],
            Turkish: [
                'Birbirinden kopuk süreçler, modası geçmiş araçlar, manuel kontroller ve süreçler, sınırlı iş birliği.',
                'Yarı bağlantılı süreçler, veri çıkarımlı, kolay uygulanır çözümler, çevrimdışı analizler.',
                'Entegre risk süreçleri ve araçları, sınırlı kontrol otomasyonu, etkili iş birliği.',
                'ERP entegreli risk süreçleri ve araçları, oldukça otomatik kontroller, gelişmiş veri bilimi.',
            ],
            Italian: [
                'Sono processi in silos, caratterizzati da strumenti obsoleti, controlli e operazioni manuali, con collaborazione limitata.',
                'Sono processi semi-connessi, caratterizzati da soluzioni custom con estratti di dati e analisi offline.',
                'Sono processi e strumenti di rischio integrati, con un\'automazione del controllo limitata e una collaborazione efficiente.',
                'Sono processi e strumenti di rischio integrati nell\'ERP, dai controlli altamente automatizzati e data science avanzata.',
            ],
            Spanish: [
                'Procesos estancos, herramientas obsoletas, controles y procesos manuales, colaboraciones limitadas.',
                'Procesos parcialmente conectados, soluciones aferradas a las extracciones de datos, análisis offline.',
                'Procesos y herramientas de riesgo integrados, automatización del control limitada, colaboración eficaz.',
                'Procesos y herramientas de riesgo integrados en ERP, controles altamente automatizados, ciencia de datos avanzada.',
            ],
            PortugueseBR: [
                'Processos em silos, ferramentas desatualizadas, controles e processos manuais, colaboração limitada.',
                'Processos semiconectados, soluções bolt-on com extratos de dados, análise offline.',
                'Processos e ferramentas de risco integrados, automação de controle limitada, colaboração eficiente.',
                'Processos e ferramentas de risco incorporados ao ERP, controles altamente automatizados, ciência de dados avançada.',
            ],
            SpanishLAD: [
                'Procesos estancados, herramientas obsoletas, controles y procesos manuales, colaboraciones limitadas.',
                'Procesos semi-conectados, soluciones complementarias con extractos de datos, analítica offline.',
                'Procesos y herramientas de riesgo integrados, automatización de control limitada, colaboración eficiente.',
                'Procesos y herramientas de riesgo integrados en ERP, controles altamente automatizados, ciencia de datos avanzada.',
            ]
        },
    }),
];

export default HOPQuestionSet;
