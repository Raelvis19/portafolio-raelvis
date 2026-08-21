import { ImageResponse } from "next/og";

export const alt = "Raelvis Paulino — Junior Full-Stack Developer portfolio";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", background: "#f3f0e8", color: "#111820", padding: "62px 68px", fontFamily: "Arial, sans-serif", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", width: 460, height: 460, border: "2px solid rgba(17,24,32,.13)", borderRadius: 999, right: -70, top: -120 }} />
      <div style={{ position: "absolute", width: 330, height: 330, border: "2px solid rgba(17,24,32,.13)", borderRadius: 999, right: 90, bottom: -170 }} />
      <div style={{ width: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ width: 96, height: 96, borderRadius: 22, display: "flex", alignItems: "center", justifyContent: "center", background: "#111820", color: "#f3f0e8", fontSize: 42, fontWeight: 800, letterSpacing: -4 }}>
            RP<span style={{ color: "#ff6b4a" }}>.</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", fontSize: 23, fontWeight: 700, letterSpacing: 1 }}>raelvispaulino.dev</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", width: 820 }}>
          <div style={{ display: "flex", color: "#ff6b4a", fontSize: 22, fontWeight: 800, letterSpacing: 4, textTransform: "uppercase", marginBottom: 24 }}>Portfolio · Dominican Republic</div>
          <div style={{ display: "flex", fontSize: 72, fontWeight: 800, lineHeight: 1.02, letterSpacing: -4 }}>Raelvis Paulino</div>
          <div style={{ display: "flex", fontSize: 38, lineHeight: 1.2, marginTop: 18, color: "#4c555e" }}>Junior Full-Stack Developer</div>
        </div>
        <div style={{ display: "flex", gap: 14 }}>
          {["React", "Next.js", "TypeScript", "Full-Stack"].map((item) => (
            <div key={item} style={{ display: "flex", padding: "11px 16px", border: "2px solid #111820", fontSize: 19, fontWeight: 700 }}>{item}</div>
          ))}
        </div>
      </div>
      <div style={{ position: "absolute", right: 70, top: 168, width: 250, height: 250, display: "flex", alignItems: "center", justifyContent: "center", background: "#ff6b4a", color: "#111820", fontSize: 104, fontWeight: 900, letterSpacing: -10, transform: "rotate(4deg)", boxShadow: "18px 18px 0 rgba(17,24,32,.14)" }}>RP.</div>
    </div>,
    size,
  );
}
