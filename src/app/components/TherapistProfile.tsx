import { useParams, Link } from 'react-router';
import { ArrowLeft, Mail, Award, Calendar, Globe } from 'lucide-react';
import { therapists } from '../data/therapists';


export function TherapistProfile() {
  const { id } = useParams<{ id: string }>();
  const therapist = therapists.find(t => t.id === id);

  if (!therapist) {
    return (
      <div className="min-h-screen w-full flex items-center justify-center bg-white px-6">
        <div className="text-center">
          <h1 className="text-2xl text-slate-800 mb-4">Terapeutti ei löytynyt</h1>
          <Link
            to="/"
            className="text-slate-600 hover:text-slate-900 flex items-center gap-2 justify-center"
          >
            <ArrowLeft className="w-4 h-4" />
            Palaa etusivulle
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full overflow-y-auto bg-gradient-to-br from-slate-50 via-white to-slate-100">
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, rgb(0 0 0) 1px, transparent 0)`,
        backgroundSize: '40px 40px'
      }}></div>

      <Link
        to="/"
        className="fixed top-6 left-6 z-30 flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-colors text-sm tracking-wide bg-white/80 backdrop-blur-sm px-3 py-2 rounded-md shadow-sm"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>TAKAISIN</span>
      </Link>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 w-full">

          {/* On mobile: photo first, then info */}
          {/* Right Column: Photo & Contact — shown first on mobile */}
          <div className="lg:col-span-2 lg:order-2">
            <div className="w-full space-y-6 lg:space-y-8">
              <div className="w-full max-w-sm mx-auto lg:max-w-none">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-slate-200 to-slate-300 rounded-lg transform rotate-3"></div>
                  <img
                    src={therapist.image}
                    alt={therapist.name}
                    className="relative w-full h-auto rounded-lg shadow-2xl"
                  />
                </div>
              </div>

              {/* Contact Card */}
              <div className="bg-white border-2 border-slate-300 rounded-lg p-6 space-y-6 shadow-lg">
                <div className="flex items-center gap-2 pb-4 border-b border-slate-200">
                  <Calendar className="w-5 h-5 text-slate-400" />
                  <h2 className="text-lg text-slate-900 tracking-wide">Ota yhteyttä</h2>
                </div>

                <div className="space-y-4">
                  <a
                    href={`https://wa.me/${therapist.phone.replace(/\s+/g, '').replace('+', '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-4 py-3 bg-green-500 hover:bg-green-600 text-white rounded-md transition-colors shadow-sm"
                  >
                    <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    <span className="text-sm font-medium tracking-wide">{therapist.phone}</span>
                  </a>

                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-slate-500 text-xs tracking-wider uppercase">
                      <Mail className="w-3.5 h-3.5" />
                      <span>Sähköposti</span>
                    </div>
                    <a
                      href={`mailto:${therapist.email}`}
                      className="block text-slate-900 hover:text-slate-600 transition-colors break-all tracking-wide text-sm"
                    >
                      {therapist.email}
                    </a>
                  </div>

                  {therapist.website && (
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-slate-500 text-xs tracking-wider uppercase">
                        <Globe className="w-3.5 h-3.5" />
                        <span>Verkkosivut</span>
                      </div>
                      <a
                        href={`https://${therapist.website}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-slate-900 hover:text-slate-600 transition-colors break-all tracking-wide text-sm"
                      >
                        {therapist.website}
                      </a>
                    </div>
                  )}
                </div>
{therapist.bookingUrl && (
  <a
    href={therapist.bookingUrl}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center justify-center gap-2 w-full px-10 py-4 bg-white border-2 border-slate-900 text-slate-900 rounded-md hover:bg-slate-50 transition-all duration-00 shadow-sm text-sm tracking-widest font-medium"
  >
    <Calendar className="w-4 h-4" />
    VARAA AIKA
  </a>
        )}
              </div>
            </div>
          </div>

          {/* Left Column: Info */}
          <div className="lg:col-span-3 lg:order-1">
            <div className="w-full space-y-6 lg:space-y-8">
              <div className="space-y-4 pb-6 lg:pb-8 border-b-2 border-slate-200">
                <div className="flex flex-wrap items-center gap-2">
  <div className="inline-block px-3 py-1 bg-slate-100 border border-slate-200 rounded-md">
    <span className="text-xs tracking-wider text-slate-600 uppercase">Psykoterapeutti</span>
  </div>
  {therapist.tags?.map((tag, index) => (
    <div key={index} className="inline-block px-3 py-1 bg-slate-100 border border-slate-200 rounded-md">
      <span className="text-xs tracking-wider text-slate-600 uppercase">{tag}</span>
    </div>
  ))}
</div>
                <h1 className="text-3xl lg:text-5xl text-slate-900 tracking-tight">{therapist.name}</h1>
<div className="space-y-1">
  {(Array.isArray(therapist.title) ? therapist.title : [therapist.title]).map((line, index) => (
    <p key={index} className="text-base lg:text-lg text-slate-600 tracking-wide">{line}</p>
  ))}
</div>
{therapist.languages && (
  <div className="flex gap-2 items-center">
    {therapist.languages.map((lang, index) => (
      <img
        key={index}
        src={`https://flagcdn.com/24x18/${lang}.png`}
        alt={lang}
        className="rounded-sm shadow-sm"
        width={24}
        height={18}
      />
    ))}
  </div>
)}
                <div className="flex flex-wrap gap-2 pt-3">
                  {therapist.specialties.map((specialty, index) => (
                    <span
                      key={index}
                      className="px-3 lg:px-4 py-1.5 lg:py-2 bg-white border-2 border-slate-200 text-slate-700 rounded-md text-sm tracking-wide hover:border-slate-300 transition-colors"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-slate-400" />
                  <h2 className="text-lg text-slate-900 tracking-wide">Tietoa minusta</h2>
                </div>
                <div className="pl-4 lg:pl-7 space-y-4 lg:space-y-5">
                  {therapist.bio.split('\n\n').map((paragraph, index) => (
                    <p key={index} className="text-slate-600 leading-relaxed text-base text-justify">{paragraph}</p>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-slate-400" />
                  <h2 className="text-lg text-slate-900 tracking-wide">Koulutus</h2>
                </div>
                <div className="pl-4 lg:pl-7 space-y-4 lg:space-y-5">
                  {therapist.education.split('\n\n').map((paragraph, index) => (
                    <p key={index} className="text-slate-600 leading-relaxed text-base text-justify">{paragraph}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
