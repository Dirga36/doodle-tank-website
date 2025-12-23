import {
  Card,
  CardAction,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function Features() {
  const features = [
    { title: "Craftable Tanks", desc: "Build tanks using custom doodle components." },
    { title: "Unique Stats", desc: "Each tank has its own power, speed, and defense!" },
  ];

  return (
    <section className="container mx-auto px-6 py-12">
      <h2 className="text-3xl font-semibold text-center">Features</h2>

      <div className="mt-6 flex flex-wrap justify-center gap-6">
        {features.map((f, i) => (
          <div key={i}>
            <Card className="border-2 p-4 w-64 h-32 rounded-md">
              <CardHeader>
                <CardTitle>
                  <h3 className="font-semibold">{f.title}</h3>
                </CardTitle>
                <CardDescription>
                  <p className="mt-2 text-sm text-muted-foreground">{f.desc}</p>
                </CardDescription>
                <CardAction>
                </CardAction>
              </CardHeader>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
}
