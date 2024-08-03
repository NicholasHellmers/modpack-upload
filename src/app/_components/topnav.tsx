import { SignInButton,SignedOut, SignedIn, UserButton } from "@clerk/nextjs";

export function TopNav() {
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
                <UserButton />
            </SignedIn>
          </div>
        </nav>
    );
  }