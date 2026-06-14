import { ChevronDown } from 'lucide-react';
import { Link } from 'react-router';
import { useState, useMemo, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { therapists } from '../data/therapists';

function shuffleArray<T>(array: T[]): T[] {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

export function TherapyHero() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [dropdownPos, setDropdownPos] = useState({ top: 0, left: 0 });
  const buttonRef = useRef<HTMLButtonElement>(null);
  const closeTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const shuffledTherapists = useMemo(() => shuffleArray(therapists), []);

  useEffect(() => {
    if (isDropdownOpen && buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      const dropdownWidth = 200;
      const windowWidth = window.innerWidth;
      // On mobile, open below the button instead of to the side
      const isMobile = windowWidth < 1024;
      if (isMobile) {
        setDropdownPos({
          top: rect.bottom + 8,
          left: Math.min(rect.left, windowWidth - dropdownWidth - 16),
        });
      } else {
        setDropdownPos({
          top: rect.top + rect.height / 2,
          left: rect.right + 12,
        });
      }
    }
  }, [isDropdownOpen]);

  const handleMouseEnter = () => {
    if (closeTimeout.current) clearTimeout(closeTimeout.current);
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    closeTimeout.current = setTimeout(() => setIsDropdownOpen(false), 150);
  };

  const handleButtonClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <section className="relative min-h-screen w-full bg-gradient-to-br from-slate-50 via-white to-slate-100">
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, rgb(0 0 0) 1px, transparent 0)`,
        backgroundSize: '40px 40px'
      }}></div>

      <div className="relative h-full max-w-7xl mx-auto px-6 lg:px-12 py-16 lg:py-0 flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 w-full items-center">
          <div className="space-y-6 lg:space-y-8">
            <div className="space-y-4 lg:space-y-5">
              <div className="inline-block px-4 py-1.5 bg-emerald-50 border border-emerald-100 rounded-full">
                <span className="text-xs tracking-wide text-emerald-700 uppercase">Voimaa Suhteisiin</span>
              </div>
              <h1 className="text-3xl lg:text-5xl text-slate-900 leading-[1.15] tracking-tight">
                Psykoterapiapalvelu
                <span className="block mt-2 text-4xl lg:text-7xl bg-gradient-to-r from-emerald-700 via-emerald-600 to-emerald-500 bg-clip-text text-transparent font-light tracking-tight pb-2">Raparperitaivas</span>
              </h1>
              <p className="text-base lg:text-lg text-slate-600 max-w-md leading-relaxed">
                Psykoterapiapalvelut etänä ja paikan päällä.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 items-center">
              <Link
                to="/therapists"
                className="px-6 lg:px-8 py-3 lg:py-3.5 bg-slate-900 text-white rounded-md hover:bg-slate-800 transition-all duration-200 shadow-md hover:shadow-lg text-sm tracking-wide font-medium inline-block"
              >
                VARAA AIKA
              </Link>
              <div
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  ref={buttonRef}
                  onClick={handleButtonClick}
                  className="px-6 lg:px-8 py-3 lg:py-3.5 bg-white text-slate-700 border-2 border-slate-300 rounded-md hover:border-slate-400 hover:bg-slate-50 transition-all duration-200 flex items-center gap-2 text-sm tracking-wide font-medium shadow-sm"
                >
                  PSYKOTERAPEUTIT
                  <ChevronDown className={`w-4 h-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
                </button>
              </div>
            </div>

            <div className="pt-4 lg:pt-6 border-t border-slate-200">
              <div className="space-y-1">
                <a
                  href="https://www.instagram.com/voimaasuhteisiin"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-slate-600 hover:text-emerald-700 transition-colors"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                  <span className="text-sm">@voimaasuhteisiin</span>
                </a>
                <a
                  href="https://www.facebook.com/raparperitaivas.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-slate-600 hover:text-emerald-700 transition-colors"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                  <span className="text-sm">Raparperitaivas</span>
                </a>
                <img
                  src="/images/logo3.png"
                  alt="Raparperitaivas logo"
                  className="w-32 mt-1"
                />
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <ServiceCard
              title="Suhdepsykoterapiat"
              description={'Perhe- ja paripsykoterapioissamme hoidon kohteena ovat ihmissuhteet: Parisuhde, sisarussuhde, vanhempi-lapsi -suhteet tai muu ihmissuhde.\n\nDialogis-voimavarakeskeisen psykoterapiahoidon ytimessä on yhteistyösuhteen laatu, joka on myös tutkitusti kaikkien psykoterapioiden vaikuttavuuden keskeisin elementti.'}
            />
            <ServiceCard
              title="Muut terapiapalvelut"
              description="Tutustu myös muihin ammmattilaiskohtaisiin terapiapalveluihimme henkilökohtaisten sivustojemme kautta."
            />
            <ServiceCard
              title="Mikä ihmeen raparperitaivas?"
              description="Tutustu raparperitaivaan näköiseen mielenmaisemaan ja ota yhteyttä!"
              isClickable={true}
              href="/about"
              highlight={true}
            />
          </div>
        </div>
      </div>

      {isDropdownOpen && createPortal(
        <div
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={{
            position: 'fixed',
            top: dropdownPos.top,
            left: dropdownPos.left,
            transform: window.innerWidth < 1024 ? 'none' : 'translateY(-50%)',
            width: '200px',
            maxHeight: '320px',
            overflowY: 'auto',
            zIndex: 9999,
            backgroundColor: 'white',
            borderRadius: '8px',
            boxShadow: '0 25px 50px -12px rgba(0,0,0,0.25)',
            border: '2px solid #f1f5f9'
          }}
        >
          {shuffledTherapists.map((therapist) => (
            <Link
              key={therapist.id}
              to={`/therapist/${therapist.id}`}
              className="block px-8 py-2 hover:bg-slate-50 transition-colors border-b border-slate-100 last:border-b-0"
              onClick={() => setIsDropdownOpen(false)}
            >
              <div className="text-sm text-slate-900 tracking-wide mb-1">{therapist.name}</div>
            </Link>
          ))}
        </div>,
        document.body
      )}
    </section>
  );
}

interface ServiceCardProps {
  title: string;
  description: string;
  isClickable?: boolean;
  href?: string;
  highlight?: boolean;
}

function ServiceCard({ title, description, isClickable, href, highlight }: ServiceCardProps) {
  const content = (
    <div className="space-y-2">
      <h3 className="text-xl text-slate-900 tracking-tight group-hover:text-slate-700 transition-colors">{title}</h3>
      <div className="space-y-2">
        {description.split('\n\n').map((paragraph, index) => (
          <p key={index} className={`text-slate-600 text-sm leading-relaxed text-justify ${highlight ? 'underline decoration-emerald-300 decoration-1 underline-offset-2' : ''}`}>{paragraph}</p>
        ))}
      </div>
    </div>
  );

  const borderColor = highlight ? "border-emerald-600" : "border-slate-300";
  const className = `bg-white border-2 ${borderColor} rounded-lg p-6 shadow-lg hover:border-emerald-400 hover:shadow-2xl transition-all duration-300 group ` + (isClickable ? "cursor-pointer block" : "");

  if (isClickable && href) {
    return (
      <Link to={href} className={className}>
        {content}
      </Link>
    );
  }

  return (
    <div className={className}>
      {content}
    </div>
  );
}
