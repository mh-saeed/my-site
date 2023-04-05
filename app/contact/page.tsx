"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

const Contact = () => {
  const router = useRouter();

  return (
    <>
      <div>Contact</div>

      <Link href={`/`}>Home</Link>
      <br />

      <Link href={`/about`}>About</Link>
      <br />

      <button
        onClick={() => {
          router.push(`/`);
        }}
      >
        Home
      </button>
    </>
  );
};

export default Contact;
