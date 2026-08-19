# Ken Yeang in the Desert
## Translating bioclimatic/ecological architecture from the humid tropics to hot-arid Riyadh

Research + synthesis for the Riyadh supertall proposal (Burj Fitrah).
Prepared: 19 August 2026. Status: **working document, written incrementally.**

---

## 0. How to read this document

Three labels are used throughout, and they are not interchangeable:

- **[VERIFIED]** — sourced, with a URL. The number is as the source states it.
- **[SYNTHESIS]** — my own reasoning or calculation from verified inputs. Not a citation. Arguable.
- **[UNVERIFIED]** — I believe this to be true or have seen it asserted, but I could not confirm it with a source in this session. **Do not put these in a client-facing document without checking.**

**Research constraint, stated honestly:** the web-search budget for this session was exhausted partway through. Later research was done by direct page fetches on known URLs only, which is a much blunter instrument. That means several items I would normally have nailed down are marked UNVERIFIED below, and the "further work" list at the end is longer than it should be. The climate data, the psychrometric analysis and the core synthesis are solid. The precedent performance figures are patchier.

---

# PART A — RESEARCH

## A1. Riyadh climate: the actual numbers

This section matters most, because almost every argument later in the document turns on it.

### A1.1 Temperature and diurnal range

Mean daily maxima/minima, Riyadh (new station, 1991–2020 normals) **[VERIFIED]**
Source: https://en.wikipedia.org/wiki/Riyadh (table cites NOAA / Jeddah Regional Climate Center)

| Month | Mean daily max (°C) | Mean daily min (°C) | **Diurnal range (K)** | Mean RH (%) | Precip (mm) |
|---|---|---|---|---|---|
| Jan | 20.7 | 7.6 | 13.1 | 47 | 14.8 |
| Feb | 23.7 | 9.9 | 13.8 | 36 | 8.3 |
| Mar | 28.0 | 13.8 | 14.2 | 32 | 19.9 |
| Apr | 33.6 | 19.1 | 14.5 | 28 | 23.7 |
| May | 39.5 | 24.1 | 15.4 | 17 | 5.7 |
| Jun | 42.8 | 26.1 | 16.7 | 11 | 0.0 |
| Jul | **43.9** | **27.3** | 16.6 | **10** | 0.0 |
| Aug | 43.8 | 27.0 | 16.8 | 12 | 0.0 |
| Sep | 40.9 | 23.7 | 17.2 | 14 | 0.0 |
| Oct | 35.5 | 18.9 | 16.6 | 20 | 1.5 |
| Nov | 27.4 | 13.6 | 13.8 | 36 | 20.1 |
| Dec | 22.3 | 9.1 | 13.2 | 45 | 13.5 |

Diurnal range column is my arithmetic on the sourced max/min **[SYNTHESIS]**.

Records **[VERIFIED]**, same source: record high 48.8 °C (August, new station); record low −5.4 °C (January, new station). Annual precipitation 99.9–107.6 mm. Annual mean sunshine 3,224.8 h (old station).

### A1.2 The single most important finding in this document

**Riyadh's summer diurnal swing is about 16–17 K, not the 20–25 K of desert folklore — and, decisively, the mean July night-time minimum is 27.3 °C.** **[VERIFIED from the table above]**

**[SYNTHESIS]** This breaks the reflexive "desert equals thermal mass plus night purge" assumption, and it needs to be said to the team early, because a lot of hot-arid design rhetoric silently assumes cold desert nights.

- A night-purge strategy needs outdoor air meaningfully below the target internal set-point (say 24 °C) for enough hours to re-charge the mass. In Riyadh, mean July/August nights sit at 27 °C. There is no free cooling available at night in peak summer. Night purge in July with 27 °C air actively *heats* a structure you have held at 24 °C.
- The same strategy is **excellent** from roughly October to April, when night minima run 7.6–19.1 °C against daytime maxima of 20.7–33.6 °C. That is a 13–15 K swing straddling the comfort band — textbook mass-and-night-purge territory.
- So: **night purge and exposed thermal mass are a seven-to-eight-month strategy in Riyadh, not a twelve-month one.** They should be designed as a seasonal mode with a mechanical lockout in June–September, not sold as a peak-summer solution. Claiming otherwise in a tender is the kind of thing a good technical reviewer will catch.

### A1.3 Solar and wind

NASA POWER climatology, 24.713 N / 46.675 E, elev. 614 m **[VERIFIED]**
Source: https://power.larc.nasa.gov/api/temporal/climatology/point?parameters=ALLSKY_SFC_SW_DWN,ALLSKY_SFC_SW_DNI,T2M_MAX,T2M_MIN,T2M,RH2M,WS10M&community=RE&longitude=46.675&latitude=24.713&format=JSON

- **GHI (all-sky global horizontal): 6.21 kWh/m²/day annual mean** → ~2,267 kWh/m²/yr **[SYNTHESIS: 6.21 × 365]**. Monthly range 4.18 (Dec) to 7.98 (Jun).
- **DNI (direct normal): 5.28 kWh/m²/day annual mean** → ~1,927 kWh/m²/yr **[SYNTHESIS]**. Monthly range 4.47 (Apr) to 6.11 (Jun).
- **Wind speed at 10 m: 3.91 m/s annual mean**, monthly 3.30 (Oct) to 4.38 (Jul). Notably flat year-round.
- NASA POWER relative humidity at 2 m: annual mean 24.3%, June low 10.9%. Corroborates the Wikipedia/NOAA RH column.

**Note on NASA POWER T2M_MAX/T2M_MIN:** these are record extremes over the dataset period (47.5 °C / −2.78 °C), **not** mean daily maxima. Do not mix them with the table in A1.1. Flagging because this is an easy and embarrassing error to make in a tender document.

**[SYNTHESIS] Reading of the solar data:** the DNI/GHI ratio is high but not extreme — the diffuse fraction is significant, which is consistent with a persistently dusty atmosphere. Two consequences: (a) external shading must control diffuse sky radiation and ground-reflected radiation, not only direct beam, so a pure beam-tracking louvre logic will under-perform; (b) concentrating solar technologies are less attractive here than flat-plate PV. Ground reflectance off pale desert and paving is a real load on the lower floors and on any upward-facing soffit.

**Prevailing wind direction: [UNVERIFIED].** I could not retrieve a Riyadh wind rose. The regional literature points to a dominant north-to-northwesterly (the *shamal*), with a southerly component in some seasons. **This must be confirmed from a proper source (ASHRAE IWEC2 / TMYx file for OERK King Khalid Intl, or Saudi NCM) before any wind-driven design move is committed.** Any natural-ventilation or wind-scoop geometry depends entirely on it.

### A1.4 Dust

**[VERIFIED]** The *shamal* is a northwesterly wind over Iraq and the Persian Gulf, occurring from once to several times a year, mostly in summer but sometimes winter; velocities up to 70 km/h; events typically last three to five days; it generates large sandstorms with a dust column several thousand feet deep, cutting visibility and grounding flights. It affects Saudi Arabia and Kuwait as well as Iraq.
Source: https://en.wikipedia.org/wiki/Shamal_(wind)

**[UNVERIFIED]** Riyadh-specific dust-day counts per year, PM10 concentrations, and PV soiling-loss percentages. I have seen figures cited in the literature but could not confirm any in this session. **Do not quote a dust-day number until it is sourced.** This is a genuine gap, and it matters, because dust is the main argument against several otherwise attractive strategies (see B3, B5).

### A1.5 ASHRAE design conditions

**[UNVERIFIED]** — could not retrieve. The team needs the ASHRAE Handbook of Fundamentals climatic design conditions for **OERK, King Khalid International Airport, Riyadh**: 0.4% and 1% cooling dry-bulb with mean coincident wet-bulb, the 0.4% evaporation wet-bulb, and the 99.6% heating dry-bulb. These are the numbers the MEP engineer will actually size to, and the psychrometric argument in A1.6 should be re-run against them.

**[SYNTHESIS]** As a placeholder only: the 0.4% cooling dry-bulb for Riyadh will sit somewhere near 45–46 °C, above the 43.9 °C mean daily maximum for July. Treat as an order-of-magnitude expectation, not a design input.

### A1.6 Psychrometrics: the evaporative cooling case

This is the strongest quantitative finding for the design, and it is the point where Riyadh separates decisively from both Yeang's home climate and the coastal Gulf.

**[SYNTHESIS — my own calculation.]** Wet-bulb temperatures computed with the Stull (2011) empirical approximation from the verified dry-bulb and RH data above. Direct evaporative cooler (DEC) supply temperatures shown at 85% and 70% saturation efficiency. 85% is representative of good aspen/cellulose media per https://en.wikipedia.org/wiki/Evaporative_cooler; 70% is a conservative allowance for a dust-fouled, imperfectly maintained real-world installation.

