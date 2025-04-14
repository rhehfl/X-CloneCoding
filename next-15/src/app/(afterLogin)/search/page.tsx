import BackButton from '@/app/(afterLogin)/_component/BackButton';
import SearchForm from '@/app/(afterLogin)/_component/SearchForm';
import SearchResult from '@/app/(afterLogin)/search/_component/SearchResult';
import Tab from '@/app/(afterLogin)/search/_component/Tab';

interface SearchProps {
  searchParams: Promise<{ q: string; f: string; pf: string }>;
}
export default async function Search({ searchParams }: SearchProps) {
  const query = await searchParams;
  return (
    <main className="flex flex-col border-x-1 border-solid border-[#eff3f4]">
      <div className="fixed z-10 flex w-[598px] flex-col bg-[rgb(255,255,255,0.85)] backdrop-blur-md">
        <div className="flex items-center">
          <div className="mb-3 h-[34px]">
            <BackButton />
          </div>
          <div className="w-[500px] px-4">
            <SearchForm q={query.q} />
          </div>
        </div>
        <Tab />
      </div>
      <div className="mt-[110px]">
        <SearchResult searchQuery={query} />
      </div>
    </main>
  );
}
