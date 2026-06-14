import { Link } from 'react-router';
import { ArrowLeft } from 'lucide-react';
import { useMemo } from 'react';
import { therapists } from '../data/therapists';

function shuffleArray<T>(array: T[]): T[] {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

export function TherapistGallery() {
  const shuffledTherapists = useMemo(() => shuffleArray(therapists), []);

  return (
    <div className="min-h-screen w-full overflow-y-auto bg-gradient-to-br from-slate-50 via-white to-slate-100">
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, rgb(0 0 0) 1px, transparent 0)`,
        backgroundSize: '40px 40px'
      }}></div>

      <Link
        to="/"
        className="fixed top-6 left-6 z-20 flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-colors text-sm tracking-wide bg-white/80 backdrop-blur-sm px-3 py-2 rounded-md shadow-sm"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>TAKAISIN</span>
      </Link>

      <div className="relative min-h-screen py-20 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10 lg:mb-16">
            <div className="inline-block px-4 py-1.5 bg-emerald-50 border border-emerald-100 rounded-full mb-4 lg:mb-6">
              <span className="text-xs tracking-wide text-emerald-700 uppercase">Ammattilaisemme</span>
            </div>
            <h1 className="text-3xl lg:text-5xl text-slate-900 tracking-tight mb-3 lg:mb-4">
              Psykoterapeutit
            </h1>
            <p className="text-base lg:text-lg text-slate-600 max-w-2xl mx-auto">
              Tutustu ammattitaitoisiin psykoterapeutteihin ja löydä seuraavat askeleenne.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
            {shuffledTherapists.map((therapist) => (
              <Link
                key={therapist.id}
                to={`/therapist/${therapist.id}`}
                className="group block"
              >
                <div className="bg-white border-2 border-slate-300 rounded-lg overflow-hidden shadow-lg hover:border-emerald-400 hover:shadow-2xl transition-all duration-300">
                  <div className="relative overflow-hidden aspect-[3/4]">
                    <img
                      src={therapist.image}
                      alt={therapist.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4 lg:p-6 space-y-3">
                    <h2 className="text-xl lg:text-2xl text-slate-900 tracking-tight group-hover:text-emerald-700 transition-colors">
                      {therapist.name}
                    </h2>
            <p className="text-slate-600 text-sm lg:text-base">
          {Array.isArray(therapist.title) ? therapist.title.join(" · ") : therapist.title}
                </p>
                    <div className="flex flex-wrap gap-2 pt-2">
                      {therapist.specialties.slice(0, 3).map((specialty, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-xs border border-slate-200"
                        >
                          {specialty}
                        </span>
                      ))}
                  </div>
                    <div className="pt-3 lg:pt-4">
                      <span className="text-emerald-700 text-sm tracking-wide group-hover:underline">
                        Lue lisää →
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
