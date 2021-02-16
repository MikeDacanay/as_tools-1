import QuestionObj from '../Models/QuestionObj';

const FPAQuestionSet = [    
    new QuestionObj({
        questionSet:{
            English: 'What are your budgeting and forecasting capabilities?',
        German: 'Über welche Finanzplanungs- und Prognosefähigkeiten verfügen Sie derzeit?',
        French: "Comment gérez-vous votre budget et vos prévisions ?",
        Russian: "Как в вашей компании построены процессы бюджетирования и прогнозирования?",
        Turkish: "Bütçeleme ve tahmin yetenekleriniz nelerdir?",
        Italian: "Come definiresti le capacità di budget e forecast della tua azienda?",
        Spanish: "¿De qué capacidades para presupuestos y proyecciones dispone?",
        PortugueseBR: "Quais são os seus recursos de orçamento e previsão?",
        SpanishLAD: "¿Cuáles son tus capacidades de presupuesto y pronóstico?",
        },
        answerSet:{
            English: [
                'Cumbersome and time-consuming processes. Lots of spreadsheets, data collection and manipulation.',
                'Partly defined, informally communicated to LOBs. Forecasts inconsistent and informal.',
                'Partially integrated planning and forecasting. Can create one plan based on performance and trends.',
                'Fully streamlined. Timely financial reports. Predictive and what-if scenario planning.'
            ],
            German: [
                'Umständliche und zeitaufwändige Abläufe. Viele Tabellenkalkulationen, viel Datenerfassung und -bearbeitung.',
                'Teilweise festgelegt, informell an Bereichsleitung kommuniziert. Prognosen inkonsistent und informell.',
                'Teilweise integrierte Planung und Prognose. Einzelne Pläne können auf Basis von Performance und Trends erstellt werden.',
                'Rundum optimiert. Zeitnahe Finanzberichte. Prädiktive und Was-wäre-wenn-Szenarioplanung.',
            ],
            French: [
                'Processus lourds et chronophages. Beaucoup de tableurs, de collecte et de manipulation des données.',
                'Processus partiellement définis, transmis de manière informelle aux départements. Prévisions ni cohérentes ni formelles.',
                'Intégration partielle de la planification et des prévisions. Création d’un plan unique basé sur les performances et tendances.',
                'Processus entièrement rationalisé. Rapports financiers fournis en temps et en heure. Planification par scénario.',
            ],
            Russian: [
                'Громоздкие и трудоемкие процессы. Множество электронных таблиц, сбор и обработка данных.',
                'Частично регламентированы, нет официального обмена информацией между подразделениями. Прогнозы противоречивые и неофициальные.',
                'Частично интегрированное планирование и прогнозирование. Можно создать один общий план на основе результатов и тенденций.',
                'Четко организованные процессы. Своевременная финансовая отчетность. Планирование прогнозов и альтернативных сценариев.',
            ],
            Turkish: [
                'Hantal, zaman alan süreçler. Yığınla veri tablosu, veri toplama ve manipulasyon.',
                'Kısmen tanımlı, iş kollarına gayriresmî olarak iletiliyor. Tahminler tutarsız ve gayriresmî.',
                'Kısmen entegre planlama ve tahmin. Performansa ve eğilimlere dayalı bir plan oluşturulabilir.',
                'Tam anlamıyla etkili. Zamanında gelen mali raporlar. Öngörülü ve duruma dayalı senaryo planlaması.',
            ],
             Italian: [
                'Sono processi laboriosi, che richiedono tempo. Usiamo molti fogli di calcolo per la raccolta e manipolazione dei dati.',
                'Processi parzialmente definiti, comunicati informalmente alle LOB. Sviluppiamo forecast non coordinati e non strutturati.',
                'Usiamo pianificazioni e previsioni parzialmente integrate. Siamo in grado di creare un piano basato su performance e tendenze.',
                'Siamo molto efficienti a riguardo. Sviluppiamo reporting tempestivi, pianificazioni predittive e su scenari ipotetici.',
            ],
            Spanish: [
                'Procesos difíciles y prolongados. Muchas hojas de cálculo, recolección y manipulación de datos.',
                'Definidos parcialmente y comunicados de manera informal a las líneas de negocio. Proyecciones incoherentes e informales.',
                'Planificación y proyecciones parcialmente integradas. Se puede crear un plan en base al rendimiento y las tendencias.',
                'Plenamente optimizada. Informes financieros oportunos. Planificación de escenarios predictiva y basada en hipótesis.',
            ],
            PortugueseBR: [
                'Processos complexos e demorados. Muitas planilhas, coleta e manipulação de dados.',
                'Parcialmente definidos, comunicados informalmente às linhas de negócios. Previsões inconsistentes e informais.',
                'Planejamento e previsão parcialmente integrados. É possível criar um plano baseado em desempenho e tendências.',
                'Totalmente simplificado. Relatórios financeiros oportunos. Planejamento de cenários preditivos e hipotéticos.',
            ],
            SpanishLAD: [
                'Procesos engorrosos y lentos. Muchas hojas de cálculo, recopilación y manipulación de datos.',
                'Parcialmente definidos, comunicados informalmente a los LOB. Pronósticos inconsistentes e informales.',
                'Planificación y previsión parcialmente integradas. Puede crear un plan basado en el desempeño y las tendencias.',
                ' Totalmente simplificado. Informes financieros oportunos. Planificación predictiva y de escenarios hipotéticos.',
            ],
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
            ],

        },
        negCopy: {
            English: 'Q5 FIN COPY english',
            Spanish: 'Q5 FIN COPY spanish',
            Albania: 'Q5 FIN COPY albania',
            Filipino: 'Q5 FIN COPY filipino',
        },
        negLink:{
            English: 'Q5 FIN LINK english',
            Spanish: 'Q5 FIN LINK spanish',
            Albania: 'Q5 FIN LINK albania',
            Filipino: 'Q5 FIN LINK filipino',
        }
    }),
    new QuestionObj({
                questionSet: {
                    English: 'How do you perform scenario modeling and long-range plans?',
                    German: 'Wie führen Sie Szenariomodellierung und langfristige Pläne durch?',
                    French: "Êtes-vous en mesure de modéliser des scénarios et de planifier à long terme ?",
                    Russian: "Как осуществляется сценарное моделирование и долгосрочное планирование в компании?",
                    Turkish: "Senaryo modellemeyi ve uzun vadeli planları nasıl yürütüyorsunuz?",
                    Italian: "Come sviluppate la modellazione degli scenari e i piani a lungo termine?",
                    Spanish: "¿Cómo simula los modelos de escenarios y los planes a largo plazo?",
                    PortugueseBR: "Como a modelagem de cenário e os planos de longo prazo são executados?",
                    SpanishLAD: "¿Cómo se realiza el análisis del panorama y los planes a largo plazo?",
                },

                answerSet: {
                    English: [
                'No formal scenario modeling or long range planning. Planning and budgeting done yearly.',
                'Scenario modeling done mainly in Excel, with little or no input from business units.',
                'Scenario modeling and long-range planning done outside traditional planning system.',
                'Scenario modeling and long-range planning capabilities integrated with financial and operational plans.',
            ],
                    German: [
                'Es gibt keine formelle Szenariomodellierung oder langfristige Prognosen. Planung und Finanzplanung erfolgen jährlich.',
                'Szenariomodellierung überwiegend in Excel, mit wenigen oder keinen Angaben von den Geschäftsbereichen. ',
                'Szenariomodellierung und langfristige Prognosen erfolgen außerhalb des traditionellen Planungssystems. ',
                'Funktionen für Szenariomodellierung und langfristige Prognose sind in Finanz- und Betriebspläne integriert. ',
            ],
                    French: [
                'Aucun processus formel de modélisation de scénarios et de planification à long terme. Nous le faisons une fois par an.',
                'La modélisation de scénarios se fait principalement sur Excel et les départements concernés ne sont pas ou peu impliqués.' ,
                'La modélisation de scénarios et la planification à long terme se font en dehors du système de planification classique. ',
                'Notre modélisation de scénarios et notre planification à long terme sont intégrées aux plans financiers et opérationnels. ',
            ],
                    Russian: [
                'Нет формализованного сценарного моделирования или долгосрочного планирования. Ежегодное планирование и бюджетирование.',
                'Моделирование сценариев выполняется в основном в Excel с минимальным участием бизнес-подразделений или без него. ',
                'Моделирование сценариев и долгосрочное планирование выполняются в специально разработанной системе планирования. ',
                'Возможности моделирования сценариев и долгосрочного планирования встроены в системы финансового и операционного планирования.',
            ],
                    Turkish: [
                'Formel (resmî) bir senaryo modelleme veya uzun vadeli planlama yok. Planlama ve bütçeleme yıllık yapılıyor.',
                'Senaryo modelleme temel olarak Excel\'de yapılıyor, iş birimlerinden pek az girdi var ya da hiç girdi yok.',
                'Senaryo modelleme ve uzun vadeli planlama geleneksel planlama sisteminin dışında yapılıyor.',
                'Senaryo modelleme ve uzun vadeli planlama yetenekleri finans ve faaliyet planlarıyla entegre edilmiştir.',
            ],
                    Italian: [
                'Nessun scenario o pianificazione a lungo termine. Pianificazione e bilancio sono effettuati annualmente.',
                'La modellazione degli scenari è eseguita principalmente in Excel, con input minimi o nulli da parte delle unità aziendali. ',
                'Modellazione degli scenari e pianificazione a lungo termine eseguite al di fuori del sistema di pianificazione tradizionale.',
                'Modellazione degli scenari e capacità di pianificazione a lungo termine sono integrate con piani finanziari e operativi. ',
            ],
                    Spanish: [
                'No hay un modelo de escenarios formal ni planificación a largo plazo. La planificación y la presupuestación son anuales.',
                'Los escenarios se simulan principalmente en Excel, con poca o ninguna aportación de las unidades de negocio. ',
                'La simulación de escenarios y la planificación a largo plazo se realizan fuera del sistema de planificación tradicional. ',
                'Funciones de simulación de escenarios y planificación a largo plazo integradas con los planes financieros y operativos. ',
            ],
                    PortugueseBR: [
                'Não há modelagem formal de cenários ou planejamento de longo prazo. Planejamento e orçamento são feitos anualmente.',
                'A modelagem de cenários é feita principalmente em Excel, com pouca ou nenhuma contribuição das unidades de negócios. ',
                'A modelagem de cenários e o planejamento de longo prazo são feitos fora do sistema de planejamento tradicional. ',
                'Os recursos de modelagem de cenários e planejamento de longo prazo são integrados com os planos financeiros e operacionais.',
            ],
                    SpanishLAD: [
                'No contamos con un análisis del panorama ni una planificación a largo plazo. Planificación y presupuestos realizados anualmente.',
                'Análisis de panorama realizado principalmente en Excel, con poca o ninguna información de unidades de negocio. ',
                'Análisis de panorama y planificación a largo plazo realizados fuera del sistema de planificación tradicional. ',
                'Análisis de panorama y capacidades de planificación a largo plazo integradas con los planes financieros y operativos. ',
            ],
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
            English: 'How do you measure which products or services are profitable?',
            German: 'Wie messen Sie, welche Produkte oder Services rentabel sind?',        
            French: "Comment évaluez-vous la rentabilité des produits et services ?",
            Russian: "Как вы оцениваете, какие продукты или услуги являются прибыльными?",
            Turkish: "Hangi ürün veya hizmetlerin kârlı olduğunu nasıl ölçüyorsunuz?",
            Italian: "Come misurate i prodotti o servizi più profittevoli?",
            Spanish: "¿Cómo determina qué productos o servicios son rentables?",
            PortugueseBR: "Como é medida a lucratividade de produtos ou serviços na sua organização?",
            SpanishLAD: "¿Cómo se mide qué productos o servicios son rentables?",
        },
        answerSet:{
            English: [
                'We don’t currently have the ability to do this at a detailed level.',
                'We rely on standard reporting to track costs and profitability at a high level.',
                'We use GL to allocate costs, but can’t easily model costs of new initiatives.',
                'We use a purpose-built profitability and cost management tool.',
            ],
            German: [
                'Wir können das derzeit nicht mit hohem Detailgrad tun.',
                'Wir verlassen uns auf Standardberichte, um die Kosten ganz allgemein zu verfolgen.',
                'Wir ordnen Kosten mit dem Hauptbuch zu, können aber die Kosten neuer Initiativen nicht so einfach modellieren.',
                'Wir verwenden ein speziell entwickeltes Rentabilitäts- und Kostenverwaltungstool.',
            ],
            French: [
                'Nous n’avons pour le moment pas la possibilité de le faire de façon détaillée.',
                'Nous utilisons des méthodes de reporting standard pour suivre les coûts et la rentabilité de manière très générale.',
                'Le grand livre nous permet de gérer l’allocation des coûts, mais il est difficile de modéliser le coût de nouveaux projets.',
                'Nous utilisons un outil sur mesure de gestion des coûts et de la rentabilité.',
            ],
            Russian: [
                'В настоящее время у нас нет возможности рассматривать этот вопрос детально.',
                'Мы полагаемся на стандартную отчетность, чтобы отслеживать общие расходы и рентабельность, не вдаваясь в подробности.',
                'Мы ведем Главную книгу, распределяя затраты между счетами, но не можем моделировать затраты на новые инициативы.',
                'Мы используем специальный инструмент для управления рентабельностью и расходами. ',
            ],
            Turkish: [
                'Hâlihazırda bunu ayrıntılı bir düzeyde yapma yeteneğimiz yok.',
                'Maliyetleri ve kârlılığı yüksek düzeyde takip etmek için standart raporlamaya güveniyoruz.',
                'Maliyet tahsisi için ana defteri kullanıyoruz, ancak yeni inisiyatiflerin maliyetlerini kolayca modelleyemiyoruz.',
                'Amaca özel geliştirilmiş bir kârlılık ve maliyet yönetimi aracı kullanıyoruz.',
            ],
             Italian: [
                'Al momento non siamo in grado di farlo in modo dettagliato.',
                'Facciamo affidamento sui rapporti standard per monitorare i costi e la redditività a un livello elevato.',
                'Usiamo il General Ledger contabile per allocare i costi, ma non possiamo modellare facilmente i costi delle nuove iniziative.',
                'Utilizziamo uno strumento di gestione dei costi e della profittabilità creato ad hoc.  ',
            ],
            Spanish: [
                'Actualmente no tenemos capacidad para hacerlo a un nivel muy detallado.',
                'Confiamos en los informes estándar para determinar los costes y la rentabilidad a un alto nivel.',
                'Utilizamos el libro mayor para asignar los costes, pero no es fácil anticiparlos cuando se trata de nuevas iniciativas.',
                'Utilizamos una herramienta de gestión de la rentabilidad y los costes diseñada específicamente.',
            ],
            PortugueseBR: [
                'Atualmente não temos a capacidade de fazer isso em um nível detalhado.',
                'Usamos relatórios padrão para monitorar custos e lucratividade em um alto nível.',
                'Usamos o registro geral para alocar custos, mas não conseguimos modelar os custos de novas iniciativas com facilidade. ',
                'Usamos uma ferramenta de gestão de custos e lucratividade criada para esse fim.',
            ],
            SpanishLAD: [
                'Actualmente no tenemos la posibilidad de hacerlo a un nivel detallado.',
                'Contamos con informes estándar para rastrear los costos y la rentabilidad a un alto nivel. ',
                'Utilizamos un libro mayor para asignar costos, pero no podemos modelar fácilmente los costos de nuevas iniciativas.',
                'Utilizamos una herramienta de gestión de rentabilidad y costos especialmente diseñada.',
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
            English: 'What is your evaluation process for M&A and divestitures?',
            German: 'Wie werden Fusionen, Übernahmen sowie Veräußerungen evaluiert?',
            French: "Comment évaluez-vous les fusions et acquisitions et les cessions ?",
            Russian: "Как вы оцениваете влияние процессов слияния и поглощения, а также продажи активов?",
            Turkish: "Şirket birleşmesi ve alımı ve elden çıkarma için değerlendirme süreciniz nedir?",
            Italian: "Qual è il vostro processo di valutazione per M&A e disinvestimenti?",
            Spanish: "¿Qué proceso de evaluación aplica en las fusiones, adquisiciones y desinversiones?",
            PortugueseBR: "Como é o seu processo de avaliação de fusões e aquisições e alienações?",
            SpanishLAD: "¿Cuál es tu proceso de evaluación para fusiones y adquisiciones y desinversiones?",
        },
        answerSet:{
            English: [
                'We evaluate acquisitions separate from strategic goals and impacts on existing business.',
                'We follow a selective plan, generating and managing multiple versions of M&A plans.',
                'Use a strategic planning system to create and compare many scenarios and evaluate business impact.',
                'We programmatically analyze impact on debt ratio, cash flow, stock price and other KPIs.',
            ],
            German: [   
                'Wir evaluieren Übernahmen getrennt von strategischen Zielen und Auswirkungen auf den bestehenden Geschäftsbetrieb.',
                'Wir folgen einem selektiven Plan, bei dem mehrere Versionen von Fusionen- und Übernahmeplänen generiert und verwaltet werden.', 
                'Wir haben ein strategisches Planungssystem, um viele Szenarien zu vergleichen und geschäftliche Auswirkungen zu evaluieren.',
                'Wir analysieren die Auswirkungen auf Schuldenquote, Cashflow, Aktienpreis und andere KPIs programmatisch. ',
            ],
            French: [
                'Les acquisitions sont évaluées sans tenir compte des objectifs stratégiques et de leur impact sur l’activité actuelle. ',
                'Nous suivons un plan sélectif, qui génère et gère plusieurs versions des plans de fusions et acquisitions.',
                'Un système de planification stratégique nous permet de créer et comparer les scénarios et évaluer leur impact commercial.',
                'Des programmes analysent l’impact sur le taux d’endettement, le cash flow, le cours des actions et d’autres KPI.',
            ],
            Russian: [
                'Процессы поглощения мы рассматриваем независимо от наших стратегических целей и их влияния на существующий бизнес.',
                'Мы создаем несколько версий планов с учетом слияния и поглощения, управляя ими, и далее следуем выбранному плану.',
                'Мы используем систему стратегического планирования для создания и сравнения множества сценариев и оценки их влияния на бизнес.',
                'Мы используем программные средства для анализа влияния этих процессов на финансовые показатели, курс акций и прочие KPI. ',
            ],
            Turkish: [
                'Şirket alımlarını stratejik hedeflerden ve mevcut işletme üzerindeki etkilerinden ayrı değerlendiririz.',
                'Seçici bir plan izliyoruz, şirket birleşmesi ve alımı (M&A) planlarının birden fazla sürümünü oluşturuyor ve yönetiyoruz.',
                'Birçok senaryoyu oluşturup kıyaslamak ve işletmeye etkisini değerlendirmek için bir stratejik planlama sistemi kullanıyoruz.',
                'Borç oranı, nakit akışı, hisse fiyatı ve diğer KPI\'lar üzerindeki etkisini programlı bir şekilde analiz ediyoruz.',
            ],
             Italian: [
                'Valutiamo le acquisizioni separatamente dagli obiettivi strategici e dagli impatti sul business esistente.',
                'Seguiamo un piano selettivo, generando e gestendo più versioni di piani di M&A. ',
                'Utilizziamo un sistema di pianificazione strategica per creare e confrontare più scenari e valutarne l\'impatto sul business.',
                'Analizziamo in modo programmatico l\'impatto sugli indici relativi al debito, sul flusso di cassa, sul P/E ratio e altri KPI.',
            ],
            Spanish: [
                'Evaluamos las adquisiciones independientemente de los objetivos estratégicos y el impacto en los negocios existentes.',
                'Aplicamos un plan selectivo, generando y gestionando múltiples versiones de planes de fusiones y adquisiciones.',
                'Utilizamos un sistema de planificación estratégica para crear y comparar varios escenarios y evaluar el impacto comercial.',
                'Analizamos mediante software el impacto en el ratio de deuda, el flujo de caja, el precio de las acciones y otros KPI.',
            ],
            PortugueseBR: [
                'Avaliamos as aquisições separadamente das metas estratégicas e dos impactos nos negócios existentes. ',
                'Seguimos um plano seletivo, gerando e gerenciando várias versões de planos de fusões e aquisições. ',
                'Usamos um sistema de planejamento estratégico para criar e comparar vários cenários e avaliar o impacto nos negócios. ',
                'Analisamos de forma programática o impacto sobre o índice de endividamento, fluxo de caixa, preço das ações e outros KPIs. ',
            ],
            SpanishLAD: [
                'Evaluamos las adquisiciones por separado de los objetivos estratégicos y los impactos en el negocio existente.',
                'Seguimos un plan selectivo, generando y gestionando múltiples versiones de planes de fusiones y adquisiciones.',
                'Utilizamos un sistema de planificación estratégica para crear y comparar escenarios y evaluar el impacto empresarial.',
                'Analizamos programáticamente el impacto en el ratio de deuda, el flujo de caja, el precio de las acciones y otros KPI.',
            ]
        },
    }),
    new QuestionObj({
        questionSet:{
            English: 'How do you adapt to new business models?',
            German: 'Wie passen Sie sich an neue Geschäftsmodelle an?',
            French: "Comment vous adaptez-vous aux nouveaux business models ?",
            Russian: "Как ваша компания адаптируется к новым бизнес-моделям?",
            Turkish: "Yeni iş modellerine nasıl ayak uydurursunuz?",
            Italian: "Come vi adattate ai nuovi modelli di business?",
            Spanish: "¿Cómo se adapta a los nuevos modelos de negocio?",
            PortugueseBR: "Como sua organização se adapta aos novos modelos de negócios?",
            SpanishLAD: "¿Cómo te adaptas a los nuevos modelos de negocio?",
        },
        answerSet:{
            English: [
                'No defined process. Our systems can’t quickly adapt to changes to current business model.',
                'Process partly defined but informal. Systems would need extensive customizations to adapt.',
                'Partly integrated process. Systems partly integrated but cobbled together and customized.',
                'Fully integrated systems, process. We can pivot business models and get to market quickly.',
            ],
            German: [
                'Kein festgelegter Prozess. Unsere Systeme können sich nicht schnell an Änderungen des derzeitigen Geschäftsmodells anpassen.',
                'Prozess teils festgelegt, aber informell. Die Systeme müssten umfangreich individuell konfiguriert werden, um sich anzupassen.',
                'Teilweise integrierter Prozess. Die Systeme sind teilweise integriert, aber zusammengeschustert und benutzerdefiniert.',
                'Vollständig integrierte Systeme und Prozesse. Wir können das Geschäftsmodell verändern und sind schnell marktfähig. ',
            ],
            French: [
                'Il n’y a pas de processus défini. Nos systèmes ne s’adaptent pas rapidement aux changements en cas de nouveau business model.',
                'Le processus est défini en partie mais reste informel. Les systèmes doivent subir de nombreux ajustements.  ',
                'Le processus est partiellement intégré. Les systèmes sont partiellement intégrés mais peuvent être ajustés et personnalisés.',
                'Les systèmes sont entièrement intégrés. Nous pouvons adapter le business model et nous lancer plus rapidement.',
            ],
            Russian: [
                'Нет четко определенного процесса. Наши системы не могут быстро адаптироваться к изменениям текущей бизнес-модели.',
                'Процесс частично определен, но не является формализованным. Адаптация потребует провести обширную модификацию системы.  ',
                'Процесс частично интегрирован. Системы частично интегрированы между собой через дополнительные настройки.',
                'Полностью интегрированные системы и процессы. Мы можем менять бизнес-модели и тут же продолжать нашу деятельность.',
            ],
            Turkish: [
                'Tanımlı bir süreç yok. Sistemlerimiz mevcut iş modelindeki değişmelere hızlı ayak uyduramıyor.',
                'Süreç kısmen tanımlı, ancak gayriresmî. Uyarlamak için sistemlerde kapsamlı özelleştirme gerekli.',
                'Kısmen entegre süreç. Sistemler kısmen entegre, ancak derme çatma ve özelleştirilmiş.',
                ' Sistemler, süreç tamamen entegre. İş modellerini bağlayabilir ve pazara hızlıca çıkabiliriz.',
            ],
             Italian: [
                'Non è un processo definito. I nostri sistemi non si adattano rapidamente ai cambiamenti dell\'attuale modello di business.',
                'È un processo in parte definito, ma informale. I sistemi avrebbero bisogno di ampie personalizzazioni per adattarsi.',
                'È un processo parzialmente integrato. Sistemi parzialmente integrati ma messi insieme in modo impreciso e personalizzati.',
                'Usiamo sistemi completamente integrati. Possiamo orientare i modelli di business e arrivare rapidamente sul mercato. ',
            ],
            Spanish: [
                'No hay un proceso definido. Nuestros sistemas no pueden adaptarse rápidamente a los cambios en el modelo de negocio actual.',
                'Proceso parcialmente definido pero informal. Los sistemas necesitarían transformaciones importantes para adaptarse.',
                'Proceso parcialmente integrado. Sistemas parcialmente integrados, pero coordinados y personalizados.',
                'Proceso y sistemas plenamente integrados. Podemos reorientar los modelos de negocio y salir al mercado rápidamente.',
            ],
            PortugueseBR: [
                'Não há um processo definido. Nossos sistemas não conseguem se adaptar rapidamente às mudanças no modelo de negócios atual.',
                'Processo parcialmente definido, mas informal. Os sistemas precisariam de muitas personalizações para se adaptar. ',
                'Processo parcialmente integrado. Sistemas parcialmente integrados, mas improvisados e personalizados.',
                'Processo com sistemas totalmente integrados. Podemos dinamizar os modelos de negócios e alcançar o mercado rapidamente. ',
            ],
            SpanishLAD: [
                'Procesos no definidos Nuestros sistemas no pueden adaptarse rápidamente a los cambios en el modelo de negocio actual. ',
                'Proceso parcialmente definido pero informal. Los sistemas necesitarían extensas personalizaciones para adaptarse. ',
                'Proceso parcialmente integrado. Sistemas parcialmente integrados, pero en conjunto y personalizados.',
                'Sistemas, procesos totalmente integrados. Podemos variar modelos de negocio y llegar al mercado rápidamente.',
            ]
        },
    }),
];

export default FPAQuestionSet;