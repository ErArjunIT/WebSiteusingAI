import React, { useState } from 'react';

export const FlavorsLabView: React.FC<{ onShowToast: (msg: string) => void }> = ({
  onShowToast,
}) => {
  const [candidates, setCandidates] = useState([
    {
      id: 'c1',
      name: 'Sour Gummy Worm Clear Whey',
      format: 'Clear Whey Fizz',
      desc: 'Neon electric citrus punch, zero sugar, crisp tart finish with zero gummy stickiness.',
      votes: 2194,
      protein: '25g Isolate',
      creator: '@kai_lifts.mp4',
      badge: 'CURRENT LEADER 🔥',
    },
    {
      id: 'c2',
      name: 'Boba Taro Milk Tea Isolate',
      format: 'Spark Shake',
      desc: 'Creamy Taiwanese purple taro yam, floral jasmine tea extract, and silky milk base.',
      votes: 1842,
      protein: '26g Hydrolyzed',
      creator: '@mia.macroqueen',
      badge: 'TOP CONTENDER ⚡',
    },
    {
      id: 'c3',
      name: 'Pistachio Glitch Croissant Bar',
      format: 'Crunchy Bar',
      desc: 'Real Sicilian pistachio praline drizzle over triple-baked flaky pastry crunch core.',
      votes: 1428,
      protein: '22g Bar',
      creator: '@chef_julien_paris',
      badge: 'CHEF COLLAB 🥐',
    },
    {
      id: 'c4',
      name: 'Spiced Mexican Horchata Shake',
      format: 'Spark Shake',
      desc: 'Ceylon cinnamon dusted over roasted rice milk with toasted almond essence.',
      votes: 985,
      protein: '27g Isolate',
      creator: '@carlos_iron',
      badge: 'UNDERDOG 🌶️',
    },
  ]);

  const [votedId, setVotedId] = useState<string | null>(null);

  // Propose form
  const [flavorIdea, setFlavorIdea] = useState('');
  const [flavorCategory, setFlavorCategory] = useState('Crunchy Bar');
  const [flavorDesc, setFlavorDesc] = useState('');

  // Palatability Matrix
  const [sweetness, setSweetness] = useState(65);
  const [crunch, setCrunch] = useState(85);
  const [refreshment, setRefreshment] = useState(40);

  const handleVote = (id: string, name: string) => {
    if (votedId === id) return;
    setCandidates((prev) =>
      prev.map((c) => (c.id === id ? { ...c, votes: c.votes + 1 } : c))
    );
    setVotedId(id);
    onShowToast(`VOTE RECORDED FOR "${name}"!`);
  };

  const handlePropose = (e: React.FormEvent) => {
    e.preventDefault();
    if (!flavorIdea.trim()) return;
    const newCand = {
      id: `c-${Date.now()}`,
      name: flavorIdea,
      format: flavorCategory,
      desc: flavorDesc || 'Community submitted wild experimental recipe.',
      votes: 1,
      protein: '24g Formula',
      creator: '@you_the_main_character',
      badge: 'JUST SUBMITTED ⚡',
    };
    setCandidates([newCand, ...candidates]);
    setFlavorIdea('');
    setFlavorDesc('');
    onShowToast(`"${newCand.name}" SUBMITTED TO LAB RADAR!`);
  };

  const totalVotes = candidates.reduce((s, c) => s + c.votes, 0);

  return (
    <div className="flex flex-col w-full px-gutter py-space-xl max-w-7xl mx-auto space-y-space-xl">
      {/* Header */}
      <div className="space-y-space-xs">
        <div className="flex items-center gap-space-sm flex-wrap">
          <span className="font-sticker-badge bg-[#7df4ff] text-[#00363a] px-3 py-1 rounded uppercase font-bold text-xs rotate-[-2deg]">
            🧪 LAB INCUBATOR #043
          </span>
          <span className="font-label-code text-xs text-[#c3f400] font-bold">
            VOTING LIVE // 3 DAYS REMAINING
          </span>
        </div>
        <h1 className="font-display-hero uppercase text-[#eddcff]">
          THE UNHINGED <span className="text-[#c3f400]">FLAVORS LAB</span>
        </h1>
        <p className="font-body-lg text-[#c4c9ac] max-w-2xl">
          Standard supplement companies make vanilla and chalky chocolate because it’s cheap and safe. We let the VIP Cartel vote on chaotic limited runs. The top voted candidate goes straight into production.
        </p>
      </div>

      {/* Voting Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-space-lg">
        {candidates.map((cand) => {
          const hasVoted = votedId === cand.id;
          const pct = Math.round((cand.votes / totalVotes) * 100) || 0;
          return (
            <div
              key={cand.id}
              className={`bg-[#281543] rounded-2xl p-space-lg border transition-all duration-300 relative flex flex-col justify-between ${
                hasVoted
                  ? 'border-[#c3f400] shadow-[4px_4px_0px_0px_#c3f400]'
                  : 'border-white/10 hover:border-white/30'
              }`}
            >
              <div>
                <div className="flex justify-between items-start gap-2 mb-3">
                  <span className="font-sticker-badge text-xs bg-[#ffb3af] text-[#68000d] px-2.5 py-0.5 rounded uppercase font-bold">
                    {cand.badge}
                  </span>
                  <span className="font-label-code text-xs text-[#7df4ff] bg-[#160231] px-2.5 py-0.5 rounded border border-white/5">
                    {cand.format}
                  </span>
                </div>

                <h3 className="font-headline-md text-xl md:text-2xl text-[#eddcff] uppercase mb-2">
                  {cand.name}
                </h3>
                <p className="font-body-sm text-sm text-[#c4c9ac] mb-4 leading-relaxed">
                  {cand.desc}
                </p>

                <div className="flex items-center gap-3 text-xs font-label-code text-[#c4c9ac] mb-4">
                  <span>TARGET: {cand.protein}</span>
                  <span>•</span>
                  <span>SUBMITTED BY: {cand.creator}</span>
                </div>

                {/* Vote Percentage Progress */}
                <div className="space-y-1 mb-4">
                  <div className="flex justify-between text-xs font-label-code">
                    <span className="text-[#c4c9ac]">{cand.votes.toLocaleString()} Votes</span>
                    <span className="text-[#c3f400] font-bold">{pct}%</span>
                  </div>
                  <div className="w-full h-2.5 bg-[#160231] rounded-full overflow-hidden">
                    <div
                      className="h-full bg-[#c3f400] transition-all duration-500 rounded-full"
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                </div>
              </div>

              <button
                onClick={() => handleVote(cand.id, cand.name)}
                disabled={hasVoted}
                className={`w-full py-2.5 rounded-full font-headline-sm uppercase text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer ${
                  hasVoted
                    ? 'bg-[#160231] text-[#c3f400] border border-[#c3f400]'
                    : 'bg-[#c3f400] text-[#1c0736] hover:bg-white hover:scale-[1.02] shadow-[2px_2px_0px_0px_#ffffff]'
                }`}
              >
                <span className="material-symbols-outlined text-[18px]">
                  {hasVoted ? 'how_to_reg' : 'thumb_up'}
                </span>
                <span>{hasVoted ? 'VOTE RECORDED' : 'VOTE FOR THIS FLAVOR'}</span>
              </button>
            </div>
          );
        })}
      </div>

      {/* Interactive Palatability Sensory Matrix + Submission Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-stretch">
        {/* Sensory Matrix Tuning */}
        <div className="lg:col-span-6 bg-[#24113f] rounded-2xl p-space-lg border border-white/10 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="material-symbols-outlined text-[#c3f400]">tune</span>
              <span className="font-sticker-badge bg-[#c3f400] text-[#1c0736] px-2.5 py-0.5 rounded text-xs uppercase font-bold">
                SENSOR MATRIX
              </span>
            </div>
            <h3 className="font-headline-md text-xl uppercase text-[#eddcff] mb-2">
              PALATABILITY BENCHMARK TUNER
            </h3>
            <p className="font-body-sm text-xs text-[#c4c9ac] mb-6">
              Dial in your sensory profile. Our algorithm matches you with the ideal unreleased drop.
            </p>

            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-xs font-label-code mb-1">
                  <span className="text-[#eddcff]">SWEETNESS DENSITY</span>
                  <span className="text-[#c3f400]">{sweetness}%</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={sweetness}
                  onChange={(e) => setSweetness(Number(e.target.value))}
                  className="w-full accent-[#c3f400] cursor-pointer"
                />
              </div>

              <div>
                <div className="flex justify-between text-xs font-label-code mb-1">
                  <span className="text-[#eddcff]">CRUNCH MULTIPLIER</span>
                  <span className="text-[#ffb3af]">{crunch}%</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={crunch}
                  onChange={(e) => setCrunch(Number(e.target.value))}
                  className="w-full accent-[#ffb3af] cursor-pointer"
                />
              </div>

              <div>
                <div className="flex justify-between text-xs font-label-code mb-1">
                  <span className="text-[#eddcff]">TART REFRESHMENT</span>
                  <span className="text-[#7df4ff]">{refreshment}%</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={refreshment}
                  onChange={(e) => setRefreshment(Number(e.target.value))}
                  className="w-full accent-[#7df4ff] cursor-pointer"
                />
              </div>
            </div>
          </div>

          <div className="mt-6 p-4 bg-[#160231] rounded-xl border border-white/5 font-label-code text-xs">
            <span className="text-[#c4c9ac] block">ALGORITHM FORMULA RECOMMENDATION:</span>
            <span className="text-[#c3f400] font-bold text-sm block mt-1">
              {crunch > 60
                ? 'COSMIC CRUNCH OR CARAMEL PRETZEL SUPER-BAR'
                : refreshment > 60
                ? 'CYBER BERRY CLEAR WHEY ISOLATE'
                : 'NUCLEAR BROWNIE BATTER WHEY'}
            </span>
          </div>
        </div>

        {/* Propose Your Flavor Form */}
        <div className="lg:col-span-6 bg-[#33204e] rounded-2xl p-space-lg border border-white/10 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="material-symbols-outlined text-[#ffb3af]">psychology</span>
              <span className="font-sticker-badge bg-[#ffb3af] text-[#68000d] px-2.5 py-0.5 rounded text-xs uppercase font-bold">
                COMMUNITY PROPOSALS
              </span>
            </div>
            <h3 className="font-headline-md text-xl uppercase text-[#eddcff] mb-2">
              PROPOSE AN UNHINGED FORMULA
            </h3>
            <p className="font-body-sm text-xs text-[#c4c9ac] mb-4">
              Got a dessert dream that legacy gym brands would deem &quot;too risky&quot;? Put it on our food science radar.
            </p>

            <form onSubmit={handlePropose} className="space-y-3">
              <div>
                <label className="font-label-code text-[11px] text-[#c4c9ac] uppercase block mb-1">
                  FLAVOR TITLE
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Yuzu Lychee Croffle or Toasted Marshmallow"
                  value={flavorIdea}
                  onChange={(e) => setFlavorIdea(e.target.value)}
                  className="w-full bg-[#160231] border border-white/10 rounded-xl px-4 py-2 text-xs text-[#eddcff] font-body-sm outline-none focus:ring-2 focus:ring-[#c3f400]"
                />
              </div>

              <div>
                <label className="font-label-code text-[11px] text-[#c4c9ac] uppercase block mb-1">
                  PRODUCT FORMAT
                </label>
                <select
                  value={flavorCategory}
                  onChange={(e) => setFlavorCategory(e.target.value)}
                  className="w-full bg-[#160231] border border-white/10 rounded-xl px-4 py-2 text-xs text-[#eddcff] font-body-sm outline-none cursor-pointer"
                >
                  <option value="Crunchy Bar">Crunchy Bar (Triple-Baked)</option>
                  <option value="Clear Whey Fizz">Clear Whey Fizz (Micro-Dissolve)</option>
                  <option value="Spark Shake">Spark Shake (Creamy Dessert)</option>
                  <option value="Intra-Workout Fuel">Intra-Workout Amino Fuel</option>
                </select>
              </div>

              <div>
                <label className="font-label-code text-[11px] text-[#c4c9ac] uppercase block mb-1">
                  FLAVOR NOTES &amp; INGREDIENTS
                </label>
                <textarea
                  rows={2}
                  placeholder="Describe crunch textures, swirls, or freeze-dried notes..."
                  value={flavorDesc}
                  onChange={(e) => setFlavorDesc(e.target.value)}
                  className="w-full bg-[#160231] border border-white/10 rounded-xl px-4 py-2 text-xs text-[#eddcff] font-body-sm outline-none focus:ring-2 focus:ring-[#c3f400] resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-[#c3f400] text-[#1c0736] font-headline-sm uppercase text-xs font-bold rounded-full shadow-[3px_3px_0px_0px_#ffffff] hover:shadow-[1px_1px_0px_0px_#ffffff] hover:translate-x-[2px] hover:translate-y-[2px] transition-all cursor-pointer"
              >
                SUBMIT TO LAB CHEFS
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
