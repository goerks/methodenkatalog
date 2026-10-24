const VIS = {
story: () => `<div style="border:2px solid var(--cc);border-radius:6px;padding:14px 16px;max-width:460px;margin:auto;background:var(--bg)">
  <div class="lbl" style="color:var(--cc)">Story-Karte</div>
  <p style="margin:6px 0"><b>Als</b> Disponentin<br><b>möchte ich</b> bei doppelter Fahrzeugbelegung gewarnt werden,<br><b>damit</b> ich keine unmöglichen Touren verschicke.</p>
  <div class="lbl" style="margin-top:10px">Akzeptanz</div>
  <ul style="margin:4px 0 0;padding-left:18px;font-size:.9rem"><li>Warnung erscheint vor dem Speichern</li><li>Betroffenes Fahrzeug wird genannt</li></ul>
  <div style="display:flex;justify-content:space-between;margin-top:10px" class="mono"><span>TOUR-12</span><span>5 SP</span></div></div>`,

'usecase-text': () => `<div style="font-size:.92rem;display:grid;gap:4px">
  <div><span class="lbl">Name</span> UC-04 Tour freigeben</div>
  <div><span class="lbl">Akteur</span> Disponentin</div>
  <div><span class="lbl">Vorbedingung</span> Tour ist vollständig</div>
  <div><span class="lbl">Hauptablauf</span></div>
  <ol style="margin:0;padding-left:20px"><li>Disponentin wählt «Freigeben»</li><li>System prüft Fahrzeug und Fahrer</li><li>System sperrt die Tour für Änderungen</li></ol>
  <div><span class="lbl">Alternative 2a</span> Konflikt: System zeigt Details, zurück zu Schritt 1</div>
  <div><span class="lbl">Nachbedingung</span> Tour hat Status «Freigegeben»</div></div>`,

gherkin: () => `<pre style="margin:0;font-family:var(--f-mono);font-size:.82rem;line-height:1.7;white-space:pre-wrap;overflow-x:auto"><b style="color:var(--cc)">Szenario:</b> Warnung bei Doppelbelegung
  <b style="color:var(--cc)">Gegeben</b> Fahrzeug 12 ist am Montag für Tour A eingeplant
  <b style="color:var(--cc)">Wenn</b>    die Disponentin Fahrzeug 12 für Tour B wählt
  <b style="color:var(--cc)">Dann</b>    zeigt das System eine Warnung mit «Tour A»</pre>`,

activity: () => `<svg class="sv" viewBox="0 0 560 250" width="560" role="img" aria-label="Aktivitätsdiagramm Tour freigeben">
  <defs><marker id="ar" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" class="fl"/></marker></defs>
  <circle cx="30" cy="100" r="9" class="fl"/>
  <path class="ln" d="M39 100H70" marker-end="url(#ar)"/>
  <rect x="72" y="80" width="110" height="40" rx="14" class="st"/><text x="127" y="105" text-anchor="middle">Tour prüfen</text>
  <path class="ln" d="M182 100H222" marker-end="url(#ar)"/>
  <path d="M245 76L268 100L245 124L222 100Z" class="st"/><text x="245" y="104" text-anchor="middle" font-size="11">Konflikt?</text>
  <path class="ln" d="M268 100H318" marker-end="url(#ar)"/><text x="283" y="92" class="mu" font-size="11">nein</text>
  <rect x="320" y="80" width="110" height="40" rx="14" class="st"/><text x="375" y="105" text-anchor="middle">Tour sperren</text>
  <path class="ln" d="M375 120V160" marker-end="url(#ar)"/>
  <rect x="320" y="162" width="110" height="40" rx="14" class="st"/><text x="375" y="187" text-anchor="middle" font-size="12">Fahrer benachr.</text>
  <path class="ln" d="M430 182H478" marker-end="url(#ar)"/>
  <circle cx="490" cy="182" r="11" class="st"/><circle cx="490" cy="182" r="6" class="fl"/>
  <path class="ln" d="M245 124V180" marker-end="url(#ar)"/><text x="253" y="150" class="mu" font-size="11">ja</text>
  <rect x="190" y="182" width="110" height="40" rx="14" class="st"/><text x="245" y="207" text-anchor="middle" font-size="12">Warnung zeigen</text>
  <path class="ln" d="M190 202H127V122" marker-end="url(#ar)"/></svg>`,

usecase: () => `<svg class="sv" viewBox="0 0 520 250" width="520" role="img" aria-label="Use-Case-Diagramm Tourenplanung">
  <rect x="150" y="14" width="230" height="222" rx="6" class="bd"/><text x="265" y="34" text-anchor="middle" class="mu" font-size="12">Tourenplanung</text>
  <ellipse cx="265" cy="76" rx="80" ry="24" class="st"/><text x="265" y="80" text-anchor="middle">Tour planen</text>
  <ellipse cx="265" cy="136" rx="80" ry="24" class="st"/><text x="265" y="140" text-anchor="middle">Tour freigeben</text>
  <ellipse cx="265" cy="196" rx="80" ry="24" class="st"/><text x="265" y="200" text-anchor="middle">Tour einsehen</text>
  <g class="ln"><circle cx="60" cy="86" r="10"/><path d="M60 96V134M36 108H84M60 134L42 164M60 134L78 164"/></g>
  <text x="60" y="186" text-anchor="middle">Disponentin</text>
  <g class="ln"><circle cx="460" cy="146" r="10"/><path d="M460 156V194M436 168H484M460 194L442 224M460 194L478 224"/></g>
  <text x="460" y="244" text-anchor="middle">Fahrer</text>
  <path class="ln" d="M80 108L190 80M80 118L190 132"/><path class="ln" d="M440 170L335 196"/></svg>`,

context: () => `<svg class="sv" viewBox="0 0 540 260" width="540" role="img" aria-label="Kontextdiagramm Tourenplanung">
  <defs><marker id="ar2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" class="fl"/></marker></defs>
  <rect x="200" y="95" width="140" height="70" rx="6" class="st"/><text x="270" y="135" text-anchor="middle" font-weight="600">Tourenplanung</text>
  <rect x="10" y="20" width="120" height="44" rx="4" class="st"/><text x="70" y="47" text-anchor="middle">Disponentin</text>
  <rect x="410" y="20" width="120" height="44" rx="4" class="st"/><text x="470" y="47" text-anchor="middle">Fahrer-App</text>
  <rect x="10" y="196" width="120" height="44" rx="4" class="st"/><text x="70" y="223" text-anchor="middle">ERP (Aufträge)</text>
  <rect x="410" y="196" width="120" height="44" rx="4" class="st"/><text x="470" y="217" text-anchor="middle" font-size="12">Fahrzeug-</text><text x="470" y="231" text-anchor="middle" font-size="12">verwaltung</text>
  <path class="ln" d="M130 55L200 105" marker-end="url(#ar2)"/><text x="120" y="96" class="mu" font-size="11">Touren</text>
  <path class="ln" d="M340 105L410 55" marker-end="url(#ar2)"/><text x="385" y="98" class="mu" font-size="11">Fahrplan</text>
  <path class="ln" d="M130 205L200 155" marker-end="url(#ar2)"/><text x="120" y="188" class="mu" font-size="11">Aufträge</text>
  <path class="ln" d="M410 205L340 155" marker-end="url(#ar2)"/><text x="385" y="186" class="mu" font-size="11">Verfügbarkeit</text></svg>`,

moscow: () => `<div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;font-size:.9rem">
  ${[['Must','Tour anlegen · Fahrzeugkonflikt prüfen','var(--c-qs)'],['Should','Ersatzfahrer-Vorschlag','var(--c-prio)'],['Could','Kartenansicht','var(--c-plan)'],["Won't",'Mobiler Offline-Modus','var(--muted)']].map(x=>`<div style="border:1px solid var(--line);border-top:4px solid ${x[2]};border-radius:5px;padding:8px 10px;background:var(--bg)"><div class="lbl" style="color:${x[2]}">${x[0]}</div>${x[1]}</div>`).join('')}</div>`,

poker: () => `<div style="display:flex;flex-wrap:wrap;gap:10px;justify-content:center;align-items:flex-end">
  ${[3,5,5,13].map((v,i)=>`<div style="width:62px;height:88px;border:2px solid var(--cc);border-radius:8px;display:grid;place-items:center;font-family:var(--f-display);font-size:1.8rem;font-weight:700;background:var(--bg);${v===13?'color:var(--c-qs);border-color:var(--c-qs)':''}">${v}</div>`).join('')}</div>
  <p class="mono" style="text-align:center;margin:12px 0 0;color:var(--muted)">Skala: 1 · 2 · 3 · 5 · 8 · 13 · 21 · ?</p>`,

storymap: () => `<div style="overflow-x:auto"><div style="display:grid;grid-template-columns:repeat(3,minmax(130px,1fr));gap:6px;font-size:.82rem;min-width:420px">
  ${['Planen','Freigeben','Ausliefern'].map(a=>`<div style="background:var(--cc);color:var(--bg);padding:6px 8px;border-radius:4px;font-weight:600">${a}</div>`).join('')}
  ${['Tour anlegen','Konflikt prüfen','Fahrer benachrichtigen'].map(a=>`<div style="border:1px solid var(--line);padding:6px 8px;border-radius:4px;background:var(--bg)">${a}</div>`).join('')}
  <div class="lbl" style="grid-column:1/-1;border-top:2px dashed var(--cc);padding-top:4px;color:var(--cc)">Release 1</div>
  ${['Fahrzeug zuweisen','Warnung anzeigen','Push-Meldung'].map(a=>`<div style="border:1px solid var(--line);padding:6px 8px;border-radius:4px">${a}</div>`).join('')}
  <div class="lbl" style="grid-column:1/-1;border-top:2px dashed var(--muted);padding-top:4px">Release 2</div>
  ${['Karte','Ersatzfahrer','Statusverlauf'].map(a=>`<div style="border:1px solid var(--line);padding:6px 8px;border-radius:4px;color:var(--muted)">${a}</div>`).join('')}
</div></div>`
};
