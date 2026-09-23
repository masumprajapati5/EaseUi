import ComponentDemo from "../ComponentsDemo";
import PropsTable from "@/components/Personal/PropsTable";
import { Tooltip } from "@/components/Tooltip/Tooltip";
import {
  Command,
  Search,
  Share2,
  SlidersHorizontal,
  ShieldCheck,
  Zap,
  Info,
} from "lucide-react";

const TooltipPage = () => {
  const placementsCode = `import { Tooltip } from "@/components/Tooltip/Tooltip";

// Directional placements with built-in hotkey badges
<Tooltip content="Command Search" hotkey="⌘K" side="top">
  <button>Search</button>
</Tooltip>

<Tooltip content="Share project link" hotkey="⌥S" side="right">
  <button>Share</button>
</Tooltip>

<Tooltip content="Adjust preferences" hotkey="⌘," side="bottom">
  <button>Settings</button>
</Tooltip>

<Tooltip content="Filter active items" hotkey="⇧F" side="left">
  <button>Filters</button>
</Tooltip>`;

  const variantsCode = `// Four distinct visual styling variants
<Tooltip content="Default system card" variant="default">
  <button>Default</button>
</Tooltip>

<Tooltip content="High contrast badge" variant="inverted">
  <button>Inverted</button>
</Tooltip>

<Tooltip content="Frosted glass overlay" variant="glass">
  <button>Glass</button>
</Tooltip>

<Tooltip content="Primary accent surface" variant="primary">
  <button>Accent</button>
</Tooltip>`;

  const richContentCode = `// Rich formatting & contextual previews
<Tooltip
  side="top"
  variant="glass"
  content={
    <div className="flex flex-col gap-0.5 text-left py-0.5">
      <span className="font-semibold text-(--text-color)">Alex Rivera</span>
      <span className="text-[11px] text-(--muted-text-color)">Online · Reviewing PR #412</span>
    </div>
  }
>
  <button className="flex items-center gap-2">...</button>
</Tooltip>`;

  const propsData = [
    {
      prop: "content",
      type: "ReactNode",
      default: "-",
      description: "Text or custom React node rendered inside the floating tooltip overlay",
    },
    {
      prop: "side",
      type: '"top" | "right" | "bottom" | "left"',
      default: '"top"',
      description: "Preferred directional anchor edge relative to the trigger element",
    },
    {
      prop: "variant",
      type: '"default" | "inverted" | "glass" | "primary"',
      default: '"default"',
      description: "Visual appearance style and backdrop surface treatment",
    },
    {
      prop: "hotkey",
      type: "string",
      default: "undefined",
      description: "Optional keyboard shortcut rendered as an elegant badge (e.g. '⌘K')",
    },
    {
      prop: "hasArrow",
      type: "boolean",
      default: "false",
      description: "Whether to display a directional pointer arrow pointing to the trigger",
    },
    {
      prop: "children",
      type: "ReactNode",
      default: "-",
      description: "The interactive target element that activates the tooltip upon hover or focus",
    },
  ];

  return (
    <div className="mx-auto max-w-4xl space-y-12 p-4 sm:p-6">
      <header className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight">Tooltip</h1>
        <p className="text-lg text-(--muted-text-color)">
          Contextual micro-surfaces featuring directional anchoring, keyboard shortcut badges, and smooth entrance physics.
        </p>
      </header>

      {/* Directional Placements & Hotkeys */}
      <section className="space-y-4">
        <div>
          <h2 className="text-2xl font-semibold">Placements & Hotkeys</h2>
          <p className="mt-1 text-sm text-(--muted-text-color)">
            Position tooltips along any cardinal side with built-in hotkey badges for rapid keyboard navigation.
          </p>
        </div>
        <ComponentDemo code={placementsCode}>
          <div className="flex flex-wrap items-center justify-center gap-6 py-4">
            <Tooltip content="Global search" hotkey="⌘K" side="top">
              <button
                type="button"
                className="inline-flex items-center gap-2 rounded-lg border border-(--border-color) bg-(--card-bg) px-4 py-2.5 text-sm font-medium text-(--text-color) shadow-xs transition-colors hover:border-(--primary-color)"
              >
                <Search size={16} />
                Search
              </button>
            </Tooltip>

            <Tooltip content="Share invite link" hotkey="⌥S" side="right">
              <button
                type="button"
                className="inline-flex items-center gap-2 rounded-lg border border-(--border-color) bg-(--card-bg) px-4 py-2.5 text-sm font-medium text-(--text-color) shadow-xs transition-colors hover:border-(--primary-color)"
              >
                <Share2 size={16} />
                Share
              </button>
            </Tooltip>

            <Tooltip content="Workspace settings" hotkey="⌘," side="bottom">
              <button
                type="button"
                className="inline-flex items-center gap-2 rounded-lg border border-(--border-color) bg-(--card-bg) px-4 py-2.5 text-sm font-medium text-(--text-color) shadow-xs transition-colors hover:border-(--primary-color)"
              >
                <SlidersHorizontal size={16} />
                Settings
              </button>
            </Tooltip>

            <Tooltip content="Toggle command palette" hotkey="⌘P" side="left">
              <button
                type="button"
                className="inline-flex items-center gap-2 rounded-lg border border-(--border-color) bg-(--card-bg) px-4 py-2.5 text-sm font-medium text-(--text-color) shadow-xs transition-colors hover:border-(--primary-color)"
              >
                <Command size={16} />
                Command
              </button>
            </Tooltip>
          </div>
        </ComponentDemo>
      </section>

      {/* Surface Variants */}
      <section className="space-y-4">
        <div>
          <h2 className="text-2xl font-semibold">Surface Themes</h2>
          <p className="mt-1 text-sm text-(--muted-text-color)">
            Choose from subtle cards, high-contrast inverted pills, glassmorphism, or primary accents.
          </p>
        </div>
        <ComponentDemo code={variantsCode}>
          <div className="flex flex-wrap items-center justify-center gap-5 py-4">
            <Tooltip content="Clean card boundary" variant="default" side="top">
              <button
                type="button"
                className="rounded-lg border border-(--border-color) bg-(--card-bg) px-4 py-2 text-sm font-medium text-(--text-color)"
              >
                Default
              </button>
            </Tooltip>

            <Tooltip content="High contrast badge" variant="inverted" side="top">
              <button
                type="button"
                className="rounded-lg border border-(--border-color) bg-(--card-bg) px-4 py-2 text-sm font-medium text-(--text-color)"
              >
                Inverted
              </button>
            </Tooltip>

            <Tooltip content="Translucent backdrop blur" variant="glass" side="top">
              <button
                type="button"
                className="rounded-lg border border-(--border-color) bg-(--card-bg) px-4 py-2 text-sm font-medium text-(--text-color)"
              >
                Glassmorphic
              </button>
            </Tooltip>

            <Tooltip content="Brand accent highlight" variant="primary" side="top">
              <button
                type="button"
                className="rounded-lg bg-(--primary-color) px-4 py-2 text-sm font-medium text-white shadow-xs"
              >
                Primary
              </button>
            </Tooltip>
          </div>
        </ComponentDemo>
      </section>

      {/* Rich Previews */}
      <section className="space-y-4">
        <div>
          <h2 className="text-2xl font-semibold">Rich Contextual Previews</h2>
          <p className="mt-1 text-sm text-(--muted-text-color)">
            Embed structured data, avatar indicators, and security credentials inside floating surfaces.
          </p>
        </div>
        <ComponentDemo code={richContentCode}>
          <div className="flex flex-wrap items-center justify-center gap-6 py-4">
            {/* Live presence avatar */}
            <Tooltip
              side="top"
              variant="glass"
              content={
                <div className="flex flex-col gap-0.5 py-0.5 text-left">
                  <span className="font-semibold text-(--text-color)">Alex Rivera</span>
                  <span className="text-[11px] text-(--muted-text-color)">
                    Online · Reviewing PR #412
                  </span>
                </div>
              }
            >
              <div className="flex cursor-pointer items-center gap-3 rounded-full border border-(--border-color) bg-(--card-bg) py-1.5 pl-2 pr-4 shadow-xs transition-colors hover:border-(--primary-color)">
                <div className="relative flex h-7 w-7 items-center justify-center rounded-full bg-(--primary-color) text-xs font-semibold text-white">
                  PM
                </div>
                <span className="text-xs font-medium text-(--text-color)">Collaborator</span>
              </div>
            </Tooltip>

            {/* Pipeline deployer */}
            <Tooltip
              side="top"
              variant="default"
              hotkey="⌘ + ⇧ + D"
              content="Instant deployment to production"
            >
              <button
                type="button"
                className="inline-flex items-center gap-2 rounded-lg bg-(--primary-color) px-4 py-2 text-sm font-medium text-white shadow-xs transition-transform hover:-translate-y-0.5"
              >
                <Zap size={16} />
                Deploy Staging
              </button>
            </Tooltip>

            {/* Cryptographic security info */}
            <Tooltip
              side="top"
              variant="inverted"
              content={
                <span className="flex items-center gap-1.5 py-0.5">
                  <ShieldCheck size={14} className="text-(--primary-color)" />
                  <span>256-bit Hardware Encrypted</span>
                </span>
              }
            >
              <button
                type="button"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-(--border-color) text-(--muted-text-color) transition-colors hover:text-(--primary-color)"
                aria-label="Security credentials"
              >
                <Info size={18} />
              </button>
            </Tooltip>
          </div>
        </ComponentDemo>
      </section>

      {/* API Reference */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">API Reference</h2>
        <PropsTable data={propsData} />
      </section>
    </div>
  );
};

export default TooltipPage;
