import { Card, CardContent, CardTitle, CardDescription } from "@/components/ui/card";

export default function Features() {
  const features = [
    { title: "🛠️ Craftable Tanks", desc: "Build tanks using custom doodle components." },
    { title: "💣 Unique Stats", desc: "Each tank has its own power, speed, and defense!" },
    { title: "🎨 Doodle Art", desc: "A creative, hand-drawn style to spice up your world." },
  ];

  return (
    <section className="container mx-auto px-6 py-12">
      <h2 className="text-3xl font-semibold">Features</h2>

      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((f, i) => (
          <Card key={i} className="hover:scale-[1.01] transition-transform">
            <CardContent>
              <CardTitle className="text-lg">{f.title}</CardTitle>
              <CardDescription className="mt-2">{f.desc}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
