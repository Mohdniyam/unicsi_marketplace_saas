import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="flex flex-col gap-6 p-6">
      <div className="flex items-center justify-between">
        <Skeleton className="h-9 w-48" />
        <Skeleton className="h-10 w-32" />
      </div>
      <div className="rounded-md border border-zinc-200 dark:border-zinc-800">
        <div className="h-12 border-b border-zinc-200 bg-zinc-50/50 px-4 dark:border-zinc-800 dark:bg-zinc-900/50 flex items-center">
          <Skeleton className="h-4 w-full" />
        </div>
        {[...Array(5)].map((_, i) => (
          <div key={i} className="h-16 border-b border-zinc-200 px-4 flex items-center last:border-0 dark:border-zinc-800">
            <Skeleton className="h-4 w-full" />
          </div>
        ))}
      </div>
    </div>
  );
}
