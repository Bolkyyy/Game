const questionsDb = [
    { q: "Что имеет в виду казак, когда использует слово «баз»?", options: ["Погреб для хранения продуктов", "Огороженный двор для скота", "Головной убор казачки", "Шумное праздничное застолье"], correct: 1 },
    { q: "Если вас пригласили в гости и пообещали угостить «узваром», что вам нальют?", options: ["Крепкую домашнюю настойку", "Густой суп из дичи", "Компот из сухофруктов", "Травяной чай с медом"], correct: 2 },
    { q: "Кого казаки называют словом «кунак»?", options: ["Молодого, еще не воевавшего казака", "Верного друга или приятеля", "Заклятого врага", "Торговца на ярмарке"], correct: 1 },
    { q: "Что делает человек, который «гутарит»?", options: ["Громко смеется", "Капризничает или жалуется", "Разговаривает, беседует", "Быстро бегает"], correct: 2 },
    { q: "Какой предмет одежды или обуви казаки называют «чирики»?", options: ["Меховые зимние рукавицы", "Шерстяные носки с узорами", "Туфли или легкие кожаные тапочки", "Праздничные шаровары с лампасами"], correct: 2 },
    { q: "Что означает известное казачье выражение «кочета поют»?", options: ["Рассветает, поют петухи", "Начинается сильная гроза", "Казаки поют походные песни", "Пришли плохие новости"], correct: 0 },
    { q: "Если казак говорит: «Принеси вечерять», что он просит сделать?", options: ["Зажечь свечи в доме", "Подать ужин", "Привести коня из загона", "Постелить постель для сна"], correct: 1 },
    { q: "Кто такой «бирюк» в казачьих говорах?", options: ["Одинокий волк или угрюмый человек", "Очень богатый станичный атаман", "Птица, предвещающая беду", "Маленький ребенок-непоседа"], correct: 0 },
    { q: "Что казаки называют словом «завеска»?", options: ["Штора на окне куреня", "Женский передник или фартук", "Потайной карман на черкеске", "Плотный туман над рекой"], correct: 1 },
    { q: "Какое значение скрывается за словом «курень»?", options: ["Место для курения табака", "Глиняная печь на улице", "Казачий жилой дом", "Отряд из ста молодых воинов"], correct: 2 },
    { q: "Что имеет в виду казак, когда говорит слово «Грядушка»?", options: ["Грядка с овощами в огороде", "Спинка кровати или дивана", "Небольшая песчаная коса на реке", "Младшая сестра"], correct: 1 },
    { q: "Если казачка просит принести «Кубышку», что именно ей нужно?", options: ["Глиняный кувшин для молока", "Круглая подушка для сидения", "Потайной кошелек для монет", "Деревянная кадушка для засолки"], correct: 0 },
    { q: "Что традиционно делали казаки при рождении мальчика, чтобы проверить, будет ли он добрым воином?", options: ["Клали ему в колыбель первую пойманную рыбу", "Омывали младенца водой с порохом", "Надевали на него отцовскую фуражку и сажали на коня", "Дарили ему серебряную ложку, отлитую из пули"], correct: 2 },
    { q: "Какое действие описывает казачье слово «Завесить» (например, «завесить куреня»)?", options: ["Закрыть окна ставнями или занавесками", "Запереть входную дверь на замок", "Зажечь лампаду перед иконами", "Затопить печь"], correct: 0 },
    { q: "Кто такой «Желтопузик» в казачьих станицах?", options: ["Неопытный, совсем молодой казак", "Степной суслик", "Особый вид безвредного степного полоза", "Спелый кубанский арбуз"], correct: 2 },
    { q: "Если вас назвали словом «Векша», то вас сравнили с...", options: ["Мудрым старым вороном", "Юркой и подвижной белкой", "Медлительной степной черепахой", "Назойливой мухой"], correct: 1 },
    { q: "Что делает казак, который «Чаплится»?", options: ["Идет по болоту или глубокой грязи", "Цепляется, придирается к словам или важничает", "Быстро скачет на лошади без седла", "Пьет воду прямо из реки"], correct: 1 },
    { q: "Какую важную роль в казачьей семье выполняла серьга в ухе у мужчины?", options: ["Показывала воинское звание", "Была знаком отличия атамана", "Служила паспортом при поездках", "Указывала на статус единственного сына или кормильца"], correct: 3 },
    { q: "Что означает колоритное выражение «Взять на басс»?", options: ["Арестовать и посадить в темницу", "Перепеть соперника в казачьем хоре", "Взять на испуг, обмануть или перехитрить гордостью", "Принять молодого казака на постой"], correct: 2 },
    { q: "Если казак говорит, что на улице «Слизота», какая там погода?", options: ["Идет сильный проливной дождь", "Поднялась пыльная степная буря", "Стоит сильный мороз, но без снега", "На дорогах гололедица, скользко"], correct: 3 },

    { q: "В какую пору родилась легенда об Авдотье?", options: ["В недавнее время", "В давнюю пору", "В будущем веке", "В доисторическую эпоху"], correct: 1 },
    { q: "Кто напал на Русь в те времена?", options: ["Половцы", "Злые татары", "Рыцари-крестоносцы", "Печенеги"], correct: 1 },
    { q: "От чего не просыхала земля русская?", options: ["От проливных дождей", "От разлива рек", "От горьких слез", "От утренней росы"], correct: 2 },
    { q: "Чьи слезы заставили землю промокнуть?", options: ["Матерей, вдов и сирот", "Князей и дружинников", "Купцов и ремесленников", "Иноземных послов"], correct: 0 },
    { q: "К какому татарскому хану пришла женщина?", options: ["К хану Мамаю", "К хану Тохтамышу", "К хану Батыю", "К хану Ахмату"], correct: 2 },
    { q: "Как звали главную героиню легенды?", options: ["Акулина", "Авдотья", "Настасья", "Марья"], correct: 1 },
    { q: "Что сделала женщина, оказавшись перед ханом?", options: ["Гордо подняла голову", "Упала на колени", "Начала петь песню", "Вручила ему дары"], correct: 1 },
    { q: "Кого Авдотья умоляла позволить откупить?", options: ["Единственного сына", "Любимого мужа", "Милого брата", "Старого отца"], correct: 2 },
    { q: "Какое чувство испытал хан Батый от просьбы женщины?", options: ["Гнев", "Равнодушие", "Удивление", "Страх"], correct: 2 },
    { q: "Что сделал хан Батый сразу после разговора?", options: ["Сорвал первый попавшийся цветок", "Написал указ об освобождении", "Приказал казнить женщину", "Подарил ей золотую монету"], correct: 0 },
    { q: "Какой цветок изначально сорвал хан?", options: ["Самый дорогой и редкий", "Первый попавшийся", "Засохший сорняк", "Огромную розу"], correct: 1 },
    { q: "Какое условие поставил хан Авдотье?", options: ["Иди по Орде, пока не найдешь золото", "Иди по Орде, доколе цветок не увянет", "Сиди на месте, пока цветок не вырастет", "Беги из Орды, пока цветок не зацветет"], correct: 1 },
    { q: "По чьей земле должна была ходить женщина?", options: ["По Киевской Руси", "По Золотой Орде", "По Донской степи", "По Крымскому ханству"], correct: 1 },
    { q: "Что сделала Авдотья со скромным цветком?", options: ["Выбросила его за ненадобностью", "Придала ему волшебную силу", "Подарила первому встречному", "Засушила между страниц книги"], correct: 1 },
    { q: "Каким эпитетом автор описывает цветок в момент его срывания ханом?", options: ["Пышный", "Скромный", "Яркий", "Увядающий"], correct: 1 },
    { q: "Где долго бродила Авдотья?", options: ["По густым лесам Руси", "По бескрайним горам", "По татарской Орде", "По берегам Черного моря"], correct: 2 },
    { q: "Кого в итоге спасла женщина?", options: ["Только своего брата", "Многих русичей", "Татарских воинов", "Семью хана Батыя"], correct: 1 },
    { q: "Что произошло с заветным цветком во время ее странствий?", options: ["Он полностью высох и рассыпался", "Его украли враги", "Он жил и еще красивее стал", "Он превратился в дерево"], correct: 2 },
    { q: "Какое название получил этот цветок с той поры?", options: ["Бессмертник", "Ромашка", "Василек", "Адонис"], correct: 0 },
    { q: "Какое слово использует автор, говоря о силе, данной цветку Авдотьей?", options: ["Тайная", "Волшебная", "Колдовская", "Божественная"], correct: 1 },
    { q: "Что делает этот цветок в степях поныне?", options: ["Исчезает из-за жары", "Радует взгляд", "Лечит все болезни", "Привлекает диких зверей"], correct: 1 },
    { q: "Где именно поныне радует взгляд этот цветок согласно тексту?", options: ["В дремучих лесах", "В наших степях", "На вершинах гор", "На берегах рек"], correct: 1 },
    { q: "В каких коврах пестреет цветок бессмертника?", options: ["В коврах Донской природы", "В персидских коврах хана", "В моховых коврах тундры", "В луговых коврах севера"], correct: 0 },
    { q: "Какое причастие описывает появление ковров природы?", options: ["Сотканных", "Вытканных", "Нарисованных", "Созданных"], correct: 1 },
    { q: "Какова главная мысль легенды?", options: ["Жестокость хана Батыя", "Сила родственной любви и верности", "Богатство Золотой Орды", "Правила сбора степных трав"], correct: 1 },
    { q: "В роли кого выступает Авдотья в этой легенде?", options: ["Завоевательницы", "Спасительницы", "Просительницы-неудачницы", "Ханской служанки"], correct: 1 },
    { q: "Какое качество проявила Авдотья в долгих поисках?", options: ["Гордость", "Смирение", "Стойкость и упорство", "Боязливость"], correct: 2 },
    { q: "Почему цветок назвали «заветным» в тексте?", options: ["Его передавали по завещанию", "Он был связан с важным уговором (заветом)", "Он стоил очень дорого", "Он рос только в тайных местах"], correct: 1 },
    { q: "Какое слово в тексте указывает на враждебность татар?", options: ["Чужие", "Злые", "Далекие", "Неизвестные"], correct: 1 },
    { q: "Что символизирует бессмертник в финале легенды?", options: ["Вечную память и стойкость духа", "Богатство и знатность", "Военную победу", "Печаль и одиночество"], correct: 0 },
    { q: "Какова была цель прихода Авдотьи к хану?", options: ["Отомстить за сожженную деревню", "Попросить милостыню", "Откупить милого брата", "Заключить мирный договор"], correct: 2 },
    { q: "Какое выражение использует автор для описания страданий Руси?", options: ["Земля горела от пожаров", "Земля не просыхала от горьких слез", "Люди бежали в глухие леса", "Птицы перестали петь песни"], correct: 1 },
    { q: "Кто упомянут среди тех, чьи слезы лились на землю (выберите лишнее)?", options: ["Матери", "Вдовы", "Сироты", "Воины"], correct: 3 },

    { q: "Подсолнечник поворачивает соцветие за солнцем. Как называется это движение?", options: ["Фотосинтез", "Гелиотропизм", "Геотропизм", "Листопад"], correct: 1 },
    { q: "Как называются рукотворные экосистемы из деревьев для защиты черноземов?", options: ["Заповедники", "Лесополосы", "Тайга", "Ботанические сады"], correct: 1 },
    { q: "Какое приспособление помогает семени ковыля «ввинчиваться» в землю?", options: ["Длинная, скрученная на ветру ость", "Липкий клейкий сок", "Яркие лепестки", "Воздушный пузырь"], correct: 0 },
    { q: "К какому типу экосистем относятся искусственные поля пшеницы?", options: ["Биогеоценоз", "Агроценоз", "Стабильная биосфера", "Дремучий лес"], correct: 1 },
    { q: "За какое свойство цветки бессмертника получили свое название?", options: ["Могут расти без корней", "Их сухие кожистые чешуйки не увядают", "Выделяют чистый спирт", "Цветут зимой под снегом"], correct: 1 },
    { q: "Почему срывание диких тюльпанов Шренка ведет к гибели растения?", options: ["Без цветка луковица сгнивает", "Лишается возможности образовать семена", "Гибнет от обиды", "Вырастает ядовитый гриб"], correct: 1 },
    { q: "Какую жизненную форму представляет дикий виноград в пойменных лесах?", options: ["Кустарничек", "Дерево", "Лиана", "Однолетняя трава"], correct: 2 },
    { q: "Из какого дерева в начале лета летит пух, вызывающий аллергию?", options: ["Дуб", "Тополь", "Сосна", "Клен"], correct: 1 },
    { q: "В каком виде озимая пшеница проводит зиму под снежным покровом?", options: ["В виде сухих семян", "В виде зеленых молодых проростков", "В виде подземных клубней", "В виде кустарника"], correct: 1 },
    { q: "Каким ценным витамином богаты плоды шиповника?", options: ["Витамином D", "Витамином С", "Витамином В12", "Витамином К"], correct: 1 },
    { q: "Какова цель катания перекати-поле по степи осенью?", options: ["Поиск воды", "Рассеивание созревших семян ветром", "Защита от солнца", "Охота на насекомых"], correct: 1 },
    { q: "К какому отряду млекопитающих относится сурок-байбак?", options: ["Хищные", "Грызуны", "Насекомоядные", "Зайцеобразные"], correct: 1 },
    { q: "Какое действие человека помогло вернуть байбаков в донские степи?", options: ["Подкармливание зерном", "Создание заповедников и реинтродукция", "Обучение жизни в лесу", "Домашнее разведение"], correct: 1 },
    { q: "Что помогает степной гадюке пережить зимние морозы?", options: ["Перелет на юг", "Оцепенение в подземных норах", "Смена чешуи на густой мех", "Активная ночная охота"], correct: 1 },
    { q: "Какое строение клюва и когтей характерно для степного орла?", options: ["Короткий плоский клюв", "Крючкообразный острый клюв и мощные когти", "Длинный тонкий клюв", "Клюв отсутствует"], correct: 1 },
    { q: "Как необычный раздутый нос сайгака помогает ему в степи?", options: ["Помогает ловить бабочек", "Фильтрует пыль и согревает воздух зимой", "Служит для накопления запасов воды", "Заменяет им уши"], correct: 1 },
    { q: "Каков биологический тип развития перелетной саранчи?", options: ["Прямое (без личинки)", "С неполным превращением", "С полным превращением", "Почкование"], correct: 1 },
    { q: "Какую пользу экосистеме приносят плотины речного бобра?", options: ["Полностью осушают реки", "Поддерживают уровень воды для других видов", "Очищают воду от соли", "Только мешают течению"], correct: 1 },
    { q: "Для чего ракам необходима смена хитинового покрова (линька)?", options: ["Спрятаться от рыбаков", "Расти в размерах, так как старый панцирь жесткий", "Изменить цвет на красный", "Научиться плавать задом наперед"], correct: 1 },
    { q: "Что составляет основной рацион золотистой щурки (из-за чего конфликт с пчеловодами)?", options: ["Спелые ягоды винограда", "Летающие насекомые, особенно пчелы", "Мелкие речные мальки", "Семена пшеницы"], correct: 1 },
    { q: "Какую экологическую пользу приносят летучие мыши?", options: ["Уничтожают запасы зерна", "Регулируют численность ночных насекомых-вредителей", "Опыляют подсолнухи", "Вырабатывают мед"], correct: 1 },
    { q: "Какой образ жизни и тип питания характерны для сома?", options: ["Дневной растительноядный", "Придонный засадный хищник", "Поверхностный фильтратор планктона", "Живет только в морской воде"], correct: 1 },
    { q: "Связанные отношениями «пища — потребитель» живые организмы образуют:", options: ["Систему координат", "Цепь питания (трофическую цепь)", "Круг кровообращения", "Спортивную команду"], correct: 1 },
    { q: "Как называется книга с редкими видами животных и растений Ростовской области?", options: ["Зеленая книга", "Красная книга Ростовской области", "Атлас дорог", "Учебник истории"], correct: 1 },
    { q: "Каково негативное последствие влечет неконтролируемый выпас скота?", options: ["Вытаптывание целинных трав и замена их сорняками", "Превращение степи в густой лес", "Появление новых видов тюльпанов", "Увеличение количества певчих птиц"], correct: 0 },
    { q: "Какова важнейшая роль жуков-навозников в экосистеме?", options: ["Поедают корни пшеницы", "Они редуценты — очищают степь от отходов", "Нападают на мелких птиц", "Вырабатывают кислород"], correct: 1 },
    { q: "Что происходит при сбросе неочищенных сточных вод в Дон?", options: ["Вода становится целебной", "Нарушаются цепи питания, гибнет рыба", "Рыба начинает расти в два раза быстрее", "Река пересыхает за день"], correct: 1 },
    { q: "Какое явление наблюдают на Дону в августе из-за размножения водорослей?", options: ["Замерзание Дона", "«Цветение» воды", "Прилив и отлив", "Морской шторм"], correct: 1 },
    { q: "Почему весенний пал (поджог сухой травы) строго запрещен?", options: ["Дым мешает самолетам", "В огне погибают семена, полезные насекомые и гнезда", "Почва превращается в золото", "Уменьшает температуру воздуха"], correct: 1 },
    { q: "Какое место в экологической пирамиде занимают розовые пеликаны?", options: ["Продуценты", "Консументы (потребители)", "Редуценты", "Вирусы"], correct: 1 },
    { q: "К чему приводит посадка лесополос вокруг полей?", options: ["К полному исчезновению травы", "К задержанию снега и сохранению влаги в почве", "К размножению волков", "К похолоданию климата"], correct: 1 },
    { q: "Какое простое действие помогает сохранить чистоту экосистемы?", options: ["Сбор больших букетов", "Уборка мусора и отказ от костров", "Громкая музыка", "Выкапывание диких растений"], correct: 1 }
];

