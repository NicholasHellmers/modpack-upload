"use client"

import { SignInButton,SignedOut, SignedIn, UserButton } from "@clerk/nextjs";
import { UploadButton } from "../utils/uploadthing";
import { useRouter } from "next/navigation";

export function TopNav() {
    const router = useRouter();

    return (
      <nav className="flex items-center justify-between p-4 bg-gray-800 text-white">
          <div className="flex items-center gap-4">
            <a href="/" className="text-lg font-bold">
              Modpack-Upload
            </a>
            <a href="/upload">Upload</a>
            <a href="/download">Download</a>
          </div>
          <div>
            <SignedOut>
                <SignInButton />
            </SignedOut>
            <SignedIn>
                <UploadButton 
                    endpoint="imageUploader"
                    onClientUploadComplete={() => {
                        router.refresh();
                    }}/>
                <UserButton />
            </SignedIn>
          </div>
        </nav>
    );
  }