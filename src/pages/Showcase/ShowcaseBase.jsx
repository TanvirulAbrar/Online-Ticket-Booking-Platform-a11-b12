import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }
  static getDerivedStateFromError(error) {
    return { error };
  }
  componentDidCatch(error, info) {
    console.error("Showcase render error:", error, info);
  }
  render() {
    if (this.state.error) {
      return (
        <div className="p-4 text-red-600">
          Error rendering component: {this.state.error.message}
        </div>
      );
    }
    return this.props.children;
  }
}

const ShowcaseBase = ({ sections, pageNum: initialPage = 1, perPage = 4 }) => {
  const [showTOC, setShowTOC] = useState(false);
  const navigate = useNavigate();
  const { hash } = useLocation();

  const totalPages = Math.max(1, Math.ceil(sections.length / perPage));
  let pageNum = parseInt(initialPage, 10);
  if (Number.isNaN(pageNum) || pageNum < 1) pageNum = 1;
  if (pageNum > totalPages) pageNum = totalPages;

  React.useEffect(() => {
    if (hash) {
      const id = hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: "smooth" }), 50);
      }
    }
  }, [pageNum, hash]);

  const sectionPage = (index) => Math.floor(index / perPage) + 1;
  const startIndex = (pageNum - 1) * perPage;
  const pageSections = sections.slice(startIndex, startIndex + perPage);

  const goToPage = (n) => {
    if (n < 1 || n > totalPages) return;
    navigate(`/showcase/${n}`);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4 flex items-center justify-between">
        <span>Showcase — All Pages Preview</span>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setShowTOC((v) => !v)}
            className="text-sm bg-gray-200 px-3 py-1 rounded"
            aria-pressed={!showTOC}
          >
            {showTOC ? "Hide TOC" : "Show TOC"}
          </button>
        </div>
      </h1>

      <div className="flex gap-6">
        <aside
          className={`w-64 transition-all ${showTOC ? "block" : "hidden"}`}
        >
          <nav className="sticky top-6 border rounded p-4 bg-white">
            <h2 className="font-semibold mb-2">Table of Contents</h2>
            <ul className="space-y-2 text-sm">
              {sections.map(({ id, title }, idx) => {
                const targetPage = sectionPage(idx);
                return (
                  <li key={id}>
                    <a
                      href={`/showcase/${targetPage}#${id}`}
                      className="text-blue-600 hover:underline"
                    >
                      {title}
                    </a>
                  </li>
                );
              })}
            </ul>
            <div className="mt-4 flex gap-2">
              <button
                onClick={() => setShowTOC(false)}
                className="text-xs text-gray-500"
              >
                Hide this
              </button>
              <button
                onClick={() => goToPage(1)}
                className="text-xs text-gray-500"
              >
                First
              </button>
            </div>
          </nav>
        </aside>

        <main className="flex-1 space-y-6">
          <div className="flex items-center justify-between">
            <div className="flex gap-2">
              <button
                disabled={pageNum <= 1}
                onClick={() => goToPage(pageNum - 1)}
                className="px-3 py-1 bg-gray-100 rounded disabled:opacity-50"
              >
                ◀ Prev
              </button>
              <button
                disabled={pageNum >= totalPages}
                onClick={() => goToPage(pageNum + 1)}
                className="px-3 py-1 bg-gray-100 rounded disabled:opacity-50"
              >
                Next ▶
              </button>
            </div>
            <div className="text-sm text-gray-600">
              Page {pageNum} of {totalPages}
            </div>
          </div>

          {pageSections.map(({ id, title, Component }) => (
            <section id={id} key={id} className="border rounded p-6 bg-gray-50">
              <h2 className="text-lg font-semibold mb-4">{title}</h2>
              <div className="bg-white p-4 rounded">
                <ErrorBoundary>
                  <Component />
                </ErrorBoundary>
              </div>
            </section>
          ))}

          <div className="flex items-center justify-between">
            <div className="flex gap-2">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                <button
                  key={p}
                  onClick={() => goToPage(p)}
                  className={`px-2 py-1 rounded ${
                    p === pageNum ? "bg-blue-600 text-white" : "bg-gray-100"
                  }`}
                >
                  {p}
                </button>
              ))}
            </div>
            <div className="text-sm text-gray-500">
              Showing {pageSections.length} items
            </div>
          </div>
        </main>
      </div>

      {!showTOC && (
        <button
          onClick={() => setShowTOC(true)}
          className="fixed bottom-4 right-4 z-50 bg-blue-600 text-white px-3 py-2 rounded shadow-lg"
          aria-label="Show Table of Contents"
        >
          Show TOC
        </button>
      )}
    </div>
  );
};

export default ShowcaseBase;
