const app = new Vue({
    el: '#app',
    data: {
        colors: [
            {
                id: 1,
                name: 'Оранжевый',
                introText: 'Оранжевый - это промежуточная версия между красным и желтым – более яркая и пестрая. Оттенок имеет множество поклонников, его используют не только в дизайне, одежде, но и в парикмахерском искусстве. ',
                backgroundImg: 'url("images/orange.jpg")',
                img1: "images/orange1.jpg",
                associationText: 'У большинства людей гамма ассоциируется с теплотой, радостью, счастьем. Она будто бы заряжает жизненными силами и энергией, поднимает настроение и настраивает на позитивную волну. Большая часть населения воспринимает его, как тепло, огонь или коммуникацию. Прямая ассоциация это конечно мандарины, лето и солнце. ',
                img2: 'images/orange2.jpg',
                meaningText: 'В китайской культуре оранжевый оттенок — это трансформация жизненной силы Солнца и огня. В буддизме он символизирует чистоту, прошедшую испытание огнём. Оранжевый — это признак преодоления человеческих пороков. В христианской традиции оранжевый цвет — признак духовной энергии серафимов — ангелов. Стены самого большого дворца во Флоренции — палаццо Питти, возведенного в XV в., тоже выкрашены в оранжевый. В религиях Востока оранжевый приравнивается к восходу солнца, т. е. неизбежного обновления, символа высшего.',
                usageText: 'Оранжевый цвет следует использовать в том случае, если Вы хотите добавить своему проекту больше жизни и энергии, когда Вы хотите выделить что-нибудь уникальное, или, если просто хотите немного разбавить холодную палитру Вашего проекта теплыми цветами. Также надо учитывать, что согласно опросам люди резко выбирают оранжевый как предпочтительный в веб-дизайне.',
                 img4: "images/orange4.jpg",
                img5: "images/orange5.jpg",
                img6: "images/orange6.jpg",
                img7: "images/orange3.jpg",
                footerColor: ' #e79775',
                class: 'norm-class',
            },
            {
                id: 2,
                name: 'Зелёный',
                introText: 'Зелёный - один из трёх наряду с красным и синим основных цветов. Зелень получается при сочетании желтизны и синего, поэтому интерпретировать ее можно по-разному. С одной стороны, она признана самой безопасной в мире. Неспроста такой сигнал в светофоре разрешает переходить проезжую часть. С другой, это знак жизни, гармонии и умиротворенности. Каждый, кто посмотрит на этот тон, будет ассоциировать его с ростом и развитием. ',
                backgroundImg: 'url("images/green.jpg")',
                img1: "images/green1.jpg",
                associationText: 'Главная трактовка, возникающая в голове у любого – это листва деревьев и цветков, ягоды, фрукты, растения. Часто можно встретить крокодилов и лягушек. Зелёный тон может снизить давление и мускульное напряжение, успокоить нервы, расслабить. Он ассоциируется со спокойствием и тихой жизнью. ',
                img2: 'images/green2.jpg',
                meaningText: 'На Западе зеленый цвет ассоциируется с ревностью, жадностью, неопытностью. Зеленый цвет является национальным цветом Мексики и используется как символ независимости от Испании. Однако на Ближнем Востоке зеленый - традиционный цвет ислама. Он символизирует богатство, удачу и плодородие.   В азиатских культурах он представляет новую жизнь, плодородие и молодость. В Китае, однако, он связан с изменой. В Израиле плохие новости обозначаются зеленым цветом. Женственность, изнеженность — на улицах Древнего Рима в зеленых одеяниях можно было встретить исключительно женщин. Земной путь — зеленые накидки на Иисусе Христе и апостолах указывали на их земную жизнь.',
                usageText: 'Зеленый цвет ассоциируется с природой, свежестью и весной. Применение этого цвета в дизайне является правильным решением, он эко-дружелюбный. Это идеальный цвет для сайтов, посвященных защите внешней среды, здоровью и красоте. Зеленый успешно используется компаниями, которые хотят визуально подчеркнуть свою связь с природой.',
                img4: "images/green4.jpg",
                img5: "images/green5.jpg",
                img6: "images/green6.jpg",
                img7: "images/green3.jpg",
                footerColor: ' #649772',
                class: 'norm-class',
            },
            {
                id: 3,
                name: 'Синий',
                introText: 'Синий цвет - цвет гармонии и спокойствия. Он призван расслаблять и приносить ощущение мира и гармонии. Один из самых востребованных цветов: он лидирует в топе любимых как среди мужчин, так и женщин. Этот цвет влияет на выработку в организме мелатонина — «гормона сна», помогающего ночью спать, а днём — бодрствовать.',
                backgroundImg: 'url("images/blue.jpg")',
                img1: "images/blue1.jpg",
                associationText: 'Синий чаще всего ассоциируется с небом и водой. Ассоциации с синими насыщенными тонами: достоинство, умеренность, спокойный, богатый. Оттенки синего служат для расслабления, снятия напряжения, тревоги.\n' +
                    '\n' +
                    'Синий — цвет духовно развитых людей, возвышенных, часто меланхоличных и скромных.',
                img2: 'images/blue2.jpg',
                meaningText: 'В индуизме этот цвет приписывают верховному богу Кришне. Стены храмов ранее принято было окрашивать в синие оттенки. В христианстве он настраивал на смирение, кротость и был олицетворением ясного неба. Древние египтяне использовали цвет в живописи, чтобы указать на правдивость изображаемых ими событий. в XII–XIII вв. вещи синего цвета говорили о достатке их владельца больше любых слов. А в Древнем Египте вообще один лишь фараон мог позволить себе иметь на судне синий флаг. Он сигнализировал другим судам, чтобы те уступали дорогу.',
                usageText: 'Синий наиболее часто в качестве любимого выбирают как мужчины, так и женщины. Главная причина выбора -  синий — цвет спокойствия. Он никогда не раздражает глаз и очень популярен в дизайне. Так же он передает человеку чувство доверия и защищенности.\n' +
                    '\n' +
                    'Наиболее часто синий выбирают представители власти.',
                img4: "images/blue4.jpg",
                img5: "images/blue5.jpg",
                img6: "images/blue6.jpg",
                img7: "images/blue3.jpg",
                footerColor: '#6789a3',
                class: 'norm-class',
            },
            {
                id: 4,
                name: 'Жёлтый',
                introText: 'Жёлтый - это один из самых ярких цветов спектра, плохо рассеивается в атмосфере. Он редко используется в качестве главного или основного цвета. Желтый используют в качестве дополнительного цвета к синему или фиолетовому. ',
                backgroundImg: 'url("images/yellow.jpg")',
                img1: "images/yellow1.jpg",
                associationText: ' При мысли о желтоватом тоне представляются образы всевозможных растений, фруктов, животных. Ведь он является довольно распространенным в природе. Он так же ассоциируется с солнцем, радостью и весельем. На прямую увидев желтый можно вспомнить цыплят, лимоны или бананы. Научно доказано, что гамма обеспечивает прилив позитивных чувств и эмоций. ',
                img2: 'images/yellow2.jpg',
                meaningText: 'Желтый — весьма противоречив и всегда характеризовался двояко. Солнце, божественное начало, великодушие, огонь. Именно так народы древней Азии рассматривали этот цвет. В древнем Риме он приписывался богу Солнца — «лучезарному» Аполлону. А в Египте считали, что кости богов состоят из золота и кожу их озаряет желтоватое свечение. В позднем христианстве желтый символизирует золотое обрамление иконы, духовный свет и самого бога. В Испании этот цвет использовался в одежде, чтобы обозначить еретиков. В Иране желтый ассоциируется с бледностью, болезненностью, а в Египте и Иордании считается цветом траура.',
                usageText: ' Светлые цвета чаще ассоциируются с радостью и теплом. Желтый цвет относится как раз к такому типу цветов. Желтый цвет невероятно яркий и полон энергии, способной сделать ваш сайт по-настоящему привлекательными. Кроме того, желтый цвет довольно динамичен, и у него есть множество оттенков, которые можно использовать в зависимости от предназначения и направления веб-сайта, начиная от бизнес-сайта, заканчивая блогом или социальной сетью.',
                img4: "images/yellow4.jpg",
                img5: "images/yellow5.jpg",
                img6: "images/yellow6.jpg",
                img7: "images/yellow3.jpg",
                footerColor: ' #ecd89c',
                class: 'norm-class',
            },
            {
                id: 5,
                name: 'Красный',
                introText: 'Красный цвет издавна притягивает людей. Сущность его противоречива и одновременно гармонична. Положительные свойства красного в любой момент могут обернуться тёмной стороной. Этот загадочный и многогранный цвет, притягательный для сильных натур, способен исцелить и причинить вред',
                backgroundImg: 'url("images/red.jpeg")',
                img1: "images/red1.jpeg",
                associationText: 'Это цвет движения, энергии, огня, страсти, любой активной деятельности. Чувственный и страстный, слегка агрессивный и притягивающий внимание. Красный цвет в первую очередь ассоциируется с огнем, потому кажется обжигающим, горячим. Отсюда его трактовка, как цвета чувственности и страсти, тепла, горячих объятий. Но огонь не только греет, он и обжигает, поэтому красный - это и цвет агрессии, доминирующей силы. Кроме того, красный всегда привлекает внимание. Поэтому это также цвет власти и шика. Отсюда же и красная ковровая дорожка.',
                img2: 'images/red2.jpeg',
                meaningText: 'В Индии красный — это материнство, в Риме — война.  Именно красный является любимчиком фортуны, как считают в Китае. У древних славян за богатый урожай отвечал бог Световид. Его образ, вытесанный из дерева, хранили за красными покрывалами в хижине с красной крышей. Красный ассоциируется с Новым годом и Рождеством в Европе и России. В Китае на Новый год окна и двери домов украшают алыми фонариками. Если верить Ветхому Завету Адам был создан из красной глины. Иисус Христос пролил свою кровь ради спасения народа. Это цвет помощи раненым и больным. Так, на машине скорой помощи изображен именно красный крест. ',
                usageText: 'Красный ассоциируется с опасностью, страстью, огнем и кровью. Он призывает к действию и незаменим, когда необходимо сконцентрировать внимание на чем-либо. Это самый сильный цвет для выражения настроения и чувств. Красный — уникальный цвет. Он способен вызывать сильные эмоции. Его активно используют в СМИ т.к. он отлично подходит для выражения настроения и чувств.',
                img4: "images/red4.jpeg",
                img5: "images/red5.jpeg",
                img6: "images/red6.jpeg",
                img7: "images/red7.jpeg",
                footerColor: '#630c0c',
                class: 'norm-class',
            },
            {
                id: 6,
                name: 'Чёрный',
                introText: ' Чёрный можно определить, как отсутствие цвета вообще, поскольку темнота не отражает световые потоки, а поглощает их. С другой стороны, художники уверяют, что чёрный цвет — сочетание всех возможных красок вместе. Поглощающий все остальные цвета, бездонный и содержательный. Скрывающий в себе всё и открыто не демонстрирующий ничего.',
                backgroundImg: 'url("images/black .jpg")',
                img1: "images/black1.jpg",
                associationText: 'ерный - это тьма, ночь, в нем постоянно ощущается присутствие чего-то. Это цвет сильных людей, авторитарный, вызывающий сильные противоречивые эмоции. Это цвет мистики , ночной темноты. В черном есть потенциал, тайна, которую хочется раскрыть. Черный считается цветом сдержанности, официальности - опять же, потому что кажется, что он отгораживает человека от внешнего мира.',
                img2: 'images/black2.jpg',
                meaningText: 'В исследованиях, касающихся психологии цвета в разных культурах, большинство ассоциирует черный цвет с формальностью и строгостью. Тем не менее, черный также связан с тайной, неудачей (черная кошка), болезнью, жестокостью, магией, трауром, злом и смертью. Черный цвет является символом мужественности, зрелости и возраста в Африке. Цвет представляет возрождение и траур на Ближнем Востоке.',
                usageText: 'черный - является одним из таких мощных цветов, который традиционно используется для обозначения тайны, власти и похожих чувств. Профессионально подготовленные дизайнеры прекрасно понимают мощь черного цвета. Они используют черный цвет стратегически, чтобы передать сообщение бренда, вызвав определенный набор эмоций. Даже современный графический дизайн приобретает новый смысл и цель, когда он включает в себя черный цвет.',
                img4: "images/black4.jpg",
                img5: "images/black5.jpg",
                img6: "images/black6.jpg",
                img7: "images/black3.jpg",
                footerColor: 'black',
                class: 'black-class',
            },
            {
                id: 7,
                name: 'Белый',
                introText: 'Белый является прямой противоположностью чёрного, который ассоциируется с печалью, злом и смертью. Как ни странно, этот цвет полон противоречий. Кроме положительного смысла, иногда он несёт и отрицательную энергетику и обозначает чопорность, изоляцию и бесплодие. Природа этого цвета поистине удивительна. Он словно объединяет в себе все остальные цвета, и в то же время обозначает отсутствие какого-либо цвета.',
                backgroundImg: 'url("images/white.jpg")',
                img1: "images/white1.jpg",
                associationText: 'прямая ассоциация с белым цветом - снег, бумага или чистота. Как и чернота – это нейтральный оттенок. Но при этом он заключает в себя чистоту, невинность, непорочность, свет. Гамма воздействует на нас так, что мы проникаемся к ней доверием. Ведь на подсознательном уровне нам кажется, что в ней вряд ли может таиться загадка. Поэтому специалисты в медицинской сфере носят такую форму. Это свобода и самоконтроль, приятные воспоминания из детства и юношества, гармония и блаженство. В мыслях он всегда будет символом доброты.',
                img2: 'images/white2.jpg',
                meaningText: 'святость, просветление, праведность, честность — на Руси говорили «белая Земля», что означало земля святая, церковная. Белый — цвет ангелов, пророков, священнослужителей в христианстве. традиционный наряд невесты в России и Японии, а также в большинстве стран Европы — белое платье означает, что девушка чиста и невинна. традиция ложиться спать в белой сорочке пришла из Древней Греции, где считалось, что одеяния этого цвета помогут выспаться и увидеть во сне что-то хорошее. Высокое звание, богатство, власть — на территории Южных республик бывшего СССР представительские автомобили всегда окрашены только в белый цвет. Исключительно белые одежды носили в Риме и Египте лица, обладающие неприкосновенностью и приближенные к правителю и жрецам. ',
                usageText: 'Белый цвет невероятно элегантен, и если правильно использовать его в веб-дизайне, это может дать вам невероятные результаты. Используя правильное количество белого пространства на сайте создает ощущение убранства и утонченности, а также делает вещи более простыми к восприятию, помогая вашим посетителям удобным образом получать информацию. От белого пространства до белых шрифтов в контрасте с темным фоном, изображения и многое другое. ',
                img4: "images/white4.jpg",
                img5: "images/white5.jpg",
                img6: "images/white6.jpg",
                img7: "images/white3.jpg",
                footerColor: 'white',
                class: 'norm-class',
            },
            {
                id: 8,
                name: 'Фиолетовый',
                introText: 'Фиолетовый - один из самых загадочных и малоизученных оттенков. Это цвет индивидуальности и сильной эмоциональной чувствительности. Является последним и самым темным из основных спектральных цветов. Это цвет второго порядка, т. е. получающийся при смешении холодного синего с теплым красным. В сочетании с несочетаемым рождается благородный таинственный и сложный оттенок.',
                backgroundImg: 'url("images/purple.jpg")',
                img1: "images/Purple1.jpg",
                associationText: ' У большинства людей этот цвет ассоциируется с цветением фиалки. Его относят к холодным оттенкам. Фиолетовый — это цвет роскоши, мистики и нервной неустойчивости. Этот цвет сочетает в себе мужское активное и женское пассивное начало. В нём одновременно таится глубина и вызов, единство и конфликт. Фиолетовый — это смесь магического синего и горячего красного. Это единство двух непримиримых стихий. Такой союз может дать или всё, или ничего. Фиолетовый — гармония противоположностей, которые примирились. Издавна этот цвет считался символом всего мистического и необъяснимого. В книгах часто можно увидеть магов и волшебников, облечённых в фиолетовые наряды.',
                img2: 'images/Purple2.jpg',
                meaningText: 'Древние египтяне ассоциировали этот цвет с частицей души, которая оставалась живой после смерти. В христианской мифологии фиалковый цвет — символ жертвоприношения. В древнем Риме женщины носили венки из фиалок в знак духовной и телесной чистоты, смирения и воздержания. Буддийские монахи с самым высоким рангом - единственные, кому разрешено носить фиолетовые одежды в Японии. Тем не менее, для тайцев, британцев, индийцев, итальянцев и бразильцев пурпурный цвет предназначен для траура. Бразильцы не носят фиолетовые цвета, если человек не посещает поминки или похороны. Американские военные имеют награду «Пурпурное сердце» для военнослужащих, которые получили ранения или были убиты при исполнении',
                usageText: 'Выбирая фиолетовый для сайта стоит определиться с оттенком: более светлые оттенки, такие как лавандовый (фиолетовый с добавлением розового), навевают мысли о романтике, тогда как тёмные оттенки кажутся более шикарными и таинственными. Вообще для маркетинга фиолетовый используется довольно редко, хотя этот цвет подойдет многим компаниям, так как он вызывает уважение у покупателей.',
                img4: "images/Purple4.jpg",
                img5: "images/Purple5.jpg",
                img6: "images/Purple6.jpg",
                img7: "images/Purple3.jpg",
                footerColor: '#7b67a3',
                class: 'norm-class',
            },
            {
                id: 9,
                name: 'Коричневый',
                introText: 'Один из ключевых тонов в палитре — это коричневый и его многочисленные оттенки. Это один из самых распространённых оттенков в природе. В спектральной палитре он отсутствует. Коричневый получается при смешивании красного с зелёным, а также оранжевого с серым, синим или чёрным. К оттенкам коричневого можно отнести и бежевый. Бежевый цвет - нейтральным, так как сам по себе он довольно невыразительный и тусклый. Вместе с тем бежевый хорошо сочетается с другими цветами, принимая их характер, но позволяя разбавить общую картину, избежав чрезмерности и излишней насыщенности.',
                backgroundImg: 'url("images/brown.jpg")',
                img1: "images/brown1.jpg",
                associationText: 'Коричневый - это серьёзный и приземлённый цвет. Он означает стабильность, устойчивость и надёжность. Коричневый цвет относится к защите и поддержке семьи, связан с чувством долга, ответственности, защищённости. Также он ассоциируется с денежным достатком, накоплением материальных ценностей. Коричневый цвет тесно переплетается с идеей домашнего уюта, семейного очага. Это цвет дерева, из которого делается мебель в доме. В ассоциативном плане он вызывает следующие образы: кофе, шоколад или земля. Он ассоциируется с трудолюбием, усердием, некоторой приземлённостью — не зря такой цвет имеет земля. При этом он тёплый, чувственный, согревающий, способен пробуждать чувство защищённости, спокойствия, умиротворения.',
                img2: 'images/brown2.jpg',
                meaningText: 'Для древних египтян он ассоциировался с землёй, сельским хозяйством, зарождением жизни. Африканские племена считали, что коричневый цвет оказывает успокаивающее, снотворное действие. В Древней Греции с этим оттенком была связана Деметра, богиня, покровительствовавшая плодородию и земледелию. В Древнем Риме к нему относились отрицательно. Считалось, что его носят только рабы и бедняки. Христиане настороженно относились к этому оттенку. Для них он связывался с тёмными силами, похотью и неукротимостью. А у мусульман цвет ассоциировался с невежеством, духовным упадком.',
                usageText: 'Коричневые оттенки вызывают отторжение, поэтому часто используются на табачной продукции, но, к сожалению, сила привычки перебарывает психологическое восприятие.\n' +
                    '\n' +
                    'Коричневый в русском языке произошёл от слова «корица», корень которого «кора», поэтому его часто можно встретить в дизайне мебели для кофейни или в строительстве домов, бань.',
                img4: "images/brown4.jpg",
                img5: "images/brown5.jpg",
                img6: "images/brown6.jpg",
                img7: "images/brown3.jpg",
                footerColor: ' #603008',
                class: 'norm-class',
            }
        ],
        color: {},
        showColor: false,
        showColors: true
    },

    methods: {
        filterColor(col) {
            const findedColor = this.colors.find((item) => item.id === col);
            this.color = findedColor
            this.showColor = true;
            this.showColors = false;
        },

        openMainColors() {
            this.showColor = false;
            this.showColors = true;
        }
    },
    mounted() {

    }

});