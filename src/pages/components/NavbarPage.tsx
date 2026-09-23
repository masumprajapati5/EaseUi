import { Navbar } from "@/components/navbar";
import PropsTable from "@/components/Personal/PropsTable";
import ComponentDemo from "../ComponentsDemo";

const NavbarPage = () => {
  const variantsCode = `import { Navbar } from "@/components/navbar";

<Navbar variant="light" />
<Navbar variant="dark" />
<Navbar variant="primary" />
<Navbar variant="glass" />`;

  const sizesCode = `<div className="space-y-4">
  <Navbar variant="light" size="sm" />
  <Navbar variant="light" size="default" />
  <Navbar variant="light" size="lg" />
  <Navbar variant="light" size="xl" />
</div>`;

  const animationCode = `<Navbar
  variant="primary"
  animation="slideUp"
  hoverAnimation="shadowPulse"
/>`;

  const customCode = `<Navbar
  variant="light"
  size="lg"
  animation="fadeIn"
  hoverAnimation="scale"
  className="max-w-3xl mx-auto"
/>`;

  const propsData = [
    {
      prop: "variant",
      type: '"dark" | "light" | "primary" | "glass"',
      default: '"light"',
      description: "Visual style of the navigation bar",
    },
    {
      prop: "size",
      type: '"sm" | "default" | "lg" | "xl"',
      default: '"default"',
      description: "Controls the height of the navigation bar",
    },
    {
      prop: "animation",
      type: '"fadeIn" | "scaleIn" | "slideUp" | "bounceIn" | "none"',
      default: '"fadeIn"',
      description: "Entrance animation applied when the navbar mounts",
    },
    {
      prop: "hoverAnimation",
      type: '"jiggle" | "scale" | "bounce" | "shadowPulse" | "none"',
      default: '"none"',
      description: "Animation applied when the navbar is hovered",
    },
    {
      prop: "className",
      type: "string",
      default: "undefined",
      description: "Additional classes for custom layout and styling",
    },
  ];

  return (
    <div className="mx-auto max-w-5xl space-y-12 p-4 sm:p-6">
      <header className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight">Navbar</h1>
        <p className="text-lg text-(--muted-text-color)">
          Responsive navigation bars with flexible styles, sizing, and motion.
        </p>
      </header>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Visual variants</h2>
        <ComponentDemo code={variantsCode}>
          <div className="flex w-full flex-col gap-4">
            <Navbar variant="light" animation="none" />
            <Navbar variant="dark" animation="none" />
            <Navbar variant="primary" animation="none" />
            <Navbar variant="glass" animation="none" />
          </div>
        </ComponentDemo>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Navbar sizes</h2>
        <ComponentDemo code={sizesCode}>
          <div className="flex w-full flex-col gap-4">
            <Navbar variant="light" size="sm" animation="none" />
            <Navbar variant="light" size="default" animation="none" />
            <Navbar variant="light" size="lg" animation="none" />
            <Navbar variant="light" size="xl" animation="none" />
          </div>
        </ComponentDemo>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Animated navbar</h2>
        <ComponentDemo code={animationCode}>
          <div className="w-full">
            <Navbar
              variant="primary"
              animation="slideUp"
              hoverAnimation="shadowPulse"
            />
          </div>
        </ComponentDemo>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Custom layout</h2>
        <ComponentDemo code={customCode}>
          <div className="w-full">
            <Navbar
              variant="light"
              size="lg"
              animation="none"
              hoverAnimation="scale"
              className="mx-auto max-w-3xl"
            />
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

export default NavbarPage;
