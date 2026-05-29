// Complete Hiragana dataset with Burmese & English
const hiraganaData = [
    { kana: "あ", burmese: "အ", english: "a" }, { kana: "い", burmese: "အိ", english: "i" },
    { kana: "う", burmese: "ဥ", english: "u" }, { kana: "え", burmese: "အေး", english: "e" },
    { kana: "お", burmese: "အို", english: "o" }, { kana: "か", burmese: "က", english: "ka" },
    { kana: "き", burmese: "ခိ", english: "ki" }, { kana: "く", burmese: "ခု", english: "ku" },
    { kana: "け", burmese: "ခေး", english: "ke" }, { kana: "こ", burmese: "ကို", english: "ko" },
    { kana: "さ", burmese: "ဆ", english: "sa" }, { kana: "し", burmese: "ရှိ", english: "shi" },
    { kana: "す", burmese: "ဆု", english: "su" }, { kana: "せ", burmese: "ဆေး", english: "se" },
    { kana: "そ", burmese: "ဆို", english: "so" }, { kana: "た", burmese: "တ", english: "ta" },
    { kana: "ち", burmese: "ချိ", english: "chi" }, { kana: "つ", burmese: "ဆွ်", english: "tsu" },
    { kana: "て", burmese: "တေး", english: "te" }, { kana: "と", burmese: "တို", english: "to" },
    { kana: "な", burmese: "န", english: "na" }, { kana: "に", burmese: "နိ", english: "ni" },
    { kana: "ぬ", burmese: "နု", english: "nu" }, { kana: "ね", burmese: "နေ", english: "ne" },
    { kana: "の", burmese: "နို", english: "no" }, { kana: "は", burmese: "ဟ", english: "ha" },
    { kana: "ひ", burmese: "ဟိ", english: "hi" }, { kana: "ふ", burmese: "ဖု", english: "fu" },
    { kana: "へ", burmese: "ဟေး", english: "he" }, { kana: "ほ", burmese: "ဟို", english: "ho" },
    { kana: "ま", burmese: "မ", english: "ma" }, { kana: "み", burmese: "မိ", english: "mi" },
    { kana: "む", burmese: "မု", english: "mu" }, { kana: "め", burmese: "မေ", english: "me" },
    { kana: "も", burmese: "မို", english: "mo" }, { kana: "や", burmese: "ယ", english: "ya" },
    { kana: "ゆ", burmese: "ယု", english: "yu" }, { kana: "よ", burmese: "ယို", english: "yo" },
    { kana: "ら", burmese: "ရ", english: "ra" }, { kana: "り", burmese: "ရိ", english: "ri" },
    { kana: "る", burmese: "ရု", english: "ru" }, { kana: "れ", burmese: "ရေ", english: "re" },
    { kana: "ろ", burmese: "ရို", english: "ro" }, { kana: "わ", burmese: "ဝ", english: "wa" },
    { kana: "を", burmese: "အို", english: "wo" }, { kana: "ん", burmese: "အန်", english: "n" }
];

