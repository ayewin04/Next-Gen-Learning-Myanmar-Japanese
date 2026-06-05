// ========== COMPLETE N5 VOCABULARY DATA (40 sample words) ==========
const vocabularyData = [
    // ========== GREETINGS / あいさつ (8 words) ==========
    {
        japanese: "おはようございます",
        romaji: "ohayou gozaimasu",
        pronunciation: "ohayou gozaimasu",
        english: "good morning",
        burmese: "မင်္ဂလာနံနက်ခင်းပါ",
        category: "greetings",
        example_jp: "おはようございます。",
        example_romaji: "Ohayou gozaimasu.",
        example_en: "Good morning.",
        example_mm: "မင်္ဂလာနံနက်ခင်းပါ။"
    },
    {
        japanese: "こんにちは",
        romaji: "konnichiwa",
        pronunciation: "konnichiwa",
        english: "hello / good afternoon",
        burmese: "မင်္ဂလာနေ့လည်ခင်းပါ",
        category: "greetings",
        example_jp: "こんにちは。",
        example_romaji: "Konnichiwa.",
        example_en: "Hello.",
        example_mm: "မင်္ဂလာပါ။"
    },
    {
        japanese: "こんばんは",
        romaji: "konbanwa",
        pronunciation: "konbanwa",
        english: "good evening",
        burmese: "မင်္ဂလာညနေခင်းပါ",
        category: "greetings",
        example_jp: "こんばんは。",
        example_romaji: "Konbanwa.",
        example_en: "Good evening.",
        example_mm: "မင်္ဂလာညနေခင်းပါ။"
    },
    {
        japanese: "さようなら",
        romaji: "sayounara",
        pronunciation: "sayounara",
        english: "goodbye",
        burmese: "သွားတော့မယ်",
        category: "greetings",
        example_jp: "さようなら。",
        example_romaji: "Sayounara.",
        example_en: "Goodbye.",
        example_mm: "သွားတော့မယ်။"
    },
    {
        japanese: "ありがとうございます",
        romaji: "arigatou gozaimasu",
        pronunciation: "arigatou gozaimasu",
        english: "thank you",
        burmese: "ကျေးဇူးတင်ပါတယ်",
        category: "greetings",
        example_jp: "ありがとうございます。",
        example_romaji: "Arigatou gozaimasu.",
        example_en: "Thank you.",
        example_mm: "ကျေးဇူးတင်ပါတယ်။"
    },
    {
        japanese: "すみません",
        romaji: "sumimasen",
        pronunciation: "sumimasen",
        english: "excuse me / sorry",
        burmese: "တောင်းပန်ပါတယ်",
        category: "greetings",
        example_jp: "すみません。",
        example_romaji: "Sumimasen.",
        example_en: "Excuse me.",
        example_mm: "တောင်းပန်ပါတယ်။"
    },
    {
        japanese: "はい",
        romaji: "hai",
        pronunciation: "hai",
        english: "yes",
        burmese: "ဟုတ်ကဲ့",
        category: "greetings",
        example_jp: "はい、そうです。",
        example_romaji: "Hai, sou desu.",
        example_en: "Yes, that's right.",
        example_mm: "ဟုတ်ကဲ့၊ မှန်ပါတယ်။"
    },
    {
        japanese: "いいえ",
        romaji: "iie",
        pronunciation: "iie",
        english: "no",
        burmese: "မဟုတ်ပါ",
        category: "greetings",
        example_jp: "いいえ、ちがいます。",
        example_romaji: "Iie, chigaimasu.",
        example_en: "No, that's wrong.",
        example_mm: "မဟုတ်ပါ၊ မမှန်ပါ။"
    },

    // ========== NUMBERS / かず (5 words) ==========
    {
        japanese: "いち",
        romaji: "ichi",
        pronunciation: "ichi",
        english: "one",
        burmese: "တစ်",
        category: "numbers",
        example_jp: "いち、に、さん",
        example_romaji: "Ichi, ni, san",
        example_en: "One, two, three",
        example_mm: "တစ်၊ နှစ်၊ သုံး"
    },
    {
        japanese: "に",
        romaji: "ni",
        pronunciation: "ni",
        english: "two",
        burmese: "နှစ်",
        category: "numbers",
        example_jp: "ふたり",
        example_romaji: "Futari",
        example_en: "two people",
        example_mm: "လူနှစ်ယောက်"
    },
    {
        japanese: "さん",
        romaji: "san",
        pronunciation: "san",
        english: "three",
        burmese: "သုံး",
        category: "numbers",
        example_jp: "さんにん",
        example_romaji: "San nin",
        example_en: "three people",
        example_mm: "လူသုံးယောက်"
    },
    {
        japanese: "よん",
        romaji: "yon",
        pronunciation: "yon",
        english: "four",
        burmese: "လေး",
        category: "numbers",
        example_jp: "よにん",
        example_romaji: "Yo nin",
        example_en: "four people",
        example_mm: "လူလေးယောက်"
    },
    {
        japanese: "ご",
        romaji: "go",
        pronunciation: "go",
        english: "five",
        burmese: "ငါး",
        category: "numbers",
        example_jp: "ごにん",
        example_romaji: "Go nin",
        example_en: "five people",
        example_mm: "လူငါးယောက်"
    },

    // ========== TIME / じかん (4 words) ==========
    {
        japanese: "じかん",
        romaji: "jikan",
        pronunciation: "jikan",
        english: "time",
        burmese: "အချိန်",
        category: "time",
        example_jp: "じかんがありません。",
        example_romaji: "Jikan ga arimasen.",
        example_en: "I don't have time.",
        example_mm: "အချိန်မရှိဘူး။"
    },
    {
        japanese: "いま",
        romaji: "ima",
        pronunciation: "ima",
        english: "now",
        burmese: "အခု",
        category: "time",
        example_jp: "いまなんじですか。",
        example_romaji: "Ima nanji desu ka?",
        example_en: "What time is it now?",
        example_mm: "အခု ဘယ်နှစ်နာရီလဲ။"
    },
    {
        japanese: "きょう",
        romaji: "kyou",
        pronunciation: "kyou",
        english: "today",
        burmese: "ဒီနေ့",
        category: "time",
        example_jp: "きょうは いいてんきです。",
        example_romaji: "Kyou wa ii tenki desu.",
        example_en: "The weather is nice today.",
        example_mm: "ဒီနေ့ ရာသီဥတု သာယာတယ်။"
    },
    {
        japanese: "あした",
        romaji: "ashita",
        pronunciation: "ashita",
        english: "tomorrow",
        burmese: "မနက်ဖြန်",
        category: "time",
        example_jp: "あした あいましょう。",
        example_romaji: "Ashita aimashou.",
        example_en: "Let's meet tomorrow.",
        example_mm: "မနက်ဖြန် တွေ့ကြရအောင်။"
    },

    // ========== SHOPPING / かいもの (5 words) ==========
    {
        japanese: "かう",
        romaji: "kau",
        pronunciation: "kau",
        english: "to buy",
        burmese: "ဝယ်သည်",
        category: "shopping",
        example_jp: "ほんを かいます。",
        example_romaji: "Hon o kaimasu.",
        example_en: "I buy a book.",
        example_mm: "စာအုပ်ဝယ်တယ်။"
    },
    {
        japanese: "うる",
        romaji: "uru",
        pronunciation: "uru",
        english: "to sell",
        burmese: "ရောင်းသည်",
        category: "shopping",
        example_jp: "くだものを うります。",
        example_romaji: "Kudamono o urimasu.",
        example_en: "I sell fruits.",
        example_mm: "သစ်သီးရောင်းတယ်။"
    },
    {
        japanese: "みせ",
        romaji: "mise",
        pronunciation: "mise",
        english: "shop/store",
        burmese: "ဆိုင်",
        category: "shopping",
        example_jp: "このみせは やすいです。",
        example_romaji: "Kono mise wa yasui desu.",
        example_en: "This shop is cheap.",
        example_mm: "ဒီဆိုင်က ဈေးချိုတယ်။"
    },
    {
        japanese: "かいもの",
        romaji: "kaimono",
        pronunciation: "kaimono",
        english: "shopping",
        burmese: "ဈေးဝယ်ခြင်း",
        category: "shopping",
        example_jp: "かいものに いきます。",
        example_romaji: "Kaimono ni ikimasu.",
        example_en: "I go shopping.",
        example_mm: "ဈေးဝယ်ထွက်တယ်။"
    },
    {
        japanese: "やすい",
        romaji: "yasui",
        pronunciation: "yasui",
        english: "cheap",
        burmese: "ဈေးချိုသည်",
        category: "shopping",
        example_jp: "このシャツは やすいです。",
        example_romaji: "Kono shatsu wa yasui desu.",
        example_en: "This shirt is cheap.",
        example_mm: "ဒီရှပ်အင်္ကျီက ဈေးချိုတယ်။"
    },

    // ========== DAILY LIFE / にちじょう (7 words) ==========
    {
        japanese: "たべる",
        romaji: "taberu",
        pronunciation: "taberu",
        english: "to eat",
        burmese: "စားသည်",
        category: "daily",
        example_jp: "あさごはんを たべます。",
        example_romaji: "Asagohan o tabemasu.",
        example_en: "I eat breakfast.",
        example_mm: "မနက်စာစားတယ်။"
    },
    {
        japanese: "のむ",
        romaji: "nomu",
        pronunciation: "nomu",
        english: "to drink",
        burmese: "သောက်သည်",
        category: "daily",
        example_jp: "コーヒーを のみます。",
        example_romaji: "Koohii o nomimasu.",
        example_en: "I drink coffee.",
        example_mm: "ကော်ဖီသောက်တယ်။"
    },
    {
        japanese: "ねる",
        romaji: "neru",
        pronunciation: "neru",
        english: "to sleep",
        burmese: "အိပ်သည်",
        category: "daily",
        example_jp: "よる １１じに ねます。",
        example_romaji: "Yoru juuichiji ni nemasu.",
        example_en: "I sleep at 11 PM.",
        example_mm: "ည ၁၁ နာရီမှာ အိပ်တယ်။"
    },
    {
        japanese: "おきる",
        romaji: "okiru",
        pronunciation: "okiru",
        english: "to wake up",
        burmese: "နိုးသည်",
        category: "daily",
        example_jp: "あさ ６じに おきます。",
        example_romaji: "Asa rokuji ni okimasu.",
        example_en: "I wake up at 6 AM.",
        example_mm: "မနက် ၆ နာရီမှာ နိုးတယ်။"
    },
    {
        japanese: "いえ",
        romaji: "ie",
        pronunciation: "ie",
        english: "house/home",
        burmese: "အိမ်",
        category: "daily",
        example_jp: "いえに かえります。",
        example_romaji: "Ie ni kaerimasu.",
        example_en: "I go back home.",
        example_mm: "အိမ်ပြန်တယ်။"
    },
    {
        japanese: "いく",
        romaji: "iku",
        pronunciation: "iku",
        english: "to go",
        burmese: "သွားသည်",
        category: "daily",
        example_jp: "がっこうに いきます。",
        example_romaji: "Gakkou ni ikimasu.",
        example_en: "I go to school.",
        example_mm: "ကျောင်းသွားတယ်။"
    },
    {
        japanese: "くる",
        romaji: "kuru",
        pronunciation: "kuru",
        english: "to come",
        burmese: "လာသည်",
        category: "daily",
        example_jp: "にほんから きました。",
        example_romaji: "Nihon kara kimashita.",
        example_en: "I came from Japan.",
        example_mm: "ဂျပန်ကနေ လာတယ်။"
    },

    // ========== SCHOOL / がっこう (5 words) ==========
    {
        japanese: "がっこう",
        romaji: "gakkou",
        pronunciation: "gakkou",
        english: "school",
        burmese: "ကျောင်း",
        category: "school",
        example_jp: "あした がっこうに いきます。",
        example_romaji: "Ashita gakkou ni ikimasu.",
        example_en: "I will go to school tomorrow.",
        example_mm: "မနက်ဖြန် ကျောင်းသွားမယ်။"
    },
    {
        japanese: "せんせい",
        romaji: "sensei",
        pronunciation: "sensei",
        english: "teacher",
        burmese: "ဆရာ/ဆရာမ",
        category: "school",
        example_jp: "せんせいは やさしいです。",
        example_romaji: "Sensei wa yasashii desu.",
        example_en: "The teacher is kind.",
        example_mm: "ဆရာက ကြင်နာတယ်။"
    },
    {
        japanese: "がくせい",
        romaji: "gakusei",
        pronunciation: "gakusei",
        english: "student",
        burmese: "ကျောင်းသား/သူ",
        category: "school",
        example_jp: "わたしは だいがくせいです。",
        example_romaji: "Watashi wa daigakusei desu.",
        example_en: "I am a university student.",
        example_mm: "ကျွန်တော် တက္ကသိုလ်ကျောင်းသားပါ။"
    },
    {
        japanese: "べんきょう",
        romaji: "benkyou",
        pronunciation: "benkyou",
        english: "study",
        burmese: "စာကျက်ခြင်း",
        category: "school",
        example_jp: "にほんごを べんきょうします。",
        example_romaji: "Nihongo o benkyou shimasu.",
        example_en: "I study Japanese.",
        example_mm: "ဂျပန်စာလေ့လာတယ်။"
    },
    {
        japanese: "ほん",
        romaji: "hon",
        pronunciation: "hon",
        english: "book",
        burmese: "စာအုပ်",
        category: "school",
        example_jp: "このほんは おもしろいです。",
        example_romaji: "Kono hon wa omoshiroi desu.",
        example_en: "This book is interesting.",
        example_mm: "ဒီစာအုပ်က စိတ်ဝင်စားစရာကောင်းတယ်။"
    },

    // ========== WORK / しごと (3 words) ==========
    {
        japanese: "しごと",
        romaji: "shigoto",
        pronunciation: "shigoto",
        english: "work/job",
        burmese: "အလုပ်",
        category: "work",
        example_jp: "しごとを さがしています。",
        example_romaji: "Shigoto o sagashite imasu.",
        example_en: "I am looking for a job.",
        example_mm: "အလုပ်ရှာနေတယ်။"
    },
    {
        japanese: "はたらく",
        romaji: "hataraku",
        pronunciation: "hataraku",
        english: "to work",
        burmese: "အလုပ်လုပ်သည်",
        category: "work",
        example_jp: "かいしゃで はたらきます。",
        example_romaji: "Kaisha de hatarakimasu.",
        example_en: "I work at a company.",
        example_mm: "ကုမ္ပဏီမှာ အလုပ်လုပ်တယ်။"
    },
    {
        japanese: "かいしゃ",
        romaji: "kaisha",
        pronunciation: "kaisha",
        english: "company",
        burmese: "ကုမ္ပဏီ",
        category: "work",
        example_jp: "わたしの かいしゃは おおきいです。",
        example_romaji: "Watashi no kaisha wa ookii desu.",
        example_en: "My company is big.",
        example_mm: "ကျွန်တော့်ကုမ္ပဏီက ကြီးတယ်။"
    },

    // ========== TRANSPORT / こうつう (3 words) ==========
    {
        japanese: "でんしゃ",
        romaji: "densha",
        pronunciation: "densha",
        english: "train",
        burmese: "ရထား",
        category: "transport",
        example_jp: "でんしゃで がっこうに いきます。",
        example_romaji: "Densha de gakkou ni ikimasu.",
        example_en: "I go to school by train.",
        example_mm: "ရထားနဲ့ ကျောင်းသွားတယ်။"
    },
    {
        japanese: "くるま",
        romaji: "kuruma",
        pronunciation: "kuruma",
        english: "car",
        burmese: "ကား",
        category: "transport",
        example_jp: "あたらしい くるまを かいました。",
        example_romaji: "Atarashii kuruma o kaimashita.",
        example_en: "I bought a new car.",
        example_mm: "ကားအသစ်ဝယ်တယ်။"
    },
    {
        japanese: "のる",
        romaji: "noru",
        pronunciation: "noru",
        english: "to ride/board",
        burmese: "စီးသည်",
        category: "transport",
        example_jp: "じてんしゃに のります。",
        example_romaji: "Jitensha ni norimasu.",
        example_en: "I ride a bicycle.",
        example_mm: "စက်ဘီးစီးတယ်။"
    },
        // ========== TRANSPORT (continued) / こうつう ==========
    {
        japanese: "おりる",
        romaji: "oriru",
        pronunciation: "oriru",
        english: "to get off",
        burmese: "ဆင်းသည်",
        category: "transport",
        example_jp: "つぎの えきで おります。",
        example_romaji: "Tsugi no eki de orimasu.",
        example_en: "I get off at the next station.",
        example_mm: "နောက်ဘူတာမှာ ဆင်းတယ်။"
    },
    {
        japanese: "えき",
        romaji: "eki",
        pronunciation: "eki",
        english: "station",
        burmese: "ဘူတာ",
        category: "transport",
        example_jp: "えきで まちます。",
        example_romaji: "Eki de machimasu.",
        example_en: "I wait at the station.",
        example_mm: "ဘူတာမှာ စောင့်တယ်။"
    },
    {
        japanese: "バス",
        romaji: "basu",
        pronunciation: "basu",
        english: "bus",
        burmese: "ဘတ်စ်ကား",
        category: "transport",
        example_jp: "バスに のります。",
        example_romaji: "Basu ni norimasu.",
        example_en: "I ride the bus.",
        example_mm: "ဘတ်စ်ကားစီးတယ်။"
    },
    {
        japanese: "タクシー",
        romaji: "takushii",
        pronunciation: "takushii",
        english: "taxi",
        burmese: "တက္ဆီ",
        category: "transport",
        example_jp: "タクシーで いきます。",
        example_romaji: "Takushii de ikimasu.",
        example_en: "I go by taxi.",
        example_mm: "တက္ဆီနဲ့ သွားတယ်။"
    },
    {
        japanese: "じてんしゃ",
        romaji: "jitensha",
        pronunciation: "jitensha",
        english: "bicycle",
        burmese: "စက်ဘီး",
        category: "transport",
        example_jp: "じてんしゃに のります。",
        example_romaji: "Jitensha ni norimasu.",
        example_en: "I ride a bicycle.",
        example_mm: "စက်ဘီးစီးတယ်။"
    },

    // ========== FAMILY / かぞく (10 words) ==========
    {
        japanese: "かぞく",
        romaji: "kazoku",
        pronunciation: "kazoku",
        english: "family",
        burmese: "မိသားစု",
        category: "family",
        example_jp: "わたしの かぞくは よにんです。",
        example_romaji: "Watashi no kazoku wa yonin desu.",
        example_en: "My family has four people.",
        example_mm: "ကျွန်တော့်မိသားစုမှာ လူလေးယောက်ရှိတယ်။"
    },
    {
        japanese: "ちち",
        romaji: "chichi",
        pronunciation: "chichi",
        english: "father (my)",
        burmese: "အဖေ",
        category: "family",
        example_jp: "ちちは しゃいんです。",
        example_romaji: "Chichi wa shain desu.",
        example_en: "My father is a company employee.",
        example_mm: "အဖေက ကုမ္ပဏီဝန်ထမ်းပါ။"
    },
    {
        japanese: "はは",
        romaji: "haha",
        pronunciation: "haha",
        english: "mother (my)",
        burmese: "အမေ",
        category: "family",
        example_jp: "ははは しゅふです。",
        example_romaji: "Haha wa shufu desu.",
        example_en: "My mother is a housewife.",
        example_mm: "အမေက အိမ်ရှင်မပါ။"
    },
    {
        japanese: "あに",
        romaji: "ani",
        pronunciation: "ani",
        english: "older brother (my)",
        burmese: "အစ်ကို",
        category: "family",
        example_jp: "あには だいがくせいです。",
        example_romaji: "Ani wa daigakusei desu.",
        example_en: "My older brother is a university student.",
        example_mm: "အစ်ကို တက္ကသိုလ်ကျောင်းသားပါ။"
    },
    {
        japanese: "あね",
        romaji: "ane",
        pronunciation: "ane",
        english: "older sister (my)",
        burmese: "အစ်မ",
        category: "family",
        example_jp: "あねは かいしゃいんです。",
        example_romaji: "Ane wa kaishain desu.",
        example_en: "My older sister is a company employee.",
        example_mm: "အစ်မ ကုမ္ပဏီဝန်ထမ်းပါ။"
    },
    {
        japanese: "おとうと",
        romaji: "otouto",
        pronunciation: "otouto",
        english: "younger brother",
        burmese: "ညီ",
        category: "family",
        example_jp: "おとうとは こうこうせいです。",
        example_romaji: "Otouto wa koukousei desu.",
        example_en: "My younger brother is a high school student.",
        example_mm: "ညီက အထက်တန်းကျောင်းသားပါ။"
    },
    {
        japanese: "いもうと",
        romaji: "imouto",
        pronunciation: "imouto",
        english: "younger sister",
        burmese: "ညီမ",
        category: "family",
        example_jp: "いもうとは ちゅうがくせいです。",
        example_romaji: "Imouto wa chuugakusei desu.",
        example_en: "My younger sister is a middle school student.",
        example_mm: "ညီမ အလယ်တန်းကျောင်းသူပါ။"
    },
    {
        japanese: "そふ",
        romaji: "sofu",
        pronunciation: "sofu",
        english: "grandfather",
        burmese: "အဖိုး",
        category: "family",
        example_jp: "そふは きゅうじつです。",
        example_romaji: "Sofu wa kyuujitsu desu.",
        example_en: "My grandfather is retired.",
        example_mm: "အဖိုး အနားယူထားပြီ။"
    },
    {
        japanese: "そぼ",
        romaji: "sobo",
        pronunciation: "sobo",
        english: "grandmother",
        burmese: "အဖွား",
        category: "family",
        example_jp: "そぼは げんきです。",
        example_romaji: "Sobo wa genki desu.",
        example_en: "My grandmother is healthy.",
        example_mm: "အဖွား ကျန်းမာပါတယ်။"
    },
    {
        japanese: "りょうしん",
        romaji: "ryoushin",
        pronunciation: "ryoushin",
        english: "parents",
        burmese: "မိဘများ",
        category: "family",
        example_jp: "りょうしんは うちに います。",
        example_romaji: "Ryoushin wa uchi ni imasu.",
        example_en: "My parents are at home.",
        example_mm: "မိဘတွေ အိမ်မှာရှိတယ်။"
    },

    // ========== PEOPLE / ひと (8 words) ==========
    {
        japanese: "ひと",
        romaji: "hito",
        pronunciation: "hito",
        english: "person",
        burmese: "လူ",
        category: "people",
        example_jp: "あの ひとは せんせいです。",
        example_romaji: "Ano hito wa sensei desu.",
        example_en: "That person is a teacher.",
        example_mm: "ထိုလူသည် ဆရာဖြစ်သည်။"
    },
    {
        japanese: "おとこのひと",
        romaji: "otoko no hito",
        pronunciation: "otoko no hito",
        english: "man",
        burmese: "အမျိုးသား",
        category: "people",
        example_jp: "あの おとこのひとは いしゃです。",
        example_romaji: "Ano otoko no hito wa isha desu.",
        example_en: "That man is a doctor.",
        example_mm: "ထိုအမျိုးသားသည် ဆရာဝန်ဖြစ်သည်။"
    },
    {
        japanese: "おんなのひと",
        romaji: "onna no hito",
        pronunciation: "onna no hito",
        english: "woman",
        burmese: "အမျိုးသမီး",
        category: "people",
        example_jp: "あの おんなのひとは きれいです。",
        example_romaji: "Ano onna no hito wa kirei desu.",
        example_en: "That woman is beautiful.",
        example_mm: "ထိုအမျိုးသမီးသည် လှပသည်။"
    },
    {
        japanese: "こども",
        romaji: "kodomo",
        pronunciation: "kodomo",
        english: "child",
        burmese: "ကလေး",
        category: "people",
        example_jp: "こどもが こうえんで あそびます。",
        example_romaji: "Kodomo ga kouen de asobimasu.",
        example_en: "Children play at the park.",
        example_mm: "ကလေးတွေ ပန်းခြံမှာ ကစားကြတယ်။"
    },
    {
        japanese: "ともだち",
        romaji: "tomodachi",
        pronunciation: "tomodachi",
        english: "friend",
        burmese: "သူငယ်ချင်း",
        category: "people",
        example_jp: "ともだちと えいがを みます。",
        example_romaji: "Tomodachi to eiga o mimasu.",
        example_en: "I watch a movie with my friend.",
        example_mm: "သူငယ်ချင်းနဲ့ ရုပ်ရှင်ကြည့်တယ်။"
    },
    {
        japanese: "かいしゃいん",
        romaji: "kaishain",
        pronunciation: "kaishain",
        english: "company employee",
        burmese: "ကုမ္ပဏီဝန်ထမ်း",
        category: "people",
        example_jp: "ちちは かいしゃいんです。",
        example_romaji: "Chichi wa kaishain desu.",
        example_en: "My father is a company employee.",
        example_mm: "အဖေက ကုမ္ပဏီဝန်ထမ်းပါ။"
    },
    {
        japanese: "いしゃ",
        romaji: "isha",
        pronunciation: "isha",
        english: "doctor",
        burmese: "ဆရာဝန်",
        category: "people",
        example_jp: "いしゃは びょういんではたらきます。",
        example_romaji: "Isha wa byouin de hatarakimasu.",
        example_en: "The doctor works at the hospital.",
        example_mm: "ဆရာဝန်က ဆေးရုံမှာ အလုပ်လုပ်တယ်။"
    },
    {
        japanese: "けいかん",
        romaji: "keikan",
        pronunciation: "keikan",
        english: "police officer",
        burmese: "ရဲ",
        category: "people",
        example_jp: "けいかんが まちを みまもります。",
        example_romaji: "Keikan ga machi o mimamorimasu.",
        example_en: "The police officer watches over the town.",
        example_mm: "ရဲက မြို့ကို စောင့်ကြည့်တယ်။"
    },

    // ========== BODY PARTS / からだ (8 words) ==========
    {
        japanese: "からだ",
        romaji: "karada",
        pronunciation: "karada",
        english: "body",
        burmese: "ကိုယ်ခန္ဓာ",
        category: "body",
        example_jp: "からだに きをつけて。",
        example_romaji: "Karada ni ki o tsukete.",
        example_en: "Take care of your body.",
        example_mm: "ကိုယ်ခန္ဓာကို ဂရုစိုက်ပါ။"
    },
    {
        japanese: "あたま",
        romaji: "atama",
        pronunciation: "atama",
        english: "head",
        burmese: "ခေါင်း",
        category: "body",
        example_jp: "あたまが いたいです。",
        example_romaji: "Atama ga itai desu.",
        example_en: "My head hurts.",
        example_mm: "ခေါင်းကိုက်တယ်။"
    },
    {
        japanese: "かお",
        romaji: "kao",
        pronunciation: "kao",
        english: "face",
        burmese: "မျက်နှာ",
        category: "body",
        example_jp: "かおを あらいます。",
        example_romaji: "Kao o araimasu.",
        example_en: "I wash my face.",
        example_mm: "မျက်နှာသစ်တယ်။"
    },
    {
        japanese: "め",
        romaji: "me",
        pronunciation: "me",
        english: "eye",
        burmese: "မျက်လုံး",
        category: "body",
        example_jp: "めが わるいです。",
        example_romaji: "Me ga warui desu.",
        example_en: "My eyes are bad.",
        example_mm: "မျက်လုံးအားနည်းတယ်။"
    },
    {
        japanese: "みみ",
        romaji: "mimi",
        pronunciation: "mimi",
        english: "ear",
        burmese: "နား",
        category: "body",
        example_jp: "みみが いたいです。",
        example_romaji: "Mimi ga itai desu.",
        example_en: "My ear hurts.",
        example_mm: "နားကိုက်တယ်။"
    },
    {
        japanese: "はな",
        romaji: "hana",
        pronunciation: "hana",
        english: "nose",
        burmese: "နှာ",
        category: "body",
        example_jp: "はなが つらいです。",
        example_romaji: "Hana ga tsurai desu.",
        example_en: "I have a stuffy nose.",
        example_mm: "နှာပိတ်တယ်။"
    },
    {
        japanese: "くち",
        romaji: "kuchi",
        pronunciation: "kuchi",
        english: "mouth",
        burmese: "ပါးစပ်",
        category: "body",
        example_jp: "くちを あけてください。",
        example_romaji: "Kuchi o akete kudasai.",
        example_en: "Please open your mouth.",
        example_mm: "ကျေးဇူးပြု၍ ပါးစပ်ဖွင့်ပါ။"
    },
    {
        japanese: "て",
        romaji: "te",
        pronunciation: "te",
        english: "hand",
        burmese: "လက်",
        category: "body",
        example_jp: "てを あげてください。",
        example_romaji: "Te o agete kudasai.",
        example_en: "Please raise your hand.",
        example_mm: "ကျေးဇူးပြု၍ လက်မြှောက်ပါ။"
    },
        // ========== BODY PARTS (continued) / からだ ==========
    {
        japanese: "あし",
        romaji: "ashi",
        pronunciation: "ashi",
        english: "foot/leg",
        burmese: "ခြေ/ခြေထောက်",
        category: "body",
        example_jp: "あしが いたいです。",
        example_romaji: "Ashi ga itai desu.",
        example_en: "My leg hurts.",
        example_mm: "ခြေထောက်ကိုက်တယ်။"
    },
    {
        japanese: "おなか",
        romaji: "onaka",
        pronunciation: "onaka",
        english: "stomach",
        burmese: "ဗိုက်",
        category: "body",
        example_jp: "おなかが すきました。",
        example_romaji: "Onaka ga sukimashita.",
        example_en: "I'm hungry.",
        example_mm: "ဗိုက်ဆာတယ်။"
    },
    {
        japanese: "くび",
        romaji: "kubi",
        pronunciation: "kubi",
        english: "neck",
        burmese: "လည်ပင်း",
        category: "body",
        example_jp: "くびが こりました。",
        example_romaji: "Kubi ga korimashita.",
        example_en: "My neck is stiff.",
        example_mm: "လည်ပင်းတောင့်တယ်။"
    },
    {
        japanese: "せなか",
        romaji: "senaka",
        pronunciation: "senaka",
        english: "back",
        burmese: "ကျော",
        category: "body",
        example_jp: "せなかが いたいです。",
        example_romaji: "Senaka ga itai desu.",
        example_en: "My back hurts.",
        example_mm: "ကျောကိုက်တယ်။"
    },

    // ========== FOOD & DRINKS / たべもの (15 words) ==========
    {
        japanese: "たべもの",
        romaji: "tabemono",
        pronunciation: "tabemono",
        english: "food",
        burmese: "အစားအစာ",
        category: "food",
        example_jp: "にほんの たべものは おいしいです。",
        example_romaji: "Nihon no tabemono wa oishii desu.",
        example_en: "Japanese food is delicious.",
        example_mm: "ဂျပန်အစားအစာ အရသာရှိတယ်။"
    },
    {
        japanese: "のみもの",
        romaji: "nomimono",
        pronunciation: "nomimono",
        english: "drink",
        burmese: "အဖျော်ယမကာ",
        category: "food",
        example_jp: "つめたい のみものが ほしいです。",
        example_romaji: "Tsumetai nomimono ga hoshii desu.",
        example_en: "I want a cold drink.",
        example_mm: "အအေးဖျော်ရည်ချင်တယ်။"
    },
    {
        japanese: "ごはん",
        romaji: "gohan",
        pronunciation: "gohan",
        english: "rice / meal",
        burmese: "ထမင်း / အစာ",
        category: "food",
        example_jp: "あさごはんを たべます。",
        example_romaji: "Asagohan o tabemasu.",
        example_en: "I eat breakfast.",
        example_mm: "မနက်စာစားတယ်။"
    },
    {
        japanese: "パン",
        romaji: "pan",
        pronunciation: "pan",
        english: "bread",
        burmese: "ပေါင်မုန့်",
        category: "food",
        example_jp: "あさ パンを たべます。",
        example_romaji: "Asa pan o tabemasu.",
        example_en: "I eat bread in the morning.",
        example_mm: "မနက်မှာ ပေါင်မုန့်စားတယ်။"
    },
    {
        japanese: "みず",
        romaji: "mizu",
        pronunciation: "mizu",
        english: "water",
        burmese: "ရေ",
        category: "food",
        example_jp: "みずを のみます。",
        example_romaji: "Mizu o nomimasu.",
        example_en: "I drink water.",
        example_mm: "ရေသောက်တယ်။"
    },
    {
        japanese: "おちゃ",
        romaji: "ocha",
        pronunciation: "ocha",
        english: "tea",
        burmese: "လက်ဖက်ရည်",
        category: "food",
        example_jp: "おちゃを いれます。",
        example_romaji: "Ocha o iremasu.",
        example_en: "I make tea.",
        example_mm: "လက်ဖက်ရည်ဖျော်တယ်။"
    },
    {
        japanese: "コーヒー",
        romaji: "koohii",
        pronunciation: "koohii",
        english: "coffee",
        burmese: "ကော်ဖီ",
        category: "food",
        example_jp: "まいにち コーヒーを のみます。",
        example_romaji: "Mainichi koohii o nomimasu.",
        example_en: "I drink coffee every day.",
        example_mm: "နေ့တိုင်း ကော်ဖီသောက်တယ်။"
    },
    {
        japanese: "ぎゅうにゅう",
        romaji: "gyuunyuu",
        pronunciation: "gyuunyuu",
        english: "milk",
        burmese: "နွားနို့",
        category: "food",
        example_jp: "ぎゅうにゅうを かいます。",
        example_romaji: "Gyuunyuu o kaimasu.",
        example_en: "I buy milk.",
        example_mm: "နွားနို့ဝယ်တယ်။"
    },
    {
        japanese: "くだもの",
        romaji: "kudamono",
        pronunciation: "kudamono",
        english: "fruit",
        burmese: "သစ်သီး",
        category: "food",
        example_jp: "くだものが すきです。",
        example_romaji: "Kudamono ga suki desu.",
        example_en: "I like fruits.",
        example_mm: "သစ်သီးကြိုက်တယ်။"
    },
    {
        japanese: "やさい",
        romaji: "yasai",
        pronunciation: "yasai",
        english: "vegetable",
        burmese: "ဟင်းသီးဟင်းရွက်",
        category: "food",
        example_jp: "やさいを たべます。",
        example_romaji: "Yasai o tabemasu.",
        example_en: "I eat vegetables.",
        example_mm: "ဟင်းသီးဟင်းရွက်စားတယ်။"
    },
    {
        japanese: "さかな",
        romaji: "sakana",
        pronunciation: "sakana",
        english: "fish",
        burmese: "ငါး",
        category: "food",
        example_jp: "さかなを やきます。",
        example_romaji: "Sakana o yakimasu.",
        example_en: "I grill fish.",
        example_mm: "ငါးကင်တယ်။"
    },
    {
        japanese: "にく",
        romaji: "niku",
        pronunciation: "niku",
        english: "meat",
        burmese: "အသား",
        category: "food",
        example_jp: "にくが たべたいです。",
        example_romaji: "Niku ga tabetai desu.",
        example_en: "I want to eat meat.",
        example_mm: "အသားစားချင်တယ်။"
    },
    {
        japanese: "たまご",
        romaji: "tamago",
        pronunciation: "tamago",
        english: "egg",
        burmese: "ကြက်ဥ",
        category: "food",
        example_jp: "たまごを ゆでます。",
        example_romaji: "Tamago o yudemasu.",
        example_en: "I boil eggs.",
        example_mm: "ကြက်ဥပြုတ်တယ်။"
    },
    {
        japanese: "スープ",
        romaji: "suupu",
        pronunciation: "suupu",
        english: "soup",
        burmese: "ဟင်းချို",
        category: "food",
        example_jp: "あつい スープを のみます。",
        example_romaji: "Atsui suupu o nomimasu.",
        example_en: "I drink hot soup.",
        example_mm: "ဟင်းချိုပူပူသောက်တယ်။"
    },
    {
        japanese: "サラダ",
        romaji: "sarada",
        pronunciation: "sarada",
        english: "salad",
        burmese: "သုပ်",
        category: "food",
        example_jp: "サラダを つくります。",
        example_romaji: "Sarada o tsukurimasu.",
        example_en: "I make salad.",
        example_mm: "သုပ်လုပ်တယ်။"
    },

    // ========== HOUSE & HOME / いえ (10 words) ==========
    {
        japanese: "いえ",
        romaji: "ie",
        pronunciation: "ie",
        english: "house/home",
        burmese: "အိမ်",
        category: "house",
        example_jp: "わたしの いえは ここです。",
        example_romaji: "Watashi no ie wa koko desu.",
        example_en: "My house is here.",
        example_mm: "ကျွန်တော့်အိမ် ဒီမှာပါ။"
    },
    {
        japanese: "へや",
        romaji: "heya",
        pronunciation: "heya",
        english: "room",
        burmese: "အခန်း",
        category: "house",
        example_jp: "わたしの へやは きれいです。",
        example_romaji: "Watashi no heya wa kirei desu.",
        example_en: "My room is clean.",
        example_mm: "ကျွန်တော့်အခန်း သန့်ရှင်းတယ်။"
    },
    {
        japanese: "まど",
        romaji: "mado",
        pronunciation: "mado",
        english: "window",
        burmese: "ပြတင်းပေါက်",
        category: "house",
        example_jp: "まどを しめます。",
        example_romaji: "Mado o shimemasu.",
        example_en: "I close the window.",
        example_mm: "ပြတင်းပေါက်ပိတ်တယ်။"
    },
    {
        japanese: "ドア",
        romaji: "doa",
        pronunciation: "doa",
        english: "door",
        burmese: "တံခါး",
        category: "house",
        example_jp: "ドアを あけます。",
        example_romaji: "Doa o akemasu.",
        example_en: "I open the door.",
        example_mm: "တံခါးဖွင့်တယ်။"
    },
    {
        japanese: "いす",
        romaji: "isu",
        pronunciation: "isu",
        english: "chair",
        burmese: "ကုလားထိုင်",
        category: "house",
        example_jp: "いすに すわります。",
        example_romaji: "Isu ni suwarimasu.",
        example_en: "I sit on a chair.",
        example_mm: "ကုလားထိုင်ပေါ်မှာ ထိုင်တယ်။"
    },
    {
        japanese: "つくえ",
        romaji: "tsukue",
        pronunciation: "tsukue",
        english: "desk",
        burmese: "စားပွဲ",
        category: "house",
        example_jp: "つくえの うえに ほんが あります。",
        example_romaji: "Tsukue no ue ni hon ga arimasu.",
        example_en: "There is a book on the desk.",
        example_mm: "စားပွဲပေါ်မှာ စာအုပ်ရှိတယ်။"
    },
    {
        japanese: "ベッド",
        romaji: "beddo",
        pronunciation: "beddo",
        english: "bed",
        burmese: "အိပ်ရာ",
        category: "house",
        example_jp: "ベッドで ねます。",
        example_romaji: "Beddo de nemasu.",
        example_en: "I sleep on the bed.",
        example_mm: "အိပ်ရာပေါ်မှာ အိပ်တယ်။"
    },
    {
        japanese: "でんき",
        romaji: "denki",
        pronunciation: "denki",
        english: "light/electricity",
        burmese: "မီး",
        category: "house",
        example_jp: "でんきを つけます。",
        example_romaji: "Denki o tsukemasu.",
        example_en: "I turn on the light.",
        example_mm: "မီးဖွင့်တယ်။"
    },
    {
        japanese: "れいぞうこ",
        romaji: "reizouko",
        pronunciation: "reizouko",
        english: "refrigerator",
        burmese: "ရေခဲသေတ္တာ",
        category: "house",
        example_jp: "れいぞうこに たべものが あります。",
        example_romaji: "Reizouko ni tabemono ga arimasu.",
        example_en: "There is food in the refrigerator.",
        example_mm: "ရေခဲသေတ္တာထဲမှာ အစားအစာရှိတယ်။"
    },
    {
        japanese: "てれび",
        romaji: "terebi",
        pronunciation: "terebi",
        english: "television",
        burmese: "ရုပ်မြင်သံကြား",
        category: "house",
        example_jp: "てれびを みます。",
        example_romaji: "Terebi o mimasu.",
        example_en: "I watch television.",
        example_mm: "ရုပ်မြင်သံကြားကြည့်တယ်။"
    },

    // ========== PLACES / ばしょ (10 words) ==========
    {
        japanese: "ばしょ",
        romaji: "basho",
        pronunciation: "basho",
        english: "place",
        burmese: "နေရာ",
        category: "places",
        example_jp: "この ばしょは しずかです。",
        example_romaji: "Kono basho wa shizuka desu.",
        example_en: "This place is quiet.",
        example_mm: "ဒီနေရာက တိတ်ဆိတ်တယ်။"
    },
    {
        japanese: "みせ",
        romaji: "mise",
        pronunciation: "mise",
        english: "shop/store",
        burmese: "ဆိုင်",
        category: "places",
        example_jp: "この みせは やすいです。",
        example_romaji: "Kono mise wa yasui desu.",
        example_en: "This shop is cheap.",
        example_mm: "ဒီဆိုင်က ဈေးချိုတယ်။"
    },
    {
        japanese: "びょういん",
        romaji: "byouin",
        pronunciation: "byouin",
        english: "hospital",
        burmese: "ဆေးရုံ",
        category: "places",
        example_jp: "あたまが いたいので びょういんに いきます。",
        example_romaji: "Atama ga itai node byouin ni ikimasu.",
        example_en: "I go to the hospital because my head hurts.",
        example_mm: "ခေါင်းကိုက်လို့ ဆေးရုံသွားတယ်။"
    },
    {
        japanese: "こうえん",
        romaji: "kouen",
        pronunciation: "kouen",
        english: "park",
        burmese: "ပန်းခြံ",
        category: "places",
        example_jp: "こうえんで さんぽします。",
        example_romaji: "Kouen de sanpo shimasu.",
        example_en: "I take a walk in the park.",
        example_mm: "ပန်းခြံမှာ လမ်းလျှောက်တယ်။"
    },
    {
        japanese: "としょかん",
        romaji: "toshokan",
        pronunciation: "toshokan",
        english: "library",
        burmese: "စာကြည့်တိုက်",
        category: "places",
        example_jp: "としょかんで ほんを よみます。",
        example_romaji: "Toshokan de hon o yomimasu.",
        example_en: "I read books at the library.",
        example_mm: "စာကြည့်တိုက်မှာ စာအုပ်ဖတ်တယ်။"
    },
    {
        japanese: "がっこう",
        romaji: "gakkou",
        pronunciation: "gakkou",
        english: "school",
        burmese: "ကျောင်း",
        category: "places",
        example_jp: "まいにち がっこうに いきます。",
        example_romaji: "Mainichi gakkou ni ikimasu.",
        example_en: "I go to school every day.",
        example_mm: "နေ့တိုင်း ကျောင်းသွားတယ်။"
    },
    {
        japanese: "かいしゃ",
        romaji: "kaisha",
        pronunciation: "kaisha",
        english: "company/office",
        burmese: "ကုမ္ပဏီ/ရုံး",
        category: "places",
        example_jp: "９じに かいしゃに つきます。",
        example_romaji: "Kuji ni kaisha ni tsukimasu.",
        example_en: "I arrive at the office at 9 o'clock.",
        example_mm: "၉ နာရီမှာ ရုံးကိုရောက်တယ်။"
    },
    {
        japanese: "えき",
        romaji: "eki",
        pronunciation: "eki",
        english: "station",
        burmese: "ဘူတာ",
        category: "places",
        example_jp: "えきの まえで まちましょう。",
        example_romaji: "Eki no mae de machimashou.",
        example_en: "Let's wait in front of the station.",
        example_mm: "ဘူတာရှေ့မှာ စောင့်ကြရအောင်။"
    },
    {
        japanese: "レストラン",
        romaji: "resutoran",
        pronunciation: "resutoran",
        english: "restaurant",
        burmese: "စားသောက်ဆိုင်",
        category: "places",
        example_jp: "レストランで ばんごはんを たべます。",
        example_romaji: "Resutoran de bangohan o tabemasu.",
        example_en: "I eat dinner at a restaurant.",
        example_mm: "စားသောက်ဆိုင်မှာ ညစာစားတယ်။"
    },
    {
        japanese: "スーパー",
        romaji: "suupaa",
        pronunciation: "suupaa",
        english: "supermarket",
        burmese: "စူပါမားကတ်",
        category: "places",
        example_jp: "スーパーで かいものを します。",
        example_romaji: "Suupaa de kaimono o shimasu.",
        example_en: "I shop at the supermarket.",
        example_mm: "စူပါမားကတ်မှာ ဈေးဝယ်တယ်။"
    },
        // ========== WEATHER & NATURE / てんき (10 words) ==========
    {
        japanese: "てんき",
        romaji: "tenki",
        pronunciation: "tenki",
        english: "weather",
        burmese: "ရာသီဥတု",
        category: "weather",
        example_jp: "きょうの てんきは いいです。",
        example_romaji: "Kyou no tenki wa ii desu.",
        example_en: "Today's weather is good.",
        example_mm: "ဒီနေ့ ရာသီဥတု ကောင်းတယ်။"
    },
    {
        japanese: "はれ",
        romaji: "hare",
        pronunciation: "hare",
        english: "sunny",
        burmese: "နေသာသည်",
        category: "weather",
        example_jp: "あしたは はれです。",
        example_romaji: "Ashita wa hare desu.",
        example_en: "Tomorrow will be sunny.",
        example_mm: "မနက်ဖြန် နေသာမယ်။"
    },
    {
        japanese: "あめ",
        romaji: "ame",
        pronunciation: "ame",
        english: "rain",
        burmese: "မိုး",
        category: "weather",
        example_jp: "あめが ふっています。",
        example_romaji: "Ame ga futte imasu.",
        example_en: "It's raining.",
        example_mm: "မိုးရွာနေတယ်။"
    },
    {
        japanese: "くもり",
        romaji: "kumori",
        pronunciation: "kumori",
        english: "cloudy",
        burmese: "တိမ်ထူသည်",
        category: "weather",
        example_jp: "きょうは くもりです。",
        example_romaji: "Kyou wa kumori desu.",
        example_en: "Today is cloudy.",
        example_mm: "ဒီနေ့ တိမ်ထူတယ်။"
    },
    {
        japanese: "ゆき",
        romaji: "yuki",
        pronunciation: "yuki",
        english: "snow",
        burmese: "နှင်း",
        category: "weather",
        example_jp: "ゆきが ふっています。",
        example_romaji: "Yuki ga futte imasu.",
        example_en: "It's snowing.",
        example_mm: "နှင်းကျနေတယ်။"
    },
    {
        japanese: "かぜ",
        romaji: "kaze",
        pronunciation: "kaze",
        english: "wind",
        burmese: "လေ",
        category: "weather",
        example_jp: "かぜが つよいです。",
        example_romaji: "Kaze ga tsuyoi desu.",
        example_en: "The wind is strong.",
        example_mm: "လေပြင်းတယ်။"
    },
    {
        japanese: "あつい",
        romaji: "atsui",
        pronunciation: "atsui",
        english: "hot (weather)",
        burmese: "ပူသည် (ရာသီဥတု)",
        category: "weather",
        example_jp: "なつは あついです。",
        example_romaji: "Natsu wa atsui desu.",
        example_en: "Summer is hot.",
        example_mm: "နွေရာသီက ပူတယ်။"
    },
    {
        japanese: "さむい",
        romaji: "samui",
        pronunciation: "samui",
        english: "cold (weather)",
        burmese: "အေးသည် (ရာသီဥတု)",
        category: "weather",
        example_jp: "ふゆは さむいです。",
        example_romaji: "Fuyu wa samui desu.",
        example_en: "Winter is cold.",
        example_mm: "ဆောင်းရာသီက အေးတယ်။"
    },
    {
        japanese: "あたたかい",
        romaji: "atatakai",
        pronunciation: "atatakai",
        english: "warm",
        burmese: "နွေးသည်",
        category: "weather",
        example_jp: "はるは あたたかいです。",
        example_romaji: "Haru wa atatakai desu.",
        example_en: "Spring is warm.",
        example_mm: "နွေဦးရာသီက နွေးတယ်။"
    },
    {
        japanese: "すずしい",
        romaji: "suzushii",
        pronunciation: "suzushii",
        english: "cool (weather)",
        burmese: "အေးမြသည်",
        category: "weather",
        example_jp: "あきは すずしいです。",
        example_romaji: "Aki wa suzushii desu.",
        example_en: "Autumn is cool.",
        example_mm: "ဆောင်းဦးရာသီက အေးမြတယ်။"
    },

    // ========== ADJECTIVES - I-ADJECTIVES / けいようし (15 words) ==========
    {
        japanese: "おおきい",
        romaji: "ookii",
        pronunciation: "ookii",
        english: "big",
        burmese: "ကြီးသည်",
        category: "adjectives",
        example_jp: "おおきい いえです。",
        example_romaji: "Ookii ie desu.",
        example_en: "It's a big house.",
        example_mm: "အိမ်ကြီးတယ်။"
    },
    {
        japanese: "ちいさい",
        romaji: "chiisai",
        pronunciation: "chiisai",
        english: "small",
        burmese: "သေးသည်",
        category: "adjectives",
        example_jp: "ちいさい いぬです。",
        example_romaji: "Chiisai inu desu.",
        example_en: "It's a small dog.",
        example_mm: "ခွေးသေးသေးလေးပါ။"
    },
    {
        japanese: "たかい",
        romaji: "takai",
        pronunciation: "takai",
        english: "tall/expensive",
        burmese: "မြင့်သည်/ဈေးကြီးသည်",
        category: "adjectives",
        example_jp: "やまが たかいです。",
        example_romaji: "Yama ga takai desu.",
        example_en: "The mountain is tall.",
        example_mm: "တောင်က မြင့်တယ်။"
    },
    {
        japanese: "ひくい",
        romaji: "hikui",
        pronunciation: "hikui",
        english: "short/low",
        burmese: "နိမ့်သည်",
        category: "adjectives",
        example_jp: "この テーブルは ひくいです。",
        example_romaji: "Kono teeburu wa hikui desu.",
        example_en: "This table is low.",
        example_mm: "ဒီစားပွဲက နိမ့်တယ်။"
    },
    {
        japanese: "おいしい",
        romaji: "oishii",
        pronunciation: "oishii",
        english: "delicious",
        burmese: "အရသာရှိသည်",
        category: "adjectives",
        example_jp: "この ケーキは おいしいです。",
        example_romaji: "Kono keeki wa oishii desu.",
        example_en: "This cake is delicious.",
        example_mm: "ဒီကိတ်မုန့်က အရသာရှိတယ်။"
    },
    {
        japanese: "まずい",
        romaji: "mazui",
        pronunciation: "mazui",
        english: "bad tasting",
        burmese: "အရသာမရှိ",
        category: "adjectives",
        example_jp: "この りょうりは まずいです。",
        example_romaji: "Kono ryouri wa mazui desu.",
        example_en: "This dish tastes bad.",
        example_mm: "ဒီဟင်းက အရသာမရှိဘူး။"
    },
    {
        japanese: "あたらしい",
        romaji: "atarashii",
        pronunciation: "atarashii",
        english: "new",
        burmese: "အသစ်",
        category: "adjectives",
        example_jp: "あたらしい くるまを かいました。",
        example_romaji: "Atarashii kuruma o kaimashita.",
        example_en: "I bought a new car.",
        example_mm: "ကားအသစ်ဝယ်တယ်။"
    },
    {
        japanese: "ふるい",
        romaji: "furui",
        pronunciation: "furui",
        english: "old",
        burmese: "ဟောင်း",
        category: "adjectives",
        example_jp: "ふるい とけいです。",
        example_romaji: "Furui tokei desu.",
        example_en: "It's an old clock.",
        example_mm: "နာရီဟောင်းပါ။"
    },
    {
        japanese: "むずかしい",
        romaji: "muzukashii",
        pronunciation: "muzukashii",
        english: "difficult",
        burmese: "ခက်ခဲသည်",
        category: "adjectives",
        example_jp: "にほんごは むずかしいです。",
        example_romaji: "Nihongo wa muzukashii desu.",
        example_en: "Japanese is difficult.",
        example_mm: "ဂျပန်စာက ခက်တယ်။"
    },
    {
        japanese: "やさしい",
        romaji: "yasashii",
        pronunciation: "yasashii",
        english: "easy/kind",
        burmese: "လွယ်သည်/ကြင်နာသည်",
        category: "adjectives",
        example_jp: "この もんだいは やさしいです。",
        example_romaji: "Kono mondai wa yasashii desu.",
        example_en: "This problem is easy.",
        example_mm: "ဒီပြဿနာက လွယ်တယ်။"
    },
    {
        japanese: "おもしろい",
        romaji: "omoshiroi",
        pronunciation: "omoshiroi",
        english: "interesting/fun",
        burmese: "စိတ်ဝင်စားစရာကောင်းသည်",
        category: "adjectives",
        example_jp: "この えいがは おもしろいです。",
        example_romaji: "Kono eiga wa omoshiroi desu.",
        example_en: "This movie is interesting.",
        example_mm: "ဒီရုပ်ရှင်က စိတ်ဝင်စားစရာကောင်းတယ်။"
    },
    {
        japanese: "つまらない",
        romaji: "tsumaranai",
        pronunciation: "tsumaranai",
        english: "boring",
        burmese: "ပျင်းစရာကောင်းသည်",
        category: "adjectives",
        example_jp: "この ほんは つまらないです。",
        example_romaji: "Kono hon wa tsumaranai desu.",
        example_en: "This book is boring.",
        example_mm: "ဒီစာအုပ်က ပျင်းစရာကောင်းတယ်။"
    },
    {
        japanese: "はやい",
        romaji: "hayai",
        pronunciation: "hayai",
        english: "fast/early",
        burmese: "မြန်သည်/စောသည်",
        category: "adjectives",
        example_jp: "でんしゃは はやいです。",
        example_romaji: "Densha wa hayai desu.",
        example_en: "The train is fast.",
        example_mm: "ရထားက မြန်တယ်။"
    },
    {
        japanese: "おそい",
        romaji: "osoi",
        pronunciation: "osoi",
        english: "slow/late",
        burmese: "နှေးသည်/နောက်ကျသည်",
        category: "adjectives",
        example_jp: "わたしは いつも おそいです。",
        example_romaji: "Watashi wa itsumo osoi desu.",
        example_en: "I am always late.",
        example_mm: "ကျွန်တော် အမြဲနောက်ကျတယ်။"
    },
    {
        japanese: "いい",
        romaji: "ii",
        pronunciation: "ii",
        english: "good",
        burmese: "ကောင်းသည်",
        category: "adjectives",
        example_jp: "これは いい アイデアです。",
        example_romaji: "Kore wa ii aidea desu.",
        example_en: "This is a good idea.",
        example_mm: "ဒါက စိတ်ကူးကောင်းတယ်။"
    },

    // ========== NA-ADJECTIVES / なけいようし (10 words) ==========
    {
        japanese: "しずか",
        romaji: "shizuka",
        pronunciation: "shizuka",
        english: "quiet",
        burmese: "တိတ်ဆိတ်သည်",
        category: "adjectives",
        example_jp: "この へやは しずかです。",
        example_romaji: "Kono heya wa shizuka desu.",
        example_en: "This room is quiet.",
        example_mm: "ဒီအခန်းက တိတ်ဆိတ်တယ်။"
    },
    {
        japanese: "にぎやか",
        romaji: "nigiyaka",
        pronunciation: "nigiyaka",
        english: "lively",
        burmese: "စည်ကားသည်",
        category: "adjectives",
        example_jp: "とうきょうは にぎやかです。",
        example_romaji: "Toukyou wa nigiyaka desu.",
        example_en: "Tokyo is lively.",
        example_mm: "တိုကျိုက စည်ကားတယ်။"
    },
    {
        japanese: "きれい",
        romaji: "kirei",
        pronunciation: "kirei",
        english: "beautiful/clean",
        burmese: "လှပသည်/သန့်ရှင်းသည်",
        category: "adjectives",
        example_jp: "ふじさんは きれいです。",
        example_romaji: "Fujisan wa kirei desu.",
        example_en: "Mt. Fuji is beautiful.",
        example_mm: "ဖူဂျီတောင်က လှပတယ်။"
    },
    {
        japanese: "べんり",
        romaji: "benri",
        pronunciation: "benri",
        english: "convenient",
        burmese: "အဆင်ပြေသည်",
        category: "adjectives",
        example_jp: "この アプリは べんりです。",
        example_romaji: "Kono apuri wa benri desu.",
        example_en: "This app is convenient.",
        example_mm: "ဒီအက်ပ်က အဆင်ပြေတယ်။"
    },
    {
        japanese: "だいじょうぶ",
        romaji: "daijoubu",
        pronunciation: "daijoubu",
        english: "okay/alright",
        burmese: "အဆင်ပြေသည်/ရပါတယ်",
        category: "adjectives",
        example_jp: "だいじょうぶです。",
        example_romaji: "Daijoubu desu.",
        example_en: "It's okay.",
        example_mm: "အဆင်ပြေပါတယ်။"
    },
    {
        japanese: "すき",
        romaji: "suki",
        pronunciation: "suki",
        english: "like (to like)",
        burmese: "ကြိုက်သည်",
        category: "adjectives",
        example_jp: "にほんごが すきです。",
        example_romaji: "Nihongo ga suki desu.",
        example_en: "I like Japanese.",
        example_mm: "ဂျပန်စာကြိုက်တယ်။"
    },
    {
        japanese: "きらい",
        romaji: "kirai",
        pronunciation: "kirai",
        english: "dislike",
        burmese: "မကြိုက်သည်",
        category: "adjectives",
        example_jp: "やさいが きらいです。",
        example_romaji: "Yasai ga kirai desu.",
        example_en: "I dislike vegetables.",
        example_mm: "ဟင်းသီးဟင်းရွက် မကြိုက်ဘူး။"
    },
    {
        japanese: "じょうず",
        romaji: "jouzu",
        pronunciation: "jouzu",
        english: "skilled/good at",
        burmese: "ကျွမ်းကျင်သည်",
        category: "adjectives",
        example_jp: "かれは ピアノが じょうずです。",
        example_romaji: "Kare wa piano ga jouzu desu.",
        example_en: "He is good at piano.",
        example_mm: "သူ စန္ဒရားကျွမ်းကျင်တယ်။"
    },
    {
        japanese: "へた",
        romaji: "heta",
        pronunciation: "heta",
        english: "poor at/bad at",
        burmese: "ညံ့သည်",
        category: "adjectives",
        example_jp: "わたしは えいごが へたです。",
        example_romaji: "Watashi wa eigo ga heta desu.",
        example_en: "I am bad at English.",
        example_mm: "ကျွန်တော် အင်္ဂလိပ်စာ ညံ့တယ်။"
    },
    {
        japanese: "ひま",
        romaji: "hima",
        pronunciation: "hima",
        english: "free (time)",
        burmese: "အားသွန်သည်",
        category: "adjectives",
        example_jp: "こんばん ひまですか。",
        example_romaji: "Konban hima desu ka.",
        example_en: "Are you free tonight?",
        example_mm: "ဒီည အားလား။"
    },

    // ========== BASIC VERBS / どうし (15 words) ==========
    {
        japanese: "する",
        romaji: "suru",
        pronunciation: "suru",
        english: "to do",
        burmese: "လုပ်သည်",
        category: "verbs",
        example_jp: "なにを しますか。",
        example_romaji: "Nani o shimasu ka.",
        example_en: "What will you do?",
        example_mm: "ဘာလုပ်မလဲ။"
    },
    {
        japanese: "くる",
        romaji: "kuru",
        pronunciation: "kuru",
        english: "to come",
        burmese: "လာသည်",
        category: "verbs",
        example_jp: "ともだちが きます。",
        example_romaji: "Tomodachi ga kimasu.",
        example_en: "My friend is coming.",
        example_mm: "သူငယ်ချင်းလာတယ်။"
    },
    {
        japanese: "いく",
        romaji: "iku",
        pronunciation: "iku",
        english: "to go",
        burmese: "သွားသည်",
        category: "verbs",
        example_jp: "にほんに いきます。",
        example_romaji: "Nihon ni ikimasu.",
        example_en: "I go to Japan.",
        example_mm: "ဂျပန်ကိုသွားတယ်။"
    },
    {
        japanese: "みる",
        romaji: "miru",
        pronunciation: "miru",
        english: "to see/watch",
        burmese: "ကြည့်သည်",
        category: "verbs",
        example_jp: "えいがを みます。",
        example_romaji: "Eiga o mimasu.",
        example_en: "I watch a movie.",
        example_mm: "ရုပ်ရှင်ကြည့်တယ်။"
    },
    {
        japanese: "きく",
        romaji: "kiku",
        pronunciation: "kiku",
        english: "to listen/ask",
        burmese: "နားထောင်သည်/မေးသည်",
        category: "verbs",
        example_jp: "おんがくを ききます。",
        example_romaji: "Ongaku o kikimasu.",
        example_en: "I listen to music.",
        example_mm: "ဂီတနားထောင်တယ်။"
    },
    {
        japanese: "はなす",
        romaji: "hanasu",
        pronunciation: "hanasu",
        english: "to speak",
        burmese: "ပြောသည်",
        category: "verbs",
        example_jp: "にほんごを はなします。",
        example_romaji: "Nihongo o hanashimasu.",
        example_en: "I speak Japanese.",
        example_mm: "ဂျပန်စကားပြောတယ်။"
    },
    {
        japanese: "よむ",
        romaji: "yomu",
        pronunciation: "yomu",
        english: "to read",
        burmese: "ဖတ်သည်",
        category: "verbs",
        example_jp: "しんぶんを よみます。",
        example_romaji: "Shinbun o yomimasu.",
        example_en: "I read the newspaper.",
        example_mm: "သတင်းစာဖတ်တယ်။"
    },
    {
        japanese: "かく",
        romaji: "kaku",
        pronunciation: "kaku",
        english: "to write",
        burmese: "ရေးသည်",
        category: "verbs",
        example_jp: "てがみを かきます。",
        example_romaji: "Tegami o kakimasu.",
        example_en: "I write a letter.",
        example_mm: "စာရေးတယ်။"
    },
    {
        japanese: "つくる",
        romaji: "tsukuru",
        pronunciation: "tsukuru",
        english: "to make",
        burmese: "လုပ်သည်",
        category: "verbs",
        example_jp: "ケーキを つくります。",
        example_romaji: "Keeki o tsukurimasu.",
        example_en: "I make a cake.",
        example_mm: "ကိတ်မုန့်လုပ်တယ်။"
    },
    {
        japanese: "あける",
        romaji: "akeru",
        pronunciation: "akeru",
        english: "to open",
        burmese: "ဖွင့်သည်",
        category: "verbs",
        example_jp: "ドアを あけます。",
        example_romaji: "Doa o akemasu.",
        example_en: "I open the door.",
        example_mm: "တံခါးဖွင့်တယ်။"
    },
    {
        japanese: "しめる",
        romaji: "shimeru",
        pronunciation: "shimeru",
        english: "to close",
        burmese: "ပိတ်သည်",
        category: "verbs",
        example_jp: "まどを しめます。",
        example_romaji: "Mado o shimemasu.",
        example_en: "I close the window.",
        example_mm: "ပြတင်းပေါက်ပိတ်တယ်။"
    },
    {
        japanese: "おしえる",
        romaji: "oshieru",
        pronunciation: "oshieru",
        english: "to teach",
        burmese: "သင်ပေးသည်",
        category: "verbs",
        example_jp: "にほんごを おしえます。",
        example_romaji: "Nihongo o oshiemasu.",
        example_en: "I teach Japanese.",
        example_mm: "ဂျပန်စာသင်ပေးတယ်။"
    },
    {
        japanese: "ならう",
        romaji: "narau",
        pronunciation: "narau",
        english: "to learn",
        burmese: "သင်ယူသည်",
        category: "verbs",
        example_jp: "えいごを ならいます。",
        example_romaji: "Eigo o naraimasu.",
        example_en: "I learn English.",
        example_mm: "အင်္ဂလိပ်စာသင်ယူတယ်။"
    },
    {
        japanese: "あそぶ",
        romaji: "asobu",
        pronunciation: "asobu",
        english: "to play",
        burmese: "ကစားသည်",
        category: "verbs",
        example_jp: "こうえんで あそびます。",
        example_romaji: "Kouen de asobimasu.",
        example_en: "I play at the park.",
        example_mm: "ပန်းခြံမှာ ကစားတယ်။"
    },
    {
        japanese: "およぐ",
        romaji: "oyogu",
        pronunciation: "oyogu",
        english: "to swim",
        burmese: "ရေကူးသည်",
        category: "verbs",
        example_jp: "うみで およぎます。",
        example_romaji: "Umi de oyogimasu.",
        example_en: "I swim in the sea.",
        example_mm: "ပင်လယ်မှာ ရေကူးတယ်။"
    },
        // ========== MORE VERBS (continued) / どうし (15 more words) ==========
    {
        japanese: "はしる",
        romaji: "hashiru",
        pronunciation: "hashiru",
        english: "to run",
        burmese: "ပြေးသည်",
        category: "verbs",
        example_jp: "こうえんで はしります。",
        example_romaji: "Kouen de hashirimasu.",
        example_en: "I run in the park.",
        example_mm: "ပန်းခြံမှာ ပြေးတယ်။"
    },
    {
        japanese: "あるく",
        romaji: "aruku",
        pronunciation: "aruku",
        english: "to walk",
        burmese: "လမ်းလျှောက်သည်",
        category: "verbs",
        example_jp: "がっこうまで あるきます。",
        example_romaji: "Gakkou made arukimasu.",
        example_en: "I walk to school.",
        example_mm: "ကျောင်းအထိ လမ်းလျှောက်တယ်။"
    },
    {
        japanese: "とぶ",
        romaji: "tobu",
        pronunciation: "tobu",
        english: "to fly/jump",
        burmese: "ပျံသန်းသည်/ခုန်သည်",
        category: "verbs",
        example_jp: "とりが とびます。",
        example_romaji: "Tori ga tobimasu.",
        example_en: "The bird flies.",
        example_mm: "ငှက်က ပျံသန်းတယ်။"
    },
    {
        japanese: "すわる",
        romaji: "suwaru",
        pronunciation: "suwaru",
        english: "to sit",
        burmese: "ထိုင်သည်",
        category: "verbs",
        example_jp: "いすに すわります。",
        example_romaji: "Isu ni suwarimasu.",
        example_en: "I sit on a chair.",
        example_mm: "ကုလားထိုင်ပေါ်မှာ ထိုင်တယ်။"
    },
    {
        japanese: "たつ",
        romaji: "tatsu",
        pronunciation: "tatsu",
        english: "to stand",
        burmese: "ရပ်သည်",
        category: "verbs",
        example_jp: "ドアの まえに たちます。",
        example_romaji: "Doa no mae ni tachimasu.",
        example_en: "I stand in front of the door.",
        example_mm: "တံခါးရှေ့မှာ ရပ်တယ်။"
    },
    {
        japanese: "もつ",
        romaji: "motsu",
        pronunciation: "motsu",
        english: "to hold/carry",
        burmese: "ကိုင်သည်",
        category: "verbs",
        example_jp: "かばんを もちます。",
        example_romaji: "Kaban o mochimasu.",
        example_en: "I carry a bag.",
        example_mm: "အိတ်ကိုင်တယ်။"
    },
    {
        japanese: "わたす",
        romaji: "watasu",
        pronunciation: "watasu",
        english: "to hand over",
        burmese: "ပေးသည်",
        category: "verbs",
        example_jp: "てがみを わたします。",
        example_romaji: "Tegami o watashimasu.",
        example_en: "I hand over the letter.",
        example_mm: "စာပေးတယ်။"
    },
    {
        japanese: "とる",
        romaji: "toru",
        pronunciation: "toru",
        english: "to take",
        burmese: "ယူသည်",
        category: "verbs",
        example_jp: "しゃしんを とります。",
        example_romaji: "Shashin o torimasu.",
        example_en: "I take a picture.",
        example_mm: "ဓာတ်ပုံရိုက်တယ်။"
    },
    {
        japanese: "あげる",
        romaji: "ageru",
        pronunciation: "ageru",
        english: "to give",
        burmese: "ပေးသည်",
        category: "verbs",
        example_jp: "プレゼントを あげます。",
        example_romaji: "Purezento o agemasu.",
        example_en: "I give a present.",
        example_mm: "လက်ဆောင်ပေးတယ်။"
    },
    {
        japanese: "もらう",
        romaji: "morau",
        pronunciation: "morau",
        english: "to receive",
        burmese: "ရသည်",
        category: "verbs",
        example_jp: "ともだちから プレゼントを もらいます。",
        example_romaji: "Tomodachi kara purezento o moraimasu.",
        example_en: "I receive a present from my friend.",
        example_mm: "သူငယ်ချင်းဆီက လက်ဆောင်ရတယ်။"
    },
    {
        japanese: "かえる",
        romaji: "kaeru",
        pronunciation: "kaeru",
        english: "to return/go back",
        burmese: "ပြန်သည်",
        category: "verbs",
        example_jp: "うちに かえります。",
        example_romaji: "Uchi ni kaerimasu.",
        example_en: "I go back home.",
        example_mm: "အိမ်ပြန်တယ်။"
    },
    {
        japanese: "でかける",
        romaji: "dekakeru",
        pronunciation: "dekakeru",
        english: "to go out",
        burmese: "ထွက်သည်",
        category: "verbs",
        example_jp: "かいものに でかけます。",
        example_romaji: "Kaimono ni dekakemasu.",
        example_en: "I go out shopping.",
        example_mm: "ဈေးဝယ်ထွက်တယ်။"
    },
    {
        japanese: "まつ",
        romaji: "matsu",
        pronunciation: "matsu",
        english: "to wait",
        burmese: "စောင့်သည်",
        category: "verbs",
        example_jp: "ともだちを まちます。",
        example_romaji: "Tomodachi o machimasu.",
        example_en: "I wait for my friend.",
        example_mm: "သူငယ်ချင်းကို စောင့်တယ်။"
    },
    {
        japanese: "つかう",
        romaji: "tsukau",
        pronunciation: "tsukau",
        english: "to use",
        burmese: "သုံးသည်",
        category: "verbs",
        example_jp: "コンピューターを つかいます。",
        example_romaji: "Konpyuutaa o tsukaimasu.",
        example_en: "I use a computer.",
        example_mm: "ကွန်ပျူတာသုံးတယ်။"
    },
    {
        japanese: "いれる",
        romaji: "ireru",
        pronunciation: "ireru",
        english: "to put in",
        burmese: "ထည့်သည်",
        category: "verbs",
        example_jp: "バッグに ほんを いれます。",
        example_romaji: "Baggu ni hon o iremasu.",
        example_en: "I put a book in the bag.",
        example_mm: "အိတ်ထဲ စာအုပ်ထည့်တယ်။"
    },

    // ========== PARTICLES / じょし (10 words) ==========
    {
        japanese: "は",
        romaji: "wa",
        pronunciation: "wa",
        english: "topic marker",
        burmese: "အကြောင်းအရာပြစကားလုံး",
        category: "particles",
        example_jp: "わたしは がくせいです。",
        example_romaji: "Watashi wa gakusei desu.",
        example_en: "As for me, I am a student.",
        example_mm: "ကျွန်တော်ကတော့ ကျောင်းသားပါ။"
    },
    {
        japanese: "が",
        romaji: "ga",
        pronunciation: "ga",
        english: "subject marker",
        burmese: "ပုဒ်မာပြစကားလုံး",
        category: "particles",
        example_jp: "ねこが います。",
        example_romaji: "Neko ga imasu.",
        example_en: "There is a cat.",
        example_mm: "ကြောင်ရှိတယ်။"
    },
    {
        japanese: "を",
        romaji: "o",
        pronunciation: "o",
        english: "object marker",
        burmese: "ကံပြစကားလုံး",
        category: "particles",
        example_jp: "ごはんを たべます。",
        example_romaji: "Gohan o tabemasu.",
        example_en: "I eat rice.",
        example_mm: "ထမင်းစားတယ်။"
    },
    {
        japanese: "に",
        romaji: "ni",
        pronunciation: "ni",
        english: "direction/time marker",
        burmese: "ဘက်သို့/အချိန်ပြစကားလုံး",
        category: "particles",
        example_jp: "がっこうに いきます。",
        example_romaji: "Gakkou ni ikimasu.",
        example_en: "I go to school.",
        example_mm: "ကျောင်းကိုသွားတယ်။"
    },
    {
        japanese: "で",
        romaji: "de",
        pronunciation: "de",
        english: "location/means marker",
        burmese: "နေရာ/နည်းလမ်းပြစကားလုံး",
        category: "particles",
        example_jp: "バスで いきます。",
        example_romaji: "Basu de ikimasu.",
        example_en: "I go by bus.",
        example_mm: "ဘတ်စ်ကားနဲ့ သွားတယ်။"
    },
    {
        japanese: "へ",
        romaji: "e",
        pronunciation: "e",
        english: "direction marker",
        burmese: "ဘက်သို့ (ဦးတည်ရာ)",
        category: "particles",
        example_jp: "にほんへ いきます。",
        example_romaji: "Nihon e ikimasu.",
        example_en: "I go to Japan.",
        example_mm: "ဂျပန်ကိုသွားတယ်။"
    },
    {
        japanese: "と",
        romaji: "to",
        pronunciation: "to",
        english: "and/with",
        burmese: "နှင့်",
        category: "particles",
        example_jp: "ともだちと いきます。",
        example_romaji: "Tomodachi to ikimasu.",
        example_en: "I go with my friend.",
        example_mm: "သူငယ်ချင်းနဲ့ သွားတယ်။"
    },
    {
        japanese: "から",
        romaji: "kara",
        pronunciation: "kara",
        english: "from",
        burmese: "မှ",
        category: "particles",
        example_jp: "にほんから きました。",
        example_romaji: "Nihon kara kimashita.",
        example_en: "I came from Japan.",
        example_mm: "ဂျပန်ကနေ လာတယ်။"
    },
    {
        japanese: "まで",
        romaji: "made",
        pronunciation: "made",
        english: "until/to",
        burmese: "အထိ",
        category: "particles",
        example_jp: "えきまで いきます。",
        example_romaji: "Eki made ikimasu.",
        example_en: "I go to the station.",
        example_mm: "ဘူတာအထိ သွားတယ်။"
    },
    {
        japanese: "の",
        romaji: "no",
        pronunciation: "no",
        english: "possessive marker",
        burmese: "၏ (ပိုင်ဆိုင်မှုပြ)",
        category: "particles",
        example_jp: "わたしの ほん。",
        example_romaji: "Watashi no hon.",
        example_en: "My book.",
        example_mm: "ကျွန်တော့်စာအုပ်။"
    },

    // ========== QUESTION WORDS / ぎもんし (8 words) ==========
    {
        japanese: "なに",
        romaji: "nani",
        pronunciation: "nani",
        english: "what",
        burmese: "ဘာ",
        category: "misc",
        example_jp: "なにを たべますか。",
        example_romaji: "Nani o tabemasu ka.",
        example_en: "What will you eat?",
        example_mm: "ဘာစားမလဲ။"
    },
    {
        japanese: "だれ",
        romaji: "dare",
        pronunciation: "dare",
        english: "who",
        burmese: "ဘယ်သူ",
        category: "misc",
        example_jp: "だれが きましたか。",
        example_romaji: "Dare ga kimashita ka.",
        example_en: "Who came?",
        example_mm: "ဘယ်သူလာတာလဲ။"
    },
    {
        japanese: "どこ",
        romaji: "doko",
        pronunciation: "doko",
        english: "where",
        burmese: "ဘယ်မှာ",
        category: "misc",
        example_jp: "どこに いきますか。",
        example_romaji: "Doko ni ikimasu ka.",
        example_en: "Where will you go?",
        example_mm: "ဘယ်ကိုသွားမလဲ။"
    },
    {
        japanese: "いつ",
        romaji: "itsu",
        pronunciation: "itsu",
        english: "when",
        burmese: "ဘယ်အချိန်",
        category: "misc",
        example_jp: "いつ いきますか。",
        example_romaji: "Itsu ikimasu ka.",
        example_en: "When will you go?",
        example_mm: "ဘယ်အချိန်သွားမလဲ။"
    },
    {
        japanese: "なぜ",
        romaji: "naze",
        pronunciation: "naze",
        english: "why",
        burmese: "အဘယ်ကြောင့်",
        category: "misc",
        example_jp: "なぜ きましたか。",
        example_romaji: "Naze kimashita ka.",
        example_en: "Why did you come?",
        example_mm: "ဘာလို့လာတာလဲ။"
    },
    {
        japanese: "どちら",
        romaji: "dochira",
        pronunciation: "dochira",
        english: "which way/where",
        burmese: "ဘယ်ဘက်/ဘယ်နေရာ",
        category: "misc",
        example_jp: "どちらから きましたか。",
        example_romaji: "Dochira kara kimashita ka.",
        example_en: "Where are you from?",
        example_mm: "ဘယ်ကနေ လာတာလဲ။"
    },
    {
        japanese: "いくら",
        romaji: "ikura",
        pronunciation: "ikura",
        english: "how much",
        burmese: "ဘယ်လောက်",
        category: "misc",
        example_jp: "これは いくらですか。",
        example_romaji: "Kore wa ikura desu ka.",
        example_en: "How much is this?",
        example_mm: "ဒါဘယ်လောက်လဲ။"
    },
    {
        japanese: "どの",
        romaji: "dono",
        pronunciation: "dono",
        english: "which",
        burmese: "ဘယ်",
        category: "misc",
        example_jp: "どの ほんが いいですか。",
        example_romaji: "Dono hon ga ii desu ka.",
        example_en: "Which book is good?",
        example_mm: "ဘယ်စာအုပ်ကောင်းလဲ။"
    },

    // ========== COLORS / いろ (10 words) ==========
    {
        japanese: "あか",
        romaji: "aka",
        pronunciation: "aka",
        english: "red",
        burmese: "အနီရောင်",
        category: "misc",
        example_jp: "あかいろの くるま。",
        example_romaji: "Akairo no kuruma.",
        example_en: "Red car.",
        example_mm: "ကားနီ။"
    },
    {
        japanese: "あお",
        romaji: "ao",
        pronunciation: "ao",
        english: "blue",
        burmese: "အပြာရောင်",
        category: "misc",
        example_jp: "あおい そら。",
        example_romaji: "Aoi sora.",
        example_en: "Blue sky.",
        example_mm: "ကောင်းကင်ပြာ။"
    },
    {
        japanese: "きいろ",
        romaji: "kiiro",
        pronunciation: "kiiro",
        english: "yellow",
        burmese: "အဝါရောင်",
        category: "misc",
        example_jp: "きいろい はな。",
        example_romaji: "Kiiroi hana.",
        example_en: "Yellow flower.",
        example_mm: "ပန်းဝါ။"
    },
    {
        japanese: "しろ",
        romaji: "shiro",
        pronunciation: "shiro",
        english: "white",
        burmese: "အဖြူရောင်",
        category: "misc",
        example_jp: "しろい くも。",
        example_romaji: "Shiroi kumo.",
        example_en: "White cloud.",
        example_mm: "တိမ်ဖြူ။"
    },
    {
        japanese: "くろ",
        romaji: "kuro",
        pronunciation: "kuro",
        english: "black",
        burmese: "အနက်ရောင်",
        category: "misc",
        example_jp: "くろい ネコ。",
        example_romaji: "Kuroi neko.",
        example_en: "Black cat.",
        example_mm: "ကြောင်နက်။"
    },
    {
        japanese: "みどり",
        romaji: "midori",
        pronunciation: "midori",
        english: "green",
        burmese: "အစိမ်းရောင်",
        category: "misc",
        example_jp: "みどりの は。",
        example_romaji: "Midori no ha.",
        example_en: "Green leaf.",
        example_mm: "အရွက်စိမ်း။"
    },
    {
        japanese: "ちゃいろ",
        romaji: "chairo",
        pronunciation: "chairo",
        english: "brown",
        burmese: "အညိုရောင်",
        category: "misc",
        example_jp: "ちゃいろの いす。",
        example_romaji: "Chairo no isu.",
        example_en: "Brown chair.",
        example_mm: "ကုလားထိုင်ညို။"
    },
    {
        japanese: "ピンク",
        romaji: "pinku",
        pronunciation: "pinku",
        english: "pink",
        burmese: "ပန်းရောင်",
        category: "misc",
        example_jp: "ピンクの はな。",
        example_romaji: "Pinku no hana.",
        example_en: "Pink flower.",
        example_mm: "ပန်းရောင်။"
    },
    {
        japanese: "オレンジ",
        romaji: "orenji",
        pronunciation: "orenji",
        english: "orange",
        burmese: "လိမ္မော်ရောင်",
        category: "misc",
        example_jp: "オレンジの くだもの。",
        example_romaji: "Orenji no kudamono.",
        example_en: "Orange fruit.",
        example_mm: "လိမ္မော်သီး။"
    },
    {
        japanese: "むらさき",
        romaji: "murasaki",
        pronunciation: "murasaki",
        english: "purple",
        burmese: "ခရမ်းရောင်",
        category: "misc",
        example_jp: "むらさきの ドレス。",
        example_romaji: "Murasaki no doresu.",
        example_en: "Purple dress.",
        example_mm: "စွယ်စုံရောင်ခရမ်း။"
    },

    // ========== DIRECTIONS / ほうこう (7 words) ==========
    {
        japanese: "ひがし",
        romaji: "higashi",
        pronunciation: "higashi",
        english: "east",
        burmese: "အရှေ့",
        category: "misc",
        example_jp: "たいようは ひがしから のぼります。",
        example_romaji: "Taiyou wa higashi kara noborimasu.",
        example_en: "The sun rises from the east.",
        example_mm: "နေက အရှေ့ကနေ ထွက်တယ်။"
    },
    {
        japanese: "にし",
        romaji: "nishi",
        pronunciation: "nishi",
        english: "west",
        burmese: "အနောက်",
        category: "misc",
        example_jp: "たいようは にしに しずみます。",
        example_romaji: "Taiyou wa nishi ni shizumimasu.",
        example_en: "The sun sets in the west.",
        example_mm: "နေက အနောက်မှာ ဝင်တယ်။"
    },
    {
        japanese: "みなみ",
        romaji: "minami",
        pronunciation: "minami",
        english: "south",
        burmese: "တောင်",
        category: "misc",
        example_jp: "みなみの くに。",
        example_romaji: "Minami no kuni.",
        example_en: "Southern country.",
        example_mm: "တောင်ဘက်နိုင်ငံ။"
    },
    {
        japanese: "きた",
        romaji: "kita",
        pronunciation: "kita",
        english: "north",
        burmese: "မြောက်",
        category: "misc",
        example_jp: "きたの くに。",
        example_romaji: "Kita no kuni.",
        example_en: "Northern country.",
        example_mm: "မြောက်ဘက်နိုင်ငံ။"
    },
    {
        japanese: "うえ",
        romaji: "ue",
        pronunciation: "ue",
        english: "up/above",
        burmese: "အပေါ်",
        category: "misc",
        example_jp: "つくえの うえ。",
        example_romaji: "Tsukue no ue.",
        example_en: "On the desk.",
        example_mm: "စားပွဲပေါ်မှာ။"
    },
    {
        japanese: "した",
        romaji: "shita",
        pronunciation: "shita",
        english: "down/below",
        burmese: "အောက်",
        category: "misc",
        example_jp: "いすの した。",
        example_romaji: "Isu no shita.",
        example_en: "Under the chair.",
        example_mm: "ကုလားထိုင်အောက်မှာ။"
    },
    {
        japanese: "みぎ",
        romaji: "migi",
        pronunciation: "migi",
        english: "right",
        burmese: "ညာ",
        category: "misc",
        example_jp: "みぎに まがってください。",
        example_romaji: "Migi ni magatte kudasai.",
        example_en: "Please turn right.",
        example_mm: "ကျေးဇူးပြု၍ ညာဘက်ကွေ့ပါ။"
    },
    {
        japanese: "ひだり",
        romaji: "hidari",
        pronunciation: "hidari",
        english: "left",
        burmese: "ဘယ်",
        category: "misc",
        example_jp: "ひだりに まがってください。",
        example_romaji: "Hidari ni magatte kudasai.",
        example_en: "Please turn left.",
        example_mm: "ကျေးဇူးပြု၍ ဘယ်ဘက်ကွေ့ပါ။"
    },

    // ========== EXTRA VOCABULARY / そのた (9 more to reach 200) ==========
    {
        japanese: "おかね",
        romaji: "okane",
        pronunciation: "okane",
        english: "money",
        burmese: "ပိုက်ဆံ",
        category: "misc",
        example_jp: "おかねが ありません。",
        example_romaji: "Okane ga arimasen.",
        example_en: "I have no money.",
        example_mm: "ပိုက်ဆံမရှိဘူး။"
    },
    {
        japanese: "じかん",
        romaji: "jikan",
        pronunciation: "jikan",
        english: "time",
        burmese: "အချိန်",
        category: "misc",
        example_jp: "じかんが たりません。",
        example_romaji: "Jikan ga tarimasen.",
        example_en: "There's not enough time.",
        example_mm: "အချိန်မလုံလောက်ဘူး။"
    },
    {
        japanese: "ともだち",
        romaji: "tomodachi",
        pronunciation: "tomodachi",
        english: "friend",
        burmese: "သူငယ်ချင်း",
        category: "misc",
        example_jp: "ともだちが ほしいです。",
        example_romaji: "Tomodachi ga hoshii desu.",
        example_en: "I want a friend.",
        example_mm: "သူငယ်ချင်းချင်တယ်။"
    },
    {
        japanese: "しごと",
        romaji: "shigoto",
        pronunciation: "shigoto",
        english: "work/job",
        burmese: "အလုပ်",
        category: "misc",
        example_jp: "しごとを さがしています。",
        example_romaji: "Shigoto o sagashite imasu.",
        example_en: "I'm looking for a job.",
        example_mm: "အလုပ်ရှာနေတယ်။"
    },
    {
        japanese: "くるま",
        romaji: "kuruma",
        pronunciation: "kuruma",
        english: "car",
        burmese: "ကား",
        category: "misc",
        example_jp: "あたらしい くるま。",
        example_romaji: "Atarashii kuruma.",
        example_en: "New car.",
        example_mm: "ကားအသစ်။"
    },
    {
        japanese: "でんわ",
        romaji: "denwa",
        pronunciation: "denwa",
        english: "telephone",
        burmese: "တယ်လီဖုန်း",
        category: "misc",
        example_jp: "でんわを かけます。",
        example_romaji: "Denwa o kakemasu.",
        example_en: "I make a phone call.",
        example_mm: "ဖုန်းခေါ်တယ်။"
    },
    {
        japanese: "メール",
        romaji: "meeru",
        pronunciation: "meeru",
        english: "email",
        burmese: "အီးမေး",
        category: "misc",
        example_jp: "メールを おくります。",
        example_romaji: "Meeru o okurimasu.",
        example_en: "I send an email.",
        example_mm: "အီးမေးပို့တယ်။"
    },
    {
        japanese: "インターネット",
        romaji: "intaanetto",
        pronunciation: "intaanetto",
        english: "internet",
        burmese: "အင်တာနက်",
        category: "misc",
        example_jp: "インターネットを つかいます。",
        example_romaji: "Intaanetto o tsukaimasu.",
        example_en: "I use the internet.",
        example_mm: "အင်တာနက်သုံးတယ်။"
    },
    {
        japanese: "びょうき",
        romaji: "byouki",
        pronunciation: "byouki",
        english: "illness/sick",
        burmese: "ဖျားနာခြင်း",
        category: "misc",
        example_jp: "びょうきに なりました。",
        example_romaji: "Byouki ni narimashita.",
        example_en: "I got sick.",
        example_mm: "ဖျားနာသွားတယ်။"
    },
        // ========== MORE I-ADJECTIVES / けいようし (20 more words) ==========
    {
        japanese: "あかるい",
        romaji: "akarui",
        pronunciation: "akarui",
        english: "bright/cheerful",
        burmese: "တောက်ပသည်/ရွှင်လန်းသည်",
        category: "adjectives",
        example_jp: "このへやは あかるいです。",
        example_romaji: "Kono heya wa akarui desu.",
        example_en: "This room is bright.",
        example_mm: "ဒီအခန်းက တောက်ပတယ်။"
    },
    {
        japanese: "くらい",
        romaji: "kurai",
        pronunciation: "kurai",
        english: "dark/gloomy",
        burmese: "မှောင်သည်",
        category: "adjectives",
        example_jp: "よるは くらいです。",
        example_romaji: "Yoru wa kurai desu.",
        example_en: "Night is dark.",
        example_mm: "ညက မှောင်တယ်။"
    },
    {
        japanese: "ひろい",
        romaji: "hiroi",
        pronunciation: "hiroi",
        english: "spacious/wide",
        burmese: "ကျယ်ဝန်းသည်",
        category: "adjectives",
        example_jp: "このへやは ひろいです。",
        example_romaji: "Kono heya wa hiroi desu.",
        example_en: "This room is spacious.",
        example_mm: "ဒီအခန်းက ကျယ်တယ်။"
    },
    {
        japanese: "せまい",
        romaji: "semai",
        pronunciation: "semai",
        english: "narrow/cramped",
        burmese: "ကျဉ်းသည်",
        category: "adjectives",
        example_jp: "このへやは せまいです。",
        example_romaji: "Kono heya wa semai desu.",
        example_en: "This room is cramped.",
        example_mm: "ဒီအခန်းက ကျဉ်းတယ်။"
    },
    {
        japanese: "かるい",
        romaji: "karui",
        pronunciation: "karui",
        english: "light (weight)",
        burmese: "ပေါ့သည်",
        category: "adjectives",
        example_jp: "このにもつは かるいです。",
        example_romaji: "Kono nimotsu wa karui desu.",
        example_en: "This luggage is light.",
        example_mm: "ဒီခရီးဆောင်အိတ်က ပေါ့တယ်။"
    },
    {
        japanese: "おもい",
        romaji: "omoi",
        pronunciation: "omoi",
        english: "heavy",
        burmese: "လေးသည်",
        category: "adjectives",
        example_jp: "このにもつは おもいです。",
        example_romaji: "Kono nimotsu wa omoi desu.",
        example_en: "This luggage is heavy.",
        example_mm: "ဒီခရီးဆောင်အိတ်က လေးတယ်။"
    },
    {
        japanese: "わかい",
        romaji: "wakai",
        pronunciation: "wakai",
        english: "young",
        burmese: "ငယ်ရွယ်သည်",
        category: "adjectives",
        example_jp: "かのじょは わかいです。",
        example_romaji: "Kanojo wa wakai desu.",
        example_en: "She is young.",
        example_mm: "သူမက ငယ်ရွယ်တယ်။"
    },
    {
        japanese: "としより",
        romaji: "toshiyori",
        pronunciation: "toshiyori",
        english: "elderly",
        burmese: "သက်ကြီးရွယ်အို",
        category: "adjectives",
        example_jp: "このかたは としよりです。",
        example_romaji: "Kono kata wa toshiyori desu.",
        example_en: "This person is elderly.",
        example_mm: "ဒီပုဂ္ဂိုလ်က သက်ကြီးရွယ်အိုပါ။"
    },
    {
        japanese: "つよい",
        romaji: "tsuyoi",
        pronunciation: "tsuyoi",
        english: "strong",
        burmese: "သန်မာသည်",
        category: "adjectives",
        example_jp: "かれは つよいです。",
        example_romaji: "Kare wa tsuyoi desu.",
        example_en: "He is strong.",
        example_mm: "သူက သန်မာတယ်။"
    },
    {
        japanese: "よわい",
        romaji: "yowai",
        pronunciation: "yowai",
        english: "weak",
        burmese: "အားနည်းသည်",
        category: "adjectives",
        example_jp: "かれは よわいです。",
        example_romaji: "Kare wa yowai desu.",
        example_en: "He is weak.",
        example_mm: "သူက အားနည်းတယ်။"
    },
    {
        japanese: "ふかい",
        romaji: "fukai",
        pronunciation: "fukai",
        english: "deep",
        burmese: "နက်သည်",
        category: "adjectives",
        example_jp: "このみずは ふかいです。",
        example_romaji: "Kono mizu wa fukai desu.",
        example_en: "This water is deep.",
        example_mm: "ဒီရေက နက်တယ်။"
    },
    {
        japanese: "あさい",
        romaji: "asai",
        pronunciation: "asai",
        english: "shallow",
        burmese: "တိမ်သည်",
        category: "adjectives",
        example_jp: "このみずは あさいです。",
        example_romaji: "Kono mizu wa asai desu.",
        example_en: "This water is shallow.",
        example_mm: "ဒီရေက တိမ်တယ်။"
    },
    {
        japanese: "ふるい",
        romaji: "furui",
        pronunciation: "furui",
        english: "old (object)",
        burmese: "ဟောင်း",
        category: "adjectives",
        example_jp: "このほんは ふるいです。",
        example_romaji: "Kono hon wa furui desu.",
        example_en: "This book is old.",
        example_mm: "ဒီစာအုပ်က ဟောင်းတယ်။"
    },
    {
        japanese: "あたらしい",
        romaji: "atarashii",
        pronunciation: "atarashii",
        english: "new",
        burmese: "အသစ်",
        category: "adjectives",
        example_jp: "このくるまは あたらしいです。",
        example_romaji: "Kono kuruma wa atarashii desu.",
        example_en: "This car is new.",
        example_mm: "ဒီကားက အသစ်ပါ။"
    },
    {
        japanese: "うつくしい",
        romaji: "utsukushii",
        pronunciation: "utsukushii",
        english: "beautiful",
        burmese: "လှပသည်",
        category: "adjectives",
        example_jp: "このはなは うつくしいです。",
        example_romaji: "Kono hana wa utsukushii desu.",
        example_en: "This flower is beautiful.",
        example_mm: "ဒီပန်းက လှပတယ်။"
    },
    {
        japanese: "きたない",
        romaji: "kitanai",
        pronunciation: "kitanai",
        english: "dirty",
        burmese: "ညစ်ပတ်သည်",
        category: "adjectives",
        example_jp: "このへやは きたないです。",
        example_romaji: "Kono heya wa kitanai desu.",
        example_en: "This room is dirty.",
        example_mm: "ဒီအခန်းက ညစ်ပတ်တယ်။"
    },
    {
        japanese: "きれい",
        romaji: "kirei",
        pronunciation: "kirei",
        english: "clean/beautiful",
        burmese: "သန့်ရှင်းသည်/လှပသည်",
        category: "adjectives",
        example_jp: "このへやは きれいです。",
        example_romaji: "Kono heya wa kirei desu.",
        example_en: "This room is clean.",
        example_mm: "ဒီအခန်းက သန့်ရှင်းတယ်။"
    },
    {
        japanese: "にがい",
        romaji: "nigai",
        pronunciation: "nigai",
        english: "bitter",
        burmese: "ခါးသည်",
        category: "adjectives",
        example_jp: "このくすりは にがいです。",
        example_romaji: "Kono kusuri wa nigai desu.",
        example_en: "This medicine is bitter.",
        example_mm: "ဒီဆေးက ခါးတယ်။"
    },
    {
        japanese: "あまい",
        romaji: "amai",
        pronunciation: "amai",
        english: "sweet",
        burmese: "ချိုသည်",
        category: "adjectives",
        example_jp: "このケーキは あまいです。",
        example_romaji: "Kono keeki wa amai desu.",
        example_en: "This cake is sweet.",
        example_mm: "ဒီကိတ်မုန့်က ချိုတယ်။"
    },
    {
        japanese: "からい",
        romaji: "karai",
        pronunciation: "karai",
        english: "spicy/salty",
        burmese: "စပ်သည်/ငန်သည်",
        category: "adjectives",
        example_jp: "このカレーは からいです。",
        example_romaji: "Kono karee wa karai desu.",
        example_en: "This curry is spicy.",
        example_mm: "ဒီဟင်းက စပ်တယ်။"
    },

    // ========== MORE NA-ADJECTIVES / なけいようし (10 more words) ==========
    {
        japanese: "ゆうめい",
        romaji: "yuumei",
        pronunciation: "yuumei",
        english: "famous",
        burmese: "ကျော်ကြားသည်",
        category: "adjectives",
        example_jp: "ふじさんは ゆうめいです。",
        example_romaji: "Fujisan wa yuumei desu.",
        example_en: "Mt. Fuji is famous.",
        example_mm: "ဖူဂျီတောင်က ကျော်ကြားတယ်။"
    },
    {
        japanese: "しんせつ",
        romaji: "shinsetsu",
        pronunciation: "shinsetsu",
        english: "kind",
        burmese: "ကြင်နာသည်",
        category: "adjectives",
        example_jp: "かのじょは しんせつです。",
        example_romaji: "Kanojo wa shinsetsu desu.",
        example_en: "She is kind.",
        example_mm: "သူမ ကြင်နာတယ်။"
    },
    {
        japanese: "げんき",
        romaji: "genki",
        pronunciation: "genki",
        english: "healthy/energetic",
        burmese: "ကျန်းမာသည်/တက်ကြွသည်",
        category: "adjectives",
        example_jp: "おげんきですか。",
        example_romaji: "Ogenki desu ka.",
        example_en: "How are you?",
        example_mm: "နေကောင်းလား။"
    },
    {
        japanese: "てきとう",
        romaji: "tekitou",
        pronunciation: "tekitou",
        english: "suitable/appropriate",
        burmese: "သင့်လျော်သည်",
        category: "adjectives",
        example_jp: "このふくは てきとうです。",
        example_romaji: "Kono fuku wa tekitou desu.",
        example_en: "These clothes are suitable.",
        example_mm: "ဒီအဝတ်တွေ သင့်တော်တယ်။"
    },
    {
        japanese: "らく",
        romaji: "raku",
        pronunciation: "raku",
        english: "comfortable/easy",
        burmese: "သက်တောင့်သက်သာရှိသည်/လွယ်ကူသည်",
        category: "adjectives",
        example_jp: "このいすは らくです。",
        example_romaji: "Kono isu wa raku desu.",
        example_en: "This chair is comfortable.",
        example_mm: "ဒီကုလားထိုင်က သက်တောင့်သက်သာရှိတယ်။"
    },
    {
        japanese: "ふくざつ",
        romaji: "fukuzatsu",
        pronunciation: "fukuzatsu",
        english: "complicated",
        burmese: "ရှုပ်ထွေးသည်",
        category: "adjectives",
        example_jp: "このもんだいは ふくざつです。",
        example_romaji: "Kono mondai wa fukuzatsu desu.",
        example_en: "This problem is complicated.",
        example_mm: "ဒီပြဿနာက ရှုပ်ထွေးတယ်။"
    },
    {
        japanese: "かんたん",
        romaji: "kantan",
        pronunciation: "kantan",
        english: "simple/easy",
        burmese: "ရိုးရှင်းသည်/လွယ်ကူသည်",
        category: "adjectives",
        example_jp: "このしゅくだいは かんたんです。",
        example_romaji: "Kono shukudai wa kantan desu.",
        example_en: "This homework is simple.",
        example_mm: "ဒီအိမ်စာက လွယ်တယ်။"
    },
    {
        japanese: "だいじ",
        romaji: "daiji",
        pronunciation: "daiji",
        english: "important",
        burmese: "အရေးကြီးသည်",
        category: "adjectives",
        example_jp: "けんこうは だいじです。",
        example_romaji: "Kenkou wa daiji desu.",
        example_en: "Health is important.",
        example_mm: "ကျန်းမာရေးက အရေးကြီးတယ်။"
    },
    {
        japanese: "へん",
        romaji: "hen",
        pronunciation: "hen",
        english: "strange/weird",
        burmese: "ထူးဆန်းသည်",
        category: "adjectives",
        example_jp: "このおとこは へんです。",
        example_romaji: "Kono otoko wa hen desu.",
        example_en: "This man is strange.",
        example_mm: "ဒီလူက ထူးဆန်းတယ်။"
    },
    {
        japanese: "まじめ",
        romaji: "majime",
        pronunciation: "majime",
        english: "serious/diligent",
        burmese: "လေးနက်သည်/ဝီရိယရှိသည်",
        category: "adjectives",
        example_jp: "かれは まじめな がくせいです。",
        example_romaji: "Kare wa majime na gakusei desu.",
        example_en: "He is a serious student.",
        example_mm: "သူက လေးနက်တဲ့ ကျောင်းသားပါ။"
    },

    // ========== HOUSEHOLD ITEMS / かていようひん (10 words) ==========
    {
        japanese: "テーブル",
        romaji: "teeburu",
        pronunciation: "teeburu",
        english: "table",
        burmese: "စားပွဲ",
        category: "house",
        example_jp: "テーブルの うえに ほんが あります。",
        example_romaji: "Teeburu no ue ni hon ga arimasu.",
        example_en: "There is a book on the table.",
        example_mm: "စားပွဲပေါ်မှာ စာအုပ်ရှိတယ်။"
    },
    {
        japanese: "ソファ",
        romaji: "sofa",
        pronunciation: "sofa",
        english: "sofa",
        burmese: "ဆိုဖာ",
        category: "house",
        example_jp: "ソファに すわります。",
        example_romaji: "Sofa ni suwarimasu.",
        example_en: "I sit on the sofa.",
        example_mm: "ဆိုဖာပေါ်မှာ ထိုင်တယ်။"
    },
    {
        japanese: "たんす",
        romaji: "tansu",
        pronunciation: "tansu",
        english: "wardrobe/chest",
        burmese: "ဗီရို",
        category: "house",
        example_jp: "たんすに ふくを いれます。",
        example_romaji: "Tansu ni fuku o iremasu.",
        example_en: "I put clothes in the wardrobe.",
        example_mm: "ဗီရိုထဲ အဝတ်ထည့်တယ်။"
    },
    {
        japanese: "かがみ",
        romaji: "kagami",
        pronunciation: "kagami",
        english: "mirror",
        burmese: "မှန်",
        category: "house",
        example_jp: "かがみを みます。",
        example_romaji: "Kagami o mimasu.",
        example_en: "I look in the mirror.",
        example_mm: "မှန်ကြည့်တယ်။"
    },
    {
        japanese: "めがね",
        romaji: "megane",
        pronunciation: "megane",
        english: "glasses",
        burmese: "မျက်မှန်",
        category: "house",
        example_jp: "めがねを かけます。",
        example_romaji: "Megane o kakemasu.",
        example_en: "I wear glasses.",
        example_mm: "မျက်မှန်တပ်တယ်။"
    },
    {
        japanese: "とけい",
        romaji: "tokei",
        pronunciation: "tokei",
        english: "clock/watch",
        burmese: "နာရီ",
        category: "house",
        example_jp: "とけいを みます。",
        example_romaji: "Tokei o mimasu.",
        example_en: "I look at the clock.",
        example_mm: "နာရီကြည့်တယ်။"
    },
    {
        japanese: "かさ",
        romaji: "kasa",
        pronunciation: "kasa",
        english: "umbrella",
        burmese: "ထီး",
        category: "house",
        example_jp: "かさを さします。",
        example_romaji: "Kasa o sashimasu.",
        example_en: "I open an umbrella.",
        example_mm: "ထီးဖွင့်တယ်။"
    },
    {
        japanese: "かばん",
        romaji: "kaban",
        pronunciation: "kaban",
        english: "bag",
        burmese: "အိတ်",
        category: "house",
        example_jp: "かばんを もっています。",
        example_romaji: "Kaban o motte imasu.",
        example_en: "I have a bag.",
        example_mm: "အိတ်ကိုင်ထားတယ်။"
    },
    {
        japanese: "さいふ",
        romaji: "saifu",
        pronunciation: "saifu",
        english: "wallet",
        burmese: "ပိုက်ဆံအိတ်",
        category: "house",
        example_jp: "さいふに おかねが あります。",
        example_romaji: "Saifu ni okane ga arimasu.",
        example_en: "There is money in the wallet.",
        example_mm: "ပိုက်ဆံအိတ်ထဲမှာ ပိုက်ဆံရှိတယ်။"
    },
    {
        japanese: "かぎ",
        romaji: "kagi",
        pronunciation: "kagi",
        english: "key",
        burmese: "သော့",
        category: "house",
        example_jp: "かぎを なくしました。",
        example_romaji: "Kagi o nakushimashita.",
        example_en: "I lost my key.",
        example_mm: "သော့ပျောက်သွားတယ်။"
    },

    // ========== NATURE WORDS / しぜん (10 words) ==========
    {
        japanese: "やま",
        romaji: "yama",
        pronunciation: "yama",
        english: "mountain",
        burmese: "တောင်",
        category: "weather",
        example_jp: "ふじさんは たかいやまです。",
        example_romaji: "Fujisan wa takai yama desu.",
        example_en: "Mt. Fuji is a tall mountain.",
        example_mm: "ဖူဂျီတောင်က မြင့်တဲ့တောင်ပါ။"
    },
    {
        japanese: "かわ",
        romaji: "kawa",
        pronunciation: "kawa",
        english: "river",
        burmese: "မြစ်",
        category: "weather",
        example_jp: "かわで およぎます。",
        example_romaji: "Kawa de oyogimasu.",
        example_en: "I swim in the river.",
        example_mm: "မြစ်ထဲမှာ ရေကူးတယ်။"
    },
    {
        japanese: "うみ",
        romaji: "umi",
        pronunciation: "umi",
        english: "sea/ocean",
        burmese: "ပင်လယ်",
        category: "weather",
        example_jp: "うみが みえます。",
        example_romaji: "Umi ga miemasu.",
        example_en: "I can see the sea.",
        example_mm: "ပင်လယ်မြင်ရတယ်။"
    },
    {
        japanese: "そら",
        romaji: "sora",
        pronunciation: "sora",
        english: "sky",
        burmese: "ကောင်းကင်",
        category: "weather",
        example_jp: "そらが あおいです。",
        example_romaji: "Sora ga aoi desu.",
        example_en: "The sky is blue.",
        example_mm: "ကောင်းကင်က အပြာရောင်ပါ။"
    },
    {
        japanese: "ほし",
        romaji: "hoshi",
        pronunciation: "hoshi",
        english: "star",
        burmese: "ကြယ်",
        category: "weather",
        example_jp: "よる ほしが みえます。",
        example_romaji: "Yoru hoshi ga miemasu.",
        example_en: "You can see stars at night.",
        example_mm: "ညမှာ ကြယ်တွေမြင်ရတယ်။"
    },
    {
        japanese: "つき",
        romaji: "tsuki",
        pronunciation: "tsuki",
        english: "moon",
        burmese: "လ",
        category: "weather",
        example_jp: "つきが きれいです。",
        example_romaji: "Tsuki ga kirei desu.",
        example_en: "The moon is beautiful.",
        example_mm: "လက လှပတယ်။"
    },
    {
        japanese: "にわ",
        romaji: "niwa",
        pronunciation: "niwa",
        english: "garden",
        burmese: "ဥယျာဉ်",
        category: "house",
        example_jp: "にわに はなが あります。",
        example_romaji: "Niwa ni hana ga arimasu.",
        example_en: "There are flowers in the garden.",
        example_mm: "ဥယျာဉ်ထဲမှာ ပန်းတွေရှိတယ်။"
    },
    {
        japanese: "き",
        romaji: "ki",
        pronunciation: "ki",
        english: "tree",
        burmese: "သစ်ပင်",
        category: "weather",
        example_jp: "このきは たかいです。",
        example_romaji: "Kono ki wa takai desu.",
        example_en: "This tree is tall.",
        example_mm: "ဒီသစ်ပင်က မြင့်တယ်။"
    },
    {
        japanese: "はな",
        romaji: "hana",
        pronunciation: "hana",
        english: "flower",
        burmese: "ပန်း",
        category: "weather",
        example_jp: "はなが さきました。",
        example_romaji: "Hana ga sakimashita.",
        example_en: "The flowers bloomed.",
        example_mm: "ပန်းတွေ ပွင့်တယ်။"
    },
    {
        japanese: "くさ",
        romaji: "kusa",
        pronunciation: "kusa",
        english: "grass",
        burmese: "မြက်",
        category: "weather",
        example_jp: "くさの うえを あるきます。",
        example_romaji: "Kusa no ue o arukimasu.",
        example_en: "I walk on the grass.",
        example_mm: "မြက်ပေါ်မှာ လမ်းလျှောက်တယ်။"
    },

    // ========== ANIMALS / どうぶつ (10 words) ==========
    {
        japanese: "いぬ",
        romaji: "inu",
        pronunciation: "inu",
        english: "dog",
        burmese: "ခွေး",
        category: "misc",
        example_jp: "いぬが すきです。",
        example_romaji: "Inu ga suki desu.",
        example_en: "I like dogs.",
        example_mm: "ခွေးကြိုက်တယ်။"
    },
    {
        japanese: "ねこ",
        romaji: "neko",
        pronunciation: "neko",
        english: "cat",
        burmese: "ကြောင်",
        category: "misc",
        example_jp: "ねこが います。",
        example_romaji: "Neko ga imasu.",
        example_en: "There is a cat.",
        example_mm: "ကြောင်ရှိတယ်။"
    },
    {
        japanese: "とり",
        romaji: "tori",
        pronunciation: "tori",
        english: "bird",
        burmese: "ငှက်",
        category: "misc",
        example_jp: "とりが とびます。",
        example_romaji: "Tori ga tobimasu.",
        example_en: "The bird flies.",
        example_mm: "ငှက်က ပျံတယ်။"
    },
    {
        japanese: "さかな",
        romaji: "sakana",
        pronunciation: "sakana",
        english: "fish",
        burmese: "ငါး",
        category: "food",
        example_jp: "さかなを たべます。",
        example_romaji: "Sakana o tabemasu.",
        example_en: "I eat fish.",
        example_mm: "ငါးစားတယ်။"
    },
    {
        japanese: "うま",
        romaji: "uma",
        pronunciation: "uma",
        english: "horse",
        burmese: "မြင်း",
        category: "misc",
        example_jp: "うまに のります。",
        example_romaji: "Uma ni norimasu.",
        example_en: "I ride a horse.",
        example_mm: "မြင်းစီးတယ်။"
    },
    {
        japanese: "うし",
        romaji: "ushi",
        pronunciation: "ushi",
        english: "cow",
        burmese: "နွား",
        category: "misc",
        example_jp: "うしの にくです。",
        example_romaji: "Ushi no niku desu.",
        example_en: "It's beef.",
        example_mm: "အမဲသားပါ။"
    },
    {
        japanese: "ぶた",
        romaji: "buta",
        pronunciation: "buta",
        english: "pig",
        burmese: "ဝက်",
        category: "misc",
        example_jp: "ぶたの にくです。",
        example_romaji: "Buta no niku desu.",
        example_en: "It's pork.",
        example_mm: "ဝက်သားပါ။"
    },
    {
        japanese: "さる",
        romaji: "saru",
        pronunciation: "saru",
        english: "monkey",
        burmese: "မျောက်",
        category: "misc",
        example_jp: "さるが すきです。",
        example_romaji: "Saru ga suki desu.",
        example_en: "I like monkeys.",
        example_mm: "မျောက်ကြိုက်တယ်။"
    },
    {
        japanese: "ぞう",
        romaji: "zou",
        pronunciation: "zou",
        english: "elephant",
        burmese: "ဆင်",
        category: "misc",
        example_jp: "ぞうは おおきいです。",
        example_romaji: "Zou wa ookii desu.",
        example_en: "Elephants are big.",
        example_mm: "ဆင်တွေက ကြီးတယ်။"
    },
    {
        japanese: "パンダ",
        romaji: "panda",
        pronunciation: "panda",
        english: "panda",
        burmese: "ပန်ဒါ",
        category: "misc",
        example_jp: "パンダは かわいいです。",
        example_romaji: "Panda wa kawaii desu.",
        example_en: "Pandas are cute.",
        example_mm: "ပန်ဒါတွေက ချစ်စရာကောင်းတယ်။"
    },
    // ========== MORE ANIMALS / どうぶつ (10 more words) ==========
    {
        japanese: "ねずみ",
        romaji: "nezumi",
        pronunciation: "nezumi",
        english: "mouse/rat",
        burmese: "ကြွက်",
        category: "misc",
        example_jp: "ねずみが ちいさいです。",
        example_romaji: "Nezumi ga chiisai desu.",
        example_en: "The mouse is small.",
        example_mm: "ကြွက်က သေးတယ်။"
    },
    {
        japanese: "うさぎ",
        romaji: "usagi",
        pronunciation: "usagi",
        english: "rabbit",
        burmese: "ယုန်",
        category: "misc",
        example_jp: "うさぎは はやいです。",
        example_romaji: "Usagi wa hayai desu.",
        example_en: "Rabbits are fast.",
        example_mm: "ယုန်တွေက မြန်တယ်။"
    },
    {
        japanese: "かえる",
        romaji: "kaeru",
        pronunciation: "kaeru",
        english: "frog",
        burmese: "ဖား",
        category: "misc",
        example_jp: "かえるが とびます。",
        example_romaji: "Kaeru ga tobimasu.",
        example_en: "The frog jumps.",
        example_mm: "ဖားက ခုန်တယ်။"
    },
    {
        japanese: "へび",
        romaji: "hebi",
        pronunciation: "hebi",
        english: "snake",
        burmese: "မြွေ",
        category: "misc",
        example_jp: "へびが こわいです。",
        example_romaji: "Hebi ga kowai desu.",
        example_en: "Snakes are scary.",
        example_mm: "မြွေက ကြောက်စရာကောင်းတယ်။"
    },
    {
        japanese: "さかな",
        romaji: "sakana",
        pronunciation: "sakana",
        english: "fish",
        burmese: "ငါး",
        category: "food",
        example_jp: "さかなが およぎます。",
        example_romaji: "Sakana ga oyogimasu.",
        example_en: "The fish swims.",
        example_mm: "ငါးက ရေကူးတယ်။"
    },
    {
        japanese: "ちょう",
        romaji: "chou",
        pronunciation: "chou",
        english: "butterfly",
        burmese: "လိပ်ပြာ",
        category: "misc",
        example_jp: "ちょうが とびます。",
        example_romaji: "Chou ga tobimasu.",
        example_en: "The butterfly flies.",
        example_mm: "လိပ်ပြာက ပျံတယ်။"
    },
    {
        japanese: "はち",
        romaji: "hachi",
        pronunciation: "hachi",
        english: "bee",
        burmese: "ပျား",
        category: "misc",
        example_jp: "はちが とびます。",
        example_romaji: "Hachi ga tobimasu.",
        example_en: "The bee flies.",
        example_mm: "ပျားက ပျံတယ်။"
    },
    {
        japanese: "くも",
        romaji: "kumo",
        pronunciation: "kumo",
        english: "spider",
        burmese: "ပင့်ကူ",
        category: "misc",
        example_jp: "くもが いえに います。",
        example_romaji: "Kumo ga ie ni imasu.",
        example_en: "There is a spider in the house.",
        example_mm: "အိမ်ထဲမှာ ပင့်ကူရှိတယ်။"
    },
    {
        japanese: "あり",
        romaji: "ari",
        pronunciation: "ari",
        english: "ant",
        burmese: "ပုရွက်ဆိတ်",
        category: "misc",
        example_jp: "ありが はたらきます。",
        example_romaji: "Ari ga hatarakimasu.",
        example_en: "Ants work.",
        example_mm: "ပုရွက်ဆိတ်တွေ အလုပ်လုပ်တယ်။"
    },
    {
        japanese: "とんぼ",
        romaji: "tonbo",
        pronunciation: "tonbo",
        english: "dragonfly",
        burmese: "ပုစဉ်း",
        category: "misc",
        example_jp: "とんぼが そらを とびます。",
        example_romaji: "Tonbo ga sora o tobimasu.",
        example_en: "The dragonfly flies in the sky.",
        example_mm: "ပုစဉ်းက ကောင်းကင်မှာ ပျံတယ်။"
    },

    // ========== HOBBIES / しゅみ (10 words) ==========
    {
        japanese: "しゅみ",
        romaji: "shumi",
        pronunciation: "shumi",
        english: "hobby",
        burmese: "ဝါသနာ",
        category: "misc",
        example_jp: "あなたの しゅみは なんですか。",
        example_romaji: "Anata no shumi wa nan desu ka.",
        example_en: "What is your hobby?",
        example_mm: "မင်းရဲ့ ဝါသနာက ဘာလဲ။"
    },
    {
        japanese: "おんがく",
        romaji: "ongaku",
        pronunciation: "ongaku",
        english: "music",
        burmese: "ဂီတ",
        category: "misc",
        example_jp: "おんがくを ききます。",
        example_romaji: "Ongaku o kikimasu.",
        example_en: "I listen to music.",
        example_mm: "ဂီတနားထောင်တယ်။"
    },
    {
        japanese: "えいが",
        romaji: "eiga",
        pronunciation: "eiga",
        english: "movie",
        burmese: "ရုပ်ရှင်",
        category: "misc",
        example_jp: "えいがを みます。",
        example_romaji: "Eiga o mimasu.",
        example_en: "I watch movies.",
        example_mm: "ရုပ်ရှင်ကြည့်တယ်။"
    },
    {
        japanese: "スポーツ",
        romaji: "supootsu",
        pronunciation: "supootsu",
        english: "sports",
        burmese: "အားကစား",
        category: "misc",
        example_jp: "スポーツを します。",
        example_romaji: "Supootsu o shimasu.",
        example_en: "I play sports.",
        example_mm: "အားကစားလုပ်တယ်။"
    },
    {
        japanese: "どくしょ",
        romaji: "dokusho",
        pronunciation: "dokusho",
        english: "reading",
        burmese: "စာဖတ်ခြင်း",
        category: "misc",
        example_jp: "どくしょが すきです。",
        example_romaji: "Dokusho ga suki desu.",
        example_en: "I like reading.",
        example_mm: "စာဖတ်ရတာ ကြိုက်တယ်။"
    },
    {
        japanese: "りょこう",
        romaji: "ryokou",
        pronunciation: "ryokou",
        english: "travel",
        burmese: "ခရီးသွားခြင်း",
        category: "misc",
        example_jp: "りょこうに いきます。",
        example_romaji: "Ryokou ni ikimasu.",
        example_en: "I go on a trip.",
        example_mm: "ခရီးသွားတယ်။"
    },
    {
        japanese: "しゃしん",
        romaji: "shashin",
        pronunciation: "shashin",
        english: "photography/photo",
        burmese: "ဓာတ်ပုံရိုက်ခြင်း/ဓာတ်ပုံ",
        category: "misc",
        example_jp: "しゃしんを とります。",
        example_romaji: "Shashin o torimasu.",
        example_en: "I take photos.",
        example_mm: "ဓာတ်ပုံရိုက်တယ်။"
    },
    {
        japanese: "かいが",
        romaji: "kaiga",
        pronunciation: "kaiga",
        english: "painting",
        burmese: "ပန်းချီဆွဲခြင်း",
        category: "misc",
        example_jp: "かいがを かきます。",
        example_romaji: "Kaiga o kakimasu.",
        example_en: "I paint pictures.",
        example_mm: "ပန်းချီဆွဲတယ်။"
    },
    {
        japanese: "りょうり",
        romaji: "ryouri",
        pronunciation: "ryouri",
        english: "cooking",
        burmese: "ချက်ပြုတ်ခြင်း",
        category: "misc",
        example_jp: "りょうりが すきです。",
        example_romaji: "Ryouri ga suki desu.",
        example_en: "I like cooking.",
        example_mm: "ချက်ပြုတ်ရတာ ကြိုက်တယ်။"
    },
    {
        japanese: "うんどう",
        romaji: "undou",
        pronunciation: "undou",
        english: "exercise",
        burmese: "လေ့ကျင့်ခန်း",
        category: "misc",
        example_jp: "まいにち うんどうを します。",
        example_romaji: "Mainichi undou o shimasu.",
        example_en: "I exercise every day.",
        example_mm: "နေ့တိုင်း လေ့ကျင့်ခန်းလုပ်တယ်။"
    },

    // ========== EMOTIONS / かんじょう (10 words) ==========
    {
        japanese: "うれしい",
        romaji: "ureshii",
        pronunciation: "ureshii",
        english: "happy",
        burmese: "ပျော်ရွှင်သည်",
        category: "adjectives",
        example_jp: "あえて うれしいです。",
        example_romaji: "Aete ureshii desu.",
        example_en: "I'm happy to meet you.",
        example_mm: "တွေ့ရလို့ ပျော်တယ်။"
    },
    {
        japanese: "かなしい",
        romaji: "kanashii",
        pronunciation: "kanashii",
        english: "sad",
        burmese: "ဝမ်းနည်းသည်",
        category: "adjectives",
        example_jp: "かなしい はなしです。",
        example_romaji: "Kanashii hanashi desu.",
        example_en: "It's a sad story.",
        example_mm: "ဝမ်းနည်းစရာ ဇာတ်လမ်းပါ။"
    },
    {
        japanese: "たのしい",
        romaji: "tanoshii",
        pronunciation: "tanoshii",
        english: "fun/enjoyable",
        burmese: "ပျော်စရာကောင်းသည်",
        category: "adjectives",
        example_jp: "たのしい いちにちでした。",
        example_romaji: "Tanoshii ichinichi deshita.",
        example_en: "It was a fun day.",
        example_mm: "ပျော်စရာကောင်းတဲ့ နေ့တစ်နေ့ပါ။"
    },
    {
        japanese: "つまらない",
        romaji: "tsumaranai",
        pronunciation: "tsumaranai",
        english: "boring",
        burmese: "ပျင်းစရာကောင်းသည်",
        category: "adjectives",
        example_jp: "この えいがは つまらないです。",
        example_romaji: "Kono eiga wa tsumaranai desu.",
        example_en: "This movie is boring.",
        example_mm: "ဒီရုပ်ရှင်က ပျင်းစရာကောင်းတယ်။"
    },
    {
        japanese: "こわい",
        romaji: "kowai",
        pronunciation: "kowai",
        english: "scary",
        burmese: "ကြောက်စရာကောင်းသည်",
        category: "adjectives",
        example_jp: "おばけが こわいです。",
        example_romaji: "Obake ga kowai desu.",
        example_en: "Ghosts are scary.",
        example_mm: "တစ္ဆေက ကြောက်စရာကောင်းတယ်။"
    },
    {
        japanese: "さびしい",
        romaji: "sabishii",
        pronunciation: "sabishii",
        english: "lonely",
        burmese: "အထီးကျန်သည်",
        category: "adjectives",
        example_jp: "ひとりは さびしいです。",
        example_romaji: "Hitori wa sabishii desu.",
        example_en: "Being alone is lonely.",
        example_mm: "တစ်ယောက်တည်းနေရတာ အထီးကျန်တယ်။"
    },
    {
        japanese: "つかれた",
        romaji: "tsukareta",
        pronunciation: "tsukareta",
        english: "tired",
        burmese: "ပင်ပန်းသည်",
        category: "adjectives",
        example_jp: "きょうは つかれました。",
        example_romaji: "Kyou wa tsukaremashita.",
        example_en: "I'm tired today.",
        example_mm: "ဒီနေ့ ပင်ပန်းတယ်။"
    },
    {
        japanese: "こまった",
        romaji: "komatta",
        pronunciation: "komatta",
        english: "troubled/worried",
        burmese: "စိုးရိမ်သည်/ဒုက္ခရောက်သည်",
        category: "adjectives",
        example_jp: "こまった もんだいです。",
        example_romaji: "Komatta mondai desu.",
        example_en: "It's a troubling problem.",
        example_mm: "စိုးရိမ်စရာ ပြဿနာပါ။"
    },
    {
        japanese: "しんぱい",
        romaji: "shinpai",
        pronunciation: "shinpai",
        english: "worry/anxiety",
        burmese: "စိုးရိမ်ခြင်း",
        category: "adjectives",
        example_jp: "しんぱいしないでください。",
        example_romaji: "Shinpai shinaide kudasai.",
        example_en: "Please don't worry.",
        example_mm: "ကျေးဇူးပြု၍ စိုးရိမ်မနေပါနဲ့။"
    },
    {
        japanese: "おこる",
        romaji: "okoru",
        pronunciation: "okoru",
        english: "angry",
        burmese: "စိတ်ဆိုးသည်",
        category: "verbs",
        example_jp: "かれは おこっています。",
        example_romaji: "Kare wa okotte imasu.",
        example_en: "He is angry.",
        example_mm: "သူ စိတ်ဆိုးနေတယ်။"
    },

    // ========== CLOTHING / ふく (10 words) ==========
    {
        japanese: "ふく",
        romaji: "fuku",
        pronunciation: "fuku",
        english: "clothes",
        burmese: "အဝတ်အစား",
        category: "misc",
        example_jp: "あたらしい ふくを かいました。",
        example_romaji: "Atarashii fuku o kaimashita.",
        example_en: "I bought new clothes.",
        example_mm: "အဝတ်အသစ်ဝယ်တယ်။"
    },
    {
        japanese: "シャツ",
        romaji: "shatsu",
        pronunciation: "shatsu",
        english: "shirt",
        burmese: "ရှပ်အင်္ကျီ",
        category: "misc",
        example_jp: "しろい シャツを きます。",
        example_romaji: "Shiroi shatsu o kimasu.",
        example_en: "I wear a white shirt.",
        example_mm: "အင်္ကျီဖြူဝတ်တယ်။"
    },
    {
        japanese: "ズボン",
        romaji: "zubon",
        pronunciation: "zubon",
        english: "pants",
        burmese: "ဘောင်းဘီ",
        category: "misc",
        example_jp: "くろい ズボンを はきます。",
        example_romaji: "Kuroi zubon o hakimasu.",
        example_en: "I wear black pants.",
        example_mm: "ဘောင်းဘီနက်ဝတ်တယ်။"
    },
    {
        japanese: "スカート",
        romaji: "sukaato",
        pronunciation: "sukaato",
        english: "skirt",
        burmese: "စကတ်",
        category: "misc",
        example_jp: "あかい スカートを はきます。",
        example_romaji: "Akai sukaato o hakimasu.",
        example_en: "I wear a red skirt.",
        example_mm: "စကတ်နီဝတ်တယ်။"
    },
    {
        japanese: "くつ",
        romaji: "kutsu",
        pronunciation: "kutsu",
        english: "shoes",
        burmese: "ဖိနပ်",
        category: "misc",
        example_jp: "あたらしい くつを かいました。",
        example_romaji: "Atarashii kutsu o kaimashita.",
        example_en: "I bought new shoes.",
        example_mm: "ဖိနပ်အသစ်ဝယ်တယ်။"
    },
    {
        japanese: "くつした",
        romaji: "kutsushita",
        pronunciation: "kutsushita",
        english: "socks",
        burmese: "ခြေအိတ်",
        category: "misc",
        example_jp: "くつしたを はきます。",
        example_romaji: "Kutsushita o hakimasu.",
        example_en: "I wear socks.",
        example_mm: "ခြေအိတ်စီးတယ်။"
    },
    {
        japanese: "ぼうし",
        romaji: "boushi",
        pronunciation: "boushi",
        english: "hat",
        burmese: "ဦးထုပ်",
        category: "misc",
        example_jp: "ぼうしを かぶります。",
        example_romaji: "Boushi o kaburimasu.",
        example_en: "I wear a hat.",
        example_mm: "ဦးထုပ်ဆောင်းတယ်။"
    },
    {
        japanese: "メガネ",
        romaji: "megane",
        pronunciation: "megane",
        english: "glasses",
        burmese: "မျက်မှန်",
        category: "house",
        example_jp: "めがねを かけます。",
        example_romaji: "Megane o kakemasu.",
        example_en: "I wear glasses.",
        example_mm: "မျက်မှန်တပ်တယ်။"
    },
    {
        japanese: "ネクタイ",
        romaji: "nekutai",
        pronunciation: "nekutai",
        english: "necktie",
        burmese: "လည်စည်း",
        category: "misc",
        example_jp: "ネクタイを しめます。",
        example_romaji: "Nekutai o shimemasu.",
        example_en: "I wear a tie.",
        example_mm: "လည်စည်းစီးတယ်။"
    },
    {
        japanese: "セーター",
        romaji: "seetaa",
        pronunciation: "seetaa",
        english: "sweater",
        burmese: "ဆွယ်တာ",
        category: "misc",
        example_jp: "ふゆに セーターを きます。",
        example_romaji: "Fuyu ni seetaa o kimasu.",
        example_en: "I wear a sweater in winter.",
        example_mm: "ဆောင်းရာသီမှာ ဆွယ်တာဝတ်တယ်။"
    },
        // ========== MORE CLOTHING / ふく (10 more words) ==========
    {
        japanese: "コート",
        romaji: "kooto",
        pronunciation: "kooto",
        english: "coat",
        burmese: "ကုတ်အင်္ကျီ",
        category: "misc",
        example_jp: "さむいから コートを きます。",
        example_romaji: "Samui kara kooto o kimasu.",
        example_en: "I wear a coat because it's cold.",
        example_mm: "အေးလို့ ကုတ်အင်္ကျီဝတ်တယ်။"
    },
    {
        japanese: "パジャマ",
        romaji: "pajama",
        pronunciation: "pajama",
        english: "pajamas",
        burmese: "အိပ်ဝတ်အင်္ကျီ",
        category: "misc",
        example_jp: "パジャマを きます。",
        example_romaji: "Pajama o kimasu.",
        example_en: "I wear pajamas.",
        example_mm: "အိပ်ဝတ်အင်္ကျီဝတ်တယ်။"
    },
    {
        japanese: "Tシャツ",
        romaji: "tiishatsu",
        pronunciation: "tiishatsu",
        english: "T-shirt",
        burmese: "တီရှပ်",
        category: "misc",
        example_jp: "なつに Tシャツを きます。",
        example_romaji: "Natsu ni tiishatsu o kimasu.",
        example_en: "I wear a T-shirt in summer.",
        example_mm: "နွေရာသီမှာ တီရှပ်ဝတ်တယ်။"
    },
    {
        japanese: "ジャケット",
        romaji: "jaketto",
        pronunciation: "jaketto",
        english: "jacket",
        burmese: "ဂျက်ကတ်",
        category: "misc",
        example_jp: "この ジャケットは いいです。",
        example_romaji: "Kono jaketto wa ii desu.",
        example_en: "This jacket is nice.",
        example_mm: "ဒီဂျက်ကတ် ကောင်းတယ်။"
    },
    {
        japanese: "スーツ",
        romaji: "suutsu",
        pronunciation: "suutsu",
        english: "suit",
        burmese: "ဝတ်စုံ",
        category: "misc",
        example_jp: "しごとの スーツを きます。",
        example_romaji: "Shigoto no suutsu o kimasu.",
        example_en: "I wear a suit for work.",
        example_mm: "အလုပ်အတွက် ဝတ်စုံဝတ်တယ်။"
    },
    {
        japanese: "ワイシャツ",
        romaji: "waishatsu",
        pronunciation: "waishatsu",
        english: "dress shirt",
        burmese: "လက်ရှည်အင်္ကျီ",
        category: "misc",
        example_jp: "しろい ワイシャツを きます。",
        example_romaji: "Shiroi waishatsu o kimasu.",
        example_en: "I wear a white dress shirt.",
        example_mm: "အင်္ကျီဖြူဝတ်တယ်။"
    },
    {
        japanese: "マフラー",
        romaji: "mafuraa",
        pronunciation: "mafuraa",
        english: "scarf",
        burmese: "လည်စည်းပူ",
        category: "misc",
        example_jp: "ふゆに マフラーを します。",
        example_romaji: "Fuyu ni mafuraa o shimasu.",
        example_en: "I wear a scarf in winter.",
        example_mm: "ဆောင်းရာသီမှာ လည်စည်းပူစီးတယ်။"
    },
    {
        japanese: "てぶくろ",
        romaji: "tebukuro",
        pronunciation: "tebukuro",
        english: "gloves",
        burmese: "လက်အိတ်",
        category: "misc",
        example_jp: "さむいから てぶくろを します。",
        example_romaji: "Samui kara tebukuro o shimasu.",
        example_en: "I wear gloves because it's cold.",
        example_mm: "အေးလို့ လက်အိတ်စီးတယ်။"
    },
    {
        japanese: "ベルト",
        romaji: "beruto",
        pronunciation: "beruto",
        english: "belt",
        burmese: "ခါးပတ်",
        category: "misc",
        example_jp: "くろい ベルトを します。",
        example_romaji: "Kuroi beruto o shimasu.",
        example_en: "I wear a black belt.",
        example_mm: "ခါးပတ်နက်စီးတယ်။"
    },
    {
        japanese: "ネックレス",
        romaji: "nekkuresu",
        pronunciation: "nekkuresu",
        english: "necklace",
        burmese: "လည်ဆွဲ",
        category: "misc",
        example_jp: "きれいな ネックレスを します。",
        example_romaji: "Kireina nekkuresu o shimasu.",
        example_en: "I wear a beautiful necklace.",
        example_mm: "လည်ဆွဲလှလှစီးတယ်။"
    },

    // ========== JAPANESE CULTURE / にほんのぶんか (10 words) ==========
    {
        japanese: "さくら",
        romaji: "sakura",
        pronunciation: "sakura",
        english: "cherry blossom",
        burmese: "ချယ်ရီပန်း",
        category: "misc",
        example_jp: "さくらが きれいです。",
        example_romaji: "Sakura ga kirei desu.",
        example_en: "Cherry blossoms are beautiful.",
        example_mm: "ချယ်ရီပန်းတွေ လှပတယ်။"
    },
    {
        japanese: "すし",
        romaji: "sushi",
        pronunciation: "sushi",
        english: "sushi",
        burmese: "ဆူရှီ",
        category: "food",
        example_jp: "すしが たべたいです。",
        example_romaji: "Sushi ga tabetai desu.",
        example_en: "I want to eat sushi.",
        example_mm: "ဆူရှီစားချင်တယ်။"
    },
    {
        japanese: "さけ",
        romaji: "sake",
        pronunciation: "sake",
        english: "Japanese rice wine",
        burmese: "ဂျပန်ဆန်၀ိုင်",
        category: "food",
        example_jp: "さけを のみます。",
        example_romaji: "Sake o nomimasu.",
        example_en: "I drink sake.",
        example_mm: "ဆာကေသောက်တယ်။"
    },
    {
        japanese: "ふじさん",
        romaji: "fujisan",
        pronunciation: "fujisan",
        english: "Mt. Fuji",
        burmese: "ဖူဂျီတောင်",
        category: "places",
        example_jp: "ふじさんに のぼりたいです。",
        example_romaji: "Fujisan ni noboritai desu.",
        example_en: "I want to climb Mt. Fuji.",
        example_mm: "ဖူဂျီတောင်ကို တက်ချင်တယ်။"
    },
    {
        japanese: "きもの",
        romaji: "kimono",
        pronunciation: "kimono",
        english: "kimono",
        burmese: "ဂျပန်ရိုးရာဝတ်စုံ",
        category: "misc",
        example_jp: "きものを きます。",
        example_romaji: "Kimono o kimasu.",
        example_en: "I wear a kimono.",
        example_mm: "ခီမိုနိုဝတ်တယ်။"
    },
    {
        japanese: "ゆかた",
        romaji: "yukata",
        pronunciation: "yukata",
        english: "summer kimono",
        burmese: "နွေရာသီ ခီမိုနို",
        category: "misc",
        example_jp: "なつまつりで ゆかたを きます。",
        example_romaji: "Natsumatsuri de yukata o kimasu.",
        example_en: "I wear a yukata at the summer festival.",
        example_mm: "နွေရာသီပွဲတော်မှာ ယူကတာဝတ်တယ်။"
    },
    {
        japanese: "さむらい",
        romaji: "samurai",
        pronunciation: "samurai",
        english: "samurai",
        burmese: "ဆာမူရိုင်း",
        category: "misc",
        example_jp: "さむらいの ぶきは かたなです。",
        example_romaji: "Samurai no buki wa katana desu.",
        example_en: "The samurai's weapon is a sword.",
        example_mm: "ဆာမူရိုင်းရဲ့ လက်နက်က ဓားပါ။"
    },
    {
        japanese: "にほんご",
        romaji: "nihongo",
        pronunciation: "nihongo",
        english: "Japanese language",
        burmese: "ဂျပန်စာ",
        category: "school",
        example_jp: "にほんごを べんきょうします。",
        example_romaji: "Nihongo o benkyou shimasu.",
        example_en: "I study Japanese.",
        example_mm: "ဂျပန်စာ လေ့လာတယ်။"
    },
    {
        japanese: "かんじ",
        romaji: "kanji",
        pronunciation: "kanji",
        english: "kanji (Chinese characters)",
        burmese: "ကန်ဂျိ",
        category: "school",
        example_jp: "かんじを かきます。",
        example_romaji: "Kanji o kakimasu.",
        example_en: "I write kanji.",
        example_mm: "ကန်ဂျိ ရေးတယ်။"
    },
    {
        japanese: "ひらがな",
        romaji: "hiragana",
        pronunciation: "hiragana",
        english: "hiragana",
        burmese: "ဟိရဂန",
        category: "school",
        example_jp: "ひらがなを よみます。",
        example_romaji: "Hiragana o yomimasu.",
        example_en: "I read hiragana.",
        example_mm: "ဟိရဂန ဖတ်တယ်။"
    },

    // ========== MORE VERBS / どうし (15 more words) ==========
    {
        japanese: "うたう",
        romaji: "utau",
        pronunciation: "utau",
        english: "to sing",
        burmese: "သီချင်းဆိုသည်",
        category: "verbs",
        example_jp: "かぞくと うたを うたいます。",
        example_romaji: "Kazoku to uta o utaimasu.",
        example_en: "I sing songs with my family.",
        example_mm: "မိသားစုနဲ့ သီချင်းဆိုတယ်။"
    },
    {
        japanese: "おどる",
        romaji: "odoru",
        pronunciation: "odoru",
        english: "to dance",
        burmese: "ကသည်",
        category: "verbs",
        example_jp: "パーティーで おどります。",
        example_romaji: "Paatii de odorimasu.",
        example_en: "I dance at the party.",
        example_mm: "ပါတီမှာ ကတယ်။"
    },
    {
        japanese: "えをかく",
        romaji: "e o kaku",
        pronunciation: "e o kaku",
        english: "to draw a picture",
        burmese: "ပုံဆွဲသည်",
        category: "verbs",
        example_jp: "えを かくのが すきです。",
        example_romaji: "E o kaku no ga suki desu.",
        example_en: "I like drawing pictures.",
        example_mm: "ပုံဆွဲရတာ ကြိုက်တယ်။"
    },
    {
        japanese: "でんわをかける",
        romaji: "denwa o kakeru",
        pronunciation: "denwa o kakeru",
        english: "to make a phone call",
        burmese: "ဖုန်းခေါ်သည်",
        category: "verbs",
        example_jp: "ともだちに でんわを かけます。",
        example_romaji: "Tomodachi ni denwa o kakemasu.",
        example_en: "I call my friend.",
        example_mm: "သူငယ်ချင်းကို ဖုန်းခေါ်တယ်။"
    },
    {
        japanese: "しゅくだいをする",
        romaji: "shukudai o suru",
        pronunciation: "shukudai o suru",
        english: "to do homework",
        burmese: "အိမ်စာလုပ်သည်",
        category: "verbs",
        example_jp: "まいにち しゅくだいを します。",
        example_romaji: "Mainichi shukudai o shimasu.",
        example_en: "I do homework every day.",
        example_mm: "နေ့တိုင်း အိမ်စာလုပ်တယ်။"
    },
    {
        japanese: "せんたくをする",
        romaji: "sentaku o suru",
        pronunciation: "sentaku o suru",
        english: "to do laundry",
        burmese: "အဝတ်လျှော်သည်",
        category: "verbs",
        example_jp: "どようびに せんたくを します。",
        example_romaji: "Doyoubi ni sentaku o shimasu.",
        example_en: "I do laundry on Saturday.",
        example_mm: "စနေနေ့မှာ အဝတ်လျှော်တယ်။"
    },
    {
        japanese: "そうじをする",
        romaji: "souji o suru",
        pronunciation: "souji o suru",
        english: "to clean",
        burmese: "သန့်ရှင်းရေးလုပ်သည်",
        category: "verbs",
        example_jp: "へやの そうじを します。",
        example_romaji: "Heya no souji o shimasu.",
        example_en: "I clean my room.",
        example_mm: "အခန်း သန့်ရှင်းရေးလုပ်တယ်။"
    },
    {
        japanese: "りょうりをする",
        romaji: "ryouri o suru",
        pronunciation: "ryouri o suru",
        english: "to cook",
        burmese: "ချက်ပြုတ်သည်",
        category: "verbs",
        example_jp: "ばんごはんの りょうりを します。",
        example_romaji: "Bangohan no ryouri o shimasu.",
        example_en: "I cook dinner.",
        example_mm: "ညစာ ချက်ပြုတ်တယ်။"
    },
    {
        japanese: "かいものを する",
        romaji: "kaimono o suru",
        pronunciation: "kaimono o suru",
        english: "to go shopping",
        burmese: "ဈေးဝယ်သည်",
        category: "verbs",
        example_jp: "スーパーで かいものを します。",
        example_romaji: "Suupaa de kaimono o shimasu.",
        example_en: "I go shopping at the supermarket.",
        example_mm: "စူပါမားကတ်မှာ ဈေးဝယ်တယ်။"
    },
    {
        japanese: "さんぽをする",
        romaji: "sanpo o suru",
        pronunciation: "sanpo o suru",
        english: "to take a walk",
        burmese: "လမ်းလျှောက်သည်",
        category: "verbs",
        example_jp: "こうえんで さんぽを します。",
        example_romaji: "Kouen de sanpo o shimasu.",
        example_en: "I take a walk in the park.",
        example_mm: "ပန်းခြံမှာ လမ်းလျှောက်တယ်။"
    },
    {
        japanese: "てつだう",
        romaji: "tetsudau",
        pronunciation: "tetsudau",
        english: "to help",
        burmese: "ကူညီသည်",
        category: "verbs",
        example_jp: "ははを てつだいます。",
        example_romaji: "Haha o tetsudaimasu.",
        example_en: "I help my mother.",
        example_mm: "အမေကို ကူညီတယ်။"
    },
    {
        japanese: "まちがえる",
        romaji: "machigaeru",
        pronunciation: "machigaeru",
        english: "to make a mistake",
        burmese: "မှားသည်",
        category: "verbs",
        example_jp: "こたえを まちがえました。",
        example_romaji: "Kotae o machigaemashita.",
        example_en: "I made a mistake in the answer.",
        example_mm: "အဖြေမှားသွားတယ်။"
    },
    {
        japanese: "わすれる",
        romaji: "wasureru",
        pronunciation: "wasureru",
        english: "to forget",
        burmese: "မေ့သည်",
        category: "verbs",
        example_jp: "かぎを わすれました。",
        example_romaji: "Kagi o wasuremashita.",
        example_en: "I forgot my keys.",
        example_mm: "သော့မေ့သွားတယ်။"
    },
    {
        japanese: "おぼえる",
        romaji: "oboeru",
        pronunciation: "oboeru",
        english: "to memorize/remember",
        burmese: "မှတ်မိသည်",
        category: "verbs",
        example_jp: "あたらしい たんごを おぼえます。",
        example_romaji: "Atarashii tango o oboemasu.",
        example_en: "I memorize new words.",
        example_mm: "စကားလုံးအသစ်တွေ မှတ်မိတယ်။"
    },
    {
        japanese: "しんぱいする",
        romaji: "shinpai suru",
        pronunciation: "shinpai suru",
        english: "to worry",
        burmese: "စိုးရိမ်သည်",
        category: "verbs",
        example_jp: "しけんを しんぱいしています。",
        example_romaji: "Shiken o shinpai shite imasu.",
        example_en: "I'm worried about the exam.",
        example_mm: "စာမေးပွဲကို စိုးရိမ်နေတယ်။"
    },

    // ========== TIME EXPRESSIONS / じかんひょうげん (10 words) ==========
    {
        japanese: "いつも",
        romaji: "itsumo",
        pronunciation: "itsumo",
        english: "always",
        burmese: "အမြဲတမ်း",
        category: "time",
        example_jp: "いつも ７じに おきます。",
        example_romaji: "Itsumo shichiji ni okimasu.",
        example_en: "I always wake up at 7 o'clock.",
        example_mm: "အမြဲတမ်း ၇ နာရီမှာ နိုးတယ်။"
    },
    {
        japanese: "よく",
        romaji: "yoku",
        pronunciation: "yoku",
        english: "often",
        burmese: "မကြာခဏ",
        category: "time",
        example_jp: "よく えいがを みます。",
        example_romaji: "Yoku eiga o mimasu.",
        example_en: "I often watch movies.",
        example_mm: "မကြာခဏ ရုပ်ရှင်ကြည့်တယ်။"
    },
    {
        japanese: "ときどき",
        romaji: "tokidoki",
        pronunciation: "tokidoki",
        english: "sometimes",
        burmese: "တစ်ခါတစ်ရံ",
        category: "time",
        example_jp: "ときどき かいものに いきます。",
        example_romaji: "Tokidoki kaimono ni ikimasu.",
        example_en: "I sometimes go shopping.",
        example_mm: "တစ်ခါတစ်ရံ ဈေးဝယ်သွားတယ်။"
    },
    {
        japanese: "あまり",
        romaji: "amari",
        pronunciation: "amari",
        english: "not much/rarely (with negative)",
        burmese: "သိပ်မသာ",
        category: "time",
        example_jp: "あまり テレビを みません。",
        example_romaji: "Amari terebi o mimasen.",
        example_en: "I don't watch TV much.",
        example_mm: "သိပ်ပြီး တီဗီမကြည့်ဘူး။"
    },
    {
        japanese: "ぜんぜん",
        romaji: "zenzen",
        pronunciation: "zenzen",
        english: "never/not at all (with negative)",
        burmese: "လုံးဝမဟုတ်",
        category: "time",
        example_jp: "ぜんぜん わかりません。",
        example_romaji: "Zenzen wakarimasen.",
        example_en: "I don't understand at all.",
        example_mm: "လုံးဝ နားမလည်ဘူး။"
    },
    {
        japanese: "まいにち",
        romaji: "mainichi",
        pronunciation: "mainichi",
        english: "every day",
        burmese: "နေ့တိုင်း",
        category: "time",
        example_jp: "まいにち にほんごを べんきょうします。",
        example_romaji: "Mainichi nihongo o benkyou shimasu.",
        example_en: "I study Japanese every day.",
        example_mm: "နေ့တိုင်း ဂျပန်စာ လေ့လာတယ်။"
    },
    {
        japanese: "まいしゅう",
        romaji: "maishuu",
        pronunciation: "maishuu",
        english: "every week",
        burmese: "အပတ်တိုင်း",
        category: "time",
        example_jp: "まいしゅう どようびに テニスを します。",
        example_romaji: "Maishuu doyoubi ni tenisu o shimasu.",
        example_en: "I play tennis every Saturday.",
        example_mm: "အပတ်တိုင်း စနေနေ့မှာ တင်းနစ်ကစားတယ်။"
    },
    {
        japanese: "まいつき",
        romaji: "maitsuki",
        pronunciation: "maitsuki",
        english: "every month",
        burmese: "လတိုင်း",
        category: "time",
        example_jp: "まいつき えいがを みます。",
        example_romaji: "Maitsuki eiga o mimasu.",
        example_en: "I watch movies every month.",
        example_mm: "လတိုင်း ရုပ်ရှင်ကြည့်တယ်။"
    },
    {
        japanese: "まいとし",
        romaji: "maitoshi",
        pronunciation: "maitoshi",
        english: "every year",
        burmese: "နှစ်တိုင်း",
        category: "time",
        example_jp: "まいとし にほんに いきます。",
        example_romaji: "Maitoshi nihon ni ikimasu.",
        example_en: "I go to Japan every year.",
        example_mm: "နှစ်တိုင်း ဂျပန်ကိုသွားတယ်။"
    },
    {
        japanese: "たいてい",
        romaji: "taitei",
        pronunciation: "taitei",
        english: "usually",
        burmese: "များသောအားဖြင့်",
        category: "time",
        example_jp: "たいてい うちで たべます。",
        example_romaji: "Taitei uchi de tabemasu.",
        example_en: "I usually eat at home.",
        example_mm: "များသောအားဖြင့် အိမ်မှာ စားတယ်။"
    },
        // ========== MORE TIME EXPRESSIONS / じかんひょうげん (10 more words) ==========
    {
        japanese: "たまに",
        romaji: "tamani",
        pronunciation: "tamani",
        english: "occasionally",
        burmese: "ရံဖန်ရံခါ",
        category: "time",
        example_jp: "たまに ともだちと あいます。",
        example_romaji: "Tamani tomodachi to aimasu.",
        example_en: "I occasionally meet with friends.",
        example_mm: "ရံဖန်ရံခါ သူငယ်ချင်းတွေနဲ့ တွေ့တယ်။"
    },
    {
        japanese: "めったに",
        romaji: "mettani",
        pronunciation: "mettani",
        english: "rarely (with negative)",
        burmese: "ခဲခဲယဉ်းယဉ်း",
        category: "time",
        example_jp: "めったに えいがを みません。",
        example_romaji: "Mettani eiga o mimasen.",
        example_en: "I rarely watch movies.",
        example_mm: "ရုပ်ရှင်ကို ခဲခဲယဉ်းယဉ်း ကြည့်တယ်။"
    },
    {
        japanese: "すぐに",
        romaji: "sugu ni",
        pronunciation: "sugu ni",
        english: "immediately",
        burmese: "ချက်ချင်း",
        category: "time",
        example_jp: "すぐに かえります。",
        example_romaji: "Sugu ni kaerimasu.",
        example_en: "I'll come back immediately.",
        example_mm: "ချက်ချင်း ပြန်လာမယ်။"
    },
    {
        japanese: "もうすぐ",
        romaji: "mou sugu",
        pronunciation: "mou sugu",
        english: "soon",
        burmese: "မကြာမီ",
        category: "time",
        example_jp: "もうすぐ はるが きます。",
        example_romaji: "Mou sugu haru ga kimasu.",
        example_en: "Spring will come soon.",
        example_mm: "မကြာမီ နွေဦးရာသီ ရောက်လာမယ်။"
    },
    {
        japanese: "さっき",
        romaji: "sakki",
        pronunciation: "sakki",
        english: "a little while ago",
        burmese: "လွန်ခဲ့တဲ့ ခဏက",
        category: "time",
        example_jp: "さっき ともだちと はなしました。",
        example_romaji: "Sakki tomodachi to hanashimashita.",
        example_en: "I talked with my friend a little while ago.",
        example_mm: "လွန်ခဲ့တဲ့ ခဏက သူငယ်ချင်းနဲ့ စကားပြောခဲ့တယ်။"
    },
    {
        japanese: "さきに",
        romaji: "saki ni",
        pronunciation: "saki ni",
        english: "before/ahead",
        burmese: "အရင်ဦးစွာ",
        category: "time",
        example_jp: "さきに いきます。",
        example_romaji: "Saki ni ikimasu.",
        example_en: "I'll go ahead.",
        example_mm: "ကျွန်တော် အရင်သွားမယ်။"
    },
    {
        japanese: "あとで",
        romaji: "ato de",
        pronunciation: "ato de",
        english: "later",
        burmese: "နောက်မှ",
        category: "time",
        example_jp: "あとで でんわを します。",
        example_romaji: "Ato de denwa o shimasu.",
        example_en: "I'll call later.",
        example_mm: "နောက်မှ ဖုန်းဆက်မယ်။"
    },
    {
        japanese: "まえに",
        romaji: "mae ni",
        pronunciation: "mae ni",
        english: "before (in time)",
        burmese: "မတိုင်မီ",
        category: "time",
        example_jp: "たべる まえに てを あらいます。",
        example_romaji: "Taberu mae ni te o araimasu.",
        example_en: "I wash my hands before eating.",
        example_mm: "မစားခင် လက်ဆေးတယ်။"
    },
    {
        japanese: "ごご",
        romaji: "gogo",
        pronunciation: "gogo",
        english: "afternoon/PM",
        burmese: "မွန်းလွဲ/ညနေ",
        category: "time",
        example_jp: "ごご ３じに あいましょう。",
        example_romaji: "Gogo sanji ni aimashou.",
        example_en: "Let's meet at 3 PM.",
        example_mm: "ညနေ ၃ နာရီမှာ တွေ့ကြရအောင်။"
    },
    {
        japanese: "ごぜん",
        romaji: "gozen",
        pronunciation: "gozen",
        english: "morning/AM",
        burmese: "နံနက်",
        category: "time",
        example_jp: "ごぜん １０じに おきます。",
        example_romaji: "Gozen juuji ni okimasu.",
        example_en: "I wake up at 10 AM.",
        example_mm: "နံနက် ၁၀ နာရီမှာ နိုးတယ်။"
    },

    // ========== MORE ADJECTIVES / けいようし (15 more words) ==========
    {
        japanese: "ひろい",
        romaji: "hiroi",
        pronunciation: "hiroi",
        english: "wide/spacious",
        burmese: "ကျယ်ဝန်းသည်",
        category: "adjectives",
        example_jp: "この へやは ひろいです。",
        example_romaji: "Kono heya wa hiroi desu.",
        example_en: "This room is spacious.",
        example_mm: "ဒီအခန်းက ကျယ်တယ်။"
    },
    {
        japanese: "せまい",
        romaji: "semai",
        pronunciation: "semai",
        english: "narrow/cramped",
        burmese: "ကျဉ်းသည်",
        category: "adjectives",
        example_jp: "この へやは せまいです。",
        example_romaji: "Kono heya wa semai desu.",
        example_en: "This room is cramped.",
        example_mm: "ဒီအခန်းက ကျဉ်းတယ်။"
    },
    {
        japanese: "ふかい",
        romaji: "fukai",
        pronunciation: "fukai",
        english: "deep",
        burmese: "နက်ရှိုင်းသည်",
        category: "adjectives",
        example_jp: "この みずは ふかいです。",
        example_romaji: "Kono mizu wa fukai desu.",
        example_en: "This water is deep.",
        example_mm: "ဒီရေက နက်တယ်။"
    },
    {
        japanese: "あさい",
        romaji: "asai",
        pronunciation: "asai",
        english: "shallow",
        burmese: "တိမ်သည်",
        category: "adjectives",
        example_jp: "この みずは あさいです。",
        example_romaji: "Kono mizu wa asai desu.",
        example_en: "This water is shallow.",
        example_mm: "ဒီရေက တိမ်တယ်။"
    },
    {
        japanese: "にがい",
        romaji: "nigai",
        pronunciation: "nigai",
        english: "bitter",
        burmese: "ခါးသည်",
        category: "adjectives",
        example_jp: "この くすりは にがいです。",
        example_romaji: "Kono kusuri wa nigai desu.",
        example_en: "This medicine is bitter.",
        example_mm: "ဒီဆေးက ခါးတယ်။"
    },
    {
        japanese: "あまい",
        romaji: "amai",
        pronunciation: "amai",
        english: "sweet",
        burmese: "ချိုသည်",
        category: "adjectives",
        example_jp: "この ケーキは あまいです。",
        example_romaji: "Kono keeki wa amai desu.",
        example_en: "This cake is sweet.",
        example_mm: "ဒီကိတ်မုန့်က ချိုတယ်။"
    },
    {
        japanese: "すっぱい",
        romaji: "suppai",
        pronunciation: "suppai",
        english: "sour",
        burmese: "ချဉ်သည်",
        category: "adjectives",
        example_jp: "この レモンは すっぱいです。",
        example_romaji: "Kono remon wa suppai desu.",
        example_en: "This lemon is sour.",
        example_mm: "ဒီသံပုရာသီးက ချဉ်တယ်။"
    },
    {
        japanese: "しょっぱい",
        romaji: "shoppai",
        pronunciation: "shoppai",
        english: "salty",
        burmese: "ငန်သည်",
        category: "adjectives",
        example_jp: "この スープは しょっぱいです。",
        example_romaji: "Kono suupu wa shoppai desu.",
        example_en: "This soup is salty.",
        example_mm: "ဒီဟင်းချိုက ငန်တယ်။"
    },
    {
        japanese: "からい",
        romaji: "karai",
        pronunciation: "karai",
        english: "spicy/hot",
        burmese: "စပ်သည်",
        category: "adjectives",
        example_jp: "この カレーは からいです。",
        example_romaji: "Kono karee wa karai desu.",
        example_en: "This curry is spicy.",
        example_mm: "ဒီဟင်းက စပ်တယ်။"
    },
    {
        japanese: "あつい",
        romaji: "atsui",
        pronunciation: "atsui",
        english: "hot (temperature)",
        burmese: "ပူသည်",
        category: "adjectives",
        example_jp: "この コーヒーは あついです。",
        example_romaji: "Kono koohii wa atsui desu.",
        example_en: "This coffee is hot.",
        example_mm: "ဒီကော်ဖီက ပူတယ်။"
    },
    {
        japanese: "つめたい",
        romaji: "tsumetai",
        pronunciation: "tsumetai",
        english: "cold (to touch)",
        burmese: "အေးသည် (ထိတွေ့ရန်)",
        category: "adjectives",
        example_jp: "この みずは つめたいです。",
        example_romaji: "Kono mizu wa tsumetai desu.",
        example_en: "This water is cold.",
        example_mm: "ဒီရေက အေးတယ်။"
    },
    {
        japanese: "あぶない",
        romaji: "abunai",
        pronunciation: "abunai",
        english: "dangerous",
        burmese: "အန္တရာယ်ရှိသည်",
        category: "adjectives",
        example_jp: "この みちは あぶないです。",
        example_romaji: "Kono michi wa abunai desu.",
        example_en: "This road is dangerous.",
        example_mm: "ဒီလမ်းက အန္တရာယ်ရှိတယ်။"
    },
    {
        japanese: "かんたん",
        romaji: "kantan",
        pronunciation: "kantan",
        english: "easy/simple",
        burmese: "လွယ်ကူသည်",
        category: "adjectives",
        example_jp: "この しゅくだいは かんたんです。",
        example_romaji: "Kono shukudai wa kantan desu.",
        example_en: "This homework is easy.",
        example_mm: "ဒီအိမ်စာက လွယ်တယ်။"
    },
    {
        japanese: "むずかしい",
        romaji: "muzukashii",
        pronunciation: "muzukashii",
        english: "difficult",
        burmese: "ခက်ခဲသည်",
        category: "adjectives",
        example_jp: "にほんごは むずかしいです。",
        example_romaji: "Nihongo wa muzukashii desu.",
        example_en: "Japanese is difficult.",
        example_mm: "ဂျပန်စာက ခက်ခဲတယ်။"
    },
    {
        japanese: "やさしい",
        romaji: "yasashii",
        pronunciation: "yasashii",
        english: "easy/kind",
        burmese: "လွယ်ကူသည်/ကြင်နာသည်",
        category: "adjectives",
        example_jp: "この せんせいは やさしいです。",
        example_romaji: "Kono sensei wa yasashii desu.",
        example_en: "This teacher is kind.",
        example_mm: "ဒီဆရာက ကြင်နာတယ်။"
    },

    // ========== COMMUNICATION / コミュニケーション (10 words) ==========
    {
        japanese: "はなす",
        romaji: "hanasu",
        pronunciation: "hanasu",
        english: "to speak/talk",
        burmese: "စကားပြောသည်",
        category: "verbs",
        example_jp: "にほんごで はなします。",
        example_romaji: "Nihongo de hanashimasu.",
        example_en: "I speak in Japanese.",
        example_mm: "ဂျပန်လို စကားပြောတယ်။"
    },
    {
        japanese: "きく",
        romaji: "kiku",
        pronunciation: "kiku",
        english: "to listen/ask",
        burmese: "နားထောင်သည်/မေးသည်",
        category: "verbs",
        example_jp: "せんせいの はなしを ききます。",
        example_romaji: "Sensei no hanashi o kikimasu.",
        example_en: "I listen to the teacher's story.",
        example_mm: "ဆရာ့ရဲ့ စကားကို နားထောင်တယ်။"
    },
    {
        japanese: "よむ",
        romaji: "yomu",
        pronunciation: "yomu",
        english: "to read",
        burmese: "ဖတ်သည်",
        category: "verbs",
        example_jp: "しんぶんを よみます。",
        example_romaji: "Shinbun o yomimasu.",
        example_en: "I read the newspaper.",
        example_mm: "သတင်းစာဖတ်တယ်။"
    },
    {
        japanese: "かく",
        romaji: "kaku",
        pronunciation: "kaku",
        english: "to write",
        burmese: "ရေးသည်",
        category: "verbs",
        example_jp: "てがみを かきます。",
        example_romaji: "Tegami o kakimasu.",
        example_en: "I write a letter.",
        example_mm: "စာရေးတယ်။"
    },
    {
        japanese: "しつもん",
        romaji: "shitsumon",
        pronunciation: "shitsumon",
        english: "question",
        burmese: "မေးခွန်း",
        category: "misc",
        example_jp: "しつもんが あります。",
        example_romaji: "Shitsumon ga arimasu.",
        example_en: "I have a question.",
        example_mm: "မေးခွန်းရှိတယ်။"
    },
    {
        japanese: "こたえ",
        romaji: "kotae",
        pronunciation: "kotae",
        english: "answer",
        burmese: "အဖြေ",
        category: "misc",
        example_jp: "こたえを かいてください。",
        example_romaji: "Kotae o kaite kudasai.",
        example_en: "Please write the answer.",
        example_mm: "ကျေးဇူးပြု၍ အဖြေရေးပါ။"
    },
    {
        japanese: "れんしゅう",
        romaji: "renshuu",
        pronunciation: "renshuu",
        english: "practice",
        burmese: "လေ့ကျင့်ခြင်း",
        category: "misc",
        example_jp: "かんじの れんしゅうを します。",
        example_romaji: "Kanji no renshuu o shimasu.",
        example_en: "I practice kanji.",
        example_mm: "ကန်ဂျိ လေ့ကျင့်တယ်။"
    },
    {
        japanese: "じゅんび",
        romaji: "junbi",
        pronunciation: "junbi",
        english: "preparation",
        burmese: "ပြင်ဆင်ခြင်း",
        category: "misc",
        example_jp: "しけんの じゅんびを します。",
        example_romaji: "Shiken no junbi o shimasu.",
        example_en: "I prepare for the exam.",
        example_mm: "စာမေးပွဲအတွက် ပြင်ဆင်တယ်။"
    },
    {
        japanese: "チャンス",
        romaji: "chansu",
        pronunciation: "chansu",
        english: "chance/opportunity",
        burmese: "အခွင့်အရေး",
        category: "misc",
        example_jp: "いい チャンスです。",
        example_romaji: "Ii chansu desu.",
        example_en: "It's a good opportunity.",
        example_mm: "အခွင့်အရေးကောင်းပါ။"
    },
    {
        japanese: "べんきょう",
        romaji: "benkyou",
        pronunciation: "benkyou",
        english: "study",
        burmese: "လေ့လာခြင်း",
        category: "school",
        example_jp: "にほんごを べんきょうします。",
        example_romaji: "Nihongo o benkyou shimasu.",
        example_en: "I study Japanese.",
        example_mm: "ဂျပန်စာ လေ့လာတယ်။"
    },

    // ========== HEALTH / けんこう (10 words) ==========
    {
        japanese: "けんこう",
        romaji: "kenkou",
        pronunciation: "kenkou",
        english: "health",
        burmese: "ကျန်းမာရေး",
        category: "misc",
        example_jp: "けんこうに きをつけてください。",
        example_romaji: "Kenkou ni ki o tsukete kudasai.",
        example_en: "Please take care of your health.",
        example_mm: "ကျေးဇူးပြု၍ ကျန်းမာရေးဂရုစိုက်ပါ။"
    },
    {
        japanese: "びょういん",
        romaji: "byouin",
        pronunciation: "byouin",
        english: "hospital",
        burmese: "ဆေးရုံ",
        category: "places",
        example_jp: "びょういんに いきます。",
        example_romaji: "Byouin ni ikimasu.",
        example_en: "I go to the hospital.",
        example_mm: "ဆေးရုံသွားတယ်။"
    },
    {
        japanese: "くすり",
        romaji: "kusuri",
        pronunciation: "kusuri",
        english: "medicine",
        burmese: "ဆေး",
        category: "misc",
        example_jp: "くすりを のみます。",
        example_romaji: "Kusuri o nomimasu.",
        example_en: "I take medicine.",
        example_mm: "ဆေးသောက်တယ်။"
    },
    {
        japanese: "いたい",
        romaji: "itai",
        pronunciation: "itai",
        english: "painful",
        burmese: "နာသည်",
        category: "adjectives",
        example_jp: "あたまが いたいです。",
        example_romaji: "Atama ga itai desu.",
        example_en: "My head hurts.",
        example_mm: "ခေါင်းကိုက်တယ်။"
    },
    {
        japanese: "ねつ",
        romaji: "netsu",
        pronunciation: "netsu",
        english: "fever",
        burmese: "အဖျား",
        category: "misc",
        example_jp: "ねつが あります。",
        example_romaji: "Netsu ga arimasu.",
        example_en: "I have a fever.",
        example_mm: "အဖျားရှိတယ်။"
    },
    {
        japanese: "かぜ",
        romaji: "kaze",
        pronunciation: "kaze",
        english: "cold (illness)",
        burmese: "အအေးမိခြင်း",
        category: "misc",
        example_jp: "かぜを ひきました。",
        example_romaji: "Kaze o hikimashita.",
        example_en: "I caught a cold.",
        example_mm: "အအေးမိသွားတယ်။"
    },
    {
        japanese: "たいちょう",
        romaji: "taichou",
        pronunciation: "taichou",
        english: "physical condition",
        burmese: "ကိုယ်ခံအား/ကျန်းမာရေးအခြေအနေ",
        category: "misc",
        example_jp: "たいちょうが わるいです。",
        example_romaji: "Taichou ga warui desu.",
        example_en: "I'm not feeling well.",
        example_mm: "ကိုယ်ခံအားမကောင်းဘူး။"
    },
    {
        japanese: "やすむ",
        romaji: "yasumu",
        pronunciation: "yasumu",
        english: "to rest",
        burmese: "အနားယူသည်",
        category: "verbs",
        example_jp: "きょうは やすみます。",
        example_romaji: "Kyou wa yasumimasu.",
        example_en: "I rest today.",
        example_mm: "ဒီနေ့ အနားယူမယ်။"
    },
    {
        japanese: "びょうき",
        romaji: "byouki",
        pronunciation: "byouki",
        english: "illness/sickness",
        burmese: "ဖျားနာခြင်း",
        category: "misc",
        example_jp: "びょうきに なりました。",
        example_romaji: "Byouki ni narimashita.",
        example_en: "I got sick.",
        example_mm: "ဖျားနာသွားတယ်။"
    },
    {
        japanese: "スポーツ",
        romaji: "supootsu",
        pronunciation: "supootsu",
        english: "sports",
        burmese: "အားကစား",
        category: "misc",
        example_jp: "スポーツを すると けんこうに いいです。",
        example_romaji: "Supootsu o suru to kenkou ni ii desu.",
        example_en: "Playing sports is good for your health.",
        example_mm: "အားကစားလုပ်ရင် ကျန်းမာရေးအတွက် ကောင်းတယ်။"
    },
        // ========== TECHNOLOGY / テクノロジー (10 words) ==========
    {
        japanese: "パソコン",
        romaji: "pasokon",
        pronunciation: "pasokon",
        english: "computer",
        burmese: "ကွန်ပျူတာ",
        category: "misc",
        example_jp: "あたらしい パソコンを かいました。",
        example_romaji: "Atarashii pasokon o kaimashita.",
        example_en: "I bought a new computer.",
        example_mm: "ကွန်ပျူတာအသစ်ဝယ်တယ်။"
    },
    {
        japanese: "スマートフォン",
        romaji: "sumaatofon",
        pronunciation: "sumaatofon",
        english: "smartphone",
        burmese: "စမတ်ဖုန်း",
        category: "misc",
        example_jp: "まいにち スマートフォンを つかいます。",
        example_romaji: "Mainichi sumaatofon o tsukaimasu.",
        example_en: "I use my smartphone every day.",
        example_mm: "နေ့တိုင်း စမတ်ဖုန်းသုံးတယ်။"
    },
    {
        japanese: "インターネット",
        romaji: "intaanetto",
        pronunciation: "intaanetto",
        english: "internet",
        burmese: "အင်တာနက်",
        category: "misc",
        example_jp: "インターネットで しらべます。",
        example_romaji: "Intaanetto de shirabemasu.",
        example_en: "I search on the internet.",
        example_mm: "အင်တာနက်မှာ ရှာတယ်။"
    },
    {
        japanese: "メール",
        romaji: "meeru",
        pronunciation: "meeru",
        english: "email",
        burmese: "အီးမေး",
        category: "misc",
        example_jp: "メールを おくります。",
        example_romaji: "Meeru o okurimasu.",
        example_en: "I send an email.",
        example_mm: "အီးမေးပို့တယ်။"
    },
    {
        japanese: "でんわ",
        romaji: "denwa",
        pronunciation: "denwa",
        english: "telephone/phone call",
        burmese: "တယ်လီဖုန်း/ဖုန်းခေါ်ဆိုခြင်း",
        category: "misc",
        example_jp: "でんわを かけます。",
        example_romaji: "Denwa o kakemasu.",
        example_en: "I make a phone call.",
        example_mm: "ဖုန်းခေါ်တယ်။"
    },
    {
        japanese: "カメラ",
        romaji: "kamera",
        pronunciation: "kamera",
        english: "camera",
        burmese: "ကင်မရာ",
        category: "misc",
        example_jp: "しゃしんを とるために カメラを かいました。",
        example_romaji: "Shashin o toru tame ni kamera o kaimashita.",
        example_en: "I bought a camera to take photos.",
        example_mm: "ဓာတ်ပုံရိုက်ဖို့ ကင်မရာဝယ်တယ်။"
    },
    {
        japanese: "テレビ",
        romaji: "terebi",
        pronunciation: "terebi",
        english: "television",
        burmese: "ရုပ်မြင်သံကြား",
        category: "house",
        example_jp: "テレビで ニュースを みます。",
        example_romaji: "Terebi de nyuusu o mimasu.",
        example_en: "I watch the news on TV.",
        example_mm: "တီဗီမှာ သတင်းကြည့်တယ်။"
    },
    {
        japanese: "ラジオ",
        romaji: "rajio",
        pronunciation: "rajio",
        english: "radio",
        burmese: "ရေဒီယို",
        category: "misc",
        example_jp: "あさ ラジオを ききます。",
        example_romaji: "Asa rajio o kikimasu.",
        example_en: "I listen to the radio in the morning.",
        example_mm: "မနက်ခင်းမှာ ရေဒီယိုနားထောင်တယ်။"
    },
    {
        japanese: "ビデオ",
        romaji: "bideo",
        pronunciation: "bideo",
        english: "video",
        burmese: "ဗီဒီယို",
        category: "misc",
        example_jp: "ビデオを みます。",
        example_romaji: "Bideo o mimasu.",
        example_en: "I watch videos.",
        example_mm: "ဗီဒီယိုကြည့်တယ်။"
    },
    {
        japanese: "ゲーム",
        romaji: "geemu",
        pronunciation: "geemu",
        english: "game",
        burmese: "ဂိမ်း",
        category: "misc",
        example_jp: "ゲームを します。",
        example_romaji: "Geemu o shimasu.",
        example_en: "I play games.",
        example_mm: "ဂိမ်းကစားတယ်။"
    },

    // ========== SOCIAL MEDIA / ソーシャルメディア (5 words) ==========
    {
        japanese: "SNS",
        romaji: "esuenu-esu",
        pronunciation: "esuenu-esu",
        english: "social media",
        burmese: "လူမှုမီဒီယာ",
        category: "misc",
        example_jp: "SNSを つかいます。",
        example_romaji: "Esuenu-esu o tsukaimasu.",
        example_en: "I use social media.",
        example_mm: "လူမှုမီဒီယာသုံးတယ်။"
    },
    {
        japanese: "ライン",
        romaji: "rain",
        pronunciation: "rain",
        english: "LINE (messaging app)",
        burmese: "လိုင်း",
        category: "misc",
        example_jp: "ラインで ともだちと はなします。",
        example_romaji: "Rain de tomodachi to hanashimasu.",
        example_en: "I talk with friends on LINE.",
        example_mm: "လိုင်းနဲ့ သူငယ်ချင်းတွေနဲ့ စကားပြောတယ်။"
    },
    {
        japanese: "ツイッター",
        romaji: "tsuittaa",
        pronunciation: "tsuittaa",
        english: "Twitter/X",
        burmese: "တွစ်တာ",
        category: "misc",
        example_jp: "ツイッターで けいけんを シェアします。",
        example_romaji: "Tsuittaa de keiken o shea shimasu.",
        example_en: "I share experiences on Twitter.",
        example_mm: "တွစ်တာမှာ အတွေ့အကြုံမျှဝေတယ်။"
    },
    {
        japanese: "インスタグラム",
        romaji: "insutaguramu",
        pronunciation: "insutaguramu",
        english: "Instagram",
        burmese: "အင်စတာဂရမ်",
        category: "misc",
        example_jp: "インスタグラムで しゃしんを のせます。",
        example_romaji: "Insutaguramu de shashin o nosemasu.",
        example_en: "I post photos on Instagram.",
        example_mm: "အင်စတာဂရမ်မှာ ဓာတ်ပုံတင်တယ်။"
    },
    {
        japanese: "ユーチューブ",
        romaji: "yuuchuubu",
        pronunciation: "yuuchuubu",
        english: "YouTube",
        burmese: "ယူကျု့",
        category: "misc",
        example_jp: "ユーチューブで どうがを みます。",
        example_romaji: "Yuuchuubu de douga o mimasu.",
        example_en: "I watch videos on YouTube.",
        example_mm: "ယူကျု့မှာ ဗီဒီယိုကြည့်တယ်။"
    },

    // ========== BUSINESS / ビジネス (10 words) ==========
    {
        japanese: "かいぎ",
        romaji: "kaigi",
        pronunciation: "kaigi",
        english: "meeting",
        burmese: "အစည်းအဝေး",
        category: "work",
        example_jp: "あした かいぎが あります。",
        example_romaji: "Ashita kaigi ga arimasu.",
        example_en: "There is a meeting tomorrow.",
        example_mm: "မနက်ဖြန် အစည်းအဝေးရှိတယ်။"
    },
    {
        japanese: "しごと",
        romaji: "shigoto",
        pronunciation: "shigoto",
        english: "work/job",
        burmese: "အလုပ်",
        category: "work",
        example_jp: "しごとが おおいです。",
        example_romaji: "Shigoto ga ooi desu.",
        example_en: "I have a lot of work.",
        example_mm: "အလုပ်များတယ်။"
    },
    {
        japanese: "かいしゃ",
        romaji: "kaisha",
        pronunciation: "kaisha",
        english: "company",
        burmese: "ကုမ္ပဏီ",
        category: "work",
        example_jp: "わたしの かいしゃは おおきいです。",
        example_romaji: "Watashi no kaisha wa ookii desu.",
        example_en: "My company is big.",
        example_mm: "ကျွန်တော့်ကုမ္ပဏီက ကြီးတယ်။"
    },
    {
        japanese: "しゃちょう",
        romaji: "shachou",
        pronunciation: "shachou",
        english: "company president",
        burmese: "ကုမ္ပဏီဥက္ကဋ္ဌ",
        category: "work",
        example_jp: "しゃちょうは やさしいです。",
        example_romaji: "Shachou wa yasashii desu.",
        example_en: "The company president is kind.",
        example_mm: "ကုမ္ပဏီဥက္ကဋ္ဌက ကြင်နာတယ်။"
    },
    {
        japanese: "しょるい",
        romaji: "shorui",
        pronunciation: "shorui",
        english: "documents",
        burmese: "စာရွက်စာတမ်းများ",
        category: "work",
        example_jp: "しょるいを よういします。",
        example_romaji: "Shorui o youi shimasu.",
        example_en: "I prepare documents.",
        example_mm: "စာရွက်စာတမ်းတွေ ပြင်ဆင်တယ်။"
    },
    {
        japanese: "ビジネス",
        romaji: "bijinesu",
        pronunciation: "bijinesu",
        english: "business",
        burmese: "စီးပွားရေး",
        category: "work",
        example_jp: "ビジネスの チャンスです。",
        example_romaji: "Bijinesu no chansu desu.",
        example_en: "It's a business opportunity.",
        example_mm: "စီးပွားရေးအခွင့်အရေးပါ။"
    },
    {
        japanese: "きゃく",
        romaji: "kyaku",
        pronunciation: "kyaku",
        english: "customer/client",
        burmese: "ဖောက်သည်",
        category: "work",
        example_jp: "きゃくに あいます。",
        example_romaji: "Kyaku ni aimasu.",
        example_en: "I meet with a client.",
        example_mm: "ဖောက်သည်နဲ့ တွေ့တယ်။"
    },
    {
        japanese: "けいやく",
        romaji: "keiyaku",
        pronunciation: "keiyaku",
        english: "contract",
        burmese: "စာချုပ်",
        category: "work",
        example_jp: "けいやくを かわします。",
        example_romaji: "Keiyaku o kawashimasu.",
        example_en: "We exchange contracts.",
        example_mm: "စာချုပ်ဖလှယ်တယ်။"
    },
    {
        japanese: "しゅうしょく",
        romaji: "yuushoku",
        pronunciation: "yuushoku",
        english: "finding employment",
        burmese: "အလုပ်ရှာဖွေခြင်း",
        category: "work",
        example_jp: "しゅうしょくかつどうを しています。",
        example_romaji: "Shuushoku katsudou o shite imasu.",
        example_en: "I'm job hunting.",
        example_mm: "အလုပ်ရှာနေတယ်။"
    },
    {
        japanese: "たいしょく",
        romaji: "taishoku",
        pronunciation: "taishoku",
        english: "quitting a job",
        burmese: "အလုပ်ထွက်ခြင်း",
        category: "work",
        example_jp: "らいげつ たいしょくします。",
        example_romaji: "Raigetsu taishoku shimasu.",
        example_en: "I'm quitting my job next month.",
        example_mm: "လာမယ့်လ အလုပ်ထွက်မယ်။"
    },

    // ========== TRAVEL / りょこう (10 words) ==========
    {
        japanese: "りょこう",
        romaji: "ryokou",
        pronunciation: "ryokou",
        english: "travel",
        burmese: "ခရီးသွားခြင်း",
        category: "misc",
        example_jp: "りょこうに いきたいです。",
        example_romaji: "Ryokou ni ikitai desu.",
        example_en: "I want to go on a trip.",
        example_mm: "ခရီးသွားချင်တယ်။"
    },
    {
        japanese: "ホテル",
        romaji: "hoteru",
        pronunciation: "hoteru",
        english: "hotel",
        burmese: "ဟိုတယ်",
        category: "places",
        example_jp: "ホテルを よやくしました。",
        example_romaji: "Hoteru o yoyaku shimashita.",
        example_en: "I reserved a hotel.",
        example_mm: "ဟိုတယ်ကြိုဘွတ်ခ်လုပ်ထားတယ်။"
    },
    {
        japanese: "りょかん",
        romaji: "ryokan",
        pronunciation: "ryokan",
        english: "Japanese inn",
        burmese: "ဂျပန်ရိုးရာဧည့်ရိပ်",
        category: "places",
        example_jp: "りょかんに とまります。",
        example_romaji: "Ryokan ni tomarimasu.",
        example_en: "I stay at a Japanese inn.",
        example_mm: "ဂျပန်ရိုးရာဧည့်ရိပ်မှာ တည်းတယ်။"
    },
    {
        japanese: "こうくうけん",
        romaji: "koukuuken",
        pronunciation: "koukuuken",
        english: "airplane ticket",
        burmese: "လေယာဉ်လက်မှတ်",
        category: "transport",
        example_jp: "こうくうけんを かいました。",
        example_romaji: "Koukuuken o kaimashita.",
        example_en: "I bought an airplane ticket.",
        example_mm: "လေယာဉ်လက်မှတ်ဝယ်တယ်။"
    },
    {
        japanese: "パスポート",
        romaji: "pasupooto",
        pronunciation: "pasupooto",
        english: "passport",
        burmese: "နိုင်ငံကူးလက်မှတ်",
        category: "misc",
        example_jp: "パスポートを もちました。",
        example_romaji: "Pasupooto o mochimashita.",
        example_en: "I have my passport.",
        example_mm: "နိုင်ငံကူးလက်မှတ် ကိုင်ထားတယ်။"
    },
    {
        japanese: "かんこう",
        romaji: "kankou",
        pronunciation: "kankou",
        english: "sightseeing",
        burmese: "ခရီးသွားလည်ပတ်ခြင်း",
        category: "misc",
        example_jp: "にほんで かんこうを します。",
        example_romaji: "Nihon de kankou o shimasu.",
        example_en: "I go sightseeing in Japan.",
        example_mm: "ဂျပန်မှာ ခရီးသွားလည်ပတ်တယ်။"
    },
    {
        japanese: "おみやげ",
        romaji: "omiyage",
        pronunciation: "omiyage",
        english: "souvenir",
        burmese: "လက်ဆောင်ပစ္စည်း (ခရီးသွားလက်ဆောင်)",
        category: "shopping",
        example_jp: "おみやげを かいました。",
        example_romaji: "Omiyage o kaimashita.",
        example_en: "I bought souvenirs.",
        example_mm: "ခရီးသွားလက်ဆောင်ပစ္စည်းဝယ်တယ်။"
    },
    {
        japanese: "とりっぷ",
        romaji: "torippu",
        pronunciation: "torippu",
        english: "trip",
        burmese: "ခရီးစဉ်",
        category: "misc",
        example_jp: "たのしい とりっぷでした。",
        example_romaji: "Tanoshii torippu deshita.",
        example_en: "It was a fun trip.",
        example_mm: "ပျော်စရာကောင်းတဲ့ ခရီးစဉ်ပါ။"
    },
    {
        japanese: "にもつ",
        romaji: "nimotsu",
        pronunciation: "nimotsu",
        english: "luggage",
        burmese: "ခရီးဆောင်အိတ်",
        category: "transport",
        example_jp: "にもつが おもいです。",
        example_romaji: "Nimotsu ga omoi desu.",
        example_en: "The luggage is heavy.",
        example_mm: "ခရီးဆောင်အိတ်က လေးတယ်။"
    },
    {
        japanese: "よやく",
        romaji: "yoyaku",
        pronunciation: "yoyaku",
        english: "reservation",
        burmese: "ကြိုတင်ဘွတ်ခ်ခြင်း",
        category: "misc",
        example_jp: "ホテルの よやくを しました。",
        example_romaji: "Hoteru no yoyaku o shimashita.",
        example_en: "I made a hotel reservation.",
        example_mm: "ဟိုတယ်ကြိုဘွတ်ခ်လုပ်ထားတယ်။"
    },

    // ========== EMERGENCY / きんきゅうじ (8 words) ==========
    {
        japanese: "きんきゅう",
        romaji: "kinkyu",
        pronunciation: "kinkyu",
        english: "emergency",
        burmese: "အရေးပေါ်",
        category: "misc",
        example_jp: "きんきゅうの ばあい。",
        example_romaji: "Kinkyu no baai.",
        example_en: "In case of emergency.",
        example_mm: "အရေးပေါ်အခြေအနေမှာ။"
    },
    {
        japanese: "たすけて",
        romaji: "tasukete",
        pronunciation: "tasukete",
        english: "help!",
        burmese: "ကယ်ပါ",
        category: "misc",
        example_jp: "たすけてください。",
        example_romaji: "Tasukete kudasai.",
        example_en: "Please help me.",
        example_mm: "ကျေးဇူးပြု၍ ကယ်ပါ။"
    },
    {
        japanese: "こうばん",
        romaji: "kouban",
        pronunciation: "kouban",
        english: "police box",
        burmese: "ရဲဂိတ်",
        category: "places",
        example_jp: "こうばんは どこですか。",
        example_romaji: "Kouban wa doko desu ka.",
        example_en: "Where is the police box?",
        example_mm: "ရဲဂိတ်က ဘယ်မှာလဲ။"
    },
    {
        japanese: "けいさつ",
        romaji: "keisatsu",
        pronunciation: "keisatsu",
        english: "police",
        burmese: "ရဲ",
        category: "people",
        example_jp: "けいさつを よびます。",
        example_romaji: "Keisatsu o yobimasu.",
        example_en: "I call the police.",
        example_mm: "ရဲကိုခေါ်တယ်။"
    },
    {
        japanese: "きゅうきゅうしゃ",
        romaji: "kyuukyuusha",
        pronunciation: "kyuukyuusha",
        english: "ambulance",
        burmese: "လူနာတင်ယာဉ်",
        category: "transport",
        example_jp: "きゅうきゅうしゃを よびます。",
        example_romaji: "Kyuukyuusha o yobimasu.",
        example_en: "I call an ambulance.",
        example_mm: "လူနာတင်ယာဉ်ခေါ်တယ်။"
    },
    {
        japanese: "しょうぼうしょ",
        romaji: "shoubousho",
        pronunciation: "shoubousho",
        english: "fire station",
        burmese: "မီးသတ်ဌာန",
        category: "places",
        example_jp: "しょうぼうしょは あそこです。",
        example_romaji: "Shoubousho wa asoko desu.",
        example_en: "The fire station is over there.",
        example_mm: "မီးသတ်ဌာနက ဟိုမှာပါ။"
    },
    {
        japanese: "かじ",
        romaji: "kaji",
        pronunciation: "kaji",
        english: "fire",
        burmese: "မီးလောင်ခြင်း",
        category: "misc",
        example_jp: "かじが おきました。",
        example_romaji: "Kaji ga okimashita.",
        example_en: "A fire broke out.",
        example_mm: "မီးလောင်တယ်။"
    },
    {
        japanese: "じしん",
        romaji: "jishin",
        pronunciation: "jishin",
        english: "earthquake",
        burmese: "မြေငလျင်",
        category: "weather",
        example_jp: "じしんが ありました。",
        example_romaji: "Jishin ga arimashita.",
        example_en: "There was an earthquake.",
        example_mm: "မြေငလျင်လှုပ်တယ်။"
    },
        // ========== DISASTER / さいがい (7 more words) ==========
    {
        japanese: "つなみ",
        romaji: "tsunami",
        pronunciation: "tsunami",
        english: "tsunami",
        burmese: "ဆူနာမီ",
        category: "weather",
        example_jp: "つなみに ちゅういしてください。",
        example_romaji: "Tsunami ni chuui shite kudasai.",
        example_en: "Please be careful of tsunamis.",
        example_mm: "ဆူနာမီကို သတိထားပါ။"
    },
    {
        japanese: "たいふう",
        romaji: "taifuu",
        pronunciation: "taifuu",
        english: "typhoon",
        burmese: "တိုင်ဖွန်း",
        category: "weather",
        example_jp: "たいふうが きます。",
        example_romaji: "Taifuu ga kimasu.",
        example_en: "A typhoon is coming.",
        example_mm: "တိုင်ဖွန်းမုန်တိုင်းလာမယ်။"
    },
    {
        japanese: "かみなり",
        romaji: "kaminari",
        pronunciation: "kaminari",
        english: "thunder/lightning",
        burmese: "လျှပ်",
        category: "weather",
        example_jp: "かみなりが なっています。",
        example_romaji: "Kaminari ga natte imasu.",
        example_en: "Thunder is striking.",
        example_mm: "လျှပ်စီးလက်တယ်။"
    },
    {
        japanese: "ひなん",
        romaji: "hinan",
        pronunciation: "hinan",
        english: "evacuation",
        burmese: "ဘေးလွတ်ရာရွှေ့ပြောင်းခြင်း",
        category: "misc",
        example_jp: "ひなんしなければなりません。",
        example_romaji: "Hinan shinakereba narimasen.",
        example_en: "We must evacuate.",
        example_mm: "ဘေးလွတ်ရာကို ရွှေ့ပြောင်းရမယ်။"
    },
    {
        japanese: "ぼうさい",
        romaji: "bousai",
        pronunciation: "bousai",
        english: "disaster prevention",
        burmese: "ဘေးအန္တရာယ်ကာကွယ်ရေး",
        category: "misc",
        example_jp: "ぼうさいバッグを よういします。",
        example_romaji: "Bousai baggu o youi shimasu.",
        example_en: "I prepare a disaster prevention bag.",
        example_mm: "ဘေးအန္တရာယ်ကာကွယ်ရေးအိတ် ပြင်ဆင်တယ်။"
    },
    {
        japanese: "ひだり",
        romaji: "hidari",
        pronunciation: "hidari",
        english: "left",
        burmese: "ဘယ်",
        category: "directions",
        example_jp: "ひだりに まがります。",
        example_romaji: "Hidari ni magarimasu.",
        example_en: "Turn left.",
        example_mm: "ဘယ်ဘက်ကွေ့ပါ။"
    },
    {
        japanese: "みぎ",
        romaji: "migi",
        pronunciation: "migi",
        english: "right",
        burmese: "ညာ",
        category: "directions",
        example_jp: "みぎに まがります。",
        example_romaji: "Migi ni magarimasu.",
        example_en: "Turn right.",
        example_mm: "ညာဘက်ကွေ့ပါ။"
    },

    // ========== MORE RESTAURANT / レストラン (8 words) ==========
    {
        japanese: "メニュー",
        romaji: "menyuu",
        pronunciation: "menyuu",
        english: "menu",
        burmese: "မီနူး",
        category: "food",
        example_jp: "メニューを みせてください。",
        example_romaji: "Menyuu o misete kudasai.",
        example_en: "Please show me the menu.",
        example_mm: "မီနူးပြပါ။"
    },
    {
        japanese: "ちゅうもん",
        romaji: "chuumon",
        pronunciation: "chuumon",
        english: "order",
        burmese: "မှာယူခြင်း",
        category: "shopping",
        example_jp: "ちゅうもんを おねがいします。",
        example_romaji: "Chuumon o onegai shimasu.",
        example_en: "I'd like to place an order.",
        example_mm: "မှာယူချင်ပါတယ်။"
    },
    {
        japanese: "おかいけい",
        romaji: "okaikei",
        pronunciation: "okaikei",
        english: "bill/check",
        burmese: "ငွေတောင်းခံလွှာ",
        category: "shopping",
        example_jp: "おかいけいを おねがいします。",
        example_romaji: "Okaikei o onegai shimasu.",
        example_en: "May I have the bill?",
        example_mm: "ငွေတောင်းခံလွှာ ပေးပါ။"
    },
    {
        japanese: "おすすめ",
        romaji: "osusume",
        pronunciation: "osusume",
        english: "recommendation",
        burmese: "အကြံပြုချက်",
        category: "misc",
        example_jp: "おすすめは なんですか。",
        example_romaji: "Osusume wa nan desu ka.",
        example_en: "What do you recommend?",
        example_mm: "ဘာအကြံပြုလဲ။"
    },
    {
        japanese: "ランチ",
        romaji: "ranchi",
        pronunciation: "ranchi",
        english: "lunch",
        burmese: "နေ့လည်စာ",
        category: "food",
        example_jp: "ランチを たべます。",
        example_romaji: "Ranch o tabemasu.",
        example_en: "I eat lunch.",
        example_mm: "နေ့လည်စာစားတယ်။"
    },
    {
        japanese: "ディナー",
        romaji: "dinaa",
        pronunciation: "dinaa",
        english: "dinner",
        burmese: "ညစာ",
        category: "food",
        example_jp: "ディナーを りょうりします。",
        example_romaji: "Dinaa o ryouri shimasu.",
        example_en: "I cook dinner.",
        example_mm: "ညစာချက်ပြုတ်တယ်။"
    },
    {
        japanese: "デザート",
        romaji: "dezaato",
        pronunciation: "dezaato",
        english: "dessert",
        burmese: "အချိုပွဲ",
        category: "food",
        example_jp: "デザートが たべたいです。",
        example_romaji: "Dezaato ga tabetai desu.",
        example_en: "I want to eat dessert.",
        example_mm: "အချိုပွဲစားချင်တယ်။"
    },
    {
        japanese: "ドリンク",
        romaji: "dorinku",
        pronunciation: "dorinku",
        english: "drink",
        burmese: "အဖျော်ယမကာ",
        category: "food",
        example_jp: "ドリンクを のみます。",
        example_romaji: "Dorinku o nomimasu.",
        example_en: "I drink a beverage.",
        example_mm: "အဖျော်ယမကာသောက်တယ်။"
    },

    // ========== BANK / ぎんこう (5 words) ==========
    {
        japanese: "ぎんこう",
        romaji: "ginkou",
        pronunciation: "ginkou",
        english: "bank",
        burmese: "ဘဏ်",
        category: "places",
        example_jp: "ぎんこうに いきます。",
        example_romaji: "Ginkou ni ikimasu.",
        example_en: "I go to the bank.",
        example_mm: "ဘဏ်ကိုသွားတယ်။"
    },
    {
        japanese: "おかね",
        romaji: "okane",
        pronunciation: "okane",
        english: "money",
        burmese: "ပိုက်ဆံ",
        category: "shopping",
        example_jp: "おかねを おろします。",
        example_romaji: "Okane o oroshimasu.",
        example_en: "I withdraw money.",
        example_mm: "ပိုက်ဆံထုတ်တယ်။"
    },
    {
        japanese: "よきん",
        romaji: "yokin",
        pronunciation: "yokin",
        english: "savings/deposit",
        burmese: "ငွေစုခြင်း/ငွ်ေသွင်းခြင်း",
        category: "misc",
        example_jp: "よきんします。",
        example_romaji: "Yokin shimasu.",
        example_en: "I deposit money.",
        example_mm: "ငွေသွင်းတယ်။"
    },
    {
        japanese: "キャッシュカード",
        romaji: "kyasshukaado",
        pronunciation: "kyasshukaado",
        english: "cash card",
        burmese: "ငွေထုတ်ကတ်",
        category: "misc",
        example_jp: "キャッシュカードを つかいます。",
        example_romaji: "Kyasshukaado o tsukaimasu.",
        example_en: "I use my cash card.",
        example_mm: "ငွေထုတ်ကတ်သုံးတယ်။"
    },
    {
        japanese: "こうかん",
        romaji: "koukan",
        pronunciation: "koukan",
        english: "exchange",
        burmese: "လဲလှယ်ခြင်း",
        category: "shopping",
        example_jp: "りょこうさきで おかねを こうかんします。",
        example_romaji: "Ryokou saki de okane o koukan shimasu.",
        example_en: "I exchange money at my travel destination.",
        example_mm: "ခရီးသွားရာနေရာမှာ ပိုက်ဆံလဲတယ်။"
    },

    // ========== FEELINGS / きもち (12 words) ==========
    {
        japanese: "きもち",
        romaji: "kimochi",
        pronunciation: "kimochi",
        english: "feeling",
        burmese: "ခံစားချက်",
        category: "misc",
        example_jp: "きもちが いいです。",
        example_romaji: "Kimochi ga ii desu.",
        example_en: "I feel good.",
        example_mm: "ခံစားချက်ကောင်းတယ်။"
    },
    {
        japanese: "たのしみ",
        romaji: "tanoshimi",
        pronunciation: "tanoshimi",
        english: "anticipation/pleasure",
        burmese: "မျှော်လင့်ခြင်း",
        category: "misc",
        example_jp: "りょこうが たのしみです。",
        example_romaji: "Ryokou ga tanoshimi desu.",
        example_en: "I'm looking forward to the trip.",
        example_mm: "ခရီးစဉ်ကို စောင့်မျှော်နေတယ်။"
    },
    {
        japanese: "しあわせ",
        romaji: "shiawase",
        pronunciation: "shiawase",
        english: "happiness",
        burmese: "ပျော်ရွှင်ခြင်း",
        category: "adjectives",
        example_jp: "しあわせな かぞくです。",
        example_romaji: "Shiawase na kazoku desu.",
        example_en: "We are a happy family.",
        example_mm: "ပျော်ရွှင်တဲ့ မိသားစုပါ။"
    },
    {
        japanese: "かなしみ",
        romaji: "kanashimi",
        pronunciation: "kanashimi",
        english: "sadness",
        burmese: "ဝမ်းနည်းခြင်း",
        category: "misc",
        example_jp: "かなしみで いっぱいです。",
        example_romaji: "Kanashimi de ippai desu.",
        example_en: "I'm full of sadness.",
        example_mm: "ဝမ်းနည်းမှုတွေ ပြည့်နေတယ်။"
    },
    {
        japanese: "いかり",
        romaji: "ikari",
        pronunciation: "ikari",
        english: "anger",
        burmese: "ဒေါသ",
        category: "misc",
        example_jp: "いかりを おさえます。",
        example_romaji: "Ikari o osaemasu.",
        example_en: "I suppress my anger.",
        example_mm: "ဒေါသကို ထိန်းတယ်။"
    },
    {
        japanese: "きんちょう",
        romaji: "kinchou",
        pronunciation: "kinchou",
        english: "nervousness/tension",
        burmese: "စိတ်လှုပ်ရှားခြင်း",
        category: "misc",
        example_jp: "きんちょうしています。",
        example_romaji: "Kinchou shite imasu.",
        example_en: "I'm nervous.",
        example_mm: "စိတ်လှုပ်ရှားနေတယ်။"
    },
    {
        japanese: "ふあん",
        romaji: "fuan",
        pronunciation: "fuan",
        english: "anxiety",
        burmese: "စိုးရိမ်ပူပန်ခြင်း",
        category: "misc",
        example_jp: "ふあんな きもちです。",
        example_romaji: "Fuan na kimochi desu.",
        example_en: "I feel anxious.",
        example_mm: "စိတ်ပူတယ်။"
    },
    {
        japanese: "こうふん",
        romaji: "koufun",
        pronunciation: "koufun",
        english: "excitement",
        burmese: "စိတ်လှုပ်ရှားခြင်း",
        category: "misc",
        example_jp: "こうふんしています。",
        example_romaji: "Koufun shite imasu.",
        example_en: "I'm excited.",
        example_mm: "စိတ်လှုပ်ရှားနေတယ်။"
    },
    {
        japanese: "リラックス",
        romaji: "rirakkusu",
        pronunciation: "rirakkusu",
        english: "relax",
        burmese: "စိတ်အေးလက်အေး",
        category: "misc",
        example_jp: "おんがくを きいて リラックスします。",
        example_romaji: "Ongaku o kiite rirakkusu shimasu.",
        example_en: "I listen to music and relax.",
        example_mm: "ဂီတနားထောင်ပြီး စိတ်အေးလက်အေးထားတယ်။"
    },
    {
        japanese: "ストレス",
        romaji: "sutoresu",
        pronunciation: "sutoresu",
        english: "stress",
        burmese: "စိတ်ဖိစီးမှု",
        category: "misc",
        example_jp: "ストレスが たまります。",
        example_romaji: "Sutoresu ga tamarimasu.",
        example_en: "Stress builds up.",
        example_mm: "စိတ်ဖိစီးမှုများလာတယ်။"
    },
    {
        japanese: "ぼんやり",
        romaji: "bonyari",
        pronunciation: "bonyari",
        english: "absent-minded/daydreaming",
        burmese: "အာရုံပျံ့လွင့်ခြင်း",
        category: "misc",
        example_jp: "ぼんやり かんがえています。",
        example_romaji: "Bonyari kangaete imasu.",
        example_en: "I'm daydreaming.",
        example_mm: "အာရုံပျံ့လွင့်နေတယ်။"
    },
    {
        japanese: "いらいら",
        romaji: "iraira",
        pronunciation: "iraira",
        english: "irritated/frustrated",
        burmese: "စိတ်တိုခြင်း",
        category: "misc",
        example_jp: "いらいらしています。",
        example_romaji: "Iraira shite imasu.",
        example_en: "I'm irritated.",
        example_mm: "စိတ်တိုနေတယ်။"
    },

    // ========== SHAPES / かたち (8 words) ==========
    {
        japanese: "まる",
        romaji: "maru",
        pronunciation: "maru",
        english: "circle",
        burmese: "စက်ဝိုင်း",
        category: "misc",
        example_jp: "まるを かいてください。",
        example_romaji: "Maru o kaite kudasai.",
        example_en: "Please draw a circle.",
        example_mm: "စက်ဝိုင်းဆွဲပါ။"
    },
    {
        japanese: "しかく",
        romaji: "shikaku",
        pronunciation: "shikaku",
        english: "square",
        burmese: "စတုရန်း",
        category: "misc",
        example_jp: "しかくい かたちです。",
        example_romaji: "Shikakui katachi desu.",
        example_en: "It's a square shape.",
        example_mm: "စတုရန်းပုံစံပါ။"
    },
    {
        japanese: "さんかく",
        romaji: "sankaku",
        pronunciation: "sankaku",
        english: "triangle",
        burmese: "တြိဂံ",
        category: "misc",
        example_jp: "さんかくけいを かきます。",
        example_romaji: "Sankakukei o kakimasu.",
        example_en: "I draw a triangle.",
        example_mm: "တြိဂံဆွဲတယ်။"
    },
    {
        japanese: "ながしかく",
        romaji: "nagashikaku",
        pronunciation: "nagashikaku",
        english: "rectangle",
        burmese: "လေးထောင့်တန်း",
        category: "misc",
        example_jp: "ながしかくの テーブルです。",
        example_romaji: "Nagashikaku no teeburu desu.",
        example_en: "It's a rectangular table.",
        example_mm: "လေးထောင့်တန်း စားပွဲပါ။"
    },
        // ========== MORE SHAPES & PATTERNS / かたちともよう (5 words) ==========
    {
        japanese: "ほしがた",
        romaji: "hoshigata",
        pronunciation: "hoshigata",
        english: "star shape",
        burmese: "ကြယ်ပုံသဏ္ဍာန်",
        category: "misc",
        example_jp: "ほしがたの かざりです。",
        example_romaji: "Hoshigata no kazari desu.",
        example_en: "It's a star-shaped decoration.",
        example_mm: "ကြယ်ပုံသဏ္ဍာန် အဆင်တန်ဆာပါ။"
    },
    {
        japanese: "はーとがた",
        romaji: "haatogata",
        pronunciation: "haatogata",
        english: "heart shape",
        burmese: "နှလုံးပုံသဏ္ဍာန်",
        category: "misc",
        example_jp: "はーとがたの おかしです。",
        example_romaji: "Haatogata no okashi desu.",
        example_en: "It's a heart-shaped candy.",
        example_mm: "နှလုံးပုံသဏ္ဍာန် သကြားလုံးပါ။"
    },
    {
        japanese: "しかくい",
        romaji: "shikakui",
        pronunciation: "shikakui",
        english: "square-shaped",
        burmese: "စတုရန်းပုံသဏ္ဍာန်",
        category: "adjectives",
        example_jp: "しかくい はこです。",
        example_romaji: "Shikakui hako desu.",
        example_en: "It's a square box.",
        example_mm: "စတုရန်းပုံ သေတ္တာပါ။"
    },
    {
        japanese: "まるい",
        romaji: "marui",
        pronunciation: "marui",
        english: "round",
        burmese: "ဝိုင်းသည်",
        category: "adjectives",
        example_jp: "まるい テーブルです。",
        example_romaji: "Marui teeburu desu.",
        example_en: "It's a round table.",
        example_mm: "စားပွဲဝိုင်းပါ။"
    },
    {
        japanese: "さんかっけい",
        romaji: "sankakkei",
        pronunciation: "sankakkei",
        english: "triangular",
        burmese: "တြိဂံပုံ",
        category: "misc",
        example_jp: "さんかっけいの やねです。",
        example_romaji: "Sankakkei no yane desu.",
        example_en: "It's a triangular roof.",
        example_mm: "တြိဂံပုံ အိမ်မိုးပါ။"
    },

    // ========== MUSIC / おんがく (8 words) ==========
    {
        japanese: "おんがく",
        romaji: "ongaku",
        pronunciation: "ongaku",
        english: "music",
        burmese: "ဂီတ",
        category: "hobbies",
        example_jp: "おんがくを きくのが すきです。",
        example_romaji: "Ongaku o kiku no ga suki desu.",
        example_en: "I like listening to music.",
        example_mm: "ဂီတနားထောင်ရတာ ကြိုက်တယ်။"
    },
    {
        japanese: "うた",
        romaji: "uta",
        pronunciation: "uta",
        english: "song",
        burmese: "သီချင်း",
        category: "hobbies",
        example_jp: "うたを うたいます。",
        example_romaji: "Uta o utaimasu.",
        example_en: "I sing a song.",
        example_mm: "သီချင်းဆိုတယ်။"
    },
    {
        japanese: "ピアノ",
        romaji: "piano",
        pronunciation: "piano",
        english: "piano",
        burmese: "စန္ဒရား",
        category: "hobbies",
        example_jp: "ピアノを ひきます。",
        example_romaji: "Piano o hikimasu.",
        example_en: "I play the piano.",
        example_mm: "စန္ဒရားတီးတယ်။"
    },
    {
        japanese: "ギター",
        romaji: "gitaa",
        pronunciation: "gitaa",
        english: "guitar",
        burmese: "ဂစ်တာ",
        category: "hobbies",
        example_jp: "ギターを ならっています。",
        example_romaji: "Gitaa o naratte imasu.",
        example_en: "I'm learning guitar.",
        example_mm: "ဂစ်တာသင်ယူနေတယ်။"
    },
    {
        japanese: "ドラム",
        romaji: "doramu",
        pronunciation: "doramu",
        english: "drums",
        burmese: "ဒရမ်",
        category: "hobbies",
        example_jp: "ドラムを たたきます。",
        example_romaji: "Doramu o tatakimasu.",
        example_en: "I play the drums.",
        example_mm: "ဒရမ်တီးတယ်။"
    },
    {
        japanese: "バイオリン",
        romaji: "baiorin",
        pronunciation: "baiorin",
        english: "violin",
        burmese: "တယော",
        category: "hobbies",
        example_jp: "バイオリンを ひきます。",
        example_romaji: "Baiorin o hikimasu.",
        example_en: "I play the violin.",
        example_mm: "တယောတီးတယ်။"
    },
    {
        japanese: "コンサート",
        romaji: "konsaato",
        pronunciation: "konsaato",
        english: "concert",
        burmese: "ဖျော်ဖြေပွဲ",
        category: "misc",
        example_jp: "コンサートに いきます。",
        example_romaji: "Konsaato ni ikimasu.",
        example_en: "I go to a concert.",
        example_mm: "ဖျော်ဖြေပွဲသွားတယ်။"
    },
    {
        japanese: "チケット",
        romaji: "chiketto",
        pronunciation: "chiketto",
        english: "ticket",
        burmese: "လက်မှတ်",
        category: "misc",
        example_jp: "チケットを かいました。",
        example_romaji: "Chiketto o kaimashita.",
        example_en: "I bought a ticket.",
        example_mm: "လက်မှတ်ဝယ်တယ်။"
    },

    // ========== SPORTS / スポーツ (10 words) ==========
    {
        japanese: "サッカー",
        romaji: "sakkaa",
        pronunciation: "sakkaa",
        english: "soccer",
        burmese: "ဘောလုံး",
        category: "hobbies",
        example_jp: "サッカーを します。",
        example_romaji: "Sakkaa o shimasu.",
        example_en: "I play soccer.",
        example_mm: "ဘောလုံးကစားတယ်။"
    },
    {
        japanese: "テニス",
        romaji: "tenisu",
        pronunciation: "tenisu",
        english: "tennis",
        burmese: "တင်းနစ်",
        category: "hobbies",
        example_jp: "テニスが すきです。",
        example_romaji: "Tenisu ga suki desu.",
        example_en: "I like tennis.",
        example_mm: "တင်းနစ်ကြိုက်တယ်။"
    },
    {
        japanese: "バスケットボール",
        romaji: "basukettobooru",
        pronunciation: "basukettobooru",
        english: "basketball",
        burmese: "ဘတ်စကတ်ဘော",
        category: "hobbies",
        example_jp: "バスケットボールを します。",
        example_romaji: "Basukettobooru o shimasu.",
        example_en: "I play basketball.",
        example_mm: "ဘတ်စကတ်ဘောကစားတယ်။"
    },
    {
        japanese: "やきゅう",
        romaji: "yakyuu",
        pronunciation: "yakyuu",
        english: "baseball",
        burmese: "ဘေ့စ်ဘော",
        category: "hobbies",
        example_jp: "やきゅうを みます。",
        example_romaji: "Yakyuu o mimasu.",
        example_en: "I watch baseball.",
        example_mm: "ဘေ့စ်ဘောကြည့်တယ်။"
    },
    {
        japanese: "すいえい",
        romaji: "suiei",
        pronunciation: "suiei",
        english: "swimming",
        burmese: "ရေကူးခြင်း",
        category: "hobbies",
        example_jp: "すいえいを します。",
        example_romaji: "Suiei o shimasu.",
        example_en: "I swim.",
        example_mm: "ရေကူးတယ်။"
    },
    {
        japanese: "ランニング",
        romaji: "ranningu",
        pronunciation: "ranningu",
        english: "running",
        burmese: "ပြေးခြင်း",
        category: "hobbies",
        example_jp: "まいにち ランニングを します。",
        example_romaji: "Mainichi ranningu o shimasu.",
        example_en: "I run every day.",
        example_mm: "နေ့တိုင်း ပြေးတယ်။"
    },
    {
        japanese: "ヨガ",
        romaji: "yoga",
        pronunciation: "yoga",
        english: "yoga",
        burmese: "ယောဂ",
        category: "hobbies",
        example_jp: "ヨガで リラックスします。",
        example_romaji: "Yoga de rirakkusu shimasu.",
        example_en: "I relax with yoga.",
        example_mm: "ယောဂနဲ့ စိတ်အေးလက်အေးထားတယ်။"
    },
    {
        japanese: "ジム",
        romaji: "jimu",
        pronunciation: "jimu",
        english: "gym",
        burmese: "အားကစားခန်းမ",
        category: "places",
        example_jp: "ジムに いきます。",
        example_romaji: "Jimu ni ikimasu.",
        example_en: "I go to the gym.",
        example_mm: "အားကစားခန်းမသွားတယ်။"
    },
    {
        japanese: "たいそう",
        romaji: "taisou",
        pronunciation: "taisou",
        english: "gymnastics/exercise",
        burmese: "လေ့ကျင့်ခန်း",
        category: "hobbies",
        example_jp: "あさ たいそうを します。",
        example_romaji: "Asa taisou o shimasu.",
        example_en: "I do exercises in the morning.",
        example_mm: "မနက်ခင်းမှာ လေ့ကျင့်ခန်းလုပ်တယ်။"
    },
    {
        japanese: "しょうぶ",
        romaji: "shoubu",
        pronunciation: "shoubu",
        english: "match/competition",
        burmese: "ပြိုင်ပွဲ",
        category: "misc",
        example_jp: "しょうぶに かちました。",
        example_romaji: "Shoubu ni kachimashita.",
        example_en: "I won the match.",
        example_mm: "ပြိုင်ပွဲနိုင်ခဲ့တယ်။"
    },

    // ========== PERSONAL INFORMATION / こじんじょうほう (8 words) ==========
    {
        japanese: "なまえ",
        romaji: "namae",
        pronunciation: "namae",
        english: "name",
        burmese: "အမည်",
        category: "misc",
        example_jp: "おなまえは なんですか。",
        example_romaji: "Onamae wa nan desu ka.",
        example_en: "What is your name?",
        example_mm: "နာမည်ဘာလဲ။"
    },
    {
        japanese: "じゅうしょ",
        romaji: "juusho",
        pronunciation: "juusho",
        english: "address",
        burmese: "လိပ်စာ",
        category: "misc",
        example_jp: "じゅうしょを おしえてください。",
        example_romaji: "Juusho o oshiete kudasai.",
        example_en: "Please tell me your address.",
        example_mm: "လိပ်စာပြောပြပါ။"
    },
    {
        japanese: "でんわばんごう",
        romaji: "denwabangou",
        pronunciation: "denwabangou",
        english: "phone number",
        burmese: "ဖုန်းနံပါတ်",
        category: "misc",
        example_jp: "でんわばんごうを おしえてください。",
        example_romaji: "Denwabangou o oshiete kudasai.",
        example_en: "Please tell me your phone number.",
        example_mm: "ဖုန်းနံပါတ်ပြောပြပါ။"
    },
    {
        japanese: "メールアドレス",
        romaji: "meeruadoresu",
        pronunciation: "meeruadoresu",
        english: "email address",
        burmese: "အီးမေးလိပ်စာ",
        category: "misc",
        example_jp: "メールアドレスを おしえてください。",
        example_romaji: "Meeruadoresu o oshiete kudasai.",
        example_en: "Please tell me your email address.",
        example_mm: "အီးမေးလိပ်စာပြောပြပါ။"
    },
    {
        japanese: "たんじょうび",
        romaji: "tanjoubi",
        pronunciation: "tanjoubi",
        english: "birthday",
        burmese: "မွေးနေ့",
        category: "time",
        example_jp: "たんじょうびは いつですか。",
        example_romaji: "Tanjoubi wa itsu desu ka.",
        example_en: "When is your birthday?",
        example_mm: "မွေးနေ့ဘယ်တော့လဲ။"
    },
    {
        japanese: "ねんれい",
        romaji: "nenrei",
        pronunciation: "nenrei",
        english: "age",
        burmese: "အသက်",
        category: "misc",
        example_jp: "ねんれいは いくつですか。",
        example_romaji: "Nenrei wa ikutsu desu ka.",
        example_en: "How old are you?",
        example_mm: "အသက်ဘယ်လောက်လဲ။"
    },
    {
        japanese: "しゅっしん",
        romaji: "shusshin",
        pronunciation: "shusshin",
        english: "hometown/origin",
        burmese: "ဇာတိ",
        category: "misc",
        example_jp: "しゅっしんは どこですか。",
        example_romaji: "Shusshin wa doko desu ka.",
        example_en: "Where are you from?",
        example_mm: "ဇာတိဘယ်မှာလဲ။"
    },
    {
        japanese: "しゅみ",
        romaji: "shumi",
        pronunciation: "shumi",
        english: "hobby",
        burmese: "ဝါသနာ",
        category: "hobbies",
        example_jp: "しゅみは なんですか。",
        example_romaji: "Shumi wa nan desu ka.",
        example_en: "What are your hobbies?",
        example_mm: "ဝါသနာဘာလဲ။"
    },

    // ========== FAMILY EVENTS / かぞくのイベント (7 words) ==========
    {
        japanese: "けっこん",
        romaji: "kekkon",
        pronunciation: "kekkon",
        english: "marriage",
        burmese: "အိမ်ထောင်ပြုခြင်း",
        category: "family",
        example_jp: "けっこんしきに でます。",
        example_romaji: "Kekkonshiki ni demasu.",
        example_en: "I attend a wedding.",
        example_mm: "မင်္ဂလာဆောင်တက်တယ်။"
    },
    {
        japanese: "けっこんしき",
        romaji: "kekkonshiki",
        pronunciation: "kekkonshiki",
        english: "wedding ceremony",
        burmese: "မင်္ဂလာဆောင်အခမ်းအနား",
        category: "family",
        example_jp: "けっこんしきは にぎやかでした。",
        example_romaji: "Kekkonshiki wa nigiyaka deshita.",
        example_en: "The wedding ceremony was lively.",
        example_mm: "မင်္ဂလာဆောင်အခမ်းအနားက စည်ကားတယ်။"
    },
    {
        japanese: "おいわい",
        romaji: "oiwai",
        pronunciation: "oiwai",
        english: "celebration",
        burmese: "အခမ်းအနား",
        category: "family",
        example_jp: "おいわいの パーティーです。",
        example_romaji: "Oiwai no paatii desu.",
        example_en: "It's a celebration party.",
        example_mm: "အခမ်းအနားပါတီပါ။"
    },
    {
        japanese: "おまつり",
        romaji: "omatsuri",
        pronunciation: "omatsuri",
        english: "festival",
        burmese: "ပွဲတော်",
        category: "misc",
        example_jp: "おまつりに いきます。",
        example_romaji: "Omatsuri ni ikimasu.",
        example_en: "I go to the festival.",
        example_mm: "ပွဲတော်သွားတယ်။"
    },
    {
        japanese: "おしょうがつ",
        romaji: "oshougatsu",
        pronunciation: "oshougatsu",
        english: "New Year's",
        burmese: "နှစ်သစ်ကူး",
        category: "time",
        example_jp: "おしょうがつに かぞくと あいます。",
        example_romaji: "Oshougatsu ni kazoku to aimasu.",
        example_en: "I meet my family on New Year's.",
        example_mm: "နှစ်သစ်ကူးမှာ မိသားစုနဲ့တွေ့တယ်။"
    },
    {
        japanese: "クリスマス",
        romaji: "kurisumasu",
        pronunciation: "kurisumasu",
        english: "Christmas",
        burmese: "ခရစ္စမတ်",
        category: "time",
        example_jp: "クリスマスに プレゼントを あげます。",
        example_romaji: "Kurisumasu ni purezento o agemasu.",
        example_en: "I give presents on Christmas.",
        example_mm: "ခရစ္စမတ်မှာ လက်ဆောင်ပေးတယ်။"
    },
    {
        japanese: "バレンタインデー",
        romaji: "barentaindee",
        pronunciation: "barentaindee",
        english: "Valentine's Day",
        burmese: "ဗလက်တိုင်းဒေး",
        category: "time",
        example_jp: "バレンタインデーに チョコレートを あげます。",
        example_romaji: "Barentaindee ni chokoreeto o agemasu.",
        example_en: "I give chocolate on Valentine's Day.",
        example_mm: "ဗလက်တိုင်းဒေးမှာ ချောကလက်ပေးတယ်။"
    },
        // ========== MORE HOLIDAYS / ホリデー (8 words) ==========
    {
        japanese: "こどものひ",
        romaji: "kodomo no hi",
        pronunciation: "kodomo no hi",
        english: "Children's Day",
        burmese: "ကလေးများနေ့",
        category: "time",
        example_jp: "こどものひに こいのぼりを あげます。",
        example_romaji: "Kodomo no hi ni koinobori o agemasu.",
        example_en: "We raise carp streamers on Children's Day.",
        example_mm: "ကလေးများနေ့မှာ ငါးပုစွန်တိုင်အောင် လွှတ်တင်တယ်။"
    },
    {
        japanese: "たなばた",
        romaji: "tanabata",
        pronunciation: "tanabata",
        english: "Star Festival",
        burmese: "ကြယ်ပွဲတော်",
        category: "time",
        example_jp: "たなばたに ねがいごとを かきます。",
        example_romaji: "Tanabata ni negaigoto o kakimasu.",
        example_en: "I write wishes on Tanabata.",
        example_mm: "ကြယ်ပွဲတော်မှာ ဆန္ဒများရေးတယ်။"
    },
    {
        japanese: "ハロウィン",
        romaji: "harouin",
        pronunciation: "harouin",
        english: "Halloween",
        burmese: "ဟယ်လိုဝင်း",
        category: "time",
        example_jp: "ハロウィンに コスチュームを きます。",
        example_romaji: "Harouin ni kosuchuumu o kimasu.",
        example_en: "I wear a costume on Halloween.",
        example_mm: "ဟယ်လိုဝင်းမှာ ဝတ်စုံဝတ်တယ်။"
    },
    {
        japanese: "おぼん",
        romaji: "obon",
        pronunciation: "obon",
        english: "Bon Festival",
        burmese: "ဘိုန်ပွဲတော်",
        category: "time",
        example_jp: "おぼんに こころを もどります。",
        example_romaji: "Obon ni kokoro o modorimasu.",
        example_en: "I return to my hometown during Obon.",
        example_mm: "ဘိုန်ပွဲတော်မှာ ဇာတိသို့ပြန်တယ်။"
    },
    {
        japanese: "せいじんのひ",
        romaji: "seijin no hi",
        pronunciation: "seijin no hi",
        english: "Coming of Age Day",
        burmese: "အရွယ်ရောက်နေ့",
        category: "time",
        example_jp: "せいじんのひに ふくを きます。",
        example_romaji: "Seijin no hi ni fuku o kimasu.",
        example_en: "I wear formal clothes on Coming of Age Day.",
        example_mm: "အရွယ်ရောက်နေ့မှာ ဝတ်စုံဝတ်တယ်။"
    },
    {
        japanese: "けんこくきねんのひ",
        romaji: "kenkoku kinen no hi",
        pronunciation: "kenkoku kinen no hi",
        english: "National Foundation Day",
        burmese: "နိုင်ငံတည်ထောင်ရေးနေ့",
        category: "time",
        example_jp: "けんこくきねんのひは きゅうじつです。",
        example_romaji: "Kenkoku kinen no hi wa kyuujitsu desu.",
        example_en: "National Foundation Day is a holiday.",
        example_mm: "နိုင်ငံတည်ထောင်ရေးနေ့ဟာ အားလပ်ရက်ပါ။"
    },
    {
        japanese: "しょうがつ",
        romaji: "shougatsu",
        pronunciation: "shougatsu",
        english: "New Year's (Japanese)",
        burmese: "ဂျပန်နှစ်သစ်ကူး",
        category: "time",
        example_jp: "しょうがつに おせちを たべます。",
        example_romaji: "Shougatsu ni osechi o tabemasu.",
        example_en: "I eat osechi on New Year's.",
        example_mm: "ဂျပန်နှစ်သစ်ကူးမှာ အိုဆဲချိစားတယ်။"
    },
    {
        japanese: "ご しゅうちゃん",
        romaji: "go shuuchan",
        pronunciation: "go shuuchan",
        english: "Labor Thanksgiving Day",
        burmese: "ကျေးဇူးတော်နေ့",
        category: "time",
        example_jp: "ご しゅうちゃんは きゅうじつです。",
        example_romaji: "Go shuuchan wa kyuujitsu desu.",
        example_en: "Labor Thanksgiving Day is a holiday.",
        example_mm: "ကျေးဇူးတော်နေ့ဟာ အားလပ်ရက်ပါ။"
    },

    // ========== WEATHER PHENOMENA / てんきげんしょう (6 words) ==========
    {
        japanese: "にじ",
        romaji: "niji",
        pronunciation: "niji",
        english: "rainbow",
        burmese: "သက်တံ",
        category: "weather",
        example_jp: "にじが でました。",
        example_romaji: "Niji ga demashita.",
        example_en: "A rainbow appeared.",
        example_mm: "သက်တံပေါ်တယ်။"
    },
    {
        japanese: "きり",
        romaji: "kiri",
        pronunciation: "kiri",
        english: "fog",
        burmese: "မြူ",
        category: "weather",
        example_jp: "きりが こいです。",
        example_romaji: "Kiri go koi desu.",
        example_en: "The fog is thick.",
        example_mm: "မြူထူတယ်။"
    },
    {
        japanese: "あらし",
        romaji: "arashi",
        pronunciation: "arashi",
        english: "storm",
        burmese: "မုန်တိုင်း",
        category: "weather",
        example_jp: "あらしが きます。",
        example_romaji: "Arashi ga kimasu.",
        example_en: "A storm is coming.",
        example_mm: "မုန်တိုင်းလာမယ်။"
    },
    {
        japanese: "だんぼう",
        romaji: "danbou",
        pronunciation: "danbou",
        english: "heating",
        burmese: "အပူပေးစနစ်",
        category: "house",
        example_jp: "だんぼうを つけます。",
        example_romaji: "Danbou o tsukemasu.",
        example_en: "I turn on the heating.",
        example_mm: "အပူပေးစနစ်ဖွင့်တယ်။"
    },
    {
        japanese: "れいぼう",
        romaji: "reibou",
        pronunciation: "reibou",
        english: "air conditioning (cooling)",
        burmese: "လေအေးပေးစနစ်",
        category: "house",
        example_jp: "れいぼうを つけます。",
        example_romaji: "Reibou o tsukemasu.",
        example_en: "I turn on the air conditioning.",
        example_mm: "လေအေးပေးစနစ်ဖွင့်တယ်။"
    },
    {
        japanese: "かわく",
        romaji: "kawaku",
        pronunciation: "kawaku",
        english: "to get dry",
        burmese: "ခြောက်သွေ့သည်",
        category: "verbs",
        example_jp: "せんたくものが かわきました。",
        example_romaji: "Sentakumono ga kawakimashita.",
        example_en: "The laundry got dry.",
        example_mm: "အဝတ်တွေ ခြောက်သွားတယ်။"
    },

    // ========== NATURAL FEATURES / しぜんとくちょう (7 words) ==========
    {
        japanese: "たき",
        romaji: "taki",
        pronunciation: "taki",
        english: "waterfall",
        burmese: "ရေတံခွန်",
        category: "nature",
        example_jp: "たきが きれいです。",
        example_romaji: "Taki ga kirei desu.",
        example_en: "The waterfall is beautiful.",
        example_mm: "ရေတံခွန်က လှပတယ်။"
    },
    {
        japanese: "もり",
        romaji: "mori",
        pronunciation: "mori",
        english: "forest",
        burmese: "တော",
        category: "nature",
        example_jp: "もりを さんぽします。",
        example_romaji: "Mori o sanpo shimasu.",
        example_en: "I take a walk in the forest.",
        example_mm: "တောထဲမှာ လမ်းလျှောက်တယ်။"
    },
    {
        japanese: "みずうみ",
        romaji: "mizuumi",
        pronunciation: "mizuumi",
        english: "lake",
        burmese: "အိုင်",
        category: "nature",
        example_jp: "みずうみで およぎます。",
        example_romaji: "Mizuumi de oyogimasu.",
        example_en: "I swim in the lake.",
        example_mm: "အိုင်ထဲမှာ ရေကူးတယ်။"
    },
    {
        japanese: "かわ",
        romaji: "kawa",
        pronunciation: "kawa",
        english: "river",
        burmese: "မြစ်",
        category: "nature",
        example_jp: "かわで さかなを つります。",
        example_romaji: "Kawa de sakana o tsurimasu.",
        example_en: "I fish in the river.",
        example_mm: "မြစ်ထဲမှာ ငါးမျှားတယ်။"
    },
    {
        japanese: "どうくつ",
        romaji: "doukutsu",
        pronunciation: "doukutsu",
        english: "cave",
        burmese: "လိုဏ်ဂူ",
        category: "nature",
        example_jp: "どうくつを たんけんします。",
        example_romaji: "Doukutsu o tanken shimasu.",
        example_en: "I explore the cave.",
        example_mm: "လိုဏ်ဂူကို စူးစမ်းတယ်။"
    },
    {
        japanese: "しま",
        romaji: "shima",
        pronunciation: "shima",
        english: "island",
        burmese: "ကျွန်း",
        category: "places",
        example_jp: "しまに いきました。",
        example_romaji: "Shima ni ikimashita.",
        example_en: "I went to an island.",
        example_mm: "ကျွန်းကိုသွားတယ်။"
    },
    {
        japanese: "さばく",
        romaji: "sabaku",
        pronunciation: "sabaku",
        english: "desert",
        burmese: "သဲကန္တာရ",
        category: "nature",
        example_jp: "さばくは あついです。",
        example_romaji: "Sabaku wa atsui desu.",
        example_en: "The desert is hot.",
        example_mm: "သဲကန္တာရက ပူတယ်။"
    },

    // ========== ENVIRONMENT / かんきょう (8 words) ==========
    {
        japanese: "かんきょう",
        romaji: "kankyou",
        pronunciation: "kankyou",
        english: "environment",
        burmese: "ပတ်ဝန်းကျင်",
        category: "nature",
        example_jp: "かんきょうを まもります。",
        example_romaji: "Kankyou o mamorimasu.",
        example_en: "I protect the environment.",
        example_mm: "ပတ်ဝန်းကျင်ကို ကာကွယ်တယ်။"
    },
    {
        japanese: "ごみ",
        romaji: "gomi",
        pronunciation: "gomi",
        english: "garbage/trash",
        burmese: "အမှိုက်",
        category: "misc",
        example_jp: "ごみを すてます。",
        example_romaji: "Gomi o sutemasu.",
        example_en: "I throw away trash.",
        example_mm: "အမှိုက်ပစ်တယ်။"
    },
    {
        japanese: "リサイクル",
        romaji: "risaikuru",
        pronunciation: "risaikuru",
        english: "recycling",
        burmese: "ပြန်လည်အသုံးပြုခြင်း",
        category: "misc",
        example_jp: "リサイクルを します。",
        example_romaji: "Risaikuru o shimasu.",
        example_en: "I recycle.",
        example_mm: "ပြန်လည်အသုံးပြုတယ်။"
    },
    {
        japanese: "エネルギー",
        romaji: "enerugii",
        pronunciation: "enerugii",
        english: "energy",
        burmese: "စွမ်းအင်",
        category: "misc",
        example_jp: "エネルギーを せつやくします。",
        example_romaji: "Enerugii o setsuyaku shimasu.",
        example_en: "I save energy.",
        example_mm: "စွမ်းအင်ချွေတာတယ်။"
    },
    {
        japanese: "たいよう",
        romaji: "taiyou",
        pronunciation: "taiyou",
        english: "sun",
        burmese: "နေ",
        category: "nature",
        example_jp: "たいようが のぼります。",
        example_romaji: "Taiyou ga noborimasu.",
        example_en: "The sun rises.",
        example_mm: "နေထွက်တယ်။"
    },
    {
        japanese: "つき",
        romaji: "tsuki",
        pronunciation: "tsuki",
        english: "moon",
        burmese: "လ",
        category: "nature",
        example_jp: "つきが きれいです。",
        example_romaji: "Tsuki ga kirei desu.",
        example_en: "The moon is beautiful.",
        example_mm: "လဟာ လှပတယ်။"
    },
    {
        japanese: "ほし",
        romaji: "hoshi",
        pronunciation: "hoshi",
        english: "star",
        burmese: "ကြယ်",
        category: "nature",
        example_jp: "よる ほしが みえます。",
        example_romaji: "Yoru hoshi ga miemasu.",
        example_en: "I can see stars at night.",
        example_mm: "ညမှာ ကြယ်တွေမြင်ရတယ်။"
    },
    {
        japanese: "そら",
        romaji: "sora",
        pronunciation: "sora",
        english: "sky",
        burmese: "ကောင်းကင်",
        category: "nature",
        example_jp: "そらが あおいです。",
        example_romaji: "Sora ga aoi desu.",
        example_en: "The sky is blue.",
        example_mm: "ကောင်းကင်က အပြာရောင်ပါ။"
    },

    // ========== RENTING / ちんたい (6 words) ==========
    {
        japanese: "ちんたい",
        romaji: "chintai",
        pronunciation: "chintai",
        english: "rental",
        burmese: "ငှားရမ်းခြင်း",
        category: "misc",
        example_jp: "アパートを ちんたいします。",
        example_romaji: "Apaato o chintai shimasu.",
        example_en: "I rent an apartment.",
        example_mm: "တိုက်ခန်းငှားတယ်။"
    },
    {
        japanese: "ちんりょう",
        romaji: "chinryou",
        pronunciation: "chinryou",
        english: "rent fee",
        burmese: "အိမ်ငှားခ",
        category: "shopping",
        example_jp: "ちんりょうを はらいます。",
        example_romaji: "Chinryou o haraimasu.",
        example_en: "I pay the rent.",
        example_mm: "အိမ်ငှားခ ပေးတယ်။"
    },
    {
        japanese: "しききん",
        romaji: "shikikin",
        pronunciation: "shikikin",
        english: "deposit",
        burmese: "အပ်ငွေ",
        category: "shopping",
        example_jp: "しききんを はらいます。",
        example_romaji: "Shikikin o haraimasu.",
        example_en: "I pay the deposit.",
        example_mm: "အပ်ငွေပေးတယ်။"
    },
    {
        japanese: "たいきん",
        romaji: "taikin",
        pronunciation: "taikin",
        english: "key money",
        burmese: "သော့ငွေ",
        category: "shopping",
        example_jp: "たいきんが かかります。",
        example_romaji: "Taikin ga kakarimasu.",
        example_en: "Key money is required.",
        example_mm: "သော့ငွေလိုအပ်တယ်။"
    },
    {
        japanese: "やちん",
        romaji: "yachin",
        pronunciation: "yachin",
        english: "monthly rent",
        burmese: "လစဉ်အိမ်ငှားခ",
        category: "shopping",
        example_jp: "やちんは まいげつ はらいます。",
        example_romaji: "Yachin wa maitsugu haraimasu.",
        example_en: "I pay the monthly rent each month.",
        example_mm: "လစဉ်အိမ်ငှားခကို လစဉ်ပေးတယ်။"
    },
    {
        japanese: "きゃんせる",
        romaji: "kyanseru",
        pronunciation: "kyanseru",
        english: "cancel",
        burmese: "ဖျက်သိမ်းခြင်း",
        category: "misc",
        example_jp: "よやくを きゃんせるします。",
        example_romaji: "Yoyaku o kyanseru shimasu.",
        example_en: "I cancel the reservation.",
        example_mm: "အကြိုဘွတ်ခ်ဖျက်သိမ်းတယ်။"
    },
        // ========== CONTRACT / けいやく (6 words) ==========
    {
        japanese: "けいやく",
        romaji: "keiyaku",
        pronunciation: "keiyaku",
        english: "contract",
        burmese: "စာချုပ်",
        category: "work",
        example_jp: "けいやくに サインします。",
        example_romaji: "Keiyaku ni sain shimasu.",
        example_en: "I sign the contract.",
        example_mm: "စာချုပ်မှာ လက်မှတ်ထိုးတယ်။"
    },
    {
        japanese: "サイン",
        romaji: "sain",
        pronunciation: "sain",
        english: "signature",
        burmese: "လက်မှတ်",
        category: "work",
        example_jp: "ここに サインを おねがいします。",
        example_romaji: "Koko ni sain o onegai shimasu.",
        example_en: "Please sign here.",
        example_mm: "ဒီမှာ ကျေးဇူးပြု၍ လက်မှတ်ထိုးပါ။"
    },
    {
        japanese: "きそく",
        romaji: "kisoku",
        pronunciation: "kisoku",
        english: "rules",
        burmese: "စည်းမျဉ်းစည်းကမ်းများ",
        category: "misc",
        example_jp: "きそくを まもります。",
        example_romaji: "Kisoku o mamorimasu.",
        example_en: "I follow the rules.",
        example_mm: "စည်းမျဉ်းစည်းကမ်းတွေကို လိုက်နာတယ်။"
    },
    {
        japanese: "やくそく",
        romaji: "yakusoku",
        pronunciation: "yakusoku",
        english: "promise",
        burmese: "ကတိ",
        category: "misc",
        example_jp: "やくそくを まもります。",
        example_romaji: "Yakusoku o mamorimasu.",
        example_en: "I keep my promise.",
        example_mm: "ကတိကို စောင့်ထိန်းတယ်။"
    },
    {
        japanese: "もうしこみ",
        romaji: "moushikomi",
        pronunciation: "moushikomi",
        english: "application",
        burmese: "လျှောက်လွှာ",
        category: "work",
        example_jp: "もうしこみを だします。",
        example_romaji: "Moushikomi o dashimasu.",
        example_en: "I submit an application.",
        example_mm: "လျှောက်လွှာတင်တယ်။"
    },
    {
        japanese: "しょるい",
        romaji: "shorui",
        pronunciation: "shorui",
        english: "documents",
        burmese: "စာရွက်စာတမ်းများ",
        category: "work",
        example_jp: "しょるいを よういします。",
        example_romaji: "Shorui o youi shimasu.",
        example_en: "I prepare documents.",
        example_mm: "စာရွက်စာတမ်းတွေ ပြင်ဆင်တယ်။"
    },

    // ========== MONEY / おかね (8 words) ==========
    {
        japanese: "おかね",
        romaji: "okane",
        pronunciation: "okane",
        english: "money",
        burmese: "ပိုက်ဆံ",
        category: "shopping",
        example_jp: "おかねが たりません。",
        example_romaji: "Okane ga tarimasen.",
        example_en: "I don't have enough money.",
        example_mm: "ပိုက်ဆံမလုံလောက်ဘူး။"
    },
    {
        japanese: "かへい",
        romaji: "kahei",
        pronunciation: "kahei",
        english: "currency",
        burmese: "ငွေကြေး",
        category: "shopping",
        example_jp: "にほんの かへいは えん です。",
        example_romaji: "Nihon no kahei wa en desu.",
        example_en: "Japan's currency is yen.",
        example_mm: "ဂျပန်ငွေကြေးက ယန်းပါ။"
    },
    {
        japanese: "えん",
        romaji: "en",
        pronunciation: "en",
        english: "yen (Japanese currency)",
        burmese: "ယန်း",
        category: "shopping",
        example_jp: "せんえん ください。",
        example_romaji: "Sen en kudasai.",
        example_en: "1000 yen, please.",
        example_mm: "ယန်း ၁၀၀၀ ပေးပါ။"
    },
    {
        japanese: "ドル",
        romaji: "doru",
        pronunciation: "doru",
        english: "dollar",
        burmese: "ဒေါ်လာ",
        category: "shopping",
        example_jp: "アメリカの かへいは ドルです。",
        example_romaji: "Amerika no kahei wa doru desu.",
        example_en: "America's currency is the dollar.",
        example_mm: "အမေရိကန်ငွေကြေးက ဒေါ်လာပါ။"
    },
    {
        japanese: "つりせん",
        romaji: "turisen",
        pronunciation: "turisen",
        english: "change (money)",
        burmese: "ပြန်ငွေ",
        category: "shopping",
        example_jp: "つりせんを おねがいします。",
        example_romaji: "Turisen o onegai shimasu.",
        example_en: "Please give me change.",
        example_mm: "ကျေးဇူးပြု၍ ပြန်ငွေပေးပါ။"
    },
    {
        japanese: "よびん",
        romaji: "yobin",
        pronunciation: "yobin",
        english: "savings",
        burmese: "စုဆောင်းငွေ",
        category: "shopping",
        example_jp: "よびんが あります。",
        example_romaji: "Yobin ga arimasu.",
        example_en: "I have savings.",
        example_mm: "စုဆောင်းငွေရှိတယ်။"
    },
    {
        japanese: "しきん",
        romaji: "shikin",
        pronunciation: "shikin",
        english: "funds",
        burmese: "ရန်ပုံငွေ",
        category: "shopping",
        example_jp: "しきんが ひつようです。",
        example_romaji: "Shikin ga hitsuyou desu.",
        example_en: "Funds are necessary.",
        example_mm: "ရန်ပုံငွေလိုအပ်တယ်။"
    },
    {
        japanese: "ほけん",
        romaji: "hoken",
        pronunciation: "hoken",
        english: "insurance",
        burmese: "အာမခံ",
        category: "misc",
        example_jp: "ほけんに はいります。",
        example_romaji: "Hoken ni hairimasu.",
        example_en: "I get insurance.",
        example_mm: "အာမခံဝင်တယ်။"
    },

    // ========== TRANSPORTATION TICKETS / うんちゅうけん (5 words) ==========
    {
        japanese: "きっぷ",
        romaji: "kippu",
        pronunciation: "kippu",
        english: "ticket",
        burmese: "လက်မှတ်",
        category: "transport",
        example_jp: "きっぷを かいます。",
        example_romaji: "Kippu o kaimasu.",
        example_en: "I buy a ticket.",
        example_mm: "လက်မှတ်ဝယ်တယ်။"
    },
    {
        japanese: "ていきけん",
        romaji: "teikiken",
        pronunciation: "teikiken",
        english: "commuter pass",
        burmese: "လစဉ်ဖြတ်ပေါက်",
        category: "transport",
        example_jp: "ていきけんで がっこうに いきます。",
        example_romaji: "Teikiken de gakkou ni ikimasu.",
        example_en: "I go to school with a commuter pass.",
        example_mm: "လစဉ်ဖြတ်ပေါက်နဲ့ ကျောင်းသွားတယ်။"
    },
    {
        japanese: "かいいれ",
        romaji: "kaiire",
        pronunciation: "kaiire",
        english: "ticket machine",
        burmese: "လက်မှတ်စက်",
        category: "transport",
        example_jp: "かいいれで きっぷを かいます。",
        example_romaji: "Kaiire de kippu o kaimasu.",
        example_en: "I buy a ticket from the ticket machine.",
        example_mm: "လက်မှတ်စက်ကနေ လက်မှတ်ဝယ်တယ်။"
    },
    {
        japanese: "のりば",
        romaji: "noriba",
        pronunciation: "noriba",
        english: "boarding area/platform",
        burmese: "စီးရန်နေရာ",
        category: "transport",
        example_jp: "のりばは どこですか。",
        example_romaji: "Noriba wa doko desu ka.",
        example_en: "Where is the boarding platform?",
        example_mm: "စီးရန်နေရာက ဘယ်မှာလဲ။"
    },
    {
        japanese: "おりば",
        romaji: "oriba",
        pronunciation: "oriba",
        english: "alighting area",
        burmese: "ဆင်းရန်နေရာ",
        category: "transport",
        example_jp: "つぎの おりばで おります。",
        example_romaji: "Tsugi no oriba de orimasu.",
        example_en: "I get off at the next alighting area.",
        example_mm: "နောက်ဆင်းရန်နေရာမှာ ဆင်းတယ်။"
    },

    // ========== SHOPPING PHRASES / かいものフレーズ (8 words) ==========
    {
        japanese: "いくらですか",
        romaji: "ikura desu ka",
        pronunciation: "ikura desu ka",
        english: "How much is it?",
        burmese: "ဘယ်လောက်လဲ",
        category: "shopping",
        example_jp: "この ぼうしは いくらですか。",
        example_romaji: "Kono boushi wa ikura desu ka.",
        example_en: "How much is this hat?",
        example_mm: "ဒီဦးထုပ်က ဘယ်လောက်လဲ။"
    },
    {
        japanese: "ください",
        romaji: "kudasai",
        pronunciation: "kudasai",
        english: "Please give me",
        burmese: "ပေးပါ",
        category: "shopping",
        example_jp: "これを ください。",
        example_romaji: "Kore o kudasai.",
        example_en: "Please give me this.",
        example_mm: "ဒါကို ပေးပါ။"
    },
    {
        japanese: "みせてください",
        romaji: "misete kudasai",
        pronunciation: "misete kudasai",
        english: "Please show me",
        burmese: "ပြပါ",
        category: "shopping",
        example_jp: "あの かばんを みせてください。",
        example_romaji: "Ano kaban o misete kudasai.",
        example_en: "Please show me that bag.",
        example_mm: "ဒီအိတ်ကို ပြပါ။"
    },
    {
        japanese: "ためしてもいいですか",
        romaji: "tameshite mo ii desu ka",
        pronunciation: "tameshite mo ii desu ka",
        english: "May I try it?",
        burmese: "စမ်းကြည့်လို့ရမလား",
        category: "shopping",
        example_jp: "この くつを ためしても いいですか。",
        example_romaji: "Kono kutsu o tameshite mo ii desu ka.",
        example_en: "May I try these shoes?",
        example_mm: "ဒီဖိနပ်ကို စမ်းကြည့်လို့ရမလား။"
    },
    {
        japanese: "サイズは ありますか",
        romaji: "saizu wa arimasu ka",
        pronunciation: "saizu wa arimasu ka",
        english: "Do you have this size?",
        burmese: "ဒီဆိုက်ရှိလား",
        category: "shopping",
        example_jp: "Mサイズは ありますか。",
        example_romaji: "Emu saizu wa arimasu ka.",
        example_en: "Do you have medium size?",
        example_mm: "M ဆိုက်ရှိလား။"
    },
    {
        japanese: "ちがう いろは ありますか",
        romaji: "chigau iro wa arimasu ka",
        pronunciation: "chigau iro wa arimasu ka",
        english: "Do you have a different color?",
        burmese: "အရောင်မတူတာရှိလား",
        category: "shopping",
        example_jp: "ちがう いろは ありますか。",
        example_romaji: "Chigau iro wa arimasu ka.",
        example_en: "Do you have a different color?",
        example_mm: "အရောင်မတူတာရှိလား။"
    },
    {
        japanese: "おねがいします",
        romaji: "onegaishimasu",
        pronunciation: "onegaishimasu",
        english: "Please (polite)",
        burmese: "ကျေးဇူးပြု၍",
        category: "greetings",
        example_jp: "これを おねがいします。",
        example_romaji: "Kore o onegaishimasu.",
        example_en: "This, please.",
        example_mm: "ဒါကို ကျေးဇူးပြု၍ ပေးပါ။"
    },
    {
        japanese: "ありがとうございました",
        romaji: "arigatou gozaimashita",
        pronunciation: "arigatou gozaimashita",
        english: "Thank you (past)",
        burmese: "ကျေးဇူးတင်ပါတယ် (ဖြစ်ပြီး)",
        category: "greetings",
        example_jp: "どうも ありがとうございました。",
        example_romaji: "Doumo arigatou gozaimashita.",
        example_en: "Thank you very much.",
        example_mm: "ကျေးဇူးအများကြီးတင်ပါတယ်။"
    },

    // ========== APARTMENT / アパート (8 words) ==========
    {
        japanese: "アパート",
        romaji: "apaato",
        pronunciation: "apaato",
        english: "apartment",
        burmese: "တိုက်ခန်း",
        category: "house",
        example_jp: "アパートに すんでいます。",
        example_romaji: "Apaato ni sunde imasu.",
        example_en: "I live in an apartment.",
        example_mm: "တိုက်ခန်းမှာ နေတယ်။"
    },
    {
        japanese: "マンション",
        romaji: "manshon",
        pronunciation: "manshon",
        english: "condominium",
        burmese: "ကွန်ဒို",
        category: "house",
        example_jp: "マンションは たかいです。",
        example_romaji: "Manshon wa takai desu.",
        example_en: "The condominium is tall.",
        example_mm: "ကွန်ဒိုက မြင့်တယ်။"
    },
    {
        japanese: "ベランダ",
        romaji: "beranda",
        pronunciation: "beranda",
        english: "balcony",
        burmese: "လသာဆောင်",
        category: "house",
        example_jp: "ベランダで せんたくを します。",
        example_romaji: "Beranda de sentaku o shimasu.",
        example_en: "I do laundry on the balcony.",
        example_mm: "လသာဆောင်မှာ အဝတ်လျှော်တယ်။"
    },
    {
        japanese: "げんかん",
        romaji: "genkan",
        pronunciation: "genkan",
        english: "entrance",
        burmese: "အိမ်ဝင်ပေါက်",
        category: "house",
        example_jp: "げんかんに くつを ぬぎます。",
        example_romaji: "Genkan ni kutsu o nugimasu.",
        example_en: "I take off my shoes at the entrance.",
        example_mm: "အိမ်ဝင်ပေါက်မှာ ဖိနပ်ချွတ်တယ်။"
    },
    {
        japanese: "ろうか",
        romaji: "rouka",
        pronunciation: "rouka",
        english: "hallway",
        burmese: "စင်္ကြံ",
        category: "house",
        example_jp: "ろうかを あるきます。",
        example_romaji: "Rouka o arukimasu.",
        example_en: "I walk in the hallway.",
        example_mm: "စင်္ကြံထဲမှာ လမ်းလျှောက်တယ်။"
    },
    {
        japanese: "かいだん",
        romaji: "kaidan",
        pronunciation: "kaidan",
        english: "stairs",
        burmese: "လှေကား",
        category: "house",
        example_jp: "かいだんを のぼります。",
        example_romaji: "Kaidan o noborimasu.",
        example_en: "I go up the stairs.",
        example_mm: "လှေကားတက်တယ်။"
    },
    {
        japanese: "エレベーター",
        romaji: "erebeetaa",
        pronunciation: "erebeetaa",
        english: "elevator",
        burmese: "ဓာတ်လှေကား",
        category: "house",
        example_jp: "エレベーターで うえに いきます。",
        example_romaji: "Erebeetaa de ue ni ikimasu.",
        example_en: "I go up by elevator.",
        example_mm: "ဓာတ်လှေကားနဲ့ အပေါ်တက်တယ်။"
    },
    {
        japanese: "ちか",
        romaji: "chika",
        pronunciation: "chika",
        english: "basement",
        burmese: "မြေအောက်ထပ်",
        category: "house",
        example_jp: "ちかで くるまを とめます。",
        example_romaji: "Chika de kuruma o tomemasu.",
        example_en: "I park the car in the basement.",
        example_mm: "မြေအောက်ထပ်မှာ ကားရပ်တယ်။"
    },
        // ========== HOME APPLIANCES / かでん (10 words) ==========
    {
        japanese: "れいぞうこ",
        romaji: "reizouko",
        pronunciation: "reizouko",
        english: "refrigerator",
        burmese: "ရေခဲသေတ္တာ",
        category: "house",
        example_jp: "れいぞうこに たべものを いれます。",
        example_romaji: "Reizouko ni tabemono o iremasu.",
        example_en: "I put food in the refrigerator.",
        example_mm: "ရေခဲသေတ္တာထဲ အစားအစာထည့်တယ်။"
    },
    {
        japanese: "でんしレンジ",
        romaji: "denshirenji",
        pronunciation: "denshirenji",
        english: "microwave oven",
        burmese: "မိုက်ခရိုဝေ့",
        category: "house",
        example_jp: "でんしレンジで あたためます。",
        example_romaji: "Denshirenji de atatamemasu.",
        example_en: "I heat it in the microwave.",
        example_mm: "မိုက်ခရိုဝေ့နဲ့ အပူပေးတယ်။"
    },
    {
        japanese: "せんたくき",
        romaji: "sentakuki",
        pronunciation: "sentakuki",
        english: "washing machine",
        burmese: "အဝတ်လျှော်စက်",
        category: "house",
        example_jp: "せんたくきで せんたくを します。",
        example_romaji: "Sentakuki de sentaku o shimasu.",
        example_en: "I do laundry with the washing machine.",
        example_mm: "အဝတ်လျှော်စက်နဲ့ အဝတ်လျှော်တယ်။"
    },
    {
        japanese: "そうじき",
        romaji: "soujiki",
        pronunciation: "soujiki",
        english: "vacuum cleaner",
        burmese: "ဖုန်စုပ်စက်",
        category: "house",
        example_jp: "そうじきで へやを そうじします。",
        example_romaji: "Soujiki de heya o souji shimasu.",
        example_en: "I clean the room with the vacuum cleaner.",
        example_mm: "ဖုန်စုပ်စက်နဲ့ အခန်းသန့်ရှင်းရေးလုပ်တယ်။"
    },
    {
        japanese: "エアコン",
        romaji: "eakon",
        pronunciation: "eakon",
        english: "air conditioner",
        burmese: "လေအေးပေးစက်",
        category: "house",
        example_jp: "なつは エアコンを つけます。",
        example_romaji: "Natsu wa eakon o tsukemasu.",
        example_en: "I turn on the air conditioner in summer.",
        example_mm: "နွေရာသီမှာ လေအေးပေးစက်ဖွင့်တယ်။"
    },
    {
        japanese: "こたつ",
        romaji: "kotatsu",
        pronunciation: "kotatsu",
        english: "heated table",
        burmese: "ကိုတာဆု (ဂျပန်အပူပေးစားပွဲ)",
        category: "house",
        example_jp: "ふゆは こたつで あたたまります。",
        example_romaji: "Fuyu wa kotatsu de atatamarimasu.",
        example_en: "I warm up with the kotatsu in winter.",
        example_mm: "ဆောင်းရာသီမှာ ကိုတာဆုနဲ့ နွေးတယ်။"
    },
    {
        japanese: "すいとうき",
        romaji: "suitouki",
        pronunciation: "suitouki",
        english: "water heater",
        burmese: "ရေပူပေးစက်",
        category: "house",
        example_jp: "すいとうきで おゆを わかします。",
        example_romaji: "Suitouki de oyu o wakashimasu.",
        example_en: "I boil water with the water heater.",
        example_mm: "ရေပူပေးစက်နဲ့ ရေပူတည်တယ်။"
    },
    {
        japanese: "アイロン",
        romaji: "airon",
        pronunciation: "airon",
        english: "iron",
        burmese: "မီးပူ",
        category: "house",
        example_jp: "アイロンで シャツを のばします。",
        example_romaji: "Airon de shatsu o nobashimasu.",
        example_en: "I iron the shirt.",
        example_mm: "မီးပူနဲ့ ရှပ်အင်္ကျီပူတယ်။"
    },
    {
        japanese: "どらいやー",
        romaji: "doraiyaa",
        pronunciation: "doraiyaa",
        english: "hair dryer",
        burmese: "ဆံပင်လေမှုတ်စက်",
        category: "house",
        example_jp: "どらいやーで かみを かわかします。",
        example_romaji: "Doraiyaa de kami o kawakashimasu.",
        example_en: "I dry my hair with the hair dryer.",
        example_mm: "ဆံပင်လေမှုတ်စက်နဲ့ ဆံပင်ခြောက်အောင်လုပ်တယ်။"
    },
    {
        japanese: "でんきポット",
        romaji: "denkipotto",
        pronunciation: "denkipotto",
        english: "electric kettle",
        burmese: "လျှပ်စစ်ရေနွေးအိုး",
        category: "house",
        example_jp: "でんきポットで おちゃを いれます。",
        example_romaji: "Denkipotto de ocha o iremasu.",
        example_en: "I make tea with the electric kettle.",
        example_mm: "လျှပ်စစ်ရေနွေးအိုးနဲ့ လက်ဖက်ရည်ဖျော်တယ်။"
    },

    // ========== SEASONS / きせつ (8 words) ==========
    {
        japanese: "はる",
        romaji: "haru",
        pronunciation: "haru",
        english: "spring",
        burmese: "နွေဦး",
        category: "weather",
        example_jp: "はるは あたたかいです。",
        example_romaji: "Haru wa atatakai desu.",
        example_en: "Spring is warm.",
        example_mm: "နွေဦးက နွေးတယ်။"
    },
    {
        japanese: "なつ",
        romaji: "natsu",
        pronunciation: "natsu",
        english: "summer",
        burmese: "နွေ",
        category: "weather",
        example_jp: "なつは あついです。",
        example_romaji: "Natsu wa atsui desu.",
        example_en: "Summer is hot.",
        example_mm: "နွေရာသီက ပူတယ်။"
    },
    {
        japanese: "あき",
        romaji: "aki",
        pronunciation: "aki",
        english: "autumn",
        burmese: "ဆောင်းဦး",
        category: "weather",
        example_jp: "あきは すずしいです。",
        example_romaji: "Aki wa suzushii desu.",
        example_en: "Autumn is cool.",
        example_mm: "ဆောင်းဦးက အေးမြတယ်။"
    },
    {
        japanese: "ふゆ",
        romaji: "fuyu",
        pronunciation: "fuyu",
        english: "winter",
        burmese: "ဆောင်း",
        category: "weather",
        example_jp: "ふゆは さむいです。",
        example_romaji: "Fuyu wa samui desu.",
        example_en: "Winter is cold.",
        example_mm: "ဆောင်းရာသီက အေးတယ်။"
    },
    {
        japanese: "きせつ",
        romaji: "kisetsu",
        pronunciation: "kisetsu",
        english: "season",
        burmese: "ရာသီ",
        category: "weather",
        example_jp: "にほんには よんきせつが あります。",
        example_romaji: "Nihon ni wa yonkisetsu ga arimasu.",
        example_en: "Japan has four seasons.",
        example_mm: "ဂျပန်မှာ ရာသီလေးခုရှိတယ်။"
    },
    {
        japanese: "うめ",
        romaji: "ume",
        pronunciation: "ume",
        english: "plum (seasonal)",
        burmese: "ဇီးသီး (ရာသီအလိုက်)",
        category: "food",
        example_jp: "うめの はなが さきます。",
        example_romaji: "Ume no hana ga sakimasu.",
        example_en: "Plum blossoms bloom.",
        example_mm: "ဇီးပန်းတွေ ပွင့်တယ်။"
    },
    {
        japanese: "もみじ",
        romaji: "momiji",
        pronunciation: "momiji",
        english: "autumn leaves",
        burmese: "ဆောင်းဦးရွက်များ",
        category: "nature",
        example_jp: "もみじが きれいです。",
        example_romaji: "Momiji ga kirei desu.",
        example_en: "The autumn leaves are beautiful.",
        example_mm: "ဆောင်းဦးရွက်တွေ လှပတယ်။"
    },
    {
        japanese: "さくら",
        romaji: "sakura",
        pronunciation: "sakura",
        english: "cherry blossoms",
        burmese: "ချယ်ရီပန်းများ",
        category: "nature",
        example_jp: "はるに さくらが さきます。",
        example_romaji: "Haru ni sakura ga sakimasu.",
        example_en: "Cherry blossoms bloom in spring.",
        example_mm: "နွေဦးမှာ ချယ်ရီပန်းတွေ ပွင့်တယ်။"
    },

    // ========== HEALTHCARE / いりょう (8 words) ==========
    {
        japanese: "いりょう",
        romaji: "iryou",
        pronunciation: "iryou",
        english: "medical care",
        burmese: "ကျန်းမာရေးစောင့်ရှောက်မှု",
        category: "health",
        example_jp: "いりょうが ひつようです。",
        example_romaji: "Iryou ga hitsuyou desu.",
        example_en: "Medical care is necessary.",
        example_mm: "ကျန်းမာရေးစောင့်ရှောက်မှု လိုအပ်တယ်။"
    },
    {
        japanese: "かぜ",
        romaji: "kaze",
        pronunciation: "kaze",
        english: "cold (illness)",
        burmese: "အအေးမိ",
        category: "health",
        example_jp: "かぜを ひきました。",
        example_romaji: "Kaze o hikimashita.",
        example_en: "I caught a cold.",
        example_mm: "အအေးမိတယ်။"
    },
    {
        japanese: "インフルエンザ",
        romaji: "infuruenza",
        pronunciation: "infuruenza",
        english: "influenza/flu",
        burmese: "တုပ်ကွေး",
        category: "health",
        example_jp: "インフルエンザに なりました。",
        example_romaji: "Infuruenza ni narimashita.",
        example_en: "I got the flu.",
        example_mm: "တုပ်ကွေးဖြစ်တယ်။"
    },
    {
        japanese: "ねつ",
        romaji: "netsu",
        pronunciation: "netsu",
        english: "fever",
        burmese: "အဖျား",
        category: "health",
        example_jp: "ねつが あります。",
        example_romaji: "Netsu ga arimasu.",
        example_en: "I have a fever.",
        example_mm: "အဖျားရှိတယ်။"
    },
    {
        japanese: "いたい",
        romaji: "itai",
        pronunciation: "itai",
        english: "painful",
        burmese: "နာကျင်သည်",
        category: "health",
        example_jp: "のどが いたいです。",
        example_romaji: "Nodo ga itai desu.",
        example_en: "My throat hurts.",
        example_mm: "လည်ချောင်းနာတယ်။"
    },
    {
        japanese: "くすり",
        romaji: "kusuri",
        pronunciation: "kusuri",
        english: "medicine",
        burmese: "ဆေး",
        category: "health",
        example_jp: "くすりを のみます。",
        example_romaji: "Kusuri o nomimasu.",
        example_en: "I take medicine.",
        example_mm: "ဆေးသောက်တယ်။"
    },
    {
        japanese: "びょういん",
        romaji: "byouin",
        pronunciation: "byouin",
        english: "hospital",
        burmese: "ဆေးရုံ",
        category: "places",
        example_jp: "びょういんに いきます。",
        example_romaji: "Byouin ni ikimasu.",
        example_en: "I go to the hospital.",
        example_mm: "ဆေးရုံသွားတယ်။"
    },
    {
        japanese: "しんさつ",
        romaji: "shinsatsu",
        pronunciation: "shinsatsu",
        english: "medical examination",
        burmese: "ဆေးစစ်ခြင်း",
        category: "health",
        example_jp: "しんさつを うけます。",
        example_romaji: "Shinsatsu o ukemasu.",
        example_en: "I have a medical examination.",
        example_mm: "ဆေးစစ်တယ်။"
    },

    // ========== DENTAL CARE / しか (6 words) ==========
    {
        japanese: "は",
        romaji: "ha",
        pronunciation: "ha",
        english: "tooth",
        burmese: "သွား",
        category: "health",
        example_jp: "はを みがきます。",
        example_romaji: "Ha o migakimasu.",
        example_en: "I brush my teeth.",
        example_mm: "သွားတိုက်တယ်။"
    },
    {
        japanese: "はいしゃ",
        romaji: "haisha",
        pronunciation: "haisha",
        english: "dentist",
        burmese: "သွားဆရာဝန်",
        category: "health",
        example_jp: "はいしゃに いきます。",
        example_romaji: "Haisha ni ikimasu.",
        example_en: "I go to the dentist.",
        example_mm: "သွားဆရာဝန်သွားတယ်။"
    },
    {
        japanese: "むしば",
        romaji: "mushiba",
        pronunciation: "mushiba",
        english: "cavity",
        burmese: "သွားပိုး",
        category: "health",
        example_jp: "むしばが あります。",
        example_romaji: "Mushiba ga arimasu.",
        example_en: "I have a cavity.",
        example_mm: "သွားပိုးရှိတယ်။"
    },
    {
        japanese: "ちりょう",
        romaji: "chiryou",
        pronunciation: "chiryou",
        english: "treatment",
        burmese: "ကုသမှု",
        category: "health",
        example_jp: "ちりょうを うけます。",
        example_romaji: "Chiryou o ukemasu.",
        example_en: "I receive treatment.",
        example_mm: "ကုသမှုခံယူတယ်။"
    },
    {
        japanese: "はいしゃいん",
        romaji: "haishain",
        pronunciation: "haishain",
        english: "dental clinic",
        burmese: "သွားဆေးခန်း",
        category: "places",
        example_jp: "はいしゃいんで はを みてもらいます。",
        example_romaji: "Haishain de ha o mite moraimasu.",
        example_en: "I get my teeth checked at the dental clinic.",
        example_mm: "သွားဆေးခန်းမှာ သွားစစ်တယ်။"
    },
    {
        japanese: "つめもの",
        romaji: "tsumemono",
        pronunciation: "tsumemono",
        english: "filling",
        burmese: "သွားဖာခြင်း",
        category: "health",
        example_jp: "つめものを します。",
        example_romaji: "Tsumemono o shimasu.",
        example_en: "I get a filling.",
        example_mm: "သွားဖာတယ်။"
    },

    // ========== POST OFFICE / ゆうびんきょく (7 words) ==========
    {
        japanese: "ゆうびんきょく",
        romaji: "yuubinkyoku",
        pronunciation: "yuubinkyoku",
        english: "post office",
        burmese: "စာတိုက်",
        category: "places",
        example_jp: "ゆうびんきょくに いきます。",
        example_romaji: "Yuubinkyoku ni ikimasu.",
        example_en: "I go to the post office.",
        example_mm: "စာတိုက်ကိုသွားတယ်။"
    },
    {
        japanese: "きって",
        romaji: "kitte",
        pronunciation: "kitte",
        english: "stamp",
        burmese: "စာပို့တံဆိပ်ခေါင်း",
        category: "shopping",
        example_jp: "きってを かいます。",
        example_romaji: "Kitte o kaimasu.",
        example_en: "I buy a stamp.",
        example_mm: "စာပို့တံဆိပ်ခေါင်းဝယ်တယ်။"
    },
    {
        japanese: "はがき",
        romaji: "hagaki",
        pronunciation: "hagaki",
        english: "postcard",
        burmese: "ပို့စကတ်",
        category: "shopping",
        example_jp: "はがきを おくります。",
        example_romaji: "Hagaki o okurimasu.",
        example_en: "I send a postcard.",
        example_mm: "ပို့စကတ်ပို့တယ်။"
    },
    {
        japanese: "ふうとう",
        romaji: "fuutou",
        pronunciation: "fuutou",
        english: "envelope",
        burmese: "စာအိတ်",
        category: "shopping",
        example_jp: "ふうとうに てがみを いれます。",
        example_romaji: "Fuutou ni tegami o iremasu.",
        example_en: "I put the letter in an envelope.",
        example_mm: "စာအိတ်ထဲ စာထည့်တယ်။"
    },
    {
        japanese: "ゆうびん",
        romaji: "yuubin",
        pronunciation: "yuubin",
        english: "mail/post",
        burmese: "စာပို့ခြင်း",
        category: "misc",
        example_jp: "ゆうびんで おくります。",
        example_romaji: "Yuubin de okurimasu.",
        example_en: "I send it by mail.",
        example_mm: "စာတိုက်မှတစ်ဆင့် ပို့တယ်။"
    },
    {
        japanese: "ゆうびんはこ",
        romaji: "yuubinhako",
        pronunciation: "yuubinhako",
        english: "mailbox",
        burmese: "စာပုံး",
        category: "misc",
        example_jp: "ゆうびんはこに てがみを いれます。",
        example_romaji: "Yuubinhako ni tegami o iremasu.",
        example_en: "I put the letter in the mailbox.",
        example_mm: "စာပုံးထဲ စာထည့်တယ်။"
    },
    {
        japanese: "おくる",
        romaji: "okuru",
        pronunciation: "okuru",
        english: "to send",
        burmese: "ပို့သည်",
        category: "verbs",
        example_jp: "てがみを おくります。",
        example_romaji: "Tegami o okurimasu.",
        example_en: "I send a letter.",
        example_mm: "စာပို့တယ်။"
    },
        // ========== SCHOOL SUBJECTS / がっこうのきょうか (10 words) ==========
    {
        japanese: "こくご",
        romaji: "kokugo",
        pronunciation: "kokugo",
        english: "Japanese language class",
        burmese: "ဂျပန်စာအတန်း",
        category: "school",
        example_jp: "こくごの じゅぎょうが すきです。",
        example_romaji: "Kokugo no jugyou ga suki desu.",
        example_en: "I like Japanese language class.",
        example_mm: "ဂျပန်စာအတန်းကို ကြိုက်တယ်။"
    },
    {
        japanese: "さんすう",
        romaji: "sansuu",
        pronunciation: "sansuu",
        english: "arithmetic/math",
        burmese: "ဂဏန်းသင်္ချာ",
        category: "school",
        example_jp: "さんすうの もんだいを ときます。",
        example_romaji: "Sansuu no mondai o tokimasu.",
        example_en: "I solve math problems.",
        example_mm: "ဂဏန်းသင်္ချာ ပုစ္ဆာတွေ ဖြေရှင်းတယ်။"
    },
    {
        japanese: "えいご",
        romaji: "eigo",
        pronunciation: "eigo",
        english: "English language",
        burmese: "အင်္ဂလိပ်စာ",
        category: "school",
        example_jp: "えいごを べんきょうします。",
        example_romaji: "Eigo o benkyou shimasu.",
        example_en: "I study English.",
        example_mm: "အင်္ဂလိပ်စာ လေ့လာတယ်။"
    },
    {
        japanese: "りか",
        romaji: "rika",
        pronunciation: "rika",
        english: "science",
        burmese: "သိပ္ပံ",
        category: "school",
        example_jp: "りかの じっけんを します。",
        example_romaji: "Rika no jikken o shimasu.",
        example_en: "I do science experiments.",
        example_mm: "သိပ္ပံစမ်းသပ်ချက်လုပ်တယ်။"
    },
    {
        japanese: "しゃかい",
        romaji: "shakai",
        pronunciation: "shakai",
        english: "social studies",
        burmese: "လူမှုရေးဘာသာ",
        category: "school",
        example_jp: "しゃかいで れきしを ならいます。",
        example_romaji: "Shakai de rekishi o naraimasu.",
        example_en: "I learn history in social studies.",
        example_mm: "လူမှုရေးဘာသာမှာ သမိုင်းသင်တယ်။"
    },
    {
        japanese: "たいいく",
        romaji: "taiiku",
        pronunciation: "taiiku",
        english: "physical education",
        burmese: "ကာယပညာ",
        category: "school",
        example_jp: "たいいくの じかんに うんどうします。",
        example_romaji: "Taiiku no jikan ni undou shimasu.",
        example_en: "I exercise during PE class.",
        example_mm: "ကာယပညာ အတန်းချိန်မှာ လေ့ကျင့်ခန်းလုပ်တယ်။"
    },
    {
        japanese: "おんがく",
        romaji: "ongaku",
        pronunciation: "ongaku",
        english: "music class",
        burmese: "ဂီတအတန်း",
        category: "school",
        example_jp: "おんがくで うたを うたいます。",
        example_romaji: "Ongaku de uta o utaimasu.",
        example_en: "I sing songs in music class.",
        example_mm: "ဂီတအတန်းမှာ သီချင်းဆိုတယ်။"
    },
    {
        japanese: "びじゅつ",
        romaji: "bijutsu",
        pronunciation: "bijutsu",
        english: "art class",
        burmese: "ပန်းချီအတန်း",
        category: "school",
        example_jp: "びじゅつで えを かきます。",
        example_romaji: "Bijutsu de e o kakimasu.",
        example_en: "I draw pictures in art class.",
        example_mm: "ပန်းချီအတန်းမှာ ပုံဆွဲတယ်။"
    },
    {
        japanese: "かていか",
        romaji: "kateika",
        pronunciation: "kateika",
        english: "home economics",
        burmese: "အိမ်တွင်းမှုပညာ",
        category: "school",
        example_jp: "かていかで りょうりを ならいます。",
        example_romaji: "Kateika de ryouri o naraimasu.",
        example_en: "I learn cooking in home economics.",
        example_mm: "အိမ်တွင်းမှုပညာမှာ ချက်ပြုတ်နည်းသင်တယ်။"
    },
    {
        japanese: "とくべつかつどう",
        romaji: "tokubetsukatsudou",
        pronunciation: "tokubetsukatsudou",
        english: "special activities/club",
        burmese: "အထူးလှုပ်ရှားမှု/ကလပ်",
        category: "school",
        example_jp: "とくべつかつどうに さんかします。",
        example_romaji: "Tokubetsukatsudou ni sanka shimasu.",
        example_en: "I participate in club activities.",
        example_mm: "ကလပ်လှုပ်ရှားမှုတွေမှာ ပါဝင်တယ်။"
    },

    // ========== SCHOOL FACILITIES / がっこうのしせつ (8 words) ==========
    {
        japanese: "こうてい",
        romaji: "koutei",
        pronunciation: "koutei",
        english: "schoolyard",
        burmese: "�ျောင်းဝင်း",
        category: "school",
        example_jp: "こうていで あそびます。",
        example_romaji: "Koutei de asobimasu.",
        example_en: "I play in the schoolyard.",
        example_mm: "ကျောင်းဝင်းထဲမှာ ကစားတယ်။"
    },
    {
        japanese: "たいいくかん",
        romaji: "taiikukan",
        pronunciation: "taiikukan",
        english: "gymnasium",
        burmese: "အားကစားရုံ",
        category: "school",
        example_jp: "たいいくかんで バスケを します。",
        example_romaji: "Taiikukan de basuke o shimasu.",
        example_en: "I play basketball in the gym.",
        example_mm: "အားကစားရုံမှာ ဘတ်စကတ်ဘောကစားတယ်။"
    },
    {
        japanese: "としょしつ",
        romaji: "toshoshitsu",
        pronunciation: "toshoshitsu",
        english: "library room",
        burmese: "စာကြည့်ခန်း",
        category: "school",
        example_jp: "としょしつで ほんを よみます。",
        example_romaji: "Toshoshitsu de hon o yomimasu.",
        example_en: "I read books in the library.",
        example_mm: "စာကြည့်ခန်းမှာ စာအုပ်ဖတ်တယ်။"
    },
    {
        japanese: "りかしつ",
        romaji: "rikashitsu",
        pronunciation: "rikashitsu",
        english: "science room",
        burmese: "သိပ္ပံခန်း",
        category: "school",
        example_jp: "りかしつで じっけんを します。",
        example_romaji: "Rikashitsu de jikken o shimasu.",
        example_en: "I do experiments in the science room.",
        example_mm: "သိပ္ပံခန်းမှာ စမ်းသပ်ချက်လုပ်တယ်။"
    },
    {
        japanese: "おんがくしつ",
        romaji: "ongakushitsu",
        pronunciation: "ongakushitsu",
        english: "music room",
        burmese: "ဂီတခန်း",
        category: "school",
        example_jp: "おんがくしつで ピアノを ひきます。",
        example_romaji: "Ongakushitsu de piano o hikimasu.",
        example_en: "I play piano in the music room.",
        example_mm: "ဂီတခန်းမှာ စန္ဒရားတီးတယ်။"
    },
    {
        japanese: "びじゅつしつ",
        romaji: "bijutsushitsu",
        pronunciation: "bijutsushitsu",
        english: "art room",
        burmese: "ပန်းချီခန်း",
        category: "school",
        example_jp: "びじゅつしつで えを かきます。",
        example_romaji: "Bijutsushitsu de e o kakimasu.",
        example_en: "I draw in the art room.",
        example_mm: "ပန်းချီခန်းမှာ ပုံဆွဲတယ်။"
    },
    {
        japanese: "ほけんしつ",
        romaji: "hokenshitsu",
        pronunciation: "hokenshitsu",
        english: "nurse's office",
        burmese: "သူနာပြုခန်း",
        category: "school",
        example_jp: "ほけんしつで やすみます。",
        example_romaji: "Hokenshitsu de yasumimasu.",
        example_en: "I rest in the nurse's office.",
        example_mm: "သူနာပြုခန်းမှာ အနားယူတယ်။"
    },
    {
        japanese: "しょくどう",
        romaji: "shokudou",
        pronunciation: "shokudou",
        english: "cafeteria",
        burmese: "ထမင်းစားခန်း",
        category: "school",
        example_jp: "しょくどうで ひるごはんを たべます。",
        example_romaji: "Shokudou de hirugohan o tabemasu.",
        example_en: "I eat lunch in the cafeteria.",
        example_mm: "ထမင်းစားခန်းမှာ နေ့လည်စာစားတယ်။"
    },

    // ========== SCHOOL EVENTS / がっこうのイベント (8 words) ==========
    {
        japanese: "にゅうがくしき",
        romaji: "nyuugakushiki",
        pronunciation: "nyuugakushiki",
        english: "entrance ceremony",
        burmese: "ကျောင်းဝင်ခွင့်အခမ်းအနား",
        category: "school",
        example_jp: "にゅうがくしきに さんかしました。",
        example_romaji: "Nyuugakushiki ni sanka shimashita.",
        example_en: "I attended the entrance ceremony.",
        example_mm: "ကျောင်းဝင်ခွင့်အခမ်းအနားကို တက်ရောက်ခဲ့တယ်။"
    },
    {
        japanese: "そつぎょうしき",
        romaji: "sotsugyoushiki",
        pronunciation: "sotsugyoushiki",
        english: "graduation ceremony",
        burmese: "ဘွဲ့နှင်းသဘင်အခမ်းအနား",
        category: "school",
        example_jp: "そつぎょうしきは めでたいです。",
        example_romaji: "Sotsugyoushiki wa medetai desu.",
        example_en: "The graduation ceremony is celebratory.",
        example_mm: "ဘွဲ့နှင်းသဘင်အခမ်းအနားက ဂုဏ်ယူစရာပါ။"
    },
    {
        japanese: "がくえんさい",
        romaji: "gakuensai",
        pronunciation: "gakuensai",
        english: "school festival",
        burmese: "ကျောင်းပွဲတော်",
        category: "school",
        example_jp: "がくえんさいで おみせを だします。",
        example_romaji: "Gakuensai de omise o dashimasu.",
        example_en: "We open a shop at the school festival.",
        example_mm: "ကျောင်းပွဲတော်မှာ ဆိုင်ဖွင့်တယ်။"
    },
    {
        japanese: "うんどうかい",
        romaji: "undoukai",
        pronunciation: "undoukai",
        english: "sports day",
        burmese: "အားကစားနေ့",
        category: "school",
        example_jp: "うんどうかいで きょうそうします。",
        example_romaji: "Undoukai de kyousou shimasu.",
        example_en: "I compete on sports day.",
        example_mm: "အားကစားနေ့မှာ ပြိုင်ဆိုင်တယ်။"
    },
    {
        japanese: "しゅうがくりょこう",
        romaji: "shuugakuryokou",
        pronunciation: "shuugakuryokou",
        english: "school trip",
        burmese: "ကျောင်းခရီးစဉ်",
        category: "school",
        example_jp: "しゅうがくりょこうで きょうとへ いきました。",
        example_romaji: "Shuugakuryokou de Kyoto e ikimashita.",
        example_en: "I went to Kyoto on the school trip.",
        example_mm: "ကျောင်းခရီးစဉ်မှာ ကျိုတိုကိုသွားခဲ့တယ်။"
    },
    {
        japanese: "しゅうかい",
        romaji: "shuukai",
        pronunciation: "shuukai",
        english: "school assembly",
        burmese: "ကျောင်းစုဝေးပွဲ",
        category: "school",
        example_jp: "しゅうかいで こうちょうせんせいが はなします。",
        example_romaji: "Shuukai de kouchou sensei ga hanashimasu.",
        example_en: "The principal speaks at the assembly.",
        example_mm: "ကျောင်းစုဝေးပွဲမှာ ကျောင်းအုပ်ဆရာကြီး ပြောတယ်။"
    },
    {
        japanese: "じゅぎょうさんかん",
        romaji: "jugyousankan",
        pronunciation: "jugyousankan",
        english: "class observation",
        burmese: "အတန်းလေ့လာခြင်း",
        category: "school",
        example_jp: "じゅぎょうさんかんに りょうしんが きます。",
        example_romaji: "Jugyousankan ni ryoushin ga kimasu.",
        example_en: "Parents come for class observation.",
        example_mm: "အတန်းလေ့လာခြင်းအတွက် မိဘတွေလာတယ်။"
    },
    {
        japanese: "せいせきひょう",
        romaji: "seisekihyou",
        pronunciation: "seisekihyou",
        english: "report card",
        burmese: "အဆင့်မှတ်တမ်း",
        category: "school",
        example_jp: "せいせきひょうを りょうしんに みせます。",
        example_romaji: "Seisekihyou o ryoushin ni misemasu.",
        example_en: "I show my report card to my parents.",
        example_mm: "အဆင့်မှတ်တမ်းကို မိဘတွေကို ပြတယ်။"
    },

    // ========== LIBRARY / としょかん (8 words) ==========
    {
        japanese: "としょかん",
        romaji: "toshokan",
        pronunciation: "toshokan",
        english: "library",
        burmese: "စာကြည့်တိုက်",
        category: "places",
        example_jp: "としょかんで ほんを かります。",
        example_romaji: "Toshokan de hon o karimasu.",
        example_en: "I borrow books at the library.",
        example_mm: "စာကြည့်တိုက်မှာ စာအုပ်ငှားတယ်။"
    },
    {
        japanese: "かりる",
        romaji: "kariru",
        pronunciation: "kariru",
        english: "to borrow",
        burmese: "ငှားသည်",
        category: "verbs",
        example_jp: "としょかんで ほんを かります。",
        example_romaji: "Toshokan de hon o karimasu.",
        example_en: "I borrow books at the library.",
        example_mm: "စာကြည့်တိုက်မှာ စာအုပ်ငှားတယ်။"
    },
    {
        japanese: "かえす",
        romaji: "kaesu",
        pronunciation: "kaesu",
        english: "to return",
        burmese: "ပြန်အပ်သည်",
        category: "verbs",
        example_jp: "ほんを としょかんに かえします。",
        example_romaji: "Hon o toshokan ni kaeshimasu.",
        example_en: "I return books to the library.",
        example_mm: "စာအုပ်တွေ စာကြည့်တိုက်ကို ပြန်အပ်တယ်။"
    },
    {
        japanese: "しょし",
        romaji: "shoshi",
        pronunciation: "shoshi",
        english: "librarian",
        burmese: "စာကြည့်တိုက်မှူး",
        category: "people",
        example_jp: "しょしに しつもんします。",
        example_romaji: "Shoshi ni shitsumon shimasu.",
        example_en: "I ask the librarian a question.",
        example_mm: "စာကြည့်တိုက်မှူးကို မေးတယ်။"
    },
    {
        japanese: "よみかた",
        romaji: "yomikata",
        pronunciation: "yomikata",
        english: "reading",
        burmese: "စာဖတ်ခြင်း",
        category: "misc",
        example_jp: "にほんごの よみかたを ならいます。",
        example_romaji: "Nihongo no yomikata o naraimasu.",
        example_en: "I learn Japanese reading.",
        example_mm: "ဂျပန်စာဖတ်နည်းကို သင်ယူတယ်။"
    },
    {
        japanese: "しらべる",
        romaji: "shiraberu",
        pronunciation: "shiraberu",
        english: "to research/investigate",
        burmese: "သုတေသနပြုသည်",
        category: "verbs",
        example_jp: "としょかんで しらべます。",
        example_romaji: "Toshokan de shirabemasu.",
        example_en: "I research at the library.",
        example_mm: "စာကြည့်တိုက်မှာ သုတေသနပြုတယ်။"
    },
    {
        japanese: "さんこうしょ",
        romaji: "sankousho",
        pronunciation: "sankousho",
        english: "reference book",
        burmese: "ကိုးကားစာအုပ်",
        category: "school",
        example_jp: "さんこうしょを つかいます。",
        example_romaji: "Sankousho o tsukaimasu.",
        example_en: "I use reference books.",
        example_mm: "ကိုးကားစာအုပ်တွေ သုံးတယ်။"
    },
    {
        japanese: "じしょ",
        romaji: "jisho",
        pronunciation: "jisho",
        english: "dictionary",
        burmese: "အဘိဓာန်",
        category: "school",
        example_jp: "じしょで いみを しらべます。",
        example_romaji: "Jisho de imi o shirabemasu.",
        example_en: "I look up meanings in the dictionary.",
        example_mm: "အဘိဓာန်မှာ အဓိပ္ပာယ်ရှာတယ်။"
    },
        // ========== MORE LIBRARY / としょかん (5 words) ==========
    {
        japanese: "ずかん",
        romaji: "zukan",
        pronunciation: "zukan",
        english: "picture book / encyclopedia",
        burmese: "ရုပ်ပုံစာအုပ် / စွယ်စုံကျမ်း",
        category: "school",
        example_jp: "ずかんで どうぶつを しらべます。",
        example_romaji: "Zukan de doubutsu o shirabemasu.",
        example_en: "I look up animals in the picture book.",
        example_mm: "ရုပ်ပုံစာအုပ်နဲ့ တိရစ္ဆာန်တွေကို ရှာတယ်။"
    },
    {
        japanese: "かいだん",
        romaji: "kaidan",
        pronunciation: "kaidan",
        english: "stairs",
        burmese: "လှေကား",
        category: "house",
        example_jp: "かいだんを のぼります。",
        example_romaji: "Kaidan o noborimasu.",
        example_en: "I go up the stairs.",
        example_mm: "လှေကားတက်တယ်။"
    },
    {
        japanese: "エスカレーター",
        romaji: "esukareetaa",
        pronunciation: "esukareetaa",
        english: "escalator",
        burmese: "စက်လှေကား",
        category: "transport",
        example_jp: "エスカレーターで うえに いきます。",
        example_romaji: "Esukareetaa de ue ni ikimasu.",
        example_en: "I go up by escalator.",
        example_mm: "စက်လှေကားနဲ့ အပေါ်တက်တယ်။"
    },
    {
        japanese: "じどうはんばいき",
        romaji: "jidouhanbaiki",
        pronunciation: "jidouhanbaiki",
        english: "vending machine",
        burmese: "အလိုအလျောက်ရောင်းစက်",
        category: "shopping",
        example_jp: "じどうはんばいきで のみものを かいます。",
        example_romaji: "Jidouhanbaiki de nomimono o kaimasu.",
        example_en: "I buy drinks from a vending machine.",
        example_mm: "အလိုအလျောက်ရောင်းစက်ကနေ အဖျော်ယမကာဝယ်တယ်။"
    },
    {
        japanese: "こうしゅうでんわ",
        romaji: "koushuudenwa",
        pronunciation: "koushuudenwa",
        english: "public telephone",
        burmese: "အများသုံးဖုန်း",
        category: "misc",
        example_jp: "こうしゅうでんわを つかいます。",
        example_romaji: "Koushuudenwa o tsukaimasu.",
        example_en: "I use a public telephone.",
        example_mm: "အများသုံးဖုန်းသုံးတယ်။"
    },

    // ========== FIRE SAFETY / しょうか (6 words) ==========
    {
        japanese: "しょうかき",
        romaji: "shoukaki",
        pronunciation: "shoukaki",
        english: "fire extinguisher",
        burmese: "မီးသတ်ဆေးဘူး",
        category: "safety",
        example_jp: "しょうかきを つかいます。",
        example_romaji: "Shoukaki o tsukaimasu.",
        example_en: "I use a fire extinguisher.",
        example_mm: "မီးသတ်ဆေးဘူးသုံးတယ်။"
    },
    {
        japanese: "ひ",
        romaji: "hi",
        pronunciation: "hi",
        english: "fire",
        burmese: "မီး",
        category: "safety",
        example_jp: "ひに ちゅういします。",
        example_romaji: "Hi ni chuui shimasu.",
        example_en: "I'm careful with fire.",
        example_mm: "မီးကို သတိထားတယ်။"
    },
    {
        japanese: "けいほう",
        romaji: "keihou",
        pronunciation: "keihou",
        english: "warning/alarm",
        burmese: "သတိပေးချက် / နှိုးဆော်သံ",
        category: "safety",
        example_jp: "けいほうが なりました。",
        example_romaji: "Keihou ga narimashita.",
        example_en: "The alarm went off.",
        example_mm: "နှိုးဆော်သံမြည်တယ်။"
    },
    {
        japanese: "ひなんぐち",
        romaji: "hinanguchi",
        pronunciation: "hinanguchi",
        english: "emergency exit",
        burmese: "ဘေးလွတ်ရာထွက်ပေါက်",
        category: "safety",
        example_jp: "ひなんぐちは どこですか。",
        example_romaji: "Hinanguchi wa doko desu ka.",
        example_en: "Where is the emergency exit?",
        example_mm: "ဘေးလွတ်ရာထွက်ပေါက်က ဘယ်မှာလဲ။"
    },
    {
        japanese: "ひなんくんれん",
        romaji: "hinankunren",
        pronunciation: "hinankunren",
        english: "evacuation drill",
        burmese: "ဘေးလွတ်ရာရွှေ့ပြောင်းလေ့ကျင့်ခန်း",
        category: "safety",
        example_jp: "ひなんくんれんに さんかします。",
        example_romaji: "Hinankunren ni sanka shimasu.",
        example_en: "I participate in the evacuation drill.",
        example_mm: "ဘေးလွတ်ရာရွှေ့ပြောင်းလေ့ကျင့်ခန်းမှာ ပါဝင်တယ်။"
    },
    {
        japanese: "ぼうはん",
        romaji: "bouhan",
        pronunciation: "bouhan",
        english: "crime prevention",
        burmese: "ရာဇဝတ်မှုကာကွယ်ရေး",
        category: "safety",
        example_jp: "ぼうはんカメラが あります。",
        example_romaji: "Bouhan kamera ga arimasu.",
        example_en: "There is a security camera.",
        example_mm: "စောင့်ကြည့်ကင်မရာရှိတယ်။"
    },

    // ========== LOST AND FOUND / わすれもの (5 words) ==========
    {
        japanese: "わすれもの",
        romaji: "wasuremono",
        pronunciation: "wasuremono",
        english: "lost item",
        burmese: "မေ့ကျန်ခဲ့သောပစ္စည်း",
        category: "misc",
        example_jp: "わすれものを しました。",
        example_romaji: "Wasuremono o shimashita.",
        example_en: "I lost something.",
        example_mm: "ပစ္စည်းတစ်ခုမေ့ကျန်ခဲ့တယ်။"
    },
    {
        japanese: "みうしなう",
        romaji: "miushinau",
        pronunciation: "miushinau",
        english: "to lose sight of",
        burmese: "မျက်ခြည်ပြတ်သည်",
        category: "verbs",
        example_jp: "ともだちを みうしないました。",
        example_romaji: "Tomodachi o miushinaimashita.",
        example_en: "I lost sight of my friend.",
        example_mm: "သူငယ်ချင်းကို မျက်ခြည်ပြတ်သွားတယ်။"
    },
    {
        japanese: "ひろう",
        romaji: "hirou",
        pronunciation: "hirou",
        english: "to pick up/find",
        burmese: "ကောက်သည် / တွေ့ရှိသည်",
        category: "verbs",
        example_jp: "かばんを ひろいました。",
        example_romaji: "Kaban o hiroimashita.",
        example_en: "I found a bag.",
        example_mm: "အိတ်တစ်လုံးတွေ့တယ်။"
    },
    {
        japanese: "うけとり",
        romaji: "uketori",
        pronunciation: "uketori",
        english: "receipt",
        burmese: "ပစ္စည်းလက်ခံဖြတ်ပိုင်း",
        category: "shopping",
        example_jp: "うけとりを もらいます。",
        example_romaji: "Uketori o moraimasu.",
        example_en: "I get a receipt.",
        example_mm: "ပစ္စည်းလက်ခံဖြတ်ပိုင်းရတယ်။"
    },
    {
        japanese: "しょるい",
        romaji: "shorui",
        pronunciation: "shorui",
        english: "documents/papers",
        burmese: "စာရွက်စာတမ်းများ",
        category: "work",
        example_jp: "しょるいを せいりします。",
        example_romaji: "Shorui o seiri shimasu.",
        example_en: "I organize the documents.",
        example_mm: "စာရွက်စာတမ်းတွေ စီစဉ်တယ်။"
    },

    // ========== CONVENIENCE STORE / コンビニ (8 words) ==========
    {
        japanese: "コンビニ",
        romaji: "konbini",
        pronunciation: "konbini",
        english: "convenience store",
        burmese: "အဆင်ပြေဆိုင်",
        category: "shopping",
        example_jp: "コンビニで おにぎりを かいます。",
        example_romaji: "Konbini de onigiri o kaimasu.",
        example_en: "I buy onigiri at the convenience store.",
        example_mm: "အဆင်ပြေဆိုင်မှာ အိုနီဂီရိဝယ်တယ်။"
    },
    {
        japanese: "おにぎり",
        romaji: "onigiri",
        pronunciation: "onigiri",
        english: "rice ball",
        burmese: "ဆန်လုံးညှစ်",
        category: "food",
        example_jp: "おにぎりを たべます。",
        example_romaji: "Onigiri o tabemasu.",
        example_en: "I eat a rice ball.",
        example_mm: "ဆန်လုံးညှစ်စားတယ်။"
    },
    {
        japanese: "べんとう",
        romaji: "bentou",
        pronunciation: "bentou",
        english: "boxed lunch",
        burmese: "ထမင်းဘူး",
        category: "food",
        example_jp: "べんとうを かいました。",
        example_romaji: "Bentou o kaimashita.",
        example_en: "I bought a boxed lunch.",
        example_mm: "ထမင်းဘူးဝယ်တယ်။"
    },
    {
        japanese: "えきべん",
        romaji: "ekiben",
        pronunciation: "ekiben",
        english: "station lunch box",
        burmese: "ဘူတာထမင်းဘူး",
        category: "food",
        example_jp: "えきべんを たべます。",
        example_romaji: "Ekiben o tabemasu.",
        example_en: "I eat a station lunch box.",
        example_mm: "ဘူတာထမင်းဘူးစားတယ်။"
    },
    {
        japanese: "はいけい",
        romaji: "haikei",
        pronunciation: "haikei",
        english: "background",
        burmese: "နောက်ခံ",
        category: "misc",
        example_jp: "はいけいが きれいです。",
        example_romaji: "Haikei ga kirei desu.",
        example_en: "The background is beautiful.",
        example_mm: "နောက်ခံက လှပတယ်။"
    },
    {
        japanese: "おさら",
        romaji: "osara",
        pronunciation: "osara",
        english: "plate/dish",
        burmese: "ပန်းကန်",
        category: "house",
        example_jp: "おさらを あらいます。",
        example_romaji: "Osara o araimasu.",
        example_en: "I wash the dishes.",
        example_mm: "ပန်းကန်တွေဆေးတယ်။"
    },
    {
        japanese: "はし",
        romaji: "hashi",
        pronunciation: "hashi",
        english: "chopsticks",
        burmese: "တူ",
        category: "house",
        example_jp: "はしで たべます。",
        example_romaji: "Hashi de tabemasu.",
        example_en: "I eat with chopsticks.",
        example_mm: "တူနဲ့စားတယ်။"
    },
    {
        japanese: "スプーン",
        romaji: "supuun",
        pronunciation: "supuun",
        english: "spoon",
        burmese: "ဇွန်း",
        category: "house",
        example_jp: "スプーンで スープを のみます。",
        example_romaji: "Supuun de suupu o nomimasu.",
        example_en: "I eat soup with a spoon.",
        example_mm: "ဇွန်းနဲ့ ဟင်းချိုသောက်တယ်။"
    },

    // ========== FINAL WORDS TO REACH 800 (10 words) ==========
    {
        japanese: "すてき",
        romaji: "suteki",
        pronunciation: "suteki",
        english: "lovely/wonderful",
        burmese: "ချစ်စရာကောင်းသည် / အံ့သြဖွယ်",
        category: "adjectives",
        example_jp: "すてきな プレゼントです。",
        example_romaji: "Suteki na purezento desu.",
        example_en: "It's a wonderful present.",
        example_mm: "အံ့သြဖွယ်လက်ဆောင်ပါ။"
    },
    {
        japanese: "かわいい",
        romaji: "kawaii",
        pronunciation: "kawaii",
        english: "cute",
        burmese: "ချစ်စရာကောင်းသည်",
        category: "adjectives",
        example_jp: "この こねこは かわいいです。",
        example_romaji: "Kono koneko wa kawaii desu.",
        example_en: "This kitten is cute.",
        example_mm: "ဒီကြောင်ကလေးက ချစ်စရာကောင်းတယ်။"
    },
    {
        japanese: "かっこいい",
        romaji: "kakkoii",
        pronunciation: "kakkoii",
        english: "cool/handsome",
        burmese: "ကောင်းသည် / လှပသည်",
        category: "adjectives",
        example_jp: "あの せんしゅは かっこいいです。",
        example_romaji: "Ano senshu wa kakkoii desu.",
        example_en: "That athlete is cool.",
        example_mm: "ထိုအားကစားသမားက လှပါတယ်။"
    },
    {
        japanese: "しんせん",
        romaji: "shinsen",
        pronunciation: "shinsen",
        english: "fresh",
        burmese: "လတ်ဆတ်သည်",
        category: "adjectives",
        example_jp: "しんせんな やさいを かいました。",
        example_romaji: "Shinsen na yasai o kaimashita.",
        example_en: "I bought fresh vegetables.",
        example_mm: "ဟင်းသီးဟင်းရွက်လတ်လတ်ဆတ်ဆတ်ဝယ်တယ်။"
    },
    {
        japanese: "たいせつ",
        romaji: "taisetsu",
        pronunciation: "taisetsu",
        english: "important/precious",
        burmese: "အရေးကြီးသည် / တန်ဖိုးရှိသည်",
        category: "adjectives",
        example_jp: "かぞくは たいせつです。",
        example_romaji: "Kazoku wa taisetsu desu.",
        example_en: "Family is important.",
        example_mm: "မိသားစုက အရေးကြီးတယ်။"
    },
    {
        japanese: "かんぺき",
        romaji: "kanpeki",
        pronunciation: "kanpeki",
        english: "perfect",
        burmese: "ပြည့်စုံသည်",
        category: "adjectives",
        example_jp: "この さくひんは かんぺきです。",
        example_romaji: "Kono sakuhin wa kanpeki desu.",
        example_en: "This work is perfect.",
        example_mm: "ဒီလက်ရာက ပြည့်စုံတယ်။"
    },
    {
        japanese: "じゆう",
        romaji: "jiyuu",
        pronunciation: "jiyuu",
        english: "free/freedom",
        burmese: "လွတ်လပ်သည်",
        category: "adjectives",
        example_jp: "じゆうな じかんが あります。",
        example_romaji: "Jiyuu na jikan ga arimasu.",
        example_en: "I have free time.",
        example_mm: "လွတ်လပ်တဲ့အချိန်ရှိတယ်။"
    },
    {
        japanese: "べんき",
        romaji: "benki",
        pronunciation: "benki",
        english: "diligent/studious",
        burmese: "လုံ့လဝီရိယရှိသည်",
        category: "adjectives",
        example_jp: "かれは べんきな がくせいです。",
        example_romaji: "Kare wa benki na gakusei desu.",
        example_en: "He is a diligent student.",
        example_mm: "သူက လုံ့လဝီရိယရှိတဲ့ ကျောင်းသားပါ။"
    },
    {
        japanese: "しんせつ",
        romaji: "shinsetsu",
        pronunciation: "shinsetsu",
        english: "kind",
        burmese: "ကြင်နာသည်",
        category: "adjectives",
        example_jp: "あなたは しんせつです。",
        example_romaji: "Anata wa shinsetsu desu.",
        example_en: "You are kind.",
        example_mm: "မင်းက ကြင်နာတယ်။"
    },
    {
        japanese: "がんばる",
        romaji: "ganbaru",
        pronunciation: "ganbaru",
        english: "to do one's best",
        burmese: "ကြိုးစားသည်",
        category: "verbs",
        example_jp: "がんばります。",
        example_romaji: "Ganbarimasu.",
        example_en: "I will do my best.",
        example_mm: "ကျွန်တော် ကြိုးစားပါမယ်။"
    },
        // ========== MISSING WORDS - GREETINGS & BASIC PHRASES (15 words) ==========
    {
        japanese: "おやすみなさい",
        romaji: "oyasuminasai",
        pronunciation: "oyasuminasai",
        english: "good night",
        burmese: "ကောင်းသောညပါ",
        category: "greetings",
        example_jp: "おやすみなさい。またあした。",
        example_romaji: "Oyasuminasai. Mata ashita.",
        example_en: "Good night. See you tomorrow.",
        example_mm: "ကောင်းသောညပါ။ မနက်ဖြန်တွေ့မယ်။"
    },
    {
        japanese: "いただきます",
        romaji: "itadakimasu",
        pronunciation: "itadakimasu",
        english: "thank you for the meal (before eating)",
        burmese: "စားပါရစေ (စားမည့်အကြို)",
        category: "greetings",
        example_jp: "いただきます。",
        example_romaji: "Itadakimasu.",
        example_en: "Thank you for the meal.",
        example_mm: "စားပါရစေ။"
    },
    {
        japanese: "ごちそうさまでした",
        romaji: "gochisousamadeshita",
        pronunciation: "gochisousamadeshita",
        english: "thank you for the meal (after eating)",
        burmese: "ကျေးဇူးတင်ပါတယ် (စားပြီးနောက်)",
        category: "greetings",
        example_jp: "ごちそうさまでした。",
        example_romaji: "Gochisousamadeshita.",
        example_en: "Thank you for the meal.",
        example_mm: "ကျေးဇူးတင်ပါတယ်။"
    },
    {
        japanese: "おじゃまします",
        romaji: "ojamashimasu",
        pronunciation: "ojamashimasu",
        english: "sorry for disturbing",
        burmese: "စိတ်အနှောင့်အယှက်ပေးပါတယ်",
        category: "greetings",
        example_jp: "おじゃまします。",
        example_romaji: "Ojamashimasu.",
        example_en: "Sorry for disturbing.",
        example_mm: "စိတ်အနှောင့်အယှက်ပေးပါတယ်။"
    },
    {
        japanese: "しつれいします",
        romaji: "shitsureishimasu",
        pronunciation: "shitsureishimasu",
        english: "excuse me (leaving)",
        burmese: "ခွင့်ပြုပါ (ထွက်ခွာခြင်း)",
        category: "greetings",
        example_jp: "しつれいします。",
        example_romaji: "Shitsureishimasu.",
        example_en: "Excuse me (I'm leaving).",
        example_mm: "ခွင့်ပြုပါ (ထွက်ပါမယ်)"
    },
    {
        japanese: "ただいま",
        romaji: "tadaima",
        pronunciation: "tadaima",
        english: "I'm home",
        burmese: "အိမ်ပြန်ရောက်ပြီ",
        category: "greetings",
        example_jp: "ただいま。",
        example_romaji: "Tadaima.",
        example_en: "I'm home.",
        example_mm: "အိမ်ပြန်ရောက်ပြီ။"
    },
    {
        japanese: "おかえり",
        romaji: "okaeri",
        pronunciation: "okaeri",
        english: "welcome home",
        burmese: "အိမ်ပြန်ကြိုဆိုပါတယ်",
        category: "greetings",
        example_jp: "おかえり。",
        example_romaji: "Okaeri.",
        example_en: "Welcome home.",
        example_mm: "အိမ်ပြန်ကြိုဆိုပါတယ်။"
    },
    {
        japanese: "いってきます",
        romaji: "ittekimasu",
        pronunciation: "ittekimasu",
        english: "I'm leaving (home)",
        burmese: "သွားခဲ့ပါမယ်",
        category: "greetings",
        example_jp: "いってきます。",
        example_romaji: "Ittekimasu.",
        example_en: "I'm leaving.",
        example_mm: "သွားခဲ့ပါမယ်။"
    },
    {
        japanese: "いってらっしゃい",
        romaji: "itterasshai",
        pronunciation: "itterasshai",
        english: "have a good day (saying to leaving person)",
        burmese: "သွားလာပါ",
        category: "greetings",
        example_jp: "いってらっしゃい。",
        example_romaji: "Itterasshai.",
        example_en: "Have a good day.",
        example_mm: "သွားလာပါ။"
    },

    // ========== NUMBERS 6-10 (5 words) ==========
    {
        japanese: "ろく",
        romaji: "roku",
        pronunciation: "roku",
        english: "six",
        burmese: "ခြောက်",
        category: "numbers",
        example_jp: "ろくじに おきます。",
        example_romaji: "Rokuji ni okimasu.",
        example_en: "I wake up at six o'clock.",
        example_mm: "ခြောက်နာရီမှာ နိုးတယ်။"
    },
    {
        japanese: "しち",
        romaji: "shichi",
        pronunciation: "shichi",
        english: "seven",
        burmese: "ခုနစ်",
        category: "numbers",
        example_jp: "しちがつ",
        example_romaji: "Shichigatsu",
        example_en: "July",
        example_mm: "ဇူလိုင်လ"
    },
    {
        japanese: "はち",
        romaji: "hachi",
        pronunciation: "hachi",
        english: "eight",
        burmese: "ရှစ်",
        category: "numbers",
        example_jp: "はちじに がっこうへ いきます。",
        example_romaji: "Hachiji ni gakkou e ikimasu.",
        example_en: "I go to school at eight o'clock.",
        example_mm: "ရှစ်နာရီမှာ ကျောင်းသွားတယ်။"
    },
    {
        japanese: "きゅう",
        romaji: "kyuu",
        pronunciation: "kyuu",
        english: "nine",
        burmese: "ကိုး",
        category: "numbers",
        example_jp: "きゅうじゅう",
        example_romaji: "Kyuujuu",
        example_en: "ninety",
        example_mm: "ကိုးဆယ်"
    },
    {
        japanese: "じゅう",
        romaji: "juu",
        pronunciation: "juu",
        english: "ten",
        burmese: "ဆယ်",
        category: "numbers",
        example_jp: "じゅうにん",
        example_romaji: "Juunin",
        example_en: "ten people",
        example_mm: "လူဆယ်ယောက်"
    },

    // ========== DAYS OF WEEK (7 words) ==========
    {
        japanese: "げつようび",
        romaji: "getsuyoubi",
        pronunciation: "getsuyoubi",
        english: "Monday",
        burmese: "တနင်္လာနေ့",
        category: "time",
        example_jp: "げつようびに しごとが あります。",
        example_romaji: "Getsuyoubi ni shigoto ga arimasu.",
        example_en: "I have work on Monday.",
        example_mm: "တနင်္လာနေ့မှာ အလုပ်ရှိတယ်။"
    },
    {
        japanese: "かようび",
        romaji: "kayoubi",
        pronunciation: "kayoubi",
        english: "Tuesday",
        burmese: "အင်္ဂါနေ့",
        category: "time",
        example_jp: "かようびは やすみです。",
        example_romaji: "Kayoubi wa yasumi desu.",
        example_en: "Tuesday is a holiday.",
        example_mm: "အင်္ဂါနေ့က အားလပ်ရက်ပါ။"
    },
    {
        japanese: "すいようび",
        romaji: "suiyoubi",
        pronunciation: "suiyoubi",
        english: "Wednesday",
        burmese: "ဗုဒ္ဓဟူးနေ့",
        category: "time",
        example_jp: "すいようびに かいぎが あります。",
        example_romaji: "Suiyoubi ni kaigi ga arimasu.",
        example_en: "There is a meeting on Wednesday.",
        example_mm: "ဗုဒ္ဓဟူးနေ့မှာ အစည်းအဝေးရှိတယ်။"
    },
    {
        japanese: "もくようび",
        romaji: "mokuyoubi",
        pronunciation: "mokuyoubi",
        english: "Thursday",
        burmese: "ကြာသပတေးနေ့",
        category: "time",
        example_jp: "もくようびの よる テニスを します。",
        example_romaji: "Mokuyoubi no yoru tenisu o shimasu.",
        example_en: "I play tennis on Thursday night.",
        example_mm: "ကြာသပတေးနေ့ညမှာ တင်းနစ်ကစားတယ်။"
    },
    {
        japanese: "きんようび",
        romaji: "kinyoubi",
        pronunciation: "kinyoubi",
        english: "Friday",
        burmese: "သောကြာနေ့",
        category: "time",
        example_jp: "きんようびの ばん パーティーが あります。",
        example_romaji: "Kinyoubi no ban paatii ga arimasu.",
        example_en: "There is a party on Friday night.",
        example_mm: "သောကြာနေ့ညမှာ ပါတီရှိတယ်။"
    },
    {
        japanese: "どようび",
        romaji: "doyoubi",
        pronunciation: "doyoubi",
        english: "Saturday",
        burmese: "စနေနေ့",
        category: "time",
        example_jp: "どようびに かいものに いきます。",
        example_romaji: "Doyoubi ni kaimono ni ikimasu.",
        example_en: "I go shopping on Saturday.",
        example_mm: "စနေနေ့မှာ ဈေးဝယ်သွားတယ်။"
    },
    {
        japanese: "にちようび",
        romaji: "nichiyoubi",
        pronunciation: "nichiyoubi",
        english: "Sunday",
        burmese: "တနင်္ဂနွေနေ့",
        category: "time",
        example_jp: "にちようびは かぞくと すごします。",
        example_romaji: "Nichiyoubi wa kazoku to sugoshimasu.",
        example_en: "I spend Sunday with my family.",
        example_mm: "တနင်္ဂနွေနေ့မှာ မိသားစုနဲ့ အတူနေတယ်။"
    },

    // ========== MONTHS (12 words) ==========
    {
        japanese: "いちがつ",
        romaji: "ichigatsu",
        pronunciation: "ichigatsu",
        english: "January",
        burmese: "ဇန်နဝါရီ",
        category: "time",
        example_jp: "いちがつは さむいです。",
        example_romaji: "Ichigatsu wa samui desu.",
        example_en: "January is cold.",
        example_mm: "ဇန်နဝါရီက အေးတယ်။"
    },
    {
        japanese: "にがつ",
        romaji: "nigatsu",
        pronunciation: "nigatsu",
        english: "February",
        burmese: "ဖေဖော်ဝါရီ",
        category: "time",
        example_jp: "にがつに ゆきが ふります。",
        example_romaji: "Nigatsu ni yuki ga furimasu.",
        example_en: "It snows in February.",
        example_mm: "ဖေဖော်ဝါရီမှာ နှင်းကျတယ်။"
    },
    {
        japanese: "さんがつ",
        romaji: "sangatsu",
        pronunciation: "sangatsu",
        english: "March",
        burmese: "မတ်",
        category: "time",
        example_jp: "さんがつに さくらが さきます。",
        example_romaji: "Sangatsu ni sakura ga sakimasu.",
        example_en: "Cherry blossoms bloom in March.",
        example_mm: "မတ်လမှာ ချယ်ရီပန်းပွင့်တယ်။"
    },
    {
        japanese: "しがつ",
        romaji: "shigatsu",
        pronunciation: "shigatsu",
        english: "April",
        burmese: "ဧပြီ",
        category: "time",
        example_jp: "しがつに がっこうが はじまります。",
        example_romaji: "Shigatsu ni gakkou ga hajimarimasu.",
        example_en: "School starts in April.",
        example_mm: "ဧပြီလမှာ ကျောင်းစတယ်။"
    },
    {
        japanese: "ごがつ",
        romaji: "gogatsu",
        pronunciation: "gogatsu",
        english: "May",
        burmese: "မေ",
        category: "time",
        example_jp: "ごがつは いいてんきです。",
        example_romaji: "Gogatsu wa ii tenki desu.",
        example_en: "May has good weather.",
        example_mm: "မေလက ရာသီဥတုကောင်းတယ်။"
    },
    {
        japanese: "ろくがつ",
        romaji: "rokugatsu",
        pronunciation: "rokugatsu",
        english: "June",
        burmese: "ဇွန်",
        category: "time",
        example_jp: "ろくがつに あめが よく ふります。",
        example_romaji: "Rokugatsu ni ame ga yoku furimasu.",
        example_en: "It rains a lot in June.",
        example_mm: "ဇွန်လမှာ မိုးများတယ်။"
    },
    {
        japanese: "しちがつ",
        romaji: "shichigatsu",
        pronunciation: "shichigatsu",
        english: "July",
        burmese: "ဇူလိုင်",
        category: "time",
        example_jp: "しちがつは あついです。",
        example_romaji: "Shichigatsu wa atsui desu.",
        example_en: "July is hot.",
        example_mm: "ဇူလိုင်က ပူတယ်။"
    },
    {
        japanese: "はちがつ",
        romaji: "hachigatsu",
        pronunciation: "hachigatsu",
        english: "August",
        burmese: "ဩဂုတ်",
        category: "time",
        example_jp: "はちがつに うみに いきます。",
        example_romaji: "Hachigatsu ni umi ni ikimasu.",
        example_en: "I go to the sea in August.",
        example_mm: "ဩဂုတ်လမှာ ပင်လယ်သွားတယ်။"
    },
    {
        japanese: "くがつ",
        romaji: "kugatsu",
        pronunciation: "kugatsu",
        english: "September",
        burmese: "စက်တင်ဘာ",
        category: "time",
        example_jp: "くがつに べんきょうを はじめます。",
        example_romaji: "Kugatsu ni benkyou o hajimemasu.",
        example_en: "I start studying in September.",
        example_mm: "စက်တင်ဘာမှာ စာကျက်စတယ်။"
    },
    {
        japanese: "じゅうがつ",
        romaji: "juugatsu",
        pronunciation: "juugatsu",
        english: "October",
        burmese: "အောက်တိုဘာ",
        category: "time",
        example_jp: "じゅうがつは すずしいです。",
        example_romaji: "Juugatsu wa suzushii desu.",
        example_en: "October is cool.",
        example_mm: "အောက်တိုဘာက အေးမြတယ်။"
    },
    {
        japanese: "じゅういちがつ",
        romaji: "juuichigatsu",
        pronunciation: "juuichigatsu",
        english: "November",
        burmese: "နိုဝင်ဘာ",
        category: "time",
        example_jp: "じゅういちがつに もみじを みます。",
        example_romaji: "Juuichigatsu ni momiji o mimasu.",
        example_en: "I see autumn leaves in November.",
        example_mm: "နိုဝင်ဘာမှာ ဆောင်းဦးရွက်တွေကြည့်တယ်။"
    },
    {
        japanese: "じゅうにがつ",
        romaji: "juunigatsu",
        pronunciation: "juunigatsu",
        english: "December",
        burmese: "ဒီဇင်ဘာ",
        category: "time",
        example_jp: "じゅうにがつに クリスマスが あります。",
        example_romaji: "Juunigatsu ni kurisumasu ga arimasu.",
        example_en: "Christmas is in December.",
        example_mm: "ဒီဇင်ဘာမှာ ခရစ်စမတ်ရှိတယ်။"
    },

    // ========== COUNTERS (8 words) ==========
    {
        japanese: "ひとつ",
        romaji: "hitotsu",
        pronunciation: "hitotsu",
        english: "one thing",
        burmese: "တစ်ခု",
        category: "numbers",
        example_jp: "りんごが ひとつ あります。",
        example_romaji: "Ringo ga hitotsu arimasu.",
        example_en: "There is one apple.",
        example_mm: "ပန်းသီးတစ်လုံးရှိတယ်။"
    },
    {
        japanese: "ふたつ",
        romaji: "futatsu",
        pronunciation: "futatsu",
        english: "two things",
        burmese: "နှစ်ခု",
        category: "numbers",
        example_jp: "みかんを ふたつ ください。",
        example_romaji: "Mikan o futatsu kudasai.",
        example_en: "Please give me two oranges.",
        example_mm: "လိမ္မော်သီးနှစ်လုံးပေးပါ။"
    },
    {
        japanese: "みっつ",
        romaji: "mittsu",
        pronunciation: "mittsu",
        english: "three things",
        burmese: "သုံးခု",
        category: "numbers",
        example_jp: "ほんを みっつ かいました。",
        example_romaji: "Hon o mittsu kaimashita.",
        example_en: "I bought three books.",
        example_mm: "စာအုပ်သုံးအုပ်ဝယ်တယ်။"
    },
    {
        japanese: "よっつ",
        romaji: "yottsu",
        pronunciation: "yottsu",
        english: "four things",
        burmese: "လေးခု",
        category: "numbers",
        example_jp: "コップが よっつ あります。",
        example_romaji: "Koppu ga yottsu arimasu.",
        example_en: "There are four cups.",
        example_mm: "ခွက်လေးလုံးရှိတယ်။"
    },
    {
        japanese: "いつつ",
        romaji: "itsutsu",
        pronunciation: "itsutsu",
        english: "five things",
        burmese: "ငါးခု",
        category: "numbers",
        example_jp: "たまごを いつつ つかいます。",
        example_romaji: "Tamago o itsutsu tsukaimasu.",
        example_en: "I use five eggs.",
        example_mm: "ကြက်ဥငါးလုံးသုံးတယ်။"
    },
    {
        japanese: "むっつ",
        romaji: "muttsu",
        pronunciation: "muttsu",
        english: "six things",
        burmese: "ခြောက်ခု",
        category: "numbers",
        example_jp: "クッキーを むっつ たべました。",
        example_romaji: "Kukkii o muttsu tabemashita.",
        example_en: "I ate six cookies.",
        example_mm: "ကွတ်ကီးခြောက်လုံးစားတယ်။"
    },
    {
        japanese: "ななつ",
        romaji: "nanatsu",
        pronunciation: "nanatsu",
        english: "seven things",
        burmese: "ခုနစ်ခု",
        category: "numbers",
        example_jp: "ななつの ほし。",
        example_romaji: "Nanatsu no hoshi.",
        example_en: "Seven stars.",
        example_mm: "ကြယ်ခုနစ်လုံး။"
    },
    {
        japanese: "やっつ",
        romaji: "yattsu",
        pronunciation: "yattsu",
        english: "eight things",
        burmese: "ရှစ်ခု",
        category: "numbers",
        example_jp: "やっつの プレゼント。",
        example_romaji: "Yattsu no purezento.",
        example_en: "Eight presents.",
        example_mm: "လက်ဆောင်ရှစ်ခု။"
    },

    // ========== FAMILY MEMBERS HONORIFIC (6 words) ==========
    {
        japanese: "おとうさん",
        romaji: "otousan",
        pronunciation: "otousan",
        english: "father (polite)",
        burmese: "အဖေ (ရိုသေ)",
        category: "family",
        example_jp: "おとうさんは いしゃです。",
        example_romaji: "Otousan wa isha desu.",
        example_en: "My father is a doctor.",
        example_mm: "အဖေက ဆရာဝန်ပါ။"
    },
    {
        japanese: "おかあさん",
        romaji: "okaasan",
        pronunciation: "okaasan",
        english: "mother (polite)",
        burmese: "အမေ (ရိုသေ)",
        category: "family",
        example_jp: "おかあさんは しゅふです。",
        example_romaji: "Okaasan wa shufu desu.",
        example_en: "My mother is a housewife.",
        example_mm: "အမေက အိမ်ရှင်မပါ။"
    },
    {
        japanese: "おにいさん",
        romaji: "oniisan",
        pronunciation: "oniisan",
        english: "older brother (polite)",
        burmese: "အစ်ကို (ရိုသေ)",
        category: "family",
        example_jp: "おにいさんは だいがくせいです。",
        example_romaji: "Oniisan wa daigakusei desu.",
        example_en: "My older brother is a university student.",
        example_mm: "အစ်ကိုက တက္ကသိုလ်ကျောင်းသားပါ။"
    },
    {
        japanese: "おねえさん",
        romaji: "oneesan",
        pronunciation: "oneesan",
        english: "older sister (polite)",
        burmese: "အစ်မ (ရိုသေ)",
        category: "family",
        example_jp: "おねえさんは かいしゃいんです。",
        example_romaji: "Oneesan wa kaishain desu.",
        example_en: "My older sister is a company employee.",
        example_mm: "အစ်မက ကုမ္ပဏီဝန်ထမ်းပါ။"
    },
    {
        japanese: "おじいさん",
        romaji: "ojiisan",
        pronunciation: "ojiisan",
        english: "grandfather (polite)",
        burmese: "အဖိုး (ရိုသေ)",
        category: "family",
        example_jp: "おじいさんは げんきです。",
        example_romaji: "Ojiisan wa genki desu.",
        example_en: "My grandfather is healthy.",
        example_mm: "အဖိုးက ကျန်းမာပါတယ်။"
    },
    {
        japanese: "おばあさん",
        romaji: "obaasan",
        pronunciation: "obaasan",
        english: "grandmother (polite)",
        burmese: "အဖွား (ရိုသေ)",
        category: "family",
        example_jp: "おばあさんは まいにち さんぽします。",
        example_romaji: "Obaasan wa mainichi sanpo shimasu.",
        example_en: "My grandmother takes a walk every day.",
        example_mm: "အဖွားက နေ့တိုင်း လမ်းလျှောက်တယ်။"
    },

    // ========== MORE BODY PARTS (8 words) ==========
    {
        japanese: "かみ",
        romaji: "kami",
        pronunciation: "kami",
        english: "hair",
        burmese: "ဆံပင်",
        category: "body",
        example_jp: "かみが ながいです。",
        example_romaji: "Kami ga nagai desu.",
        example_en: "My hair is long.",
        example_mm: "ဆံပင်ရှည်တယ်။"
    },
    {
        japanese: "ひげ",
        romaji: "hige",
        pronunciation: "hige",
        english: "beard/mustache",
        burmese: "မုတ်ဆိတ်",
        category: "body",
        example_jp: "ひげを そります。",
        example_romaji: "Hige o sorimasu.",
        example_en: "I shave my beard.",
        example_mm: "မုတ်ဆိတ်ရိတ်တယ်။"
    },
    {
        japanese: "ゆび",
        romaji: "yubi",
        pronunciation: "yubi",
        english: "finger",
        burmese: "လက်ချောင်း",
        category: "body",
        example_jp: "ゆびが いたいです。",
        example_romaji: "Yubi ga itai desu.",
        example_en: "My finger hurts.",
        example_mm: "လက်ချောင်းနာတယ်။"
    },
    {
        japanese: "ひざ",
        romaji: "hiza",
        pronunciation: "hiza",
        english: "knee",
        burmese: "ဒူး",
        category: "body",
        example_jp: "ひざを まげます。",
        example_romaji: "Hiza o magemasu.",
        example_en: "I bend my knee.",
        example_mm: "ဒူးကွေးတယ်။"
    },
    {
        japanese: "かた",
        romaji: "kata",
        pronunciation: "kata",
        english: "shoulder",
        burmese: "ပခမ်း",
        category: "body",
        example_jp: "かたが こっています。",
        example_romaji: "Kata ga kotte imasu.",
        example_en: "My shoulder is stiff.",
        example_mm: "ပခုံးတောင့်တယ်။"
    },
    {
        japanese: "むね",
        romaji: "mune",
        pronunciation: "mune",
        english: "chest",
        burmese: "ရင်ဘတ်",
        category: "body",
        example_jp: "むねが いたいです。",
        example_romaji: "Mune ga itai desu.",
        example_en: "My chest hurts.",
        example_mm: "ရင်ဘတ်နာတယ်။"
    },
    {
        japanese: "おなか",
        romaji: "onaka",
        pronunciation: "onaka",
        english: "stomach",
        burmese: "ဗိုက်",
        category: "body",
        example_jp: "おなかが すきました。",
        example_romaji: "Onaka ga sukimashita.",
        example_en: "I'm hungry.",
        example_mm: "ဗိုက်ဆာတယ်။"
    },
    {
        japanese: "せなか",
        romaji: "senaka",
        pronunciation: "senaka",
        english: "back",
        burmese: "ကျော",
        category: "body",
        example_jp: "せなかが いたいです。",
        example_romaji: "Senaka ga itai desu.",
        example_en: "My back hurts.",
        example_mm: "ကျောနာတယ်။"
    },

    // ========== FINAL 10 WORDS - MISC (10 words) ==========
    {
        japanese: "はんこ",
        romaji: "hanko",
        pronunciation: "hanko",
        english: "personal seal/stamp",
        burmese: "တံဆိပ်တုံး",
        category: "misc",
        example_jp: "はんこを おします。",
        example_romaji: "Hanko o oshimasu.",
        example_en: "I stamp my seal.",
        example_mm: "တံဆိပ်တုံးခေါက်တယ်။"
    },
    {
        japanese: "しょうがいぶつ",
        romaji: "shougaibutsu",
        pronunciation: "shougaibutsu",
        english: "obstacle",
        burmese: "အတားအဆီး",
        category: "misc",
        example_jp: "しょうがいぶつが あります。",
        example_romaji: "Shougaibutsu ga arimasu.",
        example_en: "There is an obstacle.",
        example_mm: "အတားအဆီးရှိတယ်။"
    },
    {
        japanese: "ゆうしょう",
        romaji: "yuushou",
        pronunciation: "yuushou",
        english: "victory/championship",
        burmese: "အောင်ပွဲ/ချန်ပီယံ",
        category: "misc",
        example_jp: "ゆうしょうを めざします。",
        example_romaji: "Yuushou o mezashimasu.",
        example_en: "I aim for victory.",
        example_mm: "အောင်ပွဲကို ရည်မှန်းတယ်။"
    },
    {
        japanese: "はいゆう",
        romaji: "haiyuu",
        pronunciation: "haiyuu",
        english: "actor",
        burmese: "မင်းသား",
        category: "people",
        example_jp: "あの はいゆうは ゆうめいです。",
        example_romaji: "Ano haiyuu wa yuumei desu.",
        example_en: "That actor is famous.",
        example_mm: "ထိုမင်းသားက ကျော်ကြားတယ်။"
    },
    {
        japanese: "じょゆう",
        romaji: "joyuu",
        pronunciation: "joyuu",
        english: "actress",
        burmese: "မင်းသမီး",
        category: "people",
        example_jp: "じょゆうに なりたいです。",
        example_romaji: "Joyuu ni naritai desu.",
        example_en: "I want to become an actress.",
        example_mm: "မင်းသမီးဖြစ်ချင်တယ်။"
    },
    {
        japanese: "きゃく",
        romaji: "kyaku",
        pronunciation: "kyaku",
        english: "guest/customer",
        burmese: "ဧည့်သည်/ဖောက်သည်",
        category: "people",
        example_jp: "きゃくが たくさん きました。",
        example_romaji: "Kyaku ga takusan kimashita.",
        example_en: "Many customers came.",
        example_mm: "ဖောက်သည်အများကြီးလာတယ်။"
    },
    {
        japanese: "かんこく",
        romaji: "kankoku",
        pronunciation: "kankoku",
        english: "recommendation",
        burmese: "အကြံပြုချက်",
        category: "misc",
        example_jp: "あなたの かんこくを ききます。",
        example_romaji: "Anata no kankoku o kikimasu.",
        example_en: "I listen to your recommendation.",
        example_mm: "မင်းရဲ့ အကြံပြုချက်ကို နားထောင်တယ်။"
    },
    {
        japanese: "さつえい",
        romaji: "satsuei",
        pronunciation: "satsuei",
        english: "photography/shooting",
        burmese: "ဓာတ်ပုံရိုက်ခြင်း",
        category: "hobbies",
        example_jp: "さつえいが しゅみです。",
        example_romaji: "Satsuei ga shumi desu.",
        example_en: "Photography is my hobby.",
        example_mm: "ဓာတ်ပုံရိုက်တာက ဝါသနာပါ။"
    },
    {
        japanese: "にっき",
        romaji: "nikki",
        pronunciation: "nikki",
        english: "diary",
        burmese: "နေ့စဉ်မှတ်တမ်း",
        category: "misc",
        example_jp: "まいにち にっきを かきます。",
        example_romaji: "Mainichi nikki o kakimasu.",
        example_en: "I write in my diary every day.",
        example_mm: "နေ့တိုင်း နေ့စဉ်မှတ်တမ်းရေးတယ်။"
    },
    {
        japanese: "ゆめ",
        romaji: "yume",
        pronunciation: "yume",
        english: "dream",
        burmese: "အိပ်မက်",
        category: "misc",
        example_jp: "ゆめが あります。",
        example_romaji: "Yume ga arimasu.",
        example_en: "I have a dream.",
        example_mm: "အိပ်မက်ရှိတယ်။"
    },
        // ========== MISSING 31 WORDS TO REACH 800 ==========
    
    // MORE ADJECTIVES (10 words)
    {
        japanese: "ひろい",
        romaji: "hiroi",
        pronunciation: "hiroi",
        english: "wide/spacious",
        burmese: "ကျယ်ဝန်းသည်",
        category: "adjectives",
        example_jp: "このへやは ひろいです。",
        example_romaji: "Kono heya wa hiroi desu.",
        example_en: "This room is spacious.",
        example_mm: "ဒီအခန်းက ကျယ်တယ်။"
    },
    {
        japanese: "せまい",
        romaji: "semai",
        pronunciation: "semai",
        english: "narrow/cramped",
        burmese: "ကျဉ်းသည်",
        category: "adjectives",
        example_jp: "このへやは せまいです。",
        example_romaji: "Kono heya wa semai desu.",
        example_en: "This room is cramped.",
        example_mm: "ဒီအခန်းက ကျဉ်းတယ်။"
    },
    {
        japanese: "ふかい",
        romaji: "fukai",
        pronunciation: "fukai",
        english: "deep",
        burmese: "နက်ရှိုင်းသည်",
        category: "adjectives",
        example_jp: "このみずは ふかいです。",
        example_romaji: "Kono mizu wa fukai desu.",
        example_en: "This water is deep.",
        example_mm: "ဒီရေက နက်တယ်။"
    },
    {
        japanese: "あさい",
        romaji: "asai",
        pronunciation: "asai",
        english: "shallow",
        burmese: "တိမ်သည်",
        category: "adjectives",
        example_jp: "このみずは あさいです。",
        example_romaji: "Kono mizu wa asai desu.",
        example_en: "This water is shallow.",
        example_mm: "ဒီရေက တိမ်တယ်။"
    },
    {
        japanese: "にがい",
        romaji: "nigai",
        pronunciation: "nigai",
        english: "bitter",
        burmese: "ခါးသည်",
        category: "adjectives",
        example_jp: "このくすりは にがいです。",
        example_romaji: "Kono kusuri wa nigai desu.",
        example_en: "This medicine is bitter.",
        example_mm: "ဒီဆေးက ခါးတယ်။"
    },
    {
        japanese: "あまい",
        romaji: "amai",
        pronunciation: "amai",
        english: "sweet",
        burmese: "ချိုသည်",
        category: "adjectives",
        example_jp: "このケーキは あまいです。",
        example_romaji: "Kono keeki wa amai desu.",
        example_en: "This cake is sweet.",
        example_mm: "ဒီကိတ်မုန့်က ချိုတယ်။"
    },
    {
        japanese: "すっぱい",
        romaji: "suppai",
        pronunciation: "suppai",
        english: "sour",
        burmese: "ချဉ်သည်",
        category: "adjectives",
        example_jp: "このレモンは すっぱいです。",
        example_romaji: "Kono remon wa suppai desu.",
        example_en: "This lemon is sour.",
        example_mm: "ဒီသံပုရာသီးက ချဉ်တယ်။"
    },
    {
        japanese: "しょっぱい",
        romaji: "shoppai",
        pronunciation: "shoppai",
        english: "salty",
        burmese: "ငန်သည်",
        category: "adjectives",
        example_jp: "このスープは しょっぱいです。",
        example_romaji: "Kono suupu wa shoppai desu.",
        example_en: "This soup is salty.",
        example_mm: "ဒီဟင်းချိုက ငန်တယ်။"
    },
    {
        japanese: "からい",
        romaji: "karai",
        pronunciation: "karai",
        english: "spicy/hot",
        burmese: "စပ်သည်",
        category: "adjectives",
        example_jp: "このカレーは からいです。",
        example_romaji: "Kono karee wa karai desu.",
        example_en: "This curry is spicy.",
        example_mm: "ဒီဟင်းက စပ်တယ်။"
    },
    {
        japanese: "あつい",
        romaji: "atsui",
        pronunciation: "atsui",
        english: "hot (temperature)",
        burmese: "ပူသည်",
        category: "adjectives",
        example_jp: "このコーヒーは あついです。",
        example_romaji: "Kono koohii wa atsui desu.",
        example_en: "This coffee is hot.",
        example_mm: "ဒီကော်ဖီက ပူတယ်။"
    },

    // MORE VERBS (10 words)
    {
        japanese: "つかまる",
        romaji: "tsukamaru",
        pronunciation: "tsukamaru",
        english: "to be caught",
        burmese: "ဖမ်းမိခံရသည်",
        category: "verbs",
        example_jp: "どろぼうが つかまりました。",
        example_romaji: "Dorobou ga tsukamarimashita.",
        example_en: "The thief was caught.",
        example_mm: "သူခိုးဖမ်းမိသွားတယ်။"
    },
    {
        japanese: "ぬぐ",
        romaji: "nugu",
        pronunciation: "nugu",
        english: "to take off (clothes)",
        burmese: "ချွတ်သည် (အဝတ်)",
        category: "verbs",
        example_jp: "くつを ぬぎます。",
        example_romaji: "Kutsu o nugimasu.",
        example_en: "I take off my shoes.",
        example_mm: "ဖိနပ်ချွတ်တယ်။"
    },
    {
        japanese: "きる",
        romaji: "kiru",
        pronunciation: "kiru",
        english: "to wear (clothes)",
        burmese: "ဝတ်သည် (အဝတ်)",
        category: "verbs",
        example_jp: "シャツを きます。",
        example_romaji: "Shatsu o kimasu.",
        example_en: "I wear a shirt.",
        example_mm: "ရှပ်အင်္ကျီဝတ်တယ်။"
    },
    {
        japanese: "はく",
        romaji: "haku",
        pronunciation: "haku",
        english: "to wear (shoes/pants)",
        burmese: "စီးသည်/ဝတ်သည် (ဖိနပ်/ဘောင်းဘီ)",
        category: "verbs",
        example_jp: "くつを はきます。",
        example_romaji: "Kutsu o hakimasu.",
        example_en: "I put on shoes.",
        example_mm: "ဖိနပ်စီးတယ်။"
    },
    {
        japanese: "かぶる",
        romaji: "kaburu",
        pronunciation: "kaburu",
        english: "to put on (hat)",
        burmese: "ဆောင်းသည် (ဦးထုပ်)",
        category: "verbs",
        example_jp: "ぼうしを かぶります。",
        example_romaji: "Boushi o kaburimasu.",
        example_en: "I put on a hat.",
        example_mm: "ဦးထုပ်ဆောင်းတယ်။"
    },
    {
        japanese: "しぬ",
        romaji: "shinu",
        pronunciation: "shinu",
        english: "to die",
        burmese: "သေသည်",
        category: "verbs",
        example_jp: "さかなを しにました。",
        example_romaji: "Sakana ga shinimashita.",
        example_en: "The fish died.",
        example_mm: "ငါးသေသွားတယ်။"
    },
    {
        japanese: "うまれる",
        romaji: "umareru",
        pronunciation: "umareru",
        english: "to be born",
        burmese: "မွေးဖွားသည်",
        category: "verbs",
        example_jp: "こどもが うまれました。",
        example_romaji: "Kodomo ga umaremashita.",
        example_en: "A child was born.",
        example_mm: "ကလေးမွေးတယ်။"
    },
    {
        japanese: "そだつ",
        romaji: "sodatsu",
        pronunciation: "sodatsu",
        english: "to grow up",
        burmese: "ကြီးပြင်းသည်",
        category: "verbs",
        example_jp: "にほんで そだちました。",
        example_romaji: "Nihon de sodachimashita.",
        example_en: "I grew up in Japan.",
        example_mm: "ဂျပန်မှာ ကြီးပြင်းခဲ့တယ်။"
    },
    {
        japanese: "わかれる",
        romaji: "wakareru",
        pronunciation: "wakareru",
        english: "to separate/part",
        burmese: "ခွဲခွာသည်",
        category: "verbs",
        example_jp: "ともだちと わかれました。",
        example_romaji: "Tomodachi to wakaremashita.",
        example_en: "I parted with my friend.",
        example_mm: "သူငယ်ချင်းနဲ့ ခွဲခွာခဲ့တယ်။"
    },
    {
        japanese: "あつまる",
        romaji: "atsumaru",
        pronunciation: "atsumaru",
        english: "to gather",
        burmese: "စုဝေးသည်",
        category: "verbs",
        example_jp: "ひとが あつまりました。",
        example_romaji: "Hito ga atsumarimashita.",
        example_en: "People gathered.",
        example_mm: "လူတွေစုဝေးကြတယ်။"
    },

    // MORE NOUNS (11 words)
    {
        japanese: "そら",
        romaji: "sora",
        pronunciation: "sora",
        english: "sky",
        burmese: "ကောင်းကင်",
        category: "nature",
        example_jp: "そらが あおいです。",
        example_romaji: "Sora ga aoi desu.",
        example_en: "The sky is blue.",
        example_mm: "ကောင်းကင်က အပြာရောင်ပါ။"
    },
    {
        japanese: "うみ",
        romaji: "umi",
        pronunciation: "umi",
        english: "sea/ocean",
        burmese: "ပင်လယ်",
        category: "nature",
        example_jp: "うみで およぎます。",
        example_romaji: "Umi de oyogimasu.",
        example_en: "I swim in the sea.",
        example_mm: "ပင်လယ်ထဲမှာ ရေကူးတယ်။"
    },
    {
        japanese: "やま",
        romaji: "yama",
        pronunciation: "yama",
        english: "mountain",
        burmese: "တောင်",
        category: "nature",
        example_jp: "やまに のぼります。",
        example_romaji: "Yama ni noborimasu.",
        example_en: "I climb a mountain.",
        example_mm: "တောင်တက်တယ်။"
    },
    {
        japanese: "かわ",
        romaji: "kawa",
        pronunciation: "kawa",
        english: "river",
        burmese: "မြစ်",
        category: "nature",
        example_jp: "かわで およぎます。",
        example_romaji: "Kawa de oyogimasu.",
        example_en: "I swim in the river.",
        example_mm: "မြစ်ထဲမှာ ရေကူးတယ်။"
    },
    {
        japanese: "みずうみ",
        romaji: "mizuumi",
        pronunciation: "mizuumi",
        english: "lake",
        burmese: "အိုင်",
        category: "nature",
        example_jp: "みずうみは しずかです。",
        example_romaji: "Mizuumi wa shizuka desu.",
        example_en: "The lake is quiet.",
        example_mm: "အိုင်က တိတ်ဆိတ်တယ်။"
    },
    {
        japanese: "はな",
        romaji: "hana",
        pronunciation: "hana",
        english: "flower",
        burmese: "ပန်း",
        category: "nature",
        example_jp: "はなが さきました。",
        example_romaji: "Hana ga sakimashita.",
        example_en: "The flower bloomed.",
        example_mm: "ပန်းပွင့်တယ်။"
    },
    {
        japanese: "き",
        romaji: "ki",
        pronunciation: "ki",
        english: "tree",
        burmese: "သစ်ပင်",
        category: "nature",
        example_jp: "きが たかいです。",
        example_romaji: "Ki ga takai desu.",
        example_en: "The tree is tall.",
        example_mm: "သစ်ပင်က မြင့်တယ်။"
    },
    {
        japanese: "くさ",
        romaji: "kusa",
        pronunciation: "kusa",
        english: "grass",
        burmese: "မြက်",
        category: "nature",
        example_jp: "くさの うえを あるきます。",
        example_romaji: "Kusa no ue o arukimasu.",
        example_en: "I walk on the grass.",
        example_mm: "မြက်ပေါ်မှာ လမ်းလျှောက်တယ်။"
    },
    {
        japanese: "いし",
        romaji: "ishi",
        pronunciation: "ishi",
        english: "stone",
        burmese: "ကျောက်",
        category: "nature",
        example_jp: "いしが おおいです。",
        example_romaji: "Ishi ga ooi desu.",
        example_en: "There are many stones.",
        example_mm: "ကျောက်တုံးတွေ အများကြီးရှိတယ်။"
    },
    {
        japanese: "すな",
        romaji: "suna",
        pronunciation: "suna",
        english: "sand",
        burmese: "သဲ",
        category: "nature",
        example_jp: "すなで あそびます。",
        example_romaji: "Suna de asobimasu.",
        example_en: "I play in the sand.",
        example_mm: "သဲထဲမှာ ကစားတယ်။"
    },
    {
        japanese: "ほし",
        romaji: "hoshi",
        pronunciation: "hoshi",
        english: "star",
        burmese: "ကြယ်",
        category: "nature",
        example_jp: "ほしが みえます。",
        example_romaji: "Hoshi ga miemasu.",
        example_en: "I can see stars.",
        example_mm: "ကြယ်တွေမြင်ရတယ်။"
    },


];
// ========== GRAMMAR DATA ==========
const grammarData = [
    // ========== BASIC SENTENCE STRUCTURE (1-10) ==========
    {
        title: "〜は〜です",
        pronunciation: "wa desu",
        english: "A is B",
        burmese: "A သည် B ဖြစ်သည်",
        category: "basic",
        example_jp: "わたしは がくせいです。",
        example_romaji: "Watashi wa gakusei desu.",
        example_en: "I am a student.",
        example_mm: "ကျွန်တော် ကျောင်းသားဖြစ်ပါတယ်။"
    },
    {
        title: "〜は〜じゃないです / 〜ではありません",
        pronunciation: "wa janai desu / wa dewa arimasen",
        english: "A is not B",
        burmese: "A သည် B မဟုတ်ပါ",
        category: "basic",
        example_jp: "これは ほんじゃないです。",
        example_romaji: "Kore wa hon janai desu.",
        example_en: "This is not a book.",
        example_mm: "ဒါက စာအုပ်မဟုတ်ပါဘူး။"
    },
    {
        title: "〜ですか？",
        pronunciation: "desu ka",
        english: "Question particle (Is it A?)",
        burmese: "မေးခွန်းပါ (A လား?)",
        category: "basic",
        example_jp: "あなたは にほんじんですか？",
        example_romaji: "Anata wa nihonjin desu ka?",
        example_en: "Are you Japanese?",
        example_mm: "ခင်ဗျား ဂျပန်လား။"
    },
    {
        title: "〜も",
        pronunciation: "mo",
        english: "Also / too",
        burmese: "လည်း",
        category: "particle",
        example_jp: "わたしも いきます。",
        example_romaji: "Watashi mo ikimasu.",
        example_en: "I will go too.",
        example_mm: "ငါလည်းသွားမယ်။"
    },
    {
        title: "〜と",
        pronunciation: "to",
        english: "And (connecting nouns)",
        burmese: "နှင့် (နာမ်များကို ဆက်ရန်)",
        category: "particle",
        example_jp: "ほん と ノート。",
        example_romaji: "Hon to noto.",
        example_en: "Book and notebook.",
        example_mm: "စာအုပ်နှင့် မှတ်စုစာအုပ်။"
    },
    {
        title: "〜の",
        pronunciation: "no",
        english: "Possessive / 's",
        burmese: "၏",
        category: "particle",
        example_jp: "わたしの かばん。",
        example_romaji: "Watashi no kaban.",
        example_en: "My bag.",
        example_mm: "ငါ၏အိတ်။"
    },
    {
        title: "〜に (location)",
        pronunciation: "ni",
        english: "At / in (location exists)",
        burmese: "မှာ (တည်နေရာ)",
        category: "particle",
        example_jp: "がっこうに います。",
        example_romaji: "Gakkou ni imasu.",
        example_en: "I am at school.",
        example_mm: "ကျောင်းမှာရှိတယ်။"
    },
    {
        title: "〜に (time)",
        pronunciation: "ni",
        english: "At (specific time)",
        burmese: "မှာ (အချိန်)",
        category: "particle",
        example_jp: "くじに おきます。",
        example_romaji: "Kuji ni okimasu.",
        example_en: "I wake up at 9 o'clock.",
        example_mm: "၉ နာရီမှာ နိုးတယ်။"
    },
    {
        title: "〜へ",
        pronunciation: "e",
        english: "To / toward (direction)",
        burmese: "သို့ (လမ်းကြောင်း)",
        category: "particle",
        example_jp: "がっこうへ いきます。",
        example_romaji: "Gakkou e ikimasu.",
        example_en: "I go to school.",
        example_mm: "ကျောင်းကိုသွားတယ်။"
    },
    {
        title: "〜で (method/tool)",
        pronunciation: "de",
        english: "By / using (means)",
        burmese: "ဖြင့် (နည်းလမ်း)",
        category: "particle",
        example_jp: "でんしゃで いきます。",
        example_romaji: "Densha de ikimasu.",
        example_en: "I go by train.",
        example_mm: "ရထားနဲ့သွားတယ်။"
    },

    // ========== VERB FORMS (11-25) ==========
    {
        title: "〜ます",
        pronunciation: "masu",
        english: "Polite non-past",
        burmese: "ယဉ်ကျေးသော ပစ္စုပ္ပန်/အနာဂတ်",
        category: "verb",
        example_jp: "たべます。",
        example_romaji: "Tabemasu.",
        example_en: "I eat / will eat.",
        example_mm: "စားတယ် / စားမယ်။"
    },
    {
        title: "〜ません",
        pronunciation: "masen",
        english: "Polite negative",
        burmese: "ယဉ်ကျေးသော ငြင်းပယ်ချက်",
        category: "verb",
        example_jp: "たべません。",
        example_romaji: "Tabemasen.",
        example_en: "I do not eat.",
        example_mm: "မစားဘူး။"
    },
    {
        title: "〜ました",
        pronunciation: "mashita",
        english: "Polite past",
        burmese: "ယဉ်ကျေးသော အတိတ်",
        category: "verb",
        example_jp: "たべました。",
        example_romaji: "Tabemashita.",
        example_en: "I ate.",
        example_mm: "စားခဲ့တယ်။"
    },
    {
        title: "〜ませんでした",
        pronunciation: "masen deshita",
        english: "Polite past negative",
        burmese: "ယဉ်ကျေးသော အတိတ်ငြင်း",
        category: "verb",
        example_jp: "たべませんでした。",
        example_romaji: "Tabemasen deshita.",
        example_en: "I did not eat.",
        example_mm: "မစားခဲ့ဘူး။"
    },
    {
        title: "〜たいです",
        pronunciation: "tai desu",
        english: "Want to do",
        burmese: "လုပ်ချင်သည်",
        category: "verb",
        example_jp: "にほんに いきたいです。",
        example_romaji: "Nihon ni ikitai desu.",
        example_en: "I want to go to Japan.",
        example_mm: "ဂျပန်ကို သွားချင်တယ်။"
    },
    {
        title: "〜たくないです",
        pronunciation: "takunai desu",
        english: "Don't want to do",
        burmese: "မလုပ်ချင်ဘူး",
        category: "verb",
        example_jp: "はたらきたくないです。",
        example_romaji: "Hatarakitakunai desu.",
        example_en: "I don't want to work.",
        example_mm: "အလုပ်မလုပ်ချင်ဘူး။"
    },
    {
        title: "〜ましょう",
        pronunciation: "mashou",
        english: "Let's do",
        burmese: "လုပ်ကြရအောင်",
        category: "verb",
        example_jp: "いきましょう。",
        example_romaji: "Ikimashou.",
        example_en: "Let's go.",
        example_mm: "သွားကြရအောင်။"
    },
    {
        title: "〜ませんか",
        pronunciation: "masen ka",
        english: "Shall we? / Won't you?",
        burmese: "လုပ်မလား? (ဖိတ်ကြားချက်)",
        category: "verb",
        example_jp: "いっしょに いきませんか？",
        example_romaji: "Issho ni ikimasen ka?",
        example_en: "Shall we go together?",
        example_mm: "အတူတူသွားကြမလား။"
    },
    {
        title: "Dictionary Form (じしょけい)",
        pronunciation: "jisho kei",
        english: "Plain dictionary form",
        burmese: "အဘိဓာန်ပုံစံ",
        category: "verb",
        example_jp: "たべる／いく／くる",
        example_romaji: "Taberu / Iku / Kuru",
        example_en: "to eat / to go / to come",
        example_mm: "စားသည် / သွားသည် / လာသည်"
    },
    {
        title: "〜て Form",
        pronunciation: "te form",
        english: "Te-form (connects verbs)",
        burmese: "တဲပုံစံ (ကြိယာများကိုဆက်ရန်)",
        category: "verb",
        example_jp: "たべて／いって／きて",
        example_romaji: "Tabete / Itte / Kite",
        example_en: "eat and / go and / come and",
        example_mm: "စားပြီး / သွားပြီး / လာပြီး"
    },
    {
        title: "〜ている",
        pronunciation: "te iru",
        english: "Present continuous / state",
        burmese: "လုပ်နေသည် / အခြေအနေ",
        category: "verb",
        example_jp: "いま たべています。",
        example_romaji: "Ima tabete imasu.",
        example_en: "I am eating now.",
        example_mm: "ငါအခုစားနေတယ်။"
    },
    {
        title: "〜てもいいです",
        pronunciation: "te mo ii desu",
        english: "May I do / It's okay to do",
        burmese: "လုပ်လို့ရသည်",
        category: "verb",
        example_jp: "ここに すわってもいいですか？",
        example_romaji: "Koko ni suwatte mo ii desu ka?",
        example_en: "May I sit here?",
        example_mm: "ဒီမှာထိုင်လို့ရမလား။"
    },
    {
        title: "〜てはいけません",
        pronunciation: "te wa ikemasen",
        english: "Must not do",
        burmese: "မလုပ်ရ",
        category: "verb",
        example_jp: "たばこを すってはいけません。",
        example_romaji: "Tabako o sutte wa ikemasen.",
        example_en: "You must not smoke.",
        example_mm: "ဆေးလိပ်မသောက်ရ။"
    },
    {
        title: "〜なくてもいいです",
        pronunciation: "nakute mo ii desu",
        english: "Don't have to do",
        burmese: "မလုပ်လည်းရသည်",
        category: "verb",
        example_jp: "あした こなくてもいいです。",
        example_romaji: "Ashita konakute mo ii desu.",
        example_en: "You don't have to come tomorrow.",
        example_mm: "မနက်ဖြန် လာစရာမလိုဘူး။"
    },
    {
        title: "〜た Form",
        pronunciation: "ta form",
        english: "Plain past form",
        burmese: "တပုံစံ (အတိတ်)",
        category: "verb",
        example_jp: "たべた／いった／きた",
        example_romaji: "Tabeta / Itta / Kita",
        example_en: "ate / went / came",
        example_mm: "စားခဲ့တယ် / သွားခဲ့တယ် / လာခဲ့တယ်"
    },

    // ========== ADJECTIVES (26-35) ==========
    {
        title: "い-adjective 〜くない",
        pronunciation: "kunai",
        english: "Negative i-adjective",
        burmese: "အိုင်နာမဝိသေသန ငြင်း",
        category: "adjective",
        example_jp: "おいしくない。",
        example_romaji: "Oishikunai.",
        example_en: "Not delicious.",
        example_mm: "အရသာမရှိဘူး။"
    },
    {
        title: "い-adjective 〜かった",
        pronunciation: "katta",
        english: "Past i-adjective",
        burmese: "အိုင်နာမဝိသေသန အတိတ်",
        category: "adjective",
        example_jp: "おいしかった。",
        example_romaji: "Oishikatta.",
        example_en: "It was delicious.",
        example_mm: "အရသာရှိခဲ့တယ်။"
    },
    {
        title: "い-adjective 〜くなかった",
        pronunciation: "kunakatta",
        english: "Past negative i-adjective",
        burmese: "အိုင်နာမဝိသေသန အတိတ်ငြင်း",
        category: "adjective",
        example_jp: "おいしくなかった。",
        example_romaji: "Oishikunakatta.",
        example_en: "It was not delicious.",
        example_mm: "အရသာမရှိခဲ့ဘူး။"
    },
    {
        title: "な-adjective 〜じゃない",
        pronunciation: "janai",
        english: "Negative na-adjective",
        burmese: "နနာမဝိသေသန ငြင်း",
        category: "adjective",
        example_jp: "しずかじゃない。",
        example_romaji: "Shizuka janai.",
        example_en: "Not quiet.",
        example_mm: "မတိတ်ဆိတ်ဘူး။"
    },
    {
        title: "な-adjective 〜だった",
        pronunciation: "datta",
        english: "Past na-adjective",
        burmese: "နနာမဝိသေသန အတိတ်",
        category: "adjective",
        example_jp: "しずかだった。",
        example_romaji: "Shizuka datta.",
        example_en: "It was quiet.",
        example_mm: "တိတ်ဆိတ်ခဲ့တယ်။"
    },
    {
        title: "〜くて / 〜で",
        pronunciation: "kute / de",
        english: "Connecting adjectives",
        burmese: "နာမဝိသေသနများကိုဆက်ရန်",
        category: "adjective",
        example_jp: "あかるくて ひろい へや。",
        example_romaji: "Akarukute hiroi heya.",
        example_en: "Bright and wide room.",
        example_mm: "တောက်ပပြီး ကျယ်တဲ့အခန်း။"
    },
    {
        title: "〜すぎる",
        pronunciation: "sugiru",
        english: "Too much",
        burmese: "လွန်ကဲသည်",
        category: "adjective",
        example_jp: "たかすぎる。",
        example_romaji: "Takasugiru.",
        example_en: "Too expensive.",
        example_mm: "အရမ်းစျေးကြီးတယ်။"
    },
    {
        title: "〜くなる",
        pronunciation: "ku naru",
        english: "Become (i-adj)",
        burmese: "ဖြစ်လာသည် (အိုင်)",
        category: "adjective",
        example_jp: "あつくなる。",
        example_romaji: "Atsukunaru.",
        example_en: "It becomes hot.",
        example_mm: "ပူလာတယ်။"
    },
    {
        title: "〜になる",
        pronunciation: "ni naru",
        english: "Become (na-adj/noun)",
        burmese: "ဖြစ်လာသည် (န/နာမ်)",
        category: "adjective",
        example_jp: "しずかになる。",
        example_romaji: "Shizuka ni naru.",
        example_en: "It becomes quiet.",
        example_mm: "တိတ်ဆိတ်လာတယ်။"
    },
    {
        title: "〜くする",
        pronunciation: "ku suru",
        english: "Make something (i-adj)",
        burmese: "ဖြစ်စေသည် (အိုင်)",
        category: "adjective",
        example_jp: "やすくします。",
        example_romaji: "Yasuku shimasu.",
        example_en: "I make it cheap.",
        example_mm: "စျေးချိုအောင်လုပ်တယ်။"
    },

    // ========== NOUNS & COUNTERS (36-45) ==========
    {
        title: "〜がある",
        pronunciation: "ga aru",
        english: "There is (non-living)",
        burmese: "ရှိသည် (သက်မဲ့)",
        category: "noun",
        example_jp: "つくえが あります。",
        example_romaji: "Tsukue ga arimasu.",
        example_en: "There is a desk.",
        example_mm: "စားပွဲရှိတယ်။"
    },
    {
        title: "〜がいる",
        pronunciation: "ga iru",
        english: "There is (living)",
        burmese: "ရှိသည် (သက်ရှိ)",
        category: "noun",
        example_jp: "ねこが います。",
        example_romaji: "Neko ga imasu.",
        example_en: "There is a cat.",
        example_mm: "ကြောင်ရှိတယ်။"
    },
    {
        title: "〜が好き",
        pronunciation: "ga suki",
        english: "Like",
        burmese: "ကြိုက်သည်",
        category: "noun",
        example_jp: "さかな が すきです。",
        example_romaji: "Sakana ga suki desu.",
        example_en: "I like fish.",
        example_mm: "ငါးကြိုက်တယ်။"
    },
    {
        title: "〜が上手",
        pronunciation: "ga jouzu",
        english: "Good at",
        burmese: "ကျွမ်းကျင်သည်",
        category: "noun",
        example_jp: "ピアノ が じょうずです。",
        example_romaji: "Piano ga jouzu desu.",
        example_en: "I am good at piano.",
        example_mm: "စန္ဒယားကျွမ်းကျင်တယ်။"
    },
    {
        title: "〜が下手",
        pronunciation: "ga heta",
        english: "Poor at",
        burmese: "မကျွမ်းကျင်ဘူး",
        category: "noun",
        example_jp: "えいご が へたです。",
        example_romaji: "Eigo ga heta desu.",
        example_en: "I am bad at English.",
        example_mm: "အင်္ဂလိပ်စာ ညံ့တယ်။"
    },
    {
        title: "〜がほしい",
        pronunciation: "ga hoshii",
        english: "Want (something)",
        burmese: "လိုချင်သည် (အရာဝတ္ထု)",
        category: "noun",
        example_jp: "くるま が ほしいです。",
        example_romaji: "Kuruma ga hoshii desu.",
        example_en: "I want a car.",
        example_mm: "ကားလိုချင်တယ်။"
    },
    {
        title: "Counters 〜つ",
        pronunciation: "tsu",
        english: "General counter (1-10)",
        burmese: "အထွေထွေ အရေအတွက်",
        category: "counter",
        example_jp: "ひとつ、ふたつ、みっつ...",
        example_romaji: "Hitotsu, futatsu, mittsu...",
        example_en: "one, two, three...",
        example_mm: "တစ်ခု၊ နှစ်ခု၊ သုံးခု..."
    },
    {
        title: "Counters 〜人",
        pronunciation: "nin",
        english: "Counter for people",
        burmese: "လူဦးရေ",
        category: "counter",
        example_jp: "さんにん",
        example_romaji: "Sannin",
        example_en: "three people",
        example_mm: "လူသုံးယောက်"
    },
    {
        title: "Counters 〜時間",
        pronunciation: "jikan",
        english: "Counter for hours",
        burmese: "နာရီ",
        category: "counter",
        example_jp: "さんじかん",
        example_romaji: "Sanjikan",
        example_en: "three hours",
        example_mm: "သုံးနာရီကြာ"
    },
    {
        title: "Counters 〜円",
        pronunciation: "en",
        english: "Counter for yen",
        burmese: "ယန်းငွေ",
        category: "counter",
        example_jp: "ごひゃくえん",
        example_romaji: "Gohyaku en",
        example_en: "500 yen",
        example_mm: "ယန်း ၅၀၀"
    },

    // ========== QUESTION WORDS (46-52) ==========
    {
        title: "何 (なん／なに)",
        pronunciation: "nan / nani",
        english: "What",
        burmese: "ဘာ",
        category: "question",
        example_jp: "これは なんですか？",
        example_romaji: "Kore wa nan desu ka?",
        example_en: "What is this?",
        example_mm: "ဒါကဘာလဲ။"
    },
    {
        title: "誰 (だれ)",
        pronunciation: "dare",
        english: "Who",
        burmese: "ဘယ်သူ",
        category: "question",
        example_jp: "あのひとは だれですか？",
        example_romaji: "Ano hito wa dare desu ka?",
        example_en: "Who is that person?",
        example_mm: "အဲဒီလူက ဘယ်သူလဲ။"
    },
    {
        title: "どこ",
        pronunciation: "doko",
        english: "Where",
        burmese: "ဘယ်မှာ",
        category: "question",
        example_jp: "トイレは どこですか？",
        example_romaji: "Toire wa doko desu ka?",
        example_en: "Where is the toilet?",
        example_mm: "အိမ်သာက ဘယ်မှာလဲ။"
    },
    {
        title: "いつ",
        pronunciation: "itsu",
        english: "When",
        burmese: "ဘယ်အချိန်",
        category: "question",
        example_jp: "ぱーてぃーは いつですか？",
        example_romaji: "Paatii wa itsu desu ka?",
        example_en: "When is the party?",
        example_mm: "ပါတီက ဘယ်တော့လဲ။"
    },
    {
        title: "なぜ / どうして",
        pronunciation: "naze / doushite",
        english: "Why",
        burmese: "ဘာဖြစ်လို့",
        category: "question",
        example_jp: "どうして おくれたんですか？",
        example_romaji: "Doushite okureta n desu ka?",
        example_en: "Why were you late?",
        example_mm: "ဘာလို့နောက်ကျတာလဲ။"
    },
    {
        title: "どの〜",
        pronunciation: "dono",
        english: "Which (noun)",
        burmese: "ဘယ် (နာမ်)",
        category: "question",
        example_jp: "どの くるま が あなたのですか？",
        example_romaji: "Dono kuruma ga anata no desu ka?",
        example_en: "Which car is yours?",
        example_mm: "ဘယ်ကားက မင်းဟာလဲ။"
    },
    {
        title: "どれ",
        pronunciation: "dore",
        english: "Which one",
        burmese: "ဘယ်ဟာ",
        category: "question",
        example_jp: "どれが あなたの かばんですか？",
        example_romaji: "Dore ga anata no kaban desu ka?",
        example_en: "Which one is your bag?",
        example_mm: "ဘယ်အိတ်က မင်းဟာလဲ။"
    },

    // ========== CONJUNCTIONS & CONNECTORS (53-62) ==========
    {
        title: "〜から (reason)",
        pronunciation: "kara",
        english: "Because",
        burmese: "သောကြောင့်",
        category: "conjunction",
        example_jp: "あめが ふったから、やめた。",
        example_romaji: "Ame ga futta kara, yameta.",
        example_en: "Because it rained, I quit.",
        example_mm: "မိုးရွာလို့ ရပ်လိုက်တယ်။"
    },
    {
        title: "〜ので",
        pronunciation: "node",
        english: "Because (more polite)",
        burmese: "သောကြောင့် (ပိုယဉ်ကျေး)",
        category: "conjunction",
        example_jp: "びょうきなので、やすみます。",
        example_romaji: "Byouki na node, yasumimasu.",
        example_en: "Because I am sick, I will rest.",
        example_mm: "နေမကောင်းလို့ အနားယူမယ်။"
    },
    {
        title: "〜のに",
        pronunciation: "noni",
        english: "Although / even though",
        burmese: "သော်လည်း",
        category: "conjunction",
        example_jp: "たかかったのに、かいました。",
        example_romaji: "Takakatta noni, kaimashita.",
        example_en: "Although it was expensive, I bought it.",
        example_mm: "စျေးကြီးပေမဲ့ ဝယ်လိုက်တယ်။"
    },
    {
        title: "〜けど / 〜が",
        pronunciation: "kedo / ga",
        english: "But / however",
        burmese: "သော်လည်း",
        category: "conjunction",
        example_jp: "たのしいけど、つかれました。",
        example_romaji: "Tanoshii kedo, tsukaremashita.",
        example_en: "It was fun, but I'm tired.",
        example_mm: "ပျော်ပေမဲ့ ပင်ပန်းတယ်။"
    },
    {
        title: "そして",
        pronunciation: "soshite",
        english: "And then",
        burmese: "ပြီးတော့",
        category: "conjunction",
        example_jp: "きっさてんに いって、そして えいがを みました。",
        example_romaji: "Kissaten ni itte, soshite eiga o mimashita.",
        example_en: "I went to a cafe and then watched a movie.",
        example_mm: "လက်ဖက်ရည်ဆိုင်သွားပြီး ရုပ်ရှင်ကြည့်တယ်။"
    },
    {
        title: "それから",
        pronunciation: "sorekara",
        english: "After that / since then",
        burmese: "အဲဒီနောက်",
        category: "conjunction",
        example_jp: "ごはんを たべて、それから べんきょうします。",
        example_romaji: "Gohan o tabete, sorekara benkyou shimasu.",
        example_en: "I'll eat, and after that study.",
        example_mm: "ထမင်းစားပြီး လေ့လာမယ်။"
    },
    {
        title: "でも",
        pronunciation: "demo",
        english: "But / however",
        burmese: "ဒါပေမဲ့",
        category: "conjunction",
        example_jp: "やすいです。でも よくないです。",
        example_romaji: "Yasui desu. Demo yokunai desu.",
        example_en: "It's cheap. But it's not good.",
        example_mm: "စျေးချိုတယ်။ ဒါပေမဲ့မကောင်းဘူး။"
    },
    {
        title: "それに",
        pronunciation: "soreni",
        english: "Moreover / in addition",
        burmese: "ထို့အပြင်",
        category: "conjunction",
        example_jp: "やすいし、それに べんりです。",
        example_romaji: "Yasui shi, soreni benri desu.",
        example_en: "It's cheap, and moreover it's convenient.",
        example_mm: "စျေးချိုတယ်၊ ပြီးတော့ အဆင်ပြေတယ်။"
    },
    {
        title: "〜し",
        pronunciation: "shi",
        english: "And (listing reasons)",
        burmese: "ပြီးတော့ (အကြောင်းများစာရင်း)",
        category: "conjunction",
        example_jp: "やすいし、おいしい。",
        example_romaji: "Yasui shi, oishii.",
        example_en: "It's cheap, and it's delicious.",
        example_mm: "စျေးချိုတယ်၊ အရသာလည်းရှိတယ်။"
    },
    {
        title: "〜たり〜たりする",
        pronunciation: "tari tari suru",
        english: "Do things like",
        burmese: "စသည်တို့ လုပ်သည်",
        category: "conjunction",
        example_jp: "よんだり、かいたりします。",
        example_romaji: "Yondari, kaitari shimasu.",
        example_en: "I do things like reading and writing.",
        example_mm: "စာဖတ်တာ၊ ရေးတာစတာတွေလုပ်တယ်။"
    },

    // ========== TIME & CONDITIONAL (63-72) ==========
    {
        title: "〜前に",
        pronunciation: "mae ni",
        english: "Before doing",
        burmese: "မလုပ်ခင်က",
        category: "time",
        example_jp: "ねる まえに はをみがきます。",
        example_romaji: "Neru mae ni ha o migakimasu.",
        example_en: "I brush my teeth before sleeping.",
        example_mm: "အိပ်ခါနီး သွားတိုက်တယ်။"
    },
    {
        title: "〜後で",
        pronunciation: "ato de",
        english: "After doing",
        burmese: "လုပ်ပြီးနောက်",
        category: "time",
        example_jp: "たべた あとで くすりを のみます。",
        example_romaji: "Tabeta ato de kusuri o nomimasu.",
        example_en: "I take medicine after eating.",
        example_mm: "စားပြီးမှ ဆေးသောက်တယ်။"
    },
    {
        title: "〜ながら",
        pronunciation: "nagara",
        english: "While doing",
        burmese: "လုပ်ရင်း",
        category: "time",
        example_jp: "おんがくを ききながら べんきょうします。",
        example_romaji: "Ongaku o kikinagara benkyou shimasu.",
        example_en: "I study while listening to music.",
        example_mm: "ဂီတနားထောင်ရင်း လေ့လာတယ်။"
    },
    {
        title: "〜てから",
        pronunciation: "te kara",
        english: "After doing (sequence)",
        burmese: "လုပ်ပြီးမှ (အစဉ်)",
        category: "time",
        example_jp: "てを あらってから たべます。",
        example_romaji: "Te o aratte kara tabemasu.",
        example_en: "After washing hands, I eat.",
        example_mm: "လက်ဆေးပြီးမှ စားတယ်။"
    },
    {
        title: "〜始める",
        pronunciation: "hajimeru",
        english: "Start doing",
        burmese: "စတင်သည်",
        category: "time",
        example_jp: "ふりはじめた。",
        example_romaji: "Furi hajimeta.",
        example_en: "It started raining.",
        example_mm: "စတင်ရွာသွန်းတယ်။"
    },
    {
        title: "〜終わる",
        pronunciation: "owaru",
        english: "Finish doing",
        burmese: "ပြီးဆုံးသည်",
        category: "time",
        example_jp: "たべおわった。",
        example_romaji: "Tabeowatta.",
        example_en: "I finished eating.",
        example_mm: "စားပြီးသွားပြီ။"
    },
    {
        title: "〜と (conditional)",
        pronunciation: "to",
        english: "If / when (natural consequence)",
        burmese: "လျှင် (သဘာဝအကျိုး)",
        category: "conditional",
        example_jp: "はるに なると、さくらが さきます。",
        example_romaji: "Haru ni naru to, sakura ga sakimasu.",
        example_en: "When spring comes, cherry blossoms bloom.",
        example_mm: "နွေဦးရောက်ရင် ချယ်ရီပွင့်တယ်။"
    },
    {
        title: "〜ば (conditional)",
        pronunciation: "ba",
        english: "If (general condition)",
        burmese: "လျှင် (အထွေထွေ)",
        category: "conditional",
        example_jp: "やすければ、かいます。",
        example_romaji: "Yasukereba, kaimasu.",
        example_en: "If it's cheap, I'll buy it.",
        example_mm: "စျေးချိုရင် ဝယ်မယ်။"
    },
    {
        title: "〜たら (conditional)",
        pronunciation: "tara",
        english: "If / when (specific)",
        burmese: "လျှင် (တိကျ)",
        category: "conditional",
        example_jp: "あした あめが ふったら、いかない。",
        example_romaji: "Ashita ame ga futtara, ikanai.",
        example_en: "If it rains tomorrow, I won't go.",
        example_mm: "မနက်ဖြန်မိုးရွာရင် မသွားဘူး။"
    },
    {
        title: "〜ても",
        pronunciation: "temo",
        english: "Even if",
        burmese: "သော်လည်း",
        category: "conditional",
        example_jp: "さむくても、にほんに いきます。",
        example_romaji: "Samukutemo, nihon ni ikimasu.",
        example_en: "Even if it's cold, I'll go to Japan.",
        example_mm: "အေးရင်တောင် ဂျပန်ကိုသွားမယ်။"
    },

    // ========== ADDITIONAL EXPRESSIONS (73-80) ==========
    {
        title: "〜でしょう",
        pronunciation: "deshou",
        english: "Probably / isn't it?",
        burmese: "ဖြစ်မယ် / မဟုတ်လား",
        category: "expression",
        example_jp: "あしたは あめでしょう。",
        example_romaji: "Ashita wa ame deshou.",
        example_en: "It will probably rain tomorrow.",
        example_mm: "မနက်ဖြန် မိုးရွာမယ်။"
    },
    {
        title: "〜かも知れない",
        pronunciation: "kamo shirenai",
        english: "Maybe / might",
        burmese: "ဖြစ်နိုင်သည်",
        category: "expression",
        example_jp: "あめが ふる かも しれない。",
        example_romaji: "Ame ga furu kamo shirenai.",
        example_en: "It might rain.",
        example_mm: "မိုးရွာနိုင်တယ်။"
    },
    {
        title: "〜つもり",
        pronunciation: "tsumori",
        english: "Intend to do",
        burmese: "လုပ်ရန် ရည်ရွယ်သည်",
        category: "expression",
        example_jp: "にほんに いく つもりです。",
        example_romaji: "Nihon ni iku tsumori desu.",
        example_en: "I intend to go to Japan.",
        example_mm: "ဂျပန်ကိုသွားဖို့ ရည်ရွယ်ထားတယ်။"
    },
    {
        title: "〜予定",
        pronunciation: "yotei",
        english: "Plan to do",
        burmese: "စီစဉ်ထားသည်",
        category: "expression",
        example_jp: "らいしゅう きょうとに いく よていです。",
        example_romaji: "Raishuu Kyouto ni iku yotei desu.",
        example_en: "I plan to go to Kyoto next week.",
        example_mm: "လာမယ့်အပတ် ကျိုတိုကိုသွားဖို့ စီစဉ်ထားတယ်။"
    },
    {
        title: "〜方 (かた)",
        pronunciation: "kata",
        english: "Way of doing",
        burmese: "လုပ်နည်း",
        category: "expression",
        example_jp: "この かんじの かきかたを おしえてください。",
        example_romaji: "Kono kanji no kakikata o oshiete kudasai.",
        example_en: "Please teach me how to write this kanji.",
        example_mm: "ဒီကန်ဂျိ ရေးနည်းကို သင်ပေးပါ။"
    },
    {
        title: "〜ながら (contrast)",
        pronunciation: "nagara",
        english: "Although / but",
        burmese: "သော်လည်း (ဆန့်ကျင်)",
        category: "expression",
        example_jp: "おそいながら、がんばっています。",
        example_romaji: "Osoinagara, ganbatte imasu.",
        example_en: "Although I'm slow, I'm doing my best.",
        example_mm: "နှေးပေမဲ့ ကြိုးစားနေတယ်။"
    },
    {
        title: "〜そう (appearance)",
        pronunciation: "sou",
        english: "Looks like (seems)",
        burmese: "ပုံရသည်",
        category: "expression",
        example_jp: "おいしそう。",
        example_romaji: "Oishisou.",
        example_en: "It looks delicious.",
        example_mm: "အရသာရှိပုံရတယ်။"
    },
    {
        title: "〜やすい / 〜にくい",
        pronunciation: "yasui / nikui",
        english: "Easy to / difficult to",
        burmese: "လုပ်ရလွယ်သည် / လုပ်ရခက်သည်",
        category: "expression",
        example_jp: "このペンは かきやすいです。",
        example_romaji: "Kono pen wa kakiyasui desu.",
        example_en: "This pen is easy to write with.",
        example_mm: "ဒီဘောပင်က ရေးရလွယ်တယ်။"
    },
    {
        title: "〜かもしれない",
        pronunciation: "kamo shirenai",
        english: "Maybe / might (polite)",
        burmese: "ဖြစ်နိုင်သည် (ယဉ်ကျေး)",
        category: "expression",
        example_jp: "せんせいは もう かえった かもしれない。",
        example_romaji: "Sensei wa mou kaetta kamo shirenai.",
        example_en: "The teacher might have already gone home.",
        example_mm: "ဆရာက အိမ်ပြန်သွားပြီဖြစ်နိုင်တယ်။"
    },
    {
        title: "〜はず",
        pronunciation: "hazu",
        english: "Supposed to / should",
        burmese: "ဖြစ်ရမည်",
        category: "expression",
        example_jp: "でんしゃは ろくじに つくはずです。",
        example_romaji: "Densha wa rokuji ni tsuku hazu desu.",
        example_en: "The train is supposed to arrive at 6.",
        example_mm: "ရထားက ၆ နာရီမှာ ရောက်ရမယ်။"
    }
];
// ========== KANJI DATA ==========
const kanjiData = [
    {
        kanji: "一",
        pronunciation: "ichi",
        english: "one",
        burmese: "တစ်",
        category: "numbers",
        example_jp: "一つ",
        example_en: "one thing",
        example_mm: "တစ်ခု"
    },
    {
        kanji: "二",
        pronunciation: "ni",
        english: "two",
        burmese: "နှစ်",
        category: "numbers",
        example_jp: "二人",
        example_en: "two people",
        example_mm: "လူနှစ်ယောက်"
    },
    {
        kanji: "三",
        pronunciation: "san",
        english: "three",
        burmese: "သုံး",
        category: "numbers",
        example_jp: "三つ",
        example_en: "three things",
        example_mm: "သုံးခု"
    }
];

// ========== CATEGORY DEFINITIONS ==========
const vocabularyCategories = [
    { id: "all", name: "All", icon: "fa-book", jp: "すべて" },
    { id: "greetings", name: "Greetings", icon: "fa-hand-peace", jp: "あいさつ" },
    { id: "numbers", name: "Numbers", icon: "fa-hashtag", jp: "かず" },
    { id: "time", name: "Time", icon: "fa-clock", jp: "じかん" },
    { id: "shopping", name: "Shopping", icon: "fa-bag-shopping", jp: "かいもの" },
    { id: "daily", name: "Daily Life", icon: "fa-house-chimney", jp: "にちじょう" },
    { id: "family", name: "Family", icon: "fa-users", jp: "かぞく" },
    { id: "people", name: "People", icon: "fa-user", jp: "ひと" },
    { id: "body", name: "Body Parts", icon: "fa-heart", jp: "からだ" },
    { id: "food", name: "Food", icon: "fa-utensils", jp: "たべもの" },
    { id: "house", name: "House", icon: "fa-home", jp: "いえ" },
    { id: "school", name: "School", icon: "fa-school", jp: "がっこう" },
    { id: "work", name: "Work", icon: "fa-briefcase", jp: "しごと" },
    { id: "transport", name: "Transport", icon: "fa-train", jp: "こうつう" },
    { id: "places", name: "Places", icon: "fa-location-dot", jp: "ばしょ" },
    { id: "weather", name: "Weather", icon: "fa-sun", jp: "てんき" },
    { id: "adjectives", name: "Adjectives", icon: "fa-star", jp: "けいようし" },
    { id: "verbs", name: "Verbs", icon: "fa-running", jp: "どうし" },
    { id: "particles", name: "Particles", icon: "fa-link", jp: "じょし" },
    { id: "misc", name: "Misc", icon: "fa-ellipsis", jp: "そのた" }
];

const grammarCategories = [
    { id: "all", name: "All Grammar", icon: "fa-star" },
    { id: "basic", name: "Basic Structure", icon: "fa-book" },
    { id: "particle", name: "Particles", icon: "fa-link" },
    { id: "verb", name: "Verb Forms", icon: "fa-running" },
    { id: "adjective", name: "Adjectives", icon: "fa-palette" },
    { id: "noun", name: "Nouns & Counters", icon: "fa-hashtag" },
    { id: "question", name: "Question Words", icon: "fa-question-circle" },
    { id: "conjunction", name: "Conjunctions", icon: "fa-code-branch" },
    { id: "time", name: "Time Expressions", icon: "fa-clock" },
    { id: "conditional", name: "Conditionals", icon: "fa-code-branch" },
    { id: "expression", name: "Expressions", icon: "fa-smile" }
];

const kanjiCategories = [
    { id: "all", name: "All", icon: "fa-book" },
    { id: "numbers", name: "Numbers", icon: "fa-hashtag" }
];

// ========== STATE VARIABLES ==========
let currentCategory = 'vocab';
let currentTopic = 'all';
let searchTerm = '';

// ========== HELPER FUNCTIONS ==========

// Function to count words per category
function countWordsByCategory() {
    const categoryCounts = {};
    
    // Initialize all categories with 0
    vocabularyCategories.forEach(cat => {
        categoryCounts[cat.id] = 0;
    });
    
    // Count words in each category
    vocabularyData.forEach(word => {
        if (categoryCounts.hasOwnProperty(word.category)) {
            categoryCounts[word.category]++;
        } else {
            categoryCounts[word.category] = (categoryCounts[word.category] || 0) + 1;
        }
    });
    
    return categoryCounts;
}

// Get all categories with their counts
function getAllCategoriesWithCounts() {
    const counts = countWordsByCategory();
    return vocabularyCategories.map(cat => ({
        ...cat,
        count: counts[cat.id] || 0
    }));
}

// Web Speech API for Japanese pronunciation
function speakJapanese(text) {
    if (!window.speechSynthesis) {
        console.log("Browser doesn't support speech synthesis");
        return;
    }
    
    window.speechSynthesis.cancel();
    
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'ja-JP';
    utterance.rate = 0.8;
    utterance.pitch = 1.0;
    utterance.volume = 1.0;
    
    function setJapaneseVoice() {
        const voices = window.speechSynthesis.getVoices();
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

// Generate category filter bar with counts
function generateCategoryBar() {
    const categoryBar = document.getElementById('categoryBar');
    if (!categoryBar) return;
    
    let categories = [];
    if (currentCategory === 'vocab') {
        categories = getAllCategoriesWithCounts(); // Includes counts!
    } else if (currentCategory === 'grammar') {
        categories = grammarCategories.map(cat => ({
            ...cat,
            count: grammarData.filter(g => g.category === cat.id).length
        }));
    } else {
        categories = kanjiCategories.map(cat => ({
            ...cat,
            count: kanjiData.filter(k => k.category === cat.id).length
        }));
    }
    
    categoryBar.innerHTML = categories.map(cat => `
        <button class="category-btn ${currentTopic === cat.id ? 'active-category' : ''}" data-category="${cat.id}">
            <i class="fas ${cat.icon}"></i> 
            ${cat.name}
            <span class="category-count">${cat.count}</span>
        </button>
    `).join('');
    
    // Add click listeners
    document.querySelectorAll('.category-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            currentTopic = this.getAttribute('data-category');
            generateCategoryBar();
            renderFlashcards();
        });
    });
}

// Update all counters
function updateCounters() {
    document.getElementById('vocabCount').textContent = vocabularyData.length;
    document.getElementById('grammarCount').textContent = grammarData.length;
    document.getElementById('kanjiCount').textContent = kanjiData.length;
    
    document.getElementById('vocabTabCount').textContent = vocabularyData.length;
    document.getElementById('grammarTabCount').textContent = grammarData.length;
    document.getElementById('kanjiTabCount').textContent = kanjiData.length;
}

// Filter items based on search term and topic
function getFilteredItems() {
    let items = [];
    
    if (currentCategory === 'vocab') {
        items = vocabularyData;
    } else if (currentCategory === 'grammar') {
        items = grammarData;
    } else {
        items = kanjiData;
    }
    
    // Apply topic filter
    if (currentTopic !== 'all') {
        items = items.filter(item => item.category === currentTopic);
    }
    
    // Apply search filter
    if (searchTerm.trim() !== '') {
        const term = searchTerm.toLowerCase();
        items = items.filter(item => {
            if (currentCategory === 'vocab') {
                return item.japanese.toLowerCase().includes(term) ||
                       item.english.toLowerCase().includes(term) ||
                       item.burmese.toLowerCase().includes(term);
            } else if (currentCategory === 'grammar') {
                return item.title.toLowerCase().includes(term) ||
                       item.english.toLowerCase().includes(term) ||
                       item.burmese.toLowerCase().includes(term);
            } else {
                return item.kanji.toLowerCase().includes(term) ||
                       item.english.toLowerCase().includes(term) ||
                       item.burmese.toLowerCase().includes(term);
            }
        });
    }
    
    return items;
}


// ========== PDF GENERATION FUNCTIONS ==========

// Helper function to escape HTML special characters
function escapeHtml(text) {
    if (!text) return '';
    return String(text)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
}

// Show loading overlay
function showPDFLoadingOverlay(message = 'Generating PDF...') {
    const existingOverlay = document.getElementById('pdfLoadingOverlay');
    if (existingOverlay) existingOverlay.remove();
    
    const loadingDiv = document.createElement('div');
    loadingDiv.id = 'pdfLoadingOverlay';
    loadingDiv.innerHTML = `
        <div style="position:fixed; top:50%; left:50%; transform:translate(-50%,-50%); 
                    background:#1e3c72; color:white; padding:25px 35px; border-radius:15px; 
                    z-index:10000; text-align:center; box-shadow:0 0 30px rgba(0,0,0,0.5);">
            <i class="fas fa-spinner fa-pulse" style="font-size:40px; margin-bottom:15px; display:block"></i>
            <p style="margin:0; font-size:16px"><strong>${message}</strong></p>
            <p style="margin:10px 0 0 0; font-size:12px" id="pdfProgressText">Please wait...</p>
        </div>
    `;
    document.body.appendChild(loadingDiv);
}

// Update loading progress
function updatePDFProgress(text) {
    const progressText = document.getElementById('pdfProgressText');
    if (progressText) {
        progressText.innerHTML = text;
    }
}

// Hide loading overlay
function hidePDFLoadingOverlay() {
    const overlay = document.getElementById('pdfLoadingOverlay');
    if (overlay) overlay.remove();
}

// Ensure libraries are loaded
async function ensureLibrariesLoaded() {
    // Check if jspdf is already loaded
    if (typeof window.jspdf !== 'undefined' && window.jspdf.jsPDF) {
        return true;
    }
    
    // Load jspdf
    await new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = 'https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js';
        script.onload = resolve;
        script.onerror = reject;
        document.head.appendChild(script);
    });
    
    // Load html2canvas
    await new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = 'https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js';
        script.onload = resolve;
        script.onerror = reject;
        document.head.appendChild(script);
    });
    
    // Wait a moment for libraries to initialize
    await new Promise(r => setTimeout(r, 500));
    return true;
}

// Generate PDF using html2canvas (better for Japanese characters)
async function generatePDFWithHtml2Canvas(data, title, filename, getRowData, columns) {
    return new Promise(async (resolve, reject) => {
        try {
            await ensureLibrariesLoaded();
            
            // Create a temporary div for rendering
            const tempDiv = document.createElement('div');
            tempDiv.style.position = 'absolute';
            tempDiv.style.left = '-9999px';
            tempDiv.style.top = '0';
            tempDiv.style.backgroundColor = 'white';
            tempDiv.style.padding = '20px';
            tempDiv.style.width = '1100px';
            tempDiv.style.fontFamily = "'Noto Sans JP', 'Noto Sans Myanmar', 'MS Gothic', 'Meiryo', sans-serif";
            
            // Build HTML table
            let rows = '';
            for (let i = 0; i < data.length; i++) {
                const rowData = getRowData(data[i]);
                rows += `<tr>`;
                for (let j = 0; j < columns.length; j++) {
                    const cellContent = escapeHtml(rowData[j] || '');
                    let fontFamily = '';
                    if (j === 0) fontFamily = 'font-family: "Noto Sans JP", "MS Gothic", "Meiryo", monospace;';
                    if (j === 3) fontFamily = 'font-family: "Noto Sans Myanmar", "Myanmar Text", sans-serif;';
                    rows += `<td style="border:1px solid #ccc;padding:10px;font-size:11px;vertical-align:top;${fontFamily}">${cellContent}</td>`;
                }
                rows += `</td>`;
            }
            
            tempDiv.innerHTML = `
                <div style="font-family:'Noto Sans JP','Noto Sans Myanmar','MS Gothic','Meiryo',sans-serif; width:100%">
                    <div style="text-align:center; margin-bottom:20px;">
                        <h1 style="color:#1e3c72; margin:0 0 5px 0; font-size:22px;">
                            🇯🇵 Next Gen Learning Myanmar - ${title}
                        </h1>
                        <p style="margin:0; font-size:11px; color:#666;">
                            Generated: ${new Date().toLocaleDateString()} | Total: ${data.length} items
                        </p>
                    </div>
                    <table style="border-collapse:collapse;width:100%; font-size:12px;">
                        <thead>
                            <tr style="background-color:#1e3c72;color:white;font-weight:bold;">
                                ${columns.map(col => `<th style="border:1px solid #1e3c72;padding:10px;text-align:left;font-size:12px;">${escapeHtml(col)}</th>`).join('')}
                            </tr>
                        </thead>
                        <tbody>
                            ${rows}
                        </tbody>
                    </table>
                    <div style="text-align:center; margin-top:20px; font-size:9px; color:#999;">
                        Next Gen Learning Myanmar - Master Japanese from N5 to N1
                    </div>
                </div>
            `;
            
            document.body.appendChild(tempDiv);
            await new Promise(r => setTimeout(r, 300));
            
            // Render with html2canvas
            const canvas = await html2canvas(tempDiv, {
                scale: 2,
                backgroundColor: '#ffffff',
                logging: false,
                useCORS: false,
                windowWidth: tempDiv.scrollWidth,
                onclone: (clonedDoc, element) => {
                    // Ensure fonts are applied in cloned document
                    const style = clonedDoc.createElement('style');
                    style.textContent = `
                        td, th { font-family: "Noto Sans JP", "MS Gothic", "Meiryo", "Noto Sans Myanmar", sans-serif; }
                    `;
                    clonedDoc.head.appendChild(style);
                }
            });
            
            const imgData = canvas.toDataURL('image/jpeg', 0.95);
            
            const { jsPDF } = window.jspdf;
            const doc = new jsPDF({
                orientation: 'landscape',
                unit: 'mm',
                format: 'a4'
            });
            
            const imgWidth = 277; // A4 landscape width in mm (297 - margins)
            const imgHeight = (canvas.height * imgWidth) / canvas.width;
            let heightLeft = imgHeight;
            let position = 0;
            let pageNum = 1;
            
            doc.addImage(imgData, 'JPEG', 10, position, imgWidth, imgHeight);
            heightLeft -= (doc.internal.pageSize.getHeight() - 20);
            
            while (heightLeft > 0) {
                position = heightLeft - imgHeight;
                doc.addPage();
                doc.addImage(imgData, 'JPEG', 10, position, imgWidth, imgHeight);
                heightLeft -= (doc.internal.pageSize.getHeight() - 20);
                pageNum++;
            }
            
            doc.save(`${filename}.pdf`);
            tempDiv.remove();
            resolve();
            
        } catch (error) {
            console.error('PDF Generation Error:', error);
            reject(error);
        }
    });
}

// ========== VOCABULARY PDF ==========
async function generateVocabularyPDF() {
    const dataList = vocabularyData;
    
    if (!dataList || dataList.length === 0) {
        alert('No vocabulary data available to generate PDF.');
        return;
    }
    
    showPDFLoadingOverlay('Generating Vocabulary PDF...');
    updatePDFProgress(`Processing ${dataList.length} vocabulary words...`);
    
    try {
        await generatePDFWithHtml2Canvas(
            dataList,
            'N5 Vocabulary List',
            'N5_Vocabulary_Japanese_English_Burmese',
            (item) => [
                item.japanese || '',
                item.romaji || item.pronunciation || '',
                item.english || '',
                item.burmese || ''
            ],
            ['日本語 (Japanese)', 'Romaji', 'English', 'မြန်မာ (Burmese)']
        );
        hidePDFLoadingOverlay();
        alert(`✅ Successfully generated PDF with ${dataList.length} vocabulary words!`);
    } catch (error) {
        hidePDFLoadingOverlay();
        alert('Error generating PDF. Please check your internet connection and try again.');
        console.error(error);
    }
}

// ========== GRAMMAR PDF ==========
async function generateGrammarPDF() {
    const dataList = grammarData;
    
    if (!dataList || dataList.length === 0) {
        alert('No grammar data available to generate PDF.');
        return;
    }
    
    showPDFLoadingOverlay('Generating Grammar PDF...');
    updatePDFProgress(`Processing ${dataList.length} grammar rules...`);
    
    try {
        await generatePDFWithHtml2Canvas(
            dataList,
            'N5 Grammar List',
            'N5_Grammar_Japanese_English_Burmese',
            (item) => [
                item.title || '',
                item.pronunciation || '',
                item.english || '',
                item.burmese || ''
            ],
            ['日本語 (Japanese Grammar Point)', 'Pronunciation/Romaji', 'English Meaning', 'မြန်မာ (Burmese)']
        );
        hidePDFLoadingOverlay();
        alert(`✅ Successfully generated PDF with ${dataList.length} grammar rules!`);
    } catch (error) {
        hidePDFLoadingOverlay();
        alert('Error generating PDF. Please check your internet connection and try again.');
        console.error(error);
    }
}

// ========== KANJI PDF ==========
async function generateKanjiPDF() {
    const dataList = kanjiData;
    
    if (!dataList || dataList.length === 0) {
        alert('No kanji data available to generate PDF.');
        return;
    }
    
    showPDFLoadingOverlay('Generating Kanji PDF...');
    updatePDFProgress(`Processing ${dataList.length} kanji characters...`);
    
    try {
        await generatePDFWithHtml2Canvas(
            dataList,
            'N5 Kanji List',
            'N5_Kanji_Japanese_English_Burmese',
            (item) => [
                item.kanji || '',
                item.pronunciation || '',
                item.english || '',
                item.burmese || ''
            ],
            ['漢字 (Kanji)', 'On/Kun Reading', 'English Meaning', 'မြန်မာ (Burmese)']
        );
        hidePDFLoadingOverlay();
        alert(`✅ Successfully generated PDF with ${dataList.length} kanji characters!`);
    } catch (error) {
        hidePDFLoadingOverlay();
        alert('Error generating PDF. Please check your internet connection and try again.');
        console.error(error);
    }
}

// Update PDF button based on current category
function updatePDFButtons() {
    const pdfSection = document.querySelector('.pdf-download-section');
    if (!pdfSection) return;
    
    // Clear existing buttons
    pdfSection.innerHTML = '';
    
    if (currentCategory === 'vocab') {
        pdfSection.innerHTML = `
            <button id="downloadVocabPDF" class="pdf-download-btn">
                <i class="fas fa-file-pdf"></i> Download N5 Vocabulary PDF (日本語・Romaji・English・မြန်မာ)
            </button>
        `;
        const btn = document.getElementById('downloadVocabPDF');
        if (btn) btn.addEventListener('click', generateVocabularyPDF);
    } else if (currentCategory === 'grammar') {
        pdfSection.innerHTML = `
            <button id="downloadGrammarPDF" class="pdf-download-btn grammar-pdf">
                <i class="fas fa-file-pdf"></i> Download N5 Grammar PDF (日本語・Romaji・English・မြန်မာ)
            </button>
        `;
        const btn = document.getElementById('downloadGrammarPDF');
        if (btn) btn.addEventListener('click', generateGrammarPDF);
    } else if (currentCategory === 'kanji') {
        pdfSection.innerHTML = `
            <button id="downloadKanjiPDF" class="pdf-download-btn kanji-pdf">
                <i class="fas fa-file-pdf"></i> Download N5 Kanji PDF (日本語・Romaji・English・မြန်မာ)
            </button>
        `;
        const btn = document.getElementById('downloadKanjiPDF');
        if (btn) btn.addEventListener('click', generateKanjiPDF);
    }
}
// Helper function to load scripts dynamically
function loadScript(src) {
    return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = src;
        script.onload = resolve;
        script.onerror = reject;
        document.head.appendChild(script);
    });
}

// ========== PDF GENERATION FUNCTIONS ==========

// Main PDF generation function with auto-split for large data
async function generateVocabularyPDF() {
    const vocabList = vocabularyData;
    
    if (!vocabList || vocabList.length === 0) {
        alert('No vocabulary data available to generate PDF.');
        return;
    }
    
    // Set maximum words per PDF file (1200 works well for performance)
    const MAX_WORDS_PER_FILE = 1200;
    
    // Check if we need to split into multiple files
    if (vocabList.length > MAX_WORDS_PER_FILE) {
        const numFiles = Math.ceil(vocabList.length / MAX_WORDS_PER_FILE);
        const confirmSplit = confirm(`Your N5 vocabulary has ${vocabList.length} words.\n\nIt will be split into ${numFiles} PDF files for better performance.\n\nDo you want to continue?`);
        
        if (!confirmSplit) return;
        
        // Show loading overlay
        showPDFLoadingOverlay(numFiles);
        
        // Generate each file separately
        for (let fileNum = 0; fileNum < numFiles; fileNum++) {
            const start = fileNum * MAX_WORDS_PER_FILE;
            const end = Math.min(start + MAX_WORDS_PER_FILE, vocabList.length);
            const chunk = vocabList.slice(start, end);
            
            // Update progress
            updatePDFProgress(fileNum + 1, numFiles, start, end, vocabList.length);
            
            await generateSinglePDF(chunk, fileNum + 1, numFiles);
            
            // Small delay between files to prevent memory issues
            await new Promise(r => setTimeout(r, 500));
        }
        
        // Clean up and show completion
        hidePDFLoadingOverlay();
        alert(`✅ Successfully generated ${numFiles} PDF files for N5 level!\n\nCheck your downloads folder.`);
        return;
    }
    
    // For smaller vocab, generate single file
    showPDFLoadingOverlay(1);
    await generateSinglePDF(vocabList, 1, 1);
    hidePDFLoadingOverlay();
    alert(`✅ Successfully generated PDF file with ${vocabList.length} words!`);
}

// Show loading overlay
function showPDFLoadingOverlay(totalFiles) {
    const existingOverlay = document.getElementById('pdfLoadingOverlay');
    if (existingOverlay) existingOverlay.remove();
    
    const loadingDiv = document.createElement('div');
    loadingDiv.id = 'pdfLoadingOverlay';
    loadingDiv.innerHTML = `
        <div style="position:fixed; top:50%; left:50%; transform:translate(-50%,-50%); 
                    background:#1e3c72; color:white; padding:25px 35px; border-radius:15px; 
                    z-index:10000; text-align:center; box-shadow:0 0 30px rgba(0,0,0,0.5);">
            <i class="fas fa-spinner fa-pulse" style="font-size:40px; margin-bottom:15px; display:block"></i>
            <p style="margin:0; font-size:16px"><strong>Generating PDF ${totalFiles > 1 ? 'files...' : '...'}</strong></p>
            <p style="margin:10px 0 0 0; font-size:12px" id="pdfProgressText">Preparing your vocabulary list...</p>
        </div>
    `;
    document.body.appendChild(loadingDiv);
}

// Update loading progress
function updatePDFProgress(currentFile, totalFiles, start, end, totalWords) {
    const progressText = document.getElementById('pdfProgressText');
    if (progressText) {
        if (totalFiles > 1) {
            progressText.innerHTML = `File ${currentFile} of ${totalFiles}<br>Words ${start + 1} to ${end} of ${totalWords}`;
        } else {
            progressText.innerHTML = `Processing ${totalWords} words...`;
        }
    }
}

// Hide loading overlay
function hidePDFLoadingOverlay() {
    const overlay = document.getElementById('pdfLoadingOverlay');
    if (overlay) overlay.remove();
}

// Generate single PDF file
async function generateSinglePDF(vocabChunk, fileNumber, totalFiles) {
    return new Promise(async (resolve) => {
        try {
            // Create temporary div with proper fonts for Burmese
            const tempDiv = document.createElement('div');
            tempDiv.style.position = 'absolute';
            tempDiv.style.left = '-9999px';
            tempDiv.style.top = '0';
            tempDiv.style.backgroundColor = 'white';
            tempDiv.style.padding = '20px';
            tempDiv.style.fontFamily = "'Noto Sans Myanmar', 'Myanmar Text', 'Padauk', 'Segoe UI', sans-serif";
            tempDiv.style.width = '800px';
            
            // Build HTML table with 4 columns: Japanese, Romaji, English, Burmese
            let rows = '';
            for (let i = 0; i < vocabChunk.length; i++) {
                const item = vocabChunk[i];
                
                // Escape special characters for HTML
                const japaneseText = escapeHtml(item.japanese || '');
                const romajiText = escapeHtml(item.romaji || item.pronunciation || '');
                const englishText = escapeHtml(item.english || '');
                const burmeseText = escapeHtml(item.burmese || '');
                
                rows += `<tr>
                    <td style="border:1px solid #ccc;padding:8px;font-size:11px;font-family:'Noto Sans JP','Segoe UI',sans-serif">${japaneseText}</td>
                    <td style="border:1px solid #ccc;padding:8px;font-size:11px;font-style:italic">${romajiText}</td>
                    <td style="border:1px solid #ccc;padding:8px;font-size:11px">${englishText}</td>
                    <td style="border:1px solid #ccc;padding:8px;font-size:11px;font-family:'Noto Sans Myanmar','Myanmar Text',sans-serif">${burmeseText}</td>
                </tr>`;
            }
            
            // Calculate word range for this file
            const startIndex = fileNumber === 1 ? 1 : ((fileNumber - 1) * 1200) + 1;
            const endIndex = fileNumber === totalFiles ? vocabularyData.length : fileNumber * 1200;
            
            tempDiv.innerHTML = `
                <div style="font-family:'Noto Sans Myanmar','Myanmar Text','Segoe UI',sans-serif; width:100%">
                    <h1 style="color:#1e3c72; margin:0 0 10px 0; font-size:20px; text-align:center">
                        🇯🇵 Next Gen Learning Myanmar - N5 Vocabulary
                    </h1>
                    <p style="margin:0 0 5px 0; font-size:11px; color:#666; text-align:center">
                        Japanese (日本語) | Romaji | English | Burmese (မြန်မာ)
                    </p>
                    ${totalFiles > 1 ? `<p style="margin:0 0 5px 0; font-size:11px; color:#e67e22; text-align:center"><strong>Part ${fileNumber} of ${totalFiles}</strong></p>` : ''}
                    <p style="margin:0 0 15px 0; font-size:10px; color:#888; text-align:center">
                        Words ${startIndex} to ${endIndex} of ${vocabularyData.length} · Generated on ${new Date().toLocaleDateString()}
                    </p>
                    <table style="border-collapse:collapse;width:100%; font-family:Arial,sans-serif">
                        <thead>
                            <tr style="background-color:#1e3c72;color:white">
                                <th style="padding:10px;text-align:left;font-size:12px;width:25%">日本語 (Japanese)</th>
                                <th style="padding:10px;text-align:left;font-size:12px;width:20%">Romaji</th>
                                <th style="padding:10px;text-align:left;font-size:12px;width:25%">English</th>
                                <th style="padding:10px;text-align:left;font-size:12px;width:30%">မြန်မာ (Burmese)</th>
                            </tr>
                        </thead>
                        <tbody>${rows}</tbody>
                    </table>
                    <p style="margin-top:15px; font-size:9px; color:#999; text-align:center">
                        Next Gen Learning Myanmar - Master Japanese from N5 to N1
                    </p>
                </div>
            `;
            
            document.body.appendChild(tempDiv);
            await new Promise(r => setTimeout(r, 300));
            
            // Use html2canvas to render the content
            const canvas = await html2canvas(tempDiv, { 
                scale: 1.5,
                backgroundColor: 'white',
                logging: false,
                useCORS: false,
                windowWidth: tempDiv.scrollWidth
            });
            
            const imgData = canvas.toDataURL('image/jpeg', 0.9);
            
            const { jsPDF } = window.jspdf;
            const doc = new jsPDF({ 
                orientation: 'portrait', 
                unit: 'mm', 
                format: 'a4',
                compress: true
            });
            
            const imgWidth = 190;
            const imgHeight = (canvas.height * imgWidth) / canvas.width;
            let heightLeft = imgHeight;
            let position = 0;
            
            doc.addImage(imgData, 'JPEG', 10, position, imgWidth, imgHeight, undefined, 'FAST');
            heightLeft -= 287;
            
            // Add more pages if content overflows
            while (heightLeft > 0) {
                position = heightLeft - imgHeight;
                doc.addPage();
                doc.addImage(imgData, 'JPEG', 10, position, imgWidth, imgHeight, undefined, 'FAST');
                heightLeft -= 287;
            }
            
            // Save with appropriate filename
            let filename;
            if (totalFiles === 1) {
                filename = `N5_Vocabulary_${vocabularyData.length}_words.pdf`;
            } else {
                filename = `N5_Vocabulary_Part${fileNumber}_of_${totalFiles}.pdf`;
            }
            doc.save(filename);
            
            // Clean up
            tempDiv.remove();
            resolve();
            
        } catch (error) {
            console.error('PDF Generation Error:', error);
            resolve();
        }
    });
}

// Helper function to escape HTML special characters
function escapeHtml(text) {
    if (!text) return '';
    return text
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
}
// Updated createFlashcard function - Sound on front click, Japanese speak buttons only on back
function createFlashcard(item) {
    const card = document.createElement('div');
    card.className = 'flashcard';
    
    // Function to speak Japanese text only
    function speakJapaneseText(text) {
        if (!window.speechSynthesis) {
            console.log("Browser doesn't support speech synthesis");
            return;
        }
        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'ja-JP';
        utterance.rate = 0.8;
        utterance.pitch = 1.0;
        utterance.volume = 1.0;
        
        function setVoice() {
            const voices = window.speechSynthesis.getVoices();
            const japaneseVoice = voices.find(voice => voice.lang === 'ja-JP' || voice.lang === 'ja');
            if (japaneseVoice) utterance.voice = japaneseVoice;
            window.speechSynthesis.speak(utterance);
        }
        
        if (window.speechSynthesis.getVoices().length > 0) setVoice();
        else window.speechSynthesis.onvoiceschanged = setVoice;
    }
    
    if (currentCategory === 'vocab') {
        card.innerHTML = `
            <div class="flashcard-inner">
                <div class="flashcard-front">
                    <div class="audio-indicator">
                        <i class="fas fa-volume-up"></i> Click to hear word
                    </div>
                    <div class="japanese-word">${item.japanese}</div>
                    <div class="romaji">${item.romaji}</div>
                    <div class="meaning">
                        <p class="english-mean"><strong>🇬🇧 English:</strong> ${item.english}</p>
                        <p class="burmese-mean"><strong>🇲🇲 မြန်မာ:</strong> ${item.burmese}</p>
                    </div>
                </div>
                <div class="flashcard-back">
                    <div class="back-content">
                        <h4>📖 Example Sentence</h4>
                        <div class="example">
                            <p class="jp-ex">🇯🇵 ${item.example_jp}</p>
                            <button class="speak-example-btn" data-text="${item.example_jp.replace(/'/g, "\\'")}">
                                <i class="fas fa-volume-up"></i> Speak Japanese
                            </button>
                            <p class="romaji-ex">📖 ${item.example_romaji}</p>
                            <p class="en-ex">🇬🇧 ${item.example_en}</p>
                            <p class="mm-ex">🇲🇲 ${item.example_mm}</p>
                        </div>
                        <div class="instruction">
                            <i class="fas fa-hand-pointer"></i> Click card to flip back
                        </div>
                    </div>
                </div>
            </div>
        `;
    } else if (currentCategory === 'grammar') {
        card.innerHTML = `
            <div class="flashcard-inner">
                <div class="flashcard-front">
                    <div class="audio-indicator">
                        <i class="fas fa-volume-up"></i> Click to hear
                    </div>
                    <div class="japanese-word">${item.title}</div>
                    <div class="pronunciation">
                        <i class="fas fa-microphone"></i> ${item.pronunciation}
                    </div>
                    <div class="meaning">
                        <p class="english-mean"><strong>🇬🇧 English:</strong> ${item.english}</p>
                        <p class="burmese-mean"><strong>🇲🇲 မြန်မာ:</strong> ${item.burmese}</p>
                    </div>
                </div>
                <div class="flashcard-back">
                    <div class="back-content">
                        <h4>📖 Example Sentence</h4>
                        <div class="example">
                            <p class="jp-ex">🇯🇵 ${item.example_jp}</p>
                            <button class="speak-example-btn" data-text="${item.example_jp.replace(/'/g, "\\'")}">
                                <i class="fas fa-volume-up"></i> Speak Japanese
                            </button>
                            <p class="en-ex">RM ${item.example_romaji}</p>
                            <p class="en-ex">🇬🇧 ${item.example_en}</p>
                            <p class="mm-ex">🇲🇲 ${item.example_mm}</p>
                        </div>
                        <div class="instruction">
                            <i class="fas fa-hand-pointer"></i> Click card to flip back
                        </div>
                    </div>
                </div>
            </div>
        `;
    } else {
        card.innerHTML = `
            <div class="flashcard-inner">
                <div class="flashcard-front">
                    <div class="audio-indicator">
                        <i class="fas fa-volume-up"></i> Click to hear
                    </div>
                    <div class="japanese-word" style="font-size: 3rem;">${item.kanji}</div>
                    <div class="pronunciation">
                        <i class="fas fa-microphone"></i> ${item.pronunciation}
                    </div>
                    <div class="meaning">
                        <p class="english-mean"><strong>🇬🇧 English:</strong> ${item.english}</p>
                        <p class="burmese-mean"><strong>🇲🇲 မြန်မာ:</strong> ${item.burmese}</p>
                    </div>
                </div>
                <div class="flashcard-back">
                    <div class="back-content">
                        <h4>📖 Example</h4>
                        <div class="example">
                            <p class="jp-ex">🇯🇵 ${item.example_jp}</p>
                            <button class="speak-example-btn" data-text="${item.example_jp.replace(/'/g, "\\'")}">
                                <i class="fas fa-volume-up"></i> Speak Japanese
                            </button>
                            <p class="en-ex">🇬🇧 ${item.example_en}</p>
                            <p class="mm-ex">🇲🇲 ${item.example_mm}</p>
                        </div>
                        <div class="instruction">
                            <i class="fas fa-hand-pointer"></i> Click card to flip back
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
    
    // Add event listeners for speak buttons (Japanese only)
    const speakBtns = card.querySelectorAll('.speak-example-btn');
    speakBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation(); // Prevent card flip
            const text = btn.getAttribute('data-text');
            
            if (!window.speechSynthesis) return;
            window.speechSynthesis.cancel();
            const utterance = new SpeechSynthesisUtterance(text);
            utterance.lang = 'ja-JP';
            utterance.rate = 0.8;
            utterance.pitch = 1.0;
            utterance.volume = 1.0;
            
            function setVoice() {
                const voices = window.speechSynthesis.getVoices();
                const japaneseVoice = voices.find(voice => voice.lang === 'ja-JP' || voice.lang === 'ja');
                if (japaneseVoice) utterance.voice = japaneseVoice;
                window.speechSynthesis.speak(utterance);
            }
            
            if (window.speechSynthesis.getVoices().length > 0) setVoice();
            else window.speechSynthesis.onvoiceschanged = setVoice;
        });
    });
    
    // Play sound when clicking the front of card, then flip
    let isFlipped = false;
    card.addEventListener('click', (e) => {
        // Don't flip if clicking speak button
        if (e.target.closest('.speak-example-btn')) {
            return;
        }
        
        // If card is not flipped yet (front is showing), play sound
        if (!isFlipped) {
            if (currentCategory === 'vocab') {
                speakJapaneseText(item.japanese);
            } else if (currentCategory === 'grammar') {
                speakJapaneseText(item.title);
            } else {
                speakJapaneseText(item.kanji);
            }
        }
        
        // Flip the card
        card.classList.toggle('flipped');
        isFlipped = !isFlipped;
    });
    
    return card;
}
// Render all flashcards
function renderFlashcards() {
    const container = document.getElementById('flashcardContainer');
    const filteredItems = getFilteredItems();
    
    const resultCount = document.getElementById('resultCount');
    if (resultCount) resultCount.textContent = filteredItems.length;
    
    if (filteredItems.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <i class="fas fa-search"></i>
                <p>No results found for "${searchTerm}"</p>
                <small>Try searching in English, Japanese, or Burmese</small>
            </div>
        `;
        return;
    }
    
    container.innerHTML = '';
    filteredItems.forEach(item => {
        container.appendChild(createFlashcard(item));
    });
}

// Setup event listeners
function setupEventListeners() {
        // PDF Download button
    const pdfBtn = document.getElementById('downloadVocabPDF');
    if (pdfBtn) {
        pdfBtn.addEventListener('click', generateVocabularyPDF);
    }
    // Category tabs (Vocabulary, Grammar, Kanji)
    const tabBtns = document.querySelectorAll('.tab-btn');
    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            tabBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentCategory = btn.getAttribute('data-category');
            currentTopic = 'all';
            generateCategoryBar();
            renderFlashcards();
            updatePDFButtons();
        });
    });
    
    // Search input
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            searchTerm = e.target.value;
            renderFlashcards();
        });
    }
    
    // Clear search
    const clearBtn = document.getElementById('clearSearch');
    if (clearBtn) {
        clearBtn.addEventListener('click', () => {
            const searchInputElem = document.getElementById('searchInput');
            if (searchInputElem) searchInputElem.value = '';
            searchTerm = '';
            renderFlashcards();
        });
    }
    
    // Info card quick navigation
    const vocabInfoCard = document.getElementById('vocabInfoCard');
    if (vocabInfoCard) {
        vocabInfoCard.addEventListener('click', () => {
            document.querySelectorAll('.tab-btn')[0]?.click();
        });
    }
    
    const grammarInfoCard = document.getElementById('grammarInfoCard');
    if (grammarInfoCard) {
        grammarInfoCard.addEventListener('click', () => {
            document.querySelectorAll('.tab-btn')[1]?.click();
        });
    }
    
    const kanjiInfoCard = document.getElementById('kanjiInfoCard');
    if (kanjiInfoCard) {
        kanjiInfoCard.addEventListener('click', () => {
            document.querySelectorAll('.tab-btn')[2]?.click();
        });
    }
}

// Display category statistics in console
function displayCategoryStatistics() {
    console.log('===== N5 VOCABULARY STATISTICS =====');
    console.log(`Total Words: ${vocabularyData.length}`);
    console.log('-----------------------------------');
    
    const categoryCounts = countWordsByCategory();
    
    vocabularyCategories.forEach(cat => {
        if (cat.id !== 'all') {
            const count = categoryCounts[cat.id] || 0;
            const percentage = vocabularyData.length > 0 ? ((count / vocabularyData.length) * 100).toFixed(1) : 0;
            console.log(`${cat.name.padEnd(15)}: ${count.toString().padStart(3)} words (${percentage}%)`);
        }
    });
    
    console.log('===================================');
}

// Expose functions to window for console access
window.vocabularyStats = {
    countWordsByCategory,
    getTotalVocabularyCount: () => vocabularyData.length,
    getCategoryCount: (categoryId) => vocabularyData.filter(word => word.category === categoryId).length,
    getAllCategoriesWithCounts,
    displayCategoryStatistics
};

// ========== BACK TO TOP FUNCTIONALITY ==========
function addBackToTopButton() {
    // Check if button already exists
    if (document.querySelector('.back-to-top-btn')) return;
    
    const backToTopBtn = document.createElement('button');
    backToTopBtn.className = 'back-to-top-btn';
    backToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i><span>TOP</span>';
    backToTopBtn.setAttribute('aria-label', 'Back to top');
    document.body.appendChild(backToTopBtn);
    
    // Show/hide button based on scroll position
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTopBtn.classList.add('show');
        } else {
            backToTopBtn.classList.remove('show');
        }
    });
    
    // Scroll to top when clicked
    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Call this in DOMContentLoaded
// Add to your existing DOMContentLoaded:
// addBackToTopButton();

// ========== INITIALIZATION ==========
// ========== INITIALIZATION ==========
document.addEventListener('DOMContentLoaded', () => {
    console.log('N5 Level Initializing...');
    updateCounters();
    setupEventListeners();
    generateCategoryBar();
    renderFlashcards();
    displayCategoryStatistics();
    addBackToTopButton(); 
    updatePDFButtons();  // ADD THIS LINE // ADD THIS LINE
    console.log('N5 Level Ready! Use topic filters to sort by category.');
});