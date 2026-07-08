/*
 * Contenido de árabe egipcio (masri) · Niveles A2–B1
 * Cada item: { ar: árabe, fr: franco (chat alphabet), es: español }
 * Convención franco: 2 = hamza/qaf · 3 = ayn · 7 = ḥa · kh = خ · gh = غ
 */
const LESSONS = [
  {
    id: "saludos",
    title: "Saludos y cortesía",
    icon: "👋",
    level: "A2",
    items: [
      { ar: "السلام عليكم", fr: "es-salaamu 3aleekum", es: "la paz sea contigo (saludo formal)" },
      { ar: "وعليكم السلام", fr: "we 3aleekum es-salaam", es: "y contigo la paz (respuesta)" },
      { ar: "أهلاً", fr: "ahlan", es: "hola / bienvenido" },
      { ar: "أهلاً وسهلاً", fr: "ahlan wa sahlan", es: "bienvenido" },
      { ar: "صباح الخير", fr: "saba7 el-kheer", es: "buenos días" },
      { ar: "صباح النور", fr: "saba7 en-noor", es: "buenos días (respuesta)" },
      { ar: "مساء الخير", fr: "masaa2 el-kheer", es: "buenas tardes / noches" },
      { ar: "إزيك", fr: "ezzayyak", es: "¿cómo estás? (a un hombre)" },
      { ar: "إزيك", fr: "ezzayyek", es: "¿cómo estás? (a una mujer)" },
      { ar: "عامل إيه", fr: "3aamel eh", es: "¿qué tal? (a un hombre)" },
      { ar: "أخبارك إيه", fr: "akhbaarak eh", es: "¿qué tal te va?" },
      { ar: "الحمد لله", fr: "el-7amdu lillah", es: "bien, gracias a Dios" },
      { ar: "تمام", fr: "tamaam", es: "perfecto / de acuerdo" },
      { ar: "كويس", fr: "kwayyes", es: "bien / bueno (m)" },
      { ar: "كويسة", fr: "kwayyesa", es: "bien / buena (f)" },
      { ar: "شكراً", fr: "shukran", es: "gracias" },
      { ar: "عفواً", fr: "3afwan", es: "de nada / perdón" },
      { ar: "لو سمحت", fr: "law sama7t", es: "por favor (a un hombre)" },
      { ar: "من فضلك", fr: "min fadlak", es: "por favor (a un hombre)" },
      { ar: "آسف", fr: "aasef", es: "lo siento (m)" },
      { ar: "آسفة", fr: "asfa", es: "lo siento (f)" },
      { ar: "مفيش مشكلة", fr: "mafiish mushkila", es: "no hay problema" },
      { ar: "مع السلامة", fr: "ma3a es-salaama", es: "adiós" },
      { ar: "إن شاء الله", fr: "in shaa2 allah", es: "si Dios quiere" }
    ]
  },
  {
    id: "presentarse",
    title: "Presentarse",
    icon: "🙋",
    level: "A2",
    items: [
      { ar: "اسمي", fr: "esmi", es: "mi nombre es" },
      { ar: "إيه اسمك", fr: "eh esmak", es: "¿cómo te llamas? (m)" },
      { ar: "أنا من", fr: "ana men", es: "yo soy de" },
      { ar: "إنت منين", fr: "enta meneen", es: "¿de dónde eres? (m)" },
      { ar: "أنا ساكن في", fr: "ana saaken fi", es: "yo vivo en (m)" },
      { ar: "بشتغل", fr: "bashtaghal", es: "trabajo / trabajo de" },
      { ar: "بدرس", fr: "badres", es: "estudio" },
      { ar: "عندي عشرين سنة", fr: "3andi 3eshriin sana", es: "tengo veinte años" },
      { ar: "متجوز", fr: "metgawwez", es: "casado" },
      { ar: "أعزب", fr: "a3zab", es: "soltero" },
      { ar: "بتكلم عربي شوية", fr: "batkallem 3arabi shwayya", es: "hablo un poco de árabe" },
      { ar: "مش فاهم", fr: "mesh faahem", es: "no entiendo (m)" },
      { ar: "ممكن تعيد", fr: "mumken te3iid", es: "¿puedes repetir?" },
      { ar: "ممكن تتكلم بالراحة", fr: "mumken tetkallem bel-raa7a", es: "¿puedes hablar despacio?" },
      { ar: "يعني إيه", fr: "ya3ni eh", es: "¿qué significa?" },
      { ar: "إزاي تقول", fr: "ezzaay te2ool", es: "¿cómo se dice...?" },
      { ar: "تشرفنا", fr: "tasharrafna", es: "encantado de conocerte" }
    ]
  },
  {
    id: "familia",
    title: "La familia",
    icon: "👨‍👩‍👧",
    level: "A2",
    items: [
      { ar: "عيلة", fr: "3eela", es: "familia" },
      { ar: "بابا", fr: "baba", es: "padre / papá" },
      { ar: "ماما", fr: "mama", es: "madre / mamá" },
      { ar: "أخ", fr: "akh", es: "hermano" },
      { ar: "أخت", fr: "okht", es: "hermana" },
      { ar: "ابن", fr: "ebn", es: "hijo" },
      { ar: "بنت", fr: "bent", es: "hija / chica" },
      { ar: "جوز", fr: "gooz", es: "marido" },
      { ar: "مرات", fr: "meraat", es: "esposa (de)" },
      { ar: "جد", fr: "gedd", es: "abuelo" },
      { ar: "جدة", fr: "gedda", es: "abuela" },
      { ar: "عم", fr: "3amm", es: "tío (paterno)" },
      { ar: "خال", fr: "khaal", es: "tío (materno)" },
      { ar: "ولد", fr: "walad", es: "niño / chico" },
      { ar: "عيال", fr: "3eyaal", es: "niños" },
      { ar: "صاحب", fr: "saa7eb", es: "amigo" },
      { ar: "صاحبة", fr: "sa7ba", es: "amiga" },
      { ar: "قريب", fr: "2ariib", es: "pariente / familiar" }
    ]
  },
  {
    id: "numeros",
    title: "Números y compras",
    icon: "🔢",
    level: "A2",
    items: [
      { ar: "واحد", fr: "waa7ed", es: "uno" },
      { ar: "اتنين", fr: "etneen", es: "dos" },
      { ar: "تلاتة", fr: "talaata", es: "tres" },
      { ar: "أربعة", fr: "arba3a", es: "cuatro" },
      { ar: "خمسة", fr: "khamsa", es: "cinco" },
      { ar: "ستة", fr: "setta", es: "seis" },
      { ar: "سبعة", fr: "sab3a", es: "siete" },
      { ar: "تمانية", fr: "tamanya", es: "ocho" },
      { ar: "تسعة", fr: "tes3a", es: "nueve" },
      { ar: "عشرة", fr: "3ashara", es: "diez" },
      { ar: "مية", fr: "meyya", es: "cien" },
      { ar: "نص", fr: "noss", es: "mitad / medio" },
      { ar: "بكام", fr: "bekaam", es: "¿cuánto cuesta?" },
      { ar: "ده بكام", fr: "da bekaam", es: "¿cuánto cuesta esto?" },
      { ar: "فلوس", fr: "feloos", es: "dinero" },
      { ar: "غالي", fr: "ghaali", es: "caro" },
      { ar: "رخيص", fr: "rekhiis", es: "barato" },
      { ar: "كتير", fr: "keteer", es: "mucho" },
      { ar: "شوية", fr: "shwayya", es: "poco" },
      { ar: "عايز", fr: "3aayez", es: "quiero (m)" },
      { ar: "عايزة", fr: "3ayza", es: "quiero (f)" },
      { ar: "ممكن", fr: "mumken", es: "¿se puede? / quizás" }
    ]
  },
  {
    id: "restaurante",
    title: "En el café y restaurante",
    icon: "🍽️",
    level: "A2",
    items: [
      { ar: "مطعم", fr: "mat3am", es: "restaurante" },
      { ar: "قهوة", fr: "2ahwa", es: "café (lugar / bebida)" },
      { ar: "مية", fr: "mayya", es: "agua" },
      { ar: "شاي", fr: "shaay", es: "té" },
      { ar: "عصير", fr: "3asiir", es: "zumo" },
      { ar: "أكل", fr: "akl", es: "comida" },
      { ar: "عيش", fr: "3eesh", es: "pan" },
      { ar: "لحمة", fr: "la7ma", es: "carne" },
      { ar: "فراخ", fr: "feraakh", es: "pollo" },
      { ar: "سمك", fr: "samak", es: "pescado" },
      { ar: "رز", fr: "roz", es: "arroz" },
      { ar: "سلطة", fr: "salata", es: "ensalada" },
      { ar: "فاكهة", fr: "fakha", es: "fruta" },
      { ar: "حلو", fr: "7elw", es: "dulce / rico" },
      { ar: "الحساب", fr: "el-7esaab", es: "la cuenta" },
      { ar: "عايز أطلب", fr: "3aayez atlob", es: "quiero pedir" },
      { ar: "بالهنا والشفا", fr: "bel-hana wesh-shifa", es: "¡buen provecho!" },
      { ar: "جعان", fr: "ga3aan", es: "hambriento (m)" },
      { ar: "عطشان", fr: "3atshaan", es: "sediento (m)" }
    ]
  },
  {
    id: "direcciones",
    title: "Direcciones y transporte",
    icon: "🚕",
    level: "B1",
    items: [
      { ar: "فين", fr: "feen", es: "¿dónde?" },
      { ar: "هنا", fr: "hena", es: "aquí" },
      { ar: "هناك", fr: "henaak", es: "allí" },
      { ar: "يمين", fr: "yemiin", es: "derecha" },
      { ar: "شمال", fr: "shemaal", es: "izquierda" },
      { ar: "على طول", fr: "3ala tool", es: "todo recto / directo" },
      { ar: "قريب", fr: "2orayyeb", es: "cerca" },
      { ar: "بعيد", fr: "be3iid", es: "lejos" },
      { ar: "شارع", fr: "shaare3", es: "calle" },
      { ar: "ميدان", fr: "midaan", es: "plaza" },
      { ar: "تاكسي", fr: "taksi", es: "taxi" },
      { ar: "أتوبيس", fr: "otobiis", es: "autobús" },
      { ar: "مترو", fr: "metro", es: "metro" },
      { ar: "محطة", fr: "ma7atta", es: "estación" },
      { ar: "المطار", fr: "el-mataar", es: "el aeropuerto" },
      { ar: "عربية", fr: "3arabeyya", es: "coche" },
      { ar: "إزاي أروح", fr: "ezzaay arou7", es: "¿cómo voy a...?" },
      { ar: "وقف هنا", fr: "2af hena", es: "para aquí" }
    ]
  },
  {
    id: "rutina",
    title: "Rutina y tiempo",
    icon: "⏰",
    level: "B1",
    items: [
      { ar: "النهارده", fr: "en-naharda", es: "hoy" },
      { ar: "بكرة", fr: "bokra", es: "mañana" },
      { ar: "إمبارح", fr: "embaare7", es: "ayer" },
      { ar: "دلوقتي", fr: "delwa2ti", es: "ahora" },
      { ar: "بدري", fr: "badri", es: "temprano" },
      { ar: "متأخر", fr: "met2akhar", es: "tarde" },
      { ar: "الصبح", fr: "es-sob7", es: "la mañana" },
      { ar: "بالليل", fr: "bel-leel", es: "por la noche" },
      { ar: "الساعة كام", fr: "es-saa3a kaam", es: "¿qué hora es?" },
      { ar: "باصحى", fr: "bas7a", es: "me despierto" },
      { ar: "بفطر", fr: "baftar", es: "desayuno" },
      { ar: "بروح الشغل", fr: "barou7 esh-shoghl", es: "voy al trabajo" },
      { ar: "برجع البيت", fr: "barga3 el-beet", es: "vuelvo a casa" },
      { ar: "بنام", fr: "banaam", es: "duermo" },
      { ar: "كل يوم", fr: "koll yoom", es: "cada día" },
      { ar: "أسبوع", fr: "osboo3", es: "semana" },
      { ar: "شهر", fr: "shahr", es: "mes" },
      { ar: "سنة", fr: "sana", es: "año" }
    ]
  },
  {
    id: "verbos",
    title: "Verbos comunes (presente)",
    icon: "🏃",
    level: "B1",
    items: [
      { ar: "بحب", fr: "ba7ebb", es: "me gusta / amo" },
      { ar: "بكره", fr: "bakrah", es: "odio" },
      { ar: "باكل", fr: "baakol", es: "como" },
      { ar: "بشرب", fr: "bashrab", es: "bebo" },
      { ar: "بروح", fr: "barou7", es: "voy" },
      { ar: "باجي", fr: "baagi", es: "vengo" },
      { ar: "بعمل", fr: "ba3mel", es: "hago" },
      { ar: "بقول", fr: "ba2ool", es: "digo" },
      { ar: "بشوف", fr: "bashoof", es: "veo" },
      { ar: "باسمع", fr: "basma3", es: "escucho / oigo" },
      { ar: "بعرف", fr: "ba3raf", es: "sé / conozco" },
      { ar: "بفهم", fr: "bafham", es: "entiendo" },
      { ar: "بتكلم", fr: "batkallem", es: "hablo" },
      { ar: "بقرا", fr: "ba2ra", es: "leo" },
      { ar: "بكتب", fr: "bakteb", es: "escribo" },
      { ar: "بشتري", fr: "bashteri", es: "compro" },
      { ar: "بستنى", fr: "bastanna", es: "espero" },
      { ar: "بقدر", fr: "ba2dar", es: "puedo" },
      { ar: "لازم", fr: "laazem", es: "tener que / deber" }
    ]
  },
  {
    id: "adjetivos",
    title: "Adjetivos y descripción",
    icon: "🎨",
    level: "B1",
    items: [
      { ar: "كبير", fr: "kebiir", es: "grande" },
      { ar: "صغير", fr: "soghayyar", es: "pequeño" },
      { ar: "جديد", fr: "gediid", es: "nuevo" },
      { ar: "قديم", fr: "2adiim", es: "viejo (cosas)" },
      { ar: "حلو", fr: "7elw", es: "bonito / dulce" },
      { ar: "وحش", fr: "we7esh", es: "feo / malo" },
      { ar: "جميل", fr: "gamiil", es: "hermoso" },
      { ar: "طويل", fr: "tawiil", es: "alto / largo" },
      { ar: "قصير", fr: "2osayyar", es: "bajo / corto" },
      { ar: "سهل", fr: "sahl", es: "fácil" },
      { ar: "صعب", fr: "sa3b", es: "difícil" },
      { ar: "سخن", fr: "sokhn", es: "caliente" },
      { ar: "ساقع", fr: "saa2e3", es: "frío (bebida)" },
      { ar: "نضيف", fr: "nediif", es: "limpio" },
      { ar: "تعبان", fr: "ta3baan", es: "cansado / enfermo" },
      { ar: "فرحان", fr: "far7aan", es: "feliz" },
      { ar: "زعلان", fr: "za3laan", es: "triste / enfadado" },
      { ar: "فاضي", fr: "faadi", es: "vacío / libre" },
      { ar: "مليان", fr: "malyaan", es: "lleno" }
    ]
  },
  {
    id: "clima",
    title: "El clima y la naturaleza",
    icon: "🌤️",
    level: "B1",
    items: [
      { ar: "الجو", fr: "el-gaww", es: "el clima / tiempo" },
      { ar: "حر", fr: "7arr", es: "calor" },
      { ar: "برد", fr: "bard", es: "frío" },
      { ar: "شمس", fr: "shams", es: "sol" },
      { ar: "مطر", fr: "matar", es: "lluvia" },
      { ar: "ريح", fr: "rii7", es: "viento" },
      { ar: "الجو حر", fr: "el-gaww 7arr", es: "hace calor" },
      { ar: "الجو برد", fr: "el-gaww bard", es: "hace frío" },
      { ar: "الدنيا بتمطر", fr: "ed-donya betmattar", es: "está lloviendo" },
      { ar: "سحاب", fr: "sa7aab", es: "nubes" },
      { ar: "بحر", fr: "ba7r", es: "mar" },
      { ar: "نيل", fr: "niil", es: "Nilo" },
      { ar: "صحرا", fr: "sa7ra", es: "desierto" },
      { ar: "شجرة", fr: "shagara", es: "árbol" },
      { ar: "قمر", fr: "2amar", es: "luna" },
      { ar: "نجمة", fr: "negma", es: "estrella" }
    ]
  },
  {
    id: "opiniones",
    title: "Opiniones y sentimientos",
    icon: "💬",
    level: "B1",
    items: [
      { ar: "في رأيي", fr: "fi ra2yi", es: "en mi opinión" },
      { ar: "أعتقد", fr: "a3ta2ed", es: "creo que" },
      { ar: "أظن", fr: "azonn", es: "pienso que" },
      { ar: "متأكد", fr: "met2akked", es: "seguro" },
      { ar: "طبعاً", fr: "tab3an", es: "por supuesto" },
      { ar: "أكيد", fr: "akiid", es: "claro / seguro" },
      { ar: "مستحيل", fr: "mosta7iil", es: "imposible" },
      { ar: "بصراحة", fr: "be-saraa7a", es: "sinceramente" },
      { ar: "المهم", fr: "el-mohemm", es: "lo importante" },
      { ar: "بالنسبة لي", fr: "bel-nesba li", es: "para mí / en cuanto a mí" },
      { ar: "أنا موافق", fr: "ana mwaafe2", es: "estoy de acuerdo" },
      { ar: "مش موافق", fr: "mesh mwaafe2", es: "no estoy de acuerdo" },
      { ar: "ليه", fr: "leeh", es: "¿por qué?" },
      { ar: "عشان", fr: "3ashaan", es: "porque / para" },
      { ar: "بس", fr: "bass", es: "pero / solo" },
      { ar: "يمكن", fr: "yemken", es: "puede ser" }
    ]
  },
  {
    id: "planes",
    title: "Planes y futuro",
    icon: "📅",
    level: "B1",
    items: [
      { ar: "هروح", fr: "harou7", es: "iré / voy a ir" },
      { ar: "هاعمل إيه", fr: "ha3mel eh", es: "¿qué voy a hacer?" },
      { ar: "ناوي", fr: "naawi", es: "tener intención de" },
      { ar: "نفسي", fr: "nefsi", es: "me gustaría / ojalá" },
      { ar: "ممكن نتقابل", fr: "mumken net2aabel", es: "¿podemos quedar?" },
      { ar: "إمتى", fr: "emta", es: "¿cuándo?" },
      { ar: "بعدين", fr: "ba3deen", es: "después / luego" },
      { ar: "قبل كده", fr: "2abl keda", es: "antes de eso" },
      { ar: "لسه", fr: "lessa", es: "todavía" },
      { ar: "خلاص", fr: "khalaas", es: "ya está / se acabó" },
      { ar: "يلا", fr: "yalla", es: "¡vamos!" },
      { ar: "مستني", fr: "mestanni", es: "esperando" },
      { ar: "هاسافر", fr: "hasaafer", es: "voy a viajar" },
      { ar: "إجازة", fr: "agaaza", es: "vacaciones" },
      { ar: "حفلة", fr: "7afla", es: "fiesta" }
    ]
  },
  {
    id: "conversacion",
    title: "Conversación cotidiana",
    icon: "🗣️",
    level: "B1",
    items: [
      { ar: "ممكن أسألك سؤال؟", fr: "mumken as2alak su2aal?", es: "¿puedo hacerte una pregunta?" },
      { ar: "مش فاكر", fr: "mesh faaker", es: "no me acuerdo (m)" },
      { ar: "افتكرت إن", fr: "eftakart enn", es: "creía / recordé que" },
      { ar: "على فكرة", fr: "3ala fekra", es: "por cierto" },
      { ar: "زي ما انت عارف", fr: "zayy ma enta 3aaref", es: "como ya sabes" },
      { ar: "مش مهم", fr: "mesh mohemm", es: "no importa" },
      { ar: "ماشي", fr: "maashi", es: "vale / de acuerdo" },
      { ar: "اتفقنا", fr: "etafa2na", es: "trato hecho" },
      { ar: "خليني أفكر", fr: "khalliini afakkar", es: "déjame pensar" },
      { ar: "لحظة واحدة", fr: "la7za wa7da", es: "un momento" },
      { ar: "ما تقلقش", fr: "matla2sh", es: "no te preocupes" },
      { ar: "مستني إيه؟", fr: "mestanni eh?", es: "¿a qué esperas?" },
      { ar: "زهقت", fr: "zehe2t", es: "me he aburrido / harto" },
      { ar: "بجد؟", fr: "be-gadd?", es: "¿en serio?" },
      { ar: "ربنا يخليك", fr: "rabbena ykhalliik", es: "que Dios te guarde (gracias)" },
      { ar: "ولا يهمك", fr: "wala yhemmak", es: "no te preocupes / cuenta con ello" }
    ]
  },
  {
    id: "conectores",
    title: "Conectores y matices",
    icon: "🔗",
    level: "B1",
    items: [
      { ar: "عشان كده", fr: "3ashaan keda", es: "por eso" },
      { ar: "مع إن", fr: "ma3a enn", es: "aunque" },
      { ar: "بالرغم من", fr: "bel-raghm men", es: "a pesar de" },
      { ar: "لكن", fr: "laaken", es: "pero / sin embargo" },
      { ar: "كمان", fr: "kamaan", es: "también / además" },
      { ar: "برضو", fr: "bardo", es: "también / igualmente" },
      { ar: "أول ما", fr: "awwel ma", es: "en cuanto / tan pronto como" },
      { ar: "بعد ما", fr: "ba3d ma", es: "después de que" },
      { ar: "قبل ما", fr: "2abl ma", es: "antes de que" },
      { ar: "لو", fr: "law", es: "si (condicional)" },
      { ar: "في الآخر", fr: "fel-aakher", es: "al final" },
      { ar: "على الأقل", fr: "3ala el-2all", es: "al menos" },
      { ar: "بالظبط", fr: "bezzabt", es: "exactamente" },
      { ar: "تقريباً", fr: "ta2riiban", es: "casi / aproximadamente" },
      { ar: "يعني", fr: "ya3ni", es: "o sea / es decir" },
      { ar: "المفروض", fr: "el-mafrood", es: "se supone que / debería" }
    ]
  },
  {
    id: "trabajo",
    title: "Trabajo y estudios",
    icon: "💼",
    level: "B1",
    items: [
      { ar: "شغل", fr: "shoghl", es: "trabajo" },
      { ar: "شركة", fr: "sherka", es: "empresa" },
      { ar: "مدير", fr: "mudiir", es: "jefe / director" },
      { ar: "زميل", fr: "zemiil", es: "compañero" },
      { ar: "اجتماع", fr: "egtemaa3", es: "reunión" },
      { ar: "مشروع", fr: "mashroo3", es: "proyecto" },
      { ar: "موعد", fr: "maw3ed", es: "cita / plazo" },
      { ar: "مشغول", fr: "mashghool", es: "ocupado" },
      { ar: "خلصت الشغل", fr: "khallast esh-shoghl", es: "terminé el trabajo" },
      { ar: "عندي اجتماع", fr: "3andi egtemaa3", es: "tengo una reunión" },
      { ar: "جامعة", fr: "gam3a", es: "universidad" },
      { ar: "امتحان", fr: "emte7aan", es: "examen" },
      { ar: "مذاكرة", fr: "muzakra", es: "estudio (acción)" },
      { ar: "بنجح", fr: "bangah", es: "apruebo / tengo éxito" },
      { ar: "شهادة", fr: "shahaada", es: "título / certificado" },
      { ar: "خبرة", fr: "khebra", es: "experiencia" }
    ]
  },
  {
    id: "colores",
    title: "Los colores",
    icon: "🎨",
    level: "A2",
    items: [
      { ar: "لون", fr: "loon", es: "color" },
      { ar: "أبيض", fr: "abyad", es: "blanco" },
      { ar: "إسود", fr: "eswed", es: "negro" },
      { ar: "أحمر", fr: "a7mar", es: "rojo" },
      { ar: "أزرق", fr: "azra2", es: "azul" },
      { ar: "أخضر", fr: "akhdar", es: "verde" },
      { ar: "أصفر", fr: "asfar", es: "amarillo" },
      { ar: "بني", fr: "bonni", es: "marrón" },
      { ar: "برتقاني", fr: "borto2aani", es: "naranja (color)" },
      { ar: "رمادي", fr: "romaadi", es: "gris" },
      { ar: "بمبي", fr: "bambi", es: "rosa" },
      { ar: "بنفسجي", fr: "banafsegi", es: "morado" },
      { ar: "ذهبي", fr: "dahabi", es: "dorado" },
      { ar: "فضي", fr: "faddi", es: "plateado" },
      { ar: "فاتح", fr: "faate7", es: "claro (tono)" },
      { ar: "غامق", fr: "ghaame2", es: "oscuro (tono)" },
      { ar: "ملون", fr: "melawwen", es: "de colores" },
      { ar: "شفاف", fr: "shaffaaf", es: "transparente" }
    ]
  },
  {
    id: "casa",
    title: "La casa",
    icon: "🏠",
    level: "A2",
    items: [
      { ar: "بيت", fr: "beet", es: "casa" },
      { ar: "شقة", fr: "sha22a", es: "piso / apartamento" },
      { ar: "أوضة", fr: "ooda", es: "habitación" },
      { ar: "مطبخ", fr: "matbakh", es: "cocina" },
      { ar: "حمام", fr: "7ammaam", es: "baño" },
      { ar: "صالة", fr: "saala", es: "salón" },
      { ar: "سرير", fr: "seriir", es: "cama" },
      { ar: "كرسي", fr: "korsi", es: "silla" },
      { ar: "ترابيزة", fr: "tarabeeza", es: "mesa" },
      { ar: "دولاب", fr: "dolaab", es: "armario" },
      { ar: "كنبة", fr: "kanaba", es: "sofá" },
      { ar: "تلاجة", fr: "tallaaga", es: "nevera" },
      { ar: "بوتاجاز", fr: "botagaaz", es: "cocina (fogón)" },
      { ar: "نور", fr: "noor", es: "luz" },
      { ar: "باب", fr: "baab", es: "puerta" },
      { ar: "شباك", fr: "shebbaak", es: "ventana" },
      { ar: "مفتاح", fr: "moftaa7", es: "llave" },
      { ar: "سجادة", fr: "seggaada", es: "alfombra" },
      { ar: "حيطة", fr: "7eeta", es: "pared" },
      { ar: "سلم", fr: "sellem", es: "escalera" },
      { ar: "سطح", fr: "sat7", es: "azotea" },
      { ar: "جنينة", fr: "geneena", es: "jardín" }
    ]
  },
  {
    id: "ropa",
    title: "La ropa",
    icon: "👕",
    level: "A2",
    items: [
      { ar: "هدوم", fr: "hoduum", es: "ropa (en general)" },
      { ar: "قميص", fr: "2amiis", es: "camisa" },
      { ar: "بنطلون", fr: "bantaloon", es: "pantalón" },
      { ar: "تيشيرت", fr: "tishert", es: "camiseta" },
      { ar: "جزمة", fr: "gazma", es: "zapatos" },
      { ar: "شراب", fr: "sharraab", es: "calcetines" },
      { ar: "فستان", fr: "fostaan", es: "vestido" },
      { ar: "جاكيت", fr: "jaaket", es: "chaqueta" },
      { ar: "بالطو", fr: "balto", es: "abrigo" },
      { ar: "طرحة", fr: "tar7a", es: "pañuelo / velo" },
      { ar: "نضارة", fr: "naddaara", es: "gafas" },
      { ar: "شنطة", fr: "shanta", es: "bolso" },
      { ar: "حزام", fr: "7ezaam", es: "cinturón" },
      { ar: "كاب", fr: "kaab", es: "gorra" },
      { ar: "مقاس", fr: "ma2aas", es: "talla" },
      { ar: "يلبس", fr: "yelbes", es: "ponerse / vestir" }
    ]
  },
  {
    id: "ciudad",
    title: "La ciudad y lugares",
    icon: "🏙️",
    level: "A2",
    items: [
      { ar: "مدينة", fr: "madiina", es: "ciudad" },
      { ar: "شارع", fr: "shaare3", es: "calle" },
      { ar: "ميدان", fr: "midaan", es: "plaza" },
      { ar: "كوبري", fr: "kobri", es: "puente" },
      { ar: "بنك", fr: "bank", es: "banco" },
      { ar: "مستشفى", fr: "mostashfa", es: "hospital" },
      { ar: "صيدلية", fr: "saydaleyya", es: "farmacia" },
      { ar: "محل", fr: "ma7all", es: "tienda" },
      { ar: "سوق", fr: "soo2", es: "mercado" },
      { ar: "جامع", fr: "gaame3", es: "mezquita" },
      { ar: "كنيسة", fr: "keniisa", es: "iglesia" },
      { ar: "مكتبة", fr: "maktaba", es: "biblioteca / librería" },
      { ar: "سينما", fr: "seenama", es: "cine" },
      { ar: "حديقة", fr: "7adii2a", es: "parque" },
      { ar: "محطة", fr: "ma7atta", es: "estación" },
      { ar: "مطار", fr: "mataar", es: "aeropuerto" },
      { ar: "فندق", fr: "fondo2", es: "hotel" },
      { ar: "بوستة", fr: "busta", es: "correos" }
    ]
  },
  {
    id: "animales",
    title: "Los animales",
    icon: "🐫",
    level: "A2",
    items: [
      { ar: "حيوان", fr: "7ayawaan", es: "animal" },
      { ar: "كلب", fr: "kalb", es: "perro" },
      { ar: "قطة", fr: "2otta", es: "gato" },
      { ar: "حصان", fr: "7osaan", es: "caballo" },
      { ar: "جمل", fr: "gamal", es: "camello" },
      { ar: "حمار", fr: "7omaar", es: "burro" },
      { ar: "بقرة", fr: "ba2ara", es: "vaca" },
      { ar: "خروف", fr: "kharoof", es: "cordero / oveja" },
      { ar: "فرخة", fr: "farkha", es: "gallina" },
      { ar: "عصفور", fr: "3osfoor", es: "pájaro" },
      { ar: "سمكة", fr: "samaka", es: "pez" },
      { ar: "أسد", fr: "asad", es: "león" },
      { ar: "تمساح", fr: "temsaa7", es: "cocodrilo" },
      { ar: "ثعبان", fr: "to3baan", es: "serpiente" },
      { ar: "نملة", fr: "namla", es: "hormiga" },
      { ar: "ذبابة", fr: "debbaana", es: "mosca" },
      { ar: "ناموسة", fr: "namoosa", es: "mosquito" },
      { ar: "فار", fr: "faar", es: "ratón" }
    ]
  },
  {
    id: "cuerpo",
    title: "El cuerpo y la salud",
    icon: "🩺",
    level: "A2",
    items: [
      { ar: "جسم", fr: "gesm", es: "cuerpo" },
      { ar: "راس", fr: "raas", es: "cabeza" },
      { ar: "شعر", fr: "sha3r", es: "pelo" },
      { ar: "وش", fr: "wesh", es: "cara" },
      { ar: "عين", fr: "3een", es: "ojo" },
      { ar: "ودن", fr: "wedn", es: "oreja" },
      { ar: "مناخير", fr: "manakhiir", es: "nariz" },
      { ar: "بق", fr: "bo22", es: "boca" },
      { ar: "سنان", fr: "senaan", es: "dientes" },
      { ar: "إيد", fr: "iid", es: "mano" },
      { ar: "رجل", fr: "regl", es: "pierna / pie" },
      { ar: "بطن", fr: "batn", es: "barriga" },
      { ar: "ضهر", fr: "dahr", es: "espalda" },
      { ar: "قلب", fr: "2alb", es: "corazón" },
      { ar: "دم", fr: "damm", es: "sangre" },
      { ar: "وجع", fr: "waga3", es: "dolor" },
      { ar: "صداع", fr: "sodaa3", es: "dolor de cabeza" },
      { ar: "سخونية", fr: "sokhoneyya", es: "fiebre" },
      { ar: "دكتور", fr: "doktoor", es: "médico" },
      { ar: "دوا", fr: "dawa", es: "medicina" },
      { ar: "عيان", fr: "3ayyaan", es: "enfermo" }
    ]
  },
  {
    id: "tecnologia",
    title: "Tecnología y comunicación",
    icon: "📱",
    level: "B1",
    items: [
      { ar: "موبايل", fr: "mobaayel", es: "móvil" },
      { ar: "كمبيوتر", fr: "kombyuuter", es: "ordenador" },
      { ar: "إنترنت", fr: "internet", es: "internet" },
      { ar: "شاشة", fr: "shaasha", es: "pantalla" },
      { ar: "شاحن", fr: "shaa7en", es: "cargador" },
      { ar: "بطارية", fr: "battareyya", es: "batería" },
      { ar: "تطبيق", fr: "tatbii2", es: "aplicación" },
      { ar: "رسالة", fr: "resaala", es: "mensaje" },
      { ar: "إيميل", fr: "email", es: "correo electrónico" },
      { ar: "رقم", fr: "ra2am", es: "número" },
      { ar: "كلمة السر", fr: "kelmet el-serr", es: "contraseña" },
      { ar: "واي فاي", fr: "wai fai", es: "wifi" },
      { ar: "صورة", fr: "soora", es: "foto" },
      { ar: "فيديو", fr: "vidyo", es: "vídeo" },
      { ar: "تلفزيون", fr: "telefezyoon", es: "televisión" },
      { ar: "يبعت", fr: "yeb3at", es: "enviar" },
      { ar: "يتصل", fr: "yettesel", es: "llamar (por teléfono)" },
      { ar: "زرار", fr: "zoraar", es: "botón" }
    ]
  },
  {
    id: "emociones",
    title: "Emociones y carácter",
    icon: "😊",
    level: "B1",
    items: [
      { ar: "فرحان", fr: "far7aan", es: "feliz" },
      { ar: "مبسوط", fr: "mabsuut", es: "contento" },
      { ar: "زعلان", fr: "za3laan", es: "triste / disgustado" },
      { ar: "غضبان", fr: "ghadbaan", es: "enfadado" },
      { ar: "متضايق", fr: "metdaaye2", es: "molesto / agobiado" },
      { ar: "خايف", fr: "khaayef", es: "asustado" },
      { ar: "قلقان", fr: "2al2aan", es: "preocupado" },
      { ar: "زهقان", fr: "zah2aan", es: "aburrido / harto" },
      { ar: "تعبان", fr: "ta3baan", es: "cansado" },
      { ar: "مشتاق", fr: "meshtaa2", es: "que echa de menos" },
      { ar: "طيب", fr: "tayyeb", es: "amable / bueno" },
      { ar: "شاطر", fr: "shaater", es: "listo / hábil" },
      { ar: "كسلان", fr: "kaslaan", es: "perezoso" },
      { ar: "كريم", fr: "kariim", es: "generoso" },
      { ar: "عصبي", fr: "3asabi", es: "nervioso / irascible" },
      { ar: "هادي", fr: "haadi", es: "tranquilo" },
      { ar: "خجول", fr: "khaguul", es: "tímido" },
      { ar: "لطيف", fr: "latiif", es: "simpático" }
    ]
  },
  {
    id: "verbos2",
    title: "Verbos comunes II",
    icon: "🏃",
    level: "B1",
    items: [
      { ar: "يفتح", fr: "yefta7", es: "abrir" },
      { ar: "يقفل", fr: "ye2fel", es: "cerrar" },
      { ar: "يدخل", fr: "yedkhol", es: "entrar" },
      { ar: "يخرج", fr: "yokhrog", es: "salir" },
      { ar: "يقعد", fr: "yo23od", es: "sentarse / quedarse" },
      { ar: "يقوم", fr: "ye2uum", es: "levantarse" },
      { ar: "يجري", fr: "yegri", es: "correr" },
      { ar: "يمشي", fr: "yemshi", es: "caminar / irse" },
      { ar: "يلعب", fr: "yel3ab", es: "jugar" },
      { ar: "يذاكر", fr: "yezaaker", es: "estudiar" },
      { ar: "يساعد", fr: "yesaa3ed", es: "ayudar" },
      { ar: "يسأل", fr: "yes2al", es: "preguntar" },
      { ar: "يجاوب", fr: "yegaaweb", es: "responder" },
      { ar: "يدفع", fr: "yedfa3", es: "pagar" },
      { ar: "يحاول", fr: "ye7aawel", es: "intentar" },
      { ar: "ينسى", fr: "yensa", es: "olvidar" },
      { ar: "يفتكر", fr: "yefteker", es: "recordar" },
      { ar: "يوصل", fr: "yewsal", es: "llegar" },
      { ar: "يسيب", fr: "yesiib", es: "dejar / soltar" },
      { ar: "يستعمل", fr: "yesta3mel", es: "usar" }
    ]
  },
  {
    id: "comida2",
    title: "Comida y bebida II",
    icon: "🍲",
    level: "A2",
    items: [
      { ar: "فطار", fr: "fetaar", es: "desayuno" },
      { ar: "غدا", fr: "ghada", es: "almuerzo" },
      { ar: "عشا", fr: "3asha", es: "cena" },
      { ar: "لبن", fr: "laban", es: "leche" },
      { ar: "جبنة", fr: "gebna", es: "queso" },
      { ar: "زبدة", fr: "zebda", es: "mantequilla" },
      { ar: "بيض", fr: "beed", es: "huevos" },
      { ar: "عسل", fr: "3asal", es: "miel" },
      { ar: "سكر", fr: "sokkar", es: "azúcar" },
      { ar: "ملح", fr: "mal7", es: "sal" },
      { ar: "زيت", fr: "zeet", es: "aceite" },
      { ar: "فول", fr: "fool", es: "habas (ful)" },
      { ar: "طعمية", fr: "ta3meyya", es: "falafel" },
      { ar: "كشري", fr: "koshari", es: "koshari" },
      { ar: "بطاطس", fr: "bataates", es: "patatas" },
      { ar: "طماطم", fr: "tamaatem", es: "tomates" },
      { ar: "بصل", fr: "basal", es: "cebolla" },
      { ar: "موز", fr: "mooz", es: "plátano" },
      { ar: "تفاح", fr: "toffaa7", es: "manzana" },
      { ar: "عنب", fr: "3enab", es: "uvas" },
      { ar: "مية معدنية", fr: "mayya ma3daneyya", es: "agua mineral" }
    ]
  },
  {
    id: "calendario",
    title: "Días, meses y calendario",
    icon: "📆",
    level: "A2",
    items: [
      { ar: "يوم", fr: "yoom", es: "día" },
      { ar: "أسبوع", fr: "osboo3", es: "semana" },
      { ar: "شهر", fr: "shahr", es: "mes" },
      { ar: "سنة", fr: "sana", es: "año" },
      { ar: "النهارده", fr: "en-naharda", es: "hoy" },
      { ar: "بكرة", fr: "bokra", es: "mañana" },
      { ar: "إمبارح", fr: "embaare7", es: "ayer" },
      { ar: "يوم الحد", fr: "yoom el-7add", es: "domingo" },
      { ar: "يوم الاتنين", fr: "yoom el-etneen", es: "lunes" },
      { ar: "يوم التلات", fr: "yoom el-talaat", es: "martes" },
      { ar: "يوم الأربع", fr: "yoom el-arba3", es: "miércoles" },
      { ar: "يوم الخميس", fr: "yoom el-khamiis", es: "jueves" },
      { ar: "يوم الجمعة", fr: "yoom el-gom3a", es: "viernes" },
      { ar: "يوم السبت", fr: "yoom el-sabt", es: "sábado" },
      { ar: "إجازة", fr: "agaaza", es: "vacaciones / festivo" },
      { ar: "عيد", fr: "3iid", es: "fiesta / Eid" },
      { ar: "ميعاد", fr: "mi3aad", es: "cita / hora acordada" }
    ]
  },
  {
    id: "plurales",
    title: "Plurales — lista (100)",
    icon: "👥",
    level: "B1",
    items: [
      { ar: "راجل ← رجالة", fr: "raagel → riggaala", es: "hombre → hombres" },
      { ar: "ست ← ستات", fr: "sett → settaat", es: "señora → señoras" },
      { ar: "بنت ← بنات", fr: "bent → banaat", es: "chica → chicas" },
      { ar: "ولد ← أولاد", fr: "walad → awlaad", es: "niño → niños" },
      { ar: "أخ ← إخوات", fr: "akh → ekhwaat", es: "hermano → hermanos" },
      { ar: "أخت ← أخوات", fr: "okht → akhawaat", es: "hermana → hermanas" },
      { ar: "أب ← آباء", fr: "ab → abaa2", es: "padre → padres" },
      { ar: "أم ← أمهات", fr: "omm → ommahaat", es: "madre → madres" },
      { ar: "ابن ← أبناء", fr: "ebn → abnaa2", es: "hijo → hijos" },
      { ar: "عم ← أعمام", fr: "3amm → a3maam", es: "tío → tíos" },
      { ar: "جد ← أجداد", fr: "gedd → agdaad", es: "abuelo → abuelos" },
      { ar: "صاحب ← أصحاب", fr: "saa7eb → as7aab", es: "amigo → amigos" },
      { ar: "طفل ← أطفال", fr: "tefl → atfaal", es: "niño pequeño → niños" },
      { ar: "مدرس ← مدرسين", fr: "mudarres → mudarrisiin", es: "profesor → profesores (regular)" },
      { ar: "مهندس ← مهندسين", fr: "mohandes → mohandisiin", es: "ingeniero → ingenieros (regular)" },
      { ar: "موظف ← موظفين", fr: "mowazzaf → mowazzafiin", es: "empleado → empleados (regular)" },
      { ar: "لاعب ← لاعبين", fr: "laa3eb → laa3ebiin", es: "jugador → jugadores (regular)" },
      { ar: "مصري ← مصريين", fr: "masri → masriyyiin", es: "egipcio → egipcios (regular)" },
      { ar: "دكتور ← دكاترة", fr: "doktoor → dakatra", es: "médico → médicos" },
      { ar: "أستاذ ← أساتذة", fr: "ostaaz → asatza", es: "profesor → profesores" },
      { ar: "طالب ← طلبة", fr: "taaleb → talaba", es: "estudiante → estudiantes" },
      { ar: "يوم ← أيام", fr: "yoom → ayyaam", es: "día → días" },
      { ar: "أسبوع ← أسابيع", fr: "osboo3 → asabii3", es: "semana → semanas" },
      { ar: "شهر ← شهور", fr: "shahr → shohoor", es: "mes → meses" },
      { ar: "سنة ← سنين", fr: "sana → siniin", es: "año → años" },
      { ar: "ساعة ← ساعات", fr: "saa3a → saa3aat", es: "hora → horas (regular)" },
      { ar: "دقيقة ← دقايق", fr: "de2ii2a → da2aaye2", es: "minuto → minutos" },
      { ar: "كتاب ← كتب", fr: "ketaab → kotob", es: "libro → libros" },
      { ar: "قلم ← أقلام", fr: "2alam → a2laam", es: "bolígrafo → bolígrafos" },
      { ar: "باب ← أبواب", fr: "baab → abwaab", es: "puerta → puertas" },
      { ar: "شباك ← شبابيك", fr: "shebbaak → shababiik", es: "ventana → ventanas" },
      { ar: "مفتاح ← مفاتيح", fr: "moftaa7 → mafatii7", es: "llave → llaves" },
      { ar: "كرسي ← كراسي", fr: "korsi → karaasi", es: "silla → sillas" },
      { ar: "دولاب ← دواليب", fr: "dolaab → dawaliib", es: "armario → armarios" },
      { ar: "سرير ← سراير", fr: "seriir → saraayer", es: "cama → camas" },
      { ar: "طبق ← أطباق", fr: "taba2 → atbaa2", es: "plato → platos" },
      { ar: "سكينة ← سكاكين", fr: "sekkiina → sakakiin", es: "cuchillo → cuchillos" },
      { ar: "معلقة ← معالق", fr: "ma3la2a → ma3aale2", es: "cuchara → cucharas" },
      { ar: "شنطة ← شنط", fr: "shanta → shonat", es: "bolsa → bolsas" },
      { ar: "قميص ← قمصان", fr: "2amiis → 2omsaan", es: "camisa → camisas" },
      { ar: "بنطلون ← بناطيل", fr: "bantaloon → banatiil", es: "pantalón → pantalones" },
      { ar: "جزمة ← جزم", fr: "gazma → gezam", es: "zapatos → (pares de) zapatos" },
      { ar: "فستان ← فساتين", fr: "fostaan → fasatiin", es: "vestido → vestidos" },
      { ar: "لون ← ألوان", fr: "loon → alwaan", es: "color → colores" },
      { ar: "فيلم ← أفلام", fr: "film → aflaam", es: "película → películas" },
      { ar: "صورة ← صور", fr: "soora → sowar", es: "foto → fotos" },
      { ar: "بيت ← بيوت", fr: "beet → beyuut", es: "casa → casas" },
      { ar: "شقة ← شقق", fr: "sha22a → sho2a2", es: "piso → pisos" },
      { ar: "أوضة ← أوض", fr: "ooda → owad", es: "habitación → habitaciones" },
      { ar: "مطبخ ← مطابخ", fr: "matbakh → mataabekh", es: "cocina → cocinas" },
      { ar: "مكتب ← مكاتب", fr: "maktab → makaateb", es: "oficina → oficinas" },
      { ar: "مدرسة ← مدارس", fr: "madrasa → madaares", es: "escuela → escuelas" },
      { ar: "مطعم ← مطاعم", fr: "mat3am → mataa3em", es: "restaurante → restaurantes" },
      { ar: "فندق ← فنادق", fr: "fondo2 → fanaade2", es: "hotel → hoteles" },
      { ar: "سلم ← سلالم", fr: "sellem → salaalem", es: "escalera → escaleras" },
      { ar: "حيطة ← حيطان", fr: "7eeta → 7etaan", es: "pared → paredes" },
      { ar: "سطح ← سطوح", fr: "sat7 → sotoo7", es: "azotea → azoteas" },
      { ar: "شارع ← شوارع", fr: "shaare3 → shawaare3", es: "calle → calles" },
      { ar: "ميدان ← ميادين", fr: "midaan → mayadiin", es: "plaza → plazas" },
      { ar: "كوبري ← كباري", fr: "kobri → kabaari", es: "puente → puentes" },
      { ar: "بنك ← بنوك", fr: "bank → bonook", es: "banco → bancos" },
      { ar: "جامع ← جوامع", fr: "gaame3 → gawaame3", es: "mezquita → mezquitas" },
      { ar: "كنيسة ← كنايس", fr: "keniisa → kanaayes", es: "iglesia → iglesias" },
      { ar: "مدينة ← مدن", fr: "madiina → modon", es: "ciudad → ciudades" },
      { ar: "دولة ← دول", fr: "dawla → dowal", es: "país → países" },
      { ar: "طريق ← طرق", fr: "tarii2 → toro2", es: "camino → caminos" },
      { ar: "سوق ← أسواق", fr: "soo2 → aswaa2", es: "mercado → mercados" },
      { ar: "بحر ← بحار", fr: "ba7r → be7aar", es: "mar → mares" },
      { ar: "جبل ← جبال", fr: "gabal → gibaal", es: "montaña → montañas" },
      { ar: "نهر ← أنهار", fr: "nahr → anhaar", es: "río → ríos" },
      { ar: "شجرة ← أشجار", fr: "shagara → ashgaar", es: "árbol → árboles" },
      { ar: "وردة ← ورود", fr: "warda → woruud", es: "rosa → rosas" },
      { ar: "نجمة ← نجوم", fr: "negma → negoom", es: "estrella → estrellas" },
      { ar: "كلب ← كلاب", fr: "kalb → kilaab", es: "perro → perros" },
      { ar: "قطة ← قطط", fr: "2otta → 2otat", es: "gato → gatos" },
      { ar: "جمل ← جمال", fr: "gamal → gimaal", es: "camello → camellos" },
      { ar: "حمار ← حمير", fr: "7omaar → 7omiir", es: "burro → burros" },
      { ar: "عصفور ← عصافير", fr: "3osfoor → 3asafiir", es: "pájaro → pájaros" },
      { ar: "تمساح ← تماسيح", fr: "temsaa7 → tamasii7", es: "cocodrilo → cocodrilos" },
      { ar: "فرخة ← فراخ", fr: "farkha → feraakh", es: "gallina → gallinas / pollos" },
      { ar: "سمكة ← سمك", fr: "samaka → samak", es: "pez → pescado (colectivo)" },
      { ar: "بقرة ← بقر", fr: "ba2ara → ba2ar", es: "vaca → vacas (colectivo)" },
      { ar: "عين ← عيون", fr: "3een → 3eyuun", es: "ojo → ojos" },
      { ar: "قلب ← قلوب", fr: "2alb → 2eluub", es: "corazón → corazones" },
      { ar: "راس ← روس", fr: "raas → roos", es: "cabeza → cabezas" },
      { ar: "إيد ← إيدين", fr: "iid → ideen", es: "mano → manos (dual)" },
      { ar: "رجل ← رجلين", fr: "regl → regleen", es: "pierna → piernas (dual)" },
      { ar: "كلمة ← كلمات", fr: "kelma → kelmaat", es: "palabra → palabras (regular)" },
      { ar: "حرف ← حروف", fr: "7arf → 7oroof", es: "letra → letras" },
      { ar: "رقم ← أرقام", fr: "ra2am → ar2aam", es: "número → números" },
      { ar: "سؤال ← أسئلة", fr: "so2aal → as2ela", es: "pregunta → preguntas" },
      { ar: "خبر ← أخبار", fr: "khabar → akhbaar", es: "noticia → noticias" },
      { ar: "فكرة ← أفكار", fr: "fekra → afkaar", es: "idea → ideas" },
      { ar: "حلم ← أحلام", fr: "7elm → a7laam", es: "sueño → sueños" },
      { ar: "مشكلة ← مشاكل", fr: "mushkila → mashaakel", es: "problema → problemas" },
      { ar: "درس ← دروس", fr: "dars → doruus", es: "lección → lecciones" },
      { ar: "حاجة ← حاجات", fr: "7aaga → 7agaat", es: "cosa → cosas (regular)" },
      { ar: "عربية ← عربيات", fr: "3arabeyya → 3arabeyyaat", es: "coche → coches (regular)" },
      { ar: "جواب ← جوابات", fr: "gawaab → gawabaat", es: "carta → cartas" },
      { ar: "نوع ← أنواع", fr: "noo3 → anwaa3", es: "tipo → tipos" }
    ]
  },
  {
    id: "verbos3",
    title: "Verbos comunes III",
    icon: "📋",
    level: "B1",
    items: [
      { ar: "يفكر", fr: "yefakkar", es: "pensar" },
      { ar: "يصدق", fr: "yesadda2", es: "creer" },
      { ar: "يتمنى", fr: "yetmanna", es: "desear / ojalá" },
      { ar: "يقرر", fr: "ye2arrar", es: "decidir" },
      { ar: "يشرح", fr: "yeshra7", es: "explicar" },
      { ar: "يعيد", fr: "ye3iid", es: "repetir" },
      { ar: "يكمل", fr: "yekammel", es: "continuar" },
      { ar: "يبدأ", fr: "yebda2", es: "empezar" },
      { ar: "يخلص", fr: "yekhallas", es: "terminar" },
      { ar: "يجرب", fr: "yegarrab", es: "probar / intentar" },
      { ar: "يختار", fr: "yekhtaar", es: "elegir" },
      { ar: "يبيع", fr: "yebii3", es: "vender" },
      { ar: "يحجز", fr: "ye7gez", es: "reservar" },
      { ar: "يغير", fr: "yeghayyar", es: "cambiar" },
      { ar: "يوعد", fr: "yew3ed", es: "prometer" },
      { ar: "يقابل", fr: "ye2aabel", es: "encontrarse con" },
      { ar: "يزور", fr: "yezuur", es: "visitar" },
      { ar: "يطلب", fr: "yotlob", es: "pedir" },
      { ar: "يرد", fr: "yeredd", es: "contestar / devolver" },
      { ar: "يفضل", fr: "yefaddal", es: "preferir" }
    ]
  },
  {
    id: "medico",
    title: "En el médico",
    icon: "🏥",
    level: "B1",
    items: [
      { ar: "أنا تعبان", fr: "ana ta3baan", es: "estoy enfermo" },
      { ar: "عندي صداع", fr: "3andi sodaa3", es: "tengo dolor de cabeza" },
      { ar: "عندي سخونية", fr: "3andi sokhoneyya", es: "tengo fiebre" },
      { ar: "بطني بتوجعني", fr: "batni betewga3ni", es: "me duele la barriga" },
      { ar: "عندي كحة", fr: "3andi ko77a", es: "tengo tos" },
      { ar: "محتاج دكتور", fr: "me7taag doktoor", es: "necesito un médico" },
      { ar: "فين الصيدلية؟", fr: "feen es-saydaleyya?", es: "¿dónde está la farmacia?" },
      { ar: "عايز دوا", fr: "3aayez dawa", es: "quiero medicina" },
      { ar: "خد الدوا ده", fr: "khod ed-dawa da", es: "toma esta medicina" },
      { ar: "مرتين في اليوم", fr: "marriteen fel-yoom", es: "dos veces al día" },
      { ar: "عندي حساسية", fr: "3andi 7asaseyya", es: "tengo alergia" },
      { ar: "محتاج راحة", fr: "me7taag raa7a", es: "necesito descanso" },
      { ar: "سلامتك", fr: "salamtak", es: "que te mejores (a él)" },
      { ar: "ألف سلامة", fr: "alf salaama", es: "¡que te recuperes!" },
      { ar: "إسعاف", fr: "es3aaf", es: "ambulancia" },
      { ar: "تحليل", fr: "ta7liil", es: "análisis" },
      { ar: "روشتة", fr: "roshetta", es: "receta médica" },
      { ar: "أشعة", fr: "ashe33a", es: "radiografía" }
    ]
  },
  {
    id: "compras",
    title: "De compras y regateo",
    icon: "🛍️",
    level: "B1",
    items: [
      { ar: "ده بكام؟", fr: "da bekaam?", es: "¿cuánto cuesta esto?" },
      { ar: "غالي أوي", fr: "ghaali awi", es: "es muy caro" },
      { ar: "في تخفيض؟", fr: "fiih takhfiid?", es: "¿hay descuento?" },
      { ar: "آخر كلام", fr: "aakher kalaam", es: "último precio" },
      { ar: "ممكن أقل؟", fr: "mumken a2all?", es: "¿puede ser menos?" },
      { ar: "هاخد ده", fr: "haakhod da", es: "me llevo esto" },
      { ar: "عايز أشوف", fr: "3aayez ashuuf", es: "quiero ver" },
      { ar: "عندك مقاس أكبر؟", fr: "3andak ma2aas akbar?", es: "¿tienes una talla más grande?" },
      { ar: "في كيس لو سمحت", fr: "fi kiis law sama7t", es: "en una bolsa, por favor" },
      { ar: "الفكة", fr: "el-fakka", es: "el cambio (suelto)" },
      { ar: "كاش ولا فيزا؟", fr: "kaash walla viza?", es: "¿efectivo o tarjeta?" },
      { ar: "ده كتير", fr: "da keteer", es: "es demasiado" },
      { ar: "إيصال", fr: "iisaal", es: "recibo" },
      { ar: "عروض", fr: "3oruud", es: "ofertas" },
      { ar: "مفتوح", fr: "maftuu7", es: "abierto" },
      { ar: "مقفول", fr: "ma2fuul", es: "cerrado" },
      { ar: "بلاش", fr: "balaash", es: "gratis / déjalo" },
      { ar: "حلو خالص", fr: "7elw khaales", es: "está muy bien" }
    ]
  },
  {
    id: "viajes",
    title: "Viajes y hotel",
    icon: "✈️",
    level: "B1",
    items: [
      { ar: "سفر", fr: "safar", es: "viaje" },
      { ar: "تذكرة", fr: "tazkara", es: "billete" },
      { ar: "جواز سفر", fr: "gawaaz safar", es: "pasaporte" },
      { ar: "حجز", fr: "7agz", es: "reserva" },
      { ar: "ليلة", fr: "leela", es: "noche (de estancia)" },
      { ar: "فطار متضمن؟", fr: "fetaar metdammen?", es: "¿desayuno incluido?" },
      { ar: "الطيارة", fr: "et-tayyaara", es: "el avión" },
      { ar: "القطر", fr: "el-2atr", es: "el tren" },
      { ar: "الرصيف", fr: "er-rasiif", es: "el andén" },
      { ar: "شنطة سفر", fr: "shantet safar", es: "maleta" },
      { ar: "الاستقبال", fr: "el-iste2baal", es: "recepción" },
      { ar: "خريطة", fr: "khariita", es: "mapa" },
      { ar: "بعيد عن هنا؟", fr: "be3iid 3an hena?", es: "¿está lejos de aquí?" },
      { ar: "الطريق", fr: "et-tarii2", es: "el camino" },
      { ar: "تأخير", fr: "ta2khiir", es: "retraso" },
      { ar: "رحلة سعيدة", fr: "re7la sa3iida", es: "¡buen viaje!" },
      { ar: "جمرك", fr: "gomrok", es: "aduana" },
      { ar: "تأشيرة", fr: "ta2shiira", es: "visado" }
    ]
  },
  {
    id: "deportes",
    title: "Deportes y ocio",
    icon: "⚽",
    level: "A2",
    items: [
      { ar: "رياضة", fr: "reyaada", es: "deporte" },
      { ar: "كورة", fr: "koora", es: "fútbol / balón" },
      { ar: "ماتش", fr: "match", es: "partido" },
      { ar: "فريق", fr: "farii2", es: "equipo" },
      { ar: "يكسب", fr: "yeksab", es: "ganar" },
      { ar: "يخسر", fr: "yekhsar", es: "perder" },
      { ar: "تعادل", fr: "ta3aadol", es: "empate" },
      { ar: "سباحة", fr: "sebaa7a", es: "natación" },
      { ar: "جيم", fr: "gym", es: "gimnasio" },
      { ar: "لاعب", fr: "laa3eb", es: "jugador" },
      { ar: "ملعب", fr: "mal3ab", es: "estadio / campo" },
      { ar: "تمرين", fr: "tamriin", es: "entrenamiento" },
      { ar: "هدف", fr: "hadaf", es: "gol / objetivo" },
      { ar: "بطولة", fr: "botoola", es: "campeonato" },
      { ar: "مشجع", fr: "meshagge3", es: "aficionado" },
      { ar: "موسيقى", fr: "mosii2a", es: "música" },
      { ar: "فيلم", fr: "film", es: "película" },
      { ar: "رحلة", fr: "re7la", es: "excursión" }
    ]
  },
  {
    id: "emergencias",
    title: "Emergencias y ayuda",
    icon: "🆘",
    level: "B1",
    items: [
      { ar: "النجدة", fr: "en-nagda", es: "¡socorro!" },
      { ar: "ساعدني", fr: "saa3edni", es: "ayúdame" },
      { ar: "حريقة", fr: "7arii2a", es: "incendio" },
      { ar: "حرامي", fr: "7araami", es: "ladrón" },
      { ar: "بوليس", fr: "buliis", es: "policía" },
      { ar: "إسعاف", fr: "es3aaf", es: "ambulancia" },
      { ar: "حادثة", fr: "7adsa", es: "accidente" },
      { ar: "اتصل بالبوليس", fr: "ettesel bel-buliis", es: "llama a la policía" },
      { ar: "ضاع مني", fr: "daa3 menni", es: "se me ha perdido" },
      { ar: "أنا تهت", fr: "ana toht", es: "me he perdido" },
      { ar: "محتاج مساعدة", fr: "me7taag mosa3da", es: "necesito ayuda" },
      { ar: "فين أقرب مستشفى؟", fr: "feen a2rab mostashfa?", es: "¿dónde está el hospital más cercano?" },
      { ar: "في خطر", fr: "fi khatar", es: "en peligro" },
      { ar: "بسرعة", fr: "be-sor3a", es: "¡rápido!" },
      { ar: "مستعجل", fr: "mesta3gel", es: "urgente" },
      { ar: "رقم الطوارئ", fr: "ra2am el-tawaare2", es: "número de emergencia" },
      { ar: "خد بالك", fr: "khod baalak", es: "ten cuidado" },
      { ar: "استنى", fr: "istanna", es: "espera" }
    ]
  }
];

/* =========================================================
 *  GRAMÁTICA — clases explicadas con ejercicios
 *  Cada clase: { id, title, icon, level, intro, sections[], quiz[] }
 *  section: { h: título, p: explicación (admite <b>), ex: [ejemplos] }
 *  quiz item: { q: pregunta, options: [..], answer: índice correcto, note: explicación }
 * ========================================================= */
const GRAMMAR = [
  {
    id: "raiz",
    title: "La raíz y los patrones (الجذر)",
    icon: "🌱",
    level: "A2",
    goal: "Entender la idea más importante del árabe: casi todas las palabras salen de una raíz de 3 consonantes + un molde. Reconocerla te deja adivinar familias enteras de palabras.",
    intro: "El árabe no se construye como el español. La mayoría de las palabras nacen de una <b>raíz (جذر)</b> de normalmente <b>3 consonantes</b> que lleva el significado base, más un <b>patrón o molde (وزن)</b> de vocales (a veces con prefijos/sufijos) que le da la función. <b>Cambia el molde, no la raíz.</b>",
    sections: [
      {
        h: "La raíz lleva el significado",
        p: "La raíz <b>ك-ت-ب (k-t-b)</b> tiene que ver con «escribir». Mira su familia de palabras:",
        table: {
          cols: ["Palabra", "Franco", "Significado"],
          rows: [
            ["<span class='ar' dir='rtl' lang='ar'>كتب</span>", "<span class='fr'>katab</span>", "escribió"],
            ["<span class='ar' dir='rtl' lang='ar'>بيكتب</span>", "<span class='fr'>biyiktib</span>", "escribe"],
            ["<span class='ar' dir='rtl' lang='ar'>كاتب</span>", "<span class='fr'>kaateb</span>", "escritor / escribiendo"],
            ["<span class='ar' dir='rtl' lang='ar'>مكتوب</span>", "<span class='fr'>maktoob</span>", "escrito / carta"],
            ["<span class='ar' dir='rtl' lang='ar'>كتاب</span>", "<span class='fr'>ketaab</span>", "libro"],
            ["<span class='ar' dir='rtl' lang='ar'>مكتب</span>", "<span class='fr'>maktab</span>", "oficina / escritorio"],
            ["<span class='ar' dir='rtl' lang='ar'>مكتبة</span>", "<span class='fr'>maktaba</span>", "biblioteca / librería"]
          ]
        },
        note: "Fíjate: las tres consonantes <b>k-t-b</b> están SIEMPRE y en el mismo orden. Lo que cambia son las vocales y algún prefijo (م‑)."
      },
      {
        h: "El molde da la función",
        p: "El mismo molde sobre distintas raíces da palabras del mismo «tipo». Molde <b>فاعل (faa3el)</b> = «el que hace»:",
        table: {
          cols: ["Raíz", "faa3el", "Significado"],
          rows: [
            ["k-t-b", "<span class='fr'>kaateb</span>", "escritor"],
            ["l-3-b", "<span class='fr'>laa3eb</span>", "jugador"],
            ["s-k-n", "<span class='fr'>saaken</span>", "habitante / que vive"],
            ["3-m-l", "<span class='fr'>3aamel</span>", "obrero / que hace"]
          ]
        },
        note: "Si reconoces el molde faa3el, sabes que es «quien hace la acción», aunque no conozcas la palabra."
      },
      {
        h: "Cómo «varía» la raíz",
        p: "Las consonantes se mantienen; entre ellas se insertan vocales y afijos según el molde. Raíz <b>د-ر-س (d-r-s, «estudiar»)</b>:",
        table: {
          cols: ["Palabra", "Franco", "Significado"],
          rows: [
            ["<span class='ar' dir='rtl' lang='ar'>درس</span>", "<span class='fr'>daras</span>", "estudió"],
            ["<span class='ar' dir='rtl' lang='ar'>بيدرس</span>", "<span class='fr'>biyedres</span>", "estudia"],
            ["<span class='ar' dir='rtl' lang='ar'>درس</span>", "<span class='fr'>dars</span>", "lección"],
            ["<span class='ar' dir='rtl' lang='ar'>مدرس</span>", "<span class='fr'>mudarres</span>", "profesor"],
            ["<span class='ar' dir='rtl' lang='ar'>مدرسة</span>", "<span class='fr'>madrasa</span>", "escuela"],
            ["<span class='ar' dir='rtl' lang='ar'>دروس</span>", "<span class='fr'>doruus</span>", "lecciones"]
          ]
        }
      },
      {
        h: "Las letras que forman patrones",
        p: "Ciertas letras «añadidas» a la raíz marcan casi siempre el mismo tipo de palabra. Estas son las más útiles:",
        table: {
          cols: ["Letra", "Dónde", "Suele marcar", "Ejemplo"],
          rows: [
            ["<b>ا</b>", "en medio (1º)", "faa3el · «el que hace»", "<span class='fr'>kaateb</span> escritor"],
            ["<b>م</b>", "delante", "lugar / instrumento / participio", "<span class='fr'>maktab</span> oficina"],
            ["<b>و</b>", "en medio (2º), con م", "maf3uul · participio pasivo", "<span class='fr'>maktoob</span> escrito"],
            ["<b>ة</b>", "detrás", "femenino / lugar", "<span class='fr'>maktaba</span> biblioteca"],
            ["<b>ي</b>", "en medio (2º)", "fa3iil · adjetivo / gentilicio", "<span class='fr'>kebiir</span> grande"],
            ["<b>أ</b>", "delante", "af3al · comparativo", "<span class='fr'>akbar</span> más grande"]
          ]
        },
        note: "No hace falta memorizar los nombres de los moldes; basta con reconocer que «ا en medio = el que hace» o «م delante = lugar»."
      },
      {
        h: "El prefijo م en detalle",
        p: "La <b>م</b> delante de una raíz es de lo más productivo. Según el molde exacto marca tres cosas:",
        table: {
          cols: ["Tipo", "Molde", "Ejemplos"],
          rows: [
            ["Lugar", "maf3al / maf3ala", "<span class='fr'>maktab</span> oficina · <span class='fr'>matbakh</span> cocina · <span class='fr'>madrasa</span> escuela"],
            ["Instrumento", "mif3aal", "<span class='fr'>moftaa7</span> llave · <span class='fr'>miknesa</span> escoba"],
            ["Participio pasivo", "maf3uul", "<span class='fr'>maktoob</span> escrito · <span class='fr'>mashghool</span> ocupado"]
          ]
        },
        note: "Regla mental: si una palabra empieza por م y no es un verbo, casi seguro es un lugar, un instrumento o un participio de alguna raíz.",
        refs: [{ id: "participios" }]
      },
      {
        h: "Por qué te importa",
        p: "Con la raíz entiendes de golpe: la <b>conjugación</b> (misma raíz, distintos moldes por persona y tiempo), los <b>plurales irregulares</b> (reordenan las vocales de la raíz), los <b>participios</b> (molde faa3el)… e incluso puedes <b>adivinar</b> palabras nuevas. Es la llave de todo el idioma. Y para practicarlo, prueba la <b>Fábrica de palabras</b> 🏭 (en Práctica).",
        refs: [{ id: "presente" }, { id: "plural" }, { id: "participios" }]
      }
    ],
    quiz: [
      { q: "La raíz de una palabra árabe suele tener…", options: ["3 consonantes", "3 vocales", "2 letras", "una sílaba"], answer: 0, note: "La raíz típica es de 3 consonantes." },
      { q: "¿Qué comparten katab, ketaab, maktab y kaateb?", options: ["la raíz k-t-b", "el mismo molde", "nada", "el significado exacto"], answer: 0, note: "Comparten la raíz k-t-b (escribir)." },
      { q: "En la raíz, ¿qué se mantiene siempre?", options: ["las consonantes", "las vocales", "los prefijos", "nada"], answer: 0, note: "Las consonantes de la raíz no cambian; sí las vocales." },
      { q: "El molde «faa3el» (كاتب, لاعب) significa…", options: ["el que hace la acción", "un lugar", "un plural", "un tiempo verbal"], answer: 0, note: "faa3el = «el que hace»." },
      { q: "«madrasa» y «mudarres» comparten la raíz…", options: ["د-ر-س (d-r-s)", "م-د-ر", "b-t-k", "no comparten"], answer: 0, note: "Ambas vienen de d-r-s (estudiar)." },
      { q: "Cambiar el molde cambia sobre todo…", options: ["la función gramatical", "el significado base", "la raíz", "nada"], answer: 0, note: "El molde da la función; la raíz da el significado base." },
      { q: "La raíz de «maktaba» (biblioteca) es…", options: ["k-t-b", "m-k-t", "b-t-k", "m-t-b"], answer: 0, note: "maktaba viene de k-t-b." },
      { q: "¿Puedes intuir el sentido de una palabra por su raíz?", options: ["Sí, la raíz da el significado base", "No, es imposible", "Solo con vocales", "Solo en plural"], answer: 0, note: "Reconocer la raíz te da el campo de significado." },
      { q: "La letra م delante de una raíz suele marcar…", options: ["lugar / instrumento / participio", "un plural", "el femenino", "el pasado"], answer: 0, note: "م → maktab (lugar), moftaa7 (instrumento), maktoob (participio)." },
      { q: "«maktoob» (con م + و) es un…", options: ["participio pasivo (maf3uul)", "lugar", "plural", "comparativo"], answer: 0, note: "م…و = molde maf3uul: «escrito»." },
      { q: "La ة detrás suele marcar…", options: ["femenino o lugar", "plural masculino", "comparativo", "pasado"], answer: 0, note: "ة → maktaba (biblioteca, lugar), kaatba (escritora, fem.)." }
    ]
  },
  {
    id: "definido",
    title: "Nombre definido e indefinido",
    icon: "🎯",
    level: "A2",
    goal: "Distinguir cuándo un nombre es definido o indefinido — una distinción que decide reglas como si lleva اللي o cómo va la posesión.",
    intro: "En árabe un nombre es <b>definido</b> («el/la…», algo concreto y conocido) o <b>indefinido</b> («un/una…», algo general). No existe artículo «un/una»: la indefinición es simplemente la <b>ausencia</b> de marcas de definición.",
    sections: [
      {
        h: "Qué hace DEFINIDO a un nombre",
        p: "Un nombre es definido si tiene una de estas marcas:",
        table: {
          cols: ["Marca", "Ejemplo", "Significado"],
          rows: [
            ["Artículo الـ", "<span class='ar' dir='rtl' lang='ar'>البيت</span> <span class='fr'>el-beet</span>", "la casa"],
            ["Sufijo posesivo", "<span class='ar' dir='rtl' lang='ar'>بيتي</span> <span class='fr'>beeti</span>", "mi casa"],
            ["إضافة (posesión)", "<span class='ar' dir='rtl' lang='ar'>بيت أحمد</span> <span class='fr'>beet a7mad</span>", "la casa de Ahmad"],
            ["Nombre propio", "<span class='ar' dir='rtl' lang='ar'>أحمد</span> <span class='fr'>a7mad</span>", "Ahmad"],
            ["Demostrativo", "<span class='ar' dir='rtl' lang='ar'>البيت ده</span> <span class='fr'>el-beet da</span>", "esta casa"]
          ]
        }
      },
      {
        h: "Indefinido = sin ninguna marca",
        p: "Si no lleva nada de lo anterior, es indefinido. No se añade «un/una».",
        ex: [
          { ar: "بيت", fr: "beet", es: "una casa / casa" },
          { ar: "كتاب", fr: "ketaab", es: "un libro" },
          { ar: "عندي عربية", fr: "3andi 3arabeyya", es: "tengo un coche" }
        ],
        note: "«un libro» = ketaab, no «waa7ed ketaab». El número «uno» solo se usa para enfatizar la cantidad."
      },
      {
        h: "Por qué importa",
        p: "La definición decide varias reglas que ya has visto en la guía:",
        ex: [
          { ar: "الراجل اللي جه", fr: "er-raagel elli geh", es: "el hombre que vino (definido → lleva اللي)" },
          { ar: "راجل جه", fr: "raagel geh", es: "un hombre que vino (indefinido → SIN اللي)" }
        ],
        warn: "El relativo <b>اللي</b> solo aparece con antecedente <b>definido</b>. Con uno indefinido, se omite.",
        refs: [{ id: "articulo" }, { id: "relativo" }, { id: "genitivo" }]
      }
    ],
    quiz: [
      { q: "«un libro» en árabe =", options: ["ketaab", "waa7ed ketaab", "el-ketaab", "ketaab waa7ed"], answer: 0, note: "No hay «un/una»: solo ketaab." },
      { q: "¿Qué hace definido a un nombre?", options: ["الـ, posesivo, إضافة, propio o demostrativo", "solo el plural", "nada, siempre es indefinido", "el número uno"], answer: 0, note: "Cualquiera de esas marcas lo define." },
      { q: "بيتي (mi casa) es…", options: ["definido", "indefinido", "plural", "colectivo"], answer: 0, note: "El sufijo posesivo lo hace definido." },
      { q: "¿Existe artículo «un/una» en árabe?", options: ["No: indefinido = ausencia de marcas", "Sí, es «waa7ed»", "Sí, es الـ", "Solo en plural"], answer: 0, note: "La indefinición es la falta de marcas." },
      { q: "«el hombre que vino» lleva اللي porque el antecedente es…", options: ["definido", "indefinido", "plural", "femenino"], answer: 0, note: "اللي pide antecedente definido." },
      { q: "«un hombre que vino» =", options: ["raagel geh", "raagel elli geh", "er-raagel geh", "el-raagel elli geh"], answer: 0, note: "Indefinido → sin اللي: raagel geh." },
      { q: "بيت أحمد (la casa de Ahmad) es…", options: ["definido (por la إضافة)", "indefinido", "colectivo", "dual"], answer: 0, note: "La إضافة con nombre propio lo hace definido." },
      { q: "البيت ده es…", options: ["definido", "indefinido", "un plural", "un verbo"], answer: 0, note: "Artículo + demostrativo → definido." }
    ]
  },
  {
    id: "resumptivo",
    title: "El pronombre de recuerdo (resumptivo)",
    icon: "🔁",
    level: "B1",
    goal: "Entender el «pronombre de recuerdo»: un pronombre que retoma un nombre ya mencionado. Aparece en las relativas y en frases con tema destacado.",
    prereq: ["definido"],
    intro: "En árabe, cuando un nombre es el <b>objeto</b> de una frase relativa (o el tema del que se habla), se «recuerda» con un <b>pronombre</b> pegado al verbo o a la preposición. En español ese pronombre no se dice; en árabe sí. Es el <b>pronombre de recuerdo (resumptivo)</b>.",
    sections: [
      {
        h: "En la frase relativa",
        p: "«el libro que leí» → en árabe, literalmente «el libro que <b>lo</b> leí». El ‑u («lo») retoma «el libro».",
        ex: [
          { ar: "الكتاب اللي قريته", fr: "el-ketaab elli 2areetu", es: "el libro que leí (lit. que lo leí)" },
          { ar: "البنت اللي شفتها", fr: "el-bent elli shoftaha", es: "la chica que vi (que la vi)" },
          { ar: "الأكل اللي عملته", fr: "el-akl elli 3ameltu", es: "la comida que hice (que la hice)" }
        ],
        note: "El pronombre concuerda con el nombre: ‑u (masc.), ‑ha (fem.), ‑hom (plural)."
      },
      {
        h: "Con preposición",
        p: "Si el nombre va con preposición, el pronombre se pega a la preposición.",
        ex: [
          { ar: "البيت اللي ساكن فيه", fr: "el-beet elli saaken fiih", es: "la casa en la que vivo (lit. que vivo en-ella)" },
          { ar: "الراجل اللي بتكلم معاه", fr: "er-raagel elli batkallem ma3aah", es: "el hombre con el que hablo" }
        ]
      },
      {
        h: "Cuándo NO aparece",
        p: "Si el nombre es el <b>sujeto</b> de la relativa (el que hace la acción), no hace falta pronombre de recuerdo.",
        ex: [
          { ar: "الراجل اللي جه", fr: "er-raagel elli geh", es: "el hombre que vino (él es el sujeto → sin pronombre)" },
          { ar: "الناس اللي بيشتغلو هنا", fr: "en-naas elli biyeshtaghalu hena", es: "la gente que trabaja aquí" }
        ],
        note: "Regla práctica: si en español dirías «que LO/LA/LES…», en árabe hace falta el pronombre; si dirías solo «que…» (sujeto), no.",
        refs: [{ id: "relativo" }, { id: "objeto" }, { id: "definido" }]
      }
    ],
    quiz: [
      { q: "«el libro que leí» =", options: ["el-ketaab elli 2areetu", "el-ketaab elli 2areet", "ketaab elli 2areetu", "el-ketaab 2areetu"], answer: 0, note: "Con pronombre de recuerdo ‑u: 2areetu." },
      { q: "El pronombre de recuerdo retoma…", options: ["un nombre ya mencionado", "un verbo", "una preposición sola", "nada"], answer: 0, note: "«Recuerda» al nombre antecedente." },
      { q: "«la chica que vi» =", options: ["el-bent elli shoftaha", "el-bent elli shoft", "el-bent elli shoftu", "bent elli shoftaha"], answer: 0, note: "Femenino → ‑ha: shoftaha." },
      { q: "Concuerda con el nombre; femenino →", options: ["‑ha", "‑u", "‑hom", "‑ak"], answer: 0, note: "‑ha para femenino." },
      { q: "«la casa en la que vivo» =", options: ["el-beet elli saaken fiih", "el-beet elli saaken", "el-beet elli fiih saaken", "beet elli saaken fiih"], answer: 0, note: "Con preposición: … fiih (en-ella)." },
      { q: "¿Cuándo NO hace falta el pronombre?", options: ["cuando el nombre es el sujeto de la relativa", "siempre hace falta", "nunca hace falta", "solo en plural"], answer: 0, note: "Si es el sujeto, no se recuerda." },
      { q: "«el hombre que vino» =", options: ["er-raagel elli geh", "er-raagel elli gehu", "er-raagel elli geh-ha", "raagel elli geh"], answer: 0, note: "Sujeto → sin pronombre: geh." },
      { q: "Regla práctica: hace falta el pronombre si en español dirías…", options: ["«que LO/LA…»", "«que…» (sujeto)", "«el/la…»", "«y…»"], answer: 0, note: "«que lo/la/les» → pronombre en árabe." }
    ]
  },
  {
    id: "nominal",
    title: "La frase nominal (sin «ser»)",
    icon: "🟰",
    level: "A2",
    goal: "Entender que en presente el árabe NO usa el verbo «ser/estar»: se juntan sujeto y predicado directamente.",
    intro: "En presente, el árabe forma frases <b>sin verbo «ser/estar»</b>. Simplemente pones el <b>tema</b> y lo que dices de él: «ana taaleb» = «yo (soy) estudiante».",
    sections: [
      {
        h: "Sujeto + predicado, sin «ser»",
        p: "Nada de verbo en presente: se juntan directamente.",
        ex: [
          { ar: "أنا طالب", fr: "ana taaleb", es: "(yo) soy estudiante" },
          { ar: "البيت كبير", fr: "el-beet kebiir", es: "la casa es grande" },
          { ar: "هو في البيت", fr: "howwa fel-beet", es: "él está en casa" },
          { ar: "الجو حلو", fr: "el-gaww 7elw", es: "el tiempo está bueno" }
        ]
      },
      {
        h: "El pasado y el futuro SÍ llevan كان",
        p: "Solo fuera del presente aparece el verbo <b>كان (kaan)</b> «ser/estar».",
        ex: [
          { ar: "كنت تعبان", fr: "kont ta3baan", es: "estaba cansado" },
          { ar: "هيكون كبير", fr: "haykuun kebiir", es: "será grande" }
        ],
        note: "Presente = sin verbo. Pasado → كان (kaan) · futuro → هيكون (haykuun)."
      },
      {
        h: "El tema destacado (topicalización)",
        p: "A veces se pone un nombre al principio como tema y se comenta con un <b>pronombre de recuerdo</b>:",
        ex: [
          { ar: "البيت ده، لونه أحمر", fr: "el-beet da, lonu a7mar", es: "esta casa, su color es rojo" }
        ],
        refs: [{ id: "haber" }, { id: "resumptivo" }]
      }
    ],
    quiz: [
      { q: "«yo soy estudiante» =", options: ["ana taaleb", "ana bakuun taaleb", "ana kont taaleb", "ana biykuun taaleb"], answer: 0, note: "Presente sin «ser»: ana taaleb." },
      { q: "En presente, el verbo «ser/estar»…", options: ["no se dice", "es «kaan»", "es «biykuun»", "es «yekuun»"], answer: 0, note: "En presente no aparece." },
      { q: "«la casa es grande» =", options: ["el-beet kebiir", "el-beet biykuun kebiir", "el-beet kaan kebiir", "el-beet howwa kebiir"], answer: 0, note: "Frase nominal: el-beet kebiir." },
      { q: "«estaba cansado» (pasado) =", options: ["kont ta3baan", "ana ta3baan", "hakuun ta3baan", "bakuun ta3baan"], answer: 0, note: "Pasado → كان: kont ta3baan." },
      { q: "El pasado de «ser» es…", options: ["كان (kaan)", "بيكون (biykuun)", "هيكون (haykuun)", "no existe"], answer: 0, note: "kaan es el pasado de «ser/estar»." },
      { q: "«él está en casa» =", options: ["howwa fel-beet", "howwa biykuun fel-beet", "howwa kaan fel-beet", "howwa yekuun fel-beet"], answer: 0, note: "Presente sin verbo: howwa fel-beet." }
    ]
  },
  {
    id: "articulo",
    title: 'El artículo "EL" (الـ)',
    icon: "📌",
    level: "A2",
    intro: "En árabe solo existe el artículo determinado الـ (el-), que equivale a «el / la / los / las». No hay artículo indeterminado: «un libro» es simplemente كتاب (ketaab).",
    sections: [
      {
        h: "Se pega a la palabra",
        p: "El artículo الـ se escribe unido al sustantivo y se pronuncia <b>el-</b> (a veces <b>il-</b>).",
        ex: [
          { ar: "بيت", fr: "beet", es: "(una) casa" },
          { ar: "البيت", fr: "el-beet", es: "la casa" },
          { ar: "ولد", fr: "walad", es: "(un) niño" },
          { ar: "الولد", fr: "el-walad", es: "el niño" }
        ]
      },
      {
        h: "Letras lunares → se oye la «l»",
        p: "Con las <b>letras lunares</b> (b, g, 7, kh, 3, gh, f, 2, k, m, h, w, y) la «l» del artículo se pronuncia con claridad.",
        ex: [
          { ar: "القمر", fr: "el-2amar", es: "la luna" },
          { ar: "الكتاب", fr: "el-ketaab", es: "el libro" },
          { ar: "البنت", fr: "el-bent", es: "la chica" },
          { ar: "الجو", fr: "el-gaww", es: "el clima" }
        ]
      },
      {
        h: "Letras solares → la «l» se asimila",
        p: "Con las <b>letras solares</b> (t, d, r, z, s, sh, n, l y las enfáticas) la «l» desaparece y se <b>duplica</b> la consonante siguiente. Se escribe igual, pero cambia el sonido.",
        ex: [
          { ar: "الشمس", fr: "esh-shams", es: "el sol (¡no «el-shams»!)" },
          { ar: "الراجل", fr: "er-raagel", es: "el hombre" },
          { ar: "السلطة", fr: "es-salata", es: "la ensalada" },
          { ar: "الدنيا", fr: "ed-donya", es: "el mundo / la vida" }
        ]
      }
    ],
    quiz: [
      { q: "«el sol» — الشمس se pronuncia…", options: ["esh-shams", "el-shams"], answer: 0, note: "ش es letra solar: la «l» se asimila → esh-shams." },
      { q: "«la luna» — القمر se pronuncia…", options: ["el-2amar", "e2-2amar"], answer: 0, note: "ق es letra lunar: se oye la «l» → el-2amar." },
      { q: "«el hombre» — الراجل se pronuncia…", options: ["er-raagel", "el-raagel"], answer: 0, note: "ر es solar → er-raagel." },
      { q: "«la casa» — البيت se pronuncia…", options: ["el-beet", "eb-beet"], answer: 0, note: "ب es lunar → el-beet." },
      { q: "¿Cómo se dice «un libro» (indeterminado)?", options: ["ketaab", "el-ketaab"], answer: 0, note: "No hay artículo indeterminado: «un libro» = ketaab (sin الـ)." }
    ]
  },
  {
    id: "adverbios",
    title: "Los adverbios",
    icon: "⚡",
    level: "B1",
    intro: "Los adverbios en egipcio no cambian de forma. Muchos de modo se forman con بـ (be-) + un sustantivo, como بسرعة (be-sor3a) «rápidamente».",
    sections: [
      {
        h: "De tiempo (¿cuándo?)",
        p: "Indican el momento de la acción.",
        ex: [
          { ar: "دلوقتي", fr: "delwa2ti", es: "ahora" },
          { ar: "دايماً", fr: "dayman", es: "siempre" },
          { ar: "أبداً", fr: "abadan", es: "nunca / jamás" },
          { ar: "لسه", fr: "lessa", es: "todavía / recién" },
          { ar: "بعدين", fr: "ba3deen", es: "luego / después" },
          { ar: "بدري", fr: "badri", es: "temprano" }
        ]
      },
      {
        h: "De lugar (¿dónde?)",
        p: "Indican la posición.",
        ex: [
          { ar: "هنا", fr: "hena", es: "aquí" },
          { ar: "هناك", fr: "henaak", es: "allí" },
          { ar: "فوق", fr: "foo2", es: "arriba / encima" },
          { ar: "تحت", fr: "ta7t", es: "abajo / debajo" },
          { ar: "جوه", fr: "gowwa", es: "dentro" },
          { ar: "برّه", fr: "barra", es: "fuera" }
        ]
      },
      {
        h: "De modo (¿cómo?) — con بـ",
        p: "Muchos se forman con <b>بـ (be-)</b> + sustantivo.",
        ex: [
          { ar: "بسرعة", fr: "be-sor3a", es: "rápidamente" },
          { ar: "بالراحة", fr: "bel-raa7a", es: "despacio / con calma" },
          { ar: "كويس", fr: "kwayyes", es: "bien" },
          { ar: "سوا", fr: "sawa", es: "juntos" }
        ]
      },
      {
        h: "De cantidad",
        p: "Ojo: <b>قوي (awi) «muy» va SIEMPRE detrás</b> de la palabra a la que modifica.",
        ex: [
          { ar: "قوي", fr: "awi", es: "muy (va detrás)" },
          { ar: "كتير", fr: "keteer", es: "mucho" },
          { ar: "شوية", fr: "shwayya", es: "un poco" },
          { ar: "خالص", fr: "khaales", es: "del todo / para nada" }
        ]
      }
    ],
    quiz: [
      { q: "«muy bueno» =", options: ["kwayyes awi", "awi kwayyes"], answer: 0, note: "«awi» (muy) va DETRÁS del adjetivo: kwayyes awi." },
      { q: "«despacio, por favor» =", options: ["bel-raa7a law sama7t", "be-sor3a law sama7t"], answer: 0, note: "bel-raa7a = despacio; be-sor3a = rápido." },
      { q: "«todavía» =", options: ["lessa", "dayman"], answer: 0, note: "lessa = todavía; dayman = siempre." },
      { q: "«fuera hace frío» → «fuera» =", options: ["barra", "gowwa"], answer: 0, note: "barra = fuera; gowwa = dentro." },
      { q: "«nunca» =", options: ["abadan", "dayman"], answer: 0, note: "abadan = nunca; dayman = siempre." }
    ]
  },
  {
    id: "preposiciones",
    title: "Preposiciones: durante · desde · hacia · para · por",
    icon: "➡️",
    level: "B1",
    intro: "Una misma preposición española puede traducirse de varias formas según el sentido. Estas son las claves en egipcio.",
    sections: [
      {
        h: "DESDE — من (men)",
        p: "Origen en el tiempo o el espacio. «desde… hasta» = <b>من… لـ (men… le)</b>.",
        ex: [
          { ar: "من إمبارح", fr: "men embaare7", es: "desde ayer" },
          { ar: "من الصبح", fr: "men es-sob7", es: "desde la mañana" },
          { ar: "من هنا لهناك", fr: "men hena le-henaak", es: "desde aquí hasta allí" },
          { ar: "أنا من إسبانيا", fr: "ana men esbanya", es: "soy de España" }
        ]
      },
      {
        h: "DURANTE — طول / خلال / لمدة",
        p: "<b>طول (tool)</b> = a lo largo de todo · <b>خلال (khilaal)</b> = en el transcurso de · <b>لمدة (le-moddet)</b> = por un periodo de.",
        ex: [
          { ar: "طول اليوم", fr: "tool el-yoom", es: "durante todo el día" },
          { ar: "خلال الأسبوع", fr: "khilaal el-osboo3", es: "durante la semana" },
          { ar: "لمدة ساعة", fr: "le-moddet saa3a", es: "durante una hora" },
          { ar: "طول الوقت", fr: "tool el-wa2t", es: "todo el tiempo" }
        ]
      },
      {
        h: "HACIA — ناحية / على",
        p: "Dirección. <b>ناحية (naa7yet)</b> = hacia el lado de; también <b>على (3ala)</b> / لـ para «a».",
        ex: [
          { ar: "ناحية الميدان", fr: "naa7yet el-midaan", es: "hacia la plaza" },
          { ar: "روح ناحية اليمين", fr: "rou7 naa7yet el-yemiin", es: "ve hacia la derecha" },
          { ar: "رايح على البيت", fr: "raaye7 3ala el-beet", es: "voy hacia/a casa" }
        ]
      },
      {
        h: "PARA — لـ (le) / علشان (3ashaan)",
        p: "<b>لـ (le / li)</b> = destinatario («para ti» = ليك liik). <b>علشان (3ashaan)</b> = finalidad («para hacer algo»).",
        ex: [
          { ar: "ده ليك", fr: "da liik", es: "esto es para ti" },
          { ar: "هدية لماما", fr: "hedeyya le-mama", es: "un regalo para mamá" },
          { ar: "علشان أتعلم", fr: "3ashaan at3allem", es: "para aprender" },
          { ar: "جيت علشانك", fr: "geet 3ashaanak", es: "vine por / para ti" }
        ]
      },
      {
        h: "POR — بـ (be) / على / علشان",
        p: "<b>بـ (be-)</b> = medio («por teléfono»). <b>شكراً على (shukran 3ala)</b> = «gracias por». <b>علشان كده</b> = «por eso».",
        ex: [
          { ar: "بالتليفون", fr: "bet-telefoon", es: "por teléfono" },
          { ar: "شكراً على المساعدة", fr: "shukran 3ala el-mosa3da", es: "gracias por la ayuda" },
          { ar: "علشان كده", fr: "3ashaan keda", es: "por eso" },
          { ar: "مشيت من هنا", fr: "masheet men hena", es: "pasé por aquí" }
        ]
      }
    ],
    quiz: [
      { q: "«desde ayer» =", options: ["men embaare7", "le embaare7"], answer: 0, note: "desde = من (men) → men embaare7." },
      { q: "«durante una hora» =", options: ["le-moddet saa3a", "fi saa3a"], answer: 0, note: "periodo de tiempo → لمدة (le-moddet)." },
      { q: "«esto es para ti» =", options: ["da liik", "da minnak"], answer: 0, note: "«para ti» = ليك (liik), de لـ." },
      { q: "«ve hacia la derecha» =", options: ["rou7 naa7yet el-yemiin", "rou7 men el-yemiin"], answer: 0, note: "hacia = ناحية (naa7yet)." },
      { q: "«gracias por la ayuda» =", options: ["shukran 3ala el-mosa3da", "shukran be el-mosa3da"], answer: 0, note: "«gracias por» = شكراً على (shukran 3ala)." },
      { q: "«por teléfono» =", options: ["bet-telefoon", "3an telefoon"], answer: 0, note: "medio / instrumento → بـ (be-) → bet-telefoon." }
    ]
  },

  /* ---------------- LOS PRONOMBRES (base para conjugar) ---------------- */
  {
    id: "pronombres",
    title: "Los pronombres personales",
    icon: "🧍",
    level: "A2",
    intro: "Para conjugar cualquier verbo necesitas dominar los 8 pronombres del egipcio. El árabe distingue <b>masculino y femenino</b> en la 2ª y 3ª persona del singular, pero <b>no</b> en el plural.",
    sections: [
      {
        h: "Los 8 pronombres",
        p: "No existe «usted» formal ni «vosotros/ustedes» separados: <b>entu</b> vale para todo el plural de «vosotros». <b>homma</b> es «ellos/ellas».",
        ex: [
          { ar: "أنا", fr: "ana", es: "yo" },
          { ar: "إنت", fr: "enta", es: "tú (m)" },
          { ar: "إنتي", fr: "enti", es: "tú (f)" },
          { ar: "هو", fr: "howwa", es: "él" },
          { ar: "هي", fr: "heyya", es: "ella" },
          { ar: "إحنا", fr: "e7na", es: "nosotros/as" },
          { ar: "إنتوا", fr: "entu", es: "vosotros/as" },
          { ar: "هما", fr: "homma", es: "ellos/as" }
        ]
      },
      {
        h: "Pronombres posesivos (sufijos)",
        p: "El posesivo se pega al final del sustantivo. Con بيت (beet, casa): بيتي = mi casa.",
        ex: [
          { ar: "بيتي", fr: "beeti", es: "mi casa" },
          { ar: "بيتك", fr: "beetak", es: "tu casa (m)" },
          { ar: "بيتِك", fr: "beetek", es: "tu casa (f)" },
          { ar: "بيته", fr: "beetu", es: "su casa (de él)" },
          { ar: "بيتها", fr: "beetha", es: "su casa (de ella)" },
          { ar: "بيتنا", fr: "beetna", es: "nuestra casa" },
          { ar: "بيتكو", fr: "beetku", es: "vuestra casa" },
          { ar: "بيتهم", fr: "beethom", es: "su casa (de ellos)" }
        ]
      }
    ],
    quiz: [
      { q: "«ella» =", options: ["heyya", "howwa", "homma", "enti"], answer: 0, note: "heyya = ella; howwa = él; homma = ellos." },
      { q: "«vosotros» =", options: ["entu", "e7na", "enta", "homma"], answer: 0, note: "entu = vosotros; e7na = nosotros." },
      { q: "«mi casa» =", options: ["beeti", "beetak", "beetha", "beetna"], answer: 0, note: "El sufijo ‑i = «mi»: beet + i = beeti." },
      { q: "«su casa (de ella)» =", options: ["beetha", "beetu", "beetak", "beethom"], answer: 0, note: "‑ha = de ella; ‑u = de él." },
      { q: "«tú (f)» =", options: ["enti", "enta", "heyya", "e7na"], answer: 0, note: "enti (con ‑i) = tú femenino; enta = tú masculino." }
    ]
  },

  /* ---------------- EL PASADO ---------------- */
  {
    id: "pasado",
    title: "El pasado (الماضي)",
    icon: "⏮️",
    level: "B1",
    goal: "Conjugar el pasado de verbos regulares e irregulares (huecos) y negarlo con ما…ش.",
    prereq: ["pronombres"],
    intro: "El pasado egipcio es el tiempo más «regular»: se parte de la forma de <b>howwa</b> (él) y se le añaden terminaciones. La forma de «él» (كتب katab) es la raíz desnuda, sin prefijos.<br><br>Se usa para acciones <b>terminadas</b>: ayer, la semana pasada, hace un rato…",
    sections: [
      {
        h: "Cómo se forma",
        p: "Tomas el pasado de <b>howwa</b> (p. ej. كتب <b>katab</b> = «escribió») y añades una terminación según la persona:<br>• ana / enta → <b>‑t</b> · enti → <b>‑ti</b> · heyya → <b>‑et</b><br>• e7na → <b>‑na</b> · entu → <b>‑tu</b> · homma → <b>‑u</b>"
      },
      {
        h: "Verbo regular: كتب (katab) «escribir»",
        p: "Fíjate: «yo» y «tú (m)» comparten forma (katabt); el contexto las distingue.",
        conj: {
          verb: "كتب", vfr: "katab", meaning: "escribir",
          rows: [
            { pf: "ana", ar: "كتبت", fr: "katabt", es: "escribí" },
            { pf: "enta", ar: "كتبت", fr: "katabt", es: "escribiste (m)" },
            { pf: "enti", ar: "كتبتي", fr: "katabti", es: "escribiste (f)" },
            { pf: "howwa", ar: "كتب", fr: "katab", es: "escribió (él)" },
            { pf: "heyya", ar: "كتبت", fr: "katabet", es: "escribió (ella)" },
            { pf: "e7na", ar: "كتبنا", fr: "katabna", es: "escribimos" },
            { pf: "entu", ar: "كتبتو", fr: "katabtu", es: "escribisteis" },
            { pf: "homma", ar: "كتبو", fr: "katabu", es: "escribieron" }
          ]
        }
      },
      {
        h: "Otro regular: عمل (3amal) «hacer»",
        p: "Mismo patrón de terminaciones sobre la raíz عمل.",
        conj: {
          verb: "عمل", vfr: "3amal", meaning: "hacer",
          rows: [
            { pf: "ana", ar: "عملت", fr: "3amalt", es: "hice" },
            { pf: "enta", ar: "عملت", fr: "3amalt", es: "hiciste (m)" },
            { pf: "enti", ar: "عملتي", fr: "3amalti", es: "hiciste (f)" },
            { pf: "howwa", ar: "عمل", fr: "3amal", es: "hizo (él)" },
            { pf: "heyya", ar: "عملت", fr: "3amalet", es: "hizo (ella)" },
            { pf: "e7na", ar: "عملنا", fr: "3amalna", es: "hicimos" },
            { pf: "entu", ar: "عملتو", fr: "3amaltu", es: "hicisteis" },
            { pf: "homma", ar: "عملو", fr: "3amalu", es: "hicieron" }
          ]
        }
      },
      {
        h: "Verbo irregular (hueco): راح (raa7) «ir»",
        p: "Los verbos «huecos» cambian la vocal larga: en las personas con terminación consonántica, راح → <b>رحـ (ro7‑)</b>.",
        conj: {
          verb: "راح", vfr: "raa7", meaning: "ir",
          rows: [
            { pf: "ana", ar: "رحت", fr: "ro7t", es: "fui" },
            { pf: "enta", ar: "رحت", fr: "ro7t", es: "fuiste (m)" },
            { pf: "enti", ar: "رحتي", fr: "ro7ti", es: "fuiste (f)" },
            { pf: "howwa", ar: "راح", fr: "raa7", es: "fue (él)" },
            { pf: "heyya", ar: "راحت", fr: "raa7et", es: "fue (ella)" },
            { pf: "e7na", ar: "رحنا", fr: "ro7na", es: "fuimos" },
            { pf: "entu", ar: "رحتو", fr: "ro7tu", es: "fuisteis" },
            { pf: "homma", ar: "راحو", fr: "raa7u", es: "fueron" }
          ]
        }
      },
      {
        h: "La negación del pasado: ما...ش",
        p: "Se «abraza» el verbo con <b>ما‑ (ma)</b> delante y <b>‑ش (‑sh)</b> detrás.",
        ex: [
          { ar: "ما كتبتش", fr: "ma katabtesh", es: "no escribí" },
          { ar: "ما راحش", fr: "ma raa7sh", es: "no fue (él)" },
          { ar: "ما عملناش", fr: "ma 3amalnaash", es: "no hicimos" },
          { ar: "ما رحتش", fr: "ma ro7tesh", es: "no fui" }
        ]
      },
      {
        h: "Marcadores de tiempo pasado",
        p: "Palabras que anclan la frase en el pasado. Son muy útiles para hablar con naturalidad: aprende varias.",
        table: {
          cols: ["Español", "Árabe", "Franco"],
          rows: [
            ["ayer", "<span class='ar' dir='rtl' lang='ar'>إمبارح</span>", "<span class='fr'>embaare7</span>"],
            ["anteayer", "<span class='ar' dir='rtl' lang='ar'>أول إمبارح</span>", "<span class='fr'>awwel embaare7</span>"],
            ["hace un rato", "<span class='ar' dir='rtl' lang='ar'>من شوية</span>", "<span class='fr'>men shwayya</span>"],
            ["hace una hora", "<span class='ar' dir='rtl' lang='ar'>من ساعة</span>", "<span class='fr'>men saa3a</span>"],
            ["hace unos días", "<span class='ar' dir='rtl' lang='ar'>من كام يوم</span>", "<span class='fr'>men kaam yoom</span>"],
            ["hace una semana", "<span class='ar' dir='rtl' lang='ar'>من أسبوع</span>", "<span class='fr'>men osboo3</span>"],
            ["la semana pasada", "<span class='ar' dir='rtl' lang='ar'>الأسبوع اللي فات</span>", "<span class='fr'>el-osboo3 elli faat</span>"],
            ["el mes pasado", "<span class='ar' dir='rtl' lang='ar'>الشهر اللي فات</span>", "<span class='fr'>esh-shahr elli faat</span>"],
            ["el año pasado", "<span class='ar' dir='rtl' lang='ar'>السنة اللي فاتت</span>", "<span class='fr'>es-sana elli faatet</span>"],
            ["hace tiempo", "<span class='ar' dir='rtl' lang='ar'>من زمان</span>", "<span class='fr'>men zamaan</span>"],
            ["hace mucho tiempo", "<span class='ar' dir='rtl' lang='ar'>من زمان أوي</span>", "<span class='fr'>men zamaan awi</span>"],
            ["la última vez", "<span class='ar' dir='rtl' lang='ar'>المرة اللي فاتت</span>", "<span class='fr'>el-marra elli faatet</span>"],
            ["en el pasado", "<span class='ar' dir='rtl' lang='ar'>في الماضي</span>", "<span class='fr'>fel-maadi</span>"]
          ]
        }
      }
    ],
    quiz: [
      { q: "«(yo) escribí» =", options: ["katabt", "baktib", "haktib", "katab"], answer: 0, note: "Pasado + terminación ‑t: katab + t = katabt." },
      { q: "«(ella) fue» — راح =", options: ["raa7et", "raa7", "ro7t", "harou7"], answer: 0, note: "heyya lleva ‑et: raa7 + et = raa7et." },
      { q: "«(nosotros) hicimos» =", options: ["3amalna", "bni3mel", "3amaltu", "3amalu"], answer: 0, note: "e7na lleva ‑na: 3amal + na = 3amalna." },
      { q: "«(ellos) escribieron» =", options: ["katabu", "katab", "biyiktibu", "hayiktibu"], answer: 0, note: "homma lleva ‑u: katab + u = katabu." },
      { q: "«(tú, f) escribiste» =", options: ["katabti", "katabt", "katabtu", "katabet"], answer: 0, note: "enti lleva ‑ti; enta (m) sería katabt." },
      { q: "«(vosotros) hicisteis» =", options: ["3amaltu", "3amalna", "3amalu", "3amalt"], answer: 0, note: "entu lleva ‑tu: 3amal + tu = 3amaltu." },
      { q: "«(ella) hizo» =", options: ["3amalet", "3amal", "3amalt", "3amalna"], answer: 0, note: "heyya → 3amal + et = 3amalet." },
      { q: "«no fui» (negación) =", options: ["ma ro7tesh", "mesh harou7", "ma barou7sh", "ma raa7sh"], answer: 0, note: "ma + ro7t + sh = ma ro7tesh." },
      { q: "«(nosotros) fuimos» — راح =", options: ["ro7na", "raa7u", "raa7et", "hanrou7"], answer: 0, note: "Verbo hueco: راح → رحـ + na = ro7na." },
      { q: "¿Qué palabra pide pasado?", options: ["embaare7", "bokra", "dilwa2ti", "dayman"], answer: 0, note: "embaare7 = ayer (pasado); bokra = mañana (futuro)." },
      { q: "«(él) escribió» — la forma base es =", options: ["katab", "katabt", "baktib", "biyiktib"], answer: 0, note: "La forma de howwa es la raíz desnuda: katab." },
      { q: "«(tú, m) hiciste» =", options: ["3amalt", "3amalti", "3amal", "3amaltu"], answer: 0, note: "ana y enta comparten ‑t: 3amalt." }
    ]
  },

  /* ---------------- EL PRESENTE ---------------- */
  {
    id: "presente",
    title: "El presente (المضارع)",
    icon: "▶️",
    level: "B1",
    goal: "Formar y reconocer el presente de cualquier verbo, distinguir el hábito del «ahora mismo» y saber cuándo el verbo pierde el بـ.",
    prereq: ["pronombres"],
    intro: "El presente egipcio se construye con el prefijo <b>بـ (bi‑)</b> + prefijos y sufijos de persona. Sirve tanto para el <b>presente habitual</b> («escribo cada día») como para el <b>continuo</b> («estoy escribiendo ahora»).<br><br>Sin el بـ, la forma es un «subjuntivo» que se usa tras verbos como «quiero», «puedo», «tengo que».",
    sections: [
      {
        h: "Cómo se forma",
        p: "Cada persona tiene su prefijo, y encima se añade <b>بـ (bi‑)</b>:<br>• ana → <b>ba‑</b> · enta/heyya → <b>bti‑</b> · enti → <b>bti‑…i</b><br>• howwa → <b>biyi‑</b> · e7na → <b>bni‑</b> · entu → <b>bti‑…u</b> · homma → <b>biyi‑…u</b>"
      },
      {
        h: "Verbo regular: كتب → يكتب «escribir»",
        p: "El presente parte del tema ‑ktib‑.",
        conj: {
          verb: "بيكتب", vfr: "biyiktib", meaning: "escribir (pres.)",
          rows: [
            { pf: "ana", ar: "بكتب", fr: "baktib", es: "escribo" },
            { pf: "enta", ar: "بتكتب", fr: "bitiktib", es: "escribes (m)" },
            { pf: "enti", ar: "بتكتبي", fr: "bitiktibi", es: "escribes (f)" },
            { pf: "howwa", ar: "بيكتب", fr: "biyiktib", es: "escribe (él)" },
            { pf: "heyya", ar: "بتكتب", fr: "bitiktib", es: "escribe (ella)" },
            { pf: "e7na", ar: "بنكتب", fr: "biniktib", es: "escribimos" },
            { pf: "entu", ar: "بتكتبو", fr: "bitiktibu", es: "escribís" },
            { pf: "homma", ar: "بيكتبو", fr: "biyiktibu", es: "escriben" }
          ]
        }
      },
      {
        h: "Otro regular: عمل → يعمل «hacer»",
        p: "Mismo juego de prefijos sobre ‑3mel‑.",
        conj: {
          verb: "بيعمل", vfr: "biyi3mel", meaning: "hacer (pres.)",
          rows: [
            { pf: "ana", ar: "بعمل", fr: "ba3mel", es: "hago" },
            { pf: "enta", ar: "بتعمل", fr: "biti3mel", es: "haces (m)" },
            { pf: "enti", ar: "بتعملي", fr: "biti3meli", es: "haces (f)" },
            { pf: "howwa", ar: "بيعمل", fr: "biyi3mel", es: "hace (él)" },
            { pf: "heyya", ar: "بتعمل", fr: "biti3mel", es: "hace (ella)" },
            { pf: "e7na", ar: "بنعمل", fr: "bini3mel", es: "hacemos" },
            { pf: "entu", ar: "بتعملو", fr: "biti3melu", es: "hacéis" },
            { pf: "homma", ar: "بيعملو", fr: "biyi3melu", es: "hacen" }
          ]
        }
      },
      {
        h: "Irregular (hueco): راح → يروح «ir»",
        p: "El tema es ‑rou7‑, sin vocal breve interna.",
        conj: {
          verb: "بيروح", vfr: "biyrou7", meaning: "ir (pres.)",
          rows: [
            { pf: "ana", ar: "بروح", fr: "barou7", es: "voy" },
            { pf: "enta", ar: "بتروح", fr: "bitrou7", es: "vas (m)" },
            { pf: "enti", ar: "بتروحي", fr: "bitrou7i", es: "vas (f)" },
            { pf: "howwa", ar: "بيروح", fr: "biyrou7", es: "va (él)" },
            { pf: "heyya", ar: "بتروح", fr: "bitrou7", es: "va (ella)" },
            { pf: "e7na", ar: "بنروح", fr: "binrou7", es: "vamos" },
            { pf: "entu", ar: "بتروحو", fr: "bitrou7u", es: "vais" },
            { pf: "homma", ar: "بيروحو", fr: "biyrou7u", es: "van" }
          ]
        }
      },
      {
        h: "La negación del presente: ما...ش",
        p: "Igual que el pasado, se abraza el verbo entero (con su بـ): <b>ما‑…‑ش</b>.",
        ex: [
          { ar: "مبكتبش", fr: "ma baktibsh", es: "no escribo" },
          { ar: "مبيروحش", fr: "ma biyrou7sh", es: "no va (él)" },
          { ar: "مبنعملش", fr: "ma bini3melsh", es: "no hacemos" }
        ]
      },
      {
        h: "Sin بـ = subjuntivo (tras «quiero, puedo, tengo que»)",
        p: "Después de عايز (quiero), ممكن (puedo), لازم (debo)… el verbo va <b>sin بـ</b>.",
        ex: [
          { ar: "عايز أروح", fr: "3aayez arou7", es: "quiero ir" },
          { ar: "لازم أكتب", fr: "laazem aktib", es: "tengo que escribir" },
          { ar: "ممكن نعمل", fr: "mumken ni3mel", es: "podemos hacer" }
        ]
      }
    ],
    quiz: [
      { q: "«(yo) escribo» =", options: ["baktib", "katabt", "haktib", "aktib"], answer: 0, note: "ana lleva ba‑: ba + ktib = baktib." },
      { q: "«(él) hace» =", options: ["biyi3mel", "3amal", "hayi3mel", "ba3mel"], answer: 0, note: "howwa lleva biyi‑: biyi3mel." },
      { q: "«(nosotros) vamos» =", options: ["binrou7", "ro7na", "hanrou7", "barou7"], answer: 0, note: "e7na lleva bni‑: binrou7." },
      { q: "«(ella) escribe» =", options: ["bitiktib", "katabet", "hatiktib", "biyiktib"], answer: 0, note: "heyya usa el mismo prefijo que enta: bti‑ → bitiktib." },
      { q: "«(ellos) hacen» =", options: ["biyi3melu", "3amalu", "hayi3melu", "biti3melu"], answer: 0, note: "homma → biyi‑…‑u: biyi3melu." },
      { q: "«no escribo» (negación) =", options: ["ma baktibsh", "mesh baktib", "ma katabtesh", "mesh haktib"], answer: 0, note: "Se abraza el verbo: ma + baktib + sh." },
      { q: "«(tú, f) vas» =", options: ["bitrou7i", "bitrou7", "hatrou7i", "barou7"], answer: 0, note: "enti añade ‑i al final: bitrou7i." },
      { q: "¿Qué prefijo marca el presente habitual?", options: ["بـ (bi‑)", "هـ (ha‑)", "ما (ma‑)", "لـ (le‑)"], answer: 0, note: "بـ (bi‑) marca el presente real / habitual." },
      { q: "«quiero ir» — el verbo va…", options: ["sin بـ: 3aayez arou7", "con بـ: 3aayez barou7", "en pasado: 3aayez ro7t", "con هـ: 3aayez harou7"], answer: 0, note: "Tras «quiero» el verbo pierde el بـ (subjuntivo): 3aayez arou7." },
      { q: "«(vosotros) escribís» =", options: ["bitiktibu", "katabtu", "hatiktibu", "biyiktibu"], answer: 0, note: "entu → bti‑…‑u: bitiktibu." },
      { q: "«cada día» (pide presente) =", options: ["kol yoom", "embaare7", "bokra", "el-osboo3 elli faat"], answer: 0, note: "kol yoom = cada día → hábito → presente." },
      { q: "«(él) va» =", options: ["biyrou7", "raa7", "hayrou7", "barou7"], answer: 0, note: "howwa hueco → biyrou7." }
    ]
  },

  /* ---------------- EL FUTURO ---------------- */
  {
    id: "futuro",
    title: "El futuro (المستقبل)",
    icon: "⏩",
    level: "B1",
    goal: "Formar el futuro a partir del presente (quitar بـ, poner هـ) y negarlo con مش.",
    prereq: ["presente"],
    intro: "El futuro es facilísimo si ya sabes el presente: coges la forma del presente, <b>quitas el بـ (bi‑)</b> y pones delante <b>هـ (ha‑)</b>.<br><br>bi‑ktib (escribo) → <b>ha</b>‑ktib (escribiré). El prefijo هـ a veces se pronuncia «ha‑» y a veces «hat‑/hay‑» al fundirse con la persona.",
    sections: [
      {
        h: "Cómo se forma",
        p: "<b>هـ (ha‑) + presente sin بـ</b>. Los prefijos de persona se mantienen:<br>• ana → <b>ha‑</b> · enta/heyya → <b>hat‑</b> · enti → <b>hat‑…i</b><br>• howwa → <b>hay‑</b> · e7na → <b>han‑</b> · entu → <b>hat‑…u</b> · homma → <b>hay‑…u</b>"
      },
      {
        h: "Verbo regular: كتب «escribir»",
        p: "Compara con el presente: baktib → haktib.",
        conj: {
          verb: "هيكتب", vfr: "hayiktib", meaning: "escribir (fut.)",
          rows: [
            { pf: "ana", ar: "هكتب", fr: "haktib", es: "escribiré" },
            { pf: "enta", ar: "هتكتب", fr: "hatiktib", es: "escribirás (m)" },
            { pf: "enti", ar: "هتكتبي", fr: "hatiktibi", es: "escribirás (f)" },
            { pf: "howwa", ar: "هيكتب", fr: "hayiktib", es: "escribirá (él)" },
            { pf: "heyya", ar: "هتكتب", fr: "hatiktib", es: "escribirá (ella)" },
            { pf: "e7na", ar: "هنكتب", fr: "haniktib", es: "escribiremos" },
            { pf: "entu", ar: "هتكتبو", fr: "hatiktibu", es: "escribiréis" },
            { pf: "homma", ar: "هيكتبو", fr: "hayiktibu", es: "escribirán" }
          ]
        }
      },
      {
        h: "Otro regular: عمل «hacer»",
        p: "ba3mel → ha3mel, biti3mel → hati3mel…",
        conj: {
          verb: "هيعمل", vfr: "hayi3mel", meaning: "hacer (fut.)",
          rows: [
            { pf: "ana", ar: "هعمل", fr: "ha3mel", es: "haré" },
            { pf: "enta", ar: "هتعمل", fr: "hati3mel", es: "harás (m)" },
            { pf: "enti", ar: "هتعملي", fr: "hati3meli", es: "harás (f)" },
            { pf: "howwa", ar: "هيعمل", fr: "hayi3mel", es: "hará (él)" },
            { pf: "heyya", ar: "هتعمل", fr: "hati3mel", es: "hará (ella)" },
            { pf: "e7na", ar: "هنعمل", fr: "hani3mel", es: "haremos" },
            { pf: "entu", ar: "هتعملو", fr: "hati3melu", es: "haréis" },
            { pf: "homma", ar: "هيعملو", fr: "hayi3melu", es: "harán" }
          ]
        }
      },
      {
        h: "Irregular (hueco): راح «ir»",
        p: "barou7 → harou7. Muy usado para planes.",
        conj: {
          verb: "هيروح", vfr: "hayrou7", meaning: "ir (fut.)",
          rows: [
            { pf: "ana", ar: "هروح", fr: "harou7", es: "iré" },
            { pf: "enta", ar: "هتروح", fr: "hatrou7", es: "irás (m)" },
            { pf: "enti", ar: "هتروحي", fr: "hatrou7i", es: "irás (f)" },
            { pf: "howwa", ar: "هيروح", fr: "hayrou7", es: "irá (él)" },
            { pf: "heyya", ar: "هتروح", fr: "hatrou7", es: "irá (ella)" },
            { pf: "e7na", ar: "هنروح", fr: "hanrou7", es: "iremos" },
            { pf: "entu", ar: "هتروحو", fr: "hatrou7u", es: "iréis" },
            { pf: "homma", ar: "هيروحو", fr: "hayrou7u", es: "irán" }
          ]
        }
      },
      {
        h: "La negación del futuro: مش + futuro",
        p: "Lo más sencillo: <b>مش (mesh)</b> delante de la forma de futuro.",
        ex: [
          { ar: "مش هكتب", fr: "mesh haktib", es: "no escribiré" },
          { ar: "مش هروح", fr: "mesh harou7", es: "no iré" },
          { ar: "مش هنعمل", fr: "mesh hani3mel", es: "no haremos" }
        ]
      },
      {
        h: "Marcadores de tiempo futuro",
        p: "Palabras que anticipan el futuro.",
        ex: [
          { ar: "بكرة", fr: "bokra", es: "mañana" },
          { ar: "بعد بكرة", fr: "ba3d bokra", es: "pasado mañana" },
          { ar: "الأسبوع الجاي", fr: "el-osboo3 el-gay", es: "la semana que viene" },
          { ar: "بعدين", fr: "ba3deen", es: "luego / más tarde" }
        ]
      }
    ],
    quiz: [
      { q: "«(yo) escribiré» =", options: ["haktib", "baktib", "katabt", "aktib"], answer: 0, note: "ha‑ + ktib = haktib." },
      { q: "«(nosotros) iremos» =", options: ["hanrou7", "binrou7", "ro7na", "harou7"], answer: 0, note: "e7na → han‑: hanrou7." },
      { q: "«(ella) hará» =", options: ["hati3mel", "biti3mel", "3amalet", "hayi3mel"], answer: 0, note: "heyya usa hat‑ (como enta): hati3mel." },
      { q: "El prefijo del futuro es…", options: ["هـ (ha‑)", "بـ (bi‑)", "ما (ma‑)", "‑ت (‑t)"], answer: 0, note: "هـ (ha‑) marca el futuro; بـ es presente." },
      { q: "«no iré» (negación) =", options: ["mesh harou7", "ma ro7tesh", "ma barou7sh", "mesh barou7"], answer: 0, note: "Futuro negativo = mesh + futuro: mesh harou7." },
      { q: "«mañana» =", options: ["bokra", "embaare7", "dilwa2ti", "men shwayya"], answer: 0, note: "bokra = mañana (futuro)." },
      { q: "«(ellos) escribirán» =", options: ["hayiktibu", "biyiktibu", "katabu", "hatiktibu"], answer: 0, note: "homma → hay‑…‑u: hayiktibu." },
      { q: "«(tú, m) harás» =", options: ["hati3mel", "biti3mel", "3amalt", "ha3mel"], answer: 0, note: "enta → hat‑: hati3mel." },
      { q: "Del presente «baktib» al futuro se pasa…", options: ["quitando بـ y poniendo هـ", "añadiendo ‑t", "poniendo ما…ش", "no cambia"], answer: 0, note: "baktib → (quito bi, pongo ha) → haktib." },
      { q: "«la semana que viene» =", options: ["el-osboo3 el-gay", "el-osboo3 elli faat", "dilwa2ti", "kol yoom"], answer: 0, note: "el-gay = que viene; elli faat = pasada." },
      { q: "«(vosotros) iréis» =", options: ["hatrou7u", "bitrou7u", "ro7tu", "hayrou7u"], answer: 0, note: "entu → hat‑…‑u: hatrou7u." },
      { q: "«(él) escribirá» =", options: ["hayiktib", "biyiktib", "katab", "haktib"], answer: 0, note: "howwa → hay‑: hayiktib." }
    ]
  },

  /* ---------------- REPASO COMPLEJO: LOS TRES TIEMPOS ---------------- */
  {
    id: "tiempos-repaso",
    title: "Repaso: los tres tiempos",
    icon: "🔀",
    level: "B1",
    intro: "Ejercicios mixtos y de <b>transformación</b> para no confundir pasado, presente y futuro. Fíjate en los prefijos: <b>‑t/‑et</b> (pasado) · <b>بـ bi‑</b> (presente) · <b>هـ ha‑</b> (futuro).",
    sections: [
      {
        h: "Tabla comparativa (howwa «él»)",
        p: "Un vistazo rápido a la 3ª persona masculina en los tres tiempos.",
        ex: [
          { ar: "كتب", fr: "katab", es: "escribió (pasado)" },
          { ar: "بيكتب", fr: "biyiktib", es: "escribe (presente)" },
          { ar: "هيكتب", fr: "hayiktib", es: "escribirá (futuro)" },
          { ar: "راح / بيروح / هيروح", fr: "raa7 / biyrou7 / hayrou7", es: "fue / va / irá" }
        ]
      },
      {
        h: "La clave para reconocerlos",
        p: "• Termina la raíz sin prefijo o con <b>‑t, ‑et, ‑na, ‑u</b> → <b>pasado</b>.<br>• Empieza por <b>بـ (b‑)</b> → <b>presente</b>.<br>• Empieza por <b>هـ (h‑)</b> → <b>futuro</b>."
      }
    ],
    quiz: [
      { q: "«katabt» está en…", options: ["pasado", "presente", "futuro", "subjuntivo"], answer: 0, note: "Termina en ‑t sin prefijo b/h → pasado." },
      { q: "«biyrou7» está en…", options: ["presente", "pasado", "futuro", "imperativo"], answer: 0, note: "Empieza por بـ (bi‑) → presente." },
      { q: "«hanrou7» está en…", options: ["futuro", "presente", "pasado", "subjuntivo"], answer: 0, note: "Empieza por هـ (ha‑/han‑) → futuro." },
      { q: "Pon en futuro «baktib» (yo) →", options: ["haktib", "katabt", "biniktib", "aktib"], answer: 0, note: "Quita bi‑, pon ha‑: haktib." },
      { q: "Pon en pasado «biyi3mel» (él) →", options: ["3amal", "hayi3mel", "ba3mel", "3amalet"], answer: 0, note: "howwa en pasado = raíz desnuda: 3amal." },
      { q: "«3amalna» significa…", options: ["hicimos", "haremos", "hacemos", "haced"], answer: 0, note: "‑na en pasado = nosotros: hicimos." },
      { q: "«mesh haktib» significa…", options: ["no escribiré", "no escribí", "no escribo", "no escribas"], answer: 0, note: "mesh + futuro = no escribiré." },
      { q: "«bitiktibi» se refiere a…", options: ["tú (f)", "tú (m)", "ella", "vosotros"], answer: 0, note: "bti‑…‑i (con ‑i final) = enti, tú femenino." },
      { q: "Pon en presente «raa7» (él) →", options: ["biyrou7", "hayrou7", "ro7t", "barou7"], answer: 0, note: "Presente de howwa: biyrou7." },
      { q: "«no fui» (pasado negativo) =", options: ["ma ro7tesh", "mesh harou7", "ma barou7sh", "mesh ro7t"], answer: 0, note: "ma + ro7t + sh = ma ro7tesh." },
      { q: "«hati3melu» =", options: ["haréis", "hicisteis", "hacéis", "hará"], answer: 0, note: "hat‑…‑u en futuro = entu: haréis." },
      { q: "«quiero escribir» → el verbo correcto es…", options: ["3aayez aktib", "3aayez baktib", "3aayez katabt", "3aayez haktib"], answer: 0, note: "Tras «quiero», subjuntivo sin بـ: 3aayez aktib." }
    ]
  },

  /* ---------------- LA NEGACIÓN ---------------- */
  {
    id: "negacion",
    title: "La negación (النفي)",
    icon: "🚫",
    level: "B1",
    goal: "Elegir la negación correcta según lo que niegas (nombre, verbo, futuro o existencia) sin mezclar mesh y ma…sh.",
    prereq: ["presente", "futuro"],
    intro: "El egipcio niega de formas distintas según <b>qué</b> niegues. Las dos claves son <b>مش (mesh)</b> y <b>ما…ش (ma…sh)</b>.",
    sections: [
      {
        h: "¿Cuál uso? (resumen)",
        p: "Elige la herramienta según lo que estás negando:",
        table: {
          cols: ["Niegas…", "Herramienta", "Ejemplo"],
          rows: [
            ["Nombre / adjetivo / participio", "<span class='fr'>mesh</span>", "<span class='fr'>mesh kwayyes</span> — no está bien"],
            ["Verbo (pasado o presente)", "<span class='fr'>ma…sh</span>", "<span class='fr'>ma katabtesh</span> — no escribí"],
            ["Futuro (هـ)", "<span class='fr'>mesh</span>", "<span class='fr'>mesh harou7</span> — no iré"],
            ["Existencia («hay»)", "<span class='fr'>mafiish</span>", "<span class='fr'>mafiish wa2t</span> — no hay tiempo"]
          ]
        },
        refs: [{ id: "presente" }, { id: "futuro" }, { id: "haber" }]
      },
      {
        h: "مش (mesh) — niega lo que NO es verbo",
        p: "Sustantivos, adjetivos, participios y el <b>futuro</b>.",
        ex: [
          { ar: "مش كويس", fr: "mesh kwayyes", es: "no está bien" },
          { ar: "مش أنا", fr: "mesh ana", es: "no soy yo" },
          { ar: "مش عارف", fr: "mesh 3aaref", es: "no sé (participio)" },
          { ar: "مش هروح", fr: "mesh harou7", es: "no iré (futuro)" }
        ]
      },
      {
        h: "ما…ش (ma…sh) — abraza el verbo (pasado y presente)",
        p: "Se pone <b>ما‑</b> delante y <b>‑ش</b> detrás del verbo.",
        ex: [
          { ar: "ما كتبتش", fr: "ma katabtesh", es: "no escribí" },
          { ar: "مبحبش", fr: "ma ba7ebbesh", es: "no me gusta" },
          { ar: "ماراحش", fr: "ma raa7sh", es: "no fue (él)" }
        ]
      },
      {
        h: "مفيش (mafiish) — «no hay»",
        p: "Negativo de فيه (fiih, hay).",
        ex: [
          { ar: "مفيش مشكلة", fr: "mafiish mushkila", es: "no hay problema" },
          { ar: "مفيش حد", fr: "mafiish 7add", es: "no hay nadie" },
          { ar: "مفيش حاجة", fr: "mafiish 7aaga", es: "no hay nada" }
        ]
      },
      {
        h: "Otras negaciones útiles",
        p: "",
        ex: [
          { ar: "ولا حاجة", fr: "wala 7aaga", es: "nada en absoluto" },
          { ar: "بلاش", fr: "balaash", es: "mejor no / déjalo" },
          { ar: "لسه", fr: "lessa … ma…sh", es: "todavía no" }
        ]
      }
    ],
    quiz: [
      { q: "«no está bien» =", options: ["mesh kwayyes", "ma kwayyessh", "mafiish kwayyes", "ma kwayyes"], answer: 0, note: "mesh niega adjetivos: mesh kwayyes." },
      { q: "«no escribí» =", options: ["ma katabtesh", "mesh katabt", "mafiish katabt", "mesh katabtesh"], answer: 0, note: "Verbo en pasado → ma…sh: ma katabtesh." },
      { q: "«no iré» =", options: ["mesh harou7", "ma harou7sh", "ma harou7", "mafiish harou7"], answer: 0, note: "El futuro se niega con mesh: mesh harou7." },
      { q: "«no hay problema» =", options: ["mafiish mushkila", "mesh mushkila", "ma mushkilash", "wala mushkila"], answer: 0, note: "«no hay» = mafiish." },
      { q: "«no me gusta» =", options: ["ma ba7ebbesh", "mesh ba7ebb", "mafiish 7obb", "mesh a7ebb"], answer: 0, note: "Verbo en presente → ma…sh: ma ba7ebbesh." },
      { q: "«no soy yo» =", options: ["mesh ana", "ma anash", "mafiish ana", "ana mesh"], answer: 0, note: "Frase sin verbo → mesh: mesh ana." },
      { q: "¿Qué niega «mesh»?", options: ["nombres, adjetivos y el futuro", "solo el pasado", "solo el presente", "los números"], answer: 0, note: "mesh niega lo no-verbal y el futuro; ma…sh niega verbos en pasado/presente." },
      { q: "«no hay nadie» =", options: ["mafiish 7add", "mesh 7add", "ma 7addsh", "wala 7add"], answer: 0, note: "mafiish 7add = no hay nadie." }
    ]
  },

  /* ---------------- LOS INTERROGATIVOS ---------------- */
  {
    id: "interrogativos",
    title: "Los interrogativos (الاستفهام)",
    icon: "❓",
    level: "A2",
    intro: "Gran diferencia con el español: en egipcio la palabra de pregunta suele ir <b>al final</b> de la frase. «¿Cómo te llamas?» es literalmente «tu-nombre qué?» → <b>esmak eh?</b>",
    sections: [
      {
        h: "Las palabras de pregunta",
        p: "",
        ex: [
          { ar: "إيه", fr: "eh", es: "qué" },
          { ar: "مين", fr: "meen", es: "quién" },
          { ar: "فين", fr: "feen", es: "dónde" },
          { ar: "إمتى", fr: "emta", es: "cuándo" },
          { ar: "إزاي", fr: "ezzaay", es: "cómo" },
          { ar: "ليه", fr: "leeh", es: "por qué" },
          { ar: "كام", fr: "kaam", es: "cuánto(s)" },
          { ar: "أنهي", fr: "anhi", es: "cuál" }
        ]
      },
      {
        h: "Van al FINAL de la frase",
        p: "A diferencia del español, «eh», «feen», «meen»… cierran la pregunta.",
        ex: [
          { ar: "اسمك إيه؟", fr: "esmak eh?", es: "¿cómo te llamas?" },
          { ar: "بتعمل إيه؟", fr: "bti3mel eh?", es: "¿qué haces?" },
          { ar: "رايح فين؟", fr: "raaye7 feen?", es: "¿a dónde vas?" },
          { ar: "ليه كده؟", fr: "leeh keda?", es: "¿por qué así?" }
        ]
      },
      {
        h: "«cuánto»: كام y بكام",
        p: "كام (kaam) para cantidad; بكام (bekaam) para precio.",
        ex: [
          { ar: "الساعة كام؟", fr: "es-saa3a kaam?", es: "¿qué hora es?" },
          { ar: "عندك كام سنة؟", fr: "3andak kaam sana?", es: "¿cuántos años tienes?" },
          { ar: "ده بكام؟", fr: "da bekaam?", es: "¿cuánto cuesta esto?" }
        ]
      }
    ],
    quiz: [
      { q: "«¿cómo te llamas?» (orden egipcio) =", options: ["esmak eh?", "eh esmak?", "ezzaay esmak?", "esmak meen?"], answer: 0, note: "La interrogativa va al final: esmak eh?" },
      { q: "«¿qué haces?» =", options: ["bti3mel eh?", "eh bti3mel?", "bti3mel feen?", "eh bta3mel?"], answer: 0, note: "eh (qué) al final: bti3mel eh?" },
      { q: "«¿a dónde vas?» =", options: ["raaye7 feen?", "feen raaye7?", "raaye7 emta?", "feen enta?"], answer: 0, note: "feen (dónde) al final: raaye7 feen?" },
      { q: "«por qué» =", options: ["leeh", "ezzaay", "feen", "emta"], answer: 0, note: "leeh = por qué; ezzaay = cómo." },
      { q: "«cuándo» =", options: ["emta", "feen", "meen", "kaam"], answer: 0, note: "emta = cuándo." },
      { q: "«cómo» =", options: ["ezzaay", "leeh", "kaam", "anhi"], answer: 0, note: "ezzaay = cómo." },
      { q: "¿Dónde suele ir la palabra interrogativa?", options: ["al final de la frase", "al principio", "en medio", "da igual"], answer: 0, note: "Regla clave del egipcio: al final." },
      { q: "«¿cuánto cuesta esto?» =", options: ["da bekaam?", "da kaam?", "bekaam da fiih?", "da feen?"], answer: 0, note: "Precio → bekaam: da bekaam?" }
    ]
  },

  /* ---------------- LOS DEMOSTRATIVOS ---------------- */
  {
    id: "demostrativos",
    title: "Los demostrativos (ده / دي / دول)",
    icon: "👉",
    level: "A2",
    intro: "«este / esta / estos» son <b>ده (da)</b>, <b>دي (di)</b> y <b>دول (dol)</b>. Regla clave: cuando acompañan a un sustantivo, van <b>DETRÁS</b> y el sustantivo lleva artículo الـ.",
    sections: [
      {
        h: "Las tres formas",
        p: "",
        ex: [
          { ar: "ده", fr: "da", es: "este / esto (m)" },
          { ar: "دي", fr: "di", es: "esta / esto (f)" },
          { ar: "دول", fr: "dol", es: "estos / estas" }
        ]
      },
      {
        h: "Detrás del sustantivo (con الـ)",
        p: "«este libro» se dice «el-libro este» → <b>el-ketaab da</b>.",
        ex: [
          { ar: "الكتاب ده", fr: "el-ketaab da", es: "este libro" },
          { ar: "البنت دي", fr: "el-bent di", es: "esta chica" },
          { ar: "العيال دول", fr: "el-3iyaal dol", es: "estos niños" }
        ]
      },
      {
        h: "Solos = «esto es…»",
        p: "Sin artículo forman una frase: «da ketaab» = esto es un libro.",
        ex: [
          { ar: "ده كتاب", fr: "da ketaab", es: "esto es un libro" },
          { ar: "دي شنطتي", fr: "di shantiti", es: "esta es mi bolsa" },
          { ar: "ده مين؟", fr: "da meen?", es: "¿quién es este?" },
          { ar: "كده", fr: "keda", es: "así / de esta manera" }
        ]
      }
    ],
    quiz: [
      { q: "«este libro» =", options: ["el-ketaab da", "da el-ketaab", "da ketaab", "el-ketaab di"], answer: 0, note: "El demostrativo va DETRÁS del sustantivo definido." },
      { q: "«esta chica» =", options: ["el-bent di", "di el-bent", "el-bent da", "bent di"], answer: 0, note: "Femenino → di, detrás: el-bent di." },
      { q: "«esta» (f) =", options: ["di", "da", "dol", "deh"], answer: 0, note: "di = femenino; da = masculino." },
      { q: "«estos niños» =", options: ["el-3iyaal dol", "dol el-3iyaal", "el-3iyaal da", "3iyaal dol"], answer: 0, note: "Plural → dol, detrás." },
      { q: "«esto es un libro» =", options: ["da ketaab", "el-ketaab da", "da el-ketaab", "ketaab da"], answer: 0, note: "Sin artículo = predicado: da ketaab." },
      { q: "Con un sustantivo, el demostrativo va…", options: ["detrás", "delante", "en medio", "no importa"], answer: 0, note: "Al contrario que en español: detrás." },
      { q: "«así / de esta manera» =", options: ["keda", "da", "di", "dol"], answer: 0, note: "keda = así." }
    ]
  },

  /* ---------------- TENER (عند) ---------------- */
  {
    id: "tener",
    title: "«Tener»: عند y معايا",
    icon: "🤲",
    level: "B1",
    goal: "Expresar posesión sin verbo «tener», con عند + sufijo, y diferenciarlo de «llevar encima» (معايا).",
    prereq: ["pronombres"],
    intro: "El árabe <b>no tiene el verbo «tener»</b>. La posesión se expresa con <b>عند (3and)</b> «en poder de» + un sufijo de persona. Para lo que llevas encima se usa <b>معـ (ma3a)</b>.",
    sections: [
      {
        h: "عند (3and) + sufijo = tener",
        p: "Son los mismos sufijos que los posesivos.",
        conj: {
          verb: "عند", vfr: "3and", meaning: "tener",
          rows: [
            { pf: "ana", ar: "عندي", fr: "3andi", es: "tengo" },
            { pf: "enta", ar: "عندك", fr: "3andak", es: "tienes (m)" },
            { pf: "enti", ar: "عندِك", fr: "3andek", es: "tienes (f)" },
            { pf: "howwa", ar: "عنده", fr: "3andu", es: "tiene (él)" },
            { pf: "heyya", ar: "عندها", fr: "3andaha", es: "tiene (ella)" },
            { pf: "e7na", ar: "عندنا", fr: "3andena", es: "tenemos" },
            { pf: "entu", ar: "عندكو", fr: "3andoku", es: "tenéis" },
            { pf: "homma", ar: "عندهم", fr: "3andohom", es: "tienen" }
          ]
        }
      },
      {
        h: "Negación, pasado y futuro",
        p: "Se niega con ما…ش; el tiempo lo marca كان / هيكون.",
        ex: [
          { ar: "ما عنديش", fr: "ma3andiish", es: "no tengo" },
          { ar: "كان عندي", fr: "kaan 3andi", es: "tenía" },
          { ar: "هيكون عندي", fr: "haykoun 3andi", es: "tendré" }
        ]
      },
      {
        h: "معايا (ma3aaya) — llevar encima",
        p: "Para lo que llevas contigo en el momento.",
        ex: [
          { ar: "معايا فلوس", fr: "ma3aaya feloos", es: "llevo dinero (encima)" },
          { ar: "معاك موبايل؟", fr: "ma3aak mobaayel?", es: "¿llevas móvil?" },
          { ar: "مش معايا", fr: "mesh ma3aaya", es: "no lo llevo" }
        ]
      }
    ],
    quiz: [
      { q: "«tengo» =", options: ["3andi", "3andak", "3andu", "3andena"], answer: 0, note: "3and + i = 3andi." },
      { q: "«(ella) tiene» =", options: ["3andaha", "3andu", "3andena", "3andak"], answer: 0, note: "‑ha = de ella: 3andaha." },
      { q: "«no tengo» =", options: ["ma3andiish", "mesh 3andi", "mafiish 3andi", "3andiish"], answer: 0, note: "Se abraza con ma…sh: ma3andiish." },
      { q: "«tenía» (pasado) =", options: ["kaan 3andi", "3andi", "haykoun 3andi", "kont 3andi"], answer: 0, note: "El pasado lo aporta كان: kaan 3andi." },
      { q: "«¿tienes (m) tiempo?» → «tienes» =", options: ["3andak", "3andek", "3andu", "3andena"], answer: 0, note: "Masculino: 3andak; femenino: 3andek." },
      { q: "¿Existe el verbo «tener» en árabe?", options: ["No, se usa عند (3and)", "Sí, es «tanawwal»", "Sí, es «kaan»", "Solo en futuro"], answer: 0, note: "No hay verbo «tener»: se usa la preposición عند." },
      { q: "«llevo dinero encima» =", options: ["ma3aaya feloos", "3andi feloos bezyaada", "feloos 3andaha", "mesh feloos"], answer: 0, note: "«encima / conmigo» → ma3aaya." },
      { q: "«tenemos» =", options: ["3andena", "3andoku", "3andohom", "3andi"], answer: 0, note: "‑na = nosotros: 3andena." }
    ]
  },

  /* ---------------- HAY / HABÍA / KAAN ---------------- */
  {
    id: "haber",
    title: "«Hay / había» y el verbo كان",
    icon: "📍",
    level: "B1",
    intro: "«hay» es <b>فيه (fiih)</b> y «no hay» <b>مفيش (mafiish)</b>. Para el pasado se usa <b>كان (kaan)</b>, que traduce «era», «estaba» y «había». En presente el verbo «ser» no se dice.",
    sections: [
      {
        h: "فيه / مفيش — hay / no hay",
        p: "",
        ex: [
          { ar: "فيه مطعم هنا", fr: "fiih mat3am hena", es: "hay un restaurante aquí" },
          { ar: "مفيش وقت", fr: "mafiish wa2t", es: "no hay tiempo" },
          { ar: "فيه إيه؟", fr: "fiih eh?", es: "¿qué hay? / ¿qué pasa?" }
        ]
      },
      {
        h: "كان (kaan) — era / estaba / había",
        p: "En presente NO se dice «ser»: <b>ana ta3baan</b> = «estoy cansado». En pasado sí aparece كان.",
        ex: [
          { ar: "كنت تعبان", fr: "kont ta3baan", es: "estaba cansado" },
          { ar: "كان كويس", fr: "kaan kwayyes", es: "estaba / era bien" },
          { ar: "كانت هنا", fr: "kaanet hena", es: "(ella) estaba aquí" },
          { ar: "كان فيه زحمة", fr: "kaan fiih za7ma", es: "había atasco" }
        ]
      },
      {
        h: "كان + presente = solía / estaba ‑ndo",
        p: "كان delante de un presente con بـ expresa costumbre o acción en curso en el pasado.",
        ex: [
          { ar: "كنت باكل", fr: "kont baakol", es: "estaba comiendo / solía comer" },
          { ar: "كان بيشتغل", fr: "kaan biyshtaghal", es: "trabajaba / solía trabajar" }
        ]
      },
      {
        h: "Futuro: هيكون / هكون",
        p: "El futuro de «ser / haber».",
        ex: [
          { ar: "هيكون فيه حفلة", fr: "haykoun fiih 7afla", es: "habrá una fiesta" },
          { ar: "هكون مشغول", fr: "hakoun mashghool", es: "estaré ocupado" }
        ]
      }
    ],
    quiz: [
      { q: "«hay un restaurante» =", options: ["fiih mat3am", "mafiish mat3am", "kaan mat3am", "mat3am fiih"], answer: 0, note: "«hay» = fiih." },
      { q: "«no hay tiempo» =", options: ["mafiish wa2t", "mesh wa2t", "fiih wa2t", "ma wa2tsh"], answer: 0, note: "«no hay» = mafiish." },
      { q: "«estaba cansado» =", options: ["kont ta3baan", "ana ta3baan", "hakoun ta3baan", "kaan ta3baan"], answer: 0, note: "«yo estaba» = kont (de kaan)." },
      { q: "«había atasco» =", options: ["kaan fiih za7ma", "fiih za7ma", "haykoun za7ma", "mafiish za7ma"], answer: 0, note: "había = kaan fiih." },
      { q: "«estoy cansado» (presente) =", options: ["ana ta3baan", "ana kaan ta3baan", "ana bakoun ta3baan", "kont ta3baan"], answer: 0, note: "En presente NO se dice «ser»: ana ta3baan." },
      { q: "«habrá una fiesta» =", options: ["haykoun fiih 7afla", "kaan fiih 7afla", "fiih 7afla", "mafiish 7afla"], answer: 0, note: "Futuro de haber → haykoun fiih." },
      { q: "«solía comer / estaba comiendo» =", options: ["kont baakol", "baakol", "hakoun baakol", "akalt"], answer: 0, note: "كان + presente: kont baakol." },
      { q: "«(ella) estaba aquí» =", options: ["kaanet hena", "kaan hena", "kont hena", "haykoun hena"], answer: 0, note: "heyya → kaanet." }
    ]
  },

  /* ---------------- EL PLURAL ---------------- */
  {
    id: "plural",
    title: "El plural (الجمع)",
    icon: "👥",
    level: "B1",
    goal: "Reconocer los tres tipos de plural, familiarizarte con los patrones irregulares más frecuentes y aplicar la concordancia (cosas → femenino singular).",
    prereq: ["pronombres"],
    intro: "El plural egipcio tiene tres tipos: dos <b>regulares</b> (terminación fija) y el <b>plural irregular</b> (llamado «roto» en gramática árabe), que reestructura la palabra por dentro. Los irregulares no son 100% predecibles, pero siguen <b>patrones</b> reconocibles: memorizarlos en grupo es mucho más fácil que uno a uno.",
    sections: [
      {
        h: "Tipo 1 — Femenino regular: ‑ات (‑aat)",
        p: "Se añade <b>‑aat</b>. Muy productivo, sobre todo con palabras terminadas en ‑a y con préstamos.",
        ex: [
          { ar: "كلمة ← كلمات", fr: "kelma → kelmaat", es: "palabra → palabras" },
          { ar: "ساعة ← ساعات", fr: "saa3a → saa3aat", es: "hora / reloj → horas" },
          { ar: "عربية ← عربيات", fr: "3arabeyya → 3arabeyyaat", es: "coche → coches" },
          { ar: "حاجة ← حاجات", fr: "7aaga → 7agaat", es: "cosa → cosas" },
          { ar: "تليفون ← تليفونات", fr: "telefoon → telefonaat", es: "teléfono → teléfonos" },
          { ar: "ترابيزة ← ترابيزات", fr: "tarabeeza → tarabezaat", es: "mesa → mesas" }
        ]
      },
      {
        h: "Tipo 2 — Masculino regular: ‑ين (‑iin)",
        p: "Se añade <b>‑iin</b>. Casi siempre <b>personas</b>: profesiones, nacionalidades, adjetivos referidos a gente.",
        ex: [
          { ar: "مدرس ← مدرسين", fr: "mudarres → mudarrisiin", es: "profesor → profesores" },
          { ar: "مهندس ← مهندسين", fr: "mohandes → mohandisiin", es: "ingeniero → ingenieros" },
          { ar: "موظف ← موظفين", fr: "mowazzaf → mowazzafiin", es: "empleado → empleados" },
          { ar: "مصري ← مصريين", fr: "masri → masriyyiin", es: "egipcio → egipcios" },
          { ar: "لاعب ← لاعبين", fr: "laa3eb → laa3ebiin", es: "jugador → jugadores" }
        ]
      },
      {
        h: "Tipo 3 — El plural irregular (por patrones)",
        p: "La palabra cambia por dentro (vocales, a veces consonantes). No hay terminación fija: reconoce el <b>molde</b>. Abajo tienes los cuatro moldes más comunes."
      },
      {
        h: "Patrón أفعال (af3aal)",
        p: "Muy frecuente en palabras cortas de 3 consonantes. Añade <b>a‑</b> delante y <b>‑aa‑</b> dentro.",
        ex: [
          { ar: "يوم ← أيام", fr: "yoom → ayyaam", es: "día → días" },
          { ar: "ولد ← أولاد", fr: "walad → awlaad", es: "niño → niños" },
          { ar: "لون ← ألوان", fr: "loon → alwaan", es: "color → colores" },
          { ar: "فيلم ← أفلام", fr: "film → aflaam", es: "película → películas" },
          { ar: "باب ← أبواب", fr: "baab → abwaab", es: "puerta → puertas" },
          { ar: "قلم ← أقلام", fr: "2alam → a2laam", es: "bolígrafo → bolígrafos" },
          { ar: "سوق ← أسواق", fr: "soo2 → aswaa2", es: "mercado → mercados" },
          { ar: "نوع ← أنواع", fr: "noo3 → anwaa3", es: "tipo → tipos" }
        ]
      },
      {
        h: "Patrón فُعول (fu3uul)",
        p: "Molde con <b>‑uu‑</b>. Típico de nombres de una sílaba.",
        ex: [
          { ar: "بيت ← بيوت", fr: "beet → beyuut", es: "casa → casas" },
          { ar: "كتاب ← كتب", fr: "ketaab → kotob", es: "libro → libros" },
          { ar: "قلب ← قلوب", fr: "2alb → 2eluub", es: "corazón → corazones" },
          { ar: "عين ← عيون", fr: "3een → 3eyuun", es: "ojo → ojos" },
          { ar: "درس ← دروس", fr: "dars → doruus", es: "lección → lecciones" },
          { ar: "جيب ← جيوب", fr: "geeb → geyuub", es: "bolsillo → bolsillos" }
        ]
      },
      {
        h: "Patrón فِعال (fi3aal)",
        p: "Molde con <b>‑aa‑</b> al final. Frecuente en animales y en adjetivos de personas.",
        ex: [
          { ar: "كلب ← كلاب", fr: "kalb → kilaab", es: "perro → perros" },
          { ar: "جمل ← جمال", fr: "gamal → gimaal", es: "camello → camellos" },
          { ar: "جبل ← جبال", fr: "gabal → gibaal", es: "montaña → montañas" },
          { ar: "بحر ← بحار", fr: "ba7r → be7aar", es: "mar → mares" },
          { ar: "كبير ← كبار", fr: "kebiir → kobaar", es: "grande / mayor → grandes" },
          { ar: "راجل ← رجالة", fr: "raagel → riggaala", es: "hombre → hombres" }
        ]
      },
      {
        h: "Patrón مفاعل / فعاليل (palabras largas)",
        p: "Para palabras de <b>4 consonantes</b> (muchas empiezan por ma‑) o con vocal larga: molde <b>ma‑aa‑e‑</b> / <b>‑a‑aa‑ii‑</b>.",
        ex: [
          { ar: "مكتب ← مكاتب", fr: "maktab → makaateb", es: "oficina / escritorio → oficinas" },
          { ar: "مدرسة ← مدارس", fr: "madrasa → madaares", es: "escuela → escuelas" },
          { ar: "مطعم ← مطاعم", fr: "mat3am → mataa3em", es: "restaurante → restaurantes" },
          { ar: "مفتاح ← مفاتيح", fr: "moftaa7 → mafatii7", es: "llave → llaves" },
          { ar: "شباك ← شبابيك", fr: "shebbaak → shababiik", es: "ventana → ventanas" },
          { ar: "فندق ← فنادق", fr: "fondo2 → fanaade2", es: "hotel → hoteles" },
          { ar: "فستان ← فساتين", fr: "fostaan → fasatiin", es: "vestido → vestidos" },
          { ar: "عصفور ← عصافير", fr: "3osfoor → 3asafiir", es: "pájaro → pájaros" }
        ]
      },
      {
        h: "Muy irregulares (de uso diario)",
        p: "No siguen molde claro: apréndelos de memoria, salen constantemente.",
        ex: [
          { ar: "بنت ← بنات", fr: "bent → banaat", es: "chica → chicas" },
          { ar: "ست ← ستات", fr: "sett → settaat", es: "señora / mujer → mujeres" },
          { ar: "أخ ← إخوات", fr: "akh → ekhwaat", es: "hermano → hermanos" },
          { ar: "إنسان ← ناس", fr: "insaan → naas", es: "persona → gente" },
          { ar: "أكل ← أكلات", fr: "akl → aklaat", es: "comida → comidas / platos" },
          { ar: "حاجة ← حاجات", fr: "7aaga → 7agaat", es: "cosa → cosas" }
        ]
      },
      {
        h: "Tabla de referencia rápida",
        table: {
          cols: ["Patrón", "Ejemplo", "Plural"],
          rows: [
            ["‑aat (fem. regular)", "<span class='fr'>saa3a</span>", "<span class='fr'>saa3aat</span>"],
            ["‑iin (masc. regular)", "<span class='fr'>mudarres</span>", "<span class='fr'>mudarrisiin</span>"],
            ["af3aal", "<span class='fr'>yoom</span>", "<span class='fr'>ayyaam</span>"],
            ["fu3uul", "<span class='fr'>beet</span>", "<span class='fr'>beyuut</span>"],
            ["fi3aal", "<span class='fr'>kalb</span>", "<span class='fr'>kilaab</span>"],
            ["mafaa3el", "<span class='fr'>maktab</span>", "<span class='fr'>makaateb</span>"]
          ]
        }
      },
      {
        h: "Regla de concordancia",
        p: "Los plurales de <b>cosas</b> (no personas) concuerdan en <b>femenino singular</b>: «los coches (son) bonitos» = el-3arabeyyaat 7elwa (no 7elwiin). Con <b>personas</b>, sí se usa el plural.",
        ex: [
          { ar: "العربيات حلوة", fr: "el-3arabeyyaat 7elwa", es: "los coches son bonitos" },
          { ar: "الكتب غالية", fr: "el-kotob ghalya", es: "los libros son caros" },
          { ar: "المدرسين مبسوطين", fr: "el-mudarrisiin mabsoutiin", es: "los profesores están contentos" }
        ],
        warn: "Error típico del hispanohablante: decir «el-kotob kobaar». Como «libros» son cosas, va en femenino singular: <b>el-kotob kebiira</b>.",
        refs: [{ id: "comparativo" }]
      }
    ],
    quiz: [
      { q: "Plural de كتاب (libro) =", options: ["kotob", "ketabaat", "kitaab", "ketabiin"], answer: 0, note: "Patrón fu3uul: ketaab → kotob." },
      { q: "Plural de بنت (chica) =", options: ["banaat", "bentaat", "banaatiin", "benaat"], answer: 0, note: "Irregular: bent → banaat." },
      { q: "«coches» (de 3arabeyya) =", options: ["3arabeyyaat", "3arabeyyiin", "3araayeb", "3arabaat"], answer: 0, note: "Femenino regular ‑aat: 3arabeyyaat." },
      { q: "Plural de ولد (niño) =", options: ["awlaad", "weladaat", "awladiin", "wilaad"], answer: 0, note: "Patrón af3aal: walad → awlaad." },
      { q: "Plural de مدرس (profesor) =", options: ["mudarrisiin", "mudarrisaat", "madaares", "mudarresa"], answer: 0, note: "Persona → ‑iin: mudarrisiin." },
      { q: "Plural de بيت (casa) =", options: ["beyuut", "beetaat", "abyaat", "beyutiin"], answer: 0, note: "Patrón fu3uul: beet → beyuut." },
      { q: "Plural de يوم (día) =", options: ["ayyaam", "yomaat", "ayaam", "yowuum"], answer: 0, note: "Patrón af3aal: yoom → ayyaam." },
      { q: "Plural de لون (color) =", options: ["alwaan", "lonaat", "alwaaniin", "leween"], answer: 0, note: "Patrón af3aal: loon → alwaan." },
      { q: "Plural de كلب (perro) =", options: ["kilaab", "kalbaat", "kloob", "aklaab"], answer: 0, note: "Patrón fi3aal: kalb → kilaab." },
      { q: "Plural de مكتب (oficina) =", options: ["makaateb", "maktabaat", "makatiib", "maktabiin"], answer: 0, note: "Palabra larga → mafaa3el: makaateb." },
      { q: "Plural de مفتاح (llave) =", options: ["mafatii7", "moftaa7aat", "mafaate7", "maftu7iin"], answer: 0, note: "mafaa3iil: moftaa7 → mafatii7." },
      { q: "Plural de ست (señora) =", options: ["settaat", "sittiin", "asaat", "setaat"], answer: 0, note: "Irregular frecuente: sett → settaat." },
      { q: "Los plurales de cosas concuerdan en…", options: ["femenino singular", "masculino plural", "masculino singular", "femenino plural"], answer: 0, note: "Cosas en plural → adjetivo femenino singular." },
      { q: "«los libros son caros» =", options: ["el-kotob ghalya", "el-kotob ghalyiin", "el-kotob ghaali", "el-kotob ghalyaat"], answer: 0, note: "Cosas → femenino singular: ghalya." },
      { q: "«hombres» (de raagel) =", options: ["riggaala", "raagliin", "rigaalaat", "ruggaal"], answer: 0, note: "fi3aal irregular: raagel → riggaala." }
    ]
  },

  /* ---------------- EL IMPERATIVO ---------------- */
  {
    id: "imperativo",
    title: "El imperativo (الأمر)",
    icon: "🗯️",
    level: "B1",
    intro: "El imperativo se forma a partir del presente <b>quitando el prefijo</b> de persona. «بتكتب (bitiktib) escribes» → «اكتب (iktib) ¡escribe!».",
    sections: [
      {
        h: "Formación: m / f / plural",
        p: "Masculino (base), femenino <b>+i</b>, plural <b>+u</b>.",
        ex: [
          { ar: "اكتب", fr: "iktib", es: "¡escribe! (m)" },
          { ar: "اكتبي", fr: "iktibi", es: "¡escribe! (f)" },
          { ar: "اكتبو", fr: "iktibu", es: "¡escribid!" }
        ]
      },
      {
        h: "Verbos frecuentes",
        p: "",
        ex: [
          { ar: "روح", fr: "rou7", es: "¡ve!" },
          { ar: "تعالى", fr: "ta3aala", es: "¡ven!" },
          { ar: "استنى", fr: "istanna", es: "¡espera!" },
          { ar: "اسمع", fr: "isma3", es: "¡escucha!" },
          { ar: "خد", fr: "khod", es: "¡toma!" },
          { ar: "اتفضل", fr: "itfaddal", es: "¡adelante! / por favor" }
        ]
      },
      {
        h: "Imperativo negativo: ما…ش",
        p: "«no + presente» abrazado con ما…ش.",
        ex: [
          { ar: "ماتروحش", fr: "matrou7sh", es: "no vayas" },
          { ar: "ماتقلقش", fr: "matla2sh", es: "no te preocupes" },
          { ar: "ماتنساش", fr: "matensaash", es: "no olvides" }
        ]
      }
    ],
    quiz: [
      { q: "«¡escribe!» (m) =", options: ["iktib", "baktib", "katabt", "hatiktib"], answer: 0, note: "Presente sin prefijo: iktib." },
      { q: "«¡ven!» =", options: ["ta3aala", "rou7", "istanna", "khod"], answer: 0, note: "ta3aala = ¡ven!" },
      { q: "«¡escribe!» a una mujer =", options: ["iktibi", "iktib", "iktibu", "biktibi"], answer: 0, note: "Femenino añade ‑i: iktibi." },
      { q: "«¡espera!» =", options: ["istanna", "isma3", "khod", "rou7"], answer: 0, note: "istanna = ¡espera!" },
      { q: "«no vayas» =", options: ["matrou7sh", "mesh rou7", "ma rou7", "mesh harou7"], answer: 0, note: "Imperativo negativo: ma…sh → matrou7sh." },
      { q: "«¡escuchad!» (plural) =", options: ["isma3u", "isma3", "isma3i", "bitisma3u"], answer: 0, note: "Plural añade ‑u: isma3u." },
      { q: "«adelante / pasa, por favor» =", options: ["itfaddal", "balaash", "khod", "rou7"], answer: 0, note: "itfaddal = adelante / sírvete." }
    ]
  },

  /* ---------------- COMPARATIVO Y SUPERLATIVO ---------------- */
  {
    id: "comparativo",
    title: "Comparativo y superlativo",
    icon: "📊",
    level: "B1",
    intro: "El comparativo usa el patrón <b>أفعل (af3al)</b>: de كبير (kebiir, grande) → أكبر (akbar, más grande). «más… que» = <b>أكبر من (akbar men)</b>.",
    sections: [
      {
        h: "El patrón af3al",
        p: "Se aplica a la mayoría de adjetivos.",
        ex: [
          { ar: "كبير ← أكبر", fr: "kebiir → akbar", es: "grande → más grande" },
          { ar: "صغير ← أصغر", fr: "soghayyar → asghar", es: "pequeño → más pequeño" },
          { ar: "كويس ← أحسن", fr: "kwayyes → a7san", es: "bueno → mejor" },
          { ar: "وحش ← أوحش", fr: "we7esh → aw7ash", es: "malo → peor" },
          { ar: "كتير ← أكتر", fr: "keteer → aktar", es: "mucho → más" }
        ]
      },
      {
        h: "«más … que» = … من (men)",
        p: "El segundo término va tras <b>من</b>.",
        ex: [
          { ar: "أكبر من", fr: "akbar men", es: "más grande que" },
          { ar: "ده أحسن من ده", fr: "da a7san men da", es: "este es mejor que ese" },
          { ar: "أنا أطول منك", fr: "ana atwal mennak", es: "soy más alto que tú" }
        ]
      },
      {
        h: "El superlativo: أفعل + nombre",
        p: "El comparativo delante de un nombre = superlativo: «akbar beet» = la casa más grande.",
        ex: [
          { ar: "أكبر مدينة", fr: "akbar madiina", es: "la ciudad más grande" },
          { ar: "أحسن حاجة", fr: "a7san 7aaga", es: "lo mejor" },
          { ar: "ده الأحسن", fr: "da el-a7san", es: "este es el mejor" }
        ]
      }
    ],
    quiz: [
      { q: "Comparativo de كبير (grande) =", options: ["akbar", "kebiir", "akbeer", "kbaar"], answer: 0, note: "Patrón af3al: kebiir → akbar." },
      { q: "«mejor» (de kwayyes) =", options: ["a7san", "akwas", "kwayyes awi", "a7ssan"], answer: 0, note: "Irregular útil: kwayyes → a7san." },
      { q: "«más grande que» =", options: ["akbar men", "akbar fi", "akbar le", "akbar 3an"], answer: 0, note: "«que» = من (men)." },
      { q: "«más pequeño» (de soghayyar) =", options: ["asghar", "soghayyar aktar", "asghaar", "soghar"], answer: 0, note: "soghayyar → asghar." },
      { q: "«la ciudad más grande» =", options: ["akbar madiina", "madiina akbar", "el-madiina akbar", "madiina el-akbar"], answer: 0, note: "Superlativo = af3al + nombre: akbar madiina." },
      { q: "«soy más alto que tú» =", options: ["ana atwal mennak", "ana tawiil mennak", "ana atwal fiik", "ana atwal 3annak"], answer: 0, note: "atwal + men + ‑ak = atwal mennak." },
      { q: "«lo mejor» =", options: ["a7san 7aaga", "7aaga a7san", "el-7aaga a7san", "a7san el-7aaga"], answer: 0, note: "af3al + nombre: a7san 7aaga." }
    ]
  },

  /* ---------------- EL PARTICIPIO ACTIVO ---------------- */
  {
    id: "participios",
    title: "El participio activo (اسم الفاعل)",
    icon: "🎭",
    level: "B1",
    goal: "Usar participios como رايح / عارف / فاهم para expresar estados, acciones ya hechas e intenciones inmediatas — algo omnipresente en el habla real.",
    prereq: ["presente"],
    intro: "El participio activo es una forma del verbo que funciona como <b>adjetivo</b>: describe a quien hace (o ya ha hecho) la acción. Es utilísimo, y muchas «palabras» que ya conoces (عايز، عارف، فاهم) son en realidad participios.",
    sections: [
      {
        h: "Cómo se forma y concuerda",
        p: "Del verbo se saca el patrón <b>فاعل (faa3el)</b>. Concuerda en género y número con el sujeto, como un adjetivo.",
        table: {
          cols: ["Verbo", "m", "f", "pl"],
          rows: [
            ["katab (escribir)", "<span class='fr'>kaateb</span>", "<span class='fr'>katba</span>", "<span class='fr'>katbiin</span>"],
            ["raa7 (ir)", "<span class='fr'>raaye7</span>", "<span class='fr'>rayha</span>", "<span class='fr'>rayhiin</span>"],
            ["3eref (saber)", "<span class='fr'>3aaref</span>", "<span class='fr'>3arfa</span>", "<span class='fr'>3arfiin</span>"]
          ]
        }
      },
      {
        h: "Uso 1: estado o conocimiento (ahora)",
        p: "Con verbos de mente/percepción equivale a un presente de estado: «sé», «entiendo», «quiero».",
        ex: [
          { ar: "أنا عارف", fr: "ana 3aaref", es: "(yo) lo sé" },
          { ar: "مش فاهم", fr: "mesh faahem", es: "no entiendo" },
          { ar: "إنتي عايزة إيه؟", fr: "enti 3ayza eh?", es: "¿tú (f) qué quieres?" }
        ],
        note: "Para «saber», «querer» y «entender» el egipcio prefiere el participio (3aaref, 3aayez, faahem) al verbo con بـ. Decir «ba3raf» para «lo sé» suena raro."
      },
      {
        h: "Uso 2: acción ya hecha (resultado presente)",
        p: "Equivale a un pretérito perfecto con estado resultante: «ya he… y sigue así».",
        ex: [
          { ar: "أنا كاتب الجواب", fr: "ana kaateb el-gawaab", es: "he escrito la carta (y está escrita)" },
          { ar: "هي واصلة", fr: "heyya wasla", es: "(ella) ya ha llegado / está aquí" },
          { ar: "إحنا واكلين", fr: "e7na wakliin", es: "ya hemos comido" }
        ]
      },
      {
        h: "Uso 3: futuro inmediato (verbos de movimiento)",
        p: "Con verbos de movimiento indica un plan inminente: «voy a», «salgo mañana».",
        ex: [
          { ar: "أنا رايح دلوقتي", fr: "ana raaye7 delwa2ti", es: "voy ahora mismo" },
          { ar: "مسافر بكرة", fr: "msaafer bokra", es: "viajo / salgo mañana" },
          { ar: "إحنا جايين", fr: "e7na gayiin", es: "ya venimos / estamos llegando" }
        ]
      },
      {
        h: "Participios que usarás cada día",
        ex: [
          { ar: "عارف", fr: "3aaref", es: "saber (que sé)" },
          { ar: "فاهم", fr: "faahem", es: "entender" },
          { ar: "عايز", fr: "3aayez", es: "querer" },
          { ar: "رايح", fr: "raaye7", es: "ir (de camino)" },
          { ar: "جاي", fr: "gaay", es: "venir (llegando)" },
          { ar: "ساكن", fr: "saaken", es: "vivir / residir" },
          { ar: "لابس", fr: "laabes", es: "llevar puesto" },
          { ar: "ماشي", fr: "maashi", es: "andando / vale, de acuerdo" }
        ]
      },
      {
        h: "En contexto",
        dialog: [
          { who: "A", ar: "إنت رايح فين؟", fr: "enta raaye7 feen?", es: "¿a dónde vas?" },
          { who: "B", ar: "رايح الشغل، إنتي عارفة الطريق؟", fr: "raaye7 esh-shoghl, enti 3arfa el-tarii2?", es: "voy al trabajo, ¿(tú, f) sabes el camino?" },
          { who: "A", ar: "آه عارفة، وأنا كمان جاية", fr: "aah 3arfa, we ana kamaan gaya", es: "sí lo sé, y yo también voy" }
        ],
        warn: "No confundas participio y presente: <b>3aaref</b> = «lo sé» (estado), <b>ba3raf</b> = «me entero». Con movimiento: <b>raaye7</b> = «voy ahora», <b>barou7</b> = «voy habitualmente».",
        refs: [{ id: "presente" }, { id: "futuro" }]
      }
    ],
    quiz: [
      { q: "«(yo) lo sé» (estado) =", options: ["ana 3aaref", "ana ba3raf", "ana 3eref", "ana ha3raf"], answer: 0, note: "Estado mental → participio: 3aaref." },
      { q: "Participio femenino de راح (ir) =", options: ["rayha", "raaye7", "rayhiin", "raa7et"], answer: 0, note: "faa3el fem: raaye7 → rayha." },
      { q: "«no entiendo» =", options: ["mesh faahem", "ma bafhamsh", "mesh bafham", "ma faahemsh"], answer: 0, note: "Participio negado con mesh: mesh faahem." },
      { q: "«voy ahora mismo» (movimiento) =", options: ["ana raaye7 delwa2ti", "ana barou7 delwa2ti", "ana harou7 delwa2ti", "ana ro7t delwa2ti"], answer: 0, note: "Futuro inmediato = participio: raaye7." },
      { q: "«ya hemos comido» =", options: ["e7na wakliin", "e7na akalna", "e7na binaakol", "e7na hanaakol"], answer: 0, note: "Resultado presente → participio: wakliin." },
      { q: "Participio plural de عرف (saber) =", options: ["3arfiin", "3aaref", "3arfa", "3arefu"], answer: 0, note: "Plural: 3aaref → 3arfiin." },
      { q: "«¿qué quieres (f)?» =", options: ["enti 3ayza eh?", "enti 3aayez eh?", "enta 3ayza eh?", "enti 3ayziin eh?"], answer: 0, note: "Concordancia femenina: 3aayez → 3ayza." },
      { q: "El participio concuerda en…", options: ["género y número", "solo número", "solo género", "no concuerda"], answer: 0, note: "Como un adjetivo: género y número." },
      { q: "«viajo mañana» (plan) =", options: ["msaafer bokra", "basaafer bokra", "saafert bokra", "hasaafer embaare7"], answer: 0, note: "Movimiento + plan → participio: msaafer." },
      { q: "«ana kaateb el-gawaab» =", options: ["he escrito la carta", "escribiré la carta", "escribo cartas", "escribí una carta"], answer: 0, note: "Participio de resultado: la tengo escrita." }
    ]
  },

  /* ---------------- PRONOMBRES DE OBJETO ---------------- */
  {
    id: "objeto",
    title: "Pronombres de objeto (‑ni, ‑u, ‑ha…)",
    icon: "🎯",
    level: "B1",
    goal: "Pegar el complemento al verbo («me vio», «te quiero», «lo compré») y negarlo bien.",
    prereq: ["pronombres", "pasado"],
    intro: "En egipcio el objeto («me, te, lo, la, nos…») no va suelto: se <b>pega como sufijo al verbo</b>. شاف (shaaf, «vio») + ‑ني (‑ni, «me») = شافني (shaafni, «me vio»).",
    sections: [
      {
        h: "Los sufijos de objeto",
        p: "Casi iguales a los posesivos, salvo «me», que en el verbo es <b>‑ني (‑ni)</b>.",
        table: {
          cols: ["Objeto", "Sufijo", "Ejemplo (shaaf «vio»)"],
          rows: [
            ["me", "‑ni", "<span class='fr'>shaafni</span> — me vio"],
            ["te (m)", "‑ak", "<span class='fr'>shaafak</span> — te vio"],
            ["te (f)", "‑ek", "<span class='fr'>shaafek</span> — te vio"],
            ["lo (él)", "‑u", "<span class='fr'>shaafu</span> — lo vio"],
            ["la (ella)", "‑ha", "<span class='fr'>shaafha</span> — la vio"],
            ["nos", "‑na", "<span class='fr'>shaafna</span> — nos vio"],
            ["os", "‑ku", "<span class='fr'>shaafku</span> — os vio"],
            ["los / las", "‑hom", "<span class='fr'>shaafhom</span> — los vio"]
          ]
        },
        warn: "En el sustantivo «mi» es ‑i (بيتي beeti); en el verbo «me» es ‑ni (شافني shaafni). No los mezcles."
      },
      {
        h: "Con presente y futuro",
        p: "El sufijo se añade igual en cualquier tiempo.",
        ex: [
          { ar: "بحبك", fr: "ba7ebbak", es: "te quiero (m)" },
          { ar: "بشوفها كل يوم", fr: "bashoofha kol yoom", es: "la veo cada día" },
          { ar: "هكلمك بكرة", fr: "hakallemak bokra", es: "te llamaré mañana" },
          { ar: "عايز أشوفه", fr: "3aayez ashoofu", es: "quiero verlo" }
        ]
      },
      {
        h: "Negar un verbo con objeto: ما…ش abraza todo",
        p: "El ما‑ va delante y el ‑ش detrás de <b>todo</b> el bloque (verbo + objeto).",
        ex: [
          { ar: "ماشفتهوش", fr: "ma shoftohoosh", es: "no lo vi" },
          { ar: "مبحبهاش", fr: "ma ba7ebbahaash", es: "no la quiero" },
          { ar: "ماكلمنيش", fr: "ma kallemniish", es: "no me habló" }
        ],
        note: "El ‑ش se pega tras el objeto: shoft + u → shoftu → negativo ma shoftohoosh."
      },
      {
        h: "En contexto",
        dialog: [
          { who: "A", ar: "شفت أحمد؟", fr: "shoft a7mad?", es: "¿viste a Ahmad?" },
          { who: "B", ar: "لأ، ماشفتهوش النهارده", fr: "la2, ma shoftohoosh en-naharda", es: "no, no lo he visto hoy" },
          { who: "A", ar: "لو شفته، قوله يكلمني", fr: "law shoftu, 2ollu yekallemni", es: "si lo ves, dile que me llame" }
        ],
        refs: [{ id: "pasado" }, { id: "negacion" }, { id: "condicional" }]
      }
    ],
    quiz: [
      { q: "«me vio» =", options: ["shaafni", "shaafi", "shaafak", "shaafu"], answer: 0, note: "«me» en el verbo = ‑ni: shaafni." },
      { q: "«te quiero (m)» =", options: ["ba7ebbak", "ba7ebbik", "ba7ebbu", "ba7ebbni"], answer: 0, note: "‑ak = te (m): ba7ebbak." },
      { q: "«lo vi» =", options: ["shoftu", "shaaftu", "shoftni", "shoftha"], answer: 0, note: "shoft (vi) + u (lo) = shoftu." },
      { q: "«la veo cada día» =", options: ["bashoofha kol yoom", "bashoofu kol yoom", "bashoofni kol yoom", "shoftha kol yoom"], answer: 0, note: "‑ha = la: bashoofha." },
      { q: "«no lo vi» =", options: ["ma shoftohoosh", "mesh shoftu", "ma shoftsh", "ma shoftuu"], answer: 0, note: "ma…sh abraza verbo+objeto: ma shoftohoosh." },
      { q: "En el verbo, «me» se dice…", options: ["‑ni", "‑i", "‑na", "‑ne"], answer: 0, note: "Verbo: ‑ni; sustantivo: ‑i." },
      { q: "«te llamaré mañana» =", options: ["hakallemak bokra", "bakallemak bokra", "kallemtak bokra", "hakallemni bokra"], answer: 0, note: "Futuro ha‑ + objeto ‑ak: hakallemak." },
      { q: "«quiero verlo» =", options: ["3aayez ashoofu", "3aayez shoftu", "3aayez bashoofu", "3aayez hashoofu"], answer: 0, note: "Subjuntivo sin بـ + objeto: ashoofu." },
      { q: "«nos vio» =", options: ["shaafna", "shaafhom", "shaafni", "shaafku"], answer: 0, note: "‑na = nos: shaafna." },
      { q: "«los vio» =", options: ["shaafhom", "shaafha", "shaafku", "shaafu"], answer: 0, note: "‑hom = los/las: shaafhom." }
    ]
  },

  /* ---------------- CONDICIONAL CON LAW ---------------- */
  {
    id: "condicional",
    title: "El condicional con لو (law)",
    icon: "🔀",
    level: "B1",
    goal: "Construir frases «si…, entonces…»: condiciones reales, hipótesis y situaciones imposibles del pasado.",
    prereq: ["pasado", "futuro"],
    intro: "«Si» es sobre todo <b>لو (law)</b>. La estructura típica es <b>law + verbo (a menudo en pasado)</b> con una respuesta en <b>futuro (هـ)</b> o en imperativo. También existe إذا (iza), más formal.",
    sections: [
      {
        h: "Condición real o probable",
        p: "law + presente/pasado, y respuesta en futuro o imperativo.",
        ex: [
          { ar: "لو عندي وقت هيجي", fr: "law 3andi wa2t haagi", es: "si tengo tiempo, vendré" },
          { ar: "لو تحب، تعالى", fr: "law te7ebb, ta3aala", es: "si quieres, ven" },
          { ar: "لو شفته، قوله", fr: "law shoftu, 2ollu", es: "si lo ves, díselo" }
        ]
      },
      {
        h: "Hipótesis o deseo",
        p: "law + pasado con respuesta en هـ para lo poco probable o imaginado.",
        ex: [
          { ar: "لو كسبت المليون هسافر", fr: "law kesebt el-melyoon hasaafer", es: "si ganara el millón, viajaría" },
          { ar: "لو كنت مكانك", fr: "law kont makaanak", es: "si (yo) estuviera en tu lugar" }
        ]
      },
      {
        h: "Lo que «habría» pasado (con kaan)",
        p: "Para lo imposible en el pasado: <b>law kont… , kont…</b> («si hubiera…, habría…»).",
        ex: [
          { ar: "لو كنت عارف، كنت جيت", fr: "law kont 3aaref, kont geet", es: "si lo hubiera sabido, habría venido" },
          { ar: "لو ذاكرت، كنت نجحت", fr: "law zaakert, kont naga7t", es: "si hubiera estudiado, habría aprobado" }
        ],
        note: "El truco de lo irreal en pasado: <b>كان (kont/kaan)</b> aparece en las dos partes de la frase."
      },
      {
        h: "Conectores de condición",
        table: {
          cols: ["Árabe", "Franco", "Español"],
          rows: [
            ["<span class='ar' dir='rtl' lang='ar'>لو</span>", "<span class='fr'>law</span>", "si (el más usado)"],
            ["<span class='ar' dir='rtl' lang='ar'>إذا</span>", "<span class='fr'>iza</span>", "si (formal)"],
            ["<span class='ar' dir='rtl' lang='ar'>لولا</span>", "<span class='fr'>lawla</span>", "si no fuera por"],
            ["<span class='ar' dir='rtl' lang='ar'>يبقى</span>", "<span class='fr'>yeb2a</span>", "entonces / resulta que"]
          ]
        },
        refs: [{ id: "haber" }, { id: "futuro" }]
      },
      {
        h: "En contexto",
        dialog: [
          { who: "A", ar: "هتيجي الحفلة؟", fr: "hatiigi el-7afla?", es: "¿vendrás a la fiesta?" },
          { who: "B", ar: "لو خلصت شغلي بدري، هيجي", fr: "law khallast shoghli badri, haagi", es: "si termino pronto, vendré" },
          { who: "A", ar: "ولو ماخلصتش؟", fr: "we law ma khallastesh?", es: "¿y si no terminas?" },
          { who: "B", ar: "يبقى هشوفكو بكرة", fr: "yeb2a hashoofku bokra", es: "entonces os veo mañana" }
        ]
      }
    ],
    quiz: [
      { q: "«si» (el más usado en habla) =", options: ["law", "iza", "lawla", "yeb2a"], answer: 0, note: "law es el «si» coloquial habitual." },
      { q: "«si quieres, ven» =", options: ["law te7ebb, ta3aala", "iza te7ebb, geet", "law te7ebb, gaay", "lawla te7ebb, ta3aala"], answer: 0, note: "law + presente, respuesta en imperativo." },
      { q: "La respuesta a la condición suele ir en…", options: ["futuro (هـ) o imperativo", "solo pasado", "presente con بـ", "participio"], answer: 0, note: "Típicamente futuro con ha‑ o una orden." },
      { q: "«si lo hubiera sabido, habría venido» =", options: ["law kont 3aaref, kont geet", "law 3aaref, haagi", "law kont 3aaref, haagi", "iza 3aaref, geet"], answer: 0, note: "Irreal en pasado: kont en las dos partes." },
      { q: "En lo irreal del pasado aparece…", options: ["كان (kont/kaan) en las dos partes", "solo mesh", "el participio", "el futuro"], answer: 0, note: "law kont…, kont…" },
      { q: "«si no fuera por» =", options: ["lawla", "law", "iza", "yeb2a"], answer: 0, note: "lawla = si no fuera por." },
      { q: "«si tengo tiempo, vendré» =", options: ["law 3andi wa2t, haagi", "law 3andi wa2t, geet", "iza 3andi wa2t, gaay", "lawla 3andi wa2t, haagi"], answer: 0, note: "law + presente, respuesta futuro: haagi." },
      { q: "«entonces» (consecuencia) =", options: ["yeb2a", "bass", "3ashaan", "kamaan"], answer: 0, note: "yeb2a introduce la consecuencia." },
      { q: "«si» en registro formal / escrito =", options: ["iza", "law", "yeb2a", "lawla"], answer: 0, note: "iza es más formal que law." }
    ]
  },

  /* ---------------- LA POSESIÓN (idaafa / betaa3) ---------------- */
  {
    id: "genitivo",
    title: "La posesión: الإضافة y بتاع",
    icon: "🧩",
    level: "B1",
    goal: "Decir «X de Y» de las dos maneras del egipcio: la anexión directa (إضافة) y el analítico بتاع, y elegir la correcta.",
    prereq: ["articulo", "pronombres"],
    intro: "Hay dos formas de expresar «de». La <b>إضافة (idaafa)</b> junta dos nombres directamente; <b>بتاع (betaa3)</b> es una palabra «de» que además concuerda en género y número.",
    sections: [
      {
        h: "1) La إضافة (anexión directa)",
        p: "Se ponen los dos nombres seguidos: «libro (de) el-niño». El primer nombre <b>NO lleva artículo</b>; la definición la da el segundo.",
        ex: [
          { ar: "كتاب الولد", fr: "ketaab el-walad", es: "el libro del niño" },
          { ar: "عربية بابا", fr: "3arabeyyet baba", es: "el coche de papá" },
          { ar: "مفتاح البيت", fr: "moftaa7 el-beet", es: "la llave de la casa" }
        ],
        note: "La <b>ة</b> final (taa marbuta) suena /a/ cuando la palabra va sola (عربية = 3arabey<b>ya</b>), pero en la إضافة se pronuncia <b>/t/</b> (عربية بابا = 3arabey<b>yet</b> baba). Por eso el franco lleva una «t» aunque la letra escrita siga siendo ة (no una ت)."
      },
      {
        h: "2) بتاع (betaa3) — concuerda",
        p: "Más flexible y coloquial. Concuerda con lo poseído: <b>betaa3</b> (m), <b>betaa3et</b> (f), <b>betoo3</b> (pl).",
        table: {
          cols: ["Género", "Forma", "Ejemplo"],
          rows: [
            ["m", "<span class='fr'>betaa3</span>", "<span class='fr'>el-ketaab betaa3 a7mad</span> — el libro de Ahmad"],
            ["f", "<span class='fr'>betaa3et</span>", "<span class='fr'>el-3arabeyya betaa3et baba</span> — el coche de papá"],
            ["pl", "<span class='fr'>betoo3</span>", "<span class='fr'>el-kotob betoo3 el-madrasa</span> — los libros de la escuela"]
          ]
        }
      },
      {
        h: "«mío, tuyo…»: بتاع + sufijo",
        p: "Para «es mío / tuyo» se pega el posesivo a بتاع.",
        ex: [
          { ar: "ده بتاعي", fr: "da betaa3i", es: "esto es mío" },
          { ar: "الموبايل ده بتاعك؟", fr: "el-mobaayel da betaa3ak?", es: "¿este móvil es tuyo?" },
          { ar: "القلم بتاعها", fr: "el-2alam betaa3ha", es: "su bolígrafo (de ella)" }
        ]
      },
      {
        h: "¿Cuál uso?",
        p: "La إضافة es más compacta y para relaciones «fijas» (la llave de la casa). <b>بتاع</b> se prefiere cuando el poseedor es largo, cuando quieres <b>enfatizar la propiedad</b>, o con préstamos extranjeros.",
        warn: "Nunca pongas artículo al primer nombre de una إضافة: es <b>ketaab el-walad</b>, jamás «el-ketaab el-walad».",
        refs: [{ id: "articulo" }, { id: "demostrativos" }]
      },
      {
        h: "En contexto",
        dialog: [
          { who: "A", ar: "الشنطة دي بتاعت مين؟", fr: "esh-shanta di betaa3et meen?", es: "¿de quién es esta bolsa?" },
          { who: "B", ar: "بتاعتي أنا", fr: "betaa3ti ana", es: "es mía" },
          { who: "A", ar: "ومفتاح العربية؟", fr: "we moftaa7 el-3arabeyya?", es: "¿y la llave del coche?" },
          { who: "B", ar: "بتاع أخويا", fr: "betaa3 akhuuya", es: "es de mi hermano" }
        ]
      }
    ],
    quiz: [
      { q: "«el libro del niño» (إضافة) =", options: ["ketaab el-walad", "el-ketaab el-walad", "ketaab walad", "el-ketaab walad"], answer: 0, note: "Primer nombre sin artículo: ketaab el-walad." },
      { q: "En la إضافة, el primer nombre lleva artículo…", options: ["no, nunca", "sí, siempre", "solo si es femenino", "solo en plural"], answer: 0, note: "La definición la da el segundo nombre." },
      { q: "betaa3 en femenino =", options: ["betaa3et", "betaa3", "betoo3", "betaa3a"], answer: 0, note: "f: betaa3et." },
      { q: "«el coche de papá» con betaa3 =", options: ["el-3arabeyya betaa3et baba", "el-3arabeyya betaa3 baba", "3arabeyya betoo3 baba", "el-3arabeyya betaa3i baba"], answer: 0, note: "Coche es femenino → betaa3et." },
      { q: "«esto es mío» =", options: ["da betaa3i", "da betaa3ak", "betaa3i da", "da betoo3i"], answer: 0, note: "betaa3 + i = betaa3i." },
      { q: "betaa3 en plural =", options: ["betoo3", "betaa3iin", "betaa3aat", "betaa3et"], answer: 0, note: "pl: betoo3." },
      { q: "«¿de quién es esta bolsa?» =", options: ["esh-shanta di betaa3et meen?", "esh-shanta di betaa3 meen?", "esh-shanta di betoo3 meen?", "esh-shanta di betaa3i meen?"], answer: 0, note: "Bolsa (shanta) es femenina → betaa3et." },
      { q: "«3arabeyyet baba» muestra que la ‑a femenina pasa a…", options: ["‑et", "‑a", "‑i", "‑ha"], answer: 0, note: "En la إضافة: ‑a → ‑et." },
      { q: "بتاع se prefiere cuando…", options: ["enfatizas la propiedad o el poseedor es largo", "siempre, la إضافة no existe", "el nombre es plural", "hablas en pasado"], answer: 0, note: "Uso analítico más flexible." }
    ]
  },

  /* ---------------- LA HORA ---------------- */
  {
    id: "la-hora",
    title: "La hora y el tiempo (الساعة)",
    icon: "🕐",
    level: "B1",
    goal: "Preguntar y decir la hora con el sistema egipcio de mitades, cuartos y tercios (20 min), y ubicar en el día.",
    intro: "Preguntar la hora es <b>es-saa3a kaam?</b> El egipcio divide la hora en mitad (نص), cuarto (ربع) y, curiosamente, <b>tercio (تلت = 20 minutos)</b>.",
    sections: [
      {
        h: "En punto",
        ex: [
          { ar: "الساعة كام؟", fr: "es-saa3a kaam?", es: "¿qué hora es?" },
          { ar: "الساعة واحدة", fr: "es-saa3a wa7da", es: "es la una" },
          { ar: "الساعة خمسة", fr: "es-saa3a khamsa", es: "son las cinco" }
        ],
        note: "Para la hora se usan las formas femeninas cortas: wa7da, itneen, talaata, arba3a, khamsa…"
      },
      {
        h: "Y media, y cuarto, y tercio…",
        p: "Se suma con <b>و (we, «y»)</b> y se resta con <b>إلا (illa, «menos»)</b>.",
        table: {
          cols: ["Español", "Árabe", "Franco"],
          rows: [
            ["y cuarto (+15)", "<span class='ar' dir='rtl' lang='ar'>وربع</span>", "<span class='fr'>we-rob3</span>"],
            ["y tercio (+20)", "<span class='ar' dir='rtl' lang='ar'>وتلت</span>", "<span class='fr'>we-telt</span>"],
            ["y media (+30)", "<span class='ar' dir='rtl' lang='ar'>ونص</span>", "<span class='fr'>we-noss</span>"],
            ["menos tercio (‑20)", "<span class='ar' dir='rtl' lang='ar'>إلا تلت</span>", "<span class='fr'>illa telt</span>"],
            ["menos cuarto (‑15)", "<span class='ar' dir='rtl' lang='ar'>إلا ربع</span>", "<span class='fr'>illa rob3</span>"]
          ]
        },
        warn: "El <b>tercio (telt = 20 min)</b> no existe en español y despista: «talaata we-telt» = las 3 y 20, no «y un tercio»."
      },
      {
        h: "Horas completas",
        ex: [
          { ar: "الساعة تلاتة ونص", fr: "es-saa3a talaata we-noss", es: "las 3 y media" },
          { ar: "اتنين وربع", fr: "itneen we-rob3", es: "las 2 y cuarto" },
          { ar: "خمسة إلا تلت", fr: "khamsa illa telt", es: "las 5 menos 20" },
          { ar: "تسعة وخمسة", fr: "tes3a we-khamsa", es: "las 9 y 5" }
        ]
      },
      {
        h: "Momentos del día",
        ex: [
          { ar: "الصبح", fr: "es-sob7", es: "por la mañana" },
          { ar: "الضهر", fr: "ed-dohr", es: "al mediodía" },
          { ar: "بعد الضهر", fr: "ba3d ed-dohr", es: "por la tarde" },
          { ar: "بالليل", fr: "bel-leel", es: "por la noche" }
        ],
        refs: [{ id: "adverbios" }]
      },
      {
        h: "En contexto",
        dialog: [
          { who: "A", ar: "الساعة كام دلوقتي؟", fr: "es-saa3a kaam delwa2ti?", es: "¿qué hora es ahora?" },
          { who: "B", ar: "أربعة إلا ربع", fr: "arba3a illa rob3", es: "las 4 menos cuarto" },
          { who: "A", ar: "الميعاد الساعة كام؟", fr: "el-mi3aad es-saa3a kaam?", es: "¿a qué hora es la cita?" },
          { who: "B", ar: "خمسة ونص بالظبط", fr: "khamsa we-noss bezzabt", es: "a las 5 y media en punto" }
        ]
      }
    ],
    quiz: [
      { q: "«¿qué hora es?» =", options: ["es-saa3a kaam?", "kaam es-saa3a?", "es-saa3a feen?", "kaam saa3a?"], answer: 0, note: "Interrogativo al final: es-saa3a kaam?" },
      { q: "«y media» =", options: ["we-noss", "we-rob3", "we-telt", "illa noss"], answer: 0, note: "noss = mitad." },
      { q: "El «tercio» (telt) equivale a…", options: ["20 minutos", "30 minutos", "15 minutos", "10 minutos"], answer: 0, note: "telt = un tercio de hora = 20 min." },
      { q: "«las 3 y media» =", options: ["es-saa3a talaata we-noss", "es-saa3a talaata we-rob3", "es-saa3a talaata illa noss", "es-saa3a talaata we-telt"], answer: 0, note: "talaata we-noss." },
      { q: "Para restar minutos se usa…", options: ["illa (menos)", "we (y)", "naa2es", "min"], answer: 0, note: "illa = menos; we = y." },
      { q: "«las 5 menos 20» =", options: ["khamsa illa telt", "khamsa illa noss", "khamsa we-telt", "khamsa illa rob3"], answer: 0, note: "menos 20 = illa telt." },
      { q: "«por la noche» =", options: ["bel-leel", "es-sob7", "ed-dohr", "ba3d ed-dohr"], answer: 0, note: "bel-leel = de noche." },
      { q: "«y cuarto» =", options: ["we-rob3", "we-telt", "illa rob3", "we-noss"], answer: 0, note: "rob3 = cuarto." },
      { q: "«las 2 y cuarto» =", options: ["itneen we-rob3", "itneen illa rob3", "itneen we-telt", "itneen we-noss"], answer: 0, note: "itneen we-rob3." }
    ]
  },

  /* ---------------- NÚMEROS, CONTAR Y EL DUAL ---------------- */
  {
    id: "contar",
    title: "Números, contar y el dual",
    icon: "🔢",
    level: "B1",
    goal: "Contar objetos correctamente (una regla que cambia según el número) y formar el dual «dos de algo» con ‑een.",
    prereq: ["plural"],
    intro: "Contar en árabe no es «número + sustantivo» sin más: la <b>forma del sustantivo cambia según la cantidad</b>. Además existe el <b>dual</b>, una forma especial solo para «dos».",
    sections: [
      {
        h: "El dual (المثنى): «dos de algo» = ‑ين (‑een)",
        p: "Para exactamente <b>dos</b> no se usa el número: se añade <b>‑een</b> al sustantivo.",
        ex: [
          { ar: "يوم ← يومين", fr: "yoom → yomeen", es: "un día → dos días" },
          { ar: "كتاب ← كتابين", fr: "ketaab → ketabeen", es: "un libro → dos libros" },
          { ar: "مرة ← مرتين", fr: "marra → marriteen", es: "una vez → dos veces" },
          { ar: "أسبوع ← أسبوعين", fr: "osboo3 → osbo3een", es: "una semana → dos semanas" }
        ],
        note: "La ‑a femenina se convierte en ‑t antes de ‑een: marra → marriteen, saa3a → sa3teen."
      },
      {
        h: "Del 3 al 10: número + PLURAL (forma corta)",
        p: "Con 3–10 el sustantivo va en <b>plural</b>, y el número suele usar su <b>forma corta</b> (talat, arba3, khamas…).",
        ex: [
          { ar: "تلات كتب", fr: "talat kotob", es: "tres libros" },
          { ar: "أربع سنين", fr: "arba3 siniin", es: "cuatro años" },
          { ar: "خمس دقايق", fr: "khamas da2aaye2", es: "cinco minutos" },
          { ar: "عشر جنيه", fr: "3ashar geneeh", es: "diez libras (geneeh)" }
        ]
      },
      {
        h: "Del 11 en adelante: número + SINGULAR",
        p: "A partir de <b>11</b> el sustantivo vuelve al <b>singular</b> (¡cuidado, es lo contrario del español!).",
        ex: [
          { ar: "حداشر كتاب", fr: "7edaashar ketaab", es: "once libros (lit. libro)" },
          { ar: "عشرين سنة", fr: "3eshriin sana", es: "veinte años (lit. año)" },
          { ar: "مية جنيه", fr: "meyya geneeh", es: "cien libras" }
        ],
        warn: "Error clásico: «3eshriin siniin». Tras 11+ el sustantivo va en <b>singular</b>: 3eshriin <b>sana</b>."
      },
      {
        h: "Resumen de la regla",
        table: {
          cols: ["Cantidad", "Forma del sustantivo", "Ejemplo"],
          rows: [
            ["1", "singular", "<span class='fr'>ketaab</span> — un libro"],
            ["2", "dual (‑een)", "<span class='fr'>ketabeen</span> — dos libros"],
            ["3–10", "plural", "<span class='fr'>talat kotob</span> — 3 libros"],
            ["11+", "singular", "<span class='fr'>7edaashar ketaab</span> — 11 libros"]
          ]
        },
        refs: [{ id: "plural" }, { id: "la-hora" }]
      },
      {
        h: "En contexto",
        dialog: [
          { who: "A", ar: "عايز كام واحد؟", fr: "3aayez kaam waa7ed?", es: "¿cuántos quieres?" },
          { who: "B", ar: "هات تلات حاجات بس", fr: "haat talat 7agaat bass", es: "trae solo tres cosas" },
          { who: "A", ar: "وده بكام؟", fr: "we da bekaam?", es: "¿y esto cuánto es?" },
          { who: "B", ar: "عشرين جنيه", fr: "3eshriin geneeh", es: "veinte libras" }
        ]
      }
    ],
    quiz: [
      { q: "«dos días» =", options: ["yomeen", "itneen yoom", "yomaat", "talat ayyaam"], answer: 0, note: "Dual: yoom → yomeen (no se dice el número)." },
      { q: "«dos veces» (de marra) =", options: ["marriteen", "marrateen", "itneen marra", "maraat"], answer: 0, note: "La ‑a pasa a ‑t: marra → marriteen." },
      { q: "«tres libros» =", options: ["talat kotob", "talaata ketaab", "talat ketaab", "talaata kotob"], answer: 0, note: "3–10 → plural + forma corta: talat kotob." },
      { q: "Con los números 3–10, el sustantivo va en…", options: ["plural", "singular", "dual", "femenino"], answer: 0, note: "3–10 piden plural: khamas da2aaye2." },
      { q: "«veinte años» =", options: ["3eshriin sana", "3eshriin siniin", "3eshriin santeen", "3eshriin sanaat"], answer: 0, note: "11+ → singular: 3eshriin sana." },
      { q: "A partir de 11, el sustantivo va en…", options: ["singular", "plural", "dual", "no cambia"], answer: 0, note: "11+ → singular (al revés que en español)." },
      { q: "El dual se forma añadiendo…", options: ["‑een", "‑aat", "‑iin", "‑a"], answer: 0, note: "Dual = ‑een: ketaab → ketabeen." },
      { q: "«cinco minutos» =", options: ["khamas da2aaye2", "khamsa de2ii2a", "khamas de2ii2a", "khamsa da2aaye2"], answer: 0, note: "3–10 + plural: khamas da2aaye2." },
      { q: "«dos semanas» =", options: ["osbo3een", "itneen osboo3", "asabii3", "osboo3aat"], answer: 0, note: "Dual: osboo3 → osbo3een." }
    ]
  },

  /* ---------------- VERBOS MODALES ---------------- */
  {
    id: "modales",
    title: "Querer, poder, deber (+ verbo)",
    icon: "🎚️",
    level: "B1",
    goal: "Combinar «querer / poder / deber» con otro verbo, que va en subjuntivo (sin بـ), y negarlo con مش.",
    prereq: ["presente"],
    intro: "Verbos como «querer», «poder» y «deber» se combinan con otro verbo que va <b>en subjuntivo, es decir sin بـ</b>: 3aayez <b>arou7</b> (quiero ir), no «3aayez barou7».",
    sections: [
      {
        h: "Los modales más usados",
        p: "Muchos son participios o palabras invariables.",
        ex: [
          { ar: "عايز", fr: "3aayez", es: "quiero (+ verbo)" },
          { ar: "لازم", fr: "laazem", es: "tengo que / debo" },
          { ar: "ممكن", fr: "mumken", es: "puedo / ¿se puede?" },
          { ar: "نفسي", fr: "nefsi", es: "me gustaría / ojalá" },
          { ar: "ينفع", fr: "yenfa3", es: "vale / se puede" },
          { ar: "محتاج", fr: "me7taag", es: "necesito" }
        ]
      },
      {
        h: "modal + verbo SIN بـ",
        p: "El segundo verbo pierde el بـ del presente (subjuntivo).",
        ex: [
          { ar: "عايز أنام", fr: "3aayez anaam", es: "quiero dormir" },
          { ar: "لازم أروح", fr: "laazem arou7", es: "tengo que ir" },
          { ar: "ممكن أساعدك", fr: "mumken asaa3dak", es: "¿puedo ayudarte?" },
          { ar: "نفسي أزور مصر", fr: "nefsi azuur masr", es: "me gustaría visitar Egipto" }
        ],
        warn: "Nunca pongas بـ tras el modal: es 3aayez <b>arou7</b>, no «3aayez barou7»."
      },
      {
        h: "La negación",
        p: "Se niegan con <b>مش (mesh)</b> delante del modal.",
        ex: [
          { ar: "مش لازم", fr: "mesh laazem", es: "no hace falta" },
          { ar: "مش ممكن", fr: "mesh mumken", es: "imposible / no se puede" },
          { ar: "مش عايز", fr: "mesh 3aayez", es: "no quiero" }
        ],
        refs: [{ id: "presente" }, { id: "negacion" }]
      },
      {
        h: "En contexto",
        dialog: [
          { who: "A", ar: "ممكن نخرج النهارده؟", fr: "mumken nokhrog en-naharda?", es: "¿podemos salir hoy?" },
          { who: "B", ar: "نفسي، بس لازم أذاكر", fr: "nefsi, bass laazem azaaker", es: "ojalá, pero tengo que estudiar" },
          { who: "A", ar: "مش لازم دلوقتي", fr: "mesh laazem delwa2ti", es: "no hace falta ahora" }
        ]
      }
    ],
    quiz: [
      { q: "Tras un modal, el segundo verbo va…", options: ["sin بـ (subjuntivo)", "con بـ", "en pasado", "en futuro con هـ"], answer: 0, note: "El verbo pierde el بـ: 3aayez arou7." },
      { q: "«quiero dormir» =", options: ["3aayez anaam", "3aayez banaam", "3aayez nemt", "3aayez hanaam"], answer: 0, note: "Subjuntivo sin بـ: anaam." },
      { q: "«tengo que ir» =", options: ["laazem arou7", "laazem barou7", "laazem harou7", "laazem ro7t"], answer: 0, note: "laazem + arou7 (sin بـ)." },
      { q: "«¿puedo ayudarte?» =", options: ["mumken asaa3dak", "mumken basaa3dak", "mumken hasaa3dak", "mumken saa3edt"], answer: 0, note: "mumken + asaa3dak." },
      { q: "«no hace falta» =", options: ["mesh laazem", "ma laazemsh", "laazem la2", "mafiish laazem"], answer: 0, note: "Se niega con mesh: mesh laazem." },
      { q: "«me gustaría visitar Egipto» =", options: ["nefsi azuur masr", "nefsi bazuur masr", "nefsi hazuur masr", "nefsi zort masr"], answer: 0, note: "nefsi + azuur (sin بـ)." },
      { q: "«imposible / no se puede» =", options: ["mesh mumken", "mafiish mumken", "ma mumkensh", "mumken la2"], answer: 0, note: "mesh mumken." },
      { q: "«no quiero» =", options: ["mesh 3aayez", "ma 3aayezsh", "3aayez mesh", "la2 3aayez"], answer: 0, note: "mesh + participio 3aayez." }
    ]
  },

  /* ---------------- LA FRASE RELATIVA (elli) ---------------- */
  {
    id: "relativo",
    title: "La frase relativa (اللي)",
    icon: "🪢",
    level: "B1",
    goal: "Unir frases con «que / quien» usando اللي (invariable) y saber cuándo se omite y cuándo aparece un pronombre de recuerdo.",
    prereq: ["pronombres", "articulo"],
    intro: "«que / quien / el que» se dice <b>اللي (elli)</b> y es <b>invariable</b>: vale para masculino, femenino, singular y plural. La regla clave: solo se usa con un antecedente <b>definido</b>.",
    sections: [
      {
        h: "elli es invariable",
        p: "No cambia nunca, a diferencia del español (que / quien / los que…).",
        ex: [
          { ar: "الراجل اللي جه", fr: "el-raagel elli geh", es: "el hombre que vino" },
          { ar: "البنت اللي جت", fr: "el-bent elli get", es: "la chica que vino" },
          { ar: "الناس اللي هنا", fr: "en-naas elli hena", es: "la gente que está aquí" }
        ]
      },
      {
        h: "Solo con nombre DEFINIDO",
        p: "Si el antecedente es indefinido (sin الـ), se <b>omite</b> elli.",
        ex: [
          { ar: "الكتاب اللي قريته", fr: "el-ketaab elli 2areetu", es: "el libro que leí" },
          { ar: "كتاب حلو", fr: "ketaab 7elw", es: "un libro (que es) bonito" }
        ],
        warn: "«un hombre que vino» = raagel geh (sin elli). El elli solo aparece con nombre definido."
      },
      {
        h: "Pronombre de recuerdo (resumptivo)",
        p: "Cuando el relativo es el objeto, se añade un pronombre que lo «recuerda» al final.",
        ex: [
          { ar: "البيت اللي ساكن فيه", fr: "el-beet elli saaken fiih", es: "la casa en (la) que vivo" },
          { ar: "الأكل اللي عملته", fr: "el-akl elli 3ameltu", es: "la comida que hice (que la hice)" },
          { ar: "الست اللي شفتها", fr: "es-sett elli shoftaha", es: "la señora que vi (que la vi)" }
        ],
        refs: [{ id: "objeto" }, { id: "articulo" }]
      },
      {
        h: "En contexto",
        dialog: [
          { who: "A", ar: "مين الراجل اللي كلمك؟", fr: "meen el-raagel elli kallemak?", es: "¿quién es el hombre que te habló?" },
          { who: "B", ar: "ده صاحبي اللي بيشتغل معايا", fr: "da saa7bi elli biyshtaghal ma3aaya", es: "es mi amigo que trabaja conmigo" }
        ]
      }
    ],
    quiz: [
      { q: "«que / quien» en egipcio =", options: ["elli", "da", "eh", "meen"], answer: 0, note: "El relativo es اللي (elli)." },
      { q: "¿elli cambia según género y número?", options: ["No, es invariable", "Sí, tiene 3 formas", "Solo en plural", "Solo en femenino"], answer: 0, note: "elli es invariable." },
      { q: "«el hombre que vino» =", options: ["el-raagel elli geh", "raagel elli geh", "el-raagel da geh", "raagel geh elli"], answer: 0, note: "Antecedente definido + elli." },
      { q: "«un libro bonito» (indefinido) =", options: ["ketaab 7elw", "ketaab elli 7elw", "el-ketaab elli 7elw", "ketaab da 7elw"], answer: 0, note: "Indefinido → sin elli." },
      { q: "«la chica que vi» =", options: ["el-bent elli shoftaha", "el-bent elli shoft", "el-bent shoftaha", "bent elli shoftaha"], answer: 0, note: "Objeto → pronombre de recuerdo ‑ha." },
      { q: "elli se usa con un nombre…", options: ["definido (con الـ)", "indefinido", "solo propio", "solo plural"], answer: 0, note: "Solo con antecedente definido." },
      { q: "«la casa en que vivo» =", options: ["el-beet elli saaken fiih", "el-beet elli saaken", "el-beet saaken fiih", "beet elli saaken fiih"], answer: 0, note: "Con preposición: … fiih." },
      { q: "«la gente que está aquí» =", options: ["en-naas elli hena", "en-naas di hena", "naas elli hena", "en-naas elli homma hena"], answer: 0, note: "elli invariable también en plural." }
    ]
  },

  /* ---------------- OBJETO INDIRECTO ---------------- */
  {
    id: "objeto-indirecto",
    title: "Objeto indirecto (decir/dar a alguien)",
    icon: "📨",
    level: "B1",
    goal: "Pegar el «a mí / a ti / le…» al verbo con ‑l‑, formar «dile / dame» y combinar dos objetos («dámelo»).",
    prereq: ["objeto"],
    intro: "El objeto indirecto («a mí, a ti, le…») se pega al verbo con una <b>‑ل‑ (‑l‑)</b>: قال (2aal, «dijo») → قاله (2allu, «le dijo»). Es como el «se lo» del español, pero todo dentro del verbo.",
    sections: [
      {
        h: "Los sufijos con ‑l‑",
        p: "Se añaden después del verbo (y después del objeto directo, si lo hay).",
        table: {
          cols: ["A quién", "Sufijo", "Ejemplo (2aal «dijo»)"],
          rows: [
            ["me", "‑li", "<span class='fr'>2alli</span> — me dijo"],
            ["te (m)", "‑lak", "<span class='fr'>2allak</span> — te dijo"],
            ["te (f)", "‑lek", "<span class='fr'>2allek</span> — te dijo"],
            ["le (él)", "‑lu", "<span class='fr'>2allu</span> — le dijo"],
            ["le (ella)", "‑laha", "<span class='fr'>2allaha</span> — le dijo"],
            ["nos", "‑lena", "<span class='fr'>2allena</span> — nos dijo"],
            ["les", "‑lohom", "<span class='fr'>2allohom</span> — les dijo"]
          ]
        }
      },
      {
        h: "Imperativo: «dile, dame»",
        p: "Muy frecuente en órdenes y peticiones.",
        ex: [
          { ar: "قوله", fr: "2ollu", es: "dile (a él)" },
          { ar: "قوللي", fr: "2olli", es: "dime" },
          { ar: "إديني", fr: "eddiini", es: "dame" },
          { ar: "إدينا", fr: "eddiina", es: "danos" }
        ]
      },
      {
        h: "Con presente, pasado y futuro",
        p: "El sufijo se pega igual en cualquier tiempo.",
        ex: [
          { ar: "بقوله كل يوم", fr: "ba2ollu kol yoom", es: "le digo cada día" },
          { ar: "قلتله", fr: "2oltellu", es: "le dije" },
          { ar: "هقوللك حاجة", fr: "ha2ollak 7aaga", es: "te diré una cosa" }
        ]
      },
      {
        h: "Doble objeto (avanzado): «dámelo»",
        p: "Con objeto directo e indirecto, ambos se pegan al verbo.",
        ex: [
          { ar: "إدهولي", fr: "eddihuuli", es: "dámelo" },
          { ar: "جبتهالك", fr: "gebtahaalak", es: "te la traje" }
        ],
        note: "Orden: primero el objeto directo (‑hu / ‑ha) y luego el indirecto (‑li / ‑lak).",
        refs: [{ id: "objeto" }, { id: "imperativo" }]
      }
    ],
    quiz: [
      { q: "«le dijo (a él)» =", options: ["2allu", "2aalu", "2alli", "2allak"], answer: 0, note: "2aal + lu = 2allu." },
      { q: "«dile» (imperativo) =", options: ["2ollu", "2allu", "2olli", "2oltellu"], answer: 0, note: "Imperativo + lu: 2ollu." },
      { q: "«dame» =", options: ["eddiini", "eddiik", "2olli", "eddiina"], answer: 0, note: "eddi + ni = eddiini." },
      { q: "El objeto indirecto se pega con…", options: ["‑l‑", "‑n‑", "‑b‑", "‑h‑"], answer: 0, note: "La marca es ‑l‑ (de لـ)." },
      { q: "«te diré una cosa» =", options: ["ha2ollak 7aaga", "ba2ollak 7aaga", "2oltellak 7aaga", "2ollak 7aaga"], answer: 0, note: "Futuro ha‑ + ‑lak: ha2ollak." },
      { q: "«me dijo» =", options: ["2alli", "2allu", "2allak", "2allena"], answer: 0, note: "2aal + li = 2alli." },
      { q: "«dámelo» =", options: ["eddihuuli", "eddiini", "2ollu", "eddiihaa"], answer: 0, note: "directo ‑hu + indirecto ‑li: eddihuuli." },
      { q: "«nos dijo» =", options: ["2allena", "2allohom", "2allaha", "2alli"], answer: 0, note: "‑lena = a nosotros: 2allena." }
    ]
  },

  /* ---------------- LOS ORDINALES ---------------- */
  {
    id: "ordinales",
    title: "Los ordinales (primero, segundo…)",
    icon: "🥇",
    level: "B1",
    goal: "Usar del 1º al 10º, colocarlos bien (awwel delante; el resto detrás) y concordar en femenino.",
    prereq: ["contar"],
    intro: "Los ordinales van del 1º al 10º con formas propias. <b>أول (awwel) «primero»</b> es especial: va <b>delante</b> del nombre; los demás suelen ir <b>detrás</b> y concuerdan.",
    sections: [
      {
        h: "Del 1º al 10º",
        table: {
          cols: ["Nº", "Árabe", "Franco"],
          rows: [
            ["1º", "<span class='ar' dir='rtl' lang='ar'>أول</span>", "<span class='fr'>awwel</span>"],
            ["2º", "<span class='ar' dir='rtl' lang='ar'>تاني</span>", "<span class='fr'>taani</span>"],
            ["3º", "<span class='ar' dir='rtl' lang='ar'>تالت</span>", "<span class='fr'>taalet</span>"],
            ["4º", "<span class='ar' dir='rtl' lang='ar'>رابع</span>", "<span class='fr'>raabe3</span>"],
            ["5º", "<span class='ar' dir='rtl' lang='ar'>خامس</span>", "<span class='fr'>khaames</span>"],
            ["6º", "<span class='ar' dir='rtl' lang='ar'>سادس</span>", "<span class='fr'>saades</span>"],
            ["7º", "<span class='ar' dir='rtl' lang='ar'>سابع</span>", "<span class='fr'>saabe3</span>"],
            ["8º", "<span class='ar' dir='rtl' lang='ar'>تامن</span>", "<span class='fr'>taamen</span>"],
            ["9º", "<span class='ar' dir='rtl' lang='ar'>تاسع</span>", "<span class='fr'>taase3</span>"],
            ["10º", "<span class='ar' dir='rtl' lang='ar'>عاشر</span>", "<span class='fr'>3aasher</span>"]
          ]
        }
      },
      {
        h: "Cómo se colocan",
        p: "<b>awwel</b> va delante; los demás van detrás del nombre, con artículo y concordancia.",
        ex: [
          { ar: "أول مرة", fr: "awwel marra", es: "la primera vez" },
          { ar: "المرة التانية", fr: "el-marra et-tanya", es: "la segunda vez" },
          { ar: "الدور التالت", fr: "ed-door et-taalet", es: "la tercera planta" },
          { ar: "آخر واحد", fr: "aakher waa7ed", es: "el último" }
        ],
        note: "Femenino: taani → tanya, taalet → talta. «aakher» (آخر) = «último», va delante como awwel.",
        refs: [{ id: "contar" }]
      }
    ],
    quiz: [
      { q: "«primero» =", options: ["awwel", "waa7ed", "aakher", "taani"], answer: 0, note: "1º = awwel (va delante)." },
      { q: "«segundo» =", options: ["taani", "itneen", "taalet", "saades"], answer: 0, note: "2º = taani." },
      { q: "«tercero» =", options: ["taalet", "talaata", "raabe3", "taase3"], answer: 0, note: "3º = taalet." },
      { q: "«la primera vez» =", options: ["awwel marra", "el-marra el-awwel", "marra awwel", "el-marra awwel"], answer: 0, note: "awwel va DELANTE: awwel marra." },
      { q: "«la segunda vez» =", options: ["el-marra et-tanya", "el-marra taani", "tanya marra", "et-tanya marra"], answer: 0, note: "Detrás y en femenino: et-tanya." },
      { q: "«último» =", options: ["aakher", "3aasher", "awwel", "taase3"], answer: 0, note: "aakher = último; 3aasher = décimo." },
      { q: "«décimo» =", options: ["3aasher", "3ashara", "taase3", "3aashra"], answer: 0, note: "10º = 3aasher." }
    ]
  },

  /* ---------------- CONCORDANCIA DEL ADJETIVO ---------------- */
  {
    id: "concordancia",
    title: "El adjetivo: femenino y concordancia",
    icon: "🎨",
    level: "A2",
    goal: "Formar el femenino del adjetivo (+a), aplicar el patrón especial de los colores y concordar bien con el nombre.",
    prereq: ["plural"],
    intro: "El adjetivo concuerda con el nombre en género y número, y va <b>detrás</b> de él. El femenino se forma casi siempre añadiendo <b>‑a</b> (kebiir → kebiira). Los <b>colores</b> tienen un patrón propio.",
    sections: [
      {
        h: "Femenino general: +a",
        p: "La regla base para la mayoría de adjetivos.",
        ex: [
          { ar: "كبير ← كبيرة", fr: "kebiir → kebiira", es: "grande" },
          { ar: "جميل ← جميلة", fr: "gamiil → gamiila", es: "hermoso" },
          { ar: "تعبان ← تعبانة", fr: "ta3baan → ta3baana", es: "cansado" },
          { ar: "كويس ← كويسة", fr: "kwayyes → kwayyesa", es: "bueno" }
        ]
      },
      {
        h: "Colores: patrón especial (أفعل → فعلا)",
        p: "El masculino sigue el molde <b>af3al</b> y el femenino <b>fa3la</b>.",
        table: {
          cols: ["Color", "m", "f"],
          rows: [
            ["rojo", "<span class='fr'>a7mar</span>", "<span class='fr'>7amra</span>"],
            ["azul", "<span class='fr'>azra2</span>", "<span class='fr'>zar2a</span>"],
            ["verde", "<span class='fr'>akhdar</span>", "<span class='fr'>khadra</span>"],
            ["amarillo", "<span class='fr'>asfar</span>", "<span class='fr'>safra</span>"],
            ["blanco", "<span class='fr'>abyad</span>", "<span class='fr'>beeda</span>"],
            ["negro", "<span class='fr'>eswed</span>", "<span class='fr'>sooda</span>"]
          ]
        }
      },
      {
        h: "Concordancia en la frase",
        p: "El adjetivo va detrás del nombre y concuerda con él.",
        ex: [
          { ar: "عربية حمرا", fr: "3arabeyya 7amra", es: "un coche rojo" },
          { ar: "بنت حلوة", fr: "bent 7elwa", es: "una chica guapa" },
          { ar: "البيت كبير", fr: "el-beet kebiir", es: "la casa es grande (beet es masc.)" }
        ],
        warn: "Recuerda: los plurales de <b>cosas</b> van con adjetivo en <b>femenino singular</b> (el-kotob kebiira), como viste en «El plural».",
        refs: [{ id: "plural" }, { id: "comparativo" }]
      }
    ],
    quiz: [
      { q: "Femenino de kebiir (grande) =", options: ["kebiira", "kebiir", "kobaar", "kebiiro"], answer: 0, note: "Regla general: +a → kebiira." },
      { q: "Femenino de a7mar (rojo) =", options: ["7amra", "a7mara", "7amraa", "a7mra"], answer: 0, note: "Colores: af3al → fa3la: 7amra." },
      { q: "«un coche rojo» =", options: ["3arabeyya 7amra", "3arabeyya a7mar", "3arabeyya 7amraa", "a7mar 3arabeyya"], answer: 0, note: "Coche es femenino → 7amra, y detrás." },
      { q: "Femenino de azra2 (azul) =", options: ["zar2a", "azra2a", "zar2aa", "azra2"], answer: 0, note: "Color: azra2 → zar2a." },
      { q: "El femenino general se forma…", options: ["añadiendo ‑a", "añadiendo ‑iin", "añadiendo ‑et", "no cambia"], answer: 0, note: "+a: kebiir → kebiira." },
      { q: "«una chica cansada» =", options: ["bent ta3baana", "bent ta3baan", "ta3baana bent", "bent ta3baaniin"], answer: 0, note: "Femenino + detrás: ta3baana." },
      { q: "Femenino de eswed (negro) =", options: ["sooda", "eswda", "sawda", "aswad"], answer: 0, note: "eswed → sooda." },
      { q: "Femenino de akhdar (verde) =", options: ["khadra", "akhdara", "khadraa", "akhdra"], answer: 0, note: "akhdar → khadra." }
    ]
  },

  /* ---------------- LOS CUANTIFICADORES ---------------- */
  {
    id: "cuantificadores",
    title: "Cuantificadores (كل, بعض, شوية)",
    icon: "⚖️",
    level: "B1",
    goal: "Expresar cantidad con kol, ba3d, shwayya, keteer… y dominar la doble lectura de كل («cada» / «todo»).",
    prereq: ["contar"],
    intro: "Para decir «cada, todo, algunos, un poco, mucho…». La palabra estrella es <b>كل (kol)</b>, que significa «cada» o «todo» según lo que le siga.",
    sections: [
      {
        h: "كل (kol): «cada» vs «todo»",
        p: "kol + nombre <b>indefinido singular</b> = «cada»; kol + nombre <b>definido</b> = «todo / todos».",
        ex: [
          { ar: "كل يوم", fr: "kol yoom", es: "cada día" },
          { ar: "كل واحد", fr: "kol waa7ed", es: "cada uno" },
          { ar: "كل الناس", fr: "kol en-naas", es: "toda la gente" },
          { ar: "كل حاجة", fr: "kol 7aaga", es: "todo (cada cosa)" }
        ],
        warn: "Cuidado: «kol yoom» = cada día, pero «kol el-yoom» = todo el día. El artículo lo cambia todo."
      },
      {
        h: "Otras cantidades",
        p: "",
        ex: [
          { ar: "شوية مية", fr: "shwayyet mayya", es: "un poco de agua" },
          { ar: "كتير", fr: "keteer", es: "mucho" },
          { ar: "بعض الناس", fr: "ba3d en-naas", es: "algunas personas" },
          { ar: "معظم الوقت", fr: "mo3zam el-wa2t", es: "la mayor parte del tiempo" },
          { ar: "كام يوم", fr: "kaam yoom", es: "unos días" },
          { ar: "نص", fr: "noss", es: "la mitad" }
        ]
      },
      {
        h: "«nada / ninguno»",
        p: "Con ولا (wala) o مفيش (mafiish).",
        ex: [
          { ar: "ولا حاجة", fr: "wala 7aaga", es: "nada" },
          { ar: "ولا واحد", fr: "wala waa7ed", es: "ninguno" },
          { ar: "مفيش حاجة", fr: "mafiish 7aaga", es: "no hay nada" }
        ],
        refs: [{ id: "contar" }, { id: "negacion" }]
      }
    ],
    quiz: [
      { q: "«cada día» =", options: ["kol yoom", "kol el-yoom", "ba3d yoom", "kaam yoom"], answer: 0, note: "kol + indefinido = cada: kol yoom." },
      { q: "«todo el día» =", options: ["kol el-yoom", "kol yoom", "noss el-yoom", "mo3zam yoom"], answer: 0, note: "kol + definido = todo: kol el-yoom." },
      { q: "kol + nombre indefinido singular significa…", options: ["cada", "todo", "algunos", "medio"], answer: 0, note: "kol yoom = cada día." },
      { q: "«algunas personas» =", options: ["ba3d en-naas", "kol en-naas", "shwayyet naas", "kaam naas"], answer: 0, note: "ba3d = algunos." },
      { q: "«un poco de agua» =", options: ["shwayyet mayya", "keteer mayya", "kol mayya", "ba3d mayya"], answer: 0, note: "shwayya = un poco." },
      { q: "«la mayor parte del tiempo» =", options: ["mo3zam el-wa2t", "kol el-wa2t", "noss el-wa2t", "shwayyet wa2t"], answer: 0, note: "mo3zam = la mayoría." },
      { q: "«nada» =", options: ["wala 7aaga", "kol 7aaga", "shwayya", "ba3d 7aaga"], answer: 0, note: "wala 7aaga = nada." },
      { q: "«unos días» (unos cuantos) =", options: ["kaam yoom", "kol yoom", "ba3d yoom", "noss yoom"], answer: 0, note: "kaam + singular = unos cuantos." }
    ]
  },

  /* ---------------- EL PASIVO Y REFLEXIVO ---------------- */
  {
    id: "pasivo",
    title: "El pasivo y reflexivo (اتفعل)",
    icon: "🔄",
    level: "B1",
    goal: "Formar el pasivo y muchos «se» del español con el prefijo اتـ (it‑), en pasado y presente.",
    prereq: ["pasado", "presente"],
    intro: "El árabe egipcio forma el <b>pasivo y el reflexivo</b> con el prefijo <b>اتـ (it‑)</b> sobre el verbo: كتب (katab, escribió) → اتكتب (itkatab, fue escrito). No existe «ser + participio» como en español.",
    sections: [
      {
        h: "Formación: it‑ + verbo (pasado)",
        p: "Se antepone <b>it‑</b> a la forma de «él» del pasado.",
        ex: [
          { ar: "اتكتب", fr: "itkatab", es: "fue escrito" },
          { ar: "اتفتح", fr: "itfata7", es: "fue abierto / se abrió" },
          { ar: "اتعمل", fr: "it3amal", es: "fue hecho" },
          { ar: "اتكسر", fr: "itkasar", es: "se rompió" },
          { ar: "اتباع", fr: "itbaa3", es: "fue vendido" }
        ]
      },
      {
        h: "En presente: بيتـ (biyet‑)",
        p: "El presente del pasivo lleva بـ + it‑ → biyet‑.",
        ex: [
          { ar: "بيتعمل إزاي؟", fr: "biyet3emel ezzaay?", es: "¿cómo se hace?" },
          { ar: "الأكل بيتعمل هنا", fr: "el-akl biyet3emel hena", es: "la comida se hace aquí" },
          { ar: "الباب بيتفتح", fr: "el-baab biyetfete7", es: "la puerta se abre" }
        ]
      },
      {
        h: "También traduce muchos «se»",
        p: "El mismo it‑ sirve para el reflexivo / los sucesos sin agente.",
        ex: [
          { ar: "الشباك اتكسر", fr: "esh-shebbaak itkasar", es: "la ventana se rompió" },
          { ar: "القميص اتغسل", fr: "el-2amiis itghasal", es: "la camisa se lavó" }
        ],
        note: "No se menciona quién hizo la acción. Si quieres decirlo, usa una frase activa normal (el sujeto + verbo).",
        refs: [{ id: "pasado" }, { id: "presente" }]
      }
    ],
    quiz: [
      { q: "El pasivo se forma con el prefijo…", options: ["it‑ (اتـ)", "bi‑ (بـ)", "ha‑ (هـ)", "ma‑ (ما)"], answer: 0, note: "El pasivo/reflexivo usa it‑." },
      { q: "«fue escrito» =", options: ["itkatab", "katab", "biyiktib", "hayiktib"], answer: 0, note: "it‑ + katab = itkatab." },
      { q: "«se abrió / fue abierto» =", options: ["itfata7", "fata7", "hayefta7", "biyefta7"], answer: 0, note: "it‑ + fata7 = itfata7." },
      { q: "«¿cómo se hace?» =", options: ["biyet3emel ezzaay?", "bi3mel ezzaay?", "it3amal ezzaay?", "ha3mel ezzaay?"], answer: 0, note: "Presente pasivo: biyet3emel." },
      { q: "«la ventana se rompió» =", options: ["esh-shebbaak itkasar", "esh-shebbaak kasar", "esh-shebbaak byekser", "esh-shebbaak hayekser"], answer: 0, note: "itkasar = se rompió." },
      { q: "«fue vendido» =", options: ["itbaa3", "baa3", "hayebii3", "biybii3"], answer: 0, note: "it‑ + baa3 = itbaa3." },
      { q: "El presente del pasivo empieza por…", options: ["biyet‑", "biye‑", "ha‑", "it‑ solo"], answer: 0, note: "bi + it → biyet‑." },
      { q: "«la comida se hace aquí» =", options: ["el-akl biyet3emel hena", "el-akl 3amal hena", "el-akl byi3mel hena", "el-akl it3amal hena"], answer: 0, note: "Presente pasivo: biyet3emel." }
    ]
  }
];

/* =========================================================
 *  ÍNDICE DE LA GUÍA — ordena las fichas como una progresión
 * ========================================================= */
const GRAMMAR_GUIDE = [
  { group: "0 · Conceptos básicos", desc: "Ideas clave antes de empezar: cómo se forman las palabras y distinciones que rigen toda la gramática.", ids: ["raiz", "definido", "resumptivo", "nominal"] },
  { group: "1 · Fundamentos", desc: "Las piezas para construir cualquier frase.", ids: ["pronombres", "articulo", "demostrativos", "interrogativos", "negacion", "plural", "concordancia"] },
  { group: "2 · El sistema verbal", desc: "Los tiempos y cómo pasar de uno a otro.", ids: ["presente", "pasado", "futuro", "tiempos-repaso", "imperativo", "modales", "pasivo"] },
  { group: "3 · Estructuras clave", desc: "Posesión, existencia, comparación y circunstancias.", ids: ["tener", "haber", "genitivo", "comparativo", "relativo", "cuantificadores", "adverbios", "preposiciones"] },
  { group: "4 · Nivel avanzado", desc: "Lo que da naturalidad y fluidez al hablar.", ids: ["participios", "objeto", "objeto-indirecto", "condicional", "contar", "ordinales", "la-hora"] }
];

/* =========================================================
 *  FRASES PARA TRADUCIR — nivel B2–C1 (traducción en ambos sentidos)
 *  Cada item: { ar: árabe, fr: franco (referencia), es: español }
 * ========================================================= */
const SENTENCES = [
  {
    id: "opinion",
    title: "Opiniones y argumentación",
    icon: "💭",
    level: "B2",
    items: [
      { ar: "من وجهة نظري، التعليم أهم حاجة في حياة الإنسان.", fr: "men weghet nazari, et-ta3liim ahamm 7aaga fi 7ayaat el-insaan.", es: "Desde mi punto de vista, la educación es lo más importante en la vida de una persona." },
      { ar: "أنا متفق معاك في النقطة دي، بس مش موافق على الباقي.", fr: "ana mettefe2 ma3aak fen-no2ta di, bass mesh mwaafe2 3ala el-baa2i.", es: "Estoy de acuerdo contigo en este punto, pero no en el resto." },
      { ar: "الموضوع ده معقد أكتر مما بيبان.", fr: "el-mawduu3 da me3a22ad aktar memma beybaan.", es: "Este tema es más complicado de lo que parece." },
      { ar: "لازم ناخد بالنا إن كل واحد ليه رأيه.", fr: "laazem naakhod baalna enn koll waa7ed lee ra2yu.", es: "Tenemos que tener en cuenta que cada uno tiene su opinión." },
      { ar: "مش معنى إني ساكت إني موافق.", fr: "mesh ma3na enni saaket enni mwaafe2.", es: "Que esté callado no significa que esté de acuerdo." },
      { ar: "لو فكرنا بعقلانية، هنلاقي حل وسط.", fr: "law fakkarna be-3a2laneyya, hanla2i 7all wasat.", es: "Si pensamos con racionalidad, encontraremos una solución intermedia." },
      { ar: "الحقيقة إن المشكلة مش سهلة زي ما الناس فاكرة.", fr: "el-7a2ii2a enn el-mushkila mesh sahla zayy ma en-naas fakra.", es: "La verdad es que el problema no es tan fácil como la gente cree." },
      { ar: "أنا شايف إن الحوار أحسن من الخصام.", fr: "ana shaayef enn el-7ewaar a7san men el-khesaam.", es: "Creo que el diálogo es mejor que la disputa." },
      { ar: "مهما حصل، لازم نحترم بعض.", fr: "mahma 7asal, laazem ne7terem ba3d.", es: "Pase lo que pase, tenemos que respetarnos." }
    ]
  },
  {
    id: "trabajo_frases",
    title: "Trabajo y vida profesional",
    icon: "💼",
    level: "B2",
    items: [
      { ar: "لو مكانك، كنت طلبت زيادة من زمان.", fr: "law makaanak, kont talabt zeyaada men zamaan.", es: "Si estuviera en tu lugar, habría pedido un aumento hace tiempo." },
      { ar: "الشغل ضاغط عليّ الأيام دي، بس بحاول أنظم وقتي.", fr: "esh-shoghl daaghet 3alayya el-ayyaam di, bass ba7aawel anazzem wa2ti.", es: "El trabajo me está presionando estos días, pero intento organizar mi tiempo." },
      { ar: "المدير طلب مننا نخلص المشروع قبل نهاية الشهر.", fr: "el-mudiir talab menena nekhallas el-mashruu3 2abl nehaayet esh-shahr.", es: "El jefe nos pidió terminar el proyecto antes de fin de mes." },
      { ar: "لو الاجتماع اتأجل، هيبقى عندنا وقت أكتر.", fr: "law el-egtemaa3 et2aggel, hayeb2a 3andena wa2t aktar.", es: "Si la reunión se aplaza, tendremos más tiempo." },
      { ar: "أنا مقتنع إن الخبرة أهم من الشهادة.", fr: "ana me2tene3 enn el-khebra ahamm men esh-shahaada.", es: "Estoy convencido de que la experiencia es más importante que el título." },
      { ar: "مش عارف أوفق بين شغلي وحياتي.", fr: "mesh 3aaref awa22e2 been shoghli we 7ayaati.", es: "No consigo equilibrar mi trabajo y mi vida." },
      { ar: "بعد ما اشتغلت سنين، قررت أغير مجال.", fr: "ba3d ma eshtaghalt siniin, 2arart aghayyar magaal.", es: "Después de trabajar años, decidí cambiar de campo." },
      { ar: "الشركة اللي بشتغل فيها بتوسع في السوق.", fr: "esh-sherka elli bashtaghal fiiha betwassa3 fis-soo2.", es: "La empresa en la que trabajo se está expandiendo en el mercado." },
      { ar: "كان لازم أرد على الإيميل، بس نسيت.", fr: "kaan laazem arodd 3ala el-email, bass neseet.", es: "Tenía que responder al correo, pero se me olvidó." }
    ]
  },
  {
    id: "sociedad",
    title: "Cultura y sociedad",
    icon: "🌍",
    level: "C1",
    items: [
      { ar: "المجتمع بيتغير بسرعة، والناس مش دايماً قادرة تلحق.", fr: "el-mogtama3 beyetghayyar be-sor3a, wen-naas mesh dayman 2adra tel7a2.", es: "La sociedad cambia deprisa y la gente no siempre puede seguir el ritmo." },
      { ar: "رغم اختلاف الثقافات، فيه قيم مشتركة بين كل الناس.", fr: "raghm ekhtilaaf es-sa2afaat, fiih 2eyam moshtaraka been koll en-naas.", es: "A pesar de la diferencia de culturas, hay valores comunes entre toda la gente." },
      { ar: "اللغة مش بس وسيلة تواصل، دي جزء من الهوية.", fr: "el-logha mesh bass wasiilet tawaasol, di goz2 men el-haweyya.", es: "La lengua no es solo un medio de comunicación, es parte de la identidad." },
      { ar: "كل ما نسافر أكتر، كل ما نفهم العالم أحسن.", fr: "koll ma nesaafer aktar, koll ma nefham el-3aalam a7san.", es: "Cuanto más viajamos, mejor entendemos el mundo." },
      { ar: "من غير احترام متبادل، مفيش مجتمع بيستمر.", fr: "men gheer e7teraam metbaadel, mafiish mogtama3 beyestemerr.", es: "Sin respeto mutuo, ninguna sociedad perdura." },
      { ar: "التكنولوجيا قربت الناس وبعدتهم في نفس الوقت.", fr: "et-teknologya 2arrabet en-naas we ba3adethom fi nafs el-wa2t.", es: "La tecnología ha acercado a la gente y a la vez la ha alejado." },
      { ar: "المفروض نتعلم من أخطائنا مش نكررها.", fr: "el-mafruud net3allem men akhtaa2na mesh nekarrarha.", es: "Se supone que debemos aprender de nuestros errores, no repetirlos." },
      { ar: "مش كل اللي بيلمع دهب.", fr: "mesh koll elli beyelma3 dahab.", es: "No es oro todo lo que reluce." },
      { ar: "التغيير بيبدأ من الفرد قبل ما يوصل للمجتمع.", fr: "et-taghyiir beyebda2 men el-fard 2abl ma yewsal lel-mogtama3.", es: "El cambio empieza en el individuo antes de llegar a la sociedad." }
    ]
  },
  {
    id: "narracion",
    title: "Anécdotas y narración",
    icon: "📖",
    level: "B2",
    items: [
      { ar: "إمبارح كنت رايح الشغل، وفجأة العربية وقفت في نص الطريق.", fr: "embaare7 kont raaye7 esh-shoghl, we fag2a el-3arabeyya we2fet fi noss et-tarii2.", es: "Ayer iba al trabajo y de repente el coche se paró en mitad del camino." },
      { ar: "لما وصلت البيت، لقيت إن الكهربا مقطوعة.", fr: "lamma weselt el-beet, la2eet enn el-kahraba ma2tuu3a.", es: "Cuando llegué a casa, descubrí que la luz estaba cortada." },
      { ar: "كنت بستنى صاحبي من ساعة، وفي الآخر ماجاش.", fr: "kont bastanna saa7bi men saa3a, we fel-aakher magaash.", es: "Estuve esperando a mi amigo una hora, y al final no vino." },
      { ar: "حاولت أتصل بيه كذا مرة بس موبايله كان مقفول.", fr: "7awelt attesel biih kaza marra bass mobaylu kaan ma2fuul.", es: "Intenté llamarlo varias veces, pero su móvil estaba apagado." },
      { ar: "المهم، في الآخر طلع إنه نسي الميعاد خالص.", fr: "el-mohemm, fel-aakher tele3 ennu nesi el-mi3aad khaales.", es: "En fin, al final resultó que se le había olvidado la cita por completo." },
      { ar: "لو كنت عرفت إن الجو هيبقى كده، ماكنتش خرجت.", fr: "law kont 3eref enn el-gaww hayeb2a keda, makontsh kharagt.", es: "Si hubiera sabido que el tiempo iba a estar así, no habría salido." },
      { ar: "بعد يوم طويل، ماكانش قدامي غير إني أنام.", fr: "ba3d yoom tawiil, ma kaansh 2oddaami gheer enni anaam.", es: "Después de un día largo, no me quedaba más que dormir." },
      { ar: "الحكاية كلها حصلت في أقل من ساعة.", fr: "el-7ekaaya kollaha 7aslet fi a2all men saa3a.", es: "Toda la historia ocurrió en menos de una hora." }
    ]
  },
  {
    id: "matices",
    title: "Deseos, hipótesis y matices",
    icon: "🎭",
    level: "C1",
    items: [
      { ar: "ياريت الأمور كانت أسهل من كده.", fr: "yareet el-omuur kaanet as-hal men keda.", es: "Ojalá las cosas fueran más fáciles que esto." },
      { ar: "مهما حاولت، مش هينفع من غير مساعدتك.", fr: "mahma 7awelt, mesh hayenfa3 men gheer mosa3detak.", es: "Por más que lo intente, no funcionará sin tu ayuda." },
      { ar: "يمكن أكون غلطان، بس ده اللي حاسس بيه.", fr: "yemken akuun ghaltaan, bass da elli 7aases biih.", es: "Puede que esté equivocado, pero es lo que siento." },
      { ar: "كنت هقولك، بس خفت تزعل.", fr: "kont ha2ollak, bass khoft tez3al.", es: "Iba a decírtelo, pero temí que te molestaras." },
      { ar: "مش قادر أوصف قد إيه أنا مبسوط.", fr: "mesh 2aader awsef 2add eh ana mabsuut.", es: "No puedo describir lo contento que estoy." },
      { ar: "لو كان الموضوع بإيدي، كنت غيرت حاجات كتير.", fr: "law kaan el-mawduu3 be-iidi, kont ghayyart 7agaat keteer.", es: "Si dependiera de mí, habría cambiado muchas cosas." },
      { ar: "طول ما إنت مصمم، مفيش حاجة مستحيلة.", fr: "tool ma enta mesammem, mafiish 7aaga mosta7iila.", es: "Mientras estés decidido, no hay nada imposible." },
      { ar: "كل اللي أتمناه إنك تكون بخير.", fr: "koll elli atmannaah ennak tekuun bekheer.", es: "Todo lo que deseo es que estés bien." }
    ]
  },
  {
    id: "negociacion",
    title: "Negociación y regateo",
    icon: "🤝",
    level: "B2",
    items: [
      { ar: "لو نزلت السعر شوية، هاخد اتنين.", fr: "law nazzelt es-se3r shwayya, haakhod etneen.", es: "Si bajas un poco el precio, me llevo dos." },
      { ar: "ده أكتر من ميزانيتي بصراحة.", fr: "da aktar men mizaneyti be-saraa7a.", es: "Esto es más de mi presupuesto, sinceramente." },
      { ar: "ممكن نتفق في نص الطريق؟", fr: "mumken nettefe2 fi noss et-tarii2?", es: "¿Podemos llegar a un punto intermedio?" },
      { ar: "أنا مستعد أدفع كاش لو فيه خصم.", fr: "ana mesta3edd adfa3 kaash law fiih khasm.", es: "Estoy dispuesto a pagar en efectivo si hay descuento." },
      { ar: "خليني أفكر وأرجعلك.", fr: "khalliini afakkar we arga3lak.", es: "Déjame pensarlo y te respondo." },
      { ar: "الجودة تستاهل الفرق في السعر.", fr: "el-gooda testaahel el-far2 fes-se3r.", es: "La calidad merece la diferencia de precio." },
      { ar: "لو مش هينفع كده، يبقى نلغي الاتفاق.", fr: "law mesh hayenfa3 keda, yeb2a nelghi el-ettefaa2.", es: "Si así no funciona, entonces cancelamos el trato." },
      { ar: "ده آخر عرض عندي، مش هقدر أنزل أكتر.", fr: "da aakher 3ard 3andi, mesh ha2dar anzel aktar.", es: "Es mi última oferta, no puedo bajar más." }
    ]
  },
  {
    id: "refranes",
    title: "Expresiones y refranes",
    icon: "🗣️",
    level: "C1",
    items: [
      { ar: "اللي فات مات.", fr: "elli faat maat.", es: "Lo pasado, pasado está." },
      { ar: "الصبر مفتاح الفرج.", fr: "es-sabr moftaa7 el-farag.", es: "La paciencia es la llave del alivio." },
      { ar: "إيد واحدة ماتصفقش.", fr: "iid wa7da matsaffa2sh.", es: "Una sola mano no aplaude (la unión hace la fuerza)." },
      { ar: "القرد في عين أمه غزال.", fr: "el-2erd fi 3een ommu ghazaal.", es: "Para su madre hasta el mono es una gacela (el amor es ciego)." },
      { ar: "اللي على البر عوّام.", fr: "elli 3ala el-barr 3awwaam.", es: "El que está en la orilla es buen nadador (es fácil criticar desde fuera)." },
      { ar: "الجواب بيبان من عنوانه.", fr: "el-gawaab beybaan men 3enwaanu.", es: "Las cosas se notan desde el principio." },
      { ar: "الفلوس بتجيب الفلوس.", fr: "el-feloos betgiib el-feloos.", es: "El dinero llama al dinero." },
      { ar: "خد الأصيل ولو على الحصير.", fr: "khod el-asiil walaw 3ala el-7asiir.", es: "Elige a la persona de buena pasta aunque no tenga nada." }
    ]
  }
];

/* =========================================================
 *  HUECOS — rellenar la palabra que falta en frases reales
 *  Cada item: { q: frase con ___, answer: palabra, options: [árabe], es, note }
 * ========================================================= */
const CLOZE = [
  {
    "id": "huecos-gram",
    "title": "Huecos: gramática en frases",
    "icon": "🧩",
    "level": "B1",
    "items": [
      {
        "q": "لو ___ عارف، كنت جيت.",
        "answer": "كنت",
        "options": [
          "كنت",
          "بكون",
          "هكون",
          "كان"
        ],
        "es": "Si lo hubiera sabido, habría venido.",
        "note": "Condicional irreal en pasado: كان aparece en las dos partes → كنت.",
        "fr": "law kont 3aaref, kont geet."
      },
      {
        "q": "الراجل ___ جه إمبارح صاحبي.",
        "answer": "اللي",
        "options": [
          "اللي",
          "ده",
          "إيه",
          "مين"
        ],
        "es": "El hombre que vino ayer es mi amigo.",
        "note": "Relativo con antecedente definido: اللي (elli).",
        "fr": "er-raagel elli geh embaare7 saa7bi."
      },
      {
        "q": "أنا عايز ___ البيت دلوقتي.",
        "answer": "أروح",
        "options": [
          "أروح",
          "بروح",
          "هروح",
          "رحت"
        ],
        "es": "Quiero ir a casa ahora.",
        "note": "Tras عايز, subjuntivo sin بـ: أروح.",
        "fr": "ana 3aayez arou7 el-beet delwa2ti."
      },
      {
        "q": "القميص ___ إمبارح.",
        "answer": "اتغسل",
        "options": [
          "اتغسل",
          "غسل",
          "بيغسل",
          "هيغسل"
        ],
        "es": "La camisa se lavó ayer.",
        "note": "Pasivo con it‑: اتغسل.",
        "fr": "el-2amiis itghasal embaare7."
      },
      {
        "q": "___ يوم بروح الجيم.",
        "answer": "كل",
        "options": [
          "كل",
          "بعض",
          "شوية",
          "نص"
        ],
        "es": "Cada día voy al gimnasio.",
        "note": "كل + nombre indefinido = «cada».",
        "fr": "koll yoom barou7 el-gym."
      },
      {
        "q": "أنا ما ___ الفيلم لسه.",
        "answer": "شفتش",
        "options": [
          "شفتش",
          "شفت",
          "بشوف",
          "هشوف"
        ],
        "es": "Todavía no he visto la película.",
        "note": "Negación del pasado: ما…ش → ما شفتش.",
        "fr": "ana ma shoftesh el-film lessa."
      },
      {
        "q": "أنا ___ بكرة.",
        "answer": "هسافر",
        "options": [
          "هسافر",
          "بسافر",
          "سافرت",
          "اسافر"
        ],
        "es": "Viajaré mañana.",
        "note": "Futuro con هـ: هسافر.",
        "fr": "ana hasaafer bokra."
      },
      {
        "q": "الكتاب ___ بابا مش معايا.",
        "answer": "بتاع",
        "options": [
          "بتاع",
          "بتاعت",
          "بتوع",
          "بتاعي"
        ],
        "es": "El libro de papá no lo tengo.",
        "note": "كتاب es masculino → بتاع.",
        "fr": "el-ketaab betaa3 baba mesh ma3aaya."
      },
      {
        "q": "___ تحب، تعالى.",
        "answer": "لو",
        "options": [
          "لو",
          "عشان",
          "بس",
          "لكن"
        ],
        "es": "Si quieres, ven.",
        "note": "Condición: لو (law).",
        "fr": "law te7ebb, ta3aala."
      },
      {
        "q": "دي أحسن حاجة ___ الدنيا.",
        "answer": "في",
        "options": [
          "في",
          "على",
          "من",
          "عن"
        ],
        "es": "Es la mejor cosa del mundo.",
        "note": "Preposición «en»: في الدنيا.",
        "fr": "di a7san 7aaga fed-donya."
      }
    ]
  },
  {
    "id": "huecos-vocab",
    "title": "Huecos: vocabulario en frases",
    "icon": "🔤",
    "level": "A2",
    "items": [
      {
        "q": "صباح ___",
        "answer": "الخير",
        "options": [
          "الخير",
          "النور",
          "الفل",
          "السعادة"
        ],
        "es": "Buenos días.",
        "note": "صباح الخير = buenos días (se responde صباح النور).",
        "fr": "saba7 el-kheer"
      },
      {
        "q": "الجو ___ النهارده.",
        "answer": "حر",
        "options": [
          "حر",
          "برد",
          "حلو",
          "غالي"
        ],
        "es": "Hoy hace calor.",
        "note": "الجو حر = hace calor.",
        "fr": "el-gaww 7arr en-naharda."
      },
      {
        "q": "عايز ___ مية لو سمحت.",
        "answer": "كوباية",
        "options": [
          "كوباية",
          "طبق",
          "كيلو",
          "متر"
        ],
        "es": "Quiero un vaso de agua, por favor.",
        "note": "كوباية مية = un vaso de agua.",
        "fr": "3aayez kobaayet mayya law sama7t."
      },
      {
        "q": "الحساب لو ___.",
        "answer": "سمحت",
        "options": [
          "سمحت",
          "تحب",
          "ممكن",
          "فضلك"
        ],
        "es": "La cuenta, por favor.",
        "note": "لو سمحت = por favor.",
        "fr": "el-7esaab law sama7t."
      },
      {
        "q": "أنا ___ عربي شوية.",
        "answer": "بتكلم",
        "options": [
          "بتكلم",
          "بكتب",
          "بقرا",
          "بسمع"
        ],
        "es": "Hablo un poco de árabe.",
        "note": "بتكلم = hablo.",
        "fr": "ana batkallem 3arabi shwayya."
      },
      {
        "q": "عندي ___ في راسي.",
        "answer": "صداع",
        "options": [
          "صداع",
          "فلوس",
          "شغل",
          "وقت"
        ],
        "es": "Tengo dolor de cabeza.",
        "note": "صداع = dolor de cabeza.",
        "fr": "3andi sodaa3 fi raasi."
      },
      {
        "q": "العربية دي ___ أوي.",
        "answer": "غالية",
        "options": [
          "غالية",
          "رخيصة",
          "قريبة",
          "بعيدة"
        ],
        "es": "Este coche es muy caro.",
        "note": "غالية (femenino) = cara.",
        "fr": "el-3arabeyya di ghalya awi."
      },
      {
        "q": "هروح ___ عشان أشتري أكل.",
        "answer": "السوق",
        "options": [
          "السوق",
          "المطار",
          "الجامعة",
          "المستشفى"
        ],
        "es": "Iré al mercado para comprar comida.",
        "note": "السوق = el mercado.",
        "fr": "harou7 es-soo2 3ashaan ashteri akl."
      }
    ]
  }
];

/* =========================================================
 *  FRASES A2–B1 — traducción de frases sencillas (base amplia)
 * ========================================================= */
const SENTENCES_A2B1 = [
  {
    id: "saludos_f",
    title: "Saludos y presentaciones",
    icon: "👋",
    level: "A2",
    items: [
      { ar: "أهلاً، أنا اسمي أحمد.", fr: "ahlan, ana esmi a7mad.", es: "Hola, me llamo Ahmad." },
      { ar: "إزيك؟ أنا كويس الحمد لله.", fr: "ezzayyak? ana kwayyes el-7amdu lillah.", es: "¿Cómo estás? Estoy bien, gracias a Dios." },
      { ar: "إنت منين؟", fr: "enta meneen?", es: "¿De dónde eres?" },
      { ar: "أنا من إسبانيا.", fr: "ana men esbanya.", es: "Soy de España." },
      { ar: "تشرفنا.", fr: "tasharrafna.", es: "Encantado de conocerte." },
      { ar: "بتتكلم عربي؟", fr: "bettekallem 3arabi?", es: "¿Hablas árabe?" },
      { ar: "شوية بس.", fr: "shwayya bass.", es: "Solo un poco." },
      { ar: "ممكن تعيد تاني؟", fr: "mumken te3iid taani?", es: "¿Puedes repetir otra vez?" },
      { ar: "مش فاهم كويس.", fr: "mesh faahem kwayyes.", es: "No entiendo bien." },
      { ar: "مع السلامة، نشوفك بكرة.", fr: "ma3a es-salaama, neshoofak bokra.", es: "Adiós, nos vemos mañana." }
    ]
  },
  {
    id: "rutina_f",
    title: "En casa y rutina",
    icon: "🏠",
    level: "A2",
    items: [
      { ar: "بصحى الساعة سبعة الصبح.", fr: "bas7a es-saa3a sab3a es-sob7.", es: "Me despierto a las siete de la mañana." },
      { ar: "بشرب قهوة وبفطر.", fr: "bashrab 2ahwa we baftar.", es: "Tomo café y desayuno." },
      { ar: "بروح الشغل بالمترو.", fr: "barou7 esh-shoghl bel-metro.", es: "Voy al trabajo en metro." },
      { ar: "برجع البيت الساعة ستة.", fr: "barga3 el-beet es-saa3a setta.", es: "Vuelvo a casa a las seis." },
      { ar: "بعد العشا بتفرج على التلفزيون.", fr: "ba3d el-3asha batfarrag 3ala et-telefezyoon.", es: "Después de cenar veo la tele." },
      { ar: "بنام بدري عشان تعبان.", fr: "banaam badri 3ashaan ta3baan.", es: "Me acuesto temprano porque estoy cansado." },
      { ar: "البيت بتاعي قريب من هنا.", fr: "el-beet betaa3i 2orayyeb men hena.", es: "Mi casa está cerca de aquí." },
      { ar: "لازم أنضف الأوضة.", fr: "laazem anaddaf el-ooda.", es: "Tengo que limpiar la habitación." },
      { ar: "الحمام على الشمال.", fr: "el-7ammaam 3ala esh-shemaal.", es: "El baño está a la izquierda." },
      { ar: "عندي وقت فاضي النهارده.", fr: "3andi wa2t faadi en-naharda.", es: "Tengo tiempo libre hoy." }
    ]
  },
  {
    id: "comida_f",
    title: "Comida y restaurante",
    icon: "🍽️",
    level: "A2",
    items: [
      { ar: "أنا جعان أوي.", fr: "ana ga3aan awi.", es: "Tengo mucha hambre." },
      { ar: "عايز أطلب أكل.", fr: "3aayez atlob akl.", es: "Quiero pedir comida." },
      { ar: "ممكن المنيو لو سمحت؟", fr: "mumken el-menyu law sama7t?", es: "¿El menú, por favor?" },
      { ar: "أنا هاخد فراخ ورز.", fr: "ana haakhod feraakh we roz.", es: "Yo tomaré pollo y arroz." },
      { ar: "المية دي ساقعة؟", fr: "el-mayya di sa2e3a?", es: "¿Está fría esta agua?" },
      { ar: "الأكل ده لذيذ جداً.", fr: "el-akl da laziiz geddan.", es: "Esta comida está muy rica." },
      { ar: "مش عايز سكر في الشاي.", fr: "mesh 3aayez sokkar fesh-shaay.", es: "No quiero azúcar en el té." },
      { ar: "الحساب لو سمحت.", fr: "el-7esaab law sama7t.", es: "La cuenta, por favor." },
      { ar: "بالهنا والشفا.", fr: "bel-hana wesh-shifa.", es: "¡Buen provecho!" },
      { ar: "المطعم ده غالي شوية.", fr: "el-mat3am da ghaali shwayya.", es: "Este restaurante es un poco caro." }
    ]
  },
  {
    id: "compras_f",
    title: "De compras",
    icon: "🛒",
    level: "A2",
    items: [
      { ar: "بكام الكيلو؟", fr: "bekaam el-kiilo?", es: "¿Cuánto cuesta el kilo?" },
      { ar: "ده غالي، عندك أرخص؟", fr: "da ghaali, 3andak arkhas?", es: "Es caro, ¿tienes algo más barato?" },
      { ar: "عايز اتنين كيلو تفاح.", fr: "3aayez etneen kiilo toffaa7.", es: "Quiero dos kilos de manzanas." },
      { ar: "ممكن أشوف اللي هناك؟", fr: "mumken ashuuf elli henaak?", es: "¿Puedo ver el de allí?" },
      { ar: "هاخد ده، بكام كله؟", fr: "haakhod da, bekaam kollu?", es: "Me llevo esto, ¿cuánto es todo?" },
      { ar: "معايا مية جنيه بس.", fr: "ma3aaya miit geneeh bass.", es: "Solo llevo cien libras." },
      { ar: "المحل بيقفل الساعة كام؟", fr: "el-ma7all beye2fel es-saa3a kaam?", es: "¿A qué hora cierra la tienda?" },
      { ar: "عايز مقاس أكبر من كده.", fr: "3aayez ma2aas akbar men keda.", es: "Quiero una talla más grande que esta." },
      { ar: "فيه لون تاني؟", fr: "fiih loon taani?", es: "¿Hay otro color?" },
      { ar: "ممكن أدفع بالفيزا؟", fr: "mumken adfa3 bel-viza?", es: "¿Puedo pagar con tarjeta?" }
    ]
  },
  {
    id: "direcciones_f",
    title: "Direcciones y transporte",
    icon: "🧭",
    level: "B1",
    items: [
      { ar: "فين أقرب محطة مترو؟", fr: "feen a2rab ma7attet metro?", es: "¿Dónde está la estación de metro más cercana?" },
      { ar: "امشي على طول وبعدين شمال.", fr: "emshi 3ala tool we ba3deen shemaal.", es: "Sigue recto y luego a la izquierda." },
      { ar: "المكان ده بعيد من هنا؟", fr: "el-makaan da be3iid men hena?", es: "¿Está lejos este sitio de aquí?" },
      { ar: "لأ، قريب، خمس دقايق مشي.", fr: "la2, 2orayyeb, khamas da2aaye2 mashi.", es: "No, está cerca, cinco minutos andando." },
      { ar: "ممكن تاكسي للمطار؟", fr: "mumken taksi lel-mataar?", es: "¿Un taxi al aeropuerto?" },
      { ar: "الأتوبيس بيوقف هنا؟", fr: "el-otobiis beywa2af hena?", es: "¿El autobús para aquí?" },
      { ar: "أنا تايه، مش عارف الطريق.", fr: "ana taayeh, mesh 3aaref et-tarii2.", es: "Estoy perdido, no sé el camino." },
      { ar: "لف يمين عند الإشارة.", fr: "leff yemiin 3and el-eshaara.", es: "Gira a la derecha en el semáforo." },
      { ar: "القطر بيتأخر كتير.", fr: "el-2atr beyet2akhar keteer.", es: "El tren se retrasa mucho." },
      { ar: "وقف هنا لو سمحت.", fr: "2af hena law sama7t.", es: "Para aquí, por favor." }
    ]
  },
  {
    id: "familia_f",
    title: "Familia y gente",
    icon: "👨‍👩‍👧",
    level: "A2",
    items: [
      { ar: "دي أختي الكبيرة.", fr: "di okhti el-kebiira.", es: "Esta es mi hermana mayor." },
      { ar: "عندي أخين وأخت.", fr: "3andi akhkheen we okht.", es: "Tengo dos hermanos y una hermana." },
      { ar: "بابا بيشتغل دكتور.", fr: "baba beyshtaghal doktoor.", es: "Mi padre trabaja de médico." },
      { ar: "ماما ست بيت.", fr: "mama sett beet.", es: "Mi madre es ama de casa." },
      { ar: "جدي عنده تمانين سنة.", fr: "geddi 3andu tamaniin sana.", es: "Mi abuelo tiene ochenta años." },
      { ar: "أنا متجوز وعندي ولد.", fr: "ana metgawwez we 3andi walad.", es: "Estoy casado y tengo un hijo." },
      { ar: "صاحبي ساكن جنبي.", fr: "saa7bi saaken gambi.", es: "Mi amigo vive a mi lado." },
      { ar: "العيلة كلها هتيجي بكرة.", fr: "el-3eela kollaha hatiigi bokra.", es: "Toda la familia vendrá mañana." },
      { ar: "بحب عيلتي أوي.", fr: "ba7ebb 3eelti awi.", es: "Quiero mucho a mi familia." },
      { ar: "إنت عندك إخوات؟", fr: "enta 3andak ekhwaat?", es: "¿Tienes hermanos?" }
    ]
  },
  {
    id: "clima_f",
    title: "El tiempo y el clima",
    icon: "🌤️",
    level: "A2",
    items: [
      { ar: "الجو حر النهارده.", fr: "el-gaww 7arr en-naharda.", es: "Hoy hace calor." },
      { ar: "بكرة هتبقى الدنيا بردانة.", fr: "bokra hateb2a ed-donya bardaana.", es: "Mañana hará frío." },
      { ar: "الدنيا بتمطر بره.", fr: "ed-donya betmattar barra.", es: "Está lloviendo fuera." },
      { ar: "الشمس طالعة والجو حلو.", fr: "esh-shams tal3a wel-gaww 7elw.", es: "Hace sol y buen tiempo." },
      { ar: "خد جاكيت عشان البرد.", fr: "khod jaaket 3ashaan el-bard.", es: "Coge una chaqueta por el frío." },
      { ar: "الصيف في مصر حر جداً.", fr: "es-seef fi masr 7arr geddan.", es: "El verano en Egipto es muy caluroso." },
      { ar: "بحب الجو ده أوي.", fr: "ba7ebb el-gaww da awi.", es: "Me encanta este tiempo." },
      { ar: "فيه ريح كتير النهارده.", fr: "fiih rii7 keteer en-naharda.", es: "Hoy hace mucho viento." },
      { ar: "الجو هيبقى أحسن بكرة.", fr: "el-gaww hayeb2a a7san bokra.", es: "El tiempo estará mejor mañana." },
      { ar: "الدنيا بتبرد بالليل.", fr: "ed-donya betbrod bel-leel.", es: "Por la noche refresca." }
    ]
  },
  {
    id: "planes_f",
    title: "Planes y tiempo libre",
    icon: "📅",
    level: "B1",
    items: [
      { ar: "عايز تعمل إيه الويكاند؟", fr: "3aayez te3mel eh el-weekend?", es: "¿Qué quieres hacer el fin de semana?" },
      { ar: "يلا نروح السينما.", fr: "yalla nerou7 es-seenama.", es: "Venga, vamos al cine." },
      { ar: "نفسي أسافر إسكندرية.", fr: "nefsi asaafer eskenderiyya.", es: "Me gustaría viajar a Alejandría." },
      { ar: "ممكن نتقابل بكرة الساعة خمسة؟", fr: "mumken net2aabel bokra es-saa3a khamsa?", es: "¿Podemos quedar mañana a las cinco?" },
      { ar: "أنا مشغول النهارده، نعملها بكرة.", fr: "ana mashghool en-naharda, ne3malha bokra.", es: "Hoy estoy ocupado, hagámoslo mañana." },
      { ar: "بحب ألعب كورة مع أصحابي.", fr: "ba7ebb al3ab koora ma3a as7aabi.", es: "Me gusta jugar al fútbol con mis amigos." },
      { ar: "فيه حفلة عند صاحبي.", fr: "fiih 7afla 3and saa7bi.", es: "Hay una fiesta en casa de mi amigo." },
      { ar: "تعالى معانا لو فاضي.", fr: "ta3aala ma3aana law faadi.", es: "Ven con nosotros si estás libre." },
      { ar: "الإجازة الجاية هنروح البحر.", fr: "el-agaaza el-gayya hanrou7 el-ba7r.", es: "Las próximas vacaciones iremos al mar." },
      { ar: "مش عارف أعمل إيه بكرة.", fr: "mesh 3aaref a3mel eh bokra.", es: "No sé qué hacer mañana." }
    ]
  },
  {
    id: "salud_f",
    title: "Salud (básico)",
    icon: "🩺",
    level: "B1",
    items: [
      { ar: "أنا تعبان شوية النهارده.", fr: "ana ta3baan shwayya en-naharda.", es: "Hoy estoy un poco malo." },
      { ar: "عندي صداع من الصبح.", fr: "3andi sodaa3 men es-sob7.", es: "Tengo dolor de cabeza desde la mañana." },
      { ar: "لازم أروح الدكتور.", fr: "laazem arou7 ed-doktoor.", es: "Tengo que ir al médico." },
      { ar: "خد الدوا مرتين في اليوم.", fr: "khod ed-dawa marriteen fel-yoom.", es: "Toma la medicina dos veces al día." },
      { ar: "محتاج أرتاح شوية.", fr: "me7taag artaa7 shwayya.", es: "Necesito descansar un poco." },
      { ar: "بطني بتوجعني بعد الأكل.", fr: "batni betewga3ni ba3d el-akl.", es: "Me duele la barriga después de comer." },
      { ar: "فين أقرب صيدلية؟", fr: "feen a2rab saydaleyya?", es: "¿Dónde está la farmacia más cercana?" },
      { ar: "ألف سلامة عليك.", fr: "alf salaama 3aleek.", es: "Que te mejores." },
      { ar: "مش قادر أنام كويس.", fr: "mesh 2aader anaam kwayyes.", es: "No puedo dormir bien." },
      { ar: "أحسن دلوقتي، شكراً.", fr: "a7san delwa2ti, shukran.", es: "Estoy mejor ahora, gracias." }
    ]
  },
  {
    id: "utiles_f",
    title: "Preguntas y frases útiles",
    icon: "💬",
    level: "A2",
    items: [
      { ar: "الساعة كام دلوقتي؟", fr: "es-saa3a kaam delwa2ti?", es: "¿Qué hora es ahora?" },
      { ar: "ممكن تساعدني؟", fr: "mumken tesa3edni?", es: "¿Puedes ayudarme?" },
      { ar: "ده بيتقال إزاي بالعربي؟", fr: "da beyet2aal ezzaay bel-3arabi?", es: "¿Cómo se dice esto en árabe?" },
      { ar: "مش فاهم، ممكن بالراحة؟", fr: "mesh faahem, mumken bel-raa7a?", es: "No entiendo, ¿más despacio?" },
      { ar: "أنا آسف، أنا اللي غلطان.", fr: "ana aasef, ana elli ghaltaan.", es: "Lo siento, soy yo el que se ha equivocado." },
      { ar: "مفيش مشكلة خالص.", fr: "mafiish mushkila khaales.", es: "No hay ningún problema." },
      { ar: "استنى دقيقة لو سمحت.", fr: "istanna de2ii2a law sama7t.", es: "Espera un minuto, por favor." },
      { ar: "أنا مستعجل شوية.", fr: "ana mesta3gel shwayya.", es: "Tengo un poco de prisa." },
      { ar: "ممكن أسألك حاجة؟", fr: "mumken as2alak 7aaga?", es: "¿Puedo preguntarte algo?" },
      { ar: "شكراً على مساعدتك.", fr: "shukran 3ala mosa3detak.", es: "Gracias por tu ayuda." }
    ]
  }
];

/* =========================================================
 *  FRASES DE PRÁCTICA POR TEMA DE GRAMÁTICA
 *  Rellenar la palabra clave dentro de una frase que practica cada regla.
 *  Clave = id de la ficha de gramática. Item: { q, answer, options, es, note }
 * ========================================================= */
const GRAMMAR_DRILLS = {
  "presente": [
    {
      "q": "هو ___ في شركة كبيرة.",
      "answer": "بيشتغل",
      "options": [
        "بيشتغل",
        "اشتغل",
        "هيشتغل",
        "اشتغلت"
      ],
      "es": "Él trabaja en una empresa grande.",
      "note": "howwa presente: biyshtaghal.",
      "fr": "howwa biyshtaghal fi sherka kebiira."
    },
    {
      "q": "إحنا ___ سوا كل يوم.",
      "answer": "بناكل",
      "options": [
        "بناكل",
        "اكلنا",
        "هناكل",
        "كلوا"
      ],
      "es": "Comemos juntos cada día.",
      "note": "e7na presente: binaakol.",
      "fr": "e7na binaakol sawa koll yoom."
    },
    {
      "q": "هي ___ إيه دلوقتي؟",
      "answer": "بتعمل",
      "options": [
        "بتعمل",
        "عملت",
        "هتعمل",
        "اعمل"
      ],
      "es": "¿Qué hace (ella) ahora?",
      "note": "heyya: biti3mel.",
      "fr": "heyya biti3mel eh delwa2ti?"
    },
    {
      "q": "إنتي ___ عربي كويس.",
      "answer": "بتتكلمي",
      "options": [
        "بتتكلمي",
        "بتتكلم",
        "اتكلمتي",
        "هتتكلمي"
      ],
      "es": "(Tú, f) hablas árabe bien.",
      "note": "enti añade ‑i: bitetkallemi.",
      "fr": "enti bitetkallemi 3arabi kwayyes."
    },
    {
      "q": "أنا ___ قهوة الصبح.",
      "answer": "بشرب",
      "options": [
        "بشرب",
        "شربت",
        "هشرب",
        "اشرب"
      ],
      "es": "Yo bebo café por la mañana.",
      "note": "ana: bashrab.",
      "fr": "ana bashrab 2ahwa es-sob7."
    }
  ],
  "pasado": [
    {
      "q": "إمبارح ___ صاحبي في المطعم.",
      "answer": "قابلت",
      "options": [
        "قابلت",
        "بقابل",
        "هقابل",
        "قابل"
      ],
      "es": "Ayer me encontré con mi amigo en el restaurante.",
      "note": "ana pasado: 2abelt.",
      "fr": "embaare7 2abelt saa7bi fel-mat3am."
    },
    {
      "q": "هما ___ متأخر إمبارح.",
      "answer": "وصلو",
      "options": [
        "وصلو",
        "وصلنا",
        "هيوصلوا",
        "بيوصلوا"
      ],
      "es": "Ellos llegaron tarde ayer.",
      "note": "homma ‑u: weslu.",
      "fr": "homma weslu met2akhar embaare7."
    },
    {
      "q": "هي ___ الشغل من ساعة.",
      "answer": "خلصت",
      "options": [
        "خلصت",
        "بتخلص",
        "هتخلص",
        "خلص"
      ],
      "es": "(Ella) terminó el trabajo hace una hora.",
      "note": "heyya ‑et: khallaset.",
      "fr": "heyya khallaset esh-shoghl men saa3a."
    },
    {
      "q": "إحنا ___ إسكندرية الصيف اللي فات.",
      "answer": "رحنا",
      "options": [
        "رحنا",
        "بنروح",
        "هنروح",
        "راحو"
      ],
      "es": "Fuimos a Alejandría el verano pasado.",
      "note": "raa7 (hueco), e7na: ro7na.",
      "fr": "e7na ro7na eskenderiyya es-seef elli faat."
    },
    {
      "q": "إنت ___ الفيلم ده؟",
      "answer": "شفت",
      "options": [
        "شفت",
        "بتشوف",
        "هتشوف",
        "شفتي"
      ],
      "es": "¿(Tú, m) viste esta película?",
      "note": "enta ‑t: shoft.",
      "fr": "enta shoft el-film da?"
    }
  ],
  "futuro": [
    {
      "q": "بكرة ___ في الامتحان إن شاء الله.",
      "answer": "هنجح",
      "options": [
        "هنجح",
        "بنجح",
        "نجحت",
        "انجح"
      ],
      "es": "Mañana aprobaré el examen, si Dios quiere.",
      "note": "futuro ha‑: hangah.",
      "fr": "bokra hangah fel-emte7aan in shaa2 allah."
    },
    {
      "q": "إحنا ___ العيلة الأسبوع الجاي.",
      "answer": "هنزور",
      "options": [
        "هنزور",
        "بنزور",
        "زرنا",
        "هيزوروا"
      ],
      "es": "Visitaremos a la familia la próxima semana.",
      "note": "e7na: hanzuur.",
      "fr": "e7na hanzuur el-3eela el-osboo3 el-gay."
    },
    {
      "q": "هي ___ بدري النهارده.",
      "answer": "هتمشي",
      "options": [
        "هتمشي",
        "بتمشي",
        "مشت",
        "هيمشي"
      ],
      "es": "(Ella) se irá temprano hoy.",
      "note": "heyya hat‑: hatemshi.",
      "fr": "heyya hatemshi badri en-naharda."
    },
    {
      "q": "إنت ___ إيه بعد كده؟",
      "answer": "هتعمل",
      "options": [
        "هتعمل",
        "بتعمل",
        "عملت",
        "هعمل"
      ],
      "es": "¿Qué harás después?",
      "note": "enta hat‑: hati3mel.",
      "fr": "enta hati3mel eh ba3d keda?"
    },
    {
      "q": "أنا ___ ليك بكرة.",
      "answer": "هتصل",
      "options": [
        "هتصل",
        "بتصل",
        "اتصلت",
        "هيتصل"
      ],
      "es": "Te llamaré mañana.",
      "note": "ana ha‑: hattesel.",
      "fr": "ana hattesel liik bokra."
    }
  ],
  "negacion": [
    {
      "q": "أنا ___ الفيلم ده.",
      "answer": "ماشفتش",
      "options": [
        "ماشفتش",
        "مش شفت",
        "شفتش",
        "مافيش شفت"
      ],
      "es": "No he visto esta película.",
      "note": "verbo pasado → ma…sh: ma shoftesh.",
      "fr": "ana ma shoftesh el-film da."
    },
    {
      "q": "ده ___ صح خالص.",
      "answer": "مش",
      "options": [
        "مش",
        "ما",
        "مفيش",
        "ولا"
      ],
      "es": "Esto no es correcto en absoluto.",
      "note": "adjetivo → mesh.",
      "fr": "da mesh sa77 khaales."
    },
    {
      "q": "___ وقت النهارده.",
      "answer": "مفيش",
      "options": [
        "مفيش",
        "مش",
        "ما",
        "ولا"
      ],
      "es": "No hay tiempo hoy.",
      "note": "«no hay» → mafiish.",
      "fr": "mafiish wa2t en-naharda."
    },
    {
      "q": "أنا ___ هروح بكرة.",
      "answer": "مش",
      "options": [
        "مش",
        "ما",
        "مفيش",
        "ماشي"
      ],
      "es": "No iré mañana.",
      "note": "futuro → mesh + futuro.",
      "fr": "ana mesh harou7 bokra."
    },
    {
      "q": "هو ___ عربي.",
      "answer": "مبيتكلمش",
      "options": [
        "مبيتكلمش",
        "مش بيتكلم",
        "بيتكلمش",
        "ما يتكلم"
      ],
      "es": "Él no habla árabe.",
      "note": "presente → ma…sh: ma biyetkallemsh.",
      "fr": "howwa ma biyetkallemsh 3arabi."
    }
  ],
  "modales": [
    {
      "q": "أنا عايز ___ دلوقتي.",
      "answer": "أنام",
      "options": [
        "أنام",
        "بنام",
        "هنام",
        "نمت"
      ],
      "es": "Quiero dormir ahora.",
      "note": "tras عايز, subjuntivo sin بـ: anaam.",
      "fr": "ana 3aayez anaam delwa2ti."
    },
    {
      "q": "لازم ___ الشغل بدري.",
      "answer": "نخلص",
      "options": [
        "نخلص",
        "بنخلص",
        "هنخلص",
        "خلصنا"
      ],
      "es": "Tenemos que terminar el trabajo temprano.",
      "note": "laazem + subjuntivo: nekhallas.",
      "fr": "laazem nekhallas esh-shoghl badri."
    },
    {
      "q": "ممكن ___ من فضلك؟",
      "answer": "تساعدني",
      "options": [
        "تساعدني",
        "بتساعدني",
        "هتساعدني",
        "ساعدتني"
      ],
      "es": "¿Puedes ayudarme, por favor?",
      "note": "mumken + subjuntivo: tesa3edni.",
      "fr": "mumken tesa3edni min fadlak?"
    },
    {
      "q": "مش ___ نخرج النهارده.",
      "answer": "لازم",
      "options": [
        "لازم",
        "عايز",
        "ممكن",
        "نفسي"
      ],
      "es": "No hace falta que salgamos hoy.",
      "note": "«no hace falta» = mesh laazem.",
      "fr": "mesh laazem nokhrog en-naharda."
    },
    {
      "q": "نفسي ___ مصر تاني.",
      "answer": "أزور",
      "options": [
        "أزور",
        "بزور",
        "هزور",
        "زرت"
      ],
      "es": "Me gustaría visitar Egipto otra vez.",
      "note": "nefsi + subjuntivo: azuur.",
      "fr": "nefsi azuur masr taani."
    }
  ],
  "relativo": [
    {
      "q": "الكتاب ___ قريته حلو.",
      "answer": "اللي",
      "options": [
        "اللي",
        "ده",
        "إيه",
        "مين"
      ],
      "es": "El libro que leí es bonito.",
      "note": "relativo con definido: elli.",
      "fr": "el-ketaab elli 2areetu 7elw."
    },
    {
      "q": "البنت ___ شفتها إمبارح صاحبتي.",
      "answer": "اللي",
      "options": [
        "اللي",
        "دي",
        "ده",
        "بتاع"
      ],
      "es": "La chica que vi ayer es mi amiga.",
      "note": "elli invariable + pronombre de recuerdo.",
      "fr": "el-bent elli shoftaha embaare7 sa7beti."
    },
    {
      "q": "ده الأكل ___ عملته إمبارح.",
      "answer": "اللي",
      "options": [
        "اللي",
        "ده",
        "دي",
        "بتاع"
      ],
      "es": "Esta es la comida que hice ayer.",
      "note": "elli + ‑u (recuerdo).",
      "fr": "da el-akl elli 3ameltu embaare7."
    },
    {
      "q": "الناس ___ هنا مبسوطين.",
      "answer": "اللي",
      "options": [
        "اللي",
        "دول",
        "ده",
        "بتوع"
      ],
      "es": "La gente que está aquí está contenta.",
      "note": "elli también en plural.",
      "fr": "en-naas elli hena mabsutiin."
    }
  ],
  "condicional": [
    {
      "q": "___ عندي فلوس، هسافر.",
      "answer": "لو",
      "options": [
        "لو",
        "عشان",
        "بس",
        "لكن"
      ],
      "es": "Si tengo dinero, viajaré.",
      "note": "condición: law.",
      "fr": "law 3andi feloos, hasaafer."
    },
    {
      "q": "لو كنت عرفت، ___ جيت.",
      "answer": "كنت",
      "options": [
        "كنت",
        "هكون",
        "بكون",
        "كان"
      ],
      "es": "Si lo hubiera sabido, habría venido.",
      "note": "irreal pasado: كان en las dos partes.",
      "fr": "law kont 3eref, kont geet."
    },
    {
      "q": "لو تحب، ___ .",
      "answer": "تعالى",
      "options": [
        "تعالى",
        "جه",
        "بيجي",
        "هيجي"
      ],
      "es": "Si quieres, ven.",
      "note": "respuesta en imperativo.",
      "fr": "law te7ebb, ta3aala."
    },
    {
      "q": "لو ما ساعدتنيش، ___ هينفع.",
      "answer": "مش",
      "options": [
        "مش",
        "ما",
        "مفيش",
        "لو"
      ],
      "es": "Si no me ayudas, no funcionará.",
      "note": "futuro negativo: mesh hayenfa3.",
      "fr": "law ma sa3attenish, mesh hayenfa3."
    }
  ],
  "objeto": [
    {
      "q": "هو ___ إمبارح.",
      "answer": "شافني",
      "options": [
        "شافني",
        "شافي",
        "شافه",
        "شفته"
      ],
      "es": "Él me vio ayer.",
      "note": "«me» en verbo: ‑ni → shaafni.",
      "fr": "howwa shaafni embaare7."
    },
    {
      "q": "أنا ___ كل يوم.",
      "answer": "بشوفها",
      "options": [
        "بشوفها",
        "بشوفه",
        "بشوفني",
        "شفتها"
      ],
      "es": "La veo cada día.",
      "note": "‑ha = la.",
      "fr": "ana bashoofha koll yoom."
    },
    {
      "q": "إحنا ___ في الحفلة.",
      "answer": "شفناهم",
      "options": [
        "شفناهم",
        "شفناها",
        "شافونا",
        "بنشوفهم"
      ],
      "es": "Los vimos en la fiesta.",
      "note": "‑hom = los.",
      "fr": "e7na shofnaahom fel-7afla."
    },
    {
      "q": "أنا ___ أوي.",
      "answer": "بحبك",
      "options": [
        "بحبك",
        "بحبه",
        "بحبها",
        "حبيتك"
      ],
      "es": "Te quiero mucho.",
      "note": "‑ak = te (m).",
      "fr": "ana ba7ebbak awi."
    }
  ],
  "objeto-indirecto": [
    {
      "q": "هو ___ الحقيقة.",
      "answer": "قالي",
      "options": [
        "قالي",
        "قاله",
        "قالها",
        "قلته"
      ],
      "es": "Él me dijo la verdad.",
      "note": "‑li = a mí: 2alli.",
      "fr": "howwa 2alli el-7a2ii2a."
    },
    {
      "q": "___ الكتاب لو سمحت.",
      "answer": "إديني",
      "options": [
        "إديني",
        "إدهولي",
        "قوللي",
        "خدلي"
      ],
      "es": "Dame el libro, por favor.",
      "note": "eddiini = dame.",
      "fr": "eddiini el-ketaab law sama7t."
    },
    {
      "q": "لو شفته، ___ يكلمني.",
      "answer": "قوله",
      "options": [
        "قوله",
        "قالي",
        "قلتله",
        "بقوله"
      ],
      "es": "Si lo ves, dile que me llame.",
      "note": "imperativo: 2ollu = dile.",
      "fr": "law shoftu, 2ollu yekallemni."
    },
    {
      "q": "أنا ___ حاجة مهمة بكرة.",
      "answer": "هقولك",
      "options": [
        "هقولك",
        "بقولك",
        "قلتلك",
        "قولي"
      ],
      "es": "Te diré algo importante mañana.",
      "note": "futuro + ‑lak: ha2ollak.",
      "fr": "ana ha2ollak 7aaga mohemma bokra."
    }
  ],
  "pasivo": [
    {
      "q": "القميص ___ إمبارح.",
      "answer": "اتغسل",
      "options": [
        "اتغسل",
        "غسل",
        "بيغسل",
        "هيغسل"
      ],
      "es": "La camisa se lavó ayer.",
      "note": "pasivo it‑: itghasal.",
      "fr": "el-2amiis itghasal embaare7."
    },
    {
      "q": "الأكل ده ___ إزاي؟",
      "answer": "بيتعمل",
      "options": [
        "بيتعمل",
        "بيعمل",
        "اتعمل",
        "هيعمل"
      ],
      "es": "¿Cómo se hace esta comida?",
      "note": "presente pasivo: biyet3emel.",
      "fr": "el-akl da biyet3emel ezzaay?"
    },
    {
      "q": "الشباك ___ من الريح.",
      "answer": "اتكسر",
      "options": [
        "اتكسر",
        "كسر",
        "بيكسر",
        "هيكسر"
      ],
      "es": "La ventana se rompió por el viento.",
      "note": "itkasar.",
      "fr": "esh-shebbaak itkasar men er-rii7."
    },
    {
      "q": "البيت ده ___ من سنة.",
      "answer": "اتباع",
      "options": [
        "اتباع",
        "باع",
        "بيبيع",
        "هيبيع"
      ],
      "es": "Esta casa fue vendida hace un año.",
      "note": "itbaa3.",
      "fr": "el-beet da itbaa3 men sana."
    }
  ],
  "tener": [
    {
      "q": "أنا ___ عربية جديدة.",
      "answer": "عندي",
      "options": [
        "عندي",
        "عندك",
        "عنده",
        "معايا"
      ],
      "es": "Tengo un coche nuevo.",
      "note": "3andi = tengo.",
      "fr": "ana 3andi 3arabeyya gediida."
    },
    {
      "q": "هي ___ تلات أولاد.",
      "answer": "عندها",
      "options": [
        "عندها",
        "عنده",
        "عندنا",
        "عندي"
      ],
      "es": "(Ella) tiene tres hijos.",
      "note": "3andaha.",
      "fr": "heyya 3andaha talat awlaad."
    },
    {
      "q": "أنا ___ فلوس.",
      "answer": "معنديش",
      "options": [
        "معنديش",
        "مش عندي",
        "عنديش",
        "مفيش عندي"
      ],
      "es": "No tengo dinero.",
      "note": "negación: ma3andiish.",
      "fr": "ana ma3andiish feloos."
    },
    {
      "q": "إمبارح ___ عندي وقت.",
      "answer": "كان",
      "options": [
        "كان",
        "بيكون",
        "هيكون",
        "عندي"
      ],
      "es": "Ayer tenía tiempo.",
      "note": "pasado: kaan 3andi.",
      "fr": "embaare7 kaan 3andi wa2t."
    }
  ],
  "plural": [
    {
      "q": "عندي تلات ___ .",
      "answer": "كتب",
      "options": [
        "كتب",
        "كتاب",
        "كتابين",
        "كتابات"
      ],
      "es": "Tengo tres libros.",
      "note": "3–10 → plural: kotob.",
      "fr": "3andi talat kotob."
    },
    {
      "q": "البيوت في المدينة ___ .",
      "answer": "كبيرة",
      "options": [
        "كبيرة",
        "كبار",
        "كبير",
        "كبيرين"
      ],
      "es": "Las casas de la ciudad son grandes.",
      "note": "cosas plural → fem sing: kebiira.",
      "fr": "el-beyuut fel-madiina kebiira."
    },
    {
      "q": "الأولاد ___ في الجنينة.",
      "answer": "بيلعبو",
      "options": [
        "بيلعبو",
        "بيلعب",
        "لعب",
        "هيلعب"
      ],
      "es": "Los niños juegan en el jardín.",
      "note": "personas plural → verbo plural.",
      "fr": "el-awlaad biyel3abu fel-geneena."
    },
    {
      "q": "في الشارع ___ كتير.",
      "answer": "عربيات",
      "options": [
        "عربيات",
        "عربية",
        "عربيتين",
        "عرباية"
      ],
      "es": "En la calle hay muchos coches.",
      "note": "fem regular ‑aat: 3arabeyyaat.",
      "fr": "fesh-shaare3 3arabeyyaat keteer."
    }
  ],
  "comparativo": [
    {
      "q": "القاهرة ___ من إسكندرية.",
      "answer": "أكبر",
      "options": [
        "أكبر",
        "كبير",
        "كبيرة",
        "كبار"
      ],
      "es": "El Cairo es más grande que Alejandría.",
      "note": "comparativo af3al: akbar.",
      "fr": "el-2aahera akbar men eskenderiyya."
    },
    {
      "q": "ده ___ من ده.",
      "answer": "أحسن",
      "options": [
        "أحسن",
        "كويس",
        "حسن",
        "أكويس"
      ],
      "es": "Este es mejor que ese.",
      "note": "kwayyes → a7san.",
      "fr": "da a7san men da."
    },
    {
      "q": "أنا ___ منك.",
      "answer": "أطول",
      "options": [
        "أطول",
        "طويل",
        "طويلة",
        "أطوال"
      ],
      "es": "Soy más alto que tú.",
      "note": "tawiil → atwal.",
      "fr": "ana atwal mennak."
    },
    {
      "q": "دي ___ حاجة في الدنيا.",
      "answer": "أحسن",
      "options": [
        "أحسن",
        "كويسة",
        "حلوة",
        "حسنة"
      ],
      "es": "Es la mejor cosa del mundo.",
      "note": "superlativo af3al + nombre.",
      "fr": "di a7san 7aaga fed-donya."
    }
  ],
  "cuantificadores": [
    {
      "q": "___ يوم بروح الشغل.",
      "answer": "كل",
      "options": [
        "كل",
        "بعض",
        "شوية",
        "نص"
      ],
      "es": "Cada día voy al trabajo.",
      "note": "kol + indefinido = cada.",
      "fr": "koll yoom barou7 esh-shoghl."
    },
    {
      "q": "___ الناس عرفو الخبر.",
      "answer": "كل",
      "options": [
        "كل",
        "بعض",
        "شوية",
        "كام"
      ],
      "es": "Toda la gente supo la noticia.",
      "note": "kol + definido = todo.",
      "fr": "koll en-naas 3erfu el-khabar."
    },
    {
      "q": "عايز ___ مية.",
      "answer": "شوية",
      "options": [
        "شوية",
        "كل",
        "كام",
        "نص"
      ],
      "es": "Quiero un poco de agua.",
      "note": "shwayya = un poco.",
      "fr": "3aayez shwayyet mayya."
    },
    {
      "q": "___ الناس بيحبو القهوة.",
      "answer": "بعض",
      "options": [
        "بعض",
        "كل",
        "ولا",
        "نص"
      ],
      "es": "Algunas personas prefieren el café.",
      "note": "ba3d = algunos.",
      "fr": "ba3d en-naas biye7ebbu el-2ahwa."
    }
  ],
  "concordancia": [
    {
      "q": "عندي عربية ___ .",
      "answer": "حمرا",
      "options": [
        "حمرا",
        "أحمر",
        "حمراء",
        "حمرة"
      ],
      "es": "Tengo un coche rojo.",
      "note": "coche fem → 7amra.",
      "fr": "3andi 3arabeyya 7amra."
    },
    {
      "q": "دي بنت ___ .",
      "answer": "حلوة",
      "options": [
        "حلوة",
        "حلو",
        "حلوين",
        "حلاوة"
      ],
      "es": "Es una chica guapa.",
      "note": "fem +a: 7elwa.",
      "fr": "di bent 7elwa."
    },
    {
      "q": "البيت ___ .",
      "answer": "كبير",
      "options": [
        "كبير",
        "كبيرة",
        "كبار",
        "كبيرين"
      ],
      "es": "La casa es grande.",
      "note": "beet masc → kebiir.",
      "fr": "el-beet kebiir."
    },
    {
      "q": "السما ___ النهارده.",
      "answer": "زرقا",
      "options": [
        "زرقا",
        "أزرق",
        "زرقاء",
        "زرق"
      ],
      "es": "El cielo está azul hoy.",
      "note": "fem del color: zar2a.",
      "fr": "es-sama zar2a en-naharda."
    }
  ],
  "genitivo": [
    {
      "q": "ده الكتاب ___ أحمد.",
      "answer": "بتاع",
      "options": [
        "بتاع",
        "بتاعت",
        "بتوع",
        "بتاعي"
      ],
      "es": "Este es el libro de Ahmad.",
      "note": "ketaab masc → betaa3.",
      "fr": "da el-ketaab betaa3 a7mad."
    },
    {
      "q": "دي العربية ___ بابا.",
      "answer": "بتاعت",
      "options": [
        "بتاعت",
        "بتاع",
        "بتوع",
        "بتاعها"
      ],
      "es": "Este es el coche de papá.",
      "note": "3arabeyya fem → betaa3et.",
      "fr": "di el-3arabeyya betaa3et baba."
    },
    {
      "q": "ده ___ .",
      "answer": "بتاعي",
      "options": [
        "بتاعي",
        "بتاعك",
        "بتاعه",
        "بتاعنا"
      ],
      "es": "Esto es mío.",
      "note": "betaa3 + i.",
      "fr": "da betaa3i."
    },
    {
      "q": "مفتاح ___ فين؟",
      "answer": "البيت",
      "options": [
        "البيت",
        "بيت",
        "بتاع",
        "بيتي"
      ],
      "es": "¿Dónde está la llave de la casa?",
      "note": "idafa: moftaa7 el-beet.",
      "fr": "moftaa7 el-beet feen?"
    }
  ],
  "contar": [
    {
      "q": "عندي ___ في الأسبوع أجازة.",
      "answer": "يومين",
      "options": [
        "يومين",
        "اتنين يوم",
        "يومات",
        "يوم"
      ],
      "es": "Tengo dos días de vacaciones a la semana.",
      "note": "dual: yomeen.",
      "fr": "3andi yomeen fel-osboo3 agaaza."
    },
    {
      "q": "استنى ___ دقايق.",
      "answer": "خمس",
      "options": [
        "خمس",
        "خمسة",
        "خمستاشر",
        "نص"
      ],
      "es": "Espera cinco minutos.",
      "note": "3–10 forma corta: khamas.",
      "fr": "istanna khamas da2aaye2."
    },
    {
      "q": "عنده ___ سنة.",
      "answer": "عشرين",
      "options": [
        "عشرين",
        "عشرين سنين",
        "عشرين سنوات",
        "عشرتاشر"
      ],
      "es": "Tiene veinte años.",
      "note": "11+ → singular: sana.",
      "fr": "3andu 3eshriin sana."
    },
    {
      "q": "جبت ___ من السوق.",
      "answer": "حاجتين",
      "options": [
        "حاجتين",
        "اتنين حاجة",
        "حاجات",
        "حاجة"
      ],
      "es": "Traje dos cosas del mercado.",
      "note": "dual: 7agteen.",
      "fr": "gebt 7agteen mes-soo2."
    }
  ],
  "ordinales": [
    {
      "q": "دي ___ مرة أزور مصر.",
      "answer": "أول",
      "options": [
        "أول",
        "واحد",
        "الأولى",
        "أولاني"
      ],
      "es": "Es la primera vez que visito Egipto.",
      "note": "awwel va delante: awwel marra.",
      "fr": "di awwel marra azuur masr."
    },
    {
      "q": "أنا ساكن في الدور ___ .",
      "answer": "التالت",
      "options": [
        "التالت",
        "تلاتة",
        "التلاتة",
        "تالت"
      ],
      "es": "Vivo en la tercera planta.",
      "note": "ed-door et-taalet.",
      "fr": "ana saaken fed-door et-taalet."
    },
    {
      "q": "المرة ___ كانت أحسن.",
      "answer": "التانية",
      "options": [
        "التانية",
        "اتنين",
        "التاني",
        "تاني"
      ],
      "es": "La segunda vez fue mejor.",
      "note": "fem: et-tanya.",
      "fr": "el-marra et-tanya kaanet a7san."
    },
    {
      "q": "ده ___ واحد.",
      "answer": "آخر",
      "options": [
        "آخر",
        "أول",
        "عاشر",
        "تاني"
      ],
      "es": "Este es el último.",
      "note": "aakher = último.",
      "fr": "da aakher waa7ed."
    }
  ],
  "participios": [
    {
      "q": "أنا ___ الطريق كويس.",
      "answer": "عارف",
      "options": [
        "عارف",
        "بعرف",
        "عرفت",
        "هعرف"
      ],
      "es": "Sé bien el camino.",
      "note": "estado → participio: 3aaref.",
      "fr": "ana 3aaref et-tarii2 kwayyes."
    },
    {
      "q": "أنا ___ دلوقتي.",
      "answer": "رايح",
      "options": [
        "رايح",
        "بروح",
        "رحت",
        "هروح"
      ],
      "es": "Voy (ahora mismo).",
      "note": "movimiento → participio: raaye7.",
      "fr": "ana raaye7 delwa2ti."
    },
    {
      "q": "إحنا ___ خلاص.",
      "answer": "واكلين",
      "options": [
        "واكلين",
        "بناكل",
        "اكلنا",
        "هناكل"
      ],
      "es": "Ya hemos comido.",
      "note": "resultado → participio: wakliin.",
      "fr": "e7na wakliin khalaas."
    },
    {
      "q": "إنتي ___ إيه؟",
      "answer": "عايزة",
      "options": [
        "عايزة",
        "عايز",
        "بتعوز",
        "هتعوز"
      ],
      "es": "¿Qué quieres (f)?",
      "note": "participio fem: 3ayza.",
      "fr": "enti 3ayza eh?"
    }
  ],
  "interrogativos": [
    {
      "q": "أنا اسمي أحمد، وإنت اسمك ___ ؟",
      "answer": "إيه",
      "options": ["إيه", "مين", "فين", "إمتى"],
      "es": "Me llamo Ahmad, ¿y tú cómo te llamas?",
      "note": "El nombre se pregunta con «eh» (qué), y va al final.",
      "fr": "ana esmi a7mad, we enta esmak eh?"
    },
    {
      "q": "لو سمحت، الحمام ___ في المطعم ده؟",
      "answer": "فين",
      "options": ["فين", "إيه", "مين", "إمتى"],
      "es": "Perdona, ¿dónde está el baño en este restaurante?",
      "note": "Lugar → «feen» (dónde).",
      "fr": "law sama7t, el-7ammaam feen fel-mat3am da?"
    },
    {
      "q": "الراجل اللي واقف هناك ده ___ ؟",
      "answer": "مين",
      "options": ["مين", "إيه", "فين", "إمتى"],
      "es": "¿Quién es ese hombre que está ahí de pie?",
      "note": "Persona → «meen» (quién).",
      "fr": "er-raagel elli waa2ef henaak da meen?"
    },
    {
      "q": "قولي بالظبط، هتخلص الشغل ___ ؟",
      "answer": "إمتى",
      "options": ["إمتى", "فين", "إيه", "مين"],
      "es": "Dime exactamente, ¿cuándo terminarás el trabajo?",
      "note": "Tiempo → «emta» (cuándo).",
      "fr": "2olli bezzabt, hatkhallas esh-shoghl emta?"
    }
  ],
  "demostrativos": [
    {
      "q": "الكتاب ___ حلو.",
      "answer": "ده",
      "options": [
        "ده",
        "دي",
        "دول",
        "اللي"
      ],
      "es": "Este libro es bonito.",
      "note": "masc detrás: el-ketaab da.",
      "fr": "el-ketaab da 7elw."
    },
    {
      "q": "البنت ___ صاحبتي.",
      "answer": "دي",
      "options": [
        "دي",
        "ده",
        "دول",
        "اللي"
      ],
      "es": "Esta chica es mi amiga.",
      "note": "fem: di.",
      "fr": "el-bent di sa7beti."
    },
    {
      "q": "العيال ___ بيلعبو.",
      "answer": "دول",
      "options": [
        "دول",
        "ده",
        "دي",
        "اللي"
      ],
      "es": "Estos niños juegan.",
      "note": "plural: dol.",
      "fr": "el-3eyaal dol biyel3abu."
    },
    {
      "q": "___ كتاب.",
      "answer": "ده",
      "options": [
        "ده",
        "الده",
        "ده اللي",
        "دهه"
      ],
      "es": "Esto es un libro.",
      "note": "da ketaab (predicado, sin artículo).",
      "fr": "da ketaab."
    }
  ],
  "preposiciones": [
    {
      "q": "أنا ___ إسبانيا.",
      "answer": "من",
      "options": [
        "من",
        "في",
        "على",
        "عن"
      ],
      "es": "Soy de España.",
      "note": "origen: men.",
      "fr": "ana men esbanya."
    },
    {
      "q": "الكتاب ___ الترابيزة.",
      "answer": "على",
      "options": [
        "على",
        "في",
        "من",
        "عن"
      ],
      "es": "El libro está sobre la mesa.",
      "note": "3ala = sobre.",
      "fr": "el-ketaab 3ala et-tarabeeza."
    },
    {
      "q": "أنا ساكن ___ القاهرة.",
      "answer": "في",
      "options": [
        "في",
        "على",
        "من",
        "عن"
      ],
      "es": "Vivo en El Cairo.",
      "note": "fi = en.",
      "fr": "ana saaken fel-2aahera."
    },
    {
      "q": "جيت ___ أشوفك.",
      "answer": "عشان",
      "options": [
        "عشان",
        "من",
        "في",
        "على"
      ],
      "es": "Vine para verte.",
      "note": "3ashaan = para / porque.",
      "fr": "geet 3ashaan ashoofak."
    }
  ]
};

/* =========================================================
 *  PLURALES — tabla de referencia (singular → plural)
 *  pat: regular | irregular | colectivo | dual
 * ========================================================= */
const PLURALS = [
  { sg: "راجل", sgf: "raagel", pl: "رجالة", plf: "riggaala", es: "hombre", pat: "irregular" },
  { sg: "ست", sgf: "sett", pl: "ستات", plf: "settaat", es: "señora", pat: "regular" },
  { sg: "مرا", sgf: "mara", pl: "ستات", plf: "settaat", es: "mujer", pat: "irregular" },
  { sg: "بنت", sgf: "bent", pl: "بنات", plf: "banaat", es: "chica", pat: "irregular" },
  { sg: "ولد", sgf: "walad", pl: "أولاد", plf: "awlaad", es: "niño", pat: "irregular" },
  { sg: "عيّل", sgf: "3ayyel", pl: "عيال", plf: "3eyaal", es: "crío", pat: "irregular" },
  { sg: "إنسان", sgf: "insaan", pl: "ناس", plf: "naas", es: "persona → gente", pat: "irregular" },
  { sg: "أخ", sgf: "akh", pl: "إخوات", plf: "ekhwaat", es: "hermano", pat: "irregular" },
  { sg: "أخت", sgf: "okht", pl: "أخوات", plf: "akhawaat", es: "hermana", pat: "irregular" },
  { sg: "أب", sgf: "ab", pl: "آباء", plf: "abaa2", es: "padre", pat: "irregular" },
  { sg: "أم", sgf: "omm", pl: "أمهات", plf: "ommahaat", es: "madre", pat: "irregular" },
  { sg: "ابن", sgf: "ebn", pl: "أبناء", plf: "abnaa2", es: "hijo", pat: "irregular" },
  { sg: "عم", sgf: "3amm", pl: "أعمام", plf: "a3maam", es: "tío", pat: "irregular" },
  { sg: "جد", sgf: "gedd", pl: "أجداد", plf: "agdaad", es: "abuelo", pat: "irregular" },
  { sg: "صاحب", sgf: "saa7eb", pl: "أصحاب", plf: "as7aab", es: "amigo", pat: "irregular" },
  { sg: "جار", sgf: "gaar", pl: "جيران", plf: "giraan", es: "vecino", pat: "irregular" },
  { sg: "ضيف", sgf: "deef", pl: "ضيوف", plf: "deyoof", es: "invitado", pat: "irregular" },
  { sg: "عدو", sgf: "3adww", pl: "أعداء", plf: "a3daa2", es: "enemigo", pat: "irregular" },
  { sg: "طفل", sgf: "tefl", pl: "أطفال", plf: "atfaal", es: "niño pequeño", pat: "irregular" },
  { sg: "مدرس", sgf: "mudarres", pl: "مدرسين", plf: "mudarrisiin", es: "profesor", pat: "regular" },
  { sg: "مهندس", sgf: "mohandes", pl: "مهندسين", plf: "mohandisiin", es: "ingeniero", pat: "regular" },
  { sg: "موظف", sgf: "mowazzaf", pl: "موظفين", plf: "mowazzafiin", es: "empleado", pat: "regular" },
  { sg: "لاعب", sgf: "laa3eb", pl: "لاعبين", plf: "laa3ebiin", es: "jugador", pat: "regular" },
  { sg: "فلاح", sgf: "fallaa7", pl: "فلاحين", plf: "falla7iin", es: "campesino", pat: "regular" },
  { sg: "مصري", sgf: "masri", pl: "مصريين", plf: "masriyyiin", es: "egipcio", pat: "regular" },
  { sg: "دكتور", sgf: "doktoor", pl: "دكاترة", plf: "dakatra", es: "médico", pat: "irregular" },
  { sg: "أستاذ", sgf: "ostaaz", pl: "أساتذة", plf: "asatza", es: "profesor", pat: "irregular" },
  { sg: "طالب", sgf: "taaleb", pl: "طلبة", plf: "talaba", es: "estudiante", pat: "irregular" },
  { sg: "عامل", sgf: "3aamel", pl: "عمال", plf: "3ommaal", es: "obrero", pat: "irregular" },
  { sg: "تاجر", sgf: "taager", pl: "تجار", plf: "toggaar", es: "comerciante", pat: "irregular" },
  { sg: "كاتب", sgf: "kaateb", pl: "كتاب", plf: "kottaab", es: "escritor", pat: "irregular" },
  { sg: "ساكن", sgf: "saaken", pl: "سكان", plf: "sokkaan", es: "habitante", pat: "irregular" },
  { sg: "يوم", sgf: "yoom", pl: "أيام", plf: "ayyaam", es: "día", pat: "irregular" },
  { sg: "أسبوع", sgf: "osboo3", pl: "أسابيع", plf: "asabii3", es: "semana", pat: "irregular" },
  { sg: "شهر", sgf: "shahr", pl: "شهور", plf: "shohoor", es: "mes", pat: "irregular" },
  { sg: "سنة", sgf: "sana", pl: "سنين", plf: "siniin", es: "año", pat: "irregular" },
  { sg: "ساعة", sgf: "saa3a", pl: "ساعات", plf: "saa3aat", es: "hora", pat: "regular" },
  { sg: "دقيقة", sgf: "de2ii2a", pl: "دقايق", plf: "da2aaye2", es: "minuto", pat: "irregular" },
  { sg: "كتاب", sgf: "ketaab", pl: "كتب", plf: "kotob", es: "libro", pat: "irregular" },
  { sg: "قلم", sgf: "2alam", pl: "أقلام", plf: "a2laam", es: "bolígrafo", pat: "irregular" },
  { sg: "باب", sgf: "baab", pl: "أبواب", plf: "abwaab", es: "puerta", pat: "irregular" },
  { sg: "شباك", sgf: "shebbaak", pl: "شبابيك", plf: "shababiik", es: "ventana", pat: "irregular" },
  { sg: "مفتاح", sgf: "moftaa7", pl: "مفاتيح", plf: "mafatii7", es: "llave", pat: "irregular" },
  { sg: "كرسي", sgf: "korsi", pl: "كراسي", plf: "karaasi", es: "silla", pat: "irregular" },
  { sg: "دولاب", sgf: "dolaab", pl: "دواليب", plf: "dawaliib", es: "armario", pat: "irregular" },
  { sg: "سرير", sgf: "seriir", pl: "سراير", plf: "saraayer", es: "cama", pat: "irregular" },
  { sg: "طبق", sgf: "taba2", pl: "أطباق", plf: "atbaa2", es: "plato", pat: "irregular" },
  { sg: "صحن", sgf: "sa7n", pl: "صحون", plf: "so7oon", es: "plato hondo", pat: "irregular" },
  { sg: "فنجان", sgf: "fongaan", pl: "فناجين", plf: "fanagiin", es: "taza", pat: "irregular" },
  { sg: "كوباية", sgf: "kobaaya", pl: "كبايات", plf: "kobayaat", es: "vaso", pat: "regular" },
  { sg: "سكينة", sgf: "sekkiina", pl: "سكاكين", plf: "sakakiin", es: "cuchillo", pat: "irregular" },
  { sg: "معلقة", sgf: "ma3la2a", pl: "معالق", plf: "ma3aale2", es: "cuchara", pat: "irregular" },
  { sg: "شنطة", sgf: "shanta", pl: "شنط", plf: "shonat", es: "bolsa", pat: "irregular" },
  { sg: "قميص", sgf: "2amiis", pl: "قمصان", plf: "2omsaan", es: "camisa", pat: "irregular" },
  { sg: "بنطلون", sgf: "bantaloon", pl: "بناطيل", plf: "banatiil", es: "pantalón", pat: "irregular" },
  { sg: "جزمة", sgf: "gazma", pl: "جزم", plf: "gezam", es: "zapatos", pat: "irregular" },
  { sg: "فستان", sgf: "fostaan", pl: "فساتين", plf: "fasatiin", es: "vestido", pat: "irregular" },
  { sg: "لون", sgf: "loon", pl: "ألوان", plf: "alwaan", es: "color", pat: "irregular" },
  { sg: "فيلم", sgf: "film", pl: "أفلام", plf: "aflaam", es: "película", pat: "irregular" },
  { sg: "صورة", sgf: "soora", pl: "صور", plf: "sowar", es: "foto", pat: "irregular" },
  { sg: "موبايل", sgf: "mobaayel", pl: "موبايلات", plf: "mobaylaat", es: "móvil", pat: "regular" },
  { sg: "تليفون", sgf: "telefoon", pl: "تليفونات", plf: "telefonaat", es: "teléfono", pat: "regular" },
  { sg: "جنيه", sgf: "geneeh", pl: "جنيهات", plf: "geneehaat", es: "libra (dinero)", pat: "regular" },
  { sg: "بيت", sgf: "beet", pl: "بيوت", plf: "beyuut", es: "casa", pat: "irregular" },
  { sg: "شقة", sgf: "sha22a", pl: "شقق", plf: "sho2a2", es: "piso", pat: "irregular" },
  { sg: "أوضة", sgf: "ooda", pl: "أوض", plf: "owad", es: "habitación", pat: "irregular" },
  { sg: "مطبخ", sgf: "matbakh", pl: "مطابخ", plf: "mataabekh", es: "cocina", pat: "irregular" },
  { sg: "مكتب", sgf: "maktab", pl: "مكاتب", plf: "makaateb", es: "oficina", pat: "irregular" },
  { sg: "مكان", sgf: "makaan", pl: "أماكن", plf: "amaaken", es: "lugar", pat: "irregular" },
  { sg: "مدرسة", sgf: "madrasa", pl: "مدارس", plf: "madaares", es: "escuela", pat: "irregular" },
  { sg: "مطعم", sgf: "mat3am", pl: "مطاعم", plf: "mataa3em", es: "restaurante", pat: "irregular" },
  { sg: "فندق", sgf: "fondo2", pl: "فنادق", plf: "fanaade2", es: "hotel", pat: "irregular" },
  { sg: "سلم", sgf: "sellem", pl: "سلالم", plf: "salaalem", es: "escalera", pat: "irregular" },
  { sg: "حيطة", sgf: "7eeta", pl: "حيطان", plf: "7etaan", es: "pared", pat: "irregular" },
  { sg: "سطح", sgf: "sat7", pl: "سطوح", plf: "sotoo7", es: "azotea", pat: "irregular" },
  { sg: "شارع", sgf: "shaare3", pl: "شوارع", plf: "shawaare3", es: "calle", pat: "irregular" },
  { sg: "ميدان", sgf: "midaan", pl: "ميادين", plf: "mayadiin", es: "plaza", pat: "irregular" },
  { sg: "كوبري", sgf: "kobri", pl: "كباري", plf: "kabaari", es: "puente", pat: "irregular" },
  { sg: "بنك", sgf: "bank", pl: "بنوك", plf: "bonook", es: "banco", pat: "irregular" },
  { sg: "جامع", sgf: "gaame3", pl: "جوامع", plf: "gawaame3", es: "mezquita", pat: "irregular" },
  { sg: "كنيسة", sgf: "keniisa", pl: "كنايس", plf: "kanaayes", es: "iglesia", pat: "irregular" },
  { sg: "مدينة", sgf: "madiina", pl: "مدن", plf: "modon", es: "ciudad", pat: "irregular" },
  { sg: "بلد", sgf: "balad", pl: "بلاد", plf: "belaad", es: "país / pueblo", pat: "irregular" },
  { sg: "دولة", sgf: "dawla", pl: "دول", plf: "dowal", es: "estado / país", pat: "irregular" },
  { sg: "قرية", sgf: "2arya", pl: "قرى", plf: "2ora", es: "aldea", pat: "irregular" },
  { sg: "طريق", sgf: "tarii2", pl: "طرق", plf: "toro2", es: "camino", pat: "irregular" },
  { sg: "سوق", sgf: "soo2", pl: "أسواق", plf: "aswaa2", es: "mercado", pat: "irregular" },
  { sg: "شركة", sgf: "sherka", pl: "شركات", plf: "sherkaat", es: "empresa", pat: "regular" },
  { sg: "وظيفة", sgf: "waziifa", pl: "وظايف", plf: "wazaayef", es: "empleo", pat: "irregular" },
  { sg: "مشروع", sgf: "mashruu3", pl: "مشاريع", plf: "masharii3", es: "proyecto", pat: "irregular" },
  { sg: "عربية", sgf: "3arabeyya", pl: "عربيات", plf: "3arabeyyaat", es: "coche", pat: "regular" },
  { sg: "أتوبيس", sgf: "otobiis", pl: "أتوبيسات", plf: "otobisaat", es: "autobús", pat: "regular" },
  { sg: "طيارة", sgf: "tayyaara", pl: "طيارات", plf: "tayyaraat", es: "avión", pat: "regular" },
  { sg: "قطر", sgf: "2atr", pl: "قطارات", plf: "2ataraat", es: "tren", pat: "regular" },
  { sg: "مركب", sgf: "markeb", pl: "مراكب", plf: "maraakeb", es: "barco", pat: "irregular" },
  { sg: "بحر", sgf: "ba7r", pl: "بحار", plf: "be7aar", es: "mar", pat: "irregular" },
  { sg: "نهر", sgf: "nahr", pl: "أنهار", plf: "anhaar", es: "río", pat: "irregular" },
  { sg: "جبل", sgf: "gabal", pl: "جبال", plf: "gibaal", es: "montaña", pat: "irregular" },
  { sg: "شجرة", sgf: "shagara", pl: "أشجار", plf: "ashgaar", es: "árbol", pat: "irregular" },
  { sg: "وردة", sgf: "warda", pl: "ورود", plf: "woruud", es: "rosa", pat: "irregular" },
  { sg: "نجمة", sgf: "negma", pl: "نجوم", plf: "negoom", es: "estrella", pat: "irregular" },
  { sg: "كلب", sgf: "kalb", pl: "كلاب", plf: "kilaab", es: "perro", pat: "irregular" },
  { sg: "قطة", sgf: "2otta", pl: "قطط", plf: "2otat", es: "gato", pat: "irregular" },
  { sg: "جمل", sgf: "gamal", pl: "جمال", plf: "gimaal", es: "camello", pat: "irregular" },
  { sg: "حمار", sgf: "7omaar", pl: "حمير", plf: "7omiir", es: "burro", pat: "irregular" },
  { sg: "عصفور", sgf: "3osfoor", pl: "عصافير", plf: "3asafiir", es: "pájaro", pat: "irregular" },
  { sg: "تمساح", sgf: "temsaa7", pl: "تماسيح", plf: "tamasii7", es: "cocodrilo", pat: "irregular" },
  { sg: "فرخة", sgf: "farkha", pl: "فراخ", plf: "feraakh", es: "gallina / pollo", pat: "irregular" },
  { sg: "سمكة", sgf: "samaka", pl: "سمك", plf: "samak", es: "pez → pescado", pat: "colectivo" },
  { sg: "بقرة", sgf: "ba2ara", pl: "بقر", plf: "ba2ar", es: "vaca", pat: "colectivo" },
  { sg: "بيضة", sgf: "beeda", pl: "بيض", plf: "beed", es: "huevo", pat: "colectivo" },
  { sg: "تفاحة", sgf: "toffaa7a", pl: "تفاح", plf: "toffaa7", es: "manzana", pat: "colectivo" },
  { sg: "موزة", sgf: "mooza", pl: "موز", plf: "mooz", es: "plátano", pat: "colectivo" },
  { sg: "طوبة", sgf: "tooba", pl: "طوب", plf: "toob", es: "ladrillo", pat: "colectivo" },
  { sg: "عين", sgf: "3een", pl: "عيون", plf: "3eyuun", es: "ojo", pat: "irregular" },
  { sg: "قلب", sgf: "2alb", pl: "قلوب", plf: "2eluub", es: "corazón", pat: "irregular" },
  { sg: "راس", sgf: "raas", pl: "روس", plf: "roos", es: "cabeza", pat: "irregular" },
  { sg: "سن", sgf: "senn", pl: "سنان", plf: "senaan", es: "diente", pat: "irregular" },
  { sg: "كتف", sgf: "ketf", pl: "كتاف", plf: "ktaaf", es: "hombro", pat: "irregular" },
  { sg: "صباع", sgf: "sobaa3", pl: "صوابع", plf: "sawaabe3", es: "dedo", pat: "irregular" },
  { sg: "إيد", sgf: "iid", pl: "إيدين", plf: "ideen", es: "mano", pat: "dual" },
  { sg: "رجل", sgf: "regl", pl: "رجلين", plf: "regleen", es: "pierna / pie", pat: "dual" },
  { sg: "كلمة", sgf: "kelma", pl: "كلمات", plf: "kelmaat", es: "palabra", pat: "regular" },
  { sg: "حرف", sgf: "7arf", pl: "حروف", plf: "7oroof", es: "letra", pat: "irregular" },
  { sg: "رقم", sgf: "ra2am", pl: "أرقام", plf: "ar2aam", es: "número", pat: "irregular" },
  { sg: "سؤال", sgf: "so2aal", pl: "أسئلة", plf: "as2ela", es: "pregunta", pat: "irregular" },
  { sg: "جواب", sgf: "gawaab", pl: "جوابات", plf: "gawabaat", es: "carta", pat: "regular" },
  { sg: "خبر", sgf: "khabar", pl: "أخبار", plf: "akhbaar", es: "noticia", pat: "irregular" },
  { sg: "فكرة", sgf: "fekra", pl: "أفكار", plf: "afkaar", es: "idea", pat: "irregular" },
  { sg: "حلم", sgf: "7elm", pl: "أحلام", plf: "a7laam", es: "sueño", pat: "irregular" },
  { sg: "مشكلة", sgf: "mushkila", pl: "مشاكل", plf: "mashaakel", es: "problema", pat: "irregular" },
  { sg: "درس", sgf: "dars", pl: "دروس", plf: "doruus", es: "lección", pat: "irregular" },
  { sg: "حاجة", sgf: "7aaga", pl: "حاجات", plf: "7agaat", es: "cosa", pat: "regular" },
  { sg: "حتة", sgf: "7etta", pl: "حتت", plf: "7etat", es: "trozo", pat: "irregular" },
  { sg: "نوع", sgf: "noo3", pl: "أنواع", plf: "anwaa3", es: "tipo", pat: "irregular" }
];

// La lección de léxico "plurales" usa la misma lista (se mantiene sincronizada).
(function () {
  if (typeof LESSONS === "undefined" || typeof PLURALS === "undefined") return;
  const L = LESSONS.find(l => l.id === "plurales");
  if (L) L.items = PLURALS.map(p => ({ ar: p.sg + " ← " + p.pl, fr: p.sgf + " → " + p.plf, es: p.es }));
})();

/* =========================================================
 *  JUEGO DE RAÍCES — colocar letras (delante / en medio / detrás) para formar palabras
 *  slot: front (antes de la 1ª) | mid1 (entre 1ª y 2ª) | mid2 (entre 2ª y 3ª) | back (después)
 *  Cada forma indica qué letra va en qué hueco(s). Se admiten COMBOS de varias letras.
 * ========================================================= */
const ROOTS_TRAY = ["ا", "م", "و", "ي", "ة", "أ", "ت", "ن"];
const ROOTS_GAME = [
  {
    root: ["ك", "ت", "ب"], rootf: "k · t · b", meaning: "escribir", icon: "✍️",
    forms: [
      { slots: { mid1: "ا" }, ar: "كاتب", fr: "kaateb", es: "escritor", pat: "faa3el · el que hace" },
      { slots: { mid2: "ا" }, ar: "كتاب", fr: "ketaab", es: "libro", pat: "fi3aal" },
      { slots: { front: "م" }, ar: "مكتب", fr: "maktab", es: "oficina", pat: "maf3al · lugar" },
      { slots: { front: "م", back: "ة" }, ar: "مكتبة", fr: "maktaba", es: "biblioteca", pat: "maf3ala · lugar" },
      { slots: { front: "م", mid2: "و" }, ar: "مكتوب", fr: "maktoob", es: "escrito / carta", pat: "maf3uul · participio pasivo" },
      { slots: { mid1: "ا", back: "ة" }, ar: "كاتبة", fr: "kaatba", es: "escritora", pat: "faa3ela · femenino" }
    ]
  },
  {
    root: ["د", "ر", "س"], rootf: "d · r · s", meaning: "estudiar", icon: "📚",
    forms: [
      { slots: { mid1: "ا" }, ar: "دارس", fr: "daares", es: "el que estudia", pat: "faa3el · el que hace" },
      { slots: { front: "م" }, ar: "مدرس", fr: "mudarres", es: "profesor", pat: "persona (م‑)" },
      { slots: { front: "م", back: "ة" }, ar: "مدرسة", fr: "madrasa", es: "escuela", pat: "maf3ala · lugar" },
      { slots: { front: "م", mid2: "و" }, ar: "مدروس", fr: "madroos", es: "estudiado", pat: "maf3uul · participio pasivo" }
    ]
  },
  {
    root: ["ل", "ع", "ب"], rootf: "l · 3 · b", meaning: "jugar", icon: "⚽",
    forms: [
      { slots: { mid1: "ا" }, ar: "لاعب", fr: "laa3eb", es: "jugador", pat: "faa3el · el que hace" },
      { slots: { front: "م" }, ar: "ملعب", fr: "mal3ab", es: "campo / estadio", pat: "maf3al · lugar" },
      { slots: { front: "م", mid2: "و" }, ar: "ملعوب", fr: "mal3oob", es: "jugado", pat: "maf3uul · participio pasivo" },
      { slots: { back: "ة" }, ar: "لعبة", fr: "lo3ba", es: "juego / juguete", pat: "fo3la" }
    ]
  },
  {
    root: ["ع", "م", "ل"], rootf: "3 · m · l", meaning: "trabajar / hacer", icon: "🛠️",
    forms: [
      { slots: { mid1: "ا" }, ar: "عامل", fr: "3aamel", es: "obrero", pat: "faa3el · el que hace" },
      { slots: { front: "م" }, ar: "معمل", fr: "ma3mal", es: "taller / laboratorio", pat: "maf3al · lugar" },
      { slots: { front: "م", mid2: "و" }, ar: "معمول", fr: "ma3mool", es: "hecho", pat: "maf3uul · participio pasivo" },
      { slots: { mid2: "ا" }, ar: "عمال", fr: "3ommaal", es: "obreros (plural)", pat: "fo33aal" }
    ]
  },
  {
    root: ["س", "ك", "ن"], rootf: "s · k · n", meaning: "vivir / habitar", icon: "🏠",
    forms: [
      { slots: { mid1: "ا" }, ar: "ساكن", fr: "saaken", es: "habitante", pat: "faa3el · el que hace" },
      { slots: { front: "م" }, ar: "مسكن", fr: "maskan", es: "vivienda", pat: "maf3al · lugar" },
      { slots: { mid2: "ا" }, ar: "سكان", fr: "sokkaan", es: "habitantes (plural)", pat: "fo33aal" }
    ]
  },
  {
    root: ["ك", "ب", "ر"], rootf: "k · b · r", meaning: "grande / crecer", icon: "📈",
    forms: [
      { slots: { mid2: "ي" }, ar: "كبير", fr: "kebiir", es: "grande", pat: "fa3iil · adjetivo" },
      { slots: { mid2: "ا" }, ar: "كبار", fr: "kobaar", es: "grandes (plural)", pat: "fi3aal" },
      { slots: { front: "أ" }, ar: "أكبر", fr: "akbar", es: "más grande", pat: "af3al · comparativo" }
    ]
  },
  {
    root: ["س", "ف", "ر"], rootf: "s · f · r", meaning: "viajar", icon: "✈️",
    forms: [
      { slots: { front: "م", mid1: "ا" }, ar: "مسافر", fr: "msaafer", es: "viajero", pat: "mufaa3el" },
      { slots: { mid2: "ا", back: "ة" }, ar: "سفارة", fr: "sefaara", es: "embajada", pat: "fi3aala · lugar" }
    ]
  },
  {
    root: ["ع", "ل", "م"], rootf: "3 · l · m", meaning: "saber / ciencia", icon: "🔬",
    forms: [
      { slots: { mid1: "ا" }, ar: "عالم", fr: "3aalem", es: "sabio / científico", pat: "faa3el · el que hace" },
      { slots: { front: "م" }, ar: "معلم", fr: "mo3allem", es: "maestro", pat: "persona (م‑)" },
      { slots: { front: "م", mid2: "و" }, ar: "معلوم", fr: "ma3loom", es: "sabido / conocido", pat: "maf3uul · participio pasivo" },
      { slots: { mid2: "ا", back: "ة" }, ar: "علامة", fr: "3alaama", es: "señal / marca", pat: "fa3aala" }
    ]
  },
  {
    root: ["ف", "ت", "ح"], rootf: "f · t · 7", meaning: "abrir", icon: "🔓",
    forms: [
      { slots: { mid1: "ا" }, ar: "فاتح", fr: "faate7", es: "el que abre", pat: "faa3el · el que hace" },
      { slots: { front: "م", mid2: "ا" }, ar: "مفتاح", fr: "moftaa7", es: "llave", pat: "mif3aal · instrumento" },
      { slots: { front: "م", mid2: "و" }, ar: "مفتوح", fr: "maftoo7", es: "abierto", pat: "maf3uul · participio pasivo" }
    ]
  },
  {
    root: ["ع", "ر", "ف"], rootf: "3 · r · f", meaning: "conocer / saber", icon: "💡",
    forms: [
      { slots: { mid1: "ا" }, ar: "عارف", fr: "3aaref", es: "que sabe", pat: "faa3el · el que hace" },
      { slots: { front: "م", mid2: "و" }, ar: "معروف", fr: "ma3roof", es: "conocido", pat: "maf3uul · participio pasivo" },
      { slots: { front: "م", back: "ة" }, ar: "معرفة", fr: "ma3refa", es: "conocimiento", pat: "maf3ala" }
    ]
  },
  {
    root: ["ن", "ز", "ل"], rootf: "n · z · l", meaning: "bajar", icon: "⬇️",
    forms: [
      { slots: { mid1: "ا" }, ar: "نازل", fr: "naazel", es: "que baja / bajando", pat: "faa3el · el que hace" },
      { slots: { front: "م" }, ar: "منزل", fr: "manzel", es: "casa / hogar", pat: "maf3al · lugar" }
    ]
  },
  {
    root: ["د", "خ", "ل"], rootf: "d · kh · l", meaning: "entrar", icon: "🚪",
    forms: [
      { slots: { mid1: "ا" }, ar: "داخل", fr: "daakhel", es: "el que entra / dentro", pat: "faa3el · el que hace" },
      { slots: { front: "م" }, ar: "مدخل", fr: "madkhal", es: "entrada", pat: "maf3al · lugar" }
    ]
  },
  {
    root: ["خ", "ر", "ج"], rootf: "kh · r · g", meaning: "salir", icon: "🚶",
    forms: [
      { slots: { mid1: "ا" }, ar: "خارج", fr: "khaarej", es: "el que sale / fuera", pat: "faa3el · el que hace" },
      { slots: { front: "م" }, ar: "مخرج", fr: "makhrag", es: "salida", pat: "maf3al · lugar" }
    ]
  },
  {
    root: ["ط", "ب", "خ"], rootf: "t · b · kh", meaning: "cocinar", icon: "🍳",
    forms: [
      { slots: { front: "م" }, ar: "مطبخ", fr: "matbakh", es: "cocina", pat: "maf3al · lugar" },
      { slots: { mid2: "ا" }, ar: "طباخ", fr: "tabbaakh", es: "cocinero", pat: "fa33aal · oficio" },
      { slots: { front: "م", mid2: "و" }, ar: "مطبوخ", fr: "matbookh", es: "cocinado", pat: "maf3uul · participio pasivo" }
    ]
  },
  {
    root: ["ف", "ه", "م"], rootf: "f · h · m", meaning: "entender", icon: "🧠",
    forms: [
      { slots: { mid1: "ا" }, ar: "فاهم", fr: "faahem", es: "que entiende", pat: "faa3el · el que hace" },
      { slots: { front: "م", mid2: "و" }, ar: "مفهوم", fr: "mafhoom", es: "entendido / concepto", pat: "maf3uul · participio pasivo" }
    ]
  },
  {
    root: ["ش", "ر", "ب"], rootf: "sh · r · b", meaning: "beber", icon: "🥤",
    forms: [
      { slots: { mid1: "ا" }, ar: "شارب", fr: "shaareb", es: "el que bebe", pat: "faa3el · el que hace" },
      { slots: { front: "م", mid2: "و" }, ar: "مشروب", fr: "mashroob", es: "bebida", pat: "maf3uul · participio pasivo" }
    ]
  },
  {
    root: ["ح", "س", "ب"], rootf: "7 · s · b", meaning: "calcular / contar", icon: "🧮",
    forms: [
      { slots: { mid1: "ا" }, ar: "حاسب", fr: "7aaseb", es: "el que calcula / ordenador", pat: "faa3el · el que hace" },
      { slots: { mid2: "ا" }, ar: "حساب", fr: "7esaab", es: "cuenta", pat: "fi3aal" },
      { slots: { front: "م", mid2: "و" }, ar: "محسوب", fr: "ma7soob", es: "calculado", pat: "maf3uul · participio pasivo" }
    ]
  },
  {
    root: ["ل", "ب", "س"], rootf: "l · b · s", meaning: "vestir", icon: "👕",
    forms: [
      { slots: { mid1: "ا" }, ar: "لابس", fr: "laabes", es: "vestido / que lleva puesto", pat: "faa3el · el que hace" },
      { slots: { front: "م", mid2: "و" }, ar: "ملبوس", fr: "malboos", es: "llevado puesto", pat: "maf3uul · participio pasivo" }
    ]
  },
  {
    root: ["غ", "س", "ل"], rootf: "gh · s · l", meaning: "lavar", icon: "🧼",
    forms: [
      { slots: { mid1: "ا" }, ar: "غاسل", fr: "ghaasel", es: "el que lava", pat: "faa3el · el que hace" },
      { slots: { front: "م", mid2: "و" }, ar: "مغسول", fr: "maghsool", es: "lavado", pat: "maf3uul · participio pasivo" },
      { slots: { front: "م", back: "ة" }, ar: "مغسلة", fr: "maghsala", es: "lavabo / lavandería", pat: "maf3ala · lugar" }
    ]
  },
  {
    root: ["ن", "ظ", "ر"], rootf: "n · z · r", meaning: "mirar / ver", icon: "👀",
    forms: [
      { slots: { front: "م" }, ar: "منظر", fr: "manzar", es: "vista / paisaje", pat: "maf3al · lugar / cosa" },
      { slots: { front: "م", mid2: "و" }, ar: "منظور", fr: "manzoor", es: "visto / perspectiva", pat: "maf3uul · participio pasivo" },
      { slots: { mid2: "ا", back: "ة" }, ar: "نظارة", fr: "nazzaara", es: "gafas", pat: "fa33aala · instrumento" }
    ]
  },
  {
    root: ["س", "م", "ع"], rootf: "s · m · 3", meaning: "oír / escuchar", icon: "👂",
    forms: [
      { slots: { mid1: "ا" }, ar: "سامع", fr: "saame3", es: "el que oye", pat: "faa3el · el que hace" },
      { slots: { front: "م", mid2: "و" }, ar: "مسموع", fr: "masmoo3", es: "oído / audible", pat: "maf3uul · participio pasivo" },
      { slots: { mid2: "ا", back: "ة" }, ar: "سماعة", fr: "sammaa3a", es: "auricular / altavoz", pat: "fa33aala · instrumento" }
    ]
  },
  {
    root: ["ح", "ف", "ظ"], rootf: "7 · f · z", meaning: "guardar / memorizar", icon: "👛",
    forms: [
      { slots: { mid1: "ا" }, ar: "حافظ", fr: "7aafez", es: "el que guarda / memoriza", pat: "faa3el · el que hace" },
      { slots: { front: "م", mid2: "و" }, ar: "محفوظ", fr: "ma7fooz", es: "guardado", pat: "maf3uul · participio pasivo" },
      { slots: { front: "م", back: "ة" }, ar: "محفظة", fr: "ma7fazza", es: "cartera / monedero", pat: "maf3ala · instrumento" }
    ]
  },
  {
    root: ["ك", "س", "ر"], rootf: "k · s · r", meaning: "romper", icon: "🔨",
    forms: [
      { slots: { mid1: "ا" }, ar: "كاسر", fr: "kaaser", es: "el que rompe", pat: "faa3el · el que hace" },
      { slots: { front: "م", mid2: "و" }, ar: "مكسور", fr: "maksoor", es: "roto", pat: "maf3uul · participio pasivo" }
    ]
  },
  {
    root: ["ر", "ك", "ب"], rootf: "r · k · b", meaning: "montar / subir", icon: "🚢",
    forms: [
      { slots: { mid1: "ا" }, ar: "راكب", fr: "raakeb", es: "pasajero / que monta", pat: "faa3el · el que hace" },
      { slots: { front: "م" }, ar: "مركب", fr: "markab", es: "barco", pat: "maf3al · medio / lugar" }
    ]
  },
  {
    root: ["ش", "غ", "ل"], rootf: "sh · gh · l", meaning: "trabajar / ocupar", icon: "💼",
    forms: [
      { slots: { front: "م", mid2: "و" }, ar: "مشغول", fr: "mashghool", es: "ocupado", pat: "maf3uul · participio pasivo" },
      { slots: { mid2: "ا" }, ar: "شغال", fr: "shaghghaal", es: "que funciona / trabajando", pat: "fa33aal" }
    ]
  },
  {
    root: ["ق", "ت", "ل"], rootf: "2 · t · l", meaning: "matar", icon: "⚔️",
    forms: [
      { slots: { mid1: "ا" }, ar: "قاتل", fr: "2aatel", es: "asesino", pat: "faa3el · el que hace" },
      { slots: { front: "م", mid2: "و" }, ar: "مقتول", fr: "ma2tool", es: "matado / muerto", pat: "maf3uul · participio pasivo" }
    ]
  },
  {
    root: ["د", "ف", "ع"], rootf: "d · f · 3", meaning: "pagar / empujar", icon: "💳",
    forms: [
      { slots: { mid1: "ا" }, ar: "دافع", fr: "daafe3", es: "el que paga", pat: "faa3el · el que hace" },
      { slots: { front: "م", mid2: "و" }, ar: "مدفوع", fr: "madfoo3", es: "pagado", pat: "maf3uul · participio pasivo" }
    ]
  },
  {
    root: ["ح", "م", "ل"], rootf: "7 · m · l", meaning: "llevar / cargar", icon: "📦",
    forms: [
      { slots: { mid1: "ا" }, ar: "حامل", fr: "7aamel", es: "que lleva / embarazada", pat: "faa3el · el que hace" },
      { slots: { front: "م", mid2: "و" }, ar: "محمول", fr: "ma7mool", es: "llevado / móvil", pat: "maf3uul · participio pasivo" }
    ]
  },
  {
    root: ["ق", "ر", "ب"], rootf: "2 · r · b", meaning: "acercar / cerca", icon: "📍",
    forms: [
      { slots: { mid2: "ي" }, ar: "قريب", fr: "2ariib", es: "cercano / pariente", pat: "fa3iil · adjetivo" },
      { slots: { front: "أ" }, ar: "أقرب", fr: "a2rab", es: "más cercano", pat: "af3al · comparativo" }
    ]
  },
  {
    root: ["ب", "ع", "د"], rootf: "b · 3 · d", meaning: "alejar / lejos", icon: "🏝️",
    forms: [
      { slots: { mid2: "ي" }, ar: "بعيد", fr: "be3iid", es: "lejano", pat: "fa3iil · adjetivo" },
      { slots: { front: "أ" }, ar: "أبعد", fr: "ab3ad", es: "más lejos", pat: "af3al · comparativo" }
    ]
  },
  {
    root: ["ق", "ف", "ل"], rootf: "2 · f · l", meaning: "cerrar", icon: "🔒",
    forms: [
      { slots: { mid1: "ا" }, ar: "قافل", fr: "2aafel", es: "el que cierra", pat: "faa3el · el que hace" },
      { slots: { front: "م", mid2: "و" }, ar: "مقفول", fr: "ma2fool", es: "cerrado", pat: "maf3uul · participio pasivo" }
    ]
  },
  {
    root: ["ر", "س", "م"], rootf: "r · s · m", meaning: "dibujar", icon: "🎨",
    forms: [
      { slots: { mid1: "ا" }, ar: "راسم", fr: "raasem", es: "el que dibuja", pat: "faa3el · el que hace" },
      { slots: { mid2: "ا" }, ar: "رسام", fr: "rassaam", es: "dibujante", pat: "fa33aal · oficio" },
      { slots: { front: "م", mid2: "و" }, ar: "مرسوم", fr: "marsoom", es: "dibujado / decreto", pat: "maf3uul · participio pasivo" }
    ]
  },
  {
    root: ["ح", "ر", "ق"], rootf: "7 · r · 2", meaning: "quemar", icon: "🔥",
    forms: [
      { slots: { mid1: "ا" }, ar: "حارق", fr: "7aare2", es: "el que quema", pat: "faa3el · el que hace" },
      { slots: { front: "م", mid2: "و" }, ar: "محروق", fr: "ma7roo2", es: "quemado", pat: "maf3uul · participio pasivo" },
      { slots: { mid2: "ي", back: "ة" }, ar: "حريقة", fr: "7arii2a", es: "incendio", pat: "fa3iila" }
    ]
  },
  {
    root: ["م", "ل", "ك"], rootf: "m · l · k", meaning: "poseer / reinar", icon: "👑",
    forms: [
      { slots: { mid1: "ا" }, ar: "مالك", fr: "maalek", es: "dueño / propietario", pat: "faa3el · el que hace" },
      { slots: { front: "م", mid2: "و" }, ar: "مملوك", fr: "mamlook", es: "poseído / mameluco", pat: "maf3uul · participio pasivo" }
    ]
  },
  {
    root: ["ح", "ك", "م"], rootf: "7 · k · m", meaning: "gobernar / juzgar", icon: "🏛️",
    forms: [
      { slots: { mid1: "ا" }, ar: "حاكم", fr: "7aakem", es: "gobernante", pat: "faa3el · el que hace" },
      { slots: { mid2: "ي" }, ar: "حكيم", fr: "7akiim", es: "sabio", pat: "fa3iil · adjetivo" },
      { slots: { front: "م", mid2: "و" }, ar: "محكوم", fr: "ma7koom", es: "condenado / gobernado", pat: "maf3uul · participio pasivo" },
      { slots: { front: "م", back: "ة" }, ar: "محكمة", fr: "ma7kama", es: "tribunal", pat: "maf3ala · lugar" }
    ]
  },
  {
    root: ["ق", "س", "م"], rootf: "2 · s · m", meaning: "dividir / repartir", icon: "➗",
    forms: [
      { slots: { mid1: "ا" }, ar: "قاسم", fr: "2aasem", es: "el que divide", pat: "faa3el · el que hace" },
      { slots: { front: "م", mid2: "و" }, ar: "مقسوم", fr: "ma2soom", es: "dividido", pat: "maf3uul · participio pasivo" }
    ]
  },
  {
    root: ["ك", "س", "ب"], rootf: "k · s · b", meaning: "ganar", icon: "🏆",
    forms: [
      { slots: { mid1: "ا" }, ar: "كاسب", fr: "kaaseb", es: "el que gana", pat: "faa3el · el que hace" },
      { slots: { front: "م", mid2: "و" }, ar: "مكسوب", fr: "maksoob", es: "ganado", pat: "maf3uul · participio pasivo" }
    ]
  },
  {
    root: ["س", "ر", "ق"], rootf: "s · r · 2", meaning: "robar", icon: "🦹",
    forms: [
      { slots: { mid1: "ا" }, ar: "سارق", fr: "saare2", es: "ladrón", pat: "faa3el · el que hace" },
      { slots: { front: "م", mid2: "و" }, ar: "مسروق", fr: "masroo2", es: "robado", pat: "maf3uul · participio pasivo" }
    ]
  },
  {
    root: ["ق", "ب", "ل"], rootf: "2 · b · l", meaning: "aceptar / recibir", icon: "🤝",
    forms: [
      { slots: { mid1: "ا" }, ar: "قابل", fr: "2aabel", es: "el que recibe", pat: "faa3el · el que hace" },
      { slots: { front: "م", mid2: "و" }, ar: "مقبول", fr: "ma2bool", es: "aceptado", pat: "maf3uul · participio pasivo" }
    ]
  },
  {
    root: ["ش", "ع", "ر"], rootf: "sh · 3 · r", meaning: "sentir / poesía", icon: "📝",
    forms: [
      { slots: { mid1: "ا" }, ar: "شاعر", fr: "shaa3er", es: "poeta / que siente", pat: "faa3el · el que hace" },
      { slots: { mid2: "و" }, ar: "شعور", fr: "sho3oor", es: "sentimiento", pat: "fu3uul" }
    ]
  },
  {
    root: ["ر", "ب", "ط"], rootf: "r · b · t", meaning: "atar / enlazar", icon: "🔗",
    forms: [
      { slots: { mid1: "ا" }, ar: "رابط", fr: "raabet", es: "enlace / que ata", pat: "faa3el · el que hace" },
      { slots: { front: "م", mid2: "و" }, ar: "مربوط", fr: "marboot", es: "atado", pat: "maf3uul · participio pasivo" }
    ]
  },
  {
    root: ["ت", "ر", "ك"], rootf: "t · r · k", meaning: "dejar / abandonar", icon: "✋",
    forms: [
      { slots: { mid1: "ا" }, ar: "تارك", fr: "taarek", es: "el que deja", pat: "faa3el · el que hace" },
      { slots: { front: "م", mid2: "و" }, ar: "متروك", fr: "matrook", es: "abandonado", pat: "maf3uul · participio pasivo" }
    ]
  },
  {
    root: ["ع", "د", "ل"], rootf: "3 · d · l", meaning: "justicia / ajustar", icon: "⚖️",
    forms: [
      { slots: { mid1: "ا" }, ar: "عادل", fr: "3aadel", es: "justo", pat: "faa3el · el que hace" },
      { slots: { mid2: "ا", back: "ة" }, ar: "عدالة", fr: "3adaala", es: "justicia", pat: "fa3aala" }
    ]
  },
  {
    root: ["ح", "ر", "س"], rootf: "7 · r · s", meaning: "vigilar / guardar", icon: "💂",
    forms: [
      { slots: { mid1: "ا" }, ar: "حارس", fr: "7aares", es: "guardia / portero", pat: "faa3el · el que hace" },
      { slots: { front: "م", mid2: "و" }, ar: "محروس", fr: "ma7roos", es: "vigilado / protegido", pat: "maf3uul · participio pasivo" }
    ]
  },
  {
    root: ["د", "ف", "ن"], rootf: "d · f · n", meaning: "enterrar", icon: "⚰️",
    forms: [
      { slots: { mid1: "ا" }, ar: "دافن", fr: "daafen", es: "el que entierra", pat: "faa3el · el que hace" },
      { slots: { front: "م", mid2: "و" }, ar: "مدفون", fr: "madfoon", es: "enterrado", pat: "maf3uul · participio pasivo" }
    ]
  },
  {
    root: ["ز", "ر", "ع"], rootf: "z · r · 3", meaning: "sembrar / cultivar", icon: "🌾",
    forms: [
      { slots: { mid1: "ا" }, ar: "زارع", fr: "zaare3", es: "agricultor", pat: "faa3el · el que hace" },
      { slots: { front: "م", mid2: "و" }, ar: "مزروع", fr: "mazroo3", es: "plantado / cultivado", pat: "maf3uul · participio pasivo" },
      { slots: { front: "م", back: "ة" }, ar: "مزرعة", fr: "mazra3a", es: "granja", pat: "maf3ala · lugar" }
    ]
  },
  {
    root: ["ر", "ف", "ع"], rootf: "r · f · 3", meaning: "levantar / subir", icon: "🙋",
    forms: [
      { slots: { mid1: "ا" }, ar: "رافع", fr: "raafe3", es: "el que levanta", pat: "faa3el · el que hace" },
      { slots: { front: "م", mid2: "و" }, ar: "مرفوع", fr: "marfoo3", es: "levantado / elevado", pat: "maf3uul · participio pasivo" }
    ]
  },
  {
    root: ["ق", "ع", "د"], rootf: "2 · 3 · d", meaning: "sentarse", icon: "🪑",
    forms: [
      { slots: { mid1: "ا" }, ar: "قاعد", fr: "2aa3ed", es: "sentado", pat: "faa3el · el que hace" },
      { slots: { front: "م" }, ar: "مقعد", fr: "ma23ad", es: "asiento", pat: "maf3al · lugar" }
    ]
  },
  {
    root: ["ش", "ك", "ر"], rootf: "sh · k · r", meaning: "agradecer", icon: "🙏",
    forms: [
      { slots: { mid1: "ا" }, ar: "شاكر", fr: "shaaker", es: "agradecido", pat: "faa3el · el que hace" },
      { slots: { front: "م", mid2: "و" }, ar: "مشكور", fr: "mashkoor", es: "agradecido / digno de gracias", pat: "maf3uul · participio pasivo" }
    ]
  }
];
