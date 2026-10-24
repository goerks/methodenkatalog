---
name: Akzeptanzkriterien (Gherkin)
kategorie: dokumentieren
vorgehen: agil
phase: spezifizieren
typ: Testbare Bedingungen
aufwand: 10 bis 20 Min. pro Story
werkzeuge: [Cucumber, SpecFlow, Behave, Jira]
grafik: gherkin
reihenfolge: 3
status: entwurf
---

Überprüfbare Bedingungen, unter denen eine Anforderung als erfüllt gilt. Häufig im Format Gegeben / Wenn / Dann (Gherkin).

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

## Beispiel: Warnung bei Doppelbelegung
Gegeben: Fahrzeug 12 ist am Montag für Tour A eingeplant.
Wenn: die Disponentin Fahrzeug 12 für Tour B am Montag wählt.
Dann: zeigt das System eine Warnung mit dem Namen von Tour A.

## Verknüpfungen
- vorher: [[user-stories]] Kriterien gehören zu jeder Story.
- ergaenzt: [[dor-dod]] Definition of Done verlangt, dass Kriterien erfüllt sind.
- danach: [[review]] Kriterien in der Abnahme prüfen.
- vorher: [[use-cases]] Kriterien lassen sich aus Use-Case-Abläufen ableiten.
