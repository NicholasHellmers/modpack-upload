import Link from "next/link";
import { db } from "~/server/db";
import { SignedOut, SignedIn } from "@clerk/nextjs";
import { getMyImages } from "~/server/queries";

export const dynamic = "force-dynamic"

async function Images() {
  const images = await getMyImages();
  return (
    <div className="flex flex-wrap gap-4"> 
      {images.map((image) => (
        <div key={ image.id} className="w-48">
          <img src={image.url} alt={image.name} className="w-full h-48 object-cover" />
          <div>{image.name}</div>
        </div>
      ))
      }
    </div>
  )
}

export default async function HomePage() {
  return (
    <main className="">
      <SignedOut>
        <div>
          Please Sign In
        </div>
      </SignedOut>
      <SignedIn>
        <Images />
      </SignedIn>
    </main>
  );
}
