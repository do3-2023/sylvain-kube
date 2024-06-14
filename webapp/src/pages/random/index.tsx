import type { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import "@/styles/globals.css";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

type Alcohol = {
  name: string;
  image_url: string;
};

export const getServerSideProps = (async () => {
  let api_url: string =
    process.env.API_URL || "http://api.back.svc.cluster.local";
  const res = await fetch(`${api_url}/api/alcohol`);
  let alcohol = await res.json();

  await new Promise((resolve) => setTimeout(resolve, 300));

  return { props: { alcohol } };
}) satisfies GetServerSideProps<{ alcohol: Alcohol }>;

export default function Random({
  alcohol,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const router = useRouter();
  const [isRefreshing, setIsRefreshing] = useState(false);

  const refreshData = () => {
    router.replace(router.asPath);
    setIsRefreshing(true);
  };

  useEffect(() => {
    setIsRefreshing(false);
  }, [alcohol]);

  return (
    <div className="flex min-h-screen w-full flex-col">
      <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Random</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </header>

      <main className="flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4 bg-muted/40 p-4 md:gap-8 md:p-10 justify-center items-center">
        <Card className="w-[350px]">
          <CardHeader>
            {isRefreshing ? (
              <Skeleton className="h-4 h-[25px] w-[250px]" />
            ) : (
              <CardTitle>{alcohol.name}</CardTitle>
            )}
          </CardHeader>
          <CardContent className="flex justify-center items-center">
            {isRefreshing ? (
              <Skeleton className="h-4 h-[300px] w-[250px]" />
            ) : (
              <img
                src={alcohol.image_url}
                alt={alcohol.name}
                className="h-[300px]"
              />
            )}
          </CardContent>
        </Card>

        <Button onClick={refreshData}>Next</Button>
      </main>
    </div>
  );
}
