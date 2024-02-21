import {NavbarSearchMovie} from "@/components/navbar/navbar-search-movie";

export default function SearchLayout({children}: {children: React.ReactNode}) {
  return (
    <section>
      <NavbarSearchMovie />
      {children}
    </section>
  );
}
