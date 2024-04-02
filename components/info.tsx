import Image from "next/image";

export default function Info() {
  return (
    <div>
      <section className="infobox">
        <div>
          <Image alt="Splash Image" src="/solar.png" width={300} height={300} />
        </div>
        <div className="pl-10">
          <h2 className="text-4xl font-bold text-white/75">Utvikler</h2>
          <h1 className="text-7xl font-bold tracking-tight ">
            {" "}
            Ida Sofie Grude
          </h1>
          <h3 className="text-3xl font-bold  text-white/75">
            post@idasofie.dev
          </h3>
        </div>
      </section>
    </div>
  );
}
