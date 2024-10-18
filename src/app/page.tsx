"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Download, Clock, Calendar } from "lucide-react";
import Image from "next/image";

export default function Home() {
  const downloadApk = () => {
    const apkUrl = process.env.NEXT_PUBLIC_APK_URL || "";
    const link = document.createElement("a");
    link.href = apkUrl;
    link.download = "app-release.apk"; // Optional: Set a custom name for the APK
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link); // Clean up the element
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-100 to-green-200 flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <title>Biroba Fresh</title>
        <CardHeader className="text-center">
          <div className="mx-auto bg-green-500 rounded-full   w-20 h-20 flex items-center justify-center mb-4">
            <Image
              src={"/favicon.ico"}
              alt=""
              width={100}
              height={100}
              className="w-full h-full object-cover border rounded-full text-white"
            />
          </div>
          <CardTitle className="text-3xl font-bold text-green-800">
            Biroba Fresh
          </CardTitle>
          <CardDescription className="text-green-600">
            Your Daily Hotel Supplies Partner in Mumbai
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-center text-gray-600">
            Streamline your hotel{"'"}s daily ordering process with Biroba
            Fresh. Download our app now!
          </p>
          <Button className="w-full text-lg py-6" onClick={downloadApk}>
            <Download className="mr-2 h-5 w-5" /> Download APK
          </Button>
          <div className="grid md:grid-cols-2 gap-4 mt-6">
            <div className="flex flex-col items-center text-center">
              <Clock className="h-8 w-8 text-green-500 mb-2" />
              <h3 className="font-semibold">Convinient Ordering</h3>
              <p className="text-sm text-gray-500">
                Order during peak hotel hours
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Calendar className="h-8 w-8 text-green-500 mb-2" />
              <h3 className="font-semibold">Reliable Schedule</h3>
              <p className="text-sm text-gray-500">
                Consistent daily deliveries
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
