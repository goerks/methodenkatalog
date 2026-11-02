---
name: Feature Tree
kategorie: modellieren
vorgehen: klassisch
phase: spezifizieren
typ: Funktionsbaum
form: modell
aufwand: 2 bis 4 Stunden
werkzeuge: [Miro, draw.io]
reihenfolge: 16
status: entwurf
karte: S-20
---

Gliedert den Funktionsumfang eines Produkts als Baum aus Hauptfunktionen und Teilfunktionen.

## Wofür
Der Feature Tree zeigt auf einer Seite, welche Funktionen ein Produkt haben soll und wie sie zusammengehören. Er hilft, den Umfang abzugrenzen, Lücken zu erkennen und Pakete für Releases zu bilden. Bei Produktlinien kann er zeigen, welche Funktionen Pflicht oder optional sind.

## Wann sinnvoll
- Wenn der Umfang eines Produkts übersichtlich gezeigt werden soll
- Wenn Funktionen Releases oder Varianten zugeordnet werden
- Wenn Stakeholder den Überblick vor den Details wollen

## Wann besser nicht
- Für Abläufe oder Zusammenspiel von Rollen
- Wenn die Funktionen noch gar nicht bekannt sind
- Als Ersatz für Anforderungen mit Details

## Vorbereitung
- Funktionen aus Interviews, Stories oder Dokumenten sammeln
- Ebenen festlegen (Produkt, Bereich, Funktion)
- Kennzeichnung für Pflicht und optional klären
- Fläche für den Baum vorbereiten

## Ablauf
1. Produkt als Wurzel setzen
2. Hauptbereiche als erste Ebene einzeichnen
3. Funktionen darunter ordnen
4. Pflicht, optional und Varianten kennzeichnen
5. Mit Stakeholdern auf Vollständigkeit prüfen

## Regeln
- Funktionen als Verb plus Objekt benennen
- Gleiche Ebene, gleiche Grössenordnung
- Jede Funktion hängt an genau einem Bereich
- Höchstens drei Ebenen

## In der Praxis
Ein Baum eignet sich als Landkarte für Gespräche. Er ersetzt keine Anforderungen: Hängen Sie an jede Funktion einen Verweis auf Stories oder Use Cases. Wenn eine Funktion in zwei Bereiche passt, ist ihr Zweck noch zu unscharf.

## Beispiel: Tourenplaner
Wurzel: Tourenplaner. Bereiche: Planen, Freigeben, Auswerten. Unter Planen: Tour anlegen, Fahrzeug zuteilen, Konflikt prüfen. Unter Auswerten: Auslastung anzeigen (optional).

## Empfehlung
Vorher liefern Interviews oder Story Map die Funktionen. Danach bilden Sie Releases in der Release-Planung. Für den zeitlichen Ablauf nutzen Sie Story Map.

## Lieferanten
- Product Owner
- Fachbereich
- Entwicklungsteam

## Eingaben
- Funktionswünsche >> [[interview]] geliefert von
- Stories >> [[user-stories]] geliefert von

## Ergebnisse
- Funktionsbaum
- Pakete für Releases >> [[release-planning]] genutzt in

## Konsumenten
- Product Owner
- Auftraggeber
- Entwicklungsteam

## Verknüpfungen
- vorher: [[interview]] Gespräche liefern Funktionswünsche.
- vorher: [[user-stories]] Stories ordnen sich in den Baum.
- danach: [[release-planning]] Funktionen werden Releases zugeordnet.
- alternative: [[story-mapping]] Zeigt zusätzlich den zeitlichen Ablauf.
- ergänzt: [[traceability]] Funktionen verweisen auf ihre Anforderungen.

## Karte
Teaser: Der Funktionsumfang als Baum: Produkt, Bereiche, Funktionen, mit Pflicht und optional markiert.
Gut wenn: Umfang auf einer Seite gezeigt wird | Funktionen Releases zugeordnet werden | Überblick vor Details
Vorher: Funktionen sammeln | Ebenen festlegen
Besser nicht: Es geht um Abläufe oder Rollen
Regeln: Verb und Objekt als Name | Gleiche Ebene, gleiche Grösse | Höchstens drei Ebenen
- Produkt als Wurzel
- Bereiche einzeichnen
- Funktionen zuordnen
- Pflicht, optional markieren
- Auf Vollständigkeit prüfen

## Quellen
- Kang, K. u. a.: Feature-Oriented Domain Analysis (FODA) Feasibility Study (SEI, 1990)
- Pohl, K.; Rupp, C.: Basiswissen Requirements Engineering (dpunkt, 5. Auflage 2021)
