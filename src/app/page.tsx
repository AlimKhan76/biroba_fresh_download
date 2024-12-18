"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Download, Clock, Calendar } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const downloadApk = () => {
    const apkUrl = process.env.NEXT_PUBLIC_APK_URL || "";
    const link = document.createElement("a");
    link.href = apkUrl;
    link.download = "Biroba-Fresh.apk"; // Optional: Set a custom name for the APK
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link); // Clean up the element
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-green-50 to-white p-4">
      <title>Biroba Fresh</title>
      <Card className="w-full max-w-lg">
        <CardHeader className="space-y-2 text-center">
          <div className="mx-auto w-20 h-20 relative mb-2">
            <Image
              src="/favicon.ico"
              alt="Biroba Fresh Logo"
              fill
              className="object-contain"
            />
          </div>
          <h1 className="text-3xl font-bold tracking-tight text-green-700">
            Biroba Fresh
          </h1>
          <p className="text-green-600">
            Your Daily Hotel Supplies Partner in Mumbai
          </p>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-center text-muted-foreground">
            Streamline your hotel&apos;s daily ordering process with Biroba
            Fresh. Download our app now!
          </p>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="flex flex-col items-center gap-2 p-4 rounded-lg bg-green-50">
              <Clock className="h-8 w-8 text-green-600" />
              <h3 className="font-semibold">Convenient Ordering</h3>
              <p className="text-sm text-center text-muted-foreground">
                Order during peak hotel hours
              </p>
            </div>
            <div className="flex flex-col items-center gap-2 p-4 rounded-lg bg-green-50">
              <Calendar className="h-8 w-8 text-green-600" />
              <h3 className="font-semibold">Reliable Schedule</h3>
              <p className="text-sm text-center text-muted-foreground">
                Consistent daily deliveries
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <Button className="w-full h-12 text-lg gap-2 bg-green-600 hover:bg-green-700">
              <Download className="w-5 h-5" onClick={downloadApk} />
              Download APK
            </Button>

            <p className="text-xs text-center text-muted-foreground">
              By downloading, you agree to our{" "}
              <Link
                href="/terms-and-conditions"
                className="underline underline-offset-2 hover:text-green-600"
              >
                Terms & Conditions
              </Link>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

