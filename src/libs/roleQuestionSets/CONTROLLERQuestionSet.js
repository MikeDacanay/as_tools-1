import QuestionObj from '../Models/QuestionObj';

const CONTROLLER_QSet = [
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
            English: 'How easily are trusted enterprise-wide financial reports produced?',
            German: 'Wie leicht lassen sich vertrauenswürdige unternehmensweite Finanzberichte erstellen?',
            French: "Avez-vous un accès simple à des rapports financiers fiables de toute l’entreprise ?",
            Russian: "Легко ли составлять надежные финансовые отчеты в масштабе всего предприятия?",
            Turkish: "Güvenilir işletme geneli mali raporlar ne kadar kolay hazırlanıyor?",
            Italian: "Con quale facilità vengono prodotti report finanziari affidabili a livello aziendale?",
            Spanish: "¿Con qué facilidad puede producir informes financieros fiables para su empresa?",
            PortugueseBR: "Com que facilidade os relatórios financeiros confiáveis da empresa são produzidos?",
            SpanishLAD: "¿Con qué facilidad puedes producir informes financieros confiables en su empresa?",
        },
        answerSet: {
            English: [
                'We use manual, disconnected or ad hoc solutions to deliver enterprise financial reports.',
                'We export subsidiary and corporate financial data into data warehouse.',
                'We integrate subsidiary information into the corporate ERP system for financial reports.',
                'We rely on harmonized single source of financial truth for enterprise financial reports.',
            ],
            German: [
                'Wir verwenden manuelle, unzusammenhängende oder Ad-hoc-Lösungen, um die Finanzberichte des Unternehmens zusammenzustellen. ',
                'Wir exportieren Niederlassungs- und unternehmensweite Finanzdaten in ein Data Warehouse.',
                'Wir integrieren Niederlassungsinformationen in das unternehmensweite ERP-System, um dann Finanzberichte zu generieren.',
                'Wir verlassen uns auf eine abgeglichene, einzelne Quelle von korrekten Finanzdaten für unternehmensweite Finanzberichte.',
            ],
            French: [
                'Nous utilisons des solutions manuelles, déconnectées ou ponctuelles pour générer les rapports financiers de l’entreprise. ',
                'Nous exportons les données financières de l’entreprise et des filiales dans un data warehouse. ',
                'Nous intégrons les données des filiales dans le système ERP pour générer les rapports financiers.',
                'Une source unique et unifiée de données financières fiable nous permet de générer les rapports financiers de l’entreprise. ',
            ],
            Russian: [
                'Финансовая отчетность готовится вручную, или используем отдельные или специальные решения, разработанные для конкретной цели.',
                'Мы экспортируем финансовые данные нашей компании и дочерних компаний в базу данных.',
                'Мы интегрируем информацию дочерних компаний в корпоративную ERP-систему для подготовки финансовой отчетности.',
                'Мы полагаемся на гармонизированный единый унифицированный источник достоверных данных при составлении финансовой отчетности.',
            ],
            Turkish: [
                'Kurumsal mali raporları sunmak için manuel, bağlantısız veya duruma bağlı (geçici) çözümler kullanıyoruz.',
                'Yan şirket ve kurumsal mali verileri veri ambarına aktarıyoruz.',
                'Mali raporlar için yan şirket bilgilerini kurumsal ERP sistemine entegre ediyoruz.',
                'Kurumsal mali raporlar için bağdaştırılmış, tek doğru finansal veri kaynağı kullanıyoruz.',
            ],
            Italian: [
                'Utilizziamo soluzioni manuali, disconnesse o ad hoc per fornire report finanziari aziendali. ',
                'Esportiamo dati finanziari corporate e delle controllate in un datawarehouse.',
                'Integriamo le informazioni delle società controllate nel sistema ERP aziendale per il reporting.',
                'Facciamo affidamento su un\'unica fonte armonizzata per i report finanziari aziendali. ',
            ],
            Spanish: [
                'Utilizamos soluciones manuales, inconexas o provisionales para emitir los informes financieros de la empresa. ',
                'Exportamos los datos financieros corporativos y de filiales a un centro de almacenamiento de datos. ',
                'Integramos la información de las filiales en el sistema ERP corporativo para la realización de los informes financieros.',
                'Confiamos en una única fuente armonizada de datos financieros para los informes financieros de la empresa. ',
            ],
            PortugueseBR: [
                'Usamos soluções manuais, desconectadas ou ad hoc para fornecer relatórios financeiros da organização. ',
                'Exportamos dados financeiros corporativos e de subsidiárias para o data warehouse. ',
                'Integramos as informações de subsidiárias no sistema ERP corporativo para gerar relatórios financeiros. ',
                'Contamos com uma única e harmonizada fonte de verdade financeira para os relatórios financeiros da organização. ',
            ],
            SpanishLAD: [
                'Utilizamos soluciones manuales, no integradas o ad hoc para elaborar informes financieros.',
                'Exportamos datos financieros de las filiales y corporativos a un almacén de datos.',
                'Integramos información de las filiales en el sistema ERP corporativo para elaborar informes financieros. ',
                'Contamos con una única fuente confiable financiera para elaborar informes financieros.',
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
                'Procesos no integrados, herramientas obsoletas, controles y procesos manuales, colaboración limitada.',
                'Procesos semi-conectados, soluciones complementarias con extractos de datos, analítica offline.',
                'Procesos y herramientas de riesgo integrados, automatización de control limitada, colaboración eficiente.',
                'Procesos y herramientas de riesgo integrados en ERP, controles altamente automatizados, ciencia de datos avanzada.',
            ]
        },
    }),
];

export default CONTROLLER_QSet;
