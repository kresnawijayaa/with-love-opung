import React, { useEffect, useRef, useState } from "react";
import song1 from "../assets/song1.mp3";
import { PlayIcon, PauseIcon } from "@heroicons/react/24/solid";
import opungImage from "../assets/opung1.jpeg";
import opungImage1 from "../assets/opung12.jpeg";
import opungImage2 from "../assets/opung6.jpeg";
import opungImage3 from "../assets/opung8.jpeg";
import opungImage4 from "../assets/opung9.jpeg";
import opungImage5 from "../assets/opung10.jpeg";
import opungImage6 from "../assets/opung11.jpeg";
import opungImage7 from "../assets/opung14.jpeg";
import opungImage8 from "../assets/opung13.jpeg";
import opungImage9 from "../assets/opung15.jpeg";
import opungImage10 from "../assets/opung16.jpeg";
import opungImage11 from "../assets/opung17.jpeg";
import opungImage12 from "../assets/opung18.jpeg";
import opungImage13 from "../assets/opung19.jpeg";
import opungImage14 from "../assets/opung20.jpeg";
import opungImage15 from "../assets/opung21.jpeg";
import opungImage16 from "../assets/opung22.jpeg";

const Home = () => {
  const [invitationOpen, setInvitationOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const playAudio = () => {
    if (audioRef.current) {
      audioRef.current.play().catch(error => console.error("Error playing audio:", error));
      setIsPlaying(true);
    }
  };

  const pauseAudio = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  const handleOpenButtonClick = () => {
    setInvitationOpen(true);
    playAudio();
  };

  return (
    <>
      <div>
        <audio
          ref={audioRef}
          src={song1}
          loop
          // preload="auto" // Bisa ditambahkan untuk memuat audio lebih awal
        />
        {invitationOpen ? (
          <div className='fixed bottom-5 right-5 z-50'>
            {!isPlaying ? (
              <button
                onClick={playAudio}
                className='w-12 h-12 bg-neutral-700 opacity-60 hover:opacity-100 text-neutral-200 rounded-full flex items-center justify-center shadow-lg'
                aria-label="Play audio"
              >
                <PlayIcon className='h-8 w-8' />
              </button>
            ) : (
              <button
                onClick={pauseAudio}
                className='w-12 h-12 bg-neutral-700 opacity-60 hover:opacity-100 text-neutral-200 rounded-full flex items-center justify-center shadow-lg'
                aria-label="Pause audio"
              >
                <PauseIcon className='h-8 w-8' />
              </button>
            )}
          </div>
        ) : null}
      </div>

      <div
        className={`bg-gray-900 overflow-hidden ${
          invitationOpen ? "" : "h-screen flex flex-col" // Modifikasi untuk footer
        }`}
      >
        <div className={`isolate relative ${invitationOpen ? "" : "flex-grow"}`}> {/* Modifikasi untuk footer */}
          <div
            className='absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80'
            aria-hidden='true'
          >
            <div
              className='relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]'
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
            />
          </div>
          <div
            className='absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]'
            aria-hidden='true'
          >
            <div
              className='relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]'
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
            />
          </div>
          {/* xxx */}
          <div className='h-full mx-8 my-16'>
            <div className='text-center'>
              <div className='w-64 h-64 mx-auto mb-12'>
                <img
                  src={opungImage}
                  alt='Opung'
                  className='w-full h-full object-cover rounded-full'
                />
              </div>
              <h1
                className='mt-6 text-3xl sm:text-5xl text-white leading-tight' // Adjusted leading
                style={{ fontFamily: '"Great Vibes", cursive' }}
              >
                In Loving Memory of Our Beloved Opung
              </h1>
              <p className='mt-10 sm:mt-6 sm:text-4xl text-2xl leading-6 text-gray-300'>
                ALVA ROSE MARY
              </p>
              <p className='mt-2 sm:mt-4 text-sm leading-6 text-gray-300'>
                [ 30 Oktober 1948 - 28 Mei 2025 ]
              </p>
              {!invitationOpen ? (
                <div className='mt-10 flex items-center justify-center gap-x-6'>
                  <a // Mengganti button menjadi <a> untuk konsistensi, tapi bisa juga button
                    onClick={handleOpenButtonClick}
                    className='hover:scale-105 transition duration-300 cursor-pointer text-xs font-semibold leading-6 text-white border px-4 py-2 rounded-xl'
                  >
                    Blessed Memories <span aria-hidden='true'>→</span>
                  </a>
                </div>
              ) : (
                <div className='mt-2 items-center justify-center gap-x-6'>
                  {/* ===== */}
                  <section>
                    <div className='mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8'> {/* py-8 ditambahkan */}
                      <ul className='grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mt-8'>
                        {[
                          opungImage1,
                          opungImage2,
                          opungImage3,
                          opungImage4,
                        ].map((src, idx) => (
                          <li key={idx}>
                            <a href="#" className='group block overflow-hidden rounded-lg'> {/* Ditambahkan href dan rounded-lg */}
                              <img
                                src={src}
                                alt={`Memory ${idx + 1}`} // Alt text lebih deskriptif
                                className='h-[250px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[300px]'
                              />
                            </a>
                          </li>
                        ))}
                      </ul>

                      <ul className='grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mt-4'>
                        {[
                          opungImage5,
                          opungImage6,
                          opungImage7,
                          opungImage8,
                        ].map((src, idx) => (
                          <li key={idx}>
                            <a href="#" className='group block overflow-hidden rounded-lg'>
                              <img
                                src={src}
                                alt={`Memory ${idx + 5}`}
                                className='h-[250px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[300px]'
                              />
                            </a>
                          </li>
                        ))}
                      </ul>

                      <ul className='grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mt-4'>
                        {[
                          opungImage9,
                          opungImage10,
                          opungImage11,
                          opungImage12,
                        ].map((src, idx) => (
                          <li key={idx}>
                            <a href="#" className='group block overflow-hidden rounded-lg'>
                              <img
                                src={src}
                                alt={`Memory ${idx + 9}`}
                                className='h-[250px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[300px]'
                              />
                            </a>
                          </li>
                        ))}
                      </ul>

                      <ul className='grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mt-4 mb-8 sm:mb-2'>
                        {[
                          opungImage13,
                          opungImage14,
                          opungImage15,
                          opungImage16,
                        ].map((src, idx) => (
                          <li key={idx}>
                            <a href="#" className='group block overflow-hidden rounded-lg'>
                              <img
                                src={src}
                                alt={`Memory ${idx + 13}`}
                                className='h-[250px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[300px]'
                              />
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </section>
                  {/* ===== */}
                  <a
                    href='https://drive.google.com/drive/folders/1KClSVdkXct-nRd7mwDhkDjrbIXnv4vRw?usp=sharing'
                    target='_blank' // buka di tab baru
                    rel='noopener noreferrer' // keamanan & performa
                    className='inline-block mt-8 sm:mt-6 hover:scale-105 transition duration-300 cursor-pointer text-xs font-semibold leading-6 text-white border px-4 py-2 rounded-xl' // Ditambahkan inline-block dan margin top
                  >
                    View Full Gallery <span aria-hidden='true'>→</span>
                  </a>

                  <p className='italic mt-16 text-md leading-6 text-gray-300'>
                    "Aku telah mengakhiri pertandingan yang baik, aku telah
                    mencapai garis akhir dan aku telah memelihara iman."
                  </p>
                  <p className='mt-4 text-sm leading-6 text-gray-300'>
                    [ 2 Timotius 4:7 ]
                  </p>
                </div>
              )}
            </div>
          </div>
        </div> {/* Akhir dari .isolate.relative */}

        {/* Selalu tampilkan footer, atau hanya jika invitationOpen? Saat ini selalu tampil */}
        <footer
          className="mt-auto" // Modifikasi untuk footer
          style={{
            boxShadow: "0 -2px 2px rgba(255, 255, 255, 0.2)",
          }}
        >
          <div className='relative mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8'>
            <div className='flex flex-col sm:flex-row sm:items-end items-center justify-end'>
              <p className='text-center text-sm text-white lg:text-right sm:mx-0 mx-auto sm:mx-0'> {/* mx-auto ditambahkan untuk center di mobile */}
                Crafted with ❤️ by cucu Opung yang paling susah disuruh🥺 —
                KW.
              </p>
            </div>
          </div>
        </footer>
      </div> {/* Akhir dari .bg-gray-900 */}
    </>
  );
};

export default Home;