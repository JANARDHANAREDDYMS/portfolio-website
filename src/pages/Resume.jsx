function Resume() {
  return (
    <main className="min-h-screen px-4 py-6 sm:px-6 lg:px-8" style={{ backgroundColor: '#F3EDE5' }}>
      <div className="mx-auto flex min-h-[calc(100vh-3rem)] max-w-5xl flex-col gap-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <a
            href="/"
            className="inline-flex items-center gap-2 rounded-full border-2 border-gray-900 px-4 py-2 text-sm font-semibold text-gray-900 transition-all duration-200 hover:bg-gray-900 hover:text-[#F3EDE5]"
          >
            Back Home
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border-2 border-gray-900 bg-gray-900 px-4 py-2 text-sm font-semibold text-[#F3EDE5] transition-all duration-200 hover:bg-transparent hover:text-gray-900"
          >
            Open PDF
          </a>
        </div>

        <section className="min-h-0 flex-1 overflow-hidden border-2 border-gray-900 bg-white" style={{ borderRadius: '8px' }}>
          <iframe
            src="/resume.pdf#toolbar=1&navpanes=0"
            title="Janardhan Reddy Resume"
            className="h-full min-h-[calc(100vh-7.5rem)] w-full"
          />
        </section>
      </div>
    </main>
  );
}

export default Resume;