const katakanaData = [
    { kana: "ア", burmese: "အ", english: "a" }, { kana: "イ", burmese: "အိ", english: "i" },
    { kana: "ウ", burmese: "ဥ", english: "u" }, { kana: "エ", burmese: "အေး", english: "e" },
    { kana: "オ", burmese: "အို", english: "o" }, { kana: "カ", burmese: "က", english: "ka" },
    { kana: "キ", burmese: "ခိ", english: "ki" }, { kana: "ク", burmese: "ခု", english: "ku" },
    { kana: "ケ", burmese: "ခေး", english: "ke" }, { kana: "コ", burmese: "ကို", english: "ko" },
    { kana: "サ", burmese: "ဆ", english: "sa" }, { kana: "シ", burmese: "ရှိ", english: "shi" },
    { kana: "ス", burmese: "ဆု", english: "su" }, { kana: "セ", burmese: "ဆေး", english: "se" },
    { kana: "ソ", burmese: "ဆို", english: "so" }, { kana: "タ", burmese: "တ", english: "ta" },
    { kana: "チ", burmese: "ချိ", english: "chi" }, { kana: "ツ", burmese: "ဆွ်", english: "tsu" },
    { kana: "テ", burmese: "တေး", english: "te" }, { kana: "ト", burmese: "တို", english: "to" },
    { kana: "ナ", burmese: "န", english: "na" }, { kana: "ニ", burmese: "နိ", english: "ni" },
    { kana: "ヌ", burmese: "နု", english: "nu" }, { kana: "ネ", burmese: "နေ", english: "ne" },
    { kana: "ノ", burmese: "နို", english: "no" }, { kana: "ハ", burmese: "ဟ", english: "ha" },
    { kana: "ヒ", burmese: "ဟိ", english: "hi" }, { kana: "フ", burmese: "ဖု", english: "fu" },
    { kana: "ヘ", burmese: "ဟေး", english: "he" }, { kana: "ホ", burmese: "ဟို", english: "ho" },
    { kana: "マ", burmese: "မ", english: "ma" }, { kana: "ミ", burmese: "မိ", english: "mi" },
    { kana: "ム", burmese: "မု", english: "mu" }, { kana: "メ", burmese: "မေ", english: "me" },
    { kana: "モ", burmese: "မို", english: "mo" }, { kana: "ヤ", burmese: "ယ", english: "ya" },
    { kana: "ユ", burmese: "ယု", english: "yu" }, { kana: "ヨ", burmese: "ယို", english: "yo" },
    { kana: "ラ", burmese: "ရ", english: "ra" }, { kana: "リ", burmese: "ရိ", english: "ri" },
    { kana: "ル", burmese: "ရု", english: "ru" }, { kana: "レ", burmese: "ရေ", english: "re" },
    { kana: "ロ", burmese: "ရို", english: "ro" }, { kana: "ワ", burmese: "ဝ", english: "wa" },
    { kana: "ヲ", burmese: "အို", english: "wo" }, { kana: "ン", burmese: "အန်", english: "n" }
];

// Web Speech API for Japanese pronunciation
function speakJapanese(text) {
    if (!window.speechSynthesis) {
        console.log("Browser doesn't support speech synthesis");
        return;
    }
    
    // Cancel any ongoing speech to avoid overlapping
    window.speechSynthesis.cancel();
    
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'ja-JP';  // Japanese language
    utterance.rate = 0.8;      // Slightly slower for learners
    utterance.pitch = 1.0;
    utterance.volume = 1.0;
    
    // Try to find a Japanese voice for better pronunciation
    function setJapaneseVoice() {
        const voices = window.speechSynthesis.getVoices();
        // Look for Japanese voice
        const japaneseVoice = voices.find(voice => voice.lang === 'ja-JP' || voice.lang === 'ja');
        if (japaneseVoice) {
            utterance.voice = japaneseVoice;
        }
        window.speechSynthesis.speak(utterance);
    }
    
    if (window.speechSynthesis.getVoices().length > 0) {
        setJapaneseVoice();
    } else {
        window.speechSynthesis.onvoiceschanged = setJapaneseVoice;
    }
}

// Create flashcard element - auto-play sound on click
function createFlashcard(item, type) {
    const card = document.createElement('div');
    card.className = 'kana-card';
    
    card.innerHTML = `
        <div class="card-inner">
            <div class="card-front">
                ${item.kana}
            </div>
            <div class="card-back">
                <p><strong>မြန်မာ:</strong> ${item.burmese}</p>
                <p><strong>English:</strong> ${item.english}</p>
            </div>
        </div>
    `;
    
    // Click to flip AND play sound
    card.addEventListener('click', () => {
        // Play the Japanese pronunciation
        speakJapanese(item.kana);
        // Flip the card
        card.classList.toggle('flipped');
    });
    
    return card;
}

// Render both grids
function renderKanaGrids() {
    const hiraganaGrid = document.getElementById('hiraganaGrid');
    const katakanaGrid = document.getElementById('katakanaGrid');
    
    if (hiraganaGrid) {
        hiraganaGrid.innerHTML = '';
        hiraganaData.forEach(item => {
            hiraganaGrid.appendChild(createFlashcard(item, 'hiragana'));
        });
    }
    
    if (katakanaGrid) {
        katakanaGrid.innerHTML = '';
        katakanaData.forEach(item => {
            katakanaGrid.appendChild(createFlashcard(item, 'katakana'));
        });
    }
}

// Level card navigation
function setupLevelCards() {
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('click', () => {
            const level = card.getAttribute('data-level');
            window.location.href = `levels/${level}.html`;
        });
    });
}

// Initialize everything when DOM loads
document.addEventListener('DOMContentLoaded', () => {
    renderKanaGrids();
    setupLevelCards();
    console.log('Next Gen Learning Myanmar - Ready! Click any card to hear Japanese pronunciation and see translation.');
});