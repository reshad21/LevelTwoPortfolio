"use client";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-slate-950 text-slate-200 py-12 md:py-16 px-4 md:px-8 lg:px-12 rounded-3xl shadow-2xl border border-slate-800/50 group">
      {/* Background Glows */}
      <div className="absolute top-0 right-1/4 w-64 h-64 md:w-[300px] md:h-[300px] bg-indigo-500/10 rounded-full blur-[100px] -z-10 mix-blend-screen transition-opacity duration-700 opacity-50 group-hover:opacity-70"></div>
      <div className="absolute bottom-0 left-1/4 w-64 h-64 md:w-[300px] md:h-[300px] bg-purple-500/10 rounded-full blur-[100px] -z-10 mix-blend-screen transition-opacity duration-700 opacity-50 group-hover:opacity-70"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-12">
          {/* About Section */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-indigo-400 uppercase tracking-widest mb-6">
              About Us
            </h3>
            <p className="text-sm text-slate-400 leading-relaxed text-balance">
              We provide high-quality blogs and insights on technology, travel,
              personal growth, and more. Our goal is to inspire and inform.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-indigo-400 uppercase tracking-widest mb-6">
              Quick Links
            </h3>
            <ul className="space-y-3 text-sm font-medium text-slate-300">
              <li>
                <a href="#" className="hover:text-indigo-400 transition-colors flex items-center space-x-2 group/link">
                  <span className="text-indigo-500 opacity-0 -translate-x-2 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all">→</span>
                  <span>Home</span>
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-indigo-400 transition-colors flex items-center space-x-2 group/link">
                  <span className="text-indigo-500 opacity-0 -translate-x-2 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all">→</span>
                  <span>About Us</span>
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-indigo-400 transition-colors flex items-center space-x-2 group/link">
                  <span className="text-indigo-500 opacity-0 -translate-x-2 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all">→</span>
                  <span>Blogs</span>
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-indigo-400 transition-colors flex items-center space-x-2 group/link">
                  <span className="text-indigo-500 opacity-0 -translate-x-2 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all">→</span>
                  <span>Contact Us</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-indigo-400 uppercase tracking-widest mb-6">
              Contact Us
            </h3>
            <div className="space-y-3 text-sm text-slate-400">
              <p className="flex items-center space-x-3">
                <span className="text-indigo-500">📧</span>
                <span className="break-all">rasheduzzamanreshad@gmail.com</span>
              </p>
              <p className="flex items-center space-x-3">
                <span className="text-indigo-500">📱</span>
                <span>+880 1787170612</span>
              </p>
              <p className="flex items-center space-x-3">
                <span className="text-indigo-500">📍</span>
                <span>8200 Barishal, Bangladesh</span>
              </p>
            </div>
          </div>

          {/* Social Media Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-indigo-400 uppercase tracking-widest mb-6">
              Follow Us
            </h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-900 border border-slate-800 text-slate-400 hover:bg-indigo-600 hover:text-white hover:border-indigo-500 hover:-translate-y-1 transition-all duration-300 shadow-lg"
                aria-label="Facebook"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-4 h-4"
                >
                  <path d="M9 8H7v4h2v12h5V12h3.642L18 8h-4V6c0-.825.275-1 1-1h3V0h-4c-3.866 0-6 2.239-6 6v2z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-900 border border-slate-800 text-slate-400 hover:bg-indigo-600 hover:text-white hover:border-indigo-500 hover:-translate-y-1 transition-all duration-300 shadow-lg"
                aria-label="Twitter"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-4 h-4"
                >
                  <path d="M24 4.557a9.83 9.83 0 0 1-2.357.647 4.862 4.862 0 0 0 2.133-2.69 9.725 9.725 0 0 1-3.127 1.184 4.918 4.918 0 0 0-8.384 4.482 13.945 13.945 0 0 1-10.149-5.146c-.438.757-.685 1.64-.685 2.58 0 1.78.906 3.356 2.283 4.285a4.904 4.904 0 0 1-2.229-.616c-.054 2.213 1.524 4.29 3.775 4.753a4.906 4.906 0 0 1-2.223.084 4.92 4.92 0 0 0 4.604 3.416A9.869 9.869 0 0 1 0 21.541a13.94 13.94 0 0 0 7.548 2.211c9.142 0 14.307-7.721 14.307-14.426 0-.22-.005-.437-.015-.653A10.243 10.243 0 0 0 24 4.557z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-900 border border-slate-800 text-slate-400 hover:bg-indigo-600 hover:text-white hover:border-indigo-500 hover:-translate-y-1 transition-all duration-300 shadow-lg"
                aria-label="Instagram"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-4 h-4"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.206.057 2.03.24 2.725.512a5.49 5.49 0 0 1 2.007 1.315 5.493 5.493 0 0 1 1.315 2.007c.273.695.455 1.519.512 2.725.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.057 1.206-.24 2.03-.512 2.725a5.487 5.487 0 0 1-1.315 2.007 5.487 5.487 0 0 1-2.007 1.315c-.695.273-1.519.455-2.725.512-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.206-.057-2.03-.24-2.725-.512a5.487 5.487 0 0 1-2.007-1.315 5.487 5.487 0 0 1-1.315-2.007c-.273-.695-.455-1.519-.512-2.725C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.85c.057-1.206.24-2.03.512-2.725a5.49 5.49 0 0 1 1.315-2.007A5.49 5.49 0 0 1 6.077 2.675c.695-.273 1.519-.455 2.725-.512C8.416 2.175 8.796 2.163 12 2.163zM12 0C8.736 0 8.332.013 7.052.07 5.773.128 4.775.305 3.987.596 3.2.886 2.549 1.261 1.979 1.831A9.72 9.72 0 0 0 .596 3.987C.305 4.775.128 5.773.07 7.052.013 8.332 0 8.736 0 12s.013 3.668.07 4.948c.058 1.279.235 2.277.526 3.065a9.72 9.72 0 0 0 1.383 2.155 9.72 9.72 0 0 0 2.155 1.383c.788.291 1.786.468 3.065.526 1.279.058 1.683.07 4.948.07s3.668-.013 4.948-.07c1.279-.058 2.277-.235 3.065-.526a9.72 9.72 0 0 0 2.155-1.383 9.72 9.72 0 0 0 1.383-2.155c.291-.788.468-1.786.526-3.065.058-1.279.07-1.683.07-4.948s-.013-3.668-.07-4.948c-.058-1.279-.235-2.277-.526-3.065a9.72 9.72 0 0 0-1.383-2.155A9.72 9.72 0 0 0 20.017.596C19.229.305 18.231.128 16.952.07 15.672.013 15.268 0 12 0z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 pt-8 border-t border-slate-800/80 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-sm text-slate-500">
            © {new Date().getFullYear()} <span className="text-indigo-400 font-semibold">PortfolioSite</span>. All rights reserved.
          </div>
          <div className="text-sm text-slate-600 flex space-x-4">
            <a href="#" className="hover:text-indigo-400 transition-colors">Privacy Policy</a>
            <span>•</span>
            <a href="#" className="hover:text-indigo-400 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
