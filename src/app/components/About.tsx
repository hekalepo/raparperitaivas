import { Link } from 'react-router';
import { ArrowLeft } from 'lucide-react';

export function About() {
  return (
    <div className="min-h-screen w-full overflow-y-auto bg-gradient-to-br from-slate-50 via-white to-slate-100">
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, rgb(0 0 0) 1px, transparent 0)`,
        backgroundSize: '40px 40px'
      }}></div>

      {/* Back Button */}
      <Link
        to="/"
        className="fixed top-6 left-6 z-20 flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-colors text-sm tracking-wide bg-white/80 backdrop-blur-sm px-3 py-2 rounded-md shadow-sm"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>TAKAISIN</span>
      </Link>

      {/* Content Container */}
      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 py-20 lg:py-16 flex items-center min-h-screen">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 w-full items-center">

          {/* Left Column: Group Photo */}
          <div className="flex items-center justify-center">
            <div className="w-full max-w-lg">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-200 to-emerald-300 rounded-lg transform rotate-3"></div>
                <img
                  src="/images/me1.jpg"
                  alt="Raparperitaivas tiimi"
                  className="relative w-full h-auto rounded-lg shadow-2xl"
                />
              </div>
            </div>
          </div>

          {/* Right Column: Ideology */}
          <div className="flex items-center">
            <div className="w-full space-y-5">
              {/* Header */}
              <div className="space-y-3 pb-4 border-b-2 border-slate-200">
                <div className="inline-block px-3 py-1 bg-emerald-50 border border-emerald-100 rounded-md">
                  <span className="text-xs tracking-wider text-emerald-700 uppercase">Meistä</span>
                </div>
                <h1 className="text-3xl lg:text-5xl text-slate-900 tracking-tight">
                  Mikä
                  <span className="block mt-2 bg-gradient-to-r from-emerald-700 via-emerald-600 to-emerald-500 bg-clip-text text-transparent pb-2">Raparperitaivas?</span>
                </h1>
              </div>

              {/* Ideology Content */}
              <div className="space-y-3">
                <p className="text-slate-600 leading-relaxed text-base text-justify">
                  Kansantaiteilija Gösta Sundvist maalasi raparperitaivaasta laulaessaan taulun, jossa omenapuun alta löytyy paikka olla ja ihmetellä itseä, muita ja ympäristöä.
                </p>
                <p className="text-slate-600 leading-relaxed text-base text-justify">
                  Psykoterapeutteina ja ystävinä olemme päättäneet luoda tämän jaetun raparperitaivaan yhteiseksi suhdepsykoterapioiden ammattitaidon kehittämisen alustaksi, johon juurtua ja josta kasvaa. Luotamme siihen, että pitämällä itsemme liikkeessä, voimme myös parhaalla mahdollisella tavalla auttaa ja tukea asiakkaidemme prosesseja.
                </p>
                <p className="text-slate-600 leading-relaxed text-base text-justify">
                  Kiitämme jo etukäteen asiakkaitamme yhteisesti aloittamastamme matkasta kohti tulevaa.
                </p>
                <div className="pt-4">
                  <Link
                    to="/therapists"
                    className="inline-block px-8 py-3.5 bg-slate-900 text-white rounded-md hover:bg-slate-800 transition-all duration-200 shadow-md hover:shadow-lg text-sm tracking-wide font-medium"
                  >
                    TUTUSTU TERAPEUTTEIHIN
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
