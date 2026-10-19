# DB Autodetailing — zelenošedý redesign webových stránek

Moderní, responzivní návrh webových stránek pro detailingové studio **DB Autodetailing – David Baják**.

Projekt představuje neoficiální redesign původního webu. Využívá elegantní zelenošedý barevný styl s důrazem na přehlednou prezentaci služeb, jednoduchou orientaci a příjemné uživatelské prostředí.

Jedná se o první ze dvou připravených designových variant.

## Obsah webu

Web se skládá z pěti HTML podstránek:

- **Úvod (`index.html`)** – představení studia, přehled služeb, ukázky realizací, fotogalerie a interaktivní rychlá navigace.
- **Služby (`sluzby.html`)** – přehled nabízených detailingových služeb.
- **Keramika a kůže (`keramika.html`)** – informace o keramické ochraně a péči o kožené povrchy.
- **O nás (`o-nas.html`)** – představení studia a Davida Bajáka.
- **Kontakt (`kontakt.html`)** – kontaktní údaje, Google Mapy a možnost otevření navigace do studia.

## Design a funkce

- Elegantní zelenošedá barevná kombinace.
- Responzivní design pro počítače, tablety a mobilní telefony.
- Mobilní navigační menu.
- Plovoucí rychlá navigace na úvodní stránce.
- Možnost přesouvat navigační panel myší pomocí ikony se čtyřmi šipkami.
- Zapamatování pozice navigačního panelu v prohlížeči.
- Obnovení výchozí pozice navigace dvojklikem na ikonu přesouvání.
- Plynulé posouvání k jednotlivým sekcím stránky.
- Fotogalerie s možností zvětšení obrázků pomocí lightboxu.
- Zástupné obrázky připravené pro doplnění skutečných fotografií.
- Interaktivní Google Mapy na kontaktní stránce.
- Odkazy pro telefonické a e-mailové kontaktování studia.

## Fotogalerie

Web obsahuje připravená místa pro fotografie skutečných realizací DB Autodetailing.

Fotografie mají být tematicky rozdělené podle jednotlivých služeb, například:

- Čištění interiéru a péče o vozidla.
- Leštění a renovace laku.
- Keramická ochrana.
- Renovace a čištění kožených povrchů.
- Další detailingové práce a realizace.

### Zástupné obrázky

V aktuální veřejné verzi jsou skutečné fotografie nahrazené jednotným zástupným obrázkem s označením **„MÍSTO PRO FOTOGRAFII“**.

Zástupný obrázek je uložený ve složce `fotografie/` jako `placeholder.svg`.

Toto řešení umožňuje představit rozložení a design webu bez veřejného zobrazování fotografií, k jejichž použití zatím nebylo potvrzeno oprávnění.

Složka `galerie/` obsahuje původní grafické podklady projektu.

**Autorská práva:** Skutečné fotografie realizací budou doplněny až po získání odpovídajícího souhlasu jejich držitele práv.

## Rychlá navigace

Na úvodní stránce se nachází plovoucí navigační panel, který obsahuje odkazy na jednotlivé sekce:

- Co pro váš vůz.
- Realizace.
- Sezónní péče.
- O studiu.
- Galerie.

Kliknutím na položku se stránka plynule posune k příslušné sekci.

### Přesouvání navigace

Na počítači lze navigační panel přesouvat pomocí ikony se čtyřmi šipkami.

- **Přetažení myší** – změna umístění navigačního panelu.
- **Uložení pozice** – panel si zapamatuje poslední umístění v prohlížeči.
- **Dvojklik na ikonu** – návrat panelu do výchozí pozice.

Na menších obrazovkách se navigace přizpůsobuje dostupnému prostoru.

## Google Mapy

Na stránce Kontakt je vložena interaktivní mapa Google Maps, která návštěvníkům usnadňuje nalezení provozovny.

Mapa umožňuje:

- Přiblížení a oddálení.
- Prohlížení okolí provozovny.
- Otevření navigace v Google Mapách.

Mapa je nastavena na přiblížený pohled na lokalitu studia.

Před oficiálním předáním webu je nutné ověřit přesnou adresu provozovny a správnost umístění na mapě.

## Použité technologie

- **HTML5** – struktura jednotlivých stránek.
- **CSS3** – vzhled webu, responzivní rozložení a vizuální efekty.
- **JavaScript** – mobilní menu, interaktivní fotogalerie a přesouvání rychlé navigace.
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
│   └── placeholder.svg
├── galerie/
├── README.md
└── LICENSE
```

## Spuštění webu

Projekt je vytvořený jako statický web. Pro lokální zobrazení stačí otevřít soubor `index.html` v internetovém prohlížeči.

### GitHub Pages

Pro zveřejnění prostřednictvím GitHub Pages:

1. Nahraj všechny HTML, CSS a JavaScript soubory do kořene repozitáře.
2. Nahraj také složky `fotografie/` a `galerie/`.
3. V nastavení repozitáře otevři **Settings → Pages**.
4. Jako zdroj publikování vyber **Deploy from a branch**, větev `main` a složku `/ (root)`.
5. Po dokončení nasazení otevři zveřejněnou adresu webu.

**Ukázka projektu:**

https://simokostovcik-hash.github.io/db-autodetailing-redesign/

## Porovnání designových variant

Pro DB Autodetailing byly připraveny dvě odlišné varianty webových stránek.

### Design 1 – zelenošedý redesign

Elegantní a přehledný design s důrazem na jednoduchou orientaci, prezentaci služeb a interaktivní navigaci.

https://simokostovcik-hash.github.io/db-autodetailing-redesign/

### Design 2 – tmavý automobilový redesign

Výraznější automobilový styl s velkými vizuálními prvky, moderní typografií a důrazem na prezentaci realizací.

https://simokostovcik-hash.github.io/db-autodetailing-redesign2/

Obě varianty lze dále upravovat podle požadavků a představ majitele studia.

## Důležité upozornění

**Tento web je neoficiálním návrhem redesignu a není provozován ani oficiálně schválen společností DB Autodetailing.**

Projekt slouží k prezentaci možného vzhledu a funkčnosti nových webových stránek.

Před případným oficiálním spuštěním je nutné s majitelem studia ověřit kontaktní údaje, ceny, popisy služeb, adresu provozovny a oprávnění k použití fotografií.

Případné kontaktní formuláře nejsou připojené k serverovému backendu.

## Autor

**Simon Kostovcik**  
Webdesign a frontend vývoj

Portfolio: https://simokostovcik-hash.github.io/portfolio/

GitHub: https://github.com/simokostovcik-hash
