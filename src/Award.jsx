import React, { useState } from "react";

function Award() {
  const awards = [
    {
      name: "Award for the Rejang Language Dictionary Project",
      year: "2021",
      desc: `The Rejang Language Dictionary project preserves and promotes the community's
        linguistic heritage through research, collaboration, and the development of a
        comprehensive dictionary.`,
      link: "https://play.google.com/store/apps/details?id=org.kamusbahasarejang.kamusbahasarejang",
      linkLabel: "View project",
      imgs: ["/Fathins/Fathin.jpg"],
      pdfs: [],
    },
    {
      name: "1st place DIMSA Fair 2021, Social Sciences branch",
      year: "2021",
      desc: `Won 1st place in the 2021 DIMSA Fair, a National Science Olympiad gathering
        participants from all over Indonesia competing in various branches of science.`,
      link: "https://www.youtube.com/watch?v=QNrdu9Tzrmo",
      linkLabel: "Watch video",
      imgs: [
        "https://ik.imagekit.io/9hpbqscxd/SG/image-89.jpg?updatedAt=1705798245623",
      ],
      pdfs: [{ label: "Certificate", url: "/PDF/Dimsa Fair.pdf" }],
    },
    {
      name: "OPSI Group & Opsi Rekayasa",
      year: "2023 & 2024",
      desc: `Won 1st place in OPSI (Olimpiade Penelitian Siswa Indonesia) and Group Opsi Rekayasa competition, representing excellence in research and engineering.`,
      link: "",
      linkLabel: "",
      imgs: [],
      pdfs: [
        { label: "OPSI", url: "/PDF/JUARA_OPSI.pdf" },
        { label: "Group Opsi", url: "/PDF/Juara Group Opsi Rekayasa.pdf" },
      ],
    },
    {
      name: "Olimpiade IPS",
      year: "2021",
      desc: `Participated and achieved recognition in the Social Sciences Olympiad.`,
      link: "",
      linkLabel: "",
      imgs: [],
      pdfs: [{ label: "Certificate", url: "/PDF/OLIMPIADE_IPS.pdf" }],
    },
    {
      name: "Academic Achievement — Top 3 Class",
      year: "2023–2025",
      desc: `Consistently achieved 3rd place in academic ranking across multiple semesters since 8th grade.`,
      link: "",
      linkLabel: "",
      imgs: [],
      pdfs: [
        {
          label: "Kelas 8 Ganjil",
          url: "/PDF/Juara 3 kelas 8 semester Ganjil smp.pdf",
        },
        {
          label: "Kelas 8 Genap",
          url: "/PDF/Juara 3 Kelas 8 Semester Genap smp.pdf",
        },
        {
          label: "Kelas 9 Sem 1",
          url: "/PDF/Peringkat 3 kelas 9 semester 1.pdf",
        },
      ],
    },
    {
      name: "Dicoding Certifications",
      year: "As long there are course",
      desc: `Completed multiple Dicoding courses covering front-end development, JavaScript fundamentals, backend application development, and web programming basics.`,
      link: "",
      linkLabel: "",
      imgs: [],
      pdfs: [
        {
          label: "Front-End Pemula",
          url: "/PDF/sertifikat_Dicoding_FrontEndPemulaFathin.pdf",
        },
        {
          label: "JavaScript Dasar",
          url: "/PDF/Sertifikat_JSDasar_Fathin.pdf",
        },
        {
          label: "Backend App",
          url: "/PDF/Sertifikat_BelajarDasarPemrogramanWeb.pdf",
        },
        { label: "AWS", url: "/PDF/sertifikat_aws_Fathin.pdf" },
      ],
    },
  ];
  const [pdfModal, setPdfModal] = useState(null);

  return (
    <>
      <article id="award" className="mb-8 p-1">
        <h3
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration={1000}
          className="font-bold text-4xl dark:text-white"
        >
          Award
        </h3>
        <p className="text-sm text-stone-400 mt-1 mb-4">
          Acknowledging achievements and milestones.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {awards.map((award) => (
            <div
              key={award.name}
              data-aos="fade-up"
              className="border border-stone-200 dark:border-stone-700 rounded-2xl p-6 flex flex-col gap-4"
            >
              {/* Header — ubah jadi flex row */}
              <div className="flex items-start gap-6 overflow-x-auto">
                {/* Kiri: gambar */}
                {(award.imgs.length > 0 || award.pdfs.length > 0) && (
                  <div className="shrink-0 w-full flex flex-row gap-2 items-stretch  h-[50vw] md:h-[24vw]">
                    {award.imgs.map((img, i) => (
                      <div
                        key={i}
                        className="rounded-xl overflow-hidden border border-stone-200 dark:border-stone-700"
                        style={{
                          height: "100%",
                          width: "100%",
                          flexShrink: 0,
                        }}
                      >
                        <img
                          src={img}
                          alt="award-img"
                          className="w-full h-full object-cover"
                          loading="lazy"
                          draggable="false"
                        />
                      </div>
                    ))}

                    {award.pdfs.map((pdf, i) => (
                      <div
                        key={i}
                        className="rounded-xl overflow-hidden border border-stone-200 dark:border-stone-700"
                        style={{
                          height: "100%",
                          width: "100%",
                          flexShrink: 0,
                        }}
                      >
                        <iframe
                          id="pdf"
                          loading="lazy"
                          className="pdf w-full h-full"
                          scrolling="no"
                          src={pdf.url + "#toolbar=0"}
                          title={pdf.label}
                        />
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Kanan: info */}
              <div className="flex-1 min-w-0 flex flex-col gap-3">
                {/* Trophy + year */}
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 text-xs text-stone-500 dark:text-stone-400 bg-stone-100 dark:bg-stone-800 rounded-full px-3 py-1">
                    <svg className="w-3 h-3" viewBox="0 0 16 16" fill="none">
                      <circle
                        cx="8"
                        cy="8"
                        r="7"
                        stroke="currentColor"
                        strokeWidth="1.2"
                      />
                      <path
                        d="M8 4v4l2.5 2.5"
                        stroke="currentColor"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                      />
                    </svg>
                    {award.year}
                  </span>
                  <div className="shrink-0 w-10 h-10 rounded-xl bg-amber-50 dark:bg-amber-900/30 flex items-center justify-center">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6L12 2z"
                        fill="#BA7517"
                      />
                    </svg>
                  </div>
                </div>

                <h4 className="text-base font-medium dark:text-white leading-snug">
                  {award.name}
                </h4>
                <p className="text-sm text-stone-500 dark:text-stone-400 leading-relaxed">
                  {award.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </article>
    </>
  );
}

export default Award;
