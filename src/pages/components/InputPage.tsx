import ComponentDemo from "@/pages/ComponentsDemo";
import PropsTable from "@/components/Personal/PropsTable";
import { Input } from "@/components";
import { PasswordInput } from "@/components/Input/PasswordInput";
import {
  AnimatedInput,
  FloatingLabelInput,
  InputWithIcon,
  NumberInput,
  Textarea,
} from "@/components/Input";
import { AtSign, Search, User } from "lucide-react";

const InputPage = () => {
  const variantsCode = `<div className="flex flex-col gap-4">
  <Input label="Full Name" placeholder="Enter your name" />
  <Input label="Email" type="email" placeholder="you@example.com" />
  <Input label="Username" error="That username is already taken" />
  <Input label="Invite Code" hint="You can find this in your invitation email" />
  <Input label="Disabled" placeholder="Unavailable input" disabled />
</div>`;

  const specializedCode = `import { Search } from "lucide-react";

<AnimatedInput label="Animated" placeholder="Focus me" />
<FloatingLabelInput label="Project name" placeholder="Enter a name" />
<InputWithIcon label="Search" icon={<Search />} />
<PasswordInput label="Password" />
<NumberInput label="Quantity" min={1} max={10} />
<Textarea label="Description" placeholder="Tell us more" />`;

  const formCode = `<div className="grid gap-4 sm:grid-cols-2">
  <Input label="First name" placeholder="Ada" />
  <Input label="Last name" placeholder="Lovelace" />
  <InputWithIcon
    label="Email address"
    type="email"
    icon={<AtSign />}
  />
  <InputWithIcon
    label="Profile handle"
    icon={<User />}
    iconPosition="right"
  />
  <Textarea
    label="About you"
    placeholder="Write a short introduction"
    className="min-h-28 sm:col-span-2"
  />
</div>`;

  const propsData = [
    {
      prop: "placeholder",
      type: "string",
      default: "undefined",
      description: "Placeholder text inside the input",
    },
    {
      prop: "type",
      type: "string",
      default: `"text"`,
      description: "Input type (text, password, email, etc.)",
    },
    {
      prop: "value",
      type: "string",
      default: "undefined",
      description: "Value of the input",
    },
    {
      prop: "onChange",
      type: "(e: React.ChangeEvent<HTMLInputElement>) => void",
      default: "undefined",
      description: "Change event handler",
    },
  ];

  return (
    <div className="mx-auto max-w-4xl space-y-12 p-4 sm:p-6">
      <header className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight">Input</h1>
        <p className="text-lg text-(--muted-text-color)">
          Flexible fields for forms, search, credentials, and structured data.
        </p>
      </header>

      <section className="flex flex-col gap-10 space-y-4">
        <h2 className="text-2xl font-semibold">Examples</h2>

        <div className="space-y-2">
          <h3 className="text-lg font-medium">States and sizes</h3>
          <ComponentDemo code={variantsCode}>
            <div className="flex flex-col gap-4">
              <Input
                label="Full Name"
                placeholder="Enter your name"
                size="sm"
              />
              <Input
                label="Email"
                type="email"
                placeholder="Enter your email"
                // variant="success"
                size="md"
              />
              <Input
                label="Email"
                type="email"
                placeholder="Enter your email"
                // variant="success"
                size="lg"
              />
              <Input
                label="Username"
                error="That username is already taken"
                placeholder="Choose a username"
              />
              <Input
                label="Invite Code"
                hint="You can find this in your invitation email"
                placeholder="Enter invite code"
              />
              <Input label="Disabled" placeholder="Unavailable input" disabled />
            </div>
          </ComponentDemo>
        </div>

        <div className="space-y-2">
          <h3 className="text-lg font-medium">Specialized inputs</h3>
          <ComponentDemo code={specializedCode}>
            <div className="flex flex-col gap-4">
              <AnimatedInput label="Animated" placeholder="Focus me" />
              <FloatingLabelInput label="Project name" placeholder="Enter a name" />
              <InputWithIcon label="Search" icon={<Search />} placeholder="Search projects" />
              <InputWithIcon
                label="Profile handle"
                icon={<User />}
                iconPosition="right"
                placeholder="@username"
              />
              <PasswordInput label="Password" placeholder="Enter password" />
              <NumberInput label="Quantity" min={1} max={10} onChange={(value) => console.log(value)} />
              <Textarea label="Description" placeholder="Tell us more" />
            </div>
          </ComponentDemo>
        </div>

        <div className="space-y-2">
          <h3 className="text-lg font-medium">Responsive profile form</h3>
          <ComponentDemo code={formCode}>
            <div className="grid w-full gap-4 sm:grid-cols-2">
              <Input label="First name" placeholder="Ada" />
              <Input label="Last name" placeholder="Lovelace" />
              <InputWithIcon
                label="Email address"
                type="email"
                icon={<AtSign />}
                placeholder="ada@example.com"
              />
              <InputWithIcon
                label="Profile handle"
                icon={<User />}
                iconPosition="right"
                placeholder="@ada"
              />
              <Textarea
                label="About you"
                placeholder="Write a short introduction"
                className="min-h-28 sm:col-span-2"
              />
            </div>
          </ComponentDemo>
        </div>
      </section>

      <section className="space-y-2">
        <h2 className="text-2xl font-semibold">API Reference</h2>
        <PropsTable data={propsData} />
      </section>
    </div>
  );
};

export default InputPage;
