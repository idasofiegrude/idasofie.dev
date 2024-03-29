import Image from "next/image";

export default function Info() {
  return (
    <section className="infobox">
      <div>
        <Image
          alt="profile picture"
          src="/solar.png"
          width={300}
          height={300}
        />
      </div>
      <div className="pl-10">
        <h2 className="text-3xl">Utvikler</h2>
        <h1 className="text-6xl font-bold tracking-tight"> Ida Sofie Grude</h1>
        <h3 className="text-xl">post@idasofie.dev</h3>
      </div>
    </section>
  );
}