let questions = [];
const boardSize = 10;
let grid = Array(boardSize).fill(null).map(() => Array(boardSize).fill(0));
let head1 = { r: 0, c: 0 };
let head2 = { r: boardSize - 1, c: boardSize - 1 };
let currentTeam = 1;
let scores = { 1: 1, 2: 1 };
let activeCell = null;
let activeQuestionData = null; 
let team1Name = "Штамм Альфа";
let team2Name = "Штамм Бета";

let mouseX = 0, mouseY = 0;
let currentX = 0, currentY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX - 70;
    mouseY = e.clientY - 70;
});

function animateFollower() {
    const follower = document.getElementById('volvoxFollower');
    if (follower) {
        currentX += (mouseX - currentX) * 0.08;
        currentY += (mouseY - currentY) * 0.08;
        follower.style.left = currentX + 'px';
        follower.style.top = currentY + 'px';
        follower.style.transform = `rotate(${Math.sin(Date.now() / 500) * 10}deg)`;
    }
    requestAnimationFrame(animateFollower);
}
animateFollower();

const mainMenu = document.getElementById('mainMenu'), gameScreen = document.getElementById('gameScreen');
const menuHome = document.getElementById('menuHome'), menuRules = document.getElementById('menuRules'), 
      menuSetup = document.getElementById('menuSetup'), menuAuthors = document.getElementById('menuAuthors');

