// ========== CATEGORY DEFINITIONS ==========
const vocabularyCategories = [
    { id: "all", name: "All", icon: "fa-book", jp: "すべて" },
    { id: "greetings", name: "Greetings", icon: "fa-hand-peace", jp: "あいさつ" },
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
    { id: "adverbs", name: "Adverbs", icon: "fa-chart-line", jp: "ふくし" },
    { id: "nature", name: "Nature & Environment", icon: "fa-leaf", jp: "しぜん" },
    { id: "misc", name: "Miscellaneous", icon: "fa-ellipsis", jp: "そのた" }
];

const grammarCategories = [
    { id: "all", name: "All Grammar", icon: "fa-star" },
    { id: "verb", name: "Verb Forms", icon: "fa-running" },
    { id: "conditional", name: "Conditionals", icon: "fa-code-branch" },
    { id: "conjunction", name: "Conjunctions", icon: "fa-code-branch" },
    { id: "time", name: "Time Expressions", icon: "fa-clock" },
    { id: "expression", name: "Expressions", icon: "fa-smile" },
    { id: "particle", name: "Particles", icon: "fa-link" }
];

const kanjiCategories = [
    { id: "all", name: "All Kanji", icon: "fa-book" },
    { id: "verb", name: "Verbs", icon: "fa-running" },
    { id: "adjective", name: "Adjectives", icon: "fa-palette" },
    { id: "nature", name: "Nature & Environment", icon: "fa-leaf" },
    { id: "body", name: "Body Parts", icon: "fa-heart" },
    { id: "family", name: "Family", icon: "fa-users" },
    { id: "people", name: "People", icon: "fa-user" },
    { id: "places", name: "Places & Buildings", icon: "fa-building" },
    { id: "food", name: "Food & Drink", icon: "fa-utensils" },
    { id: "time", name: "Time & Seasons", icon: "fa-calendar-alt" },
    { id: "direction", name: "Direction & Position", icon: "fa-compass" },
    { id: "color", name: "Colors", icon: "fa-palette" },
    { id: "numbers", name: "Numbers & Counters", icon: "fa-hashtag" },
    { id: "misc", name: "Miscellaneous", icon: "fa-ellipsis" }
];

// ========== N4 VOCABULARY DATA (300+ words) ==========
const vocabularyData = [
    // ========== GREETINGS & SOCIAL EXPRESSIONS (20 words) ==========
    { japanese: "お世話になります", romaji: "osewa ni narimasu", pronunciation: "osewa ni narimasu", english: "thank you for your help / I'm in your care", burmese: "ကျေးဇူးတင်ပါတယ် / ဂရုစိုက်ပေးပါ", category: "greetings", example_jp: "いつもお世話になります。", example_romaji: "Itsumo osewa ni narimasu.", example_en: "Thank you for always helping me.", example_mm: "အမြဲကူညီတဲ့အတွက် ကျေးဇူးတင်ပါတယ်။" },
    { japanese: "よろしくお願いします", romaji: "yoroshiku onegai shimasu", pronunciation: "yoroshiku onegai shimasu", english: "please treat me well / best regards", burmese: "ကောင်းမွန်စွာ ဆက်ဆံပါရန်", category: "greetings", example_jp: "これからよろしくお願いします。", example_romaji: "Korekara yoroshiku onegai shimasu.", example_en: "I look forward to working with you.", example_mm: "ဒီကနေ့နောက်ပိုင်း ကောင်းမွန်စွာ ဆက်ဆံပါရန်။" },
    { japanese: "お邪魔します", romaji: "ojama shimasu", pronunciation: "ojama shimasu", english: "sorry for intruding", burmese: "စိတ်အနှောင့်အယှက်ဖြစ်စေတဲ့အတွက် တောင်းပန်ပါတယ်", category: "greetings", example_jp: "お邪魔します。", example_romaji: "Ojama shimasu.", example_en: "Sorry for bothering you.", example_mm: "စိတ်အနှောင့်အယှက်ဖြစ်စေတဲ့အတွက် တောင်းပန်ပါတယ်။" },
    { japanese: "失礼します", romaji: "shitsurei shimasu", pronunciation: "shitsurei shimasu", english: "excuse me / I'm leaving", burmese: "ခွင့်ပြုပါ / ထွက်ပါတယ်", category: "greetings", example_jp: "先に失礼します。", example_romaji: "Saki ni shitsurei shimasu.", example_en: "I'll be leaving first (at work).", example_mm: "ကျွန်တော် အရင်ထွက်ပါတယ်။" },
    { japanese: "ただいま", romaji: "tadaima", pronunciation: "tadaima", english: "I'm home", burmese: "အိမ်ရောက်ပြီ", category: "greetings", example_jp: "ただいま！", example_romaji: "Tadaima!", example_en: "I'm home!", example_mm: "အိမ်ရောက်ပြီ။" },
    { japanese: "おかえりなさい", romaji: "okaerinasai", pronunciation: "okaerinasai", english: "welcome home", burmese: "ပြန်လာလို့ကြိုဆိုပါတယ်", category: "greetings", example_jp: "おかえりなさい！", example_romaji: "Okaerinasai!", example_en: "Welcome home!", example_mm: "ပြန်လာလို့ကြိုဆိုပါတယ်။" },
    { japanese: "いただきます", romaji: "itadakimasu", pronunciation: "itadakimasu", english: "said before eating (I humbly receive)", burmese: "စားမည် (စားမီပြောသည့်စကား)", category: "greetings", example_jp: "いただきます。", example_romaji: "Itadakimasu.", example_en: "Thank you for the meal (before eating).", example_mm: "စားလိုက်မယ်။" },
    { japanese: "ごちそうさまでした", romaji: "gochisousama deshita", pronunciation: "gochisousama deshita", english: "thank you for the meal", burmese: "အစားအစာအတွက်ကျေးဇူးတင်ပါတယ်", category: "greetings", example_jp: "ごちそうさまでした。", example_romaji: "Gochisousama deshita.", example_en: "Thank you for the meal (after eating).", example_mm: "အစားအစာအတွက် ကျေးဇူးတင်ပါတယ်။" },
    { japanese: "お久しぶりです", romaji: "ohisashiburi desu", pronunciation: "ohisashiburi desu", english: "long time no see", burmese: "ကြာပါပြီ မတွေ့ရတာ", category: "greetings", example_jp: "お久しぶりです。お元気でしたか。", example_romaji: "Ohisashiburi desu. Ogenki deshita ka.", example_en: "Long time no see. How have you been?", example_mm: "ကြာပါပြီ မတွေ့ရတာ။ နေကောင်းလား။" },
    { japanese: "お元気ですか", romaji: "ogenki desu ka", pronunciation: "ogenki desu ka", english: "how are you?", burmese: "နေကောင်းလား", category: "greetings", example_jp: "お元気ですか。", example_romaji: "Ogenki desu ka.", example_en: "How are you?", example_mm: "နေကောင်းလား။" },
    { japanese: "かしこまりました", romaji: "kashikomarimashita", pronunciation: "kashikomarimashita", english: "certainly / I understand (polite)", burmese: "ကျွန်တော် နားလည်ပါတယ် (ယဉ်ကျေး)", category: "greetings", example_jp: "かしこまりました。すぐに参ります。", example_romaji: "Kashikomarimashita. Sugu ni mairimasu.", example_en: "Certainly. I'll come right away.", example_mm: "ကျွန်တော် နားလည်ပါတယ်။ ချက်ချင်းသွားပါမယ်။" },
    { japanese: "申し訳ございません", romaji: "moushiwake gozaimasen", pronunciation: "moushiwake gozaimasen", english: "I'm very sorry (formal)", burmese: "အလွန်တောင်းပန်ပါတယ် (ရိုသေစွာ)", category: "greetings", example_jp: "申し訳ございません。遅れました。", example_romaji: "Moushiwake gozaimasen. Okuremashita.", example_en: "I'm very sorry. I was late.", example_mm: "အလွန်တောင်းပန်ပါတယ်။ နောက်ကျသွားပါတယ်။" },
    { japanese: "お待たせしました", romaji: "omatase shimashita", pronunciation: "omatase shimashita", english: "sorry to keep you waiting", burmese: "စောင့်ခိုင်းလို့တောင်းပန်ပါတယ်", category: "greetings", example_jp: "お待たせしました。", example_romaji: "Omatase shimashita.", example_en: "Sorry to keep you waiting.", example_mm: "စောင့်ခိုင်းလို့တောင်းပန်ပါတယ်။" },
    { japanese: "お大事に", romaji: "odaiji ni", pronunciation: "odaiji ni", english: "take care (of your health)", burmese: "ဂရုစိုက်ပါ (ကျန်းမာရေး)", category: "greetings", example_jp: "お大事に。", example_romaji: "Odaiji ni.", example_en: "Take care (of your health).", example_mm: "ကျန်းမာရေးဂရုစိုက်ပါ။" },
    { japanese: "お気をつけて", romaji: "oki o tsukete", pronunciation: "oki o tsukete", english: "please be careful", burmese: "သတိထားပါ", category: "greetings", example_jp: "お気をつけて行ってらっしゃい。", example_romaji: "Oki o tsukete itte rasshai.", example_en: "Please be careful (when someone leaves).", example_mm: "သတိထားသွားပါ။" },
    { japanese: "行ってらっしゃい", romaji: "itte rasshai", pronunciation: "itte rasshai", english: "see you later (said to someone leaving)", burmese: "သွားခဲ့ပါဦး", category: "greetings", example_jp: "行ってらっしゃい。", example_romaji: "Itte rasshai.", example_en: "See you later!", example_mm: "သွားခဲ့ပါဦး။" },
    { japanese: "行ってきます", romaji: "itte kimasu", pronunciation: "itte kimasu", english: "I'll go and come back", burmese: "သွားပြီးပြန်လာမယ်", category: "greetings", example_jp: "行ってきます。", example_romaji: "Itte kimasu.", example_en: "I'm leaving (said when leaving home).", example_mm: "သွားပြီးပြန်လာမယ်။" },
    { japanese: "ただいま", romaji: "tadaima", pronunciation: "tadaima", english: "just now / right now", burmese: "အခုလေး", category: "time", example_jp: "ただいま帰りました。", example_romaji: "Tadaima kaerimashita.", example_en: "I just came home.", example_mm: "အခုလေးပဲအိမ်ပြန်ရောက်တယ်။" },
    { japanese: "そろそろ", romaji: "sorosoro", pronunciation: "sorosoro", english: "it's about time to", burmese: "အချိန်တန်ပြီ", category: "time", example_jp: "そろそろ行きましょう。", example_romaji: "Sorosoro ikimashou.", example_en: "It's about time to go.", example_mm: "အချိန်တန်ပြီ သွားကြရအောင်။" },
    { japanese: "だんだん", romaji: "dandan", pronunciation: "dandan", english: "gradually", burmese: "တဖြည်းဖြည်း", category: "time", example_jp: "だんだん暖かくなります。", example_romaji: "Dandan atatakaku narimasu.", example_en: "It gradually becomes warm.", example_mm: "တဖြည်းဖြည်းနွေးလာတယ်။" },

    // ========== TIME & FREQUENCY (50 words) ==========
    { japanese: "一昨日", romaji: "ototoi", pronunciation: "ototoi", english: "day before yesterday", burmese: "တစ်နေ့က", category: "time", example_jp: "一昨日東京に行きました。", example_romaji: "Ototoi Toukyou ni ikimashita.", example_en: "I went to Tokyo the day before yesterday.", example_mm: "တစ်နေ့က တိုကျိုကိုသွားခဲ့တယ်။" },
    { japanese: "明後日", romaji: "asatte", pronunciation: "asatte", english: "day after tomorrow", burmese: "သန်ဘက်ခါ", category: "time", example_jp: "明後日試験があります。", example_romaji: "Asatte shiken ga arimasu.", example_en: "I have an exam the day after tomorrow.", example_mm: "သန်ဘက်ခါ စာမေးပွဲရှိတယ်။" },
    { japanese: "毎朝", romaji: "maiasa", pronunciation: "maiasa", english: "every morning", burmese: "မနက်တိုင်း", category: "time", example_jp: "毎朝ジョギングをします。", example_romaji: "Maiasa jogingu o shimasu.", example_en: "I jog every morning.", example_mm: "မနက်တိုင်း ဂျော့ဂင်း လုပ်တယ်။" },
    { japanese: "毎晩", romaji: "maiban", pronunciation: "maiban", english: "every night", burmese: "ညတိုင်း", category: "time", example_jp: "毎晩日本語を勉強します。", example_romaji: "Maiban nihongo o benkyou shimasu.", example_en: "I study Japanese every night.", example_mm: "ညတိုင်း ဂျပန်စာလေ့လာတယ်။" },
    { japanese: "毎週", romaji: "maishuu", pronunciation: "maishuu", english: "every week", burmese: "အပတ်တိုင်း", category: "time", example_jp: "毎週日曜日は休みです。", example_romaji: "Maishuu nichiyoubi wa yasumi desu.", example_en: "Every Sunday is a holiday.", example_mm: "အပတ်တိုင်း တနင်္ဂနွေနေ့ အားလပ်ရက်ဖြစ်တယ်။" },
    { japanese: "毎月", romaji: "maitsuki", pronunciation: "maitsuki", english: "every month", burmese: "လတိုင်း", category: "time", example_jp: "毎月家賃を払います。", example_romaji: "Maitsuki yachin o haraimasu.", example_en: "I pay rent every month.", example_mm: "လတိုင်း အိမ်ငှားခ ပေးတယ်။" },
    { japanese: "毎年", romaji: "maitoshi / mainen", pronunciation: "maitoshi / mainen", english: "every year", burmese: "နှစ်တိုင်း", category: "time", example_jp: "毎年夏に海へ行きます。", example_romaji: "Maitoshi natsu ni umi e ikimasu.", example_en: "I go to the beach every summer.", example_mm: "နှစ်တိုင်း နွေရာသီမှာ ပင်လယ်သွားတယ်။" },
    { japanese: "時々", romaji: "tokidoki", pronunciation: "tokidoki", english: "sometimes", burmese: "တစ်ခါတရံ", category: "time", example_jp: "時々映画を見ます。", example_romaji: "Tokidoki eiga o mimasu.", example_en: "I sometimes watch movies.", example_mm: "တစ်ခါတရံ ရုပ်ရှင်ကြည့်တယ်။" },
    { japanese: "よく", romaji: "yoku", pronunciation: "yoku", english: "often", burmese: "မကြာခဏ", category: "time", example_jp: "よく居酒屋に行きます。", example_romaji: "Yoku izakaya ni ikimasu.", example_en: "I often go to izakaya.", example_mm: "မကြာခဏ အိဇာကာယာ သွားတယ်။" },
    { japanese: "たまに", romaji: "tamani", pronunciation: "tamani", english: "occasionally", burmese: "ရံဖန်ရံခါ", category: "time", example_jp: "たまに友達と電話します。", example_romaji: "Tamani tomodachi to denwa shimasu.", example_en: "I occasionally call my friends.", example_mm: "ရံဖန်ရံခါ သူငယ်ချင်းနဲ့ ဖုန်းပြောတယ်။" },
    { japanese: "めったに〜ない", romaji: "mettani nai", pronunciation: "mettani nai", english: "rarely (negative)", burmese: "ရှားရှားပါးပါး", category: "time", example_jp: "めったに遅刻しません。", example_romaji: "Mettani chikoku shimasen.", example_en: "I rarely come late.", example_mm: "ရှားရှားပါးပါး နောက်ကျတယ်။" },
    { japanese: "すぐに", romaji: "sugu ni", pronunciation: "sugu ni", english: "immediately", burmese: "ချက်ချင်း", category: "time", example_jp: "すぐに行きます。", example_romaji: "Sugu ni ikimasu.", example_en: "I'll go immediately.", example_mm: "ချက်ချင်းသွားမယ်။" },
    { japanese: "もうすぐ", romaji: "mou sugu", pronunciation: "mou sugu", english: "very soon", burmese: "မကြာမီ", category: "time", example_jp: "もうすぐ春です。", example_romaji: "Mou sugu haru desu.", example_en: "Spring is coming soon.", example_mm: "မကြာမီ နွေဦးရာသီဖြစ်တော့မယ်။" },
    { japanese: "さっき", romaji: "sakki", pronunciation: "sakki", english: "a little while ago", burmese: "လွန်ခဲ့တဲ့ အချိန်အနည်းငယ်က", category: "time", example_jp: "さっき電話がありました。", example_romaji: "Sakki denwa ga arimashita.", example_en: "There was a call a little while ago.", example_mm: "လွန်ခဲ့တဲ့ အချိန်အနည်းငယ်က ဖုန်းဝင်ခဲ့တယ်။" },
    { japanese: "この頃", romaji: "konogoro", pronunciation: "konogoro", english: "recently / these days", burmese: "ဒီရက်ပိုင်း", category: "time", example_jp: "この頃忙しいです。", example_romaji: "Konogoro isogashii desu.", example_en: "I've been busy recently.", example_mm: "ဒီရက်ပိုင်း အလုပ်ရှုပ်တယ်။" },
    { japanese: "最近", romaji: "saikin", pronunciation: "saikin", english: "recently / lately", burmese: "မကြာသေးမီက", category: "time", example_jp: "最近日本語が上手になりました。", example_romaji: "Saikin nihongo ga jouzu ni narimashita.", example_en: "Recently I've gotten better at Japanese.", example_mm: "မကြာသေးမီက ဂျပန်စာ တိုးတက်လာတယ်။" },
    { japanese: "将来", romaji: "shourai", pronunciation: "shourai", english: "future", burmese: "အနာဂတ်", category: "time", example_jp: "将来医者になりたいです。", example_romaji: "Shourai isha ni naritai desu.", example_en: "I want to become a doctor in the future.", example_mm: "အနာဂတ်မှာ ဆရာဝန်ဖြစ်ချင်တယ်။" },
    { japanese: "昔", romaji: "mukashi", pronunciation: "mukashi", english: "old times / the past", burmese: "ရှေးတုန်းက", category: "time", example_jp: "昔はここに学校がありました。", example_romaji: "Mukashi wa koko ni gakkou ga arimashita.", example_en: "There was a school here in the past.", example_mm: "ရှေးတုန်းက ဒီမှာ ကျောင်းရှိခဲ့တယ်။" },
    { japanese: "ずっと", romaji: "zutto", pronunciation: "zutto", english: "all the time / for a long time", burmese: "အမြဲတမ်း / ကြာမြင့်စွာ", category: "time", example_jp: "ずっと待っていました。", example_romaji: "Zutto matte imashita.", example_en: "I've been waiting for a long time.", example_mm: "ကြာမြင့်စွာ စောင့်နေခဲ့တယ်။" },
    { japanese: "急に", romaji: "kyuu ni", pronunciation: "kyuu ni", english: "suddenly", burmese: "ရုတ်တရက်", category: "time", example_jp: "急に雨が降り出しました。", example_romaji: "Kyuu ni ame ga furidashimashita.", example_en: "It suddenly started raining.", example_mm: "ရုတ်တရက် မိုးစရွာတယ်။" },
    { japanese: "突然", romaji: "totsuzen", pronunciation: "totsuzen", english: "suddenly (more dramatic)", burmese: "ရုတ်တရက် (ပိုအဆန်း)", category: "time", example_jp: "突然ドアが開きました。", example_romaji: "Totsuzen doa ga akimashita.", example_en: "Suddenly the door opened.", example_mm: "ရုတ်တရက် တံခါးပွင့်သွားတယ်။" },
    { japanese: "やっと", romaji: "yatto", pronunciation: "yatto", english: "finally", burmese: "နောက်ဆုံးတော့", category: "time", example_jp: "やっと宿題が終わりました。", example_romaji: "Yatto shukudai ga owarimashita.", example_en: "I finally finished my homework.", example_mm: "နောက်ဆုံးတော့ အိမ်စာပြီးသွားပြီ။" },
    { japanese: "ついに", romaji: "tsui ni", pronunciation: "tsui ni", english: "finally (after much effort)", burmese: "နောက်ဆုံးတွင် (ကြိုးစားမှုများစွာနောက်)", category: "time", example_jp: "ついに夢が叶いました。", example_romaji: "Tsui ni yume ga kanaimashita.", example_en: "My dream finally came true.", example_mm: "နောက်ဆုံးတွင် အိပ်မက် အကောင်အထည်ပေါ်သွားပြီ။" },
    { japanese: "始めに", romaji: "hajime ni", pronunciation: "hajime ni", english: "in the beginning / first", burmese: "အစတွင် / ပထမဦးစွာ", category: "time", example_jp: "始めに自己紹介します。", example_romaji: "Hajime ni jikoshoukai shimasu.", example_en: "First, I'll introduce myself.", example_mm: "အစတွင် ကိုယ်အကြောင်း မိတ်ဆက်ပါမယ်။" },
    { japanese: "終わりに", romaji: "owari ni", pronunciation: "owari ni", english: "in the end / finally", burmese: "အဆုံးတွင်", category: "time", example_jp: "終わりに一言お願いします。", example_romaji: "Owari ni hitokoto onegai shimasu.", example_en: "Finally, please say a few words.", example_mm: "အဆုံးတွင် စကားတစ်ခွက်ပြောပေးပါ။" },
    { japanese: "今にも", romaji: "ima ni mo", pronunciation: "ima ni mo", english: "at any moment", burmese: "မည်သည့်အချိန်မဆို", category: "time", example_jp: "今にも雨が降りそうです。", example_romaji: "Ima ni mo ame ga furisou desu.", example_en: "It looks like it could rain at any moment.", example_mm: "မည်သည့်အချိန်မဆို မိုးရွာတော့မယ်။" },
    { japanese: "間もなく", romaji: "mamonaku", pronunciation: "mamonaku", english: "shortly / soon", burmese: "မကြာမီ", category: "time", example_jp: "間もなく電車が到着します。", example_romaji: "Mamonaku densha ga touchaku shimasu.", example_en: "The train will arrive shortly.", example_mm: "မကြာမီ ရထားရောက်လာတော့မယ်။" },
    { japanese: "しばらく", romaji: "shibaraku", pronunciation: "shibaraku", english: "for a while", burmese: "ခေတ္တမျှ", category: "time", example_jp: "しばらくお待ちください。", example_romaji: "Shibaraku omachi kudasai.", example_en: "Please wait for a while.", example_mm: "ခေတ္တမျှ စောင့်ပါ။" },
    { japanese: "次第に", romaji: "shidai ni", pronunciation: "shidai ni", english: "gradually (over time)", burmese: "တဖြည်းဖြည်းချင်း", category: "time", example_jp: "次第に寒くなります。", example_romaji: "Shidai ni samuku narimasu.", example_en: "It gradually becomes cold.", example_mm: "တဖြည်းဖြည်းချင်း အေးလာတယ်။" },
    { japanese: "以前", romaji: "izen", pronunciation: "izen", english: "before / previously", burmese: "ယခင်က", category: "time", example_jp: "以前ここに住んでいました。", example_romaji: "Izen koko ni sunde imashita.", example_en: "I used to live here before.", example_mm: "ယခင်က ဒီမှာနေခဲ့တယ်။" },
    { japanese: "以後", romaji: "igo", pronunciation: "igo", english: "after this / from now on", burmese: "ဤနောက်ပိုင်း", category: "time", example_jp: "以後気をつけます。", example_romaji: "Igo ki o tsukemasu.", example_en: "I'll be careful from now on.", example_mm: "ဤနောက်ပိုင်း သတိထားပါမယ်။" },
    { japanese: "以降", romaji: "ikou", pronunciation: "ikou", english: "on and after", burmese: "ထိုမှစ၍", category: "time", example_jp: "来週以降に連絡します。", example_romaji: "Raishuu ikou ni renraku shimasu.", example_en: "I'll contact you next week onward.", example_mm: "လာမယ့်အပတ်မှစ၍ ဆက်သွယ်မယ်။" },
    { japanese: "以来", romaji: "irai", pronunciation: "irai", english: "since", burmese: "အချိန်မှစ၍", category: "time", example_jp: "卒業以来会っていません。", example_romaji: "Sotsugyou irai atte imasen.", example_en: "I haven't seen them since graduation.", example_mm: "ဘွဲ့ရပြီးကတည်းက မတွေ့ရဘူး။" },
    { japanese: "同時に", romaji: "douji ni", pronunciation: "douji ni", english: "simultaneously", burmese: "တစ်ပြိုင်နက်တည်း", category: "time", example_jp: "同時に二人が話しました。", example_romaji: "Douji ni futari ga hanashimashita.", example_en: "Two people spoke simultaneously.", example_mm: "လူနှစ်ယောက် တစ်ပြိုင်နက်တည်း စကားပြောတယ်။" },
    { japanese: "一夜", romaji: "ichiya", pronunciation: "ichiya", english: "one night", burmese: "တစ်ည", category: "time", example_jp: "一夜で全部読んだ。", example_romaji: "Ichiya de zenbu yonda.", example_en: "I read it all in one night.", example_mm: "တစ်ညထဲနဲ့ အားလုံးဖတ်ပြီးသွားတယ်။" },
    { japanese: "一日中", romaji: "ichinichijuu", pronunciation: "ichinichijuu", english: "all day long", burmese: "တစ်နေ့လုံး", category: "time", example_jp: "一日中雨が降っていました。", example_romaji: "Ichinichijuu ame ga futte imashita.", example_en: "It rained all day long.", example_mm: "တစ်နေ့လုံး မိုးရွာနေတယ်။" },
    { japanese: "一晩中", romaji: "hitobanjuu", pronunciation: "hitobanjuu", english: "all night long", burmese: "တစ်ညလုံး", category: "time", example_jp: "一晩中起きていました。", example_romaji: "Hitobanjuu okite imashita.", example_en: "I stayed awake all night.", example_mm: "တစ်ညလုံး အိပ်မပျော်ဘဲနေခဲ့တယ်။" },
    { japanese: "年中", romaji: "nenjuu", pronunciation: "nenjuu", english: "all year round", burmese: "တစ်နှစ်ပတ်လုံး", category: "time", example_jp: "年中無休です。", example_romaji: "Nenjuu mukyuu desu.", example_en: "Open all year round.", example_mm: "တစ်နှစ်ပတ်လုံး အားလပ်ရက်မရှိ။" },
    { japanese: "先月", romaji: "sengetsu", pronunciation: "sengetsu", english: "last month", burmese: "ပြီးခဲ့တဲ့လ", category: "time", example_jp: "先月から仕事を始めました。", example_romaji: "Sengetsu kara shigoto o hajimemashita.", example_en: "I started working last month.", example_mm: "ပြီးခဲ့တဲ့လက အလုပ်စခဲ့တယ်။" },
    { japanese: "来月", romaji: "raigetsu", pronunciation: "raigetsu", english: "next month", burmese: "လာမယ့်လ", category: "time", example_jp: "来月結婚します。", example_romaji: "Raigetsu kekkon shimasu.", example_en: "I will get married next month.", example_mm: "လာမယ့်လ လက်ထပ်မယ်။" },
    { japanese: "先週", romaji: "senshuu", pronunciation: "senshuu", english: "last week", burmese: "ပြီးခဲ့တဲ့အပတ်", category: "time", example_jp: "先週風邪を引きました。", example_romaji: "Senshuu kaze o hikimashita.", example_en: "I caught a cold last week.", example_mm: "ပြီးခဲ့တဲ့အပတ်က အအေးမိခဲ့တယ်။" },
    { japanese: "来週", romaji: "raishuu", pronunciation: "raishuu", english: "next week", burmese: "လာမယ့်အပတ်", category: "time", example_jp: "来週試験があります。", example_romaji: "Raishuu shiken ga arimasu.", example_en: "I have an exam next week.", example_mm: "လာမယ့်အပတ် စာမေးပွဲရှိတယ်။" },
    { japanese: "昨年", romaji: "sakunen", pronunciation: "sakunen", english: "last year", burmese: "ပြီးခဲ့တဲ့နှစ်", category: "time", example_jp: "昨年引っ越しました。", example_romaji: "Sakunen hikkoshimashita.", example_en: "I moved last year.", example_mm: "ပြီးခဲ့တဲ့နှစ်က အိမ်ပြောင်းခဲ့တယ်။" },
    { japanese: "来年", romaji: "rainen", pronunciation: "rainen", english: "next year", burmese: "လာမယ့်နှစ်", category: "time", example_jp: "来年から大学生です。", example_romaji: "Rainen kara daigakusei desu.", example_en: "I'll be a university student from next year.", example_mm: "လာမယ့်နှစ်ကစပြီး တက္ကသိုလ်ကျောင်းသားဖြစ်မယ်။" },
    { japanese: "昼過ぎ", romaji: "hiru sugi", pronunciation: "hiru sugi", english: "afternoon / past noon", burmese: "နေ့လယ်လွန်", category: "time", example_jp: "昼過ぎに来てください。", example_romaji: "Hiru sugi ni kite kudasai.", example_en: "Please come in the afternoon.", example_mm: "နေ့လယ်လွန်မှာ လာပါ။" },
    { japanese: "夜明け", romaji: "yoake", pronunciation: "yoake", english: "dawn", burmese: "အရုဏ်တက်ချိန်", category: "time", example_jp: "夜明けに起きました。", example_romaji: "Yoake ni okimashita.", example_en: "I woke up at dawn.", example_mm: "အရုဏ်တက်ချိန်မှာ နိုးတယ်။" },
    { japanese: "夕方", romaji: "yuugata", pronunciation: "yuugata", english: "evening (around dusk)", burmese: "ညနေစောင်း", category: "time", example_jp: "夕方に散歩します。", example_romaji: "Yuugata ni sanpo shimasu.", example_en: "I take a walk in the evening.", example_mm: "ညနေစောင်းမှာ လမ်းလျှောက်တယ်။" },
    { japanese: "真夜中", romaji: "mayonaka", pronunciation: "mayonaka", english: "midnight", burmese: "သန်းခေါင်ယံ", category: "time", example_jp: "真夜中に電話がありました。", example_romaji: "Mayonaka ni denwa ga arimashita.", example_en: "There was a call at midnight.", example_mm: "သန်းခေါင်ယံမှာ ဖုန်းဝင်တယ်။" },
    { japanese: "平日", romaji: "heijitsu", pronunciation: "heijitsu", english: "weekday", burmese: "ရုံးဖွင့်ရက် / အပတ်လည်နေ့", category: "time", example_jp: "平日は忙しいです。", example_romaji: "Heijitsu wa isogashii desu.", example_en: "I'm busy on weekdays.", example_mm: "ရုံးဖွင့်ရက်တွေမှာ အလုပ်ရှုပ်တယ်။" },
    { japanese: "週末", romaji: "shuumatsu", pronunciation: "shuumatsu", english: "weekend", burmese: "အပတ်စဉ် အားလပ်ရက်", category: "time", example_jp: "週末は何をしますか。", example_romaji: "Shuumatsu wa nani o shimasu ka.", example_en: "What do you do on weekends?", example_mm: "အပတ်စဉ် အားလပ်ရက်မှာ ဘာလုပ်လဲ။" },

    // ========== WEATHER & NATURE (40 words) ==========
    { japanese: "曇り", romaji: "kumori", pronunciation: "kumori", english: "cloudy weather", burmese: "တိမ်ထူနေခြင်း", category: "weather", example_jp: "今日は曇りです。", example_romaji: "Kyou wa kumori desu.", example_en: "It's cloudy today.", example_mm: "ဒီနေ့ တိမ်ထူတယ်။" },
    { japanese: "雷", romaji: "kaminari", pronunciation: "kaminari", english: "thunder", burmese: "မိုးကြိုး", category: "weather", example_jp: "雷が鳴っています。", example_romaji: "Kaminari ga natte imasu.", example_en: "Thunder is roaring.", example_mm: "မိုးကြိုးပစ်နေတယ်။" },
    { japanese: "稲妻", romaji: "inazuma", pronunciation: "inazuma", english: "lightning", burmese: "လျှပ်စီး", category: "weather", example_jp: "稲妻が見えました。", example_romaji: "Inazuma ga miemashita.", example_en: "I saw lightning.", example_mm: "လျှပ်စီးလက်တာမြင်ရတယ်။" },
    { japanese: "台風", romaji: "taifuu", pronunciation: "taifuu", english: "typhoon", burmese: "မုန်တိုင်း", category: "weather", example_jp: "台風が来ています。", example_romaji: "Taifuu ga kite imasu.", example_en: "A typhoon is coming.", example_mm: "မုန်တိုင်းလာနေတယ်။" },
    { japanese: "地震", romaji: "jishin", pronunciation: "jishin", english: "earthquake", burmese: "မြေငလျင်", category: "weather", example_jp: "地震がありました。", example_romaji: "Jishin ga arimashita.", example_en: "There was an earthquake.", example_mm: "မြေငလျင်လှုပ်တယ်။" },
    { japanese: "津波", romaji: "tsunami", pronunciation: "tsunami", english: "tsunami", burmese: "ဆူနာမီ", category: "weather", example_jp: "津波警報が出ました。", example_romaji: "Tsunami keihou ga demashita.", example_en: "A tsunami warning was issued.", example_mm: "ဆူနာမီသတိပေးချက်ထုတ်ပြန်တယ်။" },
    { japanese: "火山", romaji: "kazan", pronunciation: "kazan", english: "volcano", burmese: "မီးတောင်", category: "nature", example_jp: "桜島は活火山です。", example_romaji: "Sakurajima wa kakkazan desu.", example_en: "Sakurajima is an active volcano.", example_mm: "ဆာကူရာဂျီမာက လှုပ်ရှားနေတဲ့မီးတောင်ဖြစ်တယ်။" },
    { japanese: "噴火", romaji: "funka", pronunciation: "funka", english: "eruption", burmese: "မီးတောင်ပေါက်ကွဲခြင်း", category: "nature", example_jp: "噴火がありました。", example_romaji: "Funka ga arimashita.", example_en: "There was an eruption.", example_mm: "မီးတောင်ပေါက်ကွဲတယ်။" },
    { japanese: "森林", romaji: "shinrin", pronunciation: "shinrin", english: "forest", burmese: "သစ်တော", category: "nature", example_jp: "森林を散歩します。", example_romaji: "Shinrin o sanpo shimasu.", example_en: "I walk in the forest.", example_mm: "သစ်တောထဲ လမ်းလျှောက်တယ်။" },
    { japanese: "草原", romaji: "sougen", pronunciation: "sougen", english: "grassland", burmese: "မြက်ခင်းပြင်", category: "nature", example_jp: "広い草原です。", example_romaji: "Hiroi sougen desu.", example_en: "It's a vast grassland.", example_mm: "ကျယ်ဝန်းတဲ့ မြက်ခင်းပြင်ဖြစ်တယ်။" },
    { japanese: "砂漠", romaji: "sabaku", pronunciation: "sabaku", english: "desert", burmese: "သဲကန္တာရ", category: "nature", example_jp: "砂漠には水がありません。", example_romaji: "Sabaku ni wa mizu ga arimasen.", example_en: "There is no water in the desert.", example_mm: "သဲကန္တာရမှာ ရေမရှိဘူး။" },
    { japanese: "湖", romaji: "mizuumi", pronunciation: "mizuumi", english: "lake", burmese: "အိုင်", category: "nature", example_jp: "琵琶湖は大きいです。", example_romaji: "Biwako wa ookii desu.", example_en: "Lake Biwa is big.", example_mm: "ဘီဝါအိုင်က ကြီးတယ်။" },
    { japanese: "池", romaji: "ike", pronunciation: "ike", english: "pond", burmese: "ကန်", category: "nature", example_jp: "池に鯉がいます。", example_romaji: "Ike ni koi ga imasu.", example_en: "There are koi fish in the pond.", example_mm: "ကန်ထဲမှာ ကိုင် (ငါးလှပ)ရှိတယ်။" },
    { japanese: "滝", romaji: "taki", pronunciation: "taki", english: "waterfall", burmese: "ရေတံခွန်", category: "nature", example_jp: "滝を見に行きました。", example_romaji: "Taki o mi ni ikimashita.", example_en: "I went to see a waterfall.", example_mm: "ရေတံခွန်ကြည့်ဖို့သွားတယ်။" },
    { japanese: "森", romaji: "mori", pronunciation: "mori", english: "woods / forest", burmese: "တော", category: "nature", example_jp: "森の中でキャンプをしました。", example_romaji: "Mori no naka de kyanpu o shimashita.", example_en: "I camped in the woods.", example_mm: "တောထဲမှာ စခန်းချတယ်။" },
    { japanese: "谷", romaji: "tani", pronunciation: "tani", english: "valley", burmese: "ချိုင့်ဝှမ်း", category: "nature", example_jp: "深い谷です。", example_romaji: "Fukai tani desu.", example_en: "It's a deep valley.", example_mm: "နက်ရှိုင်းတဲ့ချိုင့်ဝှမ်းဖြစ်တယ်။" },
    { japanese: "崖", romaji: "gake", pronunciation: "gake", english: "cliff", burmese: "ချောက်ကမ်းပါး", category: "nature", example_jp: "崖の上から海が見えます。", example_romaji: "Gake no ue kara umi ga miemasu.", example_en: "You can see the sea from the top of the cliff.", example_mm: "ချောက်ကမ်းပါးပေါ်ကနေ ပင်လယ်မြင်ရတယ်။" },
    { japanese: "浜", romaji: "hama", pronunciation: "hama", english: "beach", burmese: "ကမ်းခြေ", category: "nature", example_jp: "砂浜を歩きました。", example_romaji: "Sunahama o arukimashita.", example_en: "I walked on the sandy beach.", example_mm: "သဲကမ်းခြေပေါ် လမ်းလျှောက်တယ်။" },
    { japanese: "岩", romaji: "iwa", pronunciation: "iwa", english: "rock", burmese: "ကျောက်", category: "nature", example_jp: "大きな岩があります。", example_romaji: "Ookina iwa ga arimasu.", example_en: "There is a big rock.", example_mm: "ကျောက်တုံးကြီးတစ်တုံးရှိတယ်။" },
    { japanese: "石", romaji: "ishi", pronunciation: "ishi", english: "stone", burmese: "ကျောက်စရစ်", category: "nature", example_jp: "石を投げました。", example_romaji: "Ishi o nagemashita.", example_en: "I threw a stone.", example_mm: "ကျောက်ခဲပစ်လိုက်တယ်။" },
    { japanese: "空", romaji: "sora", pronunciation: "sora", english: "sky", burmese: "ကောင်းကင်", category: "nature", example_jp: "空が青いです。", example_romaji: "Sora ga aoi desu.", example_en: "The sky is blue.", example_mm: "ကောင်းကင်ပြာတယ်။" },
    { japanese: "星", romaji: "hoshi", pronunciation: "hoshi", english: "star", burmese: "ကြယ်", category: "nature", example_jp: "星がきれいです。", example_romaji: "Hoshi ga kirei desu.", example_en: "The stars are beautiful.", example_mm: "ကြယ်တွေ လှတယ်။" },
    { japanese: "月", romaji: "tsuki", pronunciation: "tsuki", english: "moon", burmese: "လ", category: "nature", example_jp: "月が明るいです。", example_romaji: "Tsuki ga akarui desu.", example_en: "The moon is bright.", example_mm: "လကထွန်းလင်းတယ်။" },
    { japanese: "太陽", romaji: "taiyou", pronunciation: "taiyou", english: "sun", burmese: "နေ", category: "nature", example_jp: "太陽が昇りました。", example_romaji: "Taiyou ga noborimashita.", example_en: "The sun rose.", example_mm: "နေထွက်လာပြီ။" },
    { japanese: "風", romaji: "kaze", pronunciation: "kaze", english: "wind", burmese: "လေ", category: "nature", example_jp: "強い風が吹いています。", example_romaji: "Tsuyoi kaze ga fuite imasu.", example_en: "A strong wind is blowing.", example_mm: "လေပြင်းတိုက်နေတယ်။" },
    { japanese: "波", romaji: "nami", pronunciation: "nami", english: "wave", burmese: "လှိုင်း", category: "nature", example_jp: "波が高いです。", example_romaji: "Nami ga takai desu.", example_en: "The waves are high.", example_mm: "လှိုင်းတွေကြီးတယ်။" },
    { japanese: "雲", romaji: "kumo", pronunciation: "kumo", english: "cloud", burmese: "တိမ်", category: "nature", example_jp: "雲が動いています。", example_romaji: "Kumo ga ugoite imasu.", example_en: "The clouds are moving.", example_mm: "တိမ်တွေ ရွေ့နေတယ်။" },
    { japanese: "霧", romaji: "kiri", pronunciation: "kiri", english: "fog", burmese: "မြူ", category: "weather", example_jp: "霧で前が見えません。", example_romaji: "Kiri de mae ga miemasen.", example_en: "I can't see ahead because of the fog.", example_mm: "မြူကြောင့်ရှေ့မမြင်ရဘူး။" },
    { japanese: "霜", romaji: "shimo", pronunciation: "shimo", english: "frost", burmese: "နှင်းခဲ", category: "weather", example_jp: "朝霜が降りました。", example_romaji: "Asashimo ga orimashita.", example_en: "Frost fell this morning.", example_mm: "မနက်က နှင်းခဲကျတယ်။" },
    { japanese: "雪", romaji: "yuki", pronunciation: "yuki", english: "snow", burmese: "နှင်း", category: "weather", example_jp: "雪が降っています。", example_romaji: "Yuki ga futte imasu.", example_en: "It's snowing.", example_mm: "နှင်းကျနေတယ်။" },
    { japanese: "雹", romaji: "hyou", pronunciation: "hyou", english: "hail", burmese: "မိုးသီး", category: "weather", example_jp: "雹が降りました。", example_romaji: "Hyou ga furimashita.", example_en: "It hailed.", example_mm: "မိုးသီးကျတယ်။" },
    { japanese: "虹", romaji: "niji", pronunciation: "niji", english: "rainbow", burmese: "သက်တံ", category: "nature", example_jp: "虹が出ました。", example_romaji: "Niji ga demashita.", example_en: "A rainbow appeared.", example_mm: "သက်တံပေါ်လာတယ်။" },
    { japanese: "夕焼け", romaji: "yuuyake", pronunciation: "yuuyake", english: "sunset glow", burmese: "နေဝင်ချိန်အလင်းရောင်", category: "nature", example_jp: "夕焼けがきれいです。", example_romaji: "Yuuyake ga kirei desu.", example_en: "The sunset glow is beautiful.", example_mm: "နေဝင်ချိန်အလင်းရောင်က လှတယ်။" },
    { japanese: "朝焼け", romaji: "asayake", pronunciation: "asayake", english: "sunrise glow", burmese: "နေထွက်ချိန်အလင်းရောင်", category: "nature", example_jp: "朝焼けを見ました。", example_romaji: "Asayake o mimashita.", example_en: "I saw the sunrise glow.", example_mm: "နေထွက်ချိန်အလင်းရောင်ကိုမြင်တယ်။" },

    // ========== PEOPLE & RELATIONSHIPS (50 words) ==========
    { japanese: "恋人", romaji: "koibito", pronunciation: "koibito", english: "lover / sweetheart", burmese: "ချစ်သူ", category: "people", example_jp: "私の恋人です。", example_romaji: "Watashi no koibito desu.", example_en: "This is my sweetheart.", example_mm: "ဒါက ကျွန်တော့်ချစ်သူပါ။" },
    { japanese: "婚約者", romaji: "konyakusha", pronunciation: "konyakusha", english: "fiancé / fiancée", burmese: "စေ့စပ်ထားသူ", category: "people", example_jp: "婚約者を紹介します。", example_romaji: "Konyakusha o shoukai shimasu.", example_en: "Let me introduce my fiancé.", example_mm: "ကျွန်တော့်စေ့စပ်ထားသူကို မိတ်ဆက်ပါရစေ။" },
    { japanese: "夫", romaji: "otto", pronunciation: "otto", english: "husband", burmese: "ခင်ပွန်း", category: "family", example_jp: "私の夫は会社員です。", example_romaji: "Watashi no otto wa kaishain desu.", example_en: "My husband is a company employee.", example_mm: "ကျွန်မခင်ပွန်းက ကုမ္ပဏီဝန်ထမ်းပါ။" },
    { japanese: "妻", romaji: "tsuma", pronunciation: "tsuma", english: "wife", burmese: "ဇနီး", category: "family", example_jp: "妻は料理が上手です。", example_romaji: "Tsuma wa ryouri ga jouzu desu.", example_en: "My wife is good at cooking.", example_mm: "ကျွန်တော့်ဇနီးက ထမင်းချက်တတ်တယ်။" },
    { japanese: "主人", romaji: "shujin", pronunciation: "shujin", english: "husband (polite)", burmese: "ခင်ပွန်း (ယဉ်ကျေး)", category: "family", example_jp: "主人は出張中です。", example_romaji: "Shujin wa shucchou chuu desu.", example_en: "My husband is on a business trip.", example_mm: "ကျွန်မခင်ပွန်း ခရီးသွားနေတယ်။" },
    { japanese: "家内", romaji: "kanai", pronunciation: "kanai", english: "wife (humble)", burmese: "ဇနီး (နှိမ့်ချ)", category: "family", example_jp: "家内も行きます。", example_romaji: "Kanai mo ikimasu.", example_en: "My wife will also go.", example_mm: "ကျွန်တော့်ဇနီးလည်း သွားမယ်။" },
    { japanese: "両親", romaji: "ryoushin", pronunciation: "ryoushin", english: "parents", burmese: "မိဘနှစ်ပါး", category: "family", example_jp: "両親に会いに行きます。", example_romaji: "Ryoushin ni ai ni ikimasu.", example_en: "I'll go see my parents.", example_mm: "မိဘတွေဆီသွားတွေ့မယ်။" },
    { japanese: "親", romaji: "oya", pronunciation: "oya", english: "parent", burmese: "မိဘ", category: "family", example_jp: "親は厳しいです。", example_romaji: "Oya wa kibishii desu.", example_en: "My parents are strict.", example_mm: "မိဘတွေက တင်းကျပ်တယ်။" },
    { japanese: "子孫", romaji: "shison", pronunciation: "shison", english: "descendants", burmese: "သားစဉ်မြေးဆက်", category: "family", example_jp: "子孫のために環境を守る。", example_romaji: "Shison no tame ni kankyou o mamoru.", example_en: "Protect the environment for future generations.", example_mm: "သားစဉ်မြေးဆက်အတွက် သဘာဝပတ်ဝန်းကျင်ကိုကာကွယ်ပါ။" },
    { japanese: "先祖", romaji: "senzo", pronunciation: "senzo", english: "ancestors", burmese: "ဘိုးဘေးဘီဘင်", category: "family", example_jp: "先祖を敬います。", example_romaji: "Senzo o uyamaimasu.", example_en: "I respect my ancestors.", example_mm: "ဘိုးဘေးဘီဘင်တွေကို ရိုသေတယ်။" },
    { japanese: "隣人", romaji: "rinjin", pronunciation: "rinjin", english: "neighbor", burmese: "အိမ်နီးချင်း", category: "people", example_jp: "隣人に挨拶しました。", example_romaji: "Rinjin ni aisatsu shimashita.", example_en: "I greeted my neighbor.", example_mm: "အိမ်နီးချင်းကို နှုတ်ဆက်တယ်။" },
    { japanese: "同僚", romaji: "douryou", pronunciation: "douryou", english: "coworker", burmese: "လုပ်ဖော်ကိုင်ဖက်", category: "work", example_jp: "同僚と飲みに行きました。", example_romaji: "Douryou to nomi ni ikimashita.", example_en: "I went drinking with coworkers.", example_mm: "လုပ်ဖော်ကိုင်ဖက်တွေနဲ့ အရက်သောက်သွားတယ်။" },
    { japanese: "上司", romaji: "joushi", pronunciation: "joushi", english: "superior / boss", burmese: "အကြီးအကဲ / သူဌေး", category: "work", example_jp: "上司に報告します。", example_romaji: "Joushi ni houkoku shimasu.", example_en: "I report to my boss.", example_mm: "အကြီးအကဲကို အစီရင်ခံတယ်။" },
    { japanese: "部下", romaji: "buka", pronunciation: "buka", english: "subordinate", burmese: "လက်အောက်ငယ်သား", category: "work", example_jp: "部下を指導します。", example_romaji: "Buka o shidou shimasu.", example_en: "I guide my subordinates.", example_mm: "လက်အောက်ငယ်သားတွေကို လမ်းညွှန်တယ်။" },
    { japanese: "客", romaji: "kyaku", pronunciation: "kyaku", english: "customer / guest", burmese: "ဧည့်သည် / ဖောက်သည်", category: "people", example_jp: "客が来ました。", example_romaji: "Kyaku ga kimashita.", example_en: "A guest arrived.", example_mm: "ဧည့်သည်ရောက်လာတယ်။" },
    { japanese: "お客様", romaji: "okyakusama", pronunciation: "okyakusama", english: "customer / guest (polite)", burmese: "ဧည့်သည် / ဖောက်သည် (ယဉ်ကျေး)", category: "people", example_jp: "お客様をお迎えします。", example_romaji: "Okyakusama o omukae shimasu.", example_en: "I welcome the customer.", example_mm: "ဧည့်သည်ကို ကြိုဆိုပါတယ်။" },
    { japanese: "医者", romaji: "isha", pronunciation: "isha", english: "doctor", burmese: "ဆရာဝန်", category: "people", example_jp: "医者に診てもらいました。", example_romaji: "Isha ni mite moraimashita.", example_en: "I got examined by a doctor.", example_mm: "ဆရာဝန်နဲ့ ပြသခဲ့တယ်။" },
    { japanese: "看護師", romaji: "kangoshi", pronunciation: "kangoshi", english: "nurse", burmese: "သူနာပြု", category: "people", example_jp: "看護師が親切でした。", example_romaji: "Kangoshi ga shinsetsu deshita.", example_en: "The nurse was kind.", example_mm: "သူနာပြုက ကြင်နာတယ်။" },
    { japanese: "薬剤師", romaji: "yakuzaishi", pronunciation: "yakuzaishi", english: "pharmacist", burmese: "ဆေးဝါးကျွမ်းကျင်", category: "people", example_jp: "薬剤師に聞きました。", example_romaji: "Yakuzaishi ni kikimashita.", example_en: "I asked the pharmacist.", example_mm: "ဆေးဝါးကျွမ်းကျင်ကို မေးတယ်။" },
    { japanese: "弁護士", romaji: "bengoshi", pronunciation: "bengoshi", english: "lawyer", burmese: "ရှေ့နေ", category: "people", example_jp: "弁護士に相談しました。", example_romaji: "Bengoshi ni soudan shimashita.", example_en: "I consulted a lawyer.", example_mm: "ရှေ့နေနဲ့ တိုင်ပင်တယ်။" },
    { japanese: "教師", romaji: "kyoushi", pronunciation: "kyoushi", english: "teacher (profession)", burmese: "ဆရာ (အလုပ်အကိုင်)", category: "school", example_jp: "教師になるのが夢です。", example_romaji: "Kyoushi ni naru no ga yume desu.", example_en: "My dream is to become a teacher.", example_mm: "ဆရာဖြစ်ဖို့က အိပ်မက်ပါ။" },
    { japanese: "教授", romaji: "kyouju", pronunciation: "kyouju", english: "professor", burmese: "ပါမောက္ခ", category: "school", example_jp: "大学教授です。", example_romaji: "Daigaku kyouju desu.", example_en: "He is a university professor.", example_mm: "သူကတက္ကသိုလ်ပါမောက္ခပါ။" },
    { japanese: "生徒", romaji: "seito", pronunciation: "seito", english: "student (school)", burmese: "ကျောင်းသား (ကျောင်း)", category: "school", example_jp: "生徒が30人います。", example_romaji: "Seito ga sanjuu nin imasu.", example_en: "There are 30 students.", example_mm: "ကျောင်းသား ၃၀ ရှိတယ်။" },
    { japanese: "小学生", romaji: "shougakusei", pronunciation: "shougakusei", english: "elementary school student", burmese: "မူလတန်းကျောင်းသား", category: "school", example_jp: "小学生の息子がいます。", example_romaji: "Shougakusei no musuko ga imasu.", example_en: "I have an elementary school son.", example_mm: "မူလတန်းကျောင်းသားဖြစ်တဲ့ သားရှိတယ်။" },
    { japanese: "中学生", romaji: "chuugakusei", pronunciation: "chuugakusei", english: "junior high student", burmese: "အလယ်တန်းကျောင်းသား", category: "school", example_jp: "中学生の娘です。", example_romaji: "Chuugakusei no musume desu.", example_en: "She is a junior high student daughter.", example_mm: "သူမက အလယ်တန်းကျောင်းသားသမီးပါ။" },
    { japanese: "高校生", romaji: "koukousei", pronunciation: "koukousei", english: "high school student", burmese: "အထက်တန်းကျောင်းသား", category: "school", example_jp: "高校生の時に留学した。", example_romaji: "Koukousei no toki ni ryuugaku shita.", example_en: "I studied abroad when I was a high school student.", example_mm: "အထက်တန်းကျောင်းသားတုန်းက နိုင်ငံရပ်ခြားပညာသင်ခဲ့တယ်။" },
    { japanese: "大学生", romaji: "daigakusei", pronunciation: "daigakusei", english: "university student", burmese: "တက္ကသိုလ်ကျောင်းသား", category: "school", example_jp: "大学生活を楽しんでいます。", example_romaji: "Daigaku seikatsu o tanoshinde imasu.", example_en: "I'm enjoying university life.", example_mm: "တက္ကသိုလ်ဘဝကို ပျော်နေတယ်။" },
    { japanese: "会社員", romaji: "kaishain", pronunciation: "kaishain", english: "company employee", burmese: "ကုမ္ပဏီဝန်ထမ်း", category: "work", example_jp: "普通の会社員です。", example_romaji: "Futsuu no kaishain desu.", example_en: "I'm an ordinary company employee.", example_mm: "သာမန်ကုမ္ပဏီဝန်ထမ်းပါ။" },
    { japanese: "公務員", romaji: "koumuin", pronunciation: "koumuin", english: "public servant / civil servant", burmese: "အစိုးရဝန်ထမ်း", category: "work", example_jp: "公務員試験に合格した。", example_romaji: "Koumuin shiken ni goukaku shita.", example_en: "I passed the civil service exam.", example_mm: "အစိုးရဝန်ထမ်းစာမေးပွဲအောင်တယ်။" },
    { japanese: "自営業", romaji: "jieigyou", pronunciation: "jieigyou", english: "self-employed", burmese: "ကိုယ်ပိုင်လုပ်ငန်းရှင်", category: "work", example_jp: "自営業をしています。", example_romaji: "Jieigyou o shite imasu.", example_en: "I run my own business.", example_mm: "ကိုယ်ပိုင်လုပ်ငန်းလုပ်တယ်။" },
    { japanese: "主婦", romaji: "shufu", pronunciation: "shufu", english: "housewife", burmese: "အိမ်ရှင်မ", category: "people", example_jp: "専業主婦です。", example_romaji: "Sen gyoushufu desu.", example_en: "I'm a full-time housewife.", example_mm: "အချိန်ပြည့်အိမ်ရှင်မပါ။" },
    { japanese: "主夫", romaji: "shufu", pronunciation: "shufu", english: "househusband", burmese: "အိမ်ရှင် (ယောက်ျား)", category: "people", example_jp: "主夫として家事をしています。", example_romaji: "Shufu to shite kaji o shite imasu.", example_en: "I do housework as a househusband.", example_mm: "အိမ်ရှင်အဖြစ် အိမ်မှုကိစ္စလုပ်တယ်။" },
    { japanese: "赤ちゃん", romaji: "akachan", pronunciation: "akachan", english: "baby", burmese: "မွေးကင်းစကလေး", category: "family", example_jp: "赤ちゃんが泣いています。", example_romaji: "Akachan ga naite imasu.", example_en: "The baby is crying.", example_mm: "မွေးကင်းစကလေးငိုနေတယ်။" },
    { japanese: "子供", romaji: "kodomo", pronunciation: "kodomo", english: "child", burmese: "ကလေး", category: "family", example_jp: "子供の頃に戻りたい。", example_romaji: "Kodomo no koro ni modoritai.", example_en: "I want to go back to childhood.", example_mm: "ကလေးဘဝကို ပြန်သွားချင်တယ်။" },
    { japanese: "大人", romaji: "otona", pronunciation: "otona", english: "adult", burmese: "လူကြီး", category: "people", example_jp: "大人の責任は重い。", example_romaji: "Otona no sekinin wa omoi.", example_en: "Adult responsibilities are heavy.", example_mm: "လူကြီးတွေရဲ့တာဝန်က လေးတယ်။" },
    { japanese: "青年", romaji: "seinen", pronunciation: "seinen", english: "youth (male)", burmese: "လူငယ် (ယောက်ျား)", category: "people", example_jp: "青年期は大切な時期です。", example_romaji: "Seinenki wa taisetsu na jiki desu.", example_en: "Youth is an important period.", example_mm: "လူငယ်ဘဝက အရေးကြီးတဲ့အချိန်ဖြစ်တယ်။" },
    { japanese: "少女", romaji: "shoujo", pronunciation: "shoujo", english: "young girl", burmese: "မိန်းကလေး (အပျိုဖော်)", category: "people", example_jp: "少女の頃の写真です。", example_romaji: "Shoujo no koro no shashin desu.", example_en: "This is a picture from when I was a young girl.", example_mm: "မိန်းကလေးဘဝအချိန်က ဓာတ်ပုံပါ။" },
    { japanese: "少年", romaji: "shounen", pronunciation: "shounen", english: "young boy", burmese: "ယောက်ျားလေး (အပျိုဖော်)", category: "people", example_jp: "少年の頃の思い出です。", example_romaji: "Shounen no koro no omoide desu.", example_en: "This is a memory from my boyhood.", example_mm: "ယောက်ျားလေးဘဝအချိန်က အမှတ်ရစရာပါ။" },
    { japanese: "老人", romaji: "roujin", pronunciation: "roujin", english: "elderly person", burmese: "သက်ကြီးရွယ်အို", category: "people", example_jp: "老人に席を譲りました。", example_romaji: "Roujin ni seki o yuzurimashita.", example_en: "I gave my seat to an elderly person.", example_mm: "သက်ကြီးရွယ်အိုကို နေရာပေးလိုက်တယ်။" },
    { japanese: "外国", romaji: "gaikoku", pronunciation: "gaikoku", english: "foreign country", burmese: "နိုင်ငံခြား", category: "places", example_jp: "外国に行ったことがあります。", example_romaji: "Gaikoku ni itta koto ga arimasu.", example_en: "I have been to a foreign country.", example_mm: "နိုင်ငံခြားကို ရောက်ဖူးတယ်။" },
    { japanese: "外国人", romaji: "gaikokujin", pronunciation: "gaikokujin", english: "foreigner", burmese: "နိုင်ငံခြားသား", category: "people", example_jp: "外国人がたくさんいます。", example_romaji: "Gaikokujin ga takusan imasu.", example_en: "There are many foreigners.", example_mm: "နိုင်ငံခြားသားတွေ အများကြီးရှိတယ်။" },
    { japanese: "隣", romaji: "tonari", pronunciation: "tonari", english: "next to / neighboring", burmese: "ဘေးက", category: "places", example_jp: "隣の家は大きいです。", example_romaji: "Tonari no ie wa ookii desu.", example_en: "The neighboring house is big.", example_mm: "ဘေးနားအိမ်က ကြီးတယ်။" },

    // ========== HOUSE & HOME (50 words) ==========
    { japanese: "マンション", romaji: "manshon", pronunciation: "manshon", english: "apartment / condominium", burmese: "တိုက်ခန်း", category: "house", example_jp: "マンションに住んでいます。", example_romaji: "Manshon ni sunde imasu.", example_en: "I live in an apartment.", example_mm: "တိုက်ခန်းမှာနေတယ်။" },
    { japanese: "アパート", romaji: "apaato", pronunciation: "apaato", english: "apartment (usually older/cheaper)", burmese: "အဆောင် (သက်သာသော)", category: "house", example_jp: "安いアパートを借りた。", example_romaji: "Yasui apaato o karita.", example_en: "I rented a cheap apartment.", example_mm: "စျေးသက်သာတဲ့အဆောင်ကို ငှားလိုက်တယ်။" },
    { japanese: "一戸建て", romaji: "ikko date", pronunciation: "ikko date", english: "detached house", burmese: "သီးသန့်အိမ်", category: "house", example_jp: "一戸建てに住みたいです。", example_romaji: "Ikko date ni sumitai desu.", example_en: "I want to live in a detached house.", example_mm: "သီးသန့်အိမ်မှာနေချင်တယ်။" },
    { japanese: "玄関", romaji: "genkan", pronunciation: "genkan", english: "entrance / entryway", burmese: "အိမ်ဝင်ပေါက်", category: "house", example_jp: "玄関で靴を脱ぎます。", example_romaji: "Genkan de kutsu o nugimasu.", example_en: "I take off my shoes at the entrance.", example_mm: "အိမ်ဝင်ပေါက်မှာ ဖိနပ်ချွတ်တယ်။" },
    { japanese: "廊下", romaji: "rouka", pronunciation: "rouka", english: "hallway", burmese: "စင်္ကြံ", category: "house", example_jp: "廊下を走らないでください。", example_romaji: "Rouka o hashiranaide kudasai.", example_en: "Please don't run in the hallway.", example_mm: "စင်္ကြံမှာ မပြေးပါနဲ့။" },
    { japanese: "階段", romaji: "kaidan", pronunciation: "kaidan", english: "stairs", burmese: "လှေကား", category: "house", example_jp: "階段を上がります。", example_romaji: "Kaidan o agarimasu.", example_en: "I go up the stairs.", example_mm: "လှေကားတက်တယ်။" },
    { japanese: "エレベーター", romaji: "erebeetaa", pronunciation: "erebeetaa", english: "elevator", burmese: "ဓာတ်လှေကား", category: "house", example_jp: "エレベーターで上がりました。", example_romaji: "Erebeetaa de agarimashita.", example_en: "I went up by elevator.", example_mm: "ဓာတ်လှေကားနဲ့ တက်သွားတယ်။" },
    { japanese: "エスカレーター", romaji: "esukareetaa", pronunciation: "esukareetaa", english: "escalator", burmese: "စက်လှေကား", category: "house", example_jp: "エスカレーターに乗ります。", example_romaji: "Esukareetaa ni norimasu.", example_en: "I ride the escalator.", example_mm: "စက်လှေကားစီးတယ်။" },
    { japanese: "リビング", romaji: "ribingu", pronunciation: "ribingu", english: "living room", burmese: "ဧည့်ခန်း", category: "house", example_jp: "リビングでテレビを見ます。", example_romaji: "Ribingu de terebi o mimasu.", example_en: "I watch TV in the living room.", example_mm: "ဧည့်ခန်းမှာ တီဗွီကြည့်တယ်။" },
    { japanese: "ダイニング", romaji: "dainingu", pronunciation: "dainingu", english: "dining room", burmese: "ထမင်းစားခန်း", category: "house", example_jp: "ダイニングで食事をします。", example_romaji: "Dainingu de shokuji o shimasu.", example_en: "I have meals in the dining room.", example_mm: "ထမင်းစားခန်းမှာ ထမင်းစားတယ်။" },
    { japanese: "キッチン", romaji: "kicchin", pronunciation: "kicchin", english: "kitchen", burmese: "မီးဖိုချောင်", category: "house", example_jp: "キッチンで料理を作ります。", example_romaji: "Kicchin de ryouri o tsukurimasu.", example_en: "I cook in the kitchen.", example_mm: "မီးဖိုချောင်မှာ ထမင်းချက်တယ်။" },
    { japanese: "寝室", romaji: "shinshitsu", pronunciation: "shinshitsu", english: "bedroom", burmese: "အိပ်ခန်း", category: "house", example_jp: "寝室で寝ます。", example_romaji: "Shinshitsu de nemasu.", example_en: "I sleep in the bedroom.", example_mm: "အိပ်ခန်းမှာ အိပ်တယ်။" },
    { japanese: "子供部屋", romaji: "kodomo beya", pronunciation: "kodomo beya", english: "children's room", burmese: "ကလေးအခန်း", category: "house", example_jp: "子供部屋は散らかっています。", example_romaji: "Kodomo beya wa chirakatte imasu.", example_en: "The children's room is messy.", example_mm: "ကလေးအခန်း ရှုပ်ပွနေတယ်။" },
    { japanese: "書斎", romaji: "shosai", pronunciation: "shosai", english: "study / home office", burmese: "စာကျက်ခန်း / ရုံးခန်း", category: "house", example_jp: "書斎で本を読みます。", example_romaji: "Shosai de hon o yomimasu.", example_en: "I read books in my study.", example_mm: "စာကျက်ခန်းမှာ စာအုပ်ဖတ်တယ်။" },
    { japanese: "和室", romaji: "washitsu", pronunciation: "washitsu", english: "Japanese-style room", burmese: "ဂျပန်စတိုင်အခန်း", category: "house", example_jp: "和室に畳があります。", example_romaji: "Washitsu ni tatami ga arimasu.", example_en: "There are tatami mats in the Japanese room.", example_mm: "ဂျပန်စတိုင်အခန်းမှာ တတမိရှိတယ်။" },
    { japanese: "洋室", romaji: "youshitsu", pronunciation: "youshitsu", english: "Western-style room", burmese: "အနောက်တိုင်းစတိုင်အခန်း", category: "house", example_jp: "洋室はベッドがあります。", example_romaji: "Youshitsu wa beddo ga arimasu.", example_en: "The Western room has a bed.", example_mm: "အနောက်တိုင်းစတိုင်အခန်းမှာ အိပ်ရာရှိတယ်။" },
    { japanese: "押入", romaji: "oshiire", pronunciation: "oshiire", english: "closet", burmese: "ဗီရို", category: "house", example_jp: "押入に布団をしまいます。", example_romaji: "Oshiire ni futon o shimaimasu.", example_en: "I put the futon in the closet.", example_mm: "ဗီရိုထဲမှာ ဖူတွန်ထည့်တယ်။" },
    { japanese: "クローゼット", romaji: "kurozetto", pronunciation: "kurozetto", english: "closet (Western style)", burmese: "ဗီရို (အနောက်တိုင်း)", category: "house", example_jp: "クローゼットに服を入れます。", example_romaji: "Kurozetto ni fuku o iremasu.", example_en: "I put clothes in the closet.", example_mm: "ဗီရိုထဲမှာ အဝတ်တွေထည့်တယ်။" },
    { japanese: "ベランダ", romaji: "beranda", pronunciation: "beranda", english: "balcony", burmese: "လသာဆောင်", category: "house", example_jp: "ベランダで洗濯物を干します。", example_romaji: "Beranda de sentakumono o hoshimasu.", example_en: "I hang laundry on the balcony.", example_mm: "လသာဆောင်မှာ အဝတ်တွေလှန်းတယ်။" },
    { japanese: "庭", romaji: "niwa", pronunciation: "niwa", english: "garden / yard", burmese: "ဥယျာဉ်", category: "house", example_jp: "庭に花が咲いています。", example_romaji: "Niwa ni hana ga saite imasu.", example_en: "Flowers are blooming in the garden.", example_mm: "ဥယျာဉ်မှာ ပန်းတွေပွင့်နေတယ်။" },
    { japanese: "駐車場", romaji: "chuushajou", pronunciation: "chuushajou", english: "parking lot", burmese: "ကားရပ်နားစခန်း", category: "house", example_jp: "駐車場に車を止めます。", example_romaji: "Chuushajou ni kuruma o tomete imasu.", example_en: "I park my car in the parking lot.", example_mm: "ကားရပ်နားစခန်းမှာ ကားရပ်တယ်။" },

    // ========== CITY & TRANSPORT (50 words) ==========
    { japanese: "交差点", romaji: "kousaten", pronunciation: "kousaten", english: "intersection", burmese: "လမ်းဆုံ", category: "transport", example_jp: "交差点を渡ります。", example_romaji: "Kousaten o watarimasu.", example_en: "I cross the intersection.", example_mm: "လမ်းဆုံကိုဖြတ်တယ်။" },
    { japanese: "信号", romaji: "shingou", pronunciation: "shingou", english: "traffic light", burmese: "မီးပွိုင့်", category: "transport", example_jp: "信号が青になりました。", example_romaji: "Shingou ga ao ni narimashita.", example_en: "The traffic light turned green.", example_mm: "မီးပွိုင့်အစိမ်းရောင်ပြောင်းသွားတယ်။" },
    { japanese: "歩道", romaji: "hodou", pronunciation: "hodou", english: "sidewalk", burmese: "လူသွားလမ်း", category: "transport", example_jp: "歩道を歩きます。", example_romaji: "Hodou o arukimasu.", example_en: "I walk on the sidewalk.", example_mm: "လူသွားလမ်းပေါ် လျှောက်တယ်။" },
    { japanese: "車道", romaji: "shadou", pronunciation: "shadou", english: "roadway", burmese: "ကားလမ်း", category: "transport", example_jp: "車道を渡らないでください。", example_romaji: "Shadou o wataranaide kudasai.", example_en: "Please don't cross the roadway.", example_mm: "ကားလမ်းကို မဖြတ်ပါနဲ့။" },
    { japanese: "地下鉄", romaji: "chikatetsu", pronunciation: "chikatetsu", english: "subway / underground", burmese: "မြေအောက်ရထား", category: "transport", example_jp: "地下鉄で行きます。", example_romaji: "Chikatetsu de ikimasu.", example_en: "I go by subway.", example_mm: "မြေအောက်ရထားနဲ့သွားတယ်။" },
    { japanese: "バス停", romaji: "basutei", pronunciation: "basutei", english: "bus stop", burmese: "ဘတ်စ်ကားမှတ်တိုင်", category: "transport", example_jp: "バス停で待ちます。", example_romaji: "Basutei de machimasu.", example_en: "I wait at the bus stop.", example_mm: "ဘတ်စ်ကားမှတ်တိုင်မှာ စောင့်တယ်။" },
    { japanese: "タクシー乗り場", romaji: "takushii noriba", pronunciation: "takushii noriba", english: "taxi stand", burmese: "တက္ကစီမှတ်တိုင်", category: "transport", example_jp: "タクシー乗り場はあそこです。", example_romaji: "Takushii noriba wa asoko desu.", example_en: "The taxi stand is over there.", example_mm: "တက္ကစီမှတ်တိုင်က အဲဒီမှာပါ။" },
    { japanese: "空港", romaji: "kuukou", pronunciation: "kuukou", english: "airport", burmese: "လေဆိပ်", category: "transport", example_jp: "空港に着きました。", example_romaji: "Kuukou ni tsukimashita.", example_en: "I arrived at the airport.", example_mm: "လေဆိပ်ကိုရောက်ပြီ။" },
    { japanese: "港", romaji: "minato", pronunciation: "minato", english: "harbor / port", burmese: "ဆိပ်ကမ်း", category: "transport", example_jp: "港から船が出ます。", example_romaji: "Minato kara fune ga demasu.", example_en: "Ships depart from the port.", example_mm: "ဆိပ်ကမ်းကနေ သင်္ဘောထွက်တယ်။" },
    { japanese: "駅", romaji: "eki", pronunciation: "eki", english: "train station", burmese: "မီးရထားဘူတာ", category: "transport", example_jp: "駅で切符を買います。", example_romaji: "Eki de kippu o kaimasu.", example_en: "I buy a ticket at the station.", example_mm: "ဘူတာမှာ လက်မှတ်ဝယ်တယ်။" },
    { japanese: "新幹線", romaji: "shinkansen", pronunciation: "shinkansen", english: "bullet train", burmese: "ကျည်ဆန်ရထား", category: "transport", example_jp: "新幹線で大阪へ行きます。", example_romaji: "Shinkansen de Osaka e ikimasu.", example_en: "I go to Osaka by bullet train.", example_mm: "ကျည်ဆန်ရထားနဲ့ အိုဆာကာကိုသွားတယ်။" },
    { japanese: "特急", romaji: "tokkyuu", pronunciation: "tokkyuu", english: "limited express train", burmese: "အမြန်ရထား", category: "transport", example_jp: "特急に乗ります。", example_romaji: "Tokkyuu ni norimasu.", example_en: "I take the limited express.", example_mm: "အမြန်ရထားစီးတယ်။" },
    { japanese: "各駅停車", romaji: "kakueki teisha", pronunciation: "kakueki teisha", english: "local train (stops at every station)", burmese: "ဘူတာတိုင်းရပ်ရထား", category: "transport", example_jp: "各駅停車で行きます。", example_romaji: "Kakueki teisha de ikimasu.", example_en: "I go by local train.", example_mm: "ဘူတာတိုင်းရပ်ရထားနဲ့သွားတယ်။" },
    { japanese: "普通列車", romaji: "futsuu ressha", pronunciation: "futsuu ressha", english: "regular train", burmese: "သာမန်ရထား", category: "transport", example_jp: "普通列車で帰ります。", example_romaji: "Futsuu ressha de kaerimasu.", example_en: "I go home by regular train.", example_mm: "သာမန်ရထားနဲ့အိမ်ပြန်တယ်။" },
    { japanese: "切符", romaji: "kippu", pronunciation: "kippu", english: "ticket", burmese: "လက်မှတ်", category: "transport", example_jp: "切符をなくしました。", example_romaji: "Kippu o nakushimashita.", example_en: "I lost my ticket.", example_mm: "လက်မှတ်ပျောက်သွားတယ်။" },
    { japanese: "定期券", romaji: "teikiken", pronunciation: "teikiken", english: "commuter pass", burmese: "လစဉ်ဖြတ်သန်းခွင့်ကတ်", category: "transport", example_jp: "定期券を買いました。", example_romaji: "Teikiken o kaimashita.", example_en: "I bought a commuter pass.", example_mm: "လစဉ်ဖြတ်သန်းခွင့်ကတ်ဝယ်လိုက်တယ်။" },
    { japanese: "改札口", romaji: "kaisatsuguchi", pronunciation: "kaisatsuguchi", english: "ticket gate", burmese: "လက်မှတ်စစ်ဂိတ်", category: "transport", example_jp: "改札口を通ります。", example_romaji: "Kaisatsuguchi o toorimasu.", example_en: "I go through the ticket gate.", example_mm: "လက်မှတ်စစ်ဂိတ်ကိုဖြတ်တယ်။" },
    { japanese: "ホーム", romaji: "hoomu", pronunciation: "hoomu", english: "platform", burmese: "ပလက်ဖောင်း", category: "transport", example_jp: "ホームで待ちます。", example_romaji: "Hoomu de machimasu.", example_en: "I wait on the platform.", example_mm: "ပလက်ဖောင်းပေါ်မှာ စောင့်တယ်။" },
    { japanese: "乗車券", romaji: "joushaken", pronunciation: "joushaken", english: "boarding ticket", burmese: "စီးနင်းခွင့်လက်မှတ်", category: "transport", example_jp: "乗車券を買います。", example_romaji: "Joushaken o kaimasu.", example_en: "I buy a boarding ticket.", example_mm: "စီးနင်းခွင့်လက်မှတ်ဝယ်တယ်။" },

    // ========== SHOPPING & BUSINESS (50 words) ==========
    { japanese: "百貨店", romaji: "hyakkaten", pronunciation: "hyakkaten", english: "department store", burmese: "ဈေးကြီး", category: "shopping", example_jp: "百貨店で買い物します。", example_romaji: "Hyakkaten de kaimono shimasu.", example_en: "I shop at the department store.", example_mm: "ဈေးကြီးမှာ ဈေးဝယ်တယ်။" },
    { japanese: "スーパー", romaji: "suupaa", pronunciation: "suupaa", english: "supermarket", burmese: "စူပါမားကတ်", category: "shopping", example_jp: "スーパーで野菜を買います。", example_romaji: "Suupaa de yasai o kaimasu.", example_en: "I buy vegetables at the supermarket.", example_mm: "စူပါမားကတ်မှာ ဟင်းသီးဟင်းရွက်ဝယ်တယ်။" },
    { japanese: "コンビニ", romaji: "konbini", pronunciation: "konbini", english: "convenience store", burmese: "အဆင်ပြေစတိုး", category: "shopping", example_jp: "コンビニでおにぎりを買いました。", example_romaji: "Konbini de onigiri o kaimashita.", example_en: "I bought a rice ball at the convenience store.", example_mm: "အဆင်ပြေစတိုးမှာ အိုနီဂီရိဝယ်တယ်။" },
    { japanese: "商店街", romaji: "shoutengai", pronunciation: "shoutengai", english: "shopping street", burmese: "ဈေးဝယ်လမ်း", category: "shopping", example_jp: "商店街を歩きます。", example_romaji: "Shoutengai o arukimasu.", example_en: "I walk through the shopping street.", example_mm: "ဈေးဝယ်လမ်းပေါ် လျှောက်တယ်။" },
    { japanese: "市場", romaji: "ichiba", pronunciation: "ichiba", english: "market", burmese: "ဈေးရုံ", category: "shopping", example_jp: "市場で魚を買いました。", example_romaji: "Ichiba de sakana o kaimashita.", example_en: "I bought fish at the market.", example_mm: "ဈေးရုံမှာ ငါးဝယ်တယ်။" },
    { japanese: "値段", romaji: "nedan", pronunciation: "nedan", english: "price", burmese: "ဈေးနှုန်း", category: "shopping", example_jp: "値段はいくらですか。", example_romaji: "Nedan wa ikura desu ka.", example_en: "How much is the price?", example_mm: "ဈေးနှုန်းဘယ်လောက်လဲ။" },
    { japanese: "消費税", romaji: "shouhizei", pronunciation: "shouhizei", english: "consumption tax", burmese: "အသုံးစရိတ်ခွန်", category: "shopping", example_jp: "消費税が10%です。", example_romaji: "Shouhizei ga juu paasento desu.", example_en: "Consumption tax is 10%.", example_mm: "အသုံးစရိတ်ခွန် ၁၀% ရှိတယ်။" },
    { japanese: "割引", romaji: "waribiki", pronunciation: "waribiki", english: "discount", burmese: "လျှော့စျေး", category: "shopping", example_jp: "20%割引です。", example_romaji: "Nijuu paasento waribiki desu.", example_en: "It's 20% off.", example_mm: "၂၀% လျှော့ပေးတယ်။" },
    { japanese: "セール", romaji: "seeru", pronunciation: "seeru", english: "sale", burmese: "ဈေးချို", category: "shopping", example_jp: "セール中です。", example_romaji: "Seeru chuu desu.", example_en: "A sale is going on.", example_mm: "ဈေးချိုနေတယ်။" },
    { japanese: "レシート", romaji: "reshiito", pronunciation: "reshiito", english: "receipt", burmese: "ပြေစာ", category: "shopping", example_jp: "レシートをもらいました。", example_romaji: "Reshiito o moraimashita.", example_en: "I got a receipt.", example_mm: "ပြေစာရလိုက်တယ်။" },
    { japanese: "領収書", romaji: "ryoushuusho", pronunciation: "ryoushuusho", english: "official receipt", burmese: "တရားဝင်ပြေစာ", category: "shopping", example_jp: "領収書をください。", example_romaji: "Ryoushuusho o kudasai.", example_en: "Please give me an official receipt.", example_mm: "တရားဝင်ပြေစာပေးပါ။" },
    { japanese: "返品", romaji: "henpin", pronunciation: "henpin", english: "return (item)", burmese: "ပြန်အပ်ခြင်း", category: "shopping", example_jp: "返品できますか。", example_romaji: "Henpin dekimasu ka.", example_en: "Can I return this?", example_mm: "ဒါပြန်အပ်လို့ရမလား။" },
    { japanese: "交換", romaji: "koukan", pronunciation: "koukan", english: "exchange", burmese: "လဲလှယ်ခြင်း", category: "shopping", example_jp: "サイズを交換してください。", example_romaji: "Saizu o koukan shite kudasai.", example_en: "Please exchange the size.", example_mm: "အရွယ်အစားလဲလှယ်ပေးပါ။" },
    { japanese: "試着", romaji: "shichaku", pronunciation: "shichaku", english: "trying on (clothes)", burmese: "စမ်းဝတ်ခြင်း", category: "shopping", example_jp: "試着してもいいですか。", example_romaji: "Shichaku shite mo ii desu ka.", example_en: "May I try this on?", example_mm: "စမ်းဝတ်လို့ရမလား။" },
    { japanese: "サイズ", romaji: "saizu", pronunciation: "saizu", english: "size", burmese: "အရွယ်အစား", category: "shopping", example_jp: "Lサイズがありますか。", example_romaji: "Eru saizu ga arimasu ka.", example_en: "Do you have size L?", example_mm: "L အရွယ်အစားရှိလား။" },
    { japanese: "色", romaji: "iro", pronunciation: "iro", english: "color", burmese: "အရောင်", category: "shopping", example_jp: "他の色はありますか。", example_romaji: "Hoka no iro wa arimasu ka.", example_en: "Do you have other colors?", example_mm: "တခြားအရောင်ရှိလား။" },
    { japanese: "デザイン", romaji: "dezain", pronunciation: "dezain", english: "design", burmese: "ဒီဇိုင်း", category: "shopping", example_jp: "このデザインが好きです。", example_romaji: "Kono dezain ga suki desu.", example_en: "I like this design.", example_mm: "ဒီဒီဇိုင်းကို ကြိုက်တယ်။" },
    { japanese: "品質", romaji: "hinshitsu", pronunciation: "hinshitsu", english: "quality", burmese: "အရည်အသွေး", category: "shopping", example_jp: "品質が良いです。", example_romaji: "Hinshitsu ga yoi desu.", example_en: "The quality is good.", example_mm: "အရည်အသွေးကောင်းတယ်။" },
    { japanese: "保証", romaji: "hoshou", pronunciation: "hoshou", english: "guarantee / warranty", burmese: "အာမခံချက်", category: "shopping", example_jp: "一年保証付きです。", example_romaji: "Ichinen hoshou tsuki desu.", example_en: "It comes with a one-year warranty.", example_mm: "တစ်နှစ်အာမခံချက်ပါတယ်။" },

    // ========== EDUCATION & SCHOOL (40 words) ==========
    { japanese: "授業", romaji: "jugyou", pronunciation: "jugyou", english: "class / lesson", burmese: "သင်ခန်းစာ", category: "school", example_jp: "授業が始まります。", example_romaji: "Jugyou ga hajimarimasu.", example_en: "The class starts.", example_mm: "သင်ခန်းစာစတယ်။" },
    { japanese: "休み時間", romaji: "yasumi jikan", pronunciation: "yasumi jikan", english: "break time", burmese: "အနားချိန်", category: "school", example_jp: "休み時間に友達と話します。", example_romaji: "Yasumi jikan ni tomodachi to hanashimasu.", example_en: "I talk with friends during break.", example_mm: "အနားချိန်မှာ သူငယ်ချင်းတွေနဲ့ စကားပြောတယ်။" },
    { japanese: "宿題", romaji: "shukudai", pronunciation: "shukudai", english: "homework", burmese: "အိမ်စာ", category: "school", example_jp: "宿題を忘れました。", example_romaji: "Shukudai o wasuremashita.", example_en: "I forgot my homework.", example_mm: "အိမ်စာမေ့သွားတယ်။" },
    { japanese: "試験", romaji: "shiken", pronunciation: "shiken", english: "exam", burmese: "စာမေးပွဲ", category: "school", example_jp: "試験に合格しました。", example_romaji: "Shiken ni goukaku shimashita.", example_en: "I passed the exam.", example_mm: "စာမေးပွဲအောင်တယ်။" },
    { japanese: "答案", romaji: "touan", pronunciation: "touan", english: "exam answer sheet", burmese: "အဖြေစာရွက်", category: "school", example_jp: "答案を提出します。", example_romaji: "Touan o teishutsu shimasu.", example_en: "I submit my answer sheet.", example_mm: "အဖြေစာရွက်တင်တယ်။" },
    { japanese: "点数", romaji: "tensuu", pronunciation: "tensuu", english: "score / grade", burmese: "အမှတ်", category: "school", example_jp: "いい点数を取りました。", example_romaji: "Ii tensuu o torimashita.", example_en: "I got a good score.", example_mm: "အမှတ်ကောင်းရတယ်။" },
    { japanese: "成績", romaji: "seiseki", pronunciation: "seiseki", english: "grades / academic record", burmese: "အဆင့်များ", category: "school", example_jp: "成績が上がりました。", example_romaji: "Seiseki ga agarimashita.", example_en: "My grades improved.", example_mm: "အဆင့်တွေတက်လာတယ်။" },
    { japanese: "単位", romaji: "tan'i", pronunciation: "tan'i", english: "credit (academic)", burmese: "ခရက်ဒစ်", category: "school", example_jp: "単位を取らなければなりません。", example_romaji: "Tan'i o toranakereba narimasen.", example_en: "I have to earn credits.", example_mm: "ခရက်ဒစ်ယူရမယ်။" },
    { japanese: "卒業", romaji: "sotsugyou", pronunciation: "sotsugyou", english: "graduation", burmese: "ဘွဲ့ရခြင်း", category: "school", example_jp: "来年卒業します。", example_romaji: "Rainen sotsugyou shimasu.", example_en: "I will graduate next year.", example_mm: "လာမယ့်နှစ် ဘွဲ့ရမယ်။" },
    { japanese: "入学", romaji: "nyuugaku", pronunciation: "nyuugaku", english: "school entrance", burmese: "ကျောင်းဝင်ခြင်း", category: "school", example_jp: "四月に入学します。", example_romaji: "Shigatsu ni nyuugaku shimasu.", example_en: "I enter school in April.", example_mm: "ဧပြီလမှာ ကျောင်းဝင်မယ်။" },
    { japanese: "留学", romaji: "ryuugaku", pronunciation: "ryuugaku", english: "study abroad", burmese: "နိုင်ငံရပ်ခြားပညာသင်ခြင်း", category: "school", example_jp: "日本に留学したいです。", example_romaji: "Nihon ni ryuugaku shitai desu.", example_en: "I want to study abroad in Japan.", example_mm: "ဂျပန်မှာ နိုင်ငံရပ်ခြားပညာသင်ချင်တယ်။" },

    // ========== WORK & BUSINESS (40 words) ==========
    { japanese: "出張", romaji: "shucchou", pronunciation: "shucchou", english: "business trip", burmese: "ခရီးစဉ် (အလုပ်)", category: "work", example_jp: "大阪へ出張します。", example_romaji: "Osaka e shucchou shimasu.", example_en: "I go on a business trip to Osaka.", example_mm: "အိုဆာကာကို အလုပ်ခရီးသွားမယ်။" },
    { japanese: "残業", romaji: "zangyou", pronunciation: "zangyou", english: "overtime work", burmese: "အချိန်ပိုအလုပ်", category: "work", example_jp: "今日は残業します。", example_romaji: "Kyou wa zangyou shimasu.", example_en: "I'll work overtime today.", example_mm: "ဒီနေ့ အချိန်ပိုအလုပ်လုပ်မယ်။" },
    { japanese: "休暇", romaji: "kyuuka", pronunciation: "kyuuka", english: "vacation / holiday", burmese: "အားလပ်ရက်", category: "work", example_jp: "夏休暇を取ります。", example_romaji: "Natsu kyuuka o torimasu.", example_en: "I take summer vacation.", example_mm: "နွေရာသီအားလပ်ရက်ယူမယ်။" },
    { japanese: "給料", romaji: "kyuuryou", pronunciation: "kyuuryou", english: "salary", burmese: "လစာ", category: "work", example_jp: "給料日は25日です。", example_romaji: "Kyuuryoubi wa nijuugo nichi desu.", example_en: "Payday is the 25th.", example_mm: "လစာထုတ်ရက်က ၂၅ ရက်နေ့ပါ။" },
    { japanese: "ボーナス", romaji: "boonasu", pronunciation: "boonasu", english: "bonus", burmese: "ဘောနပ်စ်", category: "work", example_jp: "夏のボーナスをもらいました。", example_romaji: "Natsu no boonasu o moraimashita.", example_en: "I got my summer bonus.", example_mm: "နွေရာသီဘောနပ်စ်ရတယ်။" },
    { japanese: "退職", romaji: "taishoku", pronunciation: "taishoku", english: "retirement / resignation", burmese: "အလုပ်ထွက်ခြင်း", category: "work", example_jp: "来月退職します。", example_romaji: "Raigetsu taishoku shimasu.", example_en: "I'll resign next month.", example_mm: "လာမယ့်လ အလုပ်ထွက်မယ်။" },
    { japanese: "転職", romaji: "tenshoku", pronunciation: "tenshoku", english: "job change", burmese: "အလုပ်ပြောင်းခြင်း", category: "work", example_jp: "転職を考えています。", example_romaji: "Tenshoku o kangaete imasu.", example_en: "I'm thinking of changing jobs.", example_mm: "အလုပ်ပြောင်းဖို့စဉ်းစားနေတယ်။" },
    { japanese: "面接", romaji: "mensetsu", pronunciation: "mensetsu", english: "job interview", burmese: "အလုပ်အင်တာဗျူး", category: "work", example_jp: "面接に行きます。", example_romaji: "Mensetsu ni ikimasu.", example_en: "I go to a job interview.", example_mm: "အလုပ်အင်တာဗျူးသွားမယ်။" },
    { japanese: "履歴書", romaji: "rirekisho", pronunciation: "rirekisho", english: "resume / CV", burmese: "ကိုယ်ရေးရာဇဝင်", category: "work", example_jp: "履歴書を提出しました。", example_romaji: "Rirekisho o teishutsu shimashita.", example_en: "I submitted my resume.", example_mm: "ကိုယ်ရေးရာဇဝင်တင်လိုက်တယ်။" },
    { japanese: "仕事探し", romaji: "shigoto sagashi", pronunciation: "shigoto sagashi", english: "job hunting", burmese: "အလုပ်ရှာခြင်း", category: "work", example_jp: "仕事探しをしています。", example_romaji: "Shigoto sagashi o shite imasu.", example_en: "I'm job hunting.", example_mm: "အလုပ်ရှာနေတယ်။" },
        // ========== ADJECTIVES - I (い形容詞) (40 words) ==========
    { japanese: "忙しい", romaji: "isogashii", pronunciation: "isogashii", english: "busy", burmese: "အလုပ်ရှုပ်", category: "adjectives", example_jp: "今日はとても忙しいです。", example_romaji: "Kyou wa totemo isogashii desu.", example_en: "I'm very busy today.", example_mm: "ဒီနေ့ အရမ်းအလုပ်ရှုပ်တယ်။" },
    { japanese: "楽しい", romaji: "tanoshii", pronunciation: "tanoshii", english: "fun / enjoyable", burmese: "ပျော်စရာကောင်း", category: "adjectives", example_jp: "パーティーは楽しかったです。", example_romaji: "Paatii wa tanoshikatta desu.", example_en: "The party was fun.", example_mm: "ပါတီက ပျော်စရာကောင်းတယ်။" },
    { japanese: "面白い", romaji: "omoshiroi", pronunciation: "omoshiroi", english: "interesting", burmese: "စိတ်ဝင်စားစရာကောင်း", category: "adjectives", example_jp: "この本は面白いです。", example_romaji: "Kono hon wa omoshiroi desu.", example_en: "This book is interesting.", example_mm: "ဒီစာအုပ်က စိတ်ဝင်စားစရာကောင်းတယ်။" },
    { japanese: "つまらない", romaji: "tsumaranai", pronunciation: "tsumaranai", english: "boring", burmese: "ပျင်းစရာကောင်း", category: "adjectives", example_jp: "その映画はつまらなかった。", example_romaji: "Sono eiga wa tsumaranakatta.", example_en: "That movie was boring.", example_mm: "အဲဒီရုပ်ရှင်က ပျင်းစရာကောင်းတယ်။" },
    { japanese: "難しい", romaji: "muzukashii", pronunciation: "muzukashii", english: "difficult", burmese: "ခက်", category: "adjectives", example_jp: "日本語は難しいですか。", example_romaji: "Nihongo wa muzukashii desu ka.", example_en: "Is Japanese difficult?", example_mm: "ဂျပန်စာ ခက်လား။" },
    { japanese: "易しい", romaji: "yasashii", pronunciation: "yasashii", english: "easy", burmese: "လွယ်", category: "adjectives", example_jp: "この問題は易しいです。", example_romaji: "Kono mondai wa yasashii desu.", example_en: "This problem is easy.", example_mm: "ဒီပုစ္ဆာက လွယ်တယ်။" },
    { japanese: "新しい", romaji: "atarashii", pronunciation: "atarashii", english: "new", burmese: "အသစ်", category: "adjectives", example_jp: "新しい車を買いました。", example_romaji: "Atarashii kuruma o kaimashita.", example_en: "I bought a new car.", example_mm: "ကားအသစ်ဝယ်လိုက်တယ်။" },
    { japanese: "古い", romaji: "furui", pronunciation: "furui", english: "old", burmese: "ဟောင်း", category: "adjectives", example_jp: "古い友達に会いました。", example_romaji: "Furui tomodachi ni aimashita.", example_en: "I met an old friend.", example_mm: "သူငယ်ချင်းဟောင်းတွေ့တယ်။" },
    { japanese: "若い", romaji: "wakai", pronunciation: "wakai", english: "young", burmese: "ငယ်", category: "adjectives", example_jp: "彼は若いです。", example_romaji: "Kare wa wakai desu.", example_en: "He is young.", example_mm: "သူငယ်တယ်။" },
    { japanese: "年老いた", romaji: "toshioita", pronunciation: "toshioita", english: "aged / old (person)", burmese: "အိုမင်း", category: "adjectives", example_jp: "年老いた両親の面倒を見ます。", example_romaji: "Toshioita ryoushin no mendou o mimasu.", example_en: "I take care of my aged parents.", example_mm: "အိုမင်းနေတဲ့မိဘတွေကို ပြုစုတယ်။" },
    { japanese: "暖かい", romaji: "atatakai", pronunciation: "atatakai", english: "warm", burmese: "နွေး", category: "adjectives", example_jp: "春は暖かいです。", example_romaji: "Haru wa atatakai desu.", example_en: "Spring is warm.", example_mm: "နွေဦးရာသီက နွေးတယ်။" },
    { japanese: "涼しい", romaji: "suzushii", pronunciation: "suzushii", english: "cool (weather)", burmese: "အေး (ရာသီဥတု)", category: "adjectives", example_jp: "夕方は涼しいです。", example_romaji: "Yuugata wa suzushii desu.", example_en: "Evenings are cool.", example_mm: "ညနေခင်းတွေ အေးတယ်။" },
    { japanese: "寒い", romaji: "samui", pronunciation: "samui", english: "cold (weather)", burmese: "ချမ်း (ရာသီဥတု)", category: "adjectives", example_jp: "冬は寒いです。", example_romaji: "Fuyu wa samui desu.", example_en: "Winter is cold.", example_mm: "ဆောင်းရာသီက ချမ်းတယ်။" },
    { japanese: "暑い", romaji: "atsui", pronunciation: "atsui", english: "hot (weather)", burmese: "ပူ (ရာသီဥတု)", category: "adjectives", example_jp: "夏は暑いです。", example_romaji: "Natsu wa atsui desu.", example_en: "Summer is hot.", example_mm: "နွေရာသီက ပူတယ်။" },
    { japanese: "熱い", romaji: "atsui", pronunciation: "atsui", english: "hot (object)", burmese: "ပူ (အရာဝတ္ထု)", category: "adjectives", example_jp: "スープが熱いです。", example_romaji: "Suupu ga atsui desu.", example_en: "The soup is hot.", example_mm: "ဟင်းချိုက ပူတယ်။" },
    { japanese: "冷たい", romaji: "tsumetai", pronunciation: "tsumetai", english: "cold (object)", burmese: "အေး (အရာဝတ္ထု)", category: "adjectives", example_jp: "水が冷たいです。", example_romaji: "Mizu ga tsumetai desu.", example_en: "The water is cold.", example_mm: "ရေက အေးတယ်။" },
    { japanese: "高い", romaji: "takai", pronunciation: "takai", english: "high / expensive", burmese: "မြင့် / စျေးကြီး", category: "adjectives", example_jp: "この時計は高いです。", example_romaji: "Kono tokei wa takai desu.", example_en: "This watch is expensive.", example_mm: "ဒီနာရီက စျေးကြီးတယ်။" },
    { japanese: "低い", romaji: "hikui", pronunciation: "hikui", english: "low", burmese: "နိမ့်", category: "adjectives", example_jp: "温度が低いです。", example_romaji: "Ondo ga hikui desu.", example_en: "The temperature is low.", example_mm: "အပူချိန်က နိမ့်တယ်။" },
    { japanese: "安い", romaji: "yasui", pronunciation: "yasui", english: "cheap", burmese: "စျေးချို", category: "adjectives", example_jp: "この店は安いです。", example_romaji: "Kono mise wa yasui desu.", example_en: "This store is cheap.", example_mm: "ဒီဆိုင်က စျေးချိုတယ်။" },
    { japanese: "早い", romaji: "hayai", pronunciation: "hayai", english: "early / fast", burmese: "စော / မြန်", category: "adjectives", example_jp: "朝早く起きます。", example_romaji: "Asa hayaku okimasu.", example_en: "I wake up early in the morning.", example_mm: "မနက်စောစောထတယ်။" },
    { japanese: "遅い", romaji: "osoi", pronunciation: "osoi", english: "late / slow", burmese: "နောက်ကျ / နှေး", category: "adjectives", example_jp: "電車が遅れました。", example_romaji: "Densha ga okuremashita.", example_en: "The train was late.", example_mm: "ရထားနောက်ကျတယ်။" },
    { japanese: "近い", romaji: "chikai", pronunciation: "chikai", english: "near", burmese: "နီး", category: "adjectives", example_jp: "駅から近いです。", example_romaji: "Eki kara chikai desu.", example_en: "It's near the station.", example_mm: "ဘူတာနဲ့နီးတယ်။" },
    { japanese: "遠い", romaji: "tooi", pronunciation: "tooi", english: "far", burmese: "ဝေး", category: "adjectives", example_jp: "北海道は遠いです。", example_romaji: "Hokkaidou wa tooi desu.", example_en: "Hokkaido is far.", example_mm: "ဟော့ကိုင်းဒိုးက ဝေးတယ်။" },
    { japanese: "太い", romaji: "futoi", pronunciation: "futoi", english: "thick / fat", burmese: "ထူ / ဝ", category: "adjectives", example_jp: "腕が太いです。", example_romaji: "Ude ga futoi desu.", example_en: "My arms are thick.", example_mm: "လက်မောင်းကထူတယ်။" },
    { japanese: "細い", romaji: "hosoi", pronunciation: "hosoi", english: "thin / slender", burmese: "ပါး / သွယ်", category: "adjectives", example_jp: "細い道です。", example_romaji: "Hosoi michi desu.", example_en: "It's a narrow road.", example_mm: "လမ်းကျဉ်းတယ်။" },
    { japanese: "広い", romaji: "hiroi", pronunciation: "hiroi", english: "wide / spacious", burmese: "ကျယ်", category: "adjectives", example_jp: "部屋が広いです。", example_romaji: "Heya ga hiroi desu.", example_en: "The room is spacious.", example_mm: "အခန်းကကျယ်တယ်။" },
    { japanese: "狭い", romaji: "semai", pronunciation: "semai", english: "narrow / cramped", burmese: "ကျဉ်း", category: "adjectives", example_jp: "アパートが狭いです。", example_romaji: "Apaato ga semai desu.", example_en: "The apartment is cramped.", example_mm: "အဆောင်က ကျဉ်းတယ်။" },
    { japanese: "重い", romaji: "omoi", pronunciation: "omoi", english: "heavy", burmese: "လေး", category: "adjectives", example_jp: "この荷物は重いです。", example_romaji: "Kono nimotsu wa omoi desu.", example_en: "This luggage is heavy.", example_mm: "ဒီခရီးဆောင်အိတ်က လေးတယ်။" },
    { japanese: "軽い", romaji: "karui", pronunciation: "karui", english: "light", burmese: "ပေါ့", category: "adjectives", example_jp: "この箱は軽いです。", example_romaji: "Kono hako wa karui desu.", example_en: "This box is light.", example_mm: "ဒီသေတ္တာက ပေါ့တယ်။" },
    { japanese: "強い", romaji: "tsuyoi", pronunciation: "tsuyoi", english: "strong", burmese: "အားကြီး", category: "adjectives", example_jp: "風が強いです。", example_romaji: "Kaze ga tsuyoi desu.", example_en: "The wind is strong.", example_mm: "လေက အားကြီးတယ်။" },
    { japanese: "弱い", romaji: "yowai", pronunciation: "yowai", english: "weak", burmese: "အားနည်း", category: "adjectives", example_jp: "彼は体が弱いです。", example_romaji: "Kare wa karada ga yowai desu.", example_en: "He has a weak body.", example_mm: "သူ့ခန္ဓာကိုယ်က အားနည်းတယ်။" },

    // ========== ADJECTIVES - NA (な形容詞) (40 words) ==========
    { japanese: "好きな", romaji: "suki na", pronunciation: "suki na", english: "liked / favorite", burmese: "ကြိုက်သော", category: "adjectives", example_jp: "好きな食べ物は何ですか。", example_romaji: "Suki na tabemono wa nan desu ka.", example_en: "What's your favorite food?", example_mm: "ကြိုက်တဲ့အစားအစာကဘာလဲ။" },
    { japanese: "嫌いな", romaji: "kirai na", pronunciation: "kirai na", english: "disliked / hated", burmese: "မုန်းသော", category: "adjectives", example_jp: "嫌いな食べ物があります。", example_romaji: "Kirai na tabemono ga arimasu.", example_en: "There are foods I dislike.", example_mm: "မုန်းတဲ့အစားအစာရှိတယ်။" },
    { japanese: "上手な", romaji: "jouzu na", pronunciation: "jouzu na", english: "skillful / good at", burmese: "ကျွမ်းကျင်သော", category: "adjectives", example_jp: "彼はピアノが上手です。", example_romaji: "Kare wa piano ga jouzu desu.", example_en: "He is good at piano.", example_mm: "သူ စန္ဒရားကျွမ်းကျင်တယ်။" },
    { japanese: "下手な", romaji: "heta na", pronunciation: "heta na", english: "unskillful / poor at", burmese: "မကျွမ်းကျင်သော", category: "adjectives", example_jp: "私は絵が下手です。", example_romaji: "Watashi wa e ga heta desu.", example_en: "I'm bad at drawing.", example_mm: "ငါ ပုံဆွဲတာ မကျွမ်းကျင်ဘူး။" },
    { japanese: "静かな", romaji: "shizuka na", pronunciation: "shizuka na", english: "quiet", burmese: "တိတ်ဆိတ်သော", category: "adjectives", example_jp: "図書館は静かです。", example_romaji: "Toshokan wa shizuka desu.", example_en: "The library is quiet.", example_mm: "စာကြည့်တိုက်က တိတ်ဆိတ်တယ်။" },
    { japanese: "賑やかな", romaji: "nigiyaka na", pronunciation: "nigiyaka na", english: "lively / bustling", burmese: "စည်ကားသော", category: "adjectives", example_jp: "東京は賑やかです。", example_romaji: "Toukyou wa nigiyaka desu.", example_en: "Tokyo is bustling.", example_mm: "တိုကျိုက စည်ကားတယ်။" },
    { japanese: "綺麗な", romaji: "kirei na", pronunciation: "kirei na", english: "beautiful / clean", burmese: "လှပသော / သန့်ရှင်းသော", category: "adjectives", example_jp: "富士山は綺麗です。", example_romaji: "Fujisan wa kirei desu.", example_en: "Mount Fuji is beautiful.", example_mm: "ဖူဂျီတောင်က လှပါတယ်။" },
    { japanese: "汚い", romaji: "kitanai", pronunciation: "kitanai", english: "dirty", burmese: "ညစ်ပတ်သော", category: "adjectives", example_jp: "この部屋は汚いです。", example_romaji: "Kono heya wa kitanai desu.", example_en: "This room is dirty.", example_mm: "ဒီအခန်းက ညစ်ပတ်တယ်။" },
    { japanese: "便利な", romaji: "benri na", pronunciation: "benri na", english: "convenient", burmese: "အဆင်ပြေသော", category: "adjectives", example_jp: "スマホは便利です。", example_romaji: "Sumaho wa benri desu.", example_en: "Smartphones are convenient.", example_mm: "စမတ်ဖုန်းက အဆင်ပြေတယ်။" },
    { japanese: "不便な", romaji: "fuben na", pronunciation: "fuben na", english: "inconvenient", burmese: "အဆင်မပြေသော", category: "adjectives", example_jp: "田舎は不便です。", example_romaji: "Inaka wa fuben desu.", example_en: "The countryside is inconvenient.", example_mm: "�ျေးလက်က အဆင်မပြေဘူး။" },
    { japanese: "元気な", romaji: "genki na", pronunciation: "genki na", english: "healthy / energetic", burmese: "ကျန်းမာသော / တက်ကြွသော", category: "adjectives", example_jp: "お元気ですか。", example_romaji: "Ogenki desu ka.", example_en: "How are you?", example_mm: "နေကောင်းလား။" },
    { japanese: "病気な", romaji: "byouki na", pronunciation: "byouki na", english: "sick", burmese: "ဖျားနာသော", category: "adjectives", example_jp: "彼は病気です。", example_romaji: "Kare wa byouki desu.", example_en: "He is sick.", example_mm: "သူ ဖျားနေတယ်။" },
    { japanese: "大切な", romaji: "taisetsu na", pronunciation: "taisetsu na", english: "important / precious", burmese: "အရေးကြီးသော / တန်ဖိုးရှိသော", category: "adjectives", example_jp: "家族は大切です。", example_romaji: "Kazoku wa taisetsu desu.", example_en: "Family is important.", example_mm: "မိသားစုက အရေးကြီးတယ်။" },
    { japanese: "危ない", romaji: "abunai", pronunciation: "abunai", english: "dangerous", burmese: "အန္တရာယ်ရှိသော", category: "adjectives", example_jp: "ここは危ないです。", example_romaji: "Koko wa abunai desu.", example_en: "This place is dangerous.", example_mm: "ဒီနေရာက အန္တရာယ်ရှိတယ်။" },
    { japanese: "安全な", romaji: "anzen na", pronunciation: "anzen na", english: "safe", burmese: "လုံခြုံသော", category: "adjectives", example_jp: "日本は安全です。", example_romaji: "Nihon wa anzen desu.", example_en: "Japan is safe.", example_mm: "ဂျပန်က လုံခြုံတယ်။" },
    { japanese: "簡単な", romaji: "kantan na", pronunciation: "kantan na", english: "simple / easy", burmese: "ရိုးရှင်းသော / လွယ်ကူသော", category: "adjectives", example_jp: "この問題は簡単です。", example_romaji: "Kono mondai wa kantan desu.", example_en: "This problem is simple.", example_mm: "ဒီပုစ္ဆာက ရိုးရှင်းတယ်။" },
    { japanese: "複雑な", romaji: "fukuzatsu na", pronunciation: "fukuzatsu na", english: "complicated", burmese: "ရှုပ်ထွေးသော", category: "adjectives", example_jp: "人間関係は複雑です。", example_romaji: "Ningen kankei wa fukuzatsu desu.", example_en: "Human relationships are complicated.", example_mm: "လူအချင်းချင်းဆက်ဆံရေးက ရှုပ်ထွေးတယ်။" },
    { japanese: "丁寧な", romaji: "teinei na", pronunciation: "teinei na", english: "polite / careful", burmese: "ယဉ်ကျေးသော / သေချာသော", category: "adjectives", example_jp: "丁寧に説明してください。", example_romaji: "Teinei ni setsumei shite kudasai.", example_en: "Please explain carefully.", example_mm: "သေချာရှင်းပြပေးပါ။" },
    { japanese: "失礼な", romaji: "shitsurei na", pronunciation: "shitsurei na", english: "rude", burmese: "မယဉ်ကျေးသော", category: "adjectives", example_jp: "失礼な人です。", example_romaji: "Shitsurei na hito desu.", example_en: "He is a rude person.", example_mm: "သူက မယဉ်ကျေးတဲ့လူပါ။" },
    { japanese: "真面目な", romaji: "majime na", pronunciation: "majime na", english: "serious / diligent", burmese: "လေးနက်သော / ဝီရိယရှိသော", category: "adjectives", example_jp: "彼は真面目な学生です。", example_romaji: "Kare wa majime na gakusei desu.", example_en: "He is a diligent student.", example_mm: "သူက ဝီရိယရှိတဲ့ကျောင်းသားပါ။" },
    { japanese: "自由な", romaji: "jiyuu na", pronunciation: "jiyuu na", english: "free", burmese: "လွတ်လပ်သော", category: "adjectives", example_jp: "自由な時間が欲しい。", example_romaji: "Jiyuu na jikan ga hoshii.", example_en: "I want free time.", example_mm: "အားလပ်ချိန်လိုချင်တယ်။" },
    { japanese: "特別な", romaji: "tokubetsu na", pronunciation: "tokubetsu na", english: "special", burmese: "အထူးသော", category: "adjectives", example_jp: "今日は特別な日です。", example_romaji: "Kyou wa tokubetsu na hi desu.", example_en: "Today is a special day.", example_mm: "ဒီနေ့က အထူးနေ့ပါ။" },
    { japanese: "普通の", romaji: "futsuu no", pronunciation: "futsuu no", english: "ordinary / normal", burmese: "သာမန်", category: "adjectives", example_jp: "普通の生活を送っています。", example_romaji: "Futsuu no seikatsu o okutte imasu.", example_en: "I live an ordinary life.", example_mm: "သာမန်ဘဝနေထိုင်တယ်။" },
    { japanese: "同じ", romaji: "onaji", pronunciation: "onaji", english: "same", burmese: "တူသော", category: "adjectives", example_jp: "同じ学校に行きます。", example_romaji: "Onaji gakkou ni ikimasu.", example_en: "I go to the same school.", example_mm: "ကျောင်းတူသွားတယ်။" },
    { japanese: "違う", romaji: "chigau", pronunciation: "chigau", english: "different", burmese: "ကွဲပြားသော", category: "adjectives", example_jp: "意見が違います。", example_romaji: "Iken ga chigaimasu.", example_en: "Our opinions differ.", example_mm: "အမြင်ကွဲပြားတယ်။" },
    { japanese: "十分な", romaji: "juubun na", pronunciation: "juubun na", english: "sufficient / enough", burmese: "လုံလောက်သော", category: "adjectives", example_jp: "お金は十分です。", example_romaji: "Okane wa juubun desu.", example_en: "The money is enough.", example_mm: "ပိုက်ဆံလုံလောက်တယ်။" },
    { japanese: "不足な", romaji: "fusoku na", pronunciation: "fusoku na", english: "insufficient", burmese: "မလုံလောက်သော", category: "adjectives", example_jp: "睡眠不足です。", example_romaji: "Suimin fusoku desu.", example_en: "I lack sleep.", example_mm: "အိပ်ရေးမဝဘူး။" },

    // ========== RU-VERBS (一段動詞) (30 words) ==========
    { japanese: "見る", romaji: "miru", pronunciation: "miru", english: "to see / to watch", burmese: "မြင် / ကြည့်", category: "verbs", example_jp: "テレビを見ます。", example_romaji: "Terebi o mimasu.", example_en: "I watch TV.", example_mm: "တီဗွီကြည့်တယ်။" },
    { japanese: "食べる", romaji: "taberu", pronunciation: "taberu", english: "to eat", burmese: "စား", category: "verbs", example_jp: "朝ごはんを食べます。", example_romaji: "Asagohan o tabemasu.", example_en: "I eat breakfast.", example_mm: "မနက်စာစားတယ်။" },
    { japanese: "寝る", romaji: "neru", pronunciation: "neru", english: "to sleep", burmese: "အိပ်", category: "verbs", example_jp: "早く寝ます。", example_romaji: "Hayaku nemasu.", example_en: "I sleep early.", example_mm: "စောစောအိပ်တယ်။" },
    { japanese: "起きる", romaji: "okiru", pronunciation: "okiru", english: "to wake up", burmese: "နိုး", category: "verbs", example_jp: "6時に起きます。", example_romaji: "Rokuji ni okimasu.", example_en: "I wake up at 6.", example_mm: "၆ နာရီမှာ နိုးတယ်။" },
    { japanese: "開ける", romaji: "akeru", pronunciation: "akeru", english: "to open", burmese: "ဖွင့်", category: "verbs", example_jp: "ドアを開けます。", example_romaji: "Doa o akemasu.", example_en: "I open the door.", example_mm: "တံခါးဖွင့်တယ်။" },
    { japanese: "閉める", romaji: "shimeru", pronunciation: "shimeru", english: "to close", burmese: "ပိတ်", category: "verbs", example_jp: "窓を閉めます。", example_romaji: "Mado o shimemasu.", example_en: "I close the window.", example_mm: "ပြတင်းပေါက်ပိတ်တယ်။" },
    { japanese: "教える", romaji: "oshieru", pronunciation: "oshieru", english: "to teach / to tell", burmese: "သင်ပေး / ပြော", category: "verbs", example_jp: "日本語を教えます。", example_romaji: "Nihongo o oshiemasu.", example_en: "I teach Japanese.", example_mm: "ဂျပန်စာသင်ပေးတယ်။" },
    { japanese: "覚える", romaji: "oboeru", pronunciation: "oboeru", english: "to memorize", burmese: "မှတ်မိ", category: "verbs", example_jp: "単語を覚えます。", example_romaji: "Tango o oboemasu.", example_en: "I memorize vocabulary.", example_mm: "ဝေါဟာရမှတ်မိတယ်။" },
    { japanese: "忘れる", romaji: "wasureru", pronunciation: "wasureru", english: "to forget", burmese: "မေ့", category: "verbs", example_jp: "名前を忘れました。", example_romaji: "Namae o wasuremashita.", example_en: "I forgot the name.", example_mm: "နာမည်မေ့သွားတယ်။" },
    { japanese: "考える", romaji: "kangaeru", pronunciation: "kangaeru", english: "to think", burmese: "စဉ်းစား", category: "verbs", example_jp: "将来について考えます。", example_romaji: "Shourai ni tsuite kangaemasu.", example_en: "I think about the future.", example_mm: "အနာဂတ်အကြောင်းစဉ်းစားတယ်။" },
    { japanese: "信じる", romaji: "shinjiru", pronunciation: "shinjiru", english: "to believe", burmese: "ယုံ", category: "verbs", example_jp: "彼を信じています。", example_romaji: "Kare o shinjite imasu.", example_en: "I believe him.", example_mm: "သူ့ကိုယုံတယ်။" },
    { japanese: "感じる", romaji: "kanjiru", pronunciation: "kanjiru", english: "to feel", burmese: "ခံစား", category: "verbs", example_jp: "幸せを感じます。", example_romaji: "Shiawase o kanjimasu.", example_en: "I feel happiness.", example_mm: "ပျော်ရွှင်မှုခံစားရတယ်။" },
    { japanese: "借りる", romaji: "kariru", pronunciation: "kariru", english: "to borrow", burmese: "ငှား", category: "verbs", example_jp: "本を借ります。", example_romaji: "Hon o karimasu.", example_en: "I borrow a book.", example_mm: "စာအုပ်ငှားတယ်။" },
    { japanese: "足りる", romaji: "tariru", pronunciation: "tariru", english: "to be enough", burmese: "လုံလောက်", category: "verbs", example_jp: "時間が足りません。", example_romaji: "Jikan ga tarimasen.", example_en: "There isn't enough time.", example_mm: "အချိန်မလုံလောက်ဘူး။" },

    // ========== U-VERBS (五段動詞) (50 words) ==========
    { japanese: "行く", romaji: "iku", pronunciation: "iku", english: "to go", burmese: "သွား", category: "verbs", example_jp: "学校へ行きます。", example_romaji: "Gakkou e ikimasu.", example_en: "I go to school.", example_mm: "ကျောင်းသွားတယ်။" },
    { japanese: "来る", romaji: "kuru", pronunciation: "kuru", english: "to come", burmese: "လာ", category: "verbs", example_jp: "友達が来ます。", example_romaji: "Tomodachi ga kimasu.", example_en: "My friend comes.", example_mm: "သူငယ်ချင်းလာတယ်။" },
    { japanese: "帰る", romaji: "kaeru", pronunciation: "kaeru", english: "to return home", burmese: "အိမ်ပြန်", category: "verbs", example_jp: "家に帰ります。", example_romaji: "Ie ni kaerimasu.", example_en: "I go home.", example_mm: "အိမ်ပြန်တယ်။" },
    { japanese: "話す", romaji: "hanasu", pronunciation: "hanasu", english: "to speak", burmese: "ပြော", category: "verbs", example_jp: "日本語を話します。", example_romaji: "Nihongo o hanashimasu.", example_en: "I speak Japanese.", example_mm: "ဂျပန်စကားပြောတယ်။" },
    { japanese: "聞く", romaji: "kiku", pronunciation: "kiku", english: "to listen / to ask", burmese: "နားထောင် / မေး", category: "verbs", example_jp: "音楽を聞きます。", example_romaji: "Ongaku o kikimasu.", example_en: "I listen to music.", example_mm: "ဂီတနားထောင်တယ်။" },
    { japanese: "読む", romaji: "yomu", pronunciation: "yomu", english: "to read", burmese: "ဖတ်", category: "verbs", example_jp: "新聞を読みます。", example_romaji: "Shinbun o yomimasu.", example_en: "I read the newspaper.", example_mm: "သတင်းစာဖတ်တယ်။" },
    { japanese: "書く", romaji: "kaku", pronunciation: "kaku", english: "to write", burmese: "ရေး", category: "verbs", example_jp: "手紙を書きます。", example_romaji: "Tegami o kakimasu.", example_en: "I write a letter.", example_mm: "စာရေးတယ်။" },
    { japanese: "買う", romaji: "kau", pronunciation: "kau", english: "to buy", burmese: "ဝယ်", category: "verbs", example_jp: "野菜を買います。", example_romaji: "Yasai o kaimasu.", example_en: "I buy vegetables.", example_mm: "ဟင်းသီးဟင်းရွက်ဝယ်တယ်။" },
    { japanese: "売る", romaji: "uru", pronunciation: "uru", english: "to sell", burmese: "ရောင်း", category: "verbs", example_jp: "この店は服を売ります。", example_romaji: "Kono mise wa fuku o urimasu.", example_en: "This store sells clothes.", example_mm: "ဒီဆိုင်က အဝတ်အစားရောင်းတယ်။" },
    { japanese: "作る", romaji: "tsukuru", pronunciation: "tsukuru", english: "to make", burmese: "လုပ်", category: "verbs", example_jp: "料理を作ります。", example_romaji: "Ryouri o tsukurimasu.", example_en: "I cook (make food).", example_mm: "ထမင်းချက်တယ်။" },
    { japanese: "持つ", romaji: "motsu", pronunciation: "motsu", english: "to have / to hold", burmese: "ရှိ / ကိုင်", category: "verbs", example_jp: "パスポートを持っています。", example_romaji: "Pasupooto o motte imasu.", example_en: "I have a passport.", example_mm: "ခရီးသွားစာရွက်စာတမ်းရှိတယ်။" },
    { japanese: "待つ", romaji: "matsu", pronunciation: "matsu", english: "to wait", burmese: "စောင့်", category: "verbs", example_jp: "バスを待ちます。", example_romaji: "Basu o machimasu.", example_en: "I wait for the bus.", example_mm: "ဘတ်စ်ကားစောင့်တယ်။" },
    { japanese: "立つ", romaji: "tatsu", pronunciation: "tatsu", english: "to stand", burmese: "ရပ်", category: "verbs", example_jp: "席に立つ。", example_romaji: "Seki ni tatsu.", example_en: "Stand up from the seat.", example_mm: "ထိုင်ခုံကနေထတယ်။" },
    { japanese: "座る", romaji: "suwaru", pronunciation: "suwaru", english: "to sit", burmese: "ထိုင်", category: "verbs", example_jp: "椅子に座ります。", example_romaji: "Isu ni suwarimasu.", example_en: "I sit on the chair.", example_mm: "ကုလားထိုင်ပေါ်ထိုင်တယ်။" },
    { japanese: "入る", romaji: "hairu", pronunciation: "hairu", english: "to enter", burmese: "ဝင်", category: "verbs", example_jp: "部屋に入ります。", example_romaji: "Heya ni hairimasu.", example_en: "I enter the room.", example_mm: "အခန်းထဲဝင်တယ်။" },
    { japanese: "出る", romaji: "deru", pronunciation: "deru", english: "to go out / to leave", burmese: "ထွက်", category: "verbs", example_jp: "家を出ます。", example_romaji: "Ie o demasu.", example_en: "I leave the house.", example_mm: "အိမ်ကထွက်တယ်။" },
    { japanese: "会う", romaji: "au", pronunciation: "au", english: "to meet", burmese: "တွေ့", category: "verbs", example_jp: "友達に会います。", example_romaji: "Tomodachi ni aimasu.", example_en: "I meet my friend.", example_mm: "သူငယ်ချင်းတွေ့တယ်။" },
    { japanese: "働く", romaji: "hataraku", pronunciation: "hataraku", english: "to work", burmese: "အလုပ်လုပ်", category: "verbs", example_jp: "会社で働きます。", example_romaji: "Kaisha de hatarakimasu.", example_en: "I work at a company.", example_mm: "ကုမ္ပဏီမှာ အလုပ်လုပ်တယ်။" },
    { japanese: "休む", romaji: "yasumu", pronunciation: "yasumu", english: "to rest / to be absent", burmese: "အနားယူ / ပျက်ကွက်", category: "verbs", example_jp: "日曜日は休みます。", example_romaji: "Nichiyoubi wa yasumimasu.", example_en: "I rest on Sundays.", example_mm: "တနင်္ဂနွေနေ့ အနားယူတယ်။" },
    { japanese: "遊ぶ", romaji: "asobu", pronunciation: "asobu", english: "to play", burmese: "ကစား", category: "verbs", example_jp: "公園で遊びます。", example_romaji: "Kouen de asobimasu.", example_en: "I play at the park.", example_mm: "ပန်းခြံမှာ ကစားတယ်။" },
    { japanese: "泳ぐ", romaji: "oyogu", pronunciation: "oyogu", english: "to swim", burmese: "ရေကူး", category: "verbs", example_jp: "海で泳ぎます。", example_romaji: "Umi de oyogimasu.", example_en: "I swim in the sea.", example_mm: "ပင်လယ်မှာ ရေကူးတယ်။" },
    { japanese: "走る", romaji: "hashiru", pronunciation: "hashiru", english: "to run", burmese: "ပြေး", category: "verbs", example_jp: "毎朝走ります。", example_romaji: "Maiasa hashirimasu.", example_en: "I run every morning.", example_mm: "မနက်တိုင်းပြေးတယ်။" },
    { japanese: "飛ぶ", romaji: "tobu", pronunciation: "tobu", english: "to fly / to jump", burmese: "ပျံ / ခုန်", category: "verbs", example_jp: "鳥が飛びます。", example_romaji: "Tori ga tobimasu.", example_en: "Birds fly.", example_mm: "ငှက်တွေပျံသန်းတယ်။" },
    { japanese: "運転する", romaji: "unten suru", pronunciation: "unten suru", english: "to drive", burmese: "ကားမောင်း", category: "verbs", example_jp: "車を運転します。", example_romaji: "Kuruma o unten shimasu.", example_en: "I drive a car.", example_mm: "ကားမောင်းတယ်။" },
    { japanese: "勉強する", romaji: "benkyou suru", pronunciation: "benkyou suru", english: "to study", burmese: "လေ့လာ", category: "verbs", example_jp: "日本語を勉強します。", example_romaji: "Nihongo o benkyou shimasu.", example_en: "I study Japanese.", example_mm: "ဂျပန်စာလေ့လာတယ်။" },
    { japanese: "旅行する", romaji: "ryokou suru", pronunciation: "ryokou suru", english: "to travel", burmese: "ခရီးသွား", category: "verbs", example_jp: "京都へ旅行します。", example_romaji: "Kyouto e ryokou shimasu.", example_en: "I travel to Kyoto.", example_mm: "ကျိုတိုကို ခရီးသွားတယ်။" },
    { japanese: "買い物する", romaji: "kaimono suru", pronunciation: "kaimono suru", english: "to shop", burmese: "ဈေးဝယ်", category: "verbs", example_jp: "デパートで買い物します。", example_romaji: "Depaato de kaimono shimasu.", example_en: "I shop at the department store.", example_mm: "ဈေးကြီးမှာ ဈေးဝယ်တယ်။" },
    { japanese: "散歩する", romaji: "sanpo suru", pronunciation: "sanpo suru", english: "to take a walk", burmese: "လမ်းလျှောက်", category: "verbs", example_jp: "公園を散歩します。", example_romaji: "Kouen o sanpo shimasu.", example_en: "I take a walk in the park.", example_mm: "ပန်းခြံမှာ လမ်းလျှောက်တယ်။" },
    { japanese: "料理する", romaji: "ryouri suru", pronunciation: "ryouri suru", english: "to cook", burmese: "ချက်", category: "verbs", example_jp: "夕飯を料理します。", example_romaji: "Yuuhan o ryouri shimasu.", example_en: "I cook dinner.", example_mm: "ညစာချက်တယ်။" },
    { japanese: "掃除する", romaji: "souji suru", pronunciation: "souji suru", english: "to clean", burmese: "သန့်ရှင်း", category: "verbs", example_jp: "部屋を掃除します。", example_romaji: "Heya o souji shimasu.", example_en: "I clean the room.", example_mm: "အခန်းသန့်ရှင်းတယ်။" },
    { japanese: "洗濯する", romaji: "sentaku suru", pronunciation: "sentaku suru", english: "to do laundry", burmese: "အဝတ်လျှော်", category: "verbs", example_jp: "洗濯をします。", example_romaji: "Sentaku o shimasu.", example_en: "I do laundry.", example_mm: "အဝတ်လျှော်တယ်။" },
    { japanese: "電話する", romaji: "denwa suru", pronunciation: "denwa suru", english: "to call (by phone)", burmese: "ဖုန်းခေါ်", category: "verbs", example_jp: "友達に電話します。", example_romaji: "Tomodachi ni denwa shimasu.", example_en: "I call my friend.", example_mm: "သူငယ်ချင်းကို ဖုန်းခေါ်တယ်။" },
    { japanese: "結婚する", romaji: "kekkon suru", pronunciation: "kekkon suru", english: "to marry", burmese: "လက်ထပ်", category: "verbs", example_jp: "来年結婚します。", example_romaji: "Rainen kekkon shimasu.", example_en: "I will marry next year.", example_mm: "လာမယ့်နှစ် လက်ထပ်မယ်။" },
    { japanese: "心配する", romaji: "shinpai suru", pronunciation: "shinpai suru", english: "to worry", burmese: "စိုးရိမ်", category: "verbs", example_jp: "試験を心配しています。", example_romaji: "Shiken o shinpai shite imasu.", example_en: "I'm worried about the exam.", example_mm: "စာမေးပွဲအတွက် စိုးရိမ်နေတယ်။" },
    { japanese: "準備する", romaji: "junbi suru", pronunciation: "junbi suru", english: "to prepare", burmese: "ပြင်ဆင်", category: "verbs", example_jp: "旅行の準備をします。", example_romaji: "Ryokou no junbi o shimasu.", example_en: "I prepare for the trip.", example_mm: "ခရီးအတွက် ပြင်ဆင်တယ်။" },

    // ========== PARTICLES & CONJUNCTIONS (40 words) ==========
    { japanese: "〜から〜まで", romaji: "kara made", pronunciation: "kara made", english: "from A to B (time/place)", burmese: "A မှ B အထိ", category: "particles", example_jp: "9時から5時まで働きます。", example_romaji: "Kuji kara goji made hatarakimasu.", example_en: "I work from 9 to 5.", example_mm: "၉ နာရီကနေ ၅ နာရီအထိ အလုပ်လုပ်တယ်။" },
    { japanese: "〜について", romaji: "ni tsuite", pronunciation: "ni tsuite", english: "about / concerning", burmese: "အကြောင်း", category: "particles", example_jp: "日本の文化について話します。", example_romaji: "Nihon no bunka ni tsuite hanashimasu.", example_en: "I talk about Japanese culture.", example_mm: "ဂျပန်ယဉ်ကျေးမှုအကြောင်းပြောတယ်။" },
    { japanese: "〜にとって", romaji: "ni totte", pronunciation: "ni totte", english: "for / to (from perspective of)", burmese: "အတွက် (ရှုထောင့်)", category: "particles", example_jp: "私にとって家族は大切です。", example_romaji: "Watashi ni totte kazoku wa taisetsu desu.", example_en: "Family is important to me.", example_mm: "ကျွန်တော့်အတွက် မိသားစုက အရေးကြီးတယ်။" },
    { japanese: "〜として", romaji: "to shite", pronunciation: "to shite", english: "as (in capacity of)", burmese: "အနေဖြင့်", category: "particles", example_jp: "社長として発言します。", example_romaji: "Shachou to shite hatsugen shimasu.", example_en: "I speak as the president.", example_mm: "ဥက္ကဋ္ဌအနေဖြင့် ပြောကြားပါတယ်။" },
    { japanese: "〜のように", romaji: "no you ni", pronunciation: "no you ni", english: "like / similar to", burmese: "ကဲ့သို့", category: "particles", example_jp: "鳥のように飛びたいです。", example_romaji: "Tori no you ni tobitai desu.", example_en: "I want to fly like a bird.", example_mm: "ငှက်ကဲ့သို့ ပျံသန်းချင်တယ်။" },
    { japanese: "〜ような", romaji: "no you na", pronunciation: "no you na", english: "such as / like (modifying noun)", burmese: "ကဲ့သို့သော", category: "particles", example_jp: "東京のような大きな都市。", example_romaji: "Toukyou no you na ookina toshi.", example_en: "A big city like Tokyo.", example_mm: "တိုကျိုကဲ့သို့သော မြို့ကြီး။" },
    { japanese: "〜ばかり", romaji: "bakari", pronunciation: "bakari", english: "only / nothing but", burmese: "သာ", category: "particles", example_jp: "毎日ラーメンばかり食べている。", example_romaji: "Mainichi raamen bakari tabete iru.", example_en: "I eat nothing but ramen every day.", example_mm: "နေ့တိုင်း ရာမန်သာ စားနေတယ်။" },
    { japanese: "〜ぐらい", romaji: "gurai", pronunciation: "gurai", english: "about / approximately", burmese: "ခန့်", category: "particles", example_jp: "1時間ぐらい待ちました。", example_romaji: "Ichi jikan gurai machimashita.", example_en: "I waited about one hour.", example_mm: "တစ်နာရီခန့် စောင့်ခဲ့တယ်။" },
    { japanese: "〜ほど", romaji: "hodo", pronunciation: "hodo", english: "as ~ as / to the extent of", burmese: "လောက်", category: "particles", example_jp: "目が痛いほど疲れた。", example_romaji: "Me ga itai hodo tsukareta.", example_en: "I'm tired to the point my eyes hurt.", example_mm: "မျက်လုံးနာလောက်အောင် ပင်ပန်းတယ်။" },
    { japanese: "〜さえ", romaji: "sae", pronunciation: "sae", english: "even (emphasis)", burmese: "တောင် (အလေးပေးမှု)", category: "particles", example_jp: "子供でさえできます。", example_romaji: "Kodomo de sae dekimasu.", example_en: "Even a child can do it.", example_mm: "ကလေးတောင်မှ လုပ်နိုင်တယ်။" },
        // ========== CONTINUATION - PARTICLES & CONJUNCTIONS (continued) ==========
    { japanese: "〜しか〜ない", romaji: "shika nai", pronunciation: "shika nai", english: "only / nothing but (negative)", burmese: "သာ (ငြင်းဝါကျ)", category: "particles", example_jp: "10分しかありません。", example_romaji: "Juppun shika arimasen.", example_en: "There are only 10 minutes.", example_mm: "၁၀ မိနစ်သာ ရှိတယ်။" },
    { japanese: "〜こそ", romaji: "koso", pronunciation: "koso", english: "indeed / precisely / for sure", burmese: "ဟုတ်မှဟုတ်", category: "particles", example_jp: "これこそ本当の幸せだ。", example_romaji: "Kore koso hontou no shiawase da.", example_en: "This is indeed true happiness.", example_mm: "ဒါဟာမှပဲ တကယ့်ပျော်ရွှင်မှု။" },
    { japanese: "〜ずつ", romaji: "zutsu", pronunciation: "zutsu", english: "each / at a time", burmese: "စီ", category: "particles", example_jp: "一つずつください。", example_romaji: "Hitotsu zutsu kudasai.", example_en: "Please give me one of each.", example_mm: "တစ်ခုစီပေးပါ။" },
    { japanese: "〜ながら", romaji: "nagara", pronunciation: "nagara", english: "while (simultaneous action)", burmese: "ရင်း", category: "particles", example_jp: "音楽を聞きながら勉強する。", example_romaji: "Ongaku o kikinagara benkyou suru.", example_en: "I study while listening to music.", example_mm: "ဂီတနားထောင်ရင်း လေ့လာတယ်။" },
    { japanese: "〜つつ", romaji: "tsutsu", pronunciation: "tsutsu", english: "while (more formal)", burmese: "ရင်း (ရိုသေ)", category: "particles", example_jp: "歩きつつ考えた。", example_romaji: "Aruki tsutsu kangaeta.", example_en: "I thought while walking.", example_mm: "လမ်းလျှောက်ရင်း စဉ်းစားတယ်။" },

    // ========== ADVERBS (40 words) ==========
    { japanese: "とても", romaji: "totemo", pronunciation: "totemo", english: "very", burmese: "အလွန်", category: "misc", example_jp: "とても美味しいです。", example_romaji: "Totemo oishii desu.", example_en: "It's very delicious.", example_mm: "အရမ်းအရသာရှိတယ်။" },
    { japanese: "すごく", romaji: "sugoku", pronunciation: "sugoku", english: "extremely / awesomely", burmese: "အလွန်အမင်း", category: "misc", example_jp: "すごく楽しかった。", example_romaji: "Sugoku tanoshikatta.", example_en: "It was extremely fun.", example_mm: "အရမ်းပျော်စရာကောင်းတယ်။" },
    { japanese: "かなり", romaji: "kanari", pronunciation: "kanari", english: "considerably / fairly", burmese: "အတော်အတန်", category: "misc", example_jp: "かなり疲れた。", example_romaji: "Kanari tsukareta.", example_en: "I'm considerably tired.", example_mm: "အတော်လေး ပင်ပန်းတယ်။" },
    { japanese: "ちょっと", romaji: "chotto", pronunciation: "chotto", english: "a little", burmese: "နည်းနည်း", category: "misc", example_jp: "ちょっと待ってください。", example_romaji: "Chotto matte kudasai.", example_en: "Please wait a little.", example_mm: "နည်းနည်းစောင့်ပါ။" },
    { japanese: "あまり〜ない", romaji: "amari nai", pronunciation: "amari nai", english: "not very / not much", burmese: "သိပ်မဟုတ်", category: "misc", example_jp: "あまり好きじゃない。", example_romaji: "Amari suki janai.", example_en: "I don't like it very much.", example_mm: "သိပ်မကြိုက်ဘူး။" },
    { japanese: "ほとんど", romaji: "hotondo", pronunciation: "hotondo", english: "almost / mostly", burmese: "အများစု", category: "misc", example_jp: "ほとんど終わった。", example_romaji: "Hotondo owatta.", example_en: "It's almost finished.", example_mm: "ပြီးလုနီးပါးပြီ။" },
    { japanese: "全然〜ない", romaji: "zenzen nai", pronunciation: "zenzen nai", english: "not at all", burmese: "လုံးဝမ", category: "misc", example_jp: "全然わかりません。", example_romaji: "Zenzen wakarimasen.", example_en: "I don't understand at all.", example_mm: "လုံးဝနားမလည်ဘူး။" },
    { japanese: "必ず", romaji: "kanarazu", pronunciation: "kanarazu", english: "without fail / certainly", burmese: "မဖြစ်မနေ", category: "misc", example_jp: "必ず連絡します。", example_romaji: "Kanarazu renraku shimasu.", example_en: "I'll definitely contact you.", example_mm: "မဖြစ်မနေ ဆက်သွယ်မယ်။" },
    { japanese: "ぜひ", romaji: "zehi", pronunciation: "zehi", english: "by all means / certainly", burmese: "သေချာပေါက်", category: "misc", example_jp: "ぜひ来てください。", example_romaji: "Zehi kite kudasai.", example_en: "Please come by all means.", example_mm: "သေချာပေါက်လာပါ။" },
    { japanese: "もし", romaji: "moshi", pronunciation: "moshi", english: "if (hypothetical)", burmese: "အကယ်၍", category: "misc", example_jp: "もし雨が降ったら、行かない。", example_romaji: "Moshi ame ga futtara, ikanai.", example_en: "If it rains, I won't go.", example_mm: "အကယ်၍မိုးရွာရင် မသွားဘူး။" },
    { japanese: "もしもし", romaji: "moshimoshi", pronunciation: "moshimoshi", english: "hello (on phone)", burmese: "ဟလို (ဖုန်း)", category: "greetings", example_jp: "もしもし、田中です。", example_romaji: "Moshimoshi, Tanaka desu.", example_en: "Hello, this is Tanaka.", example_mm: "ဟလို၊ တာနာကာပါ။" },
    { japanese: "それでは", romaji: "soredewa", pronunciation: "soredewa", english: "well then / in that case", burmese: "သို့ဖြစ်လျှင်", category: "conjunction", example_jp: "それでは、また明日。", example_romaji: "Soredewa, mata ashita.", example_en: "Well then, see you tomorrow.", example_mm: "သို့ဖြစ်လျှင် မနက်ဖြန်ပြန်တွေ့မယ်။" },
    { japanese: "つまり", romaji: "tsumari", pronunciation: "tsumari", english: "in other words / namely", burmese: "ဆိုလိုသည်မှာ", category: "conjunction", example_jp: "つまり、あなたは来ないの？", example_romaji: "Tsumari, anata wa konai no?", example_en: "In other words, you're not coming?", example_mm: "ဆိုလိုတာက မင်းမလာဘူးလား။" },
    { japanese: "例えば", romaji: "tatoeba", pronunciation: "tatoeba", english: "for example", burmese: "ဥပမာ", category: "conjunction", example_jp: "例えば、これは好きですか。", example_romaji: "Tatoeba, kore wa suki desu ka.", example_en: "For example, do you like this?", example_mm: "ဥပမာ၊ ဒါကို ကြိုက်လား။" },
    { japanese: "要するに", romaji: "yousuru ni", pronunciation: "yousuru ni", english: "in short / to sum up", burmese: "အချုပ်အားဖြင့်", category: "conjunction", example_jp: "要するに、無理です。", example_romaji: "Yousuru ni, muri desu.", example_en: "In short, it's impossible.", example_mm: "အချုပ်အားဖြင့် မဖြစ်နိုင်ဘူး။" },
    { japanese: "従って", romaji: "shitagatte", pronunciation: "shitagatte", english: "therefore / consequently", burmese: "ထို့ကြောင့်", category: "conjunction", example_jp: "従って、中止します。", example_romaji: "Shitagatte, chuushi shimasu.", example_en: "Therefore, we will cancel.", example_mm: "ထို့ကြောင့် ဖျက်သိမ်းမယ်။" },
    { japanese: "しかし", romaji: "shikashi", pronunciation: "shikashi", english: "however / but", burmese: "သို့သော်", category: "conjunction", example_jp: "しかし、問題があります。", example_romaji: "Shikashi, mondai ga arimasu.", example_en: "However, there is a problem.", example_mm: "သို့သော် ပြဿနာရှိတယ်။" },
    { japanese: "ところが", romaji: "tokoroga", pronunciation: "tokoroga", english: "however (unexpected)", burmese: "သို့သော် (မမျှော်လင့်ဘဲ)", category: "conjunction", example_jp: "ところが、彼は来なかった。", example_romaji: "Tokoroga, kare wa konakatta.", example_en: "However, he didn't come.", example_mm: "သို့သော် သူမလာဘူး။" },
    { japanese: "それなのに", romaji: "sorenanoni", pronunciation: "sorenanoni", english: "despite that / nevertheless", burmese: "ထိုသို့ဖြစ်လင့်ကစား", category: "conjunction", example_jp: "それなのに、笑っている。", example_romaji: "Sorenanoni, waratte iru.", example_en: "Nevertheless, he's laughing.", example_mm: "ထိုသို့ဖြစ်လင့်ကစား ရယ်နေတယ်။" },

    // ========== FAMILY & RELATIONSHIPS (additional) (30 words) ==========
    { japanese: "祖父", romaji: "sofu", pronunciation: "sofu", english: "grandfather", burmese: "အဘိုး", category: "family", example_jp: "私の祖父は元気です。", example_romaji: "Watashi no sofu wa genki desu.", example_en: "My grandfather is healthy.", example_mm: "ကျွန်တော့်အဘိုး ကျန်းမာတယ်။" },
    { japanese: "祖母", romaji: "sobo", pronunciation: "sobo", english: "grandmother", burmese: "အဘွား", category: "family", example_jp: "祖母は料理が上手です。", example_romaji: "Sobo wa ryouri ga jouzu desu.", example_en: "My grandmother is good at cooking.", example_mm: "အဘွား ထမင်းချက်တတ်တယ်။" },
    { japanese: "孫", romaji: "mago", pronunciation: "mago", english: "grandchild", burmese: "မြေး", category: "family", example_jp: "孫がかわいいです。", example_romaji: "Mago ga kawaii desu.", example_en: "My grandchild is cute.", example_mm: "မြေးက ချစ်စရာကောင်းတယ်။" },
    { japanese: "叔父", romaji: "oji", pronunciation: "oji", english: "uncle", burmese: "ဘကြီး / ဦးလေး", category: "family", example_jp: "叔父は医者です。", example_romaji: "Oji wa isha desu.", example_en: "My uncle is a doctor.", example_mm: "ဦးလေး ဆရာဝန်ပါ။" },
    { japanese: "叔母", romaji: "oba", pronunciation: "oba", english: "aunt", burmese: "အဒေါ် / မိကြီး", category: "family", example_jp: "叔母が来ました。", example_romaji: "Oba ga kimashita.", example_en: "My aunt came.", example_mm: "အဒေါ်လာတယ်။" },
    { japanese: "従兄弟", romaji: "itoko", pronunciation: "itoko", english: "cousin (male)", burmese: "ဝမ်းကွဲ (ယောက်ျား)", category: "family", example_jp: "従兄弟と遊びました。", example_romaji: "Itoko to asobimashita.", example_en: "I played with my cousin.", example_mm: "ဝမ်းကွဲနဲ့ ကစားတယ်။" },
    { japanese: "従姉妹", romaji: "itoko", pronunciation: "itoko", english: "cousin (female)", burmese: "ဝမ်းကွဲ (မိန်းမ)", category: "family", example_jp: "従姉妹は大学生です。", example_romaji: "Itoko wa daigakusei desu.", example_en: "My cousin is a university student.", example_mm: "ဝမ်းကွဲမ ကျောင်းသားပါ။" },

    // ========== BODY PARTS (additional) (20 words) ==========
    { japanese: "頭", romaji: "atama", pronunciation: "atama", english: "head", burmese: "ခေါင်း", category: "body", example_jp: "頭が痛いです。", example_romaji: "Atama ga itai desu.", example_en: "I have a headache.", example_mm: "ခေါင်းကိုက်တယ်။" },
    { japanese: "顔", romaji: "kao", pronunciation: "kao", english: "face", burmese: "မျက်နှာ", category: "body", example_jp: "顔を洗います。", example_romaji: "Kao o araimasu.", example_en: "I wash my face.", example_mm: "မျက်နှာသစ်တယ်။" },
    { japanese: "首", romaji: "kubi", pronunciation: "kubi", english: "neck", burmese: "လည်ပင်း", category: "body", example_jp: "首が痛いです。", example_romaji: "Kubi ga itai desu.", example_en: "I have a neck pain.", example_mm: "လည်ပင်းကိုက်တယ်။" },
    { japanese: "肩", romaji: "kata", pronunciation: "kata", english: "shoulder", burmese: "ပခုံး", category: "body", example_jp: "肩がこりました。", example_romaji: "Kata ga korimashita.", example_en: "My shoulders are stiff.", example_mm: "ပခုံးတောင့်တယ်။" },
    { japanese: "背中", romaji: "senaka", pronunciation: "senaka", english: "back", burmese: "ကျော", category: "body", example_jp: "背中を押してください。", example_romaji: "Senaka o oshite kudasai.", example_en: "Please push my back.", example_mm: "ကျောကိုတွန်းပေးပါ။" },
    { japanese: "お腹", romaji: "onaka", pronunciation: "onaka", english: "stomach", burmese: "ဗိုက်", category: "body", example_jp: "お腹が空きました。", example_romaji: "Onaka ga sukimashita.", example_en: "I'm hungry.", example_mm: "ဗိုက်ဆာတယ်။" },
    { japanese: "腰", romaji: "koshi", pronunciation: "koshi", english: "waist / lower back", burmese: "ခါး", category: "body", example_jp: "腰が痛いです。", example_romaji: "Koshi ga itai desu.", example_en: "My lower back hurts.", example_mm: "ခါးကိုက်တယ်။" },
    { japanese: "腕", romaji: "ude", pronunciation: "ude", english: "arm", burmese: "လက်မောင်း", category: "body", example_jp: "腕が強いです。", example_romaji: "Ude ga tsuyoi desu.", example_en: "My arms are strong.", example_mm: "လက်မောင်းသန်တယ်။" },
    { japanese: "手", romaji: "te", pronunciation: "te", english: "hand", burmese: "လက်", category: "body", example_jp: "手を洗ってください。", example_romaji: "Te o aratte kudasai.", example_en: "Please wash your hands.", example_mm: "လက်ဆေးပါ။" },
    { japanese: "指", romaji: "yubi", pronunciation: "yubi", english: "finger", burmese: "လက်ချောင်း", category: "body", example_jp: "指輪を買いました。", example_romaji: "Yubiwa o kaimashita.", example_en: "I bought a ring.", example_mm: "လက်စွပ်ဝယ်တယ်။" },
    { japanese: "足", romaji: "ashi", pronunciation: "ashi", english: "leg / foot", burmese: "ခြေ / ခြေထောက်", category: "body", example_jp: "足が速いです。", example_romaji: "Ashi ga hayai desu.", example_en: "I can run fast.", example_mm: "ခြေထောက်မြန်တယ်။" },
    { japanese: "膝", romaji: "hiza", pronunciation: "hiza", english: "knee", burmese: "ဒူး", category: "body", example_jp: "膝を怪我しました。", example_romaji: "Hiza o kega shimashita.", example_en: "I injured my knee.", example_mm: "ဒူးဒဏ်ရာရတယ်။" },

    // ========== EMOTIONS & FEELINGS (20 words) ==========
    { japanese: "嬉しい", romaji: "ureshii", pronunciation: "ureshii", english: "happy", burmese: "ပျော်", category: "adjectives", example_jp: "会えて嬉しいです。", example_romaji: "Aete ureshii desu.", example_en: "I'm happy to see you.", example_mm: "တွေ့ရတာ ပျော်တယ်။" },
    { japanese: "悲しい", romaji: "kanashii", pronunciation: "kanashii", english: "sad", burmese: "ဝမ်းနည်း", category: "adjectives", example_jp: "悲しいニュースです。", example_romaji: "Kanashii nyuusu desu.", example_en: "It's sad news.", example_mm: "ဝမ်းနည်းစရာသတင်း။" },
    { japanese: "楽しい", romaji: "tanoshii", pronunciation: "tanoshii", english: "enjoyable", burmese: "ပျော်စရာ", category: "adjectives", example_jp: "楽しい時間を過ごしました。", example_romaji: "Tanoshii jikan o sugoshimashita.", example_en: "I had a good time.", example_mm: "ပျော်စရာအချိန်ဖြုန်းခဲ့တယ်။" },
    { japanese: "寂しい", romaji: "sabishii", pronunciation: "sabishii", english: "lonely", burmese: "အထီးကျန်", category: "adjectives", example_jp: "一人で寂しいです。", example_romaji: "Hitori de sabishii desu.", example_en: "I'm lonely alone.", example_mm: "တစ်ယောက်တည်းဆို အထီးကျန်တယ်။" },
    { japanese: "怖い", romaji: "kowai", pronunciation: "kowai", english: "scary", burmese: "ကြောက်စရာ", category: "adjectives", example_jp: "お化けが怖いです。", example_romaji: "Obake ga kowai desu.", example_en: "Ghosts are scary.", example_mm: "တစ္ဆေကြောက်တယ်။" },
    { japanese: "恥ずかしい", romaji: "hazukashii", pronunciation: "hazukashii", english: "embarrassed", burmese: "ရှက်", category: "adjectives", example_jp: "恥ずかしいです。", example_romaji: "Hazukashii desu.", example_en: "I'm embarrassed.", example_mm: "ရှက်တယ်။" },
    { japanese: "羨ましい", romaji: "urayamashii", pronunciation: "urayamashii", english: "jealous / envious", burmese: "ငြူစူ", category: "adjectives", example_jp: "羨ましいです。", example_romaji: "Urayamashii desu.", example_en: "I'm jealous.", example_mm: "ငြူစူတယ်။" },
    { japanese: "腹が立つ", romaji: "hara ga tatsu", pronunciation: "hara ga tatsu", english: "to get angry", burmese: "စိတ်ဆိုး", category: "verbs", example_jp: "彼の態度に腹が立つ。", example_romaji: "Kare no taido ni hara ga tatsu.", example_en: "I get angry at his attitude.", example_mm: "သူ့အမူအရာကို စိတ်ဆိုးတယ်။" },
    { japanese: "緊張する", romaji: "kinchou suru", pronunciation: "kinchou suru", english: "to be nervous", burmese: "အကြောတင်", category: "verbs", example_jp: "試験前は緊張します。", example_romaji: "Shiken mae wa kinchou shimasu.", example_en: "I'm nervous before exams.", example_mm: "စာမေးပွဲမတိုင်ခင် အကြောတင်တယ်။" },
    { japanese: "疲れる", romaji: "tsukareru", pronunciation: "tsukareru", english: "to get tired", burmese: "ပင်ပန်း", category: "verbs", example_jp: "今日は疲れた。", example_romaji: "Kyou wa tsukareta.", example_en: "I'm tired today.", example_mm: "ဒီနေ့ ပင်ပန်းတယ်။" },

    // ========== WEATHER & NATURE (additional) (20 words) ==========
    { japanese: "雪が降る", romaji: "yuki ga furu", pronunciation: "yuki ga furu", english: "to snow", burmese: "နှင်းကျ", category: "weather", example_jp: "明日雪が降ります。", example_romaji: "Ashita yuki ga furimasu.", example_en: "It will snow tomorrow.", example_mm: "မနက်ဖြန်နှင်းကျမယ်။" },
    { japanese: "雨が降る", romaji: "ame ga furu", pronunciation: "ame ga furu", english: "to rain", burmese: "မိုးရွာ", category: "weather", example_jp: "雨が降っています。", example_romaji: "Ame ga futte imasu.", example_en: "It's raining.", example_mm: "မိုးရွာနေတယ်။" },
    { japanese: "晴れる", romaji: "hareru", pronunciation: "hareru", english: "to become sunny", burmese: "သာလာ", category: "weather", example_jp: "明日は晴れます。", example_romaji: "Ashita wa haremasu.", example_en: "It will be sunny tomorrow.", example_mm: "မနက်ဖြန်သာမယ်။" },
    { japanese: "曇る", romaji: "kumoru", pronunciation: "kumoru", english: "to become cloudy", burmese: "တိမ်ထူ", category: "weather", example_jp: "空が曇りました。", example_romaji: "Sora ga kumorimashita.", example_en: "The sky became cloudy.", example_mm: "ကောင်းကင်တိမ်ထူတယ်။" },
    { japanese: "風が吹く", romaji: "kaze ga fuku", pronunciation: "kaze ga fuku", english: "wind blows", burmese: "လေတိုက်", category: "weather", example_jp: "強い風が吹いています。", example_romaji: "Tsuyoi kaze ga fuite imasu.", example_en: "A strong wind is blowing.", example_mm: "လေပြင်းတိုက်နေတယ်။" },
    { japanese: "地震が起こる", romaji: "jishin ga okoru", pronunciation: "jishin ga okoru", english: "earthquake occurs", burmese: "မြေငလျင်လှုပ်", category: "weather", example_jp: "地震が起こりました。", example_romaji: "Jishin ga okorimashita.", example_en: "An earthquake occurred.", example_mm: "မြေငလျင်လှုပ်တယ်။" },

    // ========== DAILY ACTIVITIES (20 words) ==========
    { japanese: "起きる", romaji: "okiru", pronunciation: "okiru", english: "to wake up", burmese: "နိုး", category: "daily", example_jp: "6時に起きます。", example_romaji: "Rokuji ni okimasu.", example_en: "I wake up at 6.", example_mm: "၆ နာရီမှာ နိုးတယ်။" },
    { japanese: "寝る", romaji: "neru", pronunciation: "neru", english: "to sleep", burmese: "အိပ်", category: "daily", example_jp: "11時に寝ます。", example_romaji: "Juichi ji ni nemasu.", example_en: "I sleep at 11.", example_mm: "၁၁ နာရီမှာ အိပ်တယ်။" },
    { japanese: "着替える", romaji: "kigaeru", pronunciation: "kigaeru", english: "to change clothes", burmese: "အဝတ်လဲ", category: "daily", example_jp: "着替えをします。", example_romaji: "Kigae o shimasu.", example_en: "I change clothes.", example_mm: "အဝတ်လဲတယ်။" },
    { japanese: "洗う", romaji: "arau", pronunciation: "arau", english: "to wash", burmese: "ဆေး", category: "daily", example_jp: "手を洗います。", example_romaji: "Te o araimasu.", example_en: "I wash my hands.", example_mm: "လက်ဆေးတယ်။" },
    { japanese: "入浴する", romaji: "nyuuyoku suru", pronunciation: "nyuuyoku suru", english: "to take a bath", burmese: "ရေချိုး", category: "daily", example_jp: "毎晩入浴します。", example_romaji: "Maiban nyuuyoku shimasu.", example_en: "I take a bath every night.", example_mm: "ညတိုင်း ရေချိုးတယ်။" },
    { japanese: "歯を磨く", romaji: "ha o migaku", pronunciation: "ha o migaku", english: "to brush teeth", burmese: "သွားတိုက်", category: "daily", example_jp: "朝と夜、歯を磨きます。", example_romaji: "Asa to yoru, ha o migakimasu.", example_en: "I brush my teeth morning and night.", example_mm: "မနက်နဲ့ည သွားတိုက်တယ်။" },
    { japanese: "顔を洗う", romaji: "kao o arau", pronunciation: "kao o arau", english: "to wash face", burmese: "မျက်နှာသစ်", category: "daily", example_jp: "顔を洗ってから出かけます。", example_romaji: "Kao o aratte kara dekakemasu.", example_en: "I wash my face before going out.", example_mm: "မျက်နှာသစ်ပြီးမှ ထွက်တယ်။" },
    { japanese: "出かける", romaji: "dekakeru", pronunciation: "dekakeru", english: "to go out", burmese: "ထွက်", category: "daily", example_jp: "買い物に出かけます。", example_romaji: "Kaimono ni dekakemasu.", example_en: "I go out shopping.", example_mm: "ဈေးဝယ်ထွက်တယ်။" },
    { japanese: "帰る", romaji: "kaeru", pronunciation: "kaeru", english: "to return home", burmese: "အိမ်ပြန်", category: "daily", example_jp: "6時に帰ります。", example_romaji: "Rokuji ni kaerimasu.", example_en: "I return home at 6.", example_mm: "၆ နာရီမှာ အိမ်ပြန်တယ်။" },
    { japanese: "食事する", romaji: "shokuji suru", pronunciation: "shokuji suru", english: "to have a meal", burmese: "ထမင်းစား", category: "daily", example_jp: "家族と食事します。", example_romaji: "Kazoku to shokuji shimasu.", example_en: "I have a meal with my family.", example_mm: "မိသားစုနဲ့ ထမင်းစားတယ်။" },
        // ========== HOBBIES & LEISURE (30 words) ==========
    { japanese: "趣味", romaji: "shumi", pronunciation: "shumi", english: "hobby", burmese: "ဝါသနာ", category: "misc", example_jp: "私の趣味は音楽です。", example_romaji: "Watashi no shumi wa ongaku desu.", example_en: "My hobby is music.", example_mm: "ကျွန်တော့်ဝါသနာက ဂီတပါ။" },
    { japanese: "音楽", romaji: "ongaku", pronunciation: "ongaku", english: "music", burmese: "ဂီတ", category: "misc", example_jp: "音楽を聞きます。", example_romaji: "Ongaku o kikimasu.", example_en: "I listen to music.", example_mm: "ဂီတနားထောင်တယ်။" },
    { japanese: "映画", romaji: "eiga", pronunciation: "eiga", english: "movie", burmese: "ရုပ်ရှင်", category: "misc", example_jp: "映画を見ます。", example_romaji: "Eiga o mimasu.", example_en: "I watch movies.", example_mm: "ရုပ်ရှင်ကြည့်တယ်။" },
    { japanese: "ドラマ", romaji: "dorama", pronunciation: "dorama", english: "TV drama", burmese: "ဒရာမာ", category: "misc", example_jp: "韓国ドラマが好きです。", example_romaji: "Kankoku dorama ga suki desu.", example_en: "I like Korean dramas.", example_mm: "ကိုရီးယားဒရာမာကြိုက်တယ်။" },
    { japanese: "アニメ", romaji: "anime", pronunciation: "anime", english: "anime", burmese: "အန်နီမေး", category: "misc", example_jp: "アニメを見ます。", example_romaji: "Anime o mimasu.", example_en: "I watch anime.", example_mm: "အန်နီမေးကြည့်တယ်။" },
    { japanese: "漫画", romaji: "manga", pronunciation: "manga", english: "manga", burmese: "မန်ဂါ", category: "misc", example_jp: "漫画を読みます。", example_romaji: "Manga o yomimasu.", example_en: "I read manga.", example_mm: "မန်ဂါဖတ်တယ်။" },
    { japanese: "ゲーム", romaji: "geemu", pronunciation: "geemu", english: "game", burmese: "ဂိမ်း", category: "misc", example_jp: "ゲームをします。", example_romaji: "Geemu o shimasu.", example_en: "I play games.", example_mm: "ဂိမ်းကစားတယ်။" },
    { japanese: "スポーツ", romaji: "supootsu", pronunciation: "supootsu", english: "sports", burmese: "အားကစား", category: "misc", example_jp: "スポーツが好きです。", example_romaji: "Supootsu ga suki desu.", example_en: "I like sports.", example_mm: "အားကစားကြိုက်တယ်။" },
    { japanese: "サッカー", romaji: "sakkaa", pronunciation: "sakkaa", english: "soccer", burmese: "ဘောလုံး", category: "misc", example_jp: "サッカーをします。", example_romaji: "Sakkaa o shimasu.", example_en: "I play soccer.", example_mm: "ဘောလုံးကစားတယ်။" },
    { japanese: "野球", romaji: "yakyuu", pronunciation: "yakyuu", english: "baseball", burmese: "ဘေ့စ်ဘော", category: "misc", example_jp: "野球を見ます。", example_romaji: "Yakyuu o mimasu.", example_en: "I watch baseball.", example_mm: "ဘေ့စ်ဘောကြည့်တယ်။" },
    { japanese: "テニス", romaji: "tenisu", pronunciation: "tenisu", english: "tennis", burmese: "တင်းနစ်", category: "misc", example_jp: "テニスをします。", example_romaji: "Tenisu o shimasu.", example_en: "I play tennis.", example_mm: "တင်းနစ်ကစားတယ်။" },
    { japanese: "ゴルフ", romaji: "gorufu", pronunciation: "gorufu", english: "golf", burmese: "ဂေါက်သီး", category: "misc", example_jp: "ゴルフをします。", example_romaji: "Gorufu o shimasu.", example_en: "I play golf.", example_mm: "ဂေါက်သီးရိုက်တယ်။" },
    { japanese: "旅行", romaji: "ryokou", pronunciation: "ryokou", english: "travel", burmese: "ခရီးသွား", category: "misc", example_jp: "旅行が好きです。", example_romaji: "Ryokou ga suki desu.", example_en: "I like traveling.", example_mm: "ခရီးသွားရတာကြိုက်တယ်။" },
    { japanese: "写真", romaji: "shashin", pronunciation: "shashin", english: "photograph", burmese: "ဓာတ်ပုံ", category: "misc", example_jp: "写真を撮ります。", example_romaji: "Shashin o torimasu.", example_en: "I take photos.", example_mm: "ဓာတ်ပုံရိုက်တယ်။" },
    { japanese: "絵", romaji: "e", pronunciation: "e", english: "picture / drawing", burmese: "ပုံ", category: "misc", example_jp: "絵を描きます。", example_romaji: "E o kakimasu.", example_en: "I draw pictures.", example_mm: "ပုံဆွဲတယ်။" },
    { japanese: "料理", romaji: "ryouri", pronunciation: "ryouri", english: "cooking", burmese: "ချက်ပြုတ်", category: "food", example_jp: "料理が得意です。", example_romaji: "Ryouri ga tokui desu.", example_en: "I'm good at cooking.", example_mm: "ထမင်းချက်တာကျွမ်းကျင်တယ်။" },
    { japanese: "読書", romaji: "dokusho", pronunciation: "dokusho", english: "reading", burmese: "စာဖတ်", category: "misc", example_jp: "読書が好きです。", example_romaji: "Dokusho ga suki desu.", example_en: "I like reading.", example_mm: "စာဖတ်ရတာကြိုက်တယ်။" },

    // ========== TECHNOLOGY (20 words) ==========
    { japanese: "パソコン", romaji: "pasokon", pronunciation: "pasokon", english: "personal computer", burmese: "ကွန်ပျူတာ", category: "misc", example_jp: "新しいパソコンを買った。", example_romaji: "Atarashii pasokon o katta.", example_en: "I bought a new computer.", example_mm: "ကွန်ပျူတာအသစ်ဝယ်တယ်။" },
    { japanese: "スマートフォン", romaji: "sumaatofon", pronunciation: "sumaatofon", english: "smartphone", burmese: "စမတ်ဖုန်း", category: "misc", example_jp: "スマートフォンで調べる。", example_romaji: "Sumaatofon de shiraberu.", example_en: "I look it up on smartphone.", example_mm: "စမတ်ဖုန်းနဲ့ရှာတယ်။" },
    { japanese: "インターネット", romaji: "intaanetto", pronunciation: "intaanetto", english: "internet", burmese: "အင်တာနက်", category: "misc", example_jp: "インターネットで買い物する。", example_romaji: "Intaanetto de kaimono suru.", example_en: "I shop on the internet.", example_mm: "အင်တာနက်ပေါ်မှာ ဈေးဝယ်တယ်။" },
    { japanese: "メール", romaji: "meeru", pronunciation: "meeru", english: "email", burmese: "အီးမေး", category: "misc", example_jp: "メールを送る。", example_romaji: "Meeru o okuru.", example_en: "I send an email.", example_mm: "အီးမေးပို့တယ်။" },
    { japanese: "SNS", romaji: "esuenu esu", pronunciation: "esuenu esu", english: "social media", burmese: "လူမှုမီဒီယာ", category: "misc", example_jp: "SNSをやっている。", example_romaji: "Esuenu esu o yatte iru.", example_en: "I use social media.", example_mm: "လူမှုမီဒီယာသုံးတယ်။" },
    { japanese: "検索", romaji: "kensaku", pronunciation: "kensaku", english: "search", burmese: "ရှာဖွေ", category: "misc", example_jp: "検索してみてください。", example_romaji: "Kensaku shite mite kudasai.", example_en: "Please try searching.", example_mm: "စမ်းရှာကြည့်ပါ။" },
    { japanese: "ダウンロード", romaji: "daunroodo", pronunciation: "daunroodo", english: "download", burmese: "ဒေါင်းလုပ်", category: "misc", example_jp: "アプリをダウンロードした。", example_romaji: "Apuri o daunroodo shita.", example_en: "I downloaded an app.", example_mm: "အက်ပ်ဒေါင်းလုပ်လုပ်တယ်။" },
    { japanese: "アップロード", romaji: "appuroodo", pronunciation: "appuroodo", english: "upload", burmese: "အပ်လုပ်", category: "misc", example_jp: "写真をアップロードする。", example_romaji: "Shashin o appuroodo suru.", example_en: "I upload photos.", example_mm: "ဓာတ်ပုံအပ်လုပ်တယ်။" },

    // ========== SCHOOL & EDUCATION (additional) (20 words) ==========
    { japanese: "小学校", romaji: "shougakkou", pronunciation: "shougakkou", english: "elementary school", burmese: "မူလတန်းကျောင်း", category: "school", example_jp: "小学校の先生です。", example_romaji: "Shougakkou no sensei desu.", example_en: "I'm an elementary school teacher.", example_mm: "ကျွန်တော် မူလတန်းကျောင်းဆရာပါ။" },
    { japanese: "中学校", romaji: "chuugakkou", pronunciation: "chuugakkou", english: "junior high school", burmese: "အလယ်တန်းကျောင်း", category: "school", example_jp: "中学校に入る。", example_romaji: "Chuugakkou ni hairu.", example_en: "I enter junior high school.", example_mm: "အလယ်တန်းကျောင်းဝင်တယ်။" },
    { japanese: "高校", romaji: "koukou", pronunciation: "koukou", english: "high school", burmese: "အထက်တန်းကျောင်း", category: "school", example_jp: "高校を卒業した。", example_romaji: "Koukou o sotsugyou shita.", example_en: "I graduated high school.", example_mm: "အထက်တန်းကျောင်းဘွဲ့ရတယ်။" },
    { japanese: "大学", romaji: "daigaku", pronunciation: "daigaku", english: "university", burmese: "တက္ကသိုလ်", category: "school", example_jp: "大学に行きます。", example_romaji: "Daigaku ni ikimasu.", example_en: "I go to university.", example_mm: "တက္ကသိုလ်သွားတယ်။" },
    { japanese: "大学院", romaji: "daigakuin", pronunciation: "daigakuin", english: "graduate school", burmese: "ဘွဲ့လွန်ကျောင်း", category: "school", example_jp: "大学院で勉強する。", example_romaji: "Daigakuin de benkyou suru.", example_en: "I study at graduate school.", example_mm: "ဘွဲ့လွန်ကျောင်းမှာ လေ့လာတယ်။" },
    { japanese: "幼稚園", romaji: "youchien", pronunciation: "youchien", english: "kindergarten", burmese: "မူကြို", category: "school", example_jp: "子供を幼稚園に連れて行く。", example_romaji: "Kodomo o youchien ni tsurete iku.", example_en: "I take my child to kindergarten.", example_mm: "ကလေးကို မူကြိုခေါ်သွားတယ်။" },
    { japanese: "塾", romaji: "juku", pronunciation: "juku", english: "cram school", burmese: "ကျူရှင်", category: "school", example_jp: "塾に通っている。", example_romaji: "Juku ni kayotte iru.", example_en: "I attend cram school.", example_mm: "ကျူရှင်တက်တယ်။" },
    { japanese: "学校", romaji: "gakkou", pronunciation: "gakkou", english: "school", burmese: "ကျောင်း", category: "school", example_jp: "学校に行く。", example_romaji: "Gakkou ni iku.", example_en: "I go to school.", example_mm: "ကျောင်းသွားတယ်။" },
    { japanese: "教室", romaji: "kyoushitsu", pronunciation: "kyoushitsu", english: "classroom", burmese: "စာသင်ခန်း", category: "school", example_jp: "教室に入る。", example_romaji: "Kyoushitsu ni hairu.", example_en: "I enter the classroom.", example_mm: "စာသင်ခန်းထဲဝင်တယ်။" },
    { japanese: "先生", romaji: "sensei", pronunciation: "sensei", english: "teacher", burmese: "ဆရာ", category: "school", example_jp: "先生に質問する。", example_romaji: "Sensei ni shitsumon suru.", example_en: "I ask the teacher a question.", example_mm: "ဆရာကို မေးခွန်းမေးတယ်။" },

    // ========== HEALTH & MEDICAL (20 words) ==========
    { japanese: "健康", romaji: "kenkou", pronunciation: "kenkou", english: "health", burmese: "ကျန်းမာရေး", category: "misc", example_jp: "健康が一番大切です。", example_romaji: "Kenkou ga ichiban taisetsu desu.", example_en: "Health is the most important.", example_mm: "ကျန်းမာရေးက အရေးကြီးဆုံးပါ။" },
    { japanese: "病気", romaji: "byouki", pronunciation: "byouki", english: "illness", burmese: "ရောဂါ", category: "misc", example_jp: "病気にならないように。", example_romaji: "Byouki ni naranai you ni.", example_en: "So that I don't get sick.", example_mm: "မဖျားနာအောင်။" },
    { japanese: "風邪", romaji: "kaze", pronunciation: "kaze", english: "cold (illness)", burmese: "အအေးမိ", category: "misc", example_jp: "風邪を引いた。", example_romaji: "Kaze o hiita.", example_en: "I caught a cold.", example_mm: "အအေးမိတယ်။" },
    { japanese: "熱", romaji: "netsu", pronunciation: "netsu", english: "fever", burmese: "အဖျား", category: "misc", example_jp: "熱があります。", example_romaji: "Netsu ga arimasu.", example_en: "I have a fever.", example_mm: "အဖျားရှိတယ်။" },
    { japanese: "薬", romaji: "kusuri", pronunciation: "kusuri", english: "medicine", burmese: "ဆေး", category: "misc", example_jp: "薬を飲む。", example_romaji: "Kusuri o nomu.", example_en: "I take medicine.", example_mm: "ဆေးသောက်တယ်။" },
    { japanese: "病院", romaji: "byouin", pronunciation: "byouin", english: "hospital", burmese: "ဆေးရုံ", category: "places", example_jp: "病院に行く。", example_romaji: "Byouin ni iku.", example_en: "I go to the hospital.", example_mm: "ဆေးရုံသွားတယ်။" },
    { japanese: "診察", romaji: "shinsatsu", pronunciation: "shinsatsu", english: "medical examination", burmese: "စစ်ဆေး", category: "misc", example_jp: "診察を受ける。", example_romaji: "Shinsatsu o ukeru.", example_en: "I get a medical examination.", example_mm: "စစ်ဆေးမှုခံယူတယ်။" },
    { japanese: "注射", romaji: "chuusha", pronunciation: "chuusha", english: "injection", burmese: "ထိုးဆေး", category: "misc", example_jp: "注射が怖い。", example_romaji: "Chuusha ga kowai.", example_en: "I'm scared of injections.", example_mm: "ထိုးဆေးကြောက်တယ်။" },

    // ========== FOOD & DRINK (additional) (30 words) ==========
    { japanese: "朝ごはん", romaji: "asagohan", pronunciation: "asagohan", english: "breakfast", burmese: "မနက်စာ", category: "food", example_jp: "朝ごはんを食べる。", example_romaji: "Asagohan o taberu.", example_en: "I eat breakfast.", example_mm: "မနက်စာစားတယ်။" },
    { japanese: "昼ごはん", romaji: "hirugohan", pronunciation: "hirugohan", english: "lunch", burmese: "နေ့လည်စာ", category: "food", example_jp: "昼ごはんは何を食べる？", example_romaji: "Hirugohan wa nani o taberu?", example_en: "What do you eat for lunch?", example_mm: "နေ့လည်စာ ဘာစားမလဲ။" },
    { japanese: "晩ごはん", romaji: "bangohan", pronunciation: "bangohan", english: "dinner", burmese: "ညစာ", category: "food", example_jp: "晩ごはんを作る。", example_romaji: "Bangohan o tsukuru.", example_en: "I make dinner.", example_mm: "ညစာချက်တယ်။" },
    { japanese: "カレー", romaji: "karee", pronunciation: "karee", english: "curry", burmese: "ဟင်းခတ်ဟင်း", category: "food", example_jp: "カレーライスが好き。", example_romaji: "Karee raisu ga suki.", example_en: "I like curry rice.", example_mm: "ကာရီထမင်းကြိုက်တယ်။" },
    { japanese: "ラーメン", romaji: "raamen", pronunciation: "raamen", english: "ramen", burmese: "ရာမန်", category: "food", example_jp: "ラーメンを食べに行く。", example_romaji: "Raamen o tabe ni iku.", example_en: "I go to eat ramen.", example_mm: "ရာမန်စားသွားတယ်။" },
    { japanese: "そば", romaji: "soba", pronunciation: "soba", english: "buckwheat noodles", burmese: "ဆိုဘာခေါက်ဆွဲ", category: "food", example_jp: "そばを食べる。", example_romaji: "Soba o taberu.", example_en: "I eat soba noodles.", example_mm: "ဆိုဘာခေါက်ဆွဲစားတယ်။" },
    { japanese: "うどん", romaji: "udon", pronunciation: "udon", english: "udon noodles", burmese: "အုဒွန်ခေါက်ဆွဲ", category: "food", example_jp: "うどんが好き。", example_romaji: "Udon ga suki.", example_en: "I like udon.", example_mm: "အုဒွန်ကြိုက်တယ်။" },
    { japanese: "寿司", romaji: "sushi", pronunciation: "sushi", english: "sushi", burmese: "ဆူရှီ", category: "food", example_jp: "寿司を食べたい。", example_romaji: "Sushi o tabetai.", example_en: "I want to eat sushi.", example_mm: "ဆူရှီစားချင်တယ်။" },
    { japanese: "刺身", romaji: "sashimi", pronunciation: "sashimi", english: "sashimi", burmese: "ဆာရှီမိ", category: "food", example_jp: "刺身は新鮮です。", example_romaji: "Sashimi wa shinsen desu.", example_en: "Sashimi is fresh.", example_mm: "ဆာရှီမိ လန်းဆန်းတယ်။" },
    { japanese: "天ぷら", romaji: "tenpura", pronunciation: "tenpura", english: "tempura", burmese: "တန်ပူရာ", category: "food", example_jp: "天ぷらを揚げる。", example_romaji: "Tenpura o ageru.", example_en: "I fry tempura.", example_mm: "တန်ပူရာကြော်တယ်။" },
    { japanese: "焼き鳥", romaji: "yakitori", pronunciation: "yakitori", english: "grilled chicken skewers", burmese: "ယာကီတိုရီ", category: "food", example_jp: "焼き鳥を食べる。", example_romaji: "Yakitori o taberu.", example_en: "I eat yakitori.", example_mm: "ယာကီတိုရီစားတယ်။" },
    { japanese: "おでん", romaji: "oden", pronunciation: "oden", english: "oden (hot pot dish)", burmese: "အိုဒန်", category: "food", example_jp: "冬におでんを食べる。", example_romaji: "Fuyu ni oden o taberu.", example_en: "I eat oden in winter.", example_mm: "ဆောင်းရာသီမှာ အိုဒန်စားတယ်။" },
    { japanese: "鍋", romaji: "nabe", pronunciation: "nabe", english: "hot pot", burmese: "နာဘေအိုး", category: "food", example_jp: "鍋パーティーをする。", example_romaji: "Nabe paatii o suru.", example_en: "We have a hot pot party.", example_mm: "နာဘေအိုးပါတီလုပ်တယ်။" },

    // ========== SHOPPING (additional) (15 words) ==========
    { japanese: "レジ", romaji: "reji", pronunciation: "reji", english: "cash register", burmese: "ငွေရှင်းကောင်တာ", category: "shopping", example_jp: "レジで待つ。", example_romaji: "Reji de matsu.", example_en: "I wait at the register.", example_mm: "ကောင်တာမှာ စောင့်တယ်။" },
    { japanese: "現金", romaji: "genkin", pronunciation: "genkin", english: "cash", burmese: "ငွေသား", category: "shopping", example_jp: "現金で払う。", example_romaji: "Genkin de harau.", example_en: "I pay in cash.", example_mm: "ငွေသားနဲ့ပေးတယ်။" },
    { japanese: "クレジットカード", romaji: "kurejitto kaado", pronunciation: "kurejitto kaado", english: "credit card", burmese: "ခရက်ဒစ်ကတ်", category: "shopping", example_jp: "クレジットカードが使えますか。", example_romaji: "Kurejitto kaado ga tsukaemasu ka.", example_en: "Can I use a credit card?", example_mm: "ခရက်ဒစ်ကတ်သုံးလို့ရမလား။" },
    { japanese: "ポイント", romaji: "pointo", pronunciation: "pointo", english: "points (rewards)", burmese: "ပွိုင့်", category: "shopping", example_jp: "ポイントを貯める。", example_romaji: "Pointo o tameru.", example_en: "I save points.", example_mm: "ပွိုင့်စုတယ်။" },
    { japanese: "会計", romaji: "kaikei", pronunciation: "kaikei", english: "payment / checkout", burmese: "ငွေရှင်း", category: "shopping", example_jp: "会計をお願いします。", example_romaji: "Kaikei o onegai shimasu.", example_en: "Checkout please.", example_mm: "ငွေရှင်းပေးပါ။" },

    // ========== CLOTHING (15 words) ==========
    { japanese: "洋服", romaji: "youfuku", pronunciation: "youfuku", english: "Western clothes", burmese: "အနောက်တိုင်းဝတ်စုံ", category: "misc", example_jp: "新しい洋服を買った。", example_romaji: "Atarashii youfuku o katta.", example_en: "I bought new clothes.", example_mm: "အဝတ်အစားအသစ်ဝယ်တယ်။" },
    { japanese: "和服", romaji: "wafuku", pronunciation: "wafuku", english: "Japanese clothes", burmese: "ဂျပန်ရိုးရာဝတ်စုံ", category: "misc", example_jp: "和服を着る。", example_romaji: "Wafuku o kiru.", example_en: "I wear Japanese clothes.", example_mm: "ဂျပန်ရိုးရာဝတ်စုံဝတ်တယ်။" },
    { japanese: "スーツ", romaji: "suutsu", pronunciation: "suutsu", english: "suit", burmese: "ဝတ်စုံ", category: "misc", example_jp: "スーツを着て仕事に行く。", example_romaji: "Suutsu o kite shigoto ni iku.", example_en: "I wear a suit to work.", example_mm: "ဝတ်စုံဝတ်ပြီး အလုပ်သွားတယ်။" },
    { japanese: "ズボン", romaji: "zubon", pronunciation: "zubon", english: "pants", burmese: "ဘောင်းဘီ", category: "misc", example_jp: "ズボンを履く。", example_romaji: "Zubon o haku.", example_en: "I wear pants.", example_mm: "ဘောင်းဘီဝတ်တယ်။" },
    { japanese: "スカート", romaji: "sukaato", pronunciation: "sukaato", english: "skirt", burmese: "စကတ်", category: "misc", example_jp: "スカートを履く。", example_romaji: "Sukaato o haku.", example_en: "I wear a skirt.", example_mm: "စကတ်ဝတ်တယ်။" },
    { japanese: "シャツ", romaji: "shatsu", pronunciation: "shatsu", english: "shirt", burmese: "ရှပ်", category: "misc", example_jp: "白いシャツを着る。", example_romaji: "Shiroi shatsu o kiru.", example_en: "I wear a white shirt.", example_mm: "ရှပ်အင်္ကျီဖြူဝတ်တယ်။" },
    { japanese: "Tシャツ", romaji: "tiishatsu", pronunciation: "tiishatsu", english: "T-shirt", burmese: "တီရှပ်", category: "misc", example_jp: "Tシャツを買う。", example_romaji: "Tiishatsu o kau.", example_en: "I buy a T-shirt.", example_mm: "တီရှပ်ဝယ်တယ်။" },
    { japanese: "ジャケット", romaji: "jaketto", pronunciation: "jaketto", english: "jacket", burmese: "ဂျာကင်", category: "misc", example_jp: "ジャケットを着る。", example_romaji: "Jaketto o kiru.", example_en: "I wear a jacket.", example_mm: "ဂျာကင်ဝတ်တယ်။" },
    { japanese: "コート", romaji: "kooto", pronunciation: "kooto", english: "coat", burmese: "ကုတ်အင်္ကျီ", category: "misc", example_jp: "冬にコートを着る。", example_romaji: "Fuyu ni kooto o kiru.", example_en: "I wear a coat in winter.", example_mm: "ဆောင်းရာသီမှာ ကုတ်အင်္ကျီဝတ်တယ်။" },
    { japanese: "セーター", romaji: "seetaa", pronunciation: "seetaa", english: "sweater", burmese: "ဆွယ်တာ", category: "misc", example_jp: "セーターを編む。", example_romaji: "Seetaa o amu.", example_en: "I knit a sweater.", example_mm: "ဆွယ်တာထိုးတယ်။" },
    { japanese: "靴", romaji: "kutsu", pronunciation: "kutsu", english: "shoes", burmese: "ဖိနပ်", category: "misc", example_jp: "靴を履く。", example_romaji: "Kutsu o haku.", example_en: "I wear shoes.", example_mm: "ဖိနပ်စီးတယ်။" },
    { japanese: "靴下", romaji: "kutsushita", pronunciation: "kutsushita", english: "socks", burmese: "ခြေအိတ်", category: "misc", example_jp: "靴下を履く。", example_romaji: "Kutsushita o haku.", example_en: "I wear socks.", example_mm: "ခြေအိတ်စီးတယ်။" },

    // ========== FINAL MISC WORDS to reach 700 (20 words) ==========
    { japanese: "大切", romaji: "taisetsu", pronunciation: "taisetsu", english: "important / precious", burmese: "အရေးကြီး", category: "adjectives", example_jp: "時間は大切です。", example_romaji: "Jikan wa taisetsu desu.", example_en: "Time is important.", example_mm: "အချိန်က အရေးကြီးတယ်။" },
    { japanese: "必要", romaji: "hitsuyou", pronunciation: "hitsuyou", english: "necessary", burmese: "လိုအပ်", category: "adjectives", example_jp: "お金が必要です。", example_romaji: "Okane ga hitsuyou desu.", example_en: "Money is necessary.", example_mm: "ပိုက်ဆံလိုအပ်တယ်။" },
    { japanese: "十分", romaji: "juubun", pronunciation: "juubun", english: "enough / sufficient", burmese: "လုံလောက်", category: "adjectives", example_jp: "時間は十分です。", example_romaji: "Jikan wa juubun desu.", example_en: "There's enough time.", example_mm: "အချိန်လုံလောက်တယ်။" },
    { japanese: "無理", romaji: "muri", pronunciation: "muri", english: "impossible / unreasonable", burmese: "မဖြစ်နိုင်", category: "adjectives", example_jp: "それは無理です。", example_romaji: "Sore wa muri desu.", example_en: "That's impossible.", example_mm: "ဒါက မဖြစ်နိုင်ဘူး။" },
    { japanese: "大丈夫", romaji: "daijoubu", pronunciation: "daijoubu", english: "okay / alright", burmese: "ရပါတယ်", category: "adjectives", example_jp: "大丈夫ですか？", example_romaji: "Daijoubu desu ka?", example_en: "Are you okay?", example_mm: "အဆင်ပြေလား။" },
    { japanese: "問題", romaji: "mondai", pronunciation: "mondai", english: "problem", burmese: "ပြဿနာ", category: "misc", example_jp: "問題があります。", example_romaji: "Mondai ga arimasu.", example_en: "There is a problem.", example_mm: "ပြဿနာရှိတယ်။" },
    { japanese: "理由", romaji: "riyuu", pronunciation: "riyuu", english: "reason", burmese: "အကြောင်းရင်း", category: "misc", example_jp: "理由を教えてください。", example_romaji: "Riyuu o oshiete kudasai.", example_en: "Please tell me the reason.", example_mm: "အကြောင်းရင်းပြောပြပါ။" },
    { japanese: "場合", romaji: "baai", pronunciation: "baai", english: "case / situation", burmese: "အခြေအနေ", category: "misc", example_jp: "その場合どうしますか。", example_romaji: "Sono baai dou shimasu ka.", example_en: "What will you do in that case?", example_mm: "အဲဒီအခြေအနေမှာ ဘာလုပ်မလဲ။" },
    { japanese: "チャンス", romaji: "chansu", pronunciation: "chansu", english: "chance", burmese: "အခွင့်အရေး", category: "misc", example_jp: "チャンスを逃さない。", example_romaji: "Chansu o nogasanai.", example_en: "Don't miss the chance.", example_mm: "အခွင့်အရေးမလွတ်စေနဲ့။" },
    { japanese: "経験", romaji: "keiken", pronunciation: "keiken", english: "experience", burmese: "အတွေ့အကြုံ", category: "misc", example_jp: "いい経験になりました。", example_romaji: "Ii keiken ni narimashita.", example_en: "It was a good experience.", example_mm: "အတွေ့အကြုံကောင်းရခဲ့တယ်။" },
        // ========== NATURE & ENVIRONMENT (continued - 20 words) ==========
    { japanese: "環境", romaji: "kankyou", pronunciation: "kankyou", english: "environment", burmese: "ပတ်ဝန်းကျင်", category: "nature", example_jp: "環境を守りましょう。", example_romaji: "Kankyou o mamorimashou.", example_en: "Let's protect the environment.", example_mm: "ပတ်ဝန်းကျင်ကိုကာကွယ်ကြရအောင်။" },
    { japanese: "自然", romaji: "shizen", pronunciation: "shizen", english: "nature", burmese: "သဘာဝ", category: "nature", example_jp: "自然が大好きです。", example_romaji: "Shizen ga daisuki desu.", example_en: "I love nature.", example_mm: "သဘာဝကို အရမ်းကြိုက်တယ်။" },
    { japanese: "花", romaji: "hana", pronunciation: "hana", english: "flower", burmese: "ပန်း", category: "nature", example_jp: "花が咲いています。", example_romaji: "Hana ga saite imasu.", example_en: "Flowers are blooming.", example_mm: "ပန်းတွေပွင့်နေတယ်။" },
    { japanese: "草", romaji: "kusa", pronunciation: "kusa", english: "grass", burmese: "မြက်", category: "nature", example_jp: "草を刈ります。", example_romaji: "Kusa o karimasu.", example_en: "I cut the grass.", example_mm: "မြက်ရိတ်တယ်။" },
    { japanese: "木", romaji: "ki", pronunciation: "ki", english: "tree", burmese: "သစ်ပင်", category: "nature", example_jp: "木を植えます。", example_romaji: "Ki o uemasu.", example_en: "I plant a tree.", example_mm: "သစ်ပင်စိုက်တယ်။" },
    { japanese: "海", romaji: "umi", pronunciation: "umi", english: "sea / ocean", burmese: "ပင်လယ်", category: "nature", example_jp: "海に行きたいです。", example_romaji: "Umi ni ikitai desu.", example_en: "I want to go to the sea.", example_mm: "ပင်လယ်သွားချင်တယ်။" },
    { japanese: "川", romaji: "kawa", pronunciation: "kawa", english: "river", burmese: "မြစ်", category: "nature", example_jp: "川で泳ぎます。", example_romaji: "Kawa de oyogimasu.", example_en: "I swim in the river.", example_mm: "မြစ်ထဲရေကူးတယ်။" },
    { japanese: "山", romaji: "yama", pronunciation: "yama", english: "mountain", burmese: "တောင်", category: "nature", example_jp: "山に登ります。", example_romaji: "Yama ni noborimasu.", example_en: "I climb the mountain.", example_mm: "တောင်တက်တယ်။" },
    { japanese: "島", romaji: "shima", pronunciation: "shima", english: "island", burmese: "ကျွန်း", category: "nature", example_jp: "沖縄はきれいな島です。", example_romaji: "Okinawa wa kirei na shima desu.", example_en: "Okinawa is a beautiful island.", example_mm: "အိုကီနာဝါက လှပတဲ့ကျွန်းပါ။" },
    { japanese: "空気", romaji: "kuuki", pronunciation: "kuuki", english: "air", burmese: "လေ", category: "nature", example_jp: "新鮮な空気を吸う。", example_romaji: "Shinsen na kuuki o suu.", example_en: "I breathe fresh air.", example_mm: "လေကောင်းလေသန့်ရှူတယ်။" },

    // ========== DISASTERS & SAFETY (15 words) ==========
    { japanese: "火事", romaji: "kaji", pronunciation: "kaji", english: "fire (disaster)", burmese: "မီးလောင်", category: "nature", example_jp: "火事が起こりました。", example_romaji: "Kaji ga okorimashita.", example_en: "A fire broke out.", example_mm: "မီးလောင်တယ်။" },
    { japanese: "災害", romaji: "saigai", pronunciation: "saigai", english: "disaster", burmese: "သဘာဝဘေး", category: "nature", example_jp: "災害に備えます。", example_romaji: "Saigai ni sonaemasu.", example_en: "I prepare for disasters.", example_mm: "ဘေးအန္တရာယ်အတွက် ပြင်ဆင်တယ်။" },
    { japanese: "避難", romaji: "hinan", pronunciation: "hinan", english: "evacuation", burmese: "ဘေးရှောင်", category: "nature", example_jp: "避難所に行きます。", example_romaji: "Hinanjo ni ikimasu.", example_en: "I go to the evacuation shelter.", example_mm: "ဘေးလွတ်ရာသို့သွားတယ်။" },
    { japanese: "警報", romaji: "keihou", pronunciation: "keihou", english: "warning / alarm", burmese: "သတိပေးချက်", category: "nature", example_jp: "警報が鳴りました。", example_romaji: "Keihou ga narimashita.", example_en: "The alarm rang.", example_mm: "သတိပေးချက်မြည်တယ်။" },
    { japanese: "救助", romaji: "kyuujo", pronunciation: "kyuujo", english: "rescue", burmese: "ကယ်ဆယ်", category: "nature", example_jp: "救助隊が来ました。", example_romaji: "Kyuujotai ga kimashita.", example_en: "The rescue team came.", example_mm: "ကယ်ဆယ်ရေးအဖွဲ့လာတယ်။" },

    // ========== INTERNATIONAL & CULTURE (15 words) ==========
    { japanese: "国際", romaji: "kokusai", pronunciation: "kokusai", english: "international", burmese: "နိုင်ငံတကာ", category: "misc", example_jp: "国際交流をします。", example_romaji: "Kokusai kouryuu o shimasu.", example_en: "I do international exchange.", example_mm: "နိုင်ငံတကာဖလှယ်ရေးလုပ်တယ်။" },
    { japanese: "文化", romaji: "bunka", pronunciation: "bunka", english: "culture", burmese: "ယဉ်ကျေးမှု", category: "misc", example_jp: "日本の文化に興味があります。", example_romaji: "Nihon no bunka ni kyoumi ga arimasu.", example_en: "I'm interested in Japanese culture.", example_mm: "ဂျပန်ယဉ်ကျေးမှုကို စိတ်ဝင်စားတယ်။" },
    { japanese: "伝統", romaji: "dentou", pronunciation: "dentou", english: "tradition", burmese: "အစဉ်အလာ", category: "misc", example_jp: "伝統を守る。", example_romaji: "Dentou o mamoru.", example_en: "I protect traditions.", example_mm: "အစဉ်အလာကိုထိန်းသိမ်းတယ်။" },
    { japanese: "習慣", romaji: "shuukan", pronunciation: "shuukan", english: "custom / habit", burmese: "အလေ့အထ", category: "misc", example_jp: "日本の習慣を学ぶ。", example_romaji: "Nihon no shuukan o manabu.", example_en: "I learn Japanese customs.", example_mm: "ဂျပန်အလေ့အထတွေကို သင်ယူတယ်။" },
    { japanese: "祭り", romaji: "matsuri", pronunciation: "matsuri", english: "festival", burmese: "ပွဲတော်", category: "misc", example_jp: "夏祭りに行きます。", example_romaji: "Natsu matsuri ni ikimasu.", example_en: "I go to the summer festival.", example_mm: "နွေရာသီပွဲတော်သွားတယ်။" },

    // ========== COMMUNICATION (15 words) ==========
    { japanese: "意味", romaji: "imi", pronunciation: "imi", english: "meaning", burmese: "အဓိပ္ပါယ်", category: "misc", example_jp: "この言葉の意味は何ですか。", example_romaji: "Kono kotoba no imi wa nan desu ka.", example_en: "What is the meaning of this word?", example_mm: "ဒီစကားလုံးရဲ့အဓိပ္ပါယ်ကဘာလဲ။" },
    { japanese: "意見", romaji: "iken", pronunciation: "iken", english: "opinion", burmese: "အမြင်", category: "misc", example_jp: "意見が違います。", example_romaji: "Iken ga chigaimasu.", example_en: "Our opinions differ.", example_mm: "အမြင်ကွဲပြားတယ်။" },
    { japanese: "質問", romaji: "shitsumon", pronunciation: "shitsumon", english: "question", burmese: "မေးခွန်း", category: "misc", example_jp: "質問があります。", example_romaji: "Shitsumon ga arimasu.", example_en: "I have a question.", example_mm: "မေးခွန်းရှိတယ်။" },
    { japanese: "返事", romaji: "henji", pronunciation: "henji", english: "reply / answer", burmese: "အဖြေ", category: "misc", example_jp: "すぐに返事をください。", example_romaji: "Sugu ni henji o kudasai.", example_en: "Please reply soon.", example_mm: "ချက်ချင်းအဖြေပေးပါ။" },
    { japanese: "連絡", romaji: "renraku", pronunciation: "renraku", english: "contact", burmese: "ဆက်သွယ်", category: "misc", example_jp: "連絡してください。", example_romaji: "Renraku shite kudasai.", example_en: "Please contact me.", example_mm: "ဆက်သွယ်ပေးပါ။" },
    { japanese: "相談", romaji: "soudan", pronunciation: "soudan", english: "consultation", burmese: "တိုင်ပင်", category: "misc", example_jp: "先生に相談します。", example_romaji: "Sensei ni soudan shimasu.", example_en: "I consult with my teacher.", example_mm: "ဆရာနဲ့ တိုင်ပင်တယ်။" },
    { japanese: "説明", romaji: "setsumei", pronunciation: "setsumei", english: "explanation", burmese: "ရှင်းလင်းချက်", category: "misc", example_jp: "説明してください。", example_romaji: "Setsumei shite kudasai.", example_en: "Please explain.", example_mm: "ရှင်းပြပေးပါ။" },

    // ========== FEELINGS & EMOTIONS (additional - 15 words) ==========
    { japanese: "感動", romaji: "kandou", pronunciation: "kandou", english: "deep emotion", burmese: "စိတ်လှုပ်ရှား", category: "adjectives", example_jp: "映画に感動しました。", example_romaji: "Eiga ni kandou shimashita.", example_en: "I was deeply moved by the movie.", example_mm: "ရုပ်ရှင်ကို စိတ်လှုပ်ရှားသွားတယ်။" },
    { japanese: "失望", romaji: "shitsubou", pronunciation: "shitsubou", english: "disappointment", burmese: "စိတ်ပျက်", category: "adjectives", example_jp: "結果に失望した。", example_romaji: "Kekka ni shitsubou shita.", example_en: "I was disappointed with the result.", example_mm: "ရလဒ်ကို စိတ်ပျက်တယ်။" },
    { japanese: "安心", romaji: "anshin", pronunciation: "anshin", english: "relief", burmese: "စိတ်သက်သာ", category: "adjectives", example_jp: "安心しました。", example_romaji: "Anshin shimashita.", example_en: "I feel relieved.", example_mm: "စိတ်သက်သာသွားတယ်။" },
    { japanese: "不満", romaji: "fuman", pronunciation: "fuman", english: "dissatisfaction", burmese: "မကျေနပ်", category: "adjectives", example_jp: "不満があります。", example_romaji: "Fuman ga arimasu.", example_en: "I have dissatisfaction.", example_mm: "မကျေနပ်မှုရှိတယ်။" },
    { japanese: "満足", romaji: "manzoku", pronunciation: "manzoku", english: "satisfaction", burmese: "ကျေနပ်", category: "adjectives", example_jp: "満足しています。", example_romaji: "Manzoku shite imasu.", example_en: "I am satisfied.", example_mm: "ကျေနပ်တယ်။" },
    { japanese: "興味", romaji: "kyoumi", pronunciation: "kyoumi", english: "interest", burmese: "စိတ်ဝင်စား", category: "adjectives", example_jp: "日本に興味があります。", example_romaji: "Nihon ni kyoumi ga arimasu.", example_en: "I am interested in Japan.", example_mm: "ဂျပန်ကို စိတ်ဝင်စားတယ်။" },
    { japanese: "関心", romaji: "kanshin", pronunciation: "kanshin", english: "concern / interest", burmese: "အာရုံစိုက်", category: "adjectives", example_jp: "政治に関心があります。", example_romaji: "Seiji ni kanshin ga arimasu.", example_en: "I am interested in politics.", example_mm: "နိုင်ငံရေးကို အာရုံစိုက်တယ်။" },

    // ========== QUANTITY & DEGREE (15 words) ==========
    { japanese: "全て", romaji: "subete", pronunciation: "subete", english: "all / everything", burmese: "အားလုံး", category: "misc", example_jp: "全て終わりました。", example_romaji: "Subete owarimashita.", example_en: "Everything is finished.", example_mm: "အားလုံးပြီးသွားပြီ။" },
    { japanese: "大部分", romaji: "daibubun", pronunciation: "daibubun", english: "most / majority", burmese: "အများစု", category: "misc", example_jp: "大部分の人が賛成した。", example_romaji: "Daibubun no hito ga sansei shita.", example_en: "Most people agreed.", example_mm: "လူအများစု သဘောတူတယ်။" },
    { japanese: "多少", romaji: "tashou", pronunciation: "tashou", english: "more or less", burmese: "အနည်းငယ်", category: "misc", example_jp: "多少の違いがある。", example_romaji: "Tashou no chigai ga aru.", example_en: "There is a slight difference.", example_mm: "အနည်းငယ်ကွာခြားမှုရှိတယ်။" },
    { japanese: "非常に", romaji: "hijou ni", pronunciation: "hijou ni", english: "extremely", burmese: "အလွန်အမင်း", category: "misc", example_jp: "非常に難しい問題です。", example_romaji: "Hijou ni muzukashii mondai desu.", example_en: "It's an extremely difficult problem.", example_mm: "အလွန်အမင်းခက်ခဲတဲ့ပြဿနာပါ။" },
    { japanese: "大変", romaji: "taihen", pronunciation: "taihen", english: "very / terribly", burmese: "အလွန်", category: "misc", example_jp: "大変疲れました。", example_romaji: "Taihen tsukaremashita.", example_en: "I'm very tired.", example_mm: "အရမ်းပင်ပန်းတယ်။" },
    { japanese: "かなり", romaji: "kanari", pronunciation: "kanari", english: "considerably", burmese: "အတော်အတန်", category: "misc", example_jp: "かなり良くなった。", example_romaji: "Kanari yoku natta.", example_en: "It got considerably better.", example_mm: "အတော်လေး ကောင်းလာတယ်။" },
    { japanese: "ずいぶん", romaji: "zuibun", pronunciation: "zuibun", english: "quite / considerably", burmese: "သိသိသာသာ", category: "misc", example_jp: "ずいぶん変わりました。", example_romaji: "Zuibun kawarimashita.", example_en: "It changed quite a lot.", example_mm: "သိသိသာသာ ပြောင်းလဲသွားတယ်။" },

    // ========== POSITION & ORDER (10 words) ==========
    { japanese: "隣", romaji: "tonari", pronunciation: "tonari", english: "next to", burmese: "ဘေးနား", category: "direction", example_jp: "隣の部屋です。", example_romaji: "Tonari no heya desu.", example_en: "It's the next room.", example_mm: "ဘေးနားခန်းပါ။" },
    { japanese: "向かい", romaji: "mukai", pronunciation: "mukai", english: "opposite", burmese: "မျက်နှာချင်းဆိုင်", category: "direction", example_jp: "向かいの家。", example_romaji: "Mukai no ie.", example_en: "The house opposite.", example_mm: "မျက်နှာချင်းဆိုင်အိမ်။" },
    { japanese: "周り", romaji: "mawari", pronunciation: "mawari", english: "surroundings", burmese: "ပတ်ဝန်းကျင်", category: "direction", example_jp: "周りを見てください。", example_romaji: "Mawari o mite kudasai.", example_en: "Please look around.", example_mm: "ပတ်ဝန်းကျင်ကိုကြည့်ပါ။" },
    { japanese: "端", romaji: "hashi", pronunciation: "hashi", english: "edge / end", burmese: "အစွန်း", category: "direction", example_jp: "テーブルの端に置く。", example_romaji: "Teeburu no hashi ni oku.", example_en: "Put it on the edge of the table.", example_mm: "စားပွဲအစွန်းမှာထားတယ်။" },
    { japanese: "中央", romaji: "chuuou", pronunciation: "chuuou", english: "center", burmese: "ဗဟို", category: "direction", example_jp: "中央に座る。", example_romaji: "Chuuou ni suwaru.", example_en: "I sit in the center.", example_mm: "ဗဟိုမှာထိုင်တယ်။" },

    // ========== FINAL COMPLETION WORDS (20 words) ==========
    { japanese: "実際", romaji: "jissai", pronunciation: "jissai", english: "actually / in fact", burmese: "တကယ်တမ်း", category: "misc", example_jp: "実際にやってみました。", example_romaji: "Jissai ni yatte mimashita.", example_en: "I actually tried it.", example_mm: "တကယ်တမ်းလုပ်ကြည့်တယ်။" },
    { japanese: "主に", romaji: "omoni", pronunciation: "omoni", english: "mainly", burmese: "အဓိက", category: "misc", example_jp: "主に魚を食べます。", example_romaji: "Omoni sakana o tabemasu.", example_en: "I mainly eat fish.", example_mm: "အဓိကငါးစားတယ်။" },
    { japanese: "直接", romaji: "chokusetsu", pronunciation: "chokusetsu", english: "directly", burmese: "တိုက်ရိုက်", category: "misc", example_jp: "直接話したいです。", example_romaji: "Chokusetsu hanashitai desu.", example_en: "I want to speak directly.", example_mm: "တိုက်ရိုက်ပြောချင်တယ်။" },
    { japanese: "間接", romaji: "kansetsu", pronunciation: "kansetsu", english: "indirectly", burmese: "သွယ်ဝိုက်", category: "misc", example_jp: "間接的に聞きました。", example_romaji: "Kansetsu teki ni kikimashita.", example_en: "I heard it indirectly.", example_mm: "သွယ်ဝိုက်ပြီးကြားတယ်။" },
    { japanese: "適当", romaji: "tekitou", pronunciation: "tekitou", english: "appropriate / suitable", burmese: "သင့်လျော်", category: "adjectives", example_jp: "適当な言葉が見つからない。", example_romaji: "Tekitou na kotoba ga mitsukaranai.", example_en: "I can't find the right words.", example_mm: "သင့်လျော်တဲ့စကားလုံးမတွေ့ဘူး။" },
    { japanese: "不適当", romaji: "futekitou", pronunciation: "futekitou", english: "inappropriate", burmese: "မသင့်လျော်", category: "adjectives", example_jp: "不適当な発言でした。", example_romaji: "Futekitou na hatsugen deshita.", example_en: "It was an inappropriate comment.", example_mm: "မသင့်လျော်တဲ့မှတ်ချက်ပါ။" },
    { japanese: "完璧", romaji: "kanpeki", pronunciation: "kanpeki", english: "perfect", burmese: "ပြည့်စုံ", category: "adjectives", example_jp: "完璧な計画です。", example_romaji: "Kanpeki na keikaku desu.", example_en: "It's a perfect plan.", example_mm: "ပြည့်စုံတဲ့အစီအစဉ်ပါ။" },
    { japanese: "不完全", romaji: "fukanzen", pronunciation: "fukanzen", english: "incomplete", burmese: "မပြည့်စုံ", category: "adjectives", example_jp: "不完全な情報でした。", example_romaji: "Fukanzen na jouhou deshita.", example_en: "The information was incomplete.", example_mm: "သတင်းအချက်အလက်မပြည့်စုံဘူး။" },
    { japanese: "不可能", romaji: "fukanou", pronunciation: "fukanou", english: "impossible", burmese: "မဖြစ်နိုင်", category: "adjectives", example_jp: "それは不可能です。", example_romaji: "Sore wa fukanou desu.", example_en: "That's impossible.", example_mm: "ဒါက မဖြစ်နိုင်ဘူး။" },
    { japanese: "可能", romaji: "kanou", pronunciation: "kanou", english: "possible", burmese: "ဖြစ်နိုင်", category: "adjectives", example_jp: "可能な限り頑張ります。", example_romaji: "Kanou na kagiri ganbarimasu.", example_en: "I'll do my best as much as possible.", example_mm: "တတ်နိုင်သမျှ ကြိုးစားမယ်။" },
        // ========== TIME & SEASONS (additional - 15 words) ==========
    { japanese: "世紀", romaji: "seiki", pronunciation: "seiki", english: "century", burmese: "ရာစုနှစ်", category: "time", example_jp: "21世紀になりました。", example_romaji: "Nijuuisseiki ni narimashita.", example_en: "We entered the 21st century.", example_mm: "၂၁ ရာစုနှစ်ကို ရောက်ပြီ။" },
    { japanese: "年代", romaji: "nendai", pronunciation: "nendai", english: "era / decade", burmese: "ခေတ်ကာလ", category: "time", example_jp: "1980年代に生まれました。", example_romaji: "Sen kyuuhyaku hachijuu nendai ni umaremashita.", example_en: "I was born in the 1980s.", example_mm: "၁၉၈၀ ပြည့်လွန်နှစ်များမှာ မွေးတယ်။" },
    { japanese: "期間", romaji: "kikan", pronunciation: "kikan", english: "period / duration", burmese: "ကာလ", category: "time", example_jp: "短い期間でした。", example_romaji: "Mijikai kikan deshita.", example_en: "It was a short period.", example_mm: "တိုတောင်းတဲ့ကာလပါ။" },
    { japanese: "当初", romaji: "tousho", pronunciation: "tousho", english: "initially / at first", burmese: "အစပိုင်း", category: "time", example_jp: "当初の計画は失敗した。", example_romaji: "Tousho no keikaku wa shippai shita.", example_en: "The initial plan failed.", example_mm: "အစပိုင်းအစီအစဉ် မအောင်မြင်ဘူး။" },
    { japanese: "最終", romaji: "saishuu", pronunciation: "saishuu", english: "final / last", burmese: "နောက်ဆုံး", category: "time", example_jp: "最終電車に乗りました。", example_romaji: "Saishuu densha ni norimashita.", example_en: "I took the last train.", example_mm: "နောက်ဆုံးရထားစီးတယ်။" },
    { japanese: "締切", romaji: "shimekiri", pronunciation: "shimekiri", english: "deadline", burmese: "နောက်ဆုံးရက်", category: "time", example_jp: "締切に間に合いません。", example_romaji: "Shimekiri ni maniaimasen.", example_en: "I won't meet the deadline.", example_mm: "နောက်ဆုံးရက်မီမှာ မဟုတ်ဘူး။" },
    { japanese: "延期", romaji: "enki", pronunciation: "enki", english: "postponement", burmese: "ရွှေ့ဆိုင်း", category: "time", example_jp: "会議が延期されました。", example_romaji: "Kaigi ga enki saremashita.", example_en: "The meeting was postponed.", example_mm: "အစည်းအဝေး ရွှေ့ဆိုင်းသွားတယ်။" },
    { japanese: "直前", romaji: "chokuzen", pronunciation: "chokuzen", english: "just before", burmese: "မတိုင်မီလေးတွင်", category: "time", example_jp: "試験の直前まで勉強した。", example_romaji: "Shiken no chokuzen made benkyou shita.", example_en: "I studied until just before the exam.", example_mm: "စာမေးပွဲမတိုင်မီလေးအထိ လေ့လာတယ်။" },
    { japanese: "直後", romaji: "chokugo", pronunciation: "chokugo", english: "just after", burmese: "ပြီးပြီးချင်း", category: "time", example_jp: "地震の直後に避難した。", example_romaji: "Jishin no chokugo ni hinan shita.", example_en: "I evacuated just after the earthquake.", example_mm: "မြေငလျင်ပြီးပြီးချင်း ဘေးရှောင်တယ်။" },
    { japanese: "同時", romaji: "douji", pronunciation: "douji", english: "simultaneous", burmese: "တစ်ပြိုင်နက်", category: "time", example_jp: "同時に二人が話した。", example_romaji: "Douji ni futari ga hanashita.", example_en: "Two people spoke at the same time.", example_mm: "လူနှစ်ယောက် တစ်ပြိုင်နက်စကားပြောတယ်။" },
    { japanese: "早期", romaji: "souki", pronunciation: "souki", english: "early stage", burmese: "အစောပိုင်း", category: "time", example_jp: "早期発見が大切です。", example_romaji: "Souki hakken ga taisetsu desu.", example_en: "Early detection is important.", example_mm: "အစောပိုင်းရှာဖွေတွေ့ရှိမှုက အရေးကြီးတယ်။" },
    { japanese: "遅延", romaji: "chien", pronunciation: "chien", english: "delay", burmese: "နှောင့်နှေး", category: "time", example_jp: "電車に遅延が発生しました。", example_romaji: "Densha ni chien ga hassei shimashita.", example_en: "A train delay occurred.", example_mm: "ရထားနှောင့်နှေးမှုဖြစ်တယ်။" },
    { japanese: "期限", romaji: "kigen", pronunciation: "kigen", english: "time limit", burmese: "သက်တမ်းကုန်ဆုံးရက်", category: "time", example_jp: "期限までに提出してください。", example_romaji: "Kigen made ni teishutsu shite kudasai.", example_en: "Please submit by the deadline.", example_mm: "သက်တမ်းကုန်ဆုံးရက်အတွင်း တင်ပြပါ။" },
    { japanese: "定刻", romaji: "teikoku", pronunciation: "teikoku", english: "scheduled time", burmese: "သတ်မှတ်ချိန်", category: "time", example_jp: "定刻に出発します。", example_romaji: "Teikoku ni shuppatsu shimasu.", example_en: "We depart at the scheduled time.", example_mm: "သတ်မှတ်ချိန်မှာ ထွက်ခွာမယ်။" },
    { japanese: "刻々", romaji: "kokukoku", pronunciation: "kokukoku", english: "moment by moment", burmese: "အချိန်တိုင်း", category: "time", example_jp: "状況は刻々と変わっている。", example_romaji: "Joukyou wa kokukoku to kawatte iru.", example_en: "The situation is changing moment by moment.", example_mm: "အခြေအနေက အချိန်နဲ့အမျှ ပြောင်းလဲနေတယ်။" },

    // ========== BUSINESS & ECONOMY (additional - 15 words) ==========
    { japanese: "経済", romaji: "keizai", pronunciation: "keizai", english: "economy", burmese: "စီးပွားရေး", category: "work", example_jp: "日本の経済は大きいです。", example_romaji: "Nihon no keizai wa ookii desu.", example_en: "Japan's economy is large.", example_mm: "ဂျပန်စီးပွားရေးက ကြီးမားတယ်။" },
    { japanese: "市場", romaji: "shijou", pronunciation: "shijou", english: "market", burmese: "စျေးကွက်", category: "work", example_jp: "新しい市場を開拓する。", example_romaji: "Atarashii shijou o kaitaku suru.", example_en: "We develop a new market.", example_mm: "ဈေးကွက်အသစ်ဖွင့်တယ်။" },
    { japanese: "需要", romaji: "juyou", pronunciation: "juyou", english: "demand", burmese: "ဝယ်လိုအား", category: "work", example_jp: "需要が増えています。", example_romaji: "Juyou ga fuete imasu.", example_en: "Demand is increasing.", example_mm: "ဝယ်လိုအားတိုးလာတယ်။" },
    { japanese: "供給", romaji: "kyoukyuu", pronunciation: "kyoukyuu", english: "supply", burmese: "ထောက်ပံ့မှု", category: "work", example_jp: "供給が足りません。", example_romaji: "Kyoukyuu ga tarimasen.", example_en: "Supply is insufficient.", example_mm: "ထောက်ပံ့မှုမလုံလောက်ဘူး။" },
    { japanese: "投資", romaji: "toushi", pronunciation: "toushi", english: "investment", burmese: "ရင်းနှီးမြှုပ်နှံမှု", category: "work", example_jp: "株式に投資する。", example_romaji: "Kabushiki ni toushi suru.", example_en: "I invest in stocks.", example_mm: "စတော့ရှယ်ယာမှာ ရင်းနှီးမြှုပ်နှံတယ်။" },
    { japanese: "利益", romaji: "rieki", pronunciation: "rieki", english: "profit", burmese: "အမြတ်", category: "work", example_jp: "大きな利益を得た。", example_romaji: "Ookina rieki o eta.", example_en: "We gained a large profit.", example_mm: "အမြတ်အစွန်းကြီးရတယ်။" },
    { japanese: "損失", romaji: "sonshitsu", pronunciation: "sonshitsu", english: "loss", burmese: "အရှုံး", category: "work", example_jp: "損失を被った。", example_romaji: "Sonshitsu o komutta.", example_en: "We suffered a loss.", example_mm: "အရှုံးပေါ်ခဲ့တယ်။" },
    { japanese: "予算", romaji: "yosan", pronunciation: "yosan", english: "budget", burmese: "ဘတ်ဂျက်", category: "work", example_jp: "予算内で収める。", example_romaji: "Yosan nai de osameru.", example_en: "Keep within budget.", example_mm: "ဘတ်ဂျက်အတွင်းထားတယ်။" },
    { japanese: "経費", romaji: "keihi", pronunciation: "keihi", english: "expenses", burmese: "အသုံးစရိတ်", category: "work", example_jp: "経費を削減する。", example_romaji: "Keihi o sakugen suru.", example_en: "We reduce expenses.", example_mm: "အသုံးစရိတ်လျှော့ချတယ်။" },
    { japanese: "収入", romaji: "shuunyuu", pronunciation: "shuunyuu", english: "income", burmese: "ဝင်ငွေ", category: "work", example_jp: "収入が安定している。", example_romaji: "Shuunyuu ga antei shite iru.", example_en: "Income is stable.", example_mm: "ဝင်ငွေတည်ငြိမ်တယ်။" },
    { japanese: "支出", romaji: "shishutsu", pronunciation: "shishutsu", english: "expenditure", burmese: "ထွက်ငွေ", category: "work", example_jp: "支出を記録する。", example_romaji: "Shishutsu o kiroku suru.", example_en: "I record expenditures.", example_mm: "ထွက်ငွေမှတ်တမ်းတင်တယ်။" },
    { japanese: "赤字", romaji: "akaji", pronunciation: "akaji", english: "deficit", burmese: "အရှုံး", category: "work", example_jp: "赤字が続いている。", example_romaji: "Akaji ga tsuzuite iru.", example_en: "The deficit continues.", example_mm: "အရှုံးဆက်ဖြစ်နေတယ်။" },
    { japanese: "黒字", romaji: "kuroji", pronunciation: "kuroji", english: "surplus / profit", burmese: "အမြတ်", category: "work", example_jp: "初めて黒字になった。", example_romaji: "Hajimete kuroji ni natta.", example_en: "We became profitable for the first time.", example_mm: "ပထမဆုံးအကြိမ် အမြတ်ရတယ်။" },

    // ========== SOCIETY & POLITICS (15 words) ==========
    { japanese: "社会", romaji: "shakai", pronunciation: "shakai", english: "society", burmese: "လူ့အဖွဲ့အစည်း", category: "misc", example_jp: "社会に貢献したい。", example_romaji: "Shakai ni kouken shitai.", example_en: "I want to contribute to society.", example_mm: "လူ့အဖွဲ့အစည်းကို ပံ့ပိုးချင်တယ်။" },
    { japanese: "政治", romaji: "seiji", pronunciation: "seiji", english: "politics", burmese: "နိုင်ငံရေး", category: "misc", example_jp: "政治に興味がある。", example_romaji: "Seiji ni kyoumi ga aru.", example_en: "I'm interested in politics.", example_mm: "နိုင်ငံရေးကို စိတ်ဝင်စားတယ်။" },
    { japanese: "法律", romaji: "houritsu", pronunciation: "houritsu", english: "law", burmese: "ဥပဒေ", category: "misc", example_jp: "法律を守らなければならない。", example_romaji: "Houritsu o mamoranakereba naranai.", example_en: "We must obey the law.", example_mm: "ဥပဒေကိုလိုက်နာရမယ်။" },
    { japanese: "規則", romaji: "kisoku", pronunciation: "kisoku", english: "regulation / rule", burmese: "စည်းမျဉ်း", category: "misc", example_jp: "規則に従ってください。", example_romaji: "Kisoku ni shitagatte kudasai.", example_en: "Please follow the rules.", example_mm: "စည်းမျဉ်းအတိုင်းလိုက်နာပါ။" },
    { japanese: "自由", romaji: "jiyuu", pronunciation: "jiyuu", english: "freedom", burmese: "လွတ်လပ်မှု", category: "misc", example_jp: "表現の自由は大切だ。", example_romaji: "Hyougen no jiyuu wa taisetsu da.", example_en: "Freedom of expression is important.", example_mm: "လွတ်လပ်စွာထုတ်ဖော်ပြောဆိုခွင့်က အရေးကြီးတယ်။" },
    { japanese: "平等", romaji: "byoudou", pronunciation: "byoudou", english: "equality", burmese: "တန်းတူညီမျှမှု", category: "misc", example_jp: "男女平等を求める。", example_romaji: "Danjo byoudou o motomeru.", example_en: "We seek gender equality.", example_mm: "ကျား-မ တန်းတူညီမျှမှုကို တောင်းဆိုတယ်။" },
    { japanese: "人権", romaji: "jinken", pronunciation: "jinken", english: "human rights", burmese: "လူ့အခွင့်အရေး", category: "misc", example_jp: "人権を尊重する。", example_romaji: "Jinken o sonchou suru.", example_en: "Respect human rights.", example_mm: "လူ့အခွင့်အရေးကိုလေးစားတယ်။" },
    { japanese: "地域", romaji: "chiiki", pronunciation: "chiiki", english: "region / community", burmese: "ဒေသ", category: "misc", example_jp: "地域の発展に貢献する。", example_romaji: "Chiiki no hatten ni kouken suru.", example_en: "Contribute to regional development.", example_mm: "ဒေသဖွံ့ဖြိုးရေးကို ပံ့ပိုးတယ်။" },
    { japanese: "国際", romaji: "kokusai", pronunciation: "kokusai", english: "international", burmese: "နိုင်ငံတကာ", category: "misc", example_jp: "国際交流を楽しむ。", example_romaji: "Kokusai kouryuu o tanoshimu.", example_en: "I enjoy international exchange.", example_mm: "နိုင်ငံတကာဖလှယ်ရေးကို ပျော်မွေ့တယ်။" },
    { japanese: "平和", romaji: "heiwa", pronunciation: "heiwa", english: "peace", burmese: "ငြိမ်းချမ်းရေး", category: "misc", example_jp: "世界平和を願う。", example_romaji: "Sekai heiwa o negau.", example_en: "I wish for world peace.", example_mm: "ကမ္ဘာ့ငြိမ်းချမ်းရေးကိုဆုတောင်းတယ်။" },
    { japanese: "戦争", romaji: "sensou", pronunciation: "sensou", english: "war", burmese: "စစ်ပွဲ", category: "misc", example_jp: "戦争は悲惨だ。", example_romaji: "Sensou wa hisan da.", example_en: "War is tragic.", example_mm: "စစ်ပွဲကဝမ်းနည်းစရာပါ။" },
    { japanese: "教育", romaji: "kyouiku", pronunciation: "kyouiku", english: "education", burmese: "ပညာရေး", category: "school", example_jp: "教育は重要です。", example_romaji: "Kyouiku wa juuyou desu.", example_en: "Education is important.", example_mm: "ပညာရေးကအရေးကြီးတယ်။" },
    { japanese: "医療", romaji: "iryou", pronunciation: "iryou", english: "medical care", burmese: "ဆေးကုသမှု", category: "misc", example_jp: "医療費が高い。", example_romaji: "Iryouhi ga takai.", example_en: "Medical costs are high.", example_mm: "ဆေးကုသစရိတ်ကြီးတယ်။" },
    { japanese: "福祉", romaji: "fukushi", pronunciation: "fukushi", english: "welfare", burmese: "လူမှုဖူလုံရေး", category: "misc", example_jp: "社会福祉を充実させる。", example_romaji: "Shakai fukushi o juujitsu saseru.", example_en: "Enhance social welfare.", example_mm: "လူမှုဖူလုံရေးကို မြှင့်တင်တယ်။" },
    { japanese: "人口", romaji: "jinkou", pronunciation: "jinkou", english: "population", burmese: "လူဦးရေ", category: "misc", example_jp: "日本の人口は減少している。", example_romaji: "Nihon no jinkou wa genshou shite iru.", example_en: "Japan's population is decreasing.", example_mm: "ဂျပန်လူဦးရေ လျော့နည်းနေတယ်။" },

    // ========== SCIENCE & TECHNOLOGY (additional - 10 words) ==========
    { japanese: "科学", romaji: "kagaku", pronunciation: "kagaku", english: "science", burmese: "သိပ္ပံ", category: "misc", example_jp: "科学技術が発展した。", example_romaji: "Kagaku gijutsu ga hatten shita.", example_en: "Science and technology have developed.", example_mm: "သိပ္ပံနည်းပညာ ဖွံ့ဖြိုးလာတယ်။" },
    { japanese: "研究", romaji: "kenkyuu", pronunciation: "kenkyuu", english: "research", burmese: "သုတေသန", category: "misc", example_jp: "研究を続けている。", example_romaji: "Kenkyuu o tsuzukete iru.", example_en: "I continue my research.", example_mm: "သုတေသနကို ဆက်လုပ်နေတယ်။" },
    { japanese: "実験", romaji: "jikken", pronunciation: "jikken", english: "experiment", burmese: "စမ်းသပ်မှု", category: "misc", example_jp: "実験を行う。", example_romaji: "Jikken o okonau.", example_en: "Conduct an experiment.", example_mm: "စမ်းသပ်မှုလုပ်တယ်။" },
    { japanese: "データ", romaji: "deeta", pronunciation: "deeta", english: "data", burmese: "ဒေတာ", category: "misc", example_jp: "データを分析する。", example_romaji: "Deeta o bunseki suru.", example_en: "Analyze the data.", example_mm: "ဒေတာခွဲခြမ်းစိတ်ဖြာတယ်။" },
    { japanese: "情報", romaji: "jouhou", pronunciation: "jouhou", english: "information", burmese: "သတင်းအချက်အလက်", category: "misc", example_jp: "正しい情報を得る。", example_romaji: "Tadashii jouhou o eru.", example_en: "Get correct information.", example_mm: "မှန်ကန်တဲ့သတင်းအချက်အလက်ရယူတယ်။" },
    { japanese: "技術", romaji: "gijutsu", pronunciation: "gijutsu", english: "technology", burmese: "နည်းပညာ", category: "misc", example_jp: "新しい技術を学ぶ。", example_romaji: "Atarashii gijutsu o manabu.", example_en: "Learn new technology.", example_mm: "နည်းပညာအသစ်သင်ယူတယ်။" },
    { japanese: "発明", romaji: "hatsumei", pronunciation: "hatsumei", english: "invention", burmese: "တီထွင်", category: "misc", example_jp: "偉大な発明をした。", example_romaji: "Idai na hatsumei o shita.", example_en: "He made a great invention.", example_mm: "ကြီးကျယ်တဲ့တီထွင်မှုလုပ်တယ်။" },
    { japanese: "発見", romaji: "hakken", pronunciation: "hakken", english: "discovery", burmese: "ရှာဖွေတွေ့ရှိ", category: "misc", example_jp: "新しい星を発見した。", example_romaji: "Atarashii hoshi o hakken shita.", example_en: "I discovered a new star.", example_mm: "ကြယ်သစ်တစ်လုံးရှာဖွေတွေ့ရှိတယ်။" },
    { japanese: "進歩", romaji: "shinpo", pronunciation: "shinpo", english: "progress", burmese: "တိုးတက်မှု", category: "misc", example_jp: "技術の進歩は速い。", example_romaji: "Gijutsu no shinpo wa hayai.", example_en: "Technological progress is fast.", example_mm: "နည်းပညာတိုးတက်မှုကမြန်တယ်။" },
    { japanese: "未来", romaji: "mirai", pronunciation: "mirai", english: "future", burmese: "အနာဂတ်", category: "time", example_jp: "未来のことを考える。", example_romaji: "Mirai no koto o kangaeru.", example_en: "I think about the future.", example_mm: "အနာဂတ်အကြောင်းစဉ်းစားတယ်။" },

    // ========== FINAL COMPLETION WORDS (10 words) ==========
    { japanese: "別に", romaji: "betsu ni", pronunciation: "betsu ni", english: "not particularly / separately", burmese: "သီးခြား", category: "misc", example_jp: "別に何もない。", example_romaji: "Betsu ni nanimo nai.", example_en: "Nothing in particular.", example_mm: "သီးခြားဘာမှမရှိဘူး။" },
    { japanese: "結構", romaji: "kekkou", pronunciation: "kekkou", english: "quite / fairly / fine", burmese: "အတော်အသင့်", category: "misc", example_jp: "結構いいですね。", example_romaji: "Kekkou ii desu ne.", example_en: "It's quite good, isn't it?", example_mm: "အတော်လေးကောင်းတယ်မလား။" },
    { japanese: "まさか", romaji: "masaka", pronunciation: "masaka", english: "unthinkable / no way", burmese: "မဖြစ်နိုင်ဘူး", category: "misc", example_jp: "まさか彼が来るとは。", example_romaji: "Masaka kare ga kuru to wa.", example_en: "No way he would come.", example_mm: "သူလာမယ်ဆိုတာ မဖြစ်နိုင်ဘူး။" },
    { japanese: "やはり", romaji: "yahari", pronunciation: "yahari", english: "as expected / after all", burmese: "မျှော်လင့်ထားသလို", category: "misc", example_jp: "やはり雨が降った。", example_romaji: "Yahari ame ga futta.", example_en: "As expected, it rained.", example_mm: "မျှော်လင့်ထားသလိုပဲ မိုးရွာတယ်။" },
    { japanese: "とにかく", romaji: "tonikaku", pronunciation: "tonikaku", english: "anyway / in any case", burmese: "ဘာပဲဖြစ်ဖြစ်", category: "misc", example_jp: "とにかくやってみよう。", example_romaji: "Tonikaku yatte miyou.", example_en: "Anyway, let's try it.", example_mm: "ဘာပဲဖြစ်ဖြစ် စမ်းကြည့်ရအောင်။" },
    { japanese: "要領", romaji: "youryou", pronunciation: "youryou", english: "point / gist", burmese: "အချက်အလက်", category: "misc", example_jp: "要領がわかった。", example_romaji: "Youryou ga wakatta.", example_en: "I got the point.", example_mm: "အချက်ကိုနားလည်သွားတယ်။" },
    { japanese: "適宜", romaji: "teki", pronunciation: "teki", english: "appropriately", burmese: "သင့်လျော်စွာ", category: "misc", example_jp: "適宜対応してください。", example_romaji: "Tekigou ni taiou shite kudasai.", example_en: "Please respond appropriately.", example_mm: "သင့်လျော်စွာတုံ့ပြန်ပါ။" },
    { japanese: "一応", romaji: "ichiou", pronunciation: "ichiou", english: "tentatively / for now", burmese: "ယာယီအားဖြင့်", category: "misc", example_jp: "一応確認しました。", example_romaji: "Ichiou kakunin shimashita.", example_en: "I've tentatively checked it.", example_mm: "ယာယီအားဖြင့် စစ်ဆေးပြီးပြီ။" },
    { japanese: "何気なく", romaji: "nanigenaku", pronunciation: "nanigenaku", english: "casually / unintentionally", burmese: "မရည်ရွယ်ဘဲ", category: "misc", example_jp: "何気なく言ってしまった。", example_romaji: "Nanigenaku itte shimatta.", example_en: "I said it unintentionally.", example_mm: "မရည်ရွယ်ဘဲပြောမိသွားတယ်။" },
    { japanese: "つい", romaji: "tsui", pronunciation: "tsui", english: "unintentionally / just", burmese: "မရည်ရွယ်ဘဲ", category: "misc", example_jp: "つい買ってしまった。", example_romaji: "Tsui katte shimatta.", example_en: "I ended up buying it unintentionally.", example_mm: "မရည်ရွယ်ဘဲဝယ်မိသွားတယ်။" },
        // ========== ADDITIONAL VERBS (25 words) ==========
    { japanese: "争う", romaji: "arasou", pronunciation: "arasou", english: "to compete / to dispute", burmese: "ပြိုင်", category: "verbs", example_jp: "賞を争う。", example_romaji: "Shou o arasou.", example_en: "Compete for a prize.", example_mm: "ဆုအတွက်ပြိုင်တယ်။" },
    { japanese: "祝う", romaji: "iwau", pronunciation: "iwau", english: "to celebrate", burmese: "ဂုဏ်ပြု", category: "verbs", example_jp: "誕生日を祝う。", example_romaji: "Tanjoubi o iwau.", example_en: "Celebrate a birthday.", example_mm: "မွေးနေ့ဂုဏ်ပြုတယ်။" },
    { japanese: "疑う", romaji: "utagau", pronunciation: "utagau", english: "to doubt", burmese: "သံသယ", category: "verbs", example_jp: "彼の言葉を疑う。", example_romaji: "Kare no kotoba o utagau.", example_en: "I doubt his words.", example_mm: "သူ့စကားကိုသံသယဝင်တယ်။" },
    { japanese: "励ます", romaji: "hagemasu", pronunciation: "hagemasu", english: "to encourage", burmese: "အားပေး", category: "verbs", example_jp: "友達を励ます。", example_romaji: "Tomodachi o hagemasu.", example_en: "Encourage a friend.", example_mm: "သူငယ်ချင်းကိုအားပေးတယ်။" },
    { japanese: "植える", romaji: "ueru", pronunciation: "ueru", english: "to plant", burmese: "စိုက်", category: "verbs", example_jp: "木を植える。", example_romaji: "Ki o ueru.", example_en: "Plant a tree.", example_mm: "သစ်ပင်စိုက်တယ်။" },
    { japanese: "隠す", romaji: "kakusu", pronunciation: "kakusu", english: "to hide", burmese: "ဖုံး", category: "verbs", example_jp: "真実を隠す。", example_romaji: "Shinjitsu o kakusu.", example_en: "Hide the truth.", example_mm: "အမှန်တရားကိုဖုံးကွယ်တယ်။" },
    { japanese: "壊す", romaji: "kowasu", pronunciation: "kowasu", english: "to break", burmese: "ချိုး", category: "verbs", example_jp: "おもちゃを壊す。", example_romaji: "Omocha o kowasu.", example_en: "Break a toy.", example_mm: "ကစားစရာချိုးတယ်။" },
    { japanese: "直す", romaji: "naosu", pronunciation: "naosu", english: "to fix / to repair", burmese: "ပြင်", category: "verbs", example_jp: "時計を直す。", example_romaji: "Tokei o naosu.", example_en: "Fix a watch.", example_mm: "နာရီပြင်တယ်။" },
    { japanese: "届ける", romaji: "todokeru", pronunciation: "todokeru", english: "to deliver", burmese: "ပို့", category: "verbs", example_jp: "荷物を届ける。", example_romaji: "Nimotsu o todokeru.", example_en: "Deliver a package.", example_mm: "ပစ္စည်းပို့တယ်။" },
    { japanese: "預ける", romaji: "azukeru", pronunciation: "azukeru", english: "to deposit / to leave with", burmese: "အပ်နှံ", category: "verbs", example_jp: "銀行にお金を預ける。", example_romaji: "Ginkou ni okane o azukeru.", example_en: "Deposit money in the bank.", example_mm: "ငွေကိုဘဏ်မှာအပ်တယ်။" },
    { japanese: "断る", romaji: "kotowaru", pronunciation: "kotowaru", english: "to refuse", burmese: "ငြင်း", category: "verbs", example_jp: "誘いを断る。", example_romaji: "Sasoi o kotowaru.", example_en: "Refuse an invitation.", example_mm: "ဖိတ်ကြားချက်ကိုငြင်းတယ်။" },
    { japanese: "許す", romaji: "yurusu", pronunciation: "yurusu", english: "to forgive / to permit", burmese: "ခွင့်ပြု", category: "verbs", example_jp: "過ちを許す。", example_romaji: "Ayamachi o yurusu.", example_en: "Forgive a mistake.", example_mm: "အမှားကိုခွင့်လွှတ်တယ်။" },
    { japanese: "頼む", romaji: "tanomu", pronunciation: "tanomu", english: "to request / to ask", burmese: "တောင်း", category: "verbs", example_jp: "手伝いを頼む。", example_romaji: "Tetsudai o tanomu.", example_en: "Ask for help.", example_mm: "အကူအညီတောင်းတယ်။" },
    { japanese: "漕ぐ", romaji: "kogu", pronunciation: "kogu", english: "to row / to pedal", burmese: "လှော်", category: "verbs", example_jp: "自転車を漕ぐ。", example_romaji: "Jitensha o kogu.", example_en: "Pedal a bicycle.", example_mm: "စက်ဘီးနင်းတယ်။" },
    { japanese: "輝く", romaji: "kagayaku", pronunciation: "kagayaku", english: "to shine", burmese: "တောက်", category: "verbs", example_jp: "星が輝く。", example_romaji: "Hoshi ga kagayaku.", example_en: "Stars shine.", example_mm: "ကြယ်တွေတောက်ပတယ်။" },
    { japanese: "叫ぶ", romaji: "sakebu", pronunciation: "sakebu", english: "to shout", burmese: "အော်", category: "verbs", example_jp: "助けてと叫ぶ。", example_romaji: "Tasukete to sakebu.", example_en: "Shout for help.", example_mm: "ကယ်ပါလို့အော်တယ်။" },
    { japanese: "泣く", romaji: "naku", pronunciation: "naku", english: "to cry", burmese: "ငို", category: "verbs", example_jp: "赤ちゃんが泣く。", example_romaji: "Akachan ga naku.", example_en: "The baby cries.", example_mm: "ကလေးငိုတယ်။" },
    { japanese: "笑う", romaji: "warau", pronunciation: "warau", english: "to laugh", burmese: "ရယ်", category: "verbs", example_jp: "冗談を聞いて笑う。", example_romaji: "Joudan o kiite warau.", example_en: "Laugh at a joke.", example_mm: "ဟာသကြားပြီးရယ်တယ်။" },
    { japanese: "悩む", romaji: "nayamu", pronunciation: "nayamu", english: "to worry / to be troubled", burmese: "စိုးရိမ်", category: "verbs", example_jp: "将来について悩む。", example_romaji: "Shourai ni tsuite nayamu.", example_en: "Worry about the future.", example_mm: "အနာဂတ်အတွက်စိုးရိမ်တယ်။" },
    { japanese: "驚く", romaji: "odoroku", pronunciation: "odoroku", english: "to be surprised", burmese: "အံ့သြ", category: "verbs", example_jp: "突然の知らせに驚く。", example_romaji: "Totsuzen no shirase ni odoroku.", example_en: "Be surprised at sudden news.", example_mm: "ရုတ်တရက်သတင်းကိုအံ့သြတယ်။" },
    { japanese: "感謝する", romaji: "kansha suru", pronunciation: "kansha suru", english: "to appreciate / to thank", burmese: "ကျေးဇူးတင်", category: "verbs", example_jp: "親に感謝する。", example_romaji: "Oya ni kansha suru.", example_en: "Thank my parents.", example_mm: "မိဘကိုကျေးဇူးတင်တယ်။" },
    { japanese: "参加する", romaji: "sanka suru", pronunciation: "sanka suru", english: "to participate", burmese: "ပါဝင်", category: "verbs", example_jp: "イベントに参加する。", example_romaji: "Ibento ni sanka suru.", example_en: "Participate in an event.", example_mm: "ပွဲမှာပါဝင်တယ်။" },
    { japanese: "準備する", romaji: "junbi suru", pronunciation: "junbi suru", english: "to prepare", burmese: "ပြင်ဆင်", category: "verbs", example_jp: "旅行の準備をする。", example_romaji: "Ryokou no junbi o suru.", example_en: "Prepare for a trip.", example_mm: "ခရီးအတွက်ပြင်ဆင်တယ်။" },
    { japanese: "紹介する", romaji: "shoukai suru", pronunciation: "shoukai suru", english: "to introduce", burmese: "မိတ်ဆက်", category: "verbs", example_jp: "友達を紹介する。", example_romaji: "Tomodachi o shoukai suru.", example_en: "Introduce a friend.", example_mm: "သူငယ်ချင်းကိုမိတ်ဆက်တယ်။" },
    { japanese: "理解する", romaji: "rikai suru", pronunciation: "rikai suru", english: "to understand", burmese: "နားလည်", category: "verbs", example_jp: "相手の気持ちを理解する。", example_romaji: "Aite no kimochi o rikai suru.", example_en: "Understand the other person's feelings.", example_mm: "အခြားသူရဲ့စိတ်ခံစားချက်ကိုနားလည်တယ်။" },

    // ========== ADDITIONAL NOUNS (25 words) ==========
    { japanese: "理由", romaji: "riyuu", pronunciation: "riyuu", english: "reason", burmese: "အကြောင်းရင်း", category: "misc", example_jp: "理由を説明する。", example_romaji: "Riyuu o setsumei suru.", example_en: "Explain the reason.", example_mm: "အကြောင်းရင်းရှင်းပြတယ်။" },
    { japanese: "結果", romaji: "kekka", pronunciation: "kekka", english: "result", burmese: "ရလဒ်", category: "misc", example_jp: "結果を待つ。", example_romaji: "Kekka o matsu.", example_en: "Wait for the result.", example_mm: "ရလဒ်ကိုစောင့်တယ်။" },
    { japanese: "影響", romaji: "eikyou", pronunciation: "eikyou", english: "influence", burmese: "သက်ရောက်မှု", category: "misc", example_jp: "天気が気分に影響する。", example_romaji: "Tenki ga kibun ni eikyou suru.", example_en: "Weather influences mood.", example_mm: "ရာသီဥတုက စိတ်ခံစားချက်ကိုသက်ရောက်တယ်။" },
    { japanese: "違い", romaji: "chigai", pronunciation: "chigai", english: "difference", burmese: "ကွာခြားချက်", category: "misc", example_jp: "意見の違いがある。", example_romaji: "Iken no chigai ga aru.", example_en: "There is a difference of opinion.", example_mm: "အမြင်ကွာခြားချက်ရှိတယ်။" },
    { japanese: "関係", romaji: "kankei", pronunciation: "kankei", english: "relationship", burmese: "ဆက်ဆံရေး", category: "misc", example_jp: "良い関係を築く。", example_romaji: "Yoi kankei o kizuku.", example_en: "Build a good relationship.", example_mm: "ကောင်းမွန်တဲ့ဆက်ဆံရေးတည်ဆောက်တယ်။" },
    { japanese: "特徴", romaji: "tokuchou", pronunciation: "tokuchou", english: "characteristic", burmese: "ထူးခြားချက်", category: "misc", example_jp: "日本の特徴は何ですか。", example_romaji: "Nihon no tokuchou wa nan desu ka.", example_en: "What are Japan's characteristics?", example_mm: "ဂျပန်ရဲ့ထူးခြားချက်ကဘာလဲ။" },
    { japanese: "能力", romaji: "nouryoku", pronunciation: "nouryoku", english: "ability", burmese: "စွမ်းရည်", category: "misc", example_jp: "能力を伸ばす。", example_romaji: "Nouryoku o nobasu.", example_en: "Improve ability.", example_mm: "စွမ်းရည်မြှင့်တင်တယ်။" },
    { japanese: "可能性", romaji: "kanousei", pronunciation: "kanousei", english: "possibility", burmese: "ဖြစ်နိုင်ခြေ", category: "misc", example_jp: "成功の可能性は高い。", example_romaji: "Seikou no kanousei wa takai.", example_en: "The possibility of success is high.", example_mm: "အောင်မြင်နိုင်ခြေမြင့်တယ်။" },
    { japanese: "問題点", romaji: "mondaiten", pronunciation: "mondaiten", english: "problem point", burmese: "ပြဿနာနေရာ", category: "misc", example_jp: "問題点を指摘する。", example_romaji: "Mondaiten o shiteki suru.", example_en: "Point out the problem.", example_mm: "ပြဿနာနေရာကိုညွှန်ပြတယ်။" },
    { japanese: "目標", romaji: "mokuhyou", pronunciation: "mokuhyou", english: "goal", burmese: "ပန်းတိုင်", category: "misc", example_jp: "目標を達成する。", example_romaji: "Mokuhyou o tassei suru.", example_en: "Achieve a goal.", example_mm: "ပန်းတိုင်ပြည့်မြောက်တယ်။" },
    { japanese: "計画", romaji: "keikaku", pronunciation: "keikaku", english: "plan", burmese: "အစီအစဉ်", category: "misc", example_jp: "計画を立てる。", example_romaji: "Keikaku o tateru.", example_en: "Make a plan.", example_mm: "အစီအစဉ်ဆွဲတယ်။" },
    { japanese: "予定", romaji: "yotei", pronunciation: "yotei", english: "schedule", burmese: "အချိန်ဇယား", category: "misc", example_jp: "明日の予定は？", example_romaji: "Ashita no yotei wa?", example_en: "What's the schedule for tomorrow?", example_mm: "မနက်ဖြန်အချိန်ဇယားကဘာလဲ။" },
    { japanese: "習慣", romaji: "shuukan", pronunciation: "shuukan", english: "habit", burmese: "အလေ့အထ", category: "misc", example_jp: "良い習慣をつける。", example_romaji: "Yoi shuukan o tsukeru.", example_en: "Form good habits.", example_mm: "အလေ့အထကောင်းတွေလုပ်တယ်။" },
    { japanese: "経験", romaji: "keiken", pronunciation: "keiken", english: "experience", burmese: "အတွေ့အကြုံ", category: "misc", example_jp: "貴重な経験をした。", example_romaji: "Kichou na keiken o shita.", example_en: "Had a valuable experience.", example_mm: "တန်ဖိုးရှိတဲ့အတွေ့အကြုံရခဲ့တယ်။" },
    { japanese: "事件", romaji: "jiken", pronunciation: "jiken", english: "incident", burmese: "အဖြစ်အပျက်", category: "misc", example_jp: "事件が起こった。", example_romaji: "Jiken ga okotta.", example_en: "An incident occurred.", example_mm: "အဖြစ်အပျက်တစ်ခုဖြစ်တယ်။" },
    { japanese: "事故", romaji: "jiko", pronunciation: "jiko", english: "accident", burmese: "မတော်တဆမှု", category: "misc", example_jp: "交通事故に遭う。", example_romaji: "Koutsuu jiko ni au.", example_en: "Get into a traffic accident.", example_mm: "ယာဉ်မတော်တဆမှုကြုံတယ်။" },
    { japanese: "注文", romaji: "chuumon", pronunciation: "chuumon", english: "order", burmese: "မှာယူ", category: "shopping", example_jp: "ピザを注文する。", example_romaji: "Piza o chuumon suru.", example_en: "Order pizza.", example_mm: "ပီဇာမှာယူတယ်။" },
    { japanese: "料金", romaji: "ryoukin", pronunciation: "ryoukin", english: "fee / charge", burmese: "အခကြေးငွေ", category: "shopping", example_jp: "料金を支払う。", example_romaji: "Ryoukin o shiharau.", example_en: "Pay the fee.", example_mm: "အခကြေးငွေပေးတယ်။" },
    { japanese: "値段", romaji: "nedan", pronunciation: "nedan", english: "price", burmese: "စျေးနှုန်း", category: "shopping", example_jp: "値段が高い。", example_romaji: "Nedan ga takai.", example_en: "The price is high.", example_mm: "စျေးနှုန်းကြီးတယ်။" },
    { japanese: "商品", romaji: "shouhin", pronunciation: "shouhin", english: "product", burmese: "ကုန်ပစ္စည်း", category: "shopping", example_jp: "新しい商品が出た。", example_romaji: "Atarashii shouhin ga deta.", example_en: "A new product came out.", example_mm: "ကုန်ပစ္စည်းအသစ်ထွက်တယ်။" },
    { japanese: "客", romaji: "kyaku", pronunciation: "kyaku", english: "customer", burmese: "ဖောက်သည်", category: "shopping", example_jp: "客が多い。", example_romaji: "Kyaku ga ooi.", example_en: "There are many customers.", example_mm: "ဖောက်သည်များတယ်။" },
    { japanese: "店員", romaji: "tenin", pronunciation: "tenin", english: "shop clerk", burmese: "ဆိုင်ဝန်ထမ်း", category: "shopping", example_jp: "店員に聞く。", example_romaji: "Tenin ni kiku.", example_en: "Ask the shop clerk.", example_mm: "ဆိုင်ဝန်ထမ်းကိုမေးတယ်။" },
    { japanese: "サービス", romaji: "saabisu", pronunciation: "saabisu", english: "service", burmese: "ဝန်ဆောင်မှု", category: "shopping", example_jp: "サービスが良い。", example_romaji: "Saabisu ga yoi.", example_en: "The service is good.", example_mm: "ဝန်ဆောင်မှုကောင်းတယ်။" },
    { japanese: "品質", romaji: "hinshitsu", pronunciation: "hinshitsu", english: "quality", burmese: "အရည်အသွေး", category: "shopping", example_jp: "品質が良い。", example_romaji: "Hinshitsu ga yoi.", example_en: "Good quality.", example_mm: "အရည်အသွေးကောင်းတယ်။" },
    { japanese: "保証", romaji: "hoshou", pronunciation: "hoshou", english: "warranty", burmese: "အာမခံ", category: "shopping", example_jp: "保証期間は1年です。", example_romaji: "Hoshou kikan wa ichinen desu.", example_en: "The warranty period is one year.", example_mm: "အာမခံကာလတစ်နှစ်ပါ။" },

    // ========== FINAL COMPLETION (36 words to reach 700) ==========
    { japanese: "あらゆる", romaji: "arayuru", pronunciation: "arayuru", english: "all / every", burmese: "အားလုံးသော", category: "misc", example_jp: "あらゆる可能性を考える。", example_romaji: "Arayuru kanousei o kangaeru.", example_en: "Consider all possibilities.", example_mm: "ဖြစ်နိုင်ခြေအားလုံးကိုစဉ်းစားတယ်။" },
    { japanese: "いわゆる", romaji: "iwayuru", pronunciation: "iwayuru", english: "so-called", burmese: "ခေါ်တွင်သော", category: "misc", example_jp: "いわゆるエリートだ。", example_romaji: "Iwayuru eriito da.", example_en: "He's so-called elite.", example_mm: "ခေါ်တွင်တဲ့အထက်တန်းလွှာပါ။" },
    { japanese: "うつむく", romaji: "utsumuku", pronunciation: "utsumuku", english: "to look down", burmese: "ငုံ့ကြည့်", category: "verbs", example_jp: "恥ずかしくてうつむく。", example_romaji: "Hazukashikute utsumuku.", example_en: "Look down in embarrassment.", example_mm: "ရှက်လို့ငုံ့ကြည့်တယ်။" },
    { japanese: "おごる", romaji: "ogoru", pronunciation: "ogoru", english: "to treat (someone)", burmese: "ဖိတ်ကြား", category: "verbs", example_jp: "友達におごる。", example_romaji: "Tomodachi ni ogoru.", example_en: "Treat a friend.", example_mm: "သူငယ်ချင်းကိုဖိတ်တယ်။" },
    { japanese: "かわいがる", romaji: "kawaigaru", pronunciation: "kawaigaru", english: "to love / to be fond of", burmese: "ချစ်ခင်တွယ်တာ", category: "verbs", example_jp: "子供をかわいがる。", example_romaji: "Kodomo o kawaigaru.", example_en: "Be fond of children.", example_mm: "ကလေးကိုချစ်ခင်တယ်။" },
    { japanese: "くよくよ", romaji: "kuyokuyo", pronunciation: "kuyokuyo", english: "to worry excessively", burmese: "စိတ်ပူပန်", category: "adverbs", example_jp: "くよくよしないで。", example_romaji: "Kuyokuyo shinaide.", example_en: "Don't worry too much.", example_mm: "အရမ်းမစိတ်ပူနဲ့။" },
    { japanese: "しょっちゅう", romaji: "shocchuu", pronunciation: "shocchuu", english: "frequently", burmese: "မကြာခဏ", category: "adverbs", example_jp: "しょっちゅう遅刻する。", example_romaji: "Shocchuu chikoku suru.", example_en: "Frequently late.", example_mm: "မကြာခဏနောက်ကျတယ်။" },
    { japanese: "すっかり", romaji: "sukkari", pronunciation: "sukkari", english: "completely", burmese: "လုံးဝ", category: "adverbs", example_jp: "すっかり忘れた。", example_romaji: "Sukkari wasureta.", example_en: "Completely forgot.", example_mm: "လုံးဝမေ့သွားတယ်။" },
    { japanese: "たっぷり", romaji: "tappuri", pronunciation: "tappuri", english: "plenty / enough", burmese: "အလုံအလောက်", category: "adverbs", example_jp: "時間がたっぷりある。", example_romaji: "Jikan ga tappuri aru.", example_en: "There's plenty of time.", example_mm: "အချိန်အလုံအလောက်ရှိတယ်။" },
    { japanese: "ちゃんと", romaji: "chanto", pronunciation: "chanto", english: "properly / exactly", burmese: "ကောင်းစွာ", category: "adverbs", example_jp: "ちゃんと聞いてください。", example_romaji: "Chanto kiite kudasai.", example_en: "Please listen properly.", example_mm: "ကောင်းစွာနားထောင်ပါ။" },
    { japanese: "ばったり", romaji: "battari", pronunciation: "battari", english: "unexpectedly (meet)", burmese: "မမျှော်လင့်ဘဲ", category: "adverbs", example_jp: "友達にばったり会った。", example_romaji: "Tomodachi ni battari atta.", example_en: "Unexpectedly met a friend.", example_mm: "သူငယ်ချင်းကိုမမျှော်လင့်ဘဲတွေ့တယ်။" },
    { japanese: "ひそかに", romaji: "hisoka ni", pronunciation: "hisoka ni", english: "secretly", burmese: "လျှို့ဝှက်စွာ", category: "adverbs", example_jp: "ひそかに計画する。", example_romaji: "Hisoka ni keikaku suru.", example_en: "Plan secretly.", example_mm: "လျှို့ဝှက်စွာအစီအစဉ်ဆွဲတယ်။" },
    { japanese: "むしろ", romaji: "mushiro", pronunciation: "mushiro", english: "rather / instead", burmese: "ယင်းအစား", category: "adverbs", example_jp: "むしろ行きたくない。", example_romaji: "Mushiro ikitakunai.", example_en: "Rather, I don't want to go.", example_mm: "ယင်းအစားမသွားချင်ဘူး။" },
    { japanese: "めったに〜ない", romaji: "mettani nai", pronunciation: "mettani nai", english: "rarely", burmese: "ခဲခဲယဉ်းယဉ်း", category: "adverbs", example_jp: "めったに映画を見ない。", example_romaji: "Mettani eiga o minai.", example_en: "I rarely watch movies.", example_mm: "ရုပ်ရှင်ခဲခဲယဉ်းယဉ်းကြည့်တယ်။" },
    { japanese: "もしかすると", romaji: "moshika suru to", pronunciation: "moshika suru to", english: "perhaps / maybe", burmese: "ဖြစ်နိုင်သည်", category: "adverbs", example_jp: "もしかすると雨が降るかも。", example_romaji: "Moshika suru to ame ga furu kamo.", example_en: "Perhaps it might rain.", example_mm: "ဖြစ်နိုင်တယ်မိုးရွာမယ်။" },
    { japanese: "やけに", romaji: "yake ni", pronunciation: "yake ni", english: "awfully / terribly", burmese: "အလွန်", category: "adverbs", example_jp: "やけに静かだ。", example_romaji: "Yake ni shizuka da.", example_en: "Awfully quiet.", example_mm: "အရမ်းတိတ်ဆိတ်တယ်။" },
    { japanese: "わざわざ", romaji: "wazawaza", pronunciation: "wazawaza", english: "going out of one's way", burmese: "တမင်", category: "adverbs", example_jp: "わざわざ来てくれた。", example_romaji: "Wazawaza kite kureta.", example_en: "You came all the way.", example_mm: "တမင်လာပေးတယ်။" },
    { japanese: "一体", romaji: "ittai", pronunciation: "ittai", english: "the heck (emphasis)", burmese: "ဘာလဲဗျာ", category: "adverbs", example_jp: "一体何が起きたの？", example_romaji: "Ittai nani ga okita no?", example_en: "What the heck happened?", example_mm: "ဘာလဲဗျာဘာဖြစ်တာလဲ။" },
    { japanese: "大方", romaji: "okata", pronunciation: "okata", english: "mostly / probably", burmese: "အများအားဖြင့်", category: "adverbs", example_jp: "大方終わった。", example_romaji: "Okata owatta.", example_en: "Mostly finished.", example_mm: "အများအားဖြင့်ပြီးသွားပြီ။" },
    { japanese: "恐らく", romaji: "osoraku", pronunciation: "osoraku", english: "probably", burmese: "ဖြစ်နိုင်သည်", category: "adverbs", example_jp: "恐らく彼は来ない。", example_romaji: "Osoraku kare wa konai.", example_en: "He probably won't come.", example_mm: "သူမလာနိုင်ဘူး။" },
    { japanese: "必ずしも〜ない", romaji: "kanarazushimo nai", pronunciation: "kanarazushimo nai", english: "not always", burmese: "အမြဲတမ်းမဟုတ်", category: "adverbs", example_jp: "必ずしも正しくない。", example_romaji: "Kanarazushimo tadashikunai.", example_en: "Not always correct.", example_mm: "အမြဲတမ်းမှန်တယ်မဟုတ်ဘူး။" },
    { japanese: "極めて", romaji: "kiwamete", pronunciation: "kiwamete", english: "extremely", burmese: "အလွန်အမင်း", category: "adverbs", example_jp: "極めて危険だ。", example_romaji: "Kiwamete kiken da.", example_en: "Extremely dangerous.", example_mm: "အလွန်အမင်းအန္တရာယ်ရှိတယ်။" },
    { japanese: "更に", romaji: "sara ni", pronunciation: "sara ni", english: "furthermore", burmese: "ထို့အပြင်", category: "adverbs", example_jp: "更に問題が増えた。", example_romaji: "Sara ni mondai ga fueta.", example_en: "Furthermore, problems increased.", example_mm: "ထို့အပြင်ပြဿနာများတိုးလာတယ်။" },
    { japanese: "実に", romaji: "jitsu ni", pronunciation: "jitsu ni", english: "truly / really", burmese: "တကယ်ပဲ", category: "adverbs", example_jp: "実に素晴らしい。", example_romaji: "Jitsu ni subarashii.", example_en: "Truly wonderful.", example_mm: "တကယ်ပဲကောင်းတယ်။" },
    { japanese: "随分", romaji: "zuibun", pronunciation: "zuibun", english: "very / considerably", burmese: "အလွန်", category: "adverbs", example_jp: "随分変わったね。", example_romaji: "Zuibun kawatta ne.", example_en: "You've changed a lot.", example_mm: "အရမ်းပြောင်းသွားတယ်နော်။" },
    { japanese: "絶対", romaji: "zettai", pronunciation: "zettai", english: "absolutely", burmese: "လုံးဝ", category: "adverbs", example_jp: "絶対に行く。", example_romaji: "Zettai ni iku.", example_en: "I'll definitely go.", example_mm: "လုံးဝသွားမယ်။" },
    { japanese: "絶対に〜ない", romaji: "zettai ni nai", pronunciation: "zettai ni nai", english: "absolutely not", burmese: "လုံးဝမ", category: "adverbs", example_jp: "絶対に負けない。", example_romaji: "Zettai ni makenai.", example_en: "I will not lose absolutely.", example_mm: "လုံးဝမရှုံးဘူး။" },
    { japanese: "全然", romaji: "zenzen", pronunciation: "zenzen", english: "completely (with negative)", burmese: "လုံးဝ", category: "adverbs", example_jp: "全然分からない。", example_romaji: "Zenzen wakaranai.", example_en: "Don't understand at all.", example_mm: "လုံးဝနားမလည်ဘူး။" },
    { japanese: "大好き", romaji: "daisuki", pronunciation: "daisuki", english: "love / like very much", burmese: "အရမ်းကြိုက်", category: "adjectives", example_jp: "君のことが大好きだ。", example_romaji: "Kimi no koto ga daisuki da.", example_en: "I love you very much.", example_mm: "မင်းကိုအရမ်းချစ်တယ်။" },
    { japanese: "大嫌い", romaji: "daikirai", pronunciation: "daikirai", english: "hate", burmese: "အရမ်းမုန်း", category: "adjectives", example_jp: "野菜が大嫌いだ。", example_romaji: "Yasai ga daikirai da.", example_en: "I hate vegetables.", example_mm: "ဟင်းသီးဟင်းရွက်တွေကိုအရမ်းမုန်းတယ်။" },
    { japanese: "大切な", romaji: "taisetsu na", pronunciation: "taisetsu na", english: "precious / important", burmese: "အဖိုးတန်", category: "adjectives", example_jp: "大切な友達。", example_romaji: "Taisetsu na tomodachi.", example_en: "Precious friend.", example_mm: "အဖိုးတန်သူငယ်ချင်း။" },
    { japanese: "残念な", romaji: "zannen na", pronunciation: "zannen na", english: "regrettable", burmese: "စိတ်မကောင်း", category: "adjectives", example_jp: "残念な結果になった。", example_romaji: "Zannen na kekka ni natta.", example_en: "It became a regrettable result.", example_mm: "စိတ်မကောင်းစရာရလဒ်ဖြစ်တယ်။" },
    { japanese: "素敵な", romaji: "suteki na", pronunciation: "suteki na", english: "lovely / wonderful", burmese: "လှပ", category: "adjectives", example_jp: "素敵なプレゼント。", example_romaji: "Suteki na purezento.", example_en: "Wonderful gift.", example_mm: "လှပတဲ့လက်ဆောင်။" },
    { japanese: "素晴らしい", romaji: "subarashii", pronunciation: "subarashii", english: "splendid / excellent", burmese: "အလွန်ကောင်း", category: "adjectives", example_jp: "素晴らしい景色だ。", example_romaji: "Subarashii keshiki da.", example_en: "Excellent view.", example_mm: "အလွန်ကောင်းမွန်တဲ့ရှုခင်း။" },
    { japanese: "辛い", romaji: "tsurai", pronunciation: "tsurai", english: "painful / tough", burmese: "ခက်ခဲ", category: "adjectives", example_jp: "辛い経験をした。", example_romaji: "Tsurai keiken o shita.", example_en: "Had a painful experience.", example_mm: "ခက်ခဲတဲ့အတွေ့အကြုံရခဲ့တယ်။" },
    { japanese: "厳しい", romaji: "kibishii", pronunciation: "kibishii", english: "strict / severe", burmese: "တင်းကျပ်", category: "adjectives", example_jp: "先生は厳しい。", example_romaji: "Sensei wa kibishii.", example_en: "The teacher is strict.", example_mm: "ဆရာကတင်းကျပ်တယ်။" }

];

// ========== N4 GRAMMAR DATA (80+ grammar points) ==========
const grammarData = [
    // ========== TE-FORM RELATED GRAMMAR (1-10) ==========
    {
        title: "〜てしまう",
        pronunciation: "te shimau",
        english: "do something completely / regret doing",
        burmese: "လုပ်ပြီးသွားသည် / လုပ်မိသွားသည် (နောင်တ)",
        category: "verb",
        example_jp: "宿題を忘れてしまいました。",
        example_romaji: "Shukudai o wasurete shimaimashita.",
        example_en: "I forgot my homework (regrettably).",
        example_mm: "အိမ်စာမေ့သွားတယ် (နောင်တရစရာ)"
    },
    {
        title: "〜ておく",
        pronunciation: "te oku",
        english: "do something in advance",
        burmese: "ကြိုလုပ်ထားသည်",
        category: "verb",
        example_jp: "予約しておきます。",
        example_romaji: "Yoyaku shite okimasu.",
        example_en: "I will make a reservation in advance.",
        example_mm: "ကြိုတင်ဘိုကင်ထားမယ်။"
    },
    {
        title: "〜てみる",
        pronunciation: "te miru",
        english: "try doing",
        burmese: "စမ်းလုပ်ကြည့်သည်",
        category: "verb",
        example_jp: "食べてみてください。",
        example_romaji: "Tabete mite kudasai.",
        example_en: "Please try eating it.",
        example_mm: "စမ်းစားကြည့်ပါ။"
    },
    {
        title: "〜てあげる",
        pronunciation: "te ageru",
        english: "do something for someone (giving)",
        burmese: "တစ်စုံတစ်ယောက်အတွက် လုပ်ပေးသည်",
        category: "verb",
        example_jp: "友達に教えてあげた。",
        example_romaji: "Tomodachi ni oshiete ageta.",
        example_en: "I taught my friend.",
        example_mm: "သူငယ်ချင်းကို သင်ပေးလိုက်တယ်။"
    },
    {
        title: "〜てもらう",
        pronunciation: "te morau",
        english: "receive the favor of doing",
        burmese: "လုပ်ပေးခြင်းခံရသည်",
        category: "verb",
        example_jp: "先生に説明してもらいました。",
        example_romaji: "Sensei ni setsumei shite moraimashita.",
        example_en: "I had the teacher explain it to me.",
        example_mm: "ဆရာကို ရှင်းပြခိုင်းလိုက်တယ်။"
    },
    {
        title: "〜てくれる",
        pronunciation: "te kureru",
        english: "someone does something for me (giving)",
        burmese: "တစ်စုံတစ်ယောက်က ငါ့အတွက် လုပ်ပေးသည်",
        category: "verb",
        example_jp: "友達が手伝ってくれた。",
        example_romaji: "Tomodachi ga tetsudatte kureta.",
        example_en: "My friend helped me.",
        example_mm: "သူငယ်ချင်းက ကူညီပေးလိုက်တယ်။"
    },
    {
        title: "〜てほしい",
        pronunciation: "te hoshii",
        english: "want someone to do something",
        burmese: "တစ်စုံတစ်ယောက်ကို လုပ်စေချင်သည်",
        category: "verb",
        example_jp: "早く来てほしい。",
        example_romaji: "Hayaku kite hoshii.",
        example_en: "I want you to come early.",
        example_mm: "မင်းစောစောလာစေချင်တယ်။"
    },
    {
        title: "〜てはいけない",
        pronunciation: "te wa ikenai",
        english: "must not do",
        burmese: "မလုပ်ရ",
        category: "verb",
        example_jp: "ここでタバコを吸ってはいけない。",
        example_romaji: "Koko de tabako o sutte wa ikenai.",
        example_en: "You must not smoke here.",
        example_mm: "ဒီမှာဆေးလိပ်မသောက်ရ။"
    },
    {
        title: "〜てもいい",
        pronunciation: "te mo ii",
        english: "may do / allowed to do",
        burmese: "လုပ်လို့ရသည်",
        category: "verb",
        example_jp: "写真を撮ってもいいですか。",
        example_romaji: "Shashin o totte mo ii desu ka.",
        example_en: "May I take a picture?",
        example_mm: "ဓာတ်ပုံရိုက်လို့ရမလား။"
    },
    {
        title: "〜てから",
        pronunciation: "te kara",
        english: "after doing A, do B",
        burmese: "လုပ်ပြီးမှ",
        category: "time",
        example_jp: "ご飯を食べてから、勉強します。",
        example_romaji: "Gohan o tabete kara, benkyou shimasu.",
        example_en: "After eating, I will study.",
        example_mm: "ထမင်းစားပြီးမှ လေ့လာမယ်။"
    },

    // ========== CONDITIONAL FORMS (11-20) ==========
    {
        title: "〜ば (Conditional)",
        pronunciation: "ba",
        english: "if (general condition)",
        burmese: "လျှင် (အထွေထွေ)",
        category: "conditional",
        example_jp: "安ければ、買います。",
        example_romaji: "Yasukereba, kaimasu.",
        example_en: "If it's cheap, I'll buy it.",
        example_mm: "စျေးချိုရင် ဝယ်မယ်။"
    },
    {
        title: "〜たら (Conditional)",
        pronunciation: "tara",
        english: "if / when (specific condition)",
        burmese: "လျှင် (တိကျသော အခြေအနေ)",
        category: "conditional",
        example_jp: "雨が降ったら、行きません。",
        example_romaji: "Ame ga futtara, ikimasen.",
        example_en: "If it rains, I won't go.",
        example_mm: "မိုးရွာရင် မသွားဘူး။"
    },
    {
        title: "〜と (Conditional)",
        pronunciation: "to",
        english: "if / when (natural consequence)",
        burmese: "လျှင် (သဘာဝအကျိုးဆက်)",
        category: "conditional",
        example_jp: "春になると、桜が咲きます。",
        example_romaji: "Haru ni naru to, sakura ga sakimasu.",
        example_en: "When spring comes, cherry blossoms bloom.",
        example_mm: "နွေဦးရောက်ရင် ချယ်ရီပွင့်တယ်။"
    },
    {
        title: "〜なら (Conditional)",
        pronunciation: "nara",
        english: "if (hypothetical / suggestion)",
        burmese: "ဖြစ်လျှင် (ယူဆချက်)",
        category: "conditional",
        example_jp: "行くなら、早く行ってください。",
        example_romaji: "Iku nara, hayaku itte kudasai.",
        example_en: "If you're going, go early.",
        example_mm: "သွားမယ်ဆိုရင် စောစောသွားပါ။"
    },
    {
        title: "〜ても",
        pronunciation: "temo",
        english: "even if",
        burmese: "တောင်မှ",
        category: "conditional",
        example_jp: "高くても、買います。",
        example_romaji: "Takakutemo, kaimasu.",
        example_en: "Even if it's expensive, I'll buy it.",
        example_mm: "စျေးကြီးရင်တောင် ဝယ်မယ်။"
    },
    {
        title: "〜なくてもいい",
        pronunciation: "nakute mo ii",
        english: "don't have to do",
        burmese: "မလုပ်လည်းရသည်",
        category: "verb",
        example_jp: "明日来なくてもいいです。",
        example_romaji: "Ashita konakute mo ii desu.",
        example_en: "You don't have to come tomorrow.",
        example_mm: "မနက်ဖြန်လာစရာမလိုဘူး။"
    },
    {
        title: "〜なければならない",
        pronunciation: "nakereba naranai",
        english: "must do (obligation)",
        burmese: "လုပ်ရမည် (တာဝန်)",
        category: "verb",
        example_jp: "毎日勉強しなければならない。",
        example_romaji: "Mainichi benkyou shinakereba naranai.",
        example_en: "I must study every day.",
        example_mm: "နေ့တိုင်းလေ့လာရမယ်။"
    },
    {
        title: "〜なくてはいけない",
        pronunciation: "nakute wa ikenai",
        english: "must do (prohibition-based)",
        burmese: "လုပ်ရမည် (တားမြစ်ချက်အရ)",
        category: "verb",
        example_jp: "時間を守らなくてはいけない。",
        example_romaji: "Jikan o mamoranakute wa ikenai.",
        example_en: "You must keep time.",
        example_mm: "အချိန်မှန်ရမယ်။"
    },
    {
        title: "〜ずに",
        pronunciation: "zuni",
        english: "without doing",
        burmese: "မလုပ်ဘဲ",
        category: "verb",
        example_jp: "何も食べずに寝た。",
        example_romaji: "Nanimo tabezuni neta.",
        example_en: "I slept without eating anything.",
        example_mm: "ဘာမှမစားဘဲ အိပ်တယ်။"
    },
    {
        title: "〜ながら",
        pronunciation: "nagara",
        english: "while doing",
        burmese: "လုပ်ရင်း",
        category: "verb",
        example_jp: "音楽を聞きながら勉強する。",
        example_romaji: "Ongaku o kikinagara benkyou suru.",
        example_en: "I study while listening to music.",
        example_mm: "ဂီတနားထောင်ရင်း လေ့လာတယ်။"
    },

    // ========== REASON & CAUSE (21-25) ==========
    {
        title: "〜ので",
        pronunciation: "node",
        english: "because (polite reason)",
        burmese: "သောကြောင့် (ယဉ်ကျေး)",
        category: "conjunction",
        example_jp: "病気なので、休みます。",
        example_romaji: "Byouki na node, yasumimasu.",
        example_en: "Because I'm sick, I will rest.",
        example_mm: "နေမကောင်းလို့ အနားယူမယ်။"
    },
    {
        title: "〜から (reason)",
        pronunciation: "kara",
        english: "because (subjective reason)",
        burmese: "သောကြောင့် (ပုဂ္ဂလ)",
        category: "conjunction",
        example_jp: "暑いから、窓を開けます。",
        example_romaji: "Atsui kara, mado o akemasu.",
        example_en: "Because it's hot, I'll open the window.",
        example_mm: "ပူလို့ ပြတင်းပေါက်ဖွင့်မယ်။"
    },
    {
        title: "〜ために (reason)",
        pronunciation: "tame ni",
        english: "because of / due to",
        burmese: "သောကြောင့်",
        category: "conjunction",
        example_jp: "事故のために遅れました。",
        example_romaji: "Jiko no tame ni okuremashita.",
        example_en: "I was late due to an accident.",
        example_mm: "မတော်တဆမှုကြောင့် နောက်ကျတယ်။"
    },
    {
        title: "〜によって",
        pronunciation: "ni yotte",
        english: "due to / depending on",
        burmese: "ကြောင့် / ပေါ် မူတည်၍",
        category: "particle",
        example_jp: "天気によって旅行が決まる。",
        example_romaji: "Tenki ni yotte ryokou ga kimaru.",
        example_en: "The trip depends on the weather.",
        example_mm: "ရာသီဥတုပေါ်မူတည်ပြီး ခရီးဆုံးဖြတ်မယ်။"
    },
    {
        title: "〜のおかげで",
        pronunciation: "no okage de",
        english: "thanks to",
        burmese: "�ျေးဇူးကြောင့်",
        category: "expression",
        example_jp: "先生のおかげで合格しました。",
        example_romaji: "Sensei no okage de goukaku shimashita.",
        example_en: "Thanks to my teacher, I passed.",
        example_mm: "ဆရာကျေးဇူးကြောင့် အောင်တယ်။"
    },

    // ========== PURPOSE & INTENTION (26-30) ==========
    {
        title: "〜ために (purpose)",
        pronunciation: "tame ni",
        english: "in order to",
        burmese: "ရန် (ရည်ရွယ်ချက်)",
        category: "expression",
        example_jp: "日本に留学するために、日本語を勉強する。",
        example_romaji: "Nihon ni ryuugaku suru tame ni, nihongo o benkyou suru.",
        example_en: "I study Japanese in order to study abroad in Japan.",
        example_mm: "ဂျပန်မှာပညာသင်ဖို့ ဂျပန်စာလေ့လာတယ်။"
    },
    {
        title: "〜ように (purpose)",
        pronunciation: "you ni",
        english: "so that / in order that",
        burmese: "စေရန်",
        category: "expression",
        example_jp: "遅刻しないように、早く起きる。",
        example_romaji: "Chikoku shinai you ni, hayaku okiru.",
        example_en: "I wake up early so that I won't be late.",
        example_mm: "မနောက်ကျစေရန် စောစောထတယ်။"
    },
    {
        title: "〜つもり",
        pronunciation: "tsumori",
        english: "intend to do",
        burmese: "လုပ်ရန် ရည်ရွယ်သည်",
        category: "expression",
        example_jp: "大学に行くつもりです。",
        example_romaji: "Daigaku ni iku tsumori desu.",
        example_en: "I intend to go to university.",
        example_mm: "တက္ကသိုလ်သွားဖို့ ရည်ရွယ်ထားတယ်။"
    },
    {
        title: "〜予定",
        pronunciation: "yotei",
        english: "plan to do",
        burmese: "လုပ်ရန် စီစဉ်ထားသည်",
        category: "expression",
        example_jp: "来週旅行する予定です。",
        example_romaji: "Raishuu ryokou suru yotei desu.",
        example_en: "I plan to travel next week.",
        example_mm: "လာမယ့်အပတ် ခရီးသွားဖို့ စီစဉ်ထားတယ်။"
    },
    {
        title: "〜ことにしている",
        pronunciation: "koto ni shite iru",
        english: "make it a rule to do",
        burmese: "လုပ်ရန် စည်းကမ်းချမှတ်ထားသည်",
        category: "expression",
        example_jp: "毎朝ジョギングすることにしている。",
        example_romaji: "Maiasa jogingu suru koto ni shite iru.",
        example_en: "I make it a rule to jog every morning.",
        example_mm: "မနက်တိုင်း ဂျော့ဂင်းလုပ်ဖို့ သတ်မှတ်ထားတယ်။"
    },

    // ========== CONCESSIVE (31-35) ==========
    {
        title: "〜のに",
        pronunciation: "noni",
        english: "although / even though",
        burmese: "သော်လည်း",
        category: "conjunction",
        example_jp: "高いのに、買った。",
        example_romaji: "Takai noni, katta.",
        example_en: "Although it was expensive, I bought it.",
        example_mm: "စျေးကြီးပေမဲ့ ဝယ်လိုက်တယ်။"
    },
    {
        title: "〜けど / 〜が",
        pronunciation: "kedo / ga",
        english: "but / however",
        burmese: "သော်လည်း",
        category: "conjunction",
        example_jp: "楽しいけど、疲れた。",
        example_romaji: "Tanoshii kedo, tsukareta.",
        example_en: "It was fun, but I'm tired.",
        example_mm: "ပျော်ပေမဲ့ ပင်ပန်းတယ်။"
    },
    {
        title: "〜にもかかわらず",
        pronunciation: "ni mo kakawarazu",
        english: "nevertheless / despite",
        burmese: "စကားမစပ်",
        category: "conjunction",
        example_jp: "雨にもかかわらず、出かけた。",
        example_romaji: "Ame ni mo kakawarazu, dekaketa.",
        example_en: "Despite the rain, I went out.",
        example_mm: "မိုးရွာနေပေမဲ့ ထွက်သွားတယ်။"
    },
    {
        title: "〜ながらも",
        pronunciation: "nagara mo",
        english: "although / but",
        burmese: "သော်လည်း",
        category: "conjunction",
        example_jp: "悪いと知りながらも、してしまった。",
        example_romaji: "Warui to shirinagara mo, shite shimatta.",
        example_en: "Even though I knew it was bad, I did it.",
        example_mm: "မကောင်းဘူးဆိုတာသိပေမဲ့ လုပ်မိသွားတယ်။"
    },
    {
        title: "〜つつも",
        pronunciation: "tsutsu mo",
        english: "even while / although",
        burmese: "နေစဉ် (ဆန့်ကျင်ဘက်)",
        category: "conjunction",
        example_jp: "悪いと知りつつも、やめられない。",
        example_romaji: "Warui to shiritsutsu mo, yamerarenai.",
        example_en: "Even though I know it's bad, I can't stop.",
        example_mm: "မကောင်းဘူးဆိုတာသိပေမဲ့ မရပ်နိုင်ဘူး။"
    },

    // ========== COMPARISON & SIMILARITY (36-40) ==========
    {
        title: "〜より",
        pronunciation: "yori",
        english: "than (comparison)",
        burmese: "ထက်",
        category: "particle",
        example_jp: "昨日より暑いです。",
        example_romaji: "Kinou yori atsui desu.",
        example_en: "It's hotter than yesterday.",
        example_mm: "မနေ့ကထက် ပိုပူတယ်။"
    },
    {
        title: "〜ほど",
        pronunciation: "hodo",
        english: "as ~ as (degree)",
        burmese: "လောက်",
        category: "particle",
        example_jp: "思ったほど難しくない。",
        example_romaji: "Omotta hodo muzukashikunai.",
        example_en: "It's not as difficult as I thought.",
        example_mm: "ထင်သလောက် မခက်ဘူး။"
    },
    {
        title: "〜と同じ",
        pronunciation: "to onaji",
        english: "the same as",
        burmese: "နှင့် တူသည်",
        category: "expression",
        example_jp: "あなたと同じ考えです。",
        example_romaji: "Anata to onaji kangae desu.",
        example_en: "I have the same idea as you.",
        example_mm: "မင်းနဲ့ တူတူပဲစဉ်းစားတယ်။"
    },
    {
        title: "〜ように",
        pronunciation: "you ni",
        english: "like / as",
        burmese: "ကဲ့သို့",
        category: "expression",
        example_jp: "鳥のように飛びたい。",
        example_romaji: "Tori no you ni tobitai.",
        example_en: "I want to fly like a bird.",
        example_mm: "ငှက်ကဲ့သို့ ပျံချင်တယ်။"
    },
    {
        title: "〜みたいに",
        pronunciation: "mitai ni",
        english: "like (colloquial)",
        burmese: "လို",
        category: "expression",
        example_jp: "子供みたいに遊ぶ。",
        example_romaji: "Kodomo mitai ni asobu.",
        example_en: "Play like a child.",
        example_mm: "ကလေးလိုကစားတယ်။"
    },

    // ========== GIVING & RECEIVING (41-45) ==========
    {
        title: "〜てやる",
        pronunciation: "te yaru",
        english: "do for (subordinate/informal)",
        burmese: "အတွက် လုပ်ပေးသည် (အဆင့်နိမ့်)",
        category: "verb",
        example_jp: "弟にゲームを買ってやった。",
        example_romaji: "Otouto ni geemu o katte yatta.",
        example_en: "I bought a game for my little brother.",
        example_mm: "ညီအတွက် ဂိမ်းဝယ်ပေးလိုက်တယ်။"
    },
    {
        title: "〜ていただく",
        pronunciation: "te itadaku",
        english: "humbly receive the favor of",
        burmese: "လုပ်ပေးခြင်းကို ရိုသေစွာ ခံယူသည်",
        category: "verb",
        example_jp: "先生に説明していただきました。",
        example_romaji: "Sensei ni setsumei shite itadakimashita.",
        example_en: "I humbly received an explanation from the teacher.",
        example_mm: "ဆရာထံမှ ရှင်းလင်းချက် ရိုသေစွာရယူခဲ့တယ်။"
    },
    {
        title: "〜てくださる",
        pronunciation: "te kudasaru",
        english: "someone (honored) does for me",
        burmese: "တစ်စုံတစ်ယောက် (ရိုသေ) က ငါ့အတွက် လုပ်ပေးသည်",
        category: "verb",
        example_jp: "先生が教えてくださった。",
        example_romaji: "Sensei ga oshiete kudasatta.",
        example_en: "The teacher taught me (honored).",
        example_mm: "ဆရာက သင်ပေးခဲ့တယ် (ရိုသေ)။"
    },
    {
        title: "〜をいただく",
        pronunciation: "o itadaku",
        english: "humbly receive (object)",
        burmese: "ကို ရိုသေစွာ ခံယူသည်",
        category: "verb",
        example_jp: "プレゼントをいただきました。",
        example_romaji: "Purezento o itadakimashita.",
        example_en: "I humbly received a gift.",
        example_mm: "လက်ဆောင်ကို ရိုသေစွာ လက်ခံရယူခဲ့တယ်။"
    },
    {
        title: "〜をさしあげる",
        pronunciation: "o sashiageru",
        english: "humbly give (object)",
        burmese: "ကို ရိုသေစွာ ပေးသည်",
        category: "verb",
        example_jp: "先生に花をさしあげた。",
        example_romaji: "Sensei ni hana o sashiageta.",
        example_en: "I humbly gave flowers to the teacher.",
        example_mm: "ဆရာကို ပန်း ရိုသေစွာ ပေးခဲ့တယ်။"
    },

    // ========== PASSIVE, CAUSATIVE, POTENTIAL (46-55) ==========
    {
        title: "〜られる (Passive)",
        pronunciation: "rareru",
        english: "passive voice",
        burmese: "ခံရသည်",
        category: "verb",
        example_jp: "犬に噛まれた。",
        example_romaji: "Inu ni kamareta.",
        example_en: "I was bitten by a dog.",
        example_mm: "ခွေးကိုက်ခံရတယ်။"
    },
    {
        title: "〜られる (Potential)",
        pronunciation: "rareru",
        english: "can do / able to do",
        burmese: "နိုင်သည်",
        category: "verb",
        example_jp: "日本語が読める。",
        example_romaji: "Nihongo ga yomeru.",
        example_en: "I can read Japanese.",
        example_mm: "ဂျပန်စာဖတ်နိုင်တယ်။"
    },
    {
        title: "〜させる (Causative)",
        pronunciation: "saseru",
        english: "make / let someone do",
        burmese: "လုပ်စေသည်",
        category: "verb",
        example_jp: "子供に宿題をさせる。",
        example_romaji: "Kodomo ni shukudai o saseru.",
        example_en: "I make my child do homework.",
        example_mm: "ကလေးကို အိမ်စာလုပ်စေတယ်။"
    },
    {
        title: "〜させられる (Causative-Passive)",
        pronunciation: "saserareru",
        english: "be made to do",
        burmese: "လုပ်စေခံရသည်",
        category: "verb",
        example_jp: "上司に残業させられた。",
        example_romaji: "Joushi ni zangyou saserareta.",
        example_en: "I was made to work overtime by my boss.",
        example_mm: "အကြီးအကဲက အချိန်ပိုလုပ်စေခံရတယ်။"
    },
    {
        title: "〜られる (Honorific)",
        pronunciation: "rareru",
        english: "honorific (doing of superior)",
        burmese: "ပြုတော်မူသည် (ရိုသေ)",
        category: "verb",
        example_jp: "社長が来られました。",
        example_romaji: "Shachou ga koraremashita.",
        example_en: "The president came (honorific).",
        example_mm: "ဥက္ကဋ္ဌကြွလာပါပြီ။"
    },
    {
        title: "〜やすい",
        pronunciation: "yasui",
        english: "easy to do",
        burmese: "လုပ်ရလွယ်သည်",
        category: "verb",
        example_jp: "このペンは書きやすい。",
        example_romaji: "Kono pen wa kaki yasui.",
        example_en: "This pen is easy to write with.",
        example_mm: "ဒီဘောပင်က ရေးရလွယ်တယ်။"
    },
    {
        title: "〜にくい",
        pronunciation: "nikui",
        english: "difficult to do",
        burmese: "လုပ်ရခက်သည်",
        category: "verb",
        example_jp: "この問題は答えにくい。",
        example_romaji: "Kono mondai wa kotae nikui.",
        example_en: "This question is difficult to answer.",
        example_mm: "ဒီပုစ္ဆာက ဖြေရခက်တယ်။"
    },
    {
        title: "〜がる",
        pronunciation: "garu",
        english: "show signs of / act like",
        burmese: "ပုံပေါက်သည်",
        category: "verb",
        example_jp: "子供は嫌がる。",
        example_romaji: "Kodomo wa iyagaru.",
        example_en: "Children show dislike.",
        example_mm: "ကလေးတွေ မကြိုက်ပုံပေါက်တယ်။"
    },
    {
        title: "〜ばかり",
        pronunciation: "bakari",
        english: "only / nothing but",
        burmese: "သာ",
        category: "particle",
        example_jp: "毎日ラーメンばかり食べている。",
        example_romaji: "Mainichi raamen bakari tabete iru.",
        example_en: "I eat nothing but ramen every day.",
        example_mm: "နေ့တိုင်း ရာမန်သာ စားနေတယ်။"
    },
    {
        title: "〜きる",
        pronunciation: "kiru",
        english: "do completely / finish",
        burmese: "လုံးဝလုပ်သည် / ပြီးဆုံးသည်",
        category: "verb",
        example_jp: "最後まで走り切った。",
        example_romaji: "Saigo made hashiri kitta.",
        example_en: "I ran all the way to the end.",
        example_mm: "အဆုံးထိ အပြီးအဆုံးပြေးတယ်။"
    },

    // ========== ADJECTIVAL USAGES (56-60) ==========
    {
        title: "〜そう (Appearance)",
        pronunciation: "sou",
        english: "looks like / seems",
        burmese: "ပုံရသည်",
        category: "expression",
        example_jp: "美味しそう。",
        example_romaji: "Oishisou.",
        example_en: "It looks delicious.",
        example_mm: "အရသာရှိပုံရတယ်။"
    },
    {
        title: "〜っぽい",
        pronunciation: "ppoi",
        english: "-ish / prone to",
        burmese: "ဆန်သည်",
        category: "expression",
        example_jp: "子供っぽい。",
        example_romaji: "Kodomoppoi.",
        example_en: "Childish.",
        example_mm: "ကလေးဆန်တယ်။"
    },
    {
        title: "〜がち",
        pronunciation: "gachi",
        english: "tend to / prone to",
        burmese: "လေ့ရှိသည်",
        category: "expression",
        example_jp: "最近、忘れがちだ。",
        example_romaji: "Saikin, wasure gachi da.",
        example_en: "I tend to forget things lately.",
        example_mm: "မကြာသေးမီက မေ့လေ့ရှိတယ်။"
    },
    {
        title: "〜やすい",
        pronunciation: "yasui",
        english: "tend to / easy to happen",
        burmese: "လွယ်သည်",
        category: "expression",
        example_jp: "このガラスは割れやすい。",
        example_romaji: "Kono garasu wa ware yasui.",
        example_en: "This glass tends to break easily.",
        example_mm: "ဒီဖန်ခွက် ကျိုးလွယ်တယ်။"
    },
    {
        title: "〜にくい",
        pronunciation: "nikui",
        english: "hard to / difficult to happen",
        burmese: "ခက်သည်",
        category: "expression",
        example_jp: "この鍵は開けにくい。",
        example_romaji: "Kono kagi wa ake nikui.",
        example_en: "This key is hard to turn.",
        example_mm: "ဒီသော့ဖွင့်ရခက်တယ်။"
    },

    // ========== DEGREE & EXTENT (61-65) ==========
    {
        title: "〜すぎる",
        pronunciation: "sugiru",
        english: "too much / excessive",
        burmese: "လွန်ကဲသည်",
        category: "expression",
        example_jp: "食べすぎた。",
        example_romaji: "Tabesugita.",
        example_en: "I ate too much.",
        example_mm: "အရမ်းစားလိုက်တယ်။"
    },
    {
        title: "〜ほど",
        pronunciation: "hodo",
        english: "to the extent of",
        burmese: "လောက်",
        category: "particle",
        example_jp: "死にたいほど疲れた。",
        example_romaji: "Shinitai hodo tsukareta.",
        example_en: "I'm tired to death.",
        example_mm: "သေချင်လောက်အောင် ပင်ပန်းတယ်။"
    },
    {
        title: "〜くらい / 〜ぐらい",
        pronunciation: "kurai / gurai",
        english: "about / approximately",
        burmese: "ခန့်",
        category: "particle",
        example_jp: "1時間くらい待った。",
        example_romaji: "Ichijikan gurai matta.",
        example_en: "I waited about one hour.",
        example_mm: "တစ်နာရီခန့်စောင့်ခဲ့တယ်။"
    },
    {
        title: "〜さえ",
        pronunciation: "sae",
        english: "even (emphasis)",
        burmese: "တောင်",
        category: "particle",
        example_jp: "子供でさえできる。",
        example_romaji: "Kodomo de sae dekiru.",
        example_en: "Even a child can do it.",
        example_mm: "ကလေးတောင်မှ လုပ်နိုင်တယ်။"
    },
    {
        title: "〜すら",
        pronunciation: "sura",
        english: "even (negative nuance)",
        burmese: "တောင် (အဆိုးဘက်)",
        category: "particle",
        example_jp: "名前すら覚えていない。",
        example_romaji: "Namae sura oboete inai.",
        example_en: "I don't even remember the name.",
        example_mm: "နာမည်တောင်မှတ်မိမနေဘူး။"
    },

    // ========== EMPHASIS & CONTRAST (66-70) ==========
    {
        title: "〜こそ",
        pronunciation: "koso",
        english: "indeed / precisely",
        burmese: "မှသည်",
        category: "particle",
        example_jp: "これこそ本当の幸せだ。",
        example_romaji: "Kore koso hontou no shiawase da.",
        example_en: "This is precisely true happiness.",
        example_mm: "ဒါမှသည် တကယ့်ပျော်ရွှင်မှု။"
    },
    {
        title: "〜だけ",
        pronunciation: "dake",
        english: "only / just",
        burmese: "သာ",
        category: "particle",
        example_jp: "一人だけ来なかった。",
        example_romaji: "Hitori dake konakatta.",
        example_en: "Only one person didn't come.",
        example_mm: "လူတစ်ယောက်သာ မလာဘူး။"
    },
    {
        title: "〜しか〜ない",
        pronunciation: "shika nai",
        english: "only (negative)",
        burmese: "သာ (ငြင်း)",
        category: "particle",
        example_jp: "10分しかない。",
        example_romaji: "Juppun shika nai.",
        example_en: "There are only 10 minutes.",
        example_mm: "၁၀ မိနစ်သာရှိတယ်။"
    },
    {
        title: "〜さえ〜ば",
        pronunciation: "sae ~ ba",
        english: "as long as / provided that",
        burmese: "ရုံနှင့်",
        category: "conditional",
        example_jp: "時間さえあれば、行ける。",
        example_romaji: "Jikan sae areba, ikeru.",
        example_en: "As long as I have time, I can go.",
        example_mm: "အချိန်ရုံနဲ့ သွားနိုင်တယ်။"
    },
    {
        title: "〜も〜ば〜も",
        pronunciation: "mo ~ ba ~ mo",
        english: "both ... and ...",
        burmese: "ရော ရော",
        category: "particle",
        example_jp: "行くも行かないも自由だ。",
        example_romaji: "Iku mo ikanai mo jiyuu da.",
        example_en: "Both going and not going is free.",
        example_mm: "သွားရော မသွားရော လွတ်လပ်တယ်။"
    },

    // ========== TIME & SEQUENCE (71-75) ==========
    {
        title: "〜うちに",
        pronunciation: "uchi ni",
        english: "while / during",
        burmese: "အတွင်း",
        category: "time",
        example_jp: "若いうちに勉強する。",
        example_romaji: "Wakai uchi ni benkyou suru.",
        example_en: "Study while young.",
        example_mm: "ငယ်ငယ်ရွယ်ရွယ်နဲ့ လေ့လာပါ။"
    },
    {
        title: "〜間に",
        pronunciation: "aida ni",
        english: "while / during (specific period)",
        burmese: "အတွင်း (သတ်မှတ်ကာလ)",
        category: "time",
        example_jp: "夏休みの間に旅行する。",
        example_romaji: "Natsuyasumi no aida ni ryokou suru.",
        example_en: "I travel during summer break.",
        example_mm: "နွေရာသီအားလပ်ရက်အတွင်း ခရီးသွားမယ်။"
    },
    {
        title: "〜次第",
        pronunciation: "shidai",
        english: "as soon as / depending on",
        burmese: "ပြီးတာနဲ့ / ပေါ်မူတည်၍",
        category: "time",
        example_jp: "着き次第、連絡します。",
        example_romaji: "Tsuki shidai, renraku shimasu.",
        example_en: "I'll contact you as soon as I arrive.",
        example_mm: "ရောက်တာနဲ့ ဆက်သွယ်မယ်။"
    },
    {
        title: "〜たばかり",
        pronunciation: "ta bakari",
        english: "just did (recently finished)",
        burmese: "ပြီးခါစ",
        category: "time",
        example_jp: "食べたばかりです。",
        example_romaji: "Tabeta bakari desu.",
        example_en: "I just ate.",
        example_mm: "စားပြီးခါစပဲရှိသေးတယ်။"
    },
    {
        title: "〜たところ",
        pronunciation: "ta tokoro",
        english: "just did (newly finished)",
        burmese: "လုပ်ပြီးခါစ",
        category: "time",
        example_jp: "帰ってきたところです。",
        example_romaji: "Kaette kita tokoro desu.",
        example_en: "I just came home.",
        example_mm: "အိမ်ပြန်ရောက်ခါစပဲရှိသေးတယ်။"
    },

    // ========== CONJUNCTIONS (76-80) ==========
    {
        title: "〜したら",
        pronunciation: "shitara",
        english: "if / when (colloquial)",
        burmese: "ရင် (စကားပြော)",
        category: "conjunction",
        example_jp: "もし雨が降ったら、行かない。",
        example_romaji: "Moshi ame ga futtara, ikanai.",
        example_en: "If it rains, I won't go.",
        example_mm: "မိုးရွာရင် မသွားဘူး။"
    },
    {
        title: "〜すると",
        pronunciation: "suru to",
        english: "then / and then",
        burmese: "လိုက်သည်နှင့်",
        category: "conjunction",
        example_jp: "ドアを開けると、猫がいた。",
        example_romaji: "Doa o akeru to, neko ga ita.",
        example_en: "When I opened the door, there was a cat.",
        example_mm: "တံခါးဖွင့်လိုက်တာနဲ့ ကြောင်ရှိတယ်။"
    },
    {
        title: "〜というと",
        pronunciation: "to iu to",
        english: "speaking of",
        burmese: "ပြောရရင်",
        category: "conjunction",
        example_jp: "夏というと、海です。",
        example_romaji: "Natsu to iu to, umi desu.",
        example_en: "Speaking of summer, it's the sea.",
        example_mm: "နွေရာသီပြောရရင် ပင်လယ်ပါ။"
    },
    {
        title: "〜それで",
        pronunciation: "sore de",
        english: "and so / therefore",
        burmese: "ဒါနဲ့",
        category: "conjunction",
        example_jp: "雨が降った。それで試合は中止になった。",
        example_romaji: "Ame ga futta. Sore de shiai wa chuushi ni natta.",
        example_en: "It rained. And so the match was canceled.",
        example_mm: "မိုးရွာတယ်။ ဒါနဲ့ ပွဲဖျက်သိမ်းလိုက်တယ်။"
    },
    {
        title: "〜それなのに",
        pronunciation: "sore na noni",
        english: "nevertheless / despite that",
        burmese: "အဲဒါပေမဲ့",
        category: "conjunction",
        example_jp: "たくさん勉強した。それなのに、試験に落ちた。",
        example_romaji: "Takusan benkyou shita. Sore na noni, shiken ni ochita.",
        example_en: "I studied a lot. Nevertheless, I failed the exam.",
        example_mm: "အများကြီးလေ့လာခဲ့တယ်။ အဲဒါပေမဲ့ စာမေးပွဲကျတယ်။"
    },

    // ========== OTHER EXPRESSIONS (81-90) ==========
    {
        title: "〜かどうか",
        pronunciation: "ka dou ka",
        english: "whether or not",
        burmese: "ဟုတ်မဟုတ်",
        category: "expression",
        example_jp: "行くかどうか分からない。",
        example_romaji: "Iku ka dou ka wakaranai.",
        example_en: "I don't know whether to go or not.",
        example_mm: "သွားမသွား မသိဘူး။"
    },
    {
        title: "〜かもしれない",
        pronunciation: "kamo shirenai",
        english: "might / maybe",
        burmese: "ဖြစ်နိုင်သည်",
        category: "expression",
        example_jp: "雨が降るかもしれない。",
        example_romaji: "Ame ga furu kamo shirenai.",
        example_en: "It might rain.",
        example_mm: "မိုးရွာနိုင်တယ်။"
    },
    {
        title: "〜はず",
        pronunciation: "hazu",
        english: "should / supposed to",
        burmese: "ဖြစ်ရမည်",
        category: "expression",
        example_jp: "彼はもう着いているはずだ。",
        example_romaji: "Kare wa mou tsuite iru hazu da.",
        example_en: "He should have already arrived.",
        example_mm: "သူရောက်ပြီဖြစ်ရမယ်။"
    },
    {
        title: "〜わけ",
        pronunciation: "wake",
        english: "reason / meaning",
        burmese: "အကြောင်း",
        category: "expression",
        example_jp: "そういうわけで、遅れた。",
        example_romaji: "Sou iu wake de, okureta.",
        example_en: "That's why I was late.",
        example_mm: "ဒါကြောင့် နောက်ကျတယ်။"
    },
    {
        title: "〜というのは",
        pronunciation: "to iu no wa",
        english: "means / the reason is",
        burmese: "ဆိုသည်မှာ",
        category: "expression",
        example_jp: "家族というのは大切なものだ。",
        example_romaji: "Kazoku to iu no wa taisetsu na mono da.",
        example_en: "Family means something precious.",
        example_mm: "မိသားစုဆိုတာ အဖိုးတန်အရာပါ။"
    },
    {
        title: "〜に対して",
        pronunciation: "ni taishite",
        english: "towards / regarding",
        burmese: "ကို ရည်ညွှန်း၍",
        category: "particle",
        example_jp: "先生に対して失礼だ。",
        example_romaji: "Sensei ni taishite shitsurei da.",
        example_en: "It's rude to the teacher.",
        example_mm: "ဆရာကို ရည်ညွှန်း၍ မယဉ်ကျေးဘူး။"
    },
    {
        title: "〜について",
        pronunciation: "ni tsuite",
        english: "about / concerning",
        burmese: "အကြောင်း",
        category: "particle",
        example_jp: "日本の文化について話す。",
        example_romaji: "Nihon no bunka ni tsuite hanasu.",
        example_en: "Talk about Japanese culture.",
        example_mm: "ဂျပန်ယဉ်ကျေးမှုအကြောင်းပြောတယ်။"
    },
    {
        title: "〜にとって",
        pronunciation: "ni totte",
        english: "for (from perspective of)",
        burmese: "အတွက်",
        category: "particle",
        example_jp: "私にとって家族は大切です。",
        example_romaji: "Watashi ni totte kazoku wa taisetsu desu.",
        example_en: "Family is important to me.",
        example_mm: "ကျွန်တော့်အတွက် မိသားစုက အရေးကြီးတယ်။"
    },
    {
        title: "〜として",
        pronunciation: "to shite",
        english: "as (in capacity of)",
        burmese: "အနေဖြင့်",
        category: "particle",
        example_jp: "社長として発言する。",
        example_romaji: "Shachou to shite hatsugen suru.",
        example_en: "I speak as the president.",
        example_mm: "ဥက္ကဋ္ဌအနေဖြင့် ပြောကြားပါတယ်။"
    },
    {
        title: "〜とともに",
        pronunciation: "to tomo ni",
        english: "together with / as",
        burmese: "နှင့်အတူ",
        category: "particle",
        example_jp: "時とともに変わる。",
        example_romaji: "Toki to tomo ni kawaru.",
        example_en: "Change with time.",
        example_mm: "အချိန်နှင့်အတူ ပြောင်းလဲတယ်။"
    }
];

const kanjiData = [
    // ========== VERBS - MOVEMENT & ACTION (1-25) ==========
    { kanji: "歩", pronunciation: "ho / aru", romaji: "ho / aru", english: "walk", burmese: "လမ်းလျှောက်", category: "verb", example_jp: "歩く", example_romaji: "Aruku", example_en: "to walk", example_mm: "လမ်းလျှောက်သည်" },
    { kanji: "走", pronunciation: "sou / hashi", romaji: "sou / hashi", english: "run", burmese: "ပြေး", category: "verb", example_jp: "走る", example_romaji: "Hashiru", example_en: "to run", example_mm: "ပြေးသည်" },
    { kanji: "止", pronunciation: "shi / to", romaji: "shi / to", english: "stop", burmese: "ရပ်", category: "verb", example_jp: "止まる", example_romaji: "Tomaru", example_en: "to stop", example_mm: "ရပ်သည်" },
    { kanji: "渡", pronunciation: "to / wata", romaji: "to / wata", english: "cross / transit", burmese: "ကူး / ဖြတ်", category: "verb", example_jp: "渡る", example_romaji: "Wataru", example_en: "to cross", example_mm: "ဖြတ်ကူးသည်" },
    { kanji: "曲", pronunciation: "kyoku / ma", romaji: "kyoku / ma", english: "bend / curve", burmese: "ကွေး", category: "verb", example_jp: "曲がる", example_romaji: "Magaru", example_en: "to turn / bend", example_mm: "ကွေ့သည်" },
    { kanji: "直", pronunciation: "choku / nao", romaji: "choku / nao", english: "fix / straight", burmese: "ဖြောင့် / ပြင်", category: "verb", example_jp: "直す", example_romaji: "Naosu", example_en: "to fix", example_mm: "ပြင်သည်" },
    { kanji: "運", pronunciation: "un / hako", romaji: "un / hako", english: "carry / transport", burmese: "သယ် / ရွှေ့", category: "verb", example_jp: "運ぶ", example_romaji: "Hakobu", example_en: "to carry", example_mm: "သယ်သည်" },
    { kanji: "届", pronunciation: "kai / todo", romaji: "kai / todo", english: "deliver / reach", burmese: "ပို့ / ရောက်", category: "verb", example_jp: "届く", example_romaji: "Todoku", example_en: "to reach / be delivered", example_mm: "ရောက်ရှိသည်" },
    { kanji: "続", pronunciation: "zoku / tsuzu", romaji: "zoku / tsuzu", english: "continue", burmese: "ဆက်", category: "verb", example_jp: "続ける", example_romaji: "Tsuzukeru", example_en: "to continue", example_mm: "ဆက်လုပ်သည်" },
    { kanji: "終", pronunciation: "shuu / o", romaji: "shuu / o", english: "end / finish", burmese: "ပြီး", category: "verb", example_jp: "終わる", example_romaji: "Owaru", example_en: "to end", example_mm: "ပြီးဆုံးသည်" },
    { kanji: "始", pronunciation: "shi / hajime", romaji: "shi / hajime", english: "begin", burmese: "စ", category: "verb", example_jp: "始まる", example_romaji: "Hajimaru", example_en: "to begin", example_mm: "စတင်သည်" },
    { kanji: "変", pronunciation: "hen / ka", romaji: "hen / ka", english: "change", burmese: "ပြောင်း", category: "verb", example_jp: "変える", example_romaji: "Kaeru", example_en: "to change", example_mm: "ပြောင်းလဲသည်" },
    { kanji: "頼", pronunciation: "rai / tano", romaji: "rai / tano", english: "request / rely", burmese: "တောင်း / အားကိုး", category: "verb", example_jp: "頼む", example_romaji: "Tanomu", example_en: "to request", example_mm: "တောင်းဆိုသည်" },
    { kanji: "助", pronunciation: "jo / tasuke", romaji: "jo / tasuke", english: "help", burmese: "ကူ", category: "verb", example_jp: "助ける", example_romaji: "Tasukeru", example_en: "to help", example_mm: "ကူညီသည်" },
    { kanji: "守", pronunciation: "shu / mamo", romaji: "shu / mamo", english: "protect", burmese: "ကာကွယ်", category: "verb", example_jp: "守る", example_romaji: "Mamoru", example_en: "to protect", example_mm: "ကာကွယ်သည်" },
    { kanji: "戦", pronunciation: "sen / tataka", romaji: "sen / tataka", english: "fight / war", burmese: "တိုက်", category: "verb", example_jp: "戦う", example_romaji: "Tatakau", example_en: "to fight", example_mm: "တိုက်ခိုက်သည်" },
    { kanji: "勝", pronunciation: "shou / ka", romaji: "shou / ka", english: "win", burmese: "နိုင်", category: "verb", example_jp: "勝つ", example_romaji: "Katsu", example_en: "to win", example_mm: "အနိုင်ရသည်" },
    { kanji: "負", pronunciation: "fu / ma", romaji: "fu / ma", english: "lose / defeat", burmese: "ရှုံး", category: "verb", example_jp: "負ける", example_romaji: "Makeru", example_en: "to lose", example_mm: "ရှုံးသည်" },
    { kanji: "選", pronunciation: "sen / era", romaji: "sen / era", english: "choose / select", burmese: "ရွေး", category: "verb", example_jp: "選ぶ", example_romaji: "Erabu", example_en: "to choose", example_mm: "ရွေးချယ်သည်" },
    { kanji: "決", pronunciation: "ketsu / ki", romaji: "ketsu / ki", english: "decide", burmese: "ဆုံးဖြတ်", category: "verb", example_jp: "決める", example_romaji: "Kimeru", example_en: "to decide", example_mm: "ဆုံးဖြတ်သည်" },
    { kanji: "表", pronunciation: "hyou / arawa", romaji: "hyou / arawa", english: "express / surface", burmese: "ဖော်ပြ", category: "verb", example_jp: "表す", example_romaji: "Arawasu", example_en: "to express", example_mm: "ဖော်ပြသည်" },
    { kanji: "示", pronunciation: "ji / shime", romaji: "ji / shime", english: "show / indicate", burmese: "ပြ", category: "verb", example_jp: "示す", example_romaji: "Shimesu", example_en: "to show", example_mm: "ပြသသည်" },
    { kanji: "調", pronunciation: "chou / shira", romaji: "chou / shira", english: "investigate / tune", burmese: "စုံစမ်း / ညှိ", category: "verb", example_jp: "調べる", example_romaji: "Shiraberu", example_en: "to investigate", example_mm: "စုံစမ်းစစ်ဆေးသည်" },
    { kanji: "比", pronunciation: "hi / kura", romaji: "hi / kura", english: "compare", burmese: "နှိုင်း", category: "verb", example_jp: "比べる", example_romaji: "Kuraberu", example_en: "to compare", example_mm: "နှိုင်းယှဉ်သည်" },
    { kanji: "消", pronunciation: "shou / ki", romaji: "shou / ki", english: "erase / extinguish", burmese: "ဖျက် / ငြိမ်း", category: "verb", example_jp: "消す", example_romaji: "Kesu", example_en: "to erase", example_mm: "ဖျက်သည်" },

    // ========== VERBS - MENTAL & COMMUNICATION (26-40) ==========
    { kanji: "信", pronunciation: "shin / shin", romaji: "shin / shin", english: "believe / trust", burmese: "ယုံ", category: "verb", example_jp: "信じる", example_romaji: "Shinjiru", example_en: "to believe", example_mm: "ယုံကြည်သည်" },
    { kanji: "思", pronunciation: "shi / omo", romaji: "shi / omo", english: "think", burmese: "ထင်", category: "verb", example_jp: "思う", example_romaji: "Omou", example_en: "to think", example_mm: "စဉ်းစားသည်" },
    { kanji: "考", pronunciation: "kou / kanga", romaji: "kou / kanga", english: "consider / think", burmese: "စဉ်းစား", category: "verb", example_jp: "考える", example_romaji: "Kangaeru", example_en: "to consider", example_mm: "စဉ်းစားသည်" },
    { kanji: "知", pronunciation: "chi / shi", romaji: "chi / shi", english: "know", burmese: "သိ", category: "verb", example_jp: "知る", example_romaji: "Shiru", example_en: "to know", example_mm: "သိသည်" },
    { kanji: "教", pronunciation: "kyou / oshie", romaji: "kyou / oshie", english: "teach", burmese: "သင်ပေး", category: "verb", example_jp: "教える", example_romaji: "Oshieru", example_en: "to teach", example_mm: "သင်ပေးသည်" },
    { kanji: "習", pronunciation: "shuu / nara", romaji: "shuu / nara", english: "learn", burmese: "သင်ယူ", category: "verb", example_jp: "習う", example_romaji: "Narau", example_en: "to learn", example_mm: "သင်ယူသည်" },
    { kanji: "覚", pronunciation: "kaku / obo", romaji: "kaku / obo", english: "memorize / wake", burmese: "မှတ်", category: "verb", example_jp: "覚える", example_romaji: "Oboeru", example_en: "to memorize", example_mm: "မှတ်မိသည်" },
    { kanji: "忘", pronunciation: "bou / wasu", romaji: "bou / wasu", english: "forget", burmese: "မေ့", category: "verb", example_jp: "忘れる", example_romaji: "Wasureru", example_en: "to forget", example_mm: "မေ့သည်" },
    { kanji: "話", pronunciation: "wa / hana", romaji: "wa / hana", english: "talk / speak", burmese: "ပြော", category: "verb", example_jp: "話す", example_romaji: "Hanasu", example_en: "to speak", example_mm: "စကားပြောသည်" },
    { kanji: "伝", pronunciation: "den / tsuta", romaji: "den / tsuta", english: "convey / transmit", burmese: "ပို့", category: "verb", example_jp: "伝える", example_romaji: "Tsutaeru", example_en: "to convey", example_mm: "ပြောကြားသည်" },
    { kanji: "問", pronunciation: "mon / to", romaji: "mon / to", english: "ask / question", burmese: "မေး", category: "verb", example_jp: "問う", example_romaji: "Tou", example_en: "to ask", example_mm: "မေးမြန်းသည်" },
    { kanji: "答", pronunciation: "tou / kota", romaji: "tou / kota", english: "answer", burmese: "ဖြေ", category: "verb", example_jp: "答える", example_romaji: "Kotaeru", example_en: "to answer", example_mm: "ဖြေကြားသည်" },
    { kanji: "解", pronunciation: "kai / to", romaji: "kai / to", english: "solve / untie", burmese: "ဖြေ", category: "verb", example_jp: "解く", example_romaji: "Tokusu", example_en: "to solve", example_mm: "ဖြေရှင်းသည်" },
    { kanji: "説", pronunciation: "setsu / to", romaji: "setsu / to", english: "explain", burmese: "ရှင်း", category: "verb", example_jp: "説明する", example_romaji: "Setsumei suru", example_en: "to explain", example_mm: "ရှင်းပြသည်" },
    { kanji: "呼", pronunciation: "ko / yo", romaji: "ko / yo", english: "call", burmese: "ခေါ်", category: "verb", example_jp: "呼ぶ", example_romaji: "Yobu", example_en: "to call", example_mm: "ခေါ်သည်" },

    // ========== ADJECTIVES (41-55) ==========
    { kanji: "良", pronunciation: "ryou / yo", romaji: "ryou / yo", english: "good", burmese: "ကောင်း", category: "adjective", example_jp: "良い", example_romaji: "Yoi", example_en: "good", example_mm: "ကောင်းသည်" },
    { kanji: "悪", pronunciation: "aku / waru", romaji: "aku / waru", english: "bad", burmese: "ဆိုး", category: "adjective", example_jp: "悪い", example_romaji: "Warui", example_en: "bad", example_mm: "ဆိုးသည်" },
    { kanji: "新", pronunciation: "shin / atara", romaji: "shin / atara", english: "new", burmese: "သစ်", category: "adjective", example_jp: "新しい", example_romaji: "Atarashii", example_en: "new", example_mm: "အသစ်" },
    { kanji: "古", pronunciation: "ko / furu", romaji: "ko / furu", english: "old", burmese: "ဟောင်း", category: "adjective", example_jp: "古い", example_romaji: "Furui", example_en: "old", example_mm: "ဟောင်း" },
    { kanji: "若", pronunciation: "jaku / waka", romaji: "jaku / waka", english: "young", burmese: "ငယ်", category: "adjective", example_jp: "若い", example_romaji: "Wakai", example_en: "young", example_mm: "ငယ်ရွယ်" },
    { kanji: "強", pronunciation: "kyou / tsuyo", romaji: "kyou / tsuyo", english: "strong", burmese: "သန်", category: "adjective", example_jp: "強い", example_romaji: "Tsuyoi", example_en: "strong", example_mm: "သန်မာ" },
    { kanji: "弱", pronunciation: "jaku / yowa", romaji: "jaku / yowa", english: "weak", burmese: "အားနည်း", category: "adjective", example_jp: "弱い", example_romaji: "Yowai", example_en: "weak", example_mm: "အားနည်း" },
    { kanji: "広", pronunciation: "kou / hiro", romaji: "kou / hiro", english: "wide / spacious", burmese: "ကျယ်", category: "adjective", example_jp: "広い", example_romaji: "Hiroi", example_en: "wide", example_mm: "ကျယ်ဝန်း" },
    { kanji: "狭", pronunciation: "kyou / sema", romaji: "kyou / sema", english: "narrow", burmese: "ကျဉ်း", category: "adjective", example_jp: "狭い", example_romaji: "Semai", example_en: "narrow", example_mm: "ကျဉ်းမြောင်း" },
    { kanji: "遠", pronunciation: "en / too", romaji: "en / too", english: "far", burmese: "ဝေး", category: "adjective", example_jp: "遠い", example_romaji: "Tooi", example_en: "far", example_mm: "ဝေးသည်" },
    { kanji: "近", pronunciation: "kin / chika", romaji: "kin / chika", english: "near", burmese: "နီး", category: "adjective", example_jp: "近い", example_romaji: "Chikai", example_en: "near", example_mm: "နီးသည်" },
    { kanji: "深", pronunciation: "shin / fuka", romaji: "shin / fuka", english: "deep", burmese: "နက်", category: "adjective", example_jp: "深い", example_romaji: "Fukai", example_en: "deep", example_mm: "နက်ရှိုင်း" },
    { kanji: "浅", pronunciation: "sen / asa", romaji: "sen / asa", english: "shallow", burmese: "တိမ်", category: "adjective", example_jp: "浅い", example_romaji: "Asai", example_en: "shallow", example_mm: "တိမ်သည်" },
    { kanji: "重", pronunciation: "juu / omo", romaji: "juu / omo", english: "heavy", burmese: "လေး", category: "adjective", example_jp: "重い", example_romaji: "Omoi", example_en: "heavy", example_mm: "လေးသည်" },
    { kanji: "軽", pronunciation: "kei / karu", romaji: "kei / karu", english: "light", burmese: "ပေါ့", category: "adjective", example_jp: "軽い", example_romaji: "Karui", example_en: "light", example_mm: "ပေါ့သည်" },

    // ========== NATURE & ENVIRONMENT (56-75) ==========
    { kanji: "海", pronunciation: "kai / umi", romaji: "kai / umi", english: "sea / ocean", burmese: "ပင်လယ်", category: "nature", example_jp: "海", example_romaji: "Umi", example_en: "sea", example_mm: "ပင်လယ်" },
    { kanji: "山", pronunciation: "san / yama", romaji: "san / yama", english: "mountain", burmese: "တောင်", category: "nature", example_jp: "山", example_romaji: "Yama", example_en: "mountain", example_mm: "တောင်" },
    { kanji: "川", pronunciation: "sen / kawa", romaji: "sen / kawa", english: "river", burmese: "မြစ်", category: "nature", example_jp: "川", example_romaji: "Kawa", example_en: "river", example_mm: "မြစ်" },
    { kanji: "島", pronunciation: "tou / shima", romaji: "tou / shima", english: "island", burmese: "ကျွန်း", category: "nature", example_jp: "島", example_romaji: "Shima", example_en: "island", example_mm: "ကျွန်း" },
    { kanji: "森", pronunciation: "shin / mori", romaji: "shin / mori", english: "forest", burmese: "တော", category: "nature", example_jp: "森", example_romaji: "Mori", example_en: "forest", example_mm: "သစ်တော" },
    { kanji: "林", pronunciation: "rin / hayashi", romaji: "rin / hayashi", english: "woods / grove", burmese: "တော", category: "nature", example_jp: "林", example_romaji: "Hayashi", example_en: "woods", example_mm: "တောအုပ်" },
    { kanji: "花", pronunciation: "ka / hana", romaji: "ka / hana", english: "flower", burmese: "ပန်း", category: "nature", example_jp: "花", example_romaji: "Hana", example_en: "flower", example_mm: "ပန်း" },
    { kanji: "草", pronunciation: "sou / kusa", romaji: "sou / kusa", english: "grass", burmese: "မြက်", category: "nature", example_jp: "草", example_romaji: "Kusa", example_en: "grass", example_mm: "မြက်" },
    { kanji: "空", pronunciation: "kuu / sora", romaji: "kuu / sora", english: "sky", burmese: "ကောင်းကင်", category: "nature", example_jp: "空", example_romaji: "Sora", example_en: "sky", example_mm: "ကောင်းကင်" },
    { kanji: "星", pronunciation: "sei / hoshi", romaji: "sei / hoshi", english: "star", burmese: "ကြယ်", category: "nature", example_jp: "星", example_romaji: "Hoshi", example_en: "star", example_mm: "ကြယ်" },
    { kanji: "月", pronunciation: "getsu / tsuki", romaji: "getsu / tsuki", english: "moon", burmese: "လ", category: "nature", example_jp: "月", example_romaji: "Tsuki", example_en: "moon", example_mm: "လ" },
    { kanji: "日", pronunciation: "nichi / hi", romaji: "nichi / hi", english: "sun / day", burmese: "နေ", category: "nature", example_jp: "日", example_romaji: "Hi", example_en: "sun/day", example_mm: "နေ" },
    { kanji: "光", pronunciation: "kou / hikari", romaji: "kou / hikari", english: "light", burmese: "အလင်း", category: "nature", example_jp: "光", example_romaji: "Hikari", example_en: "light", example_mm: "အလင်း" },
    { kanji: "風", pronunciation: "fuu / kaze", romaji: "fuu / kaze", english: "wind", burmese: "လေ", category: "nature", example_jp: "風", example_romaji: "Kaze", example_en: "wind", example_mm: "လေ" },
    { kanji: "雲", pronunciation: "un / kumo", romaji: "un / kumo", english: "cloud", burmese: "တိမ်", category: "nature", example_jp: "雲", example_romaji: "Kumo", example_en: "cloud", example_mm: "တိမ်" },
    { kanji: "雨", pronunciation: "u / ame", romaji: "u / ame", english: "rain", burmese: "မိုး", category: "nature", example_jp: "雨", example_romaji: "Ame", example_en: "rain", example_mm: "မိုး" },
    { kanji: "雪", pronunciation: "setsu / yuki", romaji: "setsu / yuki", english: "snow", burmese: "နှင်း", category: "nature", example_jp: "雪", example_romaji: "Yuki", example_en: "snow", example_mm: "နှင်း" },
    { kanji: "氷", pronunciation: "hyou / koori", romaji: "hyou / koori", english: "ice", burmese: "ရေခဲ", category: "nature", example_jp: "氷", example_romaji: "Koori", example_en: "ice", example_mm: "ရေခဲ" },
    { kanji: "火", pronunciation: "ka / hi", romaji: "ka / hi", english: "fire", burmese: "မီး", category: "nature", example_jp: "火", example_romaji: "Hi", example_en: "fire", example_mm: "မီး" },
    { kanji: "水", pronunciation: "sui / mizu", romaji: "sui / mizu", english: "water", burmese: "ရေ", category: "nature", example_jp: "水", example_romaji: "Mizu", example_en: "water", example_mm: "ရေ" },

    // ========== BODY PARTS (76-85) ==========
    { kanji: "顔", pronunciation: "gan / kao", romaji: "gan / kao", english: "face", burmese: "မျက်နှာ", category: "body", example_jp: "顔", example_romaji: "Kao", example_en: "face", example_mm: "မျက်နှာ" },
    { kanji: "頭", pronunciation: "tou / atama", romaji: "tou / atama", english: "head", burmese: "ခေါင်း", category: "body", example_jp: "頭", example_romaji: "Atama", example_en: "head", example_mm: "ခေါင်း" },
    { kanji: "首", pronunciation: "shu / kubi", romaji: "shu / kubi", english: "neck", burmese: "လည်ပင်း", category: "body", example_jp: "首", example_romaji: "Kubi", example_en: "neck", example_mm: "လည်ပင်း" },
    { kanji: "肩", pronunciation: "ken / kata", romaji: "ken / kata", english: "shoulder", burmese: "ပခုံး", category: "body", example_jp: "肩", example_romaji: "Kata", example_en: "shoulder", example_mm: "ပခုံး" },
    { kanji: "胸", pronunciation: "kyou / mune", romaji: "kyou / mune", english: "chest", burmese: "ရင်ဘတ်", category: "body", example_jp: "胸", example_romaji: "Mune", example_en: "chest", example_mm: "ရင်ဘတ်" },
    { kanji: "腹", pronunciation: "fuku / hara", romaji: "fuku / hara", english: "stomach", burmese: "ဝမ်း", category: "body", example_jp: "腹", example_romaji: "Hara", example_en: "stomach", example_mm: "ဝမ်း" },
    { kanji: "腰", pronunciation: "you / koshi", romaji: "you / koshi", english: "waist / lower back", burmese: "ခါး", category: "body", example_jp: "腰", example_romaji: "Koshi", example_en: "waist", example_mm: "ခါး" },
    { kanji: "腕", pronunciation: "wan / ude", romaji: "wan / ude", english: "arm", burmese: "လက်မောင်း", category: "body", example_jp: "腕", example_romaji: "Ude", example_en: "arm", example_mm: "လက်မောင်း" },
    { kanji: "足", pronunciation: "soku / ashi", romaji: "soku / ashi", english: "leg / foot", burmese: "ခြေ", category: "body", example_jp: "足", example_romaji: "Ashi", example_en: "leg/foot", example_mm: "ခြေထောက်" },
    { kanji: "手", pronunciation: "shu / te", romaji: "shu / te", english: "hand", burmese: "လက်", category: "body", example_jp: "手", example_romaji: "Te", example_en: "hand", example_mm: "လက်" },

    // ========== PEOPLE & FAMILY (86-100) ==========
    { kanji: "夫", pronunciation: "fu / otto", romaji: "fu / otto", english: "husband", burmese: "ခင်ပွန်း", category: "family", example_jp: "夫", example_romaji: "Otto", example_en: "husband", example_mm: "ခင်ပွန်း" },
    { kanji: "妻", pronunciation: "sai / tsuma", romaji: "sai / tsuma", english: "wife", burmese: "ဇနီး", category: "family", example_jp: "妻", example_romaji: "Tsuma", example_en: "wife", example_mm: "ဇနီး" },
    { kanji: "親", pronunciation: "shin / oya", romaji: "shin / oya", english: "parent", burmese: "မိဘ", category: "family", example_jp: "親", example_romaji: "Oya", example_en: "parent", example_mm: "မိဘ" },
    { kanji: "子", pronunciation: "shi / ko", romaji: "shi / ko", english: "child", burmese: "ကလေး", category: "family", example_jp: "子", example_romaji: "Ko", example_en: "child", example_mm: "ကလေး" },
    { kanji: "孫", pronunciation: "son / mago", romaji: "son / mago", english: "grandchild", burmese: "မြေး", category: "family", example_jp: "孫", example_romaji: "Mago", example_en: "grandchild", example_mm: "မြေး" },
    { kanji: "兄", pronunciation: "kei / ani", romaji: "kei / ani", english: "older brother", burmese: "အစ်ကို", category: "family", example_jp: "兄", example_romaji: "Ani", example_en: "older brother", example_mm: "အစ်ကို" },
    { kanji: "弟", pronunciation: "tei / otouto", romaji: "tei / otouto", english: "younger brother", burmese: "ညီ", category: "family", example_jp: "弟", example_romaji: "Otouto", example_en: "younger brother", example_mm: "ညီ" },
    { kanji: "姉", pronunciation: "shi / ane", romaji: "shi / ane", english: "older sister", burmese: "အစ်မ", category: "family", example_jp: "姉", example_romaji: "Ane", example_en: "older sister", example_mm: "အစ်မ" },
    { kanji: "妹", pronunciation: "mai / imouto", romaji: "mai / imouto", english: "younger sister", burmese: "ညီမ", category: "family", example_jp: "妹", example_romaji: "Imouto", example_en: "younger sister", example_mm: "ညီမ" },
    { kanji: "友", pronunciation: "yuu / tomo", romaji: "yuu / tomo", english: "friend", burmese: "သူငယ်ချင်း", category: "people", example_jp: "友達", example_romaji: "Tomodachi", example_en: "friend", example_mm: "သူငယ်ချင်း" },
    { kanji: "男", pronunciation: "dan / otoko", romaji: "dan / otoko", english: "man", burmese: "ယောက်ျား", category: "people", example_jp: "男", example_romaji: "Otoko", example_en: "man", example_mm: "ယောက်ျား" },
    { kanji: "女", pronunciation: "jo / onna", romaji: "jo / onna", english: "woman", burmese: "မိန်းမ", category: "people", example_jp: "女", example_romaji: "Onna", example_en: "woman", example_mm: "မိန်းမ" },
    { kanji: "子", pronunciation: "shi / ko", romaji: "shi / ko", english: "child", burmese: "ကလေး", category: "people", example_jp: "子供", example_romaji: "Kodomo", example_en: "child", example_mm: "ကလေး" },
    { kanji: "名", pronunciation: "mei / na", romaji: "mei / na", english: "name", burmese: "အမည်", category: "people", example_jp: "名前", example_romaji: "Namae", example_en: "name", example_mm: "အမည်" },
    { kanji: "氏", pronunciation: "shi / uji", romaji: "shi / uji", english: "family name / Mr.", burmese: "မျိုးနွယ်", category: "people", example_jp: "氏名", example_romaji: "Shimei", example_en: "full name", example_mm: "အမည်အပြည့်အစုံ" },

    // ========== PLACES & BUILDINGS (101-115) ==========
    { kanji: "駅", pronunciation: "eki", romaji: "eki", english: "station", burmese: "ဘူတာ", category: "places", example_jp: "駅", example_romaji: "Eki", example_en: "station", example_mm: "ဘူတာရုံ" },
    { kanji: "空港", pronunciation: "kuukou", romaji: "kuukou", english: "airport", burmese: "လေဆိပ်", category: "places", example_jp: "空港", example_romaji: "Kuukou", example_en: "airport", example_mm: "လေဆိပ်" },
    { kanji: "港", pronunciation: "kou / minato", romaji: "kou / minato", english: "harbor / port", burmese: "ဆိပ်ကမ်း", category: "places", example_jp: "港", example_romaji: "Minato", example_en: "port", example_mm: "ဆိပ်ကမ်း" },
    { kanji: "橋", pronunciation: "kyou / hashi", romaji: "kyou / hashi", english: "bridge", burmese: "တံတား", category: "places", example_jp: "橋", example_romaji: "Hashi", example_en: "bridge", example_mm: "တံတား" },
    { kanji: "寺", pronunciation: "ji / tera", romaji: "ji / tera", english: "temple (Buddhist)", burmese: "ဘုရားကျောင်း", category: "places", example_jp: "お寺", example_romaji: "Otera", example_en: "temple", example_mm: "ဘုရားကျောင်း" },
    { kanji: "神社", pronunciation: "jinja", romaji: "jinja", english: "shrine (Shinto)", burmese: "စေတီ", category: "places", example_jp: "神社", example_romaji: "Jinja", example_en: "shrine", example_mm: "ရှင်တိုစေတီ" },
    { kanji: "城", pronunciation: "jou / shiro", romaji: "jou / shiro", english: "castle", burmese: "ရဲတိုက်", category: "places", example_jp: "城", example_romaji: "Shiro", example_en: "castle", example_mm: "ရဲတိုက်" },
    { kanji: "店", pronunciation: "ten / mise", romaji: "ten / mise", english: "shop / store", burmese: "ဆိုင်", category: "places", example_jp: "店", example_romaji: "Mise", example_en: "shop", example_mm: "ဆိုင်" },
    { kanji: "屋", pronunciation: "oku / ya", romaji: "oku / ya", english: "shop / roof", burmese: "ဆိုင် / အမိုး", category: "places", example_jp: "本屋", example_romaji: "Honya", example_en: "bookstore", example_mm: "စာအုပ်ဆိုင်" },
    { kanji: "旅館", pronunciation: "ryokan", romaji: "ryokan", english: "Japanese inn", burmese: "ဂျပန်တည်းခိုခန်း", category: "places", example_jp: "旅館", example_romaji: "Ryokan", example_en: "Japanese inn", example_mm: "ဂျပန်ဧည့်ရိပ်သာ" },
    { kanji: "病院", pronunciation: "byouin", romaji: "byouin", english: "hospital", burmese: "ဆေးရုံ", category: "places", example_jp: "病院", example_romaji: "Byouin", example_en: "hospital", example_mm: "ဆေးရုံ" },
    { kanji: "学校", pronunciation: "gakkou", romaji: "gakkou", english: "school", burmese: "ကျောင်း", category: "places", example_jp: "学校", example_romaji: "Gakkou", example_en: "school", example_mm: "ကျောင်း" },
    { kanji: "大学", pronunciation: "daigaku", romaji: "daigaku", english: "university", burmese: "တက္ကသိုလ်", category: "places", example_jp: "大学", example_romaji: "Daigaku", example_en: "university", example_mm: "တက္ကသိုလ်" },
    { kanji: "図書館", pronunciation: "toshokan", romaji: "toshokan", english: "library", burmese: "စာကြည့်တိုက်", category: "places", example_jp: "図書館", example_romaji: "Toshokan", example_en: "library", example_mm: "စာကြည့်တိုက်" },
    { kanji: "公園", pronunciation: "kouen", romaji: "kouen", english: "park", burmese: "ပန်းခြံ", category: "places", example_jp: "公園", example_romaji: "Kouen", example_en: "park", example_mm: "ပန်းခြံ" },

    // ========== FOOD & DRINK (116-125) ==========
    { kanji: "米", pronunciation: "bei / kome", romaji: "bei / kome", english: "rice", burmese: "ဆန်", category: "food", example_jp: "米", example_romaji: "Kome", example_en: "rice", example_mm: "ဆန်" },
    { kanji: "茶", pronunciation: "cha / sa", romaji: "cha / sa", english: "tea", burmese: "လက်ဖက်ရည်", category: "food", example_jp: "お茶", example_romaji: "Ocha", example_en: "tea", example_mm: "လက်ဖက်ရည်" },
    { kanji: "肉", pronunciation: "niku", romaji: "niku", english: "meat", burmese: "အသား", category: "food", example_jp: "肉", example_romaji: "Niku", example_en: "meat", example_mm: "အသား" },
    { kanji: "魚", pronunciation: "gyo / sakana", romaji: "gyo / sakana", english: "fish", burmese: "ငါး", category: "food", example_jp: "魚", example_romaji: "Sakana", example_en: "fish", example_mm: "ငါး" },
    { kanji: "卵", pronunciation: "ran / tamago", romaji: "ran / tamago", english: "egg", burmese: "ဥ", category: "food", example_jp: "卵", example_romaji: "Tamago", example_en: "egg", example_mm: "ကြက်ဥ" },
    { kanji: "野菜", pronunciation: "yasai", romaji: "yasai", english: "vegetable", burmese: "ဟင်းသီးဟင်းရွက်", category: "food", example_jp: "野菜", example_romaji: "Yasai", example_en: "vegetable", example_mm: "ဟင်းသီးဟင်းရွက်" },
    { kanji: "果物", pronunciation: "kudamono", romaji: "kudamono", english: "fruit", burmese: "သစ်သီး", category: "food", example_jp: "果物", example_romaji: "Kudamono", example_en: "fruit", example_mm: "သစ်သီး" },
    { kanji: "酒", pronunciation: "shu / sake", romaji: "shu / sake", english: "alcohol / sake", burmese: "အရက်", category: "food", example_jp: "酒", example_romaji: "Sake", example_en: "sake", example_mm: "ဆာကေး" },
    { kanji: "牛乳", pronunciation: "gyuunyuu", romaji: "gyuunyuu", english: "milk", burmese: "နွားနို့", category: "food", example_jp: "牛乳", example_romaji: "Gyuunyuu", example_en: "milk", example_mm: "နို့" },
    { kanji: "水", pronunciation: "sui / mizu", romaji: "sui / mizu", english: "water", burmese: "ရေ", category: "food", example_jp: "水", example_romaji: "Mizu", example_en: "water", example_mm: "ရေ" },

    // ========== TIME & SEASONS (126-140) ==========
    { kanji: "年", pronunciation: "nen / toshi", romaji: "nen / toshi", english: "year", burmese: "နှစ်", category: "time", example_jp: "年", example_romaji: "Toshi", example_en: "year", example_mm: "နှစ်" },
    { kanji: "月", pronunciation: "getsu / tsuki", romaji: "getsu / tsuki", english: "month / moon", burmese: "လ", category: "time", example_jp: "月", example_romaji: "Tsuki", example_en: "month", example_mm: "လ" },
    { kanji: "日", pronunciation: "nichi / hi", romaji: "nichi / hi", english: "day / sun", burmese: "နေ့", category: "time", example_jp: "日", example_romaji: "Hi", example_en: "day", example_mm: "နေ့" },
    { kanji: "週", pronunciation: "shuu", romaji: "shuu", english: "week", burmese: "အပတ်", category: "time", example_jp: "週", example_romaji: "Shuu", example_en: "week", example_mm: "အပတ်" },
    { kanji: "時", pronunciation: "ji / toki", romaji: "ji / toki", english: "time / hour", burmese: "အချိန်", category: "time", example_jp: "時", example_romaji: "Toki", example_en: "time", example_mm: "အချိန်" },
    { kanji: "分", pronunciation: "fun / pun", romaji: "fun / pun", english: "minute / part", burmese: "မိနစ်", category: "time", example_jp: "分", example_romaji: "Fun", example_en: "minute", example_mm: "မိနစ်" },
    { kanji: "秒", pronunciation: "byou", romaji: "byou", english: "second", burmese: "စက္ကန့်", category: "time", example_jp: "秒", example_romaji: "Byou", example_en: "second", example_mm: "စက္ကန့်" },
    { kanji: "今", pronunciation: "kon / ima", romaji: "kon / ima", english: "now", burmese: "အခု", category: "time", example_jp: "今", example_romaji: "Ima", example_en: "now", example_mm: "အခု" },
    { kanji: "先", pronunciation: "sen / saki", romaji: "sen / saki", english: "previous / ahead", burmese: "ရှေ့", category: "time", example_jp: "先週", example_romaji: "Senshuu", example_en: "last week", example_mm: "ပြီးခဲ့သောအပတ်" },
    { kanji: "来", pronunciation: "rai / ku", romaji: "rai / ku", english: "next / come", burmese: "လာ", category: "time", example_jp: "来年", example_romaji: "Rainen", example_en: "next year", example_mm: "လာမည့်နှစ်" },
    { kanji: "毎", pronunciation: "mai", romaji: "mai", english: "every", burmese: "တိုင်း", category: "time", example_jp: "毎日", example_romaji: "Mainichi", example_en: "every day", example_mm: "နေ့တိုင်း" },
    { kanji: "春", pronunciation: "shun / haru", romaji: "shun / haru", english: "spring", burmese: "နွေဦး", category: "time", example_jp: "春", example_romaji: "Haru", example_en: "spring", example_mm: "နွေဦးရာသီ" },
    { kanji: "夏", pronunciation: "ka / natsu", romaji: "ka / natsu", english: "summer", burmese: "နွေ", category: "time", example_jp: "夏", example_romaji: "Natsu", example_en: "summer", example_mm: "နွေရာသီ" },
    { kanji: "秋", pronunciation: "shuu / aki", romaji: "shuu / aki", english: "autumn", burmese: "ဆောင်းဦး", category: "time", example_jp: "秋", example_romaji: "Aki", example_en: "autumn", example_mm: "ဆောင်းဦးရာသီ" },
    { kanji: "冬", pronunciation: "tou / fuyu", romaji: "tou / fuyu", english: "winter", burmese: "ဆောင်း", category: "time", example_jp: "冬", example_romaji: "Fuyu", example_en: "winter", example_mm: "ဆောင်းရာသီ" },

    // ========== DIRECTION & POSITION (141-155) ==========
    { kanji: "上", pronunciation: "jou / ue", romaji: "jou / ue", english: "above / up", burmese: "အပေါ်", category: "direction", example_jp: "上", example_romaji: "Ue", example_en: "above", example_mm: "အပေါ်" },
    { kanji: "下", pronunciation: "ka / shita", romaji: "ka / shita", english: "below / down", burmese: "အောက်", category: "direction", example_jp: "下", example_romaji: "Shita", example_en: "below", example_mm: "အောက်" },
    { kanji: "右", pronunciation: "u / migi", romaji: "u / migi", english: "right", burmese: "ညာ", category: "direction", example_jp: "右", example_romaji: "Migi", example_en: "right", example_mm: "ညာ" },
    { kanji: "左", pronunciation: "sa / hidari", romaji: "sa / hidari", english: "left", burmese: "ဘယ်", category: "direction", example_jp: "左", example_romaji: "Hidari", example_en: "left", example_mm: "ဘယ်" },
    { kanji: "東", pronunciation: "tou / higashi", romaji: "tou / higashi", english: "east", burmese: "အရှေ့", category: "direction", example_jp: "東", example_romaji: "Higashi", example_en: "east", example_mm: "အရှေ့" },
    { kanji: "西", pronunciation: "sei / nishi", romaji: "sei / nishi", english: "west", burmese: "အနောက်", category: "direction", example_jp: "西", example_romaji: "Nishi", example_en: "west", example_mm: "အနောက်" },
    { kanji: "南", pronunciation: "nan / minami", romaji: "nan / minami", english: "south", burmese: "တောင်", category: "direction", example_jp: "南", example_romaji: "Minami", example_en: "south", example_mm: "တောင်" },
    { kanji: "北", pronunciation: "hoku / kita", romaji: "hoku / kita", english: "north", burmese: "မြောက်", category: "direction", example_jp: "北", example_romaji: "Kita", example_en: "north", example_mm: "မြောက်" },
    { kanji: "前", pronunciation: "zen / mae", romaji: "zen / mae", english: "front / before", burmese: "ရှေ့", category: "direction", example_jp: "前", example_romaji: "Mae", example_en: "front", example_mm: "ရှေ့" },
    { kanji: "後", pronunciation: "go / ushiro", romaji: "go / ushiro", english: "back / behind / after", burmese: "နောက်", category: "direction", example_jp: "後ろ", example_romaji: "Ushiro", example_en: "behind", example_mm: "နောက်" },
    { kanji: "中", pronunciation: "chuu / naka", romaji: "chuu / naka", english: "inside / middle", burmese: "အလယ်", category: "direction", example_jp: "中", example_romaji: "Naka", example_en: "inside", example_mm: "အတွင်း" },
    { kanji: "外", pronunciation: "gai / soto", romaji: "gai / soto", english: "outside", burmese: "အပြင်", category: "direction", example_jp: "外", example_romaji: "Soto", example_en: "outside", example_mm: "အပြင်" },
    { kanji: "間", pronunciation: "kan / aida", romaji: "kan / aida", english: "between / interval", burmese: "ကြား", category: "direction", example_jp: "間", example_romaji: "Aida", example_en: "between", example_mm: "ကြားတွင်" },
    { kanji: "所", pronunciation: "sho / tokoro", romaji: "sho / tokoro", english: "place", burmese: "နေရာ", category: "direction", example_jp: "場所", example_romaji: "Basho", example_en: "place", example_mm: "နေရာ" },
    { kanji: "道", pronunciation: "dou / michi", romaji: "dou / michi", english: "road / way", burmese: "လမ်း", category: "direction", example_jp: "道", example_romaji: "Michi", example_en: "road", example_mm: "လမ်း" },

    // ========== COLORS (156-160) ==========
    { kanji: "赤", pronunciation: "seki / aka", romaji: "seki / aka", english: "red", burmese: "အနီရောင်", category: "color", example_jp: "赤い", example_romaji: "Akai", example_en: "red", example_mm: "အနီရောင်" },
    { kanji: "青", pronunciation: "sei / ao", romaji: "sei / ao", english: "blue", burmese: "အပြာရောင်", category: "color", example_jp: "青い", example_romaji: "Aoi", example_en: "blue", example_mm: "အပြာရောင်" },
    { kanji: "白", pronunciation: "haku / shiro", romaji: "haku / shiro", english: "white", burmese: "အဖြူရောင်", category: "color", example_jp: "白い", example_romaji: "Shiroi", example_en: "white", example_mm: "အဖြူရောင်" },
    { kanji: "黒", pronunciation: "koku / kuro", romaji: "koku / kuro", english: "black", burmese: "အနက်ရောင်", category: "color", example_jp: "黒い", example_romaji: "Kuroi", example_en: "black", example_mm: "အနက်ရောင်" },
    { kanji: "黄色", pronunciation: "kiro", romaji: "kiro", english: "yellow", burmese: "အဝါရောင်", category: "color", example_jp: "黄色い", example_romaji: "Kiiroi", example_en: "yellow", example_mm: "အဝါရောင်" },

    // ========== NUMBERS & COUNTERS (161-170) ==========
    { kanji: "零", pronunciation: "rei", romaji: "rei", english: "zero", burmese: "သုည", category: "numbers", example_jp: "零", example_romaji: "Rei", example_en: "zero", example_mm: "သုည" },
    { kanji: "百", pronunciation: "hyaku", romaji: "hyaku", english: "hundred", burmese: "ရာ", category: "numbers", example_jp: "百", example_romaji: "Hyaku", example_en: "hundred", example_mm: "ရာ" },
    { kanji: "千", pronunciation: "sen", romaji: "sen", english: "thousand", burmese: "ထောင်", category: "numbers", example_jp: "千", example_romaji: "Sen", example_en: "thousand", example_mm: "ထောင်" },
    { kanji: "万", pronunciation: "man", romaji: "man", english: "ten thousand", burmese: "သောင်း", category: "numbers", example_jp: "万", example_romaji: "Man", example_en: "ten thousand", example_mm: "သောင်း" },
    { kanji: "億", pronunciation: "oku", romaji: "oku", english: "hundred million", burmese: "ရာသန်း", category: "numbers", example_jp: "億", example_romaji: "Oku", example_en: "hundred million", example_mm: "ရာသန်း" },
    { kanji: "兆", pronunciation: "chou", romaji: "chou", english: "trillion", burmese: "ထရီလီယံ", category: "numbers", example_jp: "兆", example_romaji: "Chou", example_en: "trillion", example_mm: "ထရီလီယံ" },
    { kanji: "半", pronunciation: "han / naka", romaji: "han / naka", english: "half", burmese: "တစ်ဝက်", category: "numbers", example_jp: "半分", example_romaji: "Hanbun", example_en: "half", example_mm: "တစ်ဝက်" },
    { kanji: "倍", pronunciation: "bai", romaji: "bai", english: "double / times", burmese: "ဆ", category: "numbers", example_jp: "二倍", example_romaji: "Nibai", example_en: "double", example_mm: "နှစ်ဆ" },
    { kanji: "両", pronunciation: "ryou", romaji: "ryou", english: "both", burmese: "နှစ်ဖက်စလုံး", category: "numbers", example_jp: "両方", example_romaji: "Ryouhou", example_en: "both", example_mm: "နှစ်ဖက်စလုံး" },
    { kanji: "数", pronunciation: "suu / kazu", romaji: "suu / kazu", english: "number / count", burmese: "ဂဏန်း", category: "numbers", example_jp: "数", example_romaji: "Kazu", example_en: "number", example_mm: "ဂဏန်း" },

    // ========== MISCELLANEOUS (171-200) ==========
    { kanji: "同", pronunciation: "dou / ona", romaji: "dou / ona", english: "same", burmese: "တူ", category: "misc", example_jp: "同じ", example_romaji: "Onaji", example_en: "same", example_mm: "တူညီ" },
    { kanji: "異", pronunciation: "i / koto", romaji: "i / koto", english: "different", burmese: "ကွဲပြား", category: "misc", example_jp: "異なる", example_romaji: "Kotonaru", example_en: "different", example_mm: "ကွဲပြားခြားနား" },
    { kanji: "新", pronunciation: "shin / atara", romaji: "shin / atara", english: "new", burmese: "အသစ်", category: "misc", example_jp: "新しい", example_romaji: "Atarashii", example_en: "new", example_mm: "အသစ်" },
    { kanji: "古", pronunciation: "ko / furu", romaji: "ko / furu", english: "old", burmese: "ဟောင်း", category: "misc", example_jp: "古い", example_romaji: "Furui", example_en: "old", example_mm: "ဟောင်း" },
    { kanji: "多", pronunciation: "ta / oo", romaji: "ta / oo", english: "many", burmese: "များ", category: "misc", example_jp: "多い", example_romaji: "Ooi", example_en: "many", example_mm: "များပြား" },
    { kanji: "少", pronunciation: "shou / suku", romaji: "shou / suku", english: "few", burmese: "နည်း", category: "misc", example_jp: "少ない", example_romaji: "Sukunai", example_en: "few", example_mm: "နည်းပါး" },
    { kanji: "大", pronunciation: "dai / oo", romaji: "dai / oo", english: "big", burmese: "ကြီး", category: "misc", example_jp: "大きい", example_romaji: "Ookii", example_en: "big", example_mm: "ကြီးမား" },
    { kanji: "小", pronunciation: "shou / chii", romaji: "shou / chii", english: "small", burmese: "သေး", category: "misc", example_jp: "小さい", example_romaji: "Chiisai", example_en: "small", example_mm: "သေး" },
    { kanji: "長", pronunciation: "chou / naga", romaji: "chou / naga", english: "long", burmese: "ရှည်", category: "misc", example_jp: "長い", example_romaji: "Nagai", example_en: "long", example_mm: "ရှည်" },
    { kanji: "短", pronunciation: "tan / mijika", romaji: "tan / mijika", english: "short", burmese: "တို", category: "misc", example_jp: "短い", example_romaji: "Mijikai", example_en: "short", example_mm: "တို" },
    { kanji: "高", pronunciation: "kou / taka", romaji: "kou / taka", english: "high / expensive", burmese: "မြင့် / စျေးကြီး", category: "misc", example_jp: "高い", example_romaji: "Takai", example_en: "high/expensive", example_mm: "မြင့်မား / စျေးကြီး" },
    { kanji: "安", pronunciation: "an / yasu", romaji: "an / yasu", english: "cheap", burmese: "စျေးချို", category: "misc", example_jp: "安い", example_romaji: "Yasui", example_en: "cheap", example_mm: "စျေးသက်သာ" },
    { kanji: "深", pronunciation: "shin / fuka", romaji: "shin / fuka", english: "deep", burmese: "နက်", category: "misc", example_jp: "深い", example_romaji: "Fukai", example_en: "deep", example_mm: "နက်ရှိုင်း" },
    { kanji: "浅", pronunciation: "sen / asa", romaji: "sen / asa", english: "shallow", burmese: "တိမ်", category: "misc", example_jp: "浅い", example_romaji: "Asai", example_en: "shallow", example_mm: "တိမ်" },
    { kanji: "速", pronunciation: "soku / haya", romaji: "soku / haya", english: "fast", burmese: "မြန်", category: "misc", example_jp: "速い", example_romaji: "Hayai", example_en: "fast", example_mm: "မြန်" },
    { kanji: "遅", pronunciation: "chi / oso", romaji: "chi / oso", english: "slow / late", burmese: "နှေး / နောက်ကျ", category: "misc", example_jp: "遅い", example_romaji: "Osoi", example_en: "slow/late", example_mm: "နှေး / နောက်ကျ" },
    { kanji: "明", pronunciation: "mei / aka", romaji: "mei / aka", english: "bright / clear", burmese: "တောက်", category: "misc", example_jp: "明るい", example_romaji: "Akarui", example_en: "bright", example_mm: "တောက်ပ" },
    { kanji: "暗", pronunciation: "an / kura", romaji: "an / kura", english: "dark", burmese: "မှောင်", category: "misc", example_jp: "暗い", example_romaji: "Kurai", example_en: "dark", example_mm: "မှောင်" },
    { kanji: "楽", pronunciation: "raku / tano", romaji: "raku / tano", english: "comfortable / easy", burmese: "ပျော် / လွယ်", category: "misc", example_jp: "楽しい", example_romaji: "Tanoshii", example_en: "enjoyable", example_mm: "ပျော်စရာ" },
    { kanji: "悲", pronunciation: "hi / kana", romaji: "hi / kana", english: "sad", burmese: "ဝမ်းနည်း", category: "misc", example_jp: "悲しい", example_romaji: "Kanashii", example_en: "sad", example_mm: "ဝမ်းနည်း" },
    { kanji: "喜", pronunciation: "ki / yoroko", romaji: "ki / yoroko", english: "rejoice", burmese: "ဝမ်းသာ", category: "misc", example_jp: "喜ぶ", example_romaji: "Yorokobu", example_en: "to rejoice", example_mm: "ဝမ်းသာသည်" },
    { kanji: "怒", pronunciation: "do / ika", romaji: "do / ika", english: "angry", burmese: "စိတ်ဆိုး", category: "misc", example_jp: "怒る", example_romaji: "Okoru", example_en: "to get angry", example_mm: "စိတ်ဆိုးသည်" },
    { kanji: "怖", pronunciation: "fu / kowa", romaji: "fu / kowa", english: "scary", burmese: "ကြောက်", category: "misc", example_jp: "怖い", example_romaji: "Kowai", example_en: "scary", example_mm: "ကြောက်စရာ" },
    { kanji: "疲", pronunciation: "hi / tsuka", romaji: "hi / tsuka", english: "tired", burmese: "ပင်ပန်း", category: "misc", example_jp: "疲れる", example_romaji: "Tsukareru", example_en: "to get tired", example_mm: "ပင်ပန်းသည်" },
    { kanji: "病", pronunciation: "byou / yamai", romaji: "byou / yamai", english: "sick / illness", burmese: "ဖျား", category: "misc", example_jp: "病気", example_romaji: "Byouki", example_en: "illness", example_mm: "ရောဂါ" },
    { kanji: "治", pronunciation: "chi / nao", romaji: "chi / nao", english: "heal / cure", burmese: "ကု", category: "misc", example_jp: "治す", example_romaji: "Naosu", example_en: "to cure", example_mm: "ကုသသည်" },
    { kanji: "命", pronunciation: "mei / inochi", romaji: "mei / inochi", english: "life", burmese: "အသက်", category: "misc", example_jp: "命", example_romaji: "Inochi", example_en: "life", example_mm: "အသက်" },
    { kanji: "死", pronunciation: "shi / shi", romaji: "shi / shi", english: "death", burmese: "သေ", category: "misc", example_jp: "死ぬ", example_romaji: "Shinu", example_en: "to die", example_mm: "သေသည်" },
    { kanji: "生", pronunciation: "sei / i", romaji: "sei / i", english: "life / live", burmese: "အသက် / ရှင်", category: "misc", example_jp: "生きる", example_romaji: "Ikiru", example_en: "to live", example_mm: "အသက်ရှင်" },
    { kanji: "気", pronunciation: "ki", romaji: "ki", english: "spirit / energy", burmese: "စိတ်", category: "misc", example_jp: "元気", example_romaji: "Genki", example_en: "healthy / energetic", example_mm: "ကျန်းမာ / တက်ကြွ" }
];

// ========== STATE VARIABLES ==========
let currentCategory = 'vocab';
let currentTopic = 'all';
let searchTerm = '';

// ========== HELPER FUNCTIONS ==========
function countWordsByCategory() {
    const categoryCounts = {};
    vocabularyCategories.forEach(cat => { categoryCounts[cat.id] = 0; });
    vocabularyData.forEach(word => {
        if (categoryCounts.hasOwnProperty(word.category)) categoryCounts[word.category]++;
        else categoryCounts[word.category] = (categoryCounts[word.category] || 0) + 1;
    });
    return categoryCounts;
}

function getAllCategoriesWithCounts() {
    const counts = countWordsByCategory();
    return vocabularyCategories.map(cat => ({ ...cat, count: counts[cat.id] || 0 }));
}

function speakJapanese(text) {
    if (!window.speechSynthesis) return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'ja-JP';
    utterance.rate = 0.8;
    function setJapaneseVoice() {
        const voices = window.speechSynthesis.getVoices();
        const japaneseVoice = voices.find(voice => voice.lang === 'ja-JP' || voice.lang === 'ja');
        if (japaneseVoice) utterance.voice = japaneseVoice;
        window.speechSynthesis.speak(utterance);
    }
    if (window.speechSynthesis.getVoices().length > 0) setJapaneseVoice();
    else window.speechSynthesis.onvoiceschanged = setJapaneseVoice;
}

function generateCategoryBar() {
    const categoryBar = document.getElementById('categoryBar');
    if (!categoryBar) return;
    let categories = [];
    if (currentCategory === 'vocab') categories = getAllCategoriesWithCounts();
    else if (currentCategory === 'grammar') categories = grammarCategories.map(cat => ({ ...cat, count: grammarData.filter(g => g.category === cat.id).length }));
    else categories = kanjiCategories.map(cat => ({ ...cat, count: kanjiData.filter(k => k.category === cat.id).length }));
    categoryBar.innerHTML = categories.map(cat => `<button class="category-btn ${currentTopic === cat.id ? 'active-category' : ''}" data-category="${cat.id}"><i class="fas ${cat.icon}"></i> ${cat.name}<span class="category-count">${cat.count}</span></button>`).join('');
    document.querySelectorAll('.category-btn').forEach(btn => { btn.addEventListener('click', function() { currentTopic = this.getAttribute('data-category'); generateCategoryBar(); renderFlashcards(); }); });
}

function updateCounters() {
    document.getElementById('vocabCount').textContent = vocabularyData.length;
    document.getElementById('grammarCount').textContent = grammarData.length;
    document.getElementById('kanjiCount').textContent = kanjiData.length;
    document.getElementById('vocabTabCount').textContent = vocabularyData.length;
    document.getElementById('grammarTabCount').textContent = grammarData.length;
    document.getElementById('kanjiTabCount').textContent = kanjiData.length;
}

function getFilteredItems() {
    let items = [];
    if (currentCategory === 'vocab') items = vocabularyData;
    else if (currentCategory === 'grammar') items = grammarData;
    else items = kanjiData;
    if (currentTopic !== 'all') items = items.filter(item => item.category === currentTopic);
    if (searchTerm.trim() !== '') {
        const term = searchTerm.toLowerCase();
        items = items.filter(item => {
            if (currentCategory === 'vocab') return (item.japanese?.toLowerCase().includes(term) || item.english?.toLowerCase().includes(term) || item.burmese?.toLowerCase().includes(term));
            else if (currentCategory === 'grammar') return (item.title?.toLowerCase().includes(term) || item.english?.toLowerCase().includes(term) || item.burmese?.toLowerCase().includes(term));
            else return (item.kanji?.toLowerCase().includes(term) || item.english?.toLowerCase().includes(term) || item.burmese?.toLowerCase().includes(term));
        });
    }
    return items;
}

function escapeHtml(text) { if (!text) return ''; return String(text).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;'); }

function showPDFLoadingOverlay(message = 'Generating PDF...') {
    const existingOverlay = document.getElementById('pdfLoadingOverlay');
    if (existingOverlay) existingOverlay.remove();
    const loadingDiv = document.createElement('div');
    loadingDiv.id = 'pdfLoadingOverlay';
    loadingDiv.innerHTML = `<div style="position:fixed; top:50%; left:50%; transform:translate(-50%,-50%); background:#1e3c72; color:white; padding:25px 35px; border-radius:15px; z-index:10000; text-align:center;"><i class="fas fa-spinner fa-pulse" style="font-size:40px; margin-bottom:15px; display:block"></i><p style="margin:0; font-size:16px"><strong>${message}</strong></p><p style="margin:10px 0 0 0; font-size:12px" id="pdfProgressText">Please wait...</p></div>`;
    document.body.appendChild(loadingDiv);
}

function updatePDFProgress(text) { const progressText = document.getElementById('pdfProgressText'); if (progressText) progressText.innerHTML = text; }
function hidePDFLoadingOverlay() { const overlay = document.getElementById('pdfLoadingOverlay'); if (overlay) overlay.remove(); }

async function ensureLibrariesLoaded() {
    if (typeof window.jspdf !== 'undefined' && window.jspdf.jsPDF) return true;
    await new Promise((resolve, reject) => { const script = document.createElement('script'); script.src = 'https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js'; script.onload = resolve; script.onerror = reject; document.head.appendChild(script); });
    await new Promise((resolve, reject) => { const script = document.createElement('script'); script.src = 'https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js'; script.onload = resolve; script.onerror = reject; document.head.appendChild(script); });
    await new Promise(r => setTimeout(r, 500));
    return true;
}

async function generatePDFWithHtml2Canvas(data, title, filename, getRowData, columns) {
    return new Promise(async (resolve, reject) => {
        try {
            await ensureLibrariesLoaded();
            const tempDiv = document.createElement('div');
            tempDiv.style.position = 'absolute';
            tempDiv.style.left = '-9999px';
            tempDiv.style.top = '0';
            tempDiv.style.backgroundColor = 'white';
            tempDiv.style.padding = '20px';
            tempDiv.style.width = '1100px';
            tempDiv.style.fontFamily = "'Noto Sans JP', 'Noto Sans Myanmar', 'MS Gothic', 'Meiryo', sans-serif";
            let rows = '';
            for (let i = 0; i < data.length; i++) {
                const rowData = getRowData(data[i]);
                rows += `<tr>`;
                for (let j = 0; j < columns.length; j++) {
                    let fontFamily = '';
                    if (j === 0) fontFamily = 'font-family: "Noto Sans JP", "MS Gothic", "Meiryo", monospace;';
                    if (j === 3) fontFamily = 'font-family: "Noto Sans Myanmar", "Myanmar Text", sans-serif;';
                    rows += `<td style="border:1px solid #ccc;padding:10px;font-size:11px;vertical-align:top;${fontFamily}">${escapeHtml(rowData[j] || '')}</td>`;
                }
                rows += `</tr>`;
            }
            tempDiv.innerHTML = `<div style="width:100%"><div style="text-align:center; margin-bottom:20px;"><h1 style="color:#1e3c72; margin:0 0 5px 0; font-size:22px;">🇯🇵 Next Gen Learning Myanmar - ${title}</h1><p style="margin:0; font-size:11px; color:#666;">Generated: ${new Date().toLocaleDateString()} | Total: ${data.length} items</p></div><table style="border-collapse:collapse;width:100%; font-size:12px;"><thead><tr style="background-color:#1e3c72;color:white;font-weight:bold;">${columns.map(col => `<th style="border:1px solid #1e3c72;padding:10px;text-align:left;font-size:12px;">${escapeHtml(col)}</th>`).join('')}</tr></thead><tbody>${rows}</tbody></table><div style="text-align:center; margin-top:20px; font-size:9px; color:#999;">Next Gen Learning Myanmar - Master Japanese from N5 to N1</div></div>`;
            document.body.appendChild(tempDiv);
            await new Promise(r => setTimeout(r, 300));
            const canvas = await html2canvas(tempDiv, { scale: 2, backgroundColor: '#ffffff', logging: false, useCORS: false, windowWidth: tempDiv.scrollWidth });
            const imgData = canvas.toDataURL('image/jpeg', 0.95);
            const { jsPDF } = window.jspdf;
            const doc = new jsPDF({ orientation: 'landscape', unit: 'mm', format: 'a4' });
            const imgWidth = 277;
            const imgHeight = (canvas.height * imgWidth) / canvas.width;
            let heightLeft = imgHeight;
            let position = 0;
            doc.addImage(imgData, 'JPEG', 10, position, imgWidth, imgHeight);
            heightLeft -= (doc.internal.pageSize.getHeight() - 20);
            while (heightLeft > 0) { position = heightLeft - imgHeight; doc.addPage(); doc.addImage(imgData, 'JPEG', 10, position, imgWidth, imgHeight); heightLeft -= (doc.internal.pageSize.getHeight() - 20); }
            doc.save(`${filename}.pdf`);
            tempDiv.remove();
            resolve();
        } catch (error) { console.error('PDF Generation Error:', error); reject(error); }
    });
}

async function generateVocabularyPDF() {
    if (!vocabularyData.length) { alert('No vocabulary data available.'); return; }
    showPDFLoadingOverlay('Generating Vocabulary PDF...');
    updatePDFProgress(`Processing ${vocabularyData.length} vocabulary words...`);
    try {
        await generatePDFWithHtml2Canvas(vocabularyData, 'N4 Vocabulary List', 'N4_Vocabulary_Japanese_English_Burmese', (item) => [item.japanese || '', item.romaji || '', item.english || '', item.burmese || ''], ['日本語 (Japanese)', 'Romaji', 'English', 'မြန်မာ (Burmese)']);
        hidePDFLoadingOverlay();
        alert(`✅ Successfully generated PDF with ${vocabularyData.length} vocabulary words!`);
    } catch (error) { hidePDFLoadingOverlay(); alert('Error generating PDF.'); console.error(error); }
}

async function generateGrammarPDF() {
    if (!grammarData.length) { alert('No grammar data available.'); return; }
    showPDFLoadingOverlay('Generating Grammar PDF...');
    updatePDFProgress(`Processing ${grammarData.length} grammar rules...`);
    try {
        await generatePDFWithHtml2Canvas(grammarData, 'N4 Grammar List', 'N4_Grammar_Japanese_English_Burmese', (item) => [item.title || '', item.pronunciation || '', item.english || '', item.burmese || ''], ['日本語 (Japanese Grammar)', 'Pronunciation', 'English', 'မြန်မာ (Burmese)']);
        hidePDFLoadingOverlay();
        alert(`✅ Successfully generated PDF with ${grammarData.length} grammar rules!`);
    } catch (error) { hidePDFLoadingOverlay(); alert('Error generating PDF.'); console.error(error); }
}

async function generateKanjiPDF() {
    if (!kanjiData.length) { alert('No kanji data available.'); return; }
    showPDFLoadingOverlay('Generating Kanji PDF...');
    updatePDFProgress(`Processing ${kanjiData.length} kanji characters...`);
    try {
        await generatePDFWithHtml2Canvas(kanjiData, 'N4 Kanji List', 'N4_Kanji_Japanese_English_Burmese', (item) => [item.kanji || '', item.pronunciation || '', item.english || '', item.burmese || ''], ['漢字 (Kanji)', 'Reading', 'English', 'မြန်မာ (Burmese)']);
        hidePDFLoadingOverlay();
        alert(`✅ Successfully generated PDF with ${kanjiData.length} kanji characters!`);
    } catch (error) { hidePDFLoadingOverlay(); alert('Error generating PDF.'); console.error(error); }
}

function updatePDFButtons() {
    const pdfSection = document.querySelector('.pdf-download-section');
    if (!pdfSection) return;
    pdfSection.innerHTML = '';
    if (currentCategory === 'vocab') { pdfSection.innerHTML = `<button id="downloadVocabPDF" class="pdf-download-btn"><i class="fas fa-file-pdf"></i> Download N4 Vocabulary PDF (日本語・Romaji・English・မြန်မာ)</button>`; document.getElementById('downloadVocabPDF')?.addEventListener('click', generateVocabularyPDF); }
    else if (currentCategory === 'grammar') { pdfSection.innerHTML = `<button id="downloadGrammarPDF" class="pdf-download-btn grammar-pdf"><i class="fas fa-file-pdf"></i> Download N4 Grammar PDF (日本語・Romaji・English・မြန်မာ)</button>`; document.getElementById('downloadGrammarPDF')?.addEventListener('click', generateGrammarPDF); }
    else if (currentCategory === 'kanji') { pdfSection.innerHTML = `<button id="downloadKanjiPDF" class="pdf-download-btn kanji-pdf"><i class="fas fa-file-pdf"></i> Download N4 Kanji PDF (日本語・Romaji・English・မြန်မာ)</button>`; document.getElementById('downloadKanjiPDF')?.addEventListener('click', generateKanjiPDF); }
}

function createFlashcard(item) {
    const card = document.createElement('div');
    card.className = 'flashcard';
    function speakJapaneseText(text) { if (!window.speechSynthesis) return; window.speechSynthesis.cancel(); const utterance = new SpeechSynthesisUtterance(text); utterance.lang = 'ja-JP'; utterance.rate = 0.8; function setVoice() { const voices = window.speechSynthesis.getVoices(); const japaneseVoice = voices.find(voice => voice.lang === 'ja-JP' || voice.lang === 'ja'); if (japaneseVoice) utterance.voice = japaneseVoice; window.speechSynthesis.speak(utterance); } if (window.speechSynthesis.getVoices().length > 0) setVoice(); else window.speechSynthesis.onvoiceschanged = setVoice; }
    if (currentCategory === 'vocab') {
        card.innerHTML = `<div class="flashcard-inner"><div class="flashcard-front"><div class="audio-indicator"><i class="fas fa-volume-up"></i> Click to hear</div><div class="japanese-word">${item.japanese}</div><div class="romaji">${item.romaji}</div><div class="meaning"><p class="english-mean"><strong>🇬🇧 English:</strong> ${item.english}</p><p class="burmese-mean"><strong>🇲🇲 မြန်မာ:</strong> ${item.burmese}</p></div></div><div class="flashcard-back"><div class="back-content"><h4>📖 Example Sentence</h4><div class="example"><p class="jp-ex">🇯🇵 ${item.example_jp}</p><button class="speak-example-btn" data-text="${item.example_jp.replace(/'/g, "\\'")}"><i class="fas fa-volume-up"></i> Speak Japanese</button><p class="romaji-ex">📖 ${item.example_romaji}</p><p class="en-ex">🇬🇧 ${item.example_en}</p><p class="mm-ex">🇲🇲 ${item.example_mm}</p></div><div class="instruction"><i class="fas fa-hand-pointer"></i> Click card to flip back</div></div></div></div>`;
    } else if (currentCategory === 'grammar') {
        card.innerHTML = `<div class="flashcard-inner"><div class="flashcard-front"><div class="audio-indicator"><i class="fas fa-volume-up"></i> Click to hear</div><div class="japanese-word">${item.title}</div><div class="pronunciation">${item.pronunciation}</div><div class="meaning"><p class="english-mean"><strong>🇬🇧 English:</strong> ${item.english}</p><p class="burmese-mean"><strong>🇲🇲 မြန်မာ:</strong> ${item.burmese}</p></div></div><div class="flashcard-back"><div class="back-content"><h4>📖 Example Sentence</h4><div class="example"><p class="jp-ex">🇯🇵 ${item.example_jp}</p><button class="speak-example-btn" data-text="${item.example_jp.replace(/'/g, "\\'")}"><i class="fas fa-volume-up"></i> Speak Japanese</button><p class="romaji-ex">RM ${item.example_romaji}</p><p class="en-ex">🇬🇧 ${item.example_en}</p><p class="mm-ex">🇲🇲 ${item.example_mm}</p></div><div class="instruction"><i class="fas fa-hand-pointer"></i> Click card to flip back</div></div></div></div>`;
    } else {
        card.innerHTML = `<div class="flashcard-inner"><div class="flashcard-front"><div class="audio-indicator"><i class="fas fa-volume-up"></i> Click to hear</div><div class="japanese-word" style="font-size: 3rem;">${item.kanji}</div><div class="pronunciation">${item.pronunciation}</div><div class="meaning"><p class="english-mean"><strong>🇬🇧 English:</strong> ${item.english}</p><p class="burmese-mean"><strong>🇲🇲 မြန်မာ:</strong> ${item.burmese}</p></div></div><div class="flashcard-back"><div class="back-content"><h4>📖 Example</h4><div class="example"><p class="jp-ex">🇯🇵 ${item.example_jp}</p><button class="speak-example-btn" data-text="${item.example_jp.replace(/'/g, "\\'")}"><i class="fas fa-volume-up"></i> Speak Japanese</button><p class="romaji-ex">RM ${item.example_romaji}</p><p class="en-ex">🇬🇧 ${item.example_en}</p><p class="mm-ex">🇲🇲 ${item.example_mm}</p></div><div class="instruction"><i class="fas fa-hand-pointer"></i> Click card to flip back</div></div></div></div>`;
    }
    const speakBtns = card.querySelectorAll('.speak-example-btn');
    speakBtns.forEach(btn => { btn.addEventListener('click', (e) => { e.stopPropagation(); const text = btn.getAttribute('data-text'); speakJapaneseText(text); }); });
    let isFlipped = false;
    card.addEventListener('click', (e) => { if (e.target.closest('.speak-example-btn')) return; if (!isFlipped) { if (currentCategory === 'vocab') speakJapaneseText(item.japanese); else if (currentCategory === 'grammar') speakJapaneseText(item.title); else speakJapaneseText(item.kanji); } card.classList.toggle('flipped'); isFlipped = !isFlipped; });
    return card;
}

function renderFlashcards() {
    const container = document.getElementById('flashcardContainer');
    const filteredItems = getFilteredItems();
    const resultCount = document.getElementById('resultCount');
    if (resultCount) resultCount.textContent = filteredItems.length;
    if (filteredItems.length === 0) { container.innerHTML = `<div class="empty-state"><i class="fas fa-search"></i><p>No results found for "${searchTerm}"</p><small>Try searching in English, Japanese, or Burmese</small></div>`; return; }
    container.innerHTML = '';
    filteredItems.forEach(item => { container.appendChild(createFlashcard(item)); });
}

function setupEventListeners() {
    const tabBtns = document.querySelectorAll('.tab-btn');
    tabBtns.forEach(btn => { btn.addEventListener('click', () => { tabBtns.forEach(b => b.classList.remove('active')); btn.classList.add('active'); currentCategory = btn.getAttribute('data-category'); currentTopic = 'all'; generateCategoryBar(); renderFlashcards(); updatePDFButtons(); }); });
    const searchInput = document.getElementById('searchInput'); if (searchInput) { searchInput.addEventListener('input', (e) => { searchTerm = e.target.value; renderFlashcards(); }); }
    const clearBtn = document.getElementById('clearSearch'); if (clearBtn) { clearBtn.addEventListener('click', () => { const searchInputElem = document.getElementById('searchInput'); if (searchInputElem) searchInputElem.value = ''; searchTerm = ''; renderFlashcards(); }); }
    const vocabInfoCard = document.getElementById('vocabInfoCard'); if (vocabInfoCard) vocabInfoCard.addEventListener('click', () => { document.querySelectorAll('.tab-btn')[0]?.click(); });
    const grammarInfoCard = document.getElementById('grammarInfoCard'); if (grammarInfoCard) grammarInfoCard.addEventListener('click', () => { document.querySelectorAll('.tab-btn')[1]?.click(); });
    const kanjiInfoCard = document.getElementById('kanjiInfoCard'); if (kanjiInfoCard) kanjiInfoCard.addEventListener('click', () => { document.querySelectorAll('.tab-btn')[2]?.click(); });
}

function addBackToTopButton() { if (document.querySelector('.back-to-top-btn')) return; const backToTopBtn = document.createElement('button'); backToTopBtn.className = 'back-to-top-btn'; backToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i><span>TOP</span>'; document.body.appendChild(backToTopBtn); window.addEventListener('scroll', () => { if (window.scrollY > 300) backToTopBtn.classList.add('show'); else backToTopBtn.classList.remove('show'); }); backToTopBtn.addEventListener('click', () => { window.scrollTo({ top: 0, behavior: 'smooth' }); }); }

document.addEventListener('DOMContentLoaded', () => {
    console.log('N4 Level Initializing...');
    updateCounters();
    setupEventListeners();
    generateCategoryBar();
    renderFlashcards();
    addBackToTopButton();
    updatePDFButtons();
    console.log('N4 Level Ready!');
});