export const welcome = "Hey, commander. I’m the Doodle Tank intel desk. Ask me about installation, tanks, multiplayer, or supported versions.";

export function replyFor(message: string) {
  const text = message.toLowerCase();
  if (text.includes("install") || text.includes("download")) return "To deploy Doodle Tank, install the latest Minecraft Bedrock 1.21+ build, then follow the **installation wiki**: https://github.com/Dirga36/Doodle-Tank/wiki. Import the behavior and resource packs, activate them in your world, and enable the required experiments.";
  if (text.includes("tank") || text.includes("available") || text.includes("vehicle")) return "The current garage includes the **Strv 103**, **Tiger 1**, and **Centurion Action X**. Each one is craftable and tuned for a different play style.";
  if (text.includes("multi") || text.includes("server") || text.includes("friend")) return "Yes. Doodle Tank is designed for multiplayer Bedrock worlds. Make sure every player has the packs enabled and the host’s experiments match the installation guide.";
  if (text.includes("version") || text.includes("1.21") || text.includes("minecraft")) return "Doodle Tank targets **Minecraft Bedrock 1.21+**. Check the repository releases for the newest compatible build.";
  return "I can brief you on installing the mod, the available tanks, multiplayer setup, or Minecraft Bedrock compatibility. Try one of the quick intel prompts below.";
}
