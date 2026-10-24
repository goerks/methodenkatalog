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
---

Rechnet die Kosten der Verzögerung gegen die Dauer. Höchster Wert pro Aufwand kommt zuerst.

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

## Beispiel: Zwei Features
Feature A: Delay 13, Aufwand 5 → 2.6. Feature B: Delay 8, Aufwand 2 → 4.0. B kommt zuerst.

## Verknüpfungen
- vorher: [[story-points]] Aufwand in Story Points einsetzen.
- vorher: [[planning-poker]] Aufwand per Planning Poker schätzen.
- alternative: [[moscow]] Einfacher, aber ohne Rechnung.
- danach: [[product-backlog]] Reihenfolge ins Backlog.
