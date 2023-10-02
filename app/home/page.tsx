import Card from "@/components/Card";
import CardChannel from "@/components/CardChannel";
import CardStories from "@/components/CardStories";
import Hero from "@/components/Hero";
import StartJurney from "@/components/StartJurney";

async function HomePage() {
  return (
    <main className="w-full lg:px-16 px-4  mt-16 lg:mt-24">
      <section className="w-full px-2">
        <Hero />
      </section>
      <CardChannel />
      <section>
        <div className=" py-8 lg:py-16 mt-2">
          <h1 className="text-3xl py-2 lg:text-5xl font-semibold text-primary dark:text-white">
            It&apos;s knowadays or Never{" "}
          </h1>
          <p className="text-base lg:text-lg  font-normal text-primary dark:text-accent ">
            not now but one day you&apos;ll get it
          </p>
        </div>
        <div className=" flex flex-wrap gap-2 justify-center items-center">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </section>
      <CardStories />
      <StartJurney />
    </main>
  );
}

export default HomePage;
