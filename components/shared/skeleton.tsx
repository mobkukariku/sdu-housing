import { Skeleton } from "../ui/skeleton";

export function SkeletonCard() {
  return (
    <div
      className={
        "bg-light-components-componentLight rounded-lg p-3 pt-5 flex flex-row gap-3"
      }
    >
      <Skeleton className="w-40 h-40 rounded-lg" />
      <div className="flex w-full flex-col gap-2">
        <Skeleton className="h-6 w-3/4" />
        <Skeleton className="h-5 w-1/2" />
        <Skeleton className="h-16 w-full" />
        <Skeleton className="h-5 w-1/4 self-end" />
      </div>
    </div>
  );
}

export function SkeletonProduct() {
  return (
    <div className="flex  flex-row gap-4 mt-3">
      <div className="flex w-full flex-col gap-4">
        <div className="bg-light-components-componentLight rounded-xl p-4">
          <Skeleton className="h-[450px] w-full rounded-xl" />
        </div>
        <div className="bg-light-components-componentLight rounded-xl p-4 pb-8 flex flex-col gap-4">
          <Skeleton className="h-8 w-3/4 rounded" />
          <Skeleton className="h-6 w-1/2 rounded" />
          <div className="w-full flex flex-col items-end">
            <Skeleton className="h-4 w-1/3 rounded" />
            <Skeleton className="h-4 w-2/3 rounded" />
          </div>
        </div>
      </div>
      <div className="w-[350px] flex flex-col gap-4">
        <div className="bg-light-components-componentLight gap-4 text-light-inputs-inputText items-center rounded-xl py-8 flex flex-col">
          <Skeleton className="h-8 w-1/4 rounded" />
          <Skeleton className="h-10 w-1/3 rounded" />
        </div>
        <div className="bg-light-components-componentLight flex p-6 gap-2 rounded-xl">
          <Skeleton className="w-[50px] h-[50px] rounded-full" />
          <div>
            <Skeleton className="h-6 w-3/4 rounded" />
            <Skeleton className="h-4 w-1/2 rounded mt-2" />
          </div>
        </div>
      </div>
    </div>
  );
}

