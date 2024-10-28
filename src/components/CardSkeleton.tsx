import { Skeleton } from "@/components/ui/skeleton";

export function SkeletonCard() {
  return (
    <div className="flex flex-col space-y-3">
      <Skeleton className="h-[30px] w-[400px] rounded-xl" />
      <div className="space-y-2">
        <Skeleton className="h-5 w-[400px]" />
        <Skeleton className="h-5 w-[400px]" />
      </div>
    </div>
  );
}
