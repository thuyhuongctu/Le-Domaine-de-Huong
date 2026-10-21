<div align="center">

# Le Domaine de Hương

### Trang viên tri thức · Knowledge Manor

**An interactive 3D estate that runs entirely in the browser and makes no network request at all.**

[![Open the scene](https://img.shields.io/badge/open-the_3D_scene-c45c3a?style=for-the-badge)](https://thuyhuongctu.github.io/Le-Domaine-de-Huong/)
&nbsp;
[![Licence](https://img.shields.io/badge/licence-all_rights_reserved-3f6f68?style=for-the-badge)](LICENSE)

</div>

---

## At a glance

| | |
| --- | --- |
| **What it is** | The estate of a doctoral researcher in the Mekong Delta, drawn at run time with three.js |
| **Eight zones** | Research · Library · Music · Storytelling · News · Main house · Lantern path · Future store |
| **Four lighting states** | morning · afternoon · night · noir — each with its own sun, sky, rim light, shadow frame and fog distance |
| **Three ways to travel** | on foot · by bicycle · by sampan, which is confined to the river |
| **Two languages** | Vietnamese and English; English by default, and the visitor's choice is remembered |
| **Narration** | the **author's own recorded voice**, in both languages |
| **Network calls** | **none** — measured in Chromium rather than promised: no outgoing request after load |
| **Server needed?** | No. No build step, no server-side component, no database. |

---

## Why this is a separate repository

The same scene also runs on the author's homepage at
<https://jemappellehuong.com/trangvien.html>. This repository exists to make the
**boundary of the work precise**: one author, four third-party components fully
inventoried, and not a single file that anyone else co-owns.

The Zenodo–GitHub link archives at **repository** level: on each release, Zenodo
takes a snapshot of the whole file tree and mints a DOI for that snapshot.
Archiving from the homepage repository would therefore sweep in twenty music
recordings and forty other pages — material that is not part of this work.

Three things were deliberately left out:

- **A fifteen-second excerpt of «Mekong Sunfire».** Signal cross-correlation
  against the full recording scored **0.9996** at second 181, against a noise
  floor of 0.0089 — it is a verbatim excerpt of a recording **jointly owned**
  with Phan Anh Tú. Keeping it would make the archived work dual-authored.
- **The shared music library**, trimmed from 34 tracks to the two ambient pieces
  that belong to the estate; the original list included ten jointly owned tracks.
- **Three songs and the ecosystem deck** — separate works with their own records.
  The music panel links to the homepage instead of embedding the files.

Changes to the scene must be made **in both repositories in the same sitting**.
That rule was learned the hard way: the two copies of the author's research
office drifted apart for three weeks before the divergence was noticed.

---

## Inside the estate

<details>
<summary><b>Eight zones, no two alike</b></summary>

No zone reads the same as another from a distance. The enclosure may be a ring,
three straight sides with an opening, or absent altogether; and each zone carries
a distinct **vertical landmark** — a square tower, an A-frame, a raised stilt
roof, a stage arch, a flagpole, a lantern row, a mast. The vertical is what reads
from furthest away, because it is what cuts against the sky.

</details>

<details>
<summary><b>Four lighting states</b></summary>

Morning, afternoon, night and a noir mode. The measure that matters is the
**ratio of fill light to key light**, held near 0.31 for the two daytime states —
enough for form to show without the scene going flat. The shadow frame follows
the view rather than sitting under the character's feet, so distant geometry in
shot keeps its shadows.

</details>

<details>
<summary><b>Survey camera</b></summary>

Press `C`. The camera leaves the character and orbits the estate at a radius of
104 on a 20° lens. Three things change with it, or the frame breaks: the shadow
frame widens, the fog pushes back, and the clouds are removed — otherwise a cloud
drifts across the lens and covers half the shot.

</details>

<details>
<summary><b>The sampan stays on the river</b></summary>

Whether a point lies on water is tested against the polygon of the water surface
itself, not against a copied formula. The sampan launches into mid-channel rather
than at the nearest water, and on touching a bank it steers off gradually to run
along it.

</details>

<details>
<summary><b>Five gameplay modules</b></summary>

Achievements, side quests, a play loop, a mini-game and a story quest. All five
build their text in JavaScript and **read the language at the moment of
painting**, so a visitor who switches language mid-session sees the open panel
redrawn correctly.

</details>

---

## Running it locally

```bash
python3 -m http.server 8000     # then open http://127.0.0.1:8000/
```

Opening `index.html` directly works too, but the service worker only registers
when the files are served over HTTP.

---

## Third-party components

three.js r128 and its GLTFLoader (MIT) · three Kenney Nature Kit palm models
(CC0) · the tower scene, derived from ThreeUI by Meng To (MIT) · the Baloo 2 and
Be Vietnam Pro typefaces (SIL OFL 1.1). The full inventory, with sources and the
extent of any modification, is in [`THIRD-PARTY.md`](THIRD-PARTY.md).

## Licence and citation

Copyright © 2026 Đỗ Thùy Hương. All rights reserved — see [`LICENSE`](LICENSE).
The work is published so that it can be **read, consulted and cited**; it is not
released under an open licence. Citation metadata is in
[`CITATION.cff`](CITATION.cff).

---

<div align="center">
<sub>Đỗ Thùy Hương · PhD candidate, School of Economics, Can Tho University<br>
<a href="https://jemappellehuong.com/">jemappellehuong.com</a> ·
<a href="https://orcid.org/0000-0002-7711-2487">ORCID</a> ·
contact@jemappellehuong.com</sub>
</div>
