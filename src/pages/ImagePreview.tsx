import villaEvening from "@/assets/villa-teak-evening.jpg";
import villaPool from "@/assets/villa-teak-pool.jpg";
import villaTerrace from "@/assets/villa-teak-terrace.jpg";
import villaFacade from "@/assets/villa-teak-facade.jpg";
import deckingTeak from "@/assets/decking-teak.jpg";
import deckingSand from "@/assets/decking-sand.jpg";
import deckingGrey from "@/assets/decking-grey.jpg";
import deckingBrown from "@/assets/decking-brown.jpg";

export default function ImagePreview() {
  const villaImages = [
    { src: villaFacade, name: "Villa Teak Facade (huidige hero)" },
    { src: villaTerrace, name: "Villa Teak Terrace" },
    { src: villaEvening, name: "Villa Teak Evening" },
    { src: villaPool, name: "Villa Teak Pool" },
  ];

  const deckingImages = [
    { src: deckingTeak, name: "Vlonderterras - Teak" },
    { src: deckingSand, name: "Vlonderterras - Sand" },
    { src: deckingGrey, name: "Vlonderterras - Grijs" },
    { src: deckingBrown, name: "Vlonderterras - Bruin" },
  ];

  return (
    <div className="min-h-screen bg-background p-8">
      <h1 className="text-3xl font-serif mb-8 text-foreground">Gegenereerde Afbeeldingen</h1>
      
      <h2 className="text-2xl font-serif mb-6 text-foreground">Villa Afbeeldingen</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {villaImages.map((image, index) => (
          <div key={index} className="space-y-3">
            <img
              src={image.src}
              alt={image.name}
              className="w-full aspect-video object-cover rounded-lg shadow-lg"
            />
            <p className="text-sm text-muted-foreground">{image.name}</p>
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-serif mb-6 text-foreground">Vlonderterras Afbeeldingen</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {deckingImages.map((image, index) => (
          <div key={index} className="space-y-3">
            <img
              src={image.src}
              alt={image.name}
              className="w-full aspect-video object-cover rounded-lg shadow-lg"
            />
            <p className="text-sm text-muted-foreground">{image.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
