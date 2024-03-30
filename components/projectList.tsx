import Image from "next/image";

export default function ProjectList() {
  return (
    <section className="project-list">
      <h3 className="text-3xl text-center p-6">Mine prosjekter</h3>

      <a href="https://takknemleg.no/" className="project-card" target="_blank">
        <div>
          <Image
            alt="site icon"
            src="/HeartGenericFlat.png"
            width={150}
            height={1500}
          />
        </div>
        <div>TAKKNEMLEG.NO</div>
      </a>
      <a
        href="https://byga.idasofie.dev/"
        className="project-card"
        target="_blank"
      >
        <div>
          <Image
            alt="icon for the site"
            src="/Bag.png"
            width={150}
            height={1500}
          />
        </div>
        <div className="p-4">BYGA.IDASOFIE.DEV</div>
      </a>
      <a
        href="https://github.com/idasofiegrude/"
        className="project-card"
        target="_blank"
      >
        <Image
          alt="icon for the site"
          src="/github-logo.png"
          width={150}
          height={1500}
        />
        <div className="p-4">GITHUB.COM/IDASOFIEGRUDE</div>
      </a>
    </section>
  );
}
