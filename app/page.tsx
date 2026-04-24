export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main
          className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <iframe
            src="http://localhost:4000/embed/6ccb077a-6675-4179-a52d-cbad7cefcebf?autoplay=1&muted=1"
            width="640" height="360"
            frameBorder="0"
            allow="autoplay; fullscreen"
            allowFullScreen
        ></iframe>
      </main>
    </div>
  );
}
