import QuestionObj from '../Models/QuestionObj';

const STRATDQuestionSet = [    
       new QuestionObj({
        questionSet:{
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

        answerSet:{
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
  new QuestionObj({
        questionSet:{
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
        answerSet:{
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
                'Es gibt eine unternehmensweite Cloud-Strategie auf einer Plattform und innovative Pilotprojekte zu neuen Technologien.' ,
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
            English: 'Q6 CFO COPY english',
            Spanish: 'Q6 CFO COPY spanish',
            Albania: 'Q6 CFO COPY albania',
            Filipino: 'Q6 CFO COPY filipino',
        },
        negLink:{
            English: 'Q6 CFO LINK english',
            Spanish: 'Q6 CFO LINK spanish',
            Albania: 'Q6 CFO LINK albania',
            Filipino: 'Q6 CFO LINK filipino',
        }
    }),
];

export default STRATDQuestionSet;