import Tabuleiro from "@/components/Tabuleiro";

export default function Home() {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100vh" }}>
      <Tabuleiro />
    </div>
  );
}
