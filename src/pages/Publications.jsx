const publications = [
  {
    title: 'Crowd Control and Monitoring using Deep Learning',
    year: '2024',
    url: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=GbKiOeUAAAAJ&citation_for_view=GbKiOeUAAAAJ:u5HHmVD_uO8C',
  },
];

function Publications() {
  return (
    <section id="publications" className="px-4 py-12 md:px-16 lg:px-24 lg:py-20" style={{ backgroundColor: '#F3EDE5' }}>
      <div className="mx-auto max-w-7xl">
        <div className="mb-14">
          <p className="mb-2 text-xs tracking-widest text-gray-500 uppercase">Publications</p>
          <h2 className="text-3xl font-semibold md:text-4xl">
            <span className="text-gray-900">Research </span>
            <span style={{ color: '#4A90D9' }}>&amp; Publications</span>
          </h2>
        </div>
        <ul className="divide-y divide-gray-300 border-y border-gray-300">
          {publications.map((publication) => (
            <li key={publication.title} className="flex flex-col gap-2 py-5 sm:flex-row sm:items-baseline sm:justify-between">
              <a
                href={publication.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg font-semibold text-gray-900 transition-colors hover:text-blue-700"
              >
                {publication.title}
              </a>
              <span className="shrink-0 text-sm text-gray-500">{publication.year}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Publications;
