import ComponentDemo from "../ComponentsDemo";
import PropsTable from "@/components/Personal/PropsTable";

const LayoutPage = () => {
  const centeredCode = `<div className="mx-auto max-w-4xl px-6 py-10">
  <h1 className="text-2xl font-bold">Focused Article</h1>
  <p className="text-muted">Bounded line length optimizes reading comprehension.</p>
</div>`;

  const sidebarCode = `<div className="grid min-h-64 md:grid-cols-[13rem_1fr]">
  <aside className="border-b p-4 md:border-b-0 md:border-r">
    <nav>Project Nav</nav>
  </aside>
  <main className="p-6">Workspace View</main>
</div>`;

  const dashboardCode = `<div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
  <MetricTile title="API Uptime" value="99.98%" trend="+0.4%" />
  <MetricTile title="Active Teams" value="4,850" trend="+24%" />
  <MetricTile title="P95 Latency" value="42ms" trend="-8ms" />
  <MetricTile title="Pipeline Runs" value="1,240" trend="Stable" />
</div>`;

  const splitCode = `<div className="grid items-center gap-8 lg:grid-cols-2">
  <section className="space-y-3">
    <h3>Interactive Canvas</h3>
    <p>Contextual actions alongside primary configuration views.</p>
  </section>
  <aside className="rounded-lg p-5">Diagnostics Panel</aside>
</div>`;

  const propsData = [
    {
      prop: "max-w-*",
      type: "Container width utility",
      default: "max-w-5xl",
      description: "Constrains content to an ergonomically readable viewport boundary",
    },
    {
      prop: "grid-cols-*",
      type: "Responsive grid utility",
      default: "grid-cols-1",
      description: "Controls column distribution across mobile, tablet, and desktop breakpoints",
    },
    {
      prop: "gap-*",
      type: "Spacing token",
      default: "gap-4",
      description: "Enforces consistent rhythm and breathing room between child elements",
    },
    {
      prop: "px-* / py-*",
      type: "Padding utility",
      default: "p-4 sm:p-6",
      description: "Provides responsive gutters and inset spacing across layout containers",
    },
  ];

  const metricCards = [
    { label: "API Throughput", value: "99.98%", change: "+0.4% uptime" },
    { label: "Active Teams", value: "4,850", change: "+24% this quarter" },
    { label: "P95 Latency", value: "42ms", change: "-8ms reduction" },
    { label: "Pipeline Runs", value: "1,240", change: "99.2% success" },
  ];

  return (
    <div className="mx-auto max-w-5xl space-y-12 p-4 sm:p-6">
      <header className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight">Layout Primitives</h1>
        <p className="text-lg text-(--muted-text-color)">
          Structural patterns and responsive composition utilities for dashboards, shells, and content views.
        </p>
      </header>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Constrained Container</h2>
        <ComponentDemo code={centeredCode}>
          <div className="w-full rounded-lg border border-(--border-color) bg-(--card-bg) px-6 py-8">
            <div className="mx-auto max-w-md space-y-2 text-center">
              <p className="text-sm font-medium text-(--primary-color)">Ergonomic Framing</p>
              <h3 className="text-xl font-semibold">Distraction-Free Workspace</h3>
              <p className="text-sm text-(--muted-text-color)">
                Maintains ideal line lengths and centered alignment so editorial and documentation copy remains effortlessly readable.
              </p>
            </div>
          </div>
        </ComponentDemo>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">App Shell & Sidebar</h2>
        <ComponentDemo code={sidebarCode}>
          <div className="grid min-h-64 w-full overflow-hidden rounded-lg border border-(--border-color) bg-(--card-bg) md:grid-cols-[13rem_1fr]">
            <aside className="border-b border-(--border-color) p-4 md:border-b-0 md:border-r">
              <p className="text-sm font-semibold">Project Hub</p>
              <p className="mt-1 text-xs text-(--muted-text-color)">Platform navigation</p>
              <div className="mt-4 space-y-1">
                <div className="rounded px-2 py-1 text-xs font-medium bg-(--primary-color)/10 text-(--primary-color)">
                  Overview
                </div>
                <div className="rounded px-2 py-1 text-xs text-(--muted-text-color)">
                  Deployments
                </div>
                <div className="rounded px-2 py-1 text-xs text-(--muted-text-color)">
                  Security Logs
                </div>
              </div>
            </aside>
            <main className="space-y-3 p-5">
              <p className="text-sm font-medium text-(--primary-color)">Cluster Management</p>
              <h3 className="text-xl font-semibold">Service Health & Operations</h3>
              <p className="text-sm text-(--muted-text-color)">
                All multi-region clusters are synchronized. The sidebar fluidly wraps above main viewports on handheld screens.
              </p>
            </main>
          </div>
        </ComponentDemo>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Responsive Metric Grid</h2>
        <ComponentDemo code={dashboardCode}>
          <div className="grid w-full gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {metricCards.map((metric) => (
              <div
                key={metric.label}
                className="rounded-lg border border-(--border-color) bg-(--card-bg) p-4"
              >
                <p className="text-xs text-(--muted-text-color)">{metric.label}</p>
                <p className="mt-2 text-2xl font-semibold">{metric.value}</p>
                <p className="mt-2 text-xs font-medium text-(--primary-color)">{metric.change}</p>
              </div>
            ))}
          </div>
        </ComponentDemo>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Asymmetric Split View</h2>
        <ComponentDemo code={splitCode}>
          <div className="grid w-full items-center gap-6 rounded-lg border border-(--border-color) bg-(--card-bg) p-6 lg:grid-cols-2">
            <section className="space-y-2">
              <p className="text-sm font-medium text-(--primary-color)">Primary Workflow</p>
              <h3 className="text-2xl font-semibold">Interactive Canvas</h3>
              <p className="text-sm text-(--muted-text-color)">
                Pair main configuration forms with live previews or contextual sidebars for seamless desktop multitasking.
              </p>
            </section>
            <aside className="rounded-md border border-(--border-color) bg-(--bg-color) p-5">
              <p className="text-sm font-semibold">Real-Time Diagnostics</p>
              <p className="mt-2 text-sm text-(--muted-text-color)">
                Secondary panels display contextual inspector attributes and reflow neatly beneath the canvas on mobile viewports.
              </p>
            </aside>
          </div>
        </ComponentDemo>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">API Reference</h2>
        <PropsTable data={propsData} />
      </section>
    </div>
  );
};

export default LayoutPage;
