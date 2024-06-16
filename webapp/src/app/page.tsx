"use client";

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
import { useEffect, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AlcoholForm from "@/components/forms/alcohol";
import { getRandomAlcohol, Alcohol } from "./actions";

export default function Home() {
  const [alcohol, setAlcohol] = useState<Omit<Alcohol, "description"> | null>(
    null
  );
  const [isRefreshing, setIsRefreshing] = useState(false);

  const refreshData = () => {
    setIsRefreshing(true);
    getRandomAlcohol().then((alcohol) => {
      setAlcohol(alcohol);
      setIsRefreshing(false);
    });
  };

  useEffect(() => {
    refreshData();
  }, []);

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
              {!alcohol || isRefreshing ? (
                <Skeleton className="h-8 w-32" />
              ) : (
                <CardTitle>{alcohol.name}</CardTitle>
              )}
            </CardHeader>
            <CardContent>
              <div className="flex justify-center">
                {!alcohol || isRefreshing ? (
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
}
