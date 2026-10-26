---
name: WSJF (Weighted Shortest Job First)
kurz: WSJF
kategorie: priorisieren
vorgehen: agil
phase: bewerten
typ: Priorisierung
form: methode
aufwand: 1 Stunde
werkzeuge: [Excel, Jira (WSJF-Feld)]
reihenfolge: 3
status: entwurf
karte: B-03
---

Rechnet die Kosten der Verzögerung gegen die Dauer. Höchster Wert pro Aufwand kommt zuerst.

## Wofür
WSJF (Weighted Shortest Job First) priorisiert nach dem Verhältnis von Verzögerungskosten zu Aufwand: Was pro Aufwand am meisten Wert bringt und am dringendsten ist, kommt zuerst. Die Zahl macht Entscheidungen vergleichbar und nachvollziehbar.

## Wann sinnvoll
- Wenn viele Anfragen um knappe Kapazität konkurrieren
- Wenn Dringlichkeit und Wert transparent begründet werden sollen
- In skalierten agilen Umgebungen

## Wann besser nicht
- Wenn die Zahlen nur Scheingenauigkeit liefern: nehmen Sie relative Schätzungen ernst, aber nicht wörtlich
- Bei sehr wenigen Einträgen
- Wenn Schätzungen fehlen

## Vorbereitung
- Liste der Kandidaten mit Aufwandsschätzung
- Skala für relative Bewertung wählen (zum Beispiel Fibonacci)
- Beteiligte aus Fachbereich und Entwicklung
- Tabelle mit den Spalten Geschäftswert, Zeitkritikalität, Risikominderung, Aufwand

## Ablauf
1. Kosten der Verzögerung bestimmen (Nutzerwert, Zeitkritikalität, Risikoreduktion)
2. Aufwand schätzen
3. WSJF = Kosten der Verzögerung / Aufwand
4. Nach Ergebnis sortieren
5. Regelmässig neu berechnen

## Regeln
- Alle Faktoren relativ bewerten (z. B. Fibonacci)
- Im Team bewerten, nicht allein
- Das Ergebnis ist Diskussionsgrundlage

## In der Praxis
Verzögerungskosten setzen sich zusammen aus Geschäftswert, Zeitkritikalität und Risikominderung. Teilen Sie die Summe durch den Aufwand. Bewerten Sie relativ: Zuerst den kleinsten Eintrag je Spalte bestimmen und alle anderen dagegen. Diskutieren Sie Ausreisser, das Gespräch ist wichtiger als die Nachkommastelle.

## Beispiel: Zwei Features
Feature A: Delay 13, Aufwand 5 → 2.6. Feature B: Delay 8, Aufwand 2 → 4.0. B kommt zuerst.

## Empfehlung
Vorher brauchen Sie Aufwandsschätzungen aus Planning Poker oder Story Points. Danach fliesst die Reihenfolge ins Backlog und die Roadmap. Als Alternative zu MoSCoW, wenn feinere Unterscheidung nötig ist.

## Lieferanten
- Product Owner
- Fachbereich
- Entwicklungsteam

## Eingaben
- Aufwandsschätzungen >> [[story-points]] geliefert von
- Relative Schätzung >> [[planning-poker]] geliefert von
- Risikoeinschätzung >> [[risikoanalyse]] ergänzt durch

## Ergebnisse
- Rangliste mit Kennzahl
- Reihenfolge >> [[product-backlog]] übernommen in
- Planungsgrundlage >> [[roadmap]] genutzt in

## Konsumenten
- Product Owner
- Management
- Entwicklungsteam

## Verknüpfungen
- vorher: [[story-points]] Aufwand in Story Points einsetzen.
- vorher: [[planning-poker]] Aufwand per Planning Poker schätzen.
- alternative: [[moscow]] Einfacher, aber ohne Rechnung.
- danach: [[product-backlog]] Reihenfolge ins Backlog.

## Karte
Teaser: Priorisieren nach Verzögerungskosten geteilt durch Aufwand. Was zuerst?
Gut wenn: Viele Anfragen, knappe Kapazität | Wert und Dringlichkeit begründen | In skalierten agilen Umgebungen
Vorher: Kandidaten mit Aufwand schätzen | Relative Skala wählen
Besser nicht: Die Zahlen liefern nur Scheingenauigkeit
- Kandidaten und Aufwand sammeln
- Wert, Dringlichkeit, Risiko bewerten
- Summe durch Aufwand teilen
- Rangliste bilden
- Ausreisser besprechen

## Quellen
- Reinertsen, D.: The Principles of Product Development Flow (Celeritas, 2009)
- Scaled Agile, Inc.: SAFe – WSJF (scaledagileframework.com)
- Leffingwell, D.: Agile Software Requirements (Addison-Wesley, 2011)