function switchScreen(target) {
    [menuHome, menuRules, menuSetup, menuAuthors].forEach(s => s.classList.add('hidden'));
    target.classList.remove('hidden');
}

document.getElementById('openSetupBtn').onclick = () => switchScreen(menuSetup);
document.getElementById('openRulesBtn').onclick = () => switchScreen(menuRules);
document.getElementById('openAuthorsBtn').onclick = () => switchScreen(menuAuthors);
document.querySelectorAll('.back-btn').forEach(btn => btn.onclick = () => switchScreen(menuHome));

document.getElementById('startGameBtn').onclick = () => {
    team1Name = document.getElementById('team1Input').value || "Штамм Альфа";
    team2Name = document.getElementById('team2Input').value || "Штамм Бета";
    document.getElementById('nameDisplay1').innerText = team1Name;
    document.getElementById('nameDisplay2').innerText = team2Name;
    mainMenu.classList.add('hidden');
    gameScreen.classList.remove('hidden');
    initGame();
};

function initGame() {
    questions = [...questionsDb];
    grid = Array(boardSize).fill(null).map(() => Array(boardSize).fill(0));
    head1 = { r: 0, c: 0 };
    head2 = { r: boardSize - 1, c: boardSize - 1 };
    grid[0][0] = 1; grid[boardSize-1][boardSize-1] = 2;
    currentTeam = 1;
    scores = { 1: 1, 2: 1 };
    document.getElementById('score1').innerText = "1";
    document.getElementById('score2').innerText = "1";
    activeQuestionData = null;
    buildBoard();
    syncVisuals();
}

