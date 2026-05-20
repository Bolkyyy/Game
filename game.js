const questionsDb = [
    { q: "Какая органелла является «энергетической станцией» клетки?", options: ["Рибосома", "Митохондрия", "Комплекс Гольджи", "Лизосома"], correct: 1 },
    { q: "Какой пигмент обеспечивает фиксацию солнечного света при фотосинтезе?", options: ["Каротин", "Антоциан", "Хлорофилл", "Ксантофилл"], correct: 2 },
    { q: "Какая молекула выступает главным универсальным аккумулятором энергии в клетке?", options: ["ДНК", "АТФ", "РНК", "Глюкоза"], correct: 1 },
    { q: "Сколько хромосом в соматической клетке здорового человека?", options: ["23", "44", "46", "48"], correct: 2 },
    { q: "Как называется процесс деления соматических клеток, сохраняющий число хромосом?", options: ["Мейоз", "Митоз", "Амитоз", "Шизогония"], correct: 1 },
    { q: "Какая структура растительной клетки отсутствует у животных?", options: ["Ядро", "Митохондрия", "Клеточная стенка", "Цитоплазма"], correct: 2 },
    { q: "Какое вещество является основным компонентом клеточных стенок грибов?", options: ["Целлюлоза", "Хитин", "Муреин", "Гликоген"], correct: 1 },
    { q: "Где в клетке эукариот происходит транскрипция (синтез РНК на матрице ДНК)?", options: ["В цитоплазме", "В рибосомах", "В ядре", "В аппарате Гольджи"], correct: 2 },
    { q: "Какая аминокислота всегда является первой при биосинтезе белка (кодируется старт-кодоном)?", options: ["Аланин", "Глицин", "Метионин", "Валин"], correct: 2 },
    { q: "Как называется ненаследственное изменение признаков организма под влиянием среды?", options: ["Мутация", "Модификация", "Комбинация", "Рекомбинация"], correct: 1 },
    { q: "Какой ученый сформулировал основные законы наследственности, работая с горохом?", options: ["Чарльз Дарвин", "Томас Морган", "Грегор Мендель", "Луи Пастер"], correct: 2 },
    { q: "Какой тип связи удерживает вместе две комплементарные нити ДНК?", options: ["Ковалентная", "Водородная", "Ионная", "Пептидная"], correct: 1 },
    { q: "Какое количество энергии (в кДж) выделяется при полном расщеплении 1 г глюкозы?", options: ["17.6", "38.9", "18.9", "24.5"], correct: 0 },
    { q: "Как называют микроорганизмы, способные жить и развиваться в бескислородной среде?", options: ["Аэробы", "Анаэробы", "Автотрофы", "Гетеротрофы"], correct: 1 },
    { q: "Какая стадия митоза характеризуется расхождением хроматид к полюсам клетки?", options: ["Профаза", "Метафаза", "Анафаза", "Телофаза"], correct: 2 },
    { q: "Какой фермент отвечает за сшивание фрагментов ДНК при репликации?", options: ["Полимераза", "Лигаза", "Хеликаза", "Топоизомераза"], correct: 1 }
];

let questions = [];
const boardSize = 10;
let grid = Array(boardSize).fill(null).map(() => Array(boardSize).fill(0));
let head1 = { r: 0, c: 0 };
let head2 = { r: boardSize - 1, c: boardSize - 1 };
let currentTeam = 1;
let scores = { 1: 1, 2: 1 };
let activeCell = null;
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
    let canMove = false;
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
            canMove = true;
        }
    });

    document.getElementById('turnIndicator').innerText = `Ход: ${currentTeam === 1 ? team1Name : team2Name}`;
    if (!canMove) checkGameOver(true);
}

function onCellClick(r, c) {
    const activeHead = currentTeam === 1 ? head1 : head2;
    if (grid[r][c] !== 0 || Math.abs(r - activeHead.r) > 1 || Math.abs(c - activeHead.c) > 1) return;
    activeCell = { r, c };
    
    const idx = Math.floor(Math.random() * questions.length);
    const qData = questions.splice(idx, 1)[0];
    document.getElementById('questionText').innerText = qData.q;
    const cont = document.getElementById('optionsContainer');
    cont.innerHTML = '';
    qData.options.forEach((opt, i) => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.innerText = opt;
        btn.onclick = () => evaluate(i === qData.correct);
        cont.appendChild(btn);
    });
    document.getElementById('modal').classList.add('active');
}

function evaluate(correct) {
    document.getElementById('modal').classList.remove('active');
    if (correct && activeCell) {
        grid[activeCell.r][activeCell.c] = currentTeam;
        if (currentTeam === 1) { head1 = activeCell; scores[1]++; document.getElementById('score1').innerText = scores[1]; }
        else { head2 = activeCell; scores[2]++; document.getElementById('score2').innerText = scores[2]; }
        currentTeam = currentTeam === 1 ? 2 : 1;
        syncVisuals();
    }
    activeCell = null;
}

function checkGameOver(isBlocked) {
    if (isBlocked || Math.abs(scores[1] - scores[2]) >= 2) {
        document.getElementById('turnIndicator').innerText = `Игра окончена: ${scores[1] > scores[2] ? team1Name : team2Name} доминирует`;
    }
}