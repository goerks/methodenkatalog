---
name: Cost of Delay (CD3)
kurz: Cost of Delay
kategorie: priorisieren
vorgehen: agil
phase: bewerten
typ: Bewertungsformel
form: methode
aufwand: 1 bis 3 Stunden
werkzeuge: [Excel, Miro]
reihenfolge: 12
status: entwurf
karte: B-12
---

Bewertet, was jede Woche Verzögerung kostet, und ordnet danach, was zuerst geliefert wird.

## Wofür
Cost of Delay (Kosten der Verzögerung) schätzt den Nutzen, der pro Zeiteinheit verloren geht, wenn etwas später kommt. CD3 teilt diese Kosten durch die Dauer (Cost of Delay Divided by Duration). Gewinnen soll, was am meisten pro Woche verliert und am schnellsten fertig ist. Das macht Zeitdruck sichtbar.

## Wann sinnvoll
- Wenn Zeit der entscheidende Faktor ist (Markt, Frist, Wettbewerb)
- Wenn mehrere Vorhaben um dieselbe Kapazität konkurrieren
- Wenn Kosten der Verzögerung gegenüber Stakeholdern begründet werden sollen

## Wann besser nicht
- Wenn Nutzen kaum in Geld oder Wirkung ausdrückbar ist
- Wenn niemand die Zahlen verantwortet
- Bei sehr wenigen Optionen

## Vorbereitung
- Liste der Kandidaten
- Einheit für Nutzen festlegen (Franken pro Woche oder Punkte)
- Dauer bis zur Lieferung schätzen
- Profil der Dringlichkeit klären (fix, früh, später)

## Ablauf
1. Kandidaten und Zeiteinheit festlegen
2. Kosten der Verzögerung pro Woche schätzen
3. Dauer bis zur Lieferung schätzen
4. CD3 als Kosten geteilt durch Dauer berechnen
5. Reihenfolge nach höchstem Wert festlegen

## Regeln
- Gleiche Einheit für alle Kandidaten
- Kosten und Dauer von den jeweils Kundigen schätzen
- Annahmen offenlegen
- Ergebnis ist Diskussionsgrundlage

## In der Praxis
Auch grobe Zahlen zeigen, welche Themen drängen. Fragen Sie: «Was kostet es uns, wenn das einen Monat später kommt?» Das trennt echte Dringlichkeit von lauter Forderung. Prüfen Sie Fristen und Auswirkungen auf Verträge separat, sie bekommen oft eigene Regeln.

## Beispiel: Drei Vorhaben
Warnung: 8 000 Franken pro Woche, Dauer 2 Wochen, CD3 = 4 000. Export: 1 000 Franken pro Woche, Dauer 1 Woche, CD3 = 1 000. Neues Layout: 500 Franken pro Woche, Dauer 6 Wochen, CD3 = 83. Reihenfolge: Warnung, Export, Layout.

## Empfehlung
Vorher liefern Backlog und Schätzung die Kandidaten, Stakeholder die Zahlen. Danach planen Sie Roadmap und Release. Für wiederkehrendes Priorisieren im Scrum ist WSJF ein bekannter Verwandter.

## Lieferanten
- Product Owner
- Management
- Entwicklungsteam

## Eingaben
- Kandidatenliste >> [[product-backlog]] geliefert von
- Dauer >> [[story-points]] geliefert von

## Ergebnisse
- Tabelle mit CD3-Werten
- Priorisierte Reihenfolge >> [[roadmap]] genutzt in
- Begründung für Stakeholder

## Konsumenten
- Product Owner
- Management
- Projektleitung

## Verknüpfungen
- vorher: [[product-backlog]] Liefert die Kandidaten.
- vorher: [[story-points]] Liefern Dauer und Aufwand.
- danach: [[roadmap]] Reihenfolge fliesst in die Roadmap.
- alternative: [[wsjf]] Nutzt Kosten der Verzögerung in einer Formel mit weiteren Faktoren.
- alternative: [[rice]] Fokus auf Reichweite statt auf Zeit.

## Karte
Teaser: Was kostet jede Woche Verzögerung? Kosten geteilt durch Dauer: Dringendes und Schnelles zuerst.
Gut wenn: Zeit ist entscheidend | Vorhaben konkurrieren um Kapazität | Verzögerung begründet werden soll
Vorher: Kandidaten sammeln | Einheit festlegen
Besser nicht: Nutzen lässt sich kaum beziffern
Regeln: Gleiche Einheit für alle | Annahmen offenlegen | Ergebnis ist Diskussionsgrundlage
- Kandidaten festlegen
- Kosten pro Woche schätzen
- Dauer schätzen
- Kosten durch Dauer teilen
- Reihenfolge festlegen

## Quellen
- Reinertsen, D.: The Principles of Product Development Flow (Celeritas, 2009)
- Black Swan Farming: Cost of Delay (blackswanfarming.com)
- Leffingwell, D.: Agile Software Requirements (Addison-Wesley, 2011)