function buildBoard() {
    const board = document.getElementById('board');
    board.innerHTML = '';
    for(let r = 0; r < boardSize; r++) {
        for(let c = 0; c < boardSize; c++) {
            const cell = document.createElement('div');
            cell.className = 'cell';
            cell.dataset.r = r; cell.dataset.c = c;
            cell.onclick = () => onCellClick(r, c);
            board.appendChild(cell);
        }
    }
}

function syncVisuals() {
    document.body.setAttribute('data-current', currentTeam);
    const cells = document.querySelectorAll('.cell');
    
    const activeHead = currentTeam === 1 ? head1 : head2;

    cells.forEach(cell => {
        const r = parseInt(cell.dataset.r), c = parseInt(cell.dataset.c);
        cell.className = 'cell';
        if (grid[r][c] === 1) cell.classList.add('team1');
        if (grid[r][c] === 2) cell.classList.add('team2');
        if (r === head1.r && c === head1.c) cell.classList.add('team1-head');
        if (r === head2.r && c === head2.c) cell.classList.add('team2-head');
        if (grid[r][c] === 0 && Math.abs(r - activeHead.r) <= 1 && Math.abs(c - activeHead.c) <= 1) {
            cell.classList.add('valid-move');
        }
    });

    document.getElementById('turnIndicator').innerText = `Ход: ${currentTeam === 1 ? team1Name : team2Name}`;
    
    checkGameOverStates(); 
}

