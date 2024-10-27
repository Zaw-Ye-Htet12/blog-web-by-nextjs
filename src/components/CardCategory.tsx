import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { formatDate } from "@/app/blog/utils";

const CardCategory = ({
  title,
  summary,
  date,
}: {
  title: string;
  summary: string;
  date: string;
}) => {
  return (
    <Card className="w-[300px] h-full shadow-lg">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p>{summary}</p>
      </CardContent>
      <CardFooter>
        <p className="text-gray-500">{formatDate(date)}</p>
      </CardFooter>
    </Card>
  );
};

export default CardCategory;
