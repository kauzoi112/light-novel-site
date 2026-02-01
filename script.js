const chapters = {
    1: {
        title: "Bölüm 1 – Başlangıç",
        content: `Gece karanlıktı. Rüzgâr sessizce esiyordu.
        Kimse fark etmeden kader değişmişti...`
    },
    2: {
        title: "Bölüm 2 – Karşılaşma",
        content: `O anda kapı açıldı.
        Hayatımı sonsuza kadar değiştirecek kişi karşımdadaydı.`
    },
    3: {
        title: "Bölüm 3 – Seçim",
        content: `Geri dönüş yoktu.
        Ya savaşacaktım, ya da her şeyi kaybedecektim.`
    }
};

function loadChapter(num) {
    document.getElementById("chapter-title").innerText = chapters[num].title;
    document.getElementById("chapter-content").innerText = chapters[num].content;
}