function hasValidMoves(teamNum) {
    const head = teamNum === 1 ? head1 : head2;
    for (let r = 0; r < boardSize; r++) {
        for (let c = 0; c < boardSize; c++) {
            if (grid[r][c] === 0 && Math.abs(r - head.r) <= 1 && Math.abs(c - head.c) <= 1) {
                return true;
            }
        }
    }
    return false;
}

function checkGameOverStates() {
    const canMove1 = hasValidMoves(1);
    const canMove2 = hasValidMoves(2);

    // Если текущая команда не может ходить — пропускаем её ход
    if (currentTeam === 1 && !canMove1 && canMove2) {
        document.getElementById('turnIndicator').innerText = `${team1Name} заблокирован! Ход ${team2Name}`;
        currentTeam = 2;
        document.body.setAttribute('data-current', currentTeam);
        updateCellHighlights();
        return;
    }
    if (currentTeam === 2 && !canMove2 && canMove1) {
        document.getElementById('turnIndicator').innerText = `${team2Name} заблокирован! Ход ${team1Name}`;
        currentTeam = 1;
        document.body.setAttribute('data-current', currentTeam);
        updateCellHighlights();
        return;
    }

    // Оба не могут ходить — игра окончена
    if (!canMove1 && !canMove2) {
        const modal = document.getElementById('gameOverModal');
        const title = document.getElementById('winnerTitle');
        const text = document.getElementById('winnerText');

        if (scores[1] === scores[2]) {
            title.innerText = "Ничья!";
            text.style.whiteSpace = 'pre-line';
            text.innerText = `Оба вида заняли по ${scores[1]} клеток — силы равны!`;
        } else {
            const winner = scores[1] > scores[2] ? team1Name : team2Name;
            const loser = scores[1] > scores[2] ? team2Name : team1Name;
            const winScore = scores[1] > scores[2] ? scores[1] : scores[2];
            const loseScore = scores[1] > scores[2] ? scores[2] : scores[1];
            title.innerText = "Игра окончена!";
            text.style.whiteSpace = 'pre-line';
            text.innerText = `Победил: ${winner}\n${winScore} : ${loseScore} против ${loser}`;
        }

        modal.classList.add('active');
        return;
    }

    // Один заблокирован полностью (а другой тоже) — победа по клеткам
    if (!canMove1 || !canMove2) {
        const blockedTeam = !canMove1 ? 1 : 2;
        const activeTeam = blockedTeam === 1 ? 2 : 1;
        const winnerName = activeTeam === 1 ? team1Name : team2Name;
        const loserName = blockedTeam === 1 ? team1Name : team2Name;

        const modal = document.getElementById('gameOverModal');
        const title = document.getElementById('winnerTitle');
        const text = document.getElementById('winnerText');

        title.innerText = "Игра окончена!";
        text.style.whiteSpace = 'pre-line';
        text.innerText = `${loserName} заблокирован!\nПобеждает ${winnerName}!\n${scores[1]} : ${scores[2]}`;

        modal.classList.add('active');
    }
}

