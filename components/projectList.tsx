import Image from "next/image";

export default function ProjectList() {
  return (
    <>
    <section className="project-list">
      <h3 className="text-3xl text-center p-6">Mine prosjekter</h3>

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
            height={150}
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
          height={150}
        />
        <div className="p-4">GITHUB.COM/IDASOFIEGRUDE</div>
      </a>
    </section>

    <section className="links-bar">
      <a
        href="https://www.linkedin.com/in/ida-sofie-grude-4a38b5231/"
        className="links-bar-item"
        target="_blank"
      >
        <Image alt="LinkedIn" src="/linkedin.png" width={150} height={150} />
        LinkedIn
      </a>
    </section>
    </>
  );
}
