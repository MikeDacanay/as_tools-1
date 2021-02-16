import QuestionObj from '../Models/QuestionObj';

const FSQuestionSet = [    
    new QuestionObj({
        questionSet:{
            English: 'How do you see your company’s approach to digitalization?',
        German: 'Wie schätzen Sie den Ansatz Ihres Unternehmens zur Digitalisierung ein?',
        French: "Quelle est l’approche de votre entreprise en matière de numérisation ?",
        Russian: "Какого подхода к цифровизации придерживается ваша компания?",
        Turkish: "Şirketinizin sayısallaştırma (dijitalizasyon) yaklaşımını nasıl görüyorsunuz?",
        Italian: "Come descriveresti l'approccio della tua azienda alla digitalizzazione?",
        Spanish: "¿Cómo describiría el enfoque de su empresa respecto a la digitalización?",
        PortugueseBR: "Como é a abordagem da sua organização em relação à digitalização?",
        SpanishLAD: "¿Cómo observas el enfoque de tu empresa con respecto a la digitalización?",
        },
        answerSet:{
            English: [
                "We use on-premise solutions. We doubt cloud security and worry about data ownership.",
                "Cloud used in some departments. Examining how cloud can support our strategies.",
                "Corporate cloud strategy in place. Separate cloud providers, some automation projects.",
                "Corporate cloud strategy on single platform. Advanced pilots on emerging technologies.",
            ],
              German: [
                'Wir verwenden On-Premise-Lösungen. Wir glauben nicht an Cloud-Sicherheit und machen uns Sorgen über das Dateneigentum.',
                'Die Cloud wird in einigen Abteilungen verwendet. Wir untersuchen, wie die Cloud unsere Strategien unterstützen kann.  ',
                'Wir haben eine unternehmensweite Cloud-Strategie. Es gibt verschiedene Cloud-Anbieter und einige Automatisierungsprojekte. ',
                'Es gibt eine unternehmensweite Cloud-Strategie auf einer Plattform und innovative Pilotprojekte zu neuen Technologien. ',
            ],
            French: [
                'Solutions sur site. Nous n’avons pas confiance en la sécurité du Cloud et craignons pour la propriété des données.',
                'Certains départements utilisent le Cloud. Nous cherchons à savoir comment le Cloud peut renforcer nos stratégies. ',
                'Stratégie Cloud pour l’entreprise. Différents fournisseurs de solutions Cloud et quelques projets d’automatisation.',
                'Stratégie Cloud pour l’entreprise sur une plateforme unifiée. Plusieurs projets pilotes sur les technologies émergentes. ',
            ],
            Russian: [
                'Используем локальные решения. Сомневаемся в безопасности облачных сервисов и беспокоимся о праве собственности на данные.',
                'Облачные технологии используется в некоторых подразделениях компании. Пока изучаем, подходят ли они для наших стратегий.  ',
                'Разработали корпоративную облачную стратегию. Сотрудничаем с облачными провайдерами, есть проекты по автоматизации. ',
                'Реализовали корпоративную облачную стратегию на единой платформе. Есть пилотные проекты с использованием новейших технологий. ',
            ],
            Turkish: [
                'Tesis içi çözümler kullanıyoruz. Bulut güvenliği konusunda kuşkularımız var ve veri mülkiyeti konusunda endişeliyiz.',
                'Bazı departmanlarda bulut kullanılıyor. Bulutun stratejilerimizi nasıl destekleyebileceğini inceliyoruz.',
                'Kurumsal bulut stratejisi kullanılıyor. Ayrı bulut sağlayıcıları, bazı otomasyon projeleri.',
                'Tek platform üzerinde kurumsal bulut stratejisi. Gelişmekte olan teknolojilerde gelişmiş pilot çalışmalar.',
            ],
             Italian: [
                'Usiamo soluzioni on-premise. Dubitiamo della sicurezza del cloud e ci preoccupiamo della proprietà dei dati.',
                'Il cloud è utilizzato solo in alcuni reparti, ma stiamo valutando come possa supportare le nostre strategie.',
                'C\'è una strategia cloud aziendale in atto. Usiamo fornitori di cloud diversi e sviluppiamo progetti di automazione. ',
                'Strategia cloud aziendale su piattaforma unica. Sviluppiamo progetti pilota avanzati per testare le tecnologie emergenti. ',
            ],
            Spanish: [
                'Usamos soluciones locales. Desconfiamos de la seguridad en la nube y nos preocupa la propiedad de los datos.',
                'Utilizamos la nube en algunos departamentos. Estamos considerando de qué manera puede la nube respaldar nuestras estrategias.',
                'Disponemos de una estrategia de nube corporativa. Diferentes proveedores de nube, algunos proyectos de automatización. ',
                'Estrategia de nube corporativa en una única plataforma. Pilotos avanzados en tecnologías emergentes. ',
            ],
            PortugueseBR: [
                'Usamos soluções on-premises. Duvidamos da segurança na nuvem e nos preocupamos com a propriedade dos dados. ',
                'A nuvem é usada em alguns departamentos. Estamos examinando como a nuvem pode fornecer suporte para nossas estratégias. ',
                'Estratégia de nuvem corporativa implementada. Fornecedores de nuvem distintos, alguns projetos de automação. ',
                'Estratégia de nuvem corporativa em uma única plataforma. Projetos-piloto avançados com tecnologias emergentes. ',
            ],
            SpanishLAD: [
                'Utilizamos soluciones on-premises. Dudamos de la seguridad en la nube y nos preocupa la propiedad de los datos. ',
                'Nube utilizada en algunos departamentos. Examinando cómo la nube puede respaldar nuestras estrategias. ',
                'Estrategia corporativa de nube implementada. Proveedores de nube separados, algunos proyectos de automatización. ',
                'Estrategia corporativa de nube en una sola plataforma. Pilotos avanzados en tecnologías emergentes. ',
            ]
        },
        negCopy: {
            English: 'Q1 CFO COPY english',
            Spanish: 'Q1 CFO COPY spanish',
            Albania: 'Q1 CFO COPY albania',
            Filipino: 'Q1 CFO COPY filipino',
        },
        negLink:{
            English: 'Q1 CFO LINK english',
            Spanish: 'Q1 CFO LINK spanish',
            Albania: 'Q1 CFO LINK albania',
            Filipino: 'Q1 CFO LINK filipino',
        }
    }),
    new QuestionObj({
        questionSet:{
            English: 'How do you manage master data changes to your finance systems?',
        German: 'Wie werden Änderungen an den Stammdaten in Ihren Finanzsystemen verwaltet?',
        French: "Comment modifiez-vous vos données principales dans les systèmes financiers ?",
        Russian: "Как организовано управление изменениями основных данных в фин. системах компании?",
        Turkish: "Finans sistemlerinizdeki ana veri değişikliklerini nasıl yönetiyorsunuz?",
        Italian: "Come gestite le modifiche dei master data nei vostri sistemi finanziari?",
        Spanish: "¿Cómo gestiona los cambios de los datos maestros en sus sistemas financieros?",
        PortugueseBR: "Como são gerenciadas as alterações de dados mestres nos seus sistemas financeiros ?",
        SpanishLAD: "¿Cómo gestionas los cambios en los datos maestros de tus sistemas financieros?",
        },
        answerSet:{
            English: [
                "A tedious, lengthy process using spreadsheets, emails, and meetings.",
                "Less manual but top-down process with little input from affected departments and systems.",
                "Changes documented & standardized, but mostly top-down with little input from affected teams.",
                "Enterprise-wide data management that’s agile, bi-directional, bottom-up and crowdsourced.",
            ],
              German: [
                'Mühsamer, langwieriger Prozess mit Tabellenkalkulationen, E-Mails und Meetings.',
                'Reduzierter, von oben nach unten strukturierter Prozess mit wenig Angaben von betroffenen Abteilungen und Systemen.',
                'Änderungen dokumentiert und standardisiert, zumeist von oben nach unten strukturierter Prozess, wenig Angaben von den Teams. ',
                'Unternehmensweite Datenverwaltung, agil und bidirektional, von unten nach oben strukturiert und auf Crowdsourcing basierend. ',
            ],
            French: [
                'C’est un processus long et fastidieux géré à l’aide de tableurs, d’e-mails et de réunions.',
                'C’est un processus moins manuel mais très hiérarchisé, dans lequel les départements et systèmes concernés sont peu impliqués.',
                'Les modifications sont documentées et normalisées, mais ce processus est hiérarchisé et les équipes concernées peu impliquées.',
                'La gestion des données se fait à l’échelle de l’entreprise avec un processus ascendant, agile, et participatif. ',
            ],
            Russian: [
                'Трудоемкий и длительный процесс с использованием таблиц, реализуемый посредством электронной почты и встреч.',
                'Частично автоматизированный процесс по принципу "сверху-вниз", участвуют отделы и системы, которых затрагивают эти изменения.',
                'Задокументированный и стандартизованный процесс, в основном по принципу "сверху-вниз", минимальное участие отделов в процессе.',
                'Управление данными в масштабе предприятия: гибкое, двунаправленное, восходящее и краудсорсинговое. ',
            ],
            Turkish: [
                'Veri tablolarının, e-postaların ve toplantıların kullanıldığı zahmetli, uzun süreçler.',
                'Etkilenen departman ve sistemlerden çok az girdinin olduğu daha az manuel, ancak yukarıdan aşağı süreçler.',
                'Değişiklikler belgeli ve standartlaştırılmış, ancak çoğunlukla etkilenen ekiplerden pek az girdiyle yukarıdan aşağı. ',
                'İşletme genelinde atik, iki yönlü, aşağıdan yukarı ve kitlesel kaynaktan beslenen veri yönetimi.',
            ],
             Italian: [
                'È un processo noioso e lungo, che richiede l\'utilizzo di fogli di calcolo, e-mail e riunioni.',
                'È un processo meno manuale, che procede dall\'alto verso il basso con pochi input da parte dei reparti e sistemi interessati.',
                'Modifiche documentate e standardizzate, avvengono dall\'alto verso il basso con pochi input da parte dei team interessati.',
                'La gestione dei dati a livello aziendale è agile, bidirezionale, dal basso verso l\'alto e tramite crowdsourcing.  ',
            ],
            Spanish: [
                'Un proceso tedioso y dilatado usando hojas de cálculo, correos electrónicos y reuniones.',
                'Un proceso menos manual pero descendente, con escasas aportaciones de los departamentos y los sistemas afectados.',
                'Los cambios se documentan y estandarizan, sobre todo de forma descendente, con pocas aportaciones de los equipos afectados.',
                ' Una gestión de los datos en el conjunto de la empresa ágil, bidireccional, ascendente y con aportaciones diversas. ',
            ],
            PortugueseBR: [
                'Processo cansativo e demorado com uso de planilhas, emails e reuniões.',
                'Processo menos manual, mas descendente, com pouca contribuição dos departamentos e sistemas afetados. ',
                'Mudanças documentadas e padronizadas, mas o processo é principalmente descendente, com pouca contribuição das equipes afetadas.',
                'Gestão de dados em toda a organização: ágil, bidirecional, ascendente e colaborativa. ',
            ],
            SpanishLAD: [
                'Un proceso tedioso y largo que utiliza hojas de cálculo, correos electrónicos y reuniones.',
                'Un proceso menos manual, pero con poca información de los departamentos y sistemas afectados.',
                'Cambios documentados y estandarizados, pero en su mayoría con poca información de los equipos afectados. ',
                'Gestión de datos a nivel empresarial ágil, bidireccional, fundamental y de colaboración abierta. ',
            ]
        },
        negCopy: {
            English: 'Q2 CFO COPY english',
            Spanish: 'Q2 CFO COPY spanish',
            Albania: 'Q2 CFO COPY albania',
            Filipino: 'Q2 CFO COPY filipino',
        },
        negLink:{
            English: 'Q2 CFO LINK english',
            Spanish: 'Q2 CFO LINK spanish',
            Albania: 'Q2 CFO LINK albania',
            Filipino: 'Q2 CFO LINK filipino',
        }
    }),
    new QuestionObj({
                questionSet: {
                    English: 'What does your process look like for onboarding acquired companies?',
                    German: 'Welchen Prozess verwenden Sie für das Eingliedern übernommener Firmen?',
                    French: "Quel processus avez-vous mis en place pour les entreprises récemment acquises ?",
                    Russian: "Как выглядит ваш процесс интеграции приобретенных компаний?",
                    Turkish: "Satın alınan şirketlerin uyumu için nasıl bir süreç kullanıyorsunuz?",
                    Italian: "Come avviene il processo di incorporazione delle società acquisite?",
                    Spanish: "¿Cómo describiría el proceso para incorporar a las empresas adquiridas?",
                    PortugueseBR: "Como é o processo de integração das empresas adquiridas?",
                    SpanishLAD: "¿Cómo es el proceso para incorporar empresas adquiridas?",
                },
                answerSet: {
                    English: [
                "We use many on-premises systems. No end-to-end integration process. Manual data management.",
                "Onboarding policies and associated processes are standardized throughout the company.",
                "We use sophisticated processes and tools to onboard acquired companies and migrate data.",
                "We onboard new companies and employees fast with common forecasting, headcount realignment, optimizations."
            ],
                    German: [
                'Wir verwenden viele On-Premise-Systeme. Kein durchgängiger Integrationsprozess. Manuelle Datenverwaltung. ',
                'Die Eingliederungsrichtlinien und zugehörigen Prozesse sind im gesamten Unternehmen standardisiert. ',
                'Wir nutzen differenzierte Prozesse und Tools, um übernommene Firmen einzugliedern und Daten zu migrieren.  ',
                'Wir gliedern Unternehmen und Mitarbeiter mit gängigen Prognosen, Optimierung des Personalbestands und Optimierungen ein.',
            ],
                    French: [
                'Plusieurs systèmes sur site. Aucun processus d’intégration de bout en bout. La gestion des données se fait manuellement.',
                'Les politiques d’intégration et les processus associés sont normalisés dans toute l’entreprise. ',
                'Processus et outils sophistiqués pour intégrer les entreprises récemment acquises et organiser la migration des données. ',
                'Intégration rapide grâce à des prévisions communes, un équilibrage des effectifs et des stratégies d’optimisation.   ',
            ],
                    Russian: [
                'Мы используем множество локальных систем. Нет сквозного процесса интеграции. Ручное управление данными.',
                'Политика адаптации и связанные с ней процессы стандартизированы для всех подразделений компании. ',
                'Мы используем сложные процессы и инструменты для введения приобретенных компаний и переноса данных. ',
                'Интеграция новых компаний и сотрудников идет быстро посредством общих прогнозов, перераспределения персонала и оптимизации.',
            ],
                    Turkish: [
                'Birçok iş yeri sistemi kullanıyoruz. Uçtan uca entegrasyon süreci yok. Manuel veri yönetimi.',
                'Uyum sağlama (onboarding) politikaları ve ilişkili süreçler şirketin tamamında standartlaştırılmıştır.',
                'Edinilen şirketlerin uyumlaştırılması ve veri aktarımı için sofistike süreçler ve araçlar kullanıyoruz. ',
                'Ortak tahmin, personel sayısı ayarlama ve optimizasyonla yeni şirketlerin ve çalışanların hızlı uyumunu sağlıyoruz. ',
            ],
                    Italian: [
                'Usiamo molti sistemi locali. Non c\'è nessun processo di integrazione end-to-end e i dati sono gestiti manualmente. ',
                'Le politiche di integrazione e i processi associati sono standardizzati in tutta l\'azienda. ',
                'Utilizziamo processi e strumenti sofisticati per integrare le aziende acquisite e migrare i dati.',
                'Integriamo rapidamente nuove aziende e dipendenti con previsioni comuni, riallineamento del personale e ottimizzazioni.',
            ],
                    Spanish: [
                'Utilizamos muchos sistemas locales. No hay un proceso de integración completo. Gestión manual de los datos.',
                'Las políticas de incorporación y los procesos asociados están estandarizados en el conjunto de la empresa. ',
                'Utilizamos procesos y herramientas sofisticados para incorporar a las empresas adquiridas y transferir los datos. ',
                'Incorporamos a las nuevas empresas y empleados rápidamente con proyecciones, reajustes de plantilla y optimizaciones comunes.',
            ],
                    PortugueseBR: [
                'Usamos vários sistemas on-premises. Não há nenhum processo de integração de ponta a ponta. O gerenciamento de dados é manual.',
                'As políticas de integração e os processos associados são padronizados em toda a organização. ',
                'Usamos processos e ferramentas sofisticados para integrar empresas adquiridas e migrar dados. ',
                'Integramos novas empresas e funcionários rapidamente, com previsões comuns, realinhamento de pessoal e otimizações.',
            ],
                    SpanishLAD: [
                'Utilizamos muchos sistemas on-premises. No disponemos de un proceso de integración integral. Gestión manual de datos.',
                'Las políticas de incorporación y los procesos asociados están estandarizados en toda la empresa.',
                'Utilizamos procesos y herramientas sofisticados para incorporar empresas adquiridas y migrar datos.  ',
                'Incorporamos rápidamente nuevas empresas y empleados con pronósticos comunes, reajustes de personal y optimizaciones.',
            ]
                },
        negCopy: {
            English: 'Q3 CFO COPY english',
            Spanish: 'Q3 CFO COPY spanish',
            Albania: 'Q3 CFO COPY albania',
            Filipino: 'Q3 CFO COPY filipino',
        },
        negLink:{
            English: 'Q3 CFO LINK english',
            Spanish: 'Q3 CFO LINK spanish',
            Albania: 'Q3 CFO LINK albania',
            Filipino: 'Q3 CFO LINK filipino',
        }
    }),
    new QuestionObj({
        questionSet:{
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
        answerSet:{
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
                'Integramos la información de las filiales en el sistema ERP corporativo para la realización de los informes financieros.' ,
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
            English: 'Q4 CFO COPY english',
            Spanish: 'Q4 CFO COPY spanish',
            Albania: 'Q4 CFO COPY albania',
            Filipino: 'Q4 CFO COPY filipino',
        },
        negLink:{
            English: 'Q4 CFO LINK english',
            Spanish: 'Q4 CFO LINK spanish',
            Albania: 'Q4 CFO LINK albania',
            Filipino: 'Q4 CFO LINK filipino',
        }
    }),
new QuestionObj({
        questionSet:{
            English: 'How connected is your budgeting and planning process?',
            German: 'Wie zusammenhängend ist Ihr Finanzplanungs- und Planungsprozess?',
            French: "Le processus de budgétisation et de planification est-il connecté ?",
            Russian: "Насколько взаимосвязаны процессы бюджетирования и планирования в вашей компании?",
            Turkish: "Bütçeleme ve planlama süreciniz ne kadar bağlantılı?",
            Italian: "Quanto sono connessi i vostri processi di pianificazione e budget?",
            Spanish: "¿Están conectados los procesos de presupuestación y planificación?",
            PortugueseBR: "Quão conectado é o processo de orçamento e planejamento da sua organização?",
            SpanishLAD: "¿Qué tan conectado está el proceso de presupuesto y planificación?",
        },
        answerSet:{
            English: [
                'Finance drives the overall planning process with little input from lines of business.',
                'We send budget spreadsheets to lines of business to input assumptions and numbers.',
                'Each LOB manages their own budget and plan, sending high-level data to finance.',
                'Planning process connected across finance and LOBs. Best practices built into systems.',
            ],
           German: [
                'Das Finanzwesen treibt den gesamten Planungsprozess mit wenig Angaben von den Geschäftsbereichen.',
                'Wir senden Finanzplanungs-Tabellenkalkulationen an die Geschäftsbereiche, damit sie Annahmen und Zahlen eintragen. ',
                'Jede Bereichsleitung verwaltet eigene Budgets und Pläne; eine allgemeine Datenübersicht wird an die Finanzabteilung gesendet. ',
                'Planungsprozess eng in die Finanzabteilung und die Bereichsleitungen eingebunden. Best Practices in die Systeme integriert. ',
            ],
            French: [
                'Les services financiers gèrent le processus global de planification et les départements sont peu impliqués.',
                'Nous transmettons les tableurs relatifs au budget aux départements qui y saisissent leurs hypothèses et chiffres.',
                'Chaque département gère son budget et ses plans, et transmet les données essentielles aux services financiers. ',
                'Le processus de planification relie les services financiers aux départements. Les bonnes pratiques sont intégrées aux systèmes.',
            ],
            Russian: [
                'Финансовый департамент осуществляет общий процесс планирования, который лишь немного корректируется другими подразделениями.',
                'Каждое подразделение компании проводит планирование доходов и расходов, внося свои данные в общую смету.',
                'Каждое подразделение компании управляет своим собственным бюджетом и планом, передавая данные в финансовый департамент.',
                ' Процесс планирования интегрирован в работу финансового отдела и других подразделений. Лучшие практики реализованы в системах.',
            ],
            Turkish: [
                'Finans bölümü, iş kollarından pek girdi almadan genel planlama sürecini yürütüyor.',
                'Bütçe veri tablolarını iş kollarına göndererek varsayımların ve rakamların girilmesini sağlıyoruz.',
                'Her bir iş kolu kendi bütçesini ve planını yöneterek yüksek düzeyli verileri finans bölümüne gönderiyor.',
                'Planlama süreci finans ve iş kolları arasında bağlantılı. En iyi uygulamalar sistemlere entegre edilmiş.',
            ],
             Italian: [
                'Il Finance guida l\'intero processo di pianificazione con pochi input da parte delle linee di business.',
                'Inviamo fogli di calcolo sui budget alle linee di business per l\'inserimento di ipotesi e valori. ',
                'Ogni LOB gestisce il proprio budget e piano, inviando dati di alto livello al Finance.',
                'Il processo di pianificazione è connesso al Finance e alle LOB. Le migliori prassi sono integrate nei sistemi.',
            ],
            Spanish: [
                'Finanzas se ocupa del proceso de planificación general con escasas aportaciones de las líneas de negocio.',
                'Enviamos hojas de cálculo presupuestarias a las líneas de negocio para que aporten sus estimaciones y cifras.',
                'Cada línea de negocio gestiona su propia presupuestación y planificación y envía datos de alto nivel a finanzas. ',
                'Proceso de planificación conectado entre finanzas y líneas de negocio. Las mejores prácticas se integran en los sistemas.',
            ],
            PortugueseBR: [
                'O departamento financeiro conduz todo o processo de planejamento, com pouca contribuição das linhas de negócios.',
                'Enviamos planilhas de orçamento para as linhas de negócios inserirem pressuposições e números.',
                'Cada LOB gerencia seu próprio orçamento e plano, enviando dados de alto nível ao departamento financeiro.',
                'Processo de planejamento conectado entre finanças e LOBs. Melhores práticas incorporadas aos sistemas.',
            ],
            SpanishLAD: [
                'Las finanzas impulsan el proceso de planificación general con poca aportación de las líneas de negocio.',
                'Enviamos hojas de cálculo del presupuesto a las líneas de negocio para introducir suposiciones y números.',
                'Cada LOB gestiona su propio presupuesto y plan, enviando datos de alto nivel al departamento de finanzas.',
                'Proceso de planificación conectado entre departamento de finanzas y LOB. Prácticas recomendadas integradas en los sistemas.',
            ]

        },
        negCopy: {
            English: 'Q5 CFO COPY english',
            Spanish: 'Q5 CFO COPY spanish',
            Albania: 'Q5 CFO COPY albania',
            Filipino: 'Q5 CFO COPY filipino',
        },
        negLink:{
            English: 'Q5 CFO LINK english',
            Spanish: 'Q5 CFO LINK spanish',
            Albania: 'Q5 CFO LINK albania',
            Filipino: 'Q5 CFO LINK filipino',
        }
    }),
    new QuestionObj({
        questionSet:{
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
        answerSet:{
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

export default FSQuestionSet;