function updateCellHighlights() {
    const activeHead = currentTeam === 1 ? head1 : head2;
    document.querySelectorAll('.cell').forEach(cell => {
        const r = parseInt(cell.dataset.r), c = parseInt(cell.dataset.c);
        cell.classList.remove('valid-move');
        if (grid[r][c] === 0 && Math.abs(r - activeHead.r) <= 1 && Math.abs(c - activeHead.c) <= 1) {
            cell.classList.add('valid-move');
        }
    });
}

function restartGame() {
    document.getElementById('gameOverModal').classList.remove('active');
    initGame();
}

function returnToMenu() {
    document.getElementById('gameOverModal').classList.remove('active');
    document.getElementById('gameScreen').classList.add('hidden');
    document.getElementById('mainMenu').classList.remove('hidden');
}

function disableBoard() {
    document.querySelectorAll('.cell').forEach(c => {
        c.classList.remove('valid-move');
    });
}

function onCellClick(r, c) {
    const activeHead = currentTeam === 1 ? head1 : head2;
    if (grid[r][c] !== 0 || Math.abs(r - activeHead.r) > 1 || Math.abs(c - activeHead.c) > 1) return;
    
    activeCell = { r, c };
    
    if (!activeQuestionData) {
        if (questions.length === 0) questions = [...questionsDb];
        const idx = Math.floor(Math.random() * questions.length);
        activeQuestionData = questions.splice(idx, 1)[0];
    }
    
    document.getElementById('questionText').innerText = activeQuestionData.q;
    const cont = document.getElementById('optionsContainer');
    cont.innerHTML = '';
    
    activeQuestionData.options.forEach((opt, i) => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.innerText = opt;
        btn.onclick = () => evaluate(i === activeQuestionData.correct);
        cont.appendChild(btn);
    });
    
    document.getElementById('modal').classList.add('active');
}

function evaluate(correct) {
    document.getElementById('modal').classList.remove('active');

    if (!correct) {
        currentTeam = currentTeam === 1 ? 2 : 1;
        activeCell = null;
        activeQuestionData = null; 
        syncVisuals();
        return; 
    }

    if (correct && activeCell) {
        grid[activeCell.r][activeCell.c] = currentTeam;
        if (currentTeam === 1) { 
            head1 = activeCell; 
            scores[1]++; 
            document.getElementById('score1').innerText = scores[1]; 
        } else { 
            head2 = activeCell; 
            scores[2]++; 
            document.getElementById('score2').innerText = scores[2]; 
        }
        currentTeam = currentTeam === 1 ? 2 : 1;
        syncVisuals();
    }
    
    activeCell = null;
    activeQuestionData = null; 
}