| Condition | Tdb (°C) | RH (%) | **Twb (°C)** | **WB depression (K)** | DEC @85% | DEC @70% |
|---|---|---|---|---|---|---|
| Riyadh July mean daily max | 43.9 | 10 | 20.8 | **23.1** | 24.2 | 27.7 |
| Riyadh July max, afternoon low RH | 43.9 | 8 | 19.6 | **24.3** | 23.3 | 26.9 |
| Riyadh July max, RH 15% | 43.9 | 15 | 23.2 | 20.7 | 26.3 | 29.4 |
| Riyadh Aug mean daily max | 43.8 | 12 | 21.7 | 22.1 | 25.1 | 28.4 |
| Riyadh extreme 48 °C | 48.0 | 8 | 21.9 | **26.1** | 25.8 | 29.7 |
| Riyadh July night | 27.3 | 25 | 15.3 | 12.0 | 17.1 | 18.9 |
| Riyadh Oct max | 35.5 | 20 | 19.6 | 15.9 | 22.0 | 24.4 |
| **Abu Dhabi/Dubai Aug (coastal Gulf)** | 41.0 | 50 | 31.8 | **9.2** | 33.1 | 34.5 |
| **Kuala Lumpur (Yeang's climate)** | 33.0 | 70 | 28.4 | **4.6** | 29.1 | 29.8 |
| **Singapore** | 32.0 | 75 | 28.3 | **3.7** | 28.8 | 29.4 |

**[SYNTHESIS] What this table means, and it is worth spelling out to the team:**

1. **At the hottest hour of the Riyadh year, the wet-bulb temperature is about 20–22 °C.** The air is thermodynamically *cold*; it is only sensibly hot. There is a 23–26 K reservoir of cooling available for the price of water alone.
2. **A simple direct evaporative stage delivers ~24–28 °C air at peak summer conditions.** That is not full comfort for a sedentary office occupant, but for a *shaded, transient, semi-outdoor space* — a sky court, a lobby, a terrace, a transfer level — combined with air movement and a low mean radiant temperature, it is comfortably habitable. Peak outdoor is 44 °C; 26 °C shaded and evaporatively cooled is a transformation.
3. **This does not work in Yeang's own climate.** Kuala Lumpur has a 4.6 K wet-bulb depression; Singapore 3.7 K. Evaporative cooling is essentially useless there. Yeang therefore never had this tool, and its absence shapes his entire strategy set — he must rely on shade plus air movement plus vegetation, because that is all the humid tropics offer.
4. **Critically, it does not work well in the coastal Gulf either.** Abu Dhabi in August has a 9.2 K depression. **Riyadh is not Dubai.** This is the most useful single point in the document for the team: precedents imported wholesale from Dubai or Abu Dhabi are being drawn from a fundamentally different psychrometric climate. Riyadh's inland, high-altitude (614 m), extremely dry air is a *better* climate for passive and semi-passive cooling than the Gulf coast, and we should say so.
5. The counter-argument is water, and it is a serious one. See A4 and B4.

---

## A2. Did Ken Yeang ever address hot-arid climates?

**Status: research in progress at time of writing. A dedicated research thread is running on this question; findings will be appended.**

### A2.1 What is established so far

**[VERIFIED]** Yeang's project list includes work in **Saudi Arabia (Jabal Omar Towers, Mecca)** and **Kuwait (Al-Asima)**, and locations listed include **Dubai**. His completed and best-known work is overwhelmingly in the humid tropics: Roof-Roof House (Selangor, 1985), Menara Mesiniaga (Subang Jaya, 1992), MBF Tower (Penang, 1993), TTDI Towers (KL, 1996), National Library Singapore (2005), Solaris (Singapore, 2010), Ganendra Art House (2010), DiGi Data Centre, LGT Hijauan Towers (2018), plus Great Ormond Street Hospital extension (London, 2011) and Spire Edge Tower (Gurgaon, India).
Source: https://en.wikipedia.org/wiki/Ken_Yeang

**[VERIFIED]** His stated approach includes: bioclimatic design ("climate-responsive, passive, and low-energy strategies"); **eco-mimicry** ("designing buildings and cities as constructed ecosystems that reflect ecological processes"); **vertical green urbanism** ("sky gardens, naturally ventilated atria, and green infrastructure"); and **eco-infrastructure integration** using "eco cells," "eco bridges," and "eco undercrofts." Same source.

**[VERIFIED]** He received the Aga Khan Award for Architecture in 1995 for Menara Mesiniaga. Source: https://en.wikipedia.org/wiki/Menara_Mesiniaga

### A2.2 The provisional finding

**[SYNTHESIS, pending confirmation]** The significant point is this: **Yeang has Gulf and hot-arid commissions on his list (Mecca, Kuwait, Dubai), but no published climate-specific strategy for them that I have yet found.** If that holds up, it is exactly the gap our proposal should occupy. We would not be misapplying Yeang to a climate he solved; we would be extending his method into a climate he named but did not develop. That is a much stronger and more honest rhetorical position than "Yeang did it, so we will do it here."

**Open question for the research thread:** does *Ecodesign: A Manual for Ecological Design* or *The Green Skyscraper* contain climate-zone-differentiated guidance separating hot-arid from hot-humid? Yeang's method derives from Olgyay's bioclimatic chart, which *is* zone-differentiated, so there is a reasonable chance the apparatus exists in the books even if it is absent from the built work. **[UNVERIFIED — to be resolved.]**

---

## A3. The hot-arid canon

*(Section in progress — see notes below; to be expanded.)*

### A3.1 Hassan Fathy

**[VERIFIED]** Fathy used "dense brick walls and traditional courtyard forms to provide passive cooling," revived the Nubian vault, and used "windcatchers and other passive cooling and passive ventilation methods from traditional architecture," plus *claustra* (mud latticework). His technical book is *Natural Energy and Vernacular Architecture* (1986); *Architecture for the Poor* (1973) documents New Gourna.
Source: https://en.wikipedia.org/wiki/Hassan_Fathy

**The honest critique of New Gourna [VERIFIED, same source]** — this matters because it is the standard cautionary tale and we should cite it ourselves rather than have it cited against us:
- Fathy himself described the project as a failure.
- **Social resistance:** inhabitants were not enthusiastic about relocating, which cut them off from their existing livelihood (trading in archaeological finds).
- **Incomplete construction**, which undermined confidence in the mud-brick method.
- **Bureaucracy**, which Fathy identified as a leading reason the experiment failed.
- Qualified rather than absolute failure: only ~40% of the original buildings have been lost, and the village persists under UNESCO attention.

**[SYNTHESIS]** The lesson for us is not "vernacular fails." It is that the *technical* case for passive design was never the thing that failed at New Gourna — the delivery model, the client relationship and the user buy-in failed. That is a project-governance warning, and it is directly relevant to a Riyadh megaproject.

**[UNVERIFIED]** Specific technical content I wanted and could not source this session: malqaf geometry and performance figures; the *salsabil* evaporative slab; the *shukhshaykha* lantern vent; and Fathy's enumeration of the distinct functions of the mashrabiya. Worth obtaining *Natural Energy and Vernacular Architecture* directly — it is the primary technical text and is available through UN University.

### A3.2 The mashrabiya

**[VERIFIED]** Functions: "control air flow, reduce the temperature of the air current, increase the humidity of the air current," and provide visual privacy. The lattice is graded — smaller lower openings slow air at body level while larger upper openings accelerate ventilation overhead. Water vessels placed inside enable evaporative cooling as air passes through. Projecting elements shade ground-floor windows and cool street-level air. Lattice patterns include hexagonal, cross-hatch, Kanaysi, Maymoni and Sahrigi. Regional variants: *rawshan/rowshin* (Jeddah, Hejaz, Al-Balad); *shanasheel* (Iraq/Basra); *takhrima* (Yemen); *barmaqli* (Tunisia).
Source: https://en.wikipedia.org/wiki/Mashrabiya

**[SYNTHESIS] This is the important one, and it is routinely missed.** The mashrabiya is not a sunshade with a pattern on it. It is a **five-function device**: solar control, air-speed modulation (graded porosity by height), *evaporative humidification*, glare control, and privacy. Contemporary "mashrabiya-inspired" façades in the Gulf — including Al Bahar — generally reproduce function one and function five and drop the middle three. If our tower claims mashrabiya lineage, we should be able to say which of the five functions our screen actually performs. Reproducing only the pattern is decoration, and a sophisticated jury will know it.

Note also the humidification function is *climatically specific*: adding moisture to the air stream is a benefit at 10% RH and a liability at 70%. This is a concrete instance of a vernacular device that works in Riyadh and would be actively harmful in Kuala Lumpur.

### A3.3 Windcatchers (malqaf / badgir)

**[VERIFIED]** Source: https://en.wikipedia.org/wiki/Windcatcher
- **Malqaf** (Egypt/Africa): short, wide right-triangular prisms, usually bidirectional and set in pairs; function best "if oriented within 10 degrees of wind direction"; commonly used with evaporative cooling fountains.
- **Badgir** (Iran/Persian Gulf): multisided towers, typically 4-sided, **up to 34 m tall**, closable in winter; prevalent in dust-storm regions and areas with extreme temperature swings.
- **Climate dependence:** "Wide malqafs are more often used in damper climates, where high-volume air flow is more important compared to evaporative cooling." In arid regions the value is in evaporative coupling.
- **Qanat coupling:** "The hot air brought down into the qanat tunnel is cooled by coming into contact with the water flow and the surrounding earth." Orientation reverses — the open side faces *away* from the prevailing wind, using the Coandă effect to draw air through subterranean passages.
- **Reported performance:** "Windcatchers can reduce temperature inside the house by 8 to 12 °C (14 to 22 °F) in comparison to the outdoor temperature"; a window windcatcher "can reduce the total energy use of a building by 23.3%."

**[SYNTHESIS] Two observations that bear on a supertall.**

First, the badgir at up to 34 m tall is, in effect, a *vertical* device already — it exists precisely because it needs to reach undisturbed, cooler, less dusty air above the urban canopy. A supertall tower is, trivially, 34 m tall many times over. The height that makes a tower problematic in most respects is here an *asset*: our upper levels sit permanently in the clean, faster, cooler air that a badgir has to be built to reach. This is a genuine and defensible bridge between the vernacular device and the tower typology, and I think it is the strongest single conceptual link available to us.

Second, the note that badgirs are "prevalent in dust-storm regions" is important and counter-intuitive: the vernacular did *not* abandon air intake because of dust. It elevated and controlled it. Dust is a filtration and maintenance problem, not a reason to seal the building.

### A3.4 Najdi architecture (Riyadh's own vernacular)

**[VERIFIED]** Source: https://en.wikipedia.org/wiki/Architecture_of_Saudi_Arabia
- Primary material: sun-dried mud brick and mud, structural and finish.
- **Exterior wall thickness approximately 80–100 cm.**
- Mud plaster applied with a wooden scraper, creating parallel surface patterns.
- The lower wall incorporates **four or five courses of cut limestone** against deterioration (rising damp / splash erosion).
- Typical dwelling: **two storeys around an open central courtyard**, courtyard geometric (rectangle or square), functioning as the climate-regulating core, providing ventilation and privacy.
- **The roof level is used for sleeping in summer.**

**[VERIFIED]** At-Turaif, Diriyah: structures "almost entirely of mud-brick," in "traditional central Arabian style." Source: https://en.wikipedia.org/wiki/Diriyah

**[SYNTHESIS] Read the 80–100 cm wall against the climate data in A1.1 and the strategy becomes legible.** A 0.8–1.0 m mud wall has a thermal time lag on the order of 10–12 hours. That is not insulation; it is *phase-shifting*. Peak external surface heating at 15:00 arrives at the internal surface around 02:00–03:00, by which time the occupants are on the roof and the courtyard is dumping cold air. The wall is tuned to the diurnal cycle, and it works precisely because 16 K of swing is available. The vernacular solved for the *shoulder seasons and the night*, and for peak summer it solved by **occupancy migration** — moving people to the roof — not by conditioning.

**This is the honest historical lesson, and it is uncomfortable for us:** Najdi vernacular did not make 44 °C afternoons comfortable indoors. It made nights comfortable and it made afternoons survivable. A supertall office/residential tower cannot rely on occupancy migration. So thermal mass in our project is a *load-shifting and peak-shaving* device, not a comfort-delivery device. That framing is defensible and technically true; "we cool the building with thermal mass like the old city did" is not.

**[UNVERIFIED]** Roof construction (tamarisk / palm trunk joists), window-to-wall ratios, courtyard proportional rules, the triangular parapet motifs and their function (if any) beyond ornament, and the technical content of the contemporary **Salmani** style. All worth pursuing — the Salmani style in particular, since it is state-endorsed and a Riyadh jury will know it.

### A3.5 Rasem Badran and Abdel-Wahed El-Wakil

**[VERIFIED]** Badran's Qasr Al-Hokm district redevelopment in Riyadh (completed 1992, for the Arriyadh Development Authority) included the Great Mosque of Riyadh; he won the **Aga Khan Award for Architecture (1993–1995 cycle)** for it. Other works: Abu Dhabi Courts Complex, King Abdul Aziz Historical Centre, Mövenpick Resort Petra. His methodology emphasises "a continuous dialogue between contemporary needs and historical inherited cultural values." He received Saudi citizenship in 2022; Tamayouz Lifetime Achievement Award 2019.
Source: https://en.wikipedia.org/wiki/Rasem_Badran

**[SYNTHESIS]** Badran is the single most important precedent for us politically as well as architecturally: he is the architect who demonstrated, *in Riyadh, on the most symbolically loaded site in the city*, that Najdi vernacular could be scaled into contemporary civic architecture without becoming pastiche. Any Riyadh proposal that invokes local climate-responsive tradition and does not know Qasr Al-Hokm will look uninformed.

**[UNVERIFIED]** Badran's explicit *climatic* reasoning (as opposed to his cultural-contextual reasoning) — I could not source a technical account. Also **[UNVERIFIED]**: El-Wakil's Saudi mosques (King Saud Mosque, Corniche Mosque, Island Mosque, Jeddah), his load-bearing masonry method and Aga Khan Awards. Both need proper sourcing; ArchNet and the Aga Khan Trust archive are the right places.

---

## A4. Water, planting, and whether vertical landscape is defensible here

### A4.1 The Saudi water context

**[VERIFIED]** Source: https://en.wikipedia.org/wiki/Water_supply_and_sanitation_in_Saudi_Arabia
- **~50% of drinking water from desalination, ~40% from mining non-renewable groundwater, ~10% surface water.**
- Average urban use **~235 litres/person/day**.
- **25% of Saudi oil and gas production is directed to cogeneration power-desalination plants**, with projections suggesting this could reach 50% by 2030.
- **Riyadh receives desalinated water pumped 467 km** from the Gulf (Jubail II).
- **Treated sewage effluent is already used at scale in Riyadh: 50 million m³/yr pumped over 40 km and 60 m of elevation to irrigate 15,000 ha** of wheat, fodder, orchards and palms. The National Water Company's Treated Sewage Effluent Initiative had signed agreements worth over SAR 5 billion by 2011.
- **Groundwater depletion:** one estimate holds that by 2012 about **80% of the ~500 billion m³** originally in the principal aquifers had been extracted.

**[SYNTHESIS] The 467 km pumping distance and the 25%-of-hydrocarbon-production figure together are the real argument.** Water in Riyadh is not merely scarce; it is *energy*. Every litre is desalinated at the coast and lifted 600 m over 467 km of desert. Treating irrigation water as free, or as a separate budget from carbon, is not defensible in this city. Conversely — and this is the constructive half — **TSE is already an established, large-scale, institutionally normal irrigation source in Riyadh.** We are not proposing something exotic. We are proposing to connect to a system the city already runs.

### A4.2 Green Riyadh

**[VERIFIED, with a conflict]** Source: https://en.wikipedia.org/wiki/Green_Riyadh
- **7.2 million trees** across the city, using **72 local species adapted to Riyadh's climate**.
- Irrigation: **~90,000 m³/day currently, projected to ~1 million m³/day at completion.**
- Established 19 March 2019.
- Trees distributed across schools, car parks, government facilities, healthcare sites, universities, parks, mosques and roads.
- King Salman Park is a related component.

**Conflicts and cautions — please read before quoting any of this:**
- The brief cited **7.5 million** trees; this source says **7.2 million**. **[UNVERIFIED which is current]** — official programme figures have been restated more than once. Check the Royal Commission for Riyadh City directly before using either.
- The source states a budget of **US$32 million**, which is **[UNVERIFIED and almost certainly wrong]** — it is implausibly low by orders of magnitude for a programme of this scale. Do not quote it.
- The irrigation source is described only as a "sustainable irrigation system." **[UNVERIFIED]** that it is TSE, though given A4.1 that is overwhelmingly likely. Confirm before stating it.
- **[SYNTHESIS]** The projected ~1 million m³/day figure deserves scrutiny — it is a very large number relative to Riyadh's total municipal supply. Either it is an error, or it reflects a genuinely enormous TSE reuse commitment. Either way it is not something to cite without checking, and if it *is* correct it is a striking data point about the water intensity of urban greening in this climate.

**[SYNTHESIS] The strategic point stands regardless of which figure is right:** the Saudi state has committed publicly and at scale to urban greening in Riyadh using non-potable water and native species. A vertical-landscape proposal is therefore *aligned with declared national policy*, which is a strong position — provided it uses the same water source (TSE) and the same palette logic (native/adapted species) rather than importing a tropical green-wall aesthetic. The programme's own choice of **72 local species** is the precedent to follow.

### A4.3 Xeric planting palette

**[UNVERIFIED]** I could not source the actual Green Riyadh species list, or per-species water demand figures, in this session. The candidate natives commonly named in the regional literature — *Ziziphus spina-christi* (sidr), *Vachellia/Acacia gerrardii*, *Phoenix dactylifera*, *Prosopis*, *Moringa peregrina*, *Calligonum*, *Haloxylon* — are plausible but **unconfirmed here**. **The 72-species Green Riyadh list should be obtained; it is the authoritative palette and using it is both technically and politically correct.**

**[UNVERIFIED]** Published ET₀-based irrigation demand (litres/m²/day) for Riyadh landscaping. This is the number that decides whether vertical planting is affordable, and I could not get it. **Highest-priority outstanding data item in this document.**

### A4.4 Green walls: the critical case

**[VERIFIED, thin]** The only limitation sourced: mat-media systems "cannot support vibrant root systems of mature plants for more than three to five years before the roots overtake the mat and water is not able to adequately wick through." Also noted: "conflicting meta-analysis studies show minimal correlation between living walls and greywater treatment."
Source: https://en.wikipedia.org/wiki/Green_wall

**[UNVERIFIED]** Irrigation demand per m², maintenance costs, mortality rates, whole-life carbon analyses, and named failures of green walls in hot climates. The available general source is notably uncritical. **The critique literature exists and should be obtained** — it is the first thing a hostile reviewer will reach for.

**[SYNTHESIS] My assessment, stated plainly because the team needs a position:** a continuous Yeang-style vegetated façade is **not defensible in Riyadh**, for four reasons that compound.
1. **Water.** Evapotranspiration scales with the vapour-pressure deficit, and Riyadh in July has an extreme VPD — 44 °C at 10% RH. A plant on an exposed façade transpires furiously or dies. The same low humidity that makes evaporative cooling so effective (A1.6) makes unshaded planting ruinously thirsty. **These are the same physics pointing in opposite directions**, and that tension is the central design problem of the landscape strategy.
2. **Wind.** At supertall heights, wind speed and desiccation increase; the plant's water stress rises with elevation exactly as access for maintenance worsens.
3. **Dust.** *Shamal* events several times a year, lasting three to five days, coat foliage; dust on leaves blocks stomata and photosynthesis and demands washing — more water.
4. **Solar.** ~2,267 kWh/m²/yr GHI with a high diffuse fraction means there is no genuinely shaded façade orientation for a plant to hide on without deliberate architectural shading.

The defensible inversion is set out in Part B.

---

# PART B — SYNTHESIS: transfer, invert, discard

**Everything in Part B is [SYNTHESIS]** — my reasoning from the verified inputs above. It is intended to be argued with.

*(Section drafted below; to be refined as remaining research lands.)*

## B1. TRANSFERS INTACT

**1. The passive-first hierarchy.** Yeang's core discipline — exhaust passive means before mechanical ones, and treat mechanical systems as the remainder rather than the starting point — is climate-independent. It is a *method*, not a technique. It transfers wholly. In Riyadh it arguably transfers with more force than in the tropics, because the gap between an unmitigated and a well-mitigated building is larger here: the cooling load reduction available from shading alone is greater at 2,267 kWh/m²/yr than at tropical insolation levels with heavy cloud cover.

**2. Service core as solar buffer — transfers, and strengthens.** This is Yeang's most portable single move: place cores, lifts, stairs, plant and WCs on the hot east and west façades so that the served, occupied space faces the benign orientations. In Riyadh this is *more* valuable than in Malaysia, not less. At 24.7° N the sun is high at midday but the punishing loads are low-altitude morning and afternoon beam radiation on east and west façades, which is precisely what a deep buffer defeats and what a horizontal louvre cannot. A double-loaded east/west core also naturally produces the elongated north-south-facing plan that hot-arid design wants. **This should be a headline move in the proposal.**

**3. Naturally ventilated / unconditioned circulation and service spaces.** Yeang habitually leaves lift lobbies, stairs and WCs unconditioned and daylit. In Riyadh this both cuts conditioned volume and — critically — creates a *thermal gradient* from outside to core, so occupants acclimatise across a sequence rather than stepping from 44 °C to 22 °C. Adaptive-comfort logic supports wider set-points in transitional spaces. Transfers directly.

**4. Vertical circulation of the ecological argument — "eco-cells", "eco-bridges", "eco-undercrofts", continuity of habitat.** The *principle* that a tower should not sever ecological continuity from ground to sky transfers. What changes is what the habitat consists of (see B2.2). Riyadh sits on a genuine, distinctive arid ecology — wadi systems, *Acacia*/*Ziziphus* associations — and a tower that reconstructs *that* ecology vertically is doing exactly what Yeang argues for, in a locally truthful way.

**5. Ecomimesis / the building as constructed ecosystem, and the four-infrastructure framing (green/blue/grey/red).** A conceptual and organisational framework, not a climatic technique. Transfers. It is also, usefully, the frame in which the water argument (A4) can be handled honestly rather than avoided: in Riyadh the *blue* infrastructure is the binding constraint, and saying so openly using Yeang's own vocabulary is a strong move.

## B2. REQUIRES INVERSION

**1. Dense vertical planting → sparse, shaded, xeric, water-budgeted pockets.**
Yeang's tropical façades can carry continuous vegetation because rainfall is abundant, humidity is high and VPD is low. Riyadh inverts every one of those. The inversion is: **plant *in* the building's shade rather than *on* its exposed skin.** Concentrate planting in deeply recessed, self-shaded sky courts and in the lower/undercroft levels; use the tower's own mass to create the shaded microclimate the plants need; irrigate from TSE, not potable; select from the Green Riyadh 72-species list; and *publish the water budget* rather than hiding it. Density of planting should decrease with height as wind and desiccation increase — the opposite of the visually appealing "green all the way up" image. Less planting, better placed, honestly costed.

**2. Continuous cross-ventilation → seasonal mixed-mode with a summer lockout.**
Yeang's naturally ventilated atria assume outdoor air is usable most of the year. In Riyadh outdoor air is usable roughly **October to April** (A1.1). The inversion is a genuinely seasonal building: natural ventilation and night purge in the cool two-thirds of the year, sealed and mechanically conditioned in June–September, with the control logic and the façade hardware designed for that switch. This is a *stronger* claim than year-round natural ventilation because it is true, and it is verifiable against the climate file.

**3. Night purge → night purge only outside peak summer; thermal mass re-cast as load-shifting.**
See A1.2 and A3.4. The mean July night is 27.3 °C. Exposed mass plus night purge is a shoulder-season comfort strategy and a summer *peak-shaving* strategy (pre-cooling mass off-peak, discharging through the afternoon demand peak), not a summer comfort strategy. Both are valuable; they are different claims and should be stated separately.

**4. Open sky courts → shaded, enclosable, evaporatively cooled sky courts.**
This is where the psychrometric finding (A1.6) becomes architecture. Yeang's sky court is an open void catching breeze. The Riyadh inversion is a sky court that is **roofed or deeply overshadowed, screened against dust and *shamal*, and served by a direct evaporative stage** delivering ~24–28 °C air at peak. Combined with a low mean radiant temperature from shaded mass surfaces and gentle air movement, this makes a genuinely usable semi-outdoor room at the hottest hour of the year — something Yeang could never achieve in Kuala Lumpur, where the wet-bulb depression is 4.6 K. **The sky court is not weakened by the desert; it is enabled by it, once inverted.** Water cost must be quantified and offset against the chiller energy displaced.

**5. Shade-without-mass → shade-with-mass.**
Yeang's tropical detailing is light: deep shades, thin skins, high porosity, minimal mass, because in a low-swing humid climate mass has nothing to phase-shift and traps heat overnight. Riyadh has 16–17 K of swing and cold winters, so **mass earns its place**. The inversion is towards heavier, more enclosed, smaller-aperture construction — closer to Najdi 80–100 cm logic than to a tropical brise-soleil. Practically this means high thermal mass on internal surfaces, insulation *outboard* of the mass, low window-to-wall ratio, and deeply recessed openings.

**6. Mashrabiya as pattern → mashrabiya as five-function device.**
Per A3.2. If we invoke the mashrabiya, our screen should demonstrably do more than shade and decorate: graded porosity to modulate air speed by height, integration with the evaporative stage to exploit the humidification function, glare control, and privacy. Otherwise we are doing what Al Bahar is criticised for.

## B3. DOES NOT APPLY / SHOULD BE DISCARDED

**1. Rainwater harvesting as a primary water strategy.** ~100 mm/yr, effectively zero from June to September (A1.1). It is a gesture here, not a system. Retain only for episodic flash-flood management and let TSE carry the irrigation load. Claiming a meaningful rainwater contribution in Riyadh invites ridicule.

**2. High façade porosity / permanently open façades.** Dust (*shamal*, three-to-five-day events, several times a year), 44 °C summer air, and security/wind constraints at supertall height together kill the permanently porous skin. Openings must be controllable and filterable.

**3. Continuous vegetated façade as the signature image.** Discard as a *primary* image. See B2.1. The "vertical forest" motif transplanted to Riyadh is the single most attackable element of a Yeang-derived proposal and we should not lead with it.

**4. Cross-ventilation driven by reliable prevailing breeze.** Mean wind speed is a modest 3.91 m/s and the prevailing direction is currently **[UNVERIFIED]**. Unlike a coastal site with a dependable sea breeze, Riyadh offers no reliable diurnal wind resource to design a ventilation concept around. Stack and buoyancy effects — which a supertall generates in abundance — are the more dependable driver here. **[SYNTHESIS]**

**5. Humidity-shedding detailing.** Yeang's tropical concerns — mould, condensation, rain penetration, timber decay, deep overhangs against driving rain — are largely irrelevant at 10–47% RH and 100 mm/yr. Design attention should be redeployed to dust ingress, thermal movement across a large diurnal and seasonal range, and UV degradation.

---


# PART C — The embodied-carbon objection, answered honestly

*Companion to `05-hot-arid-riyadh-translation.md` (Parts A and B). To be merged into that file.*
Prepared 19 August 2026.

**Labels as in Parts A/B:** **[VERIFIED]** = sourced with URL. **[SYNTHESIS]** = my own reasoning or calculation. **[UNVERIFIED]** = asserted but not confirmed this session; do not use client-facing without checking.

**Research constraint:** the session web-search budget was exhausted before this Part was researched. Everything below was obtained by direct page fetch on guessable URLs. That is a blunt instrument, and it particularly hurt items 2 and 4 (Saudi supply chain, published Gulf WLCAs), where the sources I most wanted are industry reports and EPD databases that are not reachable by guessing URLs. **The gaps in this Part are larger than in Parts A and B. I have flagged them rather than papering over them.**

---

## C0. The verdict first

**[SYNTHESIS] The objection largely stands. I could not construct an honest rebuttal, and the team should go in knowing that.**

Specifically:
- A supertall's upfront embodied carbon, on the only quantities I could source for a real supertall, is **several times** the strictest published regulatory cap, and **the concrete alone exceeds that cap before a single kilogram of steel, façade, or fit-out is counted**.
- The best available material substitutions cut roughly a quarter to a third of the concrete figure. They do not change its order of magnitude.
- Operational savings from excellent bioclimatic design take **on the order of a decade or more** to offset the structural carbon, and that is on optimistic assumptions.
- **No Gulf tower that I could find has published a whole-life carbon assessment.** That absence is itself the most telling finding in this Part.

The two defensible responses — and, I think, the only two — are set out in C5. Neither of them is "our tower is low-carbon."

---

## C1. The scale of the problem

### C1.1 Baseline figures

**[VERIFIED]** Embodied carbon of buildings is estimated to account for **11% of global carbon emissions and 75% of a building's emissions over its entire lifecycle**. The World Green Building Council target for new construction is **at least 40% less embodied carbon** than baseline. **Toronto's 2023 requirement limits upfront embodied intensity to below 350 kgCO₂e/m².**
Source: https://en.wikipedia.org/wiki/Embodied_carbon

**[SYNTHESIS] Note the 75% figure carefully, because it is the crux.** As operational energy decarbonises — through better design, better plant, and above all a greening grid — embodied carbon becomes the dominant share of a building's lifetime emissions. Oldfield's argument is essentially that supertalls sit at the far end of this curve: they are the building type with the highest material intensity per m² *and* they are being built precisely when the operational half of the equation is shrinking. The "we will offset it with efficiency" defence is weakening every year, not strengthening.

### C1.2 Concrete and cement

**[VERIFIED]** Source: https://en.wikipedia.org/wiki/Environmental_impact_of_concrete
- Concrete accounts for **4–8% of total global CO₂ emissions**; the cement industry alone up to 8% of worldwide man-made CO₂.
- **~900 kg CO₂ per tonne of cement**, accounting for **88% of the emissions of an average concrete mix**.
- Emissions split: **~50% from the chemical calcination process, ~40% from fuel combustion.** This is the key structural fact — half of cement's carbon is released by the chemistry of turning limestone into clinker and cannot be abated by clean energy alone.
- Structural concrete (~14% cement): **~410 kg CO₂/m³** (~180 kg/tonne at 2.3 g/cm³).
- **With 30% fly ash replacement: 290 kg CO₂/m³**, roughly a **29% reduction**.
- Rule of thumb: 1% cement replacement with fly ash ≈ 0.7% energy reduction.

### C1.3 What that means for a real supertall

**[SYNTHESIS — my calculation. Inputs sourced; steel emission factors are NOT and are shown as a labelled range.]**

Published construction quantities for Burj Khalifa **[VERIFIED]** (https://en.wikipedia.org/wiki/Burj_Khalifa):
- **330,000 m³** concrete
- **55,000 tonnes** steel rebar
- **4,000+ tonnes** structural steel in the spire, plus 350 t central pinnacle pipe

GFA taken as **309,473 m²** — **[UNVERIFIED]**, widely quoted but not confirmed by me this session. All per-m² figures below scale inversely with this number, so confirm it before using them.

**Concrete only, using the sourced 410 / 290 kg CO₂/m³ factors:**

| Mix | Total | Per m² GFA |
|---|---|---|
| Baseline structural concrete | **135,300 tCO₂** | **437 kgCO₂/m²** |
| With 30% fly ash | **95,700 tCO₂** | **309 kgCO₂/m²** |
| Saving | 39,600 tCO₂ | 29% |

**The concrete alone, at a baseline mix, is 437 kgCO₂/m² — already above Toronto's 350 kgCO₂e/m² cap for the *entire* upfront embodied carbon of a building.** With aggressive fly ash substitution it falls to 309 kgCO₂/m², which still consumes 88% of the whole cap on the structural frame's concrete alone.

**Adding steel** (59,350 t total). I have **no sourced emission factor** for rebar, so this is an illustrative range only, **[UNVERIFIED EFs]**: 0.7 tCO₂/t (EAF/recycled route) to 2.0 tCO₂/t (primary blast-furnace route) → **41,500 to 118,700 tCO₂**, i.e. **134 to 384 kgCO₂/m²**.

**Structural subtotal — concrete plus steel, excluding façade, MEP, fit-out, foundations beyond the concrete already counted, and all construction-stage emissions:**

| | Total | Per m² GFA |
|---|---|---|
| Baseline concrete + steel range | 176,800 – 254,000 tCO₂ | **571 – 821 kgCO₂/m²** |
| 30% fly ash concrete + steel range | 137,200 – 214,400 tCO₂ | **443 – 693 kgCO₂/m²** |

**[SYNTHESIS]** So: **roughly 1.3× to 2.3× the strictest published cap, from the structure alone, with the best material substitution applied.** A full whole-life assessment including façade (very significant on a tower — a unitised curtain wall is aluminium- and glass-intensive), MEP, vertical transportation, fit-out and replacement cycles would push this materially higher.

### C1.4 The premium for height

**[UNVERIFIED — and this is a real gap.]** I could not source a published curve or rule of thumb for the structural material premium as a function of height. CTBUH is the obvious custodian of such data; its site redirected and then refused fetches in this session.

**[SYNTHESIS] The mechanism, however, is not in dispute and can be stated qualitatively without inventing numbers.** Above roughly 40–50 storeys the governing design case shifts from gravity to **lateral load** — wind, and in some regions seismic. Gravity structure scales roughly linearly with height; lateral structure does not, because overturning moment scales with roughly the square of height and the stiffness demand (drift and, critically for occupant comfort, acceleration) scales faster still. The consequences compound:
- More material in the lateral system (core walls, outriggers, belt trusses, megacolumns).
- Larger foundations to resist that overturning moment — Burj Khalifa's foundation alone used **over 45,000 m³ of concrete weighing more than 110,000 tonnes** across 192 deep piles **[VERIFIED, Wikipedia Burj Khalifa]**.
- Lower net-to-gross, as core, lifts and services consume a growing share of floor plate, so the *useful* area over which the carbon is amortised shrinks precisely as the carbon rises.
- Damping systems, higher-grade materials, and longer/more energy-intensive construction programmes.

**This is why "a tower is a dense, land-efficient building form, therefore it is sustainable" does not survive contact with the numbers above a certain height.** Density arguments hold well for mid-rise and for towers up to perhaps 30–40 storeys. They weaken above that and, on this evidence, reverse for supertalls. **We should not deploy the density argument for a 500 m tower; it is the weakest card in the deck and a knowledgeable critic will take it off us.**

**Action: obtain a sourced height-versus-embodied-carbon curve before the proposal is written.** CTBUH and Oldfield's own work are the places to look.

---

## C2. What is actually available in Saudi Arabia

### C2.1 The SCM supply problem — the central practical finding

**[VERIFIED]** The two workhorse SCMs are by-products of other heavy industries:
- **Fly ash** is "particulate matter expelled from coal-fired boilers." Typical replacement **up to 30% by mass** of Portland cement, up to 70% in specialised applications. Important caveat from the source: producing fly ash means burning coal, which "produces approximately 20 to 30 tons of CO₂ per ton of fly ash" — it is only low-carbon because it is a by-product already being made for another reason.
Source: https://en.wikipedia.org/wiki/Fly_ash
- **GGBS** is "obtained by quenching molten iron slag from a blast furnace." Replacement **30% to 85%**, with **40–50% used in most instances**.
Source: https://en.wikipedia.org/wiki/Ground_granulated_blast-furnace_slag

**[SYNTHESIS] Here is the problem, and it is specific to Saudi Arabia.** Both materials are downstream of industries the Kingdom has relatively little of:
- **Fly ash requires coal-fired power.** Saudi electricity generation is overwhelmingly oil- and gas-fired. **[UNVERIFIED but very likely]** there is negligible domestic fly ash production.
- **GGBS requires blast-furnace ironmaking.** Saudi steelmaking is, as far as I understand it, predominantly **direct reduced iron (DRI) feeding electric arc furnaces**, using natural gas — a route that produces **no blast-furnace slag**. I attempted to confirm SABIC/Hadeed's steelmaking route and the Wikipedia SABIC article does not address it. **[UNVERIFIED — but if correct, it means the Kingdom's own steel industry, despite being large, generates little or no GGBS.]**

**If both of those hold, then the 29% concrete carbon saving modelled in C1.3 depends on imported SCMs**, with the freight carbon and supply-security questions that implies. **This is the single most important thing to verify in this Part**, because the entire low-carbon-concrete story for a Saudi supertall rests on it.

**Action: confirm (a) Hadeed/Saudi steel production route (DRI-EAF vs BF-BOF), (b) whether GGBS is imported into the Kingdom and at what scale, (c) domestic fly ash availability, (d) whether natural pozzolans are being used instead — see below.**

### C2.2 The natural pozzolan opportunity — [SYNTHESIS], and worth pursuing

**[SYNTHESIS, flagged as a hypothesis to test, not a finding.]** Western Saudi Arabia has extensive volcanic fields (the *harrat*), which are a classic source of **natural pozzolans** — volcanic ash and scoria that have been used as cement replacements since Roman times and require no blast furnace and no coal. If domestic natural pozzolan is available at scale and characterised for structural use, it would be a genuinely local, genuinely low-carbon SCM, and a far better story than imported GGBS: local supply chain, local geology, low transport carbon, and a legible narrative link to the site's own landscape.

**This is currently a hypothesis, not a fact.** **[UNVERIFIED]** — I have not confirmed commercial availability, standards compliance (relevant Saudi/ASTM classification), replacement levels achievable, or whether any Saudi ready-mix supplier offers it. **But if it checks out, it is the strongest material move available to this project, and it is the one I would prioritise investigating.**

Also worth testing: **LC3 (limestone calcined clay cement)**, which achieves high clinker substitution using widely available clay and limestone rather than industrial by-products, and is specifically promoted for regions without fly ash or slag. **[UNVERIFIED]** for Saudi availability — the Wikipedia low-carbon concrete article was not reachable.

### C2.3 Why GGBS would suit this climate anyway

**[VERIFIED]** GGBS properties, all directly relevant here (source as C2.1):
- **"Lower heat of hydration and lower temperature rises," making it ideal for large pours and hot climates** where thermal cracking is a concern.
- **"Higher resistance to chloride ingress"** and **"higher resistance to attacks by sulfate and other chemicals"** — relevant to sulfate-rich Gulf ground conditions and to long-term durability.
- Continues to gain strength over time, "shown to double its 28-day strength over periods of 10 to 12 years."
- Produces concrete with a **"near-white color"** versus the "stony grey" of OPC concrete.

**[SYNTHESIS] Three of those four properties are arguments we can make on grounds other than carbon, which is rhetorically useful.** Low heat of hydration is not a nice-to-have in Riyadh — recall that Burj Khalifa's contractors **added ice to the mix and poured at night** to control thermal cracking in summer **[VERIFIED, Wikipedia Burj Khalifa]**. That is a large hidden energy cost of hot-climate mass concrete, and a low-heat binder reduces it directly. And the near-white colour has a genuine bioclimatic consequence: higher solar reflectance on exposed concrete surfaces, which in a 2,267 kWh/m²/yr solar environment (Part A) measurably reduces surface and sol-air temperatures. **Durability, buildability, and albedo — three independent arguments for the same material choice.** That is a much more robust position than resting on carbon alone.

### C2.4 Green hydrogen and renewable-powered production

**[UNVERIFIED]** I could not source the status of NEOM green hydrogen, Saudi renewable-powered cement or steel, or any Saudi cement/steel Environmental Product Declarations. **[SYNTHESIS]** Note in any case the hard limit from C1.2: **~50% of cement's emissions are calcination chemistry**, not fuel. Decarbonising the kiln's energy supply — with hydrogen, electrification, or renewables — addresses at most the ~40% fuel share. **Clean energy cannot get cement below roughly half its current footprint without carbon capture or a change of chemistry.** Any claim that Saudi renewable abundance solves the cement problem should be treated sceptically for exactly this reason.

**Action: request EPDs from Saudi cement producers (e.g. Yamama, Saudi Cement, Southern Province Cement) and from Hadeed for rebar. If EPDs exist, the whole calculation in C1.3 can be redone on real local factors instead of global averages — that would be a genuine differentiator for the bid.**

---

## C3. Design responses: what is real and what is marketing

**[SYNTHESIS] throughout this section.**

### Real, in descending order of impact

1. **Build less tall.** The single largest lever, and the one nobody wants to hear. The material premium is a function of height (C1.4). If the brief permits any trade between height and area — a shorter, broader massing at the same GFA — that is worth more carbon than every material substitution combined. **If height is fixed by the brief, we should say internally that we have accepted a carbon penalty for a symbolic and commercial objective, rather than pretend the penalty does not exist.**
2. **Structural efficiency and form.** Aerodynamic shaping to reduce vortex shedding and therefore lateral load is not an aesthetic choice — it directly reduces the structural material required. Tapering, setbacks, openings at the crown, and a plan form tuned to the prevailing wind all cut the governing design case. This is real, it is measurable, and it is where a design team genuinely earns carbon. It also happens to be compatible with the bioclimatic moves in Part B.
3. **High-strength concrete, used correctly.** Higher grades mean less volume for the same capacity. **But note the trap:** higher-strength mixes are more cement-rich per m³, so the carbon saving is not proportional to the volume saving and can vanish entirely. The metric must be **kgCO₂ per unit of structural capacity**, not per m³. Any claim of a saving here must be demonstrated, not assumed.
4. **Long design life and adaptability.** Genuinely real, and under-exploited. If embodied carbon is amortised over 100+ years instead of 50, the per-year figure halves. This makes generous floor-to-floor heights, robust structural grids, over-provisioned riser capacity, and a structure decoupled from its fit-out into *carbon* strategies, not just good practice. **[SYNTHESIS]** For this project it also aligns neatly with the durability argument for GGBS in C2.3 — a building designed to last is a building whose concrete must resist chloride and sulfate attack for a century.
5. **Foundation optimisation.** 110,000 tonnes of foundation concrete on the Burj precedent **[VERIFIED]**. Riyadh's competent limestone bedrock is likely to permit a considerably more efficient foundation than a soft-soil coastal site — **[UNVERIFIED]**, needs geotechnical confirmation, but if true it is a real and quantifiable advantage of the site that we could claim.

### Largely marketing

- **Design for disassembly on a supertall.** Honest assessment: this is close to meaningless for a monolithic reinforced-concrete tower. A 500 m concrete structure is not coming apart into reusable components. It is defensible for the *façade* and *fit-out* layers, which do get replaced on 25–40 year cycles, and that is where the claim should be confined. Applying it to the primary structure would be greenwash.
- **"Density therefore sustainable."** See C1.4. Does not hold at supertall scale.
- **Timber/hybrid structure at 500 m.** Not currently viable at this height, and mass timber's carbon credentials in a region with no forestry and full import dependence are weak. Possible for interior and non-structural elements only.
- **Offsetting.** Not a design response. If it appears in the proposal it should be labelled as a commercial instrument, not an architectural achievement.
- **Operational efficiency as an answer to embodied carbon.** See C4.2 — the arithmetic does not support it as a *rebuttal*, only as a partial mitigation.

---

## C4. Has any Gulf tower published a whole-life carbon assessment?

### C4.1 The finding: apparently not, and that is the finding

**[VERIFIED, negative results]** I checked the accessible sources for the obvious candidates:
- **Burj Khalifa** — the Wikipedia article gives detailed material quantities but states **"No published sustainability metrics, energy assessments, or carbon evaluations."** https://en.wikipedia.org/wiki/Burj_Khalifa
- **KAPSARC, Riyadh** — LEED **Platinum** confirmed, Zaha Hadid Architects, 70,000 m², completed October 2017. But the source contains **no sustainability detail at all** beyond the rating: no passive strategy description, no energy data, no carbon assessment. https://en.wikipedia.org/wiki/King_Abdullah_Petroleum_Studies_and_Research_Center
- **Msheireb Downtown Doha** — extensive claims (average LEED Gold target, "30% energy reduction due to improved building envelopes," 6,400 PV panels, 1,400 solar thermal), but the source explicitly notes **"no measured performance data or independent verification"** and no third-party assessment. https://en.wikipedia.org/wiki/Msheireb_Downtown_Doha
- **Masdar City** — heavily documented on ambition and shortfall, nothing on whole-life carbon. https://en.wikipedia.org/wiki/Masdar_City
- **Al Bahr Towers** — LEED **Silver**; ~2,000 dynamic shading elements; ~50% reduction in interior solar heat gain. **No construction cost, CO₂ reduction, or maintenance data in the source.** https://en.wikipedia.org/wiki/Al_Bahr_Towers

**[UNVERIFIED]** KAFD, Museum of the Future, and Ithra were not reachable in this session.

### C4.2 [SYNTHESIS] What the absence means

**Every one of these projects is certified, and not one publishes whole-life carbon.** LEED Platinum and LEED Gold are, at the versions most of these were certified under, overwhelmingly *operational and process* ratings — they say relatively little about upfront embodied carbon. **KAPSARC can be LEED Platinum and still have an embodied carbon figure nobody has ever published.** There is no contradiction, and that is precisely the problem.

This has a direct strategic consequence for our bid. **The bar in the region is currently a certification badge, not a carbon number.** That means:
- We will not be *forced* to publish a whole-life carbon assessment. Nobody else has.
- Which means that **if we do publish one, we are first**, and that is a genuinely differentiating position rather than a defensive one.

### C4.3 The offset arithmetic

**[SYNTHESIS — my calculation, using an UNVERIFIED Saudi grid emission factor of 0.60 kgCO₂/kWh as a placeholder. This factor must be replaced with a sourced value.]**

Taking the structural embodied carbon from C1.3 at the high end (254,000 tCO₂) and asking how long excellent bioclimatic design would take to pay it back:

| Operational saving vs baseline tower | Annual saving | Years to offset structural embodied carbon |
|---|---|---|
| 50 kWh/m²/yr | 9,284 tCO₂/yr | **27.4 years** |
| 100 kWh/m²/yr | 18,568 tCO₂/yr | **13.7 years** |
| 150 kWh/m²/yr | 27,853 tCO₂/yr | **9.1 years** |

**Reading this honestly:** even a very aggressive 100 kWh/m²/yr saving — which would be an outstanding bioclimatic result — takes roughly **14 years** to offset the structure's carbon, and that excludes façade, MEP and fit-out. Two further points cut against us:
1. **The payback period lengthens as the Saudi grid decarbonises.** If the grid EF falls over the tower's life (and Saudi renewable targets intend that it should), each saved kWh is worth less carbon, so the offset takes longer. Our own operational argument is a depreciating asset.
2. **Carbon emitted today is worse than carbon emitted in 2050**, given the remaining budget and the physics of cumulative forcing. A 14-year payback is not carbon-neutral over 14 years; it is a large emission now against a diffuse repayment later.

**This is the arithmetic behind Oldfield's objection, and I cannot make it come out favourably.**

---

## C5. The honest verdict

**[SYNTHESIS]**

**The objection largely stands.** A 500 m tower in Riyadh will have an upfront embodied carbon figure that comfortably exceeds any current best-practice cap, that material substitution can reduce by perhaps a quarter to a third but not transform, and that operational excellence will take well over a decade to offset. No amount of bioclimatic sophistication in Parts A and B changes that. I would rather the team carried this into the proposal than discovered it in a jury room.

**What I do not think is defensible:**
- Claiming the tower is low-carbon, or net-zero, or carbon-neutral.
- Using density or land-efficiency to justify supertall height.
- Offering operational performance as a *rebuttal* to the embodied-carbon critique.
- Claiming design-for-disassembly on the primary structure.

**The two responses I think *are* defensible:**

**1. Radical transparency — publish the whole-life carbon assessment.**
Since no Gulf tower appears to have done so (C4.1), doing it makes us first rather than exposed. The position is: *"This building has a large embodied carbon cost. Here is the number, calculated to a recognised standard, third-party verified. Here is what we did to reduce it, quantified move by move. Here is what we could not reduce and why."* This converts our biggest vulnerability into the one claim no competitor can match, and it is honest. It also pre-empts the critique rather than absorbing it — a jury that has already seen us state the problem cannot use it against us.

**2. Amortise over time, not over floor area — design for a very long, adaptable life.**
If the embodied carbon cannot be avoided, the defensible move is to spread it across a much longer service life and a much wider range of future uses: generous floor-to-floor, structurally generous grid, over-provisioned risers, structure decoupled from replaceable layers, and a façade and fit-out designed for genuine replacement rather than demolition. A building that lasts 120 years and can change use three times has a fundamentally different carbon profile from one that is obsolete at 40. This is measurable, it is architectural rather than cosmetic, and it aligns with the GGBS durability argument (C2.3) and the Najdi-derived mass strategy (Part B).

**A third, conditional response**, subject to verification: **if domestic natural pozzolans (C2.2) prove viable at scale**, a genuinely local low-carbon binder would be both a real reduction and a strong narrative — Saudi geology substituting for imported industrial by-products. **This is the highest-value open item in this Part.**

---

## C6. Outstanding actions for Part C

Priority order:

1. **Confirm the Saudi SCM supply reality** — Hadeed/Saudi steel production route (DRI-EAF vs BF-BOF, determines GGBS availability), domestic fly ash availability, GGBS import scale. *The whole low-carbon-concrete case depends on this.*
2. **Investigate domestic natural pozzolans** (*harrat* volcanic ash) and LC3 availability in the Kingdom — standards, suppliers, achievable replacement levels.
3. **Obtain EPDs** from Saudi cement producers and from Hadeed for rebar, and re-run C1.3 on local factors rather than global averages.
4. **Source a height-versus-embodied-carbon curve** (CTBUH; Oldfield's own publications) to replace the qualitative argument in C1.4.
5. **Source Philip Oldfield's actual published position directly** — I was unable to reach his UNSW profile or Conversation articles this session. His book *The Sustainable Tall Building: A Design Primer* is the primary text. **We should engage his argument from his own words, not my paraphrase of it.**
6. **Source a Saudi grid emission factor** to replace the 0.60 kgCO₂/kWh placeholder in C4.3.
7. **Verify Burj Khalifa GFA** (309,473 m² assumed) — all per-m² figures in C1.3 scale with it.
8. **Confirm steel rebar emission factors** for the actual supply route, replacing the 0.7–2.0 tCO₂/t illustrative range.
9. **Check whether KAFD, Museum of the Future, or Ithra have published any WLCA** — the negative finding in C4.1 is based on incomplete coverage.


---

# ADDENDUM to Part A2 — Did Yeang ever address hot-arid climates?

*To be merged into section A2 of `05-hot-arid-riyadh-translation.md`. Written to scratchpad rather than OneDrive per instruction.*

## The bibliographic evidence: a confirmed negative

**[VERIFIED]** Full list of Yeang's books with their catalogued subject headings, from OpenLibrary:
https://openlibrary.org/search.json?q=Ken+Yeang

| Book | Year | Catalogued subjects |
|---|---|---|
| The Tropical Verandah City | 1987 | **Tropical Architecture**, City planning, Architecture and climate |
| Tropical Urban Regionalism | 1987 | **Tropical Architecture**, Regionalism, Architecture and climate |
| Bioclimatic Skyscrapers | 1994 | Architecture and climate, Regionalism |
| Ken Yeang, Malaysia, Bioclimatic Skyscrapers | 1994 | **Tropical Architecture**, Architecture and climate |
| Designing With Nature | 1995 | Environmental aspects of Architecture |
| The Skyscraper Bioclimatically Considered | 1996 | Architecture and climate, Environmental aspects |
| The Green Skyscraper | 1999 | Sustainable architecture, Tall buildings |
| Reinventing the Skyscraper | 2002 | Skyscrapers, City planning |
| Eco Skyscrapers | 2007 | Architecture and climate, Environmental aspects |
| Ecodesign: A Manual for Ecological Design | 2008 | Sustainable architecture |
| Ecoarchitecture: The Work of Ken Yeang | 2011 | Sustainable architecture, Modern Architecture |
| Ken Yeang Eco Skyscrapers | 2011 | Architecture and climate, Sustainable architecture |
| Designing the Ecocity-In-the-Sky | 2014 | Environmental aspects, Sustainable architecture |
| Constructed Ecosystems | 2016 | Architecture and climate, Green technology |
| Saving the Planet by Design | 2019 | Sustainable design |
| At One with Nature | 2020 | Architecture |

**[SYNTHESIS] This is a clean confirmed negative, and it is worth stating plainly to the team.**

Across a 33-year, 16-book output, **every climate-specific title and every climate-specific subject heading is TROPICAL.** Three books are catalogued under "Tropical Architecture." Not one book, title, or subject heading in the entire corpus refers to arid, desert, hot-dry, or Middle Eastern conditions. The two 1987 titles that name a region name *the tropics*; the 1994 monograph names *Malaysia*.

Combined with the project evidence from A2.1 — where Saudi (Jabal Omar, Mecca), Kuwait (Al-Asima) and Dubai appear as *locations on a project list* with no published climate strategy attached — the picture is consistent:

**Yeang has taken hot-arid commissions. He has never written hot-arid theory.**

## Why this is good news for the proposal

**[SYNTHESIS]** This is the strongest strategic finding in Part A, and it should shape how the proposal is framed.

If Yeang had solved the desert, our proposal would be derivative — applying someone else's answer. He has not. What he built was a **method** (passive-first hierarchy, core-as-buffer, vertical ecological continuity, ecomimesis) and then a **set of tropical answers** to it. The method is climate-independent. The answers are not, and they are the part everyone copies.

So the honest and much stronger position is:

> *We are not applying Yeang's tropical solutions to Riyadh. We are taking Yeang's method into the one climate he named on his project list but never developed a theory for, and deriving the desert answers ourselves — from Najdi vernacular, from the psychrometrics of the Najd plateau, and from the honest performance record of the Gulf's own experiments.*

That claims originality where we genuinely have it, credits Yeang where he is genuinely owed, and — critically — **inoculates us against the obvious jury question**, which is "why are you importing a tropical architect into the desert?" The answer is that we are not importing his buildings; we are extending his method, and we can show exactly where it inverts.

## Open item

**[UNVERIFIED, still]** Whether *Ecodesign: A Manual for Ecological Design* (2008) or *The Green Skyscraper* (1999) contains climate-zone-differentiated guidance in its interior text that separates hot-arid from hot-humid strategy. The subject headings suggest not, but subject headings are coarse. Yeang's method derives from Olgyay's bioclimatic chart, which *is* zone-differentiated, so the apparatus may exist inside the books even though no title or heading advertises it.

**Worth resolving via archive.org full-text search inside the books** (https://archive.org/search?query=Ken+Yeang) before the proposal is finalised. It changes nothing about the strategy above — it would only tell us whether to say "never developed" or "sketched but never built."

*A dedicated research thread on this question was still running when this addendum was written; its findings should be checked against the above.*

---

# RESOLVED: Yeang DID design for a hot-arid Gulf climate — K Tower, Kuwait City

Added 19 Aug 2026. This **corrects the "confirmed negative"** recorded in the addendum above.

## Reconciling the contradiction

Both findings are true, and together they are more useful than either alone:

- **The bibliographic negative stands.** Across his books, every climate-specific title and subject heading is tropical. He has written essentially nothing about arid or desert design.
- **The project record is different.** He designed at least one tower for a hot-arid Gulf climate.

So: **Yeang theorised in the tropics but practised, at least once, in the desert.** The translation work is therefore not unprecedented, and he has already made a first attempt at it that we can examine.

## K Tower, Kuwait City — the record

Sources: *The Architectural Review*, "Hamzah & Yeang: mixed-use tower, Kuwait City, Kuwait" (https://www.thefreelibrary.com/Hamzah+&+Yeang:+mixed-use+tower,+Kuwait+City,+Kuwait.-a0132153882); International Design Awards winner record (https://www.idesignawards.com/winners/zoom.php?eid=638-07).

| | |
|---|---|
| Location | Waterfront site, Kuwait City |
| Height | 40 storeys |
| Programme | Commercial and retail, business centre and conference rooms, **nine hotel floors**, swimming pool, helipad |
| Form | Twisting, described by the AR as "like a warped breadstick"; split into served and serviced zones |
| Status | **UNVERIFIED whether built.** Treat as a design/competition scheme until confirmed. |

## The hot-arid moves he actually used

This is the valuable part, and it maps directly onto the transfer/invert analysis in Part B above.

1. **An atrium on the NORTH face providing evaporative cooling**, tempering conditions in the sky courts, lobbies and viewing platforms. Note the orientation: north, the benign face in the northern hemisphere. This is the inversion of his tropical practice, and it matches the Part B2.4 prediction that sky courts in an arid climate must become *evaporatively cooled* rather than merely open.
2. **Sky courts filled with vegetation AND water.** Water is doing thermal work, not decorative work. Again consistent with B2.
3. **External louvres and grilles that control solar gain AND protect against sand storms.** A dual-function device. Part B did not anticipate the sandstorm function; this is Yeang's own answer to a Riyadh-relevant problem.
4. **A narrow plan to encourage daylight** and reduce artificial lighting.
5. **A layered façade** to cut air-conditioning load.
6. **Rainwater collected** from the summit roof garden and the podium's landscaped roof, for recycling. In a climate with almost no rain, this is a marginal gesture and should be read as such.
7. **Bioclimatic response to solar path and wind-rose** as a passive mode, stated explicitly for the hot-arid locality.

## His stated intent, which is quotable

The AR reports Yeang intended the tower as **"a paradigm for passive environmental control,"** offering an alternative to the conventional Middle East model, which the same piece characterises as **"energy guzzling... sealed and air-conditioned glass stumps."**

That is a Gulf-specific polemic from Yeang himself, and it is a considerably better framing for a Riyadh audience than anything drawn from his Malaysian work.

## Why this matters to the proposal

- It removes the weakest objection to using Yeang as the reference: that he only ever worked in the humid tropics.
- It gives a **precedent in his own hand** for the two moves Part B identified as needing inversion: evaporatively cooled sky courts, and water as a thermal element.
- It adds one device Part B missed entirely: **shading that doubles as sandstorm protection.** For Riyadh this is not optional.

## Outstanding

- **Was it built?** Establish status. If unbuilt, it joins EDITT in the pattern of radical schemes that did not clear commercial underwriting.
- Date of the scheme, client, and full design team.
- Any performance modelling for it.
- Two further Gulf threads: a **Ken Yeang workshop at Ajman University, UAE** (https://www.archdaily.com/781844/workshop-by-ken-yeang-at-ajman-university-of-science-and-technology-uae), and an uncorroborated **NEOM** figure caption suggesting prior Saudi work.

## K Tower status — RESOLVED as almost certainly UNBUILT

Checked 19 Aug 2026 against Wikipedia's *List of tallest buildings in Kuwait*, which enumerates every Kuwaiti building of 200 m or more across completed, under-construction and proposed categories (Al Hamra 413 m, Assima 302 m, NBK 300 m, Arraya 300 m, KIPCO 240 m, Crystal 240 m, Central Bank 240 m, KIA HQ 220 m, plus proposals).

**No building called "K Tower" appears anywhere in that list.** A 40-storey tower, or the 65-storey / 260 m variant referenced in later research, would comfortably qualify.

**Conclusion:** treat K Tower as an **unbuilt proposal, c. 2005**. Status is inferred from a well-sourced absence rather than from a direct statement, so phrase it as "no evidence it was built" rather than "cancelled".

**What this means for the argument.** It joins EDITT in the pattern: Yeang's most climatically ambitious schemes are the ones that did not get built. His hot-arid thinking exists as a proposal, not as evidence. Present K Tower to the team as **the design intent for a desert tower by the field's leading bioclimatic architect**, not as a proven precedent. That is still valuable, and it is honest.
