import React from 'react';

interface OurMissionViewProps {
  onGoToShop: () => void;
  onOpenCOA: () => void;
  onOpenDiscordModal: () => void;
}

export const OurMissionView: React.FC<OurMissionViewProps> = ({
  onGoToShop,
  onOpenCOA,
  onOpenDiscordModal,
}) => {
  return (
    <div className="flex flex-col w-full relative overflow-hidden bg-[#1c0736]">
      {/* AMBIENT RADIAL UNDERGLOW */}
      <div className="absolute top-10 left-1/4 w-96 h-96 bg-[#c3f400]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-72 right-10 w-80 h-80 bg-[#ffb3af]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-[1400px] left-10 w-96 h-96 bg-[#7df4ff]/10 rounded-full blur-3xl pointer-events-none" />

      {/* 1. HERO MANIFESTO */}
      <section className="relative w-full px-gutter py-space-xl max-w-7xl mx-auto flex flex-col items-start gap-space-lg">
        {/* FLOATING ACCENT STICKERS */}
        <div className="flex items-center gap-space-sm flex-wrap">
          <span className="inline-flex items-center gap-1.5 font-sticker-badge bg-[#c3f400] text-[#1c0736] px-space-md py-space-xs rounded rotate-[-2.5deg] shadow-[3px_3px_0px_0px_#ffffff] uppercase font-bold text-xs">
            <span className="material-symbols-outlined text-[16px]">verified</span> MANIFESTO V3.4
          </span>
          <span className="inline-flex items-center gap-1.5 font-sticker-badge bg-[#ffb3af] text-[#68000d] px-space-md py-space-xs rounded rotate-[1.8deg] shadow-[3px_3px_0px_0px_#c3f400] uppercase font-bold text-xs">
            <span className="material-symbols-outlined text-[16px]">bolt</span> ZERO BRO-SCIENCE
          </span>
          <span className="inline-flex items-center gap-2 font-label-code text-xs bg-[#33204e] text-[#eddcff] px-space-md py-space-xs rounded-full shadow-sm border border-white/5">
            <span className="w-2 h-2 rounded-full bg-[#c3f400] animate-pulse" /> SYSTEM: UNAPOLOGETIC
          </span>
        </div>

        {/* MASSIVE HEADLINE WITH ASYMMETRIC STAGGER */}
        <div className="space-y-space-xs">
          <h1 className="font-display-hero uppercase tracking-tighter text-[#eddcff] leading-none">
            WE DON’T DO{' '}
            <span className="text-[#c3f400] underline decoration-wavy decoration-[#ffb3af] decoration-4">
              CHALK.
            </span>
            <br />
            WE DON’T DO <span className="text-[#ffb3af]">BORING.</span>
          </h1>
          <p className="font-body-lg text-[#c4c9ac] max-w-3xl pt-space-md leading-relaxed">
            The legacy fitness industry lied to you for 20 years with chalky gray sludge, proprietary micro-dosing scams, and hyper-toxic gym-bro elitism.{' '}
            <strong className="text-[#eddcff] font-headline-sm font-bold">
              Protein X exists to rewrite every single rule.
            </strong>
          </p>
        </div>

        {/* EDITORIAL STAT HERO STRIP */}
        <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-space-md pt-space-md">
          <div className="bg-[#281543] rounded-xl p-space-md shadow-[4px_4px_0px_0px_#3e2b5a] border border-white/5">
            <span className="font-label-code text-xs text-[#c3f400] uppercase font-bold">
              TEXTURE RATIO
            </span>
            <p className="font-headline-lg text-3xl md:text-4xl text-[#eddcff] font-bold">100%</p>
            <p className="font-body-sm text-xs text-[#c4c9ac]">Silk-whipped pastry blend</p>
          </div>
          <div className="bg-[#281543] rounded-xl p-space-md shadow-[4px_4px_0px_0px_#3e2b5a] border border-white/5">
            <span className="font-label-code text-xs text-[#ffb3af] uppercase font-bold">
              CHALK DETECTED
            </span>
            <p className="font-headline-lg text-3xl md:text-4xl text-[#eddcff] font-bold">
              0.0<span className="text-[#ffb3af] text-xl font-headline-sm font-bold">g</span>
            </p>
            <p className="font-body-sm text-xs text-[#c4c9ac]">Lab audited &amp; verified</p>
          </div>
          <div className="bg-[#281543] rounded-xl p-space-md shadow-[4px_4px_0px_0px_#3e2b5a] border border-white/5">
            <span className="font-label-code text-xs text-[#7df4ff] uppercase font-bold">
              TEST RUNS
            </span>
            <p className="font-headline-lg text-3xl md:text-4xl text-[#eddcff] font-bold">312</p>
            <p className="font-body-sm text-xs text-[#c4c9ac]">Formulations scrapped</p>
          </div>
          <div className="bg-[#281543] rounded-xl p-space-md shadow-[4px_4px_0px_0px_#3e2b5a] border border-white/5">
            <span className="font-label-code text-xs text-[#c3f400] uppercase font-bold">
              YOUTH CAUSES
            </span>
            <p className="font-headline-lg text-3xl md:text-4xl text-[#eddcff] font-bold">2.0%</p>
            <p className="font-body-sm text-xs text-[#c4c9ac]">Of total gross revenues</p>
          </div>
        </div>
      </section>

      {/* 2. THE 4 CORE PILLARS OF PROTEIN X */}
      <section className="w-full px-gutter py-space-xl max-w-7xl mx-auto border-t border-white/5">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md mb-space-lg">
          <div>
            <span className="font-label-code text-xs text-[#c3f400] uppercase tracking-wider font-bold">
              THE FOUNDATIONAL PROTOCOLS
            </span>
            <h2 className="font-headline-lg text-2xl md:text-4xl uppercase text-[#eddcff] tracking-tight mt-space-xs font-bold">
              FOUR PILLARS OF PURE REBELLION
            </h2>
          </div>
          <p className="font-body-md text-sm text-[#c4c9ac] max-w-md">
            Built from radical culinary science and genuine human community. Hover the cards to initiate system telemetry.
          </p>
        </div>

        {/* PILLARS BENTO GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-space-lg">
          {/* PILLAR 1: FLAVOR ANARCHY (7 COLS) */}
          <div className="lg:col-span-7 bg-[#33204e] rounded-xl p-space-lg relative overflow-hidden group hover:shadow-[4px_4px_0px_0px_#c3f400] transition-all duration-200 border border-white/5">
            <div className="flex items-start justify-between gap-space-sm mb-space-md">
              <span className="font-sticker-badge bg-[#c3f400] text-[#1c0736] px-space-md py-space-xs rounded rotate-[-2deg] shadow-[2px_2px_0px_0px_#ffffff] uppercase font-bold text-xs">
                PILLAR 01 // TASTE-MAXX
              </span>
              <span className="font-label-code text-xs text-[#c4c9ac] bg-[#160231] px-space-sm py-space-xs rounded border border-white/5">
                BIO_CODE: 01_FLVR
              </span>
            </div>
            <h3 className="font-headline-md text-xl md:text-2xl text-[#eddcff] uppercase mb-space-xs font-bold">
              FLAVOR ANARCHY
            </h3>
            <p className="font-body-lg text-sm md:text-base text-[#c4c9ac] mb-space-md leading-relaxed">
              Never drink damp cardboard again. We fired traditional supplement formulators and hired Parisian pastry chefs alongside Michelin-starred food scientists to invent dessert-level profiles that hit different.
            </p>
            {/* ILLUSTRATIVE MICRO-GRAPHIC */}
            <div className="bg-[#160231] rounded-lg p-space-md space-y-space-sm border border-white/5">
              <div className="flex justify-between items-center font-label-code text-xs text-[#eddcff]">
                <span>MOLECULAR PALATABILITY INDEX</span>
                <span className="text-[#c3f400] font-headline-sm text-base font-bold">99.4 / 100</span>
              </div>
              <div className="w-full bg-[#3e2b5a] rounded-full h-3 overflow-hidden">
                <div className="bg-[#c3f400] h-full rounded-full w-[94%]" />
              </div>
              <div className="flex items-center gap-space-sm flex-wrap pt-space-xs">
                <span className="font-label-code text-xs bg-[#281543] px-space-sm py-space-xs rounded text-[#eddcff]">
                  Salted Caramel Glaze
                </span>
                <span className="font-label-code text-xs bg-[#281543] px-space-sm py-space-xs rounded text-[#eddcff]">
                  Strawberry Matcha Crème
                </span>
                <span className="font-label-code text-xs bg-[#281543] px-space-sm py-space-xs rounded text-[#eddcff]">
                  Tokyo Ube Milk
                </span>
              </div>
            </div>
          </div>

          {/* PILLAR 2: CLEAN SCIENCE, ZERO GATEKEEPING (5 COLS) */}
          <div className="lg:col-span-5 bg-[#33204e] rounded-xl p-space-lg relative overflow-hidden group hover:shadow-[4px_4px_0px_0px_#ffb3af] transition-all duration-200 border border-white/5">
            <div className="flex items-start justify-between gap-space-sm mb-space-md">
              <span className="font-sticker-badge bg-[#ffb3af] text-[#68000d] px-space-md py-space-xs rounded rotate-[2deg] shadow-[2px_2px_0px_0px_#c3f400] uppercase font-bold text-xs">
                PILLAR 02 // ZERO BLENDS
              </span>
              <span className="font-label-code text-xs text-[#c4c9ac] bg-[#160231] px-space-sm py-space-xs rounded border border-white/5">
                100% PURE ISOLATE
              </span>
            </div>
            <h3 className="font-headline-md text-xl md:text-2xl text-[#eddcff] uppercase mb-space-xs font-bold">
              CLEAN SCIENCE, ZERO GATEKEEPING
            </h3>
            <p className="font-body-md text-sm text-[#c4c9ac] mb-space-md leading-relaxed">
              Every batch ships with public third-party chromatography reports. No proprietary smoke-and-mirrors, zero artificial fillers, and verified macro honesty down to the microgram.
            </p>
            {/* MINI LAB METRIC CARD */}
            <div className="bg-[#160231] rounded-lg p-space-md space-y-space-xs font-label-code text-xs border border-white/5">
              <div className="flex items-center justify-between text-[#eddcff]">
                <span className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[16px] text-[#ffb3af]">science</span>{' '}
                  HEAVY METALS TEST
                </span>
                <span className="text-[#c3f400] font-bold">PASS (ND)</span>
              </div>
              <div className="flex items-center justify-between text-[#eddcff]">
                <span className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[16px] text-[#ffb3af]">
                    check_circle
                  </span>{' '}
                  AMINO SPIKING AUDIT
                </span>
                <span className="text-[#c3f400] font-bold">0.00% DETECTED</span>
              </div>
              <div className="flex items-center justify-between text-[#eddcff]">
                <span className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[16px] text-[#ffb3af]">
                    qr_code_scanner
                  </span>{' '}
                  OPEN BATCH LEDGER
                </span>
                <button
                  onClick={onOpenCOA}
                  className="text-[#7df4ff] underline cursor-pointer font-bold hover:text-white"
                >
                  VERIFY_LOT_#8841
                </button>
              </div>
            </div>
          </div>

          {/* PILLAR 3: PLANET & COMMUNITY FIRST (5 COLS) */}
          <div className="lg:col-span-5 bg-[#33204e] rounded-xl p-space-lg relative overflow-hidden group hover:shadow-[4px_4px_0px_0px_#7df4ff] transition-all duration-200 border border-white/5">
            <div className="flex items-start justify-between gap-space-sm mb-space-md">
              <span className="font-sticker-badge bg-[#7df4ff] text-[#00363a] px-space-md py-space-xs rounded rotate-[-1.5deg] shadow-[2px_2px_0px_0px_#160231] uppercase font-bold text-xs">
                PILLAR 03 // ECO-DEFENSE
              </span>
              <span className="font-label-code text-xs text-[#c4c9ac] bg-[#160231] px-space-sm py-space-xs rounded border border-white/5">
                CIRCULAR ZERO-WASTE
              </span>
            </div>
            <h3 className="font-headline-md text-xl md:text-2xl text-[#eddcff] uppercase mb-space-xs font-bold">
              PLANET &amp; COMMUNITY FIRST
            </h3>
            <p className="font-body-md text-sm text-[#c4c9ac] mb-space-md leading-relaxed">
              100% recyclable, mono-material foil-less pouches. Carbon-neutral priority shipping drops. Plus 2% of every single purchase directly bankrolls urban youth mental health, skate parks, and community lifting clubs.
            </p>
            <div className="bg-[#160231] rounded-lg p-space-md flex items-center justify-around text-center border border-white/5">
              <div>
                <p className="font-headline-md text-2xl text-[#7df4ff] font-bold">0g</p>
                <p className="font-label-code text-[11px] text-[#c4c9ac]">MULTI-FOIL WASTE</p>
              </div>
              <div className="h-8 w-px bg-[#3e2b5a]" />
              <div>
                <p className="font-headline-md text-2xl text-[#c3f400] font-bold">$380K+</p>
                <p className="font-label-code text-[11px] text-[#c4c9ac]">YOUTH CLUBS FUNDED</p>
              </div>
            </div>
          </div>

          {/* PILLAR 4: GYM CULTURE REIMAGINED (7 COLS) */}
          <div className="lg:col-span-7 bg-[#33204e] rounded-xl p-space-lg relative overflow-hidden group hover:shadow-[4px_4px_0px_0px_#c3f400] transition-all duration-200 border border-white/5">
            <div className="flex items-start justify-between gap-space-sm mb-space-md">
              <span className="font-sticker-badge bg-[#c3f400] text-[#1c0736] px-space-md py-space-xs rounded rotate-[2deg] shadow-[2px_2px_0px_0px_#ffffff] uppercase font-bold text-xs">
                PILLAR 04 // INCLUSIVE GAINS
              </span>
              <span className="font-label-code text-xs text-[#c4c9ac] bg-[#160231] px-space-sm py-space-xs rounded border border-white/5">
                OPEN PROTOCOL
              </span>
            </div>
            <h3 className="font-headline-md text-xl md:text-2xl text-[#eddcff] uppercase mb-space-xs font-bold">
              GYM CULTURE REIMAGINED
            </h3>
            <p className="font-body-lg text-sm md:text-base text-[#c4c9ac] mb-space-md leading-relaxed">
              Fitness is an expansive canvas, not an intimidating dungeon for screaming bodybuilders. Whether you’re an overnight Twitch streamer, street skateboarder, 5AM marathon runner, or creative night-owl hitting deadlifts in your bedroom—you belong in this movement.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-space-sm">
              <div className="bg-[#160231] p-space-sm rounded-lg text-center border border-white/5">
                <span className="material-symbols-outlined text-[#c3f400] text-[24px]">
                  sports_esports
                </span>
                <p className="font-label-code text-xs text-[#eddcff] mt-1 font-bold">GAMERS</p>
              </div>
              <div className="bg-[#160231] p-space-sm rounded-lg text-center border border-white/5">
                <span className="material-symbols-outlined text-[#ffb3af] text-[24px]">
                  skateboarding
                </span>
                <p className="font-label-code text-xs text-[#eddcff] mt-1 font-bold">SKATERS</p>
              </div>
              <div className="bg-[#160231] p-space-sm rounded-lg text-center border border-white/5">
                <span className="material-symbols-outlined text-[#7df4ff] text-[24px]">
                  fitness_center
                </span>
                <p className="font-label-code text-xs text-[#eddcff] mt-1 font-bold">LIFTERS</p>
              </div>
              <div className="bg-[#160231] p-space-sm rounded-lg text-center border border-white/5">
                <span className="material-symbols-outlined text-[#c3f400] text-[24px]">palette</span>
                <p className="font-label-code text-xs text-[#eddcff] mt-1 font-bold">CREATIVES</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. INTERACTIVE TIMELINE / ORIGIN STORY */}
      <section className="w-full px-gutter py-space-xl max-w-7xl mx-auto border-t border-white/5">
        <div className="bg-[#160231] rounded-2xl p-space-lg md:p-space-xl shadow-[6px_6px_0px_0px_#281543] border border-white/5">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-space-md mb-space-xl">
            <div>
              <div className="flex items-center gap-space-xs mb-space-xs">
                <span className="material-symbols-outlined text-[#c3f400] text-[20px]">
                  history_edu
                </span>
                <span className="font-label-code text-xs uppercase text-[#c3f400] tracking-wider font-bold">
                  CHRONICLE OF DISRUPTION
                </span>
              </div>
              <h2 className="font-headline-lg text-2xl md:text-3xl uppercase text-[#eddcff] tracking-tight font-bold">
                FROM DORM ROOM BLENDER TO 1,000,000+ SHAKERS
              </h2>
            </div>
            <span className="font-sticker-badge bg-[#ffb3af] text-[#68000d] px-space-md py-space-xs rounded rotate-[-3deg] uppercase shadow-[2px_2px_0px_0px_#160231] font-bold text-xs self-start">
              300+ FAILED BATCHES
            </span>
          </div>

          {/* TIMELINE CARDS */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-space-md relative">
            {/* STAGE 1 */}
            <div className="bg-[#281543] rounded-xl p-space-md flex flex-col justify-between group hover:bg-[#33204e] transition-colors border border-white/5">
              <div>
                <span className="font-label-code text-xs text-[#c3f400] block mb-space-xs font-bold">
                  STEP 01 // 2022
                </span>
                <h4 className="font-headline-sm text-base uppercase text-[#eddcff] mb-space-xs font-bold">
                  THE SLUDGE CRISIS
                </h4>
                <p className="font-body-sm text-xs text-[#c4c9ac] leading-relaxed">
                  Two college roommates choked down yet another grain-filled, chemical-smelling supermarket shake and snapped. Blender broke, wallpaper ruined, rebellion born.
                </p>
              </div>
              <div className="mt-space-md pt-space-md bg-[#160231]/50 rounded p-space-sm font-label-code text-xs text-[#ffb3af] flex items-center gap-1.5 font-bold">
                <span className="material-symbols-outlined text-[14px]">close</span> BATCH #001: REJECTED
              </div>
            </div>

            {/* STAGE 2 */}
            <div className="bg-[#281543] rounded-xl p-space-md flex flex-col justify-between group hover:bg-[#33204e] transition-colors border border-white/5">
              <div>
                <span className="font-label-code text-xs text-[#c3f400] block mb-space-xs font-bold">
                  STEP 02 // 2023
                </span>
                <h4 className="font-headline-sm text-base uppercase text-[#eddcff] mb-space-xs font-bold">
                  THE 300 LAB SINS
                </h4>
                <p className="font-body-sm text-xs text-[#c4c9ac] leading-relaxed">
                  Partnered with an outlaw food biochemist in Brooklyn. Tested 312 formulations across 14 months to solve the &quot;chalk mouth&quot; phenomenon without adding artificial thickening gums.
                </p>
              </div>
              <div className="mt-space-md pt-space-md bg-[#160231]/50 rounded p-space-sm font-label-code text-xs text-[#c4c9ac] flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[14px]">hourglass_top</span> 14 MONTHS DEV
              </div>
            </div>

            {/* STAGE 3 */}
            <div className="bg-[#281543] rounded-xl p-space-md flex flex-col justify-between group hover:bg-[#33204e] transition-colors border border-white/5">
              <div>
                <span className="font-label-code text-xs text-[#c3f400] block mb-space-xs font-bold">
                  STEP 03 // 2024
                </span>
                <h4 className="font-headline-sm text-base uppercase text-[#eddcff] mb-space-xs font-bold">
                  THE DISCORD SECRET DROP
                </h4>
                <p className="font-body-sm text-xs text-[#c4c9ac] leading-relaxed">
                  500 matte silver pouches leaked anonymously to gamers, skateboarders, and track athletes. Sold out in 18 minutes via a guerrilla Shopify password page.
                </p>
              </div>
              <div className="mt-space-md pt-space-md bg-[#160231]/50 rounded p-space-sm font-label-code text-xs text-[#c3f400] flex items-center gap-1.5 font-bold">
                <span className="material-symbols-outlined text-[14px]">timer</span> SOLD OUT: 18 MIN
              </div>
            </div>

            {/* STAGE 4 */}
            <div className="bg-[#33204e] rounded-xl p-space-md flex flex-col justify-between shadow-[3px_3px_0px_0px_#c3f400] border border-white/10">
              <div>
                <span className="font-label-code text-xs text-[#c3f400] block mb-space-xs font-bold">
                  STEP 04 // PRESENT
                </span>
                <h4 className="font-headline-sm text-base uppercase text-[#eddcff] mb-space-xs font-bold">
                  1,000,000+ SHAKERS
                </h4>
                <p className="font-body-sm text-xs text-[#c4c9ac] leading-relaxed">
                  A relentless, fast-growing movement worldwide. High-performance clean nutrition with obsessive flavor perfection. Zero gatekeeping.
                </p>
              </div>
              <div className="mt-space-md pt-space-md bg-[#c3f400] text-[#1c0736] rounded p-space-sm font-headline-sm text-xs text-center uppercase tracking-tight font-extrabold">
                WORLD REVOLUTION
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. "THE LAB VS THE HYPE" NUTRITION TRANSPARENCY COMPARATOR */}
      <section className="w-full px-gutter py-space-xl max-w-7xl mx-auto border-t border-white/5">
        <div className="text-center max-w-2xl mx-auto mb-space-xl space-y-space-xs">
          <span className="font-sticker-badge bg-[#c3f400] text-[#1c0736] px-space-md py-space-xs rounded rotate-[1deg] uppercase shadow-[2px_2px_0px_0px_#ffffff] font-bold text-xs inline-block">
            BRUTAL HONESTY PROTOCOL
          </span>
          <h2 className="font-headline-lg text-2xl md:text-3xl uppercase text-[#eddcff] tracking-tight font-bold">
            THE LAB VS. THE HYPE
          </h2>
          <p className="font-body-md text-sm text-[#c4c9ac]">
            See why standard commercial fitness supplements are terrified of our ingredient breakdown.
          </p>
        </div>

        {/* COMPARATOR TABLE */}
        <div className="w-full overflow-x-auto">
          <div className="min-w-[680px] bg-[#160231] rounded-xl overflow-hidden shadow-[4px_4px_0px_0px_#281543] border border-white/5">
            {/* TABLE HEADER */}
            <div className="grid grid-cols-12 bg-[#33204e] px-space-lg py-space-md font-headline-sm text-sm uppercase items-center font-bold">
              <div className="col-span-4 text-[#eddcff]">ATTRIBUTE SPEC</div>
              <div className="col-span-4 text-[#c4c9ac]/70 line-through">
                STANDARD GYM-BRO BRANDS
              </div>
              <div className="col-span-4 text-[#c3f400] flex items-center gap-1.5 font-bold">
                <span className="material-symbols-outlined text-[20px]">bolt</span> PROTEIN X STANDARD
              </div>
            </div>

            {/* ROW 1: TEXTURE */}
            <div className="grid grid-cols-12 px-space-lg py-space-md bg-[#24113f]/40 items-center border-b border-white/5">
              <div className="col-span-4 font-headline-sm text-sm text-[#eddcff] flex items-center gap-2 font-bold">
                <span className="material-symbols-outlined text-[#c3f400] text-[18px]">texture</span>{' '}
                TEXTURE &amp; SOLUBILITY
              </div>
              <div className="col-span-4 font-body-sm text-xs text-[#c4c9ac]">
                Gritty, chalky sand that settles like cement at bottom of bottle
              </div>
              <div className="col-span-4 font-body-sm text-xs text-[#eddcff] flex items-center gap-1.5 font-bold">
                <span className="material-symbols-outlined text-[#c3f400] text-[18px]">
                  verified
                </span>{' '}
                Micro-micronized silk blend. Instant cold dissolve.
              </div>
            </div>

            {/* ROW 2: AFTERTASTE */}
            <div className="grid grid-cols-12 px-space-lg py-space-md bg-[#281543] items-center border-b border-white/5">
              <div className="col-span-4 font-headline-sm text-sm text-[#eddcff] flex items-center gap-2 font-bold">
                <span className="material-symbols-outlined text-[#ffb3af] text-[18px]">
                  sentiment_dissatisfied
                </span>{' '}
                CHEMICAL AFTERTASTE
              </div>
              <div className="col-span-4 font-body-sm text-xs text-[#c4c9ac]">
                Sickening sucralose burn &amp; metallic bitter artificial tongue film
              </div>
              <div className="col-span-4 font-body-sm text-xs text-[#eddcff] flex items-center gap-1.5 font-bold">
                <span className="material-symbols-outlined text-[#c3f400] text-[18px]">
                  verified
                </span>{' '}
                Real freeze-dried berries &amp; natural Madagascar vanilla
              </div>
            </div>

            {/* ROW 3: SUGAR & FILLERS */}
            <div className="grid grid-cols-12 px-space-lg py-space-md bg-[#24113f]/40 items-center border-b border-white/5">
              <div className="col-span-4 font-headline-sm text-sm text-[#eddcff] flex items-center gap-2 font-bold">
                <span className="material-symbols-outlined text-[#7df4ff] text-[18px]">cancel</span>{' '}
                FILLERS &amp; SPIKING
              </div>
              <div className="col-span-4 font-body-sm text-xs text-[#c4c9ac]">
                Cheap glycine/taurine fillers to artificially inflate protein numbers
              </div>
              <div className="col-span-4 font-body-sm text-xs text-[#eddcff] flex items-center gap-1.5 font-bold">
                <span className="material-symbols-outlined text-[#c3f400] text-[18px]">
                  verified
                </span>{' '}
                0g added sugar, 0% amino spikes, 30g pure whey isolate
              </div>
            </div>

            {/* ROW 4: DIGESTIBILITY */}
            <div className="grid grid-cols-12 px-space-lg py-space-md bg-[#281543] items-center border-b border-white/5">
              <div className="col-span-4 font-headline-sm text-sm text-[#eddcff] flex items-center gap-2 font-bold">
                <span className="material-symbols-outlined text-[#c3f400] text-[18px]">
                  favorite
                </span>{' '}
                GUT &amp; DIGESTIBILITY
              </div>
              <div className="col-span-4 font-body-sm text-xs text-[#c4c9ac]">
                Severe bloating, heavy stomach cramps, sluggish insulin crashes
              </div>
              <div className="col-span-4 font-body-sm text-xs text-[#eddcff] flex items-center gap-1.5 font-bold">
                <span className="material-symbols-outlined text-[#c3f400] text-[18px]">
                  verified
                </span>{' '}
                Added DigeZyme® multi-enzyme complex. Zero bloat guarantee.
              </div>
            </div>

            {/* ROW 5: PACKAGING */}
            <div className="grid grid-cols-12 px-space-lg py-space-md bg-[#24113f]/40 items-center">
              <div className="col-span-4 font-headline-sm text-sm text-[#eddcff] flex items-center gap-2 font-bold">
                <span className="material-symbols-outlined text-[#ffb3af] text-[18px]">
                  recycling
                </span>{' '}
                PACKAGING WASTE
              </div>
              <div className="col-span-4 font-body-sm text-xs text-[#c4c9ac]">
                Giant non-biodegradable black plastic tubs sitting in landfills for 500 yrs
              </div>
              <div className="col-span-4 font-body-sm text-xs text-[#eddcff] flex items-center gap-1.5 font-bold">
                <span className="material-symbols-outlined text-[#c3f400] text-[18px]">
                  verified
                </span>{' '}
                100% PCR recyclable pouch. 85% reduced carbon shipping.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. COMMUNITY WALL & CALL-TO-ACTION */}
      <section className="w-full px-gutter py-space-xl max-w-7xl mx-auto border-t border-white/5 mb-8">
        <div className="bg-gradient-to-r from-[#3e2b5a] to-[#281543] rounded-2xl p-space-lg md:p-space-xl relative overflow-hidden shadow-[6px_6px_0px_0px_#c3f400] border border-white/10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center relative z-10">
            {/* LEFT COPY & ACTIONS */}
            <div className="lg:col-span-7 space-y-space-md">
              <div className="flex items-center gap-space-xs">
                <span className="font-sticker-badge bg-[#ffb3af] text-[#68000d] px-space-md py-space-xs rounded rotate-[-2deg] uppercase shadow-[2px_2px_0px_0px_#ffffff] font-bold text-xs">
                  THE RESISTANCE
                </span>
                <span className="font-label-code text-xs text-[#c3f400] uppercase font-bold">
                  52,400+ ACTIVE CARTEL MEMBERS
                </span>
              </div>
              <h2 className="font-headline-lg text-2xl md:text-3xl uppercase text-[#eddcff] tracking-tight font-bold">
                JOIN THE RESISTANCE.
                <br />
                RECLAIM YOUR TASTE BUDS.
              </h2>
              <p className="font-body-lg text-sm md:text-base text-[#c4c9ac] max-w-xl leading-relaxed">
                We don’t do generic brand ambassadors or soulless gym-shark clones. Our community votes on unreleased test batches, claims 24-hour secret flash drops, and hangs out in our discord voice channels while training.
              </p>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-space-md pt-space-xs">
                <button
                  onClick={onGoToShop}
                  className="bg-[#c3f400] text-[#1c0736] font-headline-sm text-sm uppercase px-space-lg py-space-md rounded-full shadow-[4px_4px_0px_0px_#ffffff] hover:shadow-[1px_1px_0px_0px_#ffffff] hover:translate-x-[3px] hover:translate-y-[3px] transition-all text-center flex items-center justify-center gap-2 cursor-pointer font-extrabold"
                >
                  <span className="material-symbols-outlined text-[20px]">shopping_bag</span>
                  <span>EXPLORE THE LAB DROPS</span>
                </button>
                <button
                  onClick={onOpenDiscordModal}
                  className="bg-[#160231] text-[#eddcff] font-headline-sm text-sm uppercase px-space-lg py-space-md rounded-full shadow-[3px_3px_0px_0px_#3e2b5a] hover:shadow-[1px_1px_0px_0px_#3e2b5a] hover:translate-x-[2px] hover:translate-y-[2px] transition-all text-center flex items-center justify-center gap-2 cursor-pointer font-bold border border-white/5"
                >
                  <span className="material-symbols-outlined text-[20px] text-[#7df4ff]">forum</span>
                  <span>DISCORD ACCESS PASS</span>
                </button>
              </div>
            </div>

            {/* RIGHT COMMUNITY RADAR CARD */}
            <div className="lg:col-span-5 bg-[#160231] rounded-xl p-space-md shadow-[4px_4px_0px_0px_#160231] space-y-space-sm border border-white/5">
              <div className="flex items-center justify-between pb-space-xs border-b border-white/5">
                <span className="font-label-code text-xs uppercase text-[#c4c9ac] flex items-center gap-2 font-bold">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#c3f400] animate-ping" /> LIVE LAB FEED
                </span>
                <span className="font-label-code text-xs text-[#c3f400] font-bold">SYS_ONLINE</span>
              </div>

              {/* COMMUNITY QUOTE TICKERS */}
              <div className="space-y-space-xs">
                <div className="bg-[#281543] rounded-lg p-space-sm border border-white/5">
                  <div className="flex items-center justify-between text-[#eddcff] mb-1">
                    <span className="font-body-sm text-xs font-bold">@maya_skates</span>
                    <span className="font-label-code text-[11px] text-[#c4c9ac]">3m ago</span>
                  </div>
                  <p className="font-body-sm text-xs text-[#c4c9ac] italic">
                    &quot;Strawberry Matcha actually tastes like high-grade boba. How did you do this without 40g of corn syrup? Mind broken.&quot;
                  </p>
                </div>
                <div className="bg-[#281543] rounded-lg p-space-sm border border-white/5">
                  <div className="flex items-center justify-between text-[#eddcff] mb-1">
                    <span className="font-body-sm text-xs font-bold">@dev_hassan</span>
                    <span className="font-label-code text-[11px] text-[#c4c9ac]">14m ago</span>
                  </div>
                  <p className="font-body-sm text-xs text-[#c4c9ac] italic">
                    &quot;No chalk at all. Zero. Dissolved in cold oat milk in literally 4 seconds with a spoon. Never touching standard brands again.&quot;
                  </p>
                </div>
                <div className="bg-[#281543] rounded-lg p-space-sm border border-white/5">
                  <div className="flex items-center justify-between text-[#eddcff] mb-1">
                    <span className="font-body-sm text-xs font-bold">@alex_pullup</span>
                    <span className="font-label-code text-[11px] text-[#c4c9ac]">1h ago</span>
                  </div>
                  <p className="font-body-sm text-xs text-[#c4c9ac] italic">
                    &quot;Proud to support a company that puts 2% into building local skate parks instead of paying million-dollar sponsorships.&quot;
                  </p>
                </div>
              </div>

              <div className="pt-space-xs text-center">
                <span className="font-label-code text-[10px] text-[#7df4ff] uppercase tracking-widest font-bold">
                  VERIFIED TESTIMONIAL LEDGER #PX-992
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
