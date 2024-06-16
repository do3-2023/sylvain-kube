import type { GetServerSideProps, InferGetServerSidePropsType } from "next";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import "@/styles/globals.css";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/router";
import { ReactElement, useEffect, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import type { NextPageWithLayout } from "./_app";
import Layout from "@/components/layout";
import AlcoholForm from "@/components/forms/alcohol";

type Alcohol = {
  name: string;
  image_url: string;
  description: string;
};

export const getServerSideProps = (async () => {
  let api_url: string =
    process.env.API_URL || "http://api.back.svc.cluster.local";
  const res = await fetch(`${api_url}/api/alcohol`);
  let alcohol: Alcohol = await res.json();

  await new Promise((resolve) => setTimeout(resolve, 300));

  return { props: { alcohol } };
}) satisfies GetServerSideProps<{ alcohol: Alcohol }>;

const Home: NextPageWithLayout<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ alcohol }) => {
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
    <>
      <Tabs defaultValue="random" className="w-[400px]">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="random">Random</TabsTrigger>
          <TabsTrigger value="create">Add</TabsTrigger>
        </TabsList>
        <TabsContent value="random">
          <Card>
            <CardHeader>
              {isRefreshing ? (
                <>
                  <Skeleton className="h-8 w-32" />
                  <Skeleton className="h-12 w-full" />
                </>
              ) : (
                <>
                  <CardTitle>{alcohol.name}</CardTitle>
                  <CardDescription>{alcohol.description}</CardDescription>
                </>
              )}
            </CardHeader>
            <CardContent>
              <div className="flex justify-center">
                {isRefreshing ? (
                  <Skeleton className="h-[300px] w-full" />
                ) : (
                  <img
                    src={alcohol.image_url}
                    alt={alcohol.name}
                    className="h-[300px]"
                  />
                )}
              </div>
            </CardContent>
            <CardFooter>
              <Button onClick={refreshData}>Get Random</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="create">
          <AlcoholForm />
        </TabsContent>
      </Tabs>
    </>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Home;
