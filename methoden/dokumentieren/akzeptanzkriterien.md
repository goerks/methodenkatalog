---
name: Akzeptanzkriterien (Gherkin)
kurz: Akzeptanzkriterien
kategorie: dokumentieren
vorgehen: agil
phase: spezifizieren
typ: Testbare Bedingungen
form: artefakt
aufwand: 10 bis 20 Min. pro Story
werkzeuge: [Cucumber, SpecFlow, Behave, Jira]
grafik: gherkin
reihenfolge: 3
status: entwurf
karte: S-03
---

Überprüfbare Bedingungen, unter denen eine Anforderung als erfüllt gilt. Häufig im Format Gegeben / Wenn / Dann (Gherkin).

## Wofür
Akzeptanzkriterien legen fest, wann eine Anforderung als erfüllt gilt. Im Format Gegeben-Wenn-Dann (Gherkin) beschreiben sie konkrete Beispiele und lassen sich zugleich als Test automatisieren. Sie verhindern Missverständnisse zwischen Fachbereich und Team.

## Wann sinnvoll
- Für jede Story, bevor sie in den Sprint kommt
- Wenn Fachlichkeit und Team unterschiedlich verstehen, was «fertig» heisst
- Wenn automatisierte Tests gewünscht sind

## Wann besser nicht
- Bei rein technischen Aufgaben ohne Verhalten
- Wenn Kriterien zu Skripten für jeden Klick werden: Nutzen sinkt, Pflegeaufwand steigt

## Vorbereitung
- Story mit Nutzen und Rolle vorliegen haben
- Product Owner, Entwicklung und Test zu einem kurzen Gespräch zusammenbringen (Drei Amigos)
- Konkrete Beispiele aus dem Fachbereich sammeln
- Vorlage Gegeben-Wenn-Dann bereitstellen

## Ablauf
1. Story im Team besprechen
2. Konkrete Beispiele für erwartetes Verhalten sammeln
3. In Gegeben / Wenn / Dann formulieren
4. Randfälle ergänzen
5. Als Abnahmetest verwenden oder automatisieren

## Regeln
- Jedes Kriterium ist eindeutig mit Ja oder Nein beantwortbar
- Kein technisches Vorgehen, sondern beobachtbares Verhalten
- Drei Amigos: Fachseite, Entwicklung, Test sprechen gemeinsam

## In der Praxis
Arbeiten Sie mit Beispielen: Ein konkreter Fall verrät mehr als eine allgemeine Regel. Ein Szenario testet eine Sache. Verwenden Sie die Sprache des Fachbereichs, keine Technik. Besonders wertvoll sind Grenz- und Fehlerfälle: «Was passiert bei Betrag null?». Halten Sie Kriterien so kurz, dass sie lesbar bleiben, meist drei bis sieben je Story.

## Beispiel: Warnung bei Doppelbelegung
Gegeben: Fahrzeug 12 ist am Montag für Tour A eingeplant.
Wenn: die Disponentin Fahrzeug 12 für Tour B am Montag wählt.
Dann: zeigt das System eine Warnung mit dem Namen von Tour A.

## Empfehlung
Vorher steht die Story oder der Use Case, aus dem sie abgeleitet werden. Danach prüft das Team die Kriterien im Review, ergänzt sie in der Definition of Ready und nutzt sie für den Abnahmetest.

## Lieferanten
- Product Owner
- Fachbereich
- Test

## Eingaben
- Story >> [[user-stories]] geliefert von
- Ablaufbeschreibung >> [[use-cases]] geliefert von
- Geschäftsregeln >> [[geschaeftsregeln]] geliefert von

## Ergebnisse
- Szenarien in Gegeben-Wenn-Dann
- Teststoff für die Abnahme >> [[abnahmetest]] genutzt in
- Prüfgrundlage >> [[review]] genutzt in
- Zustandsübergänge >> [[zustandsdiagramm]] verdeutlicht in

## Konsumenten
- Entwicklungsteam
- Test
- Product Owner

## Verknüpfungen
- vorher: [[user-stories]] Kriterien gehören zu jeder Story.
- ergaenzt: [[dor-dod]] Definition of Done verlangt, dass Kriterien erfüllt sind.
- danach: [[review]] Kriterien in der Abnahme prüfen.
- vorher: [[use-cases]] Kriterien lassen sich aus Use-Case-Abläufen ableiten.

## Karte
Teaser: Wann ist eine Anforderung erfüllt? Beispiele im Format Gegeben-Wenn-Dann.
Gut wenn: Für jede Story vor dem Sprint | Alle verstehen «fertig» gleich
Vorher: Story mit Rolle und Nutzen | Product Owner, Entwicklung, Test im Gespräch
Besser nicht: Rein technische Aufgaben ohne Verhalten
- Story und Beispiele sammeln
- Gegeben: Ausgangslage
- Wenn: Aktion
- Dann: erwartetes Ergebnis
- Grenz- und Fehlerfälle ergänzen

## Quellen
- North, D.: Introducing BDD (2006), dannorth.net
- Adzic, G.: Specification by Example (Manning, 2011)
- Wynne, M., Hellesøy, A.: The Cucumber Book (Pragmatic Bookshelf, 2012)
