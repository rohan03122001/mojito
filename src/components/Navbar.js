"use client";
import { navLinks } from "@/constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {
  useGSAP(() => {
    const navTween = gsap.timeline({
      scrollTrigger: {
        trigger: "nav",
        start: "bottom top",
        toggleActions: "play none none reverse",
      },
    });

    navTween.fromTo(
      "nav",
      { backgroundColor: "transparent", backdropFilter: "none" },
      {
        backgroundColor: "rgba(0,0,0,0.31)",
        backdropFilter: "blur(10px)",
        duration: 1,
        ease: "power1.in",
      }
    );
    
  }, []);

  return (
    <nav>
      <div>
        <Link href="#home" className="flex items-center gap-2">
          <Image src="/images/logo.png" width={50} height={50}></Image>
          <p>Velvet pour</p>
        </Link>
        <ul>
          {navLinks.map((link) => (
            <li key={link.id}>
              <Link href={`#${link.id}`}>{link.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
