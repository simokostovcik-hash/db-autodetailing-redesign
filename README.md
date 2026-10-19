# DB Autodetailing — redesign webových stránek

Moderní, responzivní návrh webových stránek pro automobilové detailingové studio **DB Autodetailing – David Baják**.

Projekt představuje neoficiální redesign původního webu. Je vytvořený v zelenošedém barevném stylu s důrazem na přehlednost, jednoduchou navigaci, prezentaci služeb a skutečných realizací.

## Obsah webu

Web se skládá z pěti HTML podstránek:

- **Úvod (`index.html`)** – představení studia, přehled služeb, ukázky realizací, fotogalerie a rychlá navigace.
- **Služby (`sluzby.html`)** – přehled nabízených detailingových služeb.
- **Keramika a kůže (`keramika.html`)** – informace o keramické ochraně a péči o kožené povrchy.
- **O nás (`o-nas.html`)** – představení studia a Davida Bajáka.
- **Kontakt (`kontakt.html`)** – kontaktní údaje, Google Mapy a možnost otevření navigace do studia.

## Funkce webu

- Responzivní design pro počítače, tablety a mobilní telefony.
- Mobilní navigační menu.
- Plovoucí rychlá navigace na úvodní stránce s plynulým posouváním k jednotlivým sekcím.
- Fotogalerie s možností zvětšení fotografií pomocí lightboxu.
- Fotografie skutečných realizací tematicky rozmístěné po webu.
- Interaktivní Google Mapy na kontaktní stránce.
- Odkazy pro telefonické a e-mailové kontaktování studia.

## Fotogalerie

Web obsahuje fotografie realizací DB Autodetailing, které jsou tematicky rozdělené podle jednotlivých služeb.

Fotografie zachycují například:

- Čištění interiéru a péči o vozidla.
- Leštění a renovaci laku.
- Keramickou ochranu.
- Renovaci a čištění kožených povrchů.
- Další detailingové práce a realizace.

Fotografie jsou uložené ve složce `fotografie/`. Některé obrázky se zobrazují přímo v obsahu jednotlivých podstránek, další jsou součástí fotogalerie s možností zvětšení.

Složka `galerie/` obsahuje původní grafické podklady projektu.

**Autorská práva:** Fotografie byly dodány pro přípravu návrhu webu. Před jejich veřejným použitím je nutné mít souhlas příslušného držitele práv.

## Google Mapy

Na stránce Kontakt je vložena interaktivní mapa Google Maps, která usnadňuje nalezení provozovny.

Mapa je nastavena na přiblížený pohled na lokalitu studia. Návštěvník může mapu ovládat a otevřít si trasu přímo v Google Mapách.

Před oficiálním předáním webu klientovi je vhodné potvrdit přesnou adresu provozovny a správnost umístění na mapě.

## Použité technologie

- **HTML5** – struktura jednotlivých stránek.
- **CSS3** – vzhled webu, responzivní rozložení a animace.
- **JavaScript** – mobilní menu a interaktivní fotogalerie.
- **Google Maps** – vložená mapa na kontaktní stránce.
- **GitHub Pages** – publikování statického webu.

Web nevyžaduje databázi ani serverový backend.

## Struktura projektu

```text
db-autodetailing-redesign/
├── index.html
├── sluzby.html
├── keramika.html
├── o-nas.html
├── kontakt.html
├── style.css
├── script.js
├── fotografie/
├── galerie/
├── README.md
└── LICENSE
```

## Spuštění webu

Projekt je vytvořený jako statický web. Pro lokální zobrazení stačí otevřít soubor `index.html` v internetovém prohlížeči.

### GitHub Pages

Pro zveřejnění prostřednictvím GitHub Pages:

1. Nahraj všechny HTML, CSS a JavaScript soubory do kořene repozitáře.
2. Nahraj také celé složky `fotografie/` a `galerie/`.
3. V nastavení repozitáře otevři **Settings → Pages**.
4. Jako zdroj publikování vyber **Deploy from a branch**, větev `main` a složku `/ (root)`.
5. Po dokončení nasazení otevři zveřejněnou adresu webu.

**Ukázka projektu:**  
https://simokostovcik-hash.github.io/db-autodetailing-redesign/

## Důležité upozornění

**Tento web je neoficiálním návrhem redesignu a není provozován ani oficiálně schválen společností DB Autodetailing.**

Projekt slouží k prezentaci návrhu nového vzhledu a funkčnosti webových stránek. Uvedené informace, kontaktní údaje, ceny a umístění provozovny je nutné před případným oficiálním spuštěním ověřit s majitelem studia.

Případné kontaktní formuláře nejsou připojené k serverovému backendu.

## Autor

**Simon Kostovcik**  
Webdesign a frontend vývoj

Portfolio: https://simokostovcik-hash.github.io/portfolio/

GitHub: https://github.com/simokostovcik-hash
