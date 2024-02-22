import {SearchNavbar} from "@/components/search/search-navbar";

export default function SearchLayout({children}: {children: React.ReactNode}) {
  return (
    <section>
      <SearchNavbar />

      {children}
    </section>
  );
}
