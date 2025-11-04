export default function Features() {
  const features = [
    { title: "Craftable Tanks", desc: "Build tanks using custom doodle components." },
    { title: "Unique Stats", desc: "Each tank has its own power, speed, and defense!" },
    { title: "Doodle Art", desc: "A creative, hand-drawn style to spice up your world." },
  ];

  return (
    <section className="features container mx-auto px-6 py-12">
      <h2 className="text-3xl font-semibold text-center">Features</h2>

      <div className="features-grid mt-6 flex flex-wrap justify-center gap-6">
        {features.map((f, i) => (
          <div key={i} className="feature border-2 border-black p-4 w-64 rounded-md bg-white">
            <h3 className="font-semibold">{f.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
