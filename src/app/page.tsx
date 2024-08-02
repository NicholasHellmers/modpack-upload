import Link from "next/link";
import { db } from "~/server/db";

export const dynamic = "force-dynamic"

const mockUrls = [
  "https://utfs.io/f/70b649eb-fbda-4c80-9e89-a9fa421cec5b-cpf5u7.jpg",
  "https://utfs.io/f/7d74030c-b84b-4955-a416-c14d87645ccf-v60it.webp",
  "https://utfs.io/f/bf70e85e-0da8-4935-be14-70b3760bff5c-jc38m3.jpg",
  "https://utfs.io/f/8c3572a2-39e9-4fae-bdc1-9f2ac2aae1b6-klfpmf.jpg",
  "https://utfs.io/f/28fc2d2c-8a34-48fa-b5bf-99eb2562cd06-a6klyj.jpg"
];

const mockImages = mockUrls.map((url, index) => ({
  id: url + 1,
  url,
}));

export default async function HomePage() {

  const images = await db.query.images.findMany({
    orderBy: ( model, { desc } ) => desc(model.id),
  });



  return (
    <main className="">
        <div className="flex flex-wrap gap-4"> 
            {[...images, ...images, ...images].map((image, index) => (
              <div key={ image.id + "-" + index } className="w-48">
                <img src={image.url} alt={image.name} className="w-full h-48 object-cover" />
                <div>{image.name}</div>
              </div>
            ))
          }
        </div>

      Hello (in development)
    </main>
  );
